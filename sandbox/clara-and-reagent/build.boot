(set-env!
 :resource-paths #{"src"}
 :dependencies '[[org.clojure/clojure "1.9.0-alpha17"]
                 #_[org.clojure/clojurescript "1.9.671"]
                 [org.clojure/clojurescript "1.9.854"]
                 [figwheel-sidecar "0.5.11"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [reagent "0.8.0-alpha1"]
                 #_[reagent "0.7.0"]
                 [com.cerner/clara-rules "0.15.2"]
                 ])

(comment
  (do
    (require '[clojure.java.io :as io])
    (require '[figwheel-sidecar.system :as sys])
    (require '[clojure.pprint :refer [pprint]])
    (require '[com.stuartsierra.component :as c])
    (spit (io/file "figwheel.edn")
          (pr-str `{:http-server-root "public" ;; default
                    :server-port 3449          ;; default
                    :open-file-command "emacsclient"
                    :builds [{:id "example",
                              :source-paths ["src"],
                              :figwheel true
                              :compiler
                              {:main clara-r.core ;;Switch the ns to dev in
                               :closure-defines {goog.DEBUG true}
                               :asset-path "out",
                               :output-to "out/fiddles.js",
                               :output-dir "out",
                               :source-map-timestamp true}}]}))

    (def system
      (c/system-map
       :figwheel-system
       (sys/figwheel-system (sys/fetch-config)))))

  (alter-var-root #'system c/start)
  (alter-var-root #'system c/stop)

  (sys/cljs-repl (:figwheel-system system)))
