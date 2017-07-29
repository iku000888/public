(ns clara-rules.shopping
  (:require [clara.rules :as cr :refer [defrule
                                        fire-rules
                                        insert
                                        insert!
                                        mk-session]]))

(def discounted-items #{:fish :pants})

(def tax-rates {:food 0.1 :cloth 0.2 :alcohol 0.3})

(defrecord MyMoney [amt])

(defrecord Discount [item rate])

(defrecord Tax [category rate])

(defrecord Item [id price category])

(defrecord DiscountedItem [discounted-price category])

(defrecord TaxedItem [final-price])

(defrule DiscountItem
  [Item (= ?id id) (= ?category category) (= ?price price) (= ?discounted (some? (discounted-items ?id)))]
  =>
  (println "Item is" ?id)
  (println "Original Price is" ?price)
  (println "Discounted item?" ?discounted)
  (insert! (->DiscountedItem (if ?discounted (* ?price 0.9) ?price) ?category)))

(defrule TaxItem
  [DiscountedItem (= ?category category) (= ?discounted-price discounted-price)]
  =>
  (println "Discounted Price" ?discounted-price)
  (println "Tax rate is " (?category tax-rates))
  (insert! (->TaxedItem (+ ?discounted-price (* ?discounted-price (?category tax-rates))))))

(defrule EnoughMoney
  [MyMoney (= ?amt amt)]
  [TaxedItem (= ?final-price final-price) (> ?amt final-price)]
  =>
  (println "Final price:" ?final-price)
  (println "You have enough money!"))

(defrule NotEnoughMoney
  [MyMoney (= ?amt amt)]
  [TaxedItem (= ?final-price final-price) (not (> ?amt final-price))]
  =>
  (println "Final price:" ?final-price)
  (println "You do not have enough money!"))

(-> (mk-session)
    (insert (->MyMoney 199) (->Item :fish 200 :food))
    (fire-rules))
;;Item is :fish
;;Original Price is 200
;;Discounted item? true
;;Discounted Price 180.0
;;Tax rate is  0.1
;;Final price: 198.0
;;You have enough money!


(-> (mk-session)
    (insert (->MyMoney 197) (->Item :fish 200 :food))
    (fire-rules))
;; Item is :fish
;; Original Price is 200
;; Discounted item? true
;; Discounted Price 180.0
;; Tax rate is  0.1
;; Final price: 198.0
;; You do not have enough money!


(-> (mk-session)
    (insert (->MyMoney 215) (->Item :pants 200 :cloth))
    (fire-rules))
;; Item is :pants
;; Original Price is 200
;; Discounted item? true
;; Discounted Price 180.0
;; Tax rate is  0.2
;; Final price: 216.0
;; You do not have enough money!

(-> (mk-session)
    (insert (->MyMoney 217) (->Item :pants 200 :cloth))
    (fire-rules))
;; Item is :pants
;; Original Price is 200
;; Discounted item? true
;; Discounted Price 180.0
;; Tax rate is  0.2
;; Final price: 216.0
;; You have enough money!

(-> (mk-session)
    (insert (->MyMoney 521) (->Item :beer 400 :alcohol))
    (fire-rules))
;; Item is :beer
;; Original Price is 400
;; Discounted item? false
;; Discounted Price 400
;; Tax rate is  0.3
;; Final price: 520.0
;; You have enough money!

(-> (mk-session)
    (insert (->MyMoney 519) (->Item :beer 400 :alcohol))
    (fire-rules))
;; Item is :beer
;; Original Price is 400
;; Discounted item? false
;; Discounted Price 400
;; Tax rate is  0.3
;; Final price: 520.0
;; You do not have enough money!

;;Forgot to insert MyMoney, what happens?
(-> (mk-session)
    (insert (->Item :beer 400 :alcohol))
    (fire-rules))
;; Item is :beer
;; Original Price is 400
;; Discounted item? false
;; Discounted Price 400
;; Tax rate is  0.3
