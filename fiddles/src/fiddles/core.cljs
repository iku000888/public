(ns fiddles.core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [clojure.browser.repl :as repl])
  (:import [goog.i18n DateTimeFormat DateTimeParse]
           goog.ui.InputDatePicker))

(defn render-date-picker []
  (let [pat "yyyy-MM-dd"
        fmt (DateTimeFormat. pat)
        psr (DateTimeParse. pat)
        idp (InputDatePicker. fmt psr)]
    (.decorate idp (.getElementById js/document "date-picker"))))

#_(render-date-picker)
;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world! duh hhh")

(comment
  "fiddle"
  (swap! app #(assoc % :message "date")))

(defonce app
  (r/atom {:message "Hello world!"
           :color "red"
           :date "none"}))

(defn date-picker-input []
  (r/create-class {:render (fn [_] [:input {:id "date-picker"}])
                   :component-did-mount render-date-picker}))

(defn render [state]
  [:div
   [:strong {:style {:color (:color @state)}}
    (:message @state)]
   [:div
    "pick your color "
    [:input {:on-change
             (fn [e]
               (swap! app #(assoc % :color (-> e .-target .-value))))
             }]]
   (when (= (:message @state) "date")
     [:div
      "pick your date"
      [date-picker-input]
      #_[:input {:id "date-picker"
                 #_:on-change
                 #_(fn [e]
                     (swap! app #(assoc % :color (-> e .-target .-value))))
                 }]
      (:date @state)])
   [:hr]])

#_(r/render [render app]
            (.getElementById js/document "app"))

(defn re-frame-main []
  [:div
   "This is an reagent app"
   [:hr]
   (pr-str
    @(rf/subscribe [:test-sub])
    )])

(rf/reg-sub
 :test-sub
 (fn [db [_]]
   (:message db)))

(rf/reg-event-db
 ::init
 (fn [_ _]
   {:message "hello, world!"}))

(rf/reg-event-db
 ::update
 ;;[rf/debug] optional interceptors
 (fn [db [_ new-val]]
   (assoc db :message new-val)))

(rf/dispatch [::init])
(r/render [re-frame-main]
          (.getElementById js/document "app"))

(comment
  (rf/dispatch [::update "afsdfa"]))
