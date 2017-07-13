(ns posts.toc
  (:require [goog.events :as ge]
            [goog.events.EventType :as et]
            [goog.net.XhrIo :as xhrio]
            [goog.string :as gstr]
            [goog.style :as gs]
            [posts.gave-cljs-talk :as cljs-talk]
            [posts.made-cljs-website :as cljs-website]
            [posts.peek-pop :as pp]
            [posts.clojure-dot-tokyo4 :as cljtkyo4]
            [posts.shibuya-java-19 :as shja]
            [posts.fig-sidecar :as figs]
            [resume.utils :as ru]))

(def toc
  [:div
   [:div {:id "posts-toc-container"}
    [:h2 "Thoughts on code, life, etc"]
    (map #(vector :div {:class "link-to-post blog-listing"}
                  [:span.blog-listing
                   [:a.blog-listing {:href "foobar"
                                     :id (:url %)} (:title %)]
                   " " (:created-at %)])
         [figs/checkout-fig-sidecar
          cljtkyo4/clojure-tokyo-4
          pp/peek-pop
          cljs-talk/gave-cljs-talk
          shja/shibuya-java-19
          cljs-website/made-cljs-website])]
   [:div {:id  "post-content-div-container"}
    [:div {:id "post-content-div"}]
    [:a {:href "foobar"
         :id "posts-back-to-content-link"}
     "Back to list"]]])


(defn show-back-link []
  (gs/setElementShown (.getElementById js/document "posts-back-to-content-link")
                      true))

(defn hide-back-link []
  (gs/setElementShown (.getElementById js/document "posts-back-to-content-link")
                      false))

(defn show-toc-container []
  (-> js/document
      (.getElementById "posts-toc-container")
      (gs/setElementShown true)))

(defn hide-toc-container []
  (-> js/document
      (.getElementById "posts-toc-container")
      (gs/setElementShown false)))

(defn clear-content-div []
  (let [el (.getElementById js/document "post-content-div")]
    (gs/setElementShown el false)))

(defn set-content-div [content]
  (let [el (.getElementById js/document "post-content-div")]
    (gs/setElementShown el true)
    (aset el "innerHTML" content)))

(defn fetch-and-show-post [url]
  (xhrio/send url
              (fn [e]
                (set-content-div (-> e .-target .getResponseText))
                (hide-toc-container)
                (show-back-link)
                (aset js/location "hash"
                      (gstr/remove url "posts/")))))

(defn decorate-toc [q]
  (hide-back-link)
  (doseq [el (array-seq (.getElementsByClassName js/document "link-to-post"))]
    (ge/listen el et/CLICK
               (fn [e]
                 (.preventDefault e)
                 (fetch-and-show-post (-> e .-target (aget "id"))))))
  (let [el (.getElementById js/document "posts-back-to-content-link")]
    (ge/listen el et/CLICK
               (fn [e]
                 (.preventDefault e)
                 (show-toc-container)
                 (hide-back-link)
                 (gs/setElementShown el false)
                 (clear-content-div)
                 (aset js/location "hash" ""))))
  (let [post-name (ru/get-hash-value)]
    (when (seq post-name)
      (fetch-and-show-post
       (str "posts/" post-name)))))
