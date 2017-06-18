(ns resume.core
  (:require [crate.core :as c]
            [goog.dom :as gd]
            [goog.uri.utils :as uri]
            [posts.toc :as posts]
            [projects.listing :as proj]
            [resume.resume :as resume]
            [resume.utils :as ru]
            [template.layout :as layout]
            #_[weasel.repl :as repl]
            [web-presence.presence :as presence])
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
(defn re-render [[content decorator]]
  ;;For refreshing the page content without reloading
  (gd/removeChildren app-div)
  (set-style!)
  (.appendChild app-div (-> content
                            layout/layout
                            c/html))
  (when decorator
    (decorator)))

(let [q (ru/parse-query-data)]
  (if-let [show (:show q)]
    (re-render (get {"resume" [resume/content
                               #(doseq [s [layout/decorate-menu-items
                                           resume/decorate-parts]] (s))]
                     "writings" [posts/toc
                                 #(do (layout/decorate-menu-items)
                                      (posts/decorate-toc q))]
                     "projects" [proj/projects
                                 layout/decorate-menu-items]
                     "web-presence" [presence/content
                                     layout/decorate-menu-items]}
                    show))
    (re-render [resume/content
                #(doseq [s [layout/decorate-menu-items
                            resume/decorate-parts]] (s))])))

#_(when-not (repl/alive?)
    (repl/connect "ws://localhost:9001"))
