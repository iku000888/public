(ns resume.core
  (:require [clojure.string :as str]
            [crate.core :as c]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.style :as gs]
            [resume.education :as ed]
            [resume.skills :as skills]
            [resume.summary :as summary]
            [resume.talks :as talks]
            [weasel.repl :as repl]))

(def css-link
  (c/html [:link {:rel "stylesheet"
                  :href "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.1/tufte.min.css"}]))

(def app-div (.getElementById js/document "app"))

(def head [:h2 "Ikuru Leif Kanuma"])

(def email [:div "kanumaiku@gmail.com"])

;;Initializing
#_(.appendChild js/document.head css-link)
#_(re-render)
(defn re-render []
  ;;For refreshing the page content without reloading
  (gd/removeChildren app-div)
  (doseq [c [head
             email

             summary/text

             skills/heading
             skills/listing

             ed/heading
             ed/listing

             talks/heading
             talks/listing]]
    (.appendChild app-div (c/html c)))
  (doseq [s   [skills/listen-toggle
               ed/listen-toggle]] (s)))

(re-render)





(enable-console-print!)

(println "Hello world!")

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
