// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33476 = arguments.length;
switch (G__33476) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33477 = (function (f,blockable,meta33478){
this.f = f;
this.blockable = blockable;
this.meta33478 = meta33478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33479,meta33478__$1){
var self__ = this;
var _33479__$1 = this;
return (new cljs.core.async.t_cljs$core$async33477(self__.f,self__.blockable,meta33478__$1));
});

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33479){
var self__ = this;
var _33479__$1 = this;
return self__.meta33478;
});

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33478","meta33478",-869309637,null)], null);
});

cljs.core.async.t_cljs$core$async33477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33477";

cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async33477");
});

cljs.core.async.__GT_t_cljs$core$async33477 = (function cljs$core$async$__GT_t_cljs$core$async33477(f__$1,blockable__$1,meta33478){
return (new cljs.core.async.t_cljs$core$async33477(f__$1,blockable__$1,meta33478));
});

}

return (new cljs.core.async.t_cljs$core$async33477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33483 = arguments.length;
switch (G__33483) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33486 = arguments.length;
switch (G__33486) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33489 = arguments.length;
switch (G__33489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33491 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33491);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33491,ret){
return (function (){
return fn1.call(null,val_33491);
});})(val_33491,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33493 = arguments.length;
switch (G__33493) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30231__auto___33496 = n;
var x_33497 = (0);
while(true){
if((x_33497 < n__30231__auto___33496)){
(a[x_33497] = (0));

var G__33498 = (x_33497 + (1));
x_33497 = G__33498;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33499 = (i + (1));
i = G__33499;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33500 = (function (flag,meta33501){
this.flag = flag;
this.meta33501 = meta33501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33502,meta33501__$1){
var self__ = this;
var _33502__$1 = this;
return (new cljs.core.async.t_cljs$core$async33500(self__.flag,meta33501__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33502){
var self__ = this;
var _33502__$1 = this;
return self__.meta33501;
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33501","meta33501",1128355470,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33500";

cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async33500");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33500 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33500(flag__$1,meta33501){
return (new cljs.core.async.t_cljs$core$async33500(flag__$1,meta33501));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33500(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33503 = (function (flag,cb,meta33504){
this.flag = flag;
this.cb = cb;
this.meta33504 = meta33504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33505,meta33504__$1){
var self__ = this;
var _33505__$1 = this;
return (new cljs.core.async.t_cljs$core$async33503(self__.flag,self__.cb,meta33504__$1));
});

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33505){
var self__ = this;
var _33505__$1 = this;
return self__.meta33504;
});

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33504","meta33504",927872549,null)], null);
});

cljs.core.async.t_cljs$core$async33503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33503";

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async33503");
});

cljs.core.async.__GT_t_cljs$core$async33503 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33503(flag__$1,cb__$1,meta33504){
return (new cljs.core.async.t_cljs$core$async33503(flag__$1,cb__$1,meta33504));
});

}

return (new cljs.core.async.t_cljs$core$async33503(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33506_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33506_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33507_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33507_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29193__auto__ = wport;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33508 = (i + (1));
i = G__33508;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29193__auto__ = ret;
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__29181__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29181__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29181__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30472__auto__ = [];
var len__30465__auto___33514 = arguments.length;
var i__30466__auto___33515 = (0);
while(true){
if((i__30466__auto___33515 < len__30465__auto___33514)){
args__30472__auto__.push((arguments[i__30466__auto___33515]));

var G__33516 = (i__30466__auto___33515 + (1));
i__30466__auto___33515 = G__33516;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((1) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30473__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33511){
var map__33512 = p__33511;
var map__33512__$1 = ((((!((map__33512 == null)))?((((map__33512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33512):map__33512);
var opts = map__33512__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33509){
var G__33510 = cljs.core.first.call(null,seq33509);
var seq33509__$1 = cljs.core.next.call(null,seq33509);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33510,seq33509__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33518 = arguments.length;
switch (G__33518) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33416__auto___33564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___33564){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___33564){
return (function (state_33542){
var state_val_33543 = (state_33542[(1)]);
if((state_val_33543 === (7))){
var inst_33538 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33544_33565 = state_33542__$1;
(statearr_33544_33565[(2)] = inst_33538);

(statearr_33544_33565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (1))){
var state_33542__$1 = state_33542;
var statearr_33545_33566 = state_33542__$1;
(statearr_33545_33566[(2)] = null);

(statearr_33545_33566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (4))){
var inst_33521 = (state_33542[(7)]);
var inst_33521__$1 = (state_33542[(2)]);
var inst_33522 = (inst_33521__$1 == null);
var state_33542__$1 = (function (){var statearr_33546 = state_33542;
(statearr_33546[(7)] = inst_33521__$1);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33522)){
var statearr_33547_33567 = state_33542__$1;
(statearr_33547_33567[(1)] = (5));

} else {
var statearr_33548_33568 = state_33542__$1;
(statearr_33548_33568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (13))){
var state_33542__$1 = state_33542;
var statearr_33549_33569 = state_33542__$1;
(statearr_33549_33569[(2)] = null);

(statearr_33549_33569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (6))){
var inst_33521 = (state_33542[(7)]);
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33542__$1,(11),to,inst_33521);
} else {
if((state_val_33543 === (3))){
var inst_33540 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33542__$1,inst_33540);
} else {
if((state_val_33543 === (12))){
var state_33542__$1 = state_33542;
var statearr_33550_33570 = state_33542__$1;
(statearr_33550_33570[(2)] = null);

(statearr_33550_33570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (2))){
var state_33542__$1 = state_33542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33542__$1,(4),from);
} else {
if((state_val_33543 === (11))){
var inst_33531 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
if(cljs.core.truth_(inst_33531)){
var statearr_33551_33571 = state_33542__$1;
(statearr_33551_33571[(1)] = (12));

} else {
var statearr_33552_33572 = state_33542__$1;
(statearr_33552_33572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (9))){
var state_33542__$1 = state_33542;
var statearr_33553_33573 = state_33542__$1;
(statearr_33553_33573[(2)] = null);

(statearr_33553_33573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (5))){
var state_33542__$1 = state_33542;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33554_33574 = state_33542__$1;
(statearr_33554_33574[(1)] = (8));

} else {
var statearr_33555_33575 = state_33542__$1;
(statearr_33555_33575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (14))){
var inst_33536 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33556_33576 = state_33542__$1;
(statearr_33556_33576[(2)] = inst_33536);

(statearr_33556_33576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (10))){
var inst_33528 = (state_33542[(2)]);
var state_33542__$1 = state_33542;
var statearr_33557_33577 = state_33542__$1;
(statearr_33557_33577[(2)] = inst_33528);

(statearr_33557_33577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33543 === (8))){
var inst_33525 = cljs.core.async.close_BANG_.call(null,to);
var state_33542__$1 = state_33542;
var statearr_33558_33578 = state_33542__$1;
(statearr_33558_33578[(2)] = inst_33525);

(statearr_33558_33578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___33564))
;
return ((function (switch__33326__auto__,c__33416__auto___33564){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_33559 = [null,null,null,null,null,null,null,null];
(statearr_33559[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_33559[(1)] = (1));

return statearr_33559;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_33542){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33560){if((e33560 instanceof Object)){
var ex__33330__auto__ = e33560;
var statearr_33561_33579 = state_33542;
(statearr_33561_33579[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33580 = state_33542;
state_33542 = G__33580;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_33542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_33542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___33564))
})();
var state__33418__auto__ = (function (){var statearr_33562 = f__33417__auto__.call(null);
(statearr_33562[(6)] = c__33416__auto___33564);

return statearr_33562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___33564))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33581){
var vec__33582 = p__33581;
var v = cljs.core.nth.call(null,vec__33582,(0),null);
var p = cljs.core.nth.call(null,vec__33582,(1),null);
var job = vec__33582;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33416__auto___33753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results){
return (function (state_33589){
var state_val_33590 = (state_33589[(1)]);
if((state_val_33590 === (1))){
var state_33589__$1 = state_33589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33589__$1,(2),res,v);
} else {
if((state_val_33590 === (2))){
var inst_33586 = (state_33589[(2)]);
var inst_33587 = cljs.core.async.close_BANG_.call(null,res);
var state_33589__$1 = (function (){var statearr_33591 = state_33589;
(statearr_33591[(7)] = inst_33586);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33589__$1,inst_33587);
} else {
return null;
}
}
});})(c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results))
;
return ((function (switch__33326__auto__,c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_33592 = [null,null,null,null,null,null,null,null];
(statearr_33592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__);

(statearr_33592[(1)] = (1));

return statearr_33592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1 = (function (state_33589){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33593){if((e33593 instanceof Object)){
var ex__33330__auto__ = e33593;
var statearr_33594_33754 = state_33589;
(statearr_33594_33754[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33755 = state_33589;
state_33589 = G__33755;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = function(state_33589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1.call(this,state_33589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results))
})();
var state__33418__auto__ = (function (){var statearr_33595 = f__33417__auto__.call(null);
(statearr_33595[(6)] = c__33416__auto___33753);

return statearr_33595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___33753,res,vec__33582,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33596){
var vec__33597 = p__33596;
var v = cljs.core.nth.call(null,vec__33597,(0),null);
var p = cljs.core.nth.call(null,vec__33597,(1),null);
var job = vec__33597;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30231__auto___33756 = n;
var __33757 = (0);
while(true){
if((__33757 < n__30231__auto___33756)){
var G__33600_33758 = type;
var G__33600_33759__$1 = (((G__33600_33758 instanceof cljs.core.Keyword))?G__33600_33758.fqn:null);
switch (G__33600_33759__$1) {
case "compute":
var c__33416__auto___33761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33757,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (__33757,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33615_33762 = state_33613__$1;
(statearr_33615_33762[(2)] = null);

(statearr_33615_33762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(4),jobs);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (4))){
var inst_33603 = (state_33613[(2)]);
var inst_33604 = process.call(null,inst_33603);
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33604)){
var statearr_33616_33763 = state_33613__$1;
(statearr_33616_33763[(1)] = (5));

} else {
var statearr_33617_33764 = state_33613__$1;
(statearr_33617_33764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var state_33613__$1 = state_33613;
var statearr_33618_33765 = state_33613__$1;
(statearr_33618_33765[(2)] = null);

(statearr_33618_33765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var state_33613__$1 = state_33613;
var statearr_33619_33766 = state_33613__$1;
(statearr_33619_33766[(2)] = null);

(statearr_33619_33766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33620_33767 = state_33613__$1;
(statearr_33620_33767[(2)] = inst_33609);

(statearr_33620_33767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33757,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
;
return ((function (__33757,switch__33326__auto__,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_33621 = [null,null,null,null,null,null,null];
(statearr_33621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__);

(statearr_33621[(1)] = (1));

return statearr_33621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1 = (function (state_33613){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33622){if((e33622 instanceof Object)){
var ex__33330__auto__ = e33622;
var statearr_33623_33768 = state_33613;
(statearr_33623_33768[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33769 = state_33613;
state_33613 = G__33769;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__;
})()
;})(__33757,switch__33326__auto__,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
})();
var state__33418__auto__ = (function (){var statearr_33624 = f__33417__auto__.call(null);
(statearr_33624[(6)] = c__33416__auto___33761);

return statearr_33624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(__33757,c__33416__auto___33761,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
);


break;
case "async":
var c__33416__auto___33770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33757,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (__33757,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function (state_33637){
var state_val_33638 = (state_33637[(1)]);
if((state_val_33638 === (1))){
var state_33637__$1 = state_33637;
var statearr_33639_33771 = state_33637__$1;
(statearr_33639_33771[(2)] = null);

(statearr_33639_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (2))){
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33637__$1,(4),jobs);
} else {
if((state_val_33638 === (3))){
var inst_33635 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33637__$1,inst_33635);
} else {
if((state_val_33638 === (4))){
var inst_33627 = (state_33637[(2)]);
var inst_33628 = async.call(null,inst_33627);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33628)){
var statearr_33640_33772 = state_33637__$1;
(statearr_33640_33772[(1)] = (5));

} else {
var statearr_33641_33773 = state_33637__$1;
(statearr_33641_33773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (5))){
var state_33637__$1 = state_33637;
var statearr_33642_33774 = state_33637__$1;
(statearr_33642_33774[(2)] = null);

(statearr_33642_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (6))){
var state_33637__$1 = state_33637;
var statearr_33643_33775 = state_33637__$1;
(statearr_33643_33775[(2)] = null);

(statearr_33643_33775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (7))){
var inst_33633 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33644_33776 = state_33637__$1;
(statearr_33644_33776[(2)] = inst_33633);

(statearr_33644_33776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33757,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
;
return ((function (__33757,switch__33326__auto__,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_33645 = [null,null,null,null,null,null,null];
(statearr_33645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__);

(statearr_33645[(1)] = (1));

return statearr_33645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1 = (function (state_33637){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33646){if((e33646 instanceof Object)){
var ex__33330__auto__ = e33646;
var statearr_33647_33777 = state_33637;
(statearr_33647_33777[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33778 = state_33637;
state_33637 = G__33778;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__;
})()
;})(__33757,switch__33326__auto__,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
})();
var state__33418__auto__ = (function (){var statearr_33648 = f__33417__auto__.call(null);
(statearr_33648[(6)] = c__33416__auto___33770);

return statearr_33648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(__33757,c__33416__auto___33770,G__33600_33758,G__33600_33759__$1,n__30231__auto___33756,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33600_33759__$1)].join('')));

}

var G__33779 = (__33757 + (1));
__33757 = G__33779;
continue;
} else {
}
break;
}

var c__33416__auto___33780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___33780,jobs,results,process,async){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___33780,jobs,results,process,async){
return (function (state_33670){
var state_val_33671 = (state_33670[(1)]);
if((state_val_33671 === (1))){
var state_33670__$1 = state_33670;
var statearr_33672_33781 = state_33670__$1;
(statearr_33672_33781[(2)] = null);

(statearr_33672_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33671 === (2))){
var state_33670__$1 = state_33670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33670__$1,(4),from);
} else {
if((state_val_33671 === (3))){
var inst_33668 = (state_33670[(2)]);
var state_33670__$1 = state_33670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33670__$1,inst_33668);
} else {
if((state_val_33671 === (4))){
var inst_33651 = (state_33670[(7)]);
var inst_33651__$1 = (state_33670[(2)]);
var inst_33652 = (inst_33651__$1 == null);
var state_33670__$1 = (function (){var statearr_33673 = state_33670;
(statearr_33673[(7)] = inst_33651__$1);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33674_33782 = state_33670__$1;
(statearr_33674_33782[(1)] = (5));

} else {
var statearr_33675_33783 = state_33670__$1;
(statearr_33675_33783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33671 === (5))){
var inst_33654 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33670__$1 = state_33670;
var statearr_33676_33784 = state_33670__$1;
(statearr_33676_33784[(2)] = inst_33654);

(statearr_33676_33784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33671 === (6))){
var inst_33656 = (state_33670[(8)]);
var inst_33651 = (state_33670[(7)]);
var inst_33656__$1 = cljs.core.async.chan.call(null,(1));
var inst_33657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33658 = [inst_33651,inst_33656__$1];
var inst_33659 = (new cljs.core.PersistentVector(null,2,(5),inst_33657,inst_33658,null));
var state_33670__$1 = (function (){var statearr_33677 = state_33670;
(statearr_33677[(8)] = inst_33656__$1);

return statearr_33677;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33670__$1,(8),jobs,inst_33659);
} else {
if((state_val_33671 === (7))){
var inst_33666 = (state_33670[(2)]);
var state_33670__$1 = state_33670;
var statearr_33678_33785 = state_33670__$1;
(statearr_33678_33785[(2)] = inst_33666);

(statearr_33678_33785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33671 === (8))){
var inst_33656 = (state_33670[(8)]);
var inst_33661 = (state_33670[(2)]);
var state_33670__$1 = (function (){var statearr_33679 = state_33670;
(statearr_33679[(9)] = inst_33661);

return statearr_33679;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33670__$1,(9),results,inst_33656);
} else {
if((state_val_33671 === (9))){
var inst_33663 = (state_33670[(2)]);
var state_33670__$1 = (function (){var statearr_33680 = state_33670;
(statearr_33680[(10)] = inst_33663);

return statearr_33680;
})();
var statearr_33681_33786 = state_33670__$1;
(statearr_33681_33786[(2)] = null);

(statearr_33681_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___33780,jobs,results,process,async))
;
return ((function (switch__33326__auto__,c__33416__auto___33780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_33682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__);

(statearr_33682[(1)] = (1));

return statearr_33682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1 = (function (state_33670){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33683){if((e33683 instanceof Object)){
var ex__33330__auto__ = e33683;
var statearr_33684_33787 = state_33670;
(statearr_33684_33787[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33788 = state_33670;
state_33670 = G__33788;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = function(state_33670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1.call(this,state_33670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___33780,jobs,results,process,async))
})();
var state__33418__auto__ = (function (){var statearr_33685 = f__33417__auto__.call(null);
(statearr_33685[(6)] = c__33416__auto___33780);

return statearr_33685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___33780,jobs,results,process,async))
);


var c__33416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto__,jobs,results,process,async){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto__,jobs,results,process,async){
return (function (state_33723){
var state_val_33724 = (state_33723[(1)]);
if((state_val_33724 === (7))){
var inst_33719 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33725_33789 = state_33723__$1;
(statearr_33725_33789[(2)] = inst_33719);

(statearr_33725_33789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (20))){
var state_33723__$1 = state_33723;
var statearr_33726_33790 = state_33723__$1;
(statearr_33726_33790[(2)] = null);

(statearr_33726_33790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (1))){
var state_33723__$1 = state_33723;
var statearr_33727_33791 = state_33723__$1;
(statearr_33727_33791[(2)] = null);

(statearr_33727_33791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (4))){
var inst_33688 = (state_33723[(7)]);
var inst_33688__$1 = (state_33723[(2)]);
var inst_33689 = (inst_33688__$1 == null);
var state_33723__$1 = (function (){var statearr_33728 = state_33723;
(statearr_33728[(7)] = inst_33688__$1);

return statearr_33728;
})();
if(cljs.core.truth_(inst_33689)){
var statearr_33729_33792 = state_33723__$1;
(statearr_33729_33792[(1)] = (5));

} else {
var statearr_33730_33793 = state_33723__$1;
(statearr_33730_33793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (15))){
var inst_33701 = (state_33723[(8)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33723__$1,(18),to,inst_33701);
} else {
if((state_val_33724 === (21))){
var inst_33714 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33731_33794 = state_33723__$1;
(statearr_33731_33794[(2)] = inst_33714);

(statearr_33731_33794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (13))){
var inst_33716 = (state_33723[(2)]);
var state_33723__$1 = (function (){var statearr_33732 = state_33723;
(statearr_33732[(9)] = inst_33716);

return statearr_33732;
})();
var statearr_33733_33795 = state_33723__$1;
(statearr_33733_33795[(2)] = null);

(statearr_33733_33795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (6))){
var inst_33688 = (state_33723[(7)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33723__$1,(11),inst_33688);
} else {
if((state_val_33724 === (17))){
var inst_33709 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
if(cljs.core.truth_(inst_33709)){
var statearr_33734_33796 = state_33723__$1;
(statearr_33734_33796[(1)] = (19));

} else {
var statearr_33735_33797 = state_33723__$1;
(statearr_33735_33797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (3))){
var inst_33721 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33723__$1,inst_33721);
} else {
if((state_val_33724 === (12))){
var inst_33698 = (state_33723[(10)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33723__$1,(14),inst_33698);
} else {
if((state_val_33724 === (2))){
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33723__$1,(4),results);
} else {
if((state_val_33724 === (19))){
var state_33723__$1 = state_33723;
var statearr_33736_33798 = state_33723__$1;
(statearr_33736_33798[(2)] = null);

(statearr_33736_33798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (11))){
var inst_33698 = (state_33723[(2)]);
var state_33723__$1 = (function (){var statearr_33737 = state_33723;
(statearr_33737[(10)] = inst_33698);

return statearr_33737;
})();
var statearr_33738_33799 = state_33723__$1;
(statearr_33738_33799[(2)] = null);

(statearr_33738_33799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (9))){
var state_33723__$1 = state_33723;
var statearr_33739_33800 = state_33723__$1;
(statearr_33739_33800[(2)] = null);

(statearr_33739_33800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (5))){
var state_33723__$1 = state_33723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33740_33801 = state_33723__$1;
(statearr_33740_33801[(1)] = (8));

} else {
var statearr_33741_33802 = state_33723__$1;
(statearr_33741_33802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (14))){
var inst_33701 = (state_33723[(8)]);
var inst_33703 = (state_33723[(11)]);
var inst_33701__$1 = (state_33723[(2)]);
var inst_33702 = (inst_33701__$1 == null);
var inst_33703__$1 = cljs.core.not.call(null,inst_33702);
var state_33723__$1 = (function (){var statearr_33742 = state_33723;
(statearr_33742[(8)] = inst_33701__$1);

(statearr_33742[(11)] = inst_33703__$1);

return statearr_33742;
})();
if(inst_33703__$1){
var statearr_33743_33803 = state_33723__$1;
(statearr_33743_33803[(1)] = (15));

} else {
var statearr_33744_33804 = state_33723__$1;
(statearr_33744_33804[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (16))){
var inst_33703 = (state_33723[(11)]);
var state_33723__$1 = state_33723;
var statearr_33745_33805 = state_33723__$1;
(statearr_33745_33805[(2)] = inst_33703);

(statearr_33745_33805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (10))){
var inst_33695 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33746_33806 = state_33723__$1;
(statearr_33746_33806[(2)] = inst_33695);

(statearr_33746_33806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (18))){
var inst_33706 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33747_33807 = state_33723__$1;
(statearr_33747_33807[(2)] = inst_33706);

(statearr_33747_33807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (8))){
var inst_33692 = cljs.core.async.close_BANG_.call(null,to);
var state_33723__$1 = state_33723;
var statearr_33748_33808 = state_33723__$1;
(statearr_33748_33808[(2)] = inst_33692);

(statearr_33748_33808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto__,jobs,results,process,async))
;
return ((function (switch__33326__auto__,c__33416__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1 = (function (state_33723){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33750){if((e33750 instanceof Object)){
var ex__33330__auto__ = e33750;
var statearr_33751_33809 = state_33723;
(statearr_33751_33809[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_33723;
state_33723 = G__33810;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__ = function(state_33723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1.call(this,state_33723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto__,jobs,results,process,async))
})();
var state__33418__auto__ = (function (){var statearr_33752 = f__33417__auto__.call(null);
(statearr_33752[(6)] = c__33416__auto__);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto__,jobs,results,process,async))
);

return c__33416__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33812 = arguments.length;
switch (G__33812) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33818 = arguments.length;
switch (G__33818) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33416__auto___33867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___33867,tc,fc){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___33867,tc,fc){
return (function (state_33844){
var state_val_33845 = (state_33844[(1)]);
if((state_val_33845 === (7))){
var inst_33840 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33846_33868 = state_33844__$1;
(statearr_33846_33868[(2)] = inst_33840);

(statearr_33846_33868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (1))){
var state_33844__$1 = state_33844;
var statearr_33847_33869 = state_33844__$1;
(statearr_33847_33869[(2)] = null);

(statearr_33847_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (4))){
var inst_33821 = (state_33844[(7)]);
var inst_33821__$1 = (state_33844[(2)]);
var inst_33822 = (inst_33821__$1 == null);
var state_33844__$1 = (function (){var statearr_33848 = state_33844;
(statearr_33848[(7)] = inst_33821__$1);

return statearr_33848;
})();
if(cljs.core.truth_(inst_33822)){
var statearr_33849_33870 = state_33844__$1;
(statearr_33849_33870[(1)] = (5));

} else {
var statearr_33850_33871 = state_33844__$1;
(statearr_33850_33871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (13))){
var state_33844__$1 = state_33844;
var statearr_33851_33872 = state_33844__$1;
(statearr_33851_33872[(2)] = null);

(statearr_33851_33872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (6))){
var inst_33821 = (state_33844[(7)]);
var inst_33827 = p.call(null,inst_33821);
var state_33844__$1 = state_33844;
if(cljs.core.truth_(inst_33827)){
var statearr_33852_33873 = state_33844__$1;
(statearr_33852_33873[(1)] = (9));

} else {
var statearr_33853_33874 = state_33844__$1;
(statearr_33853_33874[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (3))){
var inst_33842 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33844__$1,inst_33842);
} else {
if((state_val_33845 === (12))){
var state_33844__$1 = state_33844;
var statearr_33854_33875 = state_33844__$1;
(statearr_33854_33875[(2)] = null);

(statearr_33854_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (2))){
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33844__$1,(4),ch);
} else {
if((state_val_33845 === (11))){
var inst_33821 = (state_33844[(7)]);
var inst_33831 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33844__$1,(8),inst_33831,inst_33821);
} else {
if((state_val_33845 === (9))){
var state_33844__$1 = state_33844;
var statearr_33855_33876 = state_33844__$1;
(statearr_33855_33876[(2)] = tc);

(statearr_33855_33876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (5))){
var inst_33824 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33825 = cljs.core.async.close_BANG_.call(null,fc);
var state_33844__$1 = (function (){var statearr_33856 = state_33844;
(statearr_33856[(8)] = inst_33824);

return statearr_33856;
})();
var statearr_33857_33877 = state_33844__$1;
(statearr_33857_33877[(2)] = inst_33825);

(statearr_33857_33877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (14))){
var inst_33838 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33858_33878 = state_33844__$1;
(statearr_33858_33878[(2)] = inst_33838);

(statearr_33858_33878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (10))){
var state_33844__$1 = state_33844;
var statearr_33859_33879 = state_33844__$1;
(statearr_33859_33879[(2)] = fc);

(statearr_33859_33879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (8))){
var inst_33833 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
if(cljs.core.truth_(inst_33833)){
var statearr_33860_33880 = state_33844__$1;
(statearr_33860_33880[(1)] = (12));

} else {
var statearr_33861_33881 = state_33844__$1;
(statearr_33861_33881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___33867,tc,fc))
;
return ((function (switch__33326__auto__,c__33416__auto___33867,tc,fc){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_33862 = [null,null,null,null,null,null,null,null,null];
(statearr_33862[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_33862[(1)] = (1));

return statearr_33862;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_33844){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__33330__auto__ = e33863;
var statearr_33864_33882 = state_33844;
(statearr_33864_33882[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_33844;
state_33844 = G__33883;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_33844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_33844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___33867,tc,fc))
})();
var state__33418__auto__ = (function (){var statearr_33865 = f__33417__auto__.call(null);
(statearr_33865[(6)] = c__33416__auto___33867);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___33867,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto__){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto__){
return (function (state_33904){
var state_val_33905 = (state_33904[(1)]);
if((state_val_33905 === (7))){
var inst_33900 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33906_33924 = state_33904__$1;
(statearr_33906_33924[(2)] = inst_33900);

(statearr_33906_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (1))){
var inst_33884 = init;
var state_33904__$1 = (function (){var statearr_33907 = state_33904;
(statearr_33907[(7)] = inst_33884);

return statearr_33907;
})();
var statearr_33908_33925 = state_33904__$1;
(statearr_33908_33925[(2)] = null);

(statearr_33908_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (4))){
var inst_33887 = (state_33904[(8)]);
var inst_33887__$1 = (state_33904[(2)]);
var inst_33888 = (inst_33887__$1 == null);
var state_33904__$1 = (function (){var statearr_33909 = state_33904;
(statearr_33909[(8)] = inst_33887__$1);

return statearr_33909;
})();
if(cljs.core.truth_(inst_33888)){
var statearr_33910_33926 = state_33904__$1;
(statearr_33910_33926[(1)] = (5));

} else {
var statearr_33911_33927 = state_33904__$1;
(statearr_33911_33927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (6))){
var inst_33887 = (state_33904[(8)]);
var inst_33891 = (state_33904[(9)]);
var inst_33884 = (state_33904[(7)]);
var inst_33891__$1 = f.call(null,inst_33884,inst_33887);
var inst_33892 = cljs.core.reduced_QMARK_.call(null,inst_33891__$1);
var state_33904__$1 = (function (){var statearr_33912 = state_33904;
(statearr_33912[(9)] = inst_33891__$1);

return statearr_33912;
})();
if(inst_33892){
var statearr_33913_33928 = state_33904__$1;
(statearr_33913_33928[(1)] = (8));

} else {
var statearr_33914_33929 = state_33904__$1;
(statearr_33914_33929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (3))){
var inst_33902 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33904__$1,inst_33902);
} else {
if((state_val_33905 === (2))){
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33904__$1,(4),ch);
} else {
if((state_val_33905 === (9))){
var inst_33891 = (state_33904[(9)]);
var inst_33884 = inst_33891;
var state_33904__$1 = (function (){var statearr_33915 = state_33904;
(statearr_33915[(7)] = inst_33884);

return statearr_33915;
})();
var statearr_33916_33930 = state_33904__$1;
(statearr_33916_33930[(2)] = null);

(statearr_33916_33930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (5))){
var inst_33884 = (state_33904[(7)]);
var state_33904__$1 = state_33904;
var statearr_33917_33931 = state_33904__$1;
(statearr_33917_33931[(2)] = inst_33884);

(statearr_33917_33931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (10))){
var inst_33898 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33918_33932 = state_33904__$1;
(statearr_33918_33932[(2)] = inst_33898);

(statearr_33918_33932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (8))){
var inst_33891 = (state_33904[(9)]);
var inst_33894 = cljs.core.deref.call(null,inst_33891);
var state_33904__$1 = state_33904;
var statearr_33919_33933 = state_33904__$1;
(statearr_33919_33933[(2)] = inst_33894);

(statearr_33919_33933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto__))
;
return ((function (switch__33326__auto__,c__33416__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33327__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33327__auto____0 = (function (){
var statearr_33920 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33920[(0)] = cljs$core$async$reduce_$_state_machine__33327__auto__);

(statearr_33920[(1)] = (1));

return statearr_33920;
});
var cljs$core$async$reduce_$_state_machine__33327__auto____1 = (function (state_33904){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33921){if((e33921 instanceof Object)){
var ex__33330__auto__ = e33921;
var statearr_33922_33934 = state_33904;
(statearr_33922_33934[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33935 = state_33904;
state_33904 = G__33935;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33327__auto__ = function(state_33904){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33327__auto____1.call(this,state_33904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33327__auto____0;
cljs$core$async$reduce_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33327__auto____1;
return cljs$core$async$reduce_$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto__))
})();
var state__33418__auto__ = (function (){var statearr_33923 = f__33417__auto__.call(null);
(statearr_33923[(6)] = c__33416__auto__);

return statearr_33923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto__))
);

return c__33416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto__,f__$1){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto__,f__$1){
return (function (state_33941){
var state_val_33942 = (state_33941[(1)]);
if((state_val_33942 === (1))){
var inst_33936 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33941__$1 = state_33941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33941__$1,(2),inst_33936);
} else {
if((state_val_33942 === (2))){
var inst_33938 = (state_33941[(2)]);
var inst_33939 = f__$1.call(null,inst_33938);
var state_33941__$1 = state_33941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33941__$1,inst_33939);
} else {
return null;
}
}
});})(c__33416__auto__,f__$1))
;
return ((function (switch__33326__auto__,c__33416__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33327__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33327__auto____0 = (function (){
var statearr_33943 = [null,null,null,null,null,null,null];
(statearr_33943[(0)] = cljs$core$async$transduce_$_state_machine__33327__auto__);

(statearr_33943[(1)] = (1));

return statearr_33943;
});
var cljs$core$async$transduce_$_state_machine__33327__auto____1 = (function (state_33941){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33944){if((e33944 instanceof Object)){
var ex__33330__auto__ = e33944;
var statearr_33945_33947 = state_33941;
(statearr_33945_33947[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33948 = state_33941;
state_33941 = G__33948;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33327__auto__ = function(state_33941){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33327__auto____1.call(this,state_33941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33327__auto____0;
cljs$core$async$transduce_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33327__auto____1;
return cljs$core$async$transduce_$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto__,f__$1))
})();
var state__33418__auto__ = (function (){var statearr_33946 = f__33417__auto__.call(null);
(statearr_33946[(6)] = c__33416__auto__);

return statearr_33946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto__,f__$1))
);

return c__33416__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33950 = arguments.length;
switch (G__33950) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto__){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto__){
return (function (state_33975){
var state_val_33976 = (state_33975[(1)]);
if((state_val_33976 === (7))){
var inst_33957 = (state_33975[(2)]);
var state_33975__$1 = state_33975;
var statearr_33977_33998 = state_33975__$1;
(statearr_33977_33998[(2)] = inst_33957);

(statearr_33977_33998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (1))){
var inst_33951 = cljs.core.seq.call(null,coll);
var inst_33952 = inst_33951;
var state_33975__$1 = (function (){var statearr_33978 = state_33975;
(statearr_33978[(7)] = inst_33952);

return statearr_33978;
})();
var statearr_33979_33999 = state_33975__$1;
(statearr_33979_33999[(2)] = null);

(statearr_33979_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (4))){
var inst_33952 = (state_33975[(7)]);
var inst_33955 = cljs.core.first.call(null,inst_33952);
var state_33975__$1 = state_33975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33975__$1,(7),ch,inst_33955);
} else {
if((state_val_33976 === (13))){
var inst_33969 = (state_33975[(2)]);
var state_33975__$1 = state_33975;
var statearr_33980_34000 = state_33975__$1;
(statearr_33980_34000[(2)] = inst_33969);

(statearr_33980_34000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (6))){
var inst_33960 = (state_33975[(2)]);
var state_33975__$1 = state_33975;
if(cljs.core.truth_(inst_33960)){
var statearr_33981_34001 = state_33975__$1;
(statearr_33981_34001[(1)] = (8));

} else {
var statearr_33982_34002 = state_33975__$1;
(statearr_33982_34002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (3))){
var inst_33973 = (state_33975[(2)]);
var state_33975__$1 = state_33975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33975__$1,inst_33973);
} else {
if((state_val_33976 === (12))){
var state_33975__$1 = state_33975;
var statearr_33983_34003 = state_33975__$1;
(statearr_33983_34003[(2)] = null);

(statearr_33983_34003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (2))){
var inst_33952 = (state_33975[(7)]);
var state_33975__$1 = state_33975;
if(cljs.core.truth_(inst_33952)){
var statearr_33984_34004 = state_33975__$1;
(statearr_33984_34004[(1)] = (4));

} else {
var statearr_33985_34005 = state_33975__$1;
(statearr_33985_34005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (11))){
var inst_33966 = cljs.core.async.close_BANG_.call(null,ch);
var state_33975__$1 = state_33975;
var statearr_33986_34006 = state_33975__$1;
(statearr_33986_34006[(2)] = inst_33966);

(statearr_33986_34006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (9))){
var state_33975__$1 = state_33975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33987_34007 = state_33975__$1;
(statearr_33987_34007[(1)] = (11));

} else {
var statearr_33988_34008 = state_33975__$1;
(statearr_33988_34008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (5))){
var inst_33952 = (state_33975[(7)]);
var state_33975__$1 = state_33975;
var statearr_33989_34009 = state_33975__$1;
(statearr_33989_34009[(2)] = inst_33952);

(statearr_33989_34009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (10))){
var inst_33971 = (state_33975[(2)]);
var state_33975__$1 = state_33975;
var statearr_33990_34010 = state_33975__$1;
(statearr_33990_34010[(2)] = inst_33971);

(statearr_33990_34010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33976 === (8))){
var inst_33952 = (state_33975[(7)]);
var inst_33962 = cljs.core.next.call(null,inst_33952);
var inst_33952__$1 = inst_33962;
var state_33975__$1 = (function (){var statearr_33991 = state_33975;
(statearr_33991[(7)] = inst_33952__$1);

return statearr_33991;
})();
var statearr_33992_34011 = state_33975__$1;
(statearr_33992_34011[(2)] = null);

(statearr_33992_34011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto__))
;
return ((function (switch__33326__auto__,c__33416__auto__){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_33993 = [null,null,null,null,null,null,null,null];
(statearr_33993[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_33993[(1)] = (1));

return statearr_33993;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_33975){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_33975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e33994){if((e33994 instanceof Object)){
var ex__33330__auto__ = e33994;
var statearr_33995_34012 = state_33975;
(statearr_33995_34012[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34013 = state_33975;
state_33975 = G__34013;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_33975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_33975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto__))
})();
var state__33418__auto__ = (function (){var statearr_33996 = f__33417__auto__.call(null);
(statearr_33996[(6)] = c__33416__auto__);

return statearr_33996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto__))
);

return c__33416__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29926__auto__ = (((_ == null))?null:_);
var m__29927__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,_);
} else {
var m__29927__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29927__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,ch);
} else {
var m__29927__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m);
} else {
var m__29927__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34014 = (function (ch,cs,meta34015){
this.ch = ch;
this.cs = cs;
this.meta34015 = meta34015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34016,meta34015__$1){
var self__ = this;
var _34016__$1 = this;
return (new cljs.core.async.t_cljs$core$async34014(self__.ch,self__.cs,meta34015__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34016){
var self__ = this;
var _34016__$1 = this;
return self__.meta34015;
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34015","meta34015",1936013158,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34014";

cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34014");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34014 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34014(ch__$1,cs__$1,meta34015){
return (new cljs.core.async.t_cljs$core$async34014(ch__$1,cs__$1,meta34015));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34014(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33416__auto___34236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34236,cs,m,dchan,dctr,done){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34236,cs,m,dchan,dctr,done){
return (function (state_34151){
var state_val_34152 = (state_34151[(1)]);
if((state_val_34152 === (7))){
var inst_34147 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34153_34237 = state_34151__$1;
(statearr_34153_34237[(2)] = inst_34147);

(statearr_34153_34237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (20))){
var inst_34050 = (state_34151[(7)]);
var inst_34062 = cljs.core.first.call(null,inst_34050);
var inst_34063 = cljs.core.nth.call(null,inst_34062,(0),null);
var inst_34064 = cljs.core.nth.call(null,inst_34062,(1),null);
var state_34151__$1 = (function (){var statearr_34154 = state_34151;
(statearr_34154[(8)] = inst_34063);

return statearr_34154;
})();
if(cljs.core.truth_(inst_34064)){
var statearr_34155_34238 = state_34151__$1;
(statearr_34155_34238[(1)] = (22));

} else {
var statearr_34156_34239 = state_34151__$1;
(statearr_34156_34239[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (27))){
var inst_34094 = (state_34151[(9)]);
var inst_34092 = (state_34151[(10)]);
var inst_34019 = (state_34151[(11)]);
var inst_34099 = (state_34151[(12)]);
var inst_34099__$1 = cljs.core._nth.call(null,inst_34092,inst_34094);
var inst_34100 = cljs.core.async.put_BANG_.call(null,inst_34099__$1,inst_34019,done);
var state_34151__$1 = (function (){var statearr_34157 = state_34151;
(statearr_34157[(12)] = inst_34099__$1);

return statearr_34157;
})();
if(cljs.core.truth_(inst_34100)){
var statearr_34158_34240 = state_34151__$1;
(statearr_34158_34240[(1)] = (30));

} else {
var statearr_34159_34241 = state_34151__$1;
(statearr_34159_34241[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (1))){
var state_34151__$1 = state_34151;
var statearr_34160_34242 = state_34151__$1;
(statearr_34160_34242[(2)] = null);

(statearr_34160_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (24))){
var inst_34050 = (state_34151[(7)]);
var inst_34069 = (state_34151[(2)]);
var inst_34070 = cljs.core.next.call(null,inst_34050);
var inst_34028 = inst_34070;
var inst_34029 = null;
var inst_34030 = (0);
var inst_34031 = (0);
var state_34151__$1 = (function (){var statearr_34161 = state_34151;
(statearr_34161[(13)] = inst_34029);

(statearr_34161[(14)] = inst_34069);

(statearr_34161[(15)] = inst_34028);

(statearr_34161[(16)] = inst_34030);

(statearr_34161[(17)] = inst_34031);

return statearr_34161;
})();
var statearr_34162_34243 = state_34151__$1;
(statearr_34162_34243[(2)] = null);

(statearr_34162_34243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (39))){
var state_34151__$1 = state_34151;
var statearr_34166_34244 = state_34151__$1;
(statearr_34166_34244[(2)] = null);

(statearr_34166_34244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (4))){
var inst_34019 = (state_34151[(11)]);
var inst_34019__$1 = (state_34151[(2)]);
var inst_34020 = (inst_34019__$1 == null);
var state_34151__$1 = (function (){var statearr_34167 = state_34151;
(statearr_34167[(11)] = inst_34019__$1);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34020)){
var statearr_34168_34245 = state_34151__$1;
(statearr_34168_34245[(1)] = (5));

} else {
var statearr_34169_34246 = state_34151__$1;
(statearr_34169_34246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (15))){
var inst_34029 = (state_34151[(13)]);
var inst_34028 = (state_34151[(15)]);
var inst_34030 = (state_34151[(16)]);
var inst_34031 = (state_34151[(17)]);
var inst_34046 = (state_34151[(2)]);
var inst_34047 = (inst_34031 + (1));
var tmp34163 = inst_34029;
var tmp34164 = inst_34028;
var tmp34165 = inst_34030;
var inst_34028__$1 = tmp34164;
var inst_34029__$1 = tmp34163;
var inst_34030__$1 = tmp34165;
var inst_34031__$1 = inst_34047;
var state_34151__$1 = (function (){var statearr_34170 = state_34151;
(statearr_34170[(13)] = inst_34029__$1);

(statearr_34170[(15)] = inst_34028__$1);

(statearr_34170[(18)] = inst_34046);

(statearr_34170[(16)] = inst_34030__$1);

(statearr_34170[(17)] = inst_34031__$1);

return statearr_34170;
})();
var statearr_34171_34247 = state_34151__$1;
(statearr_34171_34247[(2)] = null);

(statearr_34171_34247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (21))){
var inst_34073 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34175_34248 = state_34151__$1;
(statearr_34175_34248[(2)] = inst_34073);

(statearr_34175_34248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (31))){
var inst_34099 = (state_34151[(12)]);
var inst_34103 = done.call(null,null);
var inst_34104 = cljs.core.async.untap_STAR_.call(null,m,inst_34099);
var state_34151__$1 = (function (){var statearr_34176 = state_34151;
(statearr_34176[(19)] = inst_34103);

return statearr_34176;
})();
var statearr_34177_34249 = state_34151__$1;
(statearr_34177_34249[(2)] = inst_34104);

(statearr_34177_34249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (32))){
var inst_34094 = (state_34151[(9)]);
var inst_34091 = (state_34151[(20)]);
var inst_34092 = (state_34151[(10)]);
var inst_34093 = (state_34151[(21)]);
var inst_34106 = (state_34151[(2)]);
var inst_34107 = (inst_34094 + (1));
var tmp34172 = inst_34091;
var tmp34173 = inst_34092;
var tmp34174 = inst_34093;
var inst_34091__$1 = tmp34172;
var inst_34092__$1 = tmp34173;
var inst_34093__$1 = tmp34174;
var inst_34094__$1 = inst_34107;
var state_34151__$1 = (function (){var statearr_34178 = state_34151;
(statearr_34178[(9)] = inst_34094__$1);

(statearr_34178[(20)] = inst_34091__$1);

(statearr_34178[(10)] = inst_34092__$1);

(statearr_34178[(21)] = inst_34093__$1);

(statearr_34178[(22)] = inst_34106);

return statearr_34178;
})();
var statearr_34179_34250 = state_34151__$1;
(statearr_34179_34250[(2)] = null);

(statearr_34179_34250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (40))){
var inst_34119 = (state_34151[(23)]);
var inst_34123 = done.call(null,null);
var inst_34124 = cljs.core.async.untap_STAR_.call(null,m,inst_34119);
var state_34151__$1 = (function (){var statearr_34180 = state_34151;
(statearr_34180[(24)] = inst_34123);

return statearr_34180;
})();
var statearr_34181_34251 = state_34151__$1;
(statearr_34181_34251[(2)] = inst_34124);

(statearr_34181_34251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (33))){
var inst_34110 = (state_34151[(25)]);
var inst_34112 = cljs.core.chunked_seq_QMARK_.call(null,inst_34110);
var state_34151__$1 = state_34151;
if(inst_34112){
var statearr_34182_34252 = state_34151__$1;
(statearr_34182_34252[(1)] = (36));

} else {
var statearr_34183_34253 = state_34151__$1;
(statearr_34183_34253[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (13))){
var inst_34040 = (state_34151[(26)]);
var inst_34043 = cljs.core.async.close_BANG_.call(null,inst_34040);
var state_34151__$1 = state_34151;
var statearr_34184_34254 = state_34151__$1;
(statearr_34184_34254[(2)] = inst_34043);

(statearr_34184_34254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (22))){
var inst_34063 = (state_34151[(8)]);
var inst_34066 = cljs.core.async.close_BANG_.call(null,inst_34063);
var state_34151__$1 = state_34151;
var statearr_34185_34255 = state_34151__$1;
(statearr_34185_34255[(2)] = inst_34066);

(statearr_34185_34255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (36))){
var inst_34110 = (state_34151[(25)]);
var inst_34114 = cljs.core.chunk_first.call(null,inst_34110);
var inst_34115 = cljs.core.chunk_rest.call(null,inst_34110);
var inst_34116 = cljs.core.count.call(null,inst_34114);
var inst_34091 = inst_34115;
var inst_34092 = inst_34114;
var inst_34093 = inst_34116;
var inst_34094 = (0);
var state_34151__$1 = (function (){var statearr_34186 = state_34151;
(statearr_34186[(9)] = inst_34094);

(statearr_34186[(20)] = inst_34091);

(statearr_34186[(10)] = inst_34092);

(statearr_34186[(21)] = inst_34093);

return statearr_34186;
})();
var statearr_34187_34256 = state_34151__$1;
(statearr_34187_34256[(2)] = null);

(statearr_34187_34256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (41))){
var inst_34110 = (state_34151[(25)]);
var inst_34126 = (state_34151[(2)]);
var inst_34127 = cljs.core.next.call(null,inst_34110);
var inst_34091 = inst_34127;
var inst_34092 = null;
var inst_34093 = (0);
var inst_34094 = (0);
var state_34151__$1 = (function (){var statearr_34188 = state_34151;
(statearr_34188[(9)] = inst_34094);

(statearr_34188[(20)] = inst_34091);

(statearr_34188[(10)] = inst_34092);

(statearr_34188[(21)] = inst_34093);

(statearr_34188[(27)] = inst_34126);

return statearr_34188;
})();
var statearr_34189_34257 = state_34151__$1;
(statearr_34189_34257[(2)] = null);

(statearr_34189_34257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (43))){
var state_34151__$1 = state_34151;
var statearr_34190_34258 = state_34151__$1;
(statearr_34190_34258[(2)] = null);

(statearr_34190_34258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (29))){
var inst_34135 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34191_34259 = state_34151__$1;
(statearr_34191_34259[(2)] = inst_34135);

(statearr_34191_34259[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (44))){
var inst_34144 = (state_34151[(2)]);
var state_34151__$1 = (function (){var statearr_34192 = state_34151;
(statearr_34192[(28)] = inst_34144);

return statearr_34192;
})();
var statearr_34193_34260 = state_34151__$1;
(statearr_34193_34260[(2)] = null);

(statearr_34193_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (6))){
var inst_34083 = (state_34151[(29)]);
var inst_34082 = cljs.core.deref.call(null,cs);
var inst_34083__$1 = cljs.core.keys.call(null,inst_34082);
var inst_34084 = cljs.core.count.call(null,inst_34083__$1);
var inst_34085 = cljs.core.reset_BANG_.call(null,dctr,inst_34084);
var inst_34090 = cljs.core.seq.call(null,inst_34083__$1);
var inst_34091 = inst_34090;
var inst_34092 = null;
var inst_34093 = (0);
var inst_34094 = (0);
var state_34151__$1 = (function (){var statearr_34194 = state_34151;
(statearr_34194[(9)] = inst_34094);

(statearr_34194[(20)] = inst_34091);

(statearr_34194[(29)] = inst_34083__$1);

(statearr_34194[(10)] = inst_34092);

(statearr_34194[(21)] = inst_34093);

(statearr_34194[(30)] = inst_34085);

return statearr_34194;
})();
var statearr_34195_34261 = state_34151__$1;
(statearr_34195_34261[(2)] = null);

(statearr_34195_34261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (28))){
var inst_34091 = (state_34151[(20)]);
var inst_34110 = (state_34151[(25)]);
var inst_34110__$1 = cljs.core.seq.call(null,inst_34091);
var state_34151__$1 = (function (){var statearr_34196 = state_34151;
(statearr_34196[(25)] = inst_34110__$1);

return statearr_34196;
})();
if(inst_34110__$1){
var statearr_34197_34262 = state_34151__$1;
(statearr_34197_34262[(1)] = (33));

} else {
var statearr_34198_34263 = state_34151__$1;
(statearr_34198_34263[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (25))){
var inst_34094 = (state_34151[(9)]);
var inst_34093 = (state_34151[(21)]);
var inst_34096 = (inst_34094 < inst_34093);
var inst_34097 = inst_34096;
var state_34151__$1 = state_34151;
if(cljs.core.truth_(inst_34097)){
var statearr_34199_34264 = state_34151__$1;
(statearr_34199_34264[(1)] = (27));

} else {
var statearr_34200_34265 = state_34151__$1;
(statearr_34200_34265[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (34))){
var state_34151__$1 = state_34151;
var statearr_34201_34266 = state_34151__$1;
(statearr_34201_34266[(2)] = null);

(statearr_34201_34266[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (17))){
var state_34151__$1 = state_34151;
var statearr_34202_34267 = state_34151__$1;
(statearr_34202_34267[(2)] = null);

(statearr_34202_34267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (3))){
var inst_34149 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34151__$1,inst_34149);
} else {
if((state_val_34152 === (12))){
var inst_34078 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34203_34268 = state_34151__$1;
(statearr_34203_34268[(2)] = inst_34078);

(statearr_34203_34268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (2))){
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34151__$1,(4),ch);
} else {
if((state_val_34152 === (23))){
var state_34151__$1 = state_34151;
var statearr_34204_34269 = state_34151__$1;
(statearr_34204_34269[(2)] = null);

(statearr_34204_34269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (35))){
var inst_34133 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34205_34270 = state_34151__$1;
(statearr_34205_34270[(2)] = inst_34133);

(statearr_34205_34270[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (19))){
var inst_34050 = (state_34151[(7)]);
var inst_34054 = cljs.core.chunk_first.call(null,inst_34050);
var inst_34055 = cljs.core.chunk_rest.call(null,inst_34050);
var inst_34056 = cljs.core.count.call(null,inst_34054);
var inst_34028 = inst_34055;
var inst_34029 = inst_34054;
var inst_34030 = inst_34056;
var inst_34031 = (0);
var state_34151__$1 = (function (){var statearr_34206 = state_34151;
(statearr_34206[(13)] = inst_34029);

(statearr_34206[(15)] = inst_34028);

(statearr_34206[(16)] = inst_34030);

(statearr_34206[(17)] = inst_34031);

return statearr_34206;
})();
var statearr_34207_34271 = state_34151__$1;
(statearr_34207_34271[(2)] = null);

(statearr_34207_34271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (11))){
var inst_34028 = (state_34151[(15)]);
var inst_34050 = (state_34151[(7)]);
var inst_34050__$1 = cljs.core.seq.call(null,inst_34028);
var state_34151__$1 = (function (){var statearr_34208 = state_34151;
(statearr_34208[(7)] = inst_34050__$1);

return statearr_34208;
})();
if(inst_34050__$1){
var statearr_34209_34272 = state_34151__$1;
(statearr_34209_34272[(1)] = (16));

} else {
var statearr_34210_34273 = state_34151__$1;
(statearr_34210_34273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (9))){
var inst_34080 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34211_34274 = state_34151__$1;
(statearr_34211_34274[(2)] = inst_34080);

(statearr_34211_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (5))){
var inst_34026 = cljs.core.deref.call(null,cs);
var inst_34027 = cljs.core.seq.call(null,inst_34026);
var inst_34028 = inst_34027;
var inst_34029 = null;
var inst_34030 = (0);
var inst_34031 = (0);
var state_34151__$1 = (function (){var statearr_34212 = state_34151;
(statearr_34212[(13)] = inst_34029);

(statearr_34212[(15)] = inst_34028);

(statearr_34212[(16)] = inst_34030);

(statearr_34212[(17)] = inst_34031);

return statearr_34212;
})();
var statearr_34213_34275 = state_34151__$1;
(statearr_34213_34275[(2)] = null);

(statearr_34213_34275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (14))){
var state_34151__$1 = state_34151;
var statearr_34214_34276 = state_34151__$1;
(statearr_34214_34276[(2)] = null);

(statearr_34214_34276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (45))){
var inst_34141 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34215_34277 = state_34151__$1;
(statearr_34215_34277[(2)] = inst_34141);

(statearr_34215_34277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (26))){
var inst_34083 = (state_34151[(29)]);
var inst_34137 = (state_34151[(2)]);
var inst_34138 = cljs.core.seq.call(null,inst_34083);
var state_34151__$1 = (function (){var statearr_34216 = state_34151;
(statearr_34216[(31)] = inst_34137);

return statearr_34216;
})();
if(inst_34138){
var statearr_34217_34278 = state_34151__$1;
(statearr_34217_34278[(1)] = (42));

} else {
var statearr_34218_34279 = state_34151__$1;
(statearr_34218_34279[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (16))){
var inst_34050 = (state_34151[(7)]);
var inst_34052 = cljs.core.chunked_seq_QMARK_.call(null,inst_34050);
var state_34151__$1 = state_34151;
if(inst_34052){
var statearr_34219_34280 = state_34151__$1;
(statearr_34219_34280[(1)] = (19));

} else {
var statearr_34220_34281 = state_34151__$1;
(statearr_34220_34281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (38))){
var inst_34130 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34221_34282 = state_34151__$1;
(statearr_34221_34282[(2)] = inst_34130);

(statearr_34221_34282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (30))){
var state_34151__$1 = state_34151;
var statearr_34222_34283 = state_34151__$1;
(statearr_34222_34283[(2)] = null);

(statearr_34222_34283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (10))){
var inst_34029 = (state_34151[(13)]);
var inst_34031 = (state_34151[(17)]);
var inst_34039 = cljs.core._nth.call(null,inst_34029,inst_34031);
var inst_34040 = cljs.core.nth.call(null,inst_34039,(0),null);
var inst_34041 = cljs.core.nth.call(null,inst_34039,(1),null);
var state_34151__$1 = (function (){var statearr_34223 = state_34151;
(statearr_34223[(26)] = inst_34040);

return statearr_34223;
})();
if(cljs.core.truth_(inst_34041)){
var statearr_34224_34284 = state_34151__$1;
(statearr_34224_34284[(1)] = (13));

} else {
var statearr_34225_34285 = state_34151__$1;
(statearr_34225_34285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (18))){
var inst_34076 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34226_34286 = state_34151__$1;
(statearr_34226_34286[(2)] = inst_34076);

(statearr_34226_34286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (42))){
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34151__$1,(45),dchan);
} else {
if((state_val_34152 === (37))){
var inst_34110 = (state_34151[(25)]);
var inst_34019 = (state_34151[(11)]);
var inst_34119 = (state_34151[(23)]);
var inst_34119__$1 = cljs.core.first.call(null,inst_34110);
var inst_34120 = cljs.core.async.put_BANG_.call(null,inst_34119__$1,inst_34019,done);
var state_34151__$1 = (function (){var statearr_34227 = state_34151;
(statearr_34227[(23)] = inst_34119__$1);

return statearr_34227;
})();
if(cljs.core.truth_(inst_34120)){
var statearr_34228_34287 = state_34151__$1;
(statearr_34228_34287[(1)] = (39));

} else {
var statearr_34229_34288 = state_34151__$1;
(statearr_34229_34288[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (8))){
var inst_34030 = (state_34151[(16)]);
var inst_34031 = (state_34151[(17)]);
var inst_34033 = (inst_34031 < inst_34030);
var inst_34034 = inst_34033;
var state_34151__$1 = state_34151;
if(cljs.core.truth_(inst_34034)){
var statearr_34230_34289 = state_34151__$1;
(statearr_34230_34289[(1)] = (10));

} else {
var statearr_34231_34290 = state_34151__$1;
(statearr_34231_34290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34236,cs,m,dchan,dctr,done))
;
return ((function (switch__33326__auto__,c__33416__auto___34236,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33327__auto__ = null;
var cljs$core$async$mult_$_state_machine__33327__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$mult_$_state_machine__33327__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$mult_$_state_machine__33327__auto____1 = (function (state_34151){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object)){
var ex__33330__auto__ = e34233;
var statearr_34234_34291 = state_34151;
(statearr_34234_34291[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34292 = state_34151;
state_34151 = G__34292;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33327__auto__ = function(state_34151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33327__auto____1.call(this,state_34151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33327__auto____0;
cljs$core$async$mult_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33327__auto____1;
return cljs$core$async$mult_$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34236,cs,m,dchan,dctr,done))
})();
var state__33418__auto__ = (function (){var statearr_34235 = f__33417__auto__.call(null);
(statearr_34235[(6)] = c__33416__auto___34236);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34236,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34294 = arguments.length;
switch (G__34294) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,ch);
} else {
var m__29927__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,ch);
} else {
var m__29927__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m);
} else {
var m__29927__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,state_map);
} else {
var m__29927__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29926__auto__ = (((m == null))?null:m);
var m__29927__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,m,mode);
} else {
var m__29927__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30472__auto__ = [];
var len__30465__auto___34306 = arguments.length;
var i__30466__auto___34307 = (0);
while(true){
if((i__30466__auto___34307 < len__30465__auto___34306)){
args__30472__auto__.push((arguments[i__30466__auto___34307]));

var G__34308 = (i__30466__auto___34307 + (1));
i__30466__auto___34307 = G__34308;
continue;
} else {
}
break;
}

var argseq__30473__auto__ = ((((3) < args__30472__auto__.length))?(new cljs.core.IndexedSeq(args__30472__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30473__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34300){
var map__34301 = p__34300;
var map__34301__$1 = ((((!((map__34301 == null)))?((((map__34301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34301):map__34301);
var opts = map__34301__$1;
var statearr_34303_34309 = state;
(statearr_34303_34309[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34301,map__34301__$1,opts){
return (function (val){
var statearr_34304_34310 = state;
(statearr_34304_34310[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34301,map__34301__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34305_34311 = state;
(statearr_34305_34311[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34296){
var G__34297 = cljs.core.first.call(null,seq34296);
var seq34296__$1 = cljs.core.next.call(null,seq34296);
var G__34298 = cljs.core.first.call(null,seq34296__$1);
var seq34296__$2 = cljs.core.next.call(null,seq34296__$1);
var G__34299 = cljs.core.first.call(null,seq34296__$2);
var seq34296__$3 = cljs.core.next.call(null,seq34296__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34297,G__34298,G__34299,seq34296__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34312 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34313){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34313 = meta34313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34314,meta34313__$1){
var self__ = this;
var _34314__$1 = this;
return (new cljs.core.async.t_cljs$core$async34312(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34313__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34314){
var self__ = this;
var _34314__$1 = this;
return self__.meta34313;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34312";

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34312");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34312 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34312(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34313){
return (new cljs.core.async.t_cljs$core$async34312(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34313));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34312(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33416__auto___34476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34331 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_34477 = state_34416__$1;
(statearr_34418_34477[(2)] = inst_34331);

(statearr_34418_34477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (20))){
var inst_34343 = (state_34416[(7)]);
var state_34416__$1 = state_34416;
var statearr_34419_34478 = state_34416__$1;
(statearr_34419_34478[(2)] = inst_34343);

(statearr_34419_34478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (27))){
var state_34416__$1 = state_34416;
var statearr_34420_34479 = state_34416__$1;
(statearr_34420_34479[(2)] = null);

(statearr_34420_34479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var inst_34318 = (state_34416[(8)]);
var inst_34318__$1 = calc_state.call(null);
var inst_34320 = (inst_34318__$1 == null);
var inst_34321 = cljs.core.not.call(null,inst_34320);
var state_34416__$1 = (function (){var statearr_34421 = state_34416;
(statearr_34421[(8)] = inst_34318__$1);

return statearr_34421;
})();
if(inst_34321){
var statearr_34422_34480 = state_34416__$1;
(statearr_34422_34480[(1)] = (2));

} else {
var statearr_34423_34481 = state_34416__$1;
(statearr_34423_34481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (24))){
var inst_34376 = (state_34416[(9)]);
var inst_34390 = (state_34416[(10)]);
var inst_34367 = (state_34416[(11)]);
var inst_34390__$1 = inst_34367.call(null,inst_34376);
var state_34416__$1 = (function (){var statearr_34424 = state_34416;
(statearr_34424[(10)] = inst_34390__$1);

return statearr_34424;
})();
if(cljs.core.truth_(inst_34390__$1)){
var statearr_34425_34482 = state_34416__$1;
(statearr_34425_34482[(1)] = (29));

} else {
var statearr_34426_34483 = state_34416__$1;
(statearr_34426_34483[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (4))){
var inst_34334 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34334)){
var statearr_34427_34484 = state_34416__$1;
(statearr_34427_34484[(1)] = (8));

} else {
var statearr_34428_34485 = state_34416__$1;
(statearr_34428_34485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (15))){
var inst_34361 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34361)){
var statearr_34429_34486 = state_34416__$1;
(statearr_34429_34486[(1)] = (19));

} else {
var statearr_34430_34487 = state_34416__$1;
(statearr_34430_34487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (21))){
var inst_34366 = (state_34416[(12)]);
var inst_34366__$1 = (state_34416[(2)]);
var inst_34367 = cljs.core.get.call(null,inst_34366__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34368 = cljs.core.get.call(null,inst_34366__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34369 = cljs.core.get.call(null,inst_34366__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34416__$1 = (function (){var statearr_34431 = state_34416;
(statearr_34431[(11)] = inst_34367);

(statearr_34431[(13)] = inst_34368);

(statearr_34431[(12)] = inst_34366__$1);

return statearr_34431;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34416__$1,(22),inst_34369);
} else {
if((state_val_34417 === (31))){
var inst_34398 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34398)){
var statearr_34432_34488 = state_34416__$1;
(statearr_34432_34488[(1)] = (32));

} else {
var statearr_34433_34489 = state_34416__$1;
(statearr_34433_34489[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (32))){
var inst_34375 = (state_34416[(14)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34416__$1,(35),out,inst_34375);
} else {
if((state_val_34417 === (33))){
var inst_34366 = (state_34416[(12)]);
var inst_34343 = inst_34366;
var state_34416__$1 = (function (){var statearr_34434 = state_34416;
(statearr_34434[(7)] = inst_34343);

return statearr_34434;
})();
var statearr_34435_34490 = state_34416__$1;
(statearr_34435_34490[(2)] = null);

(statearr_34435_34490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var inst_34343 = (state_34416[(7)]);
var inst_34350 = inst_34343.cljs$lang$protocol_mask$partition0$;
var inst_34351 = (inst_34350 & (64));
var inst_34352 = inst_34343.cljs$core$ISeq$;
var inst_34353 = (cljs.core.PROTOCOL_SENTINEL === inst_34352);
var inst_34354 = (inst_34351) || (inst_34353);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34354)){
var statearr_34436_34491 = state_34416__$1;
(statearr_34436_34491[(1)] = (16));

} else {
var statearr_34437_34492 = state_34416__$1;
(statearr_34437_34492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (22))){
var inst_34376 = (state_34416[(9)]);
var inst_34375 = (state_34416[(14)]);
var inst_34374 = (state_34416[(2)]);
var inst_34375__$1 = cljs.core.nth.call(null,inst_34374,(0),null);
var inst_34376__$1 = cljs.core.nth.call(null,inst_34374,(1),null);
var inst_34377 = (inst_34375__$1 == null);
var inst_34378 = cljs.core._EQ_.call(null,inst_34376__$1,change);
var inst_34379 = (inst_34377) || (inst_34378);
var state_34416__$1 = (function (){var statearr_34438 = state_34416;
(statearr_34438[(9)] = inst_34376__$1);

(statearr_34438[(14)] = inst_34375__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34379)){
var statearr_34439_34493 = state_34416__$1;
(statearr_34439_34493[(1)] = (23));

} else {
var statearr_34440_34494 = state_34416__$1;
(statearr_34440_34494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (36))){
var inst_34366 = (state_34416[(12)]);
var inst_34343 = inst_34366;
var state_34416__$1 = (function (){var statearr_34441 = state_34416;
(statearr_34441[(7)] = inst_34343);

return statearr_34441;
})();
var statearr_34442_34495 = state_34416__$1;
(statearr_34442_34495[(2)] = null);

(statearr_34442_34495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (29))){
var inst_34390 = (state_34416[(10)]);
var state_34416__$1 = state_34416;
var statearr_34443_34496 = state_34416__$1;
(statearr_34443_34496[(2)] = inst_34390);

(statearr_34443_34496[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (6))){
var state_34416__$1 = state_34416;
var statearr_34444_34497 = state_34416__$1;
(statearr_34444_34497[(2)] = false);

(statearr_34444_34497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (28))){
var inst_34386 = (state_34416[(2)]);
var inst_34387 = calc_state.call(null);
var inst_34343 = inst_34387;
var state_34416__$1 = (function (){var statearr_34445 = state_34416;
(statearr_34445[(15)] = inst_34386);

(statearr_34445[(7)] = inst_34343);

return statearr_34445;
})();
var statearr_34446_34498 = state_34416__$1;
(statearr_34446_34498[(2)] = null);

(statearr_34446_34498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (25))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34447_34499 = state_34416__$1;
(statearr_34447_34499[(2)] = inst_34412);

(statearr_34447_34499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (34))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34448_34500 = state_34416__$1;
(statearr_34448_34500[(2)] = inst_34410);

(statearr_34448_34500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (17))){
var state_34416__$1 = state_34416;
var statearr_34449_34501 = state_34416__$1;
(statearr_34449_34501[(2)] = false);

(statearr_34449_34501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (3))){
var state_34416__$1 = state_34416;
var statearr_34450_34502 = state_34416__$1;
(statearr_34450_34502[(2)] = false);

(statearr_34450_34502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (12))){
var inst_34414 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34416__$1,inst_34414);
} else {
if((state_val_34417 === (2))){
var inst_34318 = (state_34416[(8)]);
var inst_34323 = inst_34318.cljs$lang$protocol_mask$partition0$;
var inst_34324 = (inst_34323 & (64));
var inst_34325 = inst_34318.cljs$core$ISeq$;
var inst_34326 = (cljs.core.PROTOCOL_SENTINEL === inst_34325);
var inst_34327 = (inst_34324) || (inst_34326);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34327)){
var statearr_34451_34503 = state_34416__$1;
(statearr_34451_34503[(1)] = (5));

} else {
var statearr_34452_34504 = state_34416__$1;
(statearr_34452_34504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (23))){
var inst_34375 = (state_34416[(14)]);
var inst_34381 = (inst_34375 == null);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34381)){
var statearr_34453_34505 = state_34416__$1;
(statearr_34453_34505[(1)] = (26));

} else {
var statearr_34454_34506 = state_34416__$1;
(statearr_34454_34506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (35))){
var inst_34401 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34401)){
var statearr_34455_34507 = state_34416__$1;
(statearr_34455_34507[(1)] = (36));

} else {
var statearr_34456_34508 = state_34416__$1;
(statearr_34456_34508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (19))){
var inst_34343 = (state_34416[(7)]);
var inst_34363 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34343);
var state_34416__$1 = state_34416;
var statearr_34457_34509 = state_34416__$1;
(statearr_34457_34509[(2)] = inst_34363);

(statearr_34457_34509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (11))){
var inst_34343 = (state_34416[(7)]);
var inst_34347 = (inst_34343 == null);
var inst_34348 = cljs.core.not.call(null,inst_34347);
var state_34416__$1 = state_34416;
if(inst_34348){
var statearr_34458_34510 = state_34416__$1;
(statearr_34458_34510[(1)] = (13));

} else {
var statearr_34459_34511 = state_34416__$1;
(statearr_34459_34511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var inst_34318 = (state_34416[(8)]);
var state_34416__$1 = state_34416;
var statearr_34460_34512 = state_34416__$1;
(statearr_34460_34512[(2)] = inst_34318);

(statearr_34460_34512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
var statearr_34461_34513 = state_34416__$1;
(statearr_34461_34513[(2)] = true);

(statearr_34461_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var state_34416__$1 = state_34416;
var statearr_34462_34514 = state_34416__$1;
(statearr_34462_34514[(2)] = false);

(statearr_34462_34514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (26))){
var inst_34376 = (state_34416[(9)]);
var inst_34383 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34376);
var state_34416__$1 = state_34416;
var statearr_34463_34515 = state_34416__$1;
(statearr_34463_34515[(2)] = inst_34383);

(statearr_34463_34515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (16))){
var state_34416__$1 = state_34416;
var statearr_34464_34516 = state_34416__$1;
(statearr_34464_34516[(2)] = true);

(statearr_34464_34516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (38))){
var inst_34406 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34465_34517 = state_34416__$1;
(statearr_34465_34517[(2)] = inst_34406);

(statearr_34465_34517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (30))){
var inst_34376 = (state_34416[(9)]);
var inst_34367 = (state_34416[(11)]);
var inst_34368 = (state_34416[(13)]);
var inst_34393 = cljs.core.empty_QMARK_.call(null,inst_34367);
var inst_34394 = inst_34368.call(null,inst_34376);
var inst_34395 = cljs.core.not.call(null,inst_34394);
var inst_34396 = (inst_34393) && (inst_34395);
var state_34416__$1 = state_34416;
var statearr_34466_34518 = state_34416__$1;
(statearr_34466_34518[(2)] = inst_34396);

(statearr_34466_34518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34318 = (state_34416[(8)]);
var inst_34339 = (state_34416[(2)]);
var inst_34340 = cljs.core.get.call(null,inst_34339,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34341 = cljs.core.get.call(null,inst_34339,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34342 = cljs.core.get.call(null,inst_34339,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34343 = inst_34318;
var state_34416__$1 = (function (){var statearr_34467 = state_34416;
(statearr_34467[(16)] = inst_34341);

(statearr_34467[(17)] = inst_34340);

(statearr_34467[(18)] = inst_34342);

(statearr_34467[(7)] = inst_34343);

return statearr_34467;
})();
var statearr_34468_34519 = state_34416__$1;
(statearr_34468_34519[(2)] = null);

(statearr_34468_34519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (18))){
var inst_34358 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34469_34520 = state_34416__$1;
(statearr_34469_34520[(2)] = inst_34358);

(statearr_34469_34520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (37))){
var state_34416__$1 = state_34416;
var statearr_34470_34521 = state_34416__$1;
(statearr_34470_34521[(2)] = null);

(statearr_34470_34521[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34318 = (state_34416[(8)]);
var inst_34336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34318);
var state_34416__$1 = state_34416;
var statearr_34471_34522 = state_34416__$1;
(statearr_34471_34522[(2)] = inst_34336);

(statearr_34471_34522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33326__auto__,c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33327__auto__ = null;
var cljs$core$async$mix_$_state_machine__33327__auto____0 = (function (){
var statearr_34472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34472[(0)] = cljs$core$async$mix_$_state_machine__33327__auto__);

(statearr_34472[(1)] = (1));

return statearr_34472;
});
var cljs$core$async$mix_$_state_machine__33327__auto____1 = (function (state_34416){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34473){if((e34473 instanceof Object)){
var ex__33330__auto__ = e34473;
var statearr_34474_34523 = state_34416;
(statearr_34474_34523[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34524 = state_34416;
state_34416 = G__34524;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33327__auto__ = function(state_34416){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33327__auto____1.call(this,state_34416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33327__auto____0;
cljs$core$async$mix_$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33327__auto____1;
return cljs$core$async$mix_$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33418__auto__ = (function (){var statearr_34475 = f__33417__auto__.call(null);
(statearr_34475[(6)] = c__33416__auto___34476);

return statearr_34475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29926__auto__ = (((p == null))?null:p);
var m__29927__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29927__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29926__auto__ = (((p == null))?null:p);
var m__29927__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,p,v,ch);
} else {
var m__29927__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34526 = arguments.length;
switch (G__34526) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29926__auto__ = (((p == null))?null:p);
var m__29927__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,p);
} else {
var m__29927__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29926__auto__ = (((p == null))?null:p);
var m__29927__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29926__auto__)]);
if(!((m__29927__auto__ == null))){
return m__29927__auto__.call(null,p,v);
} else {
var m__29927__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29927__auto____$1 == null))){
return m__29927__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29193__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29193__auto__)){
return or__29193__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29193__auto__,mults){
return (function (p1__34528_SHARP_){
if(cljs.core.truth_(p1__34528_SHARP_.call(null,topic))){
return p1__34528_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34528_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29193__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34531 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34532){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34532 = meta34532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34533,meta34532__$1){
var self__ = this;
var _34533__$1 = this;
return (new cljs.core.async.t_cljs$core$async34531(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34532__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34533){
var self__ = this;
var _34533__$1 = this;
return self__.meta34532;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34532","meta34532",-114660504,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34531";

cljs.core.async.t_cljs$core$async34531.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34531");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34531 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34532){
return (new cljs.core.async.t_cljs$core$async34531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34532));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34531(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33416__auto___34651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34651,mults,ensure_mult,p){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34651,mults,ensure_mult,p){
return (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_34652 = state_34605__$1;
(statearr_34607_34652[(2)] = inst_34601);

(statearr_34607_34652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_34653 = state_34605__$1;
(statearr_34608_34653[(2)] = null);

(statearr_34608_34653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_34654 = state_34605__$1;
(statearr_34609_34654[(2)] = null);

(statearr_34609_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (24))){
var inst_34584 = (state_34605[(7)]);
var inst_34593 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34584);
var state_34605__$1 = state_34605;
var statearr_34610_34655 = state_34605__$1;
(statearr_34610_34655[(2)] = inst_34593);

(statearr_34610_34655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34536 = (state_34605[(8)]);
var inst_34536__$1 = (state_34605[(2)]);
var inst_34537 = (inst_34536__$1 == null);
var state_34605__$1 = (function (){var statearr_34611 = state_34605;
(statearr_34611[(8)] = inst_34536__$1);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34612_34656 = state_34605__$1;
(statearr_34612_34656[(1)] = (5));

} else {
var statearr_34613_34657 = state_34605__$1;
(statearr_34613_34657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (15))){
var inst_34578 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34614_34658 = state_34605__$1;
(statearr_34614_34658[(2)] = inst_34578);

(statearr_34614_34658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (21))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34615 = state_34605;
(statearr_34615[(9)] = inst_34598);

return statearr_34615;
})();
var statearr_34616_34659 = state_34605__$1;
(statearr_34616_34659[(2)] = null);

(statearr_34616_34659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34560 = (state_34605[(10)]);
var inst_34562 = cljs.core.chunked_seq_QMARK_.call(null,inst_34560);
var state_34605__$1 = state_34605;
if(inst_34562){
var statearr_34617_34660 = state_34605__$1;
(statearr_34617_34660[(1)] = (16));

} else {
var statearr_34618_34661 = state_34605__$1;
(statearr_34618_34661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (22))){
var inst_34590 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34590)){
var statearr_34619_34662 = state_34605__$1;
(statearr_34619_34662[(1)] = (23));

} else {
var statearr_34620_34663 = state_34605__$1;
(statearr_34620_34663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34584 = (state_34605[(7)]);
var inst_34536 = (state_34605[(8)]);
var inst_34586 = (state_34605[(11)]);
var inst_34584__$1 = topic_fn.call(null,inst_34536);
var inst_34585 = cljs.core.deref.call(null,mults);
var inst_34586__$1 = cljs.core.get.call(null,inst_34585,inst_34584__$1);
var state_34605__$1 = (function (){var statearr_34621 = state_34605;
(statearr_34621[(7)] = inst_34584__$1);

(statearr_34621[(11)] = inst_34586__$1);

return statearr_34621;
})();
if(cljs.core.truth_(inst_34586__$1)){
var statearr_34622_34664 = state_34605__$1;
(statearr_34622_34664[(1)] = (19));

} else {
var statearr_34623_34665 = state_34605__$1;
(statearr_34623_34665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (25))){
var inst_34595 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34624_34666 = state_34605__$1;
(statearr_34624_34666[(2)] = inst_34595);

(statearr_34624_34666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (17))){
var inst_34560 = (state_34605[(10)]);
var inst_34569 = cljs.core.first.call(null,inst_34560);
var inst_34570 = cljs.core.async.muxch_STAR_.call(null,inst_34569);
var inst_34571 = cljs.core.async.close_BANG_.call(null,inst_34570);
var inst_34572 = cljs.core.next.call(null,inst_34560);
var inst_34546 = inst_34572;
var inst_34547 = null;
var inst_34548 = (0);
var inst_34549 = (0);
var state_34605__$1 = (function (){var statearr_34625 = state_34605;
(statearr_34625[(12)] = inst_34571);

(statearr_34625[(13)] = inst_34546);

(statearr_34625[(14)] = inst_34549);

(statearr_34625[(15)] = inst_34547);

(statearr_34625[(16)] = inst_34548);

return statearr_34625;
})();
var statearr_34626_34667 = state_34605__$1;
(statearr_34626_34667[(2)] = null);

(statearr_34626_34667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (12))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34627_34668 = state_34605__$1;
(statearr_34627_34668[(2)] = inst_34580);

(statearr_34627_34668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34605__$1,(4),ch);
} else {
if((state_val_34606 === (23))){
var state_34605__$1 = state_34605;
var statearr_34628_34669 = state_34605__$1;
(statearr_34628_34669[(2)] = null);

(statearr_34628_34669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (19))){
var inst_34536 = (state_34605[(8)]);
var inst_34586 = (state_34605[(11)]);
var inst_34588 = cljs.core.async.muxch_STAR_.call(null,inst_34586);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34605__$1,(22),inst_34588,inst_34536);
} else {
if((state_val_34606 === (11))){
var inst_34560 = (state_34605[(10)]);
var inst_34546 = (state_34605[(13)]);
var inst_34560__$1 = cljs.core.seq.call(null,inst_34546);
var state_34605__$1 = (function (){var statearr_34629 = state_34605;
(statearr_34629[(10)] = inst_34560__$1);

return statearr_34629;
})();
if(inst_34560__$1){
var statearr_34630_34670 = state_34605__$1;
(statearr_34630_34670[(1)] = (13));

} else {
var statearr_34631_34671 = state_34605__$1;
(statearr_34631_34671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var inst_34582 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34632_34672 = state_34605__$1;
(statearr_34632_34672[(2)] = inst_34582);

(statearr_34632_34672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var inst_34543 = cljs.core.deref.call(null,mults);
var inst_34544 = cljs.core.vals.call(null,inst_34543);
var inst_34545 = cljs.core.seq.call(null,inst_34544);
var inst_34546 = inst_34545;
var inst_34547 = null;
var inst_34548 = (0);
var inst_34549 = (0);
var state_34605__$1 = (function (){var statearr_34633 = state_34605;
(statearr_34633[(13)] = inst_34546);

(statearr_34633[(14)] = inst_34549);

(statearr_34633[(15)] = inst_34547);

(statearr_34633[(16)] = inst_34548);

return statearr_34633;
})();
var statearr_34634_34673 = state_34605__$1;
(statearr_34634_34673[(2)] = null);

(statearr_34634_34673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (14))){
var state_34605__$1 = state_34605;
var statearr_34638_34674 = state_34605__$1;
(statearr_34638_34674[(2)] = null);

(statearr_34638_34674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var inst_34560 = (state_34605[(10)]);
var inst_34564 = cljs.core.chunk_first.call(null,inst_34560);
var inst_34565 = cljs.core.chunk_rest.call(null,inst_34560);
var inst_34566 = cljs.core.count.call(null,inst_34564);
var inst_34546 = inst_34565;
var inst_34547 = inst_34564;
var inst_34548 = inst_34566;
var inst_34549 = (0);
var state_34605__$1 = (function (){var statearr_34639 = state_34605;
(statearr_34639[(13)] = inst_34546);

(statearr_34639[(14)] = inst_34549);

(statearr_34639[(15)] = inst_34547);

(statearr_34639[(16)] = inst_34548);

return statearr_34639;
})();
var statearr_34640_34675 = state_34605__$1;
(statearr_34640_34675[(2)] = null);

(statearr_34640_34675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34546 = (state_34605[(13)]);
var inst_34549 = (state_34605[(14)]);
var inst_34547 = (state_34605[(15)]);
var inst_34548 = (state_34605[(16)]);
var inst_34554 = cljs.core._nth.call(null,inst_34547,inst_34549);
var inst_34555 = cljs.core.async.muxch_STAR_.call(null,inst_34554);
var inst_34556 = cljs.core.async.close_BANG_.call(null,inst_34555);
var inst_34557 = (inst_34549 + (1));
var tmp34635 = inst_34546;
var tmp34636 = inst_34547;
var tmp34637 = inst_34548;
var inst_34546__$1 = tmp34635;
var inst_34547__$1 = tmp34636;
var inst_34548__$1 = tmp34637;
var inst_34549__$1 = inst_34557;
var state_34605__$1 = (function (){var statearr_34641 = state_34605;
(statearr_34641[(17)] = inst_34556);

(statearr_34641[(13)] = inst_34546__$1);

(statearr_34641[(14)] = inst_34549__$1);

(statearr_34641[(15)] = inst_34547__$1);

(statearr_34641[(16)] = inst_34548__$1);

return statearr_34641;
})();
var statearr_34642_34676 = state_34605__$1;
(statearr_34642_34676[(2)] = null);

(statearr_34642_34676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34575 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34643_34677 = state_34605__$1;
(statearr_34643_34677[(2)] = inst_34575);

(statearr_34643_34677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34549 = (state_34605[(14)]);
var inst_34548 = (state_34605[(16)]);
var inst_34551 = (inst_34549 < inst_34548);
var inst_34552 = inst_34551;
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34552)){
var statearr_34644_34678 = state_34605__$1;
(statearr_34644_34678[(1)] = (10));

} else {
var statearr_34645_34679 = state_34605__$1;
(statearr_34645_34679[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34651,mults,ensure_mult,p))
;
return ((function (switch__33326__auto__,c__33416__auto___34651,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_34646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_34605){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34647){if((e34647 instanceof Object)){
var ex__33330__auto__ = e34647;
var statearr_34648_34680 = state_34605;
(statearr_34648_34680[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34681 = state_34605;
state_34605 = G__34681;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34651,mults,ensure_mult,p))
})();
var state__33418__auto__ = (function (){var statearr_34649 = f__33417__auto__.call(null);
(statearr_34649[(6)] = c__33416__auto___34651);

return statearr_34649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34651,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34683 = arguments.length;
switch (G__34683) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34686 = arguments.length;
switch (G__34686) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34689 = arguments.length;
switch (G__34689) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33416__auto___34756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var state_34728__$1 = state_34728;
var statearr_34730_34757 = state_34728__$1;
(statearr_34730_34757[(2)] = null);

(statearr_34730_34757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var state_34728__$1 = state_34728;
var statearr_34731_34758 = state_34728__$1;
(statearr_34731_34758[(2)] = null);

(statearr_34731_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34692 = (state_34728[(7)]);
var inst_34694 = (inst_34692 < cnt);
var state_34728__$1 = state_34728;
if(cljs.core.truth_(inst_34694)){
var statearr_34732_34759 = state_34728__$1;
(statearr_34732_34759[(1)] = (6));

} else {
var statearr_34733_34760 = state_34728__$1;
(statearr_34733_34760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (15))){
var inst_34724 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34734_34761 = state_34728__$1;
(statearr_34734_34761[(2)] = inst_34724);

(statearr_34734_34761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (13))){
var inst_34717 = cljs.core.async.close_BANG_.call(null,out);
var state_34728__$1 = state_34728;
var statearr_34735_34762 = state_34728__$1;
(statearr_34735_34762[(2)] = inst_34717);

(statearr_34735_34762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var state_34728__$1 = state_34728;
var statearr_34736_34763 = state_34728__$1;
(statearr_34736_34763[(2)] = null);

(statearr_34736_34763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34726 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (12))){
var inst_34714 = (state_34728[(8)]);
var inst_34714__$1 = (state_34728[(2)]);
var inst_34715 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34714__$1);
var state_34728__$1 = (function (){var statearr_34737 = state_34728;
(statearr_34737[(8)] = inst_34714__$1);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34715)){
var statearr_34738_34764 = state_34728__$1;
(statearr_34738_34764[(1)] = (13));

} else {
var statearr_34739_34765 = state_34728__$1;
(statearr_34739_34765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (2))){
var inst_34691 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34692 = (0);
var state_34728__$1 = (function (){var statearr_34740 = state_34728;
(statearr_34740[(7)] = inst_34692);

(statearr_34740[(9)] = inst_34691);

return statearr_34740;
})();
var statearr_34741_34766 = state_34728__$1;
(statearr_34741_34766[(2)] = null);

(statearr_34741_34766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (11))){
var inst_34692 = (state_34728[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34728,(10),Object,null,(9));
var inst_34701 = chs__$1.call(null,inst_34692);
var inst_34702 = done.call(null,inst_34692);
var inst_34703 = cljs.core.async.take_BANG_.call(null,inst_34701,inst_34702);
var state_34728__$1 = state_34728;
var statearr_34742_34767 = state_34728__$1;
(statearr_34742_34767[(2)] = inst_34703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (9))){
var inst_34692 = (state_34728[(7)]);
var inst_34705 = (state_34728[(2)]);
var inst_34706 = (inst_34692 + (1));
var inst_34692__$1 = inst_34706;
var state_34728__$1 = (function (){var statearr_34743 = state_34728;
(statearr_34743[(7)] = inst_34692__$1);

(statearr_34743[(10)] = inst_34705);

return statearr_34743;
})();
var statearr_34744_34768 = state_34728__$1;
(statearr_34744_34768[(2)] = null);

(statearr_34744_34768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (5))){
var inst_34712 = (state_34728[(2)]);
var state_34728__$1 = (function (){var statearr_34745 = state_34728;
(statearr_34745[(11)] = inst_34712);

return statearr_34745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34728__$1,(12),dchan);
} else {
if((state_val_34729 === (14))){
var inst_34714 = (state_34728[(8)]);
var inst_34719 = cljs.core.apply.call(null,f,inst_34714);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34728__$1,(16),out,inst_34719);
} else {
if((state_val_34729 === (16))){
var inst_34721 = (state_34728[(2)]);
var state_34728__$1 = (function (){var statearr_34746 = state_34728;
(statearr_34746[(12)] = inst_34721);

return statearr_34746;
})();
var statearr_34747_34769 = state_34728__$1;
(statearr_34747_34769[(2)] = null);

(statearr_34747_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34696 = (state_34728[(2)]);
var inst_34697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34728__$1 = (function (){var statearr_34748 = state_34728;
(statearr_34748[(13)] = inst_34696);

return statearr_34748;
})();
var statearr_34749_34770 = state_34728__$1;
(statearr_34749_34770[(2)] = inst_34697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34710 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34750_34771 = state_34728__$1;
(statearr_34750_34771[(2)] = inst_34710);

(statearr_34750_34771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33326__auto__,c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_34751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34751[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_34751[(1)] = (1));

return statearr_34751;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_34728){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34752){if((e34752 instanceof Object)){
var ex__33330__auto__ = e34752;
var statearr_34753_34772 = state_34728;
(statearr_34753_34772[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34773 = state_34728;
state_34728 = G__34773;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33418__auto__ = (function (){var statearr_34754 = f__33417__auto__.call(null);
(statearr_34754[(6)] = c__33416__auto___34756);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34756,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34776 = arguments.length;
switch (G__34776) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___34830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34830,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34830,out){
return (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34787 = (state_34808[(7)]);
var inst_34788 = (state_34808[(8)]);
var inst_34787__$1 = (state_34808[(2)]);
var inst_34788__$1 = cljs.core.nth.call(null,inst_34787__$1,(0),null);
var inst_34789 = cljs.core.nth.call(null,inst_34787__$1,(1),null);
var inst_34790 = (inst_34788__$1 == null);
var state_34808__$1 = (function (){var statearr_34810 = state_34808;
(statearr_34810[(7)] = inst_34787__$1);

(statearr_34810[(9)] = inst_34789);

(statearr_34810[(8)] = inst_34788__$1);

return statearr_34810;
})();
if(cljs.core.truth_(inst_34790)){
var statearr_34811_34831 = state_34808__$1;
(statearr_34811_34831[(1)] = (8));

} else {
var statearr_34812_34832 = state_34808__$1;
(statearr_34812_34832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (1))){
var inst_34777 = cljs.core.vec.call(null,chs);
var inst_34778 = inst_34777;
var state_34808__$1 = (function (){var statearr_34813 = state_34808;
(statearr_34813[(10)] = inst_34778);

return statearr_34813;
})();
var statearr_34814_34833 = state_34808__$1;
(statearr_34814_34833[(2)] = null);

(statearr_34814_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (4))){
var inst_34778 = (state_34808[(10)]);
var state_34808__$1 = state_34808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34808__$1,(7),inst_34778);
} else {
if((state_val_34809 === (6))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34815_34834 = state_34808__$1;
(statearr_34815_34834[(2)] = inst_34804);

(statearr_34815_34834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (2))){
var inst_34778 = (state_34808[(10)]);
var inst_34780 = cljs.core.count.call(null,inst_34778);
var inst_34781 = (inst_34780 > (0));
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34781)){
var statearr_34817_34835 = state_34808__$1;
(statearr_34817_34835[(1)] = (4));

} else {
var statearr_34818_34836 = state_34808__$1;
(statearr_34818_34836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (11))){
var inst_34778 = (state_34808[(10)]);
var inst_34797 = (state_34808[(2)]);
var tmp34816 = inst_34778;
var inst_34778__$1 = tmp34816;
var state_34808__$1 = (function (){var statearr_34819 = state_34808;
(statearr_34819[(11)] = inst_34797);

(statearr_34819[(10)] = inst_34778__$1);

return statearr_34819;
})();
var statearr_34820_34837 = state_34808__$1;
(statearr_34820_34837[(2)] = null);

(statearr_34820_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (9))){
var inst_34788 = (state_34808[(8)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34808__$1,(11),out,inst_34788);
} else {
if((state_val_34809 === (5))){
var inst_34802 = cljs.core.async.close_BANG_.call(null,out);
var state_34808__$1 = state_34808;
var statearr_34821_34838 = state_34808__$1;
(statearr_34821_34838[(2)] = inst_34802);

(statearr_34821_34838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (10))){
var inst_34800 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34822_34839 = state_34808__$1;
(statearr_34822_34839[(2)] = inst_34800);

(statearr_34822_34839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (8))){
var inst_34787 = (state_34808[(7)]);
var inst_34789 = (state_34808[(9)]);
var inst_34778 = (state_34808[(10)]);
var inst_34788 = (state_34808[(8)]);
var inst_34792 = (function (){var cs = inst_34778;
var vec__34783 = inst_34787;
var v = inst_34788;
var c = inst_34789;
return ((function (cs,vec__34783,v,c,inst_34787,inst_34789,inst_34778,inst_34788,state_val_34809,c__33416__auto___34830,out){
return (function (p1__34774_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34774_SHARP_);
});
;})(cs,vec__34783,v,c,inst_34787,inst_34789,inst_34778,inst_34788,state_val_34809,c__33416__auto___34830,out))
})();
var inst_34793 = cljs.core.filterv.call(null,inst_34792,inst_34778);
var inst_34778__$1 = inst_34793;
var state_34808__$1 = (function (){var statearr_34823 = state_34808;
(statearr_34823[(10)] = inst_34778__$1);

return statearr_34823;
})();
var statearr_34824_34840 = state_34808__$1;
(statearr_34824_34840[(2)] = null);

(statearr_34824_34840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34830,out))
;
return ((function (switch__33326__auto__,c__33416__auto___34830,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_34808){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__33330__auto__ = e34826;
var statearr_34827_34841 = state_34808;
(statearr_34827_34841[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34842 = state_34808;
state_34808 = G__34842;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_34808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34830,out))
})();
var state__33418__auto__ = (function (){var statearr_34828 = f__33417__auto__.call(null);
(statearr_34828[(6)] = c__33416__auto___34830);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34830,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34844 = arguments.length;
switch (G__34844) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___34889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34889,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34889,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34850 = (state_34868[(7)]);
var inst_34850__$1 = (state_34868[(2)]);
var inst_34851 = (inst_34850__$1 == null);
var inst_34852 = cljs.core.not.call(null,inst_34851);
var state_34868__$1 = (function (){var statearr_34870 = state_34868;
(statearr_34870[(7)] = inst_34850__$1);

return statearr_34870;
})();
if(inst_34852){
var statearr_34871_34890 = state_34868__$1;
(statearr_34871_34890[(1)] = (8));

} else {
var statearr_34872_34891 = state_34868__$1;
(statearr_34872_34891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (1))){
var inst_34845 = (0);
var state_34868__$1 = (function (){var statearr_34873 = state_34868;
(statearr_34873[(8)] = inst_34845);

return statearr_34873;
})();
var statearr_34874_34892 = state_34868__$1;
(statearr_34874_34892[(2)] = null);

(statearr_34874_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34868__$1,(7),ch);
} else {
if((state_val_34869 === (6))){
var inst_34863 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34875_34893 = state_34868__$1;
(statearr_34875_34893[(2)] = inst_34863);

(statearr_34875_34893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34865 = (state_34868[(2)]);
var inst_34866 = cljs.core.async.close_BANG_.call(null,out);
var state_34868__$1 = (function (){var statearr_34876 = state_34868;
(statearr_34876[(9)] = inst_34865);

return statearr_34876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (2))){
var inst_34845 = (state_34868[(8)]);
var inst_34847 = (inst_34845 < n);
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34847)){
var statearr_34877_34894 = state_34868__$1;
(statearr_34877_34894[(1)] = (4));

} else {
var statearr_34878_34895 = state_34868__$1;
(statearr_34878_34895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (11))){
var inst_34845 = (state_34868[(8)]);
var inst_34855 = (state_34868[(2)]);
var inst_34856 = (inst_34845 + (1));
var inst_34845__$1 = inst_34856;
var state_34868__$1 = (function (){var statearr_34879 = state_34868;
(statearr_34879[(8)] = inst_34845__$1);

(statearr_34879[(10)] = inst_34855);

return statearr_34879;
})();
var statearr_34880_34896 = state_34868__$1;
(statearr_34880_34896[(2)] = null);

(statearr_34880_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var state_34868__$1 = state_34868;
var statearr_34881_34897 = state_34868__$1;
(statearr_34881_34897[(2)] = null);

(statearr_34881_34897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (5))){
var state_34868__$1 = state_34868;
var statearr_34882_34898 = state_34868__$1;
(statearr_34882_34898[(2)] = null);

(statearr_34882_34898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34860 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34883_34899 = state_34868__$1;
(statearr_34883_34899[(2)] = inst_34860);

(statearr_34883_34899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34850 = (state_34868[(7)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34868__$1,(11),out,inst_34850);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34889,out))
;
return ((function (switch__33326__auto__,c__33416__auto___34889,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_34884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34884[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_34884[(1)] = (1));

return statearr_34884;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_34868){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34885){if((e34885 instanceof Object)){
var ex__33330__auto__ = e34885;
var statearr_34886_34900 = state_34868;
(statearr_34886_34900[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34901 = state_34868;
state_34868 = G__34901;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34889,out))
})();
var state__33418__auto__ = (function (){var statearr_34887 = f__33417__auto__.call(null);
(statearr_34887[(6)] = c__33416__auto___34889);

return statearr_34887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34889,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34903 = (function (f,ch,meta34904){
this.f = f;
this.ch = ch;
this.meta34904 = meta34904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34905,meta34904__$1){
var self__ = this;
var _34905__$1 = this;
return (new cljs.core.async.t_cljs$core$async34903(self__.f,self__.ch,meta34904__$1));
});

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34905){
var self__ = this;
var _34905__$1 = this;
return self__.meta34904;
});

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34906 = (function (f,ch,meta34904,_,fn1,meta34907){
this.f = f;
this.ch = ch;
this.meta34904 = meta34904;
this._ = _;
this.fn1 = fn1;
this.meta34907 = meta34907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34908,meta34907__$1){
var self__ = this;
var _34908__$1 = this;
return (new cljs.core.async.t_cljs$core$async34906(self__.f,self__.ch,self__.meta34904,self__._,self__.fn1,meta34907__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34908){
var self__ = this;
var _34908__$1 = this;
return self__.meta34907;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34902_SHARP_){
return f1.call(null,(((p1__34902_SHARP_ == null))?null:self__.f.call(null,p1__34902_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34904","meta34904",1058309425,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34903","cljs.core.async/t_cljs$core$async34903",-151360911,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34907","meta34907",-2089684560,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34906";

cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34906");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34906 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34906(f__$1,ch__$1,meta34904__$1,___$2,fn1__$1,meta34907){
return (new cljs.core.async.t_cljs$core$async34906(f__$1,ch__$1,meta34904__$1,___$2,fn1__$1,meta34907));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34906(self__.f,self__.ch,self__.meta34904,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29181__auto__ = ret;
if(cljs.core.truth_(and__29181__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29181__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34904","meta34904",1058309425,null)], null);
});

cljs.core.async.t_cljs$core$async34903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34903";

cljs.core.async.t_cljs$core$async34903.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34903");
});

cljs.core.async.__GT_t_cljs$core$async34903 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34903(f__$1,ch__$1,meta34904){
return (new cljs.core.async.t_cljs$core$async34903(f__$1,ch__$1,meta34904));
});

}

return (new cljs.core.async.t_cljs$core$async34903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34909 = (function (f,ch,meta34910){
this.f = f;
this.ch = ch;
this.meta34910 = meta34910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34911,meta34910__$1){
var self__ = this;
var _34911__$1 = this;
return (new cljs.core.async.t_cljs$core$async34909(self__.f,self__.ch,meta34910__$1));
});

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34911){
var self__ = this;
var _34911__$1 = this;
return self__.meta34910;
});

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34910","meta34910",1212298840,null)], null);
});

cljs.core.async.t_cljs$core$async34909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34909";

cljs.core.async.t_cljs$core$async34909.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34909");
});

cljs.core.async.__GT_t_cljs$core$async34909 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34909(f__$1,ch__$1,meta34910){
return (new cljs.core.async.t_cljs$core$async34909(f__$1,ch__$1,meta34910));
});

}

return (new cljs.core.async.t_cljs$core$async34909(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34912 = (function (p,ch,meta34913){
this.p = p;
this.ch = ch;
this.meta34913 = meta34913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34914,meta34913__$1){
var self__ = this;
var _34914__$1 = this;
return (new cljs.core.async.t_cljs$core$async34912(self__.p,self__.ch,meta34913__$1));
});

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34914){
var self__ = this;
var _34914__$1 = this;
return self__.meta34913;
});

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34913","meta34913",1978123968,null)], null);
});

cljs.core.async.t_cljs$core$async34912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34912";

cljs.core.async.t_cljs$core$async34912.cljs$lang$ctorPrWriter = (function (this__29864__auto__,writer__29865__auto__,opt__29866__auto__){
return cljs.core._write.call(null,writer__29865__auto__,"cljs.core.async/t_cljs$core$async34912");
});

cljs.core.async.__GT_t_cljs$core$async34912 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34912(p__$1,ch__$1,meta34913){
return (new cljs.core.async.t_cljs$core$async34912(p__$1,ch__$1,meta34913));
});

}

return (new cljs.core.async.t_cljs$core$async34912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34916 = arguments.length;
switch (G__34916) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___34956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___34956,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___34956,out){
return (function (state_34937){
var state_val_34938 = (state_34937[(1)]);
if((state_val_34938 === (7))){
var inst_34933 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
var statearr_34939_34957 = state_34937__$1;
(statearr_34939_34957[(2)] = inst_34933);

(statearr_34939_34957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (1))){
var state_34937__$1 = state_34937;
var statearr_34940_34958 = state_34937__$1;
(statearr_34940_34958[(2)] = null);

(statearr_34940_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (4))){
var inst_34919 = (state_34937[(7)]);
var inst_34919__$1 = (state_34937[(2)]);
var inst_34920 = (inst_34919__$1 == null);
var state_34937__$1 = (function (){var statearr_34941 = state_34937;
(statearr_34941[(7)] = inst_34919__$1);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34942_34959 = state_34937__$1;
(statearr_34942_34959[(1)] = (5));

} else {
var statearr_34943_34960 = state_34937__$1;
(statearr_34943_34960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (6))){
var inst_34919 = (state_34937[(7)]);
var inst_34924 = p.call(null,inst_34919);
var state_34937__$1 = state_34937;
if(cljs.core.truth_(inst_34924)){
var statearr_34944_34961 = state_34937__$1;
(statearr_34944_34961[(1)] = (8));

} else {
var statearr_34945_34962 = state_34937__$1;
(statearr_34945_34962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (3))){
var inst_34935 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34937__$1,inst_34935);
} else {
if((state_val_34938 === (2))){
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34937__$1,(4),ch);
} else {
if((state_val_34938 === (11))){
var inst_34927 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
var statearr_34946_34963 = state_34937__$1;
(statearr_34946_34963[(2)] = inst_34927);

(statearr_34946_34963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (9))){
var state_34937__$1 = state_34937;
var statearr_34947_34964 = state_34937__$1;
(statearr_34947_34964[(2)] = null);

(statearr_34947_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (5))){
var inst_34922 = cljs.core.async.close_BANG_.call(null,out);
var state_34937__$1 = state_34937;
var statearr_34948_34965 = state_34937__$1;
(statearr_34948_34965[(2)] = inst_34922);

(statearr_34948_34965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (10))){
var inst_34930 = (state_34937[(2)]);
var state_34937__$1 = (function (){var statearr_34949 = state_34937;
(statearr_34949[(8)] = inst_34930);

return statearr_34949;
})();
var statearr_34950_34966 = state_34937__$1;
(statearr_34950_34966[(2)] = null);

(statearr_34950_34966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (8))){
var inst_34919 = (state_34937[(7)]);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34937__$1,(11),out,inst_34919);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___34956,out))
;
return ((function (switch__33326__auto__,c__33416__auto___34956,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_34951 = [null,null,null,null,null,null,null,null,null];
(statearr_34951[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_34951[(1)] = (1));

return statearr_34951;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_34937){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_34937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e34952){if((e34952 instanceof Object)){
var ex__33330__auto__ = e34952;
var statearr_34953_34967 = state_34937;
(statearr_34953_34967[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34968 = state_34937;
state_34937 = G__34968;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_34937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_34937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___34956,out))
})();
var state__33418__auto__ = (function (){var statearr_34954 = f__33417__auto__.call(null);
(statearr_34954[(6)] = c__33416__auto___34956);

return statearr_34954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___34956,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34970 = arguments.length;
switch (G__34970) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto__){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto__){
return (function (state_35033){
var state_val_35034 = (state_35033[(1)]);
if((state_val_35034 === (7))){
var inst_35029 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
var statearr_35035_35073 = state_35033__$1;
(statearr_35035_35073[(2)] = inst_35029);

(statearr_35035_35073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (20))){
var inst_34999 = (state_35033[(7)]);
var inst_35010 = (state_35033[(2)]);
var inst_35011 = cljs.core.next.call(null,inst_34999);
var inst_34985 = inst_35011;
var inst_34986 = null;
var inst_34987 = (0);
var inst_34988 = (0);
var state_35033__$1 = (function (){var statearr_35036 = state_35033;
(statearr_35036[(8)] = inst_34988);

(statearr_35036[(9)] = inst_34985);

(statearr_35036[(10)] = inst_34986);

(statearr_35036[(11)] = inst_35010);

(statearr_35036[(12)] = inst_34987);

return statearr_35036;
})();
var statearr_35037_35074 = state_35033__$1;
(statearr_35037_35074[(2)] = null);

(statearr_35037_35074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (1))){
var state_35033__$1 = state_35033;
var statearr_35038_35075 = state_35033__$1;
(statearr_35038_35075[(2)] = null);

(statearr_35038_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (4))){
var inst_34974 = (state_35033[(13)]);
var inst_34974__$1 = (state_35033[(2)]);
var inst_34975 = (inst_34974__$1 == null);
var state_35033__$1 = (function (){var statearr_35039 = state_35033;
(statearr_35039[(13)] = inst_34974__$1);

return statearr_35039;
})();
if(cljs.core.truth_(inst_34975)){
var statearr_35040_35076 = state_35033__$1;
(statearr_35040_35076[(1)] = (5));

} else {
var statearr_35041_35077 = state_35033__$1;
(statearr_35041_35077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (15))){
var state_35033__$1 = state_35033;
var statearr_35045_35078 = state_35033__$1;
(statearr_35045_35078[(2)] = null);

(statearr_35045_35078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (21))){
var state_35033__$1 = state_35033;
var statearr_35046_35079 = state_35033__$1;
(statearr_35046_35079[(2)] = null);

(statearr_35046_35079[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (13))){
var inst_34988 = (state_35033[(8)]);
var inst_34985 = (state_35033[(9)]);
var inst_34986 = (state_35033[(10)]);
var inst_34987 = (state_35033[(12)]);
var inst_34995 = (state_35033[(2)]);
var inst_34996 = (inst_34988 + (1));
var tmp35042 = inst_34985;
var tmp35043 = inst_34986;
var tmp35044 = inst_34987;
var inst_34985__$1 = tmp35042;
var inst_34986__$1 = tmp35043;
var inst_34987__$1 = tmp35044;
var inst_34988__$1 = inst_34996;
var state_35033__$1 = (function (){var statearr_35047 = state_35033;
(statearr_35047[(8)] = inst_34988__$1);

(statearr_35047[(14)] = inst_34995);

(statearr_35047[(9)] = inst_34985__$1);

(statearr_35047[(10)] = inst_34986__$1);

(statearr_35047[(12)] = inst_34987__$1);

return statearr_35047;
})();
var statearr_35048_35080 = state_35033__$1;
(statearr_35048_35080[(2)] = null);

(statearr_35048_35080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (22))){
var state_35033__$1 = state_35033;
var statearr_35049_35081 = state_35033__$1;
(statearr_35049_35081[(2)] = null);

(statearr_35049_35081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (6))){
var inst_34974 = (state_35033[(13)]);
var inst_34983 = f.call(null,inst_34974);
var inst_34984 = cljs.core.seq.call(null,inst_34983);
var inst_34985 = inst_34984;
var inst_34986 = null;
var inst_34987 = (0);
var inst_34988 = (0);
var state_35033__$1 = (function (){var statearr_35050 = state_35033;
(statearr_35050[(8)] = inst_34988);

(statearr_35050[(9)] = inst_34985);

(statearr_35050[(10)] = inst_34986);

(statearr_35050[(12)] = inst_34987);

return statearr_35050;
})();
var statearr_35051_35082 = state_35033__$1;
(statearr_35051_35082[(2)] = null);

(statearr_35051_35082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (17))){
var inst_34999 = (state_35033[(7)]);
var inst_35003 = cljs.core.chunk_first.call(null,inst_34999);
var inst_35004 = cljs.core.chunk_rest.call(null,inst_34999);
var inst_35005 = cljs.core.count.call(null,inst_35003);
var inst_34985 = inst_35004;
var inst_34986 = inst_35003;
var inst_34987 = inst_35005;
var inst_34988 = (0);
var state_35033__$1 = (function (){var statearr_35052 = state_35033;
(statearr_35052[(8)] = inst_34988);

(statearr_35052[(9)] = inst_34985);

(statearr_35052[(10)] = inst_34986);

(statearr_35052[(12)] = inst_34987);

return statearr_35052;
})();
var statearr_35053_35083 = state_35033__$1;
(statearr_35053_35083[(2)] = null);

(statearr_35053_35083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (3))){
var inst_35031 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35033__$1,inst_35031);
} else {
if((state_val_35034 === (12))){
var inst_35019 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
var statearr_35054_35084 = state_35033__$1;
(statearr_35054_35084[(2)] = inst_35019);

(statearr_35054_35084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (2))){
var state_35033__$1 = state_35033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35033__$1,(4),in$);
} else {
if((state_val_35034 === (23))){
var inst_35027 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
var statearr_35055_35085 = state_35033__$1;
(statearr_35055_35085[(2)] = inst_35027);

(statearr_35055_35085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (19))){
var inst_35014 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
var statearr_35056_35086 = state_35033__$1;
(statearr_35056_35086[(2)] = inst_35014);

(statearr_35056_35086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (11))){
var inst_34999 = (state_35033[(7)]);
var inst_34985 = (state_35033[(9)]);
var inst_34999__$1 = cljs.core.seq.call(null,inst_34985);
var state_35033__$1 = (function (){var statearr_35057 = state_35033;
(statearr_35057[(7)] = inst_34999__$1);

return statearr_35057;
})();
if(inst_34999__$1){
var statearr_35058_35087 = state_35033__$1;
(statearr_35058_35087[(1)] = (14));

} else {
var statearr_35059_35088 = state_35033__$1;
(statearr_35059_35088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (9))){
var inst_35021 = (state_35033[(2)]);
var inst_35022 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35033__$1 = (function (){var statearr_35060 = state_35033;
(statearr_35060[(15)] = inst_35021);

return statearr_35060;
})();
if(cljs.core.truth_(inst_35022)){
var statearr_35061_35089 = state_35033__$1;
(statearr_35061_35089[(1)] = (21));

} else {
var statearr_35062_35090 = state_35033__$1;
(statearr_35062_35090[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (5))){
var inst_34977 = cljs.core.async.close_BANG_.call(null,out);
var state_35033__$1 = state_35033;
var statearr_35063_35091 = state_35033__$1;
(statearr_35063_35091[(2)] = inst_34977);

(statearr_35063_35091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (14))){
var inst_34999 = (state_35033[(7)]);
var inst_35001 = cljs.core.chunked_seq_QMARK_.call(null,inst_34999);
var state_35033__$1 = state_35033;
if(inst_35001){
var statearr_35064_35092 = state_35033__$1;
(statearr_35064_35092[(1)] = (17));

} else {
var statearr_35065_35093 = state_35033__$1;
(statearr_35065_35093[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (16))){
var inst_35017 = (state_35033[(2)]);
var state_35033__$1 = state_35033;
var statearr_35066_35094 = state_35033__$1;
(statearr_35066_35094[(2)] = inst_35017);

(statearr_35066_35094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35034 === (10))){
var inst_34988 = (state_35033[(8)]);
var inst_34986 = (state_35033[(10)]);
var inst_34993 = cljs.core._nth.call(null,inst_34986,inst_34988);
var state_35033__$1 = state_35033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35033__$1,(13),out,inst_34993);
} else {
if((state_val_35034 === (18))){
var inst_34999 = (state_35033[(7)]);
var inst_35008 = cljs.core.first.call(null,inst_34999);
var state_35033__$1 = state_35033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35033__$1,(20),out,inst_35008);
} else {
if((state_val_35034 === (8))){
var inst_34988 = (state_35033[(8)]);
var inst_34987 = (state_35033[(12)]);
var inst_34990 = (inst_34988 < inst_34987);
var inst_34991 = inst_34990;
var state_35033__$1 = state_35033;
if(cljs.core.truth_(inst_34991)){
var statearr_35067_35095 = state_35033__$1;
(statearr_35067_35095[(1)] = (10));

} else {
var statearr_35068_35096 = state_35033__$1;
(statearr_35068_35096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto__))
;
return ((function (switch__33326__auto__,c__33416__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____0 = (function (){
var statearr_35069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35069[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__);

(statearr_35069[(1)] = (1));

return statearr_35069;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____1 = (function (state_35033){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_35033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e35070){if((e35070 instanceof Object)){
var ex__33330__auto__ = e35070;
var statearr_35071_35097 = state_35033;
(statearr_35071_35097[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35098 = state_35033;
state_35033 = G__35098;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__ = function(state_35033){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____1.call(this,state_35033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33327__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto__))
})();
var state__33418__auto__ = (function (){var statearr_35072 = f__33417__auto__.call(null);
(statearr_35072[(6)] = c__33416__auto__);

return statearr_35072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto__))
);

return c__33416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35100 = arguments.length;
switch (G__35100) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35103 = arguments.length;
switch (G__35103) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35106 = arguments.length;
switch (G__35106) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___35153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___35153,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___35153,out){
return (function (state_35130){
var state_val_35131 = (state_35130[(1)]);
if((state_val_35131 === (7))){
var inst_35125 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35132_35154 = state_35130__$1;
(statearr_35132_35154[(2)] = inst_35125);

(statearr_35132_35154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (1))){
var inst_35107 = null;
var state_35130__$1 = (function (){var statearr_35133 = state_35130;
(statearr_35133[(7)] = inst_35107);

return statearr_35133;
})();
var statearr_35134_35155 = state_35130__$1;
(statearr_35134_35155[(2)] = null);

(statearr_35134_35155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (4))){
var inst_35110 = (state_35130[(8)]);
var inst_35110__$1 = (state_35130[(2)]);
var inst_35111 = (inst_35110__$1 == null);
var inst_35112 = cljs.core.not.call(null,inst_35111);
var state_35130__$1 = (function (){var statearr_35135 = state_35130;
(statearr_35135[(8)] = inst_35110__$1);

return statearr_35135;
})();
if(inst_35112){
var statearr_35136_35156 = state_35130__$1;
(statearr_35136_35156[(1)] = (5));

} else {
var statearr_35137_35157 = state_35130__$1;
(statearr_35137_35157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (6))){
var state_35130__$1 = state_35130;
var statearr_35138_35158 = state_35130__$1;
(statearr_35138_35158[(2)] = null);

(statearr_35138_35158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (3))){
var inst_35127 = (state_35130[(2)]);
var inst_35128 = cljs.core.async.close_BANG_.call(null,out);
var state_35130__$1 = (function (){var statearr_35139 = state_35130;
(statearr_35139[(9)] = inst_35127);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35130__$1,inst_35128);
} else {
if((state_val_35131 === (2))){
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35130__$1,(4),ch);
} else {
if((state_val_35131 === (11))){
var inst_35110 = (state_35130[(8)]);
var inst_35119 = (state_35130[(2)]);
var inst_35107 = inst_35110;
var state_35130__$1 = (function (){var statearr_35140 = state_35130;
(statearr_35140[(7)] = inst_35107);

(statearr_35140[(10)] = inst_35119);

return statearr_35140;
})();
var statearr_35141_35159 = state_35130__$1;
(statearr_35141_35159[(2)] = null);

(statearr_35141_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (9))){
var inst_35110 = (state_35130[(8)]);
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35130__$1,(11),out,inst_35110);
} else {
if((state_val_35131 === (5))){
var inst_35107 = (state_35130[(7)]);
var inst_35110 = (state_35130[(8)]);
var inst_35114 = cljs.core._EQ_.call(null,inst_35110,inst_35107);
var state_35130__$1 = state_35130;
if(inst_35114){
var statearr_35143_35160 = state_35130__$1;
(statearr_35143_35160[(1)] = (8));

} else {
var statearr_35144_35161 = state_35130__$1;
(statearr_35144_35161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (10))){
var inst_35122 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35145_35162 = state_35130__$1;
(statearr_35145_35162[(2)] = inst_35122);

(statearr_35145_35162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (8))){
var inst_35107 = (state_35130[(7)]);
var tmp35142 = inst_35107;
var inst_35107__$1 = tmp35142;
var state_35130__$1 = (function (){var statearr_35146 = state_35130;
(statearr_35146[(7)] = inst_35107__$1);

return statearr_35146;
})();
var statearr_35147_35163 = state_35130__$1;
(statearr_35147_35163[(2)] = null);

(statearr_35147_35163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___35153,out))
;
return ((function (switch__33326__auto__,c__33416__auto___35153,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_35148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35148[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_35148[(1)] = (1));

return statearr_35148;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_35130){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_35130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e35149){if((e35149 instanceof Object)){
var ex__33330__auto__ = e35149;
var statearr_35150_35164 = state_35130;
(statearr_35150_35164[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35165 = state_35130;
state_35130 = G__35165;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_35130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_35130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___35153,out))
})();
var state__33418__auto__ = (function (){var statearr_35151 = f__33417__auto__.call(null);
(statearr_35151[(6)] = c__33416__auto___35153);

return statearr_35151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___35153,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35167 = arguments.length;
switch (G__35167) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___35233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___35233,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___35233,out){
return (function (state_35205){
var state_val_35206 = (state_35205[(1)]);
if((state_val_35206 === (7))){
var inst_35201 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
var statearr_35207_35234 = state_35205__$1;
(statearr_35207_35234[(2)] = inst_35201);

(statearr_35207_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (1))){
var inst_35168 = (new Array(n));
var inst_35169 = inst_35168;
var inst_35170 = (0);
var state_35205__$1 = (function (){var statearr_35208 = state_35205;
(statearr_35208[(7)] = inst_35170);

(statearr_35208[(8)] = inst_35169);

return statearr_35208;
})();
var statearr_35209_35235 = state_35205__$1;
(statearr_35209_35235[(2)] = null);

(statearr_35209_35235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (4))){
var inst_35173 = (state_35205[(9)]);
var inst_35173__$1 = (state_35205[(2)]);
var inst_35174 = (inst_35173__$1 == null);
var inst_35175 = cljs.core.not.call(null,inst_35174);
var state_35205__$1 = (function (){var statearr_35210 = state_35205;
(statearr_35210[(9)] = inst_35173__$1);

return statearr_35210;
})();
if(inst_35175){
var statearr_35211_35236 = state_35205__$1;
(statearr_35211_35236[(1)] = (5));

} else {
var statearr_35212_35237 = state_35205__$1;
(statearr_35212_35237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (15))){
var inst_35195 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
var statearr_35213_35238 = state_35205__$1;
(statearr_35213_35238[(2)] = inst_35195);

(statearr_35213_35238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (13))){
var state_35205__$1 = state_35205;
var statearr_35214_35239 = state_35205__$1;
(statearr_35214_35239[(2)] = null);

(statearr_35214_35239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (6))){
var inst_35170 = (state_35205[(7)]);
var inst_35191 = (inst_35170 > (0));
var state_35205__$1 = state_35205;
if(cljs.core.truth_(inst_35191)){
var statearr_35215_35240 = state_35205__$1;
(statearr_35215_35240[(1)] = (12));

} else {
var statearr_35216_35241 = state_35205__$1;
(statearr_35216_35241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (3))){
var inst_35203 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35205__$1,inst_35203);
} else {
if((state_val_35206 === (12))){
var inst_35169 = (state_35205[(8)]);
var inst_35193 = cljs.core.vec.call(null,inst_35169);
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35205__$1,(15),out,inst_35193);
} else {
if((state_val_35206 === (2))){
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35205__$1,(4),ch);
} else {
if((state_val_35206 === (11))){
var inst_35185 = (state_35205[(2)]);
var inst_35186 = (new Array(n));
var inst_35169 = inst_35186;
var inst_35170 = (0);
var state_35205__$1 = (function (){var statearr_35217 = state_35205;
(statearr_35217[(7)] = inst_35170);

(statearr_35217[(10)] = inst_35185);

(statearr_35217[(8)] = inst_35169);

return statearr_35217;
})();
var statearr_35218_35242 = state_35205__$1;
(statearr_35218_35242[(2)] = null);

(statearr_35218_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (9))){
var inst_35169 = (state_35205[(8)]);
var inst_35183 = cljs.core.vec.call(null,inst_35169);
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35205__$1,(11),out,inst_35183);
} else {
if((state_val_35206 === (5))){
var inst_35170 = (state_35205[(7)]);
var inst_35178 = (state_35205[(11)]);
var inst_35169 = (state_35205[(8)]);
var inst_35173 = (state_35205[(9)]);
var inst_35177 = (inst_35169[inst_35170] = inst_35173);
var inst_35178__$1 = (inst_35170 + (1));
var inst_35179 = (inst_35178__$1 < n);
var state_35205__$1 = (function (){var statearr_35219 = state_35205;
(statearr_35219[(12)] = inst_35177);

(statearr_35219[(11)] = inst_35178__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35179)){
var statearr_35220_35243 = state_35205__$1;
(statearr_35220_35243[(1)] = (8));

} else {
var statearr_35221_35244 = state_35205__$1;
(statearr_35221_35244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (14))){
var inst_35198 = (state_35205[(2)]);
var inst_35199 = cljs.core.async.close_BANG_.call(null,out);
var state_35205__$1 = (function (){var statearr_35223 = state_35205;
(statearr_35223[(13)] = inst_35198);

return statearr_35223;
})();
var statearr_35224_35245 = state_35205__$1;
(statearr_35224_35245[(2)] = inst_35199);

(statearr_35224_35245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (10))){
var inst_35189 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
var statearr_35225_35246 = state_35205__$1;
(statearr_35225_35246[(2)] = inst_35189);

(statearr_35225_35246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (8))){
var inst_35178 = (state_35205[(11)]);
var inst_35169 = (state_35205[(8)]);
var tmp35222 = inst_35169;
var inst_35169__$1 = tmp35222;
var inst_35170 = inst_35178;
var state_35205__$1 = (function (){var statearr_35226 = state_35205;
(statearr_35226[(7)] = inst_35170);

(statearr_35226[(8)] = inst_35169__$1);

return statearr_35226;
})();
var statearr_35227_35247 = state_35205__$1;
(statearr_35227_35247[(2)] = null);

(statearr_35227_35247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___35233,out))
;
return ((function (switch__33326__auto__,c__33416__auto___35233,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_35228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35228[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_35228[(1)] = (1));

return statearr_35228;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_35205){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_35205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e35229){if((e35229 instanceof Object)){
var ex__33330__auto__ = e35229;
var statearr_35230_35248 = state_35205;
(statearr_35230_35248[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35249 = state_35205;
state_35205 = G__35249;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_35205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_35205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___35233,out))
})();
var state__33418__auto__ = (function (){var statearr_35231 = f__33417__auto__.call(null);
(statearr_35231[(6)] = c__33416__auto___35233);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___35233,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35251 = arguments.length;
switch (G__35251) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33416__auto___35321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33416__auto___35321,out){
return (function (){
var f__33417__auto__ = (function (){var switch__33326__auto__ = ((function (c__33416__auto___35321,out){
return (function (state_35293){
var state_val_35294 = (state_35293[(1)]);
if((state_val_35294 === (7))){
var inst_35289 = (state_35293[(2)]);
var state_35293__$1 = state_35293;
var statearr_35295_35322 = state_35293__$1;
(statearr_35295_35322[(2)] = inst_35289);

(statearr_35295_35322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (1))){
var inst_35252 = [];
var inst_35253 = inst_35252;
var inst_35254 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35293__$1 = (function (){var statearr_35296 = state_35293;
(statearr_35296[(7)] = inst_35253);

(statearr_35296[(8)] = inst_35254);

return statearr_35296;
})();
var statearr_35297_35323 = state_35293__$1;
(statearr_35297_35323[(2)] = null);

(statearr_35297_35323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (4))){
var inst_35257 = (state_35293[(9)]);
var inst_35257__$1 = (state_35293[(2)]);
var inst_35258 = (inst_35257__$1 == null);
var inst_35259 = cljs.core.not.call(null,inst_35258);
var state_35293__$1 = (function (){var statearr_35298 = state_35293;
(statearr_35298[(9)] = inst_35257__$1);

return statearr_35298;
})();
if(inst_35259){
var statearr_35299_35324 = state_35293__$1;
(statearr_35299_35324[(1)] = (5));

} else {
var statearr_35300_35325 = state_35293__$1;
(statearr_35300_35325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (15))){
var inst_35283 = (state_35293[(2)]);
var state_35293__$1 = state_35293;
var statearr_35301_35326 = state_35293__$1;
(statearr_35301_35326[(2)] = inst_35283);

(statearr_35301_35326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (13))){
var state_35293__$1 = state_35293;
var statearr_35302_35327 = state_35293__$1;
(statearr_35302_35327[(2)] = null);

(statearr_35302_35327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (6))){
var inst_35253 = (state_35293[(7)]);
var inst_35278 = inst_35253.length;
var inst_35279 = (inst_35278 > (0));
var state_35293__$1 = state_35293;
if(cljs.core.truth_(inst_35279)){
var statearr_35303_35328 = state_35293__$1;
(statearr_35303_35328[(1)] = (12));

} else {
var statearr_35304_35329 = state_35293__$1;
(statearr_35304_35329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (3))){
var inst_35291 = (state_35293[(2)]);
var state_35293__$1 = state_35293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35293__$1,inst_35291);
} else {
if((state_val_35294 === (12))){
var inst_35253 = (state_35293[(7)]);
var inst_35281 = cljs.core.vec.call(null,inst_35253);
var state_35293__$1 = state_35293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35293__$1,(15),out,inst_35281);
} else {
if((state_val_35294 === (2))){
var state_35293__$1 = state_35293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35293__$1,(4),ch);
} else {
if((state_val_35294 === (11))){
var inst_35257 = (state_35293[(9)]);
var inst_35261 = (state_35293[(10)]);
var inst_35271 = (state_35293[(2)]);
var inst_35272 = [];
var inst_35273 = inst_35272.push(inst_35257);
var inst_35253 = inst_35272;
var inst_35254 = inst_35261;
var state_35293__$1 = (function (){var statearr_35305 = state_35293;
(statearr_35305[(11)] = inst_35273);

(statearr_35305[(7)] = inst_35253);

(statearr_35305[(8)] = inst_35254);

(statearr_35305[(12)] = inst_35271);

return statearr_35305;
})();
var statearr_35306_35330 = state_35293__$1;
(statearr_35306_35330[(2)] = null);

(statearr_35306_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (9))){
var inst_35253 = (state_35293[(7)]);
var inst_35269 = cljs.core.vec.call(null,inst_35253);
var state_35293__$1 = state_35293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35293__$1,(11),out,inst_35269);
} else {
if((state_val_35294 === (5))){
var inst_35257 = (state_35293[(9)]);
var inst_35261 = (state_35293[(10)]);
var inst_35254 = (state_35293[(8)]);
var inst_35261__$1 = f.call(null,inst_35257);
var inst_35262 = cljs.core._EQ_.call(null,inst_35261__$1,inst_35254);
var inst_35263 = cljs.core.keyword_identical_QMARK_.call(null,inst_35254,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35264 = (inst_35262) || (inst_35263);
var state_35293__$1 = (function (){var statearr_35307 = state_35293;
(statearr_35307[(10)] = inst_35261__$1);

return statearr_35307;
})();
if(cljs.core.truth_(inst_35264)){
var statearr_35308_35331 = state_35293__$1;
(statearr_35308_35331[(1)] = (8));

} else {
var statearr_35309_35332 = state_35293__$1;
(statearr_35309_35332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (14))){
var inst_35286 = (state_35293[(2)]);
var inst_35287 = cljs.core.async.close_BANG_.call(null,out);
var state_35293__$1 = (function (){var statearr_35311 = state_35293;
(statearr_35311[(13)] = inst_35286);

return statearr_35311;
})();
var statearr_35312_35333 = state_35293__$1;
(statearr_35312_35333[(2)] = inst_35287);

(statearr_35312_35333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (10))){
var inst_35276 = (state_35293[(2)]);
var state_35293__$1 = state_35293;
var statearr_35313_35334 = state_35293__$1;
(statearr_35313_35334[(2)] = inst_35276);

(statearr_35313_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35294 === (8))){
var inst_35257 = (state_35293[(9)]);
var inst_35261 = (state_35293[(10)]);
var inst_35253 = (state_35293[(7)]);
var inst_35266 = inst_35253.push(inst_35257);
var tmp35310 = inst_35253;
var inst_35253__$1 = tmp35310;
var inst_35254 = inst_35261;
var state_35293__$1 = (function (){var statearr_35314 = state_35293;
(statearr_35314[(14)] = inst_35266);

(statearr_35314[(7)] = inst_35253__$1);

(statearr_35314[(8)] = inst_35254);

return statearr_35314;
})();
var statearr_35315_35335 = state_35293__$1;
(statearr_35315_35335[(2)] = null);

(statearr_35315_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33416__auto___35321,out))
;
return ((function (switch__33326__auto__,c__33416__auto___35321,out){
return (function() {
var cljs$core$async$state_machine__33327__auto__ = null;
var cljs$core$async$state_machine__33327__auto____0 = (function (){
var statearr_35316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35316[(0)] = cljs$core$async$state_machine__33327__auto__);

(statearr_35316[(1)] = (1));

return statearr_35316;
});
var cljs$core$async$state_machine__33327__auto____1 = (function (state_35293){
while(true){
var ret_value__33328__auto__ = (function (){try{while(true){
var result__33329__auto__ = switch__33326__auto__.call(null,state_35293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33329__auto__;
}
break;
}
}catch (e35317){if((e35317 instanceof Object)){
var ex__33330__auto__ = e35317;
var statearr_35318_35336 = state_35293;
(statearr_35318_35336[(5)] = ex__33330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35337 = state_35293;
state_35293 = G__35337;
continue;
} else {
return ret_value__33328__auto__;
}
break;
}
});
cljs$core$async$state_machine__33327__auto__ = function(state_35293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33327__auto____1.call(this,state_35293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33327__auto____0;
cljs$core$async$state_machine__33327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33327__auto____1;
return cljs$core$async$state_machine__33327__auto__;
})()
;})(switch__33326__auto__,c__33416__auto___35321,out))
})();
var state__33418__auto__ = (function (){var statearr_35319 = f__33417__auto__.call(null);
(statearr_35319[(6)] = c__33416__auto___35321);

return statearr_35319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33418__auto__);
});})(c__33416__auto___35321,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502864288219
