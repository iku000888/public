Based on the GitHub project name, [Figwheel](https://github.com/bhauman/lein-figwheel) (lein-figweel) gives an impression that it can only be used as a leiningen plugin.

However if you take a closer look the lein plugin is a thin wrapper around a library that can be used by it self called [figwheel-sidecar](https://github.com/bhauman/lein-figwheel/tree/master/sidecar) that provides a lot of flexibility.

## Why you may want to use it as a lib:
- Use it from tools other than leiningen
- Control when start/stop happens
    - For instance, leiningen plugins require restart when you change a config value
- Do stuff when figwheel starts
    - ex: starting a css watcher
- Embed it into your own framework/workflow
    - ex： [duct](https://github.com/duct-framework/duct-figwheel-component/blob/master/project.clj)

## Usage
The project README has everything [figwheel-sidecar](https://github.com/bhauman/lein-figwheel/tree/master/sidecar) so I will just focus on starting and stopping with some comments (Might add some other applications when I get the motivation).

```clj
(require '[figwheel-sidecar.system :as sys])
(require '[com.stuartsierra.component :as c])

;;fetch-config builds the figwheel config value from either the figwheel.edn file or the :cljsbuild and :figwheel keys in the project.clj
(def config (sys/fetch-config))

;;Intern the figwheel Stuart Sierra system (contains the dependencies between the necessary components必要なコンポーネントの依存関係の定義) to a var
;;https://github.com/stuartsierra/component
(def system
      (c/system-map
       :figwheel-system
       (sys/figwheel-system config)))

;;Start the system by applying c/start to the object interned to the var
(alter-var-root #'system c/start)
;Figwheel: Starting server at http://0.0.0.0:3449
;Figwheel: Watching build - example
;Figwheel: Cleaning build - example
;Compiling "out/fiddles.js" from ["src"]...
;Successfully compiled "out/fiddles.js" in 4.024 seconds.

;;Stop the system by applying c/start to the object interned to the var
(alter-var-root #'system c/stop)
;Figwheel: Stopped watching build - example
;Figwheel: Stopping Websocket Server
```

## Extra: How leiningen plugins ought to be built
For reasons mentioned in the beggining, it is recommended to first build a library that can be used from the repl and then provide a thin layer that provides the leiningen plugin.

If one builds a plugin that can only be used from leiningen, you will get an [issue](https://github.com/JonyEpsilon/gorilla-repl/issues/272) from a prominent figure in the Clojure world for clients that are locked into maven.

Sounds like a good idea to keep that in mind if you are ever going to build a lein plugin :)