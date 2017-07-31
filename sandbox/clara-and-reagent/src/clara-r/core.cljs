(ns clara-r.core
  (:require-macros [clara.rules :refer
                    [defrule defsession defquery]])
  (:require [reagent.core :as r]
            [clara.rules :as cr]))

(defrecord Rec [a b])

(defrecord A+B [num])

(defrule a+b
  [Rec (= ?a a) (= ?b b)]
  =>
  (cr/insert! (->A+B (+ ?a ?b))))

(defsession sess 'clara-r.core)

(defquery find-Recs
  []
  [?rec <- Rec])

(defquery find-a-and-b
  []
  [Rec (= ?a a) (= ?b b)])

(defquery find-sums
  []
  [A+B (= ?num num)])

(defonce state (r/atom sess))

(defn main [app-state]
  (let [val-atom (r/atom {})]
    (fn []
      [:div
       "input A" [:input
                  {:id "value-a"
                   :on-change
                   (fn [e]
                     (swap! val-atom
                            #(assoc %
                                    :val-a
                                    (-> e .-target .-value))))}]
       "input B" [:input
                  {:id "value-b"
                   :on-change
                   (fn [e]
                     (swap! val-atom
                            #(assoc %
                                    :val-b
                                    (-> e .-target .-value))))}]
       [:button
        {:on-click
         #(swap! app-state
                 (fn [s]
                   (-> s
                       (cr/insert (->Rec (:val-a @val-atom)
                                         (:val-b @val-atom)))
                       (cr/fire-rules))))}
        "add a new fact!!!!"]


       [:h2 "Inserted facts:"]
       [:table.pure-table
        [:thead [:tr [:th "a"] [:th "b"]]]
        (->> (cr/query @app-state find-a-and-b)
             (map (fn [{:keys [?a ?b]}]
                    [:tr [:td ?a] [:td ?b]]))
             (into [:tbody]))]

       [:h2 "Derived facts:"]
       (->> (cr/query @app-state find-sums)
            (map (fn [{:keys [?num]}]
                   [:div {:style {:margnin "10em"}} ?num]))
            (into [:div]))

       [:h2 "Query result debug info"]
       [:div
        [:h3 "Recs"]
        (pr-str
         (cr/query @app-state find-Recs))]
       [:div
        [:h3 "just return the fields"]
        (pr-str
         (cr/query @app-state find-a-and-b))]
       [:div
        [:h3 "get the added result"]
        (pr-str
         (cr/query @app-state find-sums))]

       ])))

(r/render [main state]
          (.getElementById js/document "app"))

(comment
  (build-once)
  (clean-builds))
