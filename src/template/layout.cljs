(ns template.layout)

(def layout
  [:div
   [:div {:id "menu-div"
          :class "menu"}
    [:span.logo (str '(-> Ikuru learn forget))]

    [:span.menu-item "About"]
    [:span.menu-item "Writings"]
    [:span.menu-item "Other Web Presence"]]])
