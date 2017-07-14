(ns fiddles.core
  (:require
   [goog.object :as o]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [clojure.browser.repl :as repl]
   [clojure.string :as str])
  (:import [goog.i18n DateTimeFormat DateTimeParse]
           goog.ui.InputDatePicker))

#_(defn render-date-picker []
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

#_(defonce app
    (r/atom {:message "Hello world!"
             :color "red"
             :date "none"}))

#_(defn date-picker-input []
    (r/create-class {:render (fn [_] [:input {:id "date-picker"}])
                     :component-did-mount render-date-picker}))

#_(defn render [state]
    [:div
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

(defn mount-external-js [value]
  (js/postscribe
   "#fiddle-script"
   (str "<script src="
        "out/" value ".js"
        "></script>"))
  (o/set js/location "hash" value))

(defn re-frame-main []
  [:div
   "This is an re-frame app"
   [:hr]
   (pr-str
    @(rf/subscribe [:test-sub]))

   [:hr]
   [:select {:on-change
             #(let [value (-> % .-target .-value)]
                (when (not= "run a js" value)
                  (mount-external-js value)))}
    [:option "run a js"]
    [:option "reagent"]
    [:option "raspo"]]
   [:div#fiddle-script]])

(comment
  (let [first-script
        (-> (.getElementsByTagName js/document "script")
            (aget  0)
            .-parentNode)
        (doto (.createElement js/document "script")
          (o/set "src" "out/raspo.js")
          (o/set "async" true))
        (-> (.getElementsByTagName js/document "script")
            (aget  0))

        script ]
    (.appendChild js/document.body script)))

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

(o/set js/window "onload"
       #(mount-external-js (str/replace js/location.hash "#" "")))

(comment
  (rf/dispatch [::update "afsdfa"]))
