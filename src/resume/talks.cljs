(ns resume.talks
  (:require [goog.events :as ge]
            [resume.toggle-expand :as toggle])
  (:require-macros [resume.macros :refer [p]]))

(def heading [:h3 {:id "talk-h"} "- Talks"])
(def listing [:div {:id "talks"}

              ;;TODO: Make this wrap
              [:p (p Starting "2017," I started attending meetups and giving talks on occasions
                     because I wanted to step up my game as a software engineer.
                     "(i.e. I want more people to know me and vice versa"
                     I find giving talks is a great way to re-inforce my understanding of a topic
                     and plan on giving as many talks as possible) ]
              [:table
               ;;TODO: Make the table bordered
               ;;TODO: Check exact dates
               ;;TODO: Link to the event page when poss.
               ;;BONUS: Make the table searchable/sortable for giggs
               [:thead [:th "Talk Title(English)"] [:th "Event Name"] [:th "When"] [:th "Slides"]]

               [:tr [:td "Making Thumbnails"] [:td "Shibuya Java"] [:td "2017-01-29"]]
               [:tr [:td "Webforms Made Easy"] [:td "Lisp Meetup"] [:td "2017-02-21"]]
               [:tr [:td "Fighting Shift_JIS encoding"] [:td "Nishi Shinjuku Clojure"] [:td "2017-03-22"]]
               [:tr [:td "Arachne Unweaved"] [:td "JJUG CCC Spring 2017"] [:td "2017-05-20"]]
               ]])

(defn listen-toggle []
  (toggle/state-text "talk-h")
  (toggle/visibility "talks")
  (ge/listen (.getElementById js/document "talk-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "talk-h")
               (toggle/visibility "talks"))))
