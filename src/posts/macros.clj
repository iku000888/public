(ns posts.macros
  (:require [clojure.java.io :as io]
            [hiccup2.core :as h]
            [resume.macros :refer [p]])
  (:import java.io.File))

(defn pre-render-hiccup [content]
  (-> content
      h/html
      str))

(defmacro defpost [post-name ts content]
  (when-not (.exists (io/file "posts"))
    (.mkdir (File. "posts")))
  (spit (io/file "posts" (str post-name))
        (pre-render-hiccup (eval content)))
  `(def ~(symbol (str post-name))
     {:title ~(str post-name)
      :created-at ~ts
      :url  ~(str "posts/" post-name)}))
