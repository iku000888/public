(ns resume.css
  (:require [garden.core :as gc]))


(defmacro style-sheet-str []
  (gc/css [:p {:font-size "16px"}]
          [:h2 {:color "red"}]))
