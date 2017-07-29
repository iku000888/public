(ns  clara-rules.join
  (:require [clara.rules :refer [defrule fire-rules insert insert! mk-session query defquery]]))

(defrecord TypeA [attr-a join-key])

(defrecord TypeB [attr-b join-key])

(defrecord TypeC [attr-a attr-b join-key])

(defrule Join
  [TypeA (= ?jk-a join-key) (= ?a attr-a)]
  [TypeB (= join-key ?jk-a) (= ?b attr-b)]
  =>
  (insert! (->TypeC ?a ?b ?jk-a)))

(defrule Print
  [?result <- TypeC] => (println ?result))

;;Queries
(defquery find-all-As
  [];;parameters
  [?a <- TypeA];;Matching condition
  )
(defquery find-As-by-attr
  [:?value]
  [?a <- TypeA (= attr-a ?value)])

(-> (mk-session)
    (insert (->TypeA "a1" :foo)
            (->TypeA "a2" :bar)
            (->TypeA "a3" :baz)
            (->TypeB "b1" :foo)
            (->TypeB "b2" :bar)
            (->TypeB "b3" :baz)
            (->TypeB "b4" :qux))
    (fire-rules)
    (query find-As-by-attr :?value "a1"))
