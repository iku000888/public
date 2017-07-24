(ns projects.listing
  (:require-macros [resume.macros :refer [p]]))

(defn map->proj-meta-content [m]
  (map (fn [[k v]]
         [:code.fragment (str k " ") (str v)])
       m))

(def pc-auto-save
  [:div.proj-content
   [:h3 "Print Creator Auto Save JS"]
   [:p
    [:a {:href "https://pc.kintoneapp.com/"}
     "Print Creator "]
    "is a "
    [:a {:href "https://cstap.com/"} "cstap (My employer)"]
    (p " " product that enables PDF creations from) [:a {:href "https://kintone.cybozu.com"}
                                                     " Kintone "] "records."]
   [:p (p I created an extention js (implemented in ClojureScript) that would allow the user to save the output PDF into an attachment file field in a Kintone record.)]
   [:div
    [:a {:href "https://kintoneapp.com/blog/printcreator_autosave/"}
     "Relavant Blog Post"]]])

(def anpi2
  [:div.proj-content
   [:h3 "Anpi2"]
   [:p (p Details of the project made it onto the " ")
    [:a {:href "https://clojure.org/stories/cstap"}
     "official Clojure site!"]]
   [:p
    [:a {:href "https://anpi.cstap.com/anpi2.html"}
     "product site"]]
   [:code.boxed
    (str {:from "May 2016" :to "May 2017"})]
   ])

(def formative
  [:div.proj-content
   [:h3 "Formative(Maintenance)"]
   [:code.boxed
    (str {:since "January 2017"})]
   [:p (p This library was used extensively in "Anpi2," but was not maintained since "2014." I asked the original author for commit rights to do main )]])

(def dental-robotics
  [:div.proj-content
   ;;Maybe pictures???
   [:h3 "Dental Robotics"]
   (map->proj-meta-content
    {:from "Around September 2011"
     :to "June 2014"
     :skills #{"MATLAB" "Robotic Arm"}})
   [:p (p This was the research topic throughout my undergraduate career.
          The objective is to simulate the laminate porcelain preparation with a robotic arm.
          I was responsible for most of the implementation.
          Collaborated with actual dentists for result evaluation.)]])

(def Mechatronisc
  [:div.proj-content
   [:h3 "Mechatronics"]
   (map->proj-meta-content
    {:from "September 2013"
     :to "December 2013"
     :keywoeds #{"C" "Electronics"}})
   [:p (p A class where teams of "3" students build a robot that navigates to a goal whilst shooting ping pong "balls,"
          and make those robots compete. My team got second place out of "17" teams. I was mainly responsible for coding and sensor integration.)]])

(def clj-site-ja
  [:div.proj-content
   [:h3 "Clojure Site Translation Project"
    [:code  "(->Japanese)"]]
   [:p (p Contributing Japanese translation effort.)]
   [:p [:a {:href "https://github.com/japan-clojurians/clojure-site-ja"}
        "Project Site"]]])

(def projects
  [:div

   [:h2 "My Projects and/or projects that I have participated in"]

   pc-auto-save
   anpi2
   clj-site-ja
   formative
   dental-robotics
   Mechatronisc]
  ;; Titile(link if applicable), Short description, My responsibility
  )
