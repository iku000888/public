(ns resume.macros
  (:require [clojure.string :as str]
            [hiccup2.core :as h]))

(defmacro p
  "Macro for emitting composed paragraphs as strings, inline
   This is the compromise between the desire of composing inline of Clojrue code vs not
   wanting to compose literal strings.
   Known limitations: Any symbol conflicting with the Reader will have some trouble.
   Wourkaround: Fall back to string literals :-)"
  [& body]
  (->> body
       (map str)
       (str/join " "))  )

(defmacro p2
  "Same intention as the original 'p', but allows hiccup vectors to be 'escaped' as is
   (that is, no string conversion). Created because if I wanted to make a hyperlink within
   a paragraph I had to do something like (p blah blah) [:a {\"herf\" \"foo\"}] (p blah blah). "
  [& body]
  `(list
    ~@(->> body
           (map (fn [thing]
                  (if (vector? thing)
                    thing
                    (str thing))))
           (partition-by vector?)
           (map (fn [[head :as all]]
                  (if (vector? head)
                    head
                    (str/join " " all)))))))

;;TODO
(defmacro code [body]
  (str body))
