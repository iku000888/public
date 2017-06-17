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
   [:.menu-item {:margin-left "1em"}]
   (at-media {:max-width "750px"}
             [:.logo {:font-family "monospace"
                      :font-size "1.5em"
                      :display "block"}]
             [:.menu-item {:display "block"
                           :margin-top ".5em"}])
   [:.menu-item.mouse-overed {:font-size "1.8em"
                              :cursor "pointer"}]
   ;;TODO: limit scope
   [:h3 {:cursor "pointer"}]

   #_[:p {:width "90em"}]
   [:th {:border-bottom "solid"}]
   [:td {:border-bottom "dotted"}]
   [:table {:border-spacing "1.5em"}]
   [:code.boxed
    {:border-bottom "solid"
     :border-top "solid"
     :background-color "#EEEEEE"
     :border-left "solid"
     :border-right "solid"
     :border-radius ".3em"
     :padding ".5em .5em .5em .5em"}]

   [:code.fragment
    {:border-bottom "solid"
     :border-top "solid"
     :background-color "#EEEEEE"
     :border-left "solid"
     :border-right "solid"
     :border-radius ".3em"
     :margin-left ".3em"
     :padding ".5em .5em .5em .5em"}]
   (at-media {:max-width "750px"}
             [:code.fragment
              {:display "block"}])

   ;;TODO:responsive
   [:.proj-content
    {:border ["groove"]
     ;;:width "40%"
     ;;:display ["inline"]
     ;;:position "relative"
     :border-radius "1em"
     :padding-bottom "1em"
     :padding-right "1em"
     :padding-left "1em"
     :margin-bottom "1em"}]

   (at-media {:max-width "750px"}
             [:.proj-content
              {:border ["groove"]
                                        ;:width "100%"
               :border-radius "1em"
               :padding-bottom "0"
               :padding-right "0"
               :padding-left "0"
               :margin-bottom "1em"}])
   [:li {:margin-top "1em"}]))
