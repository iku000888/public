(ns posts.peek-pop
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))

(defpost peek-pop
  "peek, pop and IPersistentStack"
  "2017-06-30"
  [:div
   [:h2 "peek, pop and IPersistentStack"]

   [:h3 "Why bother writing this?"]
   [:p.blog-post
    (resume.macros/p
     There was a question floating on the twitter TL yesterday asking why)
    [:a {:href "link todo"} " peek"] " and " [:a {:href "link todo"} "pop"] " "
    (resume.macros/p
     behave differently on lists and vectors. As I never saw those two functions "before,"
     that got me curious to look up stuff and write this post up.)]

   [:h3 "tl;dr:"]
   [:ul.blog-post
    [:li "They are actually interface methods of "
     [:a {:href "https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/IPersistentStack.java"} "IPersistentStack"]]
    [:li "peek returns the 'last' value that was conj'd immediately before"]
    [:li "pop returns the coll with the value conj'd immediately before removed"]
    [:li "Clojure "
     [:a {:href "https://github.com/clojure/clojure/blob/f572a60262852af68cdb561784a517143a5847cf/src/jvm/clojure/lang/PersistentList.java"} "lists"] " and "
     [:a {:href "https://github.com/clojure/clojure/blob/ebfdbca535b81808b3ddc369d4a4e98b8f1524c7/src/jvm/clojure/lang/APersistentVector.java"} "vectors"]
     " implement this IPersistentStack differently, thus the difference"]]

   [:h3 "So, what is a " [:a {:href "https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29"}
                          "stack?"]]
   (resume.macros/p
    In general they are LIFO abstract datatypes that supports these 3 "ops:")
   [:ul.blog-post
    [:li "push - add an element"]
    [:li "pop - remove the element that was last added"]
    [:li "peek - return the element that was last added without popping(optional)"]]

   [:h3 "Immutable stack in Clojure?"]
   (resume.macros/p
    However conventional stack ops are mutations that Clojurians "avoid."
    The 3 ops would blend much nicer with Clojure if they were functional like "this:")
   [:ul.blog-post
    [:li "push - takes a coll and an element, returns the coll with element added (conj)"]
    [:li "pop - takes a coll and returns the coll with the element that was 'added' 'immediately before'"]
    [:li "peek - take a coll and returns the element that was 'added' 'immediately before'"]]
   [:strong "Note: "]
   (resume.macros/p
    I am putting "'added'" and "'immediately before'" in quotes in order to not confuse
    the terms relative to time. The context would instead be in terms of function applications.)

   [:h3 "conj"]
   [:div "For lists conj returns another list with the element added to the head"]
   [:code.boxed
    [:div ";; conj to a list"]
    [:div "(conj '(1 2 3 4) 5) => (5 1 2 3 4)"]]
   [:div "For vectors conj returns another vector with the element added to the tail"]
   [:code.boxed
    [:div ";; conj to a vector"]
    [:div "(conj [1 2 3 4] 5) => [1 2 3 4 5]"]]

   [:h3 "peek"]
   [:div "Regardless of treating a list or a vector, the 'last' element that was conj'd was 5, so peeking will yield 5."]

   [:code.boxed
    [:div "(-> [1 2 3 4] (conj 5) peek)"]
    [:div "=>5"]
    [:div "(-> '(1 2 3 4) (conj 5) peek)"]
    [:div "=>5"]]

   [:h3 "pop"]
   [:div "Regardless of treating a list or a vector, the 'last' element that was conj'd was 5, so popping will yield the collection with 5 removed"]

   [:code.boxed
    [:div "(-> [1 2 3 4] (conj 5) pop)"]
    [:div "=> [1 2 3 4]"]
    [:div "(-> '(1 2 3 4) (conj 5) peek)"]
    [:div "=> (1 2 3 4)"]]

   [:h3 "Tips: want to get the last element from a vector? peek!"]
   [:p
    (resume.macros/p
     Because last (the function) relies on the sequence abstraction, it has to scan through the entire
     vector to reach the last element. )]
   [:p
    (resume.macros/p
     On the otherhand, peek is a different abstraction that happens
     to return the last element of the vector.)]])
