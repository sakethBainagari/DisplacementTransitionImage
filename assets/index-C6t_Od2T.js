(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function hm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xd={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function vE(){if(mv)return Dl;mv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Dl.Fragment=t,Dl.jsx=n,Dl.jsxs=n,Dl}var _v;function xE(){return _v||(_v=1,xd.exports=vE()),xd.exports}var ee=xE(),yd={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function yE(){if(gv)return ae;gv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(P,tt,mt){this.props=P,this.context=tt,this.refs=M,this.updater=mt||x}S.prototype.isReactComponent={},S.prototype.setState=function(P,tt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,tt,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(P,tt,mt){this.props=P,this.context=tt,this.refs=M,this.updater=mt||x}var U=L.prototype=new y;U.constructor=L,E(U,S.prototype),U.isPureReactComponent=!0;var A=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function O(P,tt,mt,St,j,dt){return mt=dt.ref,{$$typeof:o,type:P,key:tt,ref:mt!==void 0?mt:null,props:dt}}function F(P,tt){return O(P.type,tt,void 0,void 0,void 0,P.props)}function b(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function C(P){var tt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(mt){return tt[mt]})}var G=/\/+/g;function J(P,tt){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):tt.toString(36)}function Q(){}function at(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(Q,Q):(P.status="pending",P.then(function(tt){P.status==="pending"&&(P.status="fulfilled",P.value=tt)},function(tt){P.status==="pending"&&(P.status="rejected",P.reason=tt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ot(P,tt,mt,St,j){var dt=typeof P;(dt==="undefined"||dt==="boolean")&&(P=null);var yt=!1;if(P===null)yt=!0;else switch(dt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(P.$$typeof){case o:case t:yt=!0;break;case m:return yt=P._init,ot(yt(P._payload),tt,mt,St,j)}}if(yt)return j=j(P),yt=St===""?"."+J(P,0):St,A(j)?(mt="",yt!=null&&(mt=yt.replace(G,"$&/")+"/"),ot(j,tt,mt,"",function(se){return se})):j!=null&&(b(j)&&(j=F(j,mt+(j.key==null||P&&P.key===j.key?"":(""+j.key).replace(G,"$&/")+"/")+yt)),tt.push(j)),1;yt=0;var bt=St===""?".":St+":";if(A(P))for(var Dt=0;Dt<P.length;Dt++)St=P[Dt],dt=bt+J(St,Dt),yt+=ot(St,tt,mt,dt,j);else if(Dt=g(P),typeof Dt=="function")for(P=Dt.call(P),Dt=0;!(St=P.next()).done;)St=St.value,dt=bt+J(St,Dt++),yt+=ot(St,tt,mt,dt,j);else if(dt==="object"){if(typeof P.then=="function")return ot(at(P),tt,mt,St,j);throw tt=String(P),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function B(P,tt,mt){if(P==null)return P;var St=[],j=0;return ot(P,St,"","",function(dt){return tt.call(mt,dt,j++)}),St}function X(P){if(P._status===-1){var tt=P._result;tt=tt(),tt.then(function(mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=mt)},function(mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=mt)}),P._status===-1&&(P._status=0,P._result=tt)}if(P._status===1)return P._result.default;throw P._result}var W=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function xt(){}return ae.Children={map:B,forEach:function(P,tt,mt){B(P,function(){tt.apply(this,arguments)},mt)},count:function(P){var tt=0;return B(P,function(){tt++}),tt},toArray:function(P){return B(P,function(tt){return tt})||[]},only:function(P){if(!b(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ae.Component=S,ae.Fragment=n,ae.Profiler=s,ae.PureComponent=L,ae.StrictMode=a,ae.Suspense=d,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ae.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},ae.cache=function(P){return function(){return P.apply(null,arguments)}},ae.cloneElement=function(P,tt,mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var St=E({},P.props),j=P.key,dt=void 0;if(tt!=null)for(yt in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(j=""+tt.key),tt)!I.call(tt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&tt.ref===void 0||(St[yt]=tt[yt]);var yt=arguments.length-2;if(yt===1)St.children=mt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];St.children=bt}return O(P.type,j,void 0,void 0,dt,St)},ae.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},ae.createElement=function(P,tt,mt){var St,j={},dt=null;if(tt!=null)for(St in tt.key!==void 0&&(dt=""+tt.key),tt)I.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(j[St]=tt[St]);var yt=arguments.length-2;if(yt===1)j.children=mt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];j.children=bt}if(P&&P.defaultProps)for(St in yt=P.defaultProps,yt)j[St]===void 0&&(j[St]=yt[St]);return O(P,dt,void 0,void 0,null,j)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(P){return{$$typeof:f,render:P}},ae.isValidElement=b,ae.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:X}},ae.memo=function(P,tt){return{$$typeof:p,type:P,compare:tt===void 0?null:tt}},ae.startTransition=function(P){var tt=N.T,mt={};N.T=mt;try{var St=P(),j=N.S;j!==null&&j(mt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,W)}catch(dt){W(dt)}finally{N.T=tt}},ae.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ae.use=function(P){return N.H.use(P)},ae.useActionState=function(P,tt,mt){return N.H.useActionState(P,tt,mt)},ae.useCallback=function(P,tt){return N.H.useCallback(P,tt)},ae.useContext=function(P){return N.H.useContext(P)},ae.useDebugValue=function(){},ae.useDeferredValue=function(P,tt){return N.H.useDeferredValue(P,tt)},ae.useEffect=function(P,tt,mt){var St=N.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(P,tt)},ae.useId=function(){return N.H.useId()},ae.useImperativeHandle=function(P,tt,mt){return N.H.useImperativeHandle(P,tt,mt)},ae.useInsertionEffect=function(P,tt){return N.H.useInsertionEffect(P,tt)},ae.useLayoutEffect=function(P,tt){return N.H.useLayoutEffect(P,tt)},ae.useMemo=function(P,tt){return N.H.useMemo(P,tt)},ae.useOptimistic=function(P,tt){return N.H.useOptimistic(P,tt)},ae.useReducer=function(P,tt,mt){return N.H.useReducer(P,tt,mt)},ae.useRef=function(P){return N.H.useRef(P)},ae.useState=function(P){return N.H.useState(P)},ae.useSyncExternalStore=function(P,tt,mt){return N.H.useSyncExternalStore(P,tt,mt)},ae.useTransition=function(){return N.H.useTransition()},ae.version="19.1.0",ae}var vv;function dm(){return vv||(vv=1,yd.exports=yE()),yd.exports}var Ce=dm();const SE=hm(Ce);var Sd={exports:{}},Ul={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function ME(){return xv||(xv=1,function(o){function t(B,X){var W=B.length;B.push(X);t:for(;0<W;){var xt=W-1>>>1,P=B[xt];if(0<s(P,X))B[xt]=X,B[W]=P,W=xt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var X=B[0],W=B.pop();if(W!==X){B[0]=W;t:for(var xt=0,P=B.length,tt=P>>>1;xt<tt;){var mt=2*(xt+1)-1,St=B[mt],j=mt+1,dt=B[j];if(0>s(St,W))j<P&&0>s(dt,St)?(B[xt]=dt,B[j]=W,xt=j):(B[xt]=St,B[mt]=W,xt=mt);else if(j<P&&0>s(dt,W))B[xt]=dt,B[j]=W,xt=j;else break t}}return X}function s(B,X){var W=B.sortIndex-X.sortIndex;return W!==0?W:B.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,v=null,g=3,x=!1,E=!1,M=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var X=n(p);X!==null;){if(X.callback===null)a(p);else if(X.startTime<=B)a(p),X.sortIndex=X.expirationTime,t(d,X);else break;X=n(p)}}function N(B){if(M=!1,A(B),!E)if(n(d)!==null)E=!0,I||(I=!0,J());else{var X=n(p);X!==null&&ot(N,X.startTime-B)}}var I=!1,O=-1,F=5,b=-1;function C(){return S?!0:!(o.unstable_now()-b<F)}function G(){if(S=!1,I){var B=o.unstable_now();b=B;var X=!0;try{t:{E=!1,M&&(M=!1,L(O),O=-1),x=!0;var W=g;try{e:{for(A(B),v=n(d);v!==null&&!(v.expirationTime>B&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,g=v.priorityLevel;var P=xt(v.expirationTime<=B);if(B=o.unstable_now(),typeof P=="function"){v.callback=P,A(B),X=!0;break e}v===n(d)&&a(d),A(B)}else a(d);v=n(d)}if(v!==null)X=!0;else{var tt=n(p);tt!==null&&ot(N,tt.startTime-B),X=!1}}break t}finally{v=null,g=W,x=!1}X=void 0}}finally{X?J():I=!1}}}var J;if(typeof U=="function")J=function(){U(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,at=Q.port2;Q.port1.onmessage=G,J=function(){at.postMessage(null)}}else J=function(){y(G,0)};function ot(B,X){O=y(function(){B(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var W=g;g=X;try{return B()}finally{g=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=g;g=B;try{return X()}finally{g=W}},o.unstable_scheduleCallback=function(B,X,W){var xt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xt+W:xt):W=xt,B){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=W+P,B={id:m++,callback:X,priorityLevel:B,startTime:W,expirationTime:P,sortIndex:-1},W>xt?(B.sortIndex=W,t(p,B),n(d)===null&&B===n(p)&&(M?(L(O),O=-1):M=!0,ot(N,W-xt))):(B.sortIndex=P,t(d,B),E||x||(E=!0,I||(I=!0,J()))),B},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(B){var X=g;return function(){var W=g;g=X;try{return B.apply(this,arguments)}finally{g=W}}}}(Ed)),Ed}var yv;function EE(){return yv||(yv=1,Md.exports=ME()),Md.exports}var Td={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function TE(){if(Sv)return Bn;Sv=1;var o=dm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,p,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:d,containerInfo:p,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,m)},Bn.flushSync=function(d){var p=c.T,m=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=p,a.p=m,a.d.f()}},Bn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Bn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Bn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):m==="script"&&a.d.X(d,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Bn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin);a.d.L(d,m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Bn.requestFormReset=function(d){a.d.r(d)},Bn.unstable_batchedUpdates=function(d,p){return d(p)},Bn.useFormState=function(d,p,m){return c.H.useFormState(d,p,m)},Bn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Bn.version="19.1.0",Bn}var Mv;function bE(){if(Mv)return Td.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=TE(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function AE(){if(Ev)return Ul;Ev=1;var o=EE(),t=dm(),n=bE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var _=h.alternate;if(_===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===r)return f(h),e;if(_===u)return f(h),i;_=_.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=_;else{for(var T=!1,R=h.child;R;){if(R===r){T=!0,r=h,u=_;break}if(R===u){T=!0,u=h,r=_;break}R=R.sibling}if(!T){for(R=_.child;R;){if(R===r){T=!0,r=_,u=h;break}if(R===u){T=!0,u=_,r=h;break}R=R.sibling}if(!T)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case I:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case U:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:at(e.type)||"Memo";case F:i=e._payload,e=e._init;try{return at(e(i))}catch{}}return null}var ot=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xt=[],P=-1;function tt(e){return{current:e}}function mt(e){0>P||(e.current=xt[P],xt[P]=null,P--)}function St(e,i){P++,xt[P]=e.current,e.current=i}var j=tt(null),dt=tt(null),yt=tt(null),bt=tt(null);function Dt(e,i){switch(St(yt,i),St(dt,e),St(j,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=k0(i),e=X0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mt(j),St(j,e)}function se(){mt(j),mt(dt),mt(yt)}function Zt(e){e.memoizedState!==null&&St(bt,e);var i=j.current,r=X0(i,e.type);i!==r&&(St(dt,e),St(j,r))}function Ve(e){dt.current===e&&(mt(j),mt(dt)),bt.current===e&&(mt(bt),bl._currentValue=W)}var Be=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,V=o.unstable_cancelCallback,jn=o.unstable_shouldYield,me=o.unstable_requestPaint,ne=o.unstable_now,kt=o.unstable_getCurrentPriorityLevel,De=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,z=o.unstable_NormalPriority,w=o.unstable_LowPriority,nt=o.unstable_IdlePriority,_t=o.log,Mt=o.unstable_setDisableYieldValue,ht=null,Nt=null;function At(e){if(typeof _t=="function"&&Mt(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(ht,e)}catch{}}var Ft=Math.clz32?Math.clz32:It,Qt=Math.log,Tt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Qt(e)/Tt|0)|0}var qt=256,jt=4194304;function Ot(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var h=0,_=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var R=u&134217727;return R!==0?(u=R&~_,u!==0?h=Ot(u):(T&=R,T!==0?h=Ot(T):r||(r=R&~e,r!==0&&(h=Ot(r))))):(R=u&~_,R!==0?h=Ot(R):T!==0?h=Ot(T):r||(r=u&~e,r!==0&&(h=Ot(r)))),h===0?0:i!==0&&i!==h&&(i&_)===0&&(_=h&-h,r=i&-i,_>=r||_===32&&(r&4194048)!==0)?i:h}function te(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ue(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),e}function Ut(){var e=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),e}function ct(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function gt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,i,r,u,h,_){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(r=T&~r;0<r;){var ft=31-Ft(r),vt=1<<ft;R[ft]=0,H[ft]=-1;var it=et[ft];if(it!==null)for(et[ft]=null,ft=0;ft<it.length;ft++){var rt=it[ft];rt!==null&&(rt.lane&=-536870913)}r&=~vt}u!==0&&Lt(e,u,0),_!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=_&~(T&~i))}function Lt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Ft(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&4194090}function ie(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-Ft(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function li(e,i){var r=X.p;try{return X.p=e,i()}finally{X.p=r}}var Mn=Math.random().toString(36).slice(2),_n="__reactFiber$"+Mn,Cn="__reactProps$"+Mn,Kn="__reactContainer$"+Mn,Nr="__reactEvents$"+Mn,fu="__reactListeners$"+Mn,hu="__reactHandles$"+Mn,Or="__reactResources$"+Mn,ka="__reactMarker$"+Mn;function Xa(e){delete e[_n],delete e[Cn],delete e[Nr],delete e[fu],delete e[hu]}function oa(e){var i=e[_n];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Kn]||r[_n]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Z0(e);e!==null;){if(r=e[_n])return r;e=Z0(e)}return i}e=r,r=e.parentNode}return null}function la(e){if(e=e[_n]||e[Kn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Pr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Wa(e){var i=e[Or];return i||(i=e[Or]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function un(e){e[ka]=!0}var du=new Set,pu={};function ua(e,i){D(e,i),D(e+"Capture",i)}function D(e,i){for(pu[e]=i,e=0;e<i.length;e++)du.add(i[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},lt={};function K(e){return Be.call(lt,e)?!0:Be.call(st,e)?!1:Z.test(e)?lt[e]=!0:(st[e]=!0,!1)}function Et(e,i,r){if(K(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Rt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function wt(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}var zt,Jt;function Xt(e){if(zt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);zt=i&&i[1]||"",Jt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+Jt}var Vt=!1;function he(e,i){if(!e||Vt)return"";Vt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(rt){var it=rt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(rt){it=rt}e.call(vt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],R=_[1];if(T&&R){var H=T.split(`
`),et=R.split(`
`);for(h=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(u===H.length||h===et.length)for(u=H.length-1,h=et.length-1;1<=u&&0<=h&&H[u]!==et[h];)h--;for(;1<=u&&0<=h;u--,h--)if(H[u]!==et[h]){if(u!==1||h!==1)do if(u--,h--,0>h||H[u]!==et[h]){var ft=`
`+H[u].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=u&&0<=h);break}}}finally{Vt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Xt(r):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return Xt("Activity");default:return""}}function Ze(e){try{var i="";do i+=Ee(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Wt(e){var i=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var h=r.get,_=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Je(e){e._valueTracker||(e._valueTracker=Wt(e))}function Se(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=ge(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qa=/[\n"\\]/g;function Xe(e){return e.replace(qa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ca(e,i,r,u,h,_,T,R){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+_e(i)):e.value!==""+_e(i)&&(e.value=""+_e(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?zn(e,T,_e(i)):r!=null?zn(e,T,_e(r)):u!=null&&e.removeAttribute("value"),h==null&&_!=null&&(e.defaultChecked=!!_),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+_e(R):e.removeAttribute("name")}function Fe(e,i,r,u,h,_,T,R){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.type=_),i!=null||r!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;r=r!=null?""+_e(r):"",i=i!=null?""+_e(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=R?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function zn(e,i,r){i==="number"&&Pn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function gn(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+_e(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function En(e,i,r){if(i!=null&&(i=""+_e(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+_e(r):""}function Dn(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(ot(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=_e(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u)}function Zi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function km(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||fa.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Xm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&km(e,h,u)}else for(var _ in i)i.hasOwnProperty(_)&&km(e,_,i[_])}function vf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _S=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mu(e){return gS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xf=null;function yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,bs=null;function Wm(e){var i=la(e);if(i&&(e=i.stateNode)){var r=e[Cn]||null;t:switch(e=i.stateNode,i.type){case"input":if(ca(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Xe(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[Cn]||null;if(!h)throw Error(a(90));ca(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&Se(u)}break t;case"textarea":En(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&gn(e,!!r.multiple,i,!1)}}}var Sf=!1;function qm(e,i,r){if(Sf)return e(i,r);Sf=!0;try{var u=e(i);return u}finally{if(Sf=!1,(Ts!==null||bs!==null)&&(tc(),Ts&&(i=Ts,e=bs,bs=Ts=null,Wm(i),e)))for(i=0;i<e.length;i++)Wm(e[i])}}function Bo(e,i){var r=e.stateNode;if(r===null)return null;var u=r[Cn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=!1;if(ha)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Mf=!1}var Ya=null,Ef=null,_u=null;function Ym(){if(_u)return _u;var e,i=Ef,r=i.length,u,h="value"in Ya?Ya.value:Ya.textContent,_=h.length;for(e=0;e<r&&i[e]===h[e];e++);var T=r-e;for(u=1;u<=T&&i[r-u]===h[_-u];u++);return _u=h.slice(e,1<u?1-u:void 0)}function gu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function vu(){return!0}function Zm(){return!1}function Qn(e){function i(r,u,h,_,T){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?vu:Zm,this.isPropagationStopped=Zm,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vu)},persist:function(){},isPersistent:vu}),i}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Qn(zr),Ho=m({},zr,{view:0,detail:0}),vS=Qn(Ho),Tf,bf,Go,yu=m({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(Tf=e.screenX-Go.screenX,bf=e.screenY-Go.screenY):bf=Tf=0,Go=e),Tf)},movementY:function(e){return"movementY"in e?e.movementY:bf}}),jm=Qn(yu),xS=m({},yu,{dataTransfer:0}),yS=Qn(xS),SS=m({},Ho,{relatedTarget:0}),Af=Qn(SS),MS=m({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=Qn(MS),TS=m({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bS=Qn(TS),AS=m({},zr,{data:0}),Km=Qn(AS),RS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=CS[e])?!!i[e]:!1}function Rf(){return DS}var US=m({},Ho,{key:function(e){if(e.key){var i=RS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(e){return e.type==="keypress"?gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LS=Qn(US),NS=m({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Qn(NS),OS=m({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),PS=Qn(OS),zS=m({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=Qn(zS),BS=m({},yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Qn(BS),HS=m({},zr,{newState:0,oldState:0}),GS=Qn(HS),VS=[9,13,27,32],wf=ha&&"CompositionEvent"in window,Vo=null;ha&&"documentMode"in document&&(Vo=document.documentMode);var kS=ha&&"TextEvent"in window&&!Vo,Jm=ha&&(!wf||Vo&&8<Vo&&11>=Vo),$m=" ",t_=!1;function e_(e,i){switch(e){case"keyup":return VS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var As=!1;function XS(e,i){switch(e){case"compositionend":return n_(i);case"keypress":return i.which!==32?null:(t_=!0,$m);case"textInput":return e=i.data,e===$m&&t_?null:e;default:return null}}function WS(e,i){if(As)return e==="compositionend"||!wf&&e_(e,i)?(e=Ym(),_u=Ef=Ya=null,As=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jm&&i.locale!=="ko"?null:i.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!qS[e.type]:i==="textarea"}function a_(e,i,r,u){Ts?bs?bs.push(u):bs=[u]:Ts=u,i=sc(i,"onChange"),0<i.length&&(r=new xu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var ko=null,Xo=null;function YS(e){B0(e,0)}function Su(e){var i=Pr(e);if(Se(i))return e}function r_(e,i){if(e==="change")return i}var s_=!1;if(ha){var Cf;if(ha){var Df="oninput"in document;if(!Df){var o_=document.createElement("div");o_.setAttribute("oninput","return;"),Df=typeof o_.oninput=="function"}Cf=Df}else Cf=!1;s_=Cf&&(!document.documentMode||9<document.documentMode)}function l_(){ko&&(ko.detachEvent("onpropertychange",u_),Xo=ko=null)}function u_(e){if(e.propertyName==="value"&&Su(Xo)){var i=[];a_(i,Xo,e,yf(e)),qm(YS,i)}}function ZS(e,i,r){e==="focusin"?(l_(),ko=i,Xo=r,ko.attachEvent("onpropertychange",u_)):e==="focusout"&&l_()}function jS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Su(Xo)}function KS(e,i){if(e==="click")return Su(i)}function QS(e,i){if(e==="input"||e==="change")return Su(i)}function JS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:JS;function Wo(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!Be.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function c_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function f_(e,i){var r=c_(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=c_(r)}}function h_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?h_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function d_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Pn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Pn(e.document)}return i}function Uf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var $S=ha&&"documentMode"in document&&11>=document.documentMode,Rs=null,Lf=null,qo=null,Nf=!1;function p_(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nf||Rs==null||Rs!==Pn(u)||(u=Rs,"selectionStart"in u&&Uf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),qo&&Wo(qo,u)||(qo=u,u=sc(Lf,"onSelect"),0<u.length&&(i=new xu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=Rs)))}function Ir(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var ws={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},Of={},m_={};ha&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Br(e){if(Of[e])return Of[e];if(!ws[e])return e;var i=ws[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in m_)return Of[e]=i[r];return e}var __=Br("animationend"),g_=Br("animationiteration"),v_=Br("animationstart"),tM=Br("transitionrun"),eM=Br("transitionstart"),nM=Br("transitioncancel"),x_=Br("transitionend"),y_=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Ii(e,i){y_.set(e,i),ua(i,[e])}var S_=new WeakMap;function bi(e,i){if(typeof e=="object"&&e!==null){var r=S_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ze(i)},S_.set(e,i),i)}return{value:e,source:i,stack:Ze(i)}}var Ai=[],Cs=0,zf=0;function Mu(){for(var e=Cs,i=zf=Cs=0;i<e;){var r=Ai[i];Ai[i++]=null;var u=Ai[i];Ai[i++]=null;var h=Ai[i];Ai[i++]=null;var _=Ai[i];if(Ai[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}_!==0&&M_(r,h,_)}}function Eu(e,i,r,u){Ai[Cs++]=e,Ai[Cs++]=i,Ai[Cs++]=r,Ai[Cs++]=u,zf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function If(e,i,r,u){return Eu(e,i,r,u),Tu(e)}function Ds(e,i){return Eu(e,null,null,i),Tu(e)}function M_(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,_=e.return;_!==null;)_.childLanes|=r,u=_.alternate,u!==null&&(u.childLanes|=r),_.tag===22&&(e=_.stateNode,e===null||e._visibility&1||(h=!0)),e=_,_=_.return;return e.tag===3?(_=e.stateNode,h&&i!==null&&(h=31-Ft(r),e=_.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=r|536870912),_):null}function Tu(e){if(50<gl)throw gl=0,kh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Us={};function iM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,r,u){return new iM(e,i,r,u)}function Bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,i){var r=e.alternate;return r===null?(r=ci(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function E_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bu(e,i,r,u,h,_){var T=0;if(u=e,typeof e=="function")Bf(e)&&(T=1);else if(typeof e=="string")T=rE(e,r,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=ci(31,r,i,h),e.elementType=b,e.lanes=_,e;case E:return Fr(r.children,h,_,i);case M:T=8,h|=24;break;case S:return e=ci(12,r,i,h|2),e.elementType=S,e.lanes=_,e;case N:return e=ci(13,r,i,h),e.elementType=N,e.lanes=_,e;case I:return e=ci(19,r,i,h),e.elementType=I,e.lanes=_,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:T=10;break t;case L:T=9;break t;case A:T=11;break t;case O:T=14;break t;case F:T=16,u=null;break t}T=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=ci(T,r,i,h),i.elementType=e,i.type=u,i.lanes=_,i}function Fr(e,i,r,u){return e=ci(7,e,u,i),e.lanes=r,e}function Ff(e,i,r){return e=ci(6,e,null,i),e.lanes=r,e}function Hf(e,i,r){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ls=[],Ns=0,Au=null,Ru=0,Ri=[],wi=0,Hr=null,pa=1,ma="";function Gr(e,i){Ls[Ns++]=Ru,Ls[Ns++]=Au,Au=e,Ru=i}function T_(e,i,r){Ri[wi++]=pa,Ri[wi++]=ma,Ri[wi++]=Hr,Hr=e;var u=pa;e=ma;var h=32-Ft(u)-1;u&=~(1<<h),r+=1;var _=32-Ft(i)+h;if(30<_){var T=h-h%5;_=(u&(1<<T)-1).toString(32),u>>=T,h-=T,pa=1<<32-Ft(i)+h|r<<h|u,ma=_+e}else pa=1<<_|r<<h|u,ma=e}function Gf(e){e.return!==null&&(Gr(e,1),T_(e,1,0))}function Vf(e){for(;e===Au;)Au=Ls[--Ns],Ls[Ns]=null,Ru=Ls[--Ns],Ls[Ns]=null;for(;e===Hr;)Hr=Ri[--wi],Ri[wi]=null,ma=Ri[--wi],Ri[wi]=null,pa=Ri[--wi],Ri[wi]=null}var qn=null,$e=null,Ae=!1,Vr=null,ji=!1,kf=Error(a(519));function kr(e){var i=Error(a(418,""));throw jo(bi(i,e)),kf}function b_(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[_n]=e,i[Cn]=u,r){case"dialog":pe("cancel",i),pe("close",i);break;case"iframe":case"object":case"embed":pe("load",i);break;case"video":case"audio":for(r=0;r<xl.length;r++)pe(xl[r],i);break;case"source":pe("error",i);break;case"img":case"image":case"link":pe("error",i),pe("load",i);break;case"details":pe("toggle",i);break;case"input":pe("invalid",i),Fe(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Je(i);break;case"select":pe("invalid",i);break;case"textarea":pe("invalid",i),Dn(i,u.value,u.defaultValue,u.children),Je(i)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||V0(i.textContent,r)?(u.popover!=null&&(pe("beforetoggle",i),pe("toggle",i)),u.onScroll!=null&&pe("scroll",i),u.onScrollEnd!=null&&pe("scrollend",i),u.onClick!=null&&(i.onclick=oc),i=!0):i=!1,i||kr(e)}function A_(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:qn=qn.return}}function Yo(e){if(e!==qn)return!1;if(!Ae)return A_(e),Ae=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||rd(e.type,e.memoizedProps)),r=!r),r&&$e&&kr(e),A_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){$e=Fi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}$e=null}}else i===27?(i=$e,ur(e.type)?(e=ud,ud=null,$e=e):$e=i):$e=qn?Fi(e.stateNode.nextSibling):null;return!0}function Zo(){$e=qn=null,Ae=!1}function R_(){var e=Vr;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Vr=null),e}function jo(e){Vr===null?Vr=[e]:Vr.push(e)}var Xf=tt(null),Xr=null,_a=null;function Za(e,i,r){St(Xf,i._currentValue),i._currentValue=r}function ga(e){e._currentValue=Xf.current,mt(Xf)}function Wf(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function qf(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var R=_;_=h;for(var H=0;H<i.length;H++)if(R.context===i[H]){_.lanes|=r,R=_.alternate,R!==null&&(R.lanes|=r),Wf(_.return,r,e),u||(T=null);break t}_=R.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=r,_=T.alternate,_!==null&&(_.lanes|=r),Wf(T,r,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Ko(e,i,r,u){e=null;for(var h=i,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var R=h.type;ui(h.pendingProps.value,T.value)||(e!==null?e.push(R):e=[R])}}else if(h===bt.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}h=h.return}e!==null&&qf(i,e,r,u),i.flags|=262144}function wu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wr(e){Xr=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return w_(Xr,e)}function Cu(e,i){return Xr===null&&Wr(e),w_(e,i)}function w_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},_a===null){if(e===null)throw Error(a(308));_a=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else _a=_a.next=i;return r}var aM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},rM=o.unstable_scheduleCallback,sM=o.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new aM,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&rM(sM,function(){e.controller.abort()})}var Jo=null,Zf=0,Os=0,Ps=null;function oM(e,i){if(Jo===null){var r=Jo=[];Zf=0,Os=Kh(),Ps={status:"pending",value:void 0,then:function(u){r.push(u)}}}return Zf++,i.then(C_,C_),i}function C_(){if(--Zf===0&&Jo!==null){Ps!==null&&(Ps.status="fulfilled");var e=Jo;Jo=null,Os=0,Ps=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function lM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var D_=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&oM(e,i),D_!==null&&D_(e,i)};var qr=tt(null);function jf(){var e=qr.current;return e!==null?e:We.pooledCache}function Du(e,i){i===null?St(qr,qr.current):St(qr,i.pool)}function U_(){var e=jf();return e===null?null:{parent:vn._currentValue,pool:e}}var $o=Error(a(460)),L_=Error(a(474)),Uu=Error(a(542)),Kf={then:function(){}};function N_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(){}function O_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Lu,Lu),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,z_(e),e;default:if(typeof i.status=="string")i.then(Lu,Lu);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,z_(e),e}throw tl=i,$o}}var tl=null;function P_(){if(tl===null)throw Error(a(459));var e=tl;return tl=null,e}function z_(e){if(e===$o||e===Uu)throw Error(a(483))}var ja=!1;function Qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Re&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Tu(e),M_(e,null,r),i}return Eu(e,u,i,r),Tu(e)}function el(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,ie(e,r)}}function $f(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,_=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,r=r.next}while(r!==null);_===null?h=_=i:_=_.next=i}else h=_=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var th=!1;function nl(){if(th){var e=Ps;if(e!==null)throw e}}function il(e,i,r,u){th=!1;var h=e.updateQueue;ja=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var H=R,et=H.next;H.next=null,T===null?_=et:T.next=et,T=H;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,R=ft.lastBaseUpdate,R!==T&&(R===null?ft.firstBaseUpdate=et:R.next=et,ft.lastBaseUpdate=H))}if(_!==null){var vt=h.baseState;T=0,ft=et=H=null,R=_;do{var it=R.lane&-536870913,rt=it!==R.lane;if(rt?(ye&it)===it:(u&it)===it){it!==0&&it===Os&&(th=!0),ft!==null&&(ft=ft.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var $t=e,Yt=R;it=i;var Oe=r;switch(Yt.tag){case 1:if($t=Yt.payload,typeof $t=="function"){vt=$t.call(Oe,vt,it);break t}vt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Yt.payload,it=typeof $t=="function"?$t.call(Oe,vt,it):$t,it==null)break t;vt=m({},vt,it);break t;case 2:ja=!0}}it=R.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=h.callbacks,rt===null?h.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ft===null?(et=ft=rt,H=vt):ft=ft.next=rt,T|=it;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;rt=R,R=rt.next,rt.next=null,h.lastBaseUpdate=rt,h.shared.pending=null}}while(!0);ft===null&&(H=vt),h.baseState=H,h.firstBaseUpdate=et,h.lastBaseUpdate=ft,_===null&&(h.shared.lanes=0),rr|=T,e.lanes=T,e.memoizedState=vt}}function I_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function B_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)I_(r[e],i)}var zs=tt(null),Nu=tt(0);function F_(e,i){e=Ta,St(Nu,e),St(zs,i),Ta=e|i.baseLanes}function eh(){St(Nu,Ta),St(zs,zs.current)}function nh(){Ta=Nu.current,mt(zs),mt(Nu)}var Ja=0,ue=null,Le=null,cn=null,Ou=!1,Is=!1,Yr=!1,Pu=0,al=0,Bs=null,uM=0;function an(){throw Error(a(321))}function ih(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ui(e[r],i[r]))return!1;return!0}function ah(e,i,r,u,h,_){return Ja=_,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Mg:Eg,Yr=!1,_=r(u,h),Yr=!1,Is&&(_=G_(i,r,u,h)),H_(e),_}function H_(e){B.H=Gu;var i=Le!==null&&Le.next!==null;if(Ja=0,cn=Le=ue=null,Ou=!1,al=0,Bs=null,i)throw Error(a(300));e===null||Tn||(e=e.dependencies,e!==null&&wu(e)&&(Tn=!0))}function G_(e,i,r,u){ue=e;var h=0;do{if(Is&&(Bs=null),al=0,Is=!1,25<=h)throw Error(a(301));if(h+=1,cn=Le=null,e.updateQueue!=null){var _=e.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}B.H=_M,_=i(r,u)}while(Is);return _}function cM(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?rl(i):i,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),i}function rh(){var e=Pu!==0;return Pu=0,e}function sh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function oh(e){if(Ou){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ou=!1}Ja=0,cn=Le=ue=null,Is=!1,al=Pu=0,Bs=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ue.memoizedState=cn=e:cn=cn.next=e,cn}function fn(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var i=cn===null?ue.memoizedState:cn.next;if(i!==null)cn=i,Le=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},cn===null?ue.memoizedState=cn=e:cn=cn.next=e}return cn}function lh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var i=al;return al+=1,Bs===null&&(Bs=[]),e=O_(Bs,e,i),i=ue,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Mg:Eg),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===U)return In(e)}throw Error(a(438,String(e)))}function uh(e){var i=null,r=ue.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=ue.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=lh(),ue.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=C;return i.index++,r}function va(e,i){return typeof i=="function"?i(e):i}function Iu(e){var i=fn();return ch(i,Le,e)}function ch(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,_=u.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}i.baseQueue=h=_,u.pending=null}if(_=e.baseState,h===null)e.memoizedState=_;else{i=h.next;var R=T=null,H=null,et=i,ft=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ye&vt)===vt:(Ja&vt)===vt){var it=et.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Os&&(ft=!0);else if((Ja&it)===it){et=et.next,it===Os&&(ft=!0);continue}else vt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(R=H=vt,T=_):H=H.next=vt,ue.lanes|=it,rr|=it;vt=et.action,Yr&&r(_,vt),_=et.hasEagerState?et.eagerState:r(_,vt)}else it={lane:vt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(R=H=it,T=_):H=H.next=it,ue.lanes|=vt,rr|=vt;et=et.next}while(et!==null&&et!==i);if(H===null?T=_:H.next=R,!ui(_,e.memoizedState)&&(Tn=!0,ft&&(r=Ps,r!==null)))throw r;e.memoizedState=_,e.baseState=T,e.baseQueue=H,u.lastRenderedState=_}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function fh(e){var i=fn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,_=i.memoizedState;if(h!==null){r.pending=null;var T=h=h.next;do _=e(_,T.action),T=T.next;while(T!==h);ui(_,i.memoizedState)||(Tn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),r.lastRenderedState=_}return[_,u]}function V_(e,i,r){var u=ue,h=fn(),_=Ae;if(_){if(r===void 0)throw Error(a(407));r=r()}else r=i();var T=!ui((Le||h).memoizedState,r);T&&(h.memoizedState=r,Tn=!0),h=h.queue;var R=W_.bind(null,u,h,e);if(sl(2048,8,R,[e]),h.getSnapshot!==i||T||cn!==null&&cn.memoizedState.tag&1){if(u.flags|=2048,Fs(9,Bu(),X_.bind(null,u,h,r,i),null),We===null)throw Error(a(349));_||(Ja&124)!==0||k_(u,i,r)}return r}function k_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ue.updateQueue,i===null?(i=lh(),ue.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function X_(e,i,r,u){i.value=r,i.getSnapshot=u,q_(i)&&Y_(e)}function W_(e,i,r){return r(function(){q_(i)&&Y_(e)})}function q_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ui(e,r)}catch{return!0}}function Y_(e){var i=Ds(e,2);i!==null&&mi(i,e,2)}function hh(e){var i=Jn();if(typeof e=="function"){var r=e;if(e=r(),Yr){At(!0);try{r()}finally{At(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},i}function Z_(e,i,r,u){return e.baseState=r,ch(e,Le,typeof u=="function"?u:va)}function fM(e,i,r,u,h){if(Hu(e))throw Error(a(485));if(e=i.action,e!==null){var _={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};B.T!==null?r(!0):_.isTransition=!1,u(_),r=i.pending,r===null?(_.next=i.pending=_,j_(i,_)):(_.next=r.next,i.pending=r.next=_)}}function j_(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var _=B.T,T={};B.T=T;try{var R=r(h,u),H=B.S;H!==null&&H(T,R),K_(e,i,R)}catch(et){dh(e,i,et)}finally{B.T=_}}else try{_=r(h,u),K_(e,i,_)}catch(et){dh(e,i,et)}}function K_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){Q_(e,i,u)},function(u){return dh(e,i,u)}):Q_(e,i,r)}function Q_(e,i,r){i.status="fulfilled",i.value=r,J_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,j_(e,r)))}function dh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,J_(i),i=i.next;while(i!==u)}e.action=null}function J_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function $_(e,i){return i}function tg(e,i){if(Ae){var r=We.formState;if(r!==null){t:{var u=ue;if(Ae){if($e){e:{for(var h=$e,_=ji;h.nodeType!==8;){if(!_){h=null;break e}if(h=Fi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){$e=Fi(h.nextSibling),u=h.data==="F!";break t}}kr(u)}u=!1}u&&(i=r[0])}}return r=Jn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$_,lastRenderedState:i},r.queue=u,r=xg.bind(null,ue,u),u.dispatch=r,u=hh(!1),_=vh.bind(null,ue,!1,u.queue),u=Jn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=fM.bind(null,ue,h,_,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function eg(e){var i=fn();return ng(i,Le,e)}function ng(e,i,r){if(i=ch(e,i,$_)[0],e=Iu(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=rl(i)}catch(T){throw T===$o?Uu:T}else u=i;i=fn();var h=i.queue,_=h.dispatch;return r!==i.memoizedState&&(ue.flags|=2048,Fs(9,Bu(),hM.bind(null,h,r),null)),[u,_,e]}function hM(e,i){e.action=i}function ig(e){var i=fn(),r=Le;if(r!==null)return ng(i,r,e);fn(),i=i.memoizedState,r=fn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function Fs(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=ue.updateQueue,i===null&&(i=lh(),ue.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function Bu(){return{destroy:void 0,resource:void 0}}function ag(){return fn().memoizedState}function Fu(e,i,r,u){var h=Jn();u=u===void 0?null:u,ue.flags|=e,h.memoizedState=Fs(1|i,Bu(),r,u)}function sl(e,i,r,u){var h=fn();u=u===void 0?null:u;var _=h.memoizedState.inst;Le!==null&&u!==null&&ih(u,Le.memoizedState.deps)?h.memoizedState=Fs(i,_,r,u):(ue.flags|=e,h.memoizedState=Fs(1|i,_,r,u))}function rg(e,i){Fu(8390656,8,e,i)}function sg(e,i){sl(2048,8,e,i)}function og(e,i){return sl(4,2,e,i)}function lg(e,i){return sl(4,4,e,i)}function ug(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function cg(e,i,r){r=r!=null?r.concat([e]):null,sl(4,4,ug.bind(null,i,e),r)}function ph(){}function fg(e,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&ih(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function hg(e,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&ih(i,u[1]))return u[0];if(u=e(),Yr){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[u,i],u}function mh(e,i,r){return r===void 0||(Ja&1073741824)!==0?e.memoizedState=i:(e.memoizedState=r,e=m0(),ue.lanes|=e,rr|=e,r)}function dg(e,i,r,u){return ui(r,i)?r:zs.current!==null?(e=mh(e,r,u),ui(e,i)||(Tn=!0),e):(Ja&42)===0?(Tn=!0,e.memoizedState=r):(e=m0(),ue.lanes|=e,rr|=e,i)}function pg(e,i,r,u,h){var _=X.p;X.p=_!==0&&8>_?_:8;var T=B.T,R={};B.T=R,vh(e,!1,i,r);try{var H=h(),et=B.S;if(et!==null&&et(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ft=lM(H,u);ol(e,i,ft,pi(e))}else ol(e,i,u,pi(e))}catch(vt){ol(e,i,{then:function(){},status:"rejected",reason:vt},pi())}finally{X.p=_,B.T=T}}function dM(){}function _h(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=mg(e).queue;pg(e,h,i,W,r===null?dM:function(){return _g(e),r(u)})}function mg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:W},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function _g(e){var i=mg(e).next.queue;ol(e,i,{},pi())}function gh(){return In(bl)}function gg(){return fn().memoizedState}function vg(){return fn().memoizedState}function pM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=pi();e=Ka(r);var u=Qa(i,e,r);u!==null&&(mi(u,i,r),el(u,i,r)),i={cache:Yf()},e.payload=i;return}i=i.return}}function mM(e,i,r){var u=pi();r={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Hu(e)?yg(i,r):(r=If(e,i,r,u),r!==null&&(mi(r,e,u),Sg(r,i,u)))}function xg(e,i,r){var u=pi();ol(e,i,r,u)}function ol(e,i,r,u){var h={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))yg(i,h);else{var _=e.alternate;if(e.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,R=_(T,r);if(h.hasEagerState=!0,h.eagerState=R,ui(R,T))return Eu(e,i,h,0),We===null&&Mu(),!1}catch{}finally{}if(r=If(e,i,h,u),r!==null)return mi(r,e,u),Sg(r,i,u),!0}return!1}function vh(e,i,r,u){if(u={lane:2,revertLane:Kh(),action:u,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(i)throw Error(a(479))}else i=If(e,r,u,2),i!==null&&mi(i,e,2)}function Hu(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function yg(e,i){Is=Ou=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Sg(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,ie(e,r)}}var Gu={readContext:In,use:zu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Mg={readContext:In,use:zu,useCallback:function(e,i){return Jn().memoizedState=[e,i===void 0?null:i],e},useContext:In,useEffect:rg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Fu(4194308,4,ug.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Fu(4194308,4,e,i)},useInsertionEffect:function(e,i){Fu(4,2,e,i)},useMemo:function(e,i){var r=Jn();i=i===void 0?null:i;var u=e();if(Yr){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=Jn();if(r!==void 0){var h=r(i);if(Yr){At(!0);try{r(i)}finally{At(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=mM.bind(null,ue,e),[u.memoizedState,e]},useRef:function(e){var i=Jn();return e={current:e},i.memoizedState=e},useState:function(e){e=hh(e);var i=e.queue,r=xg.bind(null,ue,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:ph,useDeferredValue:function(e,i){var r=Jn();return mh(r,e,i)},useTransition:function(){var e=hh(!1);return e=pg.bind(null,ue,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=ue,h=Jn();if(Ae){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),We===null)throw Error(a(349));(ye&124)!==0||k_(u,i,r)}h.memoizedState=r;var _={value:r,getSnapshot:i};return h.queue=_,rg(W_.bind(null,u,_,e),[e]),u.flags|=2048,Fs(9,Bu(),X_.bind(null,u,_,r,i),null),r},useId:function(){var e=Jn(),i=We.identifierPrefix;if(Ae){var r=ma,u=pa;r=(u&~(1<<32-Ft(u)-1)).toString(32)+r,i="«"+i+"R"+r,r=Pu++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=uM++,i="«"+i+"r"+r.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:gh,useFormState:tg,useActionState:tg,useOptimistic:function(e){var i=Jn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=vh.bind(null,ue,!0,r),r.dispatch=i,[e,i]},useMemoCache:uh,useCacheRefresh:function(){return Jn().memoizedState=pM.bind(null,ue)}},Eg={readContext:In,use:zu,useCallback:fg,useContext:In,useEffect:sg,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:Iu,useRef:ag,useState:function(){return Iu(va)},useDebugValue:ph,useDeferredValue:function(e,i){var r=fn();return dg(r,Le.memoizedState,e,i)},useTransition:function(){var e=Iu(va)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:rl(e),i]},useSyncExternalStore:V_,useId:gg,useHostTransitionStatus:gh,useFormState:eg,useActionState:eg,useOptimistic:function(e,i){var r=fn();return Z_(r,Le,e,i)},useMemoCache:uh,useCacheRefresh:vg},_M={readContext:In,use:zu,useCallback:fg,useContext:In,useEffect:sg,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:fh,useRef:ag,useState:function(){return fh(va)},useDebugValue:ph,useDeferredValue:function(e,i){var r=fn();return Le===null?mh(r,e,i):dg(r,Le.memoizedState,e,i)},useTransition:function(){var e=fh(va)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:rl(e),i]},useSyncExternalStore:V_,useId:gg,useHostTransitionStatus:gh,useFormState:ig,useActionState:ig,useOptimistic:function(e,i){var r=fn();return Le!==null?Z_(r,Le,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:uh,useCacheRefresh:vg},Hs=null,ll=0;function Vu(e){var i=ll;return ll+=1,Hs===null&&(Hs=[]),O_(Hs,e,i)}function ul(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ku(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Tg(e){var i=e._init;return i(e._payload)}function bg(e){function i(Y,k){if(e){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function r(Y,k){if(!e)return null;for(;k!==null;)i(Y,k),k=k.sibling;return null}function u(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function h(Y,k){return Y=da(Y,k),Y.index=0,Y.sibling=null,Y}function _(Y,k,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function T(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,$,pt){return k===null||k.tag!==6?(k=Ff($,Y.mode,pt),k.return=Y,k):(k=h(k,$),k.return=Y,k)}function H(Y,k,$,pt){var Bt=$.type;return Bt===E?ft(Y,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===F&&Tg(Bt)===k.type)?(k=h(k,$.props),ul(k,$),k.return=Y,k):(k=bu($.type,$.key,$.props,null,Y.mode,pt),ul(k,$),k.return=Y,k)}function et(Y,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Hf($,Y.mode,pt),k.return=Y,k):(k=h(k,$.children||[]),k.return=Y,k)}function ft(Y,k,$,pt,Bt){return k===null||k.tag!==7?(k=Fr($,Y.mode,pt,Bt),k.return=Y,k):(k=h(k,$),k.return=Y,k)}function vt(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ff(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case g:return $=bu(k.type,k.key,k.props,null,Y.mode,$),ul($,k),$.return=Y,$;case x:return k=Hf(k,Y.mode,$),k.return=Y,k;case F:var pt=k._init;return k=pt(k._payload),vt(Y,k,$)}if(ot(k)||J(k))return k=Fr(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return vt(Y,Vu(k),$);if(k.$$typeof===U)return vt(Y,Cu(Y,k),$);ku(Y,k)}return null}function it(Y,k,$,pt){var Bt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Bt!==null?null:R(Y,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case g:return $.key===Bt?H(Y,k,$,pt):null;case x:return $.key===Bt?et(Y,k,$,pt):null;case F:return Bt=$._init,$=Bt($._payload),it(Y,k,$,pt)}if(ot($)||J($))return Bt!==null?null:ft(Y,k,$,pt,null);if(typeof $.then=="function")return it(Y,k,Vu($),pt);if($.$$typeof===U)return it(Y,k,Cu(Y,$),pt);ku(Y,$)}return null}function rt(Y,k,$,pt,Bt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get($)||null,R(k,Y,""+pt,Bt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case g:return Y=Y.get(pt.key===null?$:pt.key)||null,H(k,Y,pt,Bt);case x:return Y=Y.get(pt.key===null?$:pt.key)||null,et(k,Y,pt,Bt);case F:var fe=pt._init;return pt=fe(pt._payload),rt(Y,k,$,pt,Bt)}if(ot(pt)||J(pt))return Y=Y.get($)||null,ft(k,Y,pt,Bt,null);if(typeof pt.then=="function")return rt(Y,k,$,Vu(pt),Bt);if(pt.$$typeof===U)return rt(Y,k,$,Cu(k,pt),Bt);ku(k,pt)}return null}function $t(Y,k,$,pt){for(var Bt=null,fe=null,Gt=k,Kt=k=0,An=null;Gt!==null&&Kt<$.length;Kt++){Gt.index>Kt?(An=Gt,Gt=null):An=Gt.sibling;var Te=it(Y,Gt,$[Kt],pt);if(Te===null){Gt===null&&(Gt=An);break}e&&Gt&&Te.alternate===null&&i(Y,Gt),k=_(Te,k,Kt),fe===null?Bt=Te:fe.sibling=Te,fe=Te,Gt=An}if(Kt===$.length)return r(Y,Gt),Ae&&Gr(Y,Kt),Bt;if(Gt===null){for(;Kt<$.length;Kt++)Gt=vt(Y,$[Kt],pt),Gt!==null&&(k=_(Gt,k,Kt),fe===null?Bt=Gt:fe.sibling=Gt,fe=Gt);return Ae&&Gr(Y,Kt),Bt}for(Gt=u(Gt);Kt<$.length;Kt++)An=rt(Gt,Y,Kt,$[Kt],pt),An!==null&&(e&&An.alternate!==null&&Gt.delete(An.key===null?Kt:An.key),k=_(An,k,Kt),fe===null?Bt=An:fe.sibling=An,fe=An);return e&&Gt.forEach(function(pr){return i(Y,pr)}),Ae&&Gr(Y,Kt),Bt}function Yt(Y,k,$,pt){if($==null)throw Error(a(151));for(var Bt=null,fe=null,Gt=k,Kt=k=0,An=null,Te=$.next();Gt!==null&&!Te.done;Kt++,Te=$.next()){Gt.index>Kt?(An=Gt,Gt=null):An=Gt.sibling;var pr=it(Y,Gt,Te.value,pt);if(pr===null){Gt===null&&(Gt=An);break}e&&Gt&&pr.alternate===null&&i(Y,Gt),k=_(pr,k,Kt),fe===null?Bt=pr:fe.sibling=pr,fe=pr,Gt=An}if(Te.done)return r(Y,Gt),Ae&&Gr(Y,Kt),Bt;if(Gt===null){for(;!Te.done;Kt++,Te=$.next())Te=vt(Y,Te.value,pt),Te!==null&&(k=_(Te,k,Kt),fe===null?Bt=Te:fe.sibling=Te,fe=Te);return Ae&&Gr(Y,Kt),Bt}for(Gt=u(Gt);!Te.done;Kt++,Te=$.next())Te=rt(Gt,Y,Kt,Te.value,pt),Te!==null&&(e&&Te.alternate!==null&&Gt.delete(Te.key===null?Kt:Te.key),k=_(Te,k,Kt),fe===null?Bt=Te:fe.sibling=Te,fe=Te);return e&&Gt.forEach(function(gE){return i(Y,gE)}),Ae&&Gr(Y,Kt),Bt}function Oe(Y,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case g:t:{for(var Bt=$.key;k!==null;){if(k.key===Bt){if(Bt=$.type,Bt===E){if(k.tag===7){r(Y,k.sibling),pt=h(k,$.props.children),pt.return=Y,Y=pt;break t}}else if(k.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===F&&Tg(Bt)===k.type){r(Y,k.sibling),pt=h(k,$.props),ul(pt,$),pt.return=Y,Y=pt;break t}r(Y,k);break}else i(Y,k);k=k.sibling}$.type===E?(pt=Fr($.props.children,Y.mode,pt,$.key),pt.return=Y,Y=pt):(pt=bu($.type,$.key,$.props,null,Y.mode,pt),ul(pt,$),pt.return=Y,Y=pt)}return T(Y);case x:t:{for(Bt=$.key;k!==null;){if(k.key===Bt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){r(Y,k.sibling),pt=h(k,$.children||[]),pt.return=Y,Y=pt;break t}else{r(Y,k);break}else i(Y,k);k=k.sibling}pt=Hf($,Y.mode,pt),pt.return=Y,Y=pt}return T(Y);case F:return Bt=$._init,$=Bt($._payload),Oe(Y,k,$,pt)}if(ot($))return $t(Y,k,$,pt);if(J($)){if(Bt=J($),typeof Bt!="function")throw Error(a(150));return $=Bt.call($),Yt(Y,k,$,pt)}if(typeof $.then=="function")return Oe(Y,k,Vu($),pt);if($.$$typeof===U)return Oe(Y,k,Cu(Y,$),pt);ku(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(r(Y,k.sibling),pt=h(k,$),pt.return=Y,Y=pt):(r(Y,k),pt=Ff($,Y.mode,pt),pt.return=Y,Y=pt),T(Y)):r(Y,k)}return function(Y,k,$,pt){try{ll=0;var Bt=Oe(Y,k,$,pt);return Hs=null,Bt}catch(Gt){if(Gt===$o||Gt===Uu)throw Gt;var fe=ci(29,Gt,null,Y.mode);return fe.lanes=pt,fe.return=Y,fe}finally{}}}var Gs=bg(!0),Ag=bg(!1),Ci=tt(null),Ki=null;function $a(e){var i=e.alternate;St(xn,xn.current&1),St(Ci,e),Ki===null&&(i===null||zs.current!==null||i.memoizedState!==null)&&(Ki=e)}function Rg(e){if(e.tag===22){if(St(xn,xn.current),St(Ci,e),Ki===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ki=e)}}else tr()}function tr(){St(xn,xn.current),St(Ci,Ci.current)}function xa(e){mt(Ci),Ki===e&&(Ki=null),mt(xn)}var xn=tt(0);function Xu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||ld(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:m({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yh={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=pi(),h=Ka(u);h.payload=i,r!=null&&(h.callback=r),i=Qa(e,h,u),i!==null&&(mi(i,e,u),el(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=pi(),h=Ka(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Qa(e,h,u),i!==null&&(mi(i,e,u),el(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=pi(),u=Ka(r);u.tag=2,i!=null&&(u.callback=i),i=Qa(e,u,r),i!==null&&(mi(i,e,r),el(i,e,r))}};function wg(e,i,r,u,h,_,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!Wo(r,u)||!Wo(h,_):!0}function Cg(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&yh.enqueueReplaceState(i,i.state,null)}function Zr(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=m({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}var Wu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dg(e){Wu(e)}function Ug(e){console.error(e)}function Lg(e){Wu(e)}function qu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Ng(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sh(e,i,r){return r=Ka(r),r.tag=3,r.payload={element:null},r.callback=function(){qu(e,i)},r}function Og(e){return e=Ka(e),e.tag=3,e}function Pg(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var _=u.value;e.payload=function(){return h(_)},e.callback=function(){Ng(i,r,u)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Ng(i,r,u),typeof h!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var R=u.stack;this.componentDidCatch(u.value,{componentStack:R!==null?R:""})})}function gM(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Ko(i,r,h,!0),r=Ci.current,r!==null){switch(r.tag){case 13:return Ki===null?Wh():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Kf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),Yh(e,u,h)),!1;case 22:return r.flags|=65536,u===Kf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),Yh(e,u,h)),!1}throw Error(a(435,r.tag))}return Yh(e,u,h),Wh(),!1}if(Ae)return i=Ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==kf&&(e=Error(a(422),{cause:u}),jo(bi(e,r)))):(u!==kf&&(i=Error(a(423),{cause:u}),jo(bi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=bi(u,r),h=Sh(e.stateNode,u,h),$f(e,h),tn!==4&&(tn=2)),!1;var _=Error(a(520),{cause:u});if(_=bi(_,r),_l===null?_l=[_]:_l.push(_),tn!==4&&(tn=2),i===null)return!0;u=bi(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Sh(r.stateNode,u,e),$f(r,e),!1;case 1:if(i=r.type,_=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(sr===null||!sr.has(_))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Og(h),Pg(h,e,r,u),$f(r,h),!1}r=r.return}while(r!==null);return!1}var zg=Error(a(461)),Tn=!1;function Un(e,i,r,u){i.child=e===null?Ag(i,null,r,u):Gs(i,e.child,r,u)}function Ig(e,i,r,u,h){r=r.render;var _=i.ref;if("ref"in u){var T={};for(var R in u)R!=="ref"&&(T[R]=u[R])}else T=u;return Wr(i),u=ah(e,i,r,T,_,h),R=rh(),e!==null&&!Tn?(sh(e,i,h),ya(e,i,h)):(Ae&&R&&Gf(i),i.flags|=1,Un(e,i,u,h),i.child)}function Bg(e,i,r,u,h){if(e===null){var _=r.type;return typeof _=="function"&&!Bf(_)&&_.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=_,Fg(e,i,_,u,h)):(e=bu(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(_=e.child,!Ch(e,h)){var T=_.memoizedProps;if(r=r.compare,r=r!==null?r:Wo,r(T,u)&&e.ref===i.ref)return ya(e,i,h)}return i.flags|=1,e=da(_,u),e.ref=i.ref,e.return=i,i.child=e}function Fg(e,i,r,u,h){if(e!==null){var _=e.memoizedProps;if(Wo(_,u)&&e.ref===i.ref)if(Tn=!1,i.pendingProps=u=_,Ch(e,h))(e.flags&131072)!==0&&(Tn=!0);else return i.lanes=e.lanes,ya(e,i,h)}return Mh(e,i,r,u,h)}function Hg(e,i,r){var u=i.pendingProps,h=u.children,_=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|r:r,e!==null){for(h=i.child=e.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return Gg(e,i,u,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(i,_!==null?_.cachePool:null),_!==null?F_(i,_):eh(),Rg(i);else return i.lanes=i.childLanes=536870912,Gg(e,i,_!==null?_.baseLanes|r:r,r)}else _!==null?(Du(i,_.cachePool),F_(i,_),tr(),i.memoizedState=null):(e!==null&&Du(i,null),eh(),tr());return Un(e,i,h,r),i.child}function Gg(e,i,r,u){var h=jf();return h=h===null?null:{parent:vn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},e!==null&&Du(i,null),eh(),Rg(i),e!==null&&Ko(e,i,u,!0),null}function Yu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Mh(e,i,r,u,h){return Wr(i),r=ah(e,i,r,u,void 0,h),u=rh(),e!==null&&!Tn?(sh(e,i,h),ya(e,i,h)):(Ae&&u&&Gf(i),i.flags|=1,Un(e,i,r,h),i.child)}function Vg(e,i,r,u,h,_){return Wr(i),i.updateQueue=null,r=G_(i,u,r,h),H_(e),u=rh(),e!==null&&!Tn?(sh(e,i,_),ya(e,i,_)):(Ae&&u&&Gf(i),i.flags|=1,Un(e,i,r,_),i.child)}function kg(e,i,r,u,h){if(Wr(i),i.stateNode===null){var _=Us,T=r.contextType;typeof T=="object"&&T!==null&&(_=In(T)),_=new r(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=yh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},Qf(i),T=r.contextType,_.context=typeof T=="object"&&T!==null?In(T):Us,_.state=i.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(xh(i,r,T,u),_.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&yh.enqueueReplaceState(_,_.state,null),il(i,u,_,h),nl(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){_=i.stateNode;var R=i.memoizedProps,H=Zr(r,R);_.props=H;var et=_.context,ft=r.contextType;T=Us,typeof ft=="object"&&ft!==null&&(T=In(ft));var vt=r.getDerivedStateFromProps;ft=typeof vt=="function"||typeof _.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ft||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(R||et!==T)&&Cg(i,_,u,T),ja=!1;var it=i.memoizedState;_.state=it,il(i,u,_,h),nl(),et=i.memoizedState,R||it!==et||ja?(typeof vt=="function"&&(xh(i,r,vt,u),et=i.memoizedState),(H=ja||wg(i,r,H,u,it,et,T))?(ft||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=et),_.props=u,_.state=et,_.context=T,u=H):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,Jf(e,i),T=i.memoizedProps,ft=Zr(r,T),_.props=ft,vt=i.pendingProps,it=_.context,et=r.contextType,H=Us,typeof et=="object"&&et!==null&&(H=In(et)),R=r.getDerivedStateFromProps,(et=typeof R=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==vt||it!==H)&&Cg(i,_,u,H),ja=!1,it=i.memoizedState,_.state=it,il(i,u,_,h),nl();var rt=i.memoizedState;T!==vt||it!==rt||ja||e!==null&&e.dependencies!==null&&wu(e.dependencies)?(typeof R=="function"&&(xh(i,r,R,u),rt=i.memoizedState),(ft=ja||wg(i,r,ft,u,it,rt,H)||e!==null&&e.dependencies!==null&&wu(e.dependencies))?(et||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,rt,H),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,rt,H)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),_.props=u,_.state=rt,_.context=H,u=ft):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),u=!1)}return _=u,Yu(e,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,e!==null&&u?(i.child=Gs(i,e.child,null,h),i.child=Gs(i,null,r,h)):Un(e,i,r,h),i.memoizedState=_.state,e=i.child):e=ya(e,i,h),e}function Xg(e,i,r,u){return Zo(),i.flags|=256,Un(e,i,r,u),i.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:U_()}}function bh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Di),e}function Wg(e,i,r){var u=i.pendingProps,h=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ae){if(h?$a(i):tr(),Ae){var R=$e,H;if(H=R){t:{for(H=R,R=ji;H.nodeType!==8;){if(!R){R=null;break t}if(H=Fi(H.nextSibling),H===null){R=null;break t}}R=H}R!==null?(i.memoizedState={dehydrated:R,treeContext:Hr!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},H=ci(18,null,null,0),H.stateNode=R,H.return=i,i.child=H,qn=i,$e=null,H=!0):H=!1}H||kr(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return ld(R)?i.lanes=32:i.lanes=536870912,null;xa(i)}return R=u.children,u=u.fallback,h?(tr(),h=i.mode,R=Zu({mode:"hidden",children:R},h),u=Fr(u,h,r,null),R.return=i,u.return=i,R.sibling=u,i.child=R,h=i.child,h.memoizedState=Th(r),h.childLanes=bh(e,T,r),i.memoizedState=Eh,u):($a(i),Ah(i,R))}if(H=e.memoizedState,H!==null&&(R=H.dehydrated,R!==null)){if(_)i.flags&256?($a(i),i.flags&=-257,i=Rh(e,i,r)):i.memoizedState!==null?(tr(),i.child=e.child,i.flags|=128,i=null):(tr(),h=u.fallback,R=i.mode,u=Zu({mode:"visible",children:u.children},R),h=Fr(h,R,r,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Gs(i,e.child,null,r),u=i.child,u.memoizedState=Th(r),u.childLanes=bh(e,T,r),i.memoizedState=Eh,i=h);else if($a(i),ld(R)){if(T=R.nextSibling&&R.nextSibling.dataset,T)var et=T.dgst;T=et,u=Error(a(419)),u.stack="",u.digest=T,jo({value:u,source:null,stack:null}),i=Rh(e,i,r)}else if(Tn||Ko(e,i,r,!1),T=(r&e.childLanes)!==0,Tn||T){if(T=We,T!==null&&(u=r&-r,u=(u&42)!==0?1:ke(u),u=(u&(T.suspendedLanes|r))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,Ds(e,u),mi(T,e,u),zg;R.data==="$?"||Wh(),i=Rh(e,i,r)}else R.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,$e=Fi(R.nextSibling),qn=i,Ae=!0,Vr=null,ji=!1,e!==null&&(Ri[wi++]=pa,Ri[wi++]=ma,Ri[wi++]=Hr,pa=e.id,ma=e.overflow,Hr=i),i=Ah(i,u.children),i.flags|=4096);return i}return h?(tr(),h=u.fallback,R=i.mode,H=e.child,et=H.sibling,u=da(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,et!==null?h=da(et,h):(h=Fr(h,R,r,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,R=e.child.memoizedState,R===null?R=Th(r):(H=R.cachePool,H!==null?(et=vn._currentValue,H=H.parent!==et?{parent:et,pool:et}:H):H=U_(),R={baseLanes:R.baseLanes|r,cachePool:H}),h.memoizedState=R,h.childLanes=bh(e,T,r),i.memoizedState=Eh,u):($a(i),r=e.child,e=r.sibling,r=da(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=r,i.memoizedState=null,r)}function Ah(e,i){return i=Zu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zu(e,i){return e=ci(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rh(e,i,r){return Gs(i,e.child,null,r),e=Ah(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function qg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Wf(e.return,i,r)}function wh(e,i,r,u,h){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=r,_.tailMode=h)}function Yg(e,i,r){var u=i.pendingProps,h=u.revealOrder,_=u.tail;if(Un(e,i,u.children,r),u=xn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qg(e,r,i);else if(e.tag===19)qg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(St(xn,u),h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Xu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),wh(i,!1,h,r,_);break;case"backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Xu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}wh(i,!0,r,null,_);break;case"together":wh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ya(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),rr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ko(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=da(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=da(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Ch(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&wu(e)))}function vM(e,i,r){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Za(i,vn,e.memoizedState.cache),Zo();break;case 27:case 5:Zt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?($a(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Wg(e,i,r):($a(i),e=ya(e,i,r),e!==null?e.sibling:null);$a(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Ko(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return Yg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(xn,xn.current),u)break;return null;case 22:case 23:return i.lanes=0,Hg(e,i,r);case 24:Za(i,vn,e.memoizedState.cache)}return ya(e,i,r)}function Zg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Tn=!0;else{if(!Ch(e,r)&&(i.flags&128)===0)return Tn=!1,vM(e,i,r);Tn=(e.flags&131072)!==0}else Tn=!1,Ae&&(i.flags&1048576)!==0&&T_(i,Ru,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")Bf(u)?(e=Zr(u,e),i.tag=1,i=kg(null,i,u,e,r)):(i.tag=0,i=Mh(null,i,u,e,r));else{if(u!=null){if(h=u.$$typeof,h===A){i.tag=11,i=Ig(null,i,u,e,r);break t}else if(h===O){i.tag=14,i=Bg(null,i,u,e,r);break t}}throw i=at(u)||u,Error(a(306,i,""))}}return i;case 0:return Mh(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=Zr(u,i.pendingProps),kg(e,i,u,h,r);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var _=i.memoizedState;h=_.element,Jf(e,i),il(i,u,null,r);var T=i.memoizedState;if(u=T.cache,Za(i,vn,u),u!==_.cache&&qf(i,[vn],r,!0),nl(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=Xg(e,i,u,r);break t}else if(u!==h){h=bi(Error(a(424)),i),jo(h),i=Xg(e,i,u,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Fi(e.firstChild),qn=i,Ae=!0,Vr=null,ji=!0,r=Ag(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Zo(),u===h){i=ya(e,i,r);break t}Un(e,i,u,r)}i=i.child}return i;case 26:return Yu(e,i),e===null?(r=J0(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ae||(r=i.type,e=i.pendingProps,u=lc(yt.current).createElement(r),u[_n]=i,u[Cn]=e,Nn(u,r,e),un(u),i.stateNode=u):i.memoizedState=J0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zt(i),e===null&&Ae&&(u=i.stateNode=j0(i.type,i.pendingProps,yt.current),qn=i,ji=!0,h=$e,ur(i.type)?(ud=h,$e=Fi(u.firstChild)):$e=h),Un(e,i,i.pendingProps.children,r),Yu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ae&&((h=u=$e)&&(u=qM(u,i.type,i.pendingProps,ji),u!==null?(i.stateNode=u,qn=i,$e=Fi(u.firstChild),ji=!1,h=!0):h=!1),h||kr(i)),Zt(i),h=i.type,_=i.pendingProps,T=e!==null?e.memoizedProps:null,u=_.children,rd(h,_)?u=null:T!==null&&rd(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=ah(e,i,cM,null,null,r),bl._currentValue=h),Yu(e,i),Un(e,i,u,r),i.child;case 6:return e===null&&Ae&&((e=r=$e)&&(r=YM(r,i.pendingProps,ji),r!==null?(i.stateNode=r,qn=i,$e=null,e=!0):e=!1),e||kr(i)),null;case 13:return Wg(e,i,r);case 4:return Dt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Gs(i,null,u,r):Un(e,i,u,r),i.child;case 11:return Ig(e,i,i.type,i.pendingProps,r);case 7:return Un(e,i,i.pendingProps,r),i.child;case 8:return Un(e,i,i.pendingProps.children,r),i.child;case 12:return Un(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,Za(i,i.type,u.value),Un(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Wr(i),h=In(h),u=u(h),i.flags|=1,Un(e,i,u,r),i.child;case 14:return Bg(e,i,i.type,i.pendingProps,r);case 15:return Fg(e,i,i.type,i.pendingProps,r);case 19:return Yg(e,i,r);case 31:return u=i.pendingProps,r=i.mode,u={mode:u.mode,children:u.children},e===null?(r=Zu(u,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=da(e.child,u),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Hg(e,i,r);case 24:return Wr(i),u=In(vn),e===null?(h=jf(),h===null&&(h=We,_=Yf(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=r),h=_),i.memoizedState={parent:u,cache:h},Qf(i),Za(i,vn,h)):((e.lanes&r)!==0&&(Jf(e,i),il(i,null,null,r),nl()),h=e.memoizedState,_=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Za(i,vn,u)):(u=_.cache,Za(i,vn,u),u!==h.cache&&qf(i,[vn],r,!0))),Un(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Sa(e){e.flags|=4}function jg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iv(i)){if(i=Ci.current,i!==null&&((ye&4194048)===ye?Ki!==null:(ye&62914560)!==ye&&(ye&536870912)===0||i!==Ki))throw tl=Kf,L_;e.flags|=8192}}function ju(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ut():536870912,e.lanes|=i,Ws|=i)}function cl(e,i){if(!Ae)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function xM(e,i,r){var u=i.pendingProps;switch(Vf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ga(vn),se(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(i)?Sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,R_())),je(i),null;case 26:return r=i.memoizedState,e===null?(Sa(i),r!==null?(je(i),jg(i,r)):(je(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Sa(i),je(i),jg(i,r)):(je(i),i.flags&=-16777217):(e.memoizedProps!==u&&Sa(i),je(i),i.flags&=-16777217),null;case 27:Ve(i),r=yt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Sa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=j.current,Yo(i)?b_(i):(e=j0(h,u,r),i.stateNode=e,Sa(i))}return je(i),null;case 5:if(Ve(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Sa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(e=j.current,Yo(i))b_(i);else{switch(h=lc(yt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(r,{is:u.is}):h.createElement(r)}}e[_n]=i,e[Cn]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Nn(e,r,u),r){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Sa(i)}}return je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Sa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=yt.current,Yo(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=qn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[_n]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||V0(e.nodeValue,r)),e||kr(i)}else e=lc(e).createTextNode(u),e[_n]=i,i.stateNode=e}return je(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Yo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_n]=i}else Zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),h=!1}else h=R_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(xa(i),i):(xa(i),null)}if(xa(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=u!==null,e=e!==null&&e.memoizedState!==null,r){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==h&&(u.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),ju(i,i.updateQueue),je(i),null;case 4:return se(),e===null&&td(i.stateNode.containerInfo),je(i),null;case 10:return ga(i.type),je(i),null;case 19:if(mt(xn),h=i.memoizedState,h===null)return je(i),null;if(u=(i.flags&128)!==0,_=h.rendering,_===null)if(u)cl(h,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(_=Xu(e),_!==null){for(i.flags|=128,cl(h,!1),e=_.updateQueue,i.updateQueue=e,ju(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)E_(r,e),r=r.sibling;return St(xn,xn.current&1|2),i.child}e=e.sibling}h.tail!==null&&ne()>Ju&&(i.flags|=128,u=!0,cl(h,!1),i.lanes=4194304)}else{if(!u)if(e=Xu(_),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,ju(i,e),cl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!Ae)return je(i),null}else 2*ne()-h.renderingStartTime>Ju&&r!==536870912&&(i.flags|=128,u=!0,cl(h,!1),i.lanes=4194304);h.isBackwards?(_.sibling=i.child,i.child=_):(e=h.last,e!==null?e.sibling=_:i.child=_,h.last=_)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ne(),i.sibling=null,e=xn.current,St(xn,u?e&1|2:e&1),i):(je(i),null);case 22:case 23:return xa(i),nh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&ju(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&mt(qr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ga(vn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function yM(e,i){switch(Vf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ga(vn),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ve(i),null;case 13:if(xa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Zo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return mt(xn),null;case 4:return se(),null;case 10:return ga(i.type),null;case 22:case 23:return xa(i),nh(),e!==null&&mt(qr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ga(vn),null;case 25:return null;default:return null}}function Kg(e,i){switch(Vf(i),i.tag){case 3:ga(vn),se();break;case 26:case 27:case 5:Ve(i);break;case 4:se();break;case 13:xa(i);break;case 19:mt(xn);break;case 10:ga(i.type);break;case 22:case 23:xa(i),nh(),e!==null&&mt(qr);break;case 24:ga(vn)}}function fl(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var _=r.create,T=r.inst;u=_(),T.destroy=u}r=r.next}while(r!==h)}}catch(R){He(i,i.return,R)}}function er(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var _=h.next;u=_;do{if((u.tag&e)===e){var T=u.inst,R=T.destroy;if(R!==void 0){T.destroy=void 0,h=i;var H=r,et=R;try{et()}catch(ft){He(h,H,ft)}}}u=u.next}while(u!==_)}}catch(ft){He(i,i.return,ft)}}function Qg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{B_(i,r)}catch(u){He(e,e.return,u)}}}function Jg(e,i,r){r.props=Zr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){He(e,i,u)}}function hl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(h){He(e,i,h)}}function Qi(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){He(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){He(e,i,h)}else r.current=null}function $g(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){He(e,e.return,h)}}function Dh(e,i,r){try{var u=e.stateNode;GM(u,e.type,r,i),u[Cn]=i}catch(h){He(e,e.return,h)}}function t0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function Uh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=oc));else if(u!==4&&(u===27&&ur(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Lh(e,i,r),e=e.sibling;e!==null;)Lh(e,i,r),e=e.sibling}function Ku(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&ur(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ku(e,i,r),e=e.sibling;e!==null;)Ku(e,i,r),e=e.sibling}function e0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Nn(i,u,r),i[_n]=e,i[Cn]=r}catch(_){He(e,e.return,_)}}var Ma=!1,rn=!1,Nh=!1,n0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function SM(e,i){if(e=e.containerInfo,id=pc,e=d_(e),Uf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var T=0,R=-1,H=-1,et=0,ft=0,vt=e,it=null;e:for(;;){for(var rt;vt!==r||h!==0&&vt.nodeType!==3||(R=T+h),vt!==_||u!==0&&vt.nodeType!==3||(H=T+u),vt.nodeType===3&&(T+=vt.nodeValue.length),(rt=vt.firstChild)!==null;)it=vt,vt=rt;for(;;){if(vt===e)break e;if(it===r&&++et===h&&(R=T),it===_&&++ft===u&&(H=T),(rt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=rt}r=R===-1||H===-1?null:{start:R,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(ad={focusedElem:e,selectionRange:r},pc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,_=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&_!==null){e=void 0,r=i,h=_.memoizedProps,_=_.memoizedState,u=r.stateNode;try{var $t=Zr(r.type,h,r.elementType===r.type);e=u.getSnapshotBeforeUpdate($t,_),u.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){He(r,r.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)od(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function i0(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:nr(e,r),u&4&&fl(5,r);break;case 1:if(nr(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(T){He(r,r.return,T)}else{var h=Zr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){He(r,r.return,T)}}u&64&&Qg(r),u&512&&hl(r,r.return);break;case 3:if(nr(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{B_(e,i)}catch(T){He(r,r.return,T)}}break;case 27:i===null&&u&4&&e0(r);case 26:case 5:nr(e,r),i===null&&u&4&&$g(r),u&512&&hl(r,r.return);break;case 12:nr(e,r);break;case 13:nr(e,r),u&4&&s0(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=DM.bind(null,r),ZM(e,r))));break;case 22:if(u=r.memoizedState!==null||Ma,!u){i=i!==null&&i.memoizedState!==null||rn,h=Ma;var _=rn;Ma=u,(rn=i)&&!_?ir(e,r,(r.subtreeFlags&8772)!==0):nr(e,r),Ma=h,rn=_}break;case 30:break;default:nr(e,r)}}function a0(e){var i=e.alternate;i!==null&&(e.alternate=null,a0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Xa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,$n=!1;function Ea(e,i,r){for(r=r.child;r!==null;)r0(e,i,r),r=r.sibling}function r0(e,i,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ht,r)}catch{}switch(r.tag){case 26:rn||Qi(r,i),Ea(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Qi(r,i);var u=qe,h=$n;ur(r.type)&&(qe=r.stateNode,$n=!1),Ea(e,i,r),Sl(r.stateNode),qe=u,$n=h;break;case 5:rn||Qi(r,i);case 6:if(u=qe,h=$n,qe=null,Ea(e,i,r),qe=u,$n=h,qe!==null)if($n)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(r.stateNode)}catch(_){He(r,i,_)}else try{qe.removeChild(r.stateNode)}catch(_){He(r,i,_)}break;case 18:qe!==null&&($n?(e=qe,Y0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Cl(e)):Y0(qe,r.stateNode));break;case 4:u=qe,h=$n,qe=r.stateNode.containerInfo,$n=!0,Ea(e,i,r),qe=u,$n=h;break;case 0:case 11:case 14:case 15:rn||er(2,r,i),rn||er(4,r,i),Ea(e,i,r);break;case 1:rn||(Qi(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&Jg(r,i,u)),Ea(e,i,r);break;case 21:Ea(e,i,r);break;case 22:rn=(u=rn)||r.memoizedState!==null,Ea(e,i,r),rn=u;break;default:Ea(e,i,r)}}function s0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(r){He(i,i.return,r)}}function MM(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new n0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new n0),i;default:throw Error(a(435,e.tag))}}function Oh(e,i){var r=MM(e);i.forEach(function(u){var h=UM.bind(null,e,u);r.has(u)||(r.add(u),u.then(h,h))})}function fi(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],_=e,T=i,R=T;t:for(;R!==null;){switch(R.tag){case 27:if(ur(R.type)){qe=R.stateNode,$n=!1;break t}break;case 5:qe=R.stateNode,$n=!1;break t;case 3:case 4:qe=R.stateNode.containerInfo,$n=!0;break t}R=R.return}if(qe===null)throw Error(a(160));r0(_,T,h),qe=null,$n=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)o0(i,e),i=i.sibling}var Bi=null;function o0(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fi(i,e),hi(e),u&4&&(er(3,e,e.return),fl(3,e),er(5,e,e.return));break;case 1:fi(i,e),hi(e),u&512&&(rn||r===null||Qi(r,r.return)),u&64&&Ma&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Bi;if(fi(i,e),hi(e),u&512&&(rn||r===null||Qi(r,r.return)),u&4){var _=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":_=h.getElementsByTagName("title")[0],(!_||_[ka]||_[_n]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(u),h.head.insertBefore(_,h.querySelector("head > title"))),Nn(_,u,r),_[_n]=e,un(_),u=_;break t;case"link":var T=ev("link","href",h).get(u+(r.href||""));if(T){for(var R=0;R<T.length;R++)if(_=T[R],_.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&_.getAttribute("rel")===(r.rel==null?null:r.rel)&&_.getAttribute("title")===(r.title==null?null:r.title)&&_.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(R,1);break e}}_=h.createElement(u),Nn(_,u,r),h.head.appendChild(_);break;case"meta":if(T=ev("meta","content",h).get(u+(r.content||""))){for(R=0;R<T.length;R++)if(_=T[R],_.getAttribute("content")===(r.content==null?null:""+r.content)&&_.getAttribute("name")===(r.name==null?null:r.name)&&_.getAttribute("property")===(r.property==null?null:r.property)&&_.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&_.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(R,1);break e}}_=h.createElement(u),Nn(_,u,r),h.head.appendChild(_);break;default:throw Error(a(468,u))}_[_n]=e,un(_),u=_}e.stateNode=u}else nv(h,e.type,e.stateNode);else e.stateNode=tv(h,u,e.memoizedProps);else _!==u?(_===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):_.count--,u===null?nv(h,e.type,e.stateNode):tv(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Dh(e,e.memoizedProps,r.memoizedProps)}break;case 27:fi(i,e),hi(e),u&512&&(rn||r===null||Qi(r,r.return)),r!==null&&u&4&&Dh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(fi(i,e),hi(e),u&512&&(rn||r===null||Qi(r,r.return)),e.flags&32){h=e.stateNode;try{Zi(h,"")}catch(rt){He(e,e.return,rt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Dh(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Nh=!0);break;case 6:if(fi(i,e),hi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(rt){He(e,e.return,rt)}}break;case 3:if(fc=null,h=Bi,Bi=uc(i.containerInfo),fi(i,e),Bi=h,hi(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Cl(i.containerInfo)}catch(rt){He(e,e.return,rt)}Nh&&(Nh=!1,l0(e));break;case 4:u=Bi,Bi=uc(e.stateNode.containerInfo),fi(i,e),hi(e),Bi=u;break;case 12:fi(i,e),hi(e);break;case 13:fi(i,e),hi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hh=ne()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Oh(e,u)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,et=Ma,ft=rn;if(Ma=et||h,rn=ft||H,fi(i,e),rn=ft,Ma=et,hi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Ma||rn||jr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(_=H.stateNode,h)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{R=H.stateNode;var vt=H.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(rt){He(H,H.return,rt)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(rt){He(H,H.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,Oh(e,r))));break;case 19:fi(i,e),hi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Oh(e,u)));break;case 30:break;case 21:break;default:fi(i,e),hi(e)}}function hi(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(t0(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,_=Uh(e);Ku(e,_,h);break;case 5:var T=r.stateNode;r.flags&32&&(Zi(T,""),r.flags&=-33);var R=Uh(e);Ku(e,R,T);break;case 3:case 4:var H=r.stateNode.containerInfo,et=Uh(e);Lh(e,et,H);break;default:throw Error(a(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;l0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function nr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)i0(e,i.alternate,i),i=i.sibling}function jr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:er(4,i,i.return),jr(i);break;case 1:Qi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Jg(i,i.return,r),jr(i);break;case 27:Sl(i.stateNode);case 26:case 5:Qi(i,i.return),jr(i);break;case 22:i.memoizedState===null&&jr(i);break;case 30:jr(i);break;default:jr(i)}e=e.sibling}}function ir(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:ir(h,_,r),fl(4,_);break;case 1:if(ir(h,_,r),u=_,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){He(u,u.return,et)}if(u=_,h=u.updateQueue,h!==null){var R=u.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)I_(H[h],R)}catch(et){He(u,u.return,et)}}r&&T&64&&Qg(_),hl(_,_.return);break;case 27:e0(_);case 26:case 5:ir(h,_,r),r&&u===null&&T&4&&$g(_),hl(_,_.return);break;case 12:ir(h,_,r);break;case 13:ir(h,_,r),r&&T&4&&s0(h,_);break;case 22:_.memoizedState===null&&ir(h,_,r),hl(_,_.return);break;case 30:break;default:ir(h,_,r)}i=i.sibling}}function Ph(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Qo(r))}function zh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e))}function Ji(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)u0(e,i,r,u),i=i.sibling}function u0(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ji(e,i,r,u),h&2048&&fl(9,i);break;case 1:Ji(e,i,r,u);break;case 3:Ji(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e)));break;case 12:if(h&2048){Ji(e,i,r,u),e=i.stateNode;try{var _=i.memoizedProps,T=_.id,R=_.onPostCommit;typeof R=="function"&&R(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){He(i,i.return,H)}}else Ji(e,i,r,u);break;case 13:Ji(e,i,r,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?Ji(e,i,r,u):dl(e,i):_._visibility&2?Ji(e,i,r,u):(_._visibility|=2,Vs(e,i,r,u,(i.subtreeFlags&10256)!==0)),h&2048&&Ph(T,i);break;case 24:Ji(e,i,r,u),h&2048&&zh(i.alternate,i);break;default:Ji(e,i,r,u)}}function Vs(e,i,r,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=e,T=i,R=r,H=u,et=T.flags;switch(T.tag){case 0:case 11:case 15:Vs(_,T,R,H,h),fl(8,T);break;case 23:break;case 22:var ft=T.stateNode;T.memoizedState!==null?ft._visibility&2?Vs(_,T,R,H,h):dl(_,T):(ft._visibility|=2,Vs(_,T,R,H,h)),h&&et&2048&&Ph(T.alternate,T);break;case 24:Vs(_,T,R,H,h),h&&et&2048&&zh(T.alternate,T);break;default:Vs(_,T,R,H,h)}i=i.sibling}}function dl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:dl(r,u),h&2048&&Ph(u.alternate,u);break;case 24:dl(r,u),h&2048&&zh(u.alternate,u);break;default:dl(r,u)}i=i.sibling}}var pl=8192;function ks(e){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)c0(e),e=e.sibling}function c0(e){switch(e.tag){case 26:ks(e),e.flags&pl&&e.memoizedState!==null&&oE(Bi,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var i=Bi;Bi=uc(e.stateNode.containerInfo),ks(e),Bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pl,pl=16777216,ks(e),pl=i):ks(e));break;default:ks(e)}}function f0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ml(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,d0(u,e)}f0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h0(e),e=e.sibling}function h0(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&er(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Qu(e)):ml(e);break;default:ml(e)}}function Qu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,d0(u,e)}f0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:er(8,i,i.return),Qu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Qu(i));break;default:Qu(i)}e=e.sibling}}function d0(e,i){for(;bn!==null;){var r=bn;switch(r.tag){case 0:case 11:case 15:er(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Qo(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,bn=u;else t:for(r=e;bn!==null;){u=bn;var h=u.sibling,_=u.return;if(a0(u),u===r){bn=null;break t}if(h!==null){h.return=_,bn=h;break t}bn=_}}}var EM={getCacheForType:function(e){var i=In(vn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},TM=typeof WeakMap=="function"?WeakMap:Map,Re=0,We=null,de=null,ye=0,we=0,di=null,ar=!1,Xs=!1,Ih=!1,Ta=0,tn=0,rr=0,Kr=0,Bh=0,Di=0,Ws=0,_l=null,ti=null,Fh=!1,Hh=0,Ju=1/0,$u=null,sr=null,Ln=0,or=null,qs=null,Ys=0,Gh=0,Vh=null,p0=null,gl=0,kh=null;function pi(){if((Re&2)!==0&&ye!==0)return ye&-ye;if(B.T!==null){var e=Os;return e!==0?e:Kh()}return Me()}function m0(){Di===0&&(Di=(ye&536870912)===0||Ae?q():536870912);var e=Ci.current;return e!==null&&(e.flags|=32),Di}function mi(e,i,r){(e===We&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Zs(e,0),lr(e,ye,Di,!1)),gt(e,r),((Re&2)===0||e!==We)&&(e===We&&((Re&2)===0&&(Kr|=r),tn===4&&lr(e,ye,Di,!1)),$i(e))}function _0(e,i,r){if((Re&6)!==0)throw Error(a(327));var u=!r&&(i&124)===0&&(i&e.expiredLanes)===0||te(e,i),h=u?RM(e,i):qh(e,i,!0),_=u;do{if(h===0){Xs&&!u&&lr(e,i,0,!1);break}else{if(r=e.current.alternate,_&&!bM(r)){h=qh(e,i,!1),_=!1;continue}if(h===2){if(_=i,e.errorRecoveryDisabledLanes&_)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var R=e;h=_l;var H=R.current.memoizedState.isDehydrated;if(H&&(Zs(R,T).flags|=256),T=qh(R,T,!1),T!==2){if(Ih&&!H){R.errorRecoveryDisabledLanes|=_,Kr|=_,h=4;break t}_=ti,ti=h,_!==null&&(ti===null?ti=_:ti.push.apply(ti,_))}h=T}if(_=!1,h!==2)continue}}if(h===1){Zs(e,0),lr(e,i,0,!0);break}t:{switch(u=e,_=h,_){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:lr(u,i,Di,!ar);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Hh+300-ne(),10<h)){if(lr(u,i,Di,!ar),le(u,0,!0)!==0)break t;u.timeoutHandle=W0(g0.bind(null,u,r,ti,$u,Fh,i,Di,Kr,Ws,ar,_,2,-0,0),h);break t}g0(u,r,ti,$u,Fh,i,Di,Kr,Ws,ar,_,0,-0,0)}}break}while(!0);$i(e)}function g0(e,i,r,u,h,_,T,R,H,et,ft,vt,it,rt){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:sE},c0(i),vt=lE(),vt!==null)){e.cancelPendingCommit=vt(T0.bind(null,e,i,_,r,u,h,T,R,H,ft,1,it,rt)),lr(e,_,T,!et);return}T0(e,i,_,r,u,h,T,R,H)}function bM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],_=h.getSnapshot;h=h.value;try{if(!ui(_(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(e,i,r,u){i&=~Bh,i&=~Kr,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var _=31-Ft(h),T=1<<_;u[_]=-1,h&=~T}r!==0&&Lt(e,r,i)}function tc(){return(Re&6)===0?(vl(0),!1):!0}function Xh(){if(de!==null){if(we===0)var e=de.return;else e=de,_a=Xr=null,oh(e),Hs=null,ll=0,e=de;for(;e!==null;)Kg(e.alternate,e),e=e.return;de=null}}function Zs(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,kM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Xh(),We=e,de=r=da(e.current,null),ye=i,we=0,di=null,ar=!1,Xs=te(e,i),Ih=!1,Ws=Di=Bh=Kr=rr=tn=0,ti=_l=null,Fh=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Ft(u),_=1<<h;i|=e[h],u&=~_}return Ta=i,Mu(),r}function v0(e,i){ue=null,B.H=Gu,i===$o||i===Uu?(i=P_(),we=3):i===L_?(i=P_(),we=4):we=i===zg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,de===null&&(tn=1,qu(e,bi(i,e.current)))}function x0(){var e=B.H;return B.H=Gu,e===null?Gu:e}function y0(){var e=B.A;return B.A=EM,e}function Wh(){tn=4,ar||(ye&4194048)!==ye&&Ci.current!==null||(Xs=!0),(rr&134217727)===0&&(Kr&134217727)===0||We===null||lr(We,ye,Di,!1)}function qh(e,i,r){var u=Re;Re|=2;var h=x0(),_=y0();(We!==e||ye!==i)&&($u=null,Zs(e,i)),i=!1;var T=tn;t:do try{if(we!==0&&de!==null){var R=de,H=di;switch(we){case 8:Xh(),T=6;break t;case 3:case 2:case 9:case 6:Ci.current===null&&(i=!0);var et=we;if(we=0,di=null,js(e,R,H,et),r&&Xs){T=0;break t}break;default:et=we,we=0,di=null,js(e,R,H,et)}}AM(),T=tn;break}catch(ft){v0(e,ft)}while(!0);return i&&e.shellSuspendCounter++,_a=Xr=null,Re=u,B.H=h,B.A=_,de===null&&(We=null,ye=0,Mu()),T}function AM(){for(;de!==null;)S0(de)}function RM(e,i){var r=Re;Re|=2;var u=x0(),h=y0();We!==e||ye!==i?($u=null,Ju=ne()+500,Zs(e,i)):Xs=te(e,i);t:do try{if(we!==0&&de!==null){i=de;var _=di;e:switch(we){case 1:we=0,di=null,js(e,i,_,1);break;case 2:case 9:if(N_(_)){we=0,di=null,M0(i);break}i=function(){we!==2&&we!==9||We!==e||(we=7),$i(e)},_.then(i,i);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:N_(_)?(we=0,di=null,M0(i)):(we=0,di=null,js(e,i,_,7));break;case 5:var T=null;switch(de.tag){case 26:T=de.memoizedState;case 5:case 27:var R=de;if(!T||iv(T)){we=0,di=null;var H=R.sibling;if(H!==null)de=H;else{var et=R.return;et!==null?(de=et,ec(et)):de=null}break e}}we=0,di=null,js(e,i,_,5);break;case 6:we=0,di=null,js(e,i,_,6);break;case 8:Xh(),tn=6;break t;default:throw Error(a(462))}}wM();break}catch(ft){v0(e,ft)}while(!0);return _a=Xr=null,B.H=u,B.A=h,Re=r,de!==null?0:(We=null,ye=0,Mu(),tn)}function wM(){for(;de!==null&&!jn();)S0(de)}function S0(e){var i=Zg(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,i===null?ec(e):de=i}function M0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Vg(r,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=Vg(r,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:oh(i);default:Kg(r,i),i=de=E_(i,Ta),i=Zg(r,i,Ta)}e.memoizedProps=e.pendingProps,i===null?ec(e):de=i}function js(e,i,r,u){_a=Xr=null,oh(i),Hs=null,ll=0;var h=i.return;try{if(gM(e,h,i,r,ye)){tn=1,qu(e,bi(r,e.current)),de=null;return}}catch(_){if(h!==null)throw de=h,_;tn=1,qu(e,bi(r,e.current)),de=null;return}i.flags&32768?(Ae||u===1?e=!0:Xs||(ye&536870912)!==0?e=!1:(ar=e=!0,(u===2||u===9||u===3||u===6)&&(u=Ci.current,u!==null&&u.tag===13&&(u.flags|=16384))),E0(i,e)):ec(i)}function ec(e){var i=e;do{if((i.flags&32768)!==0){E0(i,ar);return}e=i.return;var r=xM(i.alternate,i,Ta);if(r!==null){de=r;return}if(i=i.sibling,i!==null){de=i;return}de=i=e}while(i!==null);tn===0&&(tn=5)}function E0(e,i){do{var r=yM(e.alternate,e);if(r!==null){r.flags&=32767,de=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){de=e;return}de=e=r}while(e!==null);tn=6,de=null}function T0(e,i,r,u,h,_,T,R,H){e.cancelPendingCommit=null;do nc();while(Ln!==0);if((Re&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(_=i.lanes|i.childLanes,_|=zf,Pt(e,r,_,T,R,H),e===We&&(de=We=null,ye=0),qs=i,or=e,Ys=r,Gh=_,Vh=h,p0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LM(z,function(){return C0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=X.p,X.p=2,T=Re,Re|=4;try{SM(e,i,r)}finally{Re=T,X.p=h,B.T=u}}Ln=1,b0(),A0(),R0()}}function b0(){if(Ln===1){Ln=0;var e=or,i=qs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var u=X.p;X.p=2;var h=Re;Re|=4;try{o0(i,e);var _=ad,T=d_(e.containerInfo),R=_.focusedElem,H=_.selectionRange;if(T!==R&&R&&R.ownerDocument&&h_(R.ownerDocument.documentElement,R)){if(H!==null&&Uf(R)){var et=H.start,ft=H.end;if(ft===void 0&&(ft=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(ft,R.value.length);else{var vt=R.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),$t=R.textContent.length,Yt=Math.min(H.start,$t),Oe=H.end===void 0?Yt:Math.min(H.end,$t);!rt.extend&&Yt>Oe&&(T=Oe,Oe=Yt,Yt=T);var Y=f_(R,Yt),k=f_(R,Oe);if(Y&&k&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(Y.node,Y.offset),rt.removeAllRanges(),Yt>Oe?(rt.addRange($),rt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),rt.addRange($))}}}}for(vt=[],rt=R;rt=rt.parentNode;)rt.nodeType===1&&vt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var pt=vt[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}pc=!!id,ad=id=null}finally{Re=h,X.p=u,B.T=r}}e.current=i,Ln=2}}function A0(){if(Ln===2){Ln=0;var e=or,i=qs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var u=X.p;X.p=2;var h=Re;Re|=4;try{i0(e,i.alternate,i)}finally{Re=h,X.p=u,B.T=r}}Ln=3}}function R0(){if(Ln===4||Ln===3){Ln=0,me();var e=or,i=qs,r=Ys,u=p0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,qs=or=null,w0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(sr=null),ln(r),i=i.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=B.T,h=X.p,X.p=2,B.T=null;try{for(var _=e.onRecoverableError,T=0;T<u.length;T++){var R=u[T];_(R.value,{componentStack:R.stack})}}finally{B.T=i,X.p=h}}(Ys&3)!==0&&nc(),$i(e),h=e.pendingLanes,(r&4194090)!==0&&(h&42)!==0?e===kh?gl++:(gl=0,kh=e):gl=0,vl(0)}}function w0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Qo(i)))}function nc(e){return b0(),A0(),R0(),C0()}function C0(){if(Ln!==5)return!1;var e=or,i=Gh;Gh=0;var r=ln(Ys),u=B.T,h=X.p;try{X.p=32>r?32:r,B.T=null,r=Vh,Vh=null;var _=or,T=Ys;if(Ln=0,qs=or=null,Ys=0,(Re&6)!==0)throw Error(a(331));var R=Re;if(Re|=4,h0(_.current),u0(_,_.current,T,r),Re=R,vl(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ht,_)}catch{}return!0}finally{X.p=h,B.T=u,w0(e,i)}}function D0(e,i,r){i=bi(r,i),i=Sh(e.stateNode,i,2),e=Qa(e,i,2),e!==null&&(gt(e,2),$i(e))}function He(e,i,r){if(e.tag===3)D0(e,e,r);else for(;i!==null;){if(i.tag===3){D0(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){e=bi(r,e),r=Og(2),u=Qa(i,r,2),u!==null&&(Pg(r,u,i,e),gt(u,2),$i(u));break}}i=i.return}}function Yh(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new TM;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(Ih=!0,h.add(r),e=CM.bind(null,e,i,r),i.then(e,e))}function CM(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(ye&r)===r&&(tn===4||tn===3&&(ye&62914560)===ye&&300>ne()-Hh?(Re&2)===0&&Zs(e,0):Bh|=r,Ws===ye&&(Ws=0)),$i(e)}function U0(e,i){i===0&&(i=Ut()),e=Ds(e,i),e!==null&&(gt(e,i),$i(e))}function DM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),U0(e,r)}function UM(e,i){var r=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),U0(e,r)}function LM(e,i){return ce(e,i)}var ic=null,Ks=null,Zh=!1,ac=!1,jh=!1,Qr=0;function $i(e){e!==Ks&&e.next===null&&(Ks===null?ic=Ks=e:Ks=Ks.next=e),ac=!0,Zh||(Zh=!0,OM())}function vl(e,i){if(!jh&&ac){jh=!0;do for(var r=!1,u=ic;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var _=0;else{var T=u.suspendedLanes,R=u.pingedLanes;_=(1<<31-Ft(42|e)+1)-1,_&=h&~(T&~R),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(r=!0,P0(u,_))}else _=ye,_=le(u,u===We?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||te(u,_)||(r=!0,P0(u,_));u=u.next}while(r);jh=!1}}function NM(){L0()}function L0(){ac=Zh=!1;var e=0;Qr!==0&&(VM()&&(e=Qr),Qr=0);for(var i=ne(),r=null,u=ic;u!==null;){var h=u.next,_=N0(u,i);_===0?(u.next=null,r===null?ic=h:r.next=h,h===null&&(Ks=r)):(r=u,(e!==0||(_&3)!==0)&&(ac=!0)),u=h}vl(e)}function N0(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,_=e.pendingLanes&-62914561;0<_;){var T=31-Ft(_),R=1<<T,H=h[T];H===-1?((R&r)===0||(R&u)!==0)&&(h[T]=Ue(R,i)):H<=i&&(e.expiredLanes|=R),_&=~R}if(i=We,r=ye,r=le(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&(we===2||we===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&V(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||te(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&V(u),ln(r)){case 2:case 8:r=Ht;break;case 32:r=z;break;case 268435456:r=nt;break;default:r=z}return u=O0.bind(null,e),r=ce(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&V(u),e.callbackPriority=2,e.callbackNode=null,2}function O0(e,i){if(Ln!==0&&Ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(nc()&&e.callbackNode!==r)return null;var u=ye;return u=le(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(_0(e,u,i),N0(e,ne()),e.callbackNode!=null&&e.callbackNode===r?O0.bind(null,e):null)}function P0(e,i){if(nc())return null;_0(e,i,!0)}function OM(){XM(function(){(Re&6)!==0?ce(De,NM):L0()})}function Kh(){return Qr===0&&(Qr=q()),Qr}function z0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mu(""+e)}function I0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function PM(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var _=z0((h[Cn]||null).action),T=u.submitter;T&&(i=(i=T[Cn]||null)?z0(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var R=new xu("action","action",null,u,h);e.push({event:R,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Qr!==0){var H=T?I0(h,T):new FormData(h);_h(r,{pending:!0,data:H,method:h.method,action:_},null,H)}}else typeof _=="function"&&(R.preventDefault(),H=T?I0(h,T):new FormData(h),_h(r,{pending:!0,data:H,method:h.method,action:_},_,H))},currentTarget:h}]})}}for(var Qh=0;Qh<Pf.length;Qh++){var Jh=Pf[Qh],zM=Jh.toLowerCase(),IM=Jh[0].toUpperCase()+Jh.slice(1);Ii(zM,"on"+IM)}Ii(__,"onAnimationEnd"),Ii(g_,"onAnimationIteration"),Ii(v_,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(tM,"onTransitionRun"),Ii(eM,"onTransitionStart"),Ii(nM,"onTransitionCancel"),Ii(x_,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function B0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var R=u[T],H=R.instance,et=R.currentTarget;if(R=R.listener,H!==_&&h.isPropagationStopped())break t;_=R,h.currentTarget=et;try{_(h)}catch(ft){Wu(ft)}h.currentTarget=null,_=H}else for(T=0;T<u.length;T++){if(R=u[T],H=R.instance,et=R.currentTarget,R=R.listener,H!==_&&h.isPropagationStopped())break t;_=R,h.currentTarget=et;try{_(h)}catch(ft){Wu(ft)}h.currentTarget=null,_=H}}}}function pe(e,i){var r=i[Nr];r===void 0&&(r=i[Nr]=new Set);var u=e+"__bubble";r.has(u)||(F0(i,e,2,!1),r.add(u))}function $h(e,i,r){var u=0;i&&(u|=4),F0(r,e,u,i)}var rc="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[rc]){e[rc]=!0,du.forEach(function(r){r!=="selectionchange"&&(BM.has(r)||$h(r,!1,e),$h(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rc]||(i[rc]=!0,$h("selectionchange",!1,i))}}function F0(e,i,r,u){switch(uv(i)){case 2:var h=fE;break;case 8:h=hE;break;default:h=pd}r=h.bind(null,i,r,e),h=void 0,!Mf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function ed(e,i,r,u,h){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var R=u.stateNode.containerInfo;if(R===h)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;R!==null;){if(T=oa(R),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){u=_=T;continue t}R=R.parentNode}}u=u.return}qm(function(){var et=_,ft=yf(r),vt=[];t:{var it=y_.get(e);if(it!==void 0){var rt=xu,$t=e;switch(e){case"keypress":if(gu(r)===0)break t;case"keydown":case"keyup":rt=LS;break;case"focusin":$t="focus",rt=Af;break;case"focusout":$t="blur",rt=Af;break;case"beforeblur":case"afterblur":rt=Af;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=PS;break;case __:case g_:case v_:rt=ES;break;case x_:rt=IS;break;case"scroll":case"scrollend":rt=vS;break;case"wheel":rt=FS;break;case"copy":case"cut":case"paste":rt=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Qm;break;case"toggle":case"beforetoggle":rt=GS}var Yt=(i&4)!==0,Oe=!Yt&&(e==="scroll"||e==="scrollend"),Y=Yt?it!==null?it+"Capture":null:it;Yt=[];for(var k=et,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Y===null||(pt=Bo(k,Y),pt!=null&&Yt.push(yl(k,pt,$))),Oe)break;k=k.return}0<Yt.length&&(it=new rt(it,$t,null,r,ft),vt.push({event:it,listeners:Yt}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&r!==xf&&($t=r.relatedTarget||r.fromElement)&&(oa($t)||$t[Kn]))break t;if((rt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,rt?($t=r.relatedTarget||r.toElement,rt=et,$t=$t?oa($t):null,$t!==null&&(Oe=l($t),Yt=$t.tag,$t!==Oe||Yt!==5&&Yt!==27&&Yt!==6)&&($t=null)):(rt=null,$t=et),rt!==$t)){if(Yt=jm,pt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=Qm,pt="onPointerLeave",Y="onPointerEnter",k="pointer"),Oe=rt==null?it:Pr(rt),$=$t==null?it:Pr($t),it=new Yt(pt,k+"leave",rt,r,ft),it.target=Oe,it.relatedTarget=$,pt=null,oa(ft)===et&&(Yt=new Yt(Y,k+"enter",$t,r,ft),Yt.target=$,Yt.relatedTarget=Oe,pt=Yt),Oe=pt,rt&&$t)e:{for(Yt=rt,Y=$t,k=0,$=Yt;$;$=Qs($))k++;for($=0,pt=Y;pt;pt=Qs(pt))$++;for(;0<k-$;)Yt=Qs(Yt),k--;for(;0<$-k;)Y=Qs(Y),$--;for(;k--;){if(Yt===Y||Y!==null&&Yt===Y.alternate)break e;Yt=Qs(Yt),Y=Qs(Y)}Yt=null}else Yt=null;rt!==null&&H0(vt,it,rt,Yt,!1),$t!==null&&Oe!==null&&H0(vt,Oe,$t,Yt,!0)}}t:{if(it=et?Pr(et):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Bt=r_;else if(i_(it))if(s_)Bt=QS;else{Bt=jS;var fe=ZS}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&vf(et.elementType)&&(Bt=r_):Bt=KS;if(Bt&&(Bt=Bt(e,et))){a_(vt,Bt,r,ft);break t}fe&&fe(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&zn(it,"number",it.value)}switch(fe=et?Pr(et):window,e){case"focusin":(i_(fe)||fe.contentEditable==="true")&&(Rs=fe,Lf=et,qo=null);break;case"focusout":qo=Lf=Rs=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,p_(vt,r,ft);break;case"selectionchange":if($S)break;case"keydown":case"keyup":p_(vt,r,ft)}var Gt;if(wf)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else As?e_(e,r)&&(Kt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Kt="onCompositionStart");Kt&&(Jm&&r.locale!=="ko"&&(As||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&As&&(Gt=Ym()):(Ya=ft,Ef="value"in Ya?Ya.value:Ya.textContent,As=!0)),fe=sc(et,Kt),0<fe.length&&(Kt=new Km(Kt,e,null,r,ft),vt.push({event:Kt,listeners:fe}),Gt?Kt.data=Gt:(Gt=n_(r),Gt!==null&&(Kt.data=Gt)))),(Gt=kS?XS(e,r):WS(e,r))&&(Kt=sc(et,"onBeforeInput"),0<Kt.length&&(fe=new Km("onBeforeInput","beforeinput",null,r,ft),vt.push({event:fe,listeners:Kt}),fe.data=Gt)),PM(vt,e,et,r,ft)}B0(vt,i)})}function yl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function sc(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,_=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=Bo(e,r),h!=null&&u.unshift(yl(e,h,_)),h=Bo(e,i),h!=null&&u.push(yl(e,h,_))),e.tag===3)return u;e=e.return}return[]}function Qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function H0(e,i,r,u,h){for(var _=i._reactName,T=[];r!==null&&r!==u;){var R=r,H=R.alternate,et=R.stateNode;if(R=R.tag,H!==null&&H===u)break;R!==5&&R!==26&&R!==27||et===null||(H=et,h?(et=Bo(r,_),et!=null&&T.unshift(yl(r,et,H))):h||(et=Bo(r,_),et!=null&&T.push(yl(r,et,H)))),r=r.return}T.length!==0&&e.push({event:i,listeners:T})}var FM=/\r\n?/g,HM=/\u0000|\uFFFD/g;function G0(e){return(typeof e=="string"?e:""+e).replace(FM,`
`).replace(HM,"")}function V0(e,i){return i=G0(i),G0(e)===i}function oc(){}function Ne(e,i,r,u,h,_){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Zi(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Zi(e,""+u);break;case"className":Rt(e,"class",u);break;case"tabIndex":Rt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(e,r,u);break;case"style":Xm(e,u,_);break;case"data":if(i!=="object"){Rt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=mu(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(r==="formAction"?(i!=="input"&&Ne(e,i,"name",h.name,h,null),Ne(e,i,"formEncType",h.formEncType,h,null),Ne(e,i,"formMethod",h.formMethod,h,null),Ne(e,i,"formTarget",h.formTarget,h,null)):(Ne(e,i,"encType",h.encType,h,null),Ne(e,i,"method",h.method,h,null),Ne(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=mu(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=oc);break;case"onScroll":u!=null&&pe("scroll",e);break;case"onScrollEnd":u!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=mu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Et(e,"popover",u);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Et(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=_S.get(r)||r,Et(e,r,u))}}function nd(e,i,r,u,h,_){switch(r){case"style":Xm(e,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?Zi(e,u):(typeof u=="number"||typeof u=="bigint")&&Zi(e,""+u);break;case"onScroll":u!=null&&pe("scroll",e);break;case"onScrollEnd":u!=null&&pe("scrollend",e);break;case"onClick":u!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pu.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),_=e[Cn]||null,_=_!=null?_[r]:null,typeof _=="function"&&e.removeEventListener(i,_,h),typeof u=="function")){typeof _!="function"&&_!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):Et(e,r,u)}}}function Nn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var u=!1,h=!1,_;for(_ in r)if(r.hasOwnProperty(_)){var T=r[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ne(e,i,_,T,r,null)}}h&&Ne(e,i,"srcSet",r.srcSet,r,null),u&&Ne(e,i,"src",r.src,r,null);return;case"input":pe("invalid",e);var R=_=T=h=null,H=null,et=null;for(u in r)if(r.hasOwnProperty(u)){var ft=r[u];if(ft!=null)switch(u){case"name":h=ft;break;case"type":T=ft;break;case"checked":H=ft;break;case"defaultChecked":et=ft;break;case"value":_=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:Ne(e,i,u,ft,r,null)}}Fe(e,_,R,H,et,T,h,!1),Je(e);return;case"select":pe("invalid",e),u=T=_=null;for(h in r)if(r.hasOwnProperty(h)&&(R=r[h],R!=null))switch(h){case"value":_=R;break;case"defaultValue":T=R;break;case"multiple":u=R;default:Ne(e,i,h,R,r,null)}i=_,r=T,e.multiple=!!u,i!=null?gn(e,!!u,i,!1):r!=null&&gn(e,!!u,r,!0);return;case"textarea":pe("invalid",e),_=h=u=null;for(T in r)if(r.hasOwnProperty(T)&&(R=r[T],R!=null))switch(T){case"value":u=R;break;case"defaultValue":h=R;break;case"children":_=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Ne(e,i,T,R,r,null)}Dn(e,u,h,_),Je(e);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(u=r[H],u!=null))switch(H){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ne(e,i,H,u,r,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(u=0;u<xl.length;u++)pe(xl[u],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(u=r[et],u!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ne(e,i,et,u,r,null)}return;default:if(vf(i)){for(ft in r)r.hasOwnProperty(ft)&&(u=r[ft],u!==void 0&&nd(e,i,ft,u,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(u=r[R],u!=null&&Ne(e,i,R,u,r,null))}function GM(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,R=null,H=null,et=null,ft=null;for(rt in r){var vt=r[rt];if(r.hasOwnProperty(rt)&&vt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:u.hasOwnProperty(rt)||Ne(e,i,rt,null,u,vt)}}for(var it in u){var rt=u[it];if(vt=r[it],u.hasOwnProperty(it)&&(rt!=null||vt!=null))switch(it){case"type":_=rt;break;case"name":h=rt;break;case"checked":et=rt;break;case"defaultChecked":ft=rt;break;case"value":T=rt;break;case"defaultValue":R=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:rt!==vt&&Ne(e,i,it,rt,u,vt)}}ca(e,T,R,H,et,ft,_,h);return;case"select":rt=T=R=it=null;for(_ in r)if(H=r[_],r.hasOwnProperty(_)&&H!=null)switch(_){case"value":break;case"multiple":rt=H;default:u.hasOwnProperty(_)||Ne(e,i,_,null,u,H)}for(h in u)if(_=u[h],H=r[h],u.hasOwnProperty(h)&&(_!=null||H!=null))switch(h){case"value":it=_;break;case"defaultValue":R=_;break;case"multiple":T=_;default:_!==H&&Ne(e,i,h,_,u,H)}i=R,r=T,u=rt,it!=null?gn(e,!!r,it,!1):!!u!=!!r&&(i!=null?gn(e,!!r,i,!0):gn(e,!!r,r?[]:"",!1));return;case"textarea":rt=it=null;for(R in r)if(h=r[R],r.hasOwnProperty(R)&&h!=null&&!u.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ne(e,i,R,null,u,h)}for(T in u)if(h=u[T],_=r[T],u.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":it=h;break;case"defaultValue":rt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==_&&Ne(e,i,T,h,u,_)}En(e,it,rt);return;case"option":for(var $t in r)if(it=r[$t],r.hasOwnProperty($t)&&it!=null&&!u.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Ne(e,i,$t,null,u,it)}for(H in u)if(it=u[H],rt=r[H],u.hasOwnProperty(H)&&it!==rt&&(it!=null||rt!=null))switch(H){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ne(e,i,H,it,u,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in r)it=r[Yt],r.hasOwnProperty(Yt)&&it!=null&&!u.hasOwnProperty(Yt)&&Ne(e,i,Yt,null,u,it);for(et in u)if(it=u[et],rt=r[et],u.hasOwnProperty(et)&&it!==rt&&(it!=null||rt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Ne(e,i,et,it,u,rt)}return;default:if(vf(i)){for(var Oe in r)it=r[Oe],r.hasOwnProperty(Oe)&&it!==void 0&&!u.hasOwnProperty(Oe)&&nd(e,i,Oe,void 0,u,it);for(ft in u)it=u[ft],rt=r[ft],!u.hasOwnProperty(ft)||it===rt||it===void 0&&rt===void 0||nd(e,i,ft,it,u,rt);return}}for(var Y in r)it=r[Y],r.hasOwnProperty(Y)&&it!=null&&!u.hasOwnProperty(Y)&&Ne(e,i,Y,null,u,it);for(vt in u)it=u[vt],rt=r[vt],!u.hasOwnProperty(vt)||it===rt||it==null&&rt==null||Ne(e,i,vt,it,u,rt)}var id=null,ad=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function rd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sd=null;function VM(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,kM=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,XM=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(e){return q0.resolve(null).then(e).catch(WM)}:W0;function WM(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function Y0(e,i){var r=i,u=0,h=0;do{var _=r.nextSibling;if(e.removeChild(r),_&&_.nodeType===8)if(r=_.data,r==="/$"){if(0<u&&8>u){r=u;var T=e.ownerDocument;if(r&1&&Sl(T.documentElement),r&2&&Sl(T.body),r&4)for(r=T.head,Sl(r),T=r.firstChild;T;){var R=T.nextSibling,H=T.nodeName;T[ka]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||r.removeChild(T),T=R}}if(h===0){e.removeChild(_),Cl(i);return}h--}else r==="$"||r==="$?"||r==="$!"?h++:u=r.charCodeAt(0)-48;else u=0;r=_}while(r);Cl(i)}function od(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":od(r),Xa(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function qM(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[ka])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(_=e.getAttribute("rel"),_==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(_!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(_=e.getAttribute("src"),(_!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===_)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function YM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Fi(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ZM(e,i){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ud=null;function Z0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function j0(e,i,r){switch(i=lc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Sl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Xa(e)}var Ui=new Map,K0=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=X.d;X.d={f:jM,r:KM,D:QM,C:JM,L:$M,m:tE,X:nE,S:eE,M:iE};function jM(){var e=ba.f(),i=tc();return e||i}function KM(e){var i=la(e);i!==null&&i.tag===5&&i.type==="form"?_g(i):ba.r(e)}var Js=typeof document>"u"?null:document;function Q0(e,i,r){var u=Js;if(u&&typeof i=="string"&&i){var h=Xe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),K0.has(h)||(K0.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Nn(i,"link",e),un(i),u.head.appendChild(i)))}}function QM(e){ba.D(e),Q0("dns-prefetch",e,null)}function JM(e,i){ba.C(e,i),Q0("preconnect",e,i)}function $M(e,i,r){ba.L(e,i,r);var u=Js;if(u&&e&&i){var h='link[rel="preload"][as="'+Xe(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Xe(r.imageSizes)+'"]')):h+='[href="'+Xe(e)+'"]';var _=h;switch(i){case"style":_=$s(e);break;case"script":_=to(e)}Ui.has(_)||(e=m({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ui.set(_,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ml(_))||i==="script"&&u.querySelector(El(_))||(i=u.createElement("link"),Nn(i,"link",e),un(i),u.head.appendChild(i)))}}function tE(e,i){ba.m(e,i);var r=Js;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Xe(u)+'"][href="'+Xe(e)+'"]',_=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=to(e)}if(!Ui.has(_)&&(e=m({rel:"modulepreload",href:e},i),Ui.set(_,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(El(_)))return}u=r.createElement("link"),Nn(u,"link",e),un(u),r.head.appendChild(u)}}}function eE(e,i,r){ba.S(e,i,r);var u=Js;if(u&&e){var h=Wa(u).hoistableStyles,_=$s(e);i=i||"default";var T=h.get(_);if(!T){var R={loading:0,preload:null};if(T=u.querySelector(Ml(_)))R.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ui.get(_))&&cd(e,r);var H=T=u.createElement("link");un(H),Nn(H,"link",e),H._p=new Promise(function(et,ft){H.onload=et,H.onerror=ft}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:R},h.set(_,T)}}}function nE(e,i){ba.X(e,i);var r=Js;if(r&&e){var u=Wa(r).hoistableScripts,h=to(e),_=u.get(h);_||(_=r.querySelector(El(h)),_||(e=m({src:e,async:!0},i),(i=Ui.get(h))&&fd(e,i),_=r.createElement("script"),un(_),Nn(_,"link",e),r.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function iE(e,i){ba.M(e,i);var r=Js;if(r&&e){var u=Wa(r).hoistableScripts,h=to(e),_=u.get(h);_||(_=r.querySelector(El(h)),_||(e=m({src:e,async:!0,type:"module"},i),(i=Ui.get(h))&&fd(e,i),_=r.createElement("script"),un(_),Nn(_,"link",e),r.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function J0(e,i,r,u){var h=(h=yt.current)?uc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=$s(r.href),r=Wa(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=$s(r.href);var _=Wa(h).hoistableStyles,T=_.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(e,T),(_=h.querySelector(Ml(e)))&&!_._p&&(T.instance=_,T.state.loading=5),Ui.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ui.set(e,r),_||aE(h,e,r,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=to(r),r=Wa(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $s(e){return'href="'+Xe(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function aE(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Nn(i,"link",r),un(i),e.head.appendChild(i))}function to(e){return'[src="'+Xe(e)+'"]'}function El(e){return"script[async]"+e}function tv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+Xe(r.href)+'"]');if(u)return i.instance=u,un(u),u;var h=m({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),un(u),Nn(u,"style",h),cc(u,r.precedence,e),i.instance=u;case"stylesheet":h=$s(r.href);var _=e.querySelector(Ml(h));if(_)return i.state.loading|=4,i.instance=_,un(_),_;u=$0(r),(h=Ui.get(h))&&cd(u,h),_=(e.ownerDocument||e).createElement("link"),un(_);var T=_;return T._p=new Promise(function(R,H){T.onload=R,T.onerror=H}),Nn(_,"link",u),i.state.loading|=4,cc(_,r.precedence,e),i.instance=_;case"script":return _=to(r.src),(h=e.querySelector(El(_)))?(i.instance=h,un(h),h):(u=r,(h=Ui.get(_))&&(u=m({},r),fd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),un(h),Nn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,cc(u,r.precedence,e));return i.instance}function cc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,_=h,T=0;T<u.length;T++){var R=u[T];if(R.dataset.precedence===i)_=R;else if(_!==h)break}_?_.parentNode.insertBefore(e,_.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fc=null;function ev(e,i,r){if(fc===null){var u=new Map,h=fc=new Map;h.set(r,u)}else h=fc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var _=r[h];if(!(_[ka]||_[_n]||e==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=e+T;var R=u.get(T);R?R.push(_):u.set(T,[_])}}return u}function nv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function rE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function iv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tl=null;function sE(){}function oE(e,i,r){if(Tl===null)throw Error(a(475));var u=Tl;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=$s(r.href),_=e.querySelector(Ml(h));if(_){e=_._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=hc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=_,un(_);return}_=e.ownerDocument||e,r=$0(r),(h=Ui.get(h))&&cd(r,h),_=_.createElement("link"),un(_);var T=_;T._p=new Promise(function(R,H){T.onload=R,T.onerror=H}),Nn(_,"link",r),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=hc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function lE(){if(Tl===null)throw Error(a(475));var e=Tl;return e.stylesheets&&e.count===0&&hd(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&hd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function hd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach(uE,e),dc=null,hc.call(e))}function uE(e,i){if(!(i.state.loading&4)){var r=dc.get(e);if(r)var u=r.get(null);else{r=new Map,dc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),u=T)}u&&r.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),_=r.get(T)||u,_===u&&r.set(null,h),r.set(T,h),this.count++,u=hc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),_?_.parentNode.insertBefore(h,_.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function cE(e,i,r,u,h,_,T,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function av(e,i,r,u,h,_,T,R,H,et,ft,vt){return e=new cE(e,i,r,T,R,H,et,vt),i=1,_===!0&&(i|=24),_=ci(3,null,null,i),e.current=_,_.stateNode=e,i=Yf(),i.refCount++,e.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:r,cache:i},Qf(_),e}function rv(e){return e?(e=Us,e):Us}function sv(e,i,r,u,h,_){h=rv(h),u.context===null?u.context=h:u.pendingContext=h,u=Ka(i),u.payload={element:r},_=_===void 0?null:_,_!==null&&(u.callback=_),r=Qa(e,u,i),r!==null&&(mi(r,e,i),el(r,e,i))}function ov(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function dd(e,i){ov(e,i),(e=e.alternate)&&ov(e,i)}function lv(e){if(e.tag===13){var i=Ds(e,67108864);i!==null&&mi(i,e,67108864),dd(e,67108864)}}var pc=!0;function fE(e,i,r,u){var h=B.T;B.T=null;var _=X.p;try{X.p=2,pd(e,i,r,u)}finally{X.p=_,B.T=h}}function hE(e,i,r,u){var h=B.T;B.T=null;var _=X.p;try{X.p=8,pd(e,i,r,u)}finally{X.p=_,B.T=h}}function pd(e,i,r,u){if(pc){var h=md(u);if(h===null)ed(e,i,u,mc,r),cv(e,u);else if(pE(h,e,i,r,u))u.stopPropagation();else if(cv(e,u),i&4&&-1<dE.indexOf(e)){for(;h!==null;){var _=la(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Ot(_.pendingLanes);if(T!==0){var R=_;for(R.pendingLanes|=2,R.entangledLanes|=2;T;){var H=1<<31-Ft(T);R.entanglements[1]|=H,T&=~H}$i(_),(Re&6)===0&&(Ju=ne()+500,vl(0))}}break;case 13:R=Ds(_,2),R!==null&&mi(R,_,2),tc(),dd(_,2)}if(_=md(u),_===null&&ed(e,i,u,mc,r),_===h)break;h=_}h!==null&&u.stopPropagation()}else ed(e,i,u,null,r)}}function md(e){return e=yf(e),_d(e)}var mc=null;function _d(e){if(mc=null,e=oa(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return mc=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case De:return 2;case Ht:return 8;case z:case w:return 32;case nt:return 268435456;default:return 32}default:return 32}}var gd=!1,cr=null,fr=null,hr=null,Al=new Map,Rl=new Map,dr=[],dE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,i){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function wl(e,i,r,u,h,_){return e===null||e.nativeEvent!==_?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:_,targetContainers:[h]},i!==null&&(i=la(i),i!==null&&lv(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function pE(e,i,r,u,h){switch(i){case"focusin":return cr=wl(cr,e,i,r,u,h),!0;case"dragenter":return fr=wl(fr,e,i,r,u,h),!0;case"mouseover":return hr=wl(hr,e,i,r,u,h),!0;case"pointerover":var _=h.pointerId;return Al.set(_,wl(Al.get(_)||null,e,i,r,u,h)),!0;case"gotpointercapture":return _=h.pointerId,Rl.set(_,wl(Rl.get(_)||null,e,i,r,u,h)),!0}return!1}function fv(e){var i=oa(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,li(e.priority,function(){if(r.tag===13){var u=pi();u=ke(u);var h=Ds(r,u);h!==null&&mi(h,r,u),dd(r,u)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=md(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);xf=u,r.target.dispatchEvent(u),xf=null}else return i=la(r),i!==null&&lv(i),e.blockedOn=r,!1;i.shift()}return!0}function hv(e,i,r){_c(e)&&r.delete(i)}function mE(){gd=!1,cr!==null&&_c(cr)&&(cr=null),fr!==null&&_c(fr)&&(fr=null),hr!==null&&_c(hr)&&(hr=null),Al.forEach(hv),Rl.forEach(hv)}function gc(e,i){e.blockedOn===i&&(e.blockedOn=null,gd||(gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mE)))}var vc=null;function dv(e){vc!==e&&(vc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(_d(u||r)===null)continue;break}var _=la(r);_!==null&&(e.splice(i,3),i-=3,_h(_,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function Cl(e){function i(H){return gc(H,e)}cr!==null&&gc(cr,e),fr!==null&&gc(fr,e),hr!==null&&gc(hr,e),Al.forEach(i),Rl.forEach(i);for(var r=0;r<dr.length;r++){var u=dr[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<dr.length&&(r=dr[0],r.blockedOn===null);)fv(r),r.blockedOn===null&&dr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],_=r[u+1],T=h[Cn]||null;if(typeof _=="function")T||dv(r);else if(T){var R=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[Cn]||null)R=T.formAction;else if(_d(h)!==null)continue}else R=T.action;typeof R=="function"?r[u+1]=R:(r.splice(u,3),u-=3),dv(r)}}}function vd(e){this._internalRoot=e}xc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=pi();sv(r,u,e,i,null,null)},xc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;sv(e.current,2,null,e,null,null),tc(),i[Kn]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Me();e={blockedOn:null,target:e,priority:i};for(var r=0;r<dr.length&&i!==0&&i<dr[r].priority;r++);dr.splice(r,0,e),r===0&&fv(e)}};var pv=t.version;if(pv!=="19.1.0")throw Error(a(527,pv,"19.1.0"));X.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var _E={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{ht=yc.inject(_E),Nt=yc}catch{}}return Ul.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Dg,_=Ug,T=Lg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=av(e,1,!1,null,null,r,u,h,_,T,R,null),e[Kn]=i.current,td(e),new vd(i)},Ul.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",_=Dg,T=Ug,R=Lg,H=null,et=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(_=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(H=r.unstable_transitionCallbacks),r.formState!==void 0&&(et=r.formState)),i=av(e,1,!0,i,r??null,u,h,_,T,R,H,et),i.context=rv(null),r=i.current,u=pi(),u=ke(u),h=Ka(u),h.callback=null,Qa(r,h,u),r=u,i.current.lanes=r,gt(i,r),$i(i),e[Kn]=i.current,td(e),new xc(i)},Ul.version="19.1.0",Ul}var Tv;function RE(){if(Tv)return Sd.exports;Tv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sd.exports=AE(),Sd.exports}var wE=RE();const CE=hm(wE),DE=(o="img")=>new Promise(t=>{typeof imagesLoaded=="function"||typeof window<"u"&&window.imagesLoaded?(window.imagesLoaded||imagesLoaded)(document.querySelectorAll(o),{background:!0},t):(console.warn("imagesLoaded library not found. Images might not be fully loaded."),setTimeout(t,500))}),cp=o=>{const t=o.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}};var Xc={exports:{}},Wc={exports:{}},UE=Wc.exports,bv;function LE(){return bv||(bv=1,function(o){(function(t,n){o.exports?o.exports=n():t.EvEmitter=n()})(typeof window<"u"?window:UE,function(){function t(){}let n=t.prototype;return n.on=function(a,s){if(!a||!s)return this;let l=this._events=this._events||{},c=l[a]=l[a]||[];return c.includes(s)||c.push(s),this},n.once=function(a,s){if(!a||!s)return this;this.on(a,s);let l=this._onceEvents=this._onceEvents||{},c=l[a]=l[a]||{};return c[s]=!0,this},n.off=function(a,s){let l=this._events&&this._events[a];if(!l||!l.length)return this;let c=l.indexOf(s);return c!=-1&&l.splice(c,1),this},n.emitEvent=function(a,s){let l=this._events&&this._events[a];if(!l||!l.length)return this;l=l.slice(0),s=s||[];let c=this._onceEvents&&this._onceEvents[a];for(let f of l)c&&c[f]&&(this.off(a,f),delete c[f]),f.apply(this,s);return this},n.allOff=function(){return delete this._events,delete this._onceEvents,this},t})}(Wc)),Wc.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */var NE=Xc.exports,Av;function OE(){return Av||(Av=1,function(o){(function(t,n){o.exports?o.exports=n(t,LE()):t.imagesLoaded=n(t,t.EvEmitter)})(typeof window<"u"?window:NE,function(n,a){let s=n.jQuery,l=n.console;function c(g){return Array.isArray(g)?g:typeof g=="object"&&typeof g.length=="number"?[...g]:[g]}function f(g,x,E){if(!(this instanceof f))return new f(g,x,E);let M=g;if(typeof g=="string"&&(M=document.querySelectorAll(g)),!M){l.error(`Bad element for imagesLoaded ${M||g}`);return}this.elements=c(M),this.options={},typeof x=="function"?E=x:Object.assign(this.options,x),E&&this.on("always",E),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))}f.prototype=Object.create(a.prototype),f.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const d=[1,9,11];f.prototype.addElementImages=function(g){g.nodeName==="IMG"&&this.addImage(g),this.options.background===!0&&this.addElementBackgroundImages(g);let{nodeType:x}=g;if(!x||!d.includes(x))return;let E=g.querySelectorAll("img");for(let M of E)this.addImage(M);if(typeof this.options.background=="string"){let M=g.querySelectorAll(this.options.background);for(let S of M)this.addElementBackgroundImages(S)}};const p=/url\((['"])?(.*?)\1\)/gi;f.prototype.addElementBackgroundImages=function(g){let x=getComputedStyle(g);if(!x)return;let E=p.exec(x.backgroundImage);for(;E!==null;){let M=E&&E[2];M&&this.addBackground(M,g),E=p.exec(x.backgroundImage)}},f.prototype.addImage=function(g){let x=new m(g);this.images.push(x)},f.prototype.addBackground=function(g,x){let E=new v(g,x);this.images.push(E)},f.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let g=(x,E,M)=>{setTimeout(()=>{this.progress(x,E,M)})};this.images.forEach(function(x){x.once("progress",g),x.check()})},f.prototype.progress=function(g,x,E){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!g.isLoaded,this.emitEvent("progress",[this,g,x]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,g),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&l&&l.log(`progress: ${E}`,g,x)},f.prototype.complete=function(){let g=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(g,[this]),this.emitEvent("always",[this]),this.jqDeferred){let x=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[x](this)}};function m(g){this.img=g}m.prototype=Object.create(a.prototype),m.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},m.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},m.prototype.confirm=function(g,x){this.isLoaded=g;let{parentNode:E}=this.img,M=E.nodeName==="PICTURE"?E:this.img;this.emitEvent("progress",[this,M,x])},m.prototype.handleEvent=function(g){let x="on"+g.type;this[x]&&this[x](g)},m.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},m.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},m.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function v(g,x){this.url=g,this.element=x,this.img=new Image}return v.prototype=Object.create(m.prototype),v.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},v.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},v.prototype.confirm=function(g,x){this.isLoaded=g,this.emitEvent("progress",[this,this.element,x])},f.makeJQueryPlugin=function(g){g=g||n.jQuery,g&&(s=g,s.fn.imagesLoaded=function(x,E){return new f(this,x,E).jqDeferred.promise(s(this))})},f.makeJQueryPlugin(),f})}(Xc)),Xc.exports}var PE=OE();const zE=hm(PE),IE=()=>ee.jsxs("header",{className:"frame flex justify-between pointer-events-none text-[18px] font-medium",children:[ee.jsx("h1",{className:"frame__title m-0 font-medium text-inherit pointer-events-auto",children:"Repeating Image Transition"}),ee.jsxs("nav",{className:"frame__links flex gap-2 items-start pointer-events-auto",children:[ee.jsx("a",{className:"line",href:"https://tympanus.net/codrops/?p=92571",children:"More info,"}),ee.jsx("a",{className:"line",href:"https://github.com/codrops/RepeatingImageTransition/",children:"Code,"}),ee.jsx("a",{className:"line",href:"https://tympanus.net/codrops/demos/",children:"All demos"})]}),ee.jsxs("nav",{className:"frame__tags flex gap-2 items-start pointer-events-auto",children:[ee.jsx("a",{className:"line",href:"https://tympanus.net/codrops/demos/?tag=page-transition",children:"page-transition,"}),ee.jsx("a",{className:"line",href:"https://tympanus.net/codrops/demos/?tag=repetition",children:"repetition,"}),ee.jsx("a",{className:"line",href:"https://tympanus.net/codrops/demos/?tag=grid",children:"grid"})]})]});function La(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Gx(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},pm,On,Ye,aa=1e8,kn=1/aa,fp=Math.PI*2,BE=fp/4,FE=0,Vx=Math.sqrt,HE=Math.cos,GE=Math.sin,wn=function(t){return typeof t=="string"},nn=function(t){return typeof t=="function"},Ba=function(t){return typeof t=="number"},mm=function(t){return typeof t>"u"},sa=function(t){return typeof t=="object"},ni=function(t){return t!==!1},_m=function(){return typeof window<"u"},Sc=function(t){return nn(t)||wn(t)},kx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,hp=/(?:-?\.?\d|\.)+/gi,Xx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wx=/[+-]=-?[.\d]+/,qx=/[^,'"\[\]\s]+/gi,VE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,ta,dp,gm,Ei={},nf={},Yx,Zx=function(t){return(nf=Ao(t,Ei))&&oi},vm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Wl=function(t,n){return!n&&console.warn(t)},jx=function(t,n){return t&&(Ei[t]=n)&&nf&&(nf[t]=n)||Ei},ql=function(){return 0},kE={suppressEvents:!0,isStart:!0,kill:!1},qc={suppressEvents:!0,kill:!1},XE={suppressEvents:!0},xm={},br=[],pp={},Kx,vi={},Ad={},Rv=30,Yc=[],ym="",Sm=function(t){var n=t[0],a,s;if(sa(n)||nn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Yc.length;s--&&!Yc[s].targetTest(n););a=Yc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new yy(t[s],a)))||t.splice(s,1);return t},ps=function(t){return t._gsap||Sm(Pi(t))[0]._gsap},Qx=function(t,n,a){return(a=t[n])&&nn(a)?t[n]():mm(a)&&t.getAttribute&&t.getAttribute(n)||a},ii=function(t,n){return(t=t.split(",")).forEach(n)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},pn=function(t){return Math.round(t*1e7)/1e7||0},yo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},WE=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},af=function(){var t=br.length,n=br.slice(0),a,s;for(pp={},br.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Mm=function(t){return!!(t._initted||t._startAt||t.add)},Jx=function(t,n,a,s){br.length&&!On&&af(),t.render(n,a,!!(On&&n<0&&Mm(t))),br.length&&!On&&af()},$x=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(qx).length<2?n:wn(t)?t.trim():t},ty=function(t){return t},Ti=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},qE=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Ao=function(t,n){for(var a in n)t[a]=n[a];return t},wv=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=sa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},rf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Gl=function(t){var n=t.parent||Ke,a=t.keyframes?qE(Xn(t.keyframes)):Ti;if(ni(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},YE=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},ey=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},hf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Cr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ms=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},ZE=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},mp=function(t,n,a,s){return t._startAt&&(On?t._startAt.revert(qc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},jE=function o(t){return!t||t._ts&&o(t.parent)},Cv=function(t){return t._repeat?Ro(t._tTime,t=t.duration()+t._rDelay)*t:0},Ro=function(t,n){var a=Math.floor(t=pn(t/n));return t&&a===t?a-1:a},sf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},df=function(t){return t._end=pn(t._start+(t._tDur/Math.abs(t._ts||t._rts||kn)||0))},pf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=pn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),df(t),a._dirty||ms(a,t)),t},ny=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=sf(t.rawTime(),n),(!n._dur||au(0,n.totalDuration(),a)-n._tTime>kn)&&n.render(a,!0)),ms(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-1e-8}},na=function(t,n,a,s){return n.parent&&Cr(n),n._start=pn((Ba(a)?a:a||t!==Ke?Ni(t,a,n):t._time)+n._delay),n._end=pn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ey(t,n,"_first","_last",t._sort?"_start":0),_p(n)||(t._recent=n),s||ny(t,n),t._ts<0&&pf(t,t._tTime),t},iy=function(t,n){return(Ei.ScrollTrigger||vm("scrollTrigger",n))&&Ei.ScrollTrigger.create(n,t)},ay=function(t,n,a,s,l){if(Tm(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kx!==xi.frame)return br.push(t),t._lazy=[l,s],1},KE=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},_p=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},QE=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&KE(t)&&!(!t._initted&&_p(t))||(t._ts<0||t._dp._ts<0)&&!_p(t))?0:1,f=t._rDelay,d=0,p,m,v;if(f&&t._repeat&&(d=au(0,t._tDur,n),m=Ro(d,f),t._yoyo&&m&1&&(c=1-c),m!==Ro(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||On||s||t._zTime===kn||!n&&t._zTime){if(!t._initted&&ay(t,n,s,a,d))return;for(v=t._zTime,t._zTime=n||(a?kn:0),a||(a=n&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;n<0&&mp(t,n,a,!0),t._onUpdate&&!a&&yi(t,"onUpdate"),d&&t._repeat&&!a&&t.parent&&yi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Cr(t,1),!a&&!On&&(yi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},JE=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},wo=function(t,n,a,s){var l=t._repeat,c=pn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:pn(c*(l+1)+t._rDelay*l):c,f>0&&!s&&pf(t,t._tTime=t._tDur*f),t.parent&&df(t),a||ms(t.parent,t),t},Dv=function(t){return t instanceof Zn?ms(t):wo(t,t._dur)},$E={_start:0,endTime:ql,totalDuration:ql},Ni=function o(t,n,a){var s=t.labels,l=t._recent||$E,c=t.duration()>=aa?l.endTime(!1):t._dur,f,d,p;return wn(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),p=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(p?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),p&&a&&(d=d/100*(Xn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+d:c+d)):n==null?c:+n},Vl=function(t,n,a){var s=Ba(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,d;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,d=a;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ni(d.vars.inherit)&&d.parent;c.immediateRender=ni(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new dn(n[0],c,n[l+1])},Lr=function(t,n){return t||t===0?n(t):n},au=function(t,n,a){return a<t?t:a>n?n:a},Vn=function(t,n){return!wn(t)||!(n=VE.exec(t))?"":n[1]},tT=function(t,n,a){return Lr(a,function(s){return au(t,n,s)})},gp=[].slice,ry=function(t,n){return t&&sa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&sa(t[0]))&&!t.nodeType&&t!==ta},eT=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return wn(s)&&!n||ry(s,1)?(l=a).push.apply(l,Pi(s)):a.push(s)})||a},Pi=function(t,n,a){return Ye&&!n&&Ye.selector?Ye.selector(t):wn(t)&&!a&&(dp||!Co())?gp.call((n||gm).querySelectorAll(t),0):Xn(t)?eT(t,a):ry(t)?gp.call(t,0):t?[t]:[]},vp=function(t){return t=Pi(t)[0]||Wl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Pi(n,a.querySelectorAll?a:a===t?Wl("Invalid scope")||gm.createElement("div"):t)}},sy=function(t){return t.sort(function(){return .5-Math.random()})},oy=function(t){if(nn(t))return t;var n=sa(t)?t:{each:t},a=_s(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,p=n.axis,m=s,v=s;return wn(s)?m=v={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(m=s[0],v=s[1]),function(g,x,E){var M=(E||n).length,S=c[M],y,L,U,A,N,I,O,F,b;if(!S){if(b=n.grid==="auto"?0:(n.grid||[1,aa])[1],!b){for(O=-1e8;O<(O=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],y=d?Math.min(b,M)*m-.5:s%b,L=b===aa?0:d?M*v/b-.5:s/b|0,O=0,F=aa,I=0;I<M;I++)U=I%b-y,A=L-(I/b|0),S[I]=N=p?Math.abs(p==="y"?A:U):Vx(U*U+A*A),N>O&&(O=N),N<F&&(F=N);s==="random"&&sy(S),S.max=O-F,S.min=F,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Vn(n.amount||n.each)||0,a=a&&M<0?gy(a):a}return M=(S[g]-S.min)/S.max||0,pn(S.b+(a?a(M):M)*S.v)+S.u}},xp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=pn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ba(a)?0:Vn(a))}},ly=function(t,n){var a=Xn(t),s,l;return!a&&sa(t)&&(s=a=t.radius||aa,t.values?(t=Pi(t.values),(l=!Ba(t[0]))&&(s*=s)):t=xp(t.increment)),Lr(n,a?nn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=aa,m=0,v=t.length,g,x;v--;)l?(g=t[v].x-f,x=t[v].y-d,g=g*g+x*x):g=Math.abs(t[v]-f),g<p&&(p=g,m=v);return m=!s||p<=s?t[m]:c,l||m===c||Ba(c)?m:m+Vn(c)}:xp(t))},uy=function(t,n,a,s){return Lr(Xn(t)?!n:a===!0?!!(a=0):!s,function(){return Xn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},nT=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},iT=function(t,n){return function(a){return t(parseFloat(a))+(n||Vn(a))}},aT=function(t,n,a){return fy(t,n,0,1,a)},cy=function(t,n,a){return Lr(a,function(s){return t[~~n(s)]})},rT=function o(t,n,a){var s=n-t;return Xn(t)?cy(t,o(0,t.length),n):Lr(a,function(l){return(s+(l-t)%s)%s+t})},sT=function o(t,n,a){var s=n-t,l=s*2;return Xn(t)?cy(t,o(0,t.length-1),n):Lr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},Yl=function(t){for(var n=0,a="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?qx:hp),a+=t.substr(n,s-n)+uy(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},fy=function(t,n,a,s,l){var c=n-t,f=s-a;return Lr(l,function(d){return a+((d-t)/c*f||0)})},oT=function o(t,n,a,s){var l=isNaN(t+n)?0:function(x){return(1-x)*t+x*n};if(!l){var c=wn(t),f={},d,p,m,v,g;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Xn(t)&&!Xn(n)){for(m=[],v=t.length,g=v-2,p=1;p<v;p++)m.push(o(t[p-1],t[p]));v--,l=function(E){E*=v;var M=Math.min(g,~~E);return m[M](E-M)},a=n}else s||(t=Ao(Xn(t)?[]:{},t));if(!m){for(d in n)Em.call(f,t,d,"get",n[d]);l=function(E){return Rm(E,f)||(c?t.p:t)}}}return Lr(a,l)},Uv=function(t,n,a){var s=t.labels,l=aa,c,f,d;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},yi=function(t,n,a){var s=t.vars,l=s[n],c=Ye,f=t._ctx,d,p,m;if(l)return d=s[n+"Params"],p=s.callbackScope||t,a&&br.length&&af(),f&&(Ye=f),m=d?l.apply(p,d):l.call(p),Ye=c,m},Bl=function(t){return Cr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&yi(t,"onInterrupt"),t},vo,hy=[],dy=function(t){if(t)if(t=!t.name&&t.default||t,_m()||t.headless){var n=t.name,a=nn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:ql,render:Rm,add:Em,kill:ET,modifier:MT,rawVars:0},c={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if(Co(),t!==s){if(vi[n])return;Ti(s,Ti(rf(t,l),c)),Ao(s.prototype,Ao(l,rf(t,c))),vi[s.prop=n]=s,t.targetTest&&(Yc.push(s),xm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}jx(n,s),t.register&&t.register(oi,s,ai)}else hy.push(t)},Ge=255,Fl={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},Rd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Ge+.5|0},py=function(t,n,a){var s=t?Ba(t)?[t>>16,t>>8&Ge,t&Ge]:0:Fl.black,l,c,f,d,p,m,v,g,x,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fl[t])s=Fl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ge,s&Ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ge,t&Ge]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(hp),!n)d=+s[0]%360/360,p=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(p+1):m+p-m*p,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=Rd(d+1/3,l,c),s[1]=Rd(d,l,c),s[2]=Rd(d-1/3,l,c);else if(~t.indexOf("="))return s=t.match(Xx),a&&s.length<4&&(s[3]=1),s}else s=t.match(hp)||Fl.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/Ge,c=s[1]/Ge,f=s[2]/Ge,v=Math.max(l,c,f),g=Math.min(l,c,f),m=(v+g)/2,v===g?d=p=0:(x=v-g,p=m>.5?x/(2-v-g):x/(v+g),d=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(m*100+.5)),a&&s.length<4&&(s[3]=1),s},my=function(t){var n=[],a=[],s=-1;return t.split(Ar).forEach(function(l){var c=l.match(go)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},Lv=function(t,n,a){var s="",l=(t+s).match(Ar),c=n?"hsla(":"rgba(",f=0,d,p,m,v;if(!l)return t;if(l=l.map(function(g){return(g=py(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(m=my(t),d=a.c,d.join(s)!==m.c.join(s)))for(p=t.replace(Ar,"1").split(go),v=p.length-1;f<v;f++)s+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!p)for(p=t.split(Ar),v=p.length-1;f<v;f++)s+=p[f]+l[f];return s+p[v]},Ar=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fl)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),lT=/hsl[a]?\(/,_y=function(t){var n=t.join(" "),a;if(Ar.lastIndex=0,Ar.test(n))return a=lT.test(n),t[1]=Lv(t[1],a),t[0]=Lv(t[0],a,my(t[1])),!0},Zl,xi=function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],d,p,m,v,g,x,E=function M(S){var y=o()-s,L=S===!0,U,A,N,I;if((y>t||y<0)&&(a+=y-n),s+=y,N=s-a,U=N-c,(U>0||L)&&(I=++v.frame,g=N-v.time*1e3,v.time=N=N/1e3,c+=U+(U>=l?4:l-U),A=1),L||(d=p(M)),A)for(x=0;x<f.length;x++)f[x](N,g,I,S)};return v={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){Yx&&(!dp&&_m()&&(ta=dp=window,gm=ta.document||{},Ei.gsap=oi,(ta.gsapVersions||(ta.gsapVersions=[])).push(oi.version),Zx(nf||ta.GreenSockGlobals||!ta.gsap&&ta||{}),hy.forEach(dy)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),p=m||function(S){return setTimeout(S,c-v.time*1e3+1|0)},Zl=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),Zl=0,p=ql},lagSmoothing:function(S,y){t=S||1/0,n=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),c=v.time*1e3+l},add:function(S,y,L){var U=y?function(A,N,I,O){S(A,N,I,O),v.remove(U)}:S;return v.remove(S),f[L?"unshift":"push"](U),Co(),U},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},v}(),Co=function(){return!Zl&&xi.wake()},xe={},uT=/^[\d.\-M][\d.\-,\s]/,cT=/["']/g,fT=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,d,p;l<c;l++)d=a[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),n[s]=isNaN(p)?p.replace(cT,"").trim():+p,s=d.substr(f+1).trim();return n},hT=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},dT=function(t){var n=(t+"").split("("),a=xe[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[fT(n[1])]:hT(t).split(",").map($x)):xe._CE&&uT.test(t)?xe._CE("",t):a},gy=function(t){return function(n){return 1-t(1-n)}},vy=function o(t,n){for(var a=t._first,s;a;)a instanceof Zn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},_s=function(t,n){return t&&(nn(t)?t:xe[t]||dT(t))||n},Ms=function(t,n,a,s){a===void 0&&(a=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return ii(t,function(f){xe[f]=Ei[f]=l,xe[c=f.toLowerCase()]=a;for(var d in l)xe[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=xe[f+"."+d]=l[d]}),l},xy=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},wd=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/fp*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*GE((m-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:xy(f);return l=fp/l,d.config=function(p,m){return o(t,p,m)},d},Cd=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:xy(a);return s.config=function(l){return o(t,l)},s};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ms(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Ms("Elastic",wd("in"),wd("out"),wd());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ms("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ms("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ms("Circ",function(o){return-(Vx(1-o*o)-1)});Ms("Sine",function(o){return o===1?1:-HE(o*BE)+1});Ms("Back",Cd("in"),Cd("out"),Cd());xe.SteppedEase=xe.steps=Ei.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-kn;return function(f){return((s*au(0,c,f)|0)+l)*a}}};bo.ease=xe["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ym+=o+","+o+"Params,"});var yy=function(t,n){this.id=FE++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Qx,this.set=n?n.getSetter:Am},jl=function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,wo(this,+n.duration,1,1),this.data=n.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),Zl||xi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,wo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Co(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(pf(this,a),!l._dp||l.parent||ny(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&na(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===kn||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Jx(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Cv(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Cv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Ro(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?sf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(au(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),df(this),ZE(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kn&&(this._tTime-=kn)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&na(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ni(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=XE);var s=On;return On=a,Mm(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Dv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Dv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ni(this,a),ni(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ni(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-kn)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(l){var c=nn(a)?a:ty,f=function(){var p=s.then;s.then=null,nn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),l(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Bl(this)},o}();Ti(jl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Zn=function(o){Gx(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ni(a.sortChildren),Ke&&na(a.parent||Ke,La(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&iy(La(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return Vl(0,arguments,this),this},n.from=function(s,l,c){return Vl(1,arguments,this),this},n.fromTo=function(s,l,c,f){return Vl(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,Gl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new dn(s,l,Ni(this,c),1),this},n.call=function(s,l,c){return na(this,dn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,d,p,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=m,c.parent=this,new dn(s,c,Ni(this,d)),this},n.staggerFrom=function(s,l,c,f,d,p,m){return c.runBackwards=1,Gl(c).immediateRender=ni(c.immediateRender),this.staggerTo(s,l,c,f,d,p,m)},n.staggerFromTo=function(s,l,c,f,d,p,m,v){return f.startAt=c,Gl(f).immediateRender=ni(f.immediateRender),this.staggerTo(s,l,f,d,p,m,v)},n.render=function(s,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=s<=0?0:pn(s),v=this._zTime<0!=s<0&&(this._initted||!p),g,x,E,M,S,y,L,U,A,N,I,O;if(this!==Ke&&m>d&&s>=0&&(m=d),m!==this._tTime||c||v){if(f!==this._time&&p&&(m+=this._time-f,s+=this._time-f),g=m,A=this._start,U=this._ts,y=!U,v&&(p||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(I=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(g=pn(m%S),m===d?(M=this._repeat,g=p):(N=pn(m/S),M=~~N,M&&M===N&&(g=p,M--),g>p&&(g=p)),N=Ro(this._tTime,S),!f&&this._tTime&&N!==M&&this._tTime-N*S-this._dur<=0&&(N=M),I&&M&1&&(g=p-g,O=1),M!==N&&!this._lock){var F=I&&N&1,b=F===(I&&M&1);if(M<N&&(F=!F),f=F?0:m%p?p:m,this._lock=1,this.render(f||(O?0:pn(M*S)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=F?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;vy(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=JE(this,pn(f),pn(g)),L&&(m-=g-(g=L._start))),this._tTime=m,this._time=g,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!N&&(yi(this,"onStart"),this._tTime!==m))return this;if(g>=f&&s>=0)for(x=this._first;x;){if(E=x._next,(x._act||g>=x._start)&&x._ts&&L!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,l,c),g!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=-1e-8);break}}x=E}else{x=this._last;for(var C=s<0?s:g;x;){if(E=x._prev,(x._act||C<=x._end)&&x._ts&&L!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(C-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(C-x._start)*x._ts,l,c||On&&Mm(x)),g!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=C?-1e-8:kn);break}}x=E}}if(L&&!l&&(this.pause(),L.render(g>=f?0:-1e-8)._zTime=g>=f?1:-1,this._ts))return this._start=A,df(this),this.render(s,l,c);this._onUpdate&&!l&&yi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(A===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Cr(this,1),!l&&!(s<0&&!f)&&(m||f||!d)&&(yi(this,m===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Ba(l)||(l=Ni(this,l,s)),!(s instanceof jl)){if(Xn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(wn(s))return this.addLabel(s,l);if(nn(s))s=dn.delayedCall(0,s);else return this}return this!==s?na(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof dn?l&&d.push(p):(c&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return wn(s)?this.removeLabel(s):nn(s)?this.killTweensOf(s):(s.parent===this&&hf(this,s),s===this._recent&&(this._recent=this._last),ms(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(xi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Ni(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=dn.delayedCall(0,l||ql,c);return f.data="isPause",this._hasPause=1,na(this,f,Ni(this,s))},n.removePause=function(s){var l=this._first;for(s=Ni(this,s);l;)l._start===s&&l.data==="isPause"&&Cr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)Mr!==f[d]&&f[d].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Pi(s),d=this._first,p=Ba(l),m;d;)d instanceof dn?WE(d._targets,f)&&(p?(!Mr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Ni(c,s),d=l,p=d.startAt,m=d.onStart,v=d.onStartParams,g=d.immediateRender,x,E=dn.to(c,Ti({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||kn,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==S&&wo(E,S,0,1).render(E._time,!0,!0),x=1}m&&m.apply(E,v||[])}},l));return g?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Ti({startAt:{time:Ni(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),Uv(this,Ni(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),Uv(this,Ni(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+kn)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=s);return ms(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ms(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,d=aa,p,m,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(v=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,na(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;wo(c,c===Ke&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Ke._ts&&(Jx(Ke,sf(s,Ke)),Kx=xi.frame),xi.frame>=Rv){Rv+=Si.autoSleep||120;var l=Ke._first;if((!l||!l._ts)&&Si.autoSleep&&xi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||xi.sleep()}}},t}(jl);Ti(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pT=function(t,n,a,s,l,c,f){var d=new ai(this._pt,t,n,0,1,Ay,null,l),p=0,m=0,v,g,x,E,M,S,y,L;for(d.b=a,d.e=s,a+="",s+="",(y=~s.indexOf("random("))&&(s=Yl(s)),c&&(L=[a,s],c(L,t,n),a=L[0],s=L[1]),g=a.match(bd)||[];v=bd.exec(s);)E=v[0],M=s.substring(p,v.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==g[m++]&&(S=parseFloat(g[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?yo(S,E)-S:parseFloat(E)-S,m:x&&x<4?Math.round:0},p=bd.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=f,(Wx.test(s)||y)&&(d.e=0),this._pt=d,d},Em=function(t,n,a,s,l,c,f,d,p,m){nn(s)&&(s=s(l||0,t,c));var v=t[n],g=a!=="get"?a:nn(v)?p?t[n.indexOf("set")||!nn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](p):t[n]():v,x=nn(v)?p?xT:Ty:bm,E;if(wn(s)&&(~s.indexOf("random(")&&(s=Yl(s)),s.charAt(1)==="="&&(E=yo(g,s)+(Vn(g)||0),(E||E===0)&&(s=E))),!m||g!==s||yp)return!isNaN(g*s)&&s!==""?(E=new ai(this._pt,t,n,+g||0,s-(g||0),typeof v=="boolean"?ST:by,0,x),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!v&&!(n in t)&&vm(n,s),pT.call(this,t,n,g,s,x,d||Si.stringFilter,p))},mT=function(t,n,a,s,l){if(nn(t)&&(t=kl(t,l,n,a,s)),!sa(t)||t.style&&t.nodeType||Xn(t)||kx(t))return wn(t)?kl(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=kl(t[f],l,n,a,s);return c},Sy=function(t,n,a,s,l,c){var f,d,p,m;if(vi[t]&&(f=new vi[t]).init(l,f.rawVars?n[t]:mT(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=d=new ai(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==vo))for(p=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=d;return f},Mr,yp,Tm=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,p=s.onUpdate,m=s.runBackwards,v=s.yoyoEase,g=s.keyframes,x=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,y=t.parent,L=y&&y.data==="nested"?y.vars.targets:S,U=t._overwrite==="auto"&&!pm,A=t.timeline,N,I,O,F,b,C,G,J,Q,at,ot,B,X;if(A&&(!g||!l)&&(l="none"),t._ease=_s(l,bo.ease),t._yEase=v?gy(_s(v===!0?l:v,bo.ease)):0,v&&t._yoyo&&!t._repeat&&(v=t._yEase,t._yEase=t._ease,t._ease=v),t._from=!A&&!!s.runBackwards,!A||g&&!s.stagger){if(J=S[0]?ps(S[0]).harness:0,B=J&&s[J.prop],N=rf(s,xm),M&&(M._zTime<0&&M.progress(1),n<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&E?qc:kE),M._lazy=0),c){if(Cr(t._startAt=dn.set(S,Ti({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&ni(d),startAt:null,delay:0,onUpdate:p&&function(){return yi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On||!f&&!x)&&t._startAt.revert(qc),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(m&&E&&!M){if(n&&(f=!1),O=Ti({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ni(d),immediateRender:f,stagger:0,parent:y},N),B&&(O[J.prop]=B),Cr(t._startAt=dn.set(S,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On?t._startAt.revert(qc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,kn,kn);else if(!n)return}for(t._pt=t._ptCache=0,d=E&&ni(d)||d&&!E,I=0;I<S.length;I++){if(b=S[I],G=b._gsap||Sm(S)[I]._gsap,t._ptLookup[I]=at={},pp[G.id]&&br.length&&af(),ot=L===S?I:L.indexOf(b),J&&(Q=new J).init(b,B||N,t,ot,L)!==!1&&(t._pt=F=new ai(t._pt,b,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(W){at[W]=F}),Q.priority&&(C=1)),!J||B)for(O in N)vi[O]&&(Q=Sy(O,N,t,ot,b,L))?Q.priority&&(C=1):at[O]=F=Em.call(t,b,O,"get",N[O],ot,L,0,s.stringFilter);t._op&&t._op[I]&&t.kill(b,t._op[I]),U&&t._pt&&(Mr=t,Ke.killTweensOf(b,at,t.globalTime(n)),X=!t.parent,Mr=0),t._pt&&d&&(pp[G.id]=1)}C&&Ry(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!X,g&&n<=0&&A.render(aa,!0,!0)},_T=function(t,n,a,s,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[n],m,v,g,x;if(!p)for(p=t._ptCache[n]=[],g=t._ptLookup,x=t._targets.length;x--;){if(m=g[x][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return yp=1,t.vars[n]="+=0",Tm(t,f),yp=0,d?Wl(n+" not eligible for reset"):1;p.push(m)}for(x=p.length;x--;)v=p[x],m=v._pt||v,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=a-m.s,v.e&&(v.e=sn(a)+Vn(v.e)),v.b&&(v.b=m.s+Vn(v.b))},gT=function(t,n){var a=t[0]?ps(t[0]).harness:0,s=a&&a.aliases,l,c,f,d;if(!s)return n;l=Ao({},n);for(c in s)if(c in l)for(d=s[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},vT=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Xn(n))f=a[t]||(a[t]=[]),n.forEach(function(d,p){return f.push({t:p/(n.length-1)*100,v:d,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},kl=function(t,n,a,s,l){return nn(t)?t.call(n,a,s,l):wn(t)&&~t.indexOf("random(")?Yl(t):t},My=ym+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ey={};ii(My+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ey[o]=1});var dn=function(o){Gx(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:Gl(s))||this;var d=f.vars,p=d.duration,m=d.delay,v=d.immediateRender,g=d.stagger,x=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,y=d.yoyoEase,L=s.parent||Ke,U=(Xn(a)||kx(a)?Ba(a[0]):"length"in s)?[a]:Pi(a),A,N,I,O,F,b,C,G;if(f._targets=U.length?Sm(U):Wl("GSAP target "+a+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||g||Sc(p)||Sc(m)){if(s=f.vars,A=f.timeline=new Zn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:U}),A.kill(),A.parent=A._dp=La(f),A._start=0,g||Sc(p)||Sc(m)){if(O=U.length,C=g&&oy(g),sa(g))for(F in g)~My.indexOf(F)&&(G||(G={}),G[F]=g[F]);for(N=0;N<O;N++)I=rf(s,Ey),I.stagger=0,y&&(I.yoyoEase=y),G&&Ao(I,G),b=U[N],I.duration=+kl(p,La(f),N,b,U),I.delay=(+kl(m,La(f),N,b,U)||0)-f._delay,!g&&O===1&&I.delay&&(f._delay=m=I.delay,f._start+=m,I.delay=0),A.to(b,I,C?C(N,b,U):0),A._ease=xe.none;A.duration()?p=m=0:f.timeline=0}else if(E){Gl(Ti(A.vars.defaults,{ease:"none"})),A._ease=_s(E.ease||s.ease||"none");var J=0,Q,at,ot;if(Xn(E))E.forEach(function(B){return A.to(U,B,">")}),A.duration();else{I={};for(F in E)F==="ease"||F==="easeEach"||vT(F,E[F],I,E.easeEach);for(F in I)for(Q=I[F].sort(function(B,X){return B.t-X.t}),J=0,N=0;N<Q.length;N++)at=Q[N],ot={ease:at.e,duration:(at.t-(N?Q[N-1].t:0))/100*p},ot[F]=at.v,A.to(U,ot,J),J+=ot.duration;A.duration()<p&&A.to({},{duration:p-A.duration()})}}p||f.duration(p=A.duration())}else f.timeline=0;return x===!0&&!pm&&(Mr=La(f),Ke.killTweensOf(U),Mr=0),na(L,La(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!p&&!E&&f._start===pn(L._time)&&ni(v)&&jE(La(f))&&L.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),S&&iy(La(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,d=this._tDur,p=this._dur,m=s<0,v=s>d-kn&&!m?d:s<kn?0:s,g,x,E,M,S,y,L,U,A;if(!p)QE(this,s,l,c);else if(v!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(g=v,U=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(g=pn(v%M),v===d?(E=this._repeat,g=p):(S=pn(v/M),E=~~S,E&&E===S?(g=p,E--):g>p&&(g=p)),y=this._yoyo&&E&1,y&&(A=this._yEase,g=p-g),S=Ro(this._tTime,M),g===f&&!c&&this._initted&&E===S)return this._tTime=v,this;E!==S&&(U&&this._yEase&&vy(U,y),this.vars.repeatRefresh&&!y&&!this._lock&&g!==M&&this._initted&&(this._lock=c=1,this.render(pn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(ay(this,m?s:g,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(p!==this._dur)return this.render(s,l,c)}if(this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(A||this._ease)(g/p),this._from&&(this.ratio=L=1-L),!f&&v&&!l&&!S&&(yi(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(L,x.d),x=x._next;U&&U.render(s<0?s:U._dur*U._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&mp(this,s,l,c),yi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&yi(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(m&&!this._onUpdate&&mp(this,s,!0,!0),(s||!p)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Cr(this,1),!l&&!(m&&!f)&&(v||f||y)&&(yi(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,d){Zl||xi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Tm(this,p),m=this._ease(p/this._dur),_T(this,s,l,c,f,m,p,d)?this.resetTo(s,l,c,f,1):(pf(this,0),this.parent||ey(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Bl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Mr&&Mr.vars.overwrite!==!0)._first||Bl(this),this.parent&&c!==this.timeline.totalDuration()&&wo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?Pi(s):f,p=this._ptLookup,m=this._pt,v,g,x,E,M,S,y;if((!l||l==="all")&&YE(f,d))return l==="all"&&(this._pt=0),Bl(this);for(v=this._op=this._op||[],l!=="all"&&(wn(l)&&(M={},ii(l,function(L){return M[L]=1}),l=M),l=gT(f,l)),y=f.length;y--;)if(~d.indexOf(f[y])){g=p[y],l==="all"?(v[y]=l,E=g,x={}):(x=v[y]=v[y]||{},E=l);for(M in E)S=g&&g[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&hf(this,S,"_pt"),delete g[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&Bl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return Vl(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return Vl(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Ke.killTweensOf(s,l,c)},t}(jl);Ti(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(o){dn[o]=function(){var t=new Zn,n=gp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var bm=function(t,n,a){return t[n]=a},Ty=function(t,n,a){return t[n](a)},xT=function(t,n,a,s){return t[n](s.fp,a)},yT=function(t,n,a){return t.setAttribute(n,a)},Am=function(t,n){return nn(t[n])?Ty:mm(t[n])&&t.setAttribute?yT:bm},by=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},ST=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Ay=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Rm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},MT=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},ET=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?hf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},TT=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},Ry=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},ai=function(){function o(n,a,s,l,c,f,d,p,m){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||by,this.d=d||this,this.set=p||bm,this.pr=m||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=TT,this.m=a,this.mt=l,this.tween=s},o}();ii(ym+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return xm[o]=1});Ei.TweenMax=Ei.TweenLite=dn;Ei.TimelineLite=Ei.TimelineMax=Zn;Ke=new Zn({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=_y;var gs=[],Zc={},bT=[],Nv=0,AT=0,Dd=function(t){return(Zc[t]||bT).map(function(n){return n()})},Sp=function(){var t=Date.now(),n=[];t-Nv>2&&(Dd("matchMediaInit"),gs.forEach(function(a){var s=a.queries,l=a.conditions,c,f,d,p;for(f in s)c=ta.matchMedia(s[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(a.revert(),d&&n.push(a))}),Dd("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Nv=t,Dd("matchMedia"))},wy=function(){function o(n,a){this.selector=a&&vp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=AT++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){nn(a)&&(l=s,s=a,a=nn);var c=this,f=function(){var p=Ye,m=c.selector,v;return p&&p!==c&&p.data.push(c),l&&(c.selector=vp(l)),Ye=c,v=s.apply(c,arguments),nn(v)&&c._r.push(v),Ye=p,c.selector=m,c.isReverted=!1,v};return c.last=f,a===nn?f(c,function(d){return c.add(null,d)}):a?c[a]=f:f},t.ignore=function(a){var s=Ye;Ye=null,a(this),Ye=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof dn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,v){return v.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),d=l.data.length;d--;)p=l.data[d],p instanceof Zn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof dn)&&p.revert&&p.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=gs.length;c--;)gs[c].id===this.id&&gs.splice(c,1)},t.revert=function(a){this.kill(a||{})},o}(),RT=function(){function o(n){this.contexts=[],this.scope=n,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){sa(a)||(a={matches:a});var c=new wy(0,l||this.scope),f=c.conditions={},d,p,m;Ye&&!c.selector&&(c.selector=Ye.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(p in a)p==="all"?m=1:(d=ta.matchMedia(a[p]),d&&(gs.indexOf(c)<0&&gs.push(c),(f[p]=d.matches)&&(m=1),d.addListener?d.addListener(Sp):d.addEventListener("change",Sp)));return m&&s(c,function(v){return c.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o}(),of={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return dy(s)})},timeline:function(t){return new Zn(t)},getTweensOf:function(t,n){return Ke.getTweensOf(t,n)},getProperty:function(t,n,a,s){wn(t)&&(t=Pi(t)[0]);var l=ps(t||{}).get,c=a?ty:$x;return a==="native"&&(a=""),t&&(n?c((vi[n]&&vi[n].get||l)(t,n,a,s)):function(f,d,p){return c((vi[f]&&vi[f].get||l)(t,f,d,p))})},quickSetter:function(t,n,a){if(t=Pi(t),t.length>1){var s=t.map(function(m){return oi.quickSetter(m,n,a)}),l=s.length;return function(m){for(var v=l;v--;)s[v](m)}}t=t[0]||{};var c=vi[n],f=ps(t),d=f.harness&&(f.harness.aliases||{})[n]||n,p=c?function(m){var v=new c;vo._pt=0,v.init(t,a?m+a:m,vo,0,[t]),v.render(1,v),vo._pt&&Rm(1,vo)}:f.set(t,d);return c?p:function(m){return p(t,d,a?m+a:m,f,1)}},quickTo:function(t,n,a){var s,l=oi.to(t,Ti((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(d,p,m){return l.resetTo(n,d,p,m)};return c.tween=l,c},isTweening:function(t){return Ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,bo.ease)),wv(bo,t||{})},config:function(t){return wv(Si,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!vi[f]&&!Ei[f]&&Wl(n+" effect requires "+f+" plugin.")}),Ad[n]=function(f,d,p){return a(Pi(f),Ti(d||{},l),p)},c&&(Zn.prototype[n]=function(f,d,p){return this.add(Ad[n](f,sa(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,n){xe[t]=_s(n)},parseEase:function(t,n){return arguments.length?_s(t,n):xe},getById:function(t){return Ke.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Zn(t),s,l;for(a.smoothChildTiming=ni(t.smoothChildTiming),Ke.remove(a),a._dp=0,a._time=a._tTime=Ke._time,s=Ke._first;s;)l=s._next,(n||!(!s._dur&&s instanceof dn&&s.vars.onComplete===s._targets[0]))&&na(a,s,s._start-s._delay),s=l;return na(Ke,a,0),a},context:function(t,n){return t?new wy(t,n):Ye},matchMedia:function(t){return new RT(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Sp()},addEventListener:function(t,n){var a=Zc[t]||(Zc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Zc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:rT,wrapYoyo:sT,distribute:oy,random:uy,snap:ly,normalize:aT,getUnit:Vn,clamp:tT,splitColor:py,toArray:Pi,selector:vp,mapRange:fy,pipe:nT,unitize:iT,interpolate:oT,shuffle:sy},install:Zx,effects:Ad,ticker:xi,updateRoot:Zn.updateRoot,plugins:vi,globalTimeline:Ke,core:{PropTween:ai,globals:jx,Tween:dn,Timeline:Zn,Animation:jl,getCache:ps,_removeLinkedListItem:hf,reverting:function(){return On},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return pm=t}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return of[o]=dn[o]});xi.add(Zn.updateRoot);vo=of.to({},{duration:0});var wT=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},CT=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=wT(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},Ud=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var d,p;if(wn(l)&&(d={},ii(l,function(m){return d[m]=1}),l=d),n){d={};for(p in l)d[p]=n(l[p]);l=d}CT(f,l)}}}},oi=of.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,d;this.tween=a;for(c in n)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)On?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Ud("roundProps",xp),Ud("modifiers"),Ud("snap",ly))||of;dn.version=Zn.version=oi.version="3.13.0";Yx=1;_m()&&Co();xe.Power0;xe.Power1;xe.Power2;xe.Power3;xe.Power4;xe.Linear;xe.Quad;xe.Cubic;xe.Quart;xe.Quint;xe.Strong;xe.Elastic;xe.Back;xe.SteppedEase;xe.Bounce;xe.Sine;xe.Expo;xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ov,Er,So,wm,fs,Pv,Cm,DT=function(){return typeof window<"u"},Fa={},ss=180/Math.PI,Mo=Math.PI/180,eo=Math.atan2,zv=1e8,Dm=/([A-Z])/g,UT=/(left|right|width|margin|padding|x)/i,LT=/[\s,\(]\S/,ia={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mp=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},NT=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},OT=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},PT=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},Cy=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},Dy=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},zT=function(t,n,a){return t.style[n]=a},IT=function(t,n,a){return t.style.setProperty(n,a)},BT=function(t,n,a){return t._gsap[n]=a},FT=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},HT=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},GT=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},Qe="transform",ri=Qe+"Origin",VT=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in Fa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ia[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Na(s,f)}):this.tfm[t]=c.x?c[t]:Na(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return ia.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(Qe)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=Qe}(l||n)&&this.props.push(t,n,l[t])},Uy=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kT=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Dm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Cm(),(!l||!l.isStart)&&!a[Qe]&&(Uy(a),s.zOrigin&&a[ri]&&(a[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Ly=function(t,n){var a={target:t,props:[],revert:kT,save:VT};return t._gsap||oi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},Ny,Ep=function(t,n){var a=Er.createElementNS?Er.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Er.createElement(t);return a&&a.style?a:Er.createElement(t)},zi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Dm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Do(n)||n,1)||""},Iv="O,Moz,ms,Ms,Webkit".split(","),Do=function(t,n,a){var s=n||fs,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Iv[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Iv[c]:"")+t},Tp=function(){DT()&&window.document&&(Ov=window,Er=Ov.document,So=Er.documentElement,fs=Ep("div")||{style:{}},Ep("div"),Qe=Do(Qe),ri=Qe+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ny=!!Do("perspective"),Cm=oi.core.reverting,wm=1)},Bv=function(t){var n=t.ownerSVGElement,a=Ep("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),So.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),So.removeChild(a),l},Fv=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},Oy=function(t){var n,a;try{n=t.getBBox()}catch{n=Bv(t),a=1}return n&&(n.width||n.height)||a||(n=Bv(t)),n&&!n.width&&!n.x&&!n.y?{x:+Fv(t,["x","cx","x1"])||0,y:+Fv(t,["y","cy","y1"])||0,width:0,height:0}:n},Py=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Oy(t))},xs=function(t,n){if(n){var a=t.style,s;n in Fa&&n!==ri&&(n=Qe),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Dm,"-$1").toLowerCase())):a.removeAttribute(n)}},Tr=function(t,n,a,s,l,c){var f=new ai(t._pt,n,a,0,1,c?Dy:Cy);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},Hv={deg:1,rad:1,turn:1},XT={grid:1,flex:1},Dr=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=fs.style,d=UT.test(n),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(d?"Width":"Height"),v=100,g=s==="px",x=s==="%",E,M,S,y;if(s===c||!l||Hv[s]||Hv[c])return l;if(c!=="px"&&!g&&(l=o(t,n,a,"px")),y=t.getCTM&&Py(t),(x||c==="%")&&(Fa[n]||~n.indexOf("adius")))return E=y?t.getBBox()[d?"width":"height"]:t[m],sn(x?l/E*v:l/100*E);if(f[d?"width":"height"]=v+(g?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Er||!M.appendChild)&&(M=Er.body),S=M._gsap,S&&x&&S.width&&d&&S.time===xi.time&&!S.uncache)return sn(l/S.width*v);if(x&&(n==="height"||n==="width")){var L=t.style[n];t.style[n]=v+s,E=t[m],L?t.style[n]=L:xs(t,n)}else(x||c==="%")&&!XT[zi(M,"display")]&&(f.position=zi(t,"position")),M===t&&(f.position="static"),M.appendChild(fs),E=fs[m],M.removeChild(fs),f.position="absolute";return d&&x&&(S=ps(M),S.time=xi.time,S.width=M[m]),sn(g?E*l/v:E&&l?v/E*l:0)},Na=function(t,n,a,s){var l;return wm||Tp(),n in ia&&n!=="transform"&&(n=ia[n],~n.indexOf(",")&&(n=n.split(",")[0])),Fa[n]&&n!=="transform"?(l=Ql(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:uf(zi(t,ri))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=lf[n]&&lf[n](t,n,a)||zi(t,n)||Qx(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Dr(t,n,l,a)+a:l},WT=function(t,n,a,s){if(!a||a==="none"){var l=Do(n,t,1),c=l&&zi(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=zi(t,"borderTopColor"))}var f=new ai(this._pt,t.style,n,0,1,Ay),d=0,p=0,m,v,g,x,E,M,S,y,L,U,A,N;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=zi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=zi(t,n)||s,M?t.style[n]=M:xs(t,n)),m=[a,s],_y(m),a=m[0],s=m[1],g=a.match(go)||[],N=s.match(go)||[],N.length){for(;v=go.exec(s);)S=v[0],L=s.substring(d,v.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(M=g[p++]||"")&&(x=parseFloat(M)||0,A=M.substr((x+"").length),S.charAt(1)==="="&&(S=yo(x,S)+A),y=parseFloat(S),U=S.substr((y+"").length),d=go.lastIndex-U.length,U||(U=U||Si.units[n]||A,d===s.length&&(s+=U,f.e+=U)),A!==U&&(x=Dr(t,n,M,U)||0),f._pt={_next:f._pt,p:L||p===1?L:",",s:x,c:y-x,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=n==="display"&&s==="none"?Dy:Cy;return Wx.test(s)&&(f.e=0),this._pt=f,f},Gv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qT=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=Gv[a]||a,n[1]=Gv[s]||s,n.join(" ")},YT=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,d,p;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],Fa[f]&&(d=1,f=f==="transformOrigin"?ri:Qe),xs(a,f);d&&(xs(a,Qe),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ql(a,1),c.uncache=1,Uy(s)))}},lf={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ai(t._pt,n,a,0,0,YT);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},Kl=[1,0,0,1,0,0],zy={},Iy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Vv=function(t){var n=zi(t,Qe);return Iy(n)?Kl:n.substr(7).match(Xx).map(sn)},Um=function(t,n){var a=t._gsap||ps(t),s=t.style,l=Vv(t),c,f,d,p;return a.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Kl:l):(l===Kl&&!t.offsetParent&&t!==So&&!a.svg&&(d=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,So.appendChild(t)),l=Vv(t),d?s.display=d:xs(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):So.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},bp=function(t,n,a,s,l,c){var f=t._gsap,d=l||Um(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,x=d[0],E=d[1],M=d[2],S=d[3],y=d[4],L=d[5],U=n.split(" "),A=parseFloat(U[0])||0,N=parseFloat(U[1])||0,I,O,F,b;a?d!==Kl&&(O=x*S-E*M)&&(F=A*(S/O)+N*(-M/O)+(M*L-S*y)/O,b=A*(-E/O)+N*(x/O)-(x*L-E*y)/O,A=F,N=b):(I=Oy(t),A=I.x+(~U[0].indexOf("%")?A/100*I.width:A),N=I.y+(~(U[1]||U[0]).indexOf("%")?N/100*I.height:N)),s||s!==!1&&f.smooth?(y=A-p,L=N-m,f.xOffset=v+(y*x+L*M)-y,f.yOffset=g+(y*E+L*S)-L):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=N,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ri]="0px 0px",c&&(Tr(c,f,"xOrigin",p,A),Tr(c,f,"yOrigin",m,N),Tr(c,f,"xOffset",v,f.xOffset),Tr(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+N)},Ql=function(t,n){var a=t._gsap||new yy(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=zi(t,ri)||"0",m,v,g,x,E,M,S,y,L,U,A,N,I,O,F,b,C,G,J,Q,at,ot,B,X,W,xt,P,tt,mt,St,j,dt;return m=v=g=M=S=y=L=U=A=0,x=E=1,a.svg=!!(t.getCTM&&Py(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Qe]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Qe]!=="none"?d[Qe]:"")),s.scale=s.rotate=s.translate="none"),O=Um(t,a.svg),a.svg&&(a.uncache?(W=t.getBBox(),p=a.xOrigin-W.x+"px "+(a.yOrigin-W.y)+"px",X=""):X=!n&&t.getAttribute("data-svg-origin"),bp(t,X||p,!!X||a.originIsAbsolute,a.smooth!==!1,O)),N=a.xOrigin||0,I=a.yOrigin||0,O!==Kl&&(G=O[0],J=O[1],Q=O[2],at=O[3],m=ot=O[4],v=B=O[5],O.length===6?(x=Math.sqrt(G*G+J*J),E=Math.sqrt(at*at+Q*Q),M=G||J?eo(J,G)*ss:0,L=Q||at?eo(Q,at)*ss+M:0,L&&(E*=Math.abs(Math.cos(L*Mo))),a.svg&&(m-=N-(N*G+I*Q),v-=I-(N*J+I*at))):(dt=O[6],St=O[7],P=O[8],tt=O[9],mt=O[10],j=O[11],m=O[12],v=O[13],g=O[14],F=eo(dt,mt),S=F*ss,F&&(b=Math.cos(-F),C=Math.sin(-F),X=ot*b+P*C,W=B*b+tt*C,xt=dt*b+mt*C,P=ot*-C+P*b,tt=B*-C+tt*b,mt=dt*-C+mt*b,j=St*-C+j*b,ot=X,B=W,dt=xt),F=eo(-Q,mt),y=F*ss,F&&(b=Math.cos(-F),C=Math.sin(-F),X=G*b-P*C,W=J*b-tt*C,xt=Q*b-mt*C,j=at*C+j*b,G=X,J=W,Q=xt),F=eo(J,G),M=F*ss,F&&(b=Math.cos(F),C=Math.sin(F),X=G*b+J*C,W=ot*b+B*C,J=J*b-G*C,B=B*b-ot*C,G=X,ot=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,y=180-y),x=sn(Math.sqrt(G*G+J*J+Q*Q)),E=sn(Math.sqrt(B*B+dt*dt)),F=eo(ot,B),L=Math.abs(F)>2e-4?F*ss:0,A=j?1/(j<0?-j:j):0),a.svg&&(X=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!Iy(zi(t,Qe)),X&&t.setAttribute("transform",X))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(x*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),n=n||a.uncache,a.x=m-((a.xPercent=m&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=sn(x),a.scaleY=sn(E),a.rotation=sn(M)+f,a.rotationX=sn(S)+f,a.rotationY=sn(y)+f,a.skewX=L+f,a.skewY=U+f,a.transformPerspective=A+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ri]=uf(p)),a.xOffset=a.yOffset=0,a.force3D=Si.force3D,a.renderTransform=a.svg?jT:Ny?By:ZT,a.uncache=0,a},uf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ld=function(t,n,a){var s=Vn(n);return sn(parseFloat(n)+parseFloat(Dr(t,"x",a+"px",s)))+s},ZT=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,By(t,n)},Jr="0deg",Ll="0px",$r=") ",By=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.z,p=a.rotation,m=a.rotationY,v=a.rotationX,g=a.skewX,x=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,y=a.force3D,L=a.target,U=a.zOrigin,A="",N=y==="auto"&&t&&t!==1||y===!0;if(U&&(v!==Jr||m!==Jr)){var I=parseFloat(m)*Mo,O=Math.sin(I),F=Math.cos(I),b;I=parseFloat(v)*Mo,b=Math.cos(I),c=Ld(L,c,O*b*-U),f=Ld(L,f,-Math.sin(I)*-U),d=Ld(L,d,F*b*-U+U)}S!==Ll&&(A+="perspective("+S+$r),(s||l)&&(A+="translate("+s+"%, "+l+"%) "),(N||c!==Ll||f!==Ll||d!==Ll)&&(A+=d!==Ll||N?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+$r),p!==Jr&&(A+="rotate("+p+$r),m!==Jr&&(A+="rotateY("+m+$r),v!==Jr&&(A+="rotateX("+v+$r),(g!==Jr||x!==Jr)&&(A+="skew("+g+", "+x+$r),(E!==1||M!==1)&&(A+="scale("+E+", "+M+$r),L.style[Qe]=A||"translate(0, 0)"},jT=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.rotation,p=a.skewX,m=a.skewY,v=a.scaleX,g=a.scaleY,x=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,y=a.yOffset,L=a.forceCSS,U=parseFloat(c),A=parseFloat(f),N,I,O,F,b;d=parseFloat(d),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,d+=m),d||p?(d*=Mo,p*=Mo,N=Math.cos(d)*v,I=Math.sin(d)*v,O=Math.sin(d-p)*-g,F=Math.cos(d-p)*g,p&&(m*=Mo,b=Math.tan(p-m),b=Math.sqrt(1+b*b),O*=b,F*=b,m&&(b=Math.tan(m),b=Math.sqrt(1+b*b),N*=b,I*=b)),N=sn(N),I=sn(I),O=sn(O),F=sn(F)):(N=v,F=g,I=O=0),(U&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(U=Dr(x,"x",c,"px"),A=Dr(x,"y",f,"px")),(E||M||S||y)&&(U=sn(U+E-(E*N+M*O)+S),A=sn(A+M-(E*I+M*F)+y)),(s||l)&&(b=x.getBBox(),U=sn(U+s/100*b.width),A=sn(A+l/100*b.height)),b="matrix("+N+","+I+","+O+","+F+","+U+","+A+")",x.setAttribute("transform",b),L&&(x.style[Qe]=b)},KT=function(t,n,a,s,l){var c=360,f=wn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?ss:1),p=d-s,m=s+p+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),v==="cw"&&p<0?p=(p+c*zv)%c-~~(p/c)*c:v==="ccw"&&p>0&&(p=(p-c*zv)%c-~~(p/c)*c)),t._pt=g=new ai(t._pt,n,a,s,p,NT),g.e=m,g.u="deg",t._props.push(a),g},kv=function(t,n){for(var a in n)t[a]=n[a];return t},QT=function(t,n,a){var s=kv({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,d,p,m,v,g,x,E;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[Qe]=n,f=Ql(a,1),xs(a,Qe),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Qe],c[Qe]=n,f=Ql(a,1),c[Qe]=p);for(d in Fa)p=s[d],m=f[d],p!==m&&l.indexOf(d)<0&&(x=Vn(p),E=Vn(m),v=x!==E?Dr(a,d,p,E):parseFloat(p),g=parseFloat(m),t._pt=new ai(t._pt,f,d,v,g-v,Mp),t._pt.u=E||0,t._props.push(d));kv(f,s)};ii("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});lf[t>1?"border"+o:o]=function(f,d,p,m,v){var g,x;if(arguments.length<4)return g=c.map(function(E){return Na(f,E,p)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(m+"").split(" "),x={},c.forEach(function(E,M){return x[E]=g[M]=g[M]||g[(M-1)/2|0]}),f.init(d,x,v)}});var Fy={name:"css",register:Tp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,d=a.vars.startAt,p,m,v,g,x,E,M,S,y,L,U,A,N,I,O,F;wm||Tp(),this.styles=this.styles||Ly(t),F=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(m=n[M],!(vi[M]&&Sy(M,n,a,s,t,l)))){if(x=typeof m,E=lf[M],x==="function"&&(m=m.call(a,s,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=Yl(m)),E)E(this,t,M,m,a)&&(O=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Ar.lastIndex=0,Ar.test(p)||(S=Vn(p),y=Vn(m)),y?S!==y&&(p=Dr(t,M,p,y)+y):S&&(m+=S),this.add(f,"setProperty",p,m,s,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(x!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(a,s,t,l):d[M],wn(p)&&~p.indexOf("random(")&&(p=Yl(p)),Vn(p+"")||p==="auto"||(p+=Si.units[M]||Vn(Na(t,M))||""),(p+"").charAt(1)==="="&&(p=Na(t,M))):p=Na(t,M),g=parseFloat(p),L=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),L&&(m=m.substr(2)),v=parseFloat(m),M in ia&&(M==="autoAlpha"&&(g===1&&Na(t,"visibility")==="hidden"&&v&&(g=0),F.push("visibility",0,f.visibility),Tr(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),M!=="scale"&&M!=="transform"&&(M=ia[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Fa,U){if(this.styles.save(M),x==="string"&&m.substring(0,6)==="var(--"&&(m=zi(t,m.substring(4,m.indexOf(")"))),v=parseFloat(m)),A||(N=t._gsap,N.renderTransform&&!n.parseTransform||Ql(t,n.parseTransform),I=n.smoothOrigin!==!1&&N.smooth,A=this._pt=new ai(this._pt,f,Qe,0,1,N.renderTransform,N,0,-1),A.dep=1),M==="scale")this._pt=new ai(this._pt,N,"scaleY",N.scaleY,(L?yo(N.scaleY,L+v):v)-N.scaleY||0,Mp),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(ri,0,f[ri]),m=qT(m),N.svg?bp(t,m,0,I,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==N.zOrigin&&Tr(this,N,"zOrigin",N.zOrigin,y),Tr(this,f,M,uf(p),uf(m)));continue}else if(M==="svgOrigin"){bp(t,m,1,I,0,this);continue}else if(M in zy){KT(this,N,M,g,L?yo(g,L+m):m);continue}else if(M==="smoothOrigin"){Tr(this,N,"smooth",N.smooth,m);continue}else if(M==="force3D"){N[M]=m;continue}else if(M==="transform"){QT(this,m,t);continue}}else M in f||(M=Do(M)||M);if(U||(v||v===0)&&(g||g===0)&&!LT.test(m)&&M in f)S=(p+"").substr((g+"").length),v||(v=0),y=Vn(m)||(M in Si.units?Si.units[M]:S),S!==y&&(g=Dr(t,M,p,y)),this._pt=new ai(this._pt,U?N:f,M,g,(L?yo(g,L+v):v)-g,!U&&(y==="px"||M==="zIndex")&&n.autoRound!==!1?PT:Mp),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=p,this._pt.r=OT);else if(M in f)WT.call(this,t,M,p,L?L+m:m);else if(M in t)this.add(t,M,p||t[M],L?L+m:m,s,l);else if(M!=="parseTransform"){vm(M,m);continue}U||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,p||t[M])),c.push(M)}}O&&Ry(this)},render:function(t,n){if(n.tween._time||!Cm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Na,aliases:ia,getSetter:function(t,n,a){var s=ia[n];return s&&s.indexOf(",")<0&&(n=s),n in Fa&&n!==ri&&(t._gsap.x||Na(t,"x"))?a&&Pv===a?n==="scale"?FT:BT:(Pv=a||{})&&(n==="scale"?HT:GT):t.style&&!mm(t.style[n])?zT:~n.indexOf("-")?IT:Am(t,n)},core:{_removeProperty:xs,_getMatrix:Um}};oi.utils.checkPrefix=Do;oi.core.getStyleSaver=Ly;(function(o,t,n,a){var s=ii(o+","+t+","+n,function(l){Fa[l]=1});ii(t,function(l){Si.units[l]="deg",zy[l]=1}),ia[s[13]]=o+","+t,ii(a,function(l){var c=l.split(":");ia[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Si.units[o]="px"});oi.registerPlugin(Fy);var en=oi.registerPlugin(Fy)||oi;en.core.Tween;const JT=({item:o,onClick:t})=>{const n=Ce.useRef(null),a=Ce.useRef(null),s={};return o.config.clipPathDirection&&(s["data-clip-path-direction"]=o.config.clipPathDirection),o.config.steps&&(s["data-steps"]=o.config.steps),o.config.rotationRange&&(s["data-rotation-range"]=o.config.rotationRange),o.config.stepInterval&&(s["data-step-interval"]=o.config.stepInterval),o.config.moverPauseBeforeExit&&(s["data-mover-pause-before-exit"]=o.config.moverPauseBeforeExit),o.config.moverEnterEase&&(s["data-mover-enter-ease"]=o.config.moverEnterEase),o.config.moverExitEase&&(s["data-mover-exit-ease"]=o.config.moverExitEase),o.config.panelRevealEase&&(s["data-panel-reveal-ease"]=o.config.panelRevealEase),o.config.moverBlendMode&&(s["data-mover-blend-mode"]=o.config.moverBlendMode),o.config.pathMotion&&(s["data-path-motion"]=o.config.pathMotion),o.config.sineAmplitude&&(s["data-sine-amplitude"]=o.config.sineAmplitude),o.config.sineFrequency&&(s["data-sine-frequency"]=o.config.sineFrequency),o.config.stepDuration&&(s["data-step-duration"]=o.config.stepDuration),o.config.panelRevealDurationFactor&&(s["data-panel-reveal-duration-factor"]=o.config.panelRevealDurationFactor),o.config.clickedItemDurationFactor&&(s["data-clicked-item-duration-factor"]=o.config.clickedItemDurationFactor),o.config.gridItemStaggerFactor&&(s["data-grid-item-stagger-factor"]=o.config.gridItemStaggerFactor),o.config.wobbleStrength&&(s["data-wobble-strength"]=o.config.wobbleStrength),Ce.useEffect(()=>{const l=n.current,c=a.current;if(!l||!c)return;en.set(c,{scale:1});const f=()=>{en.to(c,{scale:1.05,duration:.4,ease:"power2.out",overwrite:!0}),en.to(l,{boxShadow:"0 8px 20px rgba(0, 0, 0, 0.2)",y:-5,duration:.4,ease:"power2.out",overwrite:!0})},d=()=>{en.to(c,{scale:1,duration:.3,ease:"power2.out",overwrite:!0}),en.to(l,{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",y:0,duration:.3,ease:"power2.out",overwrite:!0})};return l.addEventListener("mouseenter",f),l.addEventListener("mouseleave",d),()=>{l.removeEventListener("mouseenter",f),l.removeEventListener("mouseleave",d)}},[]),ee.jsxs("figure",{className:"grid__item",role:"img","aria-labelledby":`caption-${o.id}`,ref:n,onClick:()=>t(o),...s,children:[ee.jsx("div",{className:"grid__item-image",ref:a,style:{backgroundImage:`url(${o.image})`,backgroundSize:"100%",backgroundPosition:"50% 50%"}}),ee.jsxs("figcaption",{className:"grid__item-caption",id:`caption-${o.id}`,children:[ee.jsx("h3",{children:o.title}),o.description&&ee.jsx("p",{children:o.description})]})]})},Nd=({title:o,subtitle:t,items:n,onItemClick:a})=>ee.jsxs(ee.Fragment,{children:[ee.jsxs("div",{className:"heading flex flex-wrap items-end justify-between gap-4 my-40",children:[ee.jsx("h2",{className:"heading__title font-semibold uppercase m-0 text-[clamp(2rem,10vw,6rem)] leading-[0.77]",children:o}),ee.jsx("span",{className:"heading__meta",children:t})]}),ee.jsx("div",{className:"grid py-4 grid-cols-[repeat(var(--column-count),minmax(var(--column),1fr))] gap-x-[var(--c-gap)] gap-y-20",children:n.map(s=>ee.jsx(JT,{item:s,onClick:a},s.id))})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lm="176",$T=0,Xv=1,t1=2,Hy=1,e1=2,Ua=3,Ur=0,si=1,Oa=2,Rr=0,Eo=1,Wv=2,qv=3,Yv=4,n1=5,us=100,i1=101,a1=102,r1=103,s1=104,o1=200,l1=201,u1=202,c1=203,Ap=204,Rp=205,f1=206,h1=207,d1=208,p1=209,m1=210,_1=211,g1=212,v1=213,x1=214,wp=0,Cp=1,Dp=2,Uo=3,Up=4,Lp=5,Np=6,Op=7,Gy=0,y1=1,S1=2,wr=0,M1=1,E1=2,T1=3,b1=4,A1=5,R1=6,w1=7,Vy=300,Lo=301,No=302,Pp=303,zp=304,mf=306,Jl=1e3,hs=1001,Ip=1002,Yi=1003,C1=1004,Mc=1005,Gn=1006,Od=1007,ds=1008,Ha=1009,ky=1010,Xy=1011,$l=1012,Nm=1013,ys=1014,Pa=1015,ru=1016,Om=1017,Pm=1018,tu=1020,Wy=35902,qy=1021,Yy=1022,Wi=1023,eu=1026,nu=1027,Zy=1028,zm=1029,jy=1030,Im=1031,Bm=1033,jc=33776,Kc=33777,Qc=33778,Jc=33779,Bp=35840,Fp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,Wp=37808,qp=37809,Yp=37810,Zp=37811,jp=37812,Kp=37813,Qp=37814,Jp=37815,$p=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,$c=36492,rm=36494,sm=36495,Ky=36283,om=36284,lm=36285,um=36286,D1=3200,U1=3201,L1=0,N1=1,Sr="",Oi="srgb",Oo="srgb-linear",cf="linear",Pe="srgb",no=7680,Zv=519,O1=512,P1=513,z1=514,Qy=515,I1=516,B1=517,F1=518,H1=519,jv=35044,Kv="300 es",za=2e3,ff=2001;class zo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pd=Math.PI/180,cm=180/Math.PI;function su(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function ve(o,t,n){return Math.max(t,Math.min(n,o))}function G1(o,t){return(o%t+t)%t}function zd(o,t,n){return(1-n)*o+n*t}function Nl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(t=0,n=0){Ie.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,n,a,s,l,c,f,d,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,p)}set(t,n,a,s,l,c,f,d,p){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=a,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],d=a[6],p=a[1],m=a[4],v=a[7],g=a[2],x=a[5],E=a[8],M=s[0],S=s[3],y=s[6],L=s[1],U=s[4],A=s[7],N=s[2],I=s[5],O=s[8];return l[0]=c*M+f*L+d*N,l[3]=c*S+f*U+d*I,l[6]=c*y+f*A+d*O,l[1]=p*M+m*L+v*N,l[4]=p*S+m*U+v*I,l[7]=p*y+m*A+v*O,l[2]=g*M+x*L+E*N,l[5]=g*S+x*U+E*I,l[8]=g*y+x*A+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8];return n*c*m-n*f*p-a*l*m+a*f*d+s*l*p-s*c*d}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],v=m*c-f*p,g=f*d-m*l,x=p*l-c*d,E=n*v+a*g+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=v*M,t[1]=(s*p-m*a)*M,t[2]=(f*a-s*c)*M,t[3]=g*M,t[4]=(m*n-s*d)*M,t[5]=(s*l-f*n)*M,t[6]=x*M,t[7]=(a*d-p*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*c+p*f)+c+t,-s*p,s*d,-s*(-p*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Id.makeScale(t,n)),this}rotate(t){return this.premultiply(Id.makeRotation(-t)),this}translate(t,n){return this.premultiply(Id.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new re;function Jy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function iu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function V1(){const o=iu("canvas");return o.style.display="block",o}const Qv={};function tf(o){o in Qv||(Qv[o]=!0,console.warn(o))}function k1(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}function X1(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function W1(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jv=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const o={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pe&&(s.r=Ia(s.r),s.g=Ia(s.g),s.b=Ia(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pe&&(s.r=To(s.r),s.g=To(s.g),s.b=To(s.b))),s},fromWorkingColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},toWorkingColorSpace:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?cf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Oo]:{primaries:t,whitePoint:a,transfer:cf,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:a,transfer:Pe,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),o}const be=q1();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function To(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let io;class Y1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{io===void 0&&(io=iu("canvas")),io.width=t.width,io.height=t.height;const s=io.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=io}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=iu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ia(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ia(n[a]/255)*255):n[a]=Ia(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z1=0;class Fm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=su(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Bd(s[c].image)):l.push(Bd(s[c]))}else l=Bd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function Bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Y1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j1=0;class Wn extends zo{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=hs,s=hs,l=Gn,c=ds,f=Wi,d=Ha,p=Wn.DEFAULT_ANISOTROPY,m=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=su(),this.name="",this.source=new Fm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jl:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Ip:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jl:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Ip:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Vy;Wn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,a=0,s=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const d=t.elements,p=d[0],m=d[4],v=d[8],g=d[1],x=d[5],E=d[9],M=d[2],S=d[6],y=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+M)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,A=(x+1)/2,N=(y+1)/2,I=(m+g)/4,O=(v+M)/4,F=(E+S)/4;return U>A&&U>N?U<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(U),s=I/a,l=O/a):A>N?A<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),a=I/s,l=F/s):N<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(N),a=O/l,s=F/l),this.set(a,s,l,n),this}let L=Math.sqrt((S-E)*(S-E)+(v-M)*(v-M)+(g-m)*(g-m));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(v-M)/L,this.z=(g-m)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this.w=ve(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this.w=ve(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K1 extends zo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth?a.depth:1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const s={width:t,height:n,depth:this.depth};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},a);const l=new Wn(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Fm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends K1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class $y extends Wn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Wn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let d=a[s+0],p=a[s+1],m=a[s+2],v=a[s+3];const g=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=m,t[n+3]=v;return}if(f===1){t[n+0]=g,t[n+1]=x,t[n+2]=E,t[n+3]=M;return}if(v!==M||d!==g||p!==x||m!==E){let S=1-f;const y=d*g+p*x+m*E+v*M,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const N=Math.sqrt(U),I=Math.atan2(N,y*L);S=Math.sin(S*I)/N,f=Math.sin(f*I)/N}const A=f*L;if(d=d*S+g*A,p=p*S+x*A,m=m*S+E*A,v=v*S+M*A,S===1-f){const N=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=N,p*=N,m*=N,v*=N}}t[n]=d,t[n+1]=p,t[n+2]=m,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],d=a[s+1],p=a[s+2],m=a[s+3],v=l[c],g=l[c+1],x=l[c+2],E=l[c+3];return t[n]=f*E+m*v+d*x-p*g,t[n+1]=d*E+m*g+p*v-f*x,t[n+2]=p*E+m*x+f*g-d*v,t[n+3]=m*E-f*v-d*g-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(a/2),m=f(s/2),v=f(l/2),g=d(a/2),x=d(s/2),E=d(l/2);switch(c){case"XYZ":this._x=g*m*v+p*x*E,this._y=p*x*v-g*m*E,this._z=p*m*E+g*x*v,this._w=p*m*v-g*x*E;break;case"YXZ":this._x=g*m*v+p*x*E,this._y=p*x*v-g*m*E,this._z=p*m*E-g*x*v,this._w=p*m*v+g*x*E;break;case"ZXY":this._x=g*m*v-p*x*E,this._y=p*x*v+g*m*E,this._z=p*m*E+g*x*v,this._w=p*m*v-g*x*E;break;case"ZYX":this._x=g*m*v-p*x*E,this._y=p*x*v+g*m*E,this._z=p*m*E-g*x*v,this._w=p*m*v+g*x*E;break;case"YZX":this._x=g*m*v+p*x*E,this._y=p*x*v+g*m*E,this._z=p*m*E-g*x*v,this._w=p*m*v-g*x*E;break;case"XZY":this._x=g*m*v-p*x*E,this._y=p*x*v-g*m*E,this._z=p*m*E+g*x*v,this._w=p*m*v+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],p=n[2],m=n[6],v=n[10],g=a+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-p)*x,this._z=(c-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-p)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-s)/x,this._x=(l+p)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,d=n._y,p=n._z,m=n._w;return this._x=a*m+c*f+s*p-l*d,this._y=s*m+c*d+l*f-a*p,this._z=l*m+c*p+a*d-s*f,this._w=c*m-a*f-s*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-n;return this._w=x*c+n*this._w,this._x=x*a+n*this._x,this._y=x*s+n*this._y,this._z=x*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),v=Math.sin((1-n)*m)/p,g=Math.sin(n*m)/p;return this._w=c*v+this._w*g,this._x=a*v+this._x*g,this._y=s*v+this._y*g,this._z=l*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*s-f*a),m=2*(f*n-l*s),v=2*(l*a-c*n);return this.x=n+d*p+c*v-f*m,this.y=a+d*m+f*p-l*v,this.z=s+d*v+l*m-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-a*d,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new ut,tx=new ou;class lu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Hi):Hi.fromBufferAttribute(l,c),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ec.copy(a.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ol),Tc.subVectors(this.max,Ol),ao.subVectors(t.a,Ol),ro.subVectors(t.b,Ol),so.subVectors(t.c,Ol),mr.subVectors(ro,ao),_r.subVectors(so,ro),ts.subVectors(ao,so);let n=[0,-mr.z,mr.y,0,-_r.z,_r.y,0,-ts.z,ts.y,mr.z,0,-mr.x,_r.z,0,-_r.x,ts.z,0,-ts.x,-mr.y,mr.x,0,-_r.y,_r.x,0,-ts.y,ts.x,0];return!Hd(n,ao,ro,so,Tc)||(n=[1,0,0,0,1,0,0,0,1],!Hd(n,ao,ro,so,Tc))?!1:(bc.crossVectors(mr,_r),n=[bc.x,bc.y,bc.z],Hd(n,ao,ro,so,Tc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Aa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Hi=new ut,Ec=new lu,ao=new ut,ro=new ut,so=new ut,mr=new ut,_r=new ut,ts=new ut,Ol=new ut,Tc=new ut,bc=new ut,es=new ut;function Hd(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){es.fromArray(o,l);const f=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),d=t.dot(es),p=n.dot(es),m=a.dot(es);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const J1=new lu,Pl=new ut,Gd=new ut;class Hm{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):J1.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pl.subVectors(t,this.center);const n=Pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Pl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pl.copy(t.center).add(Gd)),this.expandByPoint(Pl.copy(t.center).sub(Gd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ra=new ut,Vd=new ut,Ac=new ut,gr=new ut,kd=new ut,Rc=new ut,Xd=new ut;class $1{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,n),Ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Vd.copy(t).add(n).multiplyScalar(.5),Ac.copy(n).sub(t).normalize(),gr.copy(this.origin).sub(Vd);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Ac),f=gr.dot(this.direction),d=-gr.dot(Ac),p=gr.lengthSq(),m=Math.abs(1-c*c);let v,g,x,E;if(m>0)if(v=c*d-f,g=c*f-d,E=l*m,v>=0)if(g>=-E)if(g<=E){const M=1/m;v*=M,g*=M,x=v*(v+c*g+2*f)+g*(c*v+g+2*d)+p}else g=l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*d)+p;else g=-l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*d)+p;else g<=-E?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+g*(g+2*d)+p):g<=E?(v=0,g=Math.min(Math.max(-l,-d),l),x=g*(g+2*d)+p):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+g*(g+2*d)+p);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Vd).addScaledVector(Ac,g),x}intersectSphere(t,n){Ra.subVectors(t.center,this.origin);const a=Ra.dot(this.direction),s=Ra.dot(Ra)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(t.min.x-g.x)*p,s=(t.max.x-g.x)*p):(a=(t.max.x-g.x)*p,s=(t.min.x-g.x)*p),m>=0?(l=(t.min.y-g.y)*m,c=(t.max.y-g.y)*m):(l=(t.max.y-g.y)*m,c=(t.min.y-g.y)*m),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(t.min.z-g.z)*v,d=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,d=(t.min.z-g.z)*v),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,n,a,s,l){kd.subVectors(n,t),Rc.subVectors(a,t),Xd.crossVectors(kd,Rc);let c=this.direction.dot(Xd),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,t);const d=f*this.direction.dot(Rc.crossVectors(gr,Rc));if(d<0)return null;const p=f*this.direction.dot(kd.cross(gr));if(p<0||d+p>c)return null;const m=-f*gr.dot(Xd);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,n,a,s,l,c,f,d,p,m,v,g,x,E,M,S){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,p,m,v,g,x,E,M,S)}set(t,n,a,s,l,c,f,d,p,m,v,g,x,E,M,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=s,y[1]=l,y[5]=c,y[9]=f,y[13]=d,y[2]=p,y[6]=m,y[10]=v,y[14]=g,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/oo.setFromMatrixColumn(t,0).length(),l=1/oo.setFromMatrixColumn(t,1).length(),c=1/oo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=c*m,x=c*v,E=f*m,M=f*v;n[0]=d*m,n[4]=-d*v,n[8]=p,n[1]=x+E*p,n[5]=g-M*p,n[9]=-f*d,n[2]=M-g*p,n[6]=E+x*p,n[10]=c*d}else if(t.order==="YXZ"){const g=d*m,x=d*v,E=p*m,M=p*v;n[0]=g+M*f,n[4]=E*f-x,n[8]=c*p,n[1]=c*v,n[5]=c*m,n[9]=-f,n[2]=x*f-E,n[6]=M+g*f,n[10]=c*d}else if(t.order==="ZXY"){const g=d*m,x=d*v,E=p*m,M=p*v;n[0]=g-M*f,n[4]=-c*v,n[8]=E+x*f,n[1]=x+E*f,n[5]=c*m,n[9]=M-g*f,n[2]=-c*p,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const g=c*m,x=c*v,E=f*m,M=f*v;n[0]=d*m,n[4]=E*p-x,n[8]=g*p+M,n[1]=d*v,n[5]=M*p+g,n[9]=x*p-E,n[2]=-p,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const g=c*d,x=c*p,E=f*d,M=f*p;n[0]=d*m,n[4]=M-g*v,n[8]=E*v+x,n[1]=v,n[5]=c*m,n[9]=-f*m,n[2]=-p*m,n[6]=x*v+E,n[10]=g-M*v}else if(t.order==="XZY"){const g=c*d,x=c*p,E=f*d,M=f*p;n[0]=d*m,n[4]=-v,n[8]=p*m,n[1]=g*v+M,n[5]=c*m,n[9]=x*v-E,n[2]=E*v-x,n[6]=f*m,n[10]=M*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tb,t,eb)}lookAt(t,n,a){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),vr.crossVectors(a,_i),vr.lengthSq()===0&&(Math.abs(a.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),vr.crossVectors(a,_i)),vr.normalize(),wc.crossVectors(_i,vr),s[0]=vr.x,s[4]=wc.x,s[8]=_i.x,s[1]=vr.y,s[5]=wc.y,s[9]=_i.y,s[2]=vr.z,s[6]=wc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],d=a[8],p=a[12],m=a[1],v=a[5],g=a[9],x=a[13],E=a[2],M=a[6],S=a[10],y=a[14],L=a[3],U=a[7],A=a[11],N=a[15],I=s[0],O=s[4],F=s[8],b=s[12],C=s[1],G=s[5],J=s[9],Q=s[13],at=s[2],ot=s[6],B=s[10],X=s[14],W=s[3],xt=s[7],P=s[11],tt=s[15];return l[0]=c*I+f*C+d*at+p*W,l[4]=c*O+f*G+d*ot+p*xt,l[8]=c*F+f*J+d*B+p*P,l[12]=c*b+f*Q+d*X+p*tt,l[1]=m*I+v*C+g*at+x*W,l[5]=m*O+v*G+g*ot+x*xt,l[9]=m*F+v*J+g*B+x*P,l[13]=m*b+v*Q+g*X+x*tt,l[2]=E*I+M*C+S*at+y*W,l[6]=E*O+M*G+S*ot+y*xt,l[10]=E*F+M*J+S*B+y*P,l[14]=E*b+M*Q+S*X+y*tt,l[3]=L*I+U*C+A*at+N*W,l[7]=L*O+U*G+A*ot+N*xt,l[11]=L*F+U*J+A*B+N*P,l[15]=L*b+U*Q+A*X+N*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],m=t[2],v=t[6],g=t[10],x=t[14],E=t[3],M=t[7],S=t[11],y=t[15];return E*(+l*d*v-s*p*v-l*f*g+a*p*g+s*f*x-a*d*x)+M*(+n*d*x-n*p*g+l*c*g-s*c*x+s*p*m-l*d*m)+S*(+n*p*v-n*f*x-l*c*v+a*c*x+l*f*m-a*p*m)+y*(-s*f*m-n*d*v+n*f*g+s*c*v-a*c*g+a*d*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],v=t[9],g=t[10],x=t[11],E=t[12],M=t[13],S=t[14],y=t[15],L=v*S*p-M*g*p+M*d*x-f*S*x-v*d*y+f*g*y,U=E*g*p-m*S*p-E*d*x+c*S*x+m*d*y-c*g*y,A=m*M*p-E*v*p+E*f*x-c*M*x-m*f*y+c*v*y,N=E*v*d-m*M*d-E*f*g+c*M*g+m*f*S-c*v*S,I=n*L+a*U+s*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return t[0]=L*O,t[1]=(M*g*l-v*S*l-M*s*x+a*S*x+v*s*y-a*g*y)*O,t[2]=(f*S*l-M*d*l+M*s*p-a*S*p-f*s*y+a*d*y)*O,t[3]=(v*d*l-f*g*l-v*s*p+a*g*p+f*s*x-a*d*x)*O,t[4]=U*O,t[5]=(m*S*l-E*g*l+E*s*x-n*S*x-m*s*y+n*g*y)*O,t[6]=(E*d*l-c*S*l-E*s*p+n*S*p+c*s*y-n*d*y)*O,t[7]=(c*g*l-m*d*l+m*s*p-n*g*p-c*s*x+n*d*x)*O,t[8]=A*O,t[9]=(E*v*l-m*M*l-E*a*x+n*M*x+m*a*y-n*v*y)*O,t[10]=(c*M*l-E*f*l+E*a*p-n*M*p-c*a*y+n*f*y)*O,t[11]=(m*f*l-c*v*l-m*a*p+n*v*p+c*a*x-n*f*x)*O,t[12]=N*O,t[13]=(m*M*s-E*v*s+E*a*g-n*M*g-m*a*S+n*v*S)*O,t[14]=(E*f*s-c*M*s-E*a*d+n*M*d+c*a*S-n*f*S)*O,t[15]=(c*v*s-m*f*s+m*a*d-n*v*d-c*a*g+n*f*g)*O,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,d=t.z,p=l*c,m=l*f;return this.set(p*c+a,p*f-s*d,p*d+s*f,0,p*f+s*d,m*f+a,m*d-s*c,0,p*d-s*f,m*d+s*c,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,p=l+l,m=c+c,v=f+f,g=l*p,x=l*m,E=l*v,M=c*m,S=c*v,y=f*v,L=d*p,U=d*m,A=d*v,N=a.x,I=a.y,O=a.z;return s[0]=(1-(M+y))*N,s[1]=(x+A)*N,s[2]=(E-U)*N,s[3]=0,s[4]=(x-A)*I,s[5]=(1-(g+y))*I,s[6]=(S+L)*I,s[7]=0,s[8]=(E+U)*O,s[9]=(S-L)*O,s[10]=(1-(g+M))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=oo.set(s[0],s[1],s[2]).length();const c=oo.set(s[4],s[5],s[6]).length(),f=oo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Gi.copy(this);const p=1/l,m=1/c,v=1/f;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=m,Gi.elements[5]*=m,Gi.elements[6]*=m,Gi.elements[8]*=v,Gi.elements[9]*=v,Gi.elements[10]*=v,n.setFromRotationMatrix(Gi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=za){const d=this.elements,p=2*l/(n-t),m=2*l/(a-s),v=(n+t)/(n-t),g=(a+s)/(a-s);let x,E;if(f===za)x=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===ff)x=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=za){const d=this.elements,p=1/(n-t),m=1/(a-s),v=1/(c-l),g=(n+t)*p,x=(a+s)*m;let E,M;if(f===za)E=(c+l)*v,M=-2*v;else if(f===ff)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const oo=new ut,Gi=new mn,tb=new ut(0,0,0),eb=new ut(1,1,1),vr=new ut,wc=new ut,_i=new ut,ex=new mn,nx=new ou;class Ga{constructor(t=0,n=0,a=0,s=Ga.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],d=s[1],p=s[5],m=s[9],v=s[2],g=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return ex.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ex,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return nx.setFromEuler(this),this.setFromQuaternion(nx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ga.DEFAULT_ORDER="XYZ";class tS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nb=0;const ix=new ut,lo=new ou,wa=new mn,Cc=new ut,zl=new ut,ib=new ut,ab=new ou,ax=new ut(1,0,0),rx=new ut(0,1,0),sx=new ut(0,0,1),ox={type:"added"},rb={type:"removed"},uo={type:"childadded",child:null},Wd={type:"childremoved",child:null};class Mi extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const t=new ut,n=new Ga,a=new ou,s=new ut(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mn},normalMatrix:{value:new re}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(ax,t)}rotateY(t){return this.rotateOnAxis(rx,t)}rotateZ(t){return this.rotateOnAxis(sx,t)}translateOnAxis(t,n){return ix.copy(t).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ax,t)}translateY(t){return this.translateOnAxis(rx,t)}translateZ(t){return this.translateOnAxis(sx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Cc.copy(t):Cc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(zl,Cc,this.up):wa.lookAt(Cc,zl,this.up),this.quaternion.setFromRotationMatrix(wa),s&&(wa.extractRotation(s.matrixWorld),lo.setFromRotationMatrix(wa),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ox),uo.child=t,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rb),Wd.child=t,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ox),uo.child=t,this.dispatchEvent(uo),uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,t,ib),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,ab,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),m=c(t.images),v=c(t.shapes),g=c(t.skeletons),x=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),m.length>0&&(a.images=m),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Mi.DEFAULT_UP=new ut(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new ut,Ca=new ut,qd=new ut,Da=new ut,co=new ut,fo=new ut,lx=new ut,Yd=new ut,Zd=new ut,jd=new ut,Kd=new on,Qd=new on,Jd=new on;class Xi{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Vi.subVectors(t,n),s.cross(Vi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Vi.subVectors(s,n),Ca.subVectors(a,n),qd.subVectors(t,n);const c=Vi.dot(Vi),f=Vi.dot(Ca),d=Vi.dot(qd),p=Ca.dot(Ca),m=Ca.dot(qd),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(p*d-f*m)*g,E=(c*m-f*d)*g;return l.set(1-x-E,E,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(t,n,a,s,l,c,f,d){return this.getBarycoord(t,n,a,s,Da)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Da.x),d.addScaledVector(c,Da.y),d.addScaledVector(f,Da.z),d)}static getInterpolatedAttribute(t,n,a,s,l,c){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(t,n),Qd.fromBufferAttribute(t,a),Jd.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Kd,l.x),c.addScaledVector(Qd,l.y),c.addScaledVector(Jd,l.z),c}static isFrontFacing(t,n,a,s){return Vi.subVectors(a,n),Ca.subVectors(t,n),Vi.cross(Ca).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Vi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Xi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return Xi.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;co.subVectors(s,a),fo.subVectors(l,a),Yd.subVectors(t,a);const d=co.dot(Yd),p=fo.dot(Yd);if(d<=0&&p<=0)return n.copy(a);Zd.subVectors(t,s);const m=co.dot(Zd),v=fo.dot(Zd);if(m>=0&&v<=m)return n.copy(s);const g=d*v-m*p;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(a).addScaledVector(co,c);jd.subVectors(t,l);const x=co.dot(jd),E=fo.dot(jd);if(E>=0&&x<=E)return n.copy(l);const M=x*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(a).addScaledVector(fo,f);const S=m*E-x*v;if(S<=0&&v-m>=0&&x-E>=0)return lx.subVectors(l,s),f=(v-m)/(v-m+(x-E)),n.copy(s).addScaledVector(lx,f);const y=1/(S+M+g);return c=M*y,f=g*y,n.copy(a).addScaledVector(co,c).addScaledVector(fo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function $d(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ze{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,n),this}setRGB(t,n,a,s=be.workingColorSpace){return this.r=t,this.g=n,this.b=a,be.toWorkingColorSpace(this,s),this}setHSL(t,n,a,s=be.workingColorSpace){if(t=G1(t,1),n=ve(n,0,1),a=ve(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=$d(c,l,t+1/3),this.g=$d(c,l,t),this.b=$d(c,l,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,n=Oi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const a=eS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return be.fromWorkingColorSpace(Hn.copy(this),t),Math.round(ve(Hn.r*255,0,255))*65536+Math.round(ve(Hn.g*255,0,255))*256+Math.round(ve(Hn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.fromWorkingColorSpace(Hn.copy(this),n);const a=Hn.r,s=Hn.g,l=Hn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const v=c-f;switch(p=m<=.5?v/(c+f):v/(2-c-f),c){case a:d=(s-l)/v+(s<l?6:0);break;case s:d=(l-a)/v+2;break;case l:d=(a-s)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,n=be.workingColorSpace){return be.fromWorkingColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Oi){be.fromWorkingColorSpace(Hn.copy(this),t);const n=Hn.r,a=Hn.g,s=Hn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+n,xr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(xr),t.getHSL(Dc);const a=zd(xr.h,Dc.h,n),s=zd(xr.s,Dc.s,n),l=zd(xr.l,Dc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ze;ze.NAMES=eS;let sb=0;class _f extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=su(),this.name="",this.type="Material",this.blending=Eo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(a.blending=this.blending),this.side!==Ur&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ap&&(a.blendSrc=this.blendSrc),this.blendDst!==Rp&&(a.blendDst=this.blendDst),this.blendEquation!==us&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nS extends _f{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ga,this.combine=Gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new ut,Uc=new Ie;let ob=0;class ra{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=jv,this.updateRanges=[],this.gpuType=Pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Uc.fromBufferAttribute(this,n),Uc.applyMatrix3(t),this.setXY(n,Uc.x,Uc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Nl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ei(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Nl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Nl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Nl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Nl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),s=ei(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jv&&(t.usage=this.usage),t}}class iS extends ra{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class aS extends ra{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class vs extends ra{constructor(t,n,a){super(new Float32Array(t),n,a)}}let lb=0;const Li=new mn,tp=new Mi,ho=new ut,gi=new lu,Il=new lu,Rn=new ut;class Es extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=su(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jy(t)?aS:iS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new re().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,a){return Li.makeTranslation(t,n,a),this.applyMatrix4(Li),this}scale(t,n,a){return Li.makeScale(t,n,a),this.applyMatrix4(Li),this}lookAt(t){return tp.lookAt(t),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new vs(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hm);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Il.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(gi.min,Il.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,Il.max),gi.expandByPoint(Rn)):(gi.expandByPoint(Il.min),gi.expandByPoint(Il.max))}gi.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)Rn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Rn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Rn.fromBufferAttribute(f,p),d&&(ho.fromBufferAttribute(t,p),Rn.add(ho)),s=Math.max(s,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let F=0;F<a.count;F++)f[F]=new ut,d[F]=new ut;const p=new ut,m=new ut,v=new ut,g=new Ie,x=new Ie,E=new Ie,M=new ut,S=new ut;function y(F,b,C){p.fromBufferAttribute(a,F),m.fromBufferAttribute(a,b),v.fromBufferAttribute(a,C),g.fromBufferAttribute(l,F),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),m.sub(p),v.sub(p),x.sub(g),E.sub(g);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(G),f[F].add(M),f[b].add(M),f[C].add(M),d[F].add(S),d[b].add(S),d[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let F=0,b=L.length;F<b;++F){const C=L[F],G=C.start,J=C.count;for(let Q=G,at=G+J;Q<at;Q+=3)y(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new ut,A=new ut,N=new ut,I=new ut;function O(F){N.fromBufferAttribute(s,F),I.copy(N);const b=f[F];U.copy(b),U.sub(N.multiplyScalar(N.dot(b))).normalize(),A.crossVectors(I,b);const G=A.dot(d[F])<0?-1:1;c.setXYZW(F,U.x,U.y,U.z,G)}for(let F=0,b=L.length;F<b;++F){const C=L[F],G=C.start,J=C.count;for(let Q=G,at=G+J;Q<at;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ra(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const s=new ut,l=new ut,c=new ut,f=new ut,d=new ut,p=new ut,m=new ut,v=new ut;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),M=t.getX(g+1),S=t.getX(g+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),p.fromBufferAttribute(a,S),f.add(m),d.add(m),p.add(m),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=n.count;g<x;g+=3)s.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),a.setXYZ(g+0,m.x,m.y,m.z),a.setXYZ(g+1,m.x,m.y,m.z),a.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,d){const p=f.array,m=f.itemSize,v=f.normalized,g=new p.constructor(d.length*m);let x=0,E=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*m;for(let y=0;y<m;y++)g[E++]=p[x++]}return new ra(g,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Es,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=t(d,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const g=p[m],x=t(g,a);d.push(x)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];m.push(x.toJSON(t.data))}m.length>0&&(s[d]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(n))}const l=t.morphAttributes;for(const p in l){const m=[],v=l[p];for(let g=0,x=v.length;g<x;g++)m.push(v[g].clone(n));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,m=c.length;p<m;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ux=new mn,ns=new $1,Lc=new Hm,cx=new ut,Nc=new ut,Oc=new ut,Pc=new ut,ep=new ut,zc=new ut,fx=new ut,Ic=new ut;class qi extends Mi{constructor(t=new Es,n=new nS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){zc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],v=l[d];m!==0&&(ep.fromBufferAttribute(v,t),c?zc.addScaledVector(ep,m):zc.addScaledVector(ep.sub(n),m))}n.add(zc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Lc.copy(a.boundingSphere),Lc.applyMatrix4(l),ns.copy(t.ray).recast(t.near),!(Lc.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Lc,cx)===null||ns.origin.distanceToSquared(cx)>(t.far-t.near)**2))&&(ux.copy(l).invert(),ns.copy(t.ray).applyMatrix4(ux),!(a.boundingBox!==null&&ns.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ns)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=g.length;E<M;E++){const S=g[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,N=U;A<N;A+=3){const I=f.getX(A),O=f.getX(A+1),F=f.getX(A+2);s=Bc(this,y,t,a,p,m,v,I,O,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const L=f.getX(S),U=f.getX(S+1),A=f.getX(S+2);s=Bc(this,c,t,a,p,m,v,L,U,A),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=g.length;E<M;E++){const S=g[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,N=U;A<N;A+=3){const I=A,O=A+1,F=A+2;s=Bc(this,y,t,a,p,m,v,I,O,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const L=S,U=S+1,A=S+2;s=Bc(this,c,t,a,p,m,v,L,U,A),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function ub(o,t,n,a,s,l,c,f){let d;if(t.side===si?d=a.intersectTriangle(c,l,s,!0,f):d=a.intersectTriangle(s,l,c,t.side===Ur,f),d===null)return null;Ic.copy(f),Ic.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Ic);return p<n.near||p>n.far?null:{distance:p,point:Ic.clone(),object:o}}function Bc(o,t,n,a,s,l,c,f,d,p){o.getVertexPosition(f,Nc),o.getVertexPosition(d,Oc),o.getVertexPosition(p,Pc);const m=ub(o,t,n,a,Nc,Oc,Pc,fx);if(m){const v=new ut;Xi.getBarycoord(fx,Nc,Oc,Pc,v),s&&(m.uv=Xi.getInterpolatedAttribute(s,f,d,p,v,new Ie)),l&&(m.uv1=Xi.getInterpolatedAttribute(l,f,d,p,v,new Ie)),c&&(m.normal=Xi.getInterpolatedAttribute(c,f,d,p,v,new ut),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:p,normal:new ut,materialIndex:0};Xi.getNormal(Nc,Oc,Pc,g.normal),m.face=g,m.barycoord=v}return m}class uu extends Es{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],v=[];let g=0,x=0;E("z","y","x",-1,-1,a,n,t,c,l,0),E("z","y","x",1,-1,a,n,-t,c,l,1),E("x","z","y",1,1,t,a,n,s,c,2),E("x","z","y",1,-1,t,a,-n,s,c,3),E("x","y","z",1,-1,t,n,a,s,l,4),E("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new vs(p,3)),this.setAttribute("normal",new vs(m,3)),this.setAttribute("uv",new vs(v,2));function E(M,S,y,L,U,A,N,I,O,F,b){const C=A/O,G=N/F,J=A/2,Q=N/2,at=I/2,ot=O+1,B=F+1;let X=0,W=0;const xt=new ut;for(let P=0;P<B;P++){const tt=P*G-Q;for(let mt=0;mt<ot;mt++){const St=mt*C-J;xt[M]=St*L,xt[S]=tt*U,xt[y]=at,p.push(xt.x,xt.y,xt.z),xt[M]=0,xt[S]=0,xt[y]=I>0?1:-1,m.push(xt.x,xt.y,xt.z),v.push(mt/O),v.push(1-P/F),X+=1}}for(let P=0;P<F;P++)for(let tt=0;tt<O;tt++){const mt=g+tt+ot*P,St=g+tt+ot*(P+1),j=g+(tt+1)+ot*(P+1),dt=g+(tt+1)+ot*P;d.push(mt,St,dt),d.push(St,j,dt),W+=6}f.addGroup(x,W,b),x+=W,g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Po(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Yn(o){const t={};for(let n=0;n<o.length;n++){const a=Po(o[n]);for(const s in a)t[s]=a[s]}return t}function cb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function rS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const fb={clone:Po,merge:Yn};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends _f{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Po(t.uniforms),this.uniformsGroups=cb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class sS extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=za}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ut,hx=new Ie,dx=new Ie;class ki extends sS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=cm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(Pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,n){return this.getViewBounds(t,hx,dx),n.subVectors(dx,hx)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Pd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*a/p,s*=c.width/d,a*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class pb extends Mi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ki(po,mo,t,n);s.layers=this.layers,this.add(s);const l=new ki(po,mo,t,n);l.layers=this.layers,this.add(l);const c=new ki(po,mo,t,n);c.layers=this.layers,this.add(c);const f=new ki(po,mo,t,n);f.layers=this.layers,this.add(f);const d=new ki(po,mo,t,n);d.layers=this.layers,this.add(d);const p=new ki(po,mo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,d]=n;for(const p of n)this.remove(p);if(t===za)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===ff)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,d),t.setRenderTarget(a,4,s),t.render(n,p),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,m),t.setRenderTarget(v,g,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class oS extends Wn{constructor(t=[],n=Lo,a,s,l,c,f,d,p,m){super(t,n,a,s,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mb extends Ss{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new oS(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uu(5,5,5),l=new Va({name:"CubemapFromEquirect",uniforms:Po(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Rr});l.uniforms.tEquirect.value=n;const c=new qi(s,l),f=n.minFilter;return n.minFilter===ds&&(n.minFilter=Gn),new pb(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Fc extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _b={type:"move"};class np{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),y=this._getHandJoint(p,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=m.position.distanceTo(v.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(_b)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Fc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class gb extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ga,this.environmentIntensity=1,this.environmentRotation=new Ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ip=new ut,vb=new ut,xb=new re;class os{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=ip.subVectors(a,n).cross(vb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(ip),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||xb.getNormalMatrix(t),s=this.coplanarPoint(ip).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Hm,Hc=new ut;class lS{constructor(t=new os,n=new os,a=new os,s=new os,l=new os,c=new os){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=za){const a=this.planes,s=t.elements,l=s[0],c=s[1],f=s[2],d=s[3],p=s[4],m=s[5],v=s[6],g=s[7],x=s[8],E=s[9],M=s[10],S=s[11],y=s[12],L=s[13],U=s[14],A=s[15];if(a[0].setComponents(d-l,g-p,S-x,A-y).normalize(),a[1].setComponents(d+l,g+p,S+x,A+y).normalize(),a[2].setComponents(d+c,g+m,S+E,A+L).normalize(),a[3].setComponents(d-c,g-m,S-E,A-L).normalize(),a[4].setComponents(d-f,g-v,S-M,A-U).normalize(),n===za)a[5].setComponents(d+f,g+v,S+M,A+U).normalize();else if(n===ff)a[5].setComponents(f,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Hc.x=s.normal.x>0?t.max.x:t.min.x,Hc.y=s.normal.y>0?t.max.y:t.min.y,Hc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uS extends Wn{constructor(t,n,a=ys,s,l,c,f=Yi,d=Yi,p,m=eu){if(m!==eu&&m!==nu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,l,c,f,d,m,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cu extends Es{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),d=Math.floor(s),p=f+1,m=d+1,v=t/f,g=n/d,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const L=y*g-c;for(let U=0;U<p;U++){const A=U*v-l;E.push(A,-L,0),M.push(0,0,1),S.push(U/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<f;L++){const U=L+p*y,A=L+p*(y+1),N=L+1+p*(y+1),I=L+1+p*y;x.push(U,A,I),x.push(A,N,I)}this.setIndex(x),this.setAttribute("position",new vs(E,3)),this.setAttribute("normal",new vs(M,3)),this.setAttribute("uv",new vs(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.widthSegments,t.heightSegments)}}class yb extends _f{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sb extends _f{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Mb{constructor(t,n,a){const s=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,f),c===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,g=p.length;v<g;v+=2){const x=p[v],E=p[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return E}return null}}}const Eb=new Mb;class Gm{constructor(t){this.manager=t!==void 0?t:Eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(s,l){a.load(t,s,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gm.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tb extends Gm{constructor(t){super(t)}load(t,n,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,c=px.get(t);if(c!==void 0)return l.manager.itemStart(t),setTimeout(function(){n&&n(c),l.manager.itemEnd(t)},0),c;const f=iu("img");function d(){m(),px.add(t,this),n&&n(this),l.manager.itemEnd(t)}function p(v){m(),s&&s(v),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(t),f.src=t,f}}class bb extends Gm{constructor(t){super(t)}load(t,n,a,s){const l=new Wn,c=new Tb(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,s),l}}class cS extends sS{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ab extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function mx(o,t,n,a){const s=Rb(a);switch(n){case qy:return o*t;case Zy:return o*t/s.components*s.byteLength;case zm:return o*t/s.components*s.byteLength;case jy:return o*t*2/s.components*s.byteLength;case Im:return o*t*2/s.components*s.byteLength;case Yy:return o*t*3/s.components*s.byteLength;case Wi:return o*t*4/s.components*s.byteLength;case Bm:return o*t*4/s.components*s.byteLength;case jc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fp:case Gp:return Math.max(o,16)*Math.max(t,8)/4;case Bp:case Hp:return Math.max(o,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case $c:case rm:case sm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ky:case om:return Math.ceil(o/4)*Math.ceil(t/4)*8;case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Rb(o){switch(o){case Ha:case ky:return{byteLength:1,components:1};case $l:case Xy:case ru:return{byteLength:2,components:1};case Om:case Pm:return{byteLength:2,components:4};case ys:case Nm:case Pa:return{byteLength:4,components:1};case Wy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fS(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function wb(o){const t=new WeakMap;function n(f,d){const p=f.array,m=f.usage,v=p.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,p){const m=d.array,v=d.updateRanges;if(o.bindBuffer(p,f),v.length===0)o.bufferSubData(p,0,m);else{v.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<v.length;x++){const E=v[g],M=v[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,v[g]=M)}v.length=g+1;for(let x=0,E=v.length;x<E;x++){const M=v[x];o.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:s,remove:l,update:c}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rA="gl_FragColor = linearToOutputTexel( gl_FragColor );",sA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_R=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ER=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$R=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Cb,alphahash_pars_fragment:Db,alphamap_fragment:Ub,alphamap_pars_fragment:Lb,alphatest_fragment:Nb,alphatest_pars_fragment:Ob,aomap_fragment:Pb,aomap_pars_fragment:zb,batching_pars_vertex:Ib,batching_vertex:Bb,begin_vertex:Fb,beginnormal_vertex:Hb,bsdfs:Gb,iridescence_fragment:Vb,bumpmap_pars_fragment:kb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:jb,color_pars_vertex:Kb,color_vertex:Qb,common:Jb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:tA,displacementmap_pars_vertex:eA,displacementmap_vertex:nA,emissivemap_fragment:iA,emissivemap_pars_fragment:aA,colorspace_fragment:rA,colorspace_pars_fragment:sA,envmap_fragment:oA,envmap_common_pars_fragment:lA,envmap_pars_fragment:uA,envmap_pars_vertex:cA,envmap_physical_pars_fragment:SA,envmap_vertex:fA,fog_vertex:hA,fog_pars_vertex:dA,fog_fragment:pA,fog_pars_fragment:mA,gradientmap_pars_fragment:_A,lightmap_pars_fragment:gA,lights_lambert_fragment:vA,lights_lambert_pars_fragment:xA,lights_pars_begin:yA,lights_toon_fragment:MA,lights_toon_pars_fragment:EA,lights_phong_fragment:TA,lights_phong_pars_fragment:bA,lights_physical_fragment:AA,lights_physical_pars_fragment:RA,lights_fragment_begin:wA,lights_fragment_maps:CA,lights_fragment_end:DA,logdepthbuf_fragment:UA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:NA,logdepthbuf_vertex:OA,map_fragment:PA,map_pars_fragment:zA,map_particle_fragment:IA,map_particle_pars_fragment:BA,metalnessmap_fragment:FA,metalnessmap_pars_fragment:HA,morphinstance_vertex:GA,morphcolor_vertex:VA,morphnormal_vertex:kA,morphtarget_pars_vertex:XA,morphtarget_vertex:WA,normal_fragment_begin:qA,normal_fragment_maps:YA,normal_pars_fragment:ZA,normal_pars_vertex:jA,normal_vertex:KA,normalmap_pars_fragment:QA,clearcoat_normal_fragment_begin:JA,clearcoat_normal_fragment_maps:$A,clearcoat_pars_fragment:tR,iridescence_pars_fragment:eR,opaque_fragment:nR,packing:iR,premultiplied_alpha_fragment:aR,project_vertex:rR,dithering_fragment:sR,dithering_pars_fragment:oR,roughnessmap_fragment:lR,roughnessmap_pars_fragment:uR,shadowmap_pars_fragment:cR,shadowmap_pars_vertex:fR,shadowmap_vertex:hR,shadowmask_pars_fragment:dR,skinbase_vertex:pR,skinning_pars_vertex:mR,skinning_vertex:_R,skinnormal_vertex:gR,specularmap_fragment:vR,specularmap_pars_fragment:xR,tonemapping_fragment:yR,tonemapping_pars_fragment:SR,transmission_fragment:MR,transmission_pars_fragment:ER,uv_pars_fragment:TR,uv_pars_vertex:bR,uv_vertex:AR,worldpos_vertex:RR,background_vert:wR,background_frag:CR,backgroundCube_vert:DR,backgroundCube_frag:UR,cube_vert:LR,cube_frag:NR,depth_vert:OR,depth_frag:PR,distanceRGBA_vert:zR,distanceRGBA_frag:IR,equirect_vert:BR,equirect_frag:FR,linedashed_vert:HR,linedashed_frag:GR,meshbasic_vert:VR,meshbasic_frag:kR,meshlambert_vert:XR,meshlambert_frag:WR,meshmatcap_vert:qR,meshmatcap_frag:YR,meshnormal_vert:ZR,meshnormal_frag:jR,meshphong_vert:KR,meshphong_frag:QR,meshphysical_vert:JR,meshphysical_frag:$R,meshtoon_vert:t2,meshtoon_frag:e2,points_vert:n2,points_frag:i2,shadow_vert:a2,shadow_frag:r2,sprite_vert:s2,sprite_frag:o2},Ct={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ea={basic:{uniforms:Yn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Yn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ze(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Yn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Yn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Yn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ze(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Yn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Yn([Ct.points,Ct.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Yn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Yn([Ct.common,Ct.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Yn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Yn([Ct.sprite,Ct.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Yn([Ct.common,Ct.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Yn([Ct.lights,Ct.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ea.physical={uniforms:Yn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Gc={r:0,b:0,g:0},as=new Ga,l2=new mn;function u2(o,t,n,a,s,l,c){const f=new ze(0);let d=l===!0?0:1,p,m,v=null,g=0,x=null;function E(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function M(U){let A=!1;const N=E(U);N===null?y(f,d):N&&N.isColor&&(y(N,1),A=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===mf)?(m===void 0&&(m=new qi(new uu(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Po(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),as.copy(A.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler(as)),m.material.toneMapped=be.getTransfer(N.colorSpace)!==Pe,(v!==N||g!==N.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,g=N.version,x=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new qi(new cu(2,2),new Va({name:"BackgroundMaterial",uniforms:Po(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=be.getTransfer(N.colorSpace)!==Pe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||g!==N.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,v=N,g=N.version,x=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,A){U.getRGB(Gc,rS(o)),a.buffers.color.setClear(Gc.r,Gc.g,Gc.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,A=1){f.set(U),d=A,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(f,d)},render:M,addToRenderList:S,dispose:L}}function c2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=g(null);let l=s,c=!1;function f(C,G,J,Q,at){let ot=!1;const B=v(Q,J,G);l!==B&&(l=B,p(l.object)),ot=x(C,Q,J,at),ot&&E(C,Q,J,at),at!==null&&t.update(at,o.ELEMENT_ARRAY_BUFFER),(ot||c)&&(c=!1,A(C,G,J,Q),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function d(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function m(C){return o.deleteVertexArray(C)}function v(C,G,J){const Q=J.wireframe===!0;let at=a[C.id];at===void 0&&(at={},a[C.id]=at);let ot=at[G.id];ot===void 0&&(ot={},at[G.id]=ot);let B=ot[Q];return B===void 0&&(B=g(d()),ot[Q]=B),B}function g(C){const G=[],J=[],Q=[];for(let at=0;at<n;at++)G[at]=0,J[at]=0,Q[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Q,object:C,attributes:{},index:null}}function x(C,G,J,Q){const at=l.attributes,ot=G.attributes;let B=0;const X=J.getAttributes();for(const W in X)if(X[W].location>=0){const P=at[W];let tt=ot[W];if(tt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),P===void 0||P.attribute!==tt||tt&&P.data!==tt.data)return!0;B++}return l.attributesNum!==B||l.index!==Q}function E(C,G,J,Q){const at={},ot=G.attributes;let B=0;const X=J.getAttributes();for(const W in X)if(X[W].location>=0){let P=ot[W];P===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const tt={};tt.attribute=P,P&&P.data&&(tt.data=P.data),at[W]=tt,B++}l.attributes=at,l.attributesNum=B,l.index=Q}function M(){const C=l.newAttributes;for(let G=0,J=C.length;G<J;G++)C[G]=0}function S(C){y(C,0)}function y(C,G){const J=l.newAttributes,Q=l.enabledAttributes,at=l.attributeDivisors;J[C]=1,Q[C]===0&&(o.enableVertexAttribArray(C),Q[C]=1),at[C]!==G&&(o.vertexAttribDivisor(C,G),at[C]=G)}function L(){const C=l.newAttributes,G=l.enabledAttributes;for(let J=0,Q=G.length;J<Q;J++)G[J]!==C[J]&&(o.disableVertexAttribArray(J),G[J]=0)}function U(C,G,J,Q,at,ot,B){B===!0?o.vertexAttribIPointer(C,G,J,at,ot):o.vertexAttribPointer(C,G,J,Q,at,ot)}function A(C,G,J,Q){M();const at=Q.attributes,ot=J.getAttributes(),B=G.defaultAttributeValues;for(const X in ot){const W=ot[X];if(W.location>=0){let xt=at[X];if(xt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const P=xt.normalized,tt=xt.itemSize,mt=t.get(xt);if(mt===void 0)continue;const St=mt.buffer,j=mt.type,dt=mt.bytesPerElement,yt=j===o.INT||j===o.UNSIGNED_INT||xt.gpuType===Nm;if(xt.isInterleavedBufferAttribute){const bt=xt.data,Dt=bt.stride,se=xt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)y(W.location+Zt,bt.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)S(W.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Zt=0;Zt<W.locationSize;Zt++)U(W.location+Zt,tt/W.locationSize,j,P,Dt*dt,(se+tt/W.locationSize*Zt)*dt,yt)}else{if(xt.isInstancedBufferAttribute){for(let bt=0;bt<W.locationSize;bt++)y(W.location+bt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let bt=0;bt<W.locationSize;bt++)S(W.location+bt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let bt=0;bt<W.locationSize;bt++)U(W.location+bt,tt/W.locationSize,j,P,tt*dt,tt/W.locationSize*bt*dt,yt)}}else if(B!==void 0){const P=B[X];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(W.location,P);break;case 3:o.vertexAttrib3fv(W.location,P);break;case 4:o.vertexAttrib4fv(W.location,P);break;default:o.vertexAttrib1fv(W.location,P)}}}}L()}function N(){F();for(const C in a){const G=a[C];for(const J in G){const Q=G[J];for(const at in Q)m(Q[at].object),delete Q[at];delete G[J]}delete a[C]}}function I(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const J in G){const Q=G[J];for(const at in Q)m(Q[at].object),delete Q[at];delete G[J]}delete a[C.id]}function O(C){for(const G in a){const J=a[G];if(J[C.id]===void 0)continue;const Q=J[C.id];for(const at in Q)m(Q[at].object),delete Q[at];delete J[C.id]}}function F(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function f2(o,t,n){let a;function s(p){a=p}function l(p,m){o.drawArrays(a,p,m),n.update(m,a,1)}function c(p,m,v){v!==0&&(o.drawArraysInstanced(a,p,m,v),n.update(m,a,v))}function f(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,v);let x=0;for(let E=0;E<v;E++)x+=m[E];n.update(x,a,1)}function d(p,m,v,g){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)c(p[E],m[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,m,0,g,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*g[M];n.update(E,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function h2(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Wi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const F=O===ru&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ha&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Pa&&!F)}function d(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=n.logarithmicDepthBuffer===!0,g=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function d2(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new os,f=new re,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||s;return s=g,a=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){n=m(v,g,0)},this.setState=function(v,g,x){const E=v.clippingPlanes,M=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!s||E===null||E.length===0||l&&!S)l?m(null):p();else{const L=l?0:a,U=L*4;let A=y.clippingState||null;d.value=A,A=m(E,g,U,x);for(let N=0;N!==U;++N)A[N]=n[N];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(v,g,x,E){const M=v!==null?v.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const y=x+M*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,A=x;U!==M;++U,A+=4)c.copy(v[U]).applyMatrix4(L,f),c.normal.toArray(S,A),S[A+3]=c.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function p2(o){let t=new WeakMap;function n(c,f){return f===Pp?c.mapping=Lo:f===zp&&(c.mapping=No),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Pp||f===zp)if(t.has(c)){const d=t.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new mb(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",s),n(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const xo=4,_x=[.125,.215,.35,.446,.526,.582],cs=20,ap=new cS,gx=new ze;let rp=null,sp=0,op=0,lp=!1;const ls=(1+Math.sqrt(5))/2,_o=1/ls,vx=[new ut(-ls,_o,0),new ut(ls,_o,0),new ut(-_o,0,ls),new ut(_o,0,ls),new ut(0,ls,-_o),new ut(0,ls,_o),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],m2=new ut;class xx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=m2}=l;rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rp,sp,op),this._renderer.xr.enabled=lp,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Lo||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ru,format:Wi,colorSpace:Oo,depthBuffer:!1},s=yx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_2(l)),this._blurMaterial=g2(l,t,n)}return s}_compileMaterial(t){const n=new qi(this._lodPlanes[0],t);this._renderer.compile(n,ap)}_sceneToCubeUV(t,n,a,s,l){const d=new ki(90,1,n,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(gx),v.toneMapping=wr,v.autoClear=!1;const E=new nS({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),M=new qi(new uu,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(gx),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):U===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const A=this._cubeSize;Vc(s,U*A,L>2?A:0,A,A),v.setRenderTarget(s),S&&v.render(M,d),v.render(t,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=g,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Lo||t.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new qi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Vc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,ap)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=vx[(s-l-1)%vx.length];this._blur(t,l-1,l,c,f)}n.autoClear=a}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new qi(this._lodPlanes[s],p),g=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*cs-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):cs;S>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cs}`);const y=[];let L=0;for(let O=0;O<cs;++O){const F=O/M,b=Math.exp(-F*F/2);y.push(b),O===0?L+=b:O<S&&(L+=2*b)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:U}=this;g.dTheta.value=E,g.mipInt.value=U-a;const A=this._sizeLods[s],N=3*A*(s>U-xo?s-U+xo:0),I=4*(this._cubeSize-A);Vc(n,N,I,3*A,2*A),d.setRenderTarget(n),d.render(v,ap)}}function _2(o){const t=[],n=[],a=[];let s=o;const l=o-xo+1+_x.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let d=1/f;c>o-xo?d=_x[c-o+xo-1]:c===0&&(d=0),a.push(d);const p=1/(f-2),m=-p,v=1+p,g=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,E=6,M=3,S=2,y=1,L=new Float32Array(M*E*x),U=new Float32Array(S*E*x),A=new Float32Array(y*E*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,F=I>2?0:-1,b=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];L.set(b,M*E*I),U.set(g,S*E*I);const C=[I,I,I,I,I,I];A.set(C,y*E*I)}const N=new Es;N.setAttribute("position",new ra(L,M)),N.setAttribute("uv",new ra(U,S)),N.setAttribute("faceIndex",new ra(A,y)),t.push(N),s>xo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function yx(o,t,n){const a=new Ss(o,t,n);return a.texture.mapping=mf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Vc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function g2(o,t,n){const a=new Float32Array(cs),s=new ut(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Sx(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Mx(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Vm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v2(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Pp||d===zp,m=d===Lo||d===No;if(p||m){let v=t.get(f);const g=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new xx(o)),v=p?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return p&&x&&x.height>0||m&&x&&s(x)?(n===null&&(n=new xx(o)),v=p?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function x2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&tf("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function y2(o,t,n,a){const s={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete s[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,n.memory.geometries++),g}function d(v){const g=v.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,E=v.attributes.position;let M=0;if(x!==null){const L=x.array;M=x.version;for(let U=0,A=L.length;U<A;U+=3){const N=L[U+0],I=L[U+1],O=L[U+2];g.push(N,I,I,O,O,N)}}else if(E!==void 0){const L=E.array;M=E.version;for(let U=0,A=L.length/3-1;U<A;U+=3){const N=U+0,I=U+1,O=U+2;g.push(N,I,I,O,O,N)}}else return;const S=new(Jy(g)?aS:iS)(g,1);S.version=M;const y=l.get(v);y&&t.remove(y),l.set(v,S)}function m(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function S2(o,t,n){let a;function s(g){a=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function d(g,x){o.drawElements(a,x,l,g*c),n.update(x,a,1)}function p(g,x,E){E!==0&&(o.drawElementsInstanced(a,x,l,g*c,E),n.update(x,a,E))}function m(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,g,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];n.update(S,a,1)}function v(g,x,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)p(g[y]/c,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,g,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=x[L]*M[L];n.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function M2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function E2(o,t,n){const a=new WeakMap,s=new on;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let C=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",C)};var x=C;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let N=f.attributes.position.count*A,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*I*4*v),F=new $y(O,N,I,v);F.type=Pa,F.needsUpdate=!0;const b=A*4;for(let G=0;G<v;G++){const J=y[G],Q=L[G],at=U[G],ot=N*I*4*G;for(let B=0;B<J.count;B++){const X=B*b;E===!0&&(s.fromBufferAttribute(J,B),O[ot+X+0]=s.x,O[ot+X+1]=s.y,O[ot+X+2]=s.z,O[ot+X+3]=0),M===!0&&(s.fromBufferAttribute(Q,B),O[ot+X+4]=s.x,O[ot+X+5]=s.y,O[ot+X+6]=s.z,O[ot+X+7]=0),S===!0&&(s.fromBufferAttribute(at,B),O[ot+X+8]=s.x,O[ot+X+9]=s.y,O[ot+X+10]=s.z,O[ot+X+11]=at.itemSize===4?s.w:1)}}g={count:v,texture:F,size:new Ie(N,I)},a.set(f,g),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function T2(o,t,n,a){let s=new WeakMap;function l(d){const p=a.render.frame,m=d.geometry,v=t.get(d,m);if(s.get(v)!==p&&(t.update(v),s.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==p&&(g.update(),s.set(g,p))}return v}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}const hS=new Wn,Ex=new uS(1,1),dS=new $y,pS=new Q1,mS=new oS,Tx=[],bx=[],Ax=new Float32Array(16),Rx=new Float32Array(9),wx=new Float32Array(4);function Io(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=Tx[s];if(l===void 0&&(l=new Float32Array(s),Tx[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function yn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Sn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function gf(o,t){let n=bx[t];n===void 0&&(n=new Int32Array(t),bx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function b2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function A2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2fv(this.addr,t),Sn(n,t)}}function R2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;o.uniform3fv(this.addr,t),Sn(n,t)}}function w2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4fv(this.addr,t),Sn(n,t)}}function C2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;wx.set(a),o.uniformMatrix2fv(this.addr,!1,wx),Sn(n,a)}}function D2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;Rx.set(a),o.uniformMatrix3fv(this.addr,!1,Rx),Sn(n,a)}}function U2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;Ax.set(a),o.uniformMatrix4fv(this.addr,!1,Ax),Sn(n,a)}}function L2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function N2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2iv(this.addr,t),Sn(n,t)}}function O2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3iv(this.addr,t),Sn(n,t)}}function P2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4iv(this.addr,t),Sn(n,t)}}function z2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function I2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2uiv(this.addr,t),Sn(n,t)}}function B2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3uiv(this.addr,t),Sn(n,t)}}function F2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4uiv(this.addr,t),Sn(n,t)}}function H2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Ex.compareFunction=Qy,l=Ex):l=hS,n.setTexture2D(t||l,s)}function G2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||pS,s)}function V2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||mS,s)}function k2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||dS,s)}function X2(o){switch(o){case 5126:return b2;case 35664:return A2;case 35665:return R2;case 35666:return w2;case 35674:return C2;case 35675:return D2;case 35676:return U2;case 5124:case 35670:return L2;case 35667:case 35671:return N2;case 35668:case 35672:return O2;case 35669:case 35673:return P2;case 5125:return z2;case 36294:return I2;case 36295:return B2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return H2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return k2}}function W2(o,t){o.uniform1fv(this.addr,t)}function q2(o,t){const n=Io(t,this.size,2);o.uniform2fv(this.addr,n)}function Y2(o,t){const n=Io(t,this.size,3);o.uniform3fv(this.addr,n)}function Z2(o,t){const n=Io(t,this.size,4);o.uniform4fv(this.addr,n)}function j2(o,t){const n=Io(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function K2(o,t){const n=Io(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Q2(o,t){const n=Io(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function J2(o,t){o.uniform1iv(this.addr,t)}function $2(o,t){o.uniform2iv(this.addr,t)}function tw(o,t){o.uniform3iv(this.addr,t)}function ew(o,t){o.uniform4iv(this.addr,t)}function nw(o,t){o.uniform1uiv(this.addr,t)}function iw(o,t){o.uniform2uiv(this.addr,t)}function aw(o,t){o.uniform3uiv(this.addr,t)}function rw(o,t){o.uniform4uiv(this.addr,t)}function sw(o,t,n){const a=this.cache,s=t.length,l=gf(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Sn(a,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||hS,l[c])}function ow(o,t,n){const a=this.cache,s=t.length,l=gf(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Sn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||pS,l[c])}function lw(o,t,n){const a=this.cache,s=t.length,l=gf(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Sn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||mS,l[c])}function uw(o,t,n){const a=this.cache,s=t.length,l=gf(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Sn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||dS,l[c])}function cw(o){switch(o){case 5126:return W2;case 35664:return q2;case 35665:return Y2;case 35666:return Z2;case 35674:return j2;case 35675:return K2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return $2;case 35668:case 35672:return tw;case 35669:case 35673:return ew;case 5125:return nw;case 36294:return iw;case 36295:return aw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return uw}}class fw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=X2(n.type)}}class hw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cw(n.type)}}class dw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const up=/(\w+)(\])?(\[|\.)?/g;function Cx(o,t){o.seq.push(t),o.map[t.id]=t}function pw(o,t,n){const a=o.name,s=a.length;for(up.lastIndex=0;;){const l=up.exec(a),c=up.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){Cx(n,p===void 0?new fw(f,o,t):new hw(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new dw(f),Cx(n,v)),n=v}}}class ef{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);pw(l,c,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function Dx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const mw=37297;let _w=0;function gw(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Ux=new re;function vw(o){be._getMatrix(Ux,be.workingColorSpace,o);const t=`mat3( ${Ux.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(o)){case cf:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Lx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(a&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+gw(o.getShaderSource(t),c)}else return s}function xw(o,t){const n=vw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yw(o,t){let n;switch(t){case M1:n="Linear";break;case E1:n="Reinhard";break;case T1:n="Cineon";break;case b1:n="ACESFilmic";break;case R1:n="AgX";break;case w1:n="Neutral";break;case A1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kc=new ut;function Sw(){be.getLuminanceCoefficients(kc);const o=kc.x.toFixed(4),t=kc.y.toFixed(4),n=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function Ew(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Tw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Hl(o){return o!==""}function Nx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ox(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function fm(o){return o.replace(bw,Rw)}const Aw=new Map;function Rw(o,t){let n=oe[t];if(n===void 0){const a=Aw.get(t);if(a!==void 0)n=oe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return fm(n)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(o){return o.replace(ww,Cw)}function Cw(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function zx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Hy?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===e1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ua&&(t="SHADOWMAP_TYPE_VSM"),t}function Uw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Lo:case No:t="ENVMAP_TYPE_CUBE";break;case mf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function Nw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Gy:t="ENVMAP_BLENDING_MULTIPLY";break;case y1:t="ENVMAP_BLENDING_MIX";break;case S1:t="ENVMAP_BLENDING_ADD";break}return t}function Ow(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function Pw(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=Dw(n),p=Uw(n),m=Lw(n),v=Nw(n),g=Ow(n),x=Mw(n),E=Ew(l),M=s.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Hl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Hl).join(`
`),y.length>0&&(y+=`
`)):(S=[zx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),y=[zx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?oe.tonemapping_pars_fragment:"",n.toneMapping!==wr?yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,xw("linearToOutputTexel",n.outputColorSpace),Sw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),c=fm(c),c=Nx(c,n),c=Ox(c,n),f=fm(f),f=Nx(f,n),f=Ox(f,n),c=Px(c),f=Px(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+S+c,A=L+y+f,N=Dx(s,s.VERTEX_SHADER,U),I=Dx(s,s.FRAGMENT_SHADER,A);s.attachShader(M,N),s.attachShader(M,I),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(G){if(o.debug.checkShaderErrors){const J=s.getProgramInfoLog(M).trim(),Q=s.getShaderInfoLog(N).trim(),at=s.getShaderInfoLog(I).trim();let ot=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,N,I);else{const X=Lx(s,N,"vertex"),W=Lx(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+X+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||at==="")&&(B=!1);B&&(G.diagnostics={runnable:ot,programLog:J,vertexShader:{log:Q,prefix:S},fragmentShader:{log:at,prefix:y}})}s.deleteShader(N),s.deleteShader(I),F=new ef(s,M),b=Tw(s,M)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,mw)),C},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_w++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=I,this}let zw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new Bw(t),n.set(t,a)),a}}class Bw{constructor(t){this.id=zw++,this.code=t,this.usedTimes=0}}function Fw(o,t,n,a,s,l,c){const f=new tS,d=new Iw,p=new Set,m=[],v=s.logarithmicDepthBuffer,g=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function S(b,C,G,J,Q){const at=J.fog,ot=Q.geometry,B=b.isMeshStandardMaterial?J.environment:null,X=(b.isMeshStandardMaterial?n:t).get(b.envMap||B),W=X&&X.mapping===mf?X.image.height:null,xt=E[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const P=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,tt=P!==void 0?P.length:0;let mt=0;ot.morphAttributes.position!==void 0&&(mt=1),ot.morphAttributes.normal!==void 0&&(mt=2),ot.morphAttributes.color!==void 0&&(mt=3);let St,j,dt,yt;if(xt){const Me=ea[xt];St=Me.vertexShader,j=Me.fragmentShader}else St=b.vertexShader,j=b.fragmentShader,d.update(b),dt=d.getVertexShaderID(b),yt=d.getFragmentShaderID(b);const bt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),se=Q.isInstancedMesh===!0,Zt=Q.isBatchedMesh===!0,Ve=!!b.map,Be=!!b.matcap,ce=!!X,V=!!b.aoMap,jn=!!b.lightMap,me=!!b.bumpMap,ne=!!b.normalMap,kt=!!b.displacementMap,De=!!b.emissiveMap,Ht=!!b.metalnessMap,z=!!b.roughnessMap,w=b.anisotropy>0,nt=b.clearcoat>0,_t=b.dispersion>0,Mt=b.iridescence>0,ht=b.sheen>0,Nt=b.transmission>0,At=w&&!!b.anisotropyMap,Ft=nt&&!!b.clearcoatMap,Qt=nt&&!!b.clearcoatNormalMap,Tt=nt&&!!b.clearcoatRoughnessMap,It=Mt&&!!b.iridescenceMap,qt=Mt&&!!b.iridescenceThicknessMap,jt=ht&&!!b.sheenColorMap,Ot=ht&&!!b.sheenRoughnessMap,le=!!b.specularMap,te=!!b.specularColorMap,Ue=!!b.specularIntensityMap,q=Nt&&!!b.transmissionMap,Ut=Nt&&!!b.thicknessMap,ct=!!b.gradientMap,gt=!!b.alphaMap,Pt=b.alphaTest>0,Lt=!!b.alphaHash,ie=!!b.extensions;let ke=wr;b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ke=o.toneMapping);const ln={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:St,fragmentShader:j,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Zt,batchingColor:Zt&&Q._colorsTexture!==null,instancing:se,instancingColor:se&&Q.instanceColor!==null,instancingMorph:se&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Oo,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:Be,envMap:ce,envMapMode:ce&&X.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:jn,bumpMap:me,normalMap:ne,displacementMap:g&&kt,emissiveMap:De,normalMapObjectSpace:ne&&b.normalMapType===N1,normalMapTangentSpace:ne&&b.normalMapType===L1,metalnessMap:Ht,roughnessMap:z,anisotropy:w,anisotropyMap:At,clearcoat:nt,clearcoatMap:Ft,clearcoatNormalMap:Qt,clearcoatRoughnessMap:Tt,dispersion:_t,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:ht,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:le,specularColorMap:te,specularIntensityMap:Ue,transmission:Nt,transmissionMap:q,thicknessMap:Ut,gradientMap:ct,opaque:b.transparent===!1&&b.blending===Eo&&b.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Lt,combine:b.combine,mapUv:Ve&&M(b.map.channel),aoMapUv:V&&M(b.aoMap.channel),lightMapUv:jn&&M(b.lightMap.channel),bumpMapUv:me&&M(b.bumpMap.channel),normalMapUv:ne&&M(b.normalMap.channel),displacementMapUv:kt&&M(b.displacementMap.channel),emissiveMapUv:De&&M(b.emissiveMap.channel),metalnessMapUv:Ht&&M(b.metalnessMap.channel),roughnessMapUv:z&&M(b.roughnessMap.channel),anisotropyMapUv:At&&M(b.anisotropyMap.channel),clearcoatMapUv:Ft&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&M(b.sheenRoughnessMap.channel),specularMapUv:le&&M(b.specularMap.channel),specularColorMapUv:te&&M(b.specularColorMap.channel),specularIntensityMapUv:Ue&&M(b.specularIntensityMap.channel),transmissionMapUv:q&&M(b.transmissionMap.channel),thicknessMapUv:Ut&&M(b.thicknessMap.channel),alphaMapUv:gt&&M(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ne||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(Ve||gt),fog:!!at,useFog:b.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:mt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oa,flipSided:b.side===si,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ie&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&b.extensions.multiDraw===!0||Zt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function y(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)C.push(G),C.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(L(C,b),U(C,b),C.push(o.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function U(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const C=E[b.type];let G;if(C){const J=ea[C];G=fb.clone(J.uniforms)}else G=b.uniforms;return G}function N(b,C){let G;for(let J=0,Q=m.length;J<Q;J++){const at=m[J];if(at.cacheKey===C){G=at,++G.usedTimes;break}}return G===void 0&&(G=new Pw(o,C,b,l),m.push(G)),G}function I(b){if(--b.usedTimes===0){const C=m.indexOf(b);m[C]=m[m.length-1],m.pop(),b.destroy()}}function O(b){d.remove(b)}function F(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:O,programs:m,dispose:F}}function Hw(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function Gw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ix(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Bx(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(v,g,x,E,M,S){let y=o[t];return y===void 0?(y={id:v.id,object:v,geometry:g,material:x,groupOrder:E,renderOrder:v.renderOrder,z:M,group:S},o[t]=y):(y.id=v.id,y.object=v,y.geometry=g,y.material=x,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=M,y.group=S),t++,y}function f(v,g,x,E,M,S){const y=c(v,g,x,E,M,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):n.push(y)}function d(v,g,x,E,M,S){const y=c(v,g,x,E,M,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):n.unshift(y)}function p(v,g){n.length>1&&n.sort(v||Gw),a.length>1&&a.sort(g||Ix),s.length>1&&s.sort(g||Ix)}function m(){for(let v=t,g=o.length;v<g;v++){const x=o[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:d,finish:m,sort:p}}function Vw(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new Bx,o.set(a,[c])):s>=l.length?(c=new Bx,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function kw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new ze};break;case"SpotLight":n={position:new ut,direction:new ut,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function Xw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let Ww=0;function qw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Yw(o){const t=new kw,n=Xw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ut);const s=new ut,l=new mn,c=new mn;function f(p){let m=0,v=0,g=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,L=0,U=0,A=0,N=0,I=0,O=0;p.sort(qw);for(let b=0,C=p.length;b<C;b++){const G=p[b],J=G.color,Q=G.intensity,at=G.distance,ot=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=J.r*Q,v+=J.g*Q,g+=J.b*Q;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],Q);O++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,W=n.get(G);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,a.directionalShadow[x]=W,a.directionalShadowMap[x]=ot,a.directionalShadowMatrix[x]=G.shadow.matrix,L++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(J).multiplyScalar(Q),B.distance=at,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[M]=B;const X=G.shadow;if(G.map&&(a.spotLightMap[N]=G.map,N++,X.updateMatrices(G),G.castShadow&&I++),a.spotLightMatrix[M]=X.matrix,G.castShadow){const W=n.get(G);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,a.spotShadow[M]=W,a.spotShadowMap[M]=ot,A++}M++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(J).multiplyScalar(Q),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const X=G.shadow,W=n.get(G);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,a.pointShadow[E]=W,a.pointShadowMap[E]=ot,a.pointShadowMatrix[E]=G.shadow.matrix,U++}a.point[E]=B,E++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(Q),B.groundColor.copy(G.groundColor).multiplyScalar(Q),a.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ct.LTC_FLOAT_1,a.rectAreaLTC2=Ct.LTC_FLOAT_2):(a.rectAreaLTC1=Ct.LTC_HALF_1,a.rectAreaLTC2=Ct.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=g;const F=a.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==L||F.numPointShadows!==U||F.numSpotShadows!==A||F.numSpotMaps!==N||F.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+N-I,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=O,F.directionalLength=x,F.pointLength=E,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=L,F.numPointShadows=U,F.numSpotShadows=A,F.numSpotMaps=N,F.numLightProbes=O,a.version=Ww++)}function d(p,m){let v=0,g=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const U=p[y];if(U.isDirectionalLight){const A=a.directional[v];A.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),v++}else if(U.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(U.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(U.isPointLight){const A=a.point[g];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),g++}else if(U.isHemisphereLight){const A=a.hemi[M];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:a}}function Fx(o){const t=new Yw(o),n=[],a=[];function s(m){p.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function c(m){a.push(m)}function f(){t.setup(n)}function d(m){t.setupView(n,m)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function Zw(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new Fx(o),t.set(s,[f])):l>=c.length?(f=new Fx(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qw(o,t,n){let a=new lS;const s=new Ie,l=new Ie,c=new on,f=new yb({depthPacking:U1}),d=new Sb,p={},m=n.maxTextureSize,v={[Ur]:si,[si]:Ur,[Oa]:Oa},g=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:jw,fragmentShader:Kw}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Es;E.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new qi(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hy;let y=this.type;this.render=function(I,O,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const b=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),J=o.state;J.setBlending(Rr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=y!==Ua&&this.type===Ua,at=y===Ua&&this.type!==Ua;for(let ot=0,B=I.length;ot<B;ot++){const X=I[ot],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const xt=W.getFrameExtents();if(s.multiply(xt),l.copy(W.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/xt.x),s.x=l.x*xt.x,W.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/xt.y),s.y=l.y*xt.y,W.mapSize.y=l.y)),W.map===null||Q===!0||at===!0){const tt=this.type!==Ua?{minFilter:Yi,magFilter:Yi}:{};W.map!==null&&W.map.dispose(),W.map=new Ss(s.x,s.y,tt),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const P=W.getViewportCount();for(let tt=0;tt<P;tt++){const mt=W.getViewport(tt);c.set(l.x*mt.x,l.y*mt.y,l.x*mt.z,l.y*mt.w),J.viewport(c),W.updateMatrices(X,tt),a=W.getFrustum(),A(O,F,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Ua&&L(W,F),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,C,G)};function L(I,O){const F=t.update(M);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ss(s.x,s.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(O,null,F,g,M,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(O,null,F,x,M,null)}function U(I,O,F,b){let C=null;const G=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=F.isPointLight===!0?d:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=C.uuid,Q=O.uuid;let at=p[J];at===void 0&&(at={},p[J]=at);let ot=at[Q];ot===void 0&&(ot=C.clone(),at[Q]=ot,O.addEventListener("dispose",N)),C=ot}if(C.visible=O.visible,C.wireframe=O.wireframe,b===Ua?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=o.properties.get(C);J.light=F}return C}function A(I,O,F,b,C){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Ua)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const Q=t.update(I),at=I.material;if(Array.isArray(at)){const ot=Q.groups;for(let B=0,X=ot.length;B<X;B++){const W=ot[B],xt=at[W.materialIndex];if(xt&&xt.visible){const P=U(I,xt,b,C);I.onBeforeShadow(o,I,O,F,Q,P,W),o.renderBufferDirect(F,null,Q,P,I,W),I.onAfterShadow(o,I,O,F,Q,P,W)}}}else if(at.visible){const ot=U(I,at,b,C);I.onBeforeShadow(o,I,O,F,Q,ot,null),o.renderBufferDirect(F,null,Q,ot,I,null),I.onAfterShadow(o,I,O,F,Q,ot,null)}}const J=I.children;for(let Q=0,at=J.length;Q<at;Q++)A(J[Q],O,F,b,C)}function N(I){I.target.removeEventListener("dispose",N);for(const F in p){const b=p[F],C=I.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const Jw={[wp]:Cp,[Dp]:Np,[Up]:Op,[Uo]:Lp,[Cp]:wp,[Np]:Dp,[Op]:Up,[Lp]:Uo};function $w(o,t){function n(){let q=!1;const Ut=new on;let ct=null;const gt=new on(0,0,0,0);return{setMask:function(Pt){ct!==Pt&&!q&&(o.colorMask(Pt,Pt,Pt,Pt),ct=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,Lt,ie,ke,ln){ln===!0&&(Pt*=ke,Lt*=ke,ie*=ke),Ut.set(Pt,Lt,ie,ke),gt.equals(Ut)===!1&&(o.clearColor(Pt,Lt,ie,ke),gt.copy(Ut))},reset:function(){q=!1,ct=null,gt.set(-1,0,0,0)}}}function a(){let q=!1,Ut=!1,ct=null,gt=null,Pt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const ke=Pt;Pt=null,this.setClear(ke)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?bt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(Lt){ct!==Lt&&!q&&(o.depthMask(Lt),ct=Lt)},setFunc:function(Lt){if(Ut&&(Lt=Jw[Lt]),gt!==Lt){switch(Lt){case wp:o.depthFunc(o.NEVER);break;case Cp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case Uo:o.depthFunc(o.LEQUAL);break;case Up:o.depthFunc(o.EQUAL);break;case Lp:o.depthFunc(o.GEQUAL);break;case Np:o.depthFunc(o.GREATER);break;case Op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Lt}},setLocked:function(Lt){q=Lt},setClear:function(Lt){Pt!==Lt&&(Ut&&(Lt=1-Lt),o.clearDepth(Lt),Pt=Lt)},reset:function(){q=!1,ct=null,gt=null,Pt=null,Ut=!1}}}function s(){let q=!1,Ut=null,ct=null,gt=null,Pt=null,Lt=null,ie=null,ke=null,ln=null;return{setTest:function(Me){q||(Me?bt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!q&&(o.stencilMask(Me),Ut=Me)},setFunc:function(Me,li,Mn){(ct!==Me||gt!==li||Pt!==Mn)&&(o.stencilFunc(Me,li,Mn),ct=Me,gt=li,Pt=Mn)},setOp:function(Me,li,Mn){(Lt!==Me||ie!==li||ke!==Mn)&&(o.stencilOp(Me,li,Mn),Lt=Me,ie=li,ke=Mn)},setLocked:function(Me){q=Me},setClear:function(Me){ln!==Me&&(o.clearStencil(Me),ln=Me)},reset:function(){q=!1,Ut=null,ct=null,gt=null,Pt=null,Lt=null,ie=null,ke=null,ln=null}}}const l=new n,c=new a,f=new s,d=new WeakMap,p=new WeakMap;let m={},v={},g=new WeakMap,x=[],E=null,M=!1,S=null,y=null,L=null,U=null,A=null,N=null,I=null,O=new ze(0,0,0),F=0,b=!1,C=null,G=null,J=null,Q=null,at=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=X>=2);let xt=null,P={};const tt=o.getParameter(o.SCISSOR_BOX),mt=o.getParameter(o.VIEWPORT),St=new on().fromArray(tt),j=new on().fromArray(mt);function dt(q,Ut,ct,gt){const Pt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(q,Lt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ct;ie++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ut+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Lt}const yt={};yt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),bt(o.DEPTH_TEST),c.setFunc(Uo),me(!1),ne(Xv),bt(o.CULL_FACE),V(Rr);function bt(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function Dt(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function se(q,Ut){return v[q]!==Ut?(o.bindFramebuffer(q,Ut),v[q]=Ut,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(q,Ut){let ct=x,gt=!1;if(q){ct=g.get(Ut),ct===void 0&&(ct=[],g.set(Ut,ct));const Pt=q.textures;if(ct.length!==Pt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ie=Pt.length;Lt<ie;Lt++)ct[Lt]=o.COLOR_ATTACHMENT0+Lt;ct.length=Pt.length,gt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ct)}function Ve(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Be={[us]:o.FUNC_ADD,[i1]:o.FUNC_SUBTRACT,[a1]:o.FUNC_REVERSE_SUBTRACT};Be[r1]=o.MIN,Be[s1]=o.MAX;const ce={[o1]:o.ZERO,[l1]:o.ONE,[u1]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[m1]:o.SRC_ALPHA_SATURATE,[d1]:o.DST_COLOR,[f1]:o.DST_ALPHA,[c1]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[p1]:o.ONE_MINUS_DST_COLOR,[h1]:o.ONE_MINUS_DST_ALPHA,[_1]:o.CONSTANT_COLOR,[g1]:o.ONE_MINUS_CONSTANT_COLOR,[v1]:o.CONSTANT_ALPHA,[x1]:o.ONE_MINUS_CONSTANT_ALPHA};function V(q,Ut,ct,gt,Pt,Lt,ie,ke,ln,Me){if(q===Rr){M===!0&&(Dt(o.BLEND),M=!1);return}if(M===!1&&(bt(o.BLEND),M=!0),q!==n1){if(q!==S||Me!==b){if((y!==us||A!==us)&&(o.blendEquation(o.FUNC_ADD),y=us,A=us),Me)switch(q){case Eo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wv:o.blendFunc(o.ONE,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Eo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,U=null,N=null,I=null,O.set(0,0,0),F=0,S=q,b=Me}return}Pt=Pt||Ut,Lt=Lt||ct,ie=ie||gt,(Ut!==y||Pt!==A)&&(o.blendEquationSeparate(Be[Ut],Be[Pt]),y=Ut,A=Pt),(ct!==L||gt!==U||Lt!==N||ie!==I)&&(o.blendFuncSeparate(ce[ct],ce[gt],ce[Lt],ce[ie]),L=ct,U=gt,N=Lt,I=ie),(ke.equals(O)===!1||ln!==F)&&(o.blendColor(ke.r,ke.g,ke.b,ln),O.copy(ke),F=ln),S=q,b=!1}function jn(q,Ut){q.side===Oa?Dt(o.CULL_FACE):bt(o.CULL_FACE);let ct=q.side===si;Ut&&(ct=!ct),me(ct),q.blending===Eo&&q.transparent===!1?V(Rr):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const gt=q.stencilWrite;f.setTest(gt),gt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),De(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function me(q){C!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),C=q)}function ne(q){q!==$T?(bt(o.CULL_FACE),q!==G&&(q===Xv?o.cullFace(o.BACK):q===t1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),G=q}function kt(q){q!==J&&(B&&o.lineWidth(q),J=q)}function De(q,Ut,ct){q?(bt(o.POLYGON_OFFSET_FILL),(Q!==Ut||at!==ct)&&(o.polygonOffset(Ut,ct),Q=Ut,at=ct)):Dt(o.POLYGON_OFFSET_FILL)}function Ht(q){q?bt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function z(q){q===void 0&&(q=o.TEXTURE0+ot-1),xt!==q&&(o.activeTexture(q),xt=q)}function w(q,Ut,ct){ct===void 0&&(xt===null?ct=o.TEXTURE0+ot-1:ct=xt);let gt=P[ct];gt===void 0&&(gt={type:void 0,texture:void 0},P[ct]=gt),(gt.type!==q||gt.texture!==Ut)&&(xt!==ct&&(o.activeTexture(ct),xt=ct),o.bindTexture(q,Ut||yt[q]),gt.type=q,gt.texture=Ut)}function nt(){const q=P[xt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(q){St.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),St.copy(q))}function Ot(q){j.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),j.copy(q))}function le(q,Ut){let ct=p.get(Ut);ct===void 0&&(ct=new WeakMap,p.set(Ut,ct));let gt=ct.get(q);gt===void 0&&(gt=o.getUniformBlockIndex(Ut,q.name),ct.set(q,gt))}function te(q,Ut){const gt=p.get(Ut).get(q);d.get(Ut)!==gt&&(o.uniformBlockBinding(Ut,gt,q.__bindingPointIndex),d.set(Ut,gt))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},xt=null,P={},v={},g=new WeakMap,x=[],E=null,M=!1,S=null,y=null,L=null,U=null,A=null,N=null,I=null,O=new ze(0,0,0),F=0,b=!1,C=null,G=null,J=null,Q=null,at=null,St.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:bt,disable:Dt,bindFramebuffer:se,drawBuffers:Zt,useProgram:Ve,setBlending:V,setMaterial:jn,setFlipSided:me,setCullFace:ne,setLineWidth:kt,setPolygonOffset:De,setScissorTest:Ht,activeTexture:z,bindTexture:w,unbindTexture:nt,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:It,texImage3D:qt,updateUBOMapping:le,uniformBlockBinding:te,texStorage2D:Qt,texStorage3D:Tt,texSubImage2D:ht,texSubImage3D:Nt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ft,scissor:jt,viewport:Ot,reset:Ue}}function tC(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,m=new WeakMap;let v;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,w){return x?new OffscreenCanvas(z,w):iu("canvas")}function M(z,w,nt){let _t=1;const Mt=Ht(z);if((Mt.width>nt||Mt.height>nt)&&(_t=nt/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ht=Math.floor(_t*Mt.width),Nt=Math.floor(_t*Mt.height);v===void 0&&(v=E(ht,Nt));const At=w?E(ht,Nt):v;return At.width=ht,At.height=Nt,At.getContext("2d").drawImage(z,0,0,ht,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Nt+")."),At}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),z;return z}function S(z){return z.generateMipmaps}function y(z){o.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,w,nt,_t,Mt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ht=w;if(w===o.RED&&(nt===o.FLOAT&&(ht=o.R32F),nt===o.HALF_FLOAT&&(ht=o.R16F),nt===o.UNSIGNED_BYTE&&(ht=o.R8)),w===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.R8UI),nt===o.UNSIGNED_SHORT&&(ht=o.R16UI),nt===o.UNSIGNED_INT&&(ht=o.R32UI),nt===o.BYTE&&(ht=o.R8I),nt===o.SHORT&&(ht=o.R16I),nt===o.INT&&(ht=o.R32I)),w===o.RG&&(nt===o.FLOAT&&(ht=o.RG32F),nt===o.HALF_FLOAT&&(ht=o.RG16F),nt===o.UNSIGNED_BYTE&&(ht=o.RG8)),w===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),nt===o.UNSIGNED_INT&&(ht=o.RG32UI),nt===o.BYTE&&(ht=o.RG8I),nt===o.SHORT&&(ht=o.RG16I),nt===o.INT&&(ht=o.RG32I)),w===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),nt===o.UNSIGNED_INT&&(ht=o.RGB32UI),nt===o.BYTE&&(ht=o.RGB8I),nt===o.SHORT&&(ht=o.RGB16I),nt===o.INT&&(ht=o.RGB32I)),w===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),nt===o.BYTE&&(ht=o.RGBA8I),nt===o.SHORT&&(ht=o.RGBA16I),nt===o.INT&&(ht=o.RGBA32I)),w===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),w===o.RGBA){const Nt=Mt?cf:be.getTransfer(_t);nt===o.FLOAT&&(ht=o.RGBA32F),nt===o.HALF_FLOAT&&(ht=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ht=Nt===Pe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function A(z,w){let nt;return z?w===null||w===ys||w===tu?nt=o.DEPTH24_STENCIL8:w===Pa?nt=o.DEPTH32F_STENCIL8:w===$l&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===tu?nt=o.DEPTH_COMPONENT24:w===Pa?nt=o.DEPTH_COMPONENT32F:w===$l&&(nt=o.DEPTH_COMPONENT16),nt}function N(z,w){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Yi&&z.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function I(z){const w=z.target;w.removeEventListener("dispose",I),F(w),w.isVideoTexture&&m.delete(w)}function O(z){const w=z.target;w.removeEventListener("dispose",O),C(w)}function F(z){const w=a.get(z);if(w.__webglInit===void 0)return;const nt=z.source,_t=g.get(nt);if(_t){const Mt=_t[w.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&b(z),Object.keys(_t).length===0&&g.delete(nt)}a.remove(z)}function b(z){const w=a.get(z);o.deleteTexture(w.__webglTexture);const nt=z.source,_t=g.get(nt);delete _t[w.__cacheKey],c.memory.textures--}function C(z){const w=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(w.__webglFramebuffer[_t]))for(let Mt=0;Mt<w.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(w.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(w.__webglFramebuffer[_t]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[_t])}else{if(Array.isArray(w.__webglFramebuffer))for(let _t=0;_t<w.__webglFramebuffer.length;_t++)o.deleteFramebuffer(w.__webglFramebuffer[_t]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _t=0;_t<w.__webglColorRenderbuffer.length;_t++)w.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[_t]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const nt=z.textures;for(let _t=0,Mt=nt.length;_t<Mt;_t++){const ht=a.get(nt[_t]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),c.memory.textures--),a.remove(nt[_t])}a.remove(z)}let G=0;function J(){G=0}function Q(){const z=G;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),G+=1,z}function at(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function ot(z,w){const nt=a.get(z);if(z.isVideoTexture&&kt(z),z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){const _t=z.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(nt,z,w);return}}n.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+w)}function B(z,w){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){j(nt,z,w);return}n.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+w)}function X(z,w){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){j(nt,z,w);return}n.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+w)}function W(z,w){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){dt(nt,z,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+w)}const xt={[Jl]:o.REPEAT,[hs]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},P={[Yi]:o.NEAREST,[C1]:o.NEAREST_MIPMAP_NEAREST,[Mc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Od]:o.LINEAR_MIPMAP_NEAREST,[ds]:o.LINEAR_MIPMAP_LINEAR},tt={[O1]:o.NEVER,[H1]:o.ALWAYS,[P1]:o.LESS,[Qy]:o.LEQUAL,[z1]:o.EQUAL,[F1]:o.GEQUAL,[I1]:o.GREATER,[B1]:o.NOTEQUAL};function mt(z,w){if(w.type===Pa&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===Od||w.magFilter===Mc||w.magFilter===ds||w.minFilter===Gn||w.minFilter===Od||w.minFilter===Mc||w.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,xt[w.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,xt[w.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,xt[w.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,P[w.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,P[w.minFilter]),w.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yi||w.minFilter!==Mc&&w.minFilter!==ds||w.type===Pa&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function St(z,w){let nt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",I));const _t=w.source;let Mt=g.get(_t);Mt===void 0&&(Mt={},g.set(_t,Mt));const ht=at(w);if(ht!==z.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),Mt[ht].usedTimes++;const Nt=Mt[z.__cacheKey];Nt!==void 0&&(Mt[z.__cacheKey].usedTimes--,Nt.usedTimes===0&&b(w)),z.__cacheKey=ht,z.__webglTexture=Mt[ht].texture}return nt}function j(z,w,nt){let _t=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=St(z,w),ht=w.source;n.bindTexture(_t,z.__webglTexture,o.TEXTURE0+nt);const Nt=a.get(ht);if(ht.version!==Nt.__version||Mt===!0){n.activeTexture(o.TEXTURE0+nt);const At=be.getPrimaries(be.workingColorSpace),Ft=w.colorSpace===Sr?null:be.getPrimaries(w.colorSpace),Qt=w.colorSpace===Sr||At===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Tt=M(w.image,!1,s.maxTextureSize);Tt=De(w,Tt);const It=l.convert(w.format,w.colorSpace),qt=l.convert(w.type);let jt=U(w.internalFormat,It,qt,w.colorSpace,w.isVideoTexture);mt(_t,w);let Ot;const le=w.mipmaps,te=w.isVideoTexture!==!0,Ue=Nt.__version===void 0||Mt===!0,q=ht.dataReady,Ut=N(w,Tt);if(w.isDepthTexture)jt=A(w.format===nu,w.type),Ue&&(te?n.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,null));else if(w.isDataTexture)if(le.length>0){te&&Ue&&n.texStorage2D(o.TEXTURE_2D,Ut,jt,le[0].width,le[0].height);for(let ct=0,gt=le.length;ct<gt;ct++)Ot=le[ct],te?q&&n.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,It,qt,Ot.data):n.texImage2D(o.TEXTURE_2D,ct,jt,Ot.width,Ot.height,0,It,qt,Ot.data);w.generateMipmaps=!1}else te?(Ue&&n.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height),q&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,qt,Tt.data)):n.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,Tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){te&&Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,le[0].width,le[0].height,Tt.depth);for(let ct=0,gt=le.length;ct<gt;ct++)if(Ot=le[ct],w.format!==Wi)if(It!==null)if(te){if(q)if(w.layerUpdates.size>0){const Pt=mx(Ot.width,Ot.height,w.format,w.type);for(const Lt of w.layerUpdates){const ie=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Lt,Ot.width,Ot.height,1,It,ie)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,Tt.depth,It,Ot.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?q&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,Tt.depth,It,qt,Ot.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ct,jt,Ot.width,Ot.height,Tt.depth,0,It,qt,Ot.data)}else{te&&Ue&&n.texStorage2D(o.TEXTURE_2D,Ut,jt,le[0].width,le[0].height);for(let ct=0,gt=le.length;ct<gt;ct++)Ot=le[ct],w.format!==Wi?It!==null?te?q&&n.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,It,Ot.data):n.compressedTexImage2D(o.TEXTURE_2D,ct,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?q&&n.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,It,qt,Ot.data):n.texImage2D(o.TEXTURE_2D,ct,jt,Ot.width,Ot.height,0,It,qt,Ot.data)}else if(w.isDataArrayTexture)if(te){if(Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,Tt.width,Tt.height,Tt.depth),q)if(w.layerUpdates.size>0){const ct=mx(Tt.width,Tt.height,w.format,w.type);for(const gt of w.layerUpdates){const Pt=Tt.data.subarray(gt*ct/Tt.data.BYTES_PER_ELEMENT,(gt+1)*ct/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,It,qt,Pt)}w.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(w.isData3DTexture)te?(Ue&&n.texStorage3D(o.TEXTURE_3D,Ut,jt,Tt.width,Tt.height,Tt.depth),q&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(w.isFramebufferTexture){if(Ue)if(te)n.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height);else{let ct=Tt.width,gt=Tt.height;for(let Pt=0;Pt<Ut;Pt++)n.texImage2D(o.TEXTURE_2D,Pt,jt,ct,gt,0,It,qt,null),ct>>=1,gt>>=1}}else if(le.length>0){if(te&&Ue){const ct=Ht(le[0]);n.texStorage2D(o.TEXTURE_2D,Ut,jt,ct.width,ct.height)}for(let ct=0,gt=le.length;ct<gt;ct++)Ot=le[ct],te?q&&n.texSubImage2D(o.TEXTURE_2D,ct,0,0,It,qt,Ot):n.texImage2D(o.TEXTURE_2D,ct,jt,It,qt,Ot);w.generateMipmaps=!1}else if(te){if(Ue){const ct=Ht(Tt);n.texStorage2D(o.TEXTURE_2D,Ut,jt,ct.width,ct.height)}q&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,Tt)}else n.texImage2D(o.TEXTURE_2D,0,jt,It,qt,Tt);S(w)&&y(_t),Nt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function dt(z,w,nt){if(w.image.length!==6)return;const _t=St(z,w),Mt=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+nt);const ht=a.get(Mt);if(Mt.version!==ht.__version||_t===!0){n.activeTexture(o.TEXTURE0+nt);const Nt=be.getPrimaries(be.workingColorSpace),At=w.colorSpace===Sr?null:be.getPrimaries(w.colorSpace),Ft=w.colorSpace===Sr||Nt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Qt=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!Qt&&!Tt?It[gt]=M(w.image[gt],!0,s.maxCubemapSize):It[gt]=Tt?w.image[gt].image:w.image[gt],It[gt]=De(w,It[gt]);const qt=It[0],jt=l.convert(w.format,w.colorSpace),Ot=l.convert(w.type),le=U(w.internalFormat,jt,Ot,w.colorSpace),te=w.isVideoTexture!==!0,Ue=ht.__version===void 0||_t===!0,q=Mt.dataReady;let Ut=N(w,qt);mt(o.TEXTURE_CUBE_MAP,w);let ct;if(Qt){te&&Ue&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,qt.width,qt.height);for(let gt=0;gt<6;gt++){ct=It[gt].mipmaps;for(let Pt=0;Pt<ct.length;Pt++){const Lt=ct[Pt];w.format!==Wi?jt!==null?te?q&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Lt.width,Lt.height,jt,Lt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,le,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?q&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Lt.width,Lt.height,jt,Ot,Lt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,le,Lt.width,Lt.height,0,jt,Ot,Lt.data)}}}else{if(ct=w.mipmaps,te&&Ue){ct.length>0&&Ut++;const gt=Ht(It[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){te?q&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,jt,Ot,It[gt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,It[gt].width,It[gt].height,0,jt,Ot,It[gt].data);for(let Pt=0;Pt<ct.length;Pt++){const ie=ct[Pt].image[gt].image;te?q&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,ie.width,ie.height,jt,Ot,ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,le,ie.width,ie.height,0,jt,Ot,ie.data)}}else{te?q&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,Ot,It[gt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,jt,Ot,It[gt]);for(let Pt=0;Pt<ct.length;Pt++){const Lt=ct[Pt];te?q&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,jt,Ot,Lt.image[gt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,le,jt,Ot,Lt.image[gt])}}}S(w)&&y(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function yt(z,w,nt,_t,Mt,ht){const Nt=l.convert(nt.format,nt.colorSpace),At=l.convert(nt.type),Ft=U(nt.internalFormat,Nt,At,nt.colorSpace),Qt=a.get(w),Tt=a.get(nt);if(Tt.__renderTarget=w,!Qt.__hasExternalTextures){const It=Math.max(1,w.width>>ht),qt=Math.max(1,w.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ht,Ft,It,qt,w.depth,0,Nt,At,null):n.texImage2D(Mt,ht,Ft,It,qt,0,Nt,At,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),ne(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,Tt.__webglTexture,0,me(w)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,Tt.__webglTexture,ht),n.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(z,w,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,z),w.depthBuffer){const _t=w.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ht=A(w.stencilBuffer,Mt),Nt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=me(w);ne(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ht,w.width,w.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ht,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ht,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,z)}else{const _t=w.textures;for(let Mt=0;Mt<_t.length;Mt++){const ht=_t[Mt],Nt=l.convert(ht.format,ht.colorSpace),At=l.convert(ht.type),Ft=U(ht.internalFormat,Nt,At,ht.colorSpace),Qt=me(w);nt&&ne(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Ft,w.width,w.height):ne(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Ft,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(z,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=a.get(w.depthTexture);_t.__renderTarget=w,(!_t.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ot(w.depthTexture,0);const Mt=_t.__webglTexture,ht=me(w);if(w.depthTexture.format===eu)ne(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(w.depthTexture.format===nu)ne(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function se(z){const w=a.get(z),nt=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const _t=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),_t){const Mt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),w.__depthDisposeCallback=Mt}w.__boundDepthTexture=_t}if(z.depthTexture&&!w.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const _t=z.texture.mipmaps;_t&&_t.length>0?Dt(w.__webglFramebuffer[0],z):Dt(w.__webglFramebuffer,z)}else if(nt){w.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[_t]),w.__webglDepthbuffer[_t]===void 0)w.__webglDepthbuffer[_t]=o.createRenderbuffer(),bt(w.__webglDepthbuffer[_t],z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else{const _t=z.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),bt(w.__webglDepthbuffer,z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(z,w,nt){const _t=a.get(z);w!==void 0&&yt(_t.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&se(z)}function Ve(z){const w=z.texture,nt=a.get(z),_t=a.get(w);z.addEventListener("dispose",O);const Mt=z.textures,ht=z.isWebGLCubeRenderTarget===!0,Nt=Mt.length>1;if(Nt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=w.version,c.memory.textures++),ht){nt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer[At]=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)nt.__webglFramebuffer[At][Ft]=o.createFramebuffer()}else nt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer=[];for(let At=0;At<w.mipmaps.length;At++)nt.__webglFramebuffer[At]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let At=0,Ft=Mt.length;At<Ft;At++){const Qt=a.get(Mt[At]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&ne(z)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Ft=Mt[At];nt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[At]);const Qt=l.convert(Ft.format,Ft.colorSpace),Tt=l.convert(Ft.type),It=U(Ft.internalFormat,Qt,Tt,Ft.colorSpace,z.isXRRenderTarget===!0),qt=me(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,nt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(nt.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){n.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),mt(o.TEXTURE_CUBE_MAP,w);for(let At=0;At<6;At++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)yt(nt.__webglFramebuffer[At][Ft],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else yt(nt.__webglFramebuffer[At],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(w)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Nt){for(let At=0,Ft=Mt.length;At<Ft;At++){const Qt=Mt[At],Tt=a.get(Qt);n.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),mt(o.TEXTURE_2D,Qt),yt(nt.__webglFramebuffer,z,Qt,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),S(Qt)&&y(o.TEXTURE_2D)}n.unbindTexture()}else{let At=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(At=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(At,_t.__webglTexture),mt(At,w),w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)yt(nt.__webglFramebuffer[Ft],z,w,o.COLOR_ATTACHMENT0,At,Ft);else yt(nt.__webglFramebuffer,z,w,o.COLOR_ATTACHMENT0,At,0);S(w)&&y(At),n.unbindTexture()}z.depthBuffer&&se(z)}function Be(z){const w=z.textures;for(let nt=0,_t=w.length;nt<_t;nt++){const Mt=w[nt];if(S(Mt)){const ht=L(z),Nt=a.get(Mt).__webglTexture;n.bindTexture(ht,Nt),y(ht),n.unbindTexture()}}}const ce=[],V=[];function jn(z){if(z.samples>0){if(ne(z)===!1){const w=z.textures,nt=z.width,_t=z.height;let Mt=o.COLOR_BUFFER_BIT;const ht=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=a.get(z),At=w.length>1;if(At)for(let Qt=0;Qt<w.length;Qt++)n.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ft=z.texture.mipmaps;Ft&&Ft.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Qt=0;Qt<w.length;Qt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const Tt=a.get(w[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,nt,_t,0,0,nt,_t,Mt,o.NEAREST),d===!0&&(ce.length=0,V.length=0,ce.push(o.COLOR_ATTACHMENT0+Qt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ce.push(ht),V.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Qt=0;Qt<w.length;Qt++){n.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const Tt=a.get(w[Qt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const w=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function me(z){return Math.min(s.maxSamples,z.samples)}function ne(z){const w=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function kt(z){const w=c.render.frame;m.get(z)!==w&&(m.set(z,w),z.update())}function De(z,w){const nt=z.colorSpace,_t=z.format,Mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||nt!==Oo&&nt!==Sr&&(be.getTransfer(nt)===Pe?(_t!==Wi||Mt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),w}function Ht(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=ot,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=jn,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ne}function eC(o,t){function n(a,s=Sr){let l;const c=be.getTransfer(s);if(a===Ha)return o.UNSIGNED_BYTE;if(a===Om)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Pm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Wy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===ky)return o.BYTE;if(a===Xy)return o.SHORT;if(a===$l)return o.UNSIGNED_SHORT;if(a===Nm)return o.INT;if(a===ys)return o.UNSIGNED_INT;if(a===Pa)return o.FLOAT;if(a===ru)return o.HALF_FLOAT;if(a===qy)return o.ALPHA;if(a===Yy)return o.RGB;if(a===Wi)return o.RGBA;if(a===eu)return o.DEPTH_COMPONENT;if(a===nu)return o.DEPTH_STENCIL;if(a===Zy)return o.RED;if(a===zm)return o.RED_INTEGER;if(a===jy)return o.RG;if(a===Im)return o.RG_INTEGER;if(a===Bm)return o.RGBA_INTEGER;if(a===jc||a===Kc||a===Qc||a===Jc)if(c===Pe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===jc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Jc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===jc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Kc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Jc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Bp||a===Fp||a===Hp||a===Gp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Bp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vp||a===kp||a===Xp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Vp||a===kp)return c===Pe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wp||a===qp||a===Yp||a===Zp||a===jp||a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Wp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$p)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tm)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===em)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===nm)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===im)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===am)return c===Pe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$c||a===rm||a===sm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===$c)return c===Pe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ky||a===om||a===lm||a===um)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===$c)return l.COMPRESSED_RED_RGTC1_EXT;if(a===om)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===lm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===um)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===tu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const s=new Wn,l=t.properties.get(s);l.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Va({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new cu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rC extends zo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,v=null,g=null,x=null,E=null;const M=new aC,S=n.getContextAttributes();let y=null,L=null;const U=[],A=[],N=new Ie;let I=null;const O=new ki;O.viewport=new on;const F=new ki;F.viewport=new on;const b=[O,F],C=new Ab;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=U[j];return dt===void 0&&(dt=new np,U[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=U[j];return dt===void 0&&(dt=new np,U[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=U[j];return dt===void 0&&(dt=new np,U[j]=dt),dt.getHandSpace()};function Q(j){const dt=A.indexOf(j.inputSource);if(dt===-1)return;const yt=U[dt];yt!==void 0&&(yt.update(j.inputSource,j.frame,p||c),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function at(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",ot);for(let j=0;j<U.length;j++){const dt=A[j];dt!==null&&(A[j]=null,U[j].disconnect(dt))}G=null,J=null,M.reset(),t.setRenderTarget(y),x=null,g=null,v=null,s=null,L=null,St.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",at),s.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,Dt=null;S.depth&&(Dt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=S.stencil?nu:eu,bt=S.stencil?tu:ys);const se={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:l};v=new XRWebGLBinding(s,n),g=v.createProjectionLayer(se),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Ss(g.textureWidth,g.textureHeight,{format:Wi,type:Ha,depthTexture:new uS(g.textureWidth,g.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Ss(x.framebufferWidth,x.framebufferHeight,{format:Wi,type:Ha,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),St.setContext(s),St.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ot(j){for(let dt=0;dt<j.removed.length;dt++){const yt=j.removed[dt],bt=A.indexOf(yt);bt>=0&&(A[bt]=null,U[bt].disconnect(yt))}for(let dt=0;dt<j.added.length;dt++){const yt=j.added[dt];let bt=A.indexOf(yt);if(bt===-1){for(let se=0;se<U.length;se++)if(se>=A.length){A.push(yt),bt=se;break}else if(A[se]===null){A[se]=yt,bt=se;break}if(bt===-1)break}const Dt=U[bt];Dt&&Dt.connect(yt)}}const B=new ut,X=new ut;function W(j,dt,yt){B.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);const bt=B.distanceTo(X),Dt=dt.projectionMatrix.elements,se=yt.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),Ve=Dt[14]/(Dt[10]+1),Be=(Dt[9]+1)/Dt[5],ce=(Dt[9]-1)/Dt[5],V=(Dt[8]-1)/Dt[0],jn=(se[8]+1)/se[0],me=Zt*V,ne=Zt*jn,kt=bt/(-V+jn),De=kt*-V;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Dt[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ht=Zt+kt,z=Ve+kt,w=me-De,nt=ne+(bt-De),_t=Be*Ve/z*Ht,Mt=ce*Ve/z*Ht;j.projectionMatrix.makePerspective(w,nt,_t,Mt,Ht,z),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let dt=j.near,yt=j.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),C.near=F.near=O.near=dt,C.far=F.far=O.far=yt,(G!==C.near||J!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,J=C.far),O.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,C.layers.mask=O.layers.mask|F.layers.mask;const bt=j.parent,Dt=C.cameras;xt(C,bt);for(let se=0;se<Dt.length;se++)xt(Dt[se],bt);Dt.length===2?W(C,O,F):C.projectionMatrix.copy(O.projectionMatrix),P(j,C,bt)};function P(j,dt,yt){yt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cm*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(j){d=j,g!==null&&(g.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let tt=null;function mt(j,dt){if(m=dt.getViewerPose(p||c),E=dt,m!==null){const yt=m.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let bt=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Zt=0;Zt<yt.length;Zt++){const Ve=yt[Zt];let Be=null;if(x!==null)Be=x.getViewport(Ve);else{const V=v.getViewSubImage(g,Ve);Be=V.viewport,Zt===0&&(t.setRenderTargetTextures(L,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(L))}let ce=b[Zt];ce===void 0&&(ce=new ki,ce.layers.enable(Zt),ce.viewport=new on,b[Zt]=ce),ce.matrix.fromArray(Ve.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ve.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Be.x,Be.y,Be.width,Be.height),Zt===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(ce)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(yt[0]);Zt&&Zt.isValid&&Zt.texture&&M.init(t,Zt,s.renderState)}}for(let yt=0;yt<U.length;yt++){const bt=A[yt],Dt=U[yt];bt!==null&&Dt!==void 0&&Dt.update(bt,dt,p||c)}tt&&tt(j,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),E=null}const St=new fS;St.setAnimationLoop(mt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}const rs=new Ga,sC=new mn;function oC(o,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,rS(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,U,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),M(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,L,U):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===si&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===si&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,A=L.envMapRotation;U&&(S.envMap.value=U,rs.copy(A),rs.x*=-1,rs.y*=-1,rs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),S.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(rs)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=U*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function lC(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const A=U.program;a.uniformBlockBinding(L,A)}function p(L,U){let A=s[L.id];A===void 0&&(E(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",S));const N=U.program;a.updateUBOMapping(L,N);const I=t.render.frame;l[L.id]!==I&&(g(L),l[L.id]=I)}function m(L){const U=v();L.__bindingPointIndex=U;const A=o.createBuffer(),N=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,N,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,A),A}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const U=s[L.id],A=L.uniforms,N=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let I=0,O=A.length;I<O;I++){const F=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,C=F.length;b<C;b++){const G=F[b];if(x(G,I,b,N)===!0){const J=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let at=0;for(let ot=0;ot<Q.length;ot++){const B=Q[ot],X=M(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,J+at,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,at),at+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,U,A,N){const I=L.value,O=U+"_"+A;if(N[O]===void 0)return typeof I=="number"||typeof I=="boolean"?N[O]=I:N[O]=I.clone(),!0;{const F=N[O];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[O]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(L){const U=L.uniforms;let A=0;const N=16;for(let O=0,F=U.length;O<F;O++){const b=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,G=b.length;C<G;C++){const J=b[C],Q=Array.isArray(J.value)?J.value:[J.value];for(let at=0,ot=Q.length;at<ot;at++){const B=Q[at],X=M(B),W=A%N,xt=W%X.boundary,P=W+xt;A+=xt,P!==0&&N-P<X.storage&&(A+=N-P),J.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=X.storage}}}const I=A%N;return I>0&&(A+=N-I),L.__size=A,L.__cache={},this}function M(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const A=c.indexOf(U.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete l[U.id]}function y(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:d,update:p,dispose:y}}class uC{constructor(t={}){const{canvas:n=V1(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Oi;let I=0,O=0,F=null,b=-1,C=null;const G=new on,J=new on;let Q=null;const at=new ze(0);let ot=0,B=n.width,X=n.height,W=1,xt=null,P=null;const tt=new on(0,0,B,X),mt=new on(0,0,B,X);let St=!1;const j=new lS;let dt=!1,yt=!1;const bt=new mn,Dt=new mn,se=new ut,Zt=new on,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ce(){return F===null?W:1}let V=a;function jn(D,Z){return n.getContext(D,Z)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lm}`),n.addEventListener("webglcontextlost",gt,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),V===null){const Z="webgl2";if(V=jn(Z,D),V===null)throw jn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let me,ne,kt,De,Ht,z,w,nt,_t,Mt,ht,Nt,At,Ft,Qt,Tt,It,qt,jt,Ot,le,te,Ue,q;function Ut(){me=new x2(V),me.init(),te=new eC(V,me),ne=new h2(V,me,t,te),kt=new $w(V,me),ne.reverseDepthBuffer&&g&&kt.buffers.depth.setReversed(!0),De=new M2(V),Ht=new Hw,z=new tC(V,me,kt,Ht,ne,te,De),w=new p2(A),nt=new v2(A),_t=new wb(V),Ue=new c2(V,_t),Mt=new y2(V,_t,De,Ue),ht=new T2(V,Mt,_t,De),jt=new E2(V,ne,z),Tt=new d2(Ht),Nt=new Fw(A,w,nt,me,ne,Ue,Tt),At=new oC(A,Ht),Ft=new Vw,Qt=new Zw(me),qt=new u2(A,w,nt,kt,ht,x,d),It=new Qw(A,ht,ne),q=new lC(V,De,ne,kt),Ot=new f2(V,me,De),le=new S2(V,me,De),De.programs=Nt.programs,A.capabilities=ne,A.extensions=me,A.properties=Ht,A.renderLists=Ft,A.shadowMap=It,A.state=kt,A.info=De}Ut();const ct=new rC(A,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=me.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=me.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(B,X,!1))},this.getSize=function(D){return D.set(B,X)},this.setSize=function(D,Z,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,X=Z,n.width=Math.floor(D*W),n.height=Math.floor(Z*W),st===!0&&(n.style.width=D+"px",n.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(B*W,X*W).floor()},this.setDrawingBufferSize=function(D,Z,st){B=D,X=Z,W=st,n.width=Math.floor(D*st),n.height=Math.floor(Z*st),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(G)},this.getViewport=function(D){return D.copy(tt)},this.setViewport=function(D,Z,st,lt){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,Z,st,lt),kt.viewport(G.copy(tt).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(mt)},this.setScissor=function(D,Z,st,lt){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,Z,st,lt),kt.scissor(J.copy(mt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(D){kt.setScissorTest(St=D)},this.setOpaqueSort=function(D){xt=D},this.setTransparentSort=function(D){P=D},this.getClearColor=function(D){return D.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,st=!0){let lt=0;if(D){let K=!1;if(F!==null){const Et=F.texture.format;K=Et===Bm||Et===Im||Et===zm}if(K){const Et=F.texture.type,Rt=Et===Ha||Et===ys||Et===$l||Et===tu||Et===Om||Et===Pm,wt=qt.getClearColor(),zt=qt.getClearAlpha(),Jt=wt.r,Xt=wt.g,Vt=wt.b;Rt?(E[0]=Jt,E[1]=Xt,E[2]=Vt,E[3]=zt,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=Jt,M[1]=Xt,M[2]=Vt,M[3]=zt,V.clearBufferiv(V.COLOR,0,M))}else lt|=V.COLOR_BUFFER_BIT}Z&&(lt|=V.DEPTH_BUFFER_BIT),st&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),qt.dispose(),Ft.dispose(),Qt.dispose(),Ht.dispose(),w.dispose(),nt.dispose(),ht.dispose(),Ue.dispose(),q.dispose(),Nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",_n),ct.removeEventListener("sessionend",Cn),Kn.stop()};function gt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const D=De.autoReset,Z=It.enabled,st=It.autoUpdate,lt=It.needsUpdate,K=It.type;Ut(),De.autoReset=D,It.enabled=Z,It.autoUpdate=st,It.needsUpdate=lt,It.type=K}function Lt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ie(D){const Z=D.target;Z.removeEventListener("dispose",ie),ke(Z)}function ke(D){ln(D),Ht.remove(D)}function ln(D){const Z=Ht.get(D).programs;Z!==void 0&&(Z.forEach(function(st){Nt.releaseProgram(st)}),D.isShaderMaterial&&Nt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,st,lt,K,Et){Z===null&&(Z=Ve);const Rt=K.isMesh&&K.matrixWorld.determinant()<0,wt=Pr(D,Z,st,lt,K);kt.setMaterial(lt,Rt);let zt=st.index,Jt=1;if(lt.wireframe===!0){if(zt=Mt.getWireframeAttribute(st),zt===void 0)return;Jt=2}const Xt=st.drawRange,Vt=st.attributes.position;let he=Xt.start*Jt,Ee=(Xt.start+Xt.count)*Jt;Et!==null&&(he=Math.max(he,Et.start*Jt),Ee=Math.min(Ee,(Et.start+Et.count)*Jt)),zt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,zt.count)):Vt!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,Vt.count));const Ze=Ee-he;if(Ze<0||Ze===1/0)return;Ue.setup(K,lt,wt,st,zt);let _e,ge=Ot;if(zt!==null&&(_e=_t.get(zt),ge=le,ge.setIndex(_e)),K.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*ce()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if(K.isLine){let Wt=lt.linewidth;Wt===void 0&&(Wt=1),kt.setLineWidth(Wt*ce()),K.isLineSegments?ge.setMode(V.LINES):K.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else K.isPoints?ge.setMode(V.POINTS):K.isSprite&&ge.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)tf("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Wt=K._multiDrawStarts,Je=K._multiDrawCounts,Se=K._multiDrawCount,Pn=zt?_t.get(zt).bytesPerElement:1,qa=Ht.get(lt).currentProgram.getUniforms();for(let Xe=0;Xe<Se;Xe++)qa.setValue(V,"_gl_DrawID",Xe),ge.render(Wt[Xe]/Pn,Je[Xe])}else if(K.isInstancedMesh)ge.renderInstances(he,Ze,K.count);else if(st.isInstancedBufferGeometry){const Wt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Je=Math.min(st.instanceCount,Wt);ge.renderInstances(he,Ze,Je)}else ge.render(he,Ze)};function Me(D,Z,st){D.transparent===!0&&D.side===Oa&&D.forceSinglePass===!1?(D.side=si,D.needsUpdate=!0,Xa(D,Z,st),D.side=Ur,D.needsUpdate=!0,Xa(D,Z,st),D.side=Oa):Xa(D,Z,st)}this.compile=function(D,Z,st=null){st===null&&(st=D),y=Qt.get(st),y.init(Z),U.push(y),st.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),D!==st&&D.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const lt=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const wt=Et[Rt];Me(wt,st,K),lt.add(wt)}else Me(Et,st,K),lt.add(Et)}),y=U.pop(),lt},this.compileAsync=function(D,Z,st=null){const lt=this.compile(D,Z,st);return new Promise(K=>{function Et(){if(lt.forEach(function(Rt){Ht.get(Rt).currentProgram.isReady()&&lt.delete(Rt)}),lt.size===0){K(D);return}setTimeout(Et,10)}me.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let li=null;function Mn(D){li&&li(D)}function _n(){Kn.stop()}function Cn(){Kn.start()}const Kn=new fS;Kn.setAnimationLoop(Mn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(D){li=D,ct.setAnimationLoop(D),D===null?Kn.stop():Kn.start()},ct.addEventListener("sessionstart",_n),ct.addEventListener("sessionend",Cn),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Z,F),y=Qt.get(D,U.length),y.init(Z),U.push(y),Dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,yt),S=Ft.get(D,L.length),S.init(),L.push(S),ct.enabled===!0&&ct.isPresenting===!0){const Et=A.xr.getDepthSensingMesh();Et!==null&&Nr(Et,Z,-1/0,A.sortObjects)}Nr(D,Z,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(xt,P),Be=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Be&&qt.addToRenderList(S,D),this.info.render.frame++,dt===!0&&Tt.beginShadows();const st=y.state.shadowsArray;It.render(st,D,Z),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,K=S.transmissive;if(y.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(K.length>0)for(let Rt=0,wt=Et.length;Rt<wt;Rt++){const zt=Et[Rt];hu(lt,K,D,zt)}Be&&qt.render(D);for(let Rt=0,wt=Et.length;Rt<wt;Rt++){const zt=Et[Rt];fu(S,D,zt,zt.viewport)}}else K.length>0&&hu(lt,K,D,Z),Be&&qt.render(D),fu(S,D,Z);F!==null&&O===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(A,D,Z),Ue.resetDefaultState(),b=-1,C=null,U.pop(),U.length>0?(y=U[U.length-1],dt===!0&&Tt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Nr(D,Z,st,lt){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||j.intersectsSprite(D)){lt&&Zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Dt);const Rt=ht.update(D),wt=D.material;wt.visible&&S.push(D,Rt,wt,st,Zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||j.intersectsObject(D))){const Rt=ht.update(D),wt=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Zt.copy(D.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Zt.copy(Rt.boundingSphere.center)),Zt.applyMatrix4(D.matrixWorld).applyMatrix4(Dt)),Array.isArray(wt)){const zt=Rt.groups;for(let Jt=0,Xt=zt.length;Jt<Xt;Jt++){const Vt=zt[Jt],he=wt[Vt.materialIndex];he&&he.visible&&S.push(D,Rt,he,st,Zt.z,Vt)}}else wt.visible&&S.push(D,Rt,wt,st,Zt.z,null)}}const Et=D.children;for(let Rt=0,wt=Et.length;Rt<wt;Rt++)Nr(Et[Rt],Z,st,lt)}function fu(D,Z,st,lt){const K=D.opaque,Et=D.transmissive,Rt=D.transparent;y.setupLightsView(st),dt===!0&&Tt.setGlobalState(A.clippingPlanes,st),lt&&kt.viewport(G.copy(lt)),K.length>0&&Or(K,Z,st),Et.length>0&&Or(Et,Z,st),Rt.length>0&&Or(Rt,Z,st),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function hu(D,Z,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new Ss(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?ru:Ha,minFilter:ds,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=y.state.transmissionRenderTarget[lt.id],Rt=lt.viewport||G;Et.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);const wt=A.getRenderTarget();A.setRenderTarget(Et),A.getClearColor(at),ot=A.getClearAlpha(),ot<1&&A.setClearColor(16777215,.5),A.clear(),Be&&qt.render(st);const zt=A.toneMapping;A.toneMapping=wr;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),dt===!0&&Tt.setGlobalState(A.clippingPlanes,lt),Or(D,st,lt),z.updateMultisampleRenderTarget(Et),z.updateRenderTargetMipmap(Et),me.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Vt=0,he=Z.length;Vt<he;Vt++){const Ee=Z[Vt],Ze=Ee.object,_e=Ee.geometry,ge=Ee.material,Wt=Ee.group;if(ge.side===Oa&&Ze.layers.test(lt.layers)){const Je=ge.side;ge.side=si,ge.needsUpdate=!0,ka(Ze,st,lt,_e,ge,Wt),ge.side=Je,ge.needsUpdate=!0,Xt=!0}}Xt===!0&&(z.updateMultisampleRenderTarget(Et),z.updateRenderTargetMipmap(Et))}A.setRenderTarget(wt),A.setClearColor(at,ot),Jt!==void 0&&(lt.viewport=Jt),A.toneMapping=zt}function Or(D,Z,st){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Et=D.length;K<Et;K++){const Rt=D[K],wt=Rt.object,zt=Rt.geometry,Jt=Rt.group;let Xt=Rt.material;Xt.allowOverride===!0&&lt!==null&&(Xt=lt),wt.layers.test(st.layers)&&ka(wt,Z,st,zt,Xt,Jt)}}function ka(D,Z,st,lt,K,Et){D.onBeforeRender(A,Z,st,lt,K,Et),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(A,Z,st,lt,D,Et),K.transparent===!0&&K.side===Oa&&K.forceSinglePass===!1?(K.side=si,K.needsUpdate=!0,A.renderBufferDirect(st,Z,lt,K,D,Et),K.side=Ur,K.needsUpdate=!0,A.renderBufferDirect(st,Z,lt,K,D,Et),K.side=Oa):A.renderBufferDirect(st,Z,lt,K,D,Et),D.onAfterRender(A,Z,st,lt,K,Et)}function Xa(D,Z,st){Z.isScene!==!0&&(Z=Ve);const lt=Ht.get(D),K=y.state.lights,Et=y.state.shadowsArray,Rt=K.state.version,wt=Nt.getParameters(D,K.state,Et,Z,st),zt=Nt.getProgramCacheKey(wt);let Jt=lt.programs;lt.environment=D.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(D.isMeshStandardMaterial?nt:w).get(D.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,Jt===void 0&&(D.addEventListener("dispose",ie),Jt=new Map,lt.programs=Jt);let Xt=Jt.get(zt);if(Xt!==void 0){if(lt.currentProgram===Xt&&lt.lightsStateVersion===Rt)return la(D,wt),Xt}else wt.uniforms=Nt.getUniforms(D),D.onBeforeCompile(wt,A),Xt=Nt.acquireProgram(wt,zt),Jt.set(zt,Xt),lt.uniforms=wt.uniforms;const Vt=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),la(D,wt),lt.needsLights=un(D),lt.lightsStateVersion=Rt,lt.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.directionalShadowMap.value=K.state.directionalShadowMap,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotShadowMap.value=K.state.spotShadowMap,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMap.value=K.state.pointShadowMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=Xt,lt.uniformsList=null,Xt}function oa(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=ef.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function la(D,Z){const st=Ht.get(D);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function Pr(D,Z,st,lt,K){Z.isScene!==!0&&(Z=Ve),z.resetTextureUnits();const Et=Z.fog,Rt=lt.isMeshStandardMaterial?Z.environment:null,wt=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Oo,zt=(lt.isMeshStandardMaterial?nt:w).get(lt.envMap||Rt),Jt=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Xt=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Ee=!!st.morphAttributes.color;let Ze=wr;lt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const _e=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ge=_e!==void 0?_e.length:0,Wt=Ht.get(lt),Je=y.state.lights;if(dt===!0&&(yt===!0||D!==C)){const En=D===C&&lt.id===b;Tt.setState(lt,D,En)}let Se=!1;lt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Je.state.version||Wt.outputColorSpace!==wt||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isBatchedMesh&&Wt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Wt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Wt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Wt.instancingMorph===!1&&K.morphTexture!==null||Wt.envMap!==zt||lt.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==Xt||Wt.morphTargets!==Vt||Wt.morphNormals!==he||Wt.morphColors!==Ee||Wt.toneMapping!==Ze||Wt.morphTargetsCount!==ge)&&(Se=!0):(Se=!0,Wt.__version=lt.version);let Pn=Wt.currentProgram;Se===!0&&(Pn=Xa(lt,Z,K));let qa=!1,Xe=!1,ca=!1;const Fe=Pn.getUniforms(),zn=Wt.uniforms;if(kt.useProgram(Pn.program)&&(qa=!0,Xe=!0,ca=!0),lt.id!==b&&(b=lt.id,Xe=!0),qa||C!==D){kt.buffers.depth.getReversed()?(bt.copy(D.projectionMatrix),X1(bt),W1(bt),Fe.setValue(V,"projectionMatrix",bt)):Fe.setValue(V,"projectionMatrix",D.projectionMatrix),Fe.setValue(V,"viewMatrix",D.matrixWorldInverse);const Dn=Fe.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,se.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&Fe.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Fe.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,Xe=!0,ca=!0)}if(K.isSkinnedMesh){Fe.setOptional(V,K,"bindMatrix"),Fe.setOptional(V,K,"bindMatrixInverse");const En=K.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Fe.setValue(V,"boneTexture",En.boneTexture,z))}K.isBatchedMesh&&(Fe.setOptional(V,K,"batchingTexture"),Fe.setValue(V,"batchingTexture",K._matricesTexture,z),Fe.setOptional(V,K,"batchingIdTexture"),Fe.setValue(V,"batchingIdTexture",K._indirectTexture,z),Fe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(V,"batchingColorTexture",K._colorsTexture,z));const gn=st.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&jt.update(K,st,Pn),(Xe||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,Fe.setValue(V,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(zn.envMap.value=zt,zn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),Xe&&(Fe.setValue(V,"toneMappingExposure",A.toneMappingExposure),Wt.needsLights&&Wa(zn,ca),Et&&lt.fog===!0&&At.refreshFogUniforms(zn,Et),At.refreshMaterialUniforms(zn,lt,W,X,y.state.transmissionRenderTarget[D.id]),ef.upload(V,oa(Wt),zn,z)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ef.upload(V,oa(Wt),zn,z),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Fe.setValue(V,"center",K.center),Fe.setValue(V,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(V,"normalMatrix",K.normalMatrix),Fe.setValue(V,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const En=lt.uniformsGroups;for(let Dn=0,Zi=En.length;Dn<Zi;Dn++){const fa=En[Dn];q.update(fa,Pn),q.bind(fa,Pn)}}return Pn}function Wa(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function un(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,Z,st){const lt=Ht.get(D);lt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ht.get(D.texture).__webglTexture=Z,Ht.get(D.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:st,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const st=Ht.get(D);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const du=V.createFramebuffer();this.setRenderTarget=function(D,Z=0,st=0){F=D,I=Z,O=st;let lt=!0,K=null,Et=!1,Rt=!1;if(D){const zt=Ht.get(D);if(zt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(zt.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(zt.__hasExternalTextures)z.rebindTextures(D,Ht.get(D.texture).__webglTexture,Ht.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Vt=D.depthTexture;if(zt.__boundDepthTexture!==Vt){if(Vt!==null&&Ht.has(Vt)&&(D.width!==Vt.image.width||D.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Jt=D.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Rt=!0);const Xt=Ht.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xt[Z])?K=Xt[Z][st]:K=Xt[Z],Et=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?K=Ht.get(D).__webglMultisampledFramebuffer:Array.isArray(Xt)?K=Xt[st]:K=Xt,G.copy(D.viewport),J.copy(D.scissor),Q=D.scissorTest}else G.copy(tt).multiplyScalar(W).floor(),J.copy(mt).multiplyScalar(W).floor(),Q=St;if(st!==0&&(K=du),kt.bindFramebuffer(V.FRAMEBUFFER,K)&&lt&&kt.drawBuffers(D,K),kt.viewport(G),kt.scissor(J),kt.setScissorTest(Q),Et){const zt=Ht.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,st)}else if(Rt){const zt=Ht.get(D.texture),Jt=Z;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.__webglTexture,st,Jt)}else if(D!==null&&st!==0){const zt=Ht.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zt.__webglTexture,st)}b=-1},this.readRenderTargetPixels=function(D,Z,st,lt,K,Et,Rt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt]),wt){kt.bindFramebuffer(V.FRAMEBUFFER,wt);try{const zt=D.texture,Jt=zt.format,Xt=zt.type;if(!ne.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-lt&&st>=0&&st<=D.height-K&&V.readPixels(Z,st,lt,K,te.convert(Jt),te.convert(Xt),Et)}finally{const zt=F!==null?Ht.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(D,Z,st,lt,K,Et,Rt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt]),wt)if(Z>=0&&Z<=D.width-lt&&st>=0&&st<=D.height-K){kt.bindFramebuffer(V.FRAMEBUFFER,wt);const zt=D.texture,Jt=zt.format,Xt=zt.type;if(!ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Vt),V.bufferData(V.PIXEL_PACK_BUFFER,Et.byteLength,V.STREAM_READ),V.readPixels(Z,st,lt,K,te.convert(Jt),te.convert(Xt),0);const he=F!==null?Ht.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,he);const Ee=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await k1(V,Ee,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Vt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Et),V.deleteBuffer(Vt),V.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,st=0){const lt=Math.pow(2,-st),K=Math.floor(D.image.width*lt),Et=Math.floor(D.image.height*lt),Rt=Z!==null?Z.x:0,wt=Z!==null?Z.y:0;z.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Rt,wt,K,Et),kt.unbindTexture()};const pu=V.createFramebuffer(),ua=V.createFramebuffer();this.copyTextureToTexture=function(D,Z,st=null,lt=null,K=0,Et=null){Et===null&&(K!==0?(tf("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Rt,wt,zt,Jt,Xt,Vt,he,Ee,Ze;const _e=D.isCompressedTexture?D.mipmaps[Et]:D.image;if(st!==null)Rt=st.max.x-st.min.x,wt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,Xt=st.min.y,Vt=st.isBox3?st.min.z:0;else{const gn=Math.pow(2,-K);Rt=Math.floor(_e.width*gn),wt=Math.floor(_e.height*gn),D.isDataArrayTexture?zt=_e.depth:D.isData3DTexture?zt=Math.floor(_e.depth*gn):zt=1,Jt=0,Xt=0,Vt=0}lt!==null?(he=lt.x,Ee=lt.y,Ze=lt.z):(he=0,Ee=0,Ze=0);const ge=te.convert(Z.format),Wt=te.convert(Z.type);let Je;Z.isData3DTexture?(z.setTexture3D(Z,0),Je=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(z.setTexture2DArray(Z,0),Je=V.TEXTURE_2D_ARRAY):(z.setTexture2D(Z,0),Je=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Se=V.getParameter(V.UNPACK_ROW_LENGTH),Pn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qa=V.getParameter(V.UNPACK_SKIP_PIXELS),Xe=V.getParameter(V.UNPACK_SKIP_ROWS),ca=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,_e.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Xt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Vt);const Fe=D.isDataArrayTexture||D.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const gn=Ht.get(D),En=Ht.get(Z),Dn=Ht.get(gn.__renderTarget),Zi=Ht.get(En.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let fa=0;fa<zt;fa++)Fe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.get(D).__webglTexture,K,Vt+fa),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.get(Z).__webglTexture,Et,Ze+fa)),V.blitFramebuffer(Jt,Xt,Rt,wt,he,Ee,Rt,wt,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||Ht.has(D)){const gn=Ht.get(D),En=Ht.get(Z);kt.bindFramebuffer(V.READ_FRAMEBUFFER,pu),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ua);for(let Dn=0;Dn<zt;Dn++)Fe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,K,Vt+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,K),zn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Et,Ze+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Et),K!==0?V.blitFramebuffer(Jt,Xt,Rt,wt,he,Ee,Rt,wt,V.COLOR_BUFFER_BIT,V.NEAREST):zn?V.copyTexSubImage3D(Je,Et,he,Ee,Ze+Dn,Jt,Xt,Rt,wt):V.copyTexSubImage2D(Je,Et,he,Ee,Jt,Xt,Rt,wt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(Je,Et,he,Ee,Ze,Rt,wt,zt,ge,Wt,_e.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Je,Et,he,Ee,Ze,Rt,wt,zt,ge,_e.data):V.texSubImage3D(Je,Et,he,Ee,Ze,Rt,wt,zt,ge,Wt,_e):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Et,he,Ee,Rt,wt,ge,Wt,_e.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Et,he,Ee,_e.width,_e.height,ge,_e.data):V.texSubImage2D(V.TEXTURE_2D,Et,he,Ee,Rt,wt,ge,Wt,_e);V.pixelStorei(V.UNPACK_ROW_LENGTH,Se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qa),V.pixelStorei(V.UNPACK_SKIP_ROWS,Xe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ca),Et===0&&Z.generateMipmaps&&V.generateMipmap(Je),kt.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,st=null,lt=null,K=0){return tf('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Z,st,lt,K)},this.initRenderTarget=function(D){Ht.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),kt.unbindTexture()},this.resetState=function(){I=0,O=0,F=null,kt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}const cC=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AYCEgcul3/LRgAAIABJREFUeNrsvW2PJLmRphkRzKz6mp2Z3ZkV8S3EMCAJ0EqAJCD//59RK2AFCJAAQcDuzO50lZkZ38ySl8GD2wPuTDI72Z2ZPa4Rnr7KzMquzGKYMYOZ2WtmxhOPlNJ933ddj+3Yvuu+XTf+Pf5Y+3v85Ckl4yOPW/U2Okqz6/t+0POKvm+6vtHRbNcbHmxbfvzuuj7vcQqjM2oaj9Okw7Zt+TfxNJrGmqZpmoZ/0KG+GsfjD61p2rZ1zmnXdV3HXdf1LBwd+LPx5nhoiO840n0N2Gw2nPT4OA0nPVw8OlM+p/Fqdd34XXo7XpS4HuN1H5+OEcfZfpRLMZzpeP8YYXzkMd3G52O0wVkPCTGeP73d6HTGG0E38G682sMoFp35eAodLkHbtZzR+DTwivQmZ5tXnI6IEzHGGh5Mhm27JmfC00qOSZ/GIc71fBNw+uMlw0WMnOWZcPNwLfHoOBJnN96TLh7njMPRFcOBkQ+XDOc/Xs7xCoyPPN67XJzTSY9nNP5Tr+o4QHnHxgtpbdtxwkmHw5m0bYNH5hVreHZdu1wjjE/XYrxXHBJd07iWl76npfZd9xmnNfL99DxN2oZm1z2dNj+7zDIKfjSxYXCOX9oN48Q0Q+J5x95y0SfmSbWOlr8+Ojpd5oYLfNaHRUdEY/UoHi+aXtvFJqgJo7PNP8cnNHk5cLxfODcdbbwiuJSLXdo9fofMg1tGWDqNu7qjuiOvaxqcqZF9hgXx4V5qZB4Ys+nHRw6/QxpPe+cMz8fTcmf6Ri/Dl/hfvXDxG/yvXrN8C9uyDW/CZnpdNRzYtzQxbdh2TS3QRiEPsB+ehscbmRMfNnhVzSEuH5mHXhHLPAg0HDLTkAfiXIfZNmE+8Gw8UGYt0xBvnbRZG7ahX3xYzA4vy2a8OOOl1QZNt9gMTXO8LRpmRrQNfcqHI50GiC/YxjkuFkaDt08bTgXHsC04FKOBDF06Pgs8JdoGvWvTHB+7OT5ELnzwANmGbXBG41jt+GCNPo3P0vjdNN7sHF9uaDrKh5gd4gA3c4+2PJ6NNsv5RkfcdDw1Tgc3QoNdL0xn1DZF3Zxs0Gb8cOEf7mAa0zhYbIjXL5qN8TnigUcXLzqedDp7DYyTzZBr+MUjG3Rp8YXXlsPFD2/kDLFmFk9+eDpE2TINXb+y4xVpMNYNb9jyRdD4nNWEa5sHIxlvpFGzxZfRwlxzVtHYlK+S8bRwjXR3xmeM7xHD0g/PcDh+OL/wl2v55ZqCQ7L83sDjQKcHxsFwN/XnZ8yXZ7yf7eEZ3Jm2MeeXzm1Yc7YpZe69eV1//kwe+Z6O3zRZJ9OcR2gWVyXnMRqnZi7XGqcwzrNN3uUXr9tZm8wzZfmeONl2vGvXL81meVZPLw2L9/FoPJ++N+rj2ZdnQxaPeD57+vj03OLzx3Oj0dNzo5OxzB/XNHPMi8f4yHbxYGdf2+Ul5cmNu/jpkZdfnr6kZ5c/3eZP8ebc5sXXiPRpvAUsPLCFU9DV4YuQc9MxPWdeC/iZ+LxNXvOGj+lT2/jjxc/l0/gV4/kHnTkdvn+6j+bnQV8fy0edLg+9xPT8PnVP93h6/vLt/LMWXw6vJVt+8/j4+gP15XDaLM93fGn86LL+9Avki8vRZu3rI9vwzJRn3vbR9rXj5Rb8BsxP5Tm+Yp0eo/r869f5i69OL/7o10zRZnBqeZvnlR9PZ/qZnO7pzM+/dpyefX4+t9O1yB7aZ+/p5Q1/Gr/8/PJ+Gj93s7LFx4Kj1/T8xXzhRVW/fvj8uf3XfJ4+vVS9uA/PX7+vvZDSp63Xo/9/4PeRH/yeeB367w6/fh/71vDJ16uzR5jF1J+C9xc/uBVf/SZz+pljfvlPfn9d+TL50RXv7IvM2TfX4d/hTlPy2W+o85fV5dfl4/T8W/T4aU2/QX35W8Xpq/j5BT278LZ4gTo7p/Mv0udnPX3z/cy3nOMlX35LODvn8/tpvnY9i+PX/FfXJf7w1iu+8ffYpx+uvvoV+xO/f/+vfYd48VvMV76QL1J797XvKYv//vVfJ75+hPT89/qvfo9J2V9+R/+tfUfz+RfKL39Nf/aVf34Ju9ev1+Js4nTQP32xPpuiz7+m/0v79O3m8+8pP/ge8b/51v9f+VX+63/++je65+/9n39DO/vG99mXsy//wvDZ7+s/+8q++NL0xXDpi9/pfvCd/Ae/8p9/CT2N9/kPM59fqC8u+xe/8v/MV6av/rPPJvizD/RPjvT517/Tfna9xge+/d3/5NN/4zv0v/a9/LfwlSJN3xVO/vgBu/xL8lp8LY6ffv94+W3+9Gx58Xvn4lfMr54A/unl/fX31t+K0+dfGX/r33K+/P76+0f69K/a//Z3kbNf08//uxs+5+vfvH/r33yfX8CvfOt+/pfRzSd/sv7k7hk/8QHT59/Sz/+GXJ7/bvfs29XZr9/zV7PFV7nxw2df/q7x9Xtv/gr60+ffqc8/8f+2/kv/GvOL/zb/4q/LX/5G8dtvBvzpD8av/vfX/jXzF79Tf/1+WPw2/Nm/Y/Avf8X+2s2dnn0l/PJ3kc9/t/vsd+Qf/Beb0/f55798ffL18Kf/tfbZf/yzvyTMz4Of/Jr4yW/uP/kLxif/ivBbPXP+OvnZX9fP/kL22V/CP/P9/dO/Sp//p9LXPu3lX9I+/fb41VfzX5x+F/j0L3U//TvB2Y/Zxe8un90F8dmvvF/9iv/lX+e++vfQszPj9+ezv7Z/+pf6T/7u8JW//H3yF9Snn/7H+GT6aq3iU2yLXm8XX7WfLY59/rv7+fef+flkd+Qnv1Z++tfY05B+T8E8eyG1z3/p+rXv878t/U+/t/7pX+k+/xvSZ3+XvPj0f5K/WH96sX71z3yON/HL37BO358/+xT/N/6G+dnf/H7bdzj/y+j8PfFrHz5/6T//q+niv1z8wu+5f/Fr2Je/CX/+O8MXv/P+5vW/+Iv6Z3/Z/MFvJz/7S9NX/0Hwye9fZ7+LfP7X2Wd/9XnxZ9PPf0X87G/wn/2159mvWZ/9xfMLXxt/8Cv5Z3+p/ux310++Jf+O/pv4G9Gn3y8++wvuZ3/B/T/oJf4HHzX9f/kbyu+7P/uV7t/dd79XQvz1WXv+e+0vfU7/r35P+vTvwp/+PfbZ3/I/+3vJv9R8s/7sbxSf/Z3rs9+ZlmX5G+DvB9HZX/jO/ub0W+u/8vv0Z3/P+ex32d/HfuNvt2d/j/p9/u5v2V+sP/vr7yd/PT7/i87nfyP97K+zn/0t8mv/7e7zb2mf/6r42a/Hn/5K9dlftb92s3/2t+rvP2/xs1+Vnn23/vzb8Gd/x/0Xrs5nf4P+/G8q/2Uf8IP/5vfzPzN8+ren3+z35K/9ffiXfcVnf3f/7G/Dn/0F8LO/XJ39Df383+Z+C+r4b3yn33WXf0H87O/Hn/0d57O//n76d/nP/ib/b/tL+We/w589v/ivj/n8b9hf+8z7xe8Bn/+N/PO/5H799z77W/wnf+X8/G+xX/29/Qu3x2d/3fn8L72/9a8Rv/Wvpb/tL6I/m+lnf4//7G+bf9Dv/1/9Pe2zv51/9lX8Z79nnP2e8LO/4n76N8uzP+1/9vei37fvxP/K3xA+/7vS539f+vTvv7/1nfjzv/t9/ne3r1+F84/83d/NP//rfvpdP+Qnd9nz33c3//p/Bvgv/v/wn/ze9tnfl87/nvb1341++/9YMP8a9/lfWz//+/Tnv2p99tfTz//a+9VfCH7vP/0v/pL+2d/nPv+r/je9L/0bv3187a/VP/9O/8nf8r78jf+rb/1//eIfpvnn/8XiF397+/zvS7/5X/e/+rvKL/4e8xv+//8f6dlddf6XyLP/J9z5b4VfvX8//7v/2d8LPv+b7Q/+0P7Z33W+9v+G82//f/7+b/78+8Tnvw9//tfBz/+O88nfE85/J//8b0Gf/q19/r/B/OLvtZ//neWTvwmf/33n87+1fv63iK/9l9jP/x74+d/cv/Zt+vO/2H3x++YPv+d9/pf7z/+W/Nnfhs//lvbVi/9f9FfnFz76B7+t/uK39eM3vP+f
`,fC=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hC=`
uniform sampler2D uTexture1; // Starting image
uniform sampler2D uTexture2; // Target image 
uniform sampler2D uDisplacement; // Displacement map
uniform float uProgress; // Animation progress (0-1)
uniform vec2 uResolution; // Viewport resolution
uniform float uIntensity; // Displacement intensity
uniform float uDirection; // Direction of transition (1 = open, -1 = close)
uniform float uTime; // For animated effects

varying vec2 vUv;

// Random function for noise
float random(vec2 n) { 
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

void main() {
  // Calculate aspect-corrected UVs
  vec2 ratio = vec2(
    min((uResolution.x / uResolution.y) / (16.0 / 9.0), 1.0),
    min((uResolution.y / uResolution.x) / (9.0 / 16.0), 1.0)
  );
  
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  
  // Add some subtle movement to displacement
  vec2 displacementUv = uv + vec2(sin(uTime * 0.1), cos(uTime * 0.1)) * 0.01;
  
  // Sample the displacement map
  vec4 displacementMap = texture2D(uDisplacement, displacementUv);
  
  // Calculate displacement effect that intensifies in the middle of the transition
  float waveIntensity = uProgress * (1.0 - uProgress) * 4.0; // Peaks at progress = 0.5
  float effectIntensity = uIntensity * 0.2 * waveIntensity;
  
  // Apply directional displacement based on the displacement map
  vec2 displacement = vec2(
    (displacementMap.r - 0.5) * effectIntensity * uDirection,
    (displacementMap.g - 0.5) * effectIntensity * uDirection
  );
  
  // Add wave distortion effect
  displacement.x += sin(uv.y * 10.0 + uTime) * 0.01 * waveIntensity;
  displacement.y += cos(uv.x * 10.0 + uTime) * 0.01 * waveIntensity;
  
  // Create glitch effect during transition
  float glitchStrength = 0.02 * waveIntensity;
  if (random(vec2(uTime, uProgress)) > 0.96) {
    displacement.x += (random(vec2(uTime)) - 0.5) * glitchStrength;
    displacement.y += (random(vec2(uProgress)) - 0.5) * glitchStrength;
  }
  
  // Apply displacement to UVs
  vec2 uvDisplaced1 = uv + displacement;
  vec2 uvDisplaced2 = uv - displacement * 0.5; // Less displacement for second texture
  
  // Ensure UVs stay in bounds
  uvDisplaced1 = clamp(uvDisplaced1, 0.0, 1.0);
  uvDisplaced2 = clamp(uvDisplaced2, 0.0, 1.0);
  
  // Sample both textures with displaced UVs
  vec4 color1 = texture2D(uTexture1, uvDisplaced1);
  vec4 color2 = texture2D(uTexture2, uvDisplaced2);
  
  // Mix based on progress
  vec4 finalColor = mix(color1, color2, uProgress);
  
  // Add color shift during transition
  float rgbSplitIntensity = 0.015 * waveIntensity;
  vec4 colorR = texture2D(uTexture1, uvDisplaced1 + vec2(rgbSplitIntensity, 0.0));
  vec4 colorB = texture2D(uTexture2, uvDisplaced2 - vec2(rgbSplitIntensity, 0.0));
  
  if (uProgress > 0.0 && uProgress < 1.0) {
    finalColor.r = mix(colorR.r, finalColor.r, 0.5);
    finalColor.b = mix(colorB.b, finalColor.b, 0.5);
  }
  
  // Output the final color
  gl_FragColor = finalColor;
}
`,dC=({sourceImage:o,targetImage:t,startRect:n,endRect:a,onComplete:s,duration:l=2.2,isOpening:c=!0})=>{const f=Ce.useRef(null),d=Ce.useRef(null),p=Ce.useRef(null),m=Ce.useRef(null),v=Ce.useRef(null),g=Ce.useRef(null),x=Ce.useRef(0);return Ce.useEffect(()=>{const E=new gb;p.current=E;const M=new cS(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,.1,1e3);M.position.z=10,m.current=M;const S=n.width,y=n.height,L=new bb,U=L.load(o);U.minFilter=Gn,U.magFilter=Gn;const A=L.load(t||o);A.minFilter=Gn,A.magFilter=Gn;const N=L.load(cC);N.minFilter=Gn,N.magFilter=Gn,N.wrapS=Jl,N.wrapT=Jl;const I={uTexture1:{value:U},uTexture2:{value:A},uDisplacement:{value:N},uProgress:{value:0},uResolution:{value:new Ie(window.innerWidth,window.innerHeight)},uIntensity:{value:c?0:1},uDirection:{value:c?1:-1},uTime:{value:0}},O=new Va({uniforms:I,vertexShader:fC,fragmentShader:hC,transparent:!0});v.current=O;const F=new cu(S,y,1,1),b=new qi(F,O);E.add(b);const C=new uC({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.current=C,f.current&&f.current.appendChild(C.domElement),f.current&&(f.current.style.position="fixed",f.current.style.top="0",f.current.style.left="0",f.current.style.width="100vw",f.current.style.height="100vh",f.current.style.zIndex="9999",f.current.style.pointerEvents="none",b.position.x=n.left-window.innerWidth/2+S/2,b.position.y=-n.top+window.innerHeight/2-y/2);const G=en.timeline({onComplete:()=>{g.current&&cancelAnimationFrame(g.current),f.current&&d.current&&f.current.removeChild(d.current.domElement),s&&s()}});G.to(O.uniforms.uProgress,{value:1,duration:l,ease:"power3.inOut"}),G.to(O.uniforms.uIntensity,{value:c?1:0,duration:l*.5,ease:"power2.out"},0),G.to(O.uniforms.uIntensity,{value:c?0:1,duration:l*.5,ease:"power2.in"},l*.5),G.to(b.position,{x:a.left-window.innerWidth/2+a.width/2,y:-a.top+window.innerHeight/2-a.height/2,duration:l,ease:"power2.inOut"},0),G.to(b.scale,{x:a.width/S,y:a.height/y,duration:l,ease:"power2.inOut"},0);const J=()=>{x.current+=.01,v.current&&(v.current.uniforms.uTime.value=x.current),d.current&&p.current&&m.current&&d.current.render(p.current,m.current),g.current=requestAnimationFrame(J)};g.current=requestAnimationFrame(J);const Q=()=>{if(m.current&&d.current&&v.current){const at=m.current;at.left=window.innerWidth/-2,at.right=window.innerWidth/2,at.top=window.innerHeight/2,at.bottom=window.innerHeight/-2,at.updateProjectionMatrix(),d.current.setSize(window.innerWidth,window.innerHeight),v.current.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}};return window.addEventListener("resize",Q),()=>{window.removeEventListener("resize",Q),g.current&&cancelAnimationFrame(g.current),d.current&&f.current&&f.current.contains(d.current.domElement)&&f.current.removeChild(d.current.domElement),p.current&&p.current.traverse(at=>{if(at instanceof qi){if(at.geometry.dispose(),at.material.map&&at.material.map.dispose(),at.material.uniforms)for(const ot in at.material.uniforms)at.material.uniforms[ot].value instanceof Wn&&at.material.uniforms[ot].value.dispose();at.material.dispose()}})}},[o,t,n,a,s,l,c]),ee.jsx("div",{ref:f,className:"displacement-transition-container"})},Xl={clipPathDirection:"top-bottom",autoAdjustHorizontalClipPath:!0,steps:6,stepDuration:.35,stepInterval:.05,moverPauseBeforeExit:.14,rotationRange:0,wobbleStrength:0,panelRevealEase:"sine.inOut",gridItemEase:"sine",moverEnterEase:"sine.in",moverExitEase:"sine",panelRevealDurationFactor:2,clickedItemDurationFactor:2,gridItemStaggerFactor:.3,moverBlendMode:!1,pathMotion:"linear",sineAmplitude:50,sineFrequency:Math.PI},pC={...Xl},Hx=(o,t)=>{if(!o)return Array(t.length).fill(0);const n=cp(o),a=t.map(l=>{if(l===o)return 0;const c=cp(l);return Math.hypot(c.x-n.x,c.y-n.y)}),s=Math.max(...a);return a.map(l=>l/s*Xl.gridItemStaggerFactor)},mC=({isOpen:o,item:t,onClose:n})=>{const a=Ce.useRef(null),s=Ce.useRef(null),l=Ce.useRef(null),c=Ce.useRef(null),[f,d]=Ce.useState(!1),[p,m]=Ce.useState(!1),[v,g]=Ce.useState(Xl),[x,E]=Ce.useState(!1),[M,S]=Ce.useState(null);return Ce.useEffect(()=>{t&&t.config?g({...Xl,...t.config}):g(Xl)},[t]),Ce.useEffect(()=>{const y=L=>{L.key==="Escape"&&o&&!p&&n()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[o,n,p]),Ce.useEffect(()=>{if(!t)return;const y=document.querySelector(`[aria-labelledby="caption-${t.id}"]`);if(!y)return;const L=y.querySelector(".grid__item-image"),U=a.current,A=s.current,N=l.current,I=cp(y).x,O=window.innerWidth/2,F=I<O;d(!F);let b={...v};if(b.autoAdjustHorizontalClipPath&&(b.clipPathDirection==="left-right"||b.clipPathDirection==="right-left")&&(b.clipPathDirection=F?"left-right":"right-left"),o){m(!0),en.to([".frame",".heading"],{opacity:0,duration:.5,ease:"sine.inOut",pointerEvents:"none"});const C=document.querySelectorAll(".grid__item"),G=Hx(y,Array.from(C));en.to(C,{opacity:(at,ot)=>ot===y?1:0,scale:(at,ot)=>ot===y?1:.8,duration:(at,ot)=>ot===y?b.stepDuration*b.clickedItemDurationFactor:.3,ease:b.gridItemEase,delay:at=>G[at]});const J=L.getBoundingClientRect(),Q=A.getBoundingClientRect();S({sourceImage:t.image,targetImage:t.image,startRect:J,endRect:Q,isOpening:!0,duration:2.2,onComplete:()=>{en.set(A,{autoAlpha:1}),en.fromTo(N,{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"expo.out",stagger:.05,onComplete:()=>{m(!1)}}),E(!1)}}),E(!0),en.set(N,{opacity:0}),en.set(U,{opacity:1,pointerEvents:"auto"}),en.set(A,{autoAlpha:0})}else if(U){m(!0);const C=A.getBoundingClientRect(),G=L.getBoundingClientRect();S({sourceImage:t.image,targetImage:t.image,startRect:C,endRect:G,isOpening:!1,duration:1.8,onComplete:()=>{const J=document.querySelectorAll(".grid__item"),Q=Hx(y,Array.from(J));en.set(U,{opacity:0,pointerEvents:"none"}),en.set(A,{clipPath:"inset(0% 0% 100% 0%)"}),en.set(J,{clipPath:"none",opacity:0,scale:.8}),en.to([".frame",".heading"],{opacity:1,duration:.5,ease:"sine.inOut",pointerEvents:"auto"}),en.to(J,{opacity:1,scale:1,delay:at=>Q[at],onComplete:()=>{m(!1)}}),E(!1)}}),en.to(N,{opacity:0,y:20,duration:.3,ease:"power2.in",onComplete:()=>{E(!0)}}),Object.assign(v,pC)}},[o,t,v]),t?ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{ref:c,className:"movers-container"}),x&&M&&ee.jsx(dC,{...M}),ee.jsxs("div",{ref:a,className:`panel ${f?"panel--right":""}`,style:{opacity:0},children:[ee.jsx("div",{ref:s,className:"panel__img",style:{backgroundImage:`url(${t.image})`}}),ee.jsxs("div",{ref:l,className:"panel__content",children:[ee.jsx("h3",{children:t.title}),ee.jsx("p",{children:t.description}),ee.jsx("a",{href:"#",className:"panel__close line",onClick:y=>{y.preventDefault(),p||n()},children:"Close"})]})]})]}):null},_C=[{id:1,image:"assets/img1.webp",title:"Drift — A04",description:"Model: Amelia Hart",config:{}},{id:2,image:"assets/img2.webp",title:"Veil — K18",description:"Model: Irina Volkova",config:{}},{id:3,image:"assets/img3.webp",title:"Ember — M45",description:"Model: Charlotte Byrne",config:{}},{id:4,image:"assets/img4.webp",title:"Gleam — S12",description:"Model: Anastasia Morozova",config:{}},{id:5,image:"assets/img5.webp",title:"Bloom — J29",description:"Model: Eva Ramirez",config:{}},{id:6,image:"assets/img6.webp",title:"Whisper — V87",description:"Model: Milana Petrova",config:{}},{id:7,image:"assets/img7.webp",title:"Trace — Z05",description:"Model: Sofia Carter",config:{}},{id:8,image:"assets/img8.webp",title:"Flicker — Q62",description:"Model: Alina Kuznetsova",config:{}},{id:9,image:"assets/img9.webp",title:"Grain — H71",description:"Model: Isabella Novak",config:{}},{id:10,image:"assets/img10.webp",title:"Pulse — B90",description:"Model: Daria Sokolova",config:{}},{id:11,image:"assets/img11.webp",title:"Mist — L36",description:"Model: Victoria Fields",config:{}},{id:12,image:"assets/img12.webp",title:"Shard — Y22",description:"Model: Natalia Popova & Emily Stone",config:{}},{id:13,image:"assets/img13.webp",title:"Vapor — X79",description:"Model: Yulia Orlova",config:{}},{id:14,image:"assets/img14.webp",title:"Glow — F13",description:"Model: Camila Ford",config:{}},{id:15,image:"assets/img15.webp",title:"Flux — N48",description:"Model: Sofia Mikhailova",config:{}},{id:16,image:"assets/img16.webp",title:"Spire — C65",description:"Model: Ava Bennett",config:{}}],gC=[{id:17,image:"assets/img17.webp",title:"Driftwood — W50",description:"Model: Valeria Smirnova",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:18,image:"assets/img18.webp",title:"Fold — T81",description:"Model: Emma Chase",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:19,image:"assets/img19.webp",title:"Shroud — E26",description:"Model: Marina Belova",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:20,image:"assets/img20.webp",title:"Ripple — P34",description:"Model: Chloe Martin",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:21,image:"assets/img21.webp",title:"Fray — U07",description:"Model: Alexandra Dmitrieva",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:22,image:"assets/img22.webp",title:"Wane — R52",description:"Model: Isabella Moore",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:23,image:"assets/img23.webp",title:"Tide — S33",description:"Model: Ksenia Egorova",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}},{id:24,image:"assets/img24.webp",title:"Rift — G08",description:"Model: Mia Anderson",config:{steps:8,rotationRange:7,stepInterval:.05,moverPauseBeforeExit:.25,moverEnterEase:"sine.in",moverExitEase:"power2",panelRevealEase:"power2",clipPathDirection:"bottom-top"}}],vC=[{id:25,image:"assets/img25.webp",title:"Crush — L17",description:"Model: Emily Porter",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:26,image:"assets/img26.webp",title:"Glitch — M70",description:"Model: Emily Brown",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:27,image:"assets/img27.webp",title:"Slip — F02",description:"Model: Ekaterina Ivanova",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:28,image:"assets/img28.webp",title:"Husk — C15",description:"Model: Olivia Reed",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:29,image:"assets/img29.webp",title:"Gossamer — A07",description:"Model: Madison Brooks",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:30,image:"assets/img30.webp",title:"Floe — K96",description:"Model: Ekaterina Smirnova",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:31,image:"assets/img31.webp",title:"Shiver — V44",description:"Model: Emily Robinson",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}},{id:32,image:"assets/img32.webp",title:"Murmur — W07",description:"Model: Sophia Mitchell",config:{steps:4,rotationRange:5,stepInterval:.06,clipPathDirection:"bottom-top",moverPauseBeforeExit:.2,moverEnterEase:"sine.in",moverExitEase:"expo",panelRevealEase:"expo",panelRevealDurationFactor:4,moverBlendMode:"hard-light"}}];function xC(){const[o,t]=Ce.useState(!0),[n,a]=Ce.useState(null),[s,l]=Ce.useState(!1),[c,f]=Ce.useState(!1);Ce.useEffect(()=>{window.imagesLoaded=zE,document.body.classList.add("loading"),DE(".grid__item-image, .panel__img").then(()=>{document.body.classList.remove("loading"),t(!1),setTimeout(()=>{const m=document.querySelectorAll(".grid__item");en.set(m,{clipPath:"none",opacity:0,scale:.8}),m.forEach((v,g)=>{en.to(v,{opacity:1,scale:1,duration:.6,delay:g*.05,ease:"power1.out"})})},400)}).catch(m=>{console.error("Error preloading images:",m),document.body.classList.remove("loading"),t(!1)})},[]);const d=m=>{s||c||(a(m),l(!0))},p=()=>{c||(l(!1),setTimeout(()=>{a(null)},500))};return o?null:ee.jsxs("main",{className:"p-6",children:[ee.jsx(IE,{}),ee.jsx(Nd,{title:"Shane Weber",subtitle:"effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.",items:_C,onItemClick:d}),ee.jsx(Nd,{title:"Manika Jorge",subtitle:"effect 02: Adjusts mover count, rotation, timing, and animation feel.",items:gC,onItemClick:d}),ee.jsx(Nd,{title:"Desiree Telles",subtitle:"effect 03: Diagonal paths, bouncy easing, clip from side, blend modes.",items:vC,onItemClick:d}),ee.jsx(mC,{isOpen:s,item:n,onClose:p}),ee.jsxs("footer",{className:"frame frame--footer flex justify-between items-end min-h-[300px]",children:[ee.jsxs("span",{children:["Made by ",ee.jsx("a",{href:"https://codrops.com/",className:"line",children:"@codrops"})]}),ee.jsx("span",{children:ee.jsx("a",{href:"https://tympanus.net/codrops/demos/",className:"line",children:"All demos"})})]})]})}CE.createRoot(document.getElementById("root")).render(ee.jsx(SE.StrictMode,{children:ee.jsx(xC,{})}));
