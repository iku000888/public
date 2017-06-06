(ns resume.macros
  (:require [clojure.string :as str]))

(defmacro p
  "Macro for emitting composed paragraphs as strings, inline
   This is the compromise between the desire of composing inline of Clojrue code vs not
   wanting to compose literal strings.
   Known limitations: Any symbol conflicting with the Reader will have some trouble.
   Wourkaround: Fall back to string literals :-)"
  [& body]
  (str/join " " (map str body)))

;;TODO
(defmacro code [body]
  (str body))
