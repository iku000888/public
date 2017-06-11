(ns resume.core
  (:require [clojure.string :as str]
            [crate.core :as c]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.net.XhrIo :as xhr]
            [goog.style :as gs]
            [goog.uri.utils :as uri]
            [resume.education :as ed]
            [resume.skills :as skills]
            [resume.summary :as summary]
            [resume.talks :as talks]
            [resume.work :as work]
            [template.layout :as layout]
            [weasel.repl :as repl])
  (:require-macros [resume.css :refer [style-sheet-str]]))

(defn get-current-url []
  ;;TODO: implement routing!
  (xhr/send  (str (uri/getPath js/location.href) "out/resume.js")
             #(js/console.log (-> % .-target .getResponseText)))
  (uri/parseQueryData (uri/getQueryData js/location.href)
                      ;;Statefully parse
                      #(js/console.log (str %1 "-" %2))))

(defn set-style! []
  (aset js/document.head
        "innerHTML"
        (str "<style>"
             (style-sheet-str)
             "</style>"))
  )

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
  (.appendChild app-div
                (-> [:div head
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
                     ]
                    layout/layout
                    c/html))
  (doseq [s [layout/decorate-menu-items
             skills/listen-toggle
             ed/listen-toggle
             talks/listen-toggle
             work/listen-toggle]] (s)))

(re-render)

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
