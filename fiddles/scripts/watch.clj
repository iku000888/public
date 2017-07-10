;; Launch good ole fiddle
#_(do (require '[cljs.build.api :as b])
      (b/watch "src"
               {:main 'fiddles.core
                :output-to "out/fiddles.js"
                :output-dir "out"}))

;; Launch awesome figwheel
(do (require '[clojure.java.io :as io])
    (spit (io/file "figwheel.edn")
          (pr-str '{:http-server-root "public" ;; default
                    :server-port 3449          ;; default
                    :open-file-command "emacsclient"
                    :builds [{:id "example",
                              :source-paths ["src"],
                              :figwheel true
                              :compiler
                              {:main fiddles.core
                               :asset-path "out",
                               :output-to "out/fiddles.js",
                               :output-dir "out",
                               :source-map-timestamp true}}]}))

    (require '[figwheel-sidecar.system :as sys])
    (require '[clojure.pprint :refer [pprint]])
    (require '[com.stuartsierra.component :as c])

    (def system
      (c/system-map
       :figwheel-system
       (sys/figwheel-system (sys/fetch-config)))))

(alter-var-root #'system c/start)
(alter-var-root #'system c/stop)


(sys/cljs-repl (:figwheel-system system))
