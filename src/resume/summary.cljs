(ns resume.summary

  (:require-macros [resume.macros :refer [p]]))

(def text
  [:div #_{:style
           (str/join
            ";"
            ["margin-right: 1em"
             "margin-top: 6em"])}
   [:h2 "Summary:"]
   [:p (p I am an engineer with a passion for
          Clojure/ClojureScript looking for new challenges)]])
