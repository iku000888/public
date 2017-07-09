(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'fiddles.core
   :output-to "out/fiddles.js"
   :output-dir "out"})
