(ns posts.fig-sidecar
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))

(defpost checkout-fig-sidecar
  {:disp-title "Checkout figwheel-sidecar"
   :ts "2017-07-13"
   :renderer :md}
  "md/figwheel-sidecar.md")
