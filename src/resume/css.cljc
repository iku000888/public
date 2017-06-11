(ns resume.css
  (:require [garden.core :as gc]))


(defmacro style-sheet-str
  "Made as an macro to compile the css string at compile time"
  []
  (gc/css
   [:.menu {;:color "blue"
            :border-bottom "dashed"}]
   [:.logo {:font-family "monospace"
            :font-size "2.5em"}]
   [:.menu-item {:margin-left "1em"}]
   [:.menu-item.mouse-overed {:font-size "1.8em"
                              :cursor "pointer"}]
   [:th {:border-bottom "solid"}]
   [:td {:border-bottom "dotted"}]
   [:table {:border-spacing "1.5em"}]))
