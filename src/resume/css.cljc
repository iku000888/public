(ns resume.css
  (:require [garden.core :as gc]
            [garden.stylesheet :refer [at-media]]))



(defmacro style-sheet-str
  "Made as an macro to compile the css string at compile time"
  []
  (gc/css

   [:.menu {;:color "blue"
            :border-bottom "dashed"}]
   [:.logo {:font-family "monospace"
            :font-size "2.5em"
            :display "inline"}]
   (at-media {:max-width "750px"}
             [:.logo {:font-family "monospace"
                      :font-size "1.5em"
                      :display "block"}])
   [:.menu-item {:margin-left "1em"}]
   [:.menu-item.mouse-overed {:font-size "1.8em"
                              :cursor "pointer"}]
   [:h3 {:cursor "pointer"}]
   #_[:p {:width "90em"}]
   [:th {:border-bottom "solid"}]
   [:td {:border-bottom "dotted"}]
   [:table {:border-spacing "1.5em"}]

   [:li {:margin-top "1em"}]))
