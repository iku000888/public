(ns resume.work
  (:require [goog.events :as ge]
            [resume.toggle-expand :as toggle])
  (:require-macros [resume.macros :refer [p]]))

(def heading [:h3 {:id "work-h"} "- Employment History"])
(def listing [:ul {:id "work-l"}

              [:li [:a {:href "https://cstap.com/"}
                    "Cybozu Startups, Inc"]
               [:p (p May 2016 -)]
               [:p (p Full Time Clojure/ClojureScript Development)]]


              [:li [:a {:href "http://worldwide.tcs.com/worldwide/jp/ja/corporate/Pages/default.aspx"}
                    "Tata Consultancy Services, Japan"]
               [:p "September 2014 - April 2016"]
               [:p (p Technical Document Translation "/ Testing /" Interpreter)]]
              ])

(defn listen-toggle []
  (toggle/state-text "work-h")
  (toggle/visibility "work-l")
  (ge/listen (.getElementById js/document "work-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "work-h")
               (toggle/visibility "work-l"))))
