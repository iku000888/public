// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38779 = arguments.length;
var i__30466__auto___38780 = (0);
while(true){
if((i__30466__auto___38780 < len__30465__auto___38779)){
args__30472__auto__.push((arguments[i__30466__auto___38780]));

var G__38781 = (i__30466__auto___38780 + (1));
i__30466__auto___38780 = G__38781;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38778){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38778));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38783 = arguments.length;
var i__30466__auto___38784 = (0);
while(true){
if((i__30466__auto___38784 < len__30465__auto___38783)){
args__30472__auto__.push((arguments[i__30466__auto___38784]));

var G__38785 = (i__30466__auto___38784 + (1));
i__30466__auto___38784 = G__38785;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38782){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38782));
});

var g_QMARK__38786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_38787 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38786){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__38786))
,null));
var mkg_38788 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38786,g_38787){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__38786,g_38787))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38786,g_38787,mkg_38788){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38786).call(null,x);
});})(g_QMARK__38786,g_38787,mkg_38788))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38786,g_38787,mkg_38788){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38788).call(null,gfn);
});})(g_QMARK__38786,g_38787,mkg_38788))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38786,g_38787,mkg_38788){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38787).call(null,generator);
});})(g_QMARK__38786,g_38787,mkg_38788))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30568__auto___38808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30568__auto___38808){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38809 = arguments.length;
var i__30466__auto___38810 = (0);
while(true){
if((i__30466__auto___38810 < len__30465__auto___38809)){
args__30472__auto__.push((arguments[i__30466__auto___38810]));

var G__38811 = (i__30466__auto___38810 + (1));
i__30466__auto___38810 = G__38811;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38808))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38808),args);
});})(g__30568__auto___38808))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30568__auto___38808){
return (function (seq38789){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38789));
});})(g__30568__auto___38808))
;


var g__30568__auto___38812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30568__auto___38812){
return (function cljs$spec$gen$alpha$list(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38813 = arguments.length;
var i__30466__auto___38814 = (0);
while(true){
if((i__30466__auto___38814 < len__30465__auto___38813)){
args__30472__auto__.push((arguments[i__30466__auto___38814]));

var G__38815 = (i__30466__auto___38814 + (1));
i__30466__auto___38814 = G__38815;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38812))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38812),args);
});})(g__30568__auto___38812))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30568__auto___38812){
return (function (seq38790){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38790));
});})(g__30568__auto___38812))
;


var g__30568__auto___38816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30568__auto___38816){
return (function cljs$spec$gen$alpha$map(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38817 = arguments.length;
var i__30466__auto___38818 = (0);
while(true){
if((i__30466__auto___38818 < len__30465__auto___38817)){
args__30472__auto__.push((arguments[i__30466__auto___38818]));

var G__38819 = (i__30466__auto___38818 + (1));
i__30466__auto___38818 = G__38819;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38816))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38816),args);
});})(g__30568__auto___38816))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30568__auto___38816){
return (function (seq38791){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38791));
});})(g__30568__auto___38816))
;


var g__30568__auto___38820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30568__auto___38820){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38821 = arguments.length;
var i__30466__auto___38822 = (0);
while(true){
if((i__30466__auto___38822 < len__30465__auto___38821)){
args__30472__auto__.push((arguments[i__30466__auto___38822]));

var G__38823 = (i__30466__auto___38822 + (1));
i__30466__auto___38822 = G__38823;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38820))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38820),args);
});})(g__30568__auto___38820))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30568__auto___38820){
return (function (seq38792){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38792));
});})(g__30568__auto___38820))
;


var g__30568__auto___38824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30568__auto___38824){
return (function cljs$spec$gen$alpha$set(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38825 = arguments.length;
var i__30466__auto___38826 = (0);
while(true){
if((i__30466__auto___38826 < len__30465__auto___38825)){
args__30472__auto__.push((arguments[i__30466__auto___38826]));

var G__38827 = (i__30466__auto___38826 + (1));
i__30466__auto___38826 = G__38827;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38824))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38824),args);
});})(g__30568__auto___38824))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30568__auto___38824){
return (function (seq38793){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38793));
});})(g__30568__auto___38824))
;


var g__30568__auto___38828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30568__auto___38828){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38829 = arguments.length;
var i__30466__auto___38830 = (0);
while(true){
if((i__30466__auto___38830 < len__30465__auto___38829)){
args__30472__auto__.push((arguments[i__30466__auto___38830]));

var G__38831 = (i__30466__auto___38830 + (1));
i__30466__auto___38830 = G__38831;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38828))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38828),args);
});})(g__30568__auto___38828))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30568__auto___38828){
return (function (seq38794){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38794));
});})(g__30568__auto___38828))
;


var g__30568__auto___38832 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30568__auto___38832){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38833 = arguments.length;
var i__30466__auto___38834 = (0);
while(true){
if((i__30466__auto___38834 < len__30465__auto___38833)){
args__30472__auto__.push((arguments[i__30466__auto___38834]));

var G__38835 = (i__30466__auto___38834 + (1));
i__30466__auto___38834 = G__38835;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38832))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38832){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38832),args);
});})(g__30568__auto___38832))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30568__auto___38832){
return (function (seq38795){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38795));
});})(g__30568__auto___38832))
;


var g__30568__auto___38836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30568__auto___38836){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38837 = arguments.length;
var i__30466__auto___38838 = (0);
while(true){
if((i__30466__auto___38838 < len__30465__auto___38837)){
args__30472__auto__.push((arguments[i__30466__auto___38838]));

var G__38839 = (i__30466__auto___38838 + (1));
i__30466__auto___38838 = G__38839;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38836))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38836){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38836),args);
});})(g__30568__auto___38836))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30568__auto___38836){
return (function (seq38796){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38796));
});})(g__30568__auto___38836))
;


var g__30568__auto___38840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30568__auto___38840){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38841 = arguments.length;
var i__30466__auto___38842 = (0);
while(true){
if((i__30466__auto___38842 < len__30465__auto___38841)){
args__30472__auto__.push((arguments[i__30466__auto___38842]));

var G__38843 = (i__30466__auto___38842 + (1));
i__30466__auto___38842 = G__38843;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38840))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38840){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38840),args);
});})(g__30568__auto___38840))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30568__auto___38840){
return (function (seq38797){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38797));
});})(g__30568__auto___38840))
;


var g__30568__auto___38844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30568__auto___38844){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38845 = arguments.length;
var i__30466__auto___38846 = (0);
while(true){
if((i__30466__auto___38846 < len__30465__auto___38845)){
args__30472__auto__.push((arguments[i__30466__auto___38846]));

var G__38847 = (i__30466__auto___38846 + (1));
i__30466__auto___38846 = G__38847;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38844))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38844){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38844),args);
});})(g__30568__auto___38844))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30568__auto___38844){
return (function (seq38798){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38798));
});})(g__30568__auto___38844))
;


var g__30568__auto___38848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30568__auto___38848){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38849 = arguments.length;
var i__30466__auto___38850 = (0);
while(true){
if((i__30466__auto___38850 < len__30465__auto___38849)){
args__30472__auto__.push((arguments[i__30466__auto___38850]));

var G__38851 = (i__30466__auto___38850 + (1));
i__30466__auto___38850 = G__38851;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38848))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38848){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38848),args);
});})(g__30568__auto___38848))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30568__auto___38848){
return (function (seq38799){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38799));
});})(g__30568__auto___38848))
;


var g__30568__auto___38852 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30568__auto___38852){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38853 = arguments.length;
var i__30466__auto___38854 = (0);
while(true){
if((i__30466__auto___38854 < len__30465__auto___38853)){
args__30472__auto__.push((arguments[i__30466__auto___38854]));

var G__38855 = (i__30466__auto___38854 + (1));
i__30466__auto___38854 = G__38855;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38852))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38852){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38852),args);
});})(g__30568__auto___38852))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30568__auto___38852){
return (function (seq38800){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38800));
});})(g__30568__auto___38852))
;


var g__30568__auto___38856 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30568__auto___38856){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38857 = arguments.length;
var i__30466__auto___38858 = (0);
while(true){
if((i__30466__auto___38858 < len__30465__auto___38857)){
args__30472__auto__.push((arguments[i__30466__auto___38858]));

var G__38859 = (i__30466__auto___38858 + (1));
i__30466__auto___38858 = G__38859;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38856))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38856){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38856),args);
});})(g__30568__auto___38856))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30568__auto___38856){
return (function (seq38801){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38801));
});})(g__30568__auto___38856))
;


var g__30568__auto___38860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30568__auto___38860){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38861 = arguments.length;
var i__30466__auto___38862 = (0);
while(true){
if((i__30466__auto___38862 < len__30465__auto___38861)){
args__30472__auto__.push((arguments[i__30466__auto___38862]));

var G__38863 = (i__30466__auto___38862 + (1));
i__30466__auto___38862 = G__38863;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38860))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38860){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38860),args);
});})(g__30568__auto___38860))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30568__auto___38860){
return (function (seq38802){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38802));
});})(g__30568__auto___38860))
;


var g__30568__auto___38864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30568__auto___38864){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38865 = arguments.length;
var i__30466__auto___38866 = (0);
while(true){
if((i__30466__auto___38866 < len__30465__auto___38865)){
args__30472__auto__.push((arguments[i__30466__auto___38866]));

var G__38867 = (i__30466__auto___38866 + (1));
i__30466__auto___38866 = G__38867;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38864))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38864){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38864),args);
});})(g__30568__auto___38864))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30568__auto___38864){
return (function (seq38803){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38803));
});})(g__30568__auto___38864))
;


var g__30568__auto___38868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30568__auto___38868){
return (function cljs$spec$gen$alpha$return(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38869 = arguments.length;
var i__30466__auto___38870 = (0);
while(true){
if((i__30466__auto___38870 < len__30465__auto___38869)){
args__30472__auto__.push((arguments[i__30466__auto___38870]));

var G__38871 = (i__30466__auto___38870 + (1));
i__30466__auto___38870 = G__38871;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38868))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38868){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38868),args);
});})(g__30568__auto___38868))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30568__auto___38868){
return (function (seq38804){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38804));
});})(g__30568__auto___38868))
;


var g__30568__auto___38872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30568__auto___38872){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38873 = arguments.length;
var i__30466__auto___38874 = (0);
while(true){
if((i__30466__auto___38874 < len__30465__auto___38873)){
args__30472__auto__.push((arguments[i__30466__auto___38874]));

var G__38875 = (i__30466__auto___38874 + (1));
i__30466__auto___38874 = G__38875;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38872))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38872){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38872),args);
});})(g__30568__auto___38872))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30568__auto___38872){
return (function (seq38805){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38805));
});})(g__30568__auto___38872))
;


var g__30568__auto___38876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30568__auto___38876){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38877 = arguments.length;
var i__30466__auto___38878 = (0);
while(true){
if((i__30466__auto___38878 < len__30465__auto___38877)){
args__30472__auto__.push((arguments[i__30466__auto___38878]));

var G__38879 = (i__30466__auto___38878 + (1));
i__30466__auto___38878 = G__38879;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38876))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38876){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38876),args);
});})(g__30568__auto___38876))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30568__auto___38876){
return (function (seq38806){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38806));
});})(g__30568__auto___38876))
;


var g__30568__auto___38880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30568__auto___38880){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38881 = arguments.length;
var i__30466__auto___38882 = (0);
while(true){
if((i__30466__auto___38882 < len__30465__auto___38881)){
args__30472__auto__.push((arguments[i__30466__auto___38882]));

var G__38883 = (i__30466__auto___38882 + (1));
i__30466__auto___38882 = G__38883;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30568__auto___38880))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30568__auto___38880){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30568__auto___38880),args);
});})(g__30568__auto___38880))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30568__auto___38880){
return (function (seq38807){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38807));
});})(g__30568__auto___38880))
;

var g__30581__auto___38905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30581__auto___38905){
return (function cljs$spec$gen$alpha$any(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38906 = arguments.length;
var i__30466__auto___38907 = (0);
while(true){
if((i__30466__auto___38907 < len__30465__auto___38906)){
args__30472__auto__.push((arguments[i__30466__auto___38907]));

var G__38908 = (i__30466__auto___38907 + (1));
i__30466__auto___38907 = G__38908;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38905))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38905){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38905);
});})(g__30581__auto___38905))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30581__auto___38905){
return (function (seq38884){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38884));
});})(g__30581__auto___38905))
;


var g__30581__auto___38909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30581__auto___38909){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38910 = arguments.length;
var i__30466__auto___38911 = (0);
while(true){
if((i__30466__auto___38911 < len__30465__auto___38910)){
args__30472__auto__.push((arguments[i__30466__auto___38911]));

var G__38912 = (i__30466__auto___38911 + (1));
i__30466__auto___38911 = G__38912;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38909))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38909){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38909);
});})(g__30581__auto___38909))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30581__auto___38909){
return (function (seq38885){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38885));
});})(g__30581__auto___38909))
;


var g__30581__auto___38913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30581__auto___38913){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38914 = arguments.length;
var i__30466__auto___38915 = (0);
while(true){
if((i__30466__auto___38915 < len__30465__auto___38914)){
args__30472__auto__.push((arguments[i__30466__auto___38915]));

var G__38916 = (i__30466__auto___38915 + (1));
i__30466__auto___38915 = G__38916;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38913))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38913){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38913);
});})(g__30581__auto___38913))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30581__auto___38913){
return (function (seq38886){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38886));
});})(g__30581__auto___38913))
;


var g__30581__auto___38917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30581__auto___38917){
return (function cljs$spec$gen$alpha$char(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38918 = arguments.length;
var i__30466__auto___38919 = (0);
while(true){
if((i__30466__auto___38919 < len__30465__auto___38918)){
args__30472__auto__.push((arguments[i__30466__auto___38919]));

var G__38920 = (i__30466__auto___38919 + (1));
i__30466__auto___38919 = G__38920;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38917))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38917){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38917);
});})(g__30581__auto___38917))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30581__auto___38917){
return (function (seq38887){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38887));
});})(g__30581__auto___38917))
;


var g__30581__auto___38921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30581__auto___38921){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38922 = arguments.length;
var i__30466__auto___38923 = (0);
while(true){
if((i__30466__auto___38923 < len__30465__auto___38922)){
args__30472__auto__.push((arguments[i__30466__auto___38923]));

var G__38924 = (i__30466__auto___38923 + (1));
i__30466__auto___38923 = G__38924;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38921))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38921){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38921);
});})(g__30581__auto___38921))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30581__auto___38921){
return (function (seq38888){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38888));
});})(g__30581__auto___38921))
;


var g__30581__auto___38925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30581__auto___38925){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38926 = arguments.length;
var i__30466__auto___38927 = (0);
while(true){
if((i__30466__auto___38927 < len__30465__auto___38926)){
args__30472__auto__.push((arguments[i__30466__auto___38927]));

var G__38928 = (i__30466__auto___38927 + (1));
i__30466__auto___38927 = G__38928;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38925))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38925){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38925);
});})(g__30581__auto___38925))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30581__auto___38925){
return (function (seq38889){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38889));
});})(g__30581__auto___38925))
;


var g__30581__auto___38929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30581__auto___38929){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38930 = arguments.length;
var i__30466__auto___38931 = (0);
while(true){
if((i__30466__auto___38931 < len__30465__auto___38930)){
args__30472__auto__.push((arguments[i__30466__auto___38931]));

var G__38932 = (i__30466__auto___38931 + (1));
i__30466__auto___38931 = G__38932;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38929))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38929){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38929);
});})(g__30581__auto___38929))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30581__auto___38929){
return (function (seq38890){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38890));
});})(g__30581__auto___38929))
;


var g__30581__auto___38933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30581__auto___38933){
return (function cljs$spec$gen$alpha$double(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38934 = arguments.length;
var i__30466__auto___38935 = (0);
while(true){
if((i__30466__auto___38935 < len__30465__auto___38934)){
args__30472__auto__.push((arguments[i__30466__auto___38935]));

var G__38936 = (i__30466__auto___38935 + (1));
i__30466__auto___38935 = G__38936;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38933))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38933){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38933);
});})(g__30581__auto___38933))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30581__auto___38933){
return (function (seq38891){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38891));
});})(g__30581__auto___38933))
;


var g__30581__auto___38937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30581__auto___38937){
return (function cljs$spec$gen$alpha$int(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38938 = arguments.length;
var i__30466__auto___38939 = (0);
while(true){
if((i__30466__auto___38939 < len__30465__auto___38938)){
args__30472__auto__.push((arguments[i__30466__auto___38939]));

var G__38940 = (i__30466__auto___38939 + (1));
i__30466__auto___38939 = G__38940;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38937))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38937){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38937);
});})(g__30581__auto___38937))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30581__auto___38937){
return (function (seq38892){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38892));
});})(g__30581__auto___38937))
;


var g__30581__auto___38941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30581__auto___38941){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38942 = arguments.length;
var i__30466__auto___38943 = (0);
while(true){
if((i__30466__auto___38943 < len__30465__auto___38942)){
args__30472__auto__.push((arguments[i__30466__auto___38943]));

var G__38944 = (i__30466__auto___38943 + (1));
i__30466__auto___38943 = G__38944;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38941))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38941){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38941);
});})(g__30581__auto___38941))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30581__auto___38941){
return (function (seq38893){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38893));
});})(g__30581__auto___38941))
;


var g__30581__auto___38945 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30581__auto___38945){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38946 = arguments.length;
var i__30466__auto___38947 = (0);
while(true){
if((i__30466__auto___38947 < len__30465__auto___38946)){
args__30472__auto__.push((arguments[i__30466__auto___38947]));

var G__38948 = (i__30466__auto___38947 + (1));
i__30466__auto___38947 = G__38948;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38945))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38945){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38945);
});})(g__30581__auto___38945))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30581__auto___38945){
return (function (seq38894){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38894));
});})(g__30581__auto___38945))
;


var g__30581__auto___38949 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30581__auto___38949){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38950 = arguments.length;
var i__30466__auto___38951 = (0);
while(true){
if((i__30466__auto___38951 < len__30465__auto___38950)){
args__30472__auto__.push((arguments[i__30466__auto___38951]));

var G__38952 = (i__30466__auto___38951 + (1));
i__30466__auto___38951 = G__38952;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38949))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38949){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38949);
});})(g__30581__auto___38949))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30581__auto___38949){
return (function (seq38895){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38895));
});})(g__30581__auto___38949))
;


var g__30581__auto___38953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30581__auto___38953){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38954 = arguments.length;
var i__30466__auto___38955 = (0);
while(true){
if((i__30466__auto___38955 < len__30465__auto___38954)){
args__30472__auto__.push((arguments[i__30466__auto___38955]));

var G__38956 = (i__30466__auto___38955 + (1));
i__30466__auto___38955 = G__38956;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38953))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38953){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38953);
});})(g__30581__auto___38953))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30581__auto___38953){
return (function (seq38896){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38896));
});})(g__30581__auto___38953))
;


var g__30581__auto___38957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30581__auto___38957){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38958 = arguments.length;
var i__30466__auto___38959 = (0);
while(true){
if((i__30466__auto___38959 < len__30465__auto___38958)){
args__30472__auto__.push((arguments[i__30466__auto___38959]));

var G__38960 = (i__30466__auto___38959 + (1));
i__30466__auto___38959 = G__38960;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38957))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38957){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38957);
});})(g__30581__auto___38957))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30581__auto___38957){
return (function (seq38897){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38897));
});})(g__30581__auto___38957))
;


var g__30581__auto___38961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30581__auto___38961){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38962 = arguments.length;
var i__30466__auto___38963 = (0);
while(true){
if((i__30466__auto___38963 < len__30465__auto___38962)){
args__30472__auto__.push((arguments[i__30466__auto___38963]));

var G__38964 = (i__30466__auto___38963 + (1));
i__30466__auto___38963 = G__38964;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38961))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38961){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38961);
});})(g__30581__auto___38961))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30581__auto___38961){
return (function (seq38898){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38898));
});})(g__30581__auto___38961))
;


var g__30581__auto___38965 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30581__auto___38965){
return (function cljs$spec$gen$alpha$string(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38966 = arguments.length;
var i__30466__auto___38967 = (0);
while(true){
if((i__30466__auto___38967 < len__30465__auto___38966)){
args__30472__auto__.push((arguments[i__30466__auto___38967]));

var G__38968 = (i__30466__auto___38967 + (1));
i__30466__auto___38967 = G__38968;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38965))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38965){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38965);
});})(g__30581__auto___38965))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30581__auto___38965){
return (function (seq38899){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38899));
});})(g__30581__auto___38965))
;


var g__30581__auto___38969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30581__auto___38969){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38970 = arguments.length;
var i__30466__auto___38971 = (0);
while(true){
if((i__30466__auto___38971 < len__30465__auto___38970)){
args__30472__auto__.push((arguments[i__30466__auto___38971]));

var G__38972 = (i__30466__auto___38971 + (1));
i__30466__auto___38971 = G__38972;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38969))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38969){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38969);
});})(g__30581__auto___38969))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30581__auto___38969){
return (function (seq38900){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38900));
});})(g__30581__auto___38969))
;


var g__30581__auto___38973 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30581__auto___38973){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38974 = arguments.length;
var i__30466__auto___38975 = (0);
while(true){
if((i__30466__auto___38975 < len__30465__auto___38974)){
args__30472__auto__.push((arguments[i__30466__auto___38975]));

var G__38976 = (i__30466__auto___38975 + (1));
i__30466__auto___38975 = G__38976;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38973))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38973){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38973);
});})(g__30581__auto___38973))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30581__auto___38973){
return (function (seq38901){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38901));
});})(g__30581__auto___38973))
;


var g__30581__auto___38977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30581__auto___38977){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38978 = arguments.length;
var i__30466__auto___38979 = (0);
while(true){
if((i__30466__auto___38979 < len__30465__auto___38978)){
args__30472__auto__.push((arguments[i__30466__auto___38979]));

var G__38980 = (i__30466__auto___38979 + (1));
i__30466__auto___38979 = G__38980;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38977))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38977){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38977);
});})(g__30581__auto___38977))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30581__auto___38977){
return (function (seq38902){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38902));
});})(g__30581__auto___38977))
;


var g__30581__auto___38981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30581__auto___38981){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38982 = arguments.length;
var i__30466__auto___38983 = (0);
while(true){
if((i__30466__auto___38983 < len__30465__auto___38982)){
args__30472__auto__.push((arguments[i__30466__auto___38983]));

var G__38984 = (i__30466__auto___38983 + (1));
i__30466__auto___38983 = G__38984;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38981))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38981){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38981);
});})(g__30581__auto___38981))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30581__auto___38981){
return (function (seq38903){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38903));
});})(g__30581__auto___38981))
;


var g__30581__auto___38985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30581__auto___38985){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38986 = arguments.length;
var i__30466__auto___38987 = (0);
while(true){
if((i__30466__auto___38987 < len__30465__auto___38986)){
args__30472__auto__.push((arguments[i__30466__auto___38987]));

var G__38988 = (i__30466__auto___38987 + (1));
i__30466__auto___38987 = G__38988;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});})(g__30581__auto___38985))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30581__auto___38985){
return (function (args){
return cljs.core.deref.call(null,g__30581__auto___38985);
});})(g__30581__auto___38985))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30581__auto___38985){
return (function (seq38904){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38904));
});})(g__30581__auto___38985))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__30472__auto__ = [];
var len__30465__auto___38991 = arguments.length;
var i__30466__auto___38992 = (0);
while(true){
if((i__30466__auto___38992 < len__30465__auto___38991)){
args__30472__auto__.push((arguments[i__30466__auto___38992]));

var G__38993 = (i__30466__auto___38992 + (1));
i__30466__auto___38992 = G__38993;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38989_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38989_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38990){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38990));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38994_SHARP_){
return (new Date(p1__38994_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1502864294979
