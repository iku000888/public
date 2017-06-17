(ns template.layout
  (:require [goog.dom.classlist :as gc]
            [goog.events :as ge]
            [goog.events.EventType :as et]
            [goog.uri.utils :as uri]))

(defn layout [content]
  (js/console.log "fooo!!!!")
  [:div
   [:div {:id "menu-div"
          :class "menu"}
    [:span.logo (str '(-> Ikuru learn forget))]

    [:span.menu-item
     [:a {:href (str (uri/getPath js/location.href) "?show=resume")} "About"]]
    [:span.menu-item
     [:a {:href (str (uri/getPath js/location.href) "?show=projects")} "Projects"]]
    [:span.menu-item
     [:a {:href (str (uri/getPath js/location.href) "?show=writings")} "Writings"]]
    [:span.menu-item
     [:a {:href (str (uri/getPath js/location.href) "?show=web-presence")} "Other Web Presence"]]]
   content])

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
