(ns resume.resume
  (:require [resume.summary :as summary]
            [resume.skills :as skills]
            [resume.education :as ed]
            [resume.talks :as talks]
            [resume.work :as work]))

(def head [:h2 "Ikuru Leif Kanuma"])

(def email [:div "kanumaiku@gmail.com"])


(def content
  (-> [:div head
       email

       summary/text

       ed/heading
       ed/listing

       talks/heading
       talks/listing

       work/heading
       work/listing

       skills/heading
       skills/listing

       ;;Employment history + projects + awards
       ;;Opensource work
       ;;Picture
       ;;Make the margin of li ul look nicer
       ]))


(defn decorate-parts []
  (skills/listen-toggle)
  (ed/listen-toggle)
  (talks/listen-toggle)
  (work/listen-toggle))
