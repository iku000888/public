// Compiled by ClojureScript 1.9.854 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5276__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5276__auto__)){
var doc = temp__5276__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__30313__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31990_31992 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31991_31993 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31990_31992,_STAR_print_fn_STAR_31991_31993,sb__30313__auto__){
return (function (x__30314__auto__){
return sb__30313__auto__.append(x__30314__auto__);
});})(_STAR_print_newline_STAR_31990_31992,_STAR_print_fn_STAR_31991_31993,sb__30313__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31991_31993;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31990_31992;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__30313__auto__)].join('');
}catch (e31988){if((e31988 instanceof Error)){
var e1 = e31988;
try{return obj.toString();
}catch (e31989){if((e31989 instanceof Error)){
var e2 = e31989;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e31989;

}
}} else {
throw e31988;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_31994 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_31994;
}});

//# sourceMappingURL=utils.js.map?rel=1502864286536
