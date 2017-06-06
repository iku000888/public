(ns resume.toggle-expand
  (:require [clojure.string :as str]
            [goog.dom :as gd]
            [goog.events :as ge]
            [goog.style :as gs]))

(defn state-text [el-id]
  (let [el (.getElementById js/document el-id)
        original-text (gd/getTextContent el)
        new-text (if (= (first original-text) "+")
                   (str/replace original-text "+" "-")
                   (str/replace original-text "-" "+"))]
    (gd/setTextContent el new-text)))

(defn visibility [el-id]
  (let [el (.getElementById js/document el-id)]
    (if (gs/isElementShown el)
      (gs/setElementShown el false)
      (gs/setElementShown el true))))
