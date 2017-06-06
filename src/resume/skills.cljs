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
               [:p (p I am absolutely in love with it to the extent that I feel no need to look into any
                      other programming language. I do hope my next challenge will involve writing
                      Clojure code.)

                ;;TODO: move this to project section
                #_(p Built a web service with a team of 3 during May 2016 - May "2017."
                     This was my first fulltime Clojure project and it is gaining customers "rapidly."
                     The story made it onto the Official Clojure Website)]]

              [:li "Web Development"
               [:p (p I use Clojure for web development in my current "work," and I have
                      experience on the relavant tech "(HTML/DOM/HTTP/DataBase)" and associated
                      Clojure libraries.)]]

              [:li "Emacs"
               [:p (p Emacs+paredit+cider+cljr-refactor complements the experience of writing Clojure
                      code exellently. It is just way too fun to move the "()'s" around)]]


              [:li "Bilingual (English/Japanese)"
               [:ul
                [:li (p "English:" Raised by my American "mother," attended
                        High School and College in the U.S.)]
                [:li (p "Japanese:" Born and raised in "Japan," speak at work)]]]

              [:li "Attic ( > 1 year since I had anything to do with, but can refresh)"
               [:ul [:li "Robotics/Embedded Systems/Controls during Undergrad"
                     [:ul
                      [:li "Senior Thesis: Make a Robotic arm scrape off a pre-defined depth of enamel"]
                      [:li "Mechatronics: Build a ping pong ball shooting Robot from scratch and compete. My team got 2nd place"]
                      [:li "Took 2 Grad Courses, Kinematics of Robotic Arm and Advanced Controls"]]
                     ;;TODO
                     ]]]])

(defn listen-toggle []
  (toggle/state-text "skill-h")
  (toggle/visibility "skill-l")
  (ge/listen (.getElementById js/document "skill-h")
             (.-CLICK ge/EventType)
             (fn [e]
               (toggle/state-text "skill-h")
               (toggle/visibility "skill-l"))))
