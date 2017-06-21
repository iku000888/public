(ns posts.shibuya-java-19
  (:require-macros [posts.macros :refer [defpost]]
                   [resume.macros :refer [p]]))

(defpost shibuya-java-19
  "Attended Shibuya Java #19"
  "2017-06-21"
  [:div
   [:h2 "Attended Shibuya Java #19"]
   [:p.blog-post
    (resume.macros/p
     This weekend I was lucky to attend and give a talk at )
    " " [:a {:href "https://shibuya-java.connpass.com/event/57368/"}
         "Shibuya Java #19"]
    " hosted by "
    [:a {:href "http://www.bizreach.co.jp"} "Bizreach"]


    (resume.macros/p
     at their resort themed event space. I enjoyed giving my short presnetation as well as
     seeing all of the other presentations. Below is a summary of the talks given at the "event:")]

   [:div [:h3 "PredictionIO - by hagino_takahiro"]
    [:p.blog-post
     (resume.macros/p
      Bizreach was making heavy use of machine learning technologies to the extent where
      any managed services (ex "Amazon/Azul/Google")  were not well suited. They looked for
      an open source product that they can tune and manage by them "self," and landed on)
     " " [:a {:href "https://github.com/apache/incubator-predictionio"} "predictionIO."] " "
     (resume.macros/p
      They made significant invenstments to the extent that 4 Bizreach employees were
      granted committer status to the project.)

     ]]

   [:div [:h3 "Mocking the cloud with LocalStack - by shimamoto"]
    [:p.blog-post
     [:a {:href "https://github.com/atlassian/localstack"} "LocakStack"]
     (resume.macros/p
      " " is a tool for mocking AWS services during local dev time. Apparantly it is quite usable
      under normal "use," with JUnit support and configurable failure probabilities for the "services,"
      which would be useful for simulating things that are hard to reproduce on the actual cloud
      "(ex:" throughput error ")."

      It was entertaining to hear that when using the provided JUnit "helpers," it would actually
      invoke make under the "hood" and fail if a prerequisite is not installed.)]]

   [:div [:h3 "MP in Clojure - by " [:a {:href "https://twitter.com/lagenorhynque"}
                                     "lagénorhynque"]]
    [:p.blog-post
     (resume.macros/p
      There are two major Monad implementations in the Clojure "World,")
     " " [:a {:href "https://github.com/clojure/algo.monads"} "algo.monads"] " "
     "and"
     " " [:a {:href "https://github.com/funcool/cats"} "cats."] " "
     (resume.macros/p
      and then went onto showing how some classes of problems can be expressed succinctly using them.)]]

   [:div [:h3 "The best of Alt Java is Xtend - by " [:a {:href "https://twitter.com/takezoen"}
                                                     "Naoki Takezoe"]]
    [:p.blog-post
     [:a {:href "https://www.eclipse.org/xtend/"} "Xtend"]
     (resume.macros/p
      " " is a "'dialect of Java'" that compiles into Java source "code,"
      supported by a small group of passionate developers. Apparantly it has first class
      Eclipse support etc and some other nice features to cope with the verbosity of Java.
      There were some giggle worthy remarks such as)]
    [:q
     (resume.macros/p
      Project tag line is "'Java 10 today'" while Java 9 release is getting delayed)]
    [:q
     (resume.macros/p
      It compiles into readable Java "code," so it can be used
      in situations where you do not want to write "Java," but the
      deliverable is Java source code.)]]

   [:div [:h3 "Graal VM - by " [:a {:href "https://twitter.com/takezoen"}
                                "vertical_blank"]]
    [:p.blog-post
     [:a {:href "https://www.eclipse.org/xtend/"} "Xtend"]
     (resume.macros/p
      " " is a "'dialect of Java'" that compiles into Java source "code,"
      supported by a small group of passionate developers. Apparantly it has first class
      Eclipse support etc and some other nice features to cope with the verbosity of Java.
      There were some giggle worthy remarks such as)]
    [:q
     (resume.macros/p
      Project tag line is "'Java 10 today'" while Java 9 release is getting delayed)]
    [:q
     (resume.macros/p
      It compiles into readable Java "code," so it can be used
      in situations where you do not want to write "Java," but the
      deliverable is Java source code.)]]

   [:p
    "Takezoe san's blog contains"
    [:a {:href "http://takezoe.hatenablog.com/entry/2017/06/20/082020"}
     "links to the slides"]]




   ])
