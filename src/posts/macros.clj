(ns posts.macros
  (:require [clojure.java.io :as io]
            [cljfmt.core :as cc]
            [clojure.string :as s]
            [hiccup2.core :as h]
            [resume.macros :refer [p]]
            [clojure.string :as str])
  (:import java.io.File))

(defn pre-render-hiccup [content]
  (-> content
      h/html
      str))

(defmacro code->hiccup [s]
  (-> s
      str
      (str/replace (str :p.m/nl) "\n")
      cc/reformat-string
      (s/split #"\n")
      ;;Complected with style, fix later!
      (->> (map (fn [s] [:pre.no-margin s]))
           (into [:code.boxed.indent-3em]))))

(code->hiccup
 (let [x 4] :p.m/nl
      (* x x)))

(defmulti render-content
  (fn [_ renderer] renderer))

(defmethod render-content :default
  [content _]
  (pre-render-hiccup content))

(defmethod render-content :md)

(defmacro defpost
  [var-name {:as opts :keys [disp-title ts]} content]
  (when-not (.exists (io/file "posts"))
    (.mkdir (File. "posts")))
  (spit (io/file "posts" (str var-name))
        (render-content (eval content) nil)
        #_(pre-render-hiccup (eval content)))
  `(def ~(symbol (str var-name))
     {:title ~(str disp-title)
      :created-at ~ts
      :url  ~(str "posts/" var-name)}))
