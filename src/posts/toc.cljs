(ns posts.toc
  (:require [goog.events :as ge]
            [goog.events.EventType :as et]
            [goog.net.XhrIo :as xhrio]
            [posts.made-cljs-website :as cljs-website]))

(def toc
  [:div
   [:h2 "Thoughts on code, life, etc"]
   (map #(vector :div {:class "link-to-post"}
                 [:a {:href "foobar"
                      :id (:title %)} (:title %)])
        [cljs-website/made-cljs-website])
   [:div {:id "post-content-div"}]])

(defn decorate-toc []
  (doseq [el (array-seq (.getElementsByClassName js/document "link-to-post"))]
    (ge/listen el et/CLICK
               (fn [e]
                 (.preventDefault e)
                 (xhrio/send (str "posts/" (-> e .-target (aget "id")))
                             (fn [e]
                               (aset (.getElementById js/document "post-content-div")
                                     "innerHTML"
                                     (-> e .-target .getResponseText))))))))
