(ns fiddles.reagent-sample
  (:require [reagent.core :as r])
  (:import [goog.i18n DateTimeFormat DateTimeParse]
           goog.ui.InputDatePicker))

(defn render-date-picker []
  (let [pat "yyyy-MM-dd"
        fmt (DateTimeFormat. pat)
        psr (DateTimeParse. pat)
        idp (InputDatePicker. fmt psr)]
    (.decorate idp (.getElementById js/document "date-picker"))))

(defn date-picker-input []
  (r/create-class {:render (fn [_] [:input {:id "date-picker"}])
                   :component-did-mount render-date-picker}))

(defonce app
  (r/atom {:message "Hello world!"
           :color "red"
           :date "none"}))

(defn render [state]
  [:div
   "Enter 'date' to test a datepicker" [:hr]
   [:strong {:style {:color (:color @state)}}
    (:message @state)]
   [:div
    "pick your color "
    [:input {:on-change
             (fn [e]
               (swap! app #(-> (assoc % :color (-> e .-target .-value))
                               (assoc :message (-> e .-target .-value)))))}]]
   (when (= (:message @state) "date")
     [:div
      "pick your date"
      [date-picker-input]
      (:date @state)])])

(r/render [render app]
          (.getElementById js/document "app"))
