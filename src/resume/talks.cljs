(ns resume.talks
  (:require [goog.events :as ge]
            [resume.toggle-expand :as toggle])
  (:require-macros [resume.macros :refer [p]]))

(def heading [:h3 {:id "talk-h"} "- Talks"])
(def listing [:div {:id "talks"}

              ;;TODO: Make this wrap
              [:p "I enjoy giving talks about Clojure/ClojureScript"
               #_(p In "2017," I started giving talks at meetups/conferences
                    because I wanted to step up my game as a software engineer.
                    "(i.e. I want more people to know me and vice versa"
                    I find giving talks is a great way to re-inforce my understanding of a topic
                    and plan on giving as many talks as possible) ]
              [:table
               ;;TODO: Make the table bordered
               ;;TODO: Check exact dates
               ;;TODO: Link to the event page when poss.
               ;;BONUS: Make the table searchable/sortable for giggs
               [:thead [:th "Talk Title(English)"] [:th "Event Name"] [:th "When"]]

               [:tr [:td [:a {:href "https://www.slideshare.net/IkuruKanuma/arachne-unweaved-jp"}
                          "Arachne Unweaved"]]
                [:td "JJUG CCC Spring 2017"]
                [:td "2017-05-20"]]

               [:tr [:td [:a {:href "https://www.slideshare.net/IkuruKanuma/clojure-73130145"}
                          "Fighting Shift_JIS encoding"]]
                [:td "Nishi Shinjuku Clojure"]
                [:td "2017-03-22"]]

               [:tr [:td [:a {:href "https://www.slideshare.net/IkuruKanuma/web-forms-made-easy-with-formative"} "Webforms Made Easy"]]
                [:td "Lisp Meetup"]
                [:td "2017-02-21"]]

               [:tr [:td [:a {:href "https://www.slideshare.net/IkuruKanuma/ss-71495253"}
                          "Making Thumbnails"]]
                [:td "Shibuya Java"]
                [:td "2017-01-29"]]

               ]])

(defn listen-toggle []
  (toggle/state-text "talk-h")
  (toggle/visibility "talks")
  (ge/listen (.getElementById js/document "talk-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "talk-h")
               (toggle/visibility "talks"))))
