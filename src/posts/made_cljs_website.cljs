(ns posts.made-cljs-website
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))
(defpost made-cljs-website
  "Making this website"
  "2017-06-14"
  [:div
   [:h2 "Technical Details of this Site"]
   [:p.blog-post
    (resume.macros/p
     For some reason I wanted more people to know "me," and decided to hand craft a
     personal web site using Clojure/ClojureScript. I thought writing some details
     of the implementation would be a good topic for the first "post," so here it goes!)]

   [:h3 "No Figwheel (for now, at least)"]
   [:p.blog-post
    (resume.macros/p
     Figwheel is "awesome" and it is taking the world by "storm," but I wanted to use
     smaller tools to help me learn the basics of ClojrueScript Development.
     I started the project with the)
    " " [:a {:href "https://github.com/swannodette/mies"} "mies template"] " "
    "and used " [:a {:href "https://github.com/tomjakubowski/weasel"} "weasel"] " "
    (resume.macros/p for REPL needs.)]

   [:h3 "No React"]
   [:p.blog-post
    (resume.macros/p
     Somehow mutating DOMs in place is more "'fun'" to me compared to the pureness of the react
     wrapping libs out there. So I decided to use " ")
    [:a {:href "https://github.com/ibdknox/crate"} "crate"]
    (resume.macros/p
     " " to make raw DOM objects from hiccup data and functions from the Google Closure Library that is bundled with the ClojureScript Compiler)]

   [:h3 "The 'p' macro"]
   [:p.blog-post
    (resume.macros/p
     I really wanted to compose long "senteces/paragraphs" inline of the clj source "code,"
     because I want to work on the appearance and the content at the same "time"
     and I did not want to go for markdown/asciidoc. Trying to write stuff within string
     literals were not ideal because it is hard to span a string across several lines while
     keeping the source code pretty.
     I ended up writing the "'p'" macro so that I can write a list of symbols that would render
     into a space separated string like "this:")]
   [:code.boxed.indent-3em
    [:div "(p This is a \"sentence,\" perhaps)"]
    [:div "=> \"This is a sentence, perhaps\""]]
   [:p.blog-post
    (resume.macros/p
     The downside of this is that there are some characters that do not
     survive the "read" such as "','" that needs to be written as a literal "string," but
     I am pretty happy with it overall.)]

   [:h3 "(ab)Using macros to compile stuff ahead of time"]
   [:p.blog-post
    (resume.macros/p
     Some relatively large static content such as this post is better to be rendered
     into html at compile time. In order to do that I wrote the "'defpost'" macro that
     would compile the given hiccup data and write html fragments into a text file while
     def'ing the metadata about the content such as "url, created date, display titile.")]

   [:h3 "Garden"]
   [:p.blog-post
    "I used " [:a {:href "https://github.com/noprompt/garden"} "garden"] " "
    (resume.macros/p
     to style this site. It was my first time using "this," and I found it amazing.
     I was able to quickly iterate with the design of this site.)]]
  ;;content-h
  )
