// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38106){
var map__38107 = p__38106;
var map__38107__$1 = ((((!((map__38107 == null)))?((((map__38107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38107):map__38107);
var m = map__38107__$1;
var n = cljs.core.get.call(null,map__38107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38109_38131 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38110_38132 = null;
var count__38111_38133 = (0);
var i__38112_38134 = (0);
while(true){
if((i__38112_38134 < count__38111_38133)){
var f_38135 = cljs.core._nth.call(null,chunk__38110_38132,i__38112_38134);
cljs.core.println.call(null,"  ",f_38135);

var G__38136 = seq__38109_38131;
var G__38137 = chunk__38110_38132;
var G__38138 = count__38111_38133;
var G__38139 = (i__38112_38134 + (1));
seq__38109_38131 = G__38136;
chunk__38110_38132 = G__38137;
count__38111_38133 = G__38138;
i__38112_38134 = G__38139;
continue;
} else {
var temp__5278__auto___38140 = cljs.core.seq.call(null,seq__38109_38131);
if(temp__5278__auto___38140){
var seq__38109_38141__$1 = temp__5278__auto___38140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38109_38141__$1)){
var c__30119__auto___38142 = cljs.core.chunk_first.call(null,seq__38109_38141__$1);
var G__38143 = cljs.core.chunk_rest.call(null,seq__38109_38141__$1);
var G__38144 = c__30119__auto___38142;
var G__38145 = cljs.core.count.call(null,c__30119__auto___38142);
var G__38146 = (0);
seq__38109_38131 = G__38143;
chunk__38110_38132 = G__38144;
count__38111_38133 = G__38145;
i__38112_38134 = G__38146;
continue;
} else {
var f_38147 = cljs.core.first.call(null,seq__38109_38141__$1);
cljs.core.println.call(null,"  ",f_38147);

var G__38148 = cljs.core.next.call(null,seq__38109_38141__$1);
var G__38149 = null;
var G__38150 = (0);
var G__38151 = (0);
seq__38109_38131 = G__38148;
chunk__38110_38132 = G__38149;
count__38111_38133 = G__38150;
i__38112_38134 = G__38151;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38152 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29193__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38152);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38152)))?cljs.core.second.call(null,arglists_38152):arglists_38152));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38113_38153 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38114_38154 = null;
var count__38115_38155 = (0);
var i__38116_38156 = (0);
while(true){
if((i__38116_38156 < count__38115_38155)){
var vec__38117_38157 = cljs.core._nth.call(null,chunk__38114_38154,i__38116_38156);
var name_38158 = cljs.core.nth.call(null,vec__38117_38157,(0),null);
var map__38120_38159 = cljs.core.nth.call(null,vec__38117_38157,(1),null);
var map__38120_38160__$1 = ((((!((map__38120_38159 == null)))?((((map__38120_38159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38120_38159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38120_38159):map__38120_38159);
var doc_38161 = cljs.core.get.call(null,map__38120_38160__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38162 = cljs.core.get.call(null,map__38120_38160__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38158);

cljs.core.println.call(null," ",arglists_38162);

if(cljs.core.truth_(doc_38161)){
cljs.core.println.call(null," ",doc_38161);
} else {
}

var G__38163 = seq__38113_38153;
var G__38164 = chunk__38114_38154;
var G__38165 = count__38115_38155;
var G__38166 = (i__38116_38156 + (1));
seq__38113_38153 = G__38163;
chunk__38114_38154 = G__38164;
count__38115_38155 = G__38165;
i__38116_38156 = G__38166;
continue;
} else {
var temp__5278__auto___38167 = cljs.core.seq.call(null,seq__38113_38153);
if(temp__5278__auto___38167){
var seq__38113_38168__$1 = temp__5278__auto___38167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38113_38168__$1)){
var c__30119__auto___38169 = cljs.core.chunk_first.call(null,seq__38113_38168__$1);
var G__38170 = cljs.core.chunk_rest.call(null,seq__38113_38168__$1);
var G__38171 = c__30119__auto___38169;
var G__38172 = cljs.core.count.call(null,c__30119__auto___38169);
var G__38173 = (0);
seq__38113_38153 = G__38170;
chunk__38114_38154 = G__38171;
count__38115_38155 = G__38172;
i__38116_38156 = G__38173;
continue;
} else {
var vec__38122_38174 = cljs.core.first.call(null,seq__38113_38168__$1);
var name_38175 = cljs.core.nth.call(null,vec__38122_38174,(0),null);
var map__38125_38176 = cljs.core.nth.call(null,vec__38122_38174,(1),null);
var map__38125_38177__$1 = ((((!((map__38125_38176 == null)))?((((map__38125_38176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38125_38176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38125_38176):map__38125_38176);
var doc_38178 = cljs.core.get.call(null,map__38125_38177__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38179 = cljs.core.get.call(null,map__38125_38177__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38175);

cljs.core.println.call(null," ",arglists_38179);

if(cljs.core.truth_(doc_38178)){
cljs.core.println.call(null," ",doc_38178);
} else {
}

var G__38180 = cljs.core.next.call(null,seq__38113_38168__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__38113_38153 = G__38180;
chunk__38114_38154 = G__38181;
count__38115_38155 = G__38182;
i__38116_38156 = G__38183;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__38127 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38128 = null;
var count__38129 = (0);
var i__38130 = (0);
while(true){
if((i__38130 < count__38129)){
var role = cljs.core._nth.call(null,chunk__38128,i__38130);
var temp__5278__auto___38184__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38184__$1)){
var spec_38185 = temp__5278__auto___38184__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38185));
} else {
}

var G__38186 = seq__38127;
var G__38187 = chunk__38128;
var G__38188 = count__38129;
var G__38189 = (i__38130 + (1));
seq__38127 = G__38186;
chunk__38128 = G__38187;
count__38129 = G__38188;
i__38130 = G__38189;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38127);
if(temp__5278__auto____$1){
var seq__38127__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38127__$1)){
var c__30119__auto__ = cljs.core.chunk_first.call(null,seq__38127__$1);
var G__38190 = cljs.core.chunk_rest.call(null,seq__38127__$1);
var G__38191 = c__30119__auto__;
var G__38192 = cljs.core.count.call(null,c__30119__auto__);
var G__38193 = (0);
seq__38127 = G__38190;
chunk__38128 = G__38191;
count__38129 = G__38192;
i__38130 = G__38193;
continue;
} else {
var role = cljs.core.first.call(null,seq__38127__$1);
var temp__5278__auto___38194__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38194__$2)){
var spec_38195 = temp__5278__auto___38194__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38195));
} else {
}

var G__38196 = cljs.core.next.call(null,seq__38127__$1);
var G__38197 = null;
var G__38198 = (0);
var G__38199 = (0);
seq__38127 = G__38196;
chunk__38128 = G__38197;
count__38129 = G__38198;
i__38130 = G__38199;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502864293470
