(ns posts.macros
  (:require [clojure.java.io :as io])
  (:import java.io.File))

(defmacro defpost [post-name content]
  (when-not (.exists (io/file "posts"))
    (.mkdir (File. "posts")))
  (spit (io/file "posts" (str post-name))
        content)
  `(def post-name ~(str post-name)))
