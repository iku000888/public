(ns resume.core
  (:require
   [weasel.repl :as repl]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))
