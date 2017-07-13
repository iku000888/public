(ns posts.gave-cljs-talk
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))

(defpost gave-cljs-talk
  {:disp-title "Gave a short talk about ClojureScript"
   :ts "2017-06-25"}
  [:div
   [:h2 "Gave a short talk about ClojureScript"]
   [:p.blog-post
    (resume.macros/p
     I attended a small Javascript study group (I think there were 6 or 7 people)
     The first half of the session was dedicated to individual focus "time,"
     which I spent on putting this site on github.io. An bour and a half into the studytime
     came the time for the talks. Before my talk)


    " " [:a {:href "https://twitter.com/mqtsuo02"} "Matsuo Obu"] " "
    (resume.macros/p
     talked about ReactVR with a domo.
     It was a pretty impressive piece of technology and apparantly there are a lot of samples
     to play around "with," so it might be fun to translate the samples using ClojureScript.
     My talk was about the strengths of ClojureScript.)

    " " [:a {:href "https://www.slideshare.net/IkuruKanuma/welcome-to-clojurescript"} "(slides)"] " "

    (resume.macros/p
     The main motivation of making the talk was to convince JavaScript people to check out ClojureScript.
     I think the feedback was generally "positive," and I feel like giving this same talk at other JavaScript
     meetups would be effective towards increasing the adoption of ClojureScript in Japan.
     (There are only a handful of companies right now.))]])
