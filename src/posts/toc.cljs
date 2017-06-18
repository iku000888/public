(ns posts.toc
  (:require [goog.events :as ge]
            [goog.events.EventType :as et]
            [goog.net.XhrIo :as xhrio]
            [goog.string :as gstr]
            [goog.style :as gs]
            [posts.made-cljs-website :as cljs-website]
            [resume.utils :as ru]))

(def toc
  [:div
   [:div {:id "posts-toc-container"}
    [:h2 "Thoughts on code, life, etc"]
    (map #(vector :div {:class "link-to-post"}
                  [:span
                   [:a {:href "foobar"
                        :id (:url %)} (:title %)]
                   " " (:created-at %)])
         [cljs-website/made-cljs-website])]
   [:div {:id "post-content-div-container"}
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
  (aset (.getElementById js/document "post-content-div")
        "innerHTML" ""))

(defn set-content-div [content]
  (aset (.getElementById js/document "post-content-div")
        "innerHTML" content))

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
                 (js/console.log (-> e .-target (aget "id")))
                 (fetch-and-show-post (-> e .-target (aget "id"))))))
  (let [el (.getElementById js/document "posts-back-to-content-link")]
    (ge/listen el et/CLICK
               (fn [e]
                 (.preventDefault e)
                 (show-toc-container)
                 (gs/setElementShown el false)
                 (clear-content-div)
                 (aset js/location "hash" ""))))
  (when-let [post-name (seq (ru/get-hash-value))]
    (fetch-and-show-post
     (str "posts/" post-name))))
