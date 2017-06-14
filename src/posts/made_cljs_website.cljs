(ns posts.made-cljs-website
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))
(defpost made-cljs-website "2017-06-14"
  [:div
   [:h2 "Technical Details of this Site"]
   (resume.macros/p
    So here it is, I made this site!!)]
  ;;content-h
  )
