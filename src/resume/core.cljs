(ns resume.core
  (:require [crate.core :as c]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.style :as gs]
            [resume.skills :as skills]
            [resume.summary :as summary]
            [weasel.repl :as repl]
            [clojure.string :as str]))

(def css-link
  (c/html [:link {:rel "stylesheet"
                  :href "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.1/tufte.min.css"}]))

(def app-div (.getElementById js/document "app"))

(def head [:h2 "Ikuru Leif Kanuma"])

(def email [:div "kanumaiku@gmail.com"])

#_(def skills [:h3 {:id "skill-h"} "- Skills"])
#_(def skills-list [:ul {:id "skill-l"}
                    [:li "Clojure"]
                    [:li "ClojureScript"]])


(def education [:h3 "+ Education"])

(def content
  [head
   email

   summary/text

   skills/heading
   skills/list

   education])

(defn toggle-expansion-state-text [el-id]
  (let [el (.getElementById js/document el-id)
        original-text (gd/getTextContent el)
        new-text (if (= (first original-text) "+")
                   (str/replace original-text "+" "-")
                   (str/replace original-text "-" "+"))]
    (gd/setTextContent el new-text)))

(defn toggle-visibility [el-id]
  (let [el (.getElementById js/document el-id)]
    (if (gs/isElementShown el)
      (gs/setElementShown el false)
      (gs/setElementShown el true))))


;;Initializing
(.appendChild js/document.head css-link)

(defn render []
  (doseq [c content]
    (.appendChild app-div (c/html c))))

(defn re-render []
  ;;For refreshing the page content without reloading
  (gd/removeChildren app-div)
  (render)
  )

(re-render)

(ge/listen (.getElementById js/document "skill-h")
           (.-CLICK ge/EventType)
           (fn [e]
             (toggle-expansion-state-text "skill-h")
             (toggle-visibility "skill-l")))



(enable-console-print!)

(println "Hello world!")

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
