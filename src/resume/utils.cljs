(ns resume.utils
  (:require [goog.string :as gs]
            [goog.uri.utils :as uri]))

(defn parse-query-data []
  (let [query-map (atom {})]
    (uri/parseQueryData (uri/getQueryData js/location.href)
                        ;;Statefully parse
                        (fn [k v] (swap! query-map #(assoc % (keyword k) v))))
    @query-map))

(defn get-hash-value []
  (gs/remove js/location.hash "#"))
