(ns posts.clojure-dot-tokyo4
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))

(defpost clojure-tokyo-4
  {:disp-title "Attended clojure.tokyo #4"
   :ts "2017-07-09"}
  [:div
   [:h2 "Attended clojure.tokyo #4"]

   [:p.blog-post
    [:a {:href "https://www.meetup.com/clojure-tokyo/events/238952073/"}
     "clojure.tokyo"]
    (resume.macros/p
     " " is a monthly meetup held at tacchi that started this April.
     This was my second time attending this event (I attender "#2" previously).)]
   [:h3 "descjop"]
   [:p.blog-post
    "The session started off by Hara san (aka " [:a {:href "https://github.com/karad"} "karad"] ") "
    (resume.macros/p2
     giving a nice intro on how to develop an electron app with ClojureScript using his " "
     [:a {:href "https://github.com/karad/lein_template_descjop"} "descjop"] " " template. Electron
     is a platform to build desctop applications that work for all major operating systems
     using JavaScript. The
     " " [:a {:href "https://www.slideshare.net/karadweb/clojuretokyodescjop?qid=e1816aa3-2f26-4cc9-bb44-05353c647345&v=&b=&from_search=1"} "slides"] " "
     were really concise and easy to follow "along," and the instructions took me from knowing
     nothing about electron to setting up a reagent hello world app with figwheel set up in less than 10
     minutes. Pretty impressive!)]
   [:h3 "Got hands a bit dirty"]
   [:p.blog-post
    (resume.macros/p2
     After getting the hello world up and  "running," I paired up with " "
     [:a {:href "https://github.com/keansant"} "Kean"] " "
     and decided to implement a trivial example where selecting a color from a select input
     would cause the text color of the app to be the selected "color."
     Once we got that working we dumped the work " "
     [:a {:href "https://github.com/keansant/lein_template_descjop"} "here."])]

   [:h3 "Conclusion"]
   [:p.blog-post
    (resume.macros/p2
     Overall attending this event was totally more than worth my "time,"
     becaue "1)" I actually got to get a hands on session about a cool "tool"
     from the author of that tool. and "2)" It was my first time pairing with
     a person I met that "day," and learned that solving a problem together was
     a good way to get to know a person. Looking forward to the clojure.tokyo meetup.)]

   ])
