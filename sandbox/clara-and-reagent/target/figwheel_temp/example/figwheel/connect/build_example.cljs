(ns figwheel.connect.build-example (:require [clara-r.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "example", :websocket-url "ws://localhost:3449/figwheel-ws"})

