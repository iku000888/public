(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'resume.core
   :output-to "out/resume.js"
   :output-dir "out"})
