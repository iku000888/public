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
            [resume.work :as work]
            [weasel.repl :as repl]
            [template.layout :as layout])
  (:require-macros [resume.css :refer [style-sheet-str]]))

(defn set-style! []
  (aset js/document.head
        "innerHTML"
        (str "<style>"
             (style-sheet-str)
             "</style>")))

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
  (set-style!)
  (doseq [c [layout/layout

             head
             email

             summary/text

             skills/heading
             skills/listing

             ed/heading
             ed/listing

             talks/heading
             talks/listing

             work/heading
             work/listing

             ;;Employment history + projects + awards
             ;;Opensource work
             ;;Picture
             ;;Make the margin of li ul look nicer
             ]]
    (.appendChild app-div (c/html c)))
  (doseq [s [layout/decorate-menu-items
             skills/listen-toggle
             ed/listen-toggle
             talks/listen-toggle
             work/listen-toggle]] (s)))

(re-render)

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
