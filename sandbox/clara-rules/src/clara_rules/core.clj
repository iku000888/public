(ns clara-rules.core
  (:require [clara.rules :as cr :refer [defrule
                                        fire-rules
                                        insert
                                        mk-session
                                        ]]))

(defrecord Num  [number])

(defrecord Str [string])

(defrule is-important
  "Find important support requests."
  [SupportRequest (= :high level)]
  =>
  (println "High support requested!"))

(defrule notify-client-rep
  "Find the client representative and send a notification of a support request."
  [SupportRequest (= ?client client)]
  [ClientRepresentative (= ?client client) (= ?name name)] ; Join via the ?client binding.
  =>
  (println "Notify" ?name "that"  ?client "has a new support request!"))







;; Run the rules! We can just use Clojure's threading macro to wire things up.
(let [happened (atom [])]
  (-> (mk-session)
      (insert (->ClientRepresentative "Alice" "Acme")
              (->SupportRequest "Acme" :high))
      (fire-rules)))
