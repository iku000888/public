(ns template.layout
  (:require [goog.events :as ge]
            [goog.events.EventType :as et]
            [goog.dom.classlist :as gc]))

(defn layout [content]
  [:div
   [:div {:id "menu-div"
          :class "menu"}
    [:span.logo (str '(-> Ikuru learn forget))]

    [:span.menu-item "About"]
    [:span.menu-item "Writings"]
    [:span.menu-item "Other Web Presence"]]
   content
   ])

(defn decorate-menu-items []
  (doseq [el (array-seq (.getElementsByClassName js/document "menu-item"))]
    (ge/listen el
               et/MOUSEOVER
               #(gc/add el "mouse-overed"))
    (ge/listen el
               et/MOUSELEAVE
               #(gc/remove el "mouse-overed"))))


#_(doseq [el (array-seq (.getElementsByClassName js/document "menu-item"))]
    (gc/add el "mouse-overed"))
