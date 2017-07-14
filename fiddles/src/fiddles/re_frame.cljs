(ns fiddles.re-frame
  (:require [re-frame.core :as rf]
            [reagent.core :as r]))

(defn re-frame-main []
  [:div
   "This is an re-frame app"
   [:hr]
   (repeat
    (or @(rf/subscribe [:times]) 1)
    [:div {:style {:margin "2em"}} @(rf/subscribe [:test-sub])])

   [:br]
   [:button {:on-click #(rf/dispatch [::inc])}
    "click me!!!"]
   [:div#fiddle-script]])

(rf/reg-sub
 :test-sub
 (fn [db [_]]
   (:message db)))

(rf/reg-sub
 :times
 (fn [db [_]]
   (:times db)))

(rf/reg-event-db
 ::init
 (fn [_ _]
   {:message "hello, world!"
    :times 1}))

(rf/reg-event-db
 ::update
 ;;[rf/debug] optional interceptors
 (fn [db [_ new-val]]
   (assoc db :message new-val)))

(rf/reg-event-db
 ::inc
 (fn [db [_ new-val]]
   (update db :times inc)))

(rf/dispatch [::init])
(r/render [re-frame-main]
          (.getElementById js/document "app"))
