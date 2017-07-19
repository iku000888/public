(ns fiddles.core
  (:require [clojure.string :as str]
            [goog.object :as o]
            [reagent.core :as r]))

(defn mount-external-js [value]
  (when (seq value)
    (if js/goog.DEBUG
      (js/postscribe
       "#fiddle-script"
       (str "<script src="
            "fiddles/" value ".js"
            "></script>"))
      (.appendChild (o/get js/document "body")
                    (doto (.createElement js/document "script")
                      (o/set "src" (str "fiddles/" value ".js"))
                      (o/set "async" true)))
      #_(js/alert "dev mode is false yo!!!"))
    (o/set js/location "hash" value)))

(defn main []
  [:div
   [:select {:on-change
             #(let [value (-> % .-target .-value)]
                (when (not= "run a js" value)
                  (mount-external-js value)))}
    [:option "run a js"]

    ;;TODO: figure out how to automatically link with the output file name
    [:option "re-frame"]
    [:option "reagent-sample"]
    [:option "raspo"]]
   [:div#fiddle-script]])

(comment
  (let [first-script
        (-> (.getElementsByTagName js/document "script")
            (aget  0)
            .-parentNode)
        (doto (.createElement js/document "script")
          (o/set "src" "out/raspo.js")
          (o/set "async" true))
        (-> (.getElementsByTagName js/document "script")
            (aget  0))

        script ]
    (.appendChild js/document.body script)))


(r/render [main]
          (.getElementById js/document "app"))

(o/set js/window "onload"
       #(mount-external-js (str/replace (o/get js/location "hash") "#" "")))
