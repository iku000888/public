// Compiled by ClojureScript 1.9.854 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__35959__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35956 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35957 = cljs.core.seq.call(null,vec__35956);
var first__35958 = cljs.core.first.call(null,seq__35957);
var seq__35957__$1 = cljs.core.next.call(null,seq__35957);
var tag = first__35958;
var body = seq__35957__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35960__i = 0, G__35960__a = new Array(arguments.length -  0);
while (G__35960__i < G__35960__a.length) {G__35960__a[G__35960__i] = arguments[G__35960__i + 0]; ++G__35960__i;}
  args = new cljs.core.IndexedSeq(G__35960__a,0,null);
} 
return G__35959__delegate.call(this,args);};
G__35959.cljs$lang$maxFixedArity = 0;
G__35959.cljs$lang$applyTo = (function (arglist__35961){
var args = cljs.core.seq(arglist__35961);
return G__35959__delegate(args);
});
G__35959.cljs$core$IFn$_invoke$arity$variadic = G__35959__delegate;
return G__35959;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30070__auto__ = (function sablono$core$update_arglists_$_iter__35962(s__35963){
return (new cljs.core.LazySeq(null,(function (){
var s__35963__$1 = s__35963;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__35963__$1);
if(temp__5278__auto__){
var s__35963__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35963__$2)){
var c__30068__auto__ = cljs.core.chunk_first.call(null,s__35963__$2);
var size__30069__auto__ = cljs.core.count.call(null,c__30068__auto__);
var b__35965 = cljs.core.chunk_buffer.call(null,size__30069__auto__);
if((function (){var i__35964 = (0);
while(true){
if((i__35964 < size__30069__auto__)){
var args = cljs.core._nth.call(null,c__30068__auto__,i__35964);
cljs.core.chunk_append.call(null,b__35965,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35966 = (i__35964 + (1));
i__35964 = G__35966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),sablono$core$update_arglists_$_iter__35962.call(null,cljs.core.chunk_rest.call(null,s__35963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),null);
}
} else {
var args = cljs.core.first.call(null,s__35963__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35962.call(null,cljs.core.rest.call(null,s__35963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30070__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__30472__auto__ = [];
var len__30465__auto___35972 = arguments.length;
var i__30466__auto___35973 = (0);
while(true){
if((i__30466__auto___35973 < len__30465__auto___35972)){
args__30472__auto__.push((arguments[i__30466__auto___35973]));

var G__35974 = (i__30466__auto___35973 + (1));
i__30466__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((0) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__30473__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30070__auto__ = (function sablono$core$iter__35968(s__35969){
return (new cljs.core.LazySeq(null,(function (){
var s__35969__$1 = s__35969;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__35969__$1);
if(temp__5278__auto__){
var s__35969__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35969__$2)){
var c__30068__auto__ = cljs.core.chunk_first.call(null,s__35969__$2);
var size__30069__auto__ = cljs.core.count.call(null,c__30068__auto__);
var b__35971 = cljs.core.chunk_buffer.call(null,size__30069__auto__);
if((function (){var i__35970 = (0);
while(true){
if((i__35970 < size__30069__auto__)){
var style = cljs.core._nth.call(null,c__30068__auto__,i__35970);
cljs.core.chunk_append.call(null,b__35971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35975 = (i__35970 + (1));
i__35970 = G__35975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35971),sablono$core$iter__35968.call(null,cljs.core.chunk_rest.call(null,s__35969__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35971),null);
}
} else {
var style = cljs.core.first.call(null,s__35969__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35968.call(null,cljs.core.rest.call(null,s__35969__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30070__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq35967){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35967));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to35976 = (function sablono$core$link_to35976(var_args){
var args__30472__auto__ = [];
var len__30465__auto___35979 = arguments.length;
var i__30466__auto___35980 = (0);
while(true){
if((i__30466__auto___35980 < len__30465__auto___35979)){
args__30472__auto__.push((arguments[i__30466__auto___35980]));

var G__35981 = (i__30466__auto___35980 + (1));
i__30466__auto___35980 = G__35981;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((1) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35976.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30473__auto__);
});

sablono.core.link_to35976.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35976.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35976.cljs$lang$applyTo = (function (seq35977){
var G__35978 = cljs.core.first.call(null,seq35977);
var seq35977__$1 = cljs.core.next.call(null,seq35977);
return sablono.core.link_to35976.cljs$core$IFn$_invoke$arity$variadic(G__35978,seq35977__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35976);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35982 = (function sablono$core$mail_to35982(var_args){
var args__30472__auto__ = [];
var len__30465__auto___35989 = arguments.length;
var i__30466__auto___35990 = (0);
while(true){
if((i__30466__auto___35990 < len__30465__auto___35989)){
args__30472__auto__.push((arguments[i__30466__auto___35990]));

var G__35991 = (i__30466__auto___35990 + (1));
i__30466__auto___35990 = G__35991;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((1) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35982.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30473__auto__);
});

sablono.core.mail_to35982.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35985){
var vec__35986 = p__35985;
var content = cljs.core.nth.call(null,vec__35986,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__29193__auto__ = content;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35982.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35982.cljs$lang$applyTo = (function (seq35983){
var G__35984 = cljs.core.first.call(null,seq35983);
var seq35983__$1 = cljs.core.next.call(null,seq35983);
return sablono.core.mail_to35982.cljs$core$IFn$_invoke$arity$variadic(G__35984,seq35983__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35982);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35992 = (function sablono$core$unordered_list35992(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30070__auto__ = (function sablono$core$unordered_list35992_$_iter__35993(s__35994){
return (new cljs.core.LazySeq(null,(function (){
var s__35994__$1 = s__35994;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__35994__$1);
if(temp__5278__auto__){
var s__35994__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35994__$2)){
var c__30068__auto__ = cljs.core.chunk_first.call(null,s__35994__$2);
var size__30069__auto__ = cljs.core.count.call(null,c__30068__auto__);
var b__35996 = cljs.core.chunk_buffer.call(null,size__30069__auto__);
if((function (){var i__35995 = (0);
while(true){
if((i__35995 < size__30069__auto__)){
var x = cljs.core._nth.call(null,c__30068__auto__,i__35995);
cljs.core.chunk_append.call(null,b__35996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35997 = (i__35995 + (1));
i__35995 = G__35997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35996),sablono$core$unordered_list35992_$_iter__35993.call(null,cljs.core.chunk_rest.call(null,s__35994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35996),null);
}
} else {
var x = cljs.core.first.call(null,s__35994__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35992_$_iter__35993.call(null,cljs.core.rest.call(null,s__35994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30070__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35992);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35998 = (function sablono$core$ordered_list35998(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30070__auto__ = (function sablono$core$ordered_list35998_$_iter__35999(s__36000){
return (new cljs.core.LazySeq(null,(function (){
var s__36000__$1 = s__36000;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__36000__$1);
if(temp__5278__auto__){
var s__36000__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36000__$2)){
var c__30068__auto__ = cljs.core.chunk_first.call(null,s__36000__$2);
var size__30069__auto__ = cljs.core.count.call(null,c__30068__auto__);
var b__36002 = cljs.core.chunk_buffer.call(null,size__30069__auto__);
if((function (){var i__36001 = (0);
while(true){
if((i__36001 < size__30069__auto__)){
var x = cljs.core._nth.call(null,c__30068__auto__,i__36001);
cljs.core.chunk_append.call(null,b__36002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36003 = (i__36001 + (1));
i__36001 = G__36003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36002),sablono$core$ordered_list35998_$_iter__35999.call(null,cljs.core.chunk_rest.call(null,s__36000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36002),null);
}
} else {
var x = cljs.core.first.call(null,s__36000__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35998_$_iter__35999.call(null,cljs.core.rest.call(null,s__36000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30070__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35998);
/**
 * Create an image element.
 */
sablono.core.image36004 = (function sablono$core$image36004(var_args){
var G__36006 = arguments.length;
switch (G__36006) {
case 1:
return sablono.core.image36004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image36004.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36004.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36004.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36004);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36008_SHARP_,p2__36009_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36008_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36009_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36010_SHARP_,p2__36011_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36010_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36011_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29193__auto__ = value;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field36012 = (function sablono$core$color_field36012(var_args){
var G__36014 = arguments.length;
switch (G__36014) {
case 1:
return sablono.core.color_field36012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field36012.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.color_field36012.call(null,name__35946__auto__,null);
});

sablono.core.color_field36012.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.color_field36012.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36012);

/**
 * Creates a date input field.
 */
sablono.core.date_field36015 = (function sablono$core$date_field36015(var_args){
var G__36017 = arguments.length;
switch (G__36017) {
case 1:
return sablono.core.date_field36015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field36015.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.date_field36015.call(null,name__35946__auto__,null);
});

sablono.core.date_field36015.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.date_field36015.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36015);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36018 = (function sablono$core$datetime_field36018(var_args){
var G__36020 = arguments.length;
switch (G__36020) {
case 1:
return sablono.core.datetime_field36018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field36018.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.datetime_field36018.call(null,name__35946__auto__,null);
});

sablono.core.datetime_field36018.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.datetime_field36018.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36018);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36021 = (function sablono$core$datetime_local_field36021(var_args){
var G__36023 = arguments.length;
switch (G__36023) {
case 1:
return sablono.core.datetime_local_field36021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field36021.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.datetime_local_field36021.call(null,name__35946__auto__,null);
});

sablono.core.datetime_local_field36021.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.datetime_local_field36021.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36021);

/**
 * Creates a email input field.
 */
sablono.core.email_field36024 = (function sablono$core$email_field36024(var_args){
var G__36026 = arguments.length;
switch (G__36026) {
case 1:
return sablono.core.email_field36024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field36024.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.email_field36024.call(null,name__35946__auto__,null);
});

sablono.core.email_field36024.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.email_field36024.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36024);

/**
 * Creates a file input field.
 */
sablono.core.file_field36027 = (function sablono$core$file_field36027(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 1:
return sablono.core.file_field36027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field36027.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.file_field36027.call(null,name__35946__auto__,null);
});

sablono.core.file_field36027.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.file_field36027.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36027);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36030 = (function sablono$core$hidden_field36030(var_args){
var G__36032 = arguments.length;
switch (G__36032) {
case 1:
return sablono.core.hidden_field36030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field36030.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.hidden_field36030.call(null,name__35946__auto__,null);
});

sablono.core.hidden_field36030.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.hidden_field36030.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36030);

/**
 * Creates a month input field.
 */
sablono.core.month_field36033 = (function sablono$core$month_field36033(var_args){
var G__36035 = arguments.length;
switch (G__36035) {
case 1:
return sablono.core.month_field36033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field36033.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.month_field36033.call(null,name__35946__auto__,null);
});

sablono.core.month_field36033.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.month_field36033.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36033);

/**
 * Creates a number input field.
 */
sablono.core.number_field36036 = (function sablono$core$number_field36036(var_args){
var G__36038 = arguments.length;
switch (G__36038) {
case 1:
return sablono.core.number_field36036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field36036.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.number_field36036.call(null,name__35946__auto__,null);
});

sablono.core.number_field36036.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.number_field36036.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36036);

/**
 * Creates a password input field.
 */
sablono.core.password_field36039 = (function sablono$core$password_field36039(var_args){
var G__36041 = arguments.length;
switch (G__36041) {
case 1:
return sablono.core.password_field36039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field36039.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.password_field36039.call(null,name__35946__auto__,null);
});

sablono.core.password_field36039.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.password_field36039.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36039);

/**
 * Creates a range input field.
 */
sablono.core.range_field36042 = (function sablono$core$range_field36042(var_args){
var G__36044 = arguments.length;
switch (G__36044) {
case 1:
return sablono.core.range_field36042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field36042.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.range_field36042.call(null,name__35946__auto__,null);
});

sablono.core.range_field36042.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.range_field36042.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36042);

/**
 * Creates a search input field.
 */
sablono.core.search_field36045 = (function sablono$core$search_field36045(var_args){
var G__36047 = arguments.length;
switch (G__36047) {
case 1:
return sablono.core.search_field36045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field36045.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.search_field36045.call(null,name__35946__auto__,null);
});

sablono.core.search_field36045.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.search_field36045.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36045);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36048 = (function sablono$core$tel_field36048(var_args){
var G__36050 = arguments.length;
switch (G__36050) {
case 1:
return sablono.core.tel_field36048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field36048.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.tel_field36048.call(null,name__35946__auto__,null);
});

sablono.core.tel_field36048.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.tel_field36048.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36048);

/**
 * Creates a text input field.
 */
sablono.core.text_field36051 = (function sablono$core$text_field36051(var_args){
var G__36053 = arguments.length;
switch (G__36053) {
case 1:
return sablono.core.text_field36051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field36051.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.text_field36051.call(null,name__35946__auto__,null);
});

sablono.core.text_field36051.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.text_field36051.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36051);

/**
 * Creates a time input field.
 */
sablono.core.time_field36054 = (function sablono$core$time_field36054(var_args){
var G__36056 = arguments.length;
switch (G__36056) {
case 1:
return sablono.core.time_field36054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field36054.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.time_field36054.call(null,name__35946__auto__,null);
});

sablono.core.time_field36054.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.time_field36054.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36054);

/**
 * Creates a url input field.
 */
sablono.core.url_field36057 = (function sablono$core$url_field36057(var_args){
var G__36059 = arguments.length;
switch (G__36059) {
case 1:
return sablono.core.url_field36057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field36057.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.url_field36057.call(null,name__35946__auto__,null);
});

sablono.core.url_field36057.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.url_field36057.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36057);

/**
 * Creates a week input field.
 */
sablono.core.week_field36060 = (function sablono$core$week_field36060(var_args){
var G__36062 = arguments.length;
switch (G__36062) {
case 1:
return sablono.core.week_field36060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field36060.cljs$core$IFn$_invoke$arity$1 = (function (name__35946__auto__){
return sablono.core.week_field36060.call(null,name__35946__auto__,null);
});

sablono.core.week_field36060.cljs$core$IFn$_invoke$arity$2 = (function (name__35946__auto__,value__35947__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35946__auto__,value__35947__auto__);
});

sablono.core.week_field36060.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36060);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36080 = (function sablono$core$check_box36080(var_args){
var G__36082 = arguments.length;
switch (G__36082) {
case 1:
return sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36080.call(null,name,null);
});

sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36080.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36080.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29193__auto__ = value;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36080.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36080);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36084 = (function sablono$core$radio_button36084(var_args){
var G__36086 = arguments.length;
switch (G__36086) {
case 1:
return sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36084.call(null,group,null);
});

sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36084.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36084.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29193__auto__ = value;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36084.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36084);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36088 = (function sablono$core$select_options36088(coll){
var iter__30070__auto__ = (function sablono$core$select_options36088_$_iter__36089(s__36090){
return (new cljs.core.LazySeq(null,(function (){
var s__36090__$1 = s__36090;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__36090__$1);
if(temp__5278__auto__){
var s__36090__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36090__$2)){
var c__30068__auto__ = cljs.core.chunk_first.call(null,s__36090__$2);
var size__30069__auto__ = cljs.core.count.call(null,c__30068__auto__);
var b__36092 = cljs.core.chunk_buffer.call(null,size__30069__auto__);
if((function (){var i__36091 = (0);
while(true){
if((i__36091 < size__30069__auto__)){
var x = cljs.core._nth.call(null,c__30068__auto__,i__36091);
cljs.core.chunk_append.call(null,b__36092,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36093 = x;
var text = cljs.core.nth.call(null,vec__36093,(0),null);
var val = cljs.core.nth.call(null,vec__36093,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36093,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36088.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36099 = (i__36091 + (1));
i__36091 = G__36099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36092),sablono$core$select_options36088_$_iter__36089.call(null,cljs.core.chunk_rest.call(null,s__36090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36092),null);
}
} else {
var x = cljs.core.first.call(null,s__36090__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36096 = x;
var text = cljs.core.nth.call(null,vec__36096,(0),null);
var val = cljs.core.nth.call(null,vec__36096,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36096,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36088.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36088_$_iter__36089.call(null,cljs.core.rest.call(null,s__36090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30070__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36088);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36100 = (function sablono$core$drop_down36100(var_args){
var G__36102 = arguments.length;
switch (G__36102) {
case 2:
return sablono.core.drop_down36100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36100.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down36100.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36100.call(null,name,options,null);
});

sablono.core.drop_down36100.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36100.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36100);
/**
 * Creates a text area element.
 */
sablono.core.text_area36104 = (function sablono$core$text_area36104(var_args){
var G__36106 = arguments.length;
switch (G__36106) {
case 1:
return sablono.core.text_area36104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area36104.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36104.call(null,name,null);
});

sablono.core.text_area36104.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__29193__auto__ = value;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36104.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36104);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36108 = (function sablono$core$label36108(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36108);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36109 = (function sablono$core$submit_button36109(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36109);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36110 = (function sablono$core$reset_button36110(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36110);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36111 = (function sablono$core$form_to36111(var_args){
var args__30472__auto__ = [];
var len__30465__auto___36118 = arguments.length;
var i__30466__auto___36119 = (0);
while(true){
if((i__30466__auto___36119 < len__30465__auto___36118)){
args__30472__auto__.push((arguments[i__30466__auto___36119]));

var G__36120 = (i__30466__auto___36119 + (1));
i__30466__auto___36119 = G__36120;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((1) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36111.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30473__auto__);
});

sablono.core.form_to36111.cljs$core$IFn$_invoke$arity$variadic = (function (p__36114,body){
var vec__36115 = p__36114;
var method = cljs.core.nth.call(null,vec__36115,(0),null);
var action = cljs.core.nth.call(null,vec__36115,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36111.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36111.cljs$lang$applyTo = (function (seq36112){
var G__36113 = cljs.core.first.call(null,seq36112);
var seq36112__$1 = cljs.core.next.call(null,seq36112);
return sablono.core.form_to36111.cljs$core$IFn$_invoke$arity$variadic(G__36113,seq36112__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36111);

//# sourceMappingURL=core.js.map?rel=1502864288911
