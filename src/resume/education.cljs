(ns resume.education
  (:require [resume.toggle-expand :as toggle]
            [goog.events :as ge]))

(def heading [:h3 {:id "ed-h"} "- Education"])

(def listing [:ul {:id "ed-l"}
              [:li "B.S Robotics Engineering at University of California, Santa Cruz"]
              [:li "2011-2014 (Finished in 3 years)"]
              [:li "GPA:3.73/Cum Laude/Highest Honor in Major"]])

(defn listen-toggle []
  (toggle/state-text "ed-h")
  (toggle/visibility "ed-l")
  (ge/listen (.getElementById js/document "ed-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "ed-h")
               (toggle/visibility "ed-l"))))
