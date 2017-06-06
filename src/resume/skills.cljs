(ns resume.skills
  (:require [clojure.string :as str]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.style :as gs]
            [resume.toggle-expand :as toggle])
  (:require-macros [resume.macros :refer [p]]))
(def agagaga "popopo")
(def heading [:h3 {:id "skill-h"} "- Skills"])
(def listing [:ul {:id "skill-l"}
              [:li "Clojure/ClojureScript"
               [:p (p Built a web service with a team of 3 during May 2016 - May "2017."
                      This was my first fulltime Clojure project and it is gaining customers "rapidly."
                      The story made it onto the Official Clojure Website)]]
              [:li "ClojureScript"]])

(defn listen-toggle []
  (toggle/state-text "skill-h")
  (toggle/visibility "skill-l")
  (ge/listen (.getElementById js/document "skill-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "skill-h")
               (toggle/visibility "skill-l"))))
