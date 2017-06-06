(ns resume.macros
  (:require [clojure.string :as str]))

(defmacro p
  "Macro for generating paragraph strings inline"
  [& body]
  (str/join " " (map str body)))

;;TODO
(defmacro code [body]
  (str body))
