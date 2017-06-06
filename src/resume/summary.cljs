(ns resume.summary

  (:require-macros [resume.macros :refer [p]]))

(def text
  [:div
   [:h2 "Summary:"]
   [:p (p I am an engineer with a strong passion for
          Clojure/ClojureScript looking for my next new challenge)]])
