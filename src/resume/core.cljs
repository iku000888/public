(ns resume.core
  (:require [clojure.string :as str]
            [crate.core :as c]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.net.XhrIo :as xhr]
            [goog.style :as gs]
            [goog.uri.utils :as uri]
            [resume.education :as ed]
            [resume.resume :as resume]
            [resume.skills :as skills]
            [resume.summary :as summary]
            [resume.talks :as talks]
            [resume.work :as work]
            [template.layout :as layout]
            [weasel.repl :as repl])
  (:require-macros [resume.css :refer [style-sheet-str]]))

(defn set-style! []
  (aset js/document.head
        "innerHTML"
        (str
         "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
         "<style>" (style-sheet-str) "</style>")))

(def css-link
  (c/html [:link {:rel "stylesheet"
                  :href "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.1/tufte.min.css"}]))

(def app-div (.getElementById js/document "app"))


;;Initializing
#_(.appendChild js/document.head css-link)
#_(re-render)
(defn re-render [[content decorator]]
  ;;For refreshing the page content without reloading
  (gd/removeChildren app-div)
  (set-style!)
  (.appendChild app-div (-> content
                            layout/layout
                            c/html))
  (when decorator
    (decorator)))

(defn parse-query-data []
  ;;TODO: implement routing!
  #_(xhr/send  (str (uri/getPath js/location.href) "out/resume.js")
               #(js/console.log (-> % .-target .getResponseText)))
  (let [query-map (atom {})]
    (uri/parseQueryData (uri/getQueryData js/location.href)
                        ;;Statefully parse
                        (fn [k v] (swap! query-map #(assoc % (keyword k) v))))
    @query-map))

#_(re-render resume/content)

(if-let [show (:show (parse-query-data))]
  (re-render (get {"resume" [resume/content
                             #(doseq [s [layout/decorate-menu-items
                                         resume/decorate-parts]] (s))]
                   "writings" [[:span "fasdfajsd"]]
                   "web-presence" [[:span "Under Construction"]]}
                  show))
  (re-render [resume/content
              #(doseq [s [layout/decorate-menu-items
                          resume/decorate-parts]] (s))]))

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
