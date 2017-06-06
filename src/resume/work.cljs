(ns resume.work
  (:require [goog.events :as ge]
            [resume.toggle-expand :as toggle])
  (:require-macros [resume.macros :refer [p]]))

(def heading [:h3 {:id "work-h"} "- Employment"])
(def listing [:ul {:id "work-l"}
              [:li "Tata Consultancy Services, Japan"
               [:p "September 2014 - April 2016"]
               [:p (p Hired as a fresher. Worked for an airline industry client
                      on their reservation system renewal. Translated technical documents
                      and facilitated communication between non English speaking Clients
                      and Non Japanese Speaking team members.)]]
              [:li "Cybozu Startups, Inc"
               [:p "May 2016 - "]

               ;;TODO: add link
               [:p (p May 2016 - May "2017"
                      Built a web service with a team of 3 during
                      This was my first fulltime Clojure project and it is gaining customers "rapidly."
                      The story made it onto the Official Clojure Website)]
               [:p (p May 2017 - Writing Kintone extensions/customizations with ClojureScript)]]])

(defn listen-toggle []
  (toggle/state-text "work-h")
  (toggle/visibility "work-l")
  (ge/listen (.getElementById js/document "work-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "work-h")
               (toggle/visibility "work-l"))))
