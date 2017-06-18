(require '[cljs.build.api :as b])

(future
  (b/watch "src"
           {:main 'resume.core
            :output-to "out/resume.js"
            :optimizations :advanced
            :output-dir "out"}))

(do (require 'weasel.repl.websocket)
    (cemerick.piggieback/cljs-repl
     (weasel.repl.websocket/repl-env :ip "0.0.0.0" :port 9001)))
