var rM=Object.defineProperty;var tM=(e,r,t)=>r in e?rM(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var hp=(e,r,t)=>tM(e,typeof r!="symbol"?r+"":r,t);function nM(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function it(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y$={exports:{}},$d={},g$={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.element"),iM=Symbol.for("react.portal"),aM=Symbol.for("react.fragment"),oM=Symbol.for("react.strict_mode"),lM=Symbol.for("react.profiler"),uM=Symbol.for("react.provider"),sM=Symbol.for("react.context"),cM=Symbol.for("react.forward_ref"),fM=Symbol.for("react.suspense"),dM=Symbol.for("react.memo"),vM=Symbol.for("react.lazy"),Ib=Symbol.iterator;function pM(e){return e===null||typeof e!="object"?null:(e=Ib&&e[Ib]||e["@@iterator"],typeof e=="function"?e:null)}var b$={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w$=Object.assign,E$={};function Jo(e,r,t){this.props=e,this.context=r,this.refs=E$,this.updater=t||b$}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x$(){}x$.prototype=Jo.prototype;function tg(e,r,t){this.props=e,this.context=r,this.refs=E$,this.updater=t||b$}var ng=tg.prototype=new x$;ng.constructor=tg;w$(ng,Jo.prototype);ng.isPureReactComponent=!0;var jb=Array.isArray,S$=Object.prototype.hasOwnProperty,ig={current:null},_$={key:!0,ref:!0,__self:!0,__source:!0};function O$(e,r,t){var n,i={},a=null,o=null;if(r!=null)for(n in r.ref!==void 0&&(o=r.ref),r.key!==void 0&&(a=""+r.key),r)S$.call(r,n)&&!_$.hasOwnProperty(n)&&(i[n]=r[n]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Qu,type:e,key:a,ref:o,props:i,_owner:ig.current}}function hM(e,r){return{$$typeof:Qu,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function ag(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qu}function mM(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var Nb=/\/+/g;function mp(e,r){return typeof e=="object"&&e!==null&&e.key!=null?mM(""+e.key):r.toString(36)}function Cc(e,r,t,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qu:case iM:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+mp(o,0):n,jb(i)?(t="",e!=null&&(t=e.replace(Nb,"$&/")+"/"),Cc(i,r,t,"",function(s){return s})):i!=null&&(ag(i)&&(i=hM(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nb,"$&/")+"/")+e)),r.push(i)),1;if(o=0,n=n===""?".":n+":",jb(e))for(var l=0;l<e.length;l++){a=e[l];var u=n+mp(a,l);o+=Cc(a,r,t,u,i)}else if(u=pM(e),typeof u=="function")for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=n+mp(a,l++),o+=Cc(a,r,t,u,i);else if(a==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return o}function Ls(e,r,t){if(e==null)return e;var n=[],i=0;return Cc(e,n,"","",function(a){return r.call(t,a,i++)}),n}function yM(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Nr={current:null},Ic={transition:null},gM={ReactCurrentDispatcher:Nr,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:ig};function $$(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ls,forEach:function(e,r,t){Ls(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return Ls(e,function(){r++}),r},toArray:function(e){return Ls(e,function(r){return r})||[]},only:function(e){if(!ag(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Jo;ie.Fragment=aM;ie.Profiler=lM;ie.PureComponent=tg;ie.StrictMode=oM;ie.Suspense=fM;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gM;ie.act=$$;ie.cloneElement=function(e,r,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=w$({},e.props),i=e.key,a=e.ref,o=e._owner;if(r!=null){if(r.ref!==void 0&&(a=r.ref,o=ig.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)S$.call(r,u)&&!_$.hasOwnProperty(u)&&(n[u]=r[u]===void 0&&l!==void 0?l[u]:r[u])}var u=arguments.length-2;if(u===1)n.children=t;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];n.children=l}return{$$typeof:Qu,type:e.type,key:i,ref:a,props:n,_owner:o}};ie.createContext=function(e){return e={$$typeof:sM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uM,_context:e},e.Consumer=e};ie.createElement=O$;ie.createFactory=function(e){var r=O$.bind(null,e);return r.type=e,r};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:cM,render:e}};ie.isValidElement=ag;ie.lazy=function(e){return{$$typeof:vM,_payload:{_status:-1,_result:e},_init:yM}};ie.memo=function(e,r){return{$$typeof:dM,type:e,compare:r===void 0?null:r}};ie.startTransition=function(e){var r=Ic.transition;Ic.transition={};try{e()}finally{Ic.transition=r}};ie.unstable_act=$$;ie.useCallback=function(e,r){return Nr.current.useCallback(e,r)};ie.useContext=function(e){return Nr.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return Nr.current.useDeferredValue(e)};ie.useEffect=function(e,r){return Nr.current.useEffect(e,r)};ie.useId=function(){return Nr.current.useId()};ie.useImperativeHandle=function(e,r,t){return Nr.current.useImperativeHandle(e,r,t)};ie.useInsertionEffect=function(e,r){return Nr.current.useInsertionEffect(e,r)};ie.useLayoutEffect=function(e,r){return Nr.current.useLayoutEffect(e,r)};ie.useMemo=function(e,r){return Nr.current.useMemo(e,r)};ie.useReducer=function(e,r,t){return Nr.current.useReducer(e,r,t)};ie.useRef=function(e){return Nr.current.useRef(e)};ie.useState=function(e){return Nr.current.useState(e)};ie.useSyncExternalStore=function(e,r,t){return Nr.current.useSyncExternalStore(e,r,t)};ie.useTransition=function(){return Nr.current.useTransition()};ie.version="18.3.1";g$.exports=ie;var g=g$.exports;const bM=it(g),wM=nM({__proto__:null,default:bM},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EM=g,xM=Symbol.for("react.element"),SM=Symbol.for("react.fragment"),_M=Object.prototype.hasOwnProperty,OM=EM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$M={key:!0,ref:!0,__self:!0,__source:!0};function P$(e,r,t){var n,i={},a=null,o=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(o=r.ref);for(n in r)_M.call(r,n)&&!$M.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:xM,type:e,key:a,ref:o,props:i,_owner:OM.current}}$d.Fragment=SM;$d.jsx=P$;$d.jsxs=P$;y$.exports=$d;var j=y$.exports,A$={exports:{}},bt={},T$={exports:{}},k$={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(C,M){var D=C.length;C.push(M);e:for(;0<D;){var te=D-1>>>1,ne=C[te];if(0<i(ne,M))C[te]=M,C[D]=ne,D=te;else break e}}function t(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var M=C[0],D=C.pop();if(D!==M){C[0]=D;e:for(var te=0,ne=C.length,Ar=ne>>>1;te<Ar;){var Fe=2*(te+1)-1,Wt=C[Fe],at=Fe+1,fn=C[at];if(0>i(Wt,D))at<ne&&0>i(fn,Wt)?(C[te]=fn,C[at]=D,te=at):(C[te]=Wt,C[Fe]=D,te=Fe);else if(at<ne&&0>i(fn,D))C[te]=fn,C[at]=D,te=at;else break e}}return M}function i(C,M){var D=C.sortIndex-M.sortIndex;return D!==0?D:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],s=[],c=1,f=null,d=3,v=!1,p=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(C){for(var M=t(s);M!==null;){if(M.callback===null)n(s);else if(M.startTime<=C)n(s),M.sortIndex=M.expirationTime,r(u,M);else break;M=t(s)}}function E(C){if(y=!1,w(C),!p)if(t(u)!==null)p=!0,re(x);else{var M=t(s);M!==null&&pe(E,M.startTime-C)}}function x(C,M){p=!1,y&&(y=!1,h(O),O=-1),v=!0;var D=d;try{for(w(M),f=t(u);f!==null&&(!(f.expirationTime>M)||C&&!N());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var ne=te(f.expirationTime<=M);M=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===t(u)&&n(u),w(M)}else n(u);f=t(u)}if(f!==null)var Ar=!0;else{var Fe=t(s);Fe!==null&&pe(E,Fe.startTime-M),Ar=!1}return Ar}finally{f=null,d=D,v=!1}}var S=!1,_=null,O=-1,P=5,T=-1;function N(){return!(e.unstable_now()-T<P)}function A(){if(_!==null){var C=e.unstable_now();T=C;var M=!0;try{M=_(!0,C)}finally{M?H():(S=!1,_=null)}}else S=!1}var H;if(typeof b=="function")H=function(){b(A)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=A,H=function(){ee.postMessage(null)}}else H=function(){m(A,0)};function re(C){_=C,S||(S=!0,H())}function pe(C,M){O=m(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){p||v||(p=!0,re(x))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(C){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var D=d;d=M;try{return C()}finally{d=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=d;d=C;try{return M()}finally{d=D}},e.unstable_scheduleCallback=function(C,M,D){var te=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?te+D:te):D=te,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=D+ne,C={id:c++,callback:M,priorityLevel:C,startTime:D,expirationTime:ne,sortIndex:-1},D>te?(C.sortIndex=D,r(s,C),t(u)===null&&C===t(s)&&(y?(h(O),O=-1):y=!0,pe(E,D-te))):(C.sortIndex=ne,r(u,C),p||v||(p=!0,re(x))),C},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(C){var M=d;return function(){var D=d;d=M;try{return C.apply(this,arguments)}finally{d=D}}}})(k$);T$.exports=k$;var PM=T$.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AM=g,mt=PM;function k(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C$=new Set,bu={};function Va(e,r){Lo(e,r),Lo(e+"Capture",r)}function Lo(e,r){for(bu[e]=r,e=0;e<r.length;e++)C$.add(r[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,TM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mb={},Lb={};function kM(e){return zh.call(Lb,e)?!0:zh.call(Mb,e)?!1:TM.test(e)?Lb[e]=!0:(Mb[e]=!0,!1)}function CM(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function IM(e,r,t,n){if(r===null||typeof r>"u"||CM(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Mr(e,r,t,n,i,a,o){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=o}var yr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yr[e]=new Mr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];yr[r]=new Mr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yr[e]=new Mr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yr[e]=new Mr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yr[e]=new Mr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yr[e]=new Mr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yr[e]=new Mr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yr[e]=new Mr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yr[e]=new Mr(e,5,!1,e.toLowerCase(),null,!1,!1)});var og=/[\-:]([a-z])/g;function lg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(og,lg);yr[r]=new Mr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(og,lg);yr[r]=new Mr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(og,lg);yr[r]=new Mr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yr[e]=new Mr(e,1,!1,e.toLowerCase(),null,!1,!1)});yr.xlinkHref=new Mr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yr[e]=new Mr(e,1,!1,e.toLowerCase(),null,!0,!0)});function ug(e,r,t,n){var i=yr.hasOwnProperty(r)?yr[r]:null;(i!==null?i.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(IM(r,t,i,n)&&(t=null),n||i===null?kM(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(r=i.attributeName,n=i.attributeNamespace,t===null?e.removeAttribute(r):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var ii=AM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),vo=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),sg=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),I$=Symbol.for("react.provider"),j$=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),fg=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),N$=Symbol.for("react.offscreen"),Db=Symbol.iterator;function xl(e){return e===null||typeof e!="object"?null:(e=Db&&e[Db]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,yp;function Yl(e){if(yp===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);yp=r&&r[1]||""}return`
`+yp+e}var gp=!1;function bp(e,r){if(!e||gp)return"";gp=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(s){var n=s}Reflect.construct(e,[],r)}else{try{r.call()}catch(s){n=s}e.call(r.prototype)}else{try{throw Error()}catch(s){n=s}e()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{gp=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Yl(e):""}function jM(e){switch(e.tag){case 5:return Yl(e.type);case 16:return Yl("Lazy");case 13:return Yl("Suspense");case 19:return Yl("SuspenseList");case 0:case 2:case 15:return e=bp(e.type,!1),e;case 11:return e=bp(e.type.render,!1),e;case 1:return e=bp(e.type,!0),e;default:return""}}function Vh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case po:return"Fragment";case vo:return"Portal";case Bh:return"Profiler";case sg:return"StrictMode";case Uh:return"Suspense";case Wh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case j$:return(e.displayName||"Context")+".Consumer";case I$:return(e._context.displayName||"Context")+".Provider";case cg:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fg:return r=e.displayName||null,r!==null?r:Vh(e.type)||"Memo";case xi:r=e._payload,e=e._init;try{return Vh(e(r))}catch{}}return null}function NM(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vh(r);case 8:return r===sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ki(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M$(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function MM(e){var r=M$(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Rs(e){e._valueTracker||(e._valueTracker=MM(e))}function L$(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=M$(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hh(e,r){var t=r.checked;return je({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Rb(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=Ki(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function D$(e,r){r=r.checked,r!=null&&ug(e,"checked",r,!1)}function Kh(e,r){D$(e,r);var t=Ki(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Gh(e,r.type,t):r.hasOwnProperty("defaultValue")&&Gh(e,r.type,Ki(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Fb(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Gh(e,r,t){(r!=="number"||qc(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xl=Array.isArray;function Po(e,r,t,n){if(e=e.options,r){r={};for(var i=0;i<t.length;i++)r["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=r.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ki(t),r=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Yh(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(k(91));return je({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zb(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(k(92));if(Xl(t)){if(1<t.length)throw Error(k(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:Ki(t)}}function R$(e,r){var t=Ki(r.value),n=Ki(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Bb(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function F$(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xh(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?F$(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fs,z$=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,n,i){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function wu(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var ru={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LM=["Webkit","ms","Moz","O"];Object.keys(ru).forEach(function(e){LM.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ru[r]=ru[e]})});function B$(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||ru.hasOwnProperty(e)&&ru[e]?(""+r).trim():r+"px"}function U$(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,i=B$(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,i):e[t]=i}}var DM=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(e,r){if(r){if(DM[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(k(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(k(61))}if(r.style!=null&&typeof r.style!="object")throw Error(k(62))}}function Zh(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function dg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jh=null,Ao=null,To=null;function Ub(e){if(e=rs(e)){if(typeof Jh!="function")throw Error(k(280));var r=e.stateNode;r&&(r=Cd(r),Jh(e.stateNode,e.type,r))}}function W$(e){Ao?To?To.push(e):To=[e]:Ao=e}function V$(){if(Ao){var e=Ao,r=To;if(To=Ao=null,Ub(e),r)for(e=0;e<r.length;e++)Ub(r[e])}}function H$(e,r){return e(r)}function K$(){}var wp=!1;function G$(e,r,t){if(wp)return e(r,t);wp=!0;try{return H$(e,r,t)}finally{wp=!1,(Ao!==null||To!==null)&&(K$(),V$())}}function Eu(e,r){var t=e.stateNode;if(t===null)return null;var n=Cd(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,r,typeof t));return t}var em=!1;if(Yn)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){em=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{em=!1}function RM(e,r,t,n,i,a,o,l,u){var s=Array.prototype.slice.call(arguments,3);try{r.apply(t,s)}catch(c){this.onError(c)}}var tu=!1,Zc=null,Qc=!1,rm=null,FM={onError:function(e){tu=!0,Zc=e}};function zM(e,r,t,n,i,a,o,l,u){tu=!1,Zc=null,RM.apply(FM,arguments)}function BM(e,r,t,n,i,a,o,l,u){if(zM.apply(this,arguments),tu){if(tu){var s=Zc;tu=!1,Zc=null}else throw Error(k(198));Qc||(Qc=!0,rm=s)}}function Ha(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Y$(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Wb(e){if(Ha(e)!==e)throw Error(k(188))}function UM(e){var r=e.alternate;if(!r){if(r=Ha(e),r===null)throw Error(k(188));return r!==e?null:e}for(var t=e,n=r;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return Wb(i),e;if(a===n)return Wb(i),r;a=a.sibling}throw Error(k(188))}if(t.return!==n.return)t=i,n=a;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,n=a;break}if(l===n){o=!0,n=i,t=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===t){o=!0,t=a,n=i;break}if(l===n){o=!0,n=a,t=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==n)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:r}function X$(e){return e=UM(e),e!==null?q$(e):null}function q$(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=q$(e);if(r!==null)return r;e=e.sibling}return null}var Z$=mt.unstable_scheduleCallback,Vb=mt.unstable_cancelCallback,WM=mt.unstable_shouldYield,VM=mt.unstable_requestPaint,ze=mt.unstable_now,HM=mt.unstable_getCurrentPriorityLevel,vg=mt.unstable_ImmediatePriority,Q$=mt.unstable_UserBlockingPriority,Jc=mt.unstable_NormalPriority,KM=mt.unstable_LowPriority,J$=mt.unstable_IdlePriority,Pd=null,En=null;function GM(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Pd,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:qM,YM=Math.log,XM=Math.LN2;function qM(e){return e>>>=0,e===0?32:31-(YM(e)/XM|0)|0}var zs=64,Bs=4194304;function ql(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ef(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?n=ql(l):(a&=o,a!==0&&(n=ql(a)))}else o=t&~i,o!==0?n=ql(o):a!==0&&(n=ql(a));if(n===0)return 0;if(r!==0&&r!==n&&!(r&i)&&(i=n&-n,a=r&-r,i>=a||i===16&&(a&4194240)!==0))return r;if(n&4&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Qt(r),i=1<<t,n|=e[t],r&=~i;return n}function ZM(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QM(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Qt(a),l=1<<o,u=i[o];u===-1?(!(l&t)||l&n)&&(i[o]=ZM(l,r)):u<=r&&(e.expiredLanes|=l),a&=~l}}function tm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eP(){var e=zs;return zs<<=1,!(zs&4194240)&&(zs=64),e}function Ep(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Ju(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Qt(r),e[r]=t}function JM(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Qt(t),a=1<<i;r[i]=0,n[i]=-1,e[i]=-1,t&=~a}}function pg(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Qt(t),i=1<<n;i&r|e[n]&r&&(e[n]|=r),t&=~i}}var he=0;function rP(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tP,hg,nP,iP,aP,nm=!1,Us=[],Li=null,Di=null,Ri=null,xu=new Map,Su=new Map,ki=[],e3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hb(e,r){switch(e){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":xu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Su.delete(r.pointerId)}}function _l(e,r,t,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},r!==null&&(r=rs(r),r!==null&&hg(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function r3(e,r,t,n,i){switch(r){case"focusin":return Li=_l(Li,e,r,t,n,i),!0;case"dragenter":return Di=_l(Di,e,r,t,n,i),!0;case"mouseover":return Ri=_l(Ri,e,r,t,n,i),!0;case"pointerover":var a=i.pointerId;return xu.set(a,_l(xu.get(a)||null,e,r,t,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Su.set(a,_l(Su.get(a)||null,e,r,t,n,i)),!0}return!1}function oP(e){var r=ga(e.target);if(r!==null){var t=Ha(r);if(t!==null){if(r=t.tag,r===13){if(r=Y$(t),r!==null){e.blockedOn=r,aP(e.priority,function(){nP(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=im(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Qh=n,t.target.dispatchEvent(n),Qh=null}else return r=rs(t),r!==null&&hg(r),e.blockedOn=t,!1;r.shift()}return!0}function Kb(e,r,t){jc(e)&&t.delete(r)}function t3(){nm=!1,Li!==null&&jc(Li)&&(Li=null),Di!==null&&jc(Di)&&(Di=null),Ri!==null&&jc(Ri)&&(Ri=null),xu.forEach(Kb),Su.forEach(Kb)}function Ol(e,r){e.blockedOn===r&&(e.blockedOn=null,nm||(nm=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,t3)))}function _u(e){function r(i){return Ol(i,e)}if(0<Us.length){Ol(Us[0],e);for(var t=1;t<Us.length;t++){var n=Us[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Li!==null&&Ol(Li,e),Di!==null&&Ol(Di,e),Ri!==null&&Ol(Ri,e),xu.forEach(r),Su.forEach(r),t=0;t<ki.length;t++)n=ki[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<ki.length&&(t=ki[0],t.blockedOn===null);)oP(t),t.blockedOn===null&&ki.shift()}var ko=ii.ReactCurrentBatchConfig,rf=!0;function n3(e,r,t,n){var i=he,a=ko.transition;ko.transition=null;try{he=1,mg(e,r,t,n)}finally{he=i,ko.transition=a}}function i3(e,r,t,n){var i=he,a=ko.transition;ko.transition=null;try{he=4,mg(e,r,t,n)}finally{he=i,ko.transition=a}}function mg(e,r,t,n){if(rf){var i=im(e,r,t,n);if(i===null)Cp(e,r,n,tf,t),Hb(e,n);else if(r3(i,e,r,t,n))n.stopPropagation();else if(Hb(e,n),r&4&&-1<e3.indexOf(e)){for(;i!==null;){var a=rs(i);if(a!==null&&tP(a),a=im(e,r,t,n),a===null&&Cp(e,r,n,tf,t),a===i)break;i=a}i!==null&&n.stopPropagation()}else Cp(e,r,n,null,t)}}var tf=null;function im(e,r,t,n){if(tf=null,e=dg(n),e=ga(e),e!==null)if(r=Ha(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Y$(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return tf=e,null}function lP(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HM()){case vg:return 1;case Q$:return 4;case Jc:case KM:return 16;case J$:return 536870912;default:return 16}default:return 16}}var ji=null,yg=null,Nc=null;function uP(){if(Nc)return Nc;var e,r=yg,t=r.length,n,i="value"in ji?ji.value:ji.textContent,a=i.length;for(e=0;e<t&&r[e]===i[e];e++);var o=t-e;for(n=1;n<=o&&r[t-n]===i[a-n];n++);return Nc=i.slice(e,1<n?1-n:void 0)}function Mc(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ws(){return!0}function Gb(){return!1}function wt(e){function r(t,n,i,a,o){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ws:Gb,this.isPropagationStopped=Gb,this}return je(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),r}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gg=wt(el),es=je({},el,{view:0,detail:0}),a3=wt(es),xp,Sp,$l,Ad=je({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$l&&($l&&e.type==="mousemove"?(xp=e.screenX-$l.screenX,Sp=e.screenY-$l.screenY):Sp=xp=0,$l=e),xp)},movementY:function(e){return"movementY"in e?e.movementY:Sp}}),Yb=wt(Ad),o3=je({},Ad,{dataTransfer:0}),l3=wt(o3),u3=je({},es,{relatedTarget:0}),_p=wt(u3),s3=je({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),c3=wt(s3),f3=je({},el,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d3=wt(f3),v3=je({},el,{data:0}),Xb=wt(v3),p3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y3(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=m3[e])?!!r[e]:!1}function bg(){return y3}var g3=je({},es,{key:function(e){if(e.key){var r=p3[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Mc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bg,charCode:function(e){return e.type==="keypress"?Mc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b3=wt(g3),w3=je({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qb=wt(w3),E3=je({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bg}),x3=wt(E3),S3=je({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),_3=wt(S3),O3=je({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$3=wt(O3),P3=[9,13,27,32],wg=Yn&&"CompositionEvent"in window,nu=null;Yn&&"documentMode"in document&&(nu=document.documentMode);var A3=Yn&&"TextEvent"in window&&!nu,sP=Yn&&(!wg||nu&&8<nu&&11>=nu),Zb=" ",Qb=!1;function cP(e,r){switch(e){case"keyup":return P3.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fP(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function T3(e,r){switch(e){case"compositionend":return fP(r);case"keypress":return r.which!==32?null:(Qb=!0,Zb);case"textInput":return e=r.data,e===Zb&&Qb?null:e;default:return null}}function k3(e,r){if(ho)return e==="compositionend"||!wg&&cP(e,r)?(e=uP(),Nc=yg=ji=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sP&&r.locale!=="ko"?null:r.data;default:return null}}var C3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jb(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!C3[e.type]:r==="textarea"}function dP(e,r,t,n){W$(n),r=nf(r,"onChange"),0<r.length&&(t=new gg("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var iu=null,Ou=null;function I3(e){SP(e,0)}function Td(e){var r=go(e);if(L$(r))return e}function j3(e,r){if(e==="change")return r}var vP=!1;if(Yn){var Op;if(Yn){var $p="oninput"in document;if(!$p){var ew=document.createElement("div");ew.setAttribute("oninput","return;"),$p=typeof ew.oninput=="function"}Op=$p}else Op=!1;vP=Op&&(!document.documentMode||9<document.documentMode)}function rw(){iu&&(iu.detachEvent("onpropertychange",pP),Ou=iu=null)}function pP(e){if(e.propertyName==="value"&&Td(Ou)){var r=[];dP(r,Ou,e,dg(e)),G$(I3,r)}}function N3(e,r,t){e==="focusin"?(rw(),iu=r,Ou=t,iu.attachEvent("onpropertychange",pP)):e==="focusout"&&rw()}function M3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Td(Ou)}function L3(e,r){if(e==="click")return Td(r)}function D3(e,r){if(e==="input"||e==="change")return Td(r)}function R3(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var en=typeof Object.is=="function"?Object.is:R3;function $u(e,r){if(en(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!zh.call(r,i)||!en(e[i],r[i]))return!1}return!0}function tw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nw(e,r){var t=tw(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=tw(t)}}function hP(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?hP(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function mP(){for(var e=window,r=qc();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=qc(e.document)}return r}function Eg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function F3(e){var r=mP(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&hP(t.ownerDocument.documentElement,t)){if(n!==null&&Eg(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=nw(t,a);var o=nw(t,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z3=Yn&&"documentMode"in document&&11>=document.documentMode,mo=null,am=null,au=null,om=!1;function iw(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;om||mo==null||mo!==qc(n)||(n=mo,"selectionStart"in n&&Eg(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),au&&$u(au,n)||(au=n,n=nf(am,"onSelect"),0<n.length&&(r=new gg("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=mo)))}function Vs(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var yo={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},Pp={},yP={};Yn&&(yP=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function kd(e){if(Pp[e])return Pp[e];if(!yo[e])return e;var r=yo[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in yP)return Pp[e]=r[t];return e}var gP=kd("animationend"),bP=kd("animationiteration"),wP=kd("animationstart"),EP=kd("transitionend"),xP=new Map,aw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(e,r){xP.set(e,r),Va(r,[e])}for(var Ap=0;Ap<aw.length;Ap++){var Tp=aw[Ap],B3=Tp.toLowerCase(),U3=Tp[0].toUpperCase()+Tp.slice(1);Xi(B3,"on"+U3)}Xi(gP,"onAnimationEnd");Xi(bP,"onAnimationIteration");Xi(wP,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(EP,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Va("onBeforeInput",["compositionend","keypress","textInput","paste"]);Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zl));function ow(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,BM(n,r,void 0,e),e.currentTarget=null}function SP(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var o=n.length-1;0<=o;o--){var l=n[o],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==a&&i.isPropagationStopped())break e;ow(i,l,s),a=u}else for(o=0;o<n.length;o++){if(l=n[o],u=l.instance,s=l.currentTarget,l=l.listener,u!==a&&i.isPropagationStopped())break e;ow(i,l,s),a=u}}}if(Qc)throw e=rm,Qc=!1,rm=null,e}function Se(e,r){var t=r[fm];t===void 0&&(t=r[fm]=new Set);var n=e+"__bubble";t.has(n)||(_P(r,e,2,!1),t.add(n))}function kp(e,r,t){var n=0;r&&(n|=4),_P(t,e,n,r)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function Pu(e){if(!e[Hs]){e[Hs]=!0,C$.forEach(function(t){t!=="selectionchange"&&(W3.has(t)||kp(t,!1,e),kp(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Hs]||(r[Hs]=!0,kp("selectionchange",!1,r))}}function _P(e,r,t,n){switch(lP(r)){case 1:var i=n3;break;case 4:i=i3;break;default:i=mg}t=i.bind(null,r,t,e),i=void 0,!em||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(r,t,{capture:!0,passive:i}):e.addEventListener(r,t,!0):i!==void 0?e.addEventListener(r,t,{passive:i}):e.addEventListener(r,t,!1)}function Cp(e,r,t,n,i){var a=n;if(!(r&1)&&!(r&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ga(l),o===null)return;if(u=o.tag,u===5||u===6){n=a=o;continue e}l=l.parentNode}}n=n.return}G$(function(){var s=a,c=dg(t),f=[];e:{var d=xP.get(e);if(d!==void 0){var v=gg,p=e;switch(e){case"keypress":if(Mc(t)===0)break e;case"keydown":case"keyup":v=b3;break;case"focusin":p="focus",v=_p;break;case"focusout":p="blur",v=_p;break;case"beforeblur":case"afterblur":v=_p;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=l3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=x3;break;case gP:case bP:case wP:v=c3;break;case EP:v=_3;break;case"scroll":v=a3;break;case"wheel":v=$3;break;case"copy":case"cut":case"paste":v=d3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qb}var y=(r&4)!==0,m=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var b=s,w;b!==null;){w=b;var E=w.stateNode;if(w.tag===5&&E!==null&&(w=E,h!==null&&(E=Eu(b,h),E!=null&&y.push(Au(b,E,w)))),m)break;b=b.return}0<y.length&&(d=new v(d,p,null,t,c),f.push({event:d,listeners:y}))}}if(!(r&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&t!==Qh&&(p=t.relatedTarget||t.fromElement)&&(ga(p)||p[Xn]))break e;if((v||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,v?(p=t.relatedTarget||t.toElement,v=s,p=p?ga(p):null,p!==null&&(m=Ha(p),p!==m||p.tag!==5&&p.tag!==6)&&(p=null)):(v=null,p=s),v!==p)){if(y=Yb,E="onMouseLeave",h="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(y=qb,E="onPointerLeave",h="onPointerEnter",b="pointer"),m=v==null?d:go(v),w=p==null?d:go(p),d=new y(E,b+"leave",v,t,c),d.target=m,d.relatedTarget=w,E=null,ga(c)===s&&(y=new y(h,b+"enter",p,t,c),y.target=w,y.relatedTarget=m,E=y),m=E,v&&p)r:{for(y=v,h=p,b=0,w=y;w;w=Ja(w))b++;for(w=0,E=h;E;E=Ja(E))w++;for(;0<b-w;)y=Ja(y),b--;for(;0<w-b;)h=Ja(h),w--;for(;b--;){if(y===h||h!==null&&y===h.alternate)break r;y=Ja(y),h=Ja(h)}y=null}else y=null;v!==null&&lw(f,d,v,y,!1),p!==null&&m!==null&&lw(f,m,p,y,!0)}}e:{if(d=s?go(s):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var x=j3;else if(Jb(d))if(vP)x=D3;else{x=M3;var S=N3}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=L3);if(x&&(x=x(e,s))){dP(f,x,t,c);break e}S&&S(e,d,s),e==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Gh(d,"number",d.value)}switch(S=s?go(s):window,e){case"focusin":(Jb(S)||S.contentEditable==="true")&&(mo=S,am=s,au=null);break;case"focusout":au=am=mo=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,iw(f,t,c);break;case"selectionchange":if(z3)break;case"keydown":case"keyup":iw(f,t,c)}var _;if(wg)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ho?cP(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(sP&&t.locale!=="ko"&&(ho||O!=="onCompositionStart"?O==="onCompositionEnd"&&ho&&(_=uP()):(ji=c,yg="value"in ji?ji.value:ji.textContent,ho=!0)),S=nf(s,O),0<S.length&&(O=new Xb(O,e,null,t,c),f.push({event:O,listeners:S}),_?O.data=_:(_=fP(t),_!==null&&(O.data=_)))),(_=A3?T3(e,t):k3(e,t))&&(s=nf(s,"onBeforeInput"),0<s.length&&(c=new Xb("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:s}),c.data=_))}SP(f,r)})}function Au(e,r,t){return{instance:e,listener:r,currentTarget:t}}function nf(e,r){for(var t=r+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Eu(e,t),a!=null&&n.unshift(Au(e,a,i)),a=Eu(e,r),a!=null&&n.push(Au(e,a,i))),e=e.return}return n}function Ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lw(e,r,t,n,i){for(var a=r._reactName,o=[];t!==null&&t!==n;){var l=t,u=l.alternate,s=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&s!==null&&(l=s,i?(u=Eu(t,a),u!=null&&o.unshift(Au(t,u,l))):i||(u=Eu(t,a),u!=null&&o.push(Au(t,u,l)))),t=t.return}o.length!==0&&e.push({event:r,listeners:o})}var V3=/\r\n?/g,H3=/\u0000|\uFFFD/g;function uw(e){return(typeof e=="string"?e:""+e).replace(V3,`
`).replace(H3,"")}function Ks(e,r,t){if(r=uw(r),uw(e)!==r&&t)throw Error(k(425))}function af(){}var lm=null,um=null;function sm(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cm=typeof setTimeout=="function"?setTimeout:void 0,K3=typeof clearTimeout=="function"?clearTimeout:void 0,sw=typeof Promise=="function"?Promise:void 0,G3=typeof queueMicrotask=="function"?queueMicrotask:typeof sw<"u"?function(e){return sw.resolve(null).then(e).catch(Y3)}:cm;function Y3(e){setTimeout(function(){throw e})}function Ip(e,r){var t=r,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(n===0){e.removeChild(i),_u(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=i}while(t);_u(r)}function Fi(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function cw(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var rl=Math.random().toString(36).slice(2),gn="__reactFiber$"+rl,Tu="__reactProps$"+rl,Xn="__reactContainer$"+rl,fm="__reactEvents$"+rl,X3="__reactListeners$"+rl,q3="__reactHandles$"+rl;function ga(e){var r=e[gn];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Xn]||t[gn]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=cw(e);e!==null;){if(t=e[gn])return t;e=cw(e)}return r}e=t,t=e.parentNode}return null}function rs(e){return e=e[gn]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function go(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Cd(e){return e[Tu]||null}var dm=[],bo=-1;function qi(e){return{current:e}}function $e(e){0>bo||(e.current=dm[bo],dm[bo]=null,bo--)}function xe(e,r){bo++,dm[bo]=e.current,e.current=r}var Gi={},Or=qi(Gi),Qr=qi(!1),ka=Gi;function Do(e,r){var t=e.type.contextTypes;if(!t)return Gi;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Jr(e){return e=e.childContextTypes,e!=null}function of(){$e(Qr),$e(Or)}function fw(e,r,t){if(Or.current!==Gi)throw Error(k(168));xe(Or,r),xe(Qr,t)}function OP(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var i in n)if(!(i in r))throw Error(k(108,NM(e)||"Unknown",i));return je({},t,n)}function lf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gi,ka=Or.current,xe(Or,e),xe(Qr,Qr.current),!0}function dw(e,r,t){var n=e.stateNode;if(!n)throw Error(k(169));t?(e=OP(e,r,ka),n.__reactInternalMemoizedMergedChildContext=e,$e(Qr),$e(Or),xe(Or,e)):$e(Qr),xe(Qr,t)}var Rn=null,Id=!1,jp=!1;function $P(e){Rn===null?Rn=[e]:Rn.push(e)}function Z3(e){Id=!0,$P(e)}function Zi(){if(!jp&&Rn!==null){jp=!0;var e=0,r=he;try{var t=Rn;for(he=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Rn=null,Id=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),Z$(vg,Zi),i}finally{he=r,jp=!1}}return null}var wo=[],Eo=0,uf=null,sf=0,Pt=[],At=0,Ca=null,Bn=1,Un="";function va(e,r){wo[Eo++]=sf,wo[Eo++]=uf,uf=e,sf=r}function PP(e,r,t){Pt[At++]=Bn,Pt[At++]=Un,Pt[At++]=Ca,Ca=e;var n=Bn;e=Un;var i=32-Qt(n)-1;n&=~(1<<i),t+=1;var a=32-Qt(r)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Bn=1<<32-Qt(r)+i|t<<i|n,Un=a+e}else Bn=1<<a|t<<i|n,Un=e}function xg(e){e.return!==null&&(va(e,1),PP(e,1,0))}function Sg(e){for(;e===uf;)uf=wo[--Eo],wo[Eo]=null,sf=wo[--Eo],wo[Eo]=null;for(;e===Ca;)Ca=Pt[--At],Pt[At]=null,Un=Pt[--At],Pt[At]=null,Bn=Pt[--At],Pt[At]=null}var pt=null,dt=null,Ae=!1,Gt=null;function AP(e,r){var t=kt(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function vw(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,pt=e,dt=Fi(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,pt=e,dt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Ca!==null?{id:Bn,overflow:Un}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=kt(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,pt=e,dt=null,!0):!1;default:return!1}}function vm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pm(e){if(Ae){var r=dt;if(r){var t=r;if(!vw(e,r)){if(vm(e))throw Error(k(418));r=Fi(t.nextSibling);var n=pt;r&&vw(e,r)?AP(n,t):(e.flags=e.flags&-4097|2,Ae=!1,pt=e)}}else{if(vm(e))throw Error(k(418));e.flags=e.flags&-4097|2,Ae=!1,pt=e}}}function pw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function Gs(e){if(e!==pt)return!1;if(!Ae)return pw(e),Ae=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!sm(e.type,e.memoizedProps)),r&&(r=dt)){if(vm(e))throw TP(),Error(k(418));for(;r;)AP(e,r),r=Fi(r.nextSibling)}if(pw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){dt=Fi(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}dt=null}}else dt=pt?Fi(e.stateNode.nextSibling):null;return!0}function TP(){for(var e=dt;e;)e=Fi(e.nextSibling)}function Ro(){dt=pt=null,Ae=!1}function _g(e){Gt===null?Gt=[e]:Gt.push(e)}var Q3=ii.ReactCurrentBatchConfig;function Pl(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var n=t.stateNode}if(!n)throw Error(k(147,e));var i=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},r._stringRef=a,r)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Ys(e,r){throw e=Object.prototype.toString.call(r),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function hw(e){var r=e._init;return r(e._payload)}function kP(e){function r(h,b){if(e){var w=h.deletions;w===null?(h.deletions=[b],h.flags|=16):w.push(b)}}function t(h,b){if(!e)return null;for(;b!==null;)r(h,b),b=b.sibling;return null}function n(h,b){for(h=new Map;b!==null;)b.key!==null?h.set(b.key,b):h.set(b.index,b),b=b.sibling;return h}function i(h,b){return h=Wi(h,b),h.index=0,h.sibling=null,h}function a(h,b,w){return h.index=w,e?(w=h.alternate,w!==null?(w=w.index,w<b?(h.flags|=2,b):w):(h.flags|=2,b)):(h.flags|=1048576,b)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,b,w,E){return b===null||b.tag!==6?(b=zp(w,h.mode,E),b.return=h,b):(b=i(b,w),b.return=h,b)}function u(h,b,w,E){var x=w.type;return x===po?c(h,b,w.props.children,E,w.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xi&&hw(x)===b.type)?(E=i(b,w.props),E.ref=Pl(h,b,w),E.return=h,E):(E=Uc(w.type,w.key,w.props,null,h.mode,E),E.ref=Pl(h,b,w),E.return=h,E)}function s(h,b,w,E){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=Bp(w,h.mode,E),b.return=h,b):(b=i(b,w.children||[]),b.return=h,b)}function c(h,b,w,E,x){return b===null||b.tag!==7?(b=$a(w,h.mode,E,x),b.return=h,b):(b=i(b,w),b.return=h,b)}function f(h,b,w){if(typeof b=="string"&&b!==""||typeof b=="number")return b=zp(""+b,h.mode,w),b.return=h,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ds:return w=Uc(b.type,b.key,b.props,null,h.mode,w),w.ref=Pl(h,null,b),w.return=h,w;case vo:return b=Bp(b,h.mode,w),b.return=h,b;case xi:var E=b._init;return f(h,E(b._payload),w)}if(Xl(b)||xl(b))return b=$a(b,h.mode,w,null),b.return=h,b;Ys(h,b)}return null}function d(h,b,w,E){var x=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return x!==null?null:l(h,b,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:return w.key===x?u(h,b,w,E):null;case vo:return w.key===x?s(h,b,w,E):null;case xi:return x=w._init,d(h,b,x(w._payload),E)}if(Xl(w)||xl(w))return x!==null?null:c(h,b,w,E,null);Ys(h,w)}return null}function v(h,b,w,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(w)||null,l(b,h,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ds:return h=h.get(E.key===null?w:E.key)||null,u(b,h,E,x);case vo:return h=h.get(E.key===null?w:E.key)||null,s(b,h,E,x);case xi:var S=E._init;return v(h,b,w,S(E._payload),x)}if(Xl(E)||xl(E))return h=h.get(w)||null,c(b,h,E,x,null);Ys(b,E)}return null}function p(h,b,w,E){for(var x=null,S=null,_=b,O=b=0,P=null;_!==null&&O<w.length;O++){_.index>O?(P=_,_=null):P=_.sibling;var T=d(h,_,w[O],E);if(T===null){_===null&&(_=P);break}e&&_&&T.alternate===null&&r(h,_),b=a(T,b,O),S===null?x=T:S.sibling=T,S=T,_=P}if(O===w.length)return t(h,_),Ae&&va(h,O),x;if(_===null){for(;O<w.length;O++)_=f(h,w[O],E),_!==null&&(b=a(_,b,O),S===null?x=_:S.sibling=_,S=_);return Ae&&va(h,O),x}for(_=n(h,_);O<w.length;O++)P=v(_,h,O,w[O],E),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?O:P.key),b=a(P,b,O),S===null?x=P:S.sibling=P,S=P);return e&&_.forEach(function(N){return r(h,N)}),Ae&&va(h,O),x}function y(h,b,w,E){var x=xl(w);if(typeof x!="function")throw Error(k(150));if(w=x.call(w),w==null)throw Error(k(151));for(var S=x=null,_=b,O=b=0,P=null,T=w.next();_!==null&&!T.done;O++,T=w.next()){_.index>O?(P=_,_=null):P=_.sibling;var N=d(h,_,T.value,E);if(N===null){_===null&&(_=P);break}e&&_&&N.alternate===null&&r(h,_),b=a(N,b,O),S===null?x=N:S.sibling=N,S=N,_=P}if(T.done)return t(h,_),Ae&&va(h,O),x;if(_===null){for(;!T.done;O++,T=w.next())T=f(h,T.value,E),T!==null&&(b=a(T,b,O),S===null?x=T:S.sibling=T,S=T);return Ae&&va(h,O),x}for(_=n(h,_);!T.done;O++,T=w.next())T=v(_,h,O,T.value,E),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?O:T.key),b=a(T,b,O),S===null?x=T:S.sibling=T,S=T);return e&&_.forEach(function(A){return r(h,A)}),Ae&&va(h,O),x}function m(h,b,w,E){if(typeof w=="object"&&w!==null&&w.type===po&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:e:{for(var x=w.key,S=b;S!==null;){if(S.key===x){if(x=w.type,x===po){if(S.tag===7){t(h,S.sibling),b=i(S,w.props.children),b.return=h,h=b;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xi&&hw(x)===S.type){t(h,S.sibling),b=i(S,w.props),b.ref=Pl(h,S,w),b.return=h,h=b;break e}t(h,S);break}else r(h,S);S=S.sibling}w.type===po?(b=$a(w.props.children,h.mode,E,w.key),b.return=h,h=b):(E=Uc(w.type,w.key,w.props,null,h.mode,E),E.ref=Pl(h,b,w),E.return=h,h=E)}return o(h);case vo:e:{for(S=w.key;b!==null;){if(b.key===S)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){t(h,b.sibling),b=i(b,w.children||[]),b.return=h,h=b;break e}else{t(h,b);break}else r(h,b);b=b.sibling}b=Bp(w,h.mode,E),b.return=h,h=b}return o(h);case xi:return S=w._init,m(h,b,S(w._payload),E)}if(Xl(w))return p(h,b,w,E);if(xl(w))return y(h,b,w,E);Ys(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,b!==null&&b.tag===6?(t(h,b.sibling),b=i(b,w),b.return=h,h=b):(t(h,b),b=zp(w,h.mode,E),b.return=h,h=b),o(h)):t(h,b)}return m}var Fo=kP(!0),CP=kP(!1),cf=qi(null),ff=null,xo=null,Og=null;function $g(){Og=xo=ff=null}function Pg(e){var r=cf.current;$e(cf),e._currentValue=r}function hm(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function Co(e,r){ff=e,Og=xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Yr=!0),e.firstContext=null)}function Dt(e){var r=e._currentValue;if(Og!==e)if(e={context:e,memoizedValue:r,next:null},xo===null){if(ff===null)throw Error(k(308));xo=e,ff.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return r}var ba=null;function Ag(e){ba===null?ba=[e]:ba.push(e)}function IP(e,r,t,n){var i=r.interleaved;return i===null?(t.next=t,Ag(r)):(t.next=i.next,i.next=t),r.interleaved=t,qn(e,n)}function qn(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Si=!1;function Tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jP(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zi(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ue&2){var i=n.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r,qn(e,t)}return i=n.interleaved,i===null?(r.next=r,Ag(n)):(r.next=i.next,i.next=r),n.interleaved=r,qn(e,t)}function Lc(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,pg(e,t)}}function mw(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?i=a=r:a=a.next=r}else i=a=r;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function df(e,r,t,n){var i=e.updateQueue;Si=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,s=u.next;u.next=null,o===null?a=s:o.next=s,o=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(a!==null){var f=i.baseState;o=0,c=s=u=null,l=a;do{var d=l.lane,v=l.eventTime;if((n&d)===d){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,y=l;switch(d=r,v=t,y.tag){case 1:if(p=y.payload,typeof p=="function"){f=p.call(v,f,d);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,d=typeof p=="function"?p.call(v,f,d):p,d==null)break e;f=je({},f,d);break e;case 2:Si=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else v={eventTime:v,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(s=c=v,u=f):c=c.next=v,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(u=f),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=c,r=i.shared.interleaved,r!==null){i=r;do o|=i.lane,i=i.next;while(i!==r)}else a===null&&(i.shared.lanes=0);ja|=o,e.lanes=o,e.memoizedState=f}}function yw(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],i=n.callback;if(i!==null){if(n.callback=null,n=t,typeof i!="function")throw Error(k(191,i));i.call(n)}}}var ts={},xn=qi(ts),ku=qi(ts),Cu=qi(ts);function wa(e){if(e===ts)throw Error(k(174));return e}function kg(e,r){switch(xe(Cu,r),xe(ku,e),xe(xn,ts),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Xh(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Xh(r,e)}$e(xn),xe(xn,r)}function zo(){$e(xn),$e(ku),$e(Cu)}function NP(e){wa(Cu.current);var r=wa(xn.current),t=Xh(r,e.type);r!==t&&(xe(ku,e),xe(xn,t))}function Cg(e){ku.current===e&&($e(xn),$e(ku))}var Ce=qi(0);function vf(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Np=[];function Ig(){for(var e=0;e<Np.length;e++)Np[e]._workInProgressVersionPrimary=null;Np.length=0}var Dc=ii.ReactCurrentDispatcher,Mp=ii.ReactCurrentBatchConfig,Ia=0,Ie=null,Qe=null,ar=null,pf=!1,ou=!1,Iu=0,J3=0;function wr(){throw Error(k(321))}function jg(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!en(e[t],r[t]))return!1;return!0}function Ng(e,r,t,n,i,a){if(Ia=a,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dc.current=e===null||e.memoizedState===null?nL:iL,e=t(n,i),ou){a=0;do{if(ou=!1,Iu=0,25<=a)throw Error(k(301));a+=1,ar=Qe=null,r.updateQueue=null,Dc.current=aL,e=t(n,i)}while(ou)}if(Dc.current=hf,r=Qe!==null&&Qe.next!==null,Ia=0,ar=Qe=Ie=null,pf=!1,r)throw Error(k(300));return e}function Mg(){var e=Iu!==0;return Iu=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ar===null?Ie.memoizedState=ar=e:ar=ar.next=e,ar}function Rt(){if(Qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var r=ar===null?Ie.memoizedState:ar.next;if(r!==null)ar=r,Qe=e;else{if(e===null)throw Error(k(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},ar===null?Ie.memoizedState=ar=e:ar=ar.next=e}return ar}function ju(e,r){return typeof r=="function"?r(e):r}function Lp(e){var r=Rt(),t=r.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var n=Qe,i=n.baseQueue,a=t.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,n=n.baseState;var l=o=null,u=null,s=a;do{var c=s.lane;if((Ia&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),n=s.hasEagerState?s.eagerState:e(n,s.action);else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=f,o=n):u=u.next=f,Ie.lanes|=c,ja|=c}s=s.next}while(s!==null&&s!==a);u===null?o=n:u.next=l,en(n,r.memoizedState)||(Yr=!0),r.memoizedState=n,r.baseState=o,r.baseQueue=u,t.lastRenderedState=n}if(e=t.interleaved,e!==null){i=e;do a=i.lane,Ie.lanes|=a,ja|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Dp(e){var r=Rt(),t=r.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,a=r.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);en(a,r.memoizedState)||(Yr=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,n]}function MP(){}function LP(e,r){var t=Ie,n=Rt(),i=r(),a=!en(n.memoizedState,i);if(a&&(n.memoizedState=i,Yr=!0),n=n.queue,Lg(FP.bind(null,t,n,e),[e]),n.getSnapshot!==r||a||ar!==null&&ar.memoizedState.tag&1){if(t.flags|=2048,Nu(9,RP.bind(null,t,n,i,r),void 0,null),lr===null)throw Error(k(349));Ia&30||DP(t,r,i)}return i}function DP(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Ie.updateQueue,r===null?(r={lastEffect:null,stores:null},Ie.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function RP(e,r,t,n){r.value=t,r.getSnapshot=n,zP(r)&&BP(e)}function FP(e,r,t){return t(function(){zP(r)&&BP(e)})}function zP(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!en(e,t)}catch{return!0}}function BP(e){var r=qn(e,1);r!==null&&Jt(r,e,1,-1)}function gw(e){var r=mn();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ju,lastRenderedState:e},r.queue=e,e=e.dispatch=tL.bind(null,Ie,e),[r.memoizedState,e]}function Nu(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Ie.updateQueue,r===null?(r={lastEffect:null,stores:null},Ie.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function UP(){return Rt().memoizedState}function Rc(e,r,t,n){var i=mn();Ie.flags|=e,i.memoizedState=Nu(1|r,t,void 0,n===void 0?null:n)}function jd(e,r,t,n){var i=Rt();n=n===void 0?null:n;var a=void 0;if(Qe!==null){var o=Qe.memoizedState;if(a=o.destroy,n!==null&&jg(n,o.deps)){i.memoizedState=Nu(r,t,a,n);return}}Ie.flags|=e,i.memoizedState=Nu(1|r,t,a,n)}function bw(e,r){return Rc(8390656,8,e,r)}function Lg(e,r){return jd(2048,8,e,r)}function WP(e,r){return jd(4,2,e,r)}function VP(e,r){return jd(4,4,e,r)}function HP(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function KP(e,r,t){return t=t!=null?t.concat([e]):null,jd(4,4,HP.bind(null,r,e),t)}function Dg(){}function GP(e,r){var t=Rt();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&jg(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function YP(e,r){var t=Rt();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&jg(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function XP(e,r,t){return Ia&21?(en(t,r)||(t=eP(),Ie.lanes|=t,ja|=t,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Yr=!0),e.memoizedState=t)}function eL(e,r){var t=he;he=t!==0&&4>t?t:4,e(!0);var n=Mp.transition;Mp.transition={};try{e(!1),r()}finally{he=t,Mp.transition=n}}function qP(){return Rt().memoizedState}function rL(e,r,t){var n=Ui(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},ZP(e))QP(r,t);else if(t=IP(e,r,t,n),t!==null){var i=Cr();Jt(t,e,n,i),JP(t,r,n)}}function tL(e,r,t){var n=Ui(e),i={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(ZP(e))QP(r,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var o=r.lastRenderedState,l=a(o,t);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var u=r.interleaved;u===null?(i.next=i,Ag(r)):(i.next=u.next,u.next=i),r.interleaved=i;return}}catch{}finally{}t=IP(e,r,i,n),t!==null&&(i=Cr(),Jt(t,e,n,i),JP(t,r,n))}}function ZP(e){var r=e.alternate;return e===Ie||r!==null&&r===Ie}function QP(e,r){ou=pf=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function JP(e,r,t){if(t&4194240){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,pg(e,t)}}var hf={readContext:Dt,useCallback:wr,useContext:wr,useEffect:wr,useImperativeHandle:wr,useInsertionEffect:wr,useLayoutEffect:wr,useMemo:wr,useReducer:wr,useRef:wr,useState:wr,useDebugValue:wr,useDeferredValue:wr,useTransition:wr,useMutableSource:wr,useSyncExternalStore:wr,useId:wr,unstable_isNewReconciler:!1},nL={readContext:Dt,useCallback:function(e,r){return mn().memoizedState=[e,r===void 0?null:r],e},useContext:Dt,useEffect:bw,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Rc(4194308,4,HP.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Rc(4194308,4,e,r)},useInsertionEffect:function(e,r){return Rc(4,2,e,r)},useMemo:function(e,r){var t=mn();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=mn();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=rL.bind(null,Ie,e),[n.memoizedState,e]},useRef:function(e){var r=mn();return e={current:e},r.memoizedState=e},useState:gw,useDebugValue:Dg,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=gw(!1),r=e[0];return e=eL.bind(null,e[1]),mn().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Ie,i=mn();if(Ae){if(t===void 0)throw Error(k(407));t=t()}else{if(t=r(),lr===null)throw Error(k(349));Ia&30||DP(n,r,t)}i.memoizedState=t;var a={value:t,getSnapshot:r};return i.queue=a,bw(FP.bind(null,n,a,e),[e]),n.flags|=2048,Nu(9,RP.bind(null,n,a,t,r),void 0,null),t},useId:function(){var e=mn(),r=lr.identifierPrefix;if(Ae){var t=Un,n=Bn;t=(n&~(1<<32-Qt(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=Iu++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=J3++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},iL={readContext:Dt,useCallback:GP,useContext:Dt,useEffect:Lg,useImperativeHandle:KP,useInsertionEffect:WP,useLayoutEffect:VP,useMemo:YP,useReducer:Lp,useRef:UP,useState:function(){return Lp(ju)},useDebugValue:Dg,useDeferredValue:function(e){var r=Rt();return XP(r,Qe.memoizedState,e)},useTransition:function(){var e=Lp(ju)[0],r=Rt().memoizedState;return[e,r]},useMutableSource:MP,useSyncExternalStore:LP,useId:qP,unstable_isNewReconciler:!1},aL={readContext:Dt,useCallback:GP,useContext:Dt,useEffect:Lg,useImperativeHandle:KP,useInsertionEffect:WP,useLayoutEffect:VP,useMemo:YP,useReducer:Dp,useRef:UP,useState:function(){return Dp(ju)},useDebugValue:Dg,useDeferredValue:function(e){var r=Rt();return Qe===null?r.memoizedState=e:XP(r,Qe.memoizedState,e)},useTransition:function(){var e=Dp(ju)[0],r=Rt().memoizedState;return[e,r]},useMutableSource:MP,useSyncExternalStore:LP,useId:qP,unstable_isNewReconciler:!1};function Ht(e,r){if(e&&e.defaultProps){r=je({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function mm(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:je({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Nd={isMounted:function(e){return(e=e._reactInternals)?Ha(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=Cr(),i=Ui(e),a=Hn(n,i);a.payload=r,t!=null&&(a.callback=t),r=zi(e,a,i),r!==null&&(Jt(r,e,i,n),Lc(r,e,i))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=Cr(),i=Ui(e),a=Hn(n,i);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=zi(e,a,i),r!==null&&(Jt(r,e,i,n),Lc(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=Cr(),n=Ui(e),i=Hn(t,n);i.tag=2,r!=null&&(i.callback=r),r=zi(e,i,n),r!==null&&(Jt(r,e,n,t),Lc(r,e,n))}};function ww(e,r,t,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):r.prototype&&r.prototype.isPureReactComponent?!$u(t,n)||!$u(i,a):!0}function eA(e,r,t){var n=!1,i=Gi,a=r.contextType;return typeof a=="object"&&a!==null?a=Dt(a):(i=Jr(r)?ka:Or.current,n=r.contextTypes,a=(n=n!=null)?Do(e,i):Gi),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nd,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),r}function Ew(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&Nd.enqueueReplaceState(r,r.state,null)}function ym(e,r,t,n){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Tg(e);var a=r.contextType;typeof a=="object"&&a!==null?i.context=Dt(a):(a=Jr(r)?ka:Or.current,i.context=Do(e,a)),i.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(mm(e,r,a,t),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Nd.enqueueReplaceState(i,i.state,null),df(e,t,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bo(e,r){try{var t="",n=r;do t+=jM(n),n=n.return;while(n);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:i,digest:null}}function Rp(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function gm(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var oL=typeof WeakMap=="function"?WeakMap:Map;function rA(e,r,t){t=Hn(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){yf||(yf=!0,Am=n),gm(e,r)},t}function tA(e,r,t){t=Hn(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=r.value;t.payload=function(){return n(i)},t.callback=function(){gm(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){gm(e,r),typeof n!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})}),t}function xw(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new oL;var i=new Set;n.set(r,i)}else i=n.get(r),i===void 0&&(i=new Set,n.set(r,i));i.has(t)||(i.add(t),e=wL.bind(null,e,r,t),r.then(e,e))}function Sw(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function _w(e,r,t,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Hn(-1,1),r.tag=2,zi(t,r,1))),t.lanes|=1),e)}var lL=ii.ReactCurrentOwner,Yr=!1;function Tr(e,r,t,n){r.child=e===null?CP(r,null,t,n):Fo(r,e.child,t,n)}function Ow(e,r,t,n,i){t=t.render;var a=r.ref;return Co(r,i),n=Ng(e,r,t,n,a,i),t=Mg(),e!==null&&!Yr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Zn(e,r,i)):(Ae&&t&&xg(r),r.flags|=1,Tr(e,r,n,i),r.child)}function $w(e,r,t,n,i){if(e===null){var a=t.type;return typeof a=="function"&&!Hg(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,nA(e,r,a,n,i)):(e=Uc(t.type,null,n,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:$u,t(o,n)&&e.ref===r.ref)return Zn(e,r,i)}return r.flags|=1,e=Wi(a,n),e.ref=r.ref,e.return=r,r.child=e}function nA(e,r,t,n,i){if(e!==null){var a=e.memoizedProps;if($u(a,n)&&e.ref===r.ref)if(Yr=!1,r.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(Yr=!0);else return r.lanes=e.lanes,Zn(e,r,i)}return bm(e,r,t,n,i)}function iA(e,r,t){var n=r.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(_o,ut),ut|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,xe(_o,ut),ut|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:t,xe(_o,ut),ut|=n}else a!==null?(n=a.baseLanes|t,r.memoizedState=null):n=t,xe(_o,ut),ut|=n;return Tr(e,r,i,t),r.child}function aA(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function bm(e,r,t,n,i){var a=Jr(t)?ka:Or.current;return a=Do(r,a),Co(r,i),t=Ng(e,r,t,n,a,i),n=Mg(),e!==null&&!Yr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Zn(e,r,i)):(Ae&&n&&xg(r),r.flags|=1,Tr(e,r,t,i),r.child)}function Pw(e,r,t,n,i){if(Jr(t)){var a=!0;lf(r)}else a=!1;if(Co(r,i),r.stateNode===null)Fc(e,r),eA(r,t,n),ym(r,t,n,i),n=!0;else if(e===null){var o=r.stateNode,l=r.memoizedProps;o.props=l;var u=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Dt(s):(s=Jr(t)?ka:Or.current,s=Do(r,s));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||u!==s)&&Ew(r,o,n,s),Si=!1;var d=r.memoizedState;o.state=d,df(r,n,o,i),u=r.memoizedState,l!==n||d!==u||Qr.current||Si?(typeof c=="function"&&(mm(r,t,c,n),u=r.memoizedState),(l=Si||ww(r,t,l,n,d,u,s))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(r.flags|=4194308)):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=u),o.props=n,o.state=u,o.context=s,n=l):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{o=r.stateNode,jP(e,r),l=r.memoizedProps,s=r.type===r.elementType?l:Ht(r.type,l),o.props=s,f=r.pendingProps,d=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=Jr(t)?ka:Or.current,u=Do(r,u));var v=t.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==u)&&Ew(r,o,n,u),Si=!1,d=r.memoizedState,o.state=d,df(r,n,o,i);var p=r.memoizedState;l!==f||d!==p||Qr.current||Si?(typeof v=="function"&&(mm(r,t,v,n),p=r.memoizedState),(s=Si||ww(r,t,s,n,d,p,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,p,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,p,u)),typeof o.componentDidUpdate=="function"&&(r.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=p),o.props=n,o.state=p,o.context=u,n=s):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(r.flags|=1024),n=!1)}return wm(e,r,t,n,a,i)}function wm(e,r,t,n,i,a){aA(e,r);var o=(r.flags&128)!==0;if(!n&&!o)return i&&dw(r,t,!1),Zn(e,r,a);n=r.stateNode,lL.current=r;var l=o&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&o?(r.child=Fo(r,e.child,null,a),r.child=Fo(r,null,l,a)):Tr(e,r,l,a),r.memoizedState=n.state,i&&dw(r,t,!0),r.child}function oA(e){var r=e.stateNode;r.pendingContext?fw(e,r.pendingContext,r.pendingContext!==r.context):r.context&&fw(e,r.context,!1),kg(e,r.containerInfo)}function Aw(e,r,t,n,i){return Ro(),_g(i),r.flags|=256,Tr(e,r,t,n),r.child}var Em={dehydrated:null,treeContext:null,retryLane:0};function xm(e){return{baseLanes:e,cachePool:null,transitions:null}}function lA(e,r,t){var n=r.pendingProps,i=Ce.current,a=!1,o=(r.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Ce,i&1),e===null)return pm(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(o=n.children,e=n.fallback,a?(n=r.mode,a=r.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Dd(o,n,0,null),e=$a(e,n,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=xm(t),r.memoizedState=Em,e):Rg(r,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uL(e,r,o,n,l,i,t);if(a){a=n.fallback,o=r.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&r.child!==i?(n=r.child,n.childLanes=0,n.pendingProps=u,r.deletions=null):(n=Wi(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Wi(l,a):(a=$a(a,o,t,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,o=e.child.memoizedState,o=o===null?xm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,r.memoizedState=Em,n}return a=e.child,e=a.sibling,n=Wi(a,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function Rg(e,r){return r=Dd({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Xs(e,r,t,n){return n!==null&&_g(n),Fo(r,e.child,null,t),e=Rg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function uL(e,r,t,n,i,a,o){if(t)return r.flags&256?(r.flags&=-257,n=Rp(Error(k(422))),Xs(e,r,o,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,i=r.mode,n=Dd({mode:"visible",children:n.children},i,0,null),a=$a(a,i,o,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,r.mode&1&&Fo(r,e.child,null,o),r.child.memoizedState=xm(o),r.memoizedState=Em,a);if(!(r.mode&1))return Xs(e,r,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(k(419)),n=Rp(a,n,void 0),Xs(e,r,o,n)}if(l=(o&e.childLanes)!==0,Yr||l){if(n=lr,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,qn(e,i),Jt(n,e,i,-1))}return Vg(),n=Rp(Error(k(421))),Xs(e,r,o,n)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=EL.bind(null,e),i._reactRetry=r,null):(e=a.treeContext,dt=Fi(i.nextSibling),pt=r,Ae=!0,Gt=null,e!==null&&(Pt[At++]=Bn,Pt[At++]=Un,Pt[At++]=Ca,Bn=e.id,Un=e.overflow,Ca=r),r=Rg(r,n.children),r.flags|=4096,r)}function Tw(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),hm(e.return,r,t)}function Fp(e,r,t,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=t,a.tailMode=i)}function uA(e,r,t){var n=r.pendingProps,i=n.revealOrder,a=n.tail;if(Tr(e,r,n.children,t),n=Ce.current,n&2)n=n&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tw(e,t,r);else if(e.tag===19)Tw(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(Ce,n),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(t=r.child,i=null;t!==null;)e=t.alternate,e!==null&&vf(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=r.child,r.child=null):(i=t.sibling,t.sibling=null),Fp(r,!1,i,t,a);break;case"backwards":for(t=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&vf(e)===null){r.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Fp(r,!0,t,null,a);break;case"together":Fp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fc(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Zn(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),ja|=r.lanes,!(t&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(k(153));if(r.child!==null){for(e=r.child,t=Wi(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Wi(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function sL(e,r,t){switch(r.tag){case 3:oA(r),Ro();break;case 5:NP(r);break;case 1:Jr(r.type)&&lf(r);break;case 4:kg(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,i=r.memoizedProps.value;xe(cf,n._currentValue),n._currentValue=i;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(xe(Ce,Ce.current&1),r.flags|=128,null):t&r.child.childLanes?lA(e,r,t):(xe(Ce,Ce.current&1),e=Zn(e,r,t),e!==null?e.sibling:null);xe(Ce,Ce.current&1);break;case 19:if(n=(t&r.childLanes)!==0,e.flags&128){if(n)return uA(e,r,t);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Ce,Ce.current),n)break;return null;case 22:case 23:return r.lanes=0,iA(e,r,t)}return Zn(e,r,t)}var sA,Sm,cA,fA;sA=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sm=function(){};cA=function(e,r,t,n){var i=e.memoizedProps;if(i!==n){e=r.stateNode,wa(xn.current);var a=null;switch(t){case"input":i=Hh(e,i),n=Hh(e,n),a=[];break;case"select":i=je({},i,{value:void 0}),n=je({},n,{value:void 0}),a=[];break;case"textarea":i=Yh(e,i),n=Yh(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=af)}qh(t,n);var o;t=null;for(s in i)if(!n.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var l=i[s];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bu.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in n){var u=n[s];if(l=i!=null?i[s]:void 0,n.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(a||(a=[]),a.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(bu.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&Se("scroll",e),a||l===u||(a=[])):(a=a||[]).push(s,u))}t&&(a=a||[]).push("style",t);var s=a;(r.updateQueue=s)&&(r.flags|=4)}};fA=function(e,r,t,n){t!==n&&(r.flags|=4)};function Al(e,r){if(!Ae)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Er(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function cL(e,r,t){var n=r.pendingProps;switch(Sg(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Er(r),null;case 1:return Jr(r.type)&&of(),Er(r),null;case 3:return n=r.stateNode,zo(),$e(Qr),$e(Or),Ig(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gs(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Gt!==null&&(Cm(Gt),Gt=null))),Sm(e,r),Er(r),null;case 5:Cg(r);var i=wa(Cu.current);if(t=r.type,e!==null&&r.stateNode!=null)cA(e,r,t,n,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(k(166));return Er(r),null}if(e=wa(xn.current),Gs(r)){n=r.stateNode,t=r.type;var a=r.memoizedProps;switch(n[gn]=r,n[Tu]=a,e=(r.mode&1)!==0,t){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Zl.length;i++)Se(Zl[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Rb(n,a),Se("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Se("invalid",n);break;case"textarea":zb(n,a),Se("invalid",n)}qh(t,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ks(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ks(n.textContent,l,e),i=["children",""+l]):bu.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",n)}switch(t){case"input":Rs(n),Fb(n,a,!0);break;case"textarea":Rs(n),Bb(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=af)}n=i,r.updateQueue=n,n!==null&&(r.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F$(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(t,{is:n.is}):(e=o.createElement(t),t==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,t),e[gn]=r,e[Tu]=n,sA(e,r,!1,!1),r.stateNode=e;e:{switch(o=Zh(t,n),t){case"dialog":Se("cancel",e),Se("close",e),i=n;break;case"iframe":case"object":case"embed":Se("load",e),i=n;break;case"video":case"audio":for(i=0;i<Zl.length;i++)Se(Zl[i],e);i=n;break;case"source":Se("error",e),i=n;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=n;break;case"details":Se("toggle",e),i=n;break;case"input":Rb(e,n),i=Hh(e,n),Se("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=je({},n,{value:void 0}),Se("invalid",e);break;case"textarea":zb(e,n),i=Yh(e,n),Se("invalid",e);break;default:i=n}qh(t,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?U$(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&z$(e,u)):a==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&wu(e,u):typeof u=="number"&&wu(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(bu.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Se("scroll",e):u!=null&&ug(e,a,u,o))}switch(t){case"input":Rs(e),Fb(e,n,!1);break;case"textarea":Rs(e),Bb(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ki(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Po(e,!!n.multiple,a,!1):n.defaultValue!=null&&Po(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=af)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Er(r),null;case 6:if(e&&r.stateNode!=null)fA(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(k(166));if(t=wa(Cu.current),wa(xn.current),Gs(r)){if(n=r.stateNode,t=r.memoizedProps,n[gn]=r,(a=n.nodeValue!==t)&&(e=pt,e!==null))switch(e.tag){case 3:Ks(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ks(n.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[gn]=r,r.stateNode=n}return Er(r),null;case 13:if($e(Ce),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&dt!==null&&r.mode&1&&!(r.flags&128))TP(),Ro(),r.flags|=98560,a=!1;else if(a=Gs(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[gn]=r}else Ro(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Er(r),a=!1}else Gt!==null&&(Cm(Gt),Gt=null),a=!0;if(!a)return r.flags&65536?r:null}return r.flags&128?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(e===null||Ce.current&1?er===0&&(er=3):Vg())),r.updateQueue!==null&&(r.flags|=4),Er(r),null);case 4:return zo(),Sm(e,r),e===null&&Pu(r.stateNode.containerInfo),Er(r),null;case 10:return Pg(r.type._context),Er(r),null;case 17:return Jr(r.type)&&of(),Er(r),null;case 19:if($e(Ce),a=r.memoizedState,a===null)return Er(r),null;if(n=(r.flags&128)!==0,o=a.rendering,o===null)if(n)Al(a,!1);else{if(er!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(o=vf(e),o!==null){for(r.flags|=128,Al(a,!1),n=o.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)a=t,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return xe(Ce,Ce.current&1|2),r.child}e=e.sibling}a.tail!==null&&ze()>Uo&&(r.flags|=128,n=!0,Al(a,!1),r.lanes=4194304)}else{if(!n)if(e=vf(o),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ae)return Er(r),null}else 2*ze()-a.renderingStartTime>Uo&&t!==1073741824&&(r.flags|=128,n=!0,Al(a,!1),r.lanes=4194304);a.isBackwards?(o.sibling=r.child,r.child=o):(t=a.last,t!==null?t.sibling=o:r.child=o,a.last=o)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=ze(),r.sibling=null,t=Ce.current,xe(Ce,n?t&1|2:t&1),r):(Er(r),null);case 22:case 23:return Wg(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?ut&1073741824&&(Er(r),r.subtreeFlags&6&&(r.flags|=8192)):Er(r),null;case 24:return null;case 25:return null}throw Error(k(156,r.tag))}function fL(e,r){switch(Sg(r),r.tag){case 1:return Jr(r.type)&&of(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return zo(),$e(Qr),$e(Or),Ig(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Cg(r),null;case 13:if($e(Ce),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(k(340));Ro()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return $e(Ce),null;case 4:return zo(),null;case 10:return Pg(r.type._context),null;case 22:case 23:return Wg(),null;case 24:return null;default:return null}}var qs=!1,Sr=!1,dL=typeof WeakSet=="function"?WeakSet:Set,R=null;function So(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){De(e,r,n)}else t.current=null}function _m(e,r,t){try{t()}catch(n){De(e,r,n)}}var kw=!1;function vL(e,r){if(lm=rf,e=mP(),Eg(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,l=-1,u=-1,s=0,c=0,f=e,d=null;r:for(;;){for(var v;f!==t||i!==0&&f.nodeType!==3||(l=o+i),f!==a||n!==0&&f.nodeType!==3||(u=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)d=f,f=v;for(;;){if(f===e)break r;if(d===t&&++s===i&&(l=o),d===a&&++c===n&&(u=o),(v=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=v}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(um={focusedElem:e,selectionRange:t},rf=!1,R=r;R!==null;)if(r=R,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,R=e;else for(;R!==null;){r=R;try{var p=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,m=p.memoizedState,h=r.stateNode,b=h.getSnapshotBeforeUpdate(r.elementType===r.type?y:Ht(r.type,y),m);h.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=r.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){De(r,r.return,E)}if(e=r.sibling,e!==null){e.return=r.return,R=e;break}R=r.return}return p=kw,kw=!1,p}function lu(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_m(r,t,a)}i=i.next}while(i!==n)}}function Md(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function Om(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function dA(e){var r=e.alternate;r!==null&&(e.alternate=null,dA(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[gn],delete r[Tu],delete r[fm],delete r[X3],delete r[q3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vA(e){return e.tag===5||e.tag===3||e.tag===4}function Cw(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $m(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=af));else if(n!==4&&(e=e.child,e!==null))for($m(e,r,t),e=e.sibling;e!==null;)$m(e,r,t),e=e.sibling}function Pm(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Pm(e,r,t),e=e.sibling;e!==null;)Pm(e,r,t),e=e.sibling}var vr=null,Kt=!1;function hi(e,r,t){for(t=t.child;t!==null;)pA(e,r,t),t=t.sibling}function pA(e,r,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Pd,t)}catch{}switch(t.tag){case 5:Sr||So(t,r);case 6:var n=vr,i=Kt;vr=null,hi(e,r,t),vr=n,Kt=i,vr!==null&&(Kt?(e=vr,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):vr.removeChild(t.stateNode));break;case 18:vr!==null&&(Kt?(e=vr,t=t.stateNode,e.nodeType===8?Ip(e.parentNode,t):e.nodeType===1&&Ip(e,t),_u(e)):Ip(vr,t.stateNode));break;case 4:n=vr,i=Kt,vr=t.stateNode.containerInfo,Kt=!0,hi(e,r,t),vr=n,Kt=i;break;case 0:case 11:case 14:case 15:if(!Sr&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_m(t,r,o),i=i.next}while(i!==n)}hi(e,r,t);break;case 1:if(!Sr&&(So(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(l){De(t,r,l)}hi(e,r,t);break;case 21:hi(e,r,t);break;case 22:t.mode&1?(Sr=(n=Sr)||t.memoizedState!==null,hi(e,r,t),Sr=n):hi(e,r,t);break;default:hi(e,r,t)}}function Iw(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dL),r.forEach(function(n){var i=xL.bind(null,e,n);t.has(n)||(t.add(n),n.then(i,i))})}}function Vt(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];try{var a=e,o=r,l=o;e:for(;l!==null;){switch(l.tag){case 5:vr=l.stateNode,Kt=!1;break e;case 3:vr=l.stateNode.containerInfo,Kt=!0;break e;case 4:vr=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(vr===null)throw Error(k(160));pA(a,o,i),vr=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){De(i,r,s)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)hA(r,e),r=r.sibling}function hA(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(r,e),dn(e),n&4){try{lu(3,e,e.return),Md(3,e)}catch(y){De(e,e.return,y)}try{lu(5,e,e.return)}catch(y){De(e,e.return,y)}}break;case 1:Vt(r,e),dn(e),n&512&&t!==null&&So(t,t.return);break;case 5:if(Vt(r,e),dn(e),n&512&&t!==null&&So(t,t.return),e.flags&32){var i=e.stateNode;try{wu(i,"")}catch(y){De(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&D$(i,a),Zh(l,o);var s=Zh(l,a);for(o=0;o<u.length;o+=2){var c=u[o],f=u[o+1];c==="style"?U$(i,f):c==="dangerouslySetInnerHTML"?z$(i,f):c==="children"?wu(i,f):ug(i,c,f,s)}switch(l){case"input":Kh(i,a);break;case"textarea":R$(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Po(i,!!a.multiple,v,!1):d!==!!a.multiple&&(a.defaultValue!=null?Po(i,!!a.multiple,a.defaultValue,!0):Po(i,!!a.multiple,a.multiple?[]:"",!1))}i[Tu]=a}catch(y){De(e,e.return,y)}}break;case 6:if(Vt(r,e),dn(e),n&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){De(e,e.return,y)}}break;case 3:if(Vt(r,e),dn(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{_u(r.containerInfo)}catch(y){De(e,e.return,y)}break;case 4:Vt(r,e),dn(e);break;case 13:Vt(r,e),dn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Bg=ze())),n&4&&Iw(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Sr=(s=Sr)||c,Vt(r,e),Sr=s):Vt(r,e),dn(e),n&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(d=R,v=d.child,d.tag){case 0:case 11:case 14:case 15:lu(4,d,d.return);break;case 1:So(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){n=d,t=d.return;try{r=n,p.props=r.memoizedProps,p.state=r.memoizedState,p.componentWillUnmount()}catch(y){De(n,t,y)}}break;case 5:So(d,d.return);break;case 22:if(d.memoizedState!==null){Nw(f);continue}}v!==null?(v.return=d,R=v):Nw(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,s?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=B$("display",o))}catch(y){De(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(y){De(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vt(r,e),dn(e),n&4&&Iw(e);break;case 21:break;default:Vt(r,e),dn(e)}}function dn(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(vA(t)){var n=t;break e}t=t.return}throw Error(k(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(wu(i,""),n.flags&=-33);var a=Cw(e);Pm(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,l=Cw(e);$m(e,l,o);break;default:throw Error(k(161))}}catch(u){De(e,e.return,u)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function pL(e,r,t){R=e,mA(e)}function mA(e,r,t){for(var n=(e.mode&1)!==0;R!==null;){var i=R,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||qs;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Sr;l=qs;var s=Sr;if(qs=o,(Sr=u)&&!s)for(R=i;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?Mw(i):u!==null?(u.return=o,R=u):Mw(i);for(;a!==null;)R=a,mA(a),a=a.sibling;R=i,qs=l,Sr=s}jw(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,R=a):jw(e)}}function jw(e){for(;R!==null;){var r=R;if(r.flags&8772){var t=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Sr||Md(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Sr)if(t===null)n.componentDidMount();else{var i=r.elementType===r.type?t.memoizedProps:Ht(r.type,t.memoizedProps);n.componentDidUpdate(i,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&yw(r,a,n);break;case 3:var o=r.updateQueue;if(o!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}yw(r,o,t)}break;case 5:var l=r.stateNode;if(t===null&&r.flags&4){t=l;var u=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var s=r.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&_u(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Sr||r.flags&512&&Om(r)}catch(d){De(r,r.return,d)}}if(r===e){R=null;break}if(t=r.sibling,t!==null){t.return=r.return,R=t;break}R=r.return}}function Nw(e){for(;R!==null;){var r=R;if(r===e){R=null;break}var t=r.sibling;if(t!==null){t.return=r.return,R=t;break}R=r.return}}function Mw(e){for(;R!==null;){var r=R;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Md(4,r)}catch(u){De(r,t,u)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var i=r.return;try{n.componentDidMount()}catch(u){De(r,i,u)}}var a=r.return;try{Om(r)}catch(u){De(r,a,u)}break;case 5:var o=r.return;try{Om(r)}catch(u){De(r,o,u)}}}catch(u){De(r,r.return,u)}if(r===e){R=null;break}var l=r.sibling;if(l!==null){l.return=r.return,R=l;break}R=r.return}}var hL=Math.ceil,mf=ii.ReactCurrentDispatcher,Fg=ii.ReactCurrentOwner,Nt=ii.ReactCurrentBatchConfig,ue=0,lr=null,Ve=null,mr=0,ut=0,_o=qi(0),er=0,Mu=null,ja=0,Ld=0,zg=0,uu=null,Gr=null,Bg=0,Uo=1/0,Ln=null,yf=!1,Am=null,Bi=null,Zs=!1,Ni=null,gf=0,su=0,Tm=null,zc=-1,Bc=0;function Cr(){return ue&6?ze():zc!==-1?zc:zc=ze()}function Ui(e){return e.mode&1?ue&2&&mr!==0?mr&-mr:Q3.transition!==null?(Bc===0&&(Bc=eP()),Bc):(e=he,e!==0||(e=window.event,e=e===void 0?16:lP(e.type)),e):1}function Jt(e,r,t,n){if(50<su)throw su=0,Tm=null,Error(k(185));Ju(e,t,n),(!(ue&2)||e!==lr)&&(e===lr&&(!(ue&2)&&(Ld|=t),er===4&&Ci(e,mr)),et(e,n),t===1&&ue===0&&!(r.mode&1)&&(Uo=ze()+500,Id&&Zi()))}function et(e,r){var t=e.callbackNode;QM(e,r);var n=ef(e,e===lr?mr:0);if(n===0)t!==null&&Vb(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&Vb(t),r===1)e.tag===0?Z3(Lw.bind(null,e)):$P(Lw.bind(null,e)),G3(function(){!(ue&6)&&Zi()}),t=null;else{switch(rP(n)){case 1:t=vg;break;case 4:t=Q$;break;case 16:t=Jc;break;case 536870912:t=J$;break;default:t=Jc}t=_A(t,yA.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function yA(e,r){if(zc=-1,Bc=0,ue&6)throw Error(k(327));var t=e.callbackNode;if(Io()&&e.callbackNode!==t)return null;var n=ef(e,e===lr?mr:0);if(n===0)return null;if(n&30||n&e.expiredLanes||r)r=bf(e,n);else{r=n;var i=ue;ue|=2;var a=bA();(lr!==e||mr!==r)&&(Ln=null,Uo=ze()+500,Oa(e,r));do try{gL();break}catch(l){gA(e,l)}while(!0);$g(),mf.current=a,ue=i,Ve!==null?r=0:(lr=null,mr=0,r=er)}if(r!==0){if(r===2&&(i=tm(e),i!==0&&(n=i,r=km(e,i))),r===1)throw t=Mu,Oa(e,0),Ci(e,n),et(e,ze()),t;if(r===6)Ci(e,n);else{if(i=e.current.alternate,!(n&30)&&!mL(i)&&(r=bf(e,n),r===2&&(a=tm(e),a!==0&&(n=a,r=km(e,a))),r===1))throw t=Mu,Oa(e,0),Ci(e,n),et(e,ze()),t;switch(e.finishedWork=i,e.finishedLanes=n,r){case 0:case 1:throw Error(k(345));case 2:pa(e,Gr,Ln);break;case 3:if(Ci(e,n),(n&130023424)===n&&(r=Bg+500-ze(),10<r)){if(ef(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Cr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cm(pa.bind(null,e,Gr,Ln),r);break}pa(e,Gr,Ln);break;case 4:if(Ci(e,n),(n&4194240)===n)break;for(r=e.eventTimes,i=-1;0<n;){var o=31-Qt(n);a=1<<o,o=r[o],o>i&&(i=o),n&=~a}if(n=i,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hL(n/1960))-n,10<n){e.timeoutHandle=cm(pa.bind(null,e,Gr,Ln),n);break}pa(e,Gr,Ln);break;case 5:pa(e,Gr,Ln);break;default:throw Error(k(329))}}}return et(e,ze()),e.callbackNode===t?yA.bind(null,e):null}function km(e,r){var t=uu;return e.current.memoizedState.isDehydrated&&(Oa(e,r).flags|=256),e=bf(e,r),e!==2&&(r=Gr,Gr=t,r!==null&&Cm(r)),e}function Cm(e){Gr===null?Gr=e:Gr.push.apply(Gr,e)}function mL(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var i=t[n],a=i.getSnapshot;i=i.value;try{if(!en(a(),i))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ci(e,r){for(r&=~zg,r&=~Ld,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Qt(r),n=1<<t;e[t]=-1,r&=~n}}function Lw(e){if(ue&6)throw Error(k(327));Io();var r=ef(e,0);if(!(r&1))return et(e,ze()),null;var t=bf(e,r);if(e.tag!==0&&t===2){var n=tm(e);n!==0&&(r=n,t=km(e,n))}if(t===1)throw t=Mu,Oa(e,0),Ci(e,r),et(e,ze()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,pa(e,Gr,Ln),et(e,ze()),null}function Ug(e,r){var t=ue;ue|=1;try{return e(r)}finally{ue=t,ue===0&&(Uo=ze()+500,Id&&Zi())}}function Na(e){Ni!==null&&Ni.tag===0&&!(ue&6)&&Io();var r=ue;ue|=1;var t=Nt.transition,n=he;try{if(Nt.transition=null,he=1,e)return e()}finally{he=n,Nt.transition=t,ue=r,!(ue&6)&&Zi()}}function Wg(){ut=_o.current,$e(_o)}function Oa(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,K3(t)),Ve!==null)for(t=Ve.return;t!==null;){var n=t;switch(Sg(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&of();break;case 3:zo(),$e(Qr),$e(Or),Ig();break;case 5:Cg(n);break;case 4:zo();break;case 13:$e(Ce);break;case 19:$e(Ce);break;case 10:Pg(n.type._context);break;case 22:case 23:Wg()}t=t.return}if(lr=e,Ve=e=Wi(e.current,null),mr=ut=r,er=0,Mu=null,zg=Ld=ja=0,Gr=uu=null,ba!==null){for(r=0;r<ba.length;r++)if(t=ba[r],n=t.interleaved,n!==null){t.interleaved=null;var i=n.next,a=t.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}t.pending=n}ba=null}return e}function gA(e,r){do{var t=Ve;try{if($g(),Dc.current=hf,pf){for(var n=Ie.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}pf=!1}if(Ia=0,ar=Qe=Ie=null,ou=!1,Iu=0,Fg.current=null,t===null||t.return===null){er=1,Mu=r,Ve=null;break}e:{var a=e,o=t.return,l=t,u=r;if(r=mr,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Sw(o);if(v!==null){v.flags&=-257,_w(v,o,l,a,r),v.mode&1&&xw(a,s,r),r=v,u=s;var p=r.updateQueue;if(p===null){var y=new Set;y.add(u),r.updateQueue=y}else p.add(u);break e}else{if(!(r&1)){xw(a,s,r),Vg();break e}u=Error(k(426))}}else if(Ae&&l.mode&1){var m=Sw(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),_w(m,o,l,a,r),_g(Bo(u,l));break e}}a=u=Bo(u,l),er!==4&&(er=2),uu===null?uu=[a]:uu.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var h=rA(a,u,r);mw(a,h);break e;case 1:l=u;var b=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Bi===null||!Bi.has(w)))){a.flags|=65536,r&=-r,a.lanes|=r;var E=tA(a,l,r);mw(a,E);break e}}a=a.return}while(a!==null)}EA(t)}catch(x){r=x,Ve===t&&t!==null&&(Ve=t=t.return);continue}break}while(!0)}function bA(){var e=mf.current;return mf.current=hf,e===null?hf:e}function Vg(){(er===0||er===3||er===2)&&(er=4),lr===null||!(ja&268435455)&&!(Ld&268435455)||Ci(lr,mr)}function bf(e,r){var t=ue;ue|=2;var n=bA();(lr!==e||mr!==r)&&(Ln=null,Oa(e,r));do try{yL();break}catch(i){gA(e,i)}while(!0);if($g(),ue=t,mf.current=n,Ve!==null)throw Error(k(261));return lr=null,mr=0,er}function yL(){for(;Ve!==null;)wA(Ve)}function gL(){for(;Ve!==null&&!WM();)wA(Ve)}function wA(e){var r=SA(e.alternate,e,ut);e.memoizedProps=e.pendingProps,r===null?EA(e):Ve=r,Fg.current=null}function EA(e){var r=e;do{var t=r.alternate;if(e=r.return,r.flags&32768){if(t=fL(t,r),t!==null){t.flags&=32767,Ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{er=6,Ve=null;return}}else if(t=cL(t,r,ut),t!==null){Ve=t;return}if(r=r.sibling,r!==null){Ve=r;return}Ve=r=e}while(r!==null);er===0&&(er=5)}function pa(e,r,t){var n=he,i=Nt.transition;try{Nt.transition=null,he=1,bL(e,r,t,n)}finally{Nt.transition=i,he=n}return null}function bL(e,r,t,n){do Io();while(Ni!==null);if(ue&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(JM(e,a),e===lr&&(Ve=lr=null,mr=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Zs||(Zs=!0,_A(Jc,function(){return Io(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Nt.transition,Nt.transition=null;var o=he;he=1;var l=ue;ue|=4,Fg.current=null,vL(e,t),hA(t,e),F3(um),rf=!!lm,um=lm=null,e.current=t,pL(t),VM(),ue=l,he=o,Nt.transition=a}else e.current=t;if(Zs&&(Zs=!1,Ni=e,gf=i),a=e.pendingLanes,a===0&&(Bi=null),GM(t.stateNode),et(e,ze()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)i=r[t],n(i.value,{componentStack:i.stack,digest:i.digest});if(yf)throw yf=!1,e=Am,Am=null,e;return gf&1&&e.tag!==0&&Io(),a=e.pendingLanes,a&1?e===Tm?su++:(su=0,Tm=e):su=0,Zi(),null}function Io(){if(Ni!==null){var e=rP(gf),r=Nt.transition,t=he;try{if(Nt.transition=null,he=16>e?16:e,Ni===null)var n=!1;else{if(e=Ni,Ni=null,gf=0,ue&6)throw Error(k(331));var i=ue;for(ue|=4,R=e.current;R!==null;){var a=R,o=a.child;if(R.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(R=s;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:lu(8,c,a)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var d=c.sibling,v=c.return;if(dA(c),c===s){R=null;break}if(d!==null){d.return=v,R=d;break}R=v}}}var p=a.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}R=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,R=o;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:lu(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,R=h;break e}R=a.return}}var b=e.current;for(R=b;R!==null;){o=R;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,R=w;else e:for(o=b;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Md(9,l)}}catch(x){De(l,l.return,x)}if(l===o){R=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,R=E;break e}R=l.return}}if(ue=i,Zi(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Pd,e)}catch{}n=!0}return n}finally{he=t,Nt.transition=r}}return!1}function Dw(e,r,t){r=Bo(t,r),r=rA(e,r,1),e=zi(e,r,1),r=Cr(),e!==null&&(Ju(e,1,r),et(e,r))}function De(e,r,t){if(e.tag===3)Dw(e,e,t);else for(;r!==null;){if(r.tag===3){Dw(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bi===null||!Bi.has(n))){e=Bo(t,e),e=tA(r,e,1),r=zi(r,e,1),e=Cr(),r!==null&&(Ju(r,1,e),et(r,e));break}}r=r.return}}function wL(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=Cr(),e.pingedLanes|=e.suspendedLanes&t,lr===e&&(mr&t)===t&&(er===4||er===3&&(mr&130023424)===mr&&500>ze()-Bg?Oa(e,0):zg|=t),et(e,r)}function xA(e,r){r===0&&(e.mode&1?(r=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):r=1);var t=Cr();e=qn(e,r),e!==null&&(Ju(e,r,t),et(e,t))}function EL(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),xA(e,t)}function xL(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(k(314))}n!==null&&n.delete(r),xA(e,t)}var SA;SA=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||Qr.current)Yr=!0;else{if(!(e.lanes&t)&&!(r.flags&128))return Yr=!1,sL(e,r,t);Yr=!!(e.flags&131072)}else Yr=!1,Ae&&r.flags&1048576&&PP(r,sf,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Fc(e,r),e=r.pendingProps;var i=Do(r,Or.current);Co(r,t),i=Ng(null,r,n,e,i,t);var a=Mg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jr(n)?(a=!0,lf(r)):a=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tg(r),i.updater=Nd,r.stateNode=i,i._reactInternals=r,ym(r,n,e,t),r=wm(null,r,n,!0,a,t)):(r.tag=0,Ae&&a&&xg(r),Tr(null,r,i,t),r=r.child),r;case 16:n=r.elementType;e:{switch(Fc(e,r),e=r.pendingProps,i=n._init,n=i(n._payload),r.type=n,i=r.tag=_L(n),e=Ht(n,e),i){case 0:r=bm(null,r,n,e,t);break e;case 1:r=Pw(null,r,n,e,t);break e;case 11:r=Ow(null,r,n,e,t);break e;case 14:r=$w(null,r,n,Ht(n.type,e),t);break e}throw Error(k(306,n,""))}return r;case 0:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Ht(n,i),bm(e,r,n,i,t);case 1:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Ht(n,i),Pw(e,r,n,i,t);case 3:e:{if(oA(r),e===null)throw Error(k(387));n=r.pendingProps,a=r.memoizedState,i=a.element,jP(e,r),df(r,n,null,t);var o=r.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){i=Bo(Error(k(423)),r),r=Aw(e,r,n,t,i);break e}else if(n!==i){i=Bo(Error(k(424)),r),r=Aw(e,r,n,t,i);break e}else for(dt=Fi(r.stateNode.containerInfo.firstChild),pt=r,Ae=!0,Gt=null,t=CP(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ro(),n===i){r=Zn(e,r,t);break e}Tr(e,r,n,t)}r=r.child}return r;case 5:return NP(r),e===null&&pm(r),n=r.type,i=r.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,sm(n,i)?o=null:a!==null&&sm(n,a)&&(r.flags|=32),aA(e,r),Tr(e,r,o,t),r.child;case 6:return e===null&&pm(r),null;case 13:return lA(e,r,t);case 4:return kg(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=Fo(r,null,n,t):Tr(e,r,n,t),r.child;case 11:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Ht(n,i),Ow(e,r,n,i,t);case 7:return Tr(e,r,r.pendingProps,t),r.child;case 8:return Tr(e,r,r.pendingProps.children,t),r.child;case 12:return Tr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,i=r.pendingProps,a=r.memoizedProps,o=i.value,xe(cf,n._currentValue),n._currentValue=o,a!==null)if(en(a.value,o)){if(a.children===i.children&&!Qr.current){r=Zn(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=Hn(-1,t&-t),u.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),hm(a.return,t,r),l.lanes|=t;break}u=u.next}}else if(a.tag===10)o=a.type===r.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),hm(o,t,r),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===r){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Tr(e,r,i.children,t),r=r.child}return r;case 9:return i=r.type,n=r.pendingProps.children,Co(r,t),i=Dt(i),n=n(i),r.flags|=1,Tr(e,r,n,t),r.child;case 14:return n=r.type,i=Ht(n,r.pendingProps),i=Ht(n.type,i),$w(e,r,n,i,t);case 15:return nA(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,i=r.pendingProps,i=r.elementType===n?i:Ht(n,i),Fc(e,r),r.tag=1,Jr(n)?(e=!0,lf(r)):e=!1,Co(r,t),eA(r,n,i),ym(r,n,i,t),wm(null,r,n,!0,e,t);case 19:return uA(e,r,t);case 22:return iA(e,r,t)}throw Error(k(156,r.tag))};function _A(e,r){return Z$(e,r)}function SL(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,r,t,n){return new SL(e,r,t,n)}function Hg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _L(e){if(typeof e=="function")return Hg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cg)return 11;if(e===fg)return 14}return 2}function Wi(e,r){var t=e.alternate;return t===null?(t=kt(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Uc(e,r,t,n,i,a){var o=2;if(n=e,typeof e=="function")Hg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case po:return $a(t.children,i,a,r);case sg:o=8,i|=8;break;case Bh:return e=kt(12,t,r,i|2),e.elementType=Bh,e.lanes=a,e;case Uh:return e=kt(13,t,r,i),e.elementType=Uh,e.lanes=a,e;case Wh:return e=kt(19,t,r,i),e.elementType=Wh,e.lanes=a,e;case N$:return Dd(t,i,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I$:o=10;break e;case j$:o=9;break e;case cg:o=11;break e;case fg:o=14;break e;case xi:o=16,n=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return r=kt(o,t,r,i),r.elementType=e,r.type=n,r.lanes=a,r}function $a(e,r,t,n){return e=kt(7,e,n,r),e.lanes=t,e}function Dd(e,r,t,n){return e=kt(22,e,n,r),e.elementType=N$,e.lanes=t,e.stateNode={isHidden:!1},e}function zp(e,r,t){return e=kt(6,e,null,r),e.lanes=t,e}function Bp(e,r,t){return r=kt(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function OL(e,r,t,n,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ep(0),this.expirationTimes=Ep(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kg(e,r,t,n,i,a,o,l,u){return e=new OL(e,r,t,l,u),r===1?(r=1,a===!0&&(r|=8)):r=0,a=kt(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tg(a),e}function $L(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function OA(e){if(!e)return Gi;e=e._reactInternals;e:{if(Ha(e)!==e||e.tag!==1)throw Error(k(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Jr(t))return OP(e,t,r)}return r}function $A(e,r,t,n,i,a,o,l,u){return e=Kg(t,n,!0,e,i,a,o,l,u),e.context=OA(null),t=e.current,n=Cr(),i=Ui(t),a=Hn(n,i),a.callback=r??null,zi(t,a,i),e.current.lanes=i,Ju(e,i,n),et(e,n),e}function Rd(e,r,t,n){var i=r.current,a=Cr(),o=Ui(i);return t=OA(t),r.context===null?r.context=t:r.pendingContext=t,r=Hn(a,o),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=zi(i,r,o),e!==null&&(Jt(e,i,o,a),Lc(e,i,o)),o}function wf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rw(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Gg(e,r){Rw(e,r),(e=e.alternate)&&Rw(e,r)}function PL(){return null}var PA=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yg(e){this._internalRoot=e}Fd.prototype.render=Yg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(k(409));Rd(e,r,null,null)};Fd.prototype.unmount=Yg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Na(function(){Rd(null,e,null,null)}),r[Xn]=null}};function Fd(e){this._internalRoot=e}Fd.prototype.unstable_scheduleHydration=function(e){if(e){var r=iP();e={blockedOn:null,target:e,priority:r};for(var t=0;t<ki.length&&r!==0&&r<ki[t].priority;t++);ki.splice(t,0,e),t===0&&oP(e)}};function Xg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fw(){}function AL(e,r,t,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var s=wf(o);a.call(s)}}var o=$A(r,n,e,0,null,!1,!1,"",Fw);return e._reactRootContainer=o,e[Xn]=o.current,Pu(e.nodeType===8?e.parentNode:e),Na(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var s=wf(u);l.call(s)}}var u=Kg(e,0,!1,null,null,!1,!1,"",Fw);return e._reactRootContainer=u,e[Xn]=u.current,Pu(e.nodeType===8?e.parentNode:e),Na(function(){Rd(r,u,t,n)}),u}function Bd(e,r,t,n,i){var a=t._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var u=wf(o);l.call(u)}}Rd(r,o,e,i)}else o=AL(t,r,e,i,n);return wf(o)}tP=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=ql(r.pendingLanes);t!==0&&(pg(r,t|1),et(r,ze()),!(ue&6)&&(Uo=ze()+500,Zi()))}break;case 13:Na(function(){var n=qn(e,1);if(n!==null){var i=Cr();Jt(n,e,1,i)}}),Gg(e,1)}};hg=function(e){if(e.tag===13){var r=qn(e,134217728);if(r!==null){var t=Cr();Jt(r,e,134217728,t)}Gg(e,134217728)}};nP=function(e){if(e.tag===13){var r=Ui(e),t=qn(e,r);if(t!==null){var n=Cr();Jt(t,e,r,n)}Gg(e,r)}};iP=function(){return he};aP=function(e,r){var t=he;try{return he=e,r()}finally{he=t}};Jh=function(e,r,t){switch(r){case"input":if(Kh(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var i=Cd(n);if(!i)throw Error(k(90));L$(n),Kh(n,i)}}}break;case"textarea":R$(e,t);break;case"select":r=t.value,r!=null&&Po(e,!!t.multiple,r,!1)}};H$=Ug;K$=Na;var TL={usingClientEntryPoint:!1,Events:[rs,go,Cd,W$,V$,Ug]},Tl={findFiberByHostInstance:ga,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kL={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=X$(e),e===null?null:e.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||PL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Pd=Qs.inject(kL),En=Qs}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TL;bt.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xg(r))throw Error(k(200));return $L(e,r,null,t)};bt.createRoot=function(e,r){if(!Xg(e))throw Error(k(299));var t=!1,n="",i=PA;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Kg(e,1,!1,null,null,t,!1,n,i),e[Xn]=r.current,Pu(e.nodeType===8?e.parentNode:e),new Yg(r)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=X$(r),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return Na(e)};bt.hydrate=function(e,r,t){if(!zd(r))throw Error(k(200));return Bd(null,e,r,!0,t)};bt.hydrateRoot=function(e,r,t){if(!Xg(e))throw Error(k(405));var n=t!=null&&t.hydratedSources||null,i=!1,a="",o=PA;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),r=$A(r,null,e,1,t??null,i,!1,a,o),e[Xn]=r.current,Pu(e),n)for(e=0;e<n.length;e++)t=n[e],i=t._getVersion,i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i);return new Fd(r)};bt.render=function(e,r,t){if(!zd(r))throw Error(k(200));return Bd(null,e,r,!1,t)};bt.unmountComponentAtNode=function(e){if(!zd(e))throw Error(k(40));return e._reactRootContainer?(Na(function(){Bd(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};bt.unstable_batchedUpdates=Ug;bt.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!zd(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bd(e,r,t,!1,n)};bt.version="18.3.1-next-f1338f8080-20240426";function AA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(AA)}catch(e){console.error(e)}}AA(),A$.exports=bt;var Ud=A$.exports,TA,zw=Ud;TA=zw.createRoot,zw.hydrateRoot;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CL=typeof Object.defineProperty=="function"?Object.defineProperty:null,IL=CL;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jL=IL;function NL(){try{return jL({},"x",{}),!0}catch{return!1}}var ML=NL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LL=Object.defineProperty,DL=LL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RL(e){return typeof e=="number"}var kA=RL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FL(e){return e[0]==="-"}function Bw(e){var r="",t;for(t=0;t<e;t++)r+="0";return r}function zL(e,r,t){var n=!1,i=r-e.length;return i<0||(FL(e)&&(n=!0,e=e.substr(1)),e=t?e+Bw(i):Bw(i)+e,n&&(e="-"+e)),e}var CA=zL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BL=kA,Uw=CA,UL=String.prototype.toLowerCase,Ww=String.prototype.toUpperCase;function WL(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;case"d":case"i":case"u":default:r=10;break}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!BL(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&(e.specifier==="u"||r!==10)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Uw(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),!n&&!e.precision?t="":e.precision&&(t=Uw(t,e.precision,e.padRight)),e.sign&&(t=e.sign+t)),r===16&&(e.alternate&&(t="0x"+t),t=e.specifier===Ww.call(e.specifier)?Ww.call(t):UL.call(t)),r===8&&e.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}var VL=WL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HL(e){return typeof e=="string"}var KL=HL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GL=Math.abs,YL=String.prototype.toLowerCase,Vw=String.prototype.toUpperCase,ua=String.prototype.replace,XL=/e\+(\d)$/,qL=/e-(\d)$/,ZL=/^(\d+)$/,QL=/^(\d+)e/,JL=/\.0$/,eD=/\.0*e/,rD=/(\..*[^0])0*e/;function tD(e,r){var t,n;switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":GL(e)<1e-4?(t=r.precision,t>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=ua.call(n,rD,"$1e"),n=ua.call(n,eD,"e"),n=ua.call(n,JL,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=ua.call(n,XL,"e+0$1"),n=ua.call(n,qL,"e-0$1"),r.alternate&&(n=ua.call(n,ZL,"$1."),n=ua.call(n,QL,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Vw.call(r.specifier)?Vw.call(n):YL.call(n),n}var nD=tD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hw(e){var r="",t;for(t=0;t<e;t++)r+=" ";return r}function iD(e,r,t){var n=r-e.length;return n<0||(e=t?e+Hw(n):Hw(n)+e),e}var aD=iD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oD=VL,lD=KL,uD=kA,sD=nD,cD=aD,fD=CA,dD=String.fromCharCode,vD=Array.isArray;function Js(e){return e!==e}function pD(e){var r={};return r.specifier=e.specifier,r.precision=e.precision===void 0?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function hD(e){var r,t,n,i,a,o,l,u,s,c;if(!vD(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",l=1,s=0;s<e.length;s++)if(n=e[s],lD(n))o+=n;else{if(r=n.precision!==void 0,n=pD(n),!n.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c),i){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(n.width==="*"){if(n.width=parseInt(arguments[l],10),l+=1,Js(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&n.precision==="*"){if(n.precision=parseInt(arguments[l],10),l+=1,Js(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=oD(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Js(n.arg)){if(a=parseInt(n.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Js(a)?String(n.arg):dD(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(r||(n.precision=6),u=parseFloat(n.arg),!isFinite(u)){if(!uD(n.arg))throw new Error("invalid floating-point number. Value: "+o);u=n.arg,n.padZeros=!1}n.arg=sD(u,n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=fD(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=cD(n.arg,n.width,n.padRight)),o+=n.arg||"",l+=1}return o}var mD=hD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yD=mD,gD=yD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function bD(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(r.precision="1"),r}function wD(e){var r,t,n,i;for(t=[],i=0,n=ec.exec(e);n;)r=e.slice(i,ec.lastIndex-n[0].length),r.length&&t.push(r),n[6]==="%"?t.push("%"):t.push(bD(n)),i=ec.lastIndex,n=ec.exec(e);return r=e.slice(i),r.length&&t.push(r),t}var ED=wD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xD=ED,SD=xD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _D(e){return typeof e=="string"}var OD=_D;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $D=gD,PD=SD,AD=OD;function IA(e){var r,t;if(!AD(e))throw new TypeError(IA("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[PD(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $D.apply(null,r)}var TD=IA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kD=TD,We=kD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kw=We,tl=Object.prototype,Gw=tl.toString,Yw=tl.__defineGetter__,Xw=tl.__defineSetter__,CD=tl.__lookupGetter__,ID=tl.__lookupSetter__;function jD(e,r,t){var n,i,a,o;if(typeof e!="object"||e===null||Gw.call(e)==="[object Array]")throw new TypeError(Kw("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof t!="object"||t===null||Gw.call(t)==="[object Array]")throw new TypeError(Kw("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(i="value"in t,i&&(CD.call(e,r)||ID.call(e,r)?(n=e.__proto__,e.__proto__=tl,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Yw&&Yw.call(e,r,t.get),o&&Xw&&Xw.call(e,r,t.set),e}var ND=jD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MD=ML,LD=DL,DD=ND,Im;MD()?Im=LD:Im=DD;var Wd=Im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RD=Wd;function FD(e,r,t){RD(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var zD=FD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BD=zD,ve=BD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UD=Wd;function WD(e,r,t){UD(e,r,{configurable:!1,enumerable:!1,get:t})}var VD=WD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HD=VD,Qi=HD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KD=Wd;function GD(e,r,t,n){KD(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}var YD=GD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XD=YD,ns=XD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qD(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var ZD=qD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QD=ZD,JD=QD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eR=JD,rR=eR();function tR(){return rR&&typeof Symbol.toStringTag=="symbol"}var nR=tR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iR=nR,Vd=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aR=Object.prototype.toString,jA=aR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oR=jA;function lR(e){return oR.call(e)}var uR=lR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sR=Object.prototype.hasOwnProperty;function cR(e,r){return e==null?!1:sR.call(e,r)}var fR=cR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dR=fR,ai=dR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vR=typeof Symbol=="function"?Symbol:void 0,pR=vR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hR=pR,qg=hR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qw=qg,mR=typeof qw=="function"?qw.toStringTag:"",yR=mR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gR=ai,kl=yR,Up=jA;function bR(e){var r,t,n;if(e==null)return Up.call(e);t=e[kl],r=gR(e,kl);try{e[kl]=void 0}catch{return Up.call(e)}return n=Up.call(e),r?e[kl]=t:delete e[kl],n}var wR=bR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ER=Vd,xR=uR,SR=wR,jm;ER()?jm=SR:jm=xR;var gr=jm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _R=gr,Nm;function OR(e){return _R(e)==="[object Array]"}Array.isArray?Nm=Array.isArray:Nm=OR;var $R=Nm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PR=$R,is=PR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AR=is;function TR(e){return typeof e=="object"&&e!==null&&!AR(e)}var kR=TR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CR=kR,Hd=CR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IR=/./,jR=IR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NR(e){return typeof e=="boolean"}var NA=NR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MR=Boolean,LR=MR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DR=LR,as=DR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RR=Boolean.prototype.toString,FR=RR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zR=FR;function BR(e){try{return zR.call(e),!0}catch{return!1}}var UR=BR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WR=Vd,VR=gr,HR=as,KR=UR,GR=WR();function YR(e){return typeof e=="object"?e instanceof HR?!0:GR?KR(e):VR(e)==="[object Boolean]":!1}var MA=YR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XR=NA,qR=MA;function ZR(e){return XR(e)||qR(e)}var QR=ZR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LA=ve,Zg=QR,JR=NA,e4=MA;LA(Zg,"isPrimitive",JR);LA(Zg,"isObject",e4);var nl=Zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r4(){return new Function("return this;")()}var t4=r4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n4=typeof self=="object"?self:null,i4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a4=typeof window=="object"?window:null,o4=a4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l4=typeof globalThis=="object"?globalThis:null,u4=l4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s4=nl.isPrimitive,c4=We,f4=t4,Zw=i4,Qw=o4,Jw=u4;function d4(e){if(arguments.length){if(!s4(e))throw new TypeError(c4("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return f4()}if(Jw)return Jw;if(Zw)return Zw;if(Qw)return Qw;throw new Error("unexpected error. Unable to resolve global object.")}var v4=d4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p4=v4,eE=p4(),h4=eE.document&&eE.document.childNodes,m4=h4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y4=Int8Array,g4=y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b4=jR,w4=m4,E4=g4;function x4(){return typeof b4=="function"||typeof E4=="object"||typeof w4=="function"}var S4=x4;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _4(){return/^\s*function\s*([^(]*)/i}var DA=_4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O4=DA,$4=O4(),P4=$4;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A4=ve,RA=DA,T4=P4;A4(RA,"REGEXP",T4);var FA=RA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k4=is,C4=We;function I4(e){if(typeof e!="function")throw new TypeError(C4("invalid argument. Must provide a function. Value: `%s`.",e));return r;function r(t){var n,i;if(!k4(t)||(n=t.length,n===0))return!1;for(i=0;i<n;i++)if(e(t[i])===!1)return!1;return!0}}var j4=I4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N4=j4,zA=N4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M4(e){return e!==null&&typeof e=="object"}var L4=M4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D4=ve,R4=zA,Qg=L4,F4=R4(Qg);D4(Qg,"isObjectLikeArray",F4);var z4=Qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B4=z4;function U4(e){return B4(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var W4=U4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V4=W4,BA=V4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H4=gr,K4=FA.REGEXP,G4=BA;function Y4(e){var r,t,n;if(t=H4(e).slice(8,-1),(t==="Object"||t==="Error")&&e.constructor){if(n=e.constructor,typeof n.name=="string")return n.name;if(r=K4.exec(n.toString()),r)return r[1]}return G4(e)?"Buffer":t}var X4=Y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q4=X4,Ka=q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z4=Ka;function Q4(e){var r;return e===null?"null":(r=typeof e,r==="object"?Z4(e).toLowerCase():r)}var J4=Q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e6=Ka;function r6(e){return e6(e).toLowerCase()}var t6=r6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n6=S4,i6=J4,a6=t6,o6=n6()?a6:i6,l6=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u6=l6;function s6(e){return u6(e)==="function"}var c6=s6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f6=c6,Ga=f6;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d6=Object,v6=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p6=v6,UA=p6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h6=Object.getPrototypeOf,m6=h6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y6(e){return e.__proto__}var g6=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=gr,rE=UA,w6=g6;function E6(e){var r=w6(e);return r||r===null?r:b6(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof rE?rE.prototype:null}var x6=E6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S6=Ga,_6=m6,O6=x6,Mm;S6(Object.getPrototypeOf)?Mm=_6:Mm=O6;var $6=Mm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P6=UA,A6=$6;function T6(e){return e==null?null:(e=P6(e),A6(e))}var k6=T6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C6=k6,Kd=C6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I6=Hd,tE=Ga,j6=Kd,Wc=ai,N6=gr,M6=Object.prototype;function L6(e){var r;for(r in e)if(!Wc(e,r))return!1;return!0}function D6(e){var r;return I6(e)?(r=j6(e),r?!Wc(e,"constructor")&&Wc(r,"constructor")&&tE(r.constructor)&&N6(r.constructor)==="[object Function]"&&Wc(r,"isPrototypeOf")&&tE(r.isPrototypeOf)&&(r===M6||L6(e)):!0):!1}var R6=D6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F6=R6,os=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function z6(){}var B6=z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U6=B6;function W6(){return U6.name==="foo"}var V6=W6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H6=V6,K6=H6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G6=Ga,Y6=K6,X6=We,q6=FA.REGEXP,Z6=Y6();function Q6(e){if(G6(e)===!1)throw new TypeError(X6("invalid argument. Must provide a function. Value: `%s`.",e));return Z6?e.name:q6.exec(e.toString())[1]}var J6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eF=J6,rF=eF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tF=gr,nF=typeof Float64Array=="function";function iF(e){return nF&&e instanceof Float64Array||tF(e)==="[object Float64Array]"}var aF=iF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oF=aF,lF=oF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uF=typeof Float64Array=="function"?Float64Array:null,sF=uF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cF=lF,nE=sF;function fF(){var e,r;if(typeof nE!="function")return!1;try{r=new nE([1,3.14,-3.14,NaN]),e=cF(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{e=!1}return e}var dF=fF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vF=dF,WA=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pF=typeof Float64Array=="function"?Float64Array:void 0,hF=pF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mF(){throw new Error("not implemented")}var yF=mF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gF=WA,bF=hF,wF=yF,Lm;gF()?Lm=bF:Lm=wF;var un=Lm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EF=gr,xF=typeof Int8Array=="function";function SF(e){return xF&&e instanceof Int8Array||EF(e)==="[object Int8Array]"}var _F=SF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OF=_F,$F=OF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PF=127,AF=PF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TF=-128,kF=TF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CF=typeof Int8Array=="function"?Int8Array:null,IF=CF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jF=$F,NF=AF,MF=kF,iE=IF;function LF(){var e,r;if(typeof iE!="function")return!1;try{r=new iE([1,3.14,-3.14,NF+1]),e=jF(r)&&r[0]===1&&r[1]===3&&r[2]===-3&&r[3]===MF}catch{e=!1}return e}var DF=LF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RF=DF,FF=RF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zF=typeof Int8Array=="function"?Int8Array:void 0,BF=zF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UF(){throw new Error("not implemented")}var WF=UF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VF=FF,HF=BF,KF=WF,Dm;VF()?Dm=HF:Dm=KF;var Jg=Dm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GF=gr,YF=typeof Uint8Array=="function";function XF(e){return YF&&e instanceof Uint8Array||GF(e)==="[object Uint8Array]"}var qF=XF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZF=qF,QF=ZF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JF=255,ez=JF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rz=typeof Uint8Array=="function"?Uint8Array:null,tz=rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nz=QF,Wp=ez,aE=tz;function iz(){var e,r;if(typeof aE!="function")return!1;try{r=[1,3.14,-3.14,Wp+1,Wp+2],r=new aE(r),e=nz(r)&&r[0]===1&&r[1]===3&&r[2]===Wp-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var az=iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oz=az,lz=oz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uz=typeof Uint8Array=="function"?Uint8Array:void 0,sz=uz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cz(){throw new Error("not implemented")}var fz=cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dz=lz,vz=sz,pz=fz,Rm;dz()?Rm=vz:Rm=pz;var il=Rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hz=gr,mz=typeof Uint8ClampedArray=="function";function yz(e){return mz&&e instanceof Uint8ClampedArray||hz(e)==="[object Uint8ClampedArray]"}var gz=yz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bz=gz,wz=bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ez=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,xz=Ez;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sz=wz,oE=xz;function _z(){var e,r;if(typeof oE!="function")return!1;try{r=new oE([-1,0,1,3.14,4.99,255,256]),e=Sz(r)&&r[0]===0&&r[1]===0&&r[2]===1&&r[3]===3&&r[4]===5&&r[5]===255&&r[6]===255}catch{e=!1}return e}var Oz=_z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $z=Oz,Pz=$z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Az=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,Tz=Az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kz(){throw new Error("not implemented")}var Cz=kz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iz=Pz,jz=Tz,Nz=Cz,Fm;Iz()?Fm=jz:Fm=Nz;var e0=Fm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mz=gr,Lz=typeof Int16Array=="function";function Dz(e){return Lz&&e instanceof Int16Array||Mz(e)==="[object Int16Array]"}var Rz=Dz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fz=Rz,zz=Fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bz=32767,Uz=Bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wz=-32768,Vz=Wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hz=typeof Int16Array=="function"?Int16Array:null,Kz=Hz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gz=zz,Yz=Uz,Xz=Vz,lE=Kz;function qz(){var e,r;if(typeof lE!="function")return!1;try{r=new lE([1,3.14,-3.14,Yz+1]),e=Gz(r)&&r[0]===1&&r[1]===3&&r[2]===-3&&r[3]===Xz}catch{e=!1}return e}var Zz=qz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qz=Zz,Jz=Qz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e8=typeof Int16Array=="function"?Int16Array:void 0,r8=e8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t8(){throw new Error("not implemented")}var n8=t8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i8=Jz,a8=r8,o8=n8,zm;i8()?zm=a8:zm=o8;var r0=zm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l8=gr,u8=typeof Uint16Array=="function";function s8(e){return u8&&e instanceof Uint16Array||l8(e)==="[object Uint16Array]"}var c8=s8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f8=c8,d8=f8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v8=65535,p8=v8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h8=typeof Uint16Array=="function"?Uint16Array:null,m8=h8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y8=d8,Vp=p8,uE=m8;function g8(){var e,r;if(typeof uE!="function")return!1;try{r=[1,3.14,-3.14,Vp+1,Vp+2],r=new uE(r),e=y8(r)&&r[0]===1&&r[1]===3&&r[2]===Vp-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var b8=g8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w8=b8,E8=w8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x8=typeof Uint16Array=="function"?Uint16Array:void 0,S8=x8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _8(){throw new Error("not implemented")}var O8=_8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $8=E8,P8=S8,A8=O8,Bm;$8()?Bm=P8:Bm=A8;var Gd=Bm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T8=gr,k8=typeof Int32Array=="function";function C8(e){return k8&&e instanceof Int32Array||T8(e)==="[object Int32Array]"}var I8=C8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j8=I8,t0=j8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N8=2147483647,ls=N8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M8=-2147483648,L8=M8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D8=typeof Int32Array=="function"?Int32Array:null,R8=D8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F8=t0,z8=ls,B8=L8,sE=R8;function U8(){var e,r;if(typeof sE!="function")return!1;try{r=new sE([1,3.14,-3.14,z8+1]),e=F8(r)&&r[0]===1&&r[1]===3&&r[2]===-3&&r[3]===B8}catch{e=!1}return e}var W8=U8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V8=W8,H8=V8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K8=typeof Int32Array=="function"?Int32Array:void 0,G8=K8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Y8(){throw new Error("not implemented")}var X8=Y8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q8=H8,Z8=G8,Q8=X8,Um;q8()?Um=Z8:Um=Q8;var us=Um;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J8=gr,e5=typeof Uint32Array=="function";function r5(e){return e5&&e instanceof Uint32Array||J8(e)==="[object Uint32Array]"}var t5=r5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n5=t5,VA=n5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i5=4294967295,n0=i5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a5=typeof Uint32Array=="function"?Uint32Array:null,o5=a5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l5=VA,Hp=n0,cE=o5;function u5(){var e,r;if(typeof cE!="function")return!1;try{r=[1,3.14,-3.14,Hp+1,Hp+2],r=new cE(r),e=l5(r)&&r[0]===1&&r[1]===3&&r[2]===Hp-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var s5=u5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c5=s5,f5=c5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d5=typeof Uint32Array=="function"?Uint32Array:void 0,v5=d5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p5(){throw new Error("not implemented")}var h5=p5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m5=f5,y5=v5,g5=h5,Wm;m5()?Wm=y5:Wm=g5;var oi=Wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b5=gr,w5=typeof Float32Array=="function";function E5(e){return w5&&e instanceof Float32Array||b5(e)==="[object Float32Array]"}var x5=E5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S5=x5,_5=S5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O5=Number.POSITIVE_INFINITY,li=O5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $5=typeof Float32Array=="function"?Float32Array:null,P5=$5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A5=_5,T5=li,fE=P5;function k5(){var e,r;if(typeof fE!="function")return!1;try{r=new fE([1,3.14,-3.14,5e40]),e=A5(r)&&r[0]===1&&r[1]===3.140000104904175&&r[2]===-3.140000104904175&&r[3]===T5}catch{e=!1}return e}var C5=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I5=C5,j5=I5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N5=typeof Float32Array=="function"?Float32Array:void 0,M5=N5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L5(){throw new Error("not implemented")}var D5=L5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R5=j5,F5=M5,z5=D5,Vm;R5()?Vm=F5:Vm=z5;var al=Vm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B5=Jg,U5=il,W5=e0,V5=r0,H5=Gd,K5=us,G5=oi,Y5=al,X5=un,q5=[X5,Y5,K5,G5,V5,H5,B5,U5,W5],Z5=q5;const Q5=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J5=Ka,eB=rF,HA=Kd,rB=WA,tB=un,dE=Z5,vE=Q5,Vc=rB()?HA(tB):KA;Vc=eB(Vc)==="TypedArray"?Vc:KA;function KA(){}function nB(e){var r,t;if(typeof e!="object"||e===null)return!1;if(e instanceof Vc)return!0;for(t=0;t<dE.length;t++)if(e instanceof dE[t])return!0;for(;e;){for(r=J5(e),t=0;t<vE.length;t++)if(vE[t]===r)return!0;e=HA(e)}return!1}var iB=nB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aB=iB,oB=aB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lB(e){return typeof e=="number"}var GA=lB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uB=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sB=uB,i0=sB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cB=i0,fB=cB.prototype.toString,dB=fB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vB=dB;function pB(e){try{return vB.call(e),!0}catch{return!1}}var hB=pB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mB=Vd,yB=gr,gB=i0,bB=hB,wB=mB();function EB(e){return typeof e=="object"?e instanceof gB?!0:wB?bB(e):yB(e)==="[object Number]":!1}var YA=EB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xB=GA,SB=YA;function _B(e){return xB(e)||SB(e)}var OB=_B;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XA=ve,a0=OB,$B=GA,PB=YA;XA(a0,"isPrimitive",$B);XA(a0,"isObject",PB);var Ya=a0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AB=i0,TB=AB.NEGATIVE_INFINITY,ss=TB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kB=Math.floor,CB=kB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IB=CB,Ji=IB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jB=Ji;function NB(e){return jB(e)===e}var MB=NB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LB=MB,Xa=LB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DB=li,RB=ss,FB=Xa;function zB(e){return e<DB&&e>RB&&FB(e)}var qA=zB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BB=Ya.isPrimitive,UB=qA;function WB(e){return BB(e)&&UB(e)}var ZA=WB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VB=Ya.isObject,HB=qA;function KB(e){return VB(e)&&HB(e.valueOf())}var QA=KB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GB=ZA,YB=QA;function XB(e){return GB(e)||YB(e)}var qB=XB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JA=ve,o0=qB,ZB=ZA,QB=QA;JA(o0,"isPrimitive",ZB);JA(o0,"isObject",QB);var cs=o0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JB=cs.isPrimitive;function eU(e){return JB(e)&&e>=0}var e2=eU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rU=cs.isObject;function tU(e){return rU(e)&&e.valueOf()>=0}var r2=tU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nU=e2,iU=r2;function aU(e){return nU(e)||iU(e)}var oU=aU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t2=ve,l0=oU,lU=e2,uU=r2;t2(l0,"isPrimitive",lU);t2(l0,"isObject",uU);var u0=l0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sU=4294967295,cU=sU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fU=Xa,dU=cU;function vU(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&fU(e.length)&&e.length>=0&&e.length<=dU}var pU=vU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hU=pU,ol=hU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mU=9007199254740991,yU=mU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gU=Xa,bU=yU;function wU(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&gU(e.length)&&e.length>=0&&e.length<=bU}var EU=wU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xU=EU,ll=xU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SU=gr,_U=typeof ArrayBuffer=="function";function OU(e){return _U&&e instanceof ArrayBuffer||SU(e)==="[object ArrayBuffer]"}var $U=OU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PU=$U,s0=PU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function AU(e){return typeof e=="string"}var n2=AU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TU=String.prototype.valueOf,kU=TU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CU=kU;function IU(e){try{return CU.call(e),!0}catch{return!1}}var jU=IU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NU=Vd,MU=gr,LU=jU,DU=NU();function RU(e){return typeof e=="object"?e instanceof String?!0:DU?LU(e):MU(e)==="[object String]":!1}var i2=RU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FU=n2,zU=i2;function BU(e){return FU(e)||zU(e)}var UU=BU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2=ve,c0=UU,WU=n2,VU=i2;a2(c0,"isPrimitive",WU);a2(c0,"isObject",VU);var Yd=c0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o2=ve,f0=zA,d0=Yd,HU=f0(d0.isPrimitive),KU=f0(d0.isObject),v0=f0(d0);o2(v0,"primitives",HU);o2(v0,"objects",KU);var p0=v0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GU=Wd;function YU(e,r,t){GU(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var XU=YU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qU=XU,l2=qU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZU(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var QU=ZU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function JU(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var eW=JU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pE=Ya.isPrimitive,hE=l2,ul=ve,mE=We,rW=QU,tW=eW;function ea(e,r){if(!(this instanceof ea))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!pE(e))throw new TypeError(mE("invalid argument. Real component must be a number. Value: `%s`.",e));if(!pE(r))throw new TypeError(mE("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return hE(this,"re",e),hE(this,"im",r),this}ul(ea,"name","Complex128");ul(ea,"BYTES_PER_ELEMENT",8);ul(ea.prototype,"BYTES_PER_ELEMENT",8);ul(ea.prototype,"byteLength",16);ul(ea.prototype,"toString",rW);ul(ea.prototype,"toJSON",tW);var nW=ea;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iW=nW,u2=iW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aW=typeof Math.fround=="function"?Math.fround:null,oW=aW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lW=al,yE=new lW(1);function uW(e){return yE[0]=e,yE[0]}var sW=uW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gE=oW,cW=sW,Hm;typeof gE=="function"?Hm=gE:Hm=cW;var fW=Hm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dW(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var vW=dW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pW(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var hW=pW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bE=Ya.isPrimitive,wE=l2,sl=ve,EE=fW,xE=We,mW=vW,yW=hW;function ra(e,r){if(!(this instanceof ra))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!bE(e))throw new TypeError(xE("invalid argument. Real component must be a number. Value: `%s`.",e));if(!bE(r))throw new TypeError(xE("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return wE(this,"re",EE(e)),wE(this,"im",EE(r)),this}sl(ra,"name","Complex64");sl(ra,"BYTES_PER_ELEMENT",4);sl(ra.prototype,"BYTES_PER_ELEMENT",4);sl(ra.prototype,"byteLength",8);sl(ra.prototype,"toString",mW);sl(ra.prototype,"toJSON",yW);var gW=ra;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bW=gW,s2=bW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wW=u2,EW=s2;function xW(e){return e instanceof wW||e instanceof EW?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var SW=xW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _W=SW,ta=_W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OW=Xa;function $W(e){return OW(e/2)}var PW=$W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AW=PW,h0=AW;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TW=8;function kW(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===TW}var CW=kW;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IW=CW,c2=IW;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jW=16;function NW(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===jW}var MW=NW;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LW=MW,f2=LW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DW=ai,rc=qg;function RW(){return typeof rc=="function"&&typeof rc("foo")=="symbol"&&DW(rc,"iterator")&&typeof rc.iterator=="symbol"}var FW=RW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zW=FW,Xd=zW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BW=Xd,UW=BW()?Symbol.iterator:null,WW=UW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VW=WW,m0=VW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HW(e){return e.re}var KW=HW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GW=KW,qd=GW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YW(e){return e.im}var XW=YW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qW=XW,Zd=qW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZW=al;function QW(e,r){return new ZW(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var JW=QW;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e9=JW,y0=e9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r9=un;function t9(e,r){return new r9(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var n9=t9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i9=n9,g0=i9;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SE={float64:a9,float32:o9,int32:l9,int16:u9,int8:s9,uint32:c9,uint16:f9,uint8:d9,uint8c:v9,generic:p9,default:h9};function a9(e,r){return e[r]}function o9(e,r){return e[r]}function l9(e,r){return e[r]}function u9(e,r){return e[r]}function s9(e,r){return e[r]}function c9(e,r){return e[r]}function f9(e,r){return e[r]}function d9(e,r){return e[r]}function v9(e,r){return e[r]}function p9(e,r){return e[r]}function h9(e,r){return e[r]}function m9(e){var r=SE[e];return typeof r=="function"?r:SE.default}var y9=m9;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g9=y9,Qd=g9;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _E={complex128:b9,complex64:w9,default:E9};function b9(e,r){return e.get(r)}function w9(e,r){return e.get(r)}function E9(e,r){return e.get(r)}function x9(e){var r=_E[e];return typeof r=="function"?r:_E.default}var S9=x9;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _9=S9,Jd=_9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O9=ol,$9=ta,P9=qd,A9=Zd,T9=We;function k9(e){var r,t,n;for(r=[];t=e.next(),!t.done;)if(n=t.value,O9(n)&&n.length>=2)r.push(n[0],n[1]);else if($9(n))r.push(P9(n),A9(n));else return new TypeError(T9("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return r}var C9=k9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I9=ol,j9=ta,N9=qd,M9=Zd,L9=We;function D9(e,r,t){var n,i,a,o;for(n=[],o=-1;i=e.next(),!i.done;)if(o+=1,a=r.call(t,i.value,o),I9(a)&&a.length>=2)n.push(a[0],a[1]);else if(j9(a))n.push(N9(a),M9(a));else return new TypeError(L9("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return n}var R9=D9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F9=ta,z9=qd,B9=Zd;function U9(e,r){var t,n,i,a;for(t=r.length,a=0,i=0;i<t;i++){if(n=r[i],!F9(n))return null;e[a]=z9(n),e[a+1]=B9(n),a+=2}return e}var W9=U9,cu=u0.isPrimitive,Km=ol,b0=ll,OE=s0,w0=Hd,V9=is,H9=p0.primitives,d2=Yd.isPrimitive,He=Ga,Mt=ta,Ef=h0,rt=Xa,K9=c2,G9=f2,Y9=Xd,On=m0,q=ve,ev=Qi,Ot=al,X9=s2,B=We,rn=qd,tn=Zd,q9=Ji,Z9=y0,Q9=g0,J9=Qd,eV=Jd,v2=C9,rV=R9,tV=W9,st=Ot.BYTES_PER_ELEMENT*2,p2=Y9();function oe(e){return e instanceof G||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function h2(e){return e===G||e.name==="Complex128Array"}function Re(e,r){return r*=2,new X9(e[r],e[r+1])}function G(){var e,r,t,n;if(r=arguments.length,!(this instanceof G))return r===0?new G:r===1?new G(arguments[0]):r===2?new G(arguments[0],arguments[1]):new G(arguments[0],arguments[1],arguments[2]);if(r===0)t=new Ot(0);else if(r===1)if(cu(arguments[0]))t=new Ot(arguments[0]*2);else if(b0(arguments[0]))if(t=arguments[0],n=t.length,n&&V9(t)&&Mt(t[0])){if(t=tV(new Ot(n*2),t),t===null){if(!Ef(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ot(arguments[0])}}else{if(K9(t))t=Z9(t,0);else if(G9(t))t=Q9(t,0);else if(!Ef(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ot(t)}else if(OE(arguments[0])){if(t=arguments[0],!rt(t.byteLength/st))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",st,t.byteLength));t=new Ot(t)}else if(w0(arguments[0])){if(t=arguments[0],p2===!1)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!He(t[On]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[On](),!He(t.next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=v2(t),t instanceof Error)throw t;t=new Ot(t)}else throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!OE(t))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(e=arguments[1],!cu(e))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!rt(e/st))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",st,e));if(r===2){if(n=t.byteLength-e,!rt(n/st))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",st,n));t=new Ot(t,e)}else{if(n=arguments[2],!cu(n))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*st>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*st));t=new Ot(t,e,n*2)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}q(G,"BYTES_PER_ELEMENT",st);q(G,"name","Complex64Array");q(G,"from",function(r){var t,n,i,a,o,l,u,s,c,f,d,v;if(!He(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!h2(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(i=arguments[1],!He(i))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(t=arguments[2])}if(oe(r)){if(s=r.length,i){for(a=new this(s),o=a._buffer,v=0,d=0;d<s;d++){if(f=i.call(t,r.get(d),d),Mt(f))o[v]=rn(f),o[v+1]=tn(f);else if(Km(f)&&f.length>=2)o[v]=f[0],o[v+1]=f[1];else throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));v+=2}return a}return new this(r)}if(b0(r)){if(i){for(s=r.length,r.get&&r.set?u=eV("default"):u=J9("default"),d=0;d<s;d++)if(!Mt(u(r,d))){c=!0;break}if(c){if(!Ef(s))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(a=new this(s/2),o=a._buffer,d=0;d<s;d++)o[d]=i.call(t,u(r,d),d);return a}for(a=new this(s),o=a._buffer,v=0,d=0;d<s;d++){if(f=i.call(t,u(r,d),d),Mt(f))o[v]=rn(f),o[v+1]=tn(f);else if(Km(f)&&f.length>=2)o[v]=f[0],o[v+1]=f[1];else throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));v+=2}return a}return new this(r)}if(w0(r)&&p2&&He(r[On])){if(o=r[On](),!He(o.next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?l=rV(o,i,t):l=v2(o),l instanceof Error)throw l;for(s=l.length/2,a=new this(s),o=a._buffer,d=0;d<s;d++)o[d]=l[d];return a}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});q(G,"of",function(){var r,t;if(!He(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!h2(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);return new this(r)});q(G.prototype,"at",function(r){if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!rt(r))throw new TypeError(B("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return Re(this._buffer,r)});ev(G.prototype,"buffer",function(){return this._buffer.buffer});ev(G.prototype,"byteLength",function(){return this._buffer.byteLength});ev(G.prototype,"byteOffset",function(){return this._buffer.byteOffset});q(G.prototype,"BYTES_PER_ELEMENT",G.BYTES_PER_ELEMENT);q(G.prototype,"copyWithin",function(r,t){if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,t*2):this._buffer.copyWithin(r*2,t*2,arguments[2]*2),this});q(G.prototype,"entries",function(){var r,t,n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,i=this._buffer,n=this._length,o=-1,t={},q(t,"next",l),q(t,"return",u),On&&q(t,On,s),t;function l(){return o+=1,a||o>=n?{done:!0}:{value:[o,Re(i,o)],done:!1}}function u(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function s(){return r.entries()}});q(G.prototype,"every",function(r,t){var n,i;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(!r.call(t,Re(n,i),i,this))return!1;return!0});q(G.prototype,"fill",function(r,t,n){var i,a,o,l,u,s;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Mt(r))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,a=this._length,arguments.length>1){if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=a,t<0&&(t=0)),arguments.length>2){if(!rt(n))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",n));n<0&&(n+=a,n<0&&(n=0)),n>a&&(n=a)}else n=a}else t=0,n=a;for(l=rn(r),u=tn(r),s=t;s<n;s++)o=2*s,i[o]=l,i[o+1]=u;return this});q(G.prototype,"filter",function(r,t){var n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=[],a=0;a<this._length;a++)o=Re(n,a),r.call(t,o,a,this)&&i.push(o);return new this.constructor(i)});q(G.prototype,"find",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(a=Re(n,i),r.call(t,a,i,this))return a});q(G.prototype,"findIndex",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(a=Re(n,i),r.call(t,a,i,this))return i;return-1});q(G.prototype,"findLast",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length-1;i>=0;i--)if(a=Re(n,i),r.call(t,a,i,this))return a});q(G.prototype,"findLastIndex",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length-1;i>=0;i--)if(a=Re(n,i),r.call(t,a,i,this))return i;return-1});q(G.prototype,"forEach",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)a=Re(n,i),r.call(t,a,i,this)});q(G.prototype,"get",function(r){if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cu(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return Re(this._buffer,r)});q(G.prototype,"includes",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Mt(r))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(a=rn(r),o=tn(r),n=this._buffer,l=t;l<this._length;l++)if(i=2*l,a===n[i]&&o===n[i+1])return!0;return!1});q(G.prototype,"indexOf",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Mt(r))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(a=rn(r),o=tn(r),n=this._buffer,l=t;l<this._length;l++)if(i=2*l,a===n[i]&&o===n[i+1])return l;return-1});q(G.prototype,"join",function(r){var t,n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(d2(r))i=r;else throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[],n=this._buffer,a=0;a<this._length;a++)t.push(Re(n,a).toString());return t.join(i)});q(G.prototype,"keys",function(){var r,t,n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,n=this._length,a=-1,t={},q(t,"next",o),q(t,"return",l),On&&q(t,On,u),t;function o(){return a+=1,i||a>=n?{done:!0}:{value:a,done:!1}}function l(s){return i=!0,arguments.length?{value:s,done:!0}:{done:!0}}function u(){return r.keys()}});q(G.prototype,"lastIndexOf",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Mt(r))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(a=rn(r),o=tn(r),n=this._buffer,l=t;l>=0;l--)if(i=2*l,a===n[i]&&o===n[i+1])return l;return-1});ev(G.prototype,"length",function(){return this._length});q(G.prototype,"map",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,a=new this.constructor(this._length),n=a._buffer,o=0;o<this._length;o++)if(l=r.call(t,Re(i,o),o,this),Mt(l))n[2*o]=rn(l),n[2*o+1]=tn(l);else if(Km(l)&&l.length===2)n[2*o]=l[0],n[2*o+1]=l[1];else throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));return a});q(G.prototype,"reduce",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,a=this._length,arguments.length>1)i=t,l=0;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=Re(n,0),l=1}for(;l<a;l++)o=Re(n,l),i=r(i,o,l,this);return i});q(G.prototype,"reduceRight",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,a=this._length,arguments.length>1)i=t,l=a-1;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=Re(n,a-1),l=a-2}for(;l>=0;l--)o=Re(n,l),i=r(i,o,l,this);return i});q(G.prototype,"reverse",function(){var r,t,n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(n=this._length,r=this._buffer,i=q9(n/2),a=0;a<i;a++)o=n-a-1,t=r[2*a],r[2*a]=r[2*o],r[2*o]=t,t=r[2*a+1],r[2*a+1]=r[2*o+1],r[2*o+1]=t;return this});q(G.prototype,"set",function(r){var t,n,i,a,o,l,u,s,c;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!cu(n))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Mt(r)){if(n>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));n*=2,i[n]=rn(r),i[n+1]=tn(r);return}if(oe(r)){if(l=r._length,n+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=r._buffer,c=i.byteOffset+n*st,t.buffer===i.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ot(t.length),s=0;s<t.length;s++)a[s]=t[s];t=a}for(n*=2,c=0,s=0;s<l;s++)i[n]=t[c],i[n+1]=t[c+1],n+=2,c+=2;return}if(b0(r)){for(l=r.length,s=0;s<l;s++)if(!Mt(r[s])){o=!0;break}if(o){if(!Ef(l))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",l));if(n+l/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=r,c=i.byteOffset+n*st,t.buffer===i.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ot(l),s=0;s<l;s++)a[s]=t[s];t=a}for(n*=2,l/=2,c=0,s=0;s<l;s++)i[n]=t[c],i[n+1]=t[c+1],n+=2,c+=2;return}if(n+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,s=0;s<l;s++)u=r[s],i[n]=rn(u),i[n+1]=tn(u),n+=2;return}throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});q(G.prototype,"slice",function(r,t){var n,i,a,o,l,u,s;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(l=this._buffer,u=this._length,arguments.length===0)r=0,t=u;else{if(!rt(r))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=u,r<0&&(r=0)),arguments.length===1)t=u;else{if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=u,t<0&&(t=0)):t>u&&(t=u)}}for(r<t?n=t-r:n=0,a=new this.constructor(n),i=a._buffer,s=0;s<n;s++)o=2*(s+r),i[2*s]=l[o],i[2*s+1]=l[o+1];return a});q(G.prototype,"some",function(r,t){var n,i;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(r.call(t,Re(n,i),i,this))return!0;return!1});q(G.prototype,"sort",function(r){var t,n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length,t=[],a=0;a<i;a++)t.push(Re(n,a));for(t.sort(r),a=0;a<i;a++)o=2*a,n[o]=rn(t[a]),n[o+1]=tn(t[a]);return this});q(G.prototype,"subarray",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,a=this._length,arguments.length===0)r=0,t=a;else{if(!rt(r))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=a,r<0&&(r=0)),arguments.length===1)t=a;else{if(!rt(t))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=a,t<0&&(t=0)):t>a&&(t=a)}}return r>=a?(a=0,n=i.byteLength):r>=t?(a=0,n=i.byteOffset+r*st):(a=t-r,n=i.byteOffset+r*st),new this.constructor(i.buffer,n,a<0?0:a)});q(G.prototype,"toLocaleString",function(r,t){var n,i,a,o,l;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=[];else if(d2(r)||H9(r))i=r;else throw new TypeError(B("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",r));if(arguments.length<2)n={};else if(w0(t))n=t;else throw new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",t));for(o=this._buffer,a=[],l=0;l<this._length;l++)a.push(Re(o,l).toLocaleString(i,n));return a.join(",")});q(G.prototype,"toReversed",function(){var r,t,n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(n=this._length,t=new this.constructor(n),i=this._buffer,r=t._buffer,a=0;a<n;a++)o=n-a-1,r[2*a]=i[2*o],r[2*a+1]=i[2*o+1];return t});q(G.prototype,"toSorted",function(r){var t,n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!He(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length,t=[],a=0;a<i;a++)t.push(Re(n,a));return t.sort(r),new G(t)});q(G.prototype,"toString",function(){var r,t,n;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],t=this._buffer,n=0;n<this._length;n++)r.push(Re(t,n).toString());return r.join(",")});q(G.prototype,"values",function(){var r,t,n,i,a,o;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,a=this._buffer,n=this._length,o=-1,r={},q(r,"next",l),q(r,"return",u),On&&q(r,On,s),r;function l(){return o+=1,i||o>=n?{done:!0}:{value:Re(a,o),done:!1}}function u(c){return i=!0,arguments.length?{value:c,done:!0}:{done:!0}}function s(){return t.values()}});q(G.prototype,"with",function(r,t){var n,i,a;if(!oe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!rt(r))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",r));if(a=this._length,r<0&&(r+=a),r<0||r>=a)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!Mt(t))throw new TypeError(B("invalid argument. Second argument must be a complex number. Value: `%s`.",t));return i=new this.constructor(this._buffer),n=i._buffer,n[2*r]=rn(t),n[2*r+1]=tn(t),i});var nV=G;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iV=nV,E0=iV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aV(e){return e.re}var oV=aV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lV=oV,rv=lV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uV(e){return e.im}var sV=uV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cV=sV,tv=cV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fV=ol,dV=ta,vV=We,pV=rv,hV=tv;function mV(e){var r,t,n;for(r=[];t=e.next(),!t.done;)if(n=t.value,fV(n)&&n.length>=2)r.push(n[0],n[1]);else if(dV(n))r.push(pV(n),hV(n));else return new TypeError(vV("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return r}var yV=mV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gV=ol,bV=ta,wV=We,EV=rv,xV=tv;function SV(e,r,t){var n,i,a,o;for(n=[],o=-1;i=e.next(),!i.done;)if(o+=1,a=r.call(t,i.value,o),gV(a)&&a.length>=2)n.push(a[0],a[1]);else if(bV(a))n.push(EV(a),xV(a));else return new TypeError(wV("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return n}var _V=SV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OV=ta,$V=rv,PV=tv;function AV(e,r){var t,n,i,a;for(t=r.length,a=0,i=0;i<t;i++){if(n=r[i],!OV(n))return null;e[a]=$V(n),e[a+1]=PV(n),a+=2}return e}var TV=AV,fu=u0.isPrimitive,Gm=ol,x0=ll,$E=s0,S0=Hd,kV=is,CV=p0.primitives,m2=Yd,Ke=Ga,Lt=ta,xf=h0,tt=Xa,IV=c2,jV=f2,NV=Xd,$n=m0,Z=ve,nv=Qi,$t=un,y2=u2,nn=rv,an=tv,MV=Ji,LV=y0,DV=g0,RV=Qd,FV=Jd,U=We,g2=yV,zV=_V,BV=TV,ct=$t.BYTES_PER_ELEMENT*2,b2=NV();function le(e){return e instanceof Y||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function w2(e){return e===Y||e.name==="Complex64Array"}function Ue(e,r){return r*=2,new y2(e[r],e[r+1])}function Y(){var e,r,t,n;if(r=arguments.length,!(this instanceof Y))return r===0?new Y:r===1?new Y(arguments[0]):r===2?new Y(arguments[0],arguments[1]):new Y(arguments[0],arguments[1],arguments[2]);if(r===0)t=new $t(0);else if(r===1)if(fu(arguments[0]))t=new $t(arguments[0]*2);else if(x0(arguments[0]))if(t=arguments[0],n=t.length,n&&kV(t)&&Lt(t[0])){if(t=BV(new $t(n*2),t),t===null){if(!xf(n))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new $t(arguments[0])}}else{if(IV(t))t=LV(t,0);else if(jV(t))t=DV(t,0);else if(!xf(n))throw new RangeError(U("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new $t(t)}else if($E(arguments[0])){if(t=arguments[0],!tt(t.byteLength/ct))throw new RangeError(U("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ct,t.byteLength));t=new $t(t)}else if(S0(arguments[0])){if(t=arguments[0],b2===!1)throw new TypeError(U("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ke(t[$n]))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[$n](),!Ke(t.next))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=g2(t),t instanceof Error)throw t;t=new $t(t)}else throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!$E(t))throw new TypeError(U("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(e=arguments[1],!fu(e))throw new TypeError(U("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!tt(e/ct))throw new RangeError(U("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ct,e));if(r===2){if(n=t.byteLength-e,!tt(n/ct))throw new RangeError(U("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ct,n));t=new $t(t,e)}else{if(n=arguments[2],!fu(n))throw new TypeError(U("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ct>t.byteLength-e)throw new RangeError(U("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ct));t=new $t(t,e,n*2)}}return Z(this,"_buffer",t),Z(this,"_length",t.length/2),this}Z(Y,"BYTES_PER_ELEMENT",ct);Z(Y,"name","Complex128Array");Z(Y,"from",function(r){var t,n,i,a,o,l,u,s,c,f,d,v;if(!Ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!w2(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=arguments.length,n>1){if(i=arguments[1],!Ke(i))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(t=arguments[2])}if(le(r)){if(s=r.length,i){for(a=new this(s),o=a._buffer,v=0,d=0;d<s;d++){if(f=i.call(t,r.get(d),d),Lt(f))o[v]=nn(f),o[v+1]=an(f);else if(Gm(f)&&f.length>=2)o[v]=f[0],o[v+1]=f[1];else throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));v+=2}return a}return new this(r)}if(x0(r)){if(i){for(s=r.length,r.get&&r.set?u=FV("default"):u=RV("default"),d=0;d<s;d++)if(!Lt(u(r,d))){c=!0;break}if(c){if(!xf(s))throw new RangeError(U("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",s));for(a=new this(s/2),o=a._buffer,d=0;d<s;d++)o[d]=i.call(t,u(r,d),d);return a}for(a=new this(s),o=a._buffer,v=0,d=0;d<s;d++){if(f=i.call(t,u(r,d),d),Lt(f))o[v]=nn(f),o[v+1]=an(f);else if(Gm(f)&&f.length>=2)o[v]=f[0],o[v+1]=f[1];else throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));v+=2}return a}return new this(r)}if(S0(r)&&b2&&Ke(r[$n])){if(o=r[$n](),!Ke(o.next))throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?l=zV(o,i,t):l=g2(o),l instanceof Error)throw l;for(s=l.length/2,a=new this(s),o=a._buffer,d=0;d<s;d++)o[d]=l[d];return a}throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});Z(Y,"of",function(){var r,t;if(!Ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!w2(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);return new this(r)});Z(Y.prototype,"at",function(r){if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!tt(r))throw new TypeError(U("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return Ue(this._buffer,r)});nv(Y.prototype,"buffer",function(){return this._buffer.buffer});nv(Y.prototype,"byteLength",function(){return this._buffer.byteLength});nv(Y.prototype,"byteOffset",function(){return this._buffer.byteOffset});Z(Y.prototype,"BYTES_PER_ELEMENT",Y.BYTES_PER_ELEMENT);Z(Y.prototype,"copyWithin",function(r,t){if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,t*2):this._buffer.copyWithin(r*2,t*2,arguments[2]*2),this});Z(Y.prototype,"entries",function(){var r,t,n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,r=this._buffer,i=this._length,o=-1,l=-2,n={},Z(n,"next",u),Z(n,"return",s),$n&&Z(n,$n,c),n;function u(){var f;return o+=1,a||o>=i?{done:!0}:(l+=2,f=new y2(r[l],r[l+1]),{value:[o,f],done:!1})}function s(f){return a=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return t.entries()}});Z(Y.prototype,"every",function(r,t){var n,i;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(!r.call(t,Ue(n,i),i,this))return!1;return!0});Z(Y.prototype,"fill",function(r,t,n){var i,a,o,l,u,s;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Lt(r))throw new TypeError(U("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,a=this._length,arguments.length>1){if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=a,t<0&&(t=0)),arguments.length>2){if(!tt(n))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",n));n<0&&(n+=a,n<0&&(n=0)),n>a&&(n=a)}else n=a}else t=0,n=a;for(l=nn(r),u=an(r),s=t;s<n;s++)o=2*s,i[o]=l,i[o+1]=u;return this});Z(Y.prototype,"filter",function(r,t){var n,i,a,o;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=[],a=0;a<this._length;a++)o=Ue(n,a),r.call(t,o,a,this)&&i.push(o);return new this.constructor(i)});Z(Y.prototype,"find",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(a=Ue(n,i),r.call(t,a,i,this))return a});Z(Y.prototype,"findIndex",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(a=Ue(n,i),r.call(t,a,i,this))return i;return-1});Z(Y.prototype,"findLast",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length-1;i>=0;i--)if(a=Ue(n,i),r.call(t,a,i,this))return a});Z(Y.prototype,"findLastIndex",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length-1;i>=0;i--)if(a=Ue(n,i),r.call(t,a,i,this))return i;return-1});Z(Y.prototype,"forEach",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)a=Ue(n,i),r.call(t,a,i,this)});Z(Y.prototype,"get",function(r){if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!fu(r))throw new TypeError(U("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return Ue(this._buffer,r)});nv(Y.prototype,"length",function(){return this._length});Z(Y.prototype,"includes",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Lt(r))throw new TypeError(U("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(a=nn(r),o=an(r),n=this._buffer,l=t;l<this._length;l++)if(i=2*l,a===n[i]&&o===n[i+1])return!0;return!1});Z(Y.prototype,"indexOf",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Lt(r))throw new TypeError(U("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(a=nn(r),o=an(r),n=this._buffer,l=t;l<this._length;l++)if(i=2*l,a===n[i]&&o===n[i+1])return l;return-1});Z(Y.prototype,"join",function(r){var t,n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(m2(r))i=r;else throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[],n=this._buffer,a=0;a<this._length;a++)t.push(Ue(n,a).toString());return t.join(i)});Z(Y.prototype,"keys",function(){var r,t,n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,n=this._length,a=-1,t={},Z(t,"next",o),Z(t,"return",l),$n&&Z(t,$n,u),t;function o(){return a+=1,i||a>=n?{done:!0}:{value:a,done:!1}}function l(s){return i=!0,arguments.length?{value:s,done:!0}:{done:!0}}function u(){return r.keys()}});Z(Y.prototype,"lastIndexOf",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Lt(r))throw new TypeError(U("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(a=nn(r),o=an(r),n=this._buffer,l=t;l>=0;l--)if(i=2*l,a===n[i]&&o===n[i+1])return l;return-1});Z(Y.prototype,"map",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,a=new this.constructor(this._length),n=a._buffer,o=0;o<this._length;o++)if(l=r.call(t,Ue(i,o),o,this),Lt(l))n[2*o]=nn(l),n[2*o+1]=an(l);else if(Gm(l)&&l.length===2)n[2*o]=l[0],n[2*o+1]=l[1];else throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));return a});Z(Y.prototype,"reduce",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,a=this._length,arguments.length>1)i=t,l=0;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=Ue(n,0),l=1}for(;l<a;l++)o=Ue(n,l),i=r(i,o,l,this);return i});Z(Y.prototype,"reduceRight",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,a=this._length,arguments.length>1)i=t,l=a-1;else{if(a===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=Ue(n,a-1),l=a-2}for(;l>=0;l--)o=Ue(n,l),i=r(i,o,l,this);return i});Z(Y.prototype,"reverse",function(){var r,t,n,i,a,o;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(n=this._length,r=this._buffer,i=MV(n/2),a=0;a<i;a++)o=n-a-1,t=r[2*a],r[2*a]=r[2*o],r[2*o]=t,t=r[2*a+1],r[2*a+1]=r[2*o+1],r[2*o+1]=t;return this});Z(Y.prototype,"set",function(r){var t,n,i,a,o,l,u,s,c;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!fu(n))throw new TypeError(U("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Lt(r)){if(n>=this._length)throw new RangeError(U("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));n*=2,i[n]=nn(r),i[n+1]=an(r);return}if(le(r)){if(l=r._length,n+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=r._buffer,c=i.byteOffset+n*ct,t.buffer===i.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new $t(t.length),s=0;s<t.length;s++)a[s]=t[s];t=a}for(n*=2,c=0,s=0;s<l;s++)i[n]=t[c],i[n+1]=t[c+1],n+=2,c+=2;return}if(x0(r)){for(l=r.length,s=0;s<l;s++)if(!Lt(r[s])){o=!0;break}if(o){if(!xf(l))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",l));if(n+l/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=r,c=i.byteOffset+n*ct,t.buffer===i.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new $t(l),s=0;s<l;s++)a[s]=t[s];t=a}for(n*=2,l/=2,c=0,s=0;s<l;s++)i[n]=t[c],i[n+1]=t[c+1],n+=2,c+=2;return}if(n+l>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,s=0;s<l;s++)u=r[s],i[n]=nn(u),i[n+1]=an(u),n+=2;return}throw new TypeError(U("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});Z(Y.prototype,"slice",function(r,t){var n,i,a,o,l,u,s;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(l=this._buffer,u=this._length,arguments.length===0)r=0,t=u;else{if(!tt(r))throw new TypeError(U("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=u,r<0&&(r=0)),arguments.length===1)t=u;else{if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=u,t<0&&(t=0)):t>u&&(t=u)}}for(r<t?n=t-r:n=0,a=new this.constructor(n),i=a._buffer,s=0;s<n;s++)o=2*(s+r),i[2*s]=l[o],i[2*s+1]=l[o+1];return a});Z(Y.prototype,"some",function(r,t){var n,i;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(r.call(t,Ue(n,i),i,this))return!0;return!1});Z(Y.prototype,"sort",function(r){var t,n,i,a,o;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length,t=[],a=0;a<i;a++)t.push(Ue(n,a));for(t.sort(r),a=0;a<i;a++)o=2*a,n[o]=nn(t[a]),n[o+1]=an(t[a]);return this});Z(Y.prototype,"subarray",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,a=this._length,arguments.length===0)r=0,t=a;else{if(!tt(r))throw new TypeError(U("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=a,r<0&&(r=0)),arguments.length===1)t=a;else{if(!tt(t))throw new TypeError(U("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=a,t<0&&(t=0)):t>a&&(t=a)}}return r>=a?(a=0,n=i.byteLength):r>=t?(a=0,n=i.byteOffset+r*ct):(a=t-r,n=i.byteOffset+r*ct),new this.constructor(i.buffer,n,a<0?0:a)});Z(Y.prototype,"toLocaleString",function(r,t){var n,i,a,o,l;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=[];else if(m2(r)||CV(r))i=r;else throw new TypeError(U("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",r));if(arguments.length<2)n={};else if(S0(t))n=t;else throw new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t));for(o=this._buffer,a=[],l=0;l<this._length;l++)a.push(Ue(o,l).toLocaleString(i,n));return a.join(",")});Z(Y.prototype,"toReversed",function(){var r,t,n,i,a,o;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(n=this._length,t=new this.constructor(n),i=this._buffer,r=t._buffer,a=0;a<n;a++)o=n-a-1,r[2*a]=i[2*o],r[2*a+1]=i[2*o+1];return t});Z(Y.prototype,"toSorted",function(r){var t,n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ke(r))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length,t=[],a=0;a<i;a++)t.push(Ue(n,a));return t.sort(r),new Y(t)});Z(Y.prototype,"toString",function(){var r,t,n;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],t=this._buffer,n=0;n<this._length;n++)r.push(Ue(t,n).toString());return r.join(",")});Z(Y.prototype,"values",function(){var r,t,n,i,a,o;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,a=this._buffer,n=this._length,o=-1,r={},Z(r,"next",l),Z(r,"return",u),$n&&Z(r,$n,s),r;function l(){return o+=1,i||o>=n?{done:!0}:{value:Ue(a,o),done:!1}}function u(c){return i=!0,arguments.length?{value:c,done:!0}:{done:!0}}function s(){return t.values()}});Z(Y.prototype,"with",function(r,t){var n,i,a;if(!le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!tt(r))throw new TypeError(U("invalid argument. First argument must be an integer. Value: `%s`.",r));if(a=this._length,r<0&&(r+=a),r<0||r>=a)throw new RangeError(U("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!Lt(t))throw new TypeError(U("invalid argument. Second argument must be a complex number. Value: `%s`.",t));return i=new this.constructor(this._buffer),n=i._buffer,n[2*r]=nn(t),n[2*r+1]=an(t),i});var UV=Y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WV=UV,_0=WV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VV=E0,HV=_0,KV=[HV,VV],GV=KV;const YV=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XV=Ka,qV=Kd,PE=GV,AE=YV;function ZV(e){var r,t;if(typeof e!="object"||e===null)return!1;for(t=0;t<PE.length;t++)if(e instanceof PE[t])return!0;for(;e;){for(r=XV(e),t=0;t<AE.length;t++)if(AE[t]===r)return!0;e=qV(e)}return!1}var QV=ZV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JV=QV,e7=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r7=as;function t7(e){var r,t;for(r=[];t=e.next(),!t.done;)r.push(r7(t.value));return r}var n7=t7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i7=as;function a7(e,r,t){var n,i,a;for(n=[],a=-1;i=e.next(),!i.done;)a+=1,n.push(i7(r.call(t,i.value,a)));return n}var o7=a7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l7=as;function u7(e,r){var t,n;for(t=r.length,n=0;n<t;n++)e[n]=l7(r[n]);return e}var s7=u7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du=u0.isPrimitive,O0=ll,TE=s0,$0=Hd,Ge=Ga,fs=nl.isPrimitive,on=cs.isPrimitive,E2=Yd.isPrimitive,c7=p0.primitives,f7=Xd,Pn=m0,Q=ve,iv=Qi,Dn=il,ge=as,d7=Qd,v7=Ji,p7=Jd,J=We,x2=n7,h7=o7,m7=s7,Ma=Dn.BYTES_PER_ELEMENT,S2=f7();function se(e){return typeof e=="object"&&e!==null&&e.constructor.name==="BooleanArray"&&e.BYTES_PER_ELEMENT===Ma}function _2(e){return e===X}function X(){var e,r,t,n,i;if(r=arguments.length,!(this instanceof X))return r===0?new X:r===1?new X(arguments[0]):r===2?new X(arguments[0],arguments[1]):new X(arguments[0],arguments[1],arguments[2]);if(r===0)t=new Dn(0);else if(r===1)if(i=arguments[0],du(i))t=new Dn(i);else if(O0(i))t=m7(new Dn(i.length),i);else if(TE(i))t=new Dn(i);else if($0(i)){if(S2===!1)throw new TypeError(J("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Ge(i[Pn]))throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(t=i[Pn](),!Ge(t.next))throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));t=new Dn(x2(t))}else throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));else{if(t=arguments[0],!TE(t))throw new TypeError(J("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(e=arguments[1],!du(e))throw new TypeError(J("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(r===2)t=new Dn(t,e);else{if(n=arguments[2],!du(n))throw new TypeError(J("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Ma>t.byteLength-e)throw new RangeError(J("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Ma));t=new Dn(t,e,n)}}return Q(this,"_buffer",t),Q(this,"_length",t.length),this}Q(X,"BYTES_PER_ELEMENT",Ma);Q(X,"name","BooleanArray");Q(X,"from",function(r){var t,n,i,a,o,l,u,s,c;if(!Ge(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_2(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(n=arguments.length,n>1){if(i=arguments[1],!Ge(i))throw new TypeError(J("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(t=arguments[2])}if(O0(r)){if(i){for(s=r.length,r.get&&r.set?u=p7("default"):u=d7("default"),a=new this(s),o=a._buffer,c=0;c<s;c++)o[c]=ge(i.call(t,u(r,c),c));return a}return new this(r)}if($0(r)&&S2&&Ge(r[Pn])){if(o=r[Pn](),!Ge(o.next))throw new TypeError(J("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));for(i?l=h7(o,i,t):l=x2(o),s=l.length,a=new this(s),o=a._buffer,c=0;c<s;c++)o[c]=l[c];return a}throw new TypeError(J("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});Q(X,"of",function(){var r,t;if(!Ge(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_2(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);return new this(r)});Q(X.prototype,"at",function(r){var t,n;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!on(r))throw new TypeError(J("invalid argument. Must provide an integer. Value: `%s`.",r));if(n=this._length,t=this._buffer,r<0&&(r+=n),!(r<0||r>=n))return ge(t[r])});iv(X.prototype,"buffer",function(){return this._buffer.buffer});iv(X.prototype,"byteLength",function(){return this._buffer.byteLength});iv(X.prototype,"byteOffset",function(){return this._buffer.byteOffset});Q(X.prototype,"BYTES_PER_ELEMENT",X.BYTES_PER_ELEMENT);Q(X.prototype,"copyWithin",function(r,t){if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return arguments.length===2?this._buffer.copyWithin(r,t):this._buffer.copyWithin(r,t,arguments[2]),this});Q(X.prototype,"entries",function(){var r,t,n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return r=this,i=this._buffer,n=this._length,o=-1,t={},Q(t,"next",l),Q(t,"return",u),Pn&&Q(t,Pn,s),t;function l(){return o+=1,a||o>=n?{done:!0}:{value:[o,ge(i[o])],done:!1}}function u(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function s(){return r.entries()}});Q(X.prototype,"every",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(!r.call(t,ge(n[i]),i,this))return!1;return!0});Q(X.prototype,"fill",function(r,t,n){var i,a,o,l;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!fs(r))throw new TypeError(J("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(i=this._buffer,a=this._length,arguments.length>1){if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(t<0&&(t+=a,t<0&&(t=0)),arguments.length>2){if(!on(n))throw new TypeError(J("invalid argument. Third argument must be an integer. Value: `%s`.",n));n<0&&(n+=a,n<0&&(n=0)),n>a&&(n=a)}else n=a}else t=0,n=a;for(r?o=1:o=0,l=t;l<n;l++)i[l]=o;return this});Q(X.prototype,"filter",function(r,t){var n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=[],a=0;a<this._length;a++)o=ge(n[a]),r.call(t,o,a,this)&&i.push(o);return new this.constructor(i)});Q(X.prototype,"find",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,a=0;a<this._length;a++)if(i=ge(n[a]),r.call(t,i,a,this))return i});Q(X.prototype,"findIndex",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,a=0;a<this._length;a++)if(i=ge(n[a]),r.call(t,i,a,this))return a;return-1});Q(X.prototype,"findLast",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,a=this._length-1;a>=0;a--)if(i=ge(n[a]),r.call(t,i,a,this))return i});Q(X.prototype,"findLastIndex",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,a=this._length-1;a>=0;a--)if(i=ge(n[a]),r.call(t,i,a,this))return a;return-1});Q(X.prototype,"forEach",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)r.call(t,ge(n[i]),i,this)});Q(X.prototype,"get",function(r){if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!du(r))throw new TypeError(J("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return ge(this._buffer[r])});Q(X.prototype,"includes",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!fs(r))throw new TypeError(J("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=this._buffer,i=t;i<this._length;i++)if(r===ge(n[i]))return!0;return!1});Q(X.prototype,"indexOf",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!fs(r))throw new TypeError(J("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(n=this._buffer,i=t;i<this._length;i++)if(r===ge(n[i]))return i;return-1});Q(X.prototype,"join",function(r){var t,n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length>0){if(!E2(r))throw new TypeError(J("invalid argument. First argument must be a string. Value: `%s`.",r))}else r=",";for(t=this._buffer,n=[],i=0;i<this._length;i++)t[i]?n.push("true"):n.push("false");return n.join(r)});Q(X.prototype,"keys",function(){var r,t,n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return r=this,n=this._length,a=-1,t={},Q(t,"next",o),Q(t,"return",l),Pn&&Q(t,Pn,u),t;function o(){return a+=1,i||a>=n?{done:!0}:{value:a,done:!1}}function l(s){return i=!0,arguments.length?{value:s,done:!0}:{done:!0}}function u(){return r.keys()}});Q(X.prototype,"lastIndexOf",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!fs(r))throw new TypeError(J("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(n=this._buffer,i=t;i>=0;i--)if(r===ge(n[i]))return i;return-1});iv(X.prototype,"length",function(){return this._length});Q(X.prototype,"map",function(r,t){var n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError("invalid argument. First argument must be a function. Value: `%s`.",r);for(a=this._buffer,i=new this.constructor(this._length),n=i._buffer,o=0;o<this._length;o++)n[o]=ge(r.call(t,ge(a[o]),o,this));return i});Q(X.prototype,"reduce",function(r,t){var n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,i=this._length,arguments.length>1)a=t,o=0;else{if(i===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=ge(n[0]),o=1}for(;o<i;o++)a=r(a,ge(n[o]),o,this);return a});Q(X.prototype,"reduceRight",function(r,t){var n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));if(n=this._buffer,i=this._length,arguments.length>1)a=t,o=i-1;else{if(i===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");a=ge(n[i-1]),o=i-2}for(;o>=0;o--)a=r(a,ge(n[o]),o,this);return a});Q(X.prototype,"reverse",function(){var r,t,n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=this._buffer,n=this._length,i=v7(n/2),a=0;a<i;a++)o=n-a-1,t=r[a],r[a]=r[o],r[o]=t;return this});Q(X.prototype,"set",function(r){var t,n,i,a,o,l,u;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(i=this._buffer,arguments.length>1){if(n=arguments[1],!du(n))throw new TypeError(J("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(O0(r)){if(o=r.length,n+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(se(r)?t=r._buffer:t=r,u=i.byteOffset+n*Ma,t.buffer===i.buffer&&t.byteOffset<u&&t.byteOffset+t.byteLength>u){for(a=new Dn(t.length),l=0;l<t.length;l++)a[l]=t[l];t=a}for(l=0;l<o;n++,l++)i[n]=t[l]?1:0;return}if(n>=this._length)throw new RangeError(J("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));i[n]=r?1:0});Q(X.prototype,"slice",function(r,t){var n,i,a,o,l,u;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(o=this._buffer,l=this._length,arguments.length===0)r=0,t=l;else{if(!on(r))throw new TypeError(J("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=l,r<0&&(r=0)),arguments.length===1)t=l;else{if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=l,t<0&&(t=0)):t>l&&(t=l)}}for(r<t?n=t-r:n=0,a=new this.constructor(n),i=a._buffer,u=0;u<n;u++)i[u]=o[u+r];return a});Q(X.prototype,"some",function(r,t){var n,i;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(r.call(t,ge(n[i]),i,this))return!0;return!1});Q(X.prototype,"sort",function(r){var t;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,arguments.length===0)return t.sort(),this;if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));return t.sort(n),this;function n(i,a){return r(ge(i),ge(a))}});Q(X.prototype,"subarray",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(i=this._buffer,a=this._length,arguments.length===0)r=0,t=a;else{if(!on(r))throw new TypeError(J("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=a,r<0&&(r=0)),arguments.length===1)t=a;else{if(!on(t))throw new TypeError(J("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=a,t<0&&(t=0)):t>a&&(t=a)}}return r>=a?(a=0,n=i.byteLength):r>=t?(a=0,n=i.byteOffset+r*Ma):(a=t-r,n=i.byteOffset+r*Ma),new this.constructor(i.buffer,n,a<0?0:a)});Q(X.prototype,"toLocaleString",function(r,t){var n,i,a,o,l;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length===0)i=[];else if(E2(r)||c7(r))i=r;else throw new TypeError(J("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",r));if(arguments.length<2)n={};else if($0(t))n=t;else throw new TypeError(J("invalid argument. Options argument must be an object. Value: `%s`.",t));for(o=this._buffer,a=[],l=0;l<this._length;l++)a.push(ge(o[l]).toLocaleString(i,n));return a.join(",")});Q(X.prototype,"toReversed",function(){var r,t,n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(n=this._length,t=new this.constructor(n),i=this._buffer,r=t._buffer,a=0;a<n;a++)r[a]=i[n-a-1];return t});Q(X.prototype,"toSorted",function(r){var t,n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(i=this._length,n=new this.constructor(i),a=this._buffer,t=n._buffer,o=0;o<i;o++)t[o]=a[o];if(arguments.length===0)return t.sort(),n;if(!Ge(r))throw new TypeError(J("invalid argument. First argument must be a function. Value: `%s`.",r));return t.sort(l),n;function l(u,s){return r(ge(u),ge(s))}});Q(X.prototype,"toString",function(){var r,t,n;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=this._buffer,n=0;n<this._length;n++)t[n]?r.push("true"):r.push("false");return r.join(",")});Q(X.prototype,"values",function(){var r,t,n,i,a,o;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return t=this,a=this._buffer,n=this._length,o=-1,r={},Q(r,"next",l),Q(r,"return",u),Pn&&Q(r,Pn,s),r;function l(){return o+=1,i||o>=n?{done:!0}:{value:ge(a[o]),done:!1}}function u(c){return i=!0,arguments.length?{value:c,done:!0}:{done:!0}}function s(){return t.values()}});Q(X.prototype,"with",function(r,t){var n,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!on(r))throw new TypeError(J("invalid argument. First argument must be an integer. Value: `%s`.",r));if(a=this._length,r<0&&(r+=a),r<0||r>=a)throw new RangeError(J("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!fs(t))throw new TypeError(J("invalid argument. Second argument must be a boolean. Value: `%s`.",t));return i=new this.constructor(this._buffer),n=i._buffer,t?n[r]=1:n[r]=0,i});var y7=X;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g7=y7,P0=g7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b7=P0,w7=Ka;function E7(e){return e instanceof b7||w7(e)==="BooleanArray"}var x7=E7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S7=x7,_7=S7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O7=il;function $7(e,r){return new O7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,e.length-r)}var P7=$7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A7=P7,T7=A7;/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k7=ai,tc=qg;function C7(){return typeof tc=="function"&&typeof tc("foo")=="symbol"&&k7(tc,"hasInstance")&&typeof tc.hasInstance=="symbol"}var I7=C7;/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j7=I7,O2=j7;/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N7=O2,M7=N7()?Symbol.hasInstance:null,L7=M7;/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D7=L7,R7=D7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F7=O2,z7=R7,B7=We,U7=F7();function W7(e,r){if(typeof r!="function"&&!(U7&&typeof r=="object"&&typeof r[z7]=="function"))throw new TypeError(B7("invalid argument. Second argument must be callable. Value: `%s`.",r));return e instanceof r}var V7=W7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H7=V7,K7=H7;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G7=Jg,Y7=il,X7=e0,q7=r0,Z7=Gd,Q7=us,J7=oi,eH=al,rH=un,tH=E0,nH=_0,iH=P0,aH=[[rH,"Float64Array"],[eH,"Float32Array"],[Q7,"Int32Array"],[J7,"Uint32Array"],[q7,"Int16Array"],[Z7,"Uint16Array"],[G7,"Int8Array"],[Y7,"Uint8Array"],[X7,"Uint8ClampedArray"],[tH,"Complex64Array"],[nH,"Complex128Array"],[iH,"BooleanArray"]],oH=aH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lH=K7,uH=Ka,sH=Kd,eo=oH;function cH(e){var r,t;for(t=0;t<eo.length;t++)if(lH(e,eo[t][0]))return eo[t][1];for(;e;){for(r=uH(e),t=0;t<eo.length;t++)if(r===eo[t][1])return eo[t][1];e=sH(e)}}var fH=cH;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dH=oB,vH=e7,pH=_7,hH=y0,mH=g0,yH=T7,gH=We,bH=fH;function wH(e){var r,t,n;if(dH(e))r=e;else if(vH(e))e.BYTES_PER_ELEMENT===8?r=hH(e,0):r=mH(e,0);else if(pH(e))r=yH(e,0);else throw new TypeError(gH("invalid argument. Must provide a typed array. Value: `%s`.",e));for(t={type:bH(e),data:[]},n=0;n<r.length;n++)t.data.push(r[n]);return t}var EH=wH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xH=EH,ds=xH;const SH="mt19937",_H=!0,OH={name:SH,copy:_H};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $H=cs.isPrimitive;function PH(e){return $H(e)&&e>0}var $2=PH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AH=cs.isObject;function TH(e){return AH(e)&&e.valueOf()>0}var P2=TH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kH=$2,CH=P2;function IH(e){return kH(e)||CH(e)}var jH=IH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A2=ve,A0=jH,NH=$2,MH=P2;A2(A0,"isPrimitive",NH);A2(A0,"isObject",MH);var T0=A0;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kE="function";function LH(e){return typeof e.get===kE&&typeof e.set===kE}var DH=LH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RH=DH,FH=RH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CE={float64:zH,float32:BH,int32:UH,int16:WH,int8:VH,uint32:HH,uint16:KH,uint8:GH,uint8c:YH,generic:XH,default:qH};function zH(e,r,t){e[r]=t}function BH(e,r,t){e[r]=t}function UH(e,r,t){e[r]=t}function WH(e,r,t){e[r]=t}function VH(e,r,t){e[r]=t}function HH(e,r,t){e[r]=t}function KH(e,r,t){e[r]=t}function GH(e,r,t){e[r]=t}function YH(e,r,t){e[r]=t}function XH(e,r,t){e[r]=t}function qH(e,r,t){e[r]=t}function ZH(e){var r=CE[e];return typeof r=="function"?r:CE.default}var QH=ZH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JH=QH,eK=JH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IE={complex128:rK,complex64:tK,default:nK};function rK(e,r,t){e.set(t,r)}function tK(e,r,t){e.set(t,r)}function nK(e,r,t){e.set(t,r)}function iK(e){var r=IE[e];return typeof r=="function"?r:IE.default}var aK=iK;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oK=aK,lK=oK;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uK={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"},sK=uK;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cK=un,fK=al,dK=oi,vK=us,pK=Gd,hK=r0,mK=il,yK=e0,gK=Jg,bK=E0,wK=_0,EK=P0,xK=[cK,fK,vK,dK,hK,pK,gK,mK,yK,bK,wK,EK],SK=xK;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _K=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128","bool"],OK=_K;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $K=BA,PK=is,AK=Ka,TK=sK,kK=SK,T2=OK,CK=T2.length;function IK(e){var r;if(PK(e))return"generic";if($K(e))return null;for(r=0;r<CK;r++)if(e instanceof kK[r])return T2[r];return TK[AK(e)]||null}var jK=IK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NK=jK,MK=NK;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LK=FH,DK=Qd,RK=eK,FK=Jd,zK=lK,BK=MK;function UK(e){var r=BK(e);return LK(e)?{data:e,dtype:r,accessorProtocol:!0,accessors:[FK(r),zK(r)]}:{data:e,dtype:r,accessorProtocol:!1,accessors:[DK(r),RK(r)]}}var WK=UK;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VK=WK,k2=VK;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HK(e,r,t,n,i,a,o){var l,u,s,c,f,d,v;for(l=r.data,u=i.data,c=r.accessors[0],s=i.accessors[1],f=n,d=o,v=0;v<e;v++)s(u,d,c(l,f)),f+=t,d+=a;return i}var C2=HK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jE=k2,KK=C2,Kp=8;function GK(e,r,t,n,i){var a,o,l,u,s,c;if(e<=0)return n;if(l=jE(r),u=jE(n),l.accessorProtocol||u.accessorProtocol)return t<0?a=(1-e)*t:a=0,i<0?o=(1-e)*i:o=0,KK(e,l,t,a,u,i,o),u.data;if(t===1&&i===1){if(s=e%Kp,s>0)for(c=0;c<s;c++)n[c]=r[c];if(e<Kp)return n;for(c=s;c<e;c+=Kp)n[c]=r[c],n[c+1]=r[c+1],n[c+2]=r[c+2],n[c+3]=r[c+3],n[c+4]=r[c+4],n[c+5]=r[c+5],n[c+6]=r[c+6],n[c+7]=r[c+7];return n}for(t<0?a=(1-e)*t:a=0,i<0?o=(1-e)*i:o=0,c=0;c<e;c++)n[o]=r[a],a+=t,o+=i;return n}var YK=GK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NE=k2,XK=C2,Cl=8;function qK(e,r,t,n,i,a,o){var l,u,s,c,f,d;if(e<=0)return i;if(s=NE(r),c=NE(i),s.accessorProtocol||c.accessorProtocol)return XK(e,s,t,n,c,a,o),c.data;if(l=n,u=o,t===1&&a===1){if(f=e%Cl,f>0)for(d=0;d<f;d++)i[u]=r[l],l+=t,u+=a;if(e<Cl)return i;for(d=f;d<e;d+=Cl)i[u]=r[l],i[u+1]=r[l+1],i[u+2]=r[l+2],i[u+3]=r[l+3],i[u+4]=r[l+4],i[u+5]=r[l+5],i[u+6]=r[l+6],i[u+7]=r[l+7],l+=Cl,u+=Cl;return i}for(d=0;d<e;d++)i[u]=r[l],l+=t,u+=a;return i}var ZK=qK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QK=ve,I2=YK,JK=ZK;QK(I2,"ndarray",JK);var k0=I2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eG=ls,rG=Ji,tG=eG-1;function nG(){var e=rG(1+tG*Math.random());return e|0}var j2=nG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn=ve,mi=Qi,ME=ns,Gp=ai,iG=os,aG=nl.isPrimitive,oG=ll,lG=T0.isPrimitive,LE=t0,Yt=We,Sf=ls,Fr=us,ro=k0,uG=ds,DE=j2,Yp=Sf-1|0,sG=Sf-1|0,cG=16807,_f=1,Of=2,_i=2,Ur=4,vu=5;function RE(e,r){var t;return r?t="option":t="argument",e.length<vu+1?new RangeError(Yt("invalid %s. State array has insufficient length.",t)):e[0]!==_f?new RangeError(Yt("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,_f,e[0])):e[1]!==Of?new RangeError(Yt("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Of,e[1])):e[_i]!==1?new RangeError(Yt("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,e[_i])):e[Ur]!==e.length-vu?new RangeError(Yt("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,e.length-vu,e[Ur])):null}function fG(e){var r,t,n,i,a,o;if(n={},arguments.length){if(!iG(e))throw new TypeError(Yt("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Gp(e,"copy")&&(n.copy=e.copy,!aG(e.copy)))throw new TypeError(Yt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(Gp(e,"state")){if(t=e.state,n.state=!0,!LE(t))throw new TypeError(Yt("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(o=RE(t,!0),o)throw o;n.copy===!1?r=t:(r=new Fr(t.length),ro(t.length,t,1,r,1)),t=new Fr(r.buffer,r.byteOffset+(_i+1)*r.BYTES_PER_ELEMENT,1),i=new Fr(r.buffer,r.byteOffset+(Ur+1)*r.BYTES_PER_ELEMENT,t[Ur])}if(i===void 0)if(Gp(e,"seed"))if(i=e.seed,n.seed=!0,lG(i)){if(i>sG)throw new RangeError(Yt("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",i));i|=0}else if(oG(i)&&i.length>0)a=i.length,r=new Fr(vu+a),r[0]=_f,r[1]=Of,r[_i]=1,r[Ur]=a,ro.ndarray(a,i,1,0,r,1,Ur+1),t=new Fr(r.buffer,r.byteOffset+(_i+1)*r.BYTES_PER_ELEMENT,1),i=new Fr(r.buffer,r.byteOffset+(Ur+1)*r.BYTES_PER_ELEMENT,a),t[0]=i[0];else throw new TypeError(Yt("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",i));else i=DE()|0}else i=DE()|0;return t===void 0&&(r=new Fr(vu+1),r[0]=_f,r[1]=Of,r[_i]=1,r[Ur]=1,r[Ur+1]=i,t=new Fr(r.buffer,r.byteOffset+(_i+1)*r.BYTES_PER_ELEMENT,1),i=new Fr(r.buffer,r.byteOffset+(Ur+1)*r.BYTES_PER_ELEMENT,1),t[0]=i[0]),Cn(p,"NAME","minstd"),mi(p,"seed",l),mi(p,"seedLength",u),ME(p,"state",f,d),mi(p,"stateLength",s),mi(p,"byteLength",c),Cn(p,"toJSON",v),Cn(p,"MIN",1),Cn(p,"MAX",Sf-1),Cn(p,"normalized",y),Cn(y,"NAME",p.NAME),mi(y,"seed",l),mi(y,"seedLength",u),ME(y,"state",f,d),mi(y,"stateLength",s),mi(y,"byteLength",c),Cn(y,"toJSON",v),Cn(y,"MIN",(p.MIN-1)/Yp),Cn(y,"MAX",(p.MAX-1)/Yp),p;function l(){var m=r[Ur];return ro(m,i,1,new Fr(m),1)}function u(){return r[Ur]}function s(){return r.length}function c(){return r.byteLength}function f(){var m=r.length;return ro(m,r,1,new Fr(m),1)}function d(m){var h;if(!LE(m))throw new TypeError(Yt("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(h=RE(m,!1),h)throw h;n.copy===!1?n.state&&m.length===r.length?ro(m.length,m,1,r,1):(r=m,n.state=!0):(m.length!==r.length&&(r=new Fr(m.length)),ro(m.length,m,1,r,1)),t=new Fr(r.buffer,r.byteOffset+(_i+1)*r.BYTES_PER_ELEMENT,1),i=new Fr(r.buffer,r.byteOffset+(Ur+1)*r.BYTES_PER_ELEMENT,r[Ur])}function v(){var m={};return m.type="PRNG",m.name=p.NAME,m.state=uG(r),m.params=[],m}function p(){var m=t[0]|0;return m=cG*m%Sf|0,t[0]=m,m|0}function y(){return(p()-1)/Yp}}var N2=fG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dG=N2,vG=j2,pG=dG({seed:vG()}),hG=pG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mG=ve,M2=hG,yG=N2;mG(M2,"factory",yG);var gG=M2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bG(e){return e!==e}var wG=bG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EG=wG,na=EG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xG=na,SG=8;function _G(e,r,t){var n,i;for(i=0;i<SG;i++)if(n=e(),xG(n))throw new Error("unexpected error. PRNG returned NaN.");for(i=t-1;i>=0;i--)r[i]=e();return r}var OG=_G;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $G=ls,PG=Ji,AG=$G-1;function TG(){var e=PG(1+AG*Math.random());return e|0}var L2=TG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In=ve,yi=Qi,FE=ns,Xp=ai,kG=os,CG=nl.isPrimitive,IG=ll,jG=T0.isPrimitive,zE=t0,to=k0,NG=Ji,zr=us,pu=ls,MG=ds,Tt=We,BE=OG,UE=L2,qp=pu-1|0,LG=pu-1|0,DG=16807,Hr=32,$f=1,Pf=3,Oi=2,Wo=Hr+3,Wr=Hr+6,hu=Hr+7,nc=Wo+1,ic=Wo+2;function WE(e,r){var t;return r?t="option":t="argument",e.length<hu+1?new RangeError(Tt("invalid %s. State array has insufficient length.",t)):e[0]!==$f?new RangeError(Tt("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,$f,e[0])):e[1]!==Pf?new RangeError(Tt("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Pf,e[1])):e[Oi]!==Hr?new RangeError(Tt("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Hr,e[Oi])):e[Wo]!==2?new RangeError(Tt("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,e[Wo])):e[Wr]!==e.length-hu?new RangeError(Tt("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,e.length-hu,e[Wr])):null}function RG(e){var r,t,n,i,a,o;if(n={},arguments.length){if(!kG(e))throw new TypeError(Tt("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xp(e,"copy")&&(n.copy=e.copy,!CG(e.copy)))throw new TypeError(Tt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(Xp(e,"state")){if(t=e.state,n.state=!0,!zE(t))throw new TypeError(Tt("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(o=WE(t,!0),o)throw o;n.copy===!1?r=t:(r=new zr(t.length),to(t.length,t,1,r,1)),t=new zr(r.buffer,r.byteOffset+(Oi+1)*r.BYTES_PER_ELEMENT,Hr),i=new zr(r.buffer,r.byteOffset+(Wr+1)*r.BYTES_PER_ELEMENT,t[Wr])}if(i===void 0)if(Xp(e,"seed"))if(i=e.seed,n.seed=!0,jG(i)){if(i>LG)throw new RangeError(Tt("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",i));i|=0}else if(IG(i)&&i.length>0)a=i.length,r=new zr(hu+a),r[0]=$f,r[1]=Pf,r[Oi]=Hr,r[Wo]=2,r[ic]=i[0],r[Wr]=a,to.ndarray(a,i,1,0,r,1,Wr+1),t=new zr(r.buffer,r.byteOffset+(Oi+1)*r.BYTES_PER_ELEMENT,Hr),i=new zr(r.buffer,r.byteOffset+(Wr+1)*r.BYTES_PER_ELEMENT,a),t=BE(p,t,Hr),r[nc]=t[0];else throw new TypeError(Tt("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",i));else i=UE()|0}else i=UE()|0;return t===void 0&&(r=new zr(hu+1),r[0]=$f,r[1]=Pf,r[Oi]=Hr,r[Wo]=2,r[ic]=i,r[Wr]=1,r[Wr+1]=i,t=new zr(r.buffer,r.byteOffset+(Oi+1)*r.BYTES_PER_ELEMENT,Hr),i=new zr(r.buffer,r.byteOffset+(Wr+1)*r.BYTES_PER_ELEMENT,1),t=BE(p,t,Hr),r[nc]=t[0]),In(y,"NAME","minstd-shuffle"),yi(y,"seed",l),yi(y,"seedLength",u),FE(y,"state",f,d),yi(y,"stateLength",s),yi(y,"byteLength",c),In(y,"toJSON",v),In(y,"MIN",1),In(y,"MAX",pu-1),In(y,"normalized",m),In(m,"NAME",y.NAME),yi(m,"seed",l),yi(m,"seedLength",u),FE(m,"state",f,d),yi(m,"stateLength",s),yi(m,"byteLength",c),In(m,"toJSON",v),In(m,"MIN",(y.MIN-1)/qp),In(m,"MAX",(y.MAX-1)/qp),y;function l(){var h=r[Wr];return to(h,i,1,new zr(h),1)}function u(){return r[Wr]}function s(){return r.length}function c(){return r.byteLength}function f(){var h=r.length;return to(h,r,1,new zr(h),1)}function d(h){var b;if(!zE(h))throw new TypeError(Tt("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(b=WE(h,!1),b)throw b;n.copy===!1?n.state&&h.length===r.length?to(h.length,h,1,r,1):(r=h,n.state=!0):(h.length!==r.length&&(r=new zr(h.length)),to(h.length,h,1,r,1)),t=new zr(r.buffer,r.byteOffset+(Oi+1)*r.BYTES_PER_ELEMENT,Hr),i=new zr(r.buffer,r.byteOffset+(Wr+1)*r.BYTES_PER_ELEMENT,r[Wr])}function v(){var h={};return h.type="PRNG",h.name=y.NAME,h.state=MG(r),h.params=[],h}function p(){var h=r[ic]|0;return h=DG*h%pu|0,r[ic]=h,h|0}function y(){var h,b;return h=r[nc],b=NG(Hr*(h/pu)),h=t[b],r[nc]=h,t[b]=p(),h}function m(){return(y()-1)/qp}}var D2=RG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FG=D2,zG=L2,BG=FG({seed:zG()}),UG=BG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WG=ve,R2=UG,VG=D2;WG(R2,"factory",VG);var HG=R2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KG=9007199254740991,GG=KG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YG=li;function XG(e){return e===0&&1/e===YG}var qG=XG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZG=qG,QG=ZG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JG=QG,VE=na,Zp=li;function eY(e,r){return VE(e)||VE(r)?NaN:e===Zp||r===Zp?Zp:e===r&&e===0?JG(e)?e:r:e>r?e:r}var rY=eY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tY=rY,nY=tY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HE=65535;function iY(e,r){var t,n,i,a,o,l;return e>>>=0,r>>>=0,i=e>>>16>>>0,a=r>>>16>>>0,o=(e&HE)>>>0,l=(r&HE)>>>0,t=o*l>>>0,n=i*l+o*a<<16>>>0,t+n>>>0}var aY=iY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oY=aY,lY=oY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uY=n0,sY=Ji,cY=uY-1;function fY(){var e=sY(1+cY*Math.random());return e>>>0}var F2=fY,jn=ve,gi=Qi,KE=ns,Qp=ai,dY=os,vY=ll,GE=VA,pY=nl.isPrimitive,YE=T0.isPrimitive,z2=GG,B2=n0,Br=oi,hY=nY,Ym=lY,no=k0,mY=ds,Kr=We,XE=F2,Ze=624,Jp=397,qE=B2>>>0,yY=19650218,eh=2147483648,rh=2147483647,gY=1812433253,bY=1664525,wY=1566083941,EY=2636928640,xY=4022730752,SY=2567483615,th=[0,SY>>>0],U2=1/(z2+1),_Y=67108864,OY=2147483648,nh=1,$Y=z2*U2,Af=1,Tf=3,$i=2,Pi=Ze+3,Vr=Ze+5,mu=Ze+6;function ZE(e,r){var t;return r?t="option":t="argument",e.length<mu+1?new RangeError(Kr("invalid %s. `state` array has insufficient length.",t)):e[0]!==Af?new RangeError(Kr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,Af,e[0])):e[1]!==Tf?new RangeError(Kr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Tf,e[1])):e[$i]!==Ze?new RangeError(Kr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,Ze,e[$i])):e[Pi]!==1?new RangeError(Kr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,e[Pi])):e[Vr]!==e.length-mu?new RangeError(Kr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,e.length-mu,e[Vr])):null}function QE(e,r,t){var n;for(e[0]=t>>>0,n=1;n<r;n++)t=e[n-1]>>>0,t=(t^t>>>30)>>>0,e[n]=Ym(t,gY)+n>>>0;return e}function PY(e,r,t,n){var i,a,o,l;for(a=1,o=0,l=hY(r,n);l>0;l--)i=e[a-1]>>>0,i=(i^i>>>30)>>>0,i=Ym(i,bY)>>>0,e[a]=(e[a]>>>0^i)+t[o]+o>>>0,a+=1,o+=1,a>=r&&(e[0]=e[r-1],a=1),o>=n&&(o=0);for(l=r-1;l>0;l--)i=e[a-1]>>>0,i=(i^i>>>30)>>>0,i=Ym(i,wY)>>>0,e[a]=(e[a]>>>0^i)-a>>>0,a+=1,a>=r&&(e[0]=e[r-1],a=1);return e[0]=OY,e}function AY(e){var r,t,n,i;for(i=Ze-Jp,t=0;t<i;t++)r=e[t]&eh|e[t+1]&rh,e[t]=e[t+Jp]^r>>>1^th[r&nh];for(n=Ze-1;t<n;t++)r=e[t]&eh|e[t+1]&rh,e[t]=e[t-i]^r>>>1^th[r&nh];return r=e[n]&eh|e[0]&rh,e[n]=e[Jp-1]^r>>>1^th[r&nh],e}function TY(e){var r,t,n,i,a,o;if(n={},arguments.length){if(!dY(e))throw new TypeError(Kr("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Qp(e,"copy")&&(n.copy=e.copy,!pY(e.copy)))throw new TypeError(Kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(Qp(e,"state")){if(t=e.state,n.state=!0,!GE(t))throw new TypeError(Kr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(o=ZE(t,!0),o)throw o;n.copy===!1?r=t:(r=new Br(t.length),no(t.length,t,1,r,1)),t=new Br(r.buffer,r.byteOffset+($i+1)*r.BYTES_PER_ELEMENT,Ze),i=new Br(r.buffer,r.byteOffset+(Vr+1)*r.BYTES_PER_ELEMENT,t[Vr])}if(i===void 0)if(Qp(e,"seed"))if(i=e.seed,n.seed=!0,YE(i)){if(i>qE)throw new RangeError(Kr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else{if(vY(i)===!1||i.length<1)throw new TypeError(Kr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i.length===1){if(i=i[0],!YE(i))throw new TypeError(Kr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i>qE)throw new RangeError(Kr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else a=i.length,r=new Br(mu+a),r[0]=Af,r[1]=Tf,r[$i]=Ze,r[Pi]=1,r[Pi+1]=Ze,r[Vr]=a,no.ndarray(a,i,1,0,r,1,Vr+1),t=new Br(r.buffer,r.byteOffset+($i+1)*r.BYTES_PER_ELEMENT,Ze),i=new Br(r.buffer,r.byteOffset+(Vr+1)*r.BYTES_PER_ELEMENT,a),t=QE(t,Ze,yY),t=PY(t,Ze,i,a)}else i=XE()>>>0}else i=XE()>>>0;return t===void 0&&(r=new Br(mu+1),r[0]=Af,r[1]=Tf,r[$i]=Ze,r[Pi]=1,r[Pi+1]=Ze,r[Vr]=1,r[Vr+1]=i,t=new Br(r.buffer,r.byteOffset+($i+1)*r.BYTES_PER_ELEMENT,Ze),i=new Br(r.buffer,r.byteOffset+(Vr+1)*r.BYTES_PER_ELEMENT,1),t=QE(t,Ze,i)),jn(p,"NAME","mt19937"),gi(p,"seed",l),gi(p,"seedLength",u),KE(p,"state",f,d),gi(p,"stateLength",s),gi(p,"byteLength",c),jn(p,"toJSON",v),jn(p,"MIN",0),jn(p,"MAX",B2),jn(p,"normalized",y),jn(y,"NAME",p.NAME),gi(y,"seed",l),gi(y,"seedLength",u),KE(y,"state",f,d),gi(y,"stateLength",s),gi(y,"byteLength",c),jn(y,"toJSON",v),jn(y,"MIN",0),jn(y,"MAX",$Y),p;function l(){var m=r[Vr];return no(m,i,1,new Br(m),1)}function u(){return r[Vr]}function s(){return r.length}function c(){return r.byteLength}function f(){var m=r.length;return no(m,r,1,new Br(m),1)}function d(m){var h;if(!GE(m))throw new TypeError(Kr("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(h=ZE(m,!1),h)throw h;n.copy===!1?n.state&&m.length===r.length?no(m.length,m,1,r,1):(r=m,n.state=!0):(m.length!==r.length&&(r=new Br(m.length)),no(m.length,m,1,r,1)),t=new Br(r.buffer,r.byteOffset+($i+1)*r.BYTES_PER_ELEMENT,Ze),i=new Br(r.buffer,r.byteOffset+(Vr+1)*r.BYTES_PER_ELEMENT,r[Vr])}function v(){var m={};return m.type="PRNG",m.name=p.NAME,m.state=mY(r),m.params=[],m}function p(){var m,h;return h=r[Pi+1],h>=Ze&&(t=AY(t),h=0),m=t[h],r[Pi+1]=h+1,m^=m>>>11,m^=m<<7&EY,m^=m<<15&xY,m^=m>>>18,m>>>0}function y(){var m=p()>>>5,h=p()>>>6;return(m*_Y+h)*U2}}var W2=TY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kY=W2,CY=F2,IY=kY({seed:CY()}),jY=IY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NY=ve,V2=jY,MY=W2;NY(V2,"factory",MY);var H2=V2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LY=gG,DY=HG,RY=H2,av={};av.minstd=LY;av["minstd-shuffle"]=DY;av.mt19937=RY;var FY=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il=ve,ac=Qi,zY=ns,BY=os,UY=nl.isPrimitive,oc=ai,WY=ds,jl=We,JE=OH,VY=FY;function HY(e){var r,t,n;if(r={name:JE.name,copy:JE.copy},arguments.length){if(!BY(e))throw new TypeError(jl("invalid argument. Must provide an object. Value: `%s`.",e));if(oc(e,"name")&&(r.name=e.name),oc(e,"state")){if(r.state=e.state,r.state===void 0)throw new TypeError(jl("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",r.state))}else if(oc(e,"seed")&&(r.seed=e.seed,r.seed===void 0))throw new TypeError(jl("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",r.seed));if(oc(e,"copy")&&(r.copy=e.copy,!UY(r.copy)))throw new TypeError(jl("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy))}if(n=VY[r.name],n===void 0)throw new Error(jl("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",r.name));return r.state===void 0?r.seed===void 0?t=n.factory():t=n.factory({seed:r.seed}):t=n.factory({state:r.state,copy:r.copy}),Il(f,"NAME","randu"),ac(f,"seed",i),ac(f,"seedLength",a),zY(f,"state",u,s),ac(f,"stateLength",o),ac(f,"byteLength",l),Il(f,"toJSON",c),Il(f,"PRNG",t),Il(f,"MIN",t.normalized.MIN),Il(f,"MAX",t.normalized.MAX),f;function i(){return t.seed}function a(){return t.seedLength}function o(){return t.stateLength}function l(){return t.byteLength}function u(){return t.state}function s(d){t.state=d}function c(){var d={};return d.type="PRNG",d.name=f.NAME+"-"+t.NAME,d.state=WY(t.state),d.params=[],d}function f(){return t.normalized()}}var K2=HY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KY=K2,GY=KY(),YY=GY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XY=ve,G2=YY,qY=K2;XY(G2,"factory",qY);var ZY=G2;const Xm=it(ZY);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ex=h0;function QY(e){return e>0?ex(e-1):ex(e+1)}var JY=QY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eX=JY,Y2=eX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rX=li,tX=ss;function nX(e){return e===rX||e===tX}var iX=nX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aX=iX,C0=aX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oX=Math.sqrt,lX=oX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uX=lX,X2=uX;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sX(e){return Math.abs(e)}var cX=sX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fX=cX,ov=fX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dX=il,vX=Gd,pX={uint16:vX,uint8:dX},hX=pX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rx=hX,q2;function mX(){var e,r;return e=new rx.uint16(1),e[0]=4660,r=new rx.uint8(e.buffer),r[0]===52}q2=mX();var yX=q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gX=yX,vs=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bX=vs,Z2,qm,Zm;bX===!0?(qm=1,Zm=0):(qm=0,Zm=1);Z2={HIGH:qm,LOW:Zm};var wX=Z2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EX=oi,xX=un,Q2=wX,J2=new xX(1),tx=new EX(J2.buffer),SX=Q2.HIGH,_X=Q2.LOW;function OX(e,r,t,n){return J2[0]=e,r[n]=tx[SX],r[n+t]=tx[_X],r}var eT=OX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $X=eT;function PX(e){return $X(e,[0,0],1,0)}var AX=PX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TX=ve,rT=AX,kX=eT;TX(rT,"assign",kX);var I0=rT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CX=vs,Qm;CX===!0?Qm=0:Qm=1;var IX=Qm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jX=oi,NX=un,MX=IX,Jm=new NX(1),LX=new jX(Jm.buffer);function DX(e,r){return Jm[0]=e,LX[MX]=r>>>0,Jm[0]}var RX=DX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FX=RX,lv=FX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zX(e){return e|0}var BX=zX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UX=BX,tT=UX;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WX=2147483647,uv=WX;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VX=2147483648,HX=VX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KX=vs,ey;KX===!0?ey=1:ey=0;var GX=ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YX=oi,XX=un,qX=GX,nT=new XX(1),ZX=new YX(nT.buffer);function QX(e){return nT[0]=e,ZX[qX]}var JX=QX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eq=JX,ps=eq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rq=vs,iT,ry,ty;rq===!0?(ry=1,ty=0):(ry=0,ty=1);iT={HIGH:ry,LOW:ty};var tq=iT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nq=oi,iq=un,aT=tq,oT=new iq(1),nx=new nq(oT.buffer),aq=aT.HIGH,oq=aT.LOW;function lq(e,r){return nx[aq]=e,nx[oq]=r,oT[0]}var uq=lq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sq=uq,lT=sq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cq=HX,fq=uv,dq=I0,vq=ps,pq=lT,ih=[0,0];function hq(e,r){var t,n;return dq.assign(e,ih,1,0),t=ih[0],t&=fq,n=vq(r),n&=cq,t|=n,pq(t,ih[1])}var mq=hq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yq=mq,uT=yq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ix=Y2,gq=uT,bq=ss,lc=li;function wq(e,r){return r===bq?lc:r===lc?0:r>0?ix(r)?e:0:ix(r)?gq(lc,e):lc}var Eq=wq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var xq=uv,Sq=ps,_q=1072693247,uc=1e300,sc=1e-300;function Oq(e,r){var t,n;return n=Sq(e),t=n&xq,t<=_q?r<0?uc*uc:sc*sc:r>0?uc*uc:sc*sc}var $q=Oq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pq=ov,ax=li;function Aq(e,r){return e===-1?(e-e)/(e-e):e===1?1:Pq(e)<1==(r===ax)?0:ax}var Tq=Aq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kq=vs,ny;kq===!0?ny=1:ny=0;var Cq=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iq=oi,jq=un,Nq=Cq,iy=new jq(1),Mq=new Iq(iy.buffer);function Lq(e,r){return iy[0]=e,Mq[Nq]=r>>>0,iy[0]}var Dq=Lq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rq=Dq,sT=Rq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fq=1023,sv=Fq;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zq=20,cT=zq;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bq(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var Uq=Bq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Wq=ps,cc=lv,ox=sT,Vq=sv,Hq=cT,Kq=Uq,Gq=1048575,lx=1048576,Yq=1072693248,Xq=536870912,qq=524288,Zq=9007199254740992,Qq=.9617966939259756,Jq=.9617967009544373,eZ=-7028461650952758e-24,rZ=[1,1.5],tZ=[0,.5849624872207642],nZ=[0,1350039202129749e-23];function iZ(e,r,t){var n,i,a,o,l,u,s,c,f,d,v,p,y,m,h,b,w,E,x,S,_,O;return S=0,t<lx&&(r*=Zq,S-=53,t=Wq(r)),S+=(t>>Hq)-Vq|0,_=t&Gq|0,t=_|Yq|0,_<=235662?O=0:_<767610?O=1:(O=0,S+=1,t-=lx),r=ox(r,t),c=rZ[O],E=r-c,x=1/(r+c),i=E*x,o=cc(i,0),n=(t>>1|Xq)+qq,n+=O<<18,u=ox(0,n),s=r-(u-c),l=x*(E-o*u-o*s),a=i*i,w=a*a*Kq(a),w+=l*(o+i),a=o*o,u=3+a+w,u=cc(u,0),s=w-(u-3-a),E=o*u,x=l*u+s*i,d=E+x,d=cc(d,0),v=x-(d-E),p=Jq*d,y=eZ*d+v*Qq+nZ[O],f=tZ[O],b=S,m=p+y+f+b,m=cc(m,0),h=y-(m-b-f-p),e[0]=m,e[1]=h,e}var aZ=iZ;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oZ(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var lZ=oZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var uZ=lv,sZ=lZ,cZ=1.4426950408889634,fZ=1.4426950216293335,dZ=19259629911266175e-24;function vZ(e,r){var t,n,i,a,o,l;return i=r-1,a=i*i*sZ(i),o=fZ*i,l=i*dZ-a*cZ,n=o+l,n=uZ(n,0),t=l-(n-o),e[0]=n,e[1]=t,e}var pZ=vZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hZ=1023,mZ=hZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yZ=-1023,gZ=yZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bZ=-1074,wZ=bZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EZ=22250738585072014e-324,xZ=EZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SZ=xZ,_Z=C0,OZ=na,$Z=ov,PZ=4503599627370496;function AZ(e,r,t,n){return OZ(e)||_Z(e)?(r[n]=e,r[n+t]=0,r):e!==0&&$Z(e)<SZ?(r[n]=e*PZ,r[n+t]=-52,r):(r[n]=e,r[n+t]=0,r)}var fT=AZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TZ=fT;function kZ(e){return TZ(e,[0,0],1,0)}var CZ=kZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IZ=ve,dT=CZ,jZ=fT;IZ(dT,"assign",jZ);var NZ=dT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MZ=2146435072,LZ=MZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DZ=ps,RZ=LZ,FZ=sv;function zZ(e){var r=DZ(e);return r=(r&RZ)>>>20,r-FZ|0}var BZ=zZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UZ=BZ,WZ=UZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VZ=li,HZ=ss,KZ=sv,GZ=mZ,YZ=gZ,XZ=wZ,qZ=na,ZZ=C0,QZ=uT,JZ=NZ.assign,eQ=WZ,rQ=I0,tQ=lT,nQ=2220446049250313e-31,iQ=2148532223,ah=[0,0],oh=[0,0];function aQ(e,r){var t,n;return r===0||e===0||qZ(e)||ZZ(e)?e:(JZ(e,ah,1,0),e=ah[0],r+=ah[1],r+=eQ(e),r<XZ?QZ(0,e):r>GZ?e<0?HZ:VZ:(r<=YZ?(r+=52,n=nQ):n=1,rQ.assign(e,oh,1,0),t=oh[0],t&=iQ,t|=r+KZ<<20,n*tQ(t,oh[1])))}var oQ=aQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lQ=oQ,uQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sQ=.6931471805599453,cQ=sQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fQ=1048575,dQ=fQ;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vQ(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var pQ=vQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var hQ=ps,ux=sT,mQ=lv,yQ=tT,gQ=uQ,bQ=cQ,sx=sv,cx=uv,fx=dQ,Nl=cT,wQ=pQ,dx=1048576,EQ=1071644672,xQ=.6931471824645996,SQ=-1904654299957768e-24;function _Q(e,r,t){var n,i,a,o,l,u,s,c,f,d,v;return d=e&cx|0,v=(d>>Nl)-sx|0,f=0,d>EQ&&(f=e+(dx>>v+1)>>>0,v=((f&cx)>>Nl)-sx|0,n=(f&~(fx>>v))>>>0,a=ux(0,n),f=(f&fx|dx)>>Nl-v>>>0,e<0&&(f=-f),r-=a),a=t+r,a=mQ(a,0),l=a*xQ,u=(t-(a-r))*bQ+a*SQ,c=l+u,s=u-(c-l),a=c*c,i=c-a*wQ(a),o=c*i/(i-2)-(s+c*s),c=1-(o-c),e=hQ(c),e=yQ(e),e+=f<<Nl>>>0,e>>Nl<=0?c=gQ(c,f):c=ux(c,e),c}var OQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var vx=na,px=Y2,hx=C0,$Q=Xa,mx=X2,PQ=ov,lh=I0,AQ=lv,yx=tT,TQ=ss,kQ=li,uh=uv,CQ=Eq,IQ=$q,jQ=Tq,NQ=aZ,MQ=pZ,LQ=OQ,DQ=1072693247,RQ=1105199104,FQ=1139802112,gx=1083179008,zQ=1072693248,BQ=1083231232,UQ=3230714880,bx=31,bi=1e300,wi=1e-300,WQ=8008566259537294e-32,Nn=[0,0],wx=[0,0];function vT(e,r){var t,n,i,a,o,l,u,s,c,f,d,v,p,y,m,h;if(vx(e)||vx(r))return NaN;if(lh.assign(r,Nn,1,0),l=Nn[0],u=Nn[1],u===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return mx(e);if(r===-.5)return 1/mx(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(hx(r))return jQ(e,r)}if(lh.assign(e,Nn,1,0),a=Nn[0],o=Nn[1],o===0){if(a===0)return CQ(e,r);if(e===1)return 1;if(e===-1&&px(r))return-1;if(hx(e))return e===TQ?vT(-0,-r):r<0?0:kQ}if(e<0&&$Q(r)===!1)return(e-e)/(e-e);if(i=PQ(e),t=a&uh|0,n=l&uh|0,s=a>>>bx|0,c=l>>>bx|0,s&&px(r)?s=-1:s=1,n>RQ){if(n>FQ)return IQ(e,r);if(t<DQ)return c===1?s*bi*bi:s*wi*wi;if(t>zQ)return c===0?s*bi*bi:s*wi*wi;p=MQ(wx,i)}else p=NQ(wx,i,t);if(f=AQ(r,0),v=(r-f)*p[0]+r*p[1],d=f*p[0],y=v+d,lh.assign(y,Nn,1,0),m=yx(Nn[0]),h=yx(Nn[1]),m>=gx){if(m-gx|h||v+WQ>y-d)return s*bi*bi}else if((m&uh)>=BQ&&(m-UQ|h||v<=y-d))return s*wi*wi;return y=LQ(m,d,v),s*y}var VQ=vT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HQ=VQ,KQ=HQ;const sh=it(KQ);/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function GQ(e,r){return r>0?0:(1-e)*r}var YQ=GQ;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XQ=YQ,j0=XQ;/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml=5;function qQ(e,r,t,n,i,a,o){var l,u,s,c,f;if(l=0,e<=0)return l;if(u=n,s=o,t===1&&a===1){if(c=e%Ml,c>0)for(f=0;f<c;f++)l+=r[u]*i[s],u+=1,s+=1;if(e<Ml)return l;for(f=c;f<e;f+=Ml)l+=r[u]*i[s]+r[u+1]*i[s+1]+r[u+2]*i[s+2]+r[u+3]*i[s+3]+r[u+4]*i[s+4],u+=Ml,s+=Ml;return l}for(f=0;f<e;f++)l+=r[u]*i[s],u+=t,s+=a;return l}var pT=qQ;/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ex=j0,ZQ=pT;function QQ(e,r,t,n,i){var a,o;return e<=0?0:(a=Ex(e,t),o=Ex(e,i),ZQ(e,r,t,a,n,i,o))}var JQ=QQ;/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eJ=ve,hT=JQ,rJ=pT;eJ(hT,"ndarray",rJ);var tJ=hT;const xx=it(tJ);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll=4;function nJ(e,r,t,n,i,a,o,l){var u,s,c,f;if(e<=0||r===0)return a;if(u=i,s=l,n===1&&o===1){if(c=e%Ll,c>0)for(f=0;f<c;f++)a[s]+=r*t[u],u+=n,s+=o;if(e<Ll)return a;for(f=c;f<e;f+=Ll)a[s]+=r*t[u],a[s+1]+=r*t[u+1],a[s+2]+=r*t[u+2],a[s+3]+=r*t[u+3],u+=Ll,s+=Ll;return a}for(f=0;f<e;f++)a[s]+=r*t[u],u+=n,s+=o;return a}var mT=nJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sx=j0,iJ=mT;function aJ(e,r,t,n,i,a){var o,l;return e<=0||r===0?i:(o=Sx(e,n),l=Sx(e,a),iJ(e,r,t,n,o,i,a,l))}var oJ=aJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lJ=ve,yT=oJ,uJ=mT;lJ(yT,"ndarray",uJ);var sJ=yT;const _x=it(sJ);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cJ=17976931348623157e292,fJ=cJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dJ(e){return e*e}var vJ=dJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pJ=vJ,hJ=pJ;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ox=fJ,mJ=ov,ch=hJ,fh=X2,yJ=14916681462400413e-170,gJ=1997919072202235e131,dh=44989137945431964e145,fc=11113793747425387e-178;function bJ(e,r,t,n){var i,a,o,l,u,s,c,f,d,v,p;if(e<=0)return 0;for(v=n,i=!0,a=0,o=0,l=0,u=0,f=1,p=0;p<e;p++)d=mJ(r[v]),d>gJ?(o+=ch(d*fc),i=!1):d<yJ?i&&(u+=ch(d*dh)):l+=d*d,v+=t;return o>0?((l>0||l>Ox||l!==l)&&(o+=l*fc*fc),f=1/fc,a=o):u>0?l>0||l>Ox||l!==l?(l=fh(l),u=fh(u)/dh,u>l?(c=l,s=u):(c=u,s=l),f=1,a=s*s*(1+ch(c/s))):(f=1/dh,a=u):(f=1,a=l),fh(a)*f}var gT=bJ;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wJ=j0,EJ=gT;function xJ(e,r,t){var n=wJ(e,t);return EJ(e,r,t,n)}var SJ=xJ;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _J=ve,bT=SJ,OJ=gT;_J(bT,"ndarray",OJ);var $J=bT;const PJ=it($J);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function AJ(e){return r;function r(){return e}}var TJ=AJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kJ=TJ,CJ=kJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function IJ(){}var jJ=IJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NJ=jJ,MJ=NJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LJ=Ya.isPrimitive,DJ=na;function RJ(e){return LJ(e)&&DJ(e)}var wT=RJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FJ=Ya.isObject,zJ=na;function BJ(e){return FJ(e)&&zJ(e.valueOf())}var ET=BJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UJ=wT,WJ=ET;function VJ(e){return UJ(e)||WJ(e)}var HJ=VJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xT=ve,N0=HJ,KJ=wT,GJ=ET;xT(N0,"isPrimitive",KJ);xT(N0,"isObject",GJ);var YJ=N0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $x=Ya.isPrimitive,vh=We,Px=YJ;function XJ(e,r){return!$x(e)||Px(e)?new TypeError(vh("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!$x(r)||Px(r)?new TypeError(vh("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",r)):e>=r?new RangeError(vh("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",e,r)):null}var qJ=XJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZJ(e,r,t){var n=e();return t*n+(1-n)*r}var QJ=ZJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mn=ve,dc=Qi,Ax=ns,Tx=os,kx=Ga,Cx=ai,Ix=CJ,JJ=MJ,vc=H2.factory,jx=na,eee=ds,pc=We,ree=qJ,Nx=QJ;function tee(){var e,r,t,n,i,a;if(arguments.length===0)r=vc();else if(arguments.length===1){if(e=arguments[0],!Tx(e))throw new TypeError(pc("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cx(e,"prng")){if(!kx(e.prng))throw new TypeError(pc("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=e.prng}else r=vc(e)}else{if(i=arguments[0],a=arguments[1],n=ree(i,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Tx(e))throw new TypeError(pc("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cx(e,"prng")){if(!kx(e.prng))throw new TypeError(pc("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=e.prng}else r=vc(e)}else r=vc()}return i===void 0?t=p:t=v,Mn(t,"NAME","uniform"),e&&e.prng?(Mn(t,"seed",null),Mn(t,"seedLength",null),Ax(t,"state",Ix(null),JJ),Mn(t,"stateLength",null),Mn(t,"byteLength",null),Mn(t,"toJSON",Ix(null)),Mn(t,"PRNG",r)):(dc(t,"seed",o),dc(t,"seedLength",l),Ax(t,"state",c,f),dc(t,"stateLength",u),dc(t,"byteLength",s),Mn(t,"toJSON",d),Mn(t,"PRNG",r),r=r.normalized),t;function o(){return r.seed}function l(){return r.seedLength}function u(){return r.stateLength}function s(){return r.byteLength}function c(){return r.state}function f(y){r.state=y}function d(){var y={};return y.type="PRNG",y.name=t.NAME,y.state=eee(r.state),i===void 0?y.params=[]:y.params=[i,a],y}function v(){return Nx(r,i,a)}function p(y,m){return jx(y)||jx(m)||y>=m?NaN:Nx(r,y,m)}}var ST=tee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nee=ST,iee=nee(),aee=iee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oee=ve,_T=aee,lee=ST;oee(_T,"factory",lee);var uee=_T;const Mx=it(uee);class see{constructor(r){this.weights=new Float64Array(2),this.weights[0]=Mx(-1,1),this.weights[1]=Mx(-1,1),this.learningRate=r.learningRate,this.epochs=r.epochs,this.batchSize=r.batchSize,this.trainingHistory=[]}prepareFeatures(r){const t=new Float64Array(2);return t[0]=1,t[1]=r,t}predict(r){const t=this.prepareFeatures(r);return xx(2,t,1,this.weights,1)}calculateMSE(r){const t=new Float64Array(r.length);for(let i=0;i<r.length;i++){const a=this.predict(r[i].x);t[i]=r[i].y-a}const n=PJ(r.length,t,1);return sh(n,2)/r.length}calculateR2(r){const t=r.reduce((a,o)=>a+o.y,0)/r.length;let n=0,i=0;for(const a of r){const o=this.predict(a.x);n+=sh(a.y-t,2),i+=sh(a.y-o,2)}return 1-i/n}shuffleArray(r){const t=[...r];for(let n=t.length-1;n>0;n--){const i=Math.floor(Xm()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t}fit(r){this.trainingHistory=[];for(let i=0;i<this.epochs;i++){const a=this.shuffleArray(r);for(let l=0;l<a.length;l+=this.batchSize){const u=a.slice(l,l+this.batchSize),s=new Float64Array(2);for(const c of u){const f=this.prepareFeatures(c.x),v=xx(2,f,1,this.weights,1)-c.y;_x(2,v,f,1,s,1)}s[0]/=u.length,s[1]/=u.length,s[0]*=-this.learningRate,s[1]*=-this.learningRate,_x(2,1,s,1,this.weights,1)}const o=this.calculateMSE(r);this.trainingHistory.push({epoch:i+1,mse:o,slope:this.weights[1],intercept:this.weights[0]})}const t=this.calculateMSE(r),n=this.calculateR2(r);return{slope:this.weights[1],intercept:this.weights[0],mse:t,r2:n,iterations:this.epochs}}predictValue(r){return this.predict(r)}predictDataPoints(r){return r.map(t=>({...t,predicted:this.predict(t.x)}))}}function cee(e,r,t,n){const i=[];for(let a=0;a<e;a++){const o=Xm()*10,l=r*o+t+(Xm()-.5)*2*n;i.push({x:o,y:l})}return i}function fee(){const[e,r]=g.useState([]),[t,n]=g.useState([]),[i,a]=g.useState(null),[o,l]=g.useState([]),[u,s]=g.useState(!1),c=g.useCallback((v,p,y,m)=>{const h=cee(v,p,y,m);r(h),n([]),a(null),l([])},[]),f=g.useCallback(v=>{e.length!==0&&(s(!0),setTimeout(()=>{const p=new see(v),y=p.fit(e),m=p.predictDataPoints(e);a(y),n(m),l(p.trainingHistory),s(!1)},100))},[e]),d=g.useCallback(()=>{r([]),n([]),a(null),l([])},[]);return{data:e,predictedData:t,result:i,trainingHistory:o,isTraining:u,generateData:c,trainModel:f,reset:d}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),cl=(e,r)=>{const t=g.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:u,...s},c)=>g.createElement("svg",{ref:c,...dee,width:i,height:i,stroke:n,strokeWidth:o?Number(a)*24/Number(i):a,className:["lucide",`lucide-${vee(e)}`,l].join(" "),...s},[...r.map(([f,d])=>g.createElement(f,d)),...Array.isArray(u)?u:[u]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pee=cl("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hee=cl("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mee=cl("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yee=cl("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gee=cl("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bee=cl("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function wee({onGenerateData:e,onTrain:r,onReset:t,isTraining:n,hasData:i}){const[a,o]=g.useState(50),[l,u]=g.useState(2),[s,c]=g.useState(5),[f,d]=g.useState(3),[v,p]=g.useState(.01),[y,m]=g.useState(100),[h,b]=g.useState(10),w=()=>{e(a,l,s,f)},E=()=>{r({learningRate:v,epochs:y,batchSize:h})};return j.jsxs("div",{className:"space-y-6",children:[j.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-200",children:[j.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:"Data Generation"}),j.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Number of Points: ",a]}),j.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:a,onChange:x=>o(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["True Slope: ",l.toFixed(2)]}),j.jsx("input",{type:"range",min:"-5",max:"5",step:"0.1",value:l,onChange:x=>u(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["True Intercept: ",s.toFixed(2)]}),j.jsx("input",{type:"range",min:"-10",max:"10",step:"0.5",value:s,onChange:x=>c(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Noise Level: ",f.toFixed(1)]}),j.jsx("input",{type:"range",min:"0",max:"10",step:"0.5",value:f,onChange:x=>d(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"})]})]}),j.jsxs("button",{onClick:w,className:"mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",children:[j.jsx(yee,{className:"w-4 h-4"}),"Generate New Data"]})]}),j.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-200",children:[j.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"SGD Parameters"}),j.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Learning Rate: ",v]}),j.jsx("input",{type:"range",min:"0.001",max:"0.1",step:"0.001",value:v,onChange:x=>p(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Epochs: ",y]}),j.jsx("input",{type:"range",min:"10",max:"500",step:"10",value:y,onChange:x=>m(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Batch Size: ",h]}),j.jsx("input",{type:"range",min:"1",max:"50",step:"1",value:h,onChange:x=>b(Number(x.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"})]})]}),j.jsxs("button",{onClick:E,disabled:!i||n,className:"mt-4 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",children:[j.jsx(mee,{className:"w-4 h-4"}),n?"Training...":"Train Model"]}),i&&j.jsx("button",{onClick:t,className:"mt-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200",children:"Reset All"})]})]})}function OT(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=OT(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function me(){for(var e,r,t=0,n="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=OT(e))&&(n&&(n+=" "),n+=r);return n}var Eee=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function M0(e){if(typeof e!="string")return!1;var r=Eee;return r.includes(e)}var xee=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],See=new Set(xee);function $T(e){return typeof e!="string"?!1:See.has(e)}function PT(e){return typeof e=="string"&&e.startsWith("data-")}function Ft(e){if(typeof e!="object"||e===null)return{};var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&($T(t)||PT(t))&&(r[t]=e[t]);return r}function hs(e){if(e==null)return null;if(g.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var r=e.props;return Ft(r)}return typeof e=="object"&&!Array.isArray(e)?Ft(e):null}function Ir(e){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&($T(t)||PT(t)||M0(t))&&(r[t]=e[t]);return r}function _ee(e){return e==null?null:g.isValidElement(e)?Ir(e.props):typeof e=="object"&&!Array.isArray(e)?Ir(e):null}var Oee=["children","width","height","viewBox","className","style","title","desc"];function ay(){return ay=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ay.apply(null,arguments)}function $ee(e,r){if(e==null)return{};var t,n,i=Pee(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Pee(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var L0=g.forwardRef((e,r)=>{var{children:t,width:n,height:i,viewBox:a,className:o,style:l,title:u,desc:s}=e,c=$ee(e,Oee),f=a||{width:n,height:i,x:0,y:0},d=me("recharts-surface",o);return g.createElement("svg",ay({},Ir(c),{className:d,width:n,height:i,style:l,viewBox:"".concat(f.x," ").concat(f.y," ").concat(f.width," ").concat(f.height),ref:r}),g.createElement("title",null,u),g.createElement("desc",null,s),t)}),Aee=["children","className"];function oy(){return oy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},oy.apply(null,arguments)}function Tee(e,r){if(e==null)return{};var t,n,i=kee(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function kee(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var nt=g.forwardRef((e,r)=>{var{children:t,className:n}=e,i=Tee(e,Aee),a=me("recharts-layer",n);return g.createElement("g",oy({className:a},Ir(i),{ref:r}),t)}),AT=g.createContext(null),Cee=()=>g.useContext(AT);function Ee(e){return function(){return e}}const TT=Math.cos,kf=Math.sin,sn=Math.sqrt,Cf=Math.PI,cv=2*Cf,ly=Math.PI,uy=2*ly,ha=1e-6,Iee=uy-ha;function kT(e){this._+=e[0];for(let r=1,t=e.length;r<t;++r)this._+=arguments[r]+e[r]}function jee(e){let r=Math.floor(e);if(!(r>=0))throw new Error(`invalid digits: ${e}`);if(r>15)return kT;const t=10**r;return function(n){this._+=n[0];for(let i=1,a=n.length;i<a;++i)this._+=Math.round(arguments[i]*t)/t+n[i]}}class Nee{constructor(r){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=r==null?kT:jee(r)}moveTo(r,t){this._append`M${this._x0=this._x1=+r},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(r,t){this._append`L${this._x1=+r},${this._y1=+t}`}quadraticCurveTo(r,t,n,i){this._append`Q${+r},${+t},${this._x1=+n},${this._y1=+i}`}bezierCurveTo(r,t,n,i,a,o){this._append`C${+r},${+t},${+n},${+i},${this._x1=+a},${this._y1=+o}`}arcTo(r,t,n,i,a){if(r=+r,t=+t,n=+n,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let o=this._x1,l=this._y1,u=n-r,s=i-t,c=o-r,f=l-t,d=c*c+f*f;if(this._x1===null)this._append`M${this._x1=r},${this._y1=t}`;else if(d>ha)if(!(Math.abs(f*u-s*c)>ha)||!a)this._append`L${this._x1=r},${this._y1=t}`;else{let v=n-o,p=i-l,y=u*u+s*s,m=v*v+p*p,h=Math.sqrt(y),b=Math.sqrt(d),w=a*Math.tan((ly-Math.acos((y+d-m)/(2*h*b)))/2),E=w/b,x=w/h;Math.abs(E-1)>ha&&this._append`L${r+E*c},${t+E*f}`,this._append`A${a},${a},0,0,${+(f*v>c*p)},${this._x1=r+x*u},${this._y1=t+x*s}`}}arc(r,t,n,i,a,o){if(r=+r,t=+t,n=+n,o=!!o,n<0)throw new Error(`negative radius: ${n}`);let l=n*Math.cos(i),u=n*Math.sin(i),s=r+l,c=t+u,f=1^o,d=o?i-a:a-i;this._x1===null?this._append`M${s},${c}`:(Math.abs(this._x1-s)>ha||Math.abs(this._y1-c)>ha)&&this._append`L${s},${c}`,n&&(d<0&&(d=d%uy+uy),d>Iee?this._append`A${n},${n},0,1,${f},${r-l},${t-u}A${n},${n},0,1,${f},${this._x1=s},${this._y1=c}`:d>ha&&this._append`A${n},${n},0,${+(d>=ly)},${f},${this._x1=r+n*Math.cos(a)},${this._y1=t+n*Math.sin(a)}`)}rect(r,t,n,i){this._append`M${this._x0=this._x1=+r},${this._y0=this._y1=+t}h${n=+n}v${+i}h${-n}Z`}toString(){return this._}}function D0(e){let r=3;return e.digits=function(t){if(!arguments.length)return r;if(t==null)r=null;else{const n=Math.floor(t);if(!(n>=0))throw new RangeError(`invalid digits: ${t}`);r=n}return e},()=>new Nee(r)}function R0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function CT(e){this._context=e}CT.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 1:this._point=2;default:this._context.lineTo(e,r);break}}};function fv(e){return new CT(e)}function IT(e){return e[0]}function jT(e){return e[1]}function NT(e,r){var t=Ee(!0),n=null,i=fv,a=null,o=D0(l);e=typeof e=="function"?e:e===void 0?IT:Ee(e),r=typeof r=="function"?r:r===void 0?jT:Ee(r);function l(u){var s,c=(u=R0(u)).length,f,d=!1,v;for(n==null&&(a=i(v=o())),s=0;s<=c;++s)!(s<c&&t(f=u[s],s,u))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+e(f,s,u),+r(f,s,u));if(v)return a=null,v+""||null}return l.x=function(u){return arguments.length?(e=typeof u=="function"?u:Ee(+u),l):e},l.y=function(u){return arguments.length?(r=typeof u=="function"?u:Ee(+u),l):r},l.defined=function(u){return arguments.length?(t=typeof u=="function"?u:Ee(!!u),l):t},l.curve=function(u){return arguments.length?(i=u,n!=null&&(a=i(n)),l):i},l.context=function(u){return arguments.length?(u==null?n=a=null:a=i(n=u),l):n},l}function hc(e,r,t){var n=null,i=Ee(!0),a=null,o=fv,l=null,u=D0(s);e=typeof e=="function"?e:e===void 0?IT:Ee(+e),r=typeof r=="function"?r:Ee(r===void 0?0:+r),t=typeof t=="function"?t:t===void 0?jT:Ee(+t);function s(f){var d,v,p,y=(f=R0(f)).length,m,h=!1,b,w=new Array(y),E=new Array(y);for(a==null&&(l=o(b=u())),d=0;d<=y;++d){if(!(d<y&&i(m=f[d],d,f))===h)if(h=!h)v=d,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),p=d-1;p>=v;--p)l.point(w[p],E[p]);l.lineEnd(),l.areaEnd()}h&&(w[d]=+e(m,d,f),E[d]=+r(m,d,f),l.point(n?+n(m,d,f):w[d],t?+t(m,d,f):E[d]))}if(b)return l=null,b+""||null}function c(){return NT().defined(i).curve(o).context(a)}return s.x=function(f){return arguments.length?(e=typeof f=="function"?f:Ee(+f),n=null,s):e},s.x0=function(f){return arguments.length?(e=typeof f=="function"?f:Ee(+f),s):e},s.x1=function(f){return arguments.length?(n=f==null?null:typeof f=="function"?f:Ee(+f),s):n},s.y=function(f){return arguments.length?(r=typeof f=="function"?f:Ee(+f),t=null,s):r},s.y0=function(f){return arguments.length?(r=typeof f=="function"?f:Ee(+f),s):r},s.y1=function(f){return arguments.length?(t=f==null?null:typeof f=="function"?f:Ee(+f),s):t},s.lineX0=s.lineY0=function(){return c().x(e).y(r)},s.lineY1=function(){return c().x(e).y(t)},s.lineX1=function(){return c().x(n).y(r)},s.defined=function(f){return arguments.length?(i=typeof f=="function"?f:Ee(!!f),s):i},s.curve=function(f){return arguments.length?(o=f,a!=null&&(l=o(a)),s):o},s.context=function(f){return arguments.length?(f==null?a=l=null:l=o(a=f),s):a},s}class MT{constructor(r,t){this._context=r,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(r,t){switch(r=+r,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(r,t):this._context.moveTo(r,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+r)/2,this._y0,this._x0,t,r,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,r,this._y0,r,t);break}}this._x0=r,this._y0=t}}function Mee(e){return new MT(e,!0)}function Lee(e){return new MT(e,!1)}const F0={draw(e,r){const t=sn(r/Cf);e.moveTo(t,0),e.arc(0,0,t,0,cv)}},Dee={draw(e,r){const t=sn(r/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},LT=sn(1/3),Ree=LT*2,Fee={draw(e,r){const t=sn(r/Ree),n=t*LT;e.moveTo(0,-t),e.lineTo(n,0),e.lineTo(0,t),e.lineTo(-n,0),e.closePath()}},zee={draw(e,r){const t=sn(r),n=-t/2;e.rect(n,n,t,t)}},Bee=.8908130915292852,DT=kf(Cf/10)/kf(7*Cf/10),Uee=kf(cv/10)*DT,Wee=-TT(cv/10)*DT,Vee={draw(e,r){const t=sn(r*Bee),n=Uee*t,i=Wee*t;e.moveTo(0,-t),e.lineTo(n,i);for(let a=1;a<5;++a){const o=cv*a/5,l=TT(o),u=kf(o);e.lineTo(u*t,-l*t),e.lineTo(l*n-u*i,u*n+l*i)}e.closePath()}},ph=sn(3),Hee={draw(e,r){const t=-sn(r/(ph*3));e.moveTo(0,t*2),e.lineTo(-ph*t,-t),e.lineTo(ph*t,-t),e.closePath()}},Et=-.5,xt=sn(3)/2,sy=1/sn(12),Kee=(sy/2+1)*3,Gee={draw(e,r){const t=sn(r/Kee),n=t/2,i=t*sy,a=n,o=t*sy+t,l=-a,u=o;e.moveTo(n,i),e.lineTo(a,o),e.lineTo(l,u),e.lineTo(Et*n-xt*i,xt*n+Et*i),e.lineTo(Et*a-xt*o,xt*a+Et*o),e.lineTo(Et*l-xt*u,xt*l+Et*u),e.lineTo(Et*n+xt*i,Et*i-xt*n),e.lineTo(Et*a+xt*o,Et*o-xt*a),e.lineTo(Et*l+xt*u,Et*u-xt*l),e.closePath()}};function Yee(e,r){let t=null,n=D0(i);e=typeof e=="function"?e:Ee(e||F0),r=typeof r=="function"?r:Ee(r===void 0?64:+r);function i(){let a;if(t||(t=a=n()),e.apply(this,arguments).draw(t,+r.apply(this,arguments)),a)return t=null,a+""||null}return i.type=function(a){return arguments.length?(e=typeof a=="function"?a:Ee(a),i):e},i.size=function(a){return arguments.length?(r=typeof a=="function"?a:Ee(+a),i):r},i.context=function(a){return arguments.length?(t=a??null,i):t},i}function If(){}function jf(e,r,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+r)/6,(e._y0+4*e._y1+t)/6)}function RT(e){this._context=e}RT.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jf(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jf(this,e,r);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=r}};function Xee(e){return new RT(e)}function FT(e){this._context=e}FT.prototype={areaStart:If,areaEnd:If,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1,this._x2=e,this._y2=r;break;case 1:this._point=2,this._x3=e,this._y3=r;break;case 2:this._point=3,this._x4=e,this._y4=r,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+r)/6);break;default:jf(this,e,r);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=r}};function qee(e){return new FT(e)}function zT(e){this._context=e}zT.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+r)/6;this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 3:this._point=4;default:jf(this,e,r);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=r}};function Zee(e){return new zT(e)}function BT(e){this._context=e}BT.prototype={areaStart:If,areaEnd:If,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,r){e=+e,r=+r,this._point?this._context.lineTo(e,r):(this._point=1,this._context.moveTo(e,r))}};function Qee(e){return new BT(e)}function Lx(e){return e<0?-1:1}function Dx(e,r,t){var n=e._x1-e._x0,i=r-e._x1,a=(e._y1-e._y0)/(n||i<0&&-0),o=(t-e._y1)/(i||n<0&&-0),l=(a*i+o*n)/(n+i);return(Lx(a)+Lx(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(l))||0}function Rx(e,r){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-r)/2:r}function hh(e,r,t){var n=e._x0,i=e._y0,a=e._x1,o=e._y1,l=(a-n)/3;e._context.bezierCurveTo(n+l,i+l*r,a-l,o-l*t,a,o)}function Nf(e){this._context=e}Nf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:hh(this,this._t0,Rx(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,r){var t=NaN;if(e=+e,r=+r,!(e===this._x1&&r===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 1:this._point=2;break;case 2:this._point=3,hh(this,Rx(this,t=Dx(this,e,r)),t);break;default:hh(this,this._t0,t=Dx(this,e,r));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=r,this._t0=t}}};function UT(e){this._context=new WT(e)}(UT.prototype=Object.create(Nf.prototype)).point=function(e,r){Nf.prototype.point.call(this,r,e)};function WT(e){this._context=e}WT.prototype={moveTo:function(e,r){this._context.moveTo(r,e)},closePath:function(){this._context.closePath()},lineTo:function(e,r){this._context.lineTo(r,e)},bezierCurveTo:function(e,r,t,n,i,a){this._context.bezierCurveTo(r,e,n,t,a,i)}};function Jee(e){return new Nf(e)}function ere(e){return new UT(e)}function VT(e){this._context=e}VT.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,r=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],r[0]):this._context.moveTo(e[0],r[0]),t===2)this._context.lineTo(e[1],r[1]);else for(var n=Fx(e),i=Fx(r),a=0,o=1;o<t;++a,++o)this._context.bezierCurveTo(n[0][a],i[0][a],n[1][a],i[1][a],e[o],r[o]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,r){this._x.push(+e),this._y.push(+r)}};function Fx(e){var r,t=e.length-1,n,i=new Array(t),a=new Array(t),o=new Array(t);for(i[0]=0,a[0]=2,o[0]=e[0]+2*e[1],r=1;r<t-1;++r)i[r]=1,a[r]=4,o[r]=4*e[r]+2*e[r+1];for(i[t-1]=2,a[t-1]=7,o[t-1]=8*e[t-1]+e[t],r=1;r<t;++r)n=i[r]/a[r-1],a[r]-=n,o[r]-=n*o[r-1];for(i[t-1]=o[t-1]/a[t-1],r=t-2;r>=0;--r)i[r]=(o[r]-i[r+1])/a[r];for(a[t-1]=(e[t]+i[t-1])/2,r=0;r<t-1;++r)a[r]=2*e[r+1]-i[r+1];return[i,a]}function rre(e){return new VT(e)}function dv(e,r){this._context=e,this._t=r}dv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,r){switch(e=+e,r=+r,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,r),this._context.lineTo(e,r);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,r)}break}}this._x=e,this._y=r}};function tre(e){return new dv(e,.5)}function nre(e){return new dv(e,0)}function ire(e){return new dv(e,1)}function La(e,r){if((o=e.length)>1)for(var t=1,n,i,a=e[r[0]],o,l=a.length;t<o;++t)for(i=a,a=e[r[t]],n=0;n<l;++n)a[n][1]+=a[n][0]=isNaN(i[n][1])?i[n][0]:i[n][1]}function cy(e){for(var r=e.length,t=new Array(r);--r>=0;)t[r]=r;return t}function are(e,r){return e[r]}function ore(e){const r=[];return r.key=e,r}function lre(){var e=Ee([]),r=cy,t=La,n=are;function i(a){var o=Array.from(e.apply(this,arguments),ore),l,u=o.length,s=-1,c;for(const f of a)for(l=0,++s;l<u;++l)(o[l][s]=[0,+n(f,o[l].key,s,a)]).data=f;for(l=0,c=R0(r(o));l<u;++l)o[c[l]].index=l;return t(o,c),o}return i.keys=function(a){return arguments.length?(e=typeof a=="function"?a:Ee(Array.from(a)),i):e},i.value=function(a){return arguments.length?(n=typeof a=="function"?a:Ee(+a),i):n},i.order=function(a){return arguments.length?(r=a==null?cy:typeof a=="function"?a:Ee(Array.from(a)),i):r},i.offset=function(a){return arguments.length?(t=a??La,i):t},i}function ure(e,r){if((n=e.length)>0){for(var t,n,i=0,a=e[0].length,o;i<a;++i){for(o=t=0;t<n;++t)o+=e[t][i][1]||0;if(o)for(t=0;t<n;++t)e[t][i][1]/=o}La(e,r)}}function sre(e,r){if((i=e.length)>0){for(var t=0,n=e[r[0]],i,a=n.length;t<a;++t){for(var o=0,l=0;o<i;++o)l+=e[o][t][1]||0;n[t][1]+=n[t][0]=-l/2}La(e,r)}}function cre(e,r){if(!(!((o=e.length)>0)||!((a=(i=e[r[0]]).length)>0))){for(var t=0,n=1,i,a,o;n<a;++n){for(var l=0,u=0,s=0;l<o;++l){for(var c=e[r[l]],f=c[n][1]||0,d=c[n-1][1]||0,v=(f-d)/2,p=0;p<l;++p){var y=e[r[p]],m=y[n][1]||0,h=y[n-1][1]||0;v+=m-h}u+=f,s+=v*f}i[n-1][1]+=i[n-1][0]=t,u&&(t-=s/u)}i[n-1][1]+=i[n-1][0]=t,La(e,r)}}var vv={},HT={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return t==="__proto__"}e.isUnsafeProperty=r})(HT);var z0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){switch(typeof t){case"number":case"symbol":return!1;case"string":return t.includes(".")||t.includes("[")||t.includes("]")}}e.isDeepKey=r})(z0);var pv={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){var n;return typeof t=="string"||typeof t=="symbol"?t:Object.is((n=t==null?void 0:t.valueOf)==null?void 0:n.call(t),-0)?"-0":String(t)}e.toKey=r})(pv);var hv={},KT={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){if(t==null)return"";if(typeof t=="string")return t;if(Array.isArray(t))return t.map(r).join(",");const n=String(t);return n==="0"&&Object.is(Number(t),-0)?"-0":n}e.toString=r})(KT);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=KT,t=pv;function n(i){if(Array.isArray(i))return i.map(t.toKey);if(typeof i=="symbol")return[i];i=r.toString(i);const a=[],o=i.length;if(o===0)return a;let l=0,u="",s="",c=!1;for(i.charCodeAt(0)===46&&(a.push(""),l++);l<o;){const f=i[l];s?f==="\\"&&l+1<o?(l++,u+=i[l]):f===s?s="":u+=f:c?f==='"'||f==="'"?s=f:f==="]"?(c=!1,a.push(u),u=""):u+=f:f==="["?(c=!0,u&&(a.push(u),u="")):f==="."?u&&(a.push(u),u=""):u+=f,l++}return u&&a.push(u),a}e.toPath=n})(hv);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=HT,t=z0,n=pv,i=hv;function a(l,u,s){if(l==null)return s;switch(typeof u){case"string":{if(r.isUnsafeProperty(u))return s;const c=l[u];return c===void 0?t.isDeepKey(u)?a(l,i.toPath(u),s):s:c}case"number":case"symbol":{typeof u=="number"&&(u=n.toKey(u));const c=l[u];return c===void 0?s:c}default:{if(Array.isArray(u))return o(l,u,s);if(Object.is(u==null?void 0:u.valueOf(),-0)?u="-0":u=String(u),r.isUnsafeProperty(u))return s;const c=l[u];return c===void 0?s:c}}}function o(l,u,s){if(u.length===0)return s;let c=l;for(let f=0;f<u.length;f++){if(c==null||r.isUnsafeProperty(u[f]))return s;c=c[u[f]]}return c===void 0?s:c}e.get=a})(vv);var fre=vv.get;const Vo=it(fre);var dre=4;function Mi(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dre,t=10**r,n=Math.round(e*t)/t;return Object.is(n,-0)?0:n}function Le(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return e.reduce((i,a,o)=>{var l=t[o-1];return typeof l=="string"?i+l+a:l!==void 0?i+Mi(l)+a:i+a},"")}var Ct=e=>e===0?0:e>0?1:-1,Qn=e=>typeof e=="number"&&e!=+e,Da=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,W=e=>(typeof e=="number"||e instanceof Number)&&!Qn(e),An=e=>W(e)||typeof e=="string",vre=0,Lu=e=>{var r=++vre;return"".concat(e||"").concat(r)},Yi=function(r,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!W(r)&&typeof r!="string")return n;var a;if(Da(r)){if(t==null)return n;var o=r.indexOf("%");a=t*parseFloat(r.slice(0,o))/100}else a=+r;return Qn(a)&&(a=n),i&&t!=null&&a>t&&(a=t),a},GT=e=>{if(!Array.isArray(e))return!1;for(var r=e.length,t={},n=0;n<r;n++)if(!t[String(e[n])])t[String(e[n])]=!0;else return!0;return!1};function or(e,r,t){return W(e)&&W(r)?Mi(e+t*(r-e)):r}function YT(e,r,t){if(!(!e||!e.length))return e.find(n=>n&&(typeof r=="function"?r(n):Vo(n,r))===t)}var pre=e=>{for(var r=e.length,t=0,n=0,i=0,a=0,o=1/0,l=-1/0,u=0,s=0,c=0;c<r;c++){var f,d;u=((f=e[c])===null||f===void 0?void 0:f.cx)||0,s=((d=e[c])===null||d===void 0?void 0:d.cy)||0,t+=u,n+=s,i+=u*s,a+=u*u,o=Math.min(o,u),l=Math.max(l,u)}var v=r*a!==t*t?(r*i-t*n)/(r*a-t*t):0;return{xmin:o,xmax:l,a:v,b:(n-v*t)/r}},Te=e=>e===null||typeof e>"u",ms=e=>Te(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function Xr(e){return e!=null}function qa(){}var hre=["type","size","sizeType"];function fy(){return fy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},fy.apply(null,arguments)}function zx(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Bx(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?zx(Object(t),!0).forEach(function(n){mre(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):zx(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function mre(e,r,t){return(r=yre(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function yre(e){var r=gre(e,"string");return typeof r=="symbol"?r:r+""}function gre(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function bre(e,r){if(e==null)return{};var t,n,i=wre(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function wre(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var XT={symbolCircle:F0,symbolCross:Dee,symbolDiamond:Fee,symbolSquare:zee,symbolStar:Vee,symbolTriangle:Hee,symbolWye:Gee},Ere=Math.PI/180,xre=e=>{var r="symbol".concat(ms(e));return XT[r]||F0},Sre=(e,r,t)=>{if(r==="area")return e;switch(t){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var n=18*Ere;return 1.25*e*e*(Math.tan(n)-Math.tan(n*2)*Math.tan(n)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},_re=(e,r)=>{XT["symbol".concat(ms(e))]=r},mv=e=>{var{type:r="circle",size:t=64,sizeType:n="area"}=e,i=bre(e,hre),a=Bx(Bx({},i),{},{type:r,size:t,sizeType:n}),o="circle";typeof r=="string"&&(o=r);var l=()=>{var d=xre(o),v=Yee().type(d).size(Sre(t,n,o)),p=v();if(p!==null)return p},{className:u,cx:s,cy:c}=a,f=Ir(a);return W(s)&&W(c)&&W(t)?g.createElement("path",fy({},f,{className:me("recharts-symbols",u),transform:"translate(".concat(s,", ").concat(c,")"),d:l()})):null};mv.registerSymbol=_re;var qT=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,B0=(e,r)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var t=e;if(g.isValidElement(e)&&(t=e.props),typeof t!="object"&&typeof t!="function")return null;var n={};return Object.keys(t).forEach(i=>{M0(i)&&typeof t[i]=="function"&&(n[i]=a=>t[i](t,a))}),n},Ore=(e,r,t)=>n=>(e(r,t,n),null),U0=(e,r,t)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var n=null;return Object.keys(e).forEach(i=>{var a=e[i];M0(i)&&typeof a=="function"&&(n||(n={}),n[i]=Ore(a,r,t))}),n},$re=e=>Array.isArray(e)&&e.length>0;function Ux(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Pre(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ux(Object(t),!0).forEach(function(n){Are(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ux(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Are(e,r,t){return(r=Tre(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Tre(e){var r=kre(e,"string");return typeof r=="symbol"?r:r+""}function kre(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ur(e,r){var t=Pre({},e),n=r,i=Object.keys(r),a=i.reduce((o,l)=>(o[l]===void 0&&n[l]!==void 0&&(o[l]=n[l]),o),t);return a}function Mf(){return Mf=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Mf.apply(null,arguments)}function Wx(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ZT(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Wx(Object(t),!0).forEach(function(n){Cre(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Wx(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Cre(e,r,t){return(r=Ire(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ire(e){var r=jre(e,"string");return typeof r=="symbol"?r:r+""}function jre(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var _t=32,Nre={align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle",labelStyle:{}};function Mre(e){if(typeof e=="object"&&e!==null&&"strokeDasharray"in e)return String(e.strokeDasharray)}function Lre(e){var{data:r,iconType:t,inactiveColor:n}=e,i=_t/2,a=_t/6,o=_t/3,l=r.inactive?n:r.color,u=t??r.type;if(u==="none")return null;if(u==="plainline")return g.createElement("line",{strokeWidth:4,fill:"none",stroke:l,strokeDasharray:Mre(r.payload),x1:0,y1:i,x2:_t,y2:i,className:"recharts-legend-icon"});if(u==="line")return g.createElement("path",{strokeWidth:4,fill:"none",stroke:l,d:"M0,".concat(i,"h").concat(o,`
            A`).concat(a,",").concat(a,",0,1,1,").concat(2*o,",").concat(i,`
            H`).concat(_t,"M").concat(2*o,",").concat(i,`
            A`).concat(a,",").concat(a,",0,1,1,").concat(o,",").concat(i),className:"recharts-legend-icon"});if(u==="rect")return g.createElement("path",{stroke:"none",fill:l,d:"M0,".concat(_t/8,"h").concat(_t,"v").concat(_t*3/4,"h").concat(-_t,"z"),className:"recharts-legend-icon"});if(g.isValidElement(r.legendIcon)){var s=ZT({},r);return delete s.legendIcon,g.cloneElement(r.legendIcon,s)}return g.createElement(mv,{fill:l,cx:i,cy:i,size:_t,sizeType:"diameter",type:u})}function Dre(e){var{payload:r,iconSize:t,layout:n,formatter:i,inactiveColor:a,iconType:o,labelStyle:l}=e,u={x:0,y:0,width:_t,height:_t},s={display:n==="horizontal"?"inline-block":"block",marginRight:10},c={display:"inline-block",verticalAlign:"middle",marginRight:4};return r.map((f,d)=>{var v=f.formatter||i,p=me({"recharts-legend-item":!0,["legend-item-".concat(d)]:!0,inactive:f.inactive});if(f.type==="none")return null;var y=typeof l=="object"?ZT({},l):{};y.color=f.inactive?a:y.color||f.color;var m=v?v(f.value,f,d):f.value;return g.createElement("li",Mf({className:p,style:s,key:"legend-item-".concat(d)},U0(e,f,d)),g.createElement(L0,{width:t,height:t,viewBox:u,style:c,"aria-label":"".concat(m," legend icon")},g.createElement(Lre,{data:f,iconType:o,inactiveColor:a})),g.createElement("span",{className:"recharts-legend-item-text",style:y},m))})}var Rre=e=>{var r=ur(e,Nre),{payload:t,layout:n,align:i}=r;if(!t||!t.length)return null;var a={padding:0,margin:0,textAlign:n==="horizontal"?i:"left"};return g.createElement("ul",{className:"recharts-default-legend",style:a},g.createElement(Dre,Mf({},r,{payload:t})))},QT={},JT={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t,n){const i=new Map;for(let a=0;a<t.length;a++){const o=t[a],l=n(o,a,t);i.has(l)||i.set(l,o)}return Array.from(i.values())}e.uniqBy=r})(JT);var ek={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t,n){return function(...i){return t.apply(this,i.slice(0,n))}}e.ary=r})(ek);var W0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return t}e.identity=r})(W0);var rk={},V0={},tk={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return Number.isSafeInteger(t)&&t>=0}e.isLength=r})(tk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=tk;function t(n){return n!=null&&typeof n!="function"&&r.isLength(n.length)}e.isArrayLike=t})(V0);var nk={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return typeof t=="object"&&t!==null}e.isObjectLike=r})(nk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=V0,t=nk;function n(i){return t.isObjectLike(i)&&r.isArrayLike(i)}e.isArrayLikeObject=n})(rk);var ik={},ak={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=vv;function t(n){return function(i){return r.get(i,n)}}e.property=t})(ak);var ok={},H0={},lk={},K0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return t!==null&&(typeof t=="object"||typeof t=="function")}e.isObject=r})(K0);var G0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return t==null||typeof t!="object"&&typeof t!="function"}e.isPrimitive=r})(G0);var Y0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t,n){return t===n||Number.isNaN(t)&&Number.isNaN(n)}e.isEqualsSameValueZero=r})(Y0);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=K0,t=G0,n=Y0;function i(c,f,d){return typeof d!="function"?i(c,f,()=>{}):a(c,f,function v(p,y,m,h,b,w){const E=d(p,y,m,h,b,w);return E!==void 0?!!E:a(p,y,v,w)},new Map)}function a(c,f,d,v){if(f===c)return!0;switch(typeof f){case"object":return o(c,f,d,v);case"function":return Object.keys(f).length>0?a(c,{...f},d,v):n.isEqualsSameValueZero(c,f);default:return r.isObject(c)?typeof f=="string"?f==="":!0:n.isEqualsSameValueZero(c,f)}}function o(c,f,d,v){if(f==null)return!0;if(Array.isArray(f))return u(c,f,d,v);if(f instanceof Map)return l(c,f,d,v);if(f instanceof Set)return s(c,f,d,v);const p=Object.keys(f);if(c==null||t.isPrimitive(c))return p.length===0;if(p.length===0)return!0;if(v!=null&&v.has(f))return v.get(f)===c;v==null||v.set(f,c);try{for(let y=0;y<p.length;y++){const m=p[y];if(!t.isPrimitive(c)&&!(m in c)||f[m]===void 0&&c[m]!==void 0||f[m]===null&&c[m]!==null||!d(c[m],f[m],m,c,f,v))return!1}return!0}finally{v==null||v.delete(f)}}function l(c,f,d,v){if(f.size===0)return!0;if(!(c instanceof Map))return!1;for(const[p,y]of f.entries()){const m=c.get(p);if(d(m,y,p,c,f,v)===!1)return!1}return!0}function u(c,f,d,v){if(f.length===0)return!0;if(!Array.isArray(c))return!1;const p=new Set;for(let y=0;y<f.length;y++){const m=f[y];let h=!1;for(let b=0;b<c.length;b++){if(p.has(b))continue;const w=c[b];let E=!1;if(d(w,m,y,c,f,v)&&(E=!0),E){p.add(b),h=!0;break}}if(!h)return!1}return!0}function s(c,f,d,v){return f.size===0?!0:c instanceof Set?u([...c],[...f],d,v):!1}e.isMatchWith=i,e.isSetMatch=s})(lk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=lk;function t(n,i){return r.isMatchWith(n,i,()=>{})}e.isMatch=t})(H0);var uk={},X0={},sk={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return Object.getOwnPropertySymbols(t).filter(n=>Object.prototype.propertyIsEnumerable.call(t,n))}e.getSymbols=r})(sk);var yv={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}e.getTag=r})(yv);var q0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r="[object RegExp]",t="[object String]",n="[object Number]",i="[object Boolean]",a="[object Arguments]",o="[object Symbol]",l="[object Date]",u="[object Map]",s="[object Set]",c="[object Array]",f="[object Function]",d="[object ArrayBuffer]",v="[object Object]",p="[object Error]",y="[object DataView]",m="[object Uint8Array]",h="[object Uint8ClampedArray]",b="[object Uint16Array]",w="[object Uint32Array]",E="[object BigUint64Array]",x="[object Int8Array]",S="[object Int16Array]",_="[object Int32Array]",O="[object BigInt64Array]",P="[object Float32Array]",T="[object Float64Array]";e.argumentsTag=a,e.arrayBufferTag=d,e.arrayTag=c,e.bigInt64ArrayTag=O,e.bigUint64ArrayTag=E,e.booleanTag=i,e.dataViewTag=y,e.dateTag=l,e.errorTag=p,e.float32ArrayTag=P,e.float64ArrayTag=T,e.functionTag=f,e.int16ArrayTag=S,e.int32ArrayTag=_,e.int8ArrayTag=x,e.mapTag=u,e.numberTag=n,e.objectTag=v,e.regexpTag=r,e.setTag=s,e.stringTag=t,e.symbolTag=o,e.uint16ArrayTag=b,e.uint32ArrayTag=w,e.uint8ArrayTag=m,e.uint8ClampedArrayTag=h})(q0);var ck={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}e.isTypedArray=r})(ck);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=sk,t=yv,n=q0,i=G0,a=ck;function o(c,f){return l(c,void 0,c,new Map,f)}function l(c,f,d,v=new Map,p=void 0){const y=p==null?void 0:p(c,f,d,v);if(y!==void 0)return y;if(i.isPrimitive(c))return c;if(v.has(c))return v.get(c);if(Array.isArray(c)){const m=new Array(c.length);v.set(c,m);for(let h=0;h<c.length;h++)m[h]=l(c[h],h,d,v,p);return Object.hasOwn(c,"index")&&(m.index=c.index),Object.hasOwn(c,"input")&&(m.input=c.input),m}if(c instanceof Date)return new Date(c.getTime());if(c instanceof RegExp){const m=new RegExp(c.source,c.flags);return m.lastIndex=c.lastIndex,m}if(c instanceof Map){const m=new Map;v.set(c,m);for(const[h,b]of c)m.set(h,l(b,h,d,v,p));return m}if(c instanceof Set){const m=new Set;v.set(c,m);for(const h of c)m.add(l(h,void 0,d,v,p));return m}if(typeof Buffer<"u"&&Buffer.isBuffer(c))return c.subarray();if(a.isTypedArray(c)){const m=new(Object.getPrototypeOf(c)).constructor(c.length);v.set(c,m);for(let h=0;h<c.length;h++)m[h]=l(c[h],h,d,v,p);return m}if(c instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&c instanceof SharedArrayBuffer)return c.slice(0);if(c instanceof DataView){const m=new DataView(c.buffer.slice(0),c.byteOffset,c.byteLength);return v.set(c,m),u(m,c,d,v,p),m}if(typeof File<"u"&&c instanceof File){const m=new File([c],c.name,{type:c.type});return v.set(c,m),u(m,c,d,v,p),m}if(typeof Blob<"u"&&c instanceof Blob){const m=new Blob([c],{type:c.type});return v.set(c,m),u(m,c,d,v,p),m}if(c instanceof Error){const m=structuredClone(c);return v.set(c,m),m.message=c.message,m.name=c.name,m.stack=c.stack,m.cause=c.cause,m.constructor=c.constructor,u(m,c,d,v,p),m}if(c instanceof Boolean){const m=new Boolean(c.valueOf());return v.set(c,m),u(m,c,d,v,p),m}if(c instanceof Number){const m=new Number(c.valueOf());return v.set(c,m),u(m,c,d,v,p),m}if(c instanceof String){const m=new String(c.valueOf());return v.set(c,m),u(m,c,d,v,p),m}if(typeof c=="object"&&s(c)){const m=Object.create(Object.getPrototypeOf(c));return v.set(c,m),u(m,c,d,v,p),m}return c}function u(c,f,d=c,v,p){const y=[...Object.keys(f),...r.getSymbols(f)];for(let m=0;m<y.length;m++){const h=y[m],b=Object.getOwnPropertyDescriptor(c,h);(b==null||b.writable)&&(c[h]=l(f[h],h,d,v,p))}}function s(c){switch(t.getTag(c)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=o,e.cloneDeepWithImpl=l,e.copyProperties=u})(X0);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=X0;function t(n){return r.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=t})(uk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=H0,t=uk;function n(i){return i=t.cloneDeep(i),a=>r.isMatch(a,i)}e.matches=n})(ok);var fk={},dk={},vk={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=X0,t=yv,n=q0;function i(a,o){return r.cloneDeepWith(a,(l,u,s,c)=>{const f=o==null?void 0:o(l,u,s,c);if(f!==void 0)return f;if(typeof a=="object"){if(t.getTag(a)===n.objectTag&&typeof a.constructor!="function"){const d={};return c.set(a,d),r.copyProperties(d,a,s,c),d}switch(Object.prototype.toString.call(a)){case n.numberTag:case n.stringTag:case n.booleanTag:{const d=new a.constructor(a==null?void 0:a.valueOf());return r.copyProperties(d,a),d}case n.argumentsTag:{const d={};return r.copyProperties(d,a),d.length=a.length,d[Symbol.iterator]=a[Symbol.iterator],d}default:return}}})}e.cloneDeepWith=i})(vk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=vk;function t(n){return r.cloneDeepWith(n)}e.cloneDeep=t})(dk);var pk={},Z0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=/^(?:0|[1-9]\d*)$/;function t(n,i=Number.MAX_SAFE_INTEGER){switch(typeof n){case"number":return Number.isInteger(n)&&n>=0&&n<i;case"symbol":return!1;case"string":return r.test(n)}}e.isIndex=t})(Z0);var hk={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=yv;function t(n){return n!==null&&typeof n=="object"&&r.getTag(n)==="[object Arguments]"}e.isArguments=t})(hk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=z0,t=Z0,n=hk,i=hv;function a(o,l){let u;if(Array.isArray(l)?u=l:typeof l=="string"&&r.isDeepKey(l)&&(o==null?void 0:o[l])==null?u=i.toPath(l):u=[l],u.length===0)return!1;let s=o;for(let c=0;c<u.length;c++){const f=u[c];if((s==null||!Object.hasOwn(s,f))&&!((Array.isArray(s)||n.isArguments(s))&&t.isIndex(f)&&f<s.length))return!1;s=s[f]}return!0}e.has=a})(pk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=H0,t=pv,n=dk,i=vv,a=pk;function o(l,u){switch(typeof l){case"object":{Object.is(l==null?void 0:l.valueOf(),-0)&&(l="-0");break}case"number":{l=t.toKey(l);break}}return u=n.cloneDeep(u),function(s){const c=i.get(s,l);return c===void 0?a.has(s,l):u===void 0?c===void 0:r.isMatch(c,u)}}e.matchesProperty=o})(fk);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=W0,t=ak,n=ok,i=fk;function a(o){if(o==null)return r.identity;switch(typeof o){case"function":return o;case"object":return Array.isArray(o)&&o.length===2?i.matchesProperty(o[0],o[1]):n.matches(o);case"string":case"symbol":case"number":return t.property(o)}}e.iteratee=a})(ik);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=JT,t=ek,n=W0,i=rk,a=ik;function o(l,u=n.identity){return i.isArrayLikeObject(l)?r.uniqBy(Array.from(l),t.ary(a.iteratee(u),1)):[]}e.uniqBy=o})(QT);var Fre=QT.uniqBy;const Vx=it(Fre);function mk(e,r,t){return r===!0?Vx(e,t):typeof r=="function"?Vx(e,r):e}var yk={exports:{}},gk={},bk={exports:{}},wk={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=g;function zre(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Bre=typeof Object.is=="function"?Object.is:zre,Ure=Ho.useState,Wre=Ho.useEffect,Vre=Ho.useLayoutEffect,Hre=Ho.useDebugValue;function Kre(e,r){var t=r(),n=Ure({inst:{value:t,getSnapshot:r}}),i=n[0].inst,a=n[1];return Vre(function(){i.value=t,i.getSnapshot=r,mh(i)&&a({inst:i})},[e,t,r]),Wre(function(){return mh(i)&&a({inst:i}),e(function(){mh(i)&&a({inst:i})})},[e]),Hre(t),t}function mh(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Bre(e,t)}catch{return!0}}function Gre(e,r){return r()}var Yre=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Gre:Kre;wk.useSyncExternalStore=Ho.useSyncExternalStore!==void 0?Ho.useSyncExternalStore:Yre;bk.exports=wk;var Xre=bk.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=g,qre=Xre;function Zre(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Qre=typeof Object.is=="function"?Object.is:Zre,Jre=qre.useSyncExternalStore,ete=gv.useRef,rte=gv.useEffect,tte=gv.useMemo,nte=gv.useDebugValue;gk.useSyncExternalStoreWithSelector=function(e,r,t,n,i){var a=ete(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=tte(function(){function u(v){if(!s){if(s=!0,c=v,v=n(v),i!==void 0&&o.hasValue){var p=o.value;if(i(p,v))return f=p}return f=v}if(p=f,Qre(c,v))return p;var y=n(v);return i!==void 0&&i(p,y)?(c=v,p):(c=v,f=y)}var s=!1,c,f,d=t===void 0?null:t;return[function(){return u(r())},d===null?void 0:function(){return u(d())}]},[r,t,n,i]);var l=Jre(e,a[0],a[1]);return rte(function(){o.hasValue=!0,o.value=l},[l]),nte(l),l};yk.exports=gk;var ite=yk.exports,Q0=g.createContext(null),ate=e=>e,Pe=()=>{var e=g.useContext(Q0);return e?e.store.dispatch:ate},Hc=()=>{},ote=()=>Hc,lte=(e,r)=>e===r;function V(e){var r=g.useContext(Q0),t=g.useMemo(()=>r?n=>{if(n!=null)return e(n)}:Hc,[r,e]);return ite.useSyncExternalStoreWithSelector(r?r.subscription.addNestedSub:ote,r?r.store.getState:Hc,r?r.store.getState:Hc,t,lte)}function ute(e,r=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(r)}function ste(e,r=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(r)}function cte(e,r="expected all items to be functions, instead received the following types: "){if(!e.every(t=>typeof t=="function")){const t=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${r}[${t}]`)}}var Hx=e=>Array.isArray(e)?e:[e];function fte(e){const r=Array.isArray(e[0])?e[0]:e;return cte(r,"createSelector expects all input-selectors to be functions, but received the following types: "),r}function dte(e,r){const t=[],{length:n}=e;for(let i=0;i<n;i++)t.push(e[i].apply(null,r));return t}var vte=class{constructor(e){this.value=e}deref(){return this.value}},pte=typeof WeakRef<"u"?WeakRef:vte,hte=0,Kx=1;function mc(){return{s:hte,v:void 0,o:null,p:null}}function Ek(e,r={}){let t=mc();const{resultEqualityCheck:n}=r;let i,a=0;function o(){var f;let l=t;const{length:u}=arguments;for(let d=0,v=u;d<v;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let y=l.o;y===null&&(l.o=y=new WeakMap);const m=y.get(p);m===void 0?(l=mc(),y.set(p,l)):l=m}else{let y=l.p;y===null&&(l.p=y=new Map);const m=y.get(p);m===void 0?(l=mc(),y.set(p,l)):l=m}}const s=l;let c;if(l.s===Kx)c=l.v;else if(c=e.apply(null,arguments),a++,n){const d=((f=i==null?void 0:i.deref)==null?void 0:f.call(i))??i;d!=null&&n(d,c)&&(c=d,a!==0&&a--),i=typeof c=="object"&&c!==null||typeof c=="function"?new pte(c):c}return s.s=Kx,s.v=c,c}return o.clearCache=()=>{t=mc(),o.resetResultsCount()},o.resultsCount=()=>a,o.resetResultsCount=()=>{a=0},o}function mte(e,...r){const t=typeof e=="function"?{memoize:e,memoizeOptions:r}:e,n=(...i)=>{let a=0,o=0,l,u={},s=i.pop();typeof s=="object"&&(u=s,s=i.pop()),ute(s,`createSelector expects an output function after the inputs, but received: [${typeof s}]`);const c={...t,...u},{memoize:f,memoizeOptions:d=[],argsMemoize:v=Ek,argsMemoizeOptions:p=[],devModeChecks:y={}}=c,m=Hx(d),h=Hx(p),b=fte(i),w=f(function(){return a++,s.apply(null,arguments)},...m),E=v(function(){o++;const S=dte(b,arguments);return l=w.apply(null,S),l},...h);return Object.assign(E,{resultFunc:s,memoizedResultFunc:w,dependencies:b,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>l,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:f,argsMemoize:v})};return Object.assign(n,{withTypes:()=>n}),n}var $=mte(Ek),yte=Object.assign((e,r=$)=>{ste(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const t=Object.keys(e),n=t.map(a=>e[a]);return r(n,(...a)=>a.reduce((o,l,u)=>(o[t[u]]=l,o),{}))},{withTypes:()=>yte}),xk={},Sk={},_k={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(n){return typeof n=="symbol"?1:n===null?2:n===void 0?3:n!==n?4:0}const t=(n,i,a)=>{if(n!==i){const o=r(n),l=r(i);if(o===l&&o===0){if(n<i)return a==="desc"?1:-1;if(n>i)return a==="desc"?-1:1}return a==="desc"?l-o:o-l}return 0};e.compareValues=t})(_k);var Ok={},J0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){return typeof t=="symbol"||t instanceof Symbol}e.isSymbol=r})(J0);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=J0,t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function i(a,o){return Array.isArray(a)?!1:typeof a=="number"||typeof a=="boolean"||a==null||r.isSymbol(a)?!0:typeof a=="string"&&(n.test(a)||!t.test(a))||o!=null&&Object.hasOwn(o,a)}e.isKey=i})(Ok);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=_k,t=Ok,n=hv;function i(a,o,l,u){if(a==null)return[];l=u?void 0:l,Array.isArray(a)||(a=Object.values(a)),Array.isArray(o)||(o=o==null?[null]:[o]),o.length===0&&(o=[null]),Array.isArray(l)||(l=l==null?[]:[l]),l=l.map(v=>String(v));const s=(v,p)=>{let y=v;for(let m=0;m<p.length&&y!=null;++m)y=y[p[m]];return y},c=(v,p)=>p==null||v==null?p:typeof v=="object"&&"key"in v?Object.hasOwn(p,v.key)?p[v.key]:s(p,v.path):typeof v=="function"?v(p):Array.isArray(v)?s(p,v):typeof p=="object"?p[v]:p,f=o.map(v=>(Array.isArray(v)&&v.length===1&&(v=v[0]),v==null||typeof v=="function"||Array.isArray(v)||t.isKey(v)?v:{key:v,path:n.toPath(v)}));return a.map(v=>({original:v,criteria:f.map(p=>c(p,v))})).slice().sort((v,p)=>{for(let y=0;y<f.length;y++){const m=r.compareValues(v.criteria[y],p.criteria[y],l[y]);if(m!==0)return m}return 0}).map(v=>v.original)}e.orderBy=i})(Sk);var $k={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t,n=1){const i=[],a=Math.floor(n),o=(l,u)=>{for(let s=0;s<l.length;s++){const c=l[s];Array.isArray(c)&&u<a?o(c,u+1):i.push(c)}};return o(t,0),i}e.flatten=r})($k);var e1={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=Z0,t=V0,n=K0,i=Y0;function a(o,l,u){return n.isObject(u)&&(typeof l=="number"&&t.isArrayLike(u)&&r.isIndex(l)&&l<u.length||typeof l=="string"&&l in u)?i.isEqualsSameValueZero(u[l],o):!1}e.isIterateeCall=a})(e1);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=Sk,t=$k,n=e1;function i(a,...o){const l=o.length;return l>1&&n.isIterateeCall(a,o[0],o[1])?o=[]:l>2&&n.isIterateeCall(o[0],o[1],o[2])&&(o=[o[0]]),r.orderBy(a,t.flatten(o),["asc"])}e.sortBy=i})(xk);var gte=xk.sortBy;const bv=it(gte);var Pk=e=>e.legend.settings,bte=e=>e.legend.size,wte=e=>e.legend.payload,Ete=$([wte,Pk],(e,r)=>{var{itemSorter:t}=r,n=e.flat(1);return t?bv(n,t):n});function xte(){return V(Ete)}var yc=1;function Ak(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[r,t]=g.useState({height:0,left:0,top:0,width:0}),n=g.useCallback(i=>{if(i!=null){var a=i.getBoundingClientRect(),o={height:a.height,left:a.left,top:a.top,width:a.width};(Math.abs(o.height-r.height)>yc||Math.abs(o.left-r.left)>yc||Math.abs(o.top-r.top)>yc||Math.abs(o.width-r.width)>yc)&&t({height:o.height,left:o.left,top:o.top,width:o.width})}},[r.width,r.height,r.top,r.left,...e]);return[r,n]}function dr(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ste=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gx=Ste,yh=()=>Math.random().toString(36).substring(7).split("").join("."),_te={INIT:`@@redux/INIT${yh()}`,REPLACE:`@@redux/REPLACE${yh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${yh()}`},Lf=_te;function r1(e){if(typeof e!="object"||e===null)return!1;let r=e;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r||Object.getPrototypeOf(e)===null}function Tk(e,r,t){if(typeof e!="function")throw new Error(dr(2));if(typeof r=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(dr(0));if(typeof r=="function"&&typeof t>"u"&&(t=r,r=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(dr(1));return t(Tk)(e,r)}let n=e,i=r,a=new Map,o=a,l=0,u=!1;function s(){o===a&&(o=new Map,a.forEach((m,h)=>{o.set(h,m)}))}function c(){if(u)throw new Error(dr(3));return i}function f(m){if(typeof m!="function")throw new Error(dr(4));if(u)throw new Error(dr(5));let h=!0;s();const b=l++;return o.set(b,m),function(){if(h){if(u)throw new Error(dr(6));h=!1,s(),o.delete(b),a=null}}}function d(m){if(!r1(m))throw new Error(dr(7));if(typeof m.type>"u")throw new Error(dr(8));if(typeof m.type!="string")throw new Error(dr(17));if(u)throw new Error(dr(9));try{u=!0,i=n(i,m)}finally{u=!1}return(a=o).forEach(b=>{b()}),m}function v(m){if(typeof m!="function")throw new Error(dr(10));n=m,d({type:Lf.REPLACE})}function p(){const m=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(dr(11));function b(){const E=h;E.next&&E.next(c())}return b(),{unsubscribe:m(b)}},[Gx](){return this}}}return d({type:Lf.INIT}),{dispatch:d,subscribe:f,getState:c,replaceReducer:v,[Gx]:p}}function Ote(e){Object.keys(e).forEach(r=>{const t=e[r];if(typeof t(void 0,{type:Lf.INIT})>"u")throw new Error(dr(12));if(typeof t(void 0,{type:Lf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(dr(13))})}function kk(e){const r=Object.keys(e),t={};for(let a=0;a<r.length;a++){const o=r[a];typeof e[o]=="function"&&(t[o]=e[o])}const n=Object.keys(t);let i;try{Ote(t)}catch(a){i=a}return function(o={},l){if(i)throw i;let u=!1;const s={};for(let c=0;c<n.length;c++){const f=n[c],d=t[f],v=o[f],p=d(v,l);if(typeof p>"u")throw l&&l.type,new Error(dr(14));s[f]=p,u=u||p!==v}return u=u||n.length!==Object.keys(o).length,u?s:o}}function Df(...e){return e.length===0?r=>r:e.length===1?e[0]:e.reduce((r,t)=>(...n)=>r(t(...n)))}function $te(...e){return r=>(t,n)=>{const i=r(t,n);let a=()=>{throw new Error(dr(15))};const o={getState:i.getState,dispatch:(u,...s)=>a(u,...s)},l=e.map(u=>u(o));return a=Df(...l)(i.dispatch),{...i,dispatch:a}}}function Ck(e){return r1(e)&&"type"in e&&typeof e.type=="string"}var Ik=Symbol.for("immer-nothing"),Yx=Symbol.for("immer-draftable"),jr=Symbol.for("immer-state");function Xt(e,...r){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var vt=Object,Ko=vt.getPrototypeOf,Rf="constructor",wv="prototype",dy="configurable",Ff="enumerable",Kc="writable",Du="value",Jn=e=>!!e&&!!e[jr];function ln(e){var r;return e?jk(e)||xv(e)||!!e[Yx]||!!((r=e[Rf])!=null&&r[Yx])||Sv(e)||_v(e):!1}var Pte=vt[wv][Rf].toString(),Xx=new WeakMap;function jk(e){if(!e||!t1(e))return!1;const r=Ko(e);if(r===null||r===vt[wv])return!0;const t=vt.hasOwnProperty.call(r,Rf)&&r[Rf];if(t===Object)return!0;if(!fo(t))return!1;let n=Xx.get(t);return n===void 0&&(n=Function.toString.call(t),Xx.set(t,n)),n===Pte}function Ev(e,r,t=!0){ys(e)===0?(t?Reflect.ownKeys(e):vt.keys(e)).forEach(i=>{r(i,e[i],e)}):e.forEach((n,i)=>r(i,n,e))}function ys(e){const r=e[jr];return r?r.type_:xv(e)?1:Sv(e)?2:_v(e)?3:0}var qx=(e,r,t=ys(e))=>t===2?e.has(r):vt[wv].hasOwnProperty.call(e,r),vy=(e,r,t=ys(e))=>t===2?e.get(r):e[r],zf=(e,r,t,n=ys(e))=>{n===2?e.set(r,t):n===3?e.add(t):e[r]=t};function Ate(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}var xv=Array.isArray,Sv=e=>e instanceof Map,_v=e=>e instanceof Set,t1=e=>typeof e=="object",fo=e=>typeof e=="function",gh=e=>typeof e=="boolean";function Tte(e){const r=+e;return Number.isInteger(r)&&String(r)===e}var Fn=e=>e.copy_||e.base_,n1=e=>e.modified_?e.copy_:e.base_;function py(e,r){if(Sv(e))return new Map(e);if(_v(e))return new Set(e);if(xv(e))return Array[wv].slice.call(e);const t=jk(e);if(r===!0||r==="class_only"&&!t){const n=vt.getOwnPropertyDescriptors(e);delete n[jr];let i=Reflect.ownKeys(n);for(let a=0;a<i.length;a++){const o=i[a],l=n[o];l[Kc]===!1&&(l[Kc]=!0,l[dy]=!0),(l.get||l.set)&&(n[o]={[dy]:!0,[Kc]:!0,[Ff]:l[Ff],[Du]:e[o]})}return vt.create(Ko(e),n)}else{const n=Ko(e);if(n!==null&&t)return{...e};const i=vt.create(n);return vt.assign(i,e)}}function i1(e,r=!1){return Ov(e)||Jn(e)||!ln(e)||(ys(e)>1&&vt.defineProperties(e,{set:gc,add:gc,clear:gc,delete:gc}),vt.freeze(e),r&&Ev(e,(t,n)=>{i1(n,!0)},!1)),e}function kte(){Xt(2)}var gc={[Du]:kte};function Ov(e){return e===null||!t1(e)?!0:vt.isFrozen(e)}var Bf="MapSet",hy="Patches",Zx="ArrayMethods",Nk={};function Ra(e){const r=Nk[e];return r||Xt(0,e),r}var Qx=e=>!!Nk[e],Ru,Mk=()=>Ru,Cte=(e,r)=>({drafts_:[],parent_:e,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Qx(Bf)?Ra(Bf):void 0,arrayMethodsPlugin_:Qx(Zx)?Ra(Zx):void 0});function Jx(e,r){r&&(e.patchPlugin_=Ra(hy),e.patches_=[],e.inversePatches_=[],e.patchListener_=r)}function my(e){yy(e),e.drafts_.forEach(Ite),e.drafts_=null}function yy(e){e===Ru&&(Ru=e.parent_)}var eS=e=>Ru=Cte(Ru,e);function Ite(e){const r=e[jr];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function rS(e,r){r.unfinalizedDrafts_=r.drafts_.length;const t=r.drafts_[0];if(e!==void 0&&e!==t){t[jr].modified_&&(my(r),Xt(4)),ln(e)&&(e=tS(r,e));const{patchPlugin_:i}=r;i&&i.generateReplacementPatches_(t[jr].base_,e,r)}else e=tS(r,t);return jte(r,e,!0),my(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),e!==Ik?e:void 0}function tS(e,r){if(Ov(r))return r;const t=r[jr];if(!t)return Uf(r,e.handledSet_,e);if(!$v(t,e))return r;if(!t.modified_)return t.base_;if(!t.finalized_){const{callbacks_:n}=t;if(n)for(;n.length>0;)n.pop()(e);Rk(t,e)}return t.copy_}function jte(e,r,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&i1(r,t)}function Lk(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var $v=(e,r)=>e.scope_===r,Nte=[];function Dk(e,r,t,n){const i=Fn(e),a=e.type_;if(n!==void 0&&vy(i,n,a)===r){zf(i,n,t,a);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ev(i,(u,s)=>{if(Jn(s)){const c=l.get(s)||[];c.push(u),l.set(s,c)}})}const o=e.draftLocations_.get(r)??Nte;for(const l of o)zf(i,l,t,a)}function Mte(e,r,t){e.callbacks_.push(function(i){var l;const a=r;if(!a||!$v(a,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(a);const o=n1(a);Dk(e,a.draft_??a,o,t),Rk(a,i)})}function Rk(e,r){var n;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((n=e.assigned_)==null?void 0:n.size)??0)>0)){const{patchPlugin_:i}=r;if(i){const a=i.getPath(e);a&&i.generatePatches_(e,a,r)}Lk(e)}}function Lte(e,r,t){const{scope_:n}=e;if(Jn(t)){const i=t[jr];$v(i,n)&&i.callbacks_.push(function(){Gc(e);const o=n1(i);Dk(e,t,o,r)})}else ln(t)&&e.callbacks_.push(function(){const a=Fn(e);e.type_===3?a.has(t)&&Uf(t,n.handledSet_,n):vy(a,r,e.type_)===t&&n.drafts_.length>1&&(e.assigned_.get(r)??!1)===!0&&e.copy_&&Uf(vy(e.copy_,r,e.type_),n.handledSet_,n)})}function Uf(e,r,t){return!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1||Jn(e)||r.has(e)||!ln(e)||Ov(e)||(r.add(e),Ev(e,(n,i)=>{if(Jn(i)){const a=i[jr];if($v(a,t)){const o=n1(a);zf(e,n,o,e.type_),Lk(a)}}else ln(i)&&Uf(i,r,t)})),e}function Dte(e,r){const t=xv(e),n={type_:t?1:0,scope_:r?r.scope_:Mk(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:r,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=n,a=Wf;t&&(i=[n],a=Fu);const{revoke:o,proxy:l}=Proxy.revocable(i,a);return n.draft_=l,n.revoke_=o,[l,n]}var Wf={get(e,r){if(r===jr)return e;let t=e.scope_.arrayMethodsPlugin_;const n=e.type_===1&&typeof r=="string";if(n&&t!=null&&t.isArrayOperationMethod(r))return t.createMethodInterceptor(e,r);const i=Fn(e);if(!qx(i,r,e.type_))return Rte(e,i,r);const a=i[r];if(e.finalized_||!ln(a)||n&&e.operationMethod&&(t!=null&&t.isMutatingArrayMethod(e.operationMethod))&&Tte(r))return a;if(a===bh(e.base_,r)){Gc(e);const o=e.type_===1?+r:r,l=by(e.scope_,a,e,o);return e.copy_[o]=l}return a},has(e,r){return r in Fn(e)},ownKeys(e){return Reflect.ownKeys(Fn(e))},set(e,r,t){const n=Fk(Fn(e),r);if(n!=null&&n.set)return n.set.call(e.draft_,t),!0;if(!e.modified_){const i=bh(Fn(e),r),a=i==null?void 0:i[jr];if(a&&a.base_===t)return e.copy_[r]=t,e.assigned_.set(r,!1),!0;if(Ate(t,i)&&(t!==void 0||qx(e.base_,r,e.type_)))return!0;Gc(e),gy(e)}return e.copy_[r]===t&&(t!==void 0||r in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[r])||(e.copy_[r]=t,e.assigned_.set(r,!0),Lte(e,r,t)),!0},deleteProperty(e,r){return Gc(e),bh(e.base_,r)!==void 0||r in e.base_?(e.assigned_.set(r,!1),gy(e)):e.assigned_.delete(r),e.copy_&&delete e.copy_[r],!0},getOwnPropertyDescriptor(e,r){const t=Fn(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&{[Kc]:!0,[dy]:e.type_!==1||r!=="length",[Ff]:n[Ff],[Du]:t[r]}},defineProperty(){Xt(11)},getPrototypeOf(e){return Ko(e.base_)},setPrototypeOf(){Xt(12)}},Fu={};for(let e in Wf){let r=Wf[e];Fu[e]=function(){const t=arguments;return t[0]=t[0][0],r.apply(this,t)}}Fu.deleteProperty=function(e,r){return Fu.set.call(this,e,r,void 0)};Fu.set=function(e,r,t){return Wf.set.call(this,e[0],r,t,e[0])};function bh(e,r){const t=e[jr];return(t?Fn(t):e)[r]}function Rte(e,r,t){var i;const n=Fk(r,t);return n?Du in n?n[Du]:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function Fk(e,r){if(!(r in e))return;let t=Ko(e);for(;t;){const n=Object.getOwnPropertyDescriptor(t,r);if(n)return n;t=Ko(t)}}function gy(e){e.modified_||(e.modified_=!0,e.parent_&&gy(e.parent_))}function Gc(e){e.copy_||(e.assigned_=new Map,e.copy_=py(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Fte=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,i)=>{if(fo(t)&&!fo(n)){const o=n;n=t;const l=this;return function(s=o,...c){return l.produce(s,f=>n.call(this,f,...c))}}fo(n)||Xt(6),i!==void 0&&!fo(i)&&Xt(7);let a;if(ln(t)){const o=eS(this),l=by(o,t,void 0);let u=!0;try{a=n(l),u=!1}finally{u?my(o):yy(o)}return Jx(o,i),rS(a,o)}else if(!t||!t1(t)){if(a=n(t),a===void 0&&(a=t),a===Ik&&(a=void 0),this.autoFreeze_&&i1(a,!0),i){const o=[],l=[];Ra(hy).generateReplacementPatches_(t,a,{patches_:o,inversePatches_:l}),i(o,l)}return a}else Xt(1,t)},this.produceWithPatches=(t,n)=>{if(fo(t))return(l,...u)=>this.produceWithPatches(l,s=>t(s,...u));let i,a;return[this.produce(t,n,(l,u)=>{i=l,a=u}),i,a]},gh(r==null?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze),gh(r==null?void 0:r.useStrictShallowCopy)&&this.setUseStrictShallowCopy(r.useStrictShallowCopy),gh(r==null?void 0:r.useStrictIteration)&&this.setUseStrictIteration(r.useStrictIteration)}createDraft(r){ln(r)||Xt(8),Jn(r)&&(r=It(r));const t=eS(this),n=by(t,r,void 0);return n[jr].isManual_=!0,yy(t),n}finishDraft(r,t){const n=r&&r[jr];(!n||!n.isManual_)&&Xt(9);const{scope_:i}=n;return Jx(i,t),rS(void 0,i)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}setUseStrictIteration(r){this.useStrictIteration_=r}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(r,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}n>-1&&(t=t.slice(n+1));const i=Ra(hy).applyPatches_;return Jn(r)?i(r,t):this.produce(r,a=>i(a,t))}};function by(e,r,t,n){const[i,a]=Sv(r)?Ra(Bf).proxyMap_(r,t):_v(r)?Ra(Bf).proxySet_(r,t):Dte(r,t);return((t==null?void 0:t.scope_)??Mk()).drafts_.push(i),a.callbacks_=(t==null?void 0:t.callbacks_)??[],a.key_=n,t&&n!==void 0?Mte(t,a,n):a.callbacks_.push(function(u){var c;(c=u.mapSetPlugin_)==null||c.fixSetContents(a);const{patchPlugin_:s}=u;a.modified_&&s&&s.generatePatches_(a,[],u)}),i}function It(e){return Jn(e)||Xt(10,e),zk(e)}function zk(e){if(!ln(e)||Ov(e))return e;const r=e[jr];let t,n=!0;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,t=py(e,r.scope_.immer_.useStrictShallowCopy_),n=r.scope_.immer_.shouldUseStrictIteration()}else t=py(e,!0);return Ev(t,(i,a)=>{zf(t,i,zk(a))},n),r&&(r.finalized_=!1),t}var zte=new Fte,Bk=zte.produce;function Uk(e){return({dispatch:t,getState:n})=>i=>a=>typeof a=="function"?a(t,n,e):i(a)}var Bte=Uk(),Ute=Uk,Wte=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Df:Df.apply(null,arguments)};function yt(e,r){function t(...n){if(r){let i=r(...n);if(!i)throw new Error(ht(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=n=>Ck(n)&&n.type===e,t}var Wk=class Ql extends Array{constructor(...r){super(...r),Object.setPrototypeOf(this,Ql.prototype)}static get[Symbol.species](){return Ql}concat(...r){return super.concat.apply(this,r)}prepend(...r){return r.length===1&&Array.isArray(r[0])?new Ql(...r[0].concat(this)):new Ql(...r.concat(this))}};function nS(e){return ln(e)?Bk(e,()=>{}):e}function bc(e,r,t){return e.has(r)?e.get(r):e.set(r,t(r)).get(r)}function Vte(e){return typeof e=="boolean"}var Hte=()=>function(r){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=r??{};let o=new Wk;return t&&(Vte(t)?o.push(Bte):o.push(Ute(t.extraArgument))),o},Vk="RTK_autoBatch",_e=()=>e=>({payload:e,meta:{[Vk]:!0}}),iS=e=>r=>{setTimeout(r,e)},Hk=(e={type:"raf"})=>r=>(...t)=>{const n=r(...t);let i=!0,a=!1,o=!1;const l=new Set,u=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:iS(10):e.type==="callback"?e.queueNotification:iS(e.timeout),s=()=>{o=!1,a&&(a=!1,l.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const f=()=>i&&c(),d=n.subscribe(f);return l.add(c),()=>{d(),l.delete(c)}},dispatch(c){var f;try{return i=!((f=c==null?void 0:c.meta)!=null&&f[Vk]),a=!i,a&&(o||(o=!0,u(s))),n.dispatch(c)}finally{i=!0}}})},Kte=e=>function(t){const{autoBatch:n=!0}=t??{};let i=new Wk(e);return n&&i.push(Hk(typeof n=="object"?n:void 0)),i};function Gte(e){const r=Hte(),{reducer:t=void 0,middleware:n,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:l=void 0}=e||{};let u;if(typeof t=="function")u=t;else if(r1(t))u=kk(t);else throw new Error(ht(1));let s;typeof n=="function"?s=n(r):s=r();let c=Df;i&&(c=Wte({trace:!1,...typeof i=="object"&&i}));const f=$te(...s),d=Kte(f);let v=typeof l=="function"?l(d):d();const p=c(...v);return Tk(u,o,p)}function Kk(e){const r={},t=[];let n;const i={addCase(a,o){const l=typeof a=="string"?a:a.type;if(!l)throw new Error(ht(28));if(l in r)throw new Error(ht(29));return r[l]=o,i},addAsyncThunk(a,o){return o.pending&&(r[a.pending.type]=o.pending),o.rejected&&(r[a.rejected.type]=o.rejected),o.fulfilled&&(r[a.fulfilled.type]=o.fulfilled),o.settled&&t.push({matcher:a.settled,reducer:o.settled}),i},addMatcher(a,o){return t.push({matcher:a,reducer:o}),i},addDefaultCase(a){return n=a,i}};return e(i),[r,t,n]}function Yte(e){return typeof e=="function"}function Xte(e,r){let[t,n,i]=Kk(r),a;if(Yte(e))a=()=>nS(e());else{const l=nS(e);a=()=>l}function o(l=a(),u){let s=[t[u.type],...n.filter(({matcher:c})=>c(u)).map(({reducer:c})=>c)];return s.filter(c=>!!c).length===0&&(s=[i]),s.reduce((c,f)=>{if(f)if(Jn(c)){const v=f(c,u);return v===void 0?c:v}else{if(ln(c))return Bk(c,d=>f(d,u));{const d=f(c,u);if(d===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}}return c},l)}return o.getInitialState=a,o}var qte="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Zte=(e=21)=>{let r="",t=e;for(;t--;)r+=qte[Math.random()*64|0];return r},Qte=Symbol.for("rtk-slice-createasyncthunk");function Jte(e,r){return`${e}/${r}`}function ene({creators:e}={}){var t;const r=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Qte];return function(i){const{name:a,reducerPath:o=a}=i;if(!a)throw new Error(ht(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(tne()):i.reducers)||{},u=Object.keys(l),s={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(E,x){const S=typeof E=="string"?E:E.type;if(!S)throw new Error(ht(12));if(S in s.sliceCaseReducersByType)throw new Error(ht(13));return s.sliceCaseReducersByType[S]=x,c},addMatcher(E,x){return s.sliceMatchers.push({matcher:E,reducer:x}),c},exposeAction(E,x){return s.actionCreators[E]=x,c},exposeCaseReducer(E,x){return s.sliceCaseReducersByName[E]=x,c}};u.forEach(E=>{const x=l[E],S={reducerName:E,type:Jte(a,E),createNotation:typeof i.reducers=="function"};ine(x)?one(S,x,c,r):nne(S,x,c)});function f(){const[E={},x=[],S=void 0]=typeof i.extraReducers=="function"?Kk(i.extraReducers):[i.extraReducers],_={...E,...s.sliceCaseReducersByType};return Xte(i.initialState,O=>{for(let P in _)O.addCase(P,_[P]);for(let P of s.sliceMatchers)O.addMatcher(P.matcher,P.reducer);for(let P of x)O.addMatcher(P.matcher,P.reducer);S&&O.addDefaultCase(S)})}const d=E=>E,v=new Map,p=new WeakMap;let y;function m(E,x){return y||(y=f()),y(E,x)}function h(){return y||(y=f()),y.getInitialState()}function b(E,x=!1){function S(O){let P=O[E];return typeof P>"u"&&x&&(P=bc(p,S,h)),P}function _(O=d){const P=bc(v,x,()=>new WeakMap);return bc(P,O,()=>{const T={};for(const[N,A]of Object.entries(i.selectors??{}))T[N]=rne(A,O,()=>bc(p,O,h),x);return T})}return{reducerPath:E,getSelectors:_,get selectors(){return _(S)},selectSlice:S}}const w={name:a,reducer:m,actions:s.actionCreators,caseReducers:s.sliceCaseReducersByName,getInitialState:h,...b(o),injectInto(E,{reducerPath:x,...S}={}){const _=x??o;return E.inject({reducerPath:_,reducer:m},S),{...w,...b(_,!0)}}};return w}}function rne(e,r,t,n){function i(a,...o){let l=r(a);return typeof l>"u"&&n&&(l=t()),e(l,...o)}return i.unwrapped=e,i}var $r=ene();function tne(){function e(r,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:r,...t}}return e.withTypes=()=>e,{reducer(r){return Object.assign({[r.name](...t){return r(...t)}}[r.name],{_reducerDefinitionType:"reducer"})},preparedReducer(r,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:r,reducer:t}},asyncThunk:e}}function nne({type:e,reducerName:r,createNotation:t},n,i){let a,o;if("reducer"in n){if(t&&!ane(n))throw new Error(ht(17));a=n.reducer,o=n.prepare}else a=n;i.addCase(e,a).exposeCaseReducer(r,a).exposeAction(r,o?yt(e,o):yt(e))}function ine(e){return e._reducerDefinitionType==="asyncThunk"}function ane(e){return e._reducerDefinitionType==="reducerWithPrepare"}function one({type:e,reducerName:r},t,n,i){if(!i)throw new Error(ht(18));const{payloadCreator:a,fulfilled:o,pending:l,rejected:u,settled:s,options:c}=t,f=i(e,a,c);n.exposeAction(r,f),o&&n.addCase(f.fulfilled,o),l&&n.addCase(f.pending,l),u&&n.addCase(f.rejected,u),s&&n.addMatcher(f.settled,s),n.exposeCaseReducer(r,{fulfilled:o||wc,pending:l||wc,rejected:u||wc,settled:s||wc})}function wc(){}var lne="task",Gk="listener",Yk="completed",a1="cancelled",une=`task-${a1}`,sne=`task-${Yk}`,wy=`${Gk}-${a1}`,cne=`${Gk}-${Yk}`,Pv=class{constructor(e){hp(this,"name","TaskAbortError");hp(this,"message");this.code=e,this.message=`${lne} ${a1} (reason: ${e})`}},o1=(e,r)=>{if(typeof e!="function")throw new TypeError(ht(32))},Vf=()=>{},Xk=(e,r=Vf)=>(e.catch(r),e),qk=(e,r)=>(e.addEventListener("abort",r,{once:!0}),()=>e.removeEventListener("abort",r)),Pa=e=>{if(e.aborted)throw new Pv(e.reason)};function Zk(e,r){let t=Vf;return new Promise((n,i)=>{const a=()=>i(new Pv(e.reason));if(e.aborted){a();return}t=qk(e,a),r.finally(()=>t()).then(n,i)}).finally(()=>{t=Vf})}var fne=async(e,r)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(t){return{status:t instanceof Pv?"cancelled":"rejected",error:t}}finally{r==null||r()}},Hf=e=>r=>Xk(Zk(e,r).then(t=>(Pa(e),t))),Qk=e=>{const r=Hf(e);return t=>r(new Promise(n=>setTimeout(n,t)))},{assign:jo}=Object,aS={},Av="listenerMiddleware",dne=(e,r)=>{const t=n=>qk(e,()=>n.abort(e.reason));return(n,i)=>{o1(n);const a=new AbortController;t(a);const o=fne(async()=>{Pa(e),Pa(a.signal);const l=await n({pause:Hf(a.signal),delay:Qk(a.signal),signal:a.signal});return Pa(a.signal),l},()=>a.abort(sne));return i!=null&&i.autoJoin&&r.push(o.catch(Vf)),{result:Hf(e)(o),cancel(){a.abort(une)}}}},vne=(e,r)=>{const t=async(n,i)=>{Pa(r);let a=()=>{};const l=[new Promise((u,s)=>{let c=e({predicate:n,effect:(f,d)=>{d.unsubscribe(),u([f,d.getState(),d.getOriginalState()])}});a=()=>{c(),s()}})];i!=null&&l.push(new Promise(u=>setTimeout(u,i,null)));try{const u=await Zk(r,Promise.race(l));return Pa(r),u}finally{a()}};return(n,i)=>Xk(t(n,i))},Jk=e=>{let{type:r,actionCreator:t,matcher:n,predicate:i,effect:a}=e;if(r)i=yt(r).match;else if(t)r=t.type,i=t.match;else if(n)i=n;else if(!i)throw new Error(ht(21));return o1(a),{predicate:i,type:r,effect:a}},eC=jo(e=>{const{type:r,predicate:t,effect:n}=Jk(e);return{id:Zte(),effect:n,type:r,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>eC}),oS=(e,r)=>{const{type:t,effect:n,predicate:i}=Jk(r);return Array.from(e.values()).find(a=>(typeof t=="string"?a.type===t:a.predicate===i)&&a.effect===n)},Ey=e=>{e.pending.forEach(r=>{r.abort(wy)})},pne=(e,r)=>()=>{for(const t of r.keys())Ey(t);e.clear()},lS=(e,r,t)=>{try{e(r,t)}catch(n){setTimeout(()=>{throw n},0)}},rC=jo(yt(`${Av}/add`),{withTypes:()=>rC}),hne=yt(`${Av}/removeAll`),tC=jo(yt(`${Av}/remove`),{withTypes:()=>tC}),mne=(...e)=>{console.error(`${Av}/error`,...e)},gs=(e={})=>{const r=new Map,t=new Map,n=v=>{const p=t.get(v)??0;t.set(v,p+1)},i=v=>{const p=t.get(v)??1;p===1?t.delete(v):t.set(v,p-1)},{extra:a,onError:o=mne}=e;o1(o);const l=v=>(v.unsubscribe=()=>r.delete(v.id),r.set(v.id,v),p=>{v.unsubscribe(),p!=null&&p.cancelActive&&Ey(v)}),u=v=>{const p=oS(r,v)??eC(v);return l(p)};jo(u,{withTypes:()=>u});const s=v=>{const p=oS(r,v);return p&&(p.unsubscribe(),v.cancelActive&&Ey(p)),!!p};jo(s,{withTypes:()=>s});const c=async(v,p,y,m)=>{const h=new AbortController,b=vne(u,h.signal),w=[];try{v.pending.add(h),n(v),await Promise.resolve(v.effect(p,jo({},y,{getOriginalState:m,condition:(E,x)=>b(E,x).then(Boolean),take:b,delay:Qk(h.signal),pause:Hf(h.signal),extra:a,signal:h.signal,fork:dne(h.signal,w),unsubscribe:v.unsubscribe,subscribe:()=>{r.set(v.id,v)},cancelActiveListeners:()=>{v.pending.forEach((E,x,S)=>{E!==h&&(E.abort(wy),S.delete(E))})},cancel:()=>{h.abort(wy),v.pending.delete(h)},throwIfCancelled:()=>{Pa(h.signal)}})))}catch(E){E instanceof Pv||lS(o,E,{raisedBy:"effect"})}finally{await Promise.all(w),h.abort(cne),i(v),v.pending.delete(h)}},f=pne(r,t);return{middleware:v=>p=>y=>{if(!Ck(y))return p(y);if(rC.match(y))return u(y.payload);if(hne.match(y)){f();return}if(tC.match(y))return s(y.payload);let m=v.getState();const h=()=>{if(m===aS)throw new Error(ht(23));return m};let b;try{if(b=p(y),r.size>0){const w=v.getState(),E=Array.from(r.values());for(const x of E){let S=!1;try{S=x.predicate(y,w,m)}catch(_){S=!1,lS(o,_,{raisedBy:"predicate"})}S&&c(x,y,v,h)}}}finally{m=aS}return b},startListening:u,stopListening:s,clearListeners:f}};function ht(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var yne={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},nC=$r({name:"chartLayout",initialState:yne,reducers:{setLayout(e,r){e.layoutType=r.payload},setChartSize(e,r){e.width=r.payload.width,e.height=r.payload.height},setMargin(e,r){var t,n,i,a;e.margin.top=(t=r.payload.top)!==null&&t!==void 0?t:0,e.margin.right=(n=r.payload.right)!==null&&n!==void 0?n:0,e.margin.bottom=(i=r.payload.bottom)!==null&&i!==void 0?i:0,e.margin.left=(a=r.payload.left)!==null&&a!==void 0?a:0},setScale(e,r){e.scale=r.payload}}}),{setMargin:gne,setLayout:bne,setChartSize:wne,setScale:Ene}=nC.actions,xne=nC.reducer;function iC(e,r,t){return Array.isArray(e)&&e&&r+t!==0?e.slice(r,t+1):e}function fe(e){return Number.isFinite(e)}function Tn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function uS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Oo(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?uS(Object(t),!0).forEach(function(n){Sne(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):uS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Sne(e,r,t){return(r=_ne(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _ne(e){var r=One(e,"string");return typeof r=="symbol"?r:r+""}function One(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Be(e,r,t){return Te(e)||Te(r)?t:An(r)?Vo(e,r,t):typeof r=="function"?r(e):t}var $ne=(e,r,t)=>{if(r&&t){var{width:n,height:i}=t,{align:a,verticalAlign:o,layout:l}=r;if((l==="vertical"||l==="horizontal"&&o==="middle")&&a!=="center"&&W(e[a]))return Oo(Oo({},e),{},{[a]:e[a]+(n||0)});if((l==="horizontal"||l==="vertical"&&a==="center")&&o!=="middle"&&W(e[o]))return Oo(Oo({},e),{},{[o]:e[o]+(i||0)})}return e},ui=(e,r)=>e==="horizontal"&&r==="xAxis"||e==="vertical"&&r==="yAxis"||e==="centric"&&r==="angleAxis"||e==="radial"&&r==="radiusAxis",aC=(e,r,t,n)=>{if(n)return e.map(l=>l.coordinate);var i,a,o=e.map(l=>(l.coordinate===r&&(i=!0),l.coordinate===t&&(a=!0),l.coordinate));return i||o.push(r),a||o.push(t),o},oC=(e,r,t)=>{if(!e)return null;var{duplicateDomain:n,type:i,range:a,scale:o,realScaleType:l,isCategorical:u,categoricalDomain:s,tickCount:c,ticks:f,niceTicks:d,axisType:v}=e;if(!o)return null;var p=l==="scaleBand"&&o.bandwidth?o.bandwidth()/2:2,y=i==="category"&&o.bandwidth?o.bandwidth()/p:0;if(y=v==="angleAxis"&&a&&a.length>=2?Ct(a[0]-a[1])*2*y:y,f||d){var m=(f||d||[]).map((h,b)=>{var w=n?n.indexOf(h):h,E=o.map(w);return fe(E)?{coordinate:E+y,value:h,offset:y,index:b}:null}).filter(Xr);return m}return u&&s?s.map((h,b)=>{var w=o.map(h);return fe(w)?{coordinate:w+y,value:h,index:b,offset:y}:null}).filter(Xr):o.ticks&&!t&&c!=null?o.ticks(c).map((h,b)=>{var w=o.map(h);return fe(w)?{coordinate:w+y,value:h,index:b,offset:y}:null}).filter(Xr):o.domain().map((h,b)=>{var w=o.map(h);return fe(w)?{coordinate:w+y,value:n?n[h]:h,index:b,offset:y}:null}).filter(Xr)},Pne=e=>{var r,t=e.length;if(!(t<=0)){var n=(r=e[0])===null||r===void 0?void 0:r.length;if(!(n==null||n<=0))for(var i=0;i<n;++i)for(var a=0,o=0,l=0;l<t;++l){var u=e[l],s=u==null?void 0:u[i];if(s!=null){var c=s[1],f=s[0],d=Qn(c)?f:c;d>=0?(s[0]=a,a+=d,s[1]=a):(s[0]=o,o+=d,s[1]=o)}}}},Ane=e=>{var r,t=e.length;if(!(t<=0)){var n=(r=e[0])===null||r===void 0?void 0:r.length;if(!(n==null||n<=0))for(var i=0;i<n;++i)for(var a=0,o=0;o<t;++o){var l=e[o],u=l==null?void 0:l[i];if(u!=null){var s=Qn(u[1])?u[0]:u[1];s>=0?(u[0]=a,a+=s,u[1]=a):(u[0]=0,u[1]=0)}}}},Tne={sign:Pne,expand:ure,none:La,silhouette:sre,wiggle:cre,positive:Ane},kne=(e,r,t)=>{var n,i=(n=Tne[t])!==null&&n!==void 0?n:La,a=lre().keys(r).value((l,u)=>Number(Be(l,u,0))).order(cy).offset(i),o=a(e);return o.forEach((l,u)=>{l.forEach((s,c)=>{var f=Be(e[c],r[u],0);Array.isArray(f)&&f.length===2&&W(f[0])&&W(f[1])&&(s[0]=f[0],s[1]=f[1])})}),o};function Kf(e){var{axis:r,ticks:t,bandSize:n,entry:i,index:a,dataKey:o}=e;if(r.type==="category"){if(!r.allowDuplicatedCategory&&r.dataKey&&!Te(i[r.dataKey])){var l=YT(t,"value",i[r.dataKey]);if(l)return l.coordinate+n/2}return t!=null&&t[a]?t[a].coordinate+n/2:null}var u=Be(i,Te(o)?r.dataKey:o),s=r.scale.map(u);return W(s)?s:null}var Cne=e=>{var r=e.flat(2).filter(W);return[Math.min(...r),Math.max(...r)]},Ine=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],jne=(e,r,t)=>{if(e!=null)return Ine(Object.keys(e).reduce((n,i)=>{var a=e[i];if(!a)return n;var{stackedData:o}=a,l=o.reduce((u,s)=>{var c=iC(s,r,t),f=Cne(c);return!fe(f[0])||!fe(f[1])?u:[Math.min(u[0],f[0]),Math.max(u[1],f[1])]},[1/0,-1/0]);return[Math.min(l[0],n[0]),Math.max(l[1],n[1])]},[1/0,-1/0]))},sS=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,cS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,Gf=(e,r,t)=>{if(e&&e.scale&&e.scale.bandwidth){var n=e.scale.bandwidth();if(!t||n>0)return n}if(e&&r&&r.length>=2){for(var i=bv(r,c=>c.coordinate),a=1/0,o=1,l=i.length;o<l;o++){var u=i[o],s=i[o-1];a=Math.min(((u==null?void 0:u.coordinate)||0)-((s==null?void 0:s.coordinate)||0),a)}return a===1/0?0:a}return t?void 0:0};function fS(e){var{tooltipEntrySettings:r,dataKey:t,payload:n,value:i,name:a}=e;return Oo(Oo({},r),{},{dataKey:t,payload:n,value:i,name:a})}function Tv(e,r){if(e)return String(e);if(typeof r=="string")return r}var Nne=(e,r)=>{if(r==="horizontal")return e.relativeX;if(r==="vertical")return e.relativeY},Mne=(e,r)=>r==="centric"?e.angle:e.radius,si=e=>e.layout.width,ci=e=>e.layout.height,Lne=e=>e.layout.scale,lC=e=>e.layout.margin,kv=$(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),Cv=$(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),Dne="data-recharts-item-index",uC="data-recharts-item-id",bs=60;function dS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ec(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?dS(Object(t),!0).forEach(function(n){Rne(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Rne(e,r,t){return(r=Fne(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Fne(e){var r=zne(e,"string");return typeof r=="symbol"?r:r+""}function zne(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Bne=e=>e.brush.height;function Une(e){var r=Cv(e);return r.reduce((t,n)=>{if(n.orientation==="left"&&!n.mirror&&!n.hide){var i=typeof n.width=="number"?n.width:bs;return t+i}return t},0)}function Wne(e){var r=Cv(e);return r.reduce((t,n)=>{if(n.orientation==="right"&&!n.mirror&&!n.hide){var i=typeof n.width=="number"?n.width:bs;return t+i}return t},0)}function Vne(e){var r=kv(e);return r.reduce((t,n)=>n.orientation==="top"&&!n.mirror&&!n.hide?t+n.height:t,0)}function Hne(e){var r=kv(e);return r.reduce((t,n)=>n.orientation==="bottom"&&!n.mirror&&!n.hide?t+n.height:t,0)}var br=$([si,ci,lC,Bne,Une,Wne,Vne,Hne,Pk,bte],(e,r,t,n,i,a,o,l,u,s)=>{var c={left:(t.left||0)+i,right:(t.right||0)+a},f={top:(t.top||0)+o,bottom:(t.bottom||0)+l},d=Ec(Ec({},f),c),v=d.bottom;d.bottom+=n,d=$ne(d,u,s);var p=e-d.left-d.right,y=r-d.top-d.bottom;return Ec(Ec({brushBottom:v},d),{},{width:Math.max(p,0),height:Math.max(y,0)})}),Kne=$(br,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),sC=$(si,ci,(e,r)=>({x:0,y:0,width:e,height:r})),Gne=g.createContext(null),Pr=()=>g.useContext(Gne)!=null,Iv=e=>e.brush,jv=$([Iv,br,lC],(e,r,t)=>({height:e.height,x:W(e.x)?e.x:r.left,y:W(e.y)?e.y:r.top+r.height+r.brushBottom-((t==null?void 0:t.bottom)||0),width:W(e.width)?e.width:r.width})),cC={},fC={},dC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t,n,{signal:i,edges:a}={}){let o,l=null;const u=a!=null&&a.includes("leading"),s=a==null||a.includes("trailing"),c=()=>{l!==null&&(t.apply(o,l),o=void 0,l=null)},f=()=>{s&&c(),y()};let d=null;const v=()=>{d!=null&&clearTimeout(d),d=setTimeout(()=>{d=null,f()},n)},p=()=>{d!==null&&(clearTimeout(d),d=null)},y=()=>{p(),o=void 0,l=null},m=()=>{c()},h=function(...b){if(i!=null&&i.aborted)return;o=this,l=b;const w=d==null;v(),u&&w&&c()};return h.schedule=v,h.cancel=y,h.flush=m,i==null||i.addEventListener("abort",y,{once:!0}),h}e.debounce=r})(dC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=dC;function t(n,i=0,a={}){typeof a!="object"&&(a={});const{leading:o=!1,trailing:l=!0,maxWait:u}=a,s=Array(2);o&&(s[0]="leading"),l&&(s[1]="trailing");let c,f=null;const d=r.debounce(function(...y){c=n.apply(this,y),f=null},i,{edges:s}),v=function(...y){return u!=null&&(f===null&&(f=Date.now()),Date.now()-f>=u)?(c=n.apply(this,y),f=Date.now(),d.cancel(),d.schedule(),c):(d.apply(this,y),c)},p=()=>(d.flush(),c);return v.cancel=d.cancel,v.flush=p,v}e.debounce=t})(fC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=fC;function t(n,i=0,a={}){const{leading:o=!0,trailing:l=!0}=a;return r.debounce(n,i,{leading:o,maxWait:i,trailing:l})}e.throttle=t})(cC);var Yne=cC.throttle;const Xne=it(Yne);var Yf=function(r,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(typeof console<"u"&&console.warn&&(t===void 0&&console.warn("LogUtils requires an error message argument"),!r))if(t===void 0)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=0;console.warn(t.replace(/%s/g,()=>i[o++]))}},bn={width:"100%",height:"100%",debounce:0,minWidth:0,initialDimension:{width:-1,height:-1}},vC=(e,r,t)=>{var{width:n=bn.width,height:i=bn.height,aspect:a,maxHeight:o}=t,l=Da(n)?e:Number(n),u=Da(i)?r:Number(i);return a&&a>0&&(l?u=l/a:u&&(l=u*a),o&&u!=null&&u>o&&(u=o)),{calculatedWidth:l,calculatedHeight:u}},qne={width:0,height:0,overflow:"visible"},Zne={width:0,overflowX:"visible"},Qne={height:0,overflowY:"visible"},Jne={},eie=e=>{var{width:r,height:t}=e,n=Da(r),i=Da(t);return n&&i?qne:n?Zne:i?Qne:Jne};function rie(e){var{width:r,height:t,aspect:n}=e,i=r,a=t;return i===void 0&&a===void 0?(i=bn.width,a=bn.height):i===void 0?i=n&&n>0?void 0:bn.width:a===void 0&&(a=n&&n>0?void 0:bn.height),{width:i,height:a}}function xy(){return xy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},xy.apply(null,arguments)}function vS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function pS(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?vS(Object(t),!0).forEach(function(n){tie(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function tie(e,r,t){return(r=nie(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function nie(e){var r=iie(e,"string");return typeof r=="symbol"?r:r+""}function iie(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var pC=g.createContext(bn.initialDimension);function aie(e){return Tn(e.width)&&Tn(e.height)}function hC(e){var{children:r,width:t,height:n}=e,i=g.useMemo(()=>({width:t,height:n}),[t,n]);return aie(i)?g.createElement(pC.Provider,{value:i},r):null}var l1=()=>g.useContext(pC),oie=g.forwardRef((e,r)=>{var{aspect:t,initialDimension:n=bn.initialDimension,width:i,height:a,minWidth:o=bn.minWidth,minHeight:l,maxHeight:u,children:s,debounce:c=bn.debounce,id:f,className:d,onResize:v,style:p={}}=e,y=g.useRef(null),m=g.useRef();m.current=v,g.useImperativeHandle(r,()=>y.current);var[h,b]=g.useState({containerWidth:n.width,containerHeight:n.height}),w=g.useCallback((O,P)=>{b(T=>{var N=Math.round(O),A=Math.round(P);return T.containerWidth===N&&T.containerHeight===A?T:{containerWidth:N,containerHeight:A}})},[]);g.useEffect(()=>{if(y.current==null||typeof ResizeObserver>"u")return qa;var O=A=>{var H,K=A[0];if(K!=null){var{width:ee,height:re}=K.contentRect;w(ee,re),(H=m.current)===null||H===void 0||H.call(m,ee,re)}};c>0&&(O=Xne(O,c,{trailing:!0,leading:!1}));var P=new ResizeObserver(O),{width:T,height:N}=y.current.getBoundingClientRect();return w(T,N),P.observe(y.current),()=>{P.disconnect()}},[w,c]);var{containerWidth:E,containerHeight:x}=h;Yf(!t||t>0,"The aspect(%s) must be greater than zero.",t);var{calculatedWidth:S,calculatedHeight:_}=vC(E,x,{width:i,height:a,aspect:t,maxHeight:u});return Yf(S!=null&&S>0||_!=null&&_>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,S,_,i,a,o,l,t),g.createElement("div",{id:f?"".concat(f):void 0,className:me("recharts-responsive-container",d),style:pS(pS({},p),{},{width:i,height:a,minWidth:o,minHeight:l,maxHeight:u}),ref:y},g.createElement("div",{style:eie({width:i,height:a})},g.createElement(hC,{width:S,height:_},s)))}),mC=g.forwardRef((e,r)=>{var t=l1();if(Tn(t.width)&&Tn(t.height))return e.children;var{width:n,height:i}=rie({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:a,calculatedHeight:o}=vC(void 0,void 0,{width:n,height:i,aspect:e.aspect,maxHeight:e.maxHeight});return W(a)&&W(o)?g.createElement(hC,{width:a,height:o},e.children):g.createElement(oie,xy({},e,{width:n,height:i,ref:r}))});function u1(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var ws=()=>{var e,r=Pr(),t=V(Kne),n=V(jv),i=(e=V(Iv))===null||e===void 0?void 0:e.padding;return!r||!n||!i?t:{width:n.width-i.left-i.right,height:n.height-i.top-i.bottom,x:i.left,y:i.top}},lie={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},yC=()=>{var e;return(e=V(br))!==null&&e!==void 0?e:lie},s1=()=>V(si),c1=()=>V(ci),uie=()=>V(e=>e.layout.margin),Ne=e=>e.layout.layoutType,fl=()=>V(Ne),gC=()=>{var e=fl();if(e==="horizontal"||e==="vertical")return e},bC=e=>{var r=e.layout.layoutType;if(r==="centric"||r==="radial")return r},sie=()=>{var e=fl();return e!==void 0},Es=e=>{var r=Pe(),t=Pr(),{width:n,height:i}=e,a=l1(),o=n,l=i;return a&&(o=a.width>0?a.width:n,l=a.height>0?a.height:i),g.useEffect(()=>{!t&&Tn(o)&&Tn(l)&&r(wne({width:o,height:l}))},[r,t,o,l]),null},wC=Symbol.for("immer-nothing"),hS=Symbol.for("immer-draftable"),gt=Symbol.for("immer-state");function qt(e,...r){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zu=Object.getPrototypeOf;function Go(e){return!!e&&!!e[gt]}function Fa(e){var r;return e?EC(e)||Array.isArray(e)||!!e[hS]||!!((r=e.constructor)!=null&&r[hS])||xs(e)||Mv(e):!1}var cie=Object.prototype.constructor.toString(),mS=new WeakMap;function EC(e){if(!e||typeof e!="object")return!1;const r=Object.getPrototypeOf(e);if(r===null||r===Object.prototype)return!0;const t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let n=mS.get(t);return n===void 0&&(n=Function.toString.call(t),mS.set(t,n)),n===cie}function Xf(e,r,t=!0){Nv(e)===0?(t?Reflect.ownKeys(e):Object.keys(e)).forEach(i=>{r(i,e[i],e)}):e.forEach((n,i)=>r(i,n,e))}function Nv(e){const r=e[gt];return r?r.type_:Array.isArray(e)?1:xs(e)?2:Mv(e)?3:0}function Sy(e,r){return Nv(e)===2?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function xC(e,r,t){const n=Nv(e);n===2?e.set(r,t):n===3?e.add(t):e[r]=t}function fie(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}function xs(e){return e instanceof Map}function Mv(e){return e instanceof Set}function ma(e){return e.copy_||e.base_}function _y(e,r){if(xs(e))return new Map(e);if(Mv(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=EC(e);if(r===!0||r==="class_only"&&!t){const n=Object.getOwnPropertyDescriptors(e);delete n[gt];let i=Reflect.ownKeys(n);for(let a=0;a<i.length;a++){const o=i[a],l=n[o];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(n[o]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[o]})}return Object.create(zu(e),n)}else{const n=zu(e);if(n!==null&&t)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function f1(e,r=!1){return Lv(e)||Go(e)||!Fa(e)||(Nv(e)>1&&Object.defineProperties(e,{set:xc,add:xc,clear:xc,delete:xc}),Object.freeze(e),r&&Object.values(e).forEach(t=>f1(t,!0))),e}function die(){qt(2)}var xc={value:die};function Lv(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var vie={};function za(e){const r=vie[e];return r||qt(0,e),r}var Bu;function SC(){return Bu}function pie(e,r){return{drafts_:[],parent_:e,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function yS(e,r){r&&(za("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=r)}function Oy(e){$y(e),e.drafts_.forEach(hie),e.drafts_=null}function $y(e){e===Bu&&(Bu=e.parent_)}function gS(e){return Bu=pie(Bu,e)}function hie(e){const r=e[gt];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function bS(e,r){r.unfinalizedDrafts_=r.drafts_.length;const t=r.drafts_[0];return e!==void 0&&e!==t?(t[gt].modified_&&(Oy(r),qt(4)),Fa(e)&&(e=qf(r,e),r.parent_||Zf(r,e)),r.patches_&&za("Patches").generateReplacementPatches_(t[gt].base_,e,r.patches_,r.inversePatches_)):e=qf(r,t,[]),Oy(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),e!==wC?e:void 0}function qf(e,r,t){if(Lv(r))return r;const n=e.immer_.shouldUseStrictIteration(),i=r[gt];if(!i)return Xf(r,(a,o)=>wS(e,i,r,a,o,t),n),r;if(i.scope_!==e)return r;if(!i.modified_)return Zf(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const a=i.copy_;let o=a,l=!1;i.type_===3&&(o=new Set(a),a.clear(),l=!0),Xf(o,(u,s)=>wS(e,i,a,u,s,t,l),n),Zf(e,a,!1),t&&e.patches_&&za("Patches").generatePatches_(i,t,e.patches_,e.inversePatches_)}return i.copy_}function wS(e,r,t,n,i,a,o){if(i==null||typeof i!="object"&&!o)return;const l=Lv(i);if(!(l&&!o)){if(Go(i)){const u=a&&r&&r.type_!==3&&!Sy(r.assigned_,n)?a.concat(n):void 0,s=qf(e,i,u);if(xC(t,n,s),Go(s))e.canAutoFreeze_=!1;else return}else o&&t.add(i);if(Fa(i)&&!l){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||r&&r.base_&&r.base_[n]===i&&l)return;qf(e,i),(!r||!r.scope_.parent_)&&typeof n!="symbol"&&(xs(t)?t.has(n):Object.prototype.propertyIsEnumerable.call(t,n))&&Zf(e,i)}}}function Zf(e,r,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&f1(r,t)}function mie(e,r){const t=Array.isArray(e),n={type_:t?1:0,scope_:r?r.scope_:SC(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=d1;t&&(i=[n],a=Uu);const{revoke:o,proxy:l}=Proxy.revocable(i,a);return n.draft_=l,n.revoke_=o,l}var d1={get(e,r){if(r===gt)return e;const t=ma(e);if(!Sy(t,r))return yie(e,t,r);const n=t[r];return e.finalized_||!Fa(n)?n:n===wh(e.base_,r)?(Eh(e),e.copy_[r]=Ay(n,e)):n},has(e,r){return r in ma(e)},ownKeys(e){return Reflect.ownKeys(ma(e))},set(e,r,t){const n=_C(ma(e),r);if(n!=null&&n.set)return n.set.call(e.draft_,t),!0;if(!e.modified_){const i=wh(ma(e),r),a=i==null?void 0:i[gt];if(a&&a.base_===t)return e.copy_[r]=t,e.assigned_[r]=!1,!0;if(fie(t,i)&&(t!==void 0||Sy(e.base_,r)))return!0;Eh(e),Py(e)}return e.copy_[r]===t&&(t!==void 0||r in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[r])||(e.copy_[r]=t,e.assigned_[r]=!0),!0},deleteProperty(e,r){return wh(e.base_,r)!==void 0||r in e.base_?(e.assigned_[r]=!1,Eh(e),Py(e)):delete e.assigned_[r],e.copy_&&delete e.copy_[r],!0},getOwnPropertyDescriptor(e,r){const t=ma(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&{writable:!0,configurable:e.type_!==1||r!=="length",enumerable:n.enumerable,value:t[r]}},defineProperty(){qt(11)},getPrototypeOf(e){return zu(e.base_)},setPrototypeOf(){qt(12)}},Uu={};Xf(d1,(e,r)=>{Uu[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}});Uu.deleteProperty=function(e,r){return Uu.set.call(this,e,r,void 0)};Uu.set=function(e,r,t){return d1.set.call(this,e[0],r,t,e[0])};function wh(e,r){const t=e[gt];return(t?ma(t):e)[r]}function yie(e,r,t){var i;const n=_C(r,t);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function _C(e,r){if(!(r in e))return;let t=zu(e);for(;t;){const n=Object.getOwnPropertyDescriptor(t,r);if(n)return n;t=zu(t)}}function Py(e){e.modified_||(e.modified_=!0,e.parent_&&Py(e.parent_))}function Eh(e){e.copy_||(e.copy_=_y(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var gie=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(r,t,n)=>{if(typeof r=="function"&&typeof t!="function"){const a=t;t=r;const o=this;return function(u=a,...s){return o.produce(u,c=>t.call(this,c,...s))}}typeof t!="function"&&qt(6),n!==void 0&&typeof n!="function"&&qt(7);let i;if(Fa(r)){const a=gS(this),o=Ay(r,void 0);let l=!0;try{i=t(o),l=!1}finally{l?Oy(a):$y(a)}return yS(a,n),bS(i,a)}else if(!r||typeof r!="object"){if(i=t(r),i===void 0&&(i=r),i===wC&&(i=void 0),this.autoFreeze_&&f1(i,!0),n){const a=[],o=[];za("Patches").generateReplacementPatches_(r,i,a,o),n(a,o)}return i}else qt(1,r)},this.produceWithPatches=(r,t)=>{if(typeof r=="function")return(o,...l)=>this.produceWithPatches(o,u=>r(u,...l));let n,i;return[this.produce(r,t,(o,l)=>{n=o,i=l}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof(e==null?void 0:e.useStrictIteration)=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Fa(e)||qt(8),Go(e)&&(e=bie(e));const r=gS(this),t=Ay(e,void 0);return t[gt].isManual_=!0,$y(r),t}finishDraft(e,r){const t=e&&e[gt];(!t||!t.isManual_)&&qt(9);const{scope_:n}=t;return yS(n,r),bS(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,r){let t;for(t=r.length-1;t>=0;t--){const i=r[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(r=r.slice(t+1));const n=za("Patches").applyPatches_;return Go(e)?n(e,r):this.produce(e,i=>n(i,r))}};function Ay(e,r){const t=xs(e)?za("MapSet").proxyMap_(e,r):Mv(e)?za("MapSet").proxySet_(e,r):mie(e,r);return(r?r.scope_:SC()).drafts_.push(t),t}function bie(e){return Go(e)||qt(10,e),OC(e)}function OC(e){if(!Fa(e)||Lv(e))return e;const r=e[gt];let t,n=!0;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,t=_y(e,r.scope_.immer_.useStrictShallowCopy_),n=r.scope_.immer_.shouldUseStrictIteration()}else t=_y(e,!0);return Xf(t,(i,a)=>{xC(t,i,OC(a))},n),r&&(r.finalized_=!1),t}var wie=new gie;wie.produce;var Eie={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},$C=$r({name:"legend",initialState:Eie,reducers:{setLegendSize(e,r){e.size.width=r.payload.width,e.size.height=r.payload.height},setLegendSettings(e,r){e.settings.align=r.payload.align,e.settings.layout=r.payload.layout,e.settings.verticalAlign=r.payload.verticalAlign,e.settings.itemSorter=r.payload.itemSorter},addLegendPayload:{reducer(e,r){e.payload.push(r.payload)},prepare:_e()},replaceLegendPayload:{reducer(e,r){var{prev:t,next:n}=r.payload,i=It(e).payload.indexOf(t);i>-1&&(e.payload[i]=n)},prepare:_e()},removeLegendPayload:{reducer(e,r){var t=It(e).payload.indexOf(r.payload);t>-1&&e.payload.splice(t,1)},prepare:_e()}}}),{setLegendSize:ES,setLegendSettings:xie,addLegendPayload:Sie,replaceLegendPayload:_ie,removeLegendPayload:Oie}=$C.actions,$ie=$C.reducer,Pie={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=g;function Aie(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Tie=typeof Object.is=="function"?Object.is:Aie,kie=Ss.useSyncExternalStore,Cie=Ss.useRef,Iie=Ss.useEffect,jie=Ss.useMemo,Nie=Ss.useDebugValue;Pie.useSyncExternalStoreWithSelector=function(e,r,t,n,i){var a=Cie(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=jie(function(){function u(v){if(!s){if(s=!0,c=v,v=n(v),i!==void 0&&o.hasValue){var p=o.value;if(i(p,v))return f=p}return f=v}if(p=f,Tie(c,v))return p;var y=n(v);return i!==void 0&&i(p,y)?(c=v,p):(c=v,f=y)}var s=!1,c,f,d=t===void 0?null:t;return[function(){return u(r())},d===null?void 0:function(){return u(d())}]},[r,t,n,i]);var l=kie(e,a[0],a[1]);return Iie(function(){o.hasValue=!0,o.value=l},[l]),Nie(l),l};function Mie(e){e()}function Lie(){let e=null,r=null;return{clear(){e=null,r=null},notify(){Mie(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(t){let n=!0;const i=r={callback:t,next:null,prev:r};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var xS={notify(){},get:()=>[]};function Die(e,r){let t,n=xS,i=0,a=!1;function o(y){c();const m=n.subscribe(y);let h=!1;return()=>{h||(h=!0,m(),f())}}function l(){n.notify()}function u(){p.onStateChange&&p.onStateChange()}function s(){return a}function c(){i++,t||(t=e.subscribe(u),n=Lie())}function f(){i--,t&&i===0&&(t(),t=void 0,n.clear(),n=xS)}function d(){a||(a=!0,c())}function v(){a&&(a=!1,f())}const p={addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:u,isSubscribed:s,trySubscribe:d,tryUnsubscribe:v,getListeners:()=>n};return p}var Rie=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fie=Rie(),zie=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Bie=zie(),Uie=()=>Fie||Bie?g.useLayoutEffect:g.useEffect,Wie=Uie();function SS(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function Vie(e,r){if(SS(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(!Object.prototype.hasOwnProperty.call(r,t[i])||!SS(e[t[i]],r[t[i]]))return!1;return!0}var xh=Symbol.for("react-redux-context"),Sh=typeof globalThis<"u"?globalThis:{};function Hie(){if(!g.createContext)return{};const e=Sh[xh]??(Sh[xh]=new Map);let r=e.get(g.createContext);return r||(r=g.createContext(null),e.set(g.createContext,r)),r}var Kie=Hie();function Gie(e){const{children:r,context:t,serverState:n,store:i}=e,a=g.useMemo(()=>{const u=Die(i);return{store:i,subscription:u,getServerState:n?()=>n:void 0}},[i,n]),o=g.useMemo(()=>i.getState(),[i]);Wie(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),o!==i.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,o]);const l=t||Kie;return g.createElement(l.Provider,{value:a},r)}var Yie=Gie,Xie=new Set(["axisLine","tickLine","activeBar","activeDot","activeLabel","activeShape","allowEscapeViewBox","background","cursor","dot","label","line","margin","padding","position","shape","style","tick","wrapperStyle","radius","throttledEvents"]);function qie(e,r){return e==null&&r==null?!0:typeof e=="number"&&typeof r=="number"?e===r||e!==e&&r!==r:e===r}function dl(e,r){var t=new Set([...Object.keys(e),...Object.keys(r)]);for(var n of t)if(Xie.has(n)){if(e[n]==null&&r[n]==null)continue;if(!Vie(e[n],r[n]))return!1}else if(!qie(e[n],r[n]))return!1;return!0}var Zie=["contextPayload"];function Ty(){return Ty=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ty.apply(null,arguments)}function _S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Yo(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?_S(Object(t),!0).forEach(function(n){Qie(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_S(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Qie(e,r,t){return(r=Jie(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Jie(e){var r=eae(e,"string");return typeof r=="symbol"?r:r+""}function eae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function rae(e,r){if(e==null)return{};var t,n,i=tae(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function tae(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function nae(e){return e.value}function iae(e){var{contextPayload:r}=e,t=rae(e,Zie),n=mk(r,e.payloadUniqBy,nae),i=Yo(Yo({},t),{},{payload:n});return g.isValidElement(e.content)?g.cloneElement(e.content,i):typeof e.content=="function"?g.createElement(e.content,i):g.createElement(Rre,i)}function aae(e,r,t,n,i,a){var{layout:o,align:l,verticalAlign:u}=r,s,c;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(l==="center"&&o==="vertical"?s={left:((n||0)-a.width)/2}:s=l==="right"?{right:t&&t.right||0}:{left:t&&t.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(u==="middle"?c={top:((i||0)-a.height)/2}:c=u==="bottom"?{bottom:t&&t.bottom||0}:{top:t&&t.top||0}),Yo(Yo({},s),c)}function oae(e){var r=Pe();return g.useEffect(()=>{r(xie(e))},[r,e]),null}function lae(e){var r=Pe();return g.useEffect(()=>(r(ES(e)),()=>{r(ES({width:0,height:0}))}),[r,e]),null}function uae(e,r,t,n){return e==="vertical"&&r!=null?{height:r}:e==="horizontal"?{width:t||n}:null}var sae={align:"center",iconSize:14,inactiveColor:"#ccc",itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"};function cae(e){var r=ur(e,sae),t=xte(),n=Cee(),i=uie(),{width:a,height:o,wrapperStyle:l,portal:u}=r,[s,c]=Ak([t]),f=s1(),d=c1();if(f==null||d==null)return null;var v=f-((i==null?void 0:i.left)||0)-((i==null?void 0:i.right)||0),p=uae(r.layout,o,a,v),y=u?l:Yo(Yo({position:"absolute",width:(p==null?void 0:p.width)||a||"auto",height:(p==null?void 0:p.height)||o||"auto"},aae(l,r,i,f,d,s)),l),m=u??n;if(m==null||t==null)return null;var h=g.createElement("div",{className:"recharts-legend-wrapper",style:y,ref:c},g.createElement(oae,{layout:r.layout,align:r.align,verticalAlign:r.verticalAlign,itemSorter:r.itemSorter}),!u&&g.createElement(lae,{width:s.width,height:s.height}),g.createElement(iae,Ty({},r,p,{margin:i,chartWidth:f,chartHeight:d,contextPayload:t})));return Ud.createPortal(h,m)}var v1=g.memo(cae,dl);v1.displayName="Legend";function ky(){return ky=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ky.apply(null,arguments)}function OS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Dl(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?OS(Object(t),!0).forEach(function(n){fae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function fae(e,r,t){return(r=dae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function dae(e){var r=vae(e,"string");return typeof r=="symbol"?r:r+""}function vae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function pae(e){return Array.isArray(e)&&An(e[0])&&An(e[1])?e.join(" ~ "):e}var io={separator:" : ",contentStyle:{margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},itemStyle:{display:"block",paddingTop:4,paddingBottom:4,color:"#000"},labelStyle:{},accessibilityLayer:!1};function hae(e,r){return r==null?e:bv(e,r)}var mae=e=>{var{separator:r=io.separator,contentStyle:t,itemStyle:n,labelStyle:i=io.labelStyle,payload:a,formatter:o,itemSorter:l,wrapperClassName:u,labelClassName:s,label:c,labelFormatter:f,accessibilityLayer:d=io.accessibilityLayer}=e,v=()=>{if(a&&a.length){var x={padding:0,margin:0},S=hae(a,l),_=S.map((O,P)=>{if(O.type==="none")return null;var T=O.formatter||o||pae,{value:N,name:A}=O,H=N,K=A;if(T){var ee=T(N,A,O,P,a);if(Array.isArray(ee))[H,K]=ee;else if(ee!=null)H=ee;else return null}var re=Dl(Dl({},io.itemStyle),{},{color:O.color||io.itemStyle.color},n);return g.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(P),style:re},An(K)?g.createElement("span",{className:"recharts-tooltip-item-name"},K):null,An(K)?g.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,g.createElement("span",{className:"recharts-tooltip-item-value"},H),g.createElement("span",{className:"recharts-tooltip-item-unit"},O.unit||""))});return g.createElement("ul",{className:"recharts-tooltip-item-list",style:x},_)}return null},p=Dl(Dl({},io.contentStyle),t),y=Dl({margin:0},i),m=!Te(c),h=m?c:"",b=me("recharts-default-tooltip",u),w=me("recharts-tooltip-label",s);m&&f&&a!==void 0&&a!==null&&(h=f(c,a));var E=d?{role:"status","aria-live":"assertive"}:{};return g.createElement("div",ky({className:b,style:p},E),g.createElement("p",{className:w,style:y},g.isValidElement(h)?h:"".concat(h)),v())},Rl="recharts-tooltip-wrapper",yae={visibility:"hidden"};function gae(e){var{coordinate:r,translateX:t,translateY:n}=e;return me(Rl,{["".concat(Rl,"-right")]:W(t)&&r&&W(r.x)&&t>=r.x,["".concat(Rl,"-left")]:W(t)&&r&&W(r.x)&&t<r.x,["".concat(Rl,"-bottom")]:W(n)&&r&&W(r.y)&&n>=r.y,["".concat(Rl,"-top")]:W(n)&&r&&W(r.y)&&n<r.y})}function $S(e){var{allowEscapeViewBox:r,coordinate:t,key:n,offset:i,position:a,reverseDirection:o,tooltipDimension:l,viewBox:u,viewBoxDimension:s}=e;if(a&&W(a[n]))return a[n];var c=t[n]-l-(i>0?i:0),f=t[n]+i;if(r[n])return o[n]?c:f;var d=u[n];if(d==null)return 0;if(o[n]){var v=c,p=d;return v<p?Math.max(f,d):Math.max(c,d)}if(s==null)return 0;var y=f+l,m=d+s;return y>m?Math.max(c,d):Math.max(f,d)}function bae(e){var{translateX:r,translateY:t,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(r,"px, ").concat(t,"px, 0)"):"translate(".concat(r,"px, ").concat(t,"px)")}}function wae(e){var{allowEscapeViewBox:r,coordinate:t,offsetTop:n,offsetLeft:i,position:a,reverseDirection:o,tooltipBox:l,useTranslate3d:u,viewBox:s}=e,c,f,d;return l.height>0&&l.width>0&&t?(f=$S({allowEscapeViewBox:r,coordinate:t,key:"x",offset:i,position:a,reverseDirection:o,tooltipDimension:l.width,viewBox:s,viewBoxDimension:s.width}),d=$S({allowEscapeViewBox:r,coordinate:t,key:"y",offset:n,position:a,reverseDirection:o,tooltipDimension:l.height,viewBox:s,viewBoxDimension:s.height}),c=bae({translateX:f,translateY:d,useTranslate3d:u})):c=yae,{cssProperties:c,cssClasses:gae({translateX:f,translateY:d,coordinate:t})}}var Eae=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),_s={devToolsEnabled:!0,isSsr:Eae()};function PC(){var[e,r]=g.useState(()=>_s.isSsr||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return g.useEffect(()=>{if(window.matchMedia){var t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>{r(t.matches)};return t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}}},[]),e}function PS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ao(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?PS(Object(t),!0).forEach(function(n){xae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function xae(e,r,t){return(r=Sae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Sae(e){var r=_ae(e,"string");return typeof r=="symbol"?r:r+""}function _ae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Oae(e){if(!(e.prefersReducedMotion&&e.isAnimationActive==="auto")&&e.isAnimationActive&&e.active)return"transform ".concat(e.animationDuration,"ms ").concat(e.animationEasing)}function $ae(e){var r,t,n,i,a,o,l=PC(),[u,s]=g.useState(()=>({dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}));g.useEffect(()=>{var p=y=>{if(y.key==="Escape"){var m,h,b,w;s({dismissed:!0,dismissedAtCoordinate:{x:(m=(h=e.coordinate)===null||h===void 0?void 0:h.x)!==null&&m!==void 0?m:0,y:(b=(w=e.coordinate)===null||w===void 0?void 0:w.y)!==null&&b!==void 0?b:0}})}};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[(r=e.coordinate)===null||r===void 0?void 0:r.x,(t=e.coordinate)===null||t===void 0?void 0:t.y]),u.dismissed&&(((n=(i=e.coordinate)===null||i===void 0?void 0:i.x)!==null&&n!==void 0?n:0)!==u.dismissedAtCoordinate.x||((a=(o=e.coordinate)===null||o===void 0?void 0:o.y)!==null&&a!==void 0?a:0)!==u.dismissedAtCoordinate.y)&&s(ao(ao({},u),{},{dismissed:!1}));var{cssClasses:c,cssProperties:f}=wae({allowEscapeViewBox:e.allowEscapeViewBox,coordinate:e.coordinate,offsetLeft:typeof e.offset=="number"?e.offset:e.offset.x,offsetTop:typeof e.offset=="number"?e.offset:e.offset.y,position:e.position,reverseDirection:e.reverseDirection,tooltipBox:{height:e.lastBoundingBox.height,width:e.lastBoundingBox.width},useTranslate3d:e.useTranslate3d,viewBox:e.viewBox}),d=e.hasPortalFromProps?{}:ao(ao({transition:Oae({prefersReducedMotion:l,isAnimationActive:e.isAnimationActive,active:e.active,animationDuration:e.animationDuration,animationEasing:e.animationEasing})},f),{},{pointerEvents:"none",position:"absolute",top:0,left:0}),v=ao(ao({},d),{},{visibility:!u.dismissed&&e.active&&e.hasPayload?"visible":"hidden"},e.wrapperStyle);return g.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:c,style:v,ref:e.innerRef},e.children)}var Pae=g.memo($ae),AC=()=>{var e;return(e=V(r=>r.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function Cy(){return Cy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Cy.apply(null,arguments)}function AS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function TS(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?AS(Object(t),!0).forEach(function(n){Aae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Aae(e,r,t){return(r=Tae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Tae(e){var r=kae(e,"string");return typeof r=="symbol"?r:r+""}function kae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var kS={curveBasisClosed:qee,curveBasisOpen:Zee,curveBasis:Xee,curveBumpX:Mee,curveBumpY:Lee,curveLinearClosed:Qee,curveLinear:fv,curveMonotoneX:Jee,curveMonotoneY:ere,curveNatural:rre,curveStep:tre,curveStepAfter:ire,curveStepBefore:nre},Qf=e=>fe(e.x)&&fe(e.y),CS=e=>e.base!=null&&Qf(e.base)&&Qf(e),Fl=e=>e.x,zl=e=>e.y,Cae=(e,r)=>{if(typeof e=="function")return e;var t="curve".concat(ms(e));if((t==="curveMonotone"||t==="curveBump")&&r){var n=kS["".concat(t).concat(r==="vertical"?"Y":"X")];if(n)return n}return kS[t]||fv},IS={connectNulls:!1,type:"linear"},Iae=e=>{var{type:r=IS.type,points:t=[],baseLine:n,layout:i,connectNulls:a=IS.connectNulls}=e,o=Cae(r,i),l=a?t.filter(Qf):t;if(Array.isArray(n)){var u,s=t.map((p,y)=>TS(TS({},p),{},{base:n[y]}));i==="vertical"?u=hc().y(zl).x1(Fl).x0(p=>p.base.x):u=hc().x(Fl).y1(zl).y0(p=>p.base.y);var c=u.defined(CS).curve(o),f=a?s.filter(CS):s;return c(f)}var d;i==="vertical"&&W(n)?d=hc().y(zl).x1(Fl).x0(n):W(n)?d=hc().x(Fl).y1(zl).y0(n):d=NT().x(Fl).y(zl);var v=d.defined(Qf).curve(o);return v(l)},p1=e=>{var{className:r,points:t,path:n,pathRef:i}=e,a=fl();if((!t||!t.length)&&!n)return null;var o={type:e.type,points:e.points,baseLine:e.baseLine,layout:e.layout||a,connectNulls:e.connectNulls},l=t&&t.length?Iae(o):n;return g.createElement("path",Cy({},Ft(e),B0(e),{className:me("recharts-curve",r),d:l===null?void 0:l,ref:i}))},jae=["x","y","top","left","width","height","className"];function Iy(){return Iy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Iy.apply(null,arguments)}function jS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Nae(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?jS(Object(t),!0).forEach(function(n){Mae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Mae(e,r,t){return(r=Lae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Lae(e){var r=Dae(e,"string");return typeof r=="symbol"?r:r+""}function Dae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Rae(e,r){if(e==null)return{};var t,n,i=Fae(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Fae(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var zae=(e,r,t,n,i,a)=>"M".concat(e,",").concat(i,"v").concat(n,"M").concat(a,",").concat(r,"h").concat(t),Bae=e=>{var{x:r=0,y:t=0,top:n=0,left:i=0,width:a=0,height:o=0,className:l}=e,u=Rae(e,jae),s=Nae({x:r,y:t,top:n,left:i,width:a,height:o},u);return!W(r)||!W(t)||!W(a)||!W(o)||!W(n)||!W(i)?null:g.createElement("path",Iy({},Ir(s),{className:me("recharts-cross",l),d:zae(r,t,a,o,n,i)}))};function Uae(e,r,t,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?r.x-i:t.left+.5,y:e==="horizontal"?t.top+.5:r.y-i,width:e==="horizontal"?n:t.width-1,height:e==="horizontal"?t.height-1:n}}function NS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function MS(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?NS(Object(t),!0).forEach(function(n){Wae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):NS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Wae(e,r,t){return(r=Vae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Vae(e){var r=Hae(e,"string");return typeof r=="symbol"?r:r+""}function Hae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Kae=e=>e.replace(/([A-Z])/g,r=>"-".concat(r.toLowerCase())),TC=(e,r,t)=>e.map(n=>"".concat(Kae(n)," ").concat(r,"ms ").concat(t)).join(","),Gae=(e,r)=>[Object.keys(e),Object.keys(r)].reduce((t,n)=>t.filter(i=>n.includes(i))),Wu=(e,r)=>Object.keys(r).reduce((t,n)=>MS(MS({},t),{},{[n]:e(n,r[n])}),{});function LS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Je(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?LS(Object(t),!0).forEach(function(n){Yae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):LS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Yae(e,r,t){return(r=Xae(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Xae(e){var r=qae(e,"string");return typeof r=="symbol"?r:r+""}function qae(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Jf=(e,r,t)=>e+(r-e)*t,jy=e=>{var{from:r,to:t}=e;return r!==t},kC=(e,r,t)=>{var n=Wu((i,a)=>{if(jy(a)){var[o,l]=e(a.from,a.to,a.velocity);return Je(Je({},a),{},{from:o,velocity:l})}return a},r);return t<1?Wu((i,a)=>jy(a)&&n[i]!=null?Je(Je({},a),{},{velocity:Jf(a.velocity,n[i].velocity,t),from:Jf(a.from,n[i].from,t)}):a,r):kC(e,n,t-1)};function Zae(e,r,t,n,i,a){var o,l=n.reduce((d,v)=>Je(Je({},d),{},{[v]:{from:e[v],velocity:0,to:r[v]}}),{}),u=()=>Wu((d,v)=>v.from,l),s=()=>!Object.values(l).filter(jy).length,c=null,f=d=>{o||(o=d);var v=d-o,p=v/t.dt;l=kC(t,l,p),i(Je(Je(Je({},e),r),u())),o=d,s()||(c=a.setTimeout(f))};return()=>(c=a.setTimeout(f),()=>{var d;(d=c)===null||d===void 0||d()})}function Qae(e,r,t,n,i,a,o){var l=null,u=i.reduce((f,d)=>{var v=e[d],p=r[d];return v==null||p==null?f:Je(Je({},f),{},{[d]:[v,p]})},{}),s,c=f=>{s||(s=f);var d=(f-s)/n,v=Wu((y,m)=>Jf(...m,t(d)),u);if(a(Je(Je(Je({},e),r),v)),d<1)l=o.setTimeout(c);else{var p=Wu((y,m)=>Jf(...m,t(1)),u);a(Je(Je(Je({},e),r),p))}};return()=>(l=o.setTimeout(c),()=>{var f;(f=l)===null||f===void 0||f()})}const Jae=(e,r,t,n,i,a)=>{var o=Gae(e,r);return t==null?()=>(i(Je(Je({},e),r)),()=>{}):t.isStepper===!0?Zae(e,r,t,o,i,a):Qae(e,r,t,n,o,i,a)};var ed=1e-4,CC=(e,r)=>[0,3*e,3*r-6*e,3*e-3*r+1],IC=(e,r)=>e.map((t,n)=>t*r**n).reduce((t,n)=>t+n),DS=(e,r)=>t=>{var n=CC(e,r);return IC(n,t)},eoe=(e,r)=>t=>{var n=CC(e,r),i=[...n.map((a,o)=>a*o).slice(1),0];return IC(i,t)},roe=e=>{var r,t=e.split("(");if(t.length!==2||t[0]!=="cubic-bezier")return null;var n=(r=t[1])===null||r===void 0||(r=r.split(")")[0])===null||r===void 0?void 0:r.split(",");if(n==null||n.length!==4)return null;var i=n.map(a=>parseFloat(a));return[i[0],i[1],i[2],i[3]]},toe=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if(t.length===1)switch(t[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var i=roe(t[0]);if(i)return i}}return t.length===4?t:[0,0,1,1]},noe=(e,r,t,n)=>{var i=DS(e,t),a=DS(r,n),o=eoe(e,t),l=s=>s>1?1:s<0?0:s,u=s=>{for(var c=s>1?1:s,f=c,d=0;d<8;++d){var v=i(f)-c,p=o(f);if(Math.abs(v-c)<ed||p<ed)return a(f);f=l(f-v/p)}return a(f)};return u.isStepper=!1,u},RS=function(){return noe(...toe(...arguments))},ioe=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:t=100,damping:n=8,dt:i=17}=r,a=(o,l,u)=>{var s=-(o-l)*t,c=u*n,f=u+(s-c)*i/1e3,d=u*i/1e3+o;return Math.abs(d-l)<ed&&Math.abs(f)<ed?[l,0]:[d,f]};return a.isStepper=!0,a.dt=i,a},aoe=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return RS(e);case"spring":return ioe();default:if(e.split("(")[0]==="cubic-bezier")return RS(e)}return typeof e=="function"?e:null};function ooe(e){var r,t=()=>null,n=!1,i=null,a=o=>{if(!n){if(Array.isArray(o)){if(!o.length)return;var l=o,[u,...s]=l;if(typeof u=="number"){i=e.setTimeout(a.bind(null,s),u);return}a(u),i=e.setTimeout(a.bind(null,s));return}typeof o=="string"&&(r=o,t(r)),typeof o=="object"&&(r=o,t(r)),typeof o=="function"&&o()}};return{stop:()=>{n=!0},start:o=>{n=!1,i&&(i(),i=null),a(o)},subscribe:o=>(t=o,()=>{t=()=>null}),getTimeoutController:()=>e}}class loe{setTimeout(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=performance.now(),i=null,a=o=>{o-n>=t?r(o):typeof requestAnimationFrame=="function"&&(i=requestAnimationFrame(a))};return i=requestAnimationFrame(a),()=>{i!=null&&cancelAnimationFrame(i)}}}function uoe(){return ooe(new loe)}var soe=g.createContext(uoe);function coe(e,r){var t=g.useContext(soe);return g.useMemo(()=>r??t(e),[e,r,t])}var foe={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},FS={t:0},_h={t:1};function Dv(e){var r=ur(e,foe),{isActive:t,canBegin:n,duration:i,easing:a,begin:o,onAnimationEnd:l,onAnimationStart:u,children:s}=r,c=PC(),f=t==="auto"?!_s.isSsr&&!c:t,d=coe(r.animationId,r.animationManager),[v,p]=g.useState(f?FS:_h),y=g.useRef(null);return g.useEffect(()=>{f||p(_h)},[f]),g.useEffect(()=>{if(!f||!n)return qa;var m=Jae(FS,_h,aoe(a),i,p,d.getTimeoutController()),h=()=>{y.current=m()};return d.start([u,o,h,i,l]),()=>{d.stop(),y.current&&y.current(),l()}},[f,n,i,a,o,u,l,d]),s(v.t)}function Rv(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",t=g.useRef(Lu(r)),n=g.useRef(e);return n.current!==e&&(t.current=Lu(r),n.current=e),t.current}var doe=["radius"],voe=["radius"],zS,BS,US,WS,VS,HS,KS,GS,YS,XS;function qS(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ZS(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qS(Object(t),!0).forEach(function(n){poe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qS(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function poe(e,r,t){return(r=hoe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function hoe(e){var r=moe(e,"string");return typeof r=="symbol"?r:r+""}function moe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function rd(){return rd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rd.apply(null,arguments)}function QS(e,r){if(e==null)return{};var t,n,i=yoe(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function yoe(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function vn(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var JS=(e,r,t,n,i)=>{var a=Mi(t),o=Mi(n),l=Math.min(Math.abs(a)/2,Math.abs(o)/2),u=o>=0?1:-1,s=a>=0?1:-1,c=o>=0&&a>=0||o<0&&a<0?1:0,f;if(l>0&&Array.isArray(i)){for(var d=[0,0,0,0],v=0,p=4;v<p;v++){var y,m=(y=i[v])!==null&&y!==void 0?y:0;d[v]=m>l?l:m}f=Le(zS||(zS=vn(["M",",",""])),e,r+u*d[0]),d[0]>0&&(f+=Le(BS||(BS=vn(["A ",",",",0,0,",",",",",""])),d[0],d[0],c,e+s*d[0],r)),f+=Le(US||(US=vn(["L ",",",""])),e+t-s*d[1],r),d[1]>0&&(f+=Le(WS||(WS=vn(["A ",",",",0,0,",`,
        `,",",""])),d[1],d[1],c,e+t,r+u*d[1])),f+=Le(VS||(VS=vn(["L ",",",""])),e+t,r+n-u*d[2]),d[2]>0&&(f+=Le(HS||(HS=vn(["A ",",",",0,0,",`,
        `,",",""])),d[2],d[2],c,e+t-s*d[2],r+n)),f+=Le(KS||(KS=vn(["L ",",",""])),e+s*d[3],r+n),d[3]>0&&(f+=Le(GS||(GS=vn(["A ",",",",0,0,",`,
        `,",",""])),d[3],d[3],c,e,r+n-u*d[3])),f+="Z"}else if(l>0&&i===+i&&i>0){var h=Math.min(l,i);f=Le(YS||(YS=vn(["M ",",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",","," Z"])),e,r+u*h,h,h,c,e+s*h,r,e+t-s*h,r,h,h,c,e+t,r+u*h,e+t,r+n-u*h,h,h,c,e+t-s*h,r+n,e+s*h,r+n,h,h,c,e,r+n-u*h)}else f=Le(XS||(XS=vn(["M ",","," h "," v "," h "," Z"])),e,r,t,n,-t);return f},e_={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},jC=e=>{var r=ur(e,e_),t=g.useRef(null),[n,i]=g.useState(-1);g.useEffect(()=>{if(t.current&&t.current.getTotalLength)try{var re=t.current.getTotalLength();re&&i(re)}catch{}},[]);var{x:a,y:o,width:l,height:u,radius:s,className:c}=r,{animationEasing:f,animationDuration:d,animationBegin:v,isAnimationActive:p,isUpdateAnimationActive:y}=r,m=g.useRef(l),h=g.useRef(u),b=g.useRef(a),w=g.useRef(o),E=g.useMemo(()=>({x:a,y:o,width:l,height:u,radius:s}),[a,o,l,u,s]),x=Rv(E,"rectangle-");if(a!==+a||o!==+o||l!==+l||u!==+u||l===0||u===0)return null;var S=me("recharts-rectangle",c);if(!y){var _=Ir(r),O=QS(_,doe);return g.createElement("path",rd({},O,{x:Mi(a),y:Mi(o),width:Mi(l),height:Mi(u),radius:typeof s=="number"?s:void 0,className:S,d:JS(a,o,l,u,s)}))}var P=m.current,T=h.current,N=b.current,A=w.current,H="0px ".concat(n===-1?1:n,"px"),K="".concat(n,"px ").concat(n,"px"),ee=TC(["strokeDasharray"],d,typeof f=="string"?f:e_.animationEasing);return g.createElement(Dv,{animationId:x,key:x,canBegin:n>0,duration:d,easing:f,isActive:y,begin:v},re=>{var pe=or(P,l,re),C=or(T,u,re),M=or(N,a,re),D=or(A,o,re);t.current&&(m.current=pe,h.current=C,b.current=M,w.current=D);var te;p?re>0?te={transition:ee,strokeDasharray:K}:te={strokeDasharray:H}:te={strokeDasharray:K};var ne=Ir(r),Ar=QS(ne,voe);return g.createElement("path",rd({},Ar,{radius:typeof s=="number"?s:void 0,className:S,d:JS(M,D,pe,C,s),ref:t,style:ZS(ZS({},te),r.style)}))})};function r_(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function t_(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?r_(Object(t),!0).forEach(function(n){goe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r_(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function goe(e,r,t){return(r=boe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function boe(e){var r=woe(e,"string");return typeof r=="symbol"?r:r+""}function woe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var td=Math.PI/180,Eoe=e=>e*180/Math.PI,hr=(e,r,t,n)=>({x:e+Math.cos(-td*n)*t,y:r+Math.sin(-td*n)*t}),xoe=function(r,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(r-(n.left||0)-(n.right||0)),Math.abs(t-(n.top||0)-(n.bottom||0)))/2},Soe=(e,r)=>{var{x:t,y:n}=e,{x:i,y:a}=r;return Math.sqrt((t-i)**2+(n-a)**2)},_oe=(e,r)=>{var{x:t,y:n}=e,{cx:i,cy:a}=r,o=Soe({x:t,y:n},{x:i,y:a});if(o<=0)return{radius:o,angle:0};var l=(t-i)/o,u=Math.acos(l);return n>a&&(u=2*Math.PI-u),{radius:o,angle:Eoe(u),angleInRadian:u}},Ooe=e=>{var{startAngle:r,endAngle:t}=e,n=Math.floor(r/360),i=Math.floor(t/360),a=Math.min(n,i);return{startAngle:r-a*360,endAngle:t-a*360}},$oe=(e,r)=>{var{startAngle:t,endAngle:n}=r,i=Math.floor(t/360),a=Math.floor(n/360),o=Math.min(i,a);return e+o*360},Poe=(e,r)=>{var{relativeX:t,relativeY:n}=e,{radius:i,angle:a}=_oe({x:t,y:n},r),{innerRadius:o,outerRadius:l}=r;if(i<o||i>l||i===0)return null;var{startAngle:u,endAngle:s}=Ooe(r),c=a,f;if(u<=s){for(;c>s;)c-=360;for(;c<u;)c+=360;f=c>=u&&c<=s}else{for(;c>u;)c-=360;for(;c<s;)c+=360;f=c>=s&&c<=u}return f?t_(t_({},r),{},{radius:i,angle:$oe(c,r)}):null};function NC(e){var{cx:r,cy:t,radius:n,startAngle:i,endAngle:a}=e,o=hr(r,t,n,i),l=hr(r,t,n,a);return{points:[o,l],cx:r,cy:t,radius:n,startAngle:i,endAngle:a}}var n_,i_,a_,o_,l_,u_,s_;function Ny(){return Ny=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ny.apply(null,arguments)}function Ea(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var Aoe=(e,r)=>{var t=Ct(r-e),n=Math.min(Math.abs(r-e),359.999);return t*n},Sc=e=>{var{cx:r,cy:t,radius:n,angle:i,sign:a,isExternal:o,cornerRadius:l,cornerIsExternal:u}=e,s=l*(o?1:-1)+n,c=Math.asin(l/s)/td,f=u?i:i+a*c,d=hr(r,t,s,f),v=hr(r,t,n,f),p=u?i-a*c:i,y=hr(r,t,s*Math.cos(c*td),p);return{center:d,circleTangency:v,lineTangency:y,theta:c}},MC=e=>{var{cx:r,cy:t,innerRadius:n,outerRadius:i,startAngle:a,endAngle:o}=e,l=Aoe(a,o),u=a+l,s=hr(r,t,i,a),c=hr(r,t,i,u),f=Le(n_||(n_=Ea(["M ",",",`
    A `,",",`,0,
    `,",",`,
    `,",",`
  `])),s.x,s.y,i,i,+(Math.abs(l)>180),+(a>u),c.x,c.y);if(n>0){var d=hr(r,t,n,a),v=hr(r,t,n,u);f+=Le(i_||(i_=Ea(["L ",",",`
            A `,",",`,0,
            `,",",`,
            `,","," Z"])),v.x,v.y,n,n,+(Math.abs(l)>180),+(a<=u),d.x,d.y)}else f+=Le(a_||(a_=Ea(["L ",","," Z"])),r,t);return f},Toe=e=>{var{cx:r,cy:t,innerRadius:n,outerRadius:i,cornerRadius:a,forceCornerRadius:o,cornerIsExternal:l,startAngle:u,endAngle:s}=e,c=Ct(s-u),{circleTangency:f,lineTangency:d,theta:v}=Sc({cx:r,cy:t,radius:i,angle:u,sign:c,cornerRadius:a,cornerIsExternal:l}),{circleTangency:p,lineTangency:y,theta:m}=Sc({cx:r,cy:t,radius:i,angle:s,sign:-c,cornerRadius:a,cornerIsExternal:l}),h=l?Math.abs(u-s):Math.abs(u-s)-v-m;if(h<0)return o?Le(o_||(o_=Ea(["M ",",",`
        a`,",",",0,0,1,",`,0
        a`,",",",0,0,1,",`,0
      `])),d.x,d.y,a,a,a*2,a,a,-a*2):MC({cx:r,cy:t,innerRadius:n,outerRadius:i,startAngle:u,endAngle:s});var b=Le(l_||(l_=Ea(["M ",",",`
    A`,",",",0,0,",",",",",`
    A`,",",",0,",",",",",",",`
    A`,",",",0,0,",",",",",`
  `])),d.x,d.y,a,a,+(c<0),f.x,f.y,i,i,+(h>180),+(c<0),p.x,p.y,a,a,+(c<0),y.x,y.y);if(n>0){var{circleTangency:w,lineTangency:E,theta:x}=Sc({cx:r,cy:t,radius:n,angle:u,sign:c,isExternal:!0,cornerRadius:a,cornerIsExternal:l}),{circleTangency:S,lineTangency:_,theta:O}=Sc({cx:r,cy:t,radius:n,angle:s,sign:-c,isExternal:!0,cornerRadius:a,cornerIsExternal:l}),P=l?Math.abs(u-s):Math.abs(u-s)-x-O;if(P<0&&a===0)return"".concat(b,"L").concat(r,",").concat(t,"Z");b+=Le(u_||(u_=Ea(["L",",",`
      A`,",",",0,0,",",",",",`
      A`,",",",0,",",",",",",",`
      A`,",",",0,0,",",",",","Z"])),_.x,_.y,a,a,+(c<0),S.x,S.y,n,n,+(P>180),+(c>0),w.x,w.y,a,a,+(c<0),E.x,E.y)}else b+=Le(s_||(s_=Ea(["L",",","Z"])),r,t);return b},koe={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},LC=e=>{var r=ur(e,koe),{cx:t,cy:n,innerRadius:i,outerRadius:a,cornerRadius:o,forceCornerRadius:l,cornerIsExternal:u,startAngle:s,endAngle:c,className:f}=r;if(a<i||s===c)return null;var d=me("recharts-sector",f),v=a-i,p=Yi(o,v,0,!0),y;return p>0&&Math.abs(s-c)<360?y=Toe({cx:t,cy:n,innerRadius:i,outerRadius:a,cornerRadius:Math.min(p,v/2),forceCornerRadius:l,cornerIsExternal:u,startAngle:s,endAngle:c}):y=MC({cx:t,cy:n,innerRadius:i,outerRadius:a,startAngle:s,endAngle:c}),g.createElement("path",Ny({},Ir(r),{className:d,d:y}))};function Coe(e,r,t){if(e==="horizontal")return[{x:r.x,y:t.top},{x:r.x,y:t.top+t.height}];if(e==="vertical")return[{x:t.left,y:r.y},{x:t.left+t.width,y:r.y}];if(qT(r)){if(e==="centric"){var{cx:n,cy:i,innerRadius:a,outerRadius:o,angle:l}=r,u=hr(n,i,a,l),s=hr(n,i,o,l);return[{x:u.x,y:u.y},{x:s.x,y:s.y}]}return NC(r)}}var DC={},RC={},FC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=J0;function t(n){return r.isSymbol(n)?NaN:Number(n)}e.toNumber=t})(FC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=FC;function t(n){return n?(n=r.toNumber(n),n===1/0||n===-1/0?(n<0?-1:1)*Number.MAX_VALUE:n===n?n:0):n===0?n:0}e.toFinite=t})(RC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const r=e1,t=RC;function n(i,a,o){o&&typeof o!="number"&&r.isIterateeCall(i,a,o)&&(a=o=void 0),i=t.toFinite(i),a===void 0?(a=i,i=0):a=t.toFinite(a),o=o===void 0?i<a?1:-1:t.toFinite(o);const l=Math.max(Math.ceil((a-i)/(o||1)),0),u=new Array(l);for(let s=0;s<l;s++)u[s]=i,i+=o;return u}e.range=n})(DC);var Ioe=DC.range;const zC=it(Ioe);var ia=e=>e.chartData,joe=$([ia],e=>{var r=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:r,dataStartIndex:0}}),Fv=(e,r,t,n)=>n?joe(e):ia(e);function Sn(e){if(Array.isArray(e)&&e.length===2){var[r,t]=e;if(fe(r)&&fe(t))return!0}return!1}function c_(e,r,t){return t?e:[Math.min(e[0],r[0]),Math.max(e[1],r[1])]}function BC(e,r){if(r&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[t,n]=e,i,a;if(fe(t))i=t;else if(typeof t=="function")return;if(fe(n))a=n;else if(typeof n=="function")return;var o=[i,a];if(Sn(o))return o}}function Noe(e,r,t){if(!(!t&&r==null)){if(typeof e=="function"&&r!=null)try{var n=e(r,t);if(Sn(n))return c_(n,r,t)}catch{}if(Array.isArray(e)&&e.length===2){var[i,a]=e,o,l;if(i==="auto")r!=null&&(o=Math.min(...r));else if(W(i))o=i;else if(typeof i=="function")try{r!=null&&(o=i(r==null?void 0:r[0]))}catch{}else if(typeof i=="string"&&sS.test(i)){var u=sS.exec(i);if(u==null||u[1]==null||r==null)o=void 0;else{var s=+u[1];o=r[0]-s}}else o=r==null?void 0:r[0];if(a==="auto")r!=null&&(l=Math.max(...r));else if(W(a))l=a;else if(typeof a=="function")try{r!=null&&(l=a(r==null?void 0:r[1]))}catch{}else if(typeof a=="string"&&cS.test(a)){var c=cS.exec(a);if(c==null||c[1]==null||r==null)l=void 0;else{var f=+c[1];l=r[1]+f}}else l=r==null?void 0:r[1];var d=[o,l];if(Sn(d))return r==null?d:c_(d,r,t)}}}var vl=1e9,Moe={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},m1,ke=!0,zt="[DecimalError] ",Aa=zt+"Invalid argument: ",h1=zt+"Exponent out of range: ",pl=Math.floor,ya=Math.pow,Loe=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ft,ir=1e7,Oe=7,UC=9007199254740991,nd=pl(UC/Oe),F={};F.absoluteValue=F.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};F.comparedTo=F.cmp=function(e){var r,t,n,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(n=a.d.length,i=e.d.length,r=0,t=n<i?n:i;r<t;++r)if(a.d[r]!==e.d[r])return a.d[r]>e.d[r]^a.s<0?1:-1;return n===i?0:n>i^a.s<0?1:-1};F.decimalPlaces=F.dp=function(){var e=this,r=e.d.length-1,t=(r-e.e)*Oe;if(r=e.d[r],r)for(;r%10==0;r/=10)t--;return t<0?0:t};F.dividedBy=F.div=function(e){return Kn(this,new this.constructor(e))};F.dividedToIntegerBy=F.idiv=function(e){var r=this,t=r.constructor;return ye(Kn(r,new t(e),0,1),t.precision)};F.equals=F.eq=function(e){return!this.cmp(e)};F.exponent=function(){return Ye(this)};F.greaterThan=F.gt=function(e){return this.cmp(e)>0};F.greaterThanOrEqualTo=F.gte=function(e){return this.cmp(e)>=0};F.isInteger=F.isint=function(){return this.e>this.d.length-2};F.isNegative=F.isneg=function(){return this.s<0};F.isPositive=F.ispos=function(){return this.s>0};F.isZero=function(){return this.s===0};F.lessThan=F.lt=function(e){return this.cmp(e)<0};F.lessThanOrEqualTo=F.lte=function(e){return this.cmp(e)<1};F.logarithm=F.log=function(e){var r,t=this,n=t.constructor,i=n.precision,a=i+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(ft))throw Error(zt+"NaN");if(t.s<1)throw Error(zt+(t.s?"NaN":"-Infinity"));return t.eq(ft)?new n(0):(ke=!1,r=Kn(Vu(t,a),Vu(e,a),a),ke=!0,ye(r,i))};F.minus=F.sub=function(e){var r=this;return e=new r.constructor(e),r.s==e.s?HC(r,e):WC(r,(e.s=-e.s,e))};F.modulo=F.mod=function(e){var r,t=this,n=t.constructor,i=n.precision;if(e=new n(e),!e.s)throw Error(zt+"NaN");return t.s?(ke=!1,r=Kn(t,e,0,1).times(e),ke=!0,t.minus(r)):ye(new n(t),i)};F.naturalExponential=F.exp=function(){return VC(this)};F.naturalLogarithm=F.ln=function(){return Vu(this)};F.negated=F.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};F.plus=F.add=function(e){var r=this;return e=new r.constructor(e),r.s==e.s?WC(r,e):HC(r,(e.s=-e.s,e))};F.precision=F.sd=function(e){var r,t,n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Aa+e);if(r=Ye(i)+1,n=i.d.length-1,t=n*Oe+1,n=i.d[n],n){for(;n%10==0;n/=10)t--;for(n=i.d[0];n>=10;n/=10)t++}return e&&r>t?r:t};F.squareRoot=F.sqrt=function(){var e,r,t,n,i,a,o,l=this,u=l.constructor;if(l.s<1){if(!l.s)return new u(0);throw Error(zt+"NaN")}for(e=Ye(l),ke=!1,i=Math.sqrt(+l),i==0||i==1/0?(r=wn(l.d),(r.length+e)%2==0&&(r+="0"),i=Math.sqrt(r),e=pl((e+1)/2)-(e<0||e%2),i==1/0?r="5e"+e:(r=i.toExponential(),r=r.slice(0,r.indexOf("e")+1)+e),n=new u(r)):n=new u(i.toString()),t=u.precision,i=o=t+3;;)if(a=n,n=a.plus(Kn(l,a,o+2)).times(.5),wn(a.d).slice(0,o)===(r=wn(n.d)).slice(0,o)){if(r=r.slice(o-3,o+1),i==o&&r=="4999"){if(ye(a,t+1,0),a.times(a).eq(l)){n=a;break}}else if(r!="9999")break;o+=4}return ke=!0,ye(n,t)};F.times=F.mul=function(e){var r,t,n,i,a,o,l,u,s,c=this,f=c.constructor,d=c.d,v=(e=new f(e)).d;if(!c.s||!e.s)return new f(0);for(e.s*=c.s,t=c.e+e.e,u=d.length,s=v.length,u<s&&(a=d,d=v,v=a,o=u,u=s,s=o),a=[],o=u+s,n=o;n--;)a.push(0);for(n=s;--n>=0;){for(r=0,i=u+n;i>n;)l=a[i]+v[n]*d[i-n-1]+r,a[i--]=l%ir|0,r=l/ir|0;a[i]=(a[i]+r)%ir|0}for(;!a[--o];)a.pop();return r?++t:a.shift(),e.d=a,e.e=t,ke?ye(e,f.precision):e};F.toDecimalPlaces=F.todp=function(e,r){var t=this,n=t.constructor;return t=new n(t),e===void 0?t:(kn(e,0,vl),r===void 0?r=n.rounding:kn(r,0,8),ye(t,e+Ye(t)+1,r))};F.toExponential=function(e,r){var t,n=this,i=n.constructor;return e===void 0?t=Ba(n,!0):(kn(e,0,vl),r===void 0?r=i.rounding:kn(r,0,8),n=ye(new i(n),e+1,r),t=Ba(n,!0,e+1)),t};F.toFixed=function(e,r){var t,n,i=this,a=i.constructor;return e===void 0?Ba(i):(kn(e,0,vl),r===void 0?r=a.rounding:kn(r,0,8),n=ye(new a(i),e+Ye(i)+1,r),t=Ba(n.abs(),!1,e+Ye(n)+1),i.isneg()&&!i.isZero()?"-"+t:t)};F.toInteger=F.toint=function(){var e=this,r=e.constructor;return ye(new r(e),Ye(e)+1,r.rounding)};F.toNumber=function(){return+this};F.toPower=F.pow=function(e){var r,t,n,i,a,o,l=this,u=l.constructor,s=12,c=+(e=new u(e));if(!e.s)return new u(ft);if(l=new u(l),!l.s){if(e.s<1)throw Error(zt+"Infinity");return l}if(l.eq(ft))return l;if(n=u.precision,e.eq(ft))return ye(l,n);if(r=e.e,t=e.d.length-1,o=r>=t,a=l.s,o){if((t=c<0?-c:c)<=UC){for(i=new u(ft),r=Math.ceil(n/Oe+4),ke=!1;t%2&&(i=i.times(l),d_(i.d,r)),t=pl(t/2),t!==0;)l=l.times(l),d_(l.d,r);return ke=!0,e.s<0?new u(ft).div(i):ye(i,n)}}else if(a<0)throw Error(zt+"NaN");return a=a<0&&e.d[Math.max(r,t)]&1?-1:1,l.s=1,ke=!1,i=e.times(Vu(l,n+s)),ke=!0,i=VC(i),i.s=a,i};F.toPrecision=function(e,r){var t,n,i=this,a=i.constructor;return e===void 0?(t=Ye(i),n=Ba(i,t<=a.toExpNeg||t>=a.toExpPos)):(kn(e,1,vl),r===void 0?r=a.rounding:kn(r,0,8),i=ye(new a(i),e,r),t=Ye(i),n=Ba(i,e<=t||t<=a.toExpNeg,e)),n};F.toSignificantDigits=F.tosd=function(e,r){var t=this,n=t.constructor;return e===void 0?(e=n.precision,r=n.rounding):(kn(e,1,vl),r===void 0?r=n.rounding:kn(r,0,8)),ye(new n(t),e,r)};F.toString=F.valueOf=F.val=F.toJSON=F[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,r=Ye(e),t=e.constructor;return Ba(e,r<=t.toExpNeg||r>=t.toExpPos)};function WC(e,r){var t,n,i,a,o,l,u,s,c=e.constructor,f=c.precision;if(!e.s||!r.s)return r.s||(r=new c(e)),ke?ye(r,f):r;if(u=e.d,s=r.d,o=e.e,i=r.e,u=u.slice(),a=o-i,a){for(a<0?(n=u,a=-a,l=s.length):(n=s,i=o,l=u.length),o=Math.ceil(f/Oe),l=o>l?o+1:l+1,a>l&&(a=l,n.length=1),n.reverse();a--;)n.push(0);n.reverse()}for(l=u.length,a=s.length,l-a<0&&(a=l,n=s,s=u,u=n),t=0;a;)t=(u[--a]=u[a]+s[a]+t)/ir|0,u[a]%=ir;for(t&&(u.unshift(t),++i),l=u.length;u[--l]==0;)u.pop();return r.d=u,r.e=i,ke?ye(r,f):r}function kn(e,r,t){if(e!==~~e||e<r||e>t)throw Error(Aa+e)}function wn(e){var r,t,n,i=e.length-1,a="",o=e[0];if(i>0){for(a+=o,r=1;r<i;r++)n=e[r]+"",t=Oe-n.length,t&&(a+=Ai(t)),a+=n;o=e[r],n=o+"",t=Oe-n.length,t&&(a+=Ai(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return a+o}var Kn=function(){function e(n,i){var a,o=0,l=n.length;for(n=n.slice();l--;)a=n[l]*i+o,n[l]=a%ir|0,o=a/ir|0;return o&&n.unshift(o),n}function r(n,i,a,o){var l,u;if(a!=o)u=a>o?1:-1;else for(l=u=0;l<a;l++)if(n[l]!=i[l]){u=n[l]>i[l]?1:-1;break}return u}function t(n,i,a){for(var o=0;a--;)n[a]-=o,o=n[a]<i[a]?1:0,n[a]=o*ir+n[a]-i[a];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,a,o){var l,u,s,c,f,d,v,p,y,m,h,b,w,E,x,S,_,O,P=n.constructor,T=n.s==i.s?1:-1,N=n.d,A=i.d;if(!n.s)return new P(n);if(!i.s)throw Error(zt+"Division by zero");for(u=n.e-i.e,_=A.length,x=N.length,v=new P(T),p=v.d=[],s=0;A[s]==(N[s]||0);)++s;if(A[s]>(N[s]||0)&&--u,a==null?b=a=P.precision:o?b=a+(Ye(n)-Ye(i))+1:b=a,b<0)return new P(0);if(b=b/Oe+2|0,s=0,_==1)for(c=0,A=A[0],b++;(s<x||c)&&b--;s++)w=c*ir+(N[s]||0),p[s]=w/A|0,c=w%A|0;else{for(c=ir/(A[0]+1)|0,c>1&&(A=e(A,c),N=e(N,c),_=A.length,x=N.length),E=_,y=N.slice(0,_),m=y.length;m<_;)y[m++]=0;O=A.slice(),O.unshift(0),S=A[0],A[1]>=ir/2&&++S;do c=0,l=r(A,y,_,m),l<0?(h=y[0],_!=m&&(h=h*ir+(y[1]||0)),c=h/S|0,c>1?(c>=ir&&(c=ir-1),f=e(A,c),d=f.length,m=y.length,l=r(f,y,d,m),l==1&&(c--,t(f,_<d?O:A,d))):(c==0&&(l=c=1),f=A.slice()),d=f.length,d<m&&f.unshift(0),t(y,f,m),l==-1&&(m=y.length,l=r(A,y,_,m),l<1&&(c++,t(y,_<m?O:A,m))),m=y.length):l===0&&(c++,y=[0]),p[s++]=c,l&&y[0]?y[m++]=N[E]||0:(y=[N[E]],m=1);while((E++<x||y[0]!==void 0)&&b--)}return p[0]||p.shift(),v.e=u,ye(v,o?a+Ye(v)+1:a)}}();function VC(e,r){var t,n,i,a,o,l,u=0,s=0,c=e.constructor,f=c.precision;if(Ye(e)>16)throw Error(h1+Ye(e));if(!e.s)return new c(ft);for(r==null?(ke=!1,l=f):l=r,o=new c(.03125);e.abs().gte(.1);)e=e.times(o),s+=5;for(n=Math.log(ya(2,s))/Math.LN10*2+5|0,l+=n,t=i=a=new c(ft),c.precision=l;;){if(i=ye(i.times(e),l),t=t.times(++u),o=a.plus(Kn(i,t,l)),wn(o.d).slice(0,l)===wn(a.d).slice(0,l)){for(;s--;)a=ye(a.times(a),l);return c.precision=f,r==null?(ke=!0,ye(a,f)):a}a=o}}function Ye(e){for(var r=e.e*Oe,t=e.d[0];t>=10;t/=10)r++;return r}function Oh(e,r,t){if(r>e.LN10.sd())throw ke=!0,t&&(e.precision=t),Error(zt+"LN10 precision limit exceeded");return ye(new e(e.LN10),r)}function Ai(e){for(var r="";e--;)r+="0";return r}function Vu(e,r){var t,n,i,a,o,l,u,s,c,f=1,d=10,v=e,p=v.d,y=v.constructor,m=y.precision;if(v.s<1)throw Error(zt+(v.s?"NaN":"-Infinity"));if(v.eq(ft))return new y(0);if(r==null?(ke=!1,s=m):s=r,v.eq(10))return r==null&&(ke=!0),Oh(y,s);if(s+=d,y.precision=s,t=wn(p),n=t.charAt(0),a=Ye(v),Math.abs(a)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)v=v.times(e),t=wn(v.d),n=t.charAt(0),f++;a=Ye(v),n>1?(v=new y("0."+t),a++):v=new y(n+"."+t.slice(1))}else return u=Oh(y,s+2,m).times(a+""),v=Vu(new y(n+"."+t.slice(1)),s-d).plus(u),y.precision=m,r==null?(ke=!0,ye(v,m)):v;for(l=o=v=Kn(v.minus(ft),v.plus(ft),s),c=ye(v.times(v),s),i=3;;){if(o=ye(o.times(c),s),u=l.plus(Kn(o,new y(i),s)),wn(u.d).slice(0,s)===wn(l.d).slice(0,s))return l=l.times(2),a!==0&&(l=l.plus(Oh(y,s+2,m).times(a+""))),l=Kn(l,new y(f),s),y.precision=m,r==null?(ke=!0,ye(l,m)):l;l=u,i+=2}}function f_(e,r){var t,n,i;for((t=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length),n=0;r.charCodeAt(n)===48;)++n;for(i=r.length;r.charCodeAt(i-1)===48;)--i;if(r=r.slice(n,i),r){if(i-=n,t=t-n-1,e.e=pl(t/Oe),e.d=[],n=(t+1)%Oe,t<0&&(n+=Oe),n<i){for(n&&e.d.push(+r.slice(0,n)),i-=Oe;n<i;)e.d.push(+r.slice(n,n+=Oe));r=r.slice(n),n=Oe-r.length}else n-=i;for(;n--;)r+="0";if(e.d.push(+r),ke&&(e.e>nd||e.e<-nd))throw Error(h1+t)}else e.s=0,e.e=0,e.d=[0];return e}function ye(e,r,t){var n,i,a,o,l,u,s,c,f=e.d;for(o=1,a=f[0];a>=10;a/=10)o++;if(n=r-o,n<0)n+=Oe,i=r,s=f[c=0];else{if(c=Math.ceil((n+1)/Oe),a=f.length,c>=a)return e;for(s=a=f[c],o=1;a>=10;a/=10)o++;n%=Oe,i=n-Oe+o}if(t!==void 0&&(a=ya(10,o-i-1),l=s/a%10|0,u=r<0||f[c+1]!==void 0||s%a,u=t<4?(l||u)&&(t==0||t==(e.s<0?3:2)):l>5||l==5&&(t==4||u||t==6&&(n>0?i>0?s/ya(10,o-i):0:f[c-1])%10&1||t==(e.s<0?8:7))),r<1||!f[0])return u?(a=Ye(e),f.length=1,r=r-a-1,f[0]=ya(10,(Oe-r%Oe)%Oe),e.e=pl(-r/Oe)||0):(f.length=1,f[0]=e.e=e.s=0),e;if(n==0?(f.length=c,a=1,c--):(f.length=c+1,a=ya(10,Oe-n),f[c]=i>0?(s/ya(10,o-i)%ya(10,i)|0)*a:0),u)for(;;)if(c==0){(f[0]+=a)==ir&&(f[0]=1,++e.e);break}else{if(f[c]+=a,f[c]!=ir)break;f[c--]=0,a=1}for(n=f.length;f[--n]===0;)f.pop();if(ke&&(e.e>nd||e.e<-nd))throw Error(h1+Ye(e));return e}function HC(e,r){var t,n,i,a,o,l,u,s,c,f,d=e.constructor,v=d.precision;if(!e.s||!r.s)return r.s?r.s=-r.s:r=new d(e),ke?ye(r,v):r;if(u=e.d,f=r.d,n=r.e,s=e.e,u=u.slice(),o=s-n,o){for(c=o<0,c?(t=u,o=-o,l=f.length):(t=f,n=s,l=u.length),i=Math.max(Math.ceil(v/Oe),l)+2,o>i&&(o=i,t.length=1),t.reverse(),i=o;i--;)t.push(0);t.reverse()}else{for(i=u.length,l=f.length,c=i<l,c&&(l=i),i=0;i<l;i++)if(u[i]!=f[i]){c=u[i]<f[i];break}o=0}for(c&&(t=u,u=f,f=t,r.s=-r.s),l=u.length,i=f.length-l;i>0;--i)u[l++]=0;for(i=f.length;i>o;){if(u[--i]<f[i]){for(a=i;a&&u[--a]===0;)u[a]=ir-1;--u[a],u[i]+=ir}u[i]-=f[i]}for(;u[--l]===0;)u.pop();for(;u[0]===0;u.shift())--n;return u[0]?(r.d=u,r.e=n,ke?ye(r,v):r):new d(0)}function Ba(e,r,t){var n,i=Ye(e),a=wn(e.d),o=a.length;return r?(t&&(n=t-o)>0?a=a.charAt(0)+"."+a.slice(1)+Ai(n):o>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+Ai(-i-1)+a,t&&(n=t-o)>0&&(a+=Ai(n))):i>=o?(a+=Ai(i+1-o),t&&(n=t-i-1)>0&&(a=a+"."+Ai(n))):((n=i+1)<o&&(a=a.slice(0,n)+"."+a.slice(n)),t&&(n=t-o)>0&&(i+1===o&&(a+="."),a+=Ai(n))),e.s<0?"-"+a:a}function d_(e,r){if(e.length>r)return e.length=r,!0}function KC(e){var r,t,n;function i(a){var o=this;if(!(o instanceof i))return new i(a);if(o.constructor=i,a instanceof i){o.s=a.s,o.e=a.e,o.d=(a=a.d)?a.slice():a;return}if(typeof a=="number"){if(a*0!==0)throw Error(Aa+a);if(a>0)o.s=1;else if(a<0)a=-a,o.s=-1;else{o.s=0,o.e=0,o.d=[0];return}if(a===~~a&&a<1e7){o.e=0,o.d=[a];return}return f_(o,a.toString())}else if(typeof a!="string")throw Error(Aa+a);if(a.charCodeAt(0)===45?(a=a.slice(1),o.s=-1):o.s=1,Loe.test(a))f_(o,a);else throw Error(Aa+a)}if(i.prototype=F,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=KC,i.config=i.set=Doe,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],r=0;r<n.length;)e.hasOwnProperty(t=n[r++])||(e[t]=this[t]);return i.config(e),i}function Doe(e){if(!e||typeof e!="object")throw Error(zt+"Object expected");var r,t,n,i=["precision",1,vl,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(r=0;r<i.length;r+=3)if((n=e[t=i[r]])!==void 0)if(pl(n)===n&&n>=i[r+1]&&n<=i[r+2])this[t]=n;else throw Error(Aa+t+": "+n);if((n=e[t="LN10"])!==void 0)if(n==Math.LN10)this[t]=new this(n);else throw Error(Aa+t+": "+n);return this}var m1=KC(Moe);ft=new m1(1);const ae=m1;function GC(e){var r;return e===0?r=1:r=Math.floor(new ae(e).abs().log(10).toNumber())+1,r}function YC(e,r,t){for(var n=new ae(e),i=0,a=[];n.lt(r)&&i<1e5;)a.push(n.toNumber()),n=n.add(t),i++;return a}var XC=e=>{var[r,t]=e,[n,i]=[r,t];return r>t&&([n,i]=[t,r]),[n,i]},y1=(e,r,t)=>{if(e.lte(0))return new ae(0);var n=GC(e.toNumber()),i=new ae(10).pow(n),a=e.div(i),o=n!==1?.05:.1,l=new ae(Math.ceil(a.div(o).toNumber())).add(t).mul(o),u=l.mul(i);return r?new ae(u.toNumber()):new ae(Math.ceil(u.toNumber()))},qC=(e,r,t)=>{var n;if(e.lte(0))return new ae(0);var i=[1,2,2.5,5],a=e.toNumber(),o=Math.floor(new ae(a).abs().log(10).toNumber()),l=new ae(10).pow(o),u=e.div(l).toNumber(),s=i.findIndex(v=>v>=u-1e-10);if(s===-1&&(l=l.mul(10),s=0),s+=t,s>=i.length){var c=Math.floor(s/i.length);s%=i.length,l=l.mul(new ae(10).pow(c))}var f=(n=i[s])!==null&&n!==void 0?n:1,d=new ae(f).mul(l);return r?d:new ae(Math.ceil(d.toNumber()))},Roe=(e,r,t)=>{var n=new ae(1),i=new ae(e);if(!i.isint()&&t){var a=Math.abs(e);a<1?(n=new ae(10).pow(GC(e)-1),i=new ae(Math.floor(i.div(n).toNumber())).mul(n)):a>1&&(i=new ae(Math.floor(e)))}else e===0?i=new ae(Math.floor((r-1)/2)):t||(i=new ae(Math.floor(e)));for(var o=Math.floor((r-1)/2),l=[],u=0;u<r;u++)l.push(i.add(new ae(u-o).mul(n)).toNumber());return l},ZC=function(r,t,n,i){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:y1;if(!Number.isFinite((t-r)/(n-1)))return{step:new ae(0),tickMin:new ae(0),tickMax:new ae(0)};var l=o(new ae(t).sub(r).div(n-1),i,a),u;r<=0&&t>=0?u=new ae(0):(u=new ae(r).add(t).div(2),u=u.sub(new ae(u).mod(l)));var s=Math.ceil(u.sub(r).div(l).toNumber()),c=Math.ceil(new ae(t).sub(u).div(l).toNumber()),f=s+c+1;return f>n?ZC(r,t,n,i,a+1,o):(f<n&&(c=t>0?c+(n-f):c,s=t>0?s:s+(n-f)),{step:l,tickMin:u.sub(new ae(s).mul(l)),tickMax:u.add(new ae(c).mul(l))})},v_=function(r){var[t,n]=r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"auto",l=Math.max(i,2),[u,s]=XC([t,n]);if(u===-1/0||s===1/0){var c=s===1/0?[u,...Array(i-1).fill(1/0)]:[...Array(i-1).fill(-1/0),s];return t>n?c.reverse():c}if(u===s)return Roe(u,i,a);var f=o==="snap125"?qC:y1,{step:d,tickMin:v,tickMax:p}=ZC(u,s,l,a,0,f),y=YC(v,p.add(new ae(.1).mul(d)),d);return t>n?y.reverse():y},p_=function(r,t){var[n,i]=r,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"auto",[l,u]=XC([n,i]);if(l===-1/0||u===1/0)return[n,i];if(l===u)return[l];var s=o==="snap125"?qC:y1,c=Math.max(t,2),f=s(new ae(u).sub(l).div(c-1),a,0),d=[...YC(new ae(l),new ae(u),f),u];return a===!1&&(d=d.map(v=>Math.round(v))),n>i?d.reverse():d},Foe=e=>e.rootProps.barCategoryGap,zv=e=>e.rootProps.stackOffset,QC=e=>e.rootProps.reverseStackOrder,g1=e=>e.options.chartName,b1=e=>e.rootProps.syncId,JC=e=>e.rootProps.syncMethod,w1=e=>e.options.eventEmitter,rr={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},sa={allowDecimals:!1,allowDuplicatedCategory:!0,allowDataOverflow:!1,angle:0,angleAxisId:0,axisLine:!0,axisLineType:"polygon",cx:0,cy:0,hide:!1,includeHidden:!1,label:!1,niceTicks:"auto",orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"auto",zIndex:rr.axis},pn={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,niceTicks:"auto",label:!1,orientation:"right",radiusAxisId:0,reversed:!1,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,tickLine:!0,type:"auto",zIndex:rr.axis},Bv=(e,r)=>{if(!(!e||!r))return e!=null&&e.reversed?[r[1],r[0]]:r};function Uv(e,r,t){if(t!=="auto")return t;if(e!=null)return ui(e,r)?"category":"number"}function h_(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function id(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?h_(Object(t),!0).forEach(function(n){zoe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h_(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function zoe(e,r,t){return(r=Boe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Boe(e){var r=Uoe(e,"string");return typeof r=="symbol"?r:r+""}function Uoe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var m_={allowDataOverflow:sa.allowDataOverflow,allowDecimals:sa.allowDecimals,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:sa.angleAxisId,includeHidden:!1,name:void 0,reversed:sa.reversed,scale:sa.scale,tick:sa.tick,tickCount:void 0,ticks:void 0,type:sa.type,unit:void 0,niceTicks:"auto"},y_={allowDataOverflow:pn.allowDataOverflow,allowDecimals:pn.allowDecimals,allowDuplicatedCategory:pn.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:pn.radiusAxisId,includeHidden:pn.includeHidden,name:void 0,reversed:pn.reversed,scale:pn.scale,tick:pn.tick,tickCount:pn.tickCount,ticks:void 0,type:pn.type,unit:void 0,niceTicks:"auto"},Woe=(e,r)=>{if(r!=null)return e.polarAxis.angleAxis[r]},E1=$([Woe,bC],(e,r)=>{var t;if(e!=null)return e;var n=(t=Uv(r,"angleAxis",m_.type))!==null&&t!==void 0?t:"category";return id(id({},m_),{},{type:n})}),Voe=(e,r)=>e.polarAxis.radiusAxis[r],x1=$([Voe,bC],(e,r)=>{var t;if(e!=null)return e;var n=(t=Uv(r,"radiusAxis",y_.type))!==null&&t!==void 0?t:"category";return id(id({},y_),{},{type:n})}),Wv=e=>e.polarOptions,S1=$([si,ci,br],xoe),eI=$([Wv,S1],(e,r)=>{if(e!=null)return Yi(e.innerRadius,r,0)}),rI=$([Wv,S1],(e,r)=>{if(e!=null)return Yi(e.outerRadius,r,r*.8)}),Hoe=e=>{if(e==null)return[0,0];var{startAngle:r,endAngle:t}=e;return[r,t]},tI=$([Wv],Hoe);$([E1,tI],Bv);var nI=$([S1,eI,rI],(e,r,t)=>{if(!(e==null||r==null||t==null))return[r,t]});$([x1,nI],Bv);var iI=$([Ne,Wv,eI,rI,si,ci],(e,r,t,n,i,a)=>{if(!(e!=="centric"&&e!=="radial"||r==null||t==null||n==null)){var{cx:o,cy:l,startAngle:u,endAngle:s}=r;return{cx:Yi(o,i,i/2),cy:Yi(l,a,a/2),innerRadius:t,outerRadius:n,startAngle:u,endAngle:s,clockWise:!1}}}),sr=(e,r)=>r,Vv=(e,r,t)=>t;function aI(e){return e==null?void 0:e.id}function oI(e,r,t){var{chartData:n=[]}=r,{allowDuplicatedCategory:i,dataKey:a}=t,o=new Map;return e.forEach(l=>{var u,s=(u=l.data)!==null&&u!==void 0?u:n;if(!(s==null||s.length===0)){var c=aI(l);s.forEach((f,d)=>{var v=a==null||i?d:String(Be(f,a,null)),p=Be(f,l.dataKey,0),y;o.has(v)?y=o.get(v):y={},Object.assign(y,{[c]:p}),o.set(v,y)})}}),Array.from(o.values())}function _1(e){return"stackId"in e&&e.stackId!=null&&e.dataKey!=null}var Hv=(e,r)=>e===r?!0:e==null||r==null?!1:e[0]===r[0]&&e[1]===r[1];function Kv(e,r){return Array.isArray(e)&&Array.isArray(r)&&e.length===0&&r.length===0?!0:e===r}function Koe(e,r){if(e.length===r.length){for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return!1}var cr=e=>{var r=Ne(e);return r==="horizontal"?"xAxis":r==="vertical"?"yAxis":r==="centric"?"angleAxis":"radiusAxis"},hl=e=>e.tooltip.settings.axisId;function O1(e){if(e!=null){var r=e.ticks,t=e.bandwidth,n=e.range(),i=[Math.min(...n),Math.max(...n)];return{domain:()=>e.domain(),range:function(a){function o(){return a.apply(this,arguments)}return o.toString=function(){return a.toString()},o}(()=>i),rangeMin:()=>i[0],rangeMax:()=>i[1],isInRange(a){var o=i[0],l=i[1];return o<=l?a>=o&&a<=l:a>=l&&a<=o},bandwidth:t?()=>t.call(e):void 0,ticks:r?a=>r.call(e,a):void 0,map:(a,o)=>{var l=e(a);if(l!=null){if(e.bandwidth&&o!==null&&o!==void 0&&o.position){var u=e.bandwidth();switch(o.position){case"middle":l+=u/2;break;case"end":l+=u;break}}return l}}}}}var Goe=(e,r)=>{if(r!=null)switch(e){case"linear":{if(!Sn(r)){for(var t,n,i=0;i<r.length;i++){var a=r[i];fe(a)&&((t===void 0||a<t)&&(t=a),(n===void 0||a>n)&&(n=a))}return t!==void 0&&n!==void 0?[t,n]:void 0}return r}default:return r}};function Vi(e,r){return e==null||r==null?NaN:e<r?-1:e>r?1:e>=r?0:NaN}function Yoe(e,r){return e==null||r==null?NaN:r<e?-1:r>e?1:r>=e?0:NaN}function $1(e){let r,t,n;e.length!==2?(r=Vi,t=(l,u)=>Vi(e(l),u),n=(l,u)=>e(l)-u):(r=e===Vi||e===Yoe?e:Xoe,t=e,n=e);function i(l,u,s=0,c=l.length){if(s<c){if(r(u,u)!==0)return c;do{const f=s+c>>>1;t(l[f],u)<0?s=f+1:c=f}while(s<c)}return s}function a(l,u,s=0,c=l.length){if(s<c){if(r(u,u)!==0)return c;do{const f=s+c>>>1;t(l[f],u)<=0?s=f+1:c=f}while(s<c)}return s}function o(l,u,s=0,c=l.length){const f=i(l,u,s,c-1);return f>s&&n(l[f-1],u)>-n(l[f],u)?f-1:f}return{left:i,center:o,right:a}}function Xoe(){return 0}function lI(e){return e===null?NaN:+e}function*qoe(e,r){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const Zoe=$1(Vi),Os=Zoe.right;$1(lI).center;class g_ extends Map{constructor(r,t=ele){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),r!=null)for(const[n,i]of r)this.set(n,i)}get(r){return super.get(b_(this,r))}has(r){return super.has(b_(this,r))}set(r,t){return super.set(Qoe(this,r),t)}delete(r){return super.delete(Joe(this,r))}}function b_({_intern:e,_key:r},t){const n=r(t);return e.has(n)?e.get(n):t}function Qoe({_intern:e,_key:r},t){const n=r(t);return e.has(n)?e.get(n):(e.set(n,t),t)}function Joe({_intern:e,_key:r},t){const n=r(t);return e.has(n)&&(t=e.get(n),e.delete(n)),t}function ele(e){return e!==null&&typeof e=="object"?e.valueOf():e}function rle(e=Vi){if(e===Vi)return uI;if(typeof e!="function")throw new TypeError("compare is not a function");return(r,t)=>{const n=e(r,t);return n||n===0?n:(e(t,t)===0)-(e(r,r)===0)}}function uI(e,r){return(e==null||!(e>=e))-(r==null||!(r>=r))||(e<r?-1:e>r?1:0)}const tle=Math.sqrt(50),nle=Math.sqrt(10),ile=Math.sqrt(2);function ad(e,r,t){const n=(r-e)/Math.max(0,t),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),o=a>=tle?10:a>=nle?5:a>=ile?2:1;let l,u,s;return i<0?(s=Math.pow(10,-i)/o,l=Math.round(e*s),u=Math.round(r*s),l/s<e&&++l,u/s>r&&--u,s=-s):(s=Math.pow(10,i)*o,l=Math.round(e/s),u=Math.round(r/s),l*s<e&&++l,u*s>r&&--u),u<l&&.5<=t&&t<2?ad(e,r,t*2):[l,u,s]}function My(e,r,t){if(r=+r,e=+e,t=+t,!(t>0))return[];if(e===r)return[e];const n=r<e,[i,a,o]=n?ad(r,e,t):ad(e,r,t);if(!(a>=i))return[];const l=a-i+1,u=new Array(l);if(n)if(o<0)for(let s=0;s<l;++s)u[s]=(a-s)/-o;else for(let s=0;s<l;++s)u[s]=(a-s)*o;else if(o<0)for(let s=0;s<l;++s)u[s]=(i+s)/-o;else for(let s=0;s<l;++s)u[s]=(i+s)*o;return u}function Ly(e,r,t){return r=+r,e=+e,t=+t,ad(e,r,t)[2]}function Dy(e,r,t){r=+r,e=+e,t=+t;const n=r<e,i=n?Ly(r,e,t):Ly(e,r,t);return(n?-1:1)*(i<0?1/-i:i)}function w_(e,r){let t;for(const n of e)n!=null&&(t<n||t===void 0&&n>=n)&&(t=n);return t}function E_(e,r){let t;for(const n of e)n!=null&&(t>n||t===void 0&&n>=n)&&(t=n);return t}function sI(e,r,t=0,n=1/0,i){if(r=Math.floor(r),t=Math.floor(Math.max(0,t)),n=Math.floor(Math.min(e.length-1,n)),!(t<=r&&r<=n))return e;for(i=i===void 0?uI:rle(i);n>t;){if(n-t>600){const u=n-t+1,s=r-t+1,c=Math.log(u),f=.5*Math.exp(2*c/3),d=.5*Math.sqrt(c*f*(u-f)/u)*(s-u/2<0?-1:1),v=Math.max(t,Math.floor(r-s*f/u+d)),p=Math.min(n,Math.floor(r+(u-s)*f/u+d));sI(e,r,v,p,i)}const a=e[r];let o=t,l=n;for(Bl(e,t,r),i(e[n],a)>0&&Bl(e,t,n);o<l;){for(Bl(e,o,l),++o,--l;i(e[o],a)<0;)++o;for(;i(e[l],a)>0;)--l}i(e[t],a)===0?Bl(e,t,l):(++l,Bl(e,l,n)),l<=r&&(t=l+1),r<=l&&(n=l-1)}return e}function Bl(e,r,t){const n=e[r];e[r]=e[t],e[t]=n}function ale(e,r,t){if(e=Float64Array.from(qoe(e)),!(!(n=e.length)||isNaN(r=+r))){if(r<=0||n<2)return E_(e);if(r>=1)return w_(e);var n,i=(n-1)*r,a=Math.floor(i),o=w_(sI(e,a).subarray(0,a+1)),l=E_(e.subarray(a+1));return o+(l-o)*(i-a)}}function ole(e,r,t=lI){if(!(!(n=e.length)||isNaN(r=+r))){if(r<=0||n<2)return+t(e[0],0,e);if(r>=1)return+t(e[n-1],n-1,e);var n,i=(n-1)*r,a=Math.floor(i),o=+t(e[a],a,e),l=+t(e[a+1],a+1,e);return o+(l-o)*(i-a)}}function lle(e,r,t){e=+e,r=+r,t=(i=arguments.length)<2?(r=e,e=0,1):i<3?1:+t;for(var n=-1,i=Math.max(0,Math.ceil((r-e)/t))|0,a=new Array(i);++n<i;)a[n]=e+n*t;return a}function Bt(e,r){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(r).domain(e);break}return this}function fi(e,r){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof r=="function"?this.interpolator(r):this.range(r);break}}return this}const Ry=Symbol("implicit");function P1(){var e=new g_,r=[],t=[],n=Ry;function i(a){let o=e.get(a);if(o===void 0){if(n!==Ry)return n;e.set(a,o=r.push(a)-1)}return t[o%t.length]}return i.domain=function(a){if(!arguments.length)return r.slice();r=[],e=new g_;for(const o of a)e.has(o)||e.set(o,r.push(o)-1);return i},i.range=function(a){return arguments.length?(t=Array.from(a),i):t.slice()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return P1(r,t).unknown(n)},Bt.apply(i,arguments),i}function A1(){var e=P1().unknown(void 0),r=e.domain,t=e.range,n=0,i=1,a,o,l=!1,u=0,s=0,c=.5;delete e.unknown;function f(){var d=r().length,v=i<n,p=v?i:n,y=v?n:i;a=(y-p)/Math.max(1,d-u+s*2),l&&(a=Math.floor(a)),p+=(y-p-a*(d-u))*c,o=a*(1-u),l&&(p=Math.round(p),o=Math.round(o));var m=lle(d).map(function(h){return p+a*h});return t(v?m.reverse():m)}return e.domain=function(d){return arguments.length?(r(d),f()):r()},e.range=function(d){return arguments.length?([n,i]=d,n=+n,i=+i,f()):[n,i]},e.rangeRound=function(d){return[n,i]=d,n=+n,i=+i,l=!0,f()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(d){return arguments.length?(l=!!d,f()):l},e.padding=function(d){return arguments.length?(u=Math.min(1,s=+d),f()):u},e.paddingInner=function(d){return arguments.length?(u=Math.min(1,d),f()):u},e.paddingOuter=function(d){return arguments.length?(s=+d,f()):s},e.align=function(d){return arguments.length?(c=Math.max(0,Math.min(1,d)),f()):c},e.copy=function(){return A1(r(),[n,i]).round(l).paddingInner(u).paddingOuter(s).align(c)},Bt.apply(f(),arguments)}function cI(e){var r=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return cI(r())},e}function ule(){return cI(A1.apply(null,arguments).paddingInner(1))}function T1(e,r,t){e.prototype=r.prototype=t,t.constructor=e}function fI(e,r){var t=Object.create(e.prototype);for(var n in r)t[n]=r[n];return t}function $s(){}var Hu=.7,od=1/Hu,No="\\s*([+-]?\\d+)\\s*",Ku="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",sle=/^#([0-9a-f]{3,8})$/,cle=new RegExp(`^rgb\\(${No},${No},${No}\\)$`),fle=new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),dle=new RegExp(`^rgba\\(${No},${No},${No},${Ku}\\)$`),vle=new RegExp(`^rgba\\(${_n},${_n},${_n},${Ku}\\)$`),ple=new RegExp(`^hsl\\(${Ku},${_n},${_n}\\)$`),hle=new RegExp(`^hsla\\(${Ku},${_n},${_n},${Ku}\\)$`),x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};T1($s,Gu,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:S_,formatHex:S_,formatHex8:mle,formatHsl:yle,formatRgb:__,toString:__});function S_(){return this.rgb().formatHex()}function mle(){return this.rgb().formatHex8()}function yle(){return dI(this).formatHsl()}function __(){return this.rgb().formatRgb()}function Gu(e){var r,t;return e=(e+"").trim().toLowerCase(),(r=sle.exec(e))?(t=r[1].length,r=parseInt(r[1],16),t===6?O_(r):t===3?new qr(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):t===8?_c(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):t===4?_c(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=cle.exec(e))?new qr(r[1],r[2],r[3],1):(r=fle.exec(e))?new qr(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=dle.exec(e))?_c(r[1],r[2],r[3],r[4]):(r=vle.exec(e))?_c(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=ple.exec(e))?A_(r[1],r[2]/100,r[3]/100,1):(r=hle.exec(e))?A_(r[1],r[2]/100,r[3]/100,r[4]):x_.hasOwnProperty(e)?O_(x_[e]):e==="transparent"?new qr(NaN,NaN,NaN,0):null}function O_(e){return new qr(e>>16&255,e>>8&255,e&255,1)}function _c(e,r,t,n){return n<=0&&(e=r=t=NaN),new qr(e,r,t,n)}function gle(e){return e instanceof $s||(e=Gu(e)),e?(e=e.rgb(),new qr(e.r,e.g,e.b,e.opacity)):new qr}function Fy(e,r,t,n){return arguments.length===1?gle(e):new qr(e,r,t,n??1)}function qr(e,r,t,n){this.r=+e,this.g=+r,this.b=+t,this.opacity=+n}T1(qr,Fy,fI($s,{brighter(e){return e=e==null?od:Math.pow(od,e),new qr(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Hu:Math.pow(Hu,e),new qr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new qr(Ta(this.r),Ta(this.g),Ta(this.b),ld(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:$_,formatHex:$_,formatHex8:ble,formatRgb:P_,toString:P_}));function $_(){return`#${xa(this.r)}${xa(this.g)}${xa(this.b)}`}function ble(){return`#${xa(this.r)}${xa(this.g)}${xa(this.b)}${xa((isNaN(this.opacity)?1:this.opacity)*255)}`}function P_(){const e=ld(this.opacity);return`${e===1?"rgb(":"rgba("}${Ta(this.r)}, ${Ta(this.g)}, ${Ta(this.b)}${e===1?")":`, ${e})`}`}function ld(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ta(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function xa(e){return e=Ta(e),(e<16?"0":"")+e.toString(16)}function A_(e,r,t,n){return n<=0?e=r=t=NaN:t<=0||t>=1?e=r=NaN:r<=0&&(e=NaN),new Zt(e,r,t,n)}function dI(e){if(e instanceof Zt)return new Zt(e.h,e.s,e.l,e.opacity);if(e instanceof $s||(e=Gu(e)),!e)return new Zt;if(e instanceof Zt)return e;e=e.rgb();var r=e.r/255,t=e.g/255,n=e.b/255,i=Math.min(r,t,n),a=Math.max(r,t,n),o=NaN,l=a-i,u=(a+i)/2;return l?(r===a?o=(t-n)/l+(t<n)*6:t===a?o=(n-r)/l+2:o=(r-t)/l+4,l/=u<.5?a+i:2-a-i,o*=60):l=u>0&&u<1?0:o,new Zt(o,l,u,e.opacity)}function wle(e,r,t,n){return arguments.length===1?dI(e):new Zt(e,r,t,n??1)}function Zt(e,r,t,n){this.h=+e,this.s=+r,this.l=+t,this.opacity=+n}T1(Zt,wle,fI($s,{brighter(e){return e=e==null?od:Math.pow(od,e),new Zt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Hu:Math.pow(Hu,e),new Zt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,r=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,n=t+(t<.5?t:1-t)*r,i=2*t-n;return new qr($h(e>=240?e-240:e+120,i,n),$h(e,i,n),$h(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new Zt(T_(this.h),Oc(this.s),Oc(this.l),ld(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ld(this.opacity);return`${e===1?"hsl(":"hsla("}${T_(this.h)}, ${Oc(this.s)*100}%, ${Oc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function T_(e){return e=(e||0)%360,e<0?e+360:e}function Oc(e){return Math.max(0,Math.min(1,e||0))}function $h(e,r,t){return(e<60?r+(t-r)*e/60:e<180?t:e<240?r+(t-r)*(240-e)/60:r)*255}const k1=e=>()=>e;function Ele(e,r){return function(t){return e+t*r}}function xle(e,r,t){return e=Math.pow(e,t),r=Math.pow(r,t)-e,t=1/t,function(n){return Math.pow(e+n*r,t)}}function Sle(e){return(e=+e)==1?vI:function(r,t){return t-r?xle(r,t,e):k1(isNaN(r)?t:r)}}function vI(e,r){var t=r-e;return t?Ele(e,t):k1(isNaN(e)?r:e)}const k_=function e(r){var t=Sle(r);function n(i,a){var o=t((i=Fy(i)).r,(a=Fy(a)).r),l=t(i.g,a.g),u=t(i.b,a.b),s=vI(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=l(c),i.b=u(c),i.opacity=s(c),i+""}}return n.gamma=e,n}(1);function _le(e,r){r||(r=[]);var t=e?Math.min(r.length,e.length):0,n=r.slice(),i;return function(a){for(i=0;i<t;++i)n[i]=e[i]*(1-a)+r[i]*a;return n}}function Ole(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $le(e,r){var t=r?r.length:0,n=e?Math.min(t,e.length):0,i=new Array(n),a=new Array(t),o;for(o=0;o<n;++o)i[o]=ml(e[o],r[o]);for(;o<t;++o)a[o]=r[o];return function(l){for(o=0;o<n;++o)a[o]=i[o](l);return a}}function Ple(e,r){var t=new Date;return e=+e,r=+r,function(n){return t.setTime(e*(1-n)+r*n),t}}function ud(e,r){return e=+e,r=+r,function(t){return e*(1-t)+r*t}}function Ale(e,r){var t={},n={},i;(e===null||typeof e!="object")&&(e={}),(r===null||typeof r!="object")&&(r={});for(i in r)i in e?t[i]=ml(e[i],r[i]):n[i]=r[i];return function(a){for(i in t)n[i]=t[i](a);return n}}var zy=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ph=new RegExp(zy.source,"g");function Tle(e){return function(){return e}}function kle(e){return function(r){return e(r)+""}}function Cle(e,r){var t=zy.lastIndex=Ph.lastIndex=0,n,i,a,o=-1,l=[],u=[];for(e=e+"",r=r+"";(n=zy.exec(e))&&(i=Ph.exec(r));)(a=i.index)>t&&(a=r.slice(t,a),l[o]?l[o]+=a:l[++o]=a),(n=n[0])===(i=i[0])?l[o]?l[o]+=i:l[++o]=i:(l[++o]=null,u.push({i:o,x:ud(n,i)})),t=Ph.lastIndex;return t<r.length&&(a=r.slice(t),l[o]?l[o]+=a:l[++o]=a),l.length<2?u[0]?kle(u[0].x):Tle(r):(r=u.length,function(s){for(var c=0,f;c<r;++c)l[(f=u[c]).i]=f.x(s);return l.join("")})}function ml(e,r){var t=typeof r,n;return r==null||t==="boolean"?k1(r):(t==="number"?ud:t==="string"?(n=Gu(r))?(r=n,k_):Cle:r instanceof Gu?k_:r instanceof Date?Ple:Ole(r)?_le:Array.isArray(r)?$le:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?Ale:ud)(e,r)}function C1(e,r){return e=+e,r=+r,function(t){return Math.round(e*(1-t)+r*t)}}function Ile(e,r){r===void 0&&(r=e,e=ml);for(var t=0,n=r.length-1,i=r[0],a=new Array(n<0?0:n);t<n;)a[t]=e(i,i=r[++t]);return function(o){var l=Math.max(0,Math.min(n-1,Math.floor(o*=n)));return a[l](o-l)}}function jle(e){return function(){return e}}function sd(e){return+e}var C_=[0,1];function kr(e){return e}function By(e,r){return(r-=e=+e)?function(t){return(t-e)/r}:jle(isNaN(r)?NaN:.5)}function Nle(e,r){var t;return e>r&&(t=e,e=r,r=t),function(n){return Math.max(e,Math.min(r,n))}}function Mle(e,r,t){var n=e[0],i=e[1],a=r[0],o=r[1];return i<n?(n=By(i,n),a=t(o,a)):(n=By(n,i),a=t(a,o)),function(l){return a(n(l))}}function Lle(e,r,t){var n=Math.min(e.length,r.length)-1,i=new Array(n),a=new Array(n),o=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),r=r.slice().reverse());++o<n;)i[o]=By(e[o],e[o+1]),a[o]=t(r[o],r[o+1]);return function(l){var u=Os(e,l,1,n)-1;return a[u](i[u](l))}}function Ps(e,r){return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Gv(){var e=C_,r=C_,t=ml,n,i,a,o=kr,l,u,s;function c(){var d=Math.min(e.length,r.length);return o!==kr&&(o=Nle(e[0],e[d-1])),l=d>2?Lle:Mle,u=s=null,f}function f(d){return d==null||isNaN(d=+d)?a:(u||(u=l(e.map(n),r,t)))(n(o(d)))}return f.invert=function(d){return o(i((s||(s=l(r,e.map(n),ud)))(d)))},f.domain=function(d){return arguments.length?(e=Array.from(d,sd),c()):e.slice()},f.range=function(d){return arguments.length?(r=Array.from(d),c()):r.slice()},f.rangeRound=function(d){return r=Array.from(d),t=C1,c()},f.clamp=function(d){return arguments.length?(o=d?!0:kr,c()):o!==kr},f.interpolate=function(d){return arguments.length?(t=d,c()):t},f.unknown=function(d){return arguments.length?(a=d,f):a},function(d,v){return n=d,i=v,c()}}function I1(){return Gv()(kr,kr)}function Dle(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function cd(e,r){if(!isFinite(e)||e===0)return null;var t=(e=r?e.toExponential(r-1):e.toExponential()).indexOf("e"),n=e.slice(0,t);return[n.length>1?n[0]+n.slice(2):n,+e.slice(t+1)]}function Xo(e){return e=cd(Math.abs(e)),e?e[1]:NaN}function Rle(e,r){return function(t,n){for(var i=t.length,a=[],o=0,l=e[0],u=0;i>0&&l>0&&(u+l+1>n&&(l=Math.max(1,n-u)),a.push(t.substring(i-=l,i+l)),!((u+=l+1)>n));)l=e[o=(o+1)%e.length];return a.reverse().join(r)}}function Fle(e){return function(r){return r.replace(/[0-9]/g,function(t){return e[+t]})}}var zle=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yu(e){if(!(r=zle.exec(e)))throw new Error("invalid format: "+e);var r;return new j1({fill:r[1],align:r[2],sign:r[3],symbol:r[4],zero:r[5],width:r[6],comma:r[7],precision:r[8]&&r[8].slice(1),trim:r[9],type:r[10]})}Yu.prototype=j1.prototype;function j1(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}j1.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ble(e){e:for(var r=e.length,t=1,n=-1,i;t<r;++t)switch(e[t]){case".":n=i=t;break;case"0":n===0&&(n=t),i=t;break;default:if(!+e[t])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var fd;function Ule(e,r){var t=cd(e,r);if(!t)return fd=void 0,e.toPrecision(r);var n=t[0],i=t[1],a=i-(fd=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+cd(e,Math.max(0,r+a-1))[0]}function I_(e,r){var t=cd(e,r);if(!t)return e+"";var n=t[0],i=t[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const j_={"%":(e,r)=>(e*100).toFixed(r),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Dle,e:(e,r)=>e.toExponential(r),f:(e,r)=>e.toFixed(r),g:(e,r)=>e.toPrecision(r),o:e=>Math.round(e).toString(8),p:(e,r)=>I_(e*100,r),r:I_,s:Ule,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function N_(e){return e}var M_=Array.prototype.map,L_=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Wle(e){var r=e.grouping===void 0||e.thousands===void 0?N_:Rle(M_.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?N_:Fle(M_.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",u=e.nan===void 0?"NaN":e.nan+"";function s(f,d){f=Yu(f);var v=f.fill,p=f.align,y=f.sign,m=f.symbol,h=f.zero,b=f.width,w=f.comma,E=f.precision,x=f.trim,S=f.type;S==="n"?(w=!0,S="g"):j_[S]||(E===void 0&&(E=12),x=!0,S="g"),(h||v==="0"&&p==="=")&&(h=!0,v="0",p="=");var _=(d&&d.prefix!==void 0?d.prefix:"")+(m==="$"?t:m==="#"&&/[boxX]/.test(S)?"0"+S.toLowerCase():""),O=(m==="$"?n:/[%p]/.test(S)?o:"")+(d&&d.suffix!==void 0?d.suffix:""),P=j_[S],T=/[defgprs%]/.test(S);E=E===void 0?6:/[gprs]/.test(S)?Math.max(1,Math.min(21,E)):Math.max(0,Math.min(20,E));function N(A){var H=_,K=O,ee,re,pe;if(S==="c")K=P(A)+K,A="";else{A=+A;var C=A<0||1/A<0;if(A=isNaN(A)?u:P(Math.abs(A),E),x&&(A=Ble(A)),C&&+A==0&&y!=="+"&&(C=!1),H=(C?y==="("?y:l:y==="-"||y==="("?"":y)+H,K=(S==="s"&&!isNaN(A)&&fd!==void 0?L_[8+fd/3]:"")+K+(C&&y==="("?")":""),T){for(ee=-1,re=A.length;++ee<re;)if(pe=A.charCodeAt(ee),48>pe||pe>57){K=(pe===46?i+A.slice(ee+1):A.slice(ee))+K,A=A.slice(0,ee);break}}}w&&!h&&(A=r(A,1/0));var M=H.length+A.length+K.length,D=M<b?new Array(b-M+1).join(v):"";switch(w&&h&&(A=r(D+A,D.length?b-K.length:1/0),D=""),p){case"<":A=H+A+K+D;break;case"=":A=H+D+A+K;break;case"^":A=D.slice(0,M=D.length>>1)+H+A+K+D.slice(M);break;default:A=D+H+A+K;break}return a(A)}return N.toString=function(){return f+""},N}function c(f,d){var v=Math.max(-8,Math.min(8,Math.floor(Xo(d)/3)))*3,p=Math.pow(10,-v),y=s((f=Yu(f),f.type="f",f),{suffix:L_[8+v/3]});return function(m){return y(p*m)}}return{format:s,formatPrefix:c}}var $c,N1,pI;Vle({thousands:",",grouping:[3],currency:["$",""]});function Vle(e){return $c=Wle(e),N1=$c.format,pI=$c.formatPrefix,$c}function Hle(e){return Math.max(0,-Xo(Math.abs(e)))}function Kle(e,r){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Xo(r)/3)))*3-Xo(Math.abs(e)))}function Gle(e,r){return e=Math.abs(e),r=Math.abs(r)-e,Math.max(0,Xo(r)-Xo(e))+1}function hI(e,r,t,n){var i=Dy(e,r,t),a;switch(n=Yu(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(r));return n.precision==null&&!isNaN(a=Kle(i,o))&&(n.precision=a),pI(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(a=Gle(i,Math.max(Math.abs(e),Math.abs(r))))&&(n.precision=a-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(a=Hle(i))&&(n.precision=a-(n.type==="%")*2);break}}return N1(n)}function aa(e){var r=e.domain;return e.ticks=function(t){var n=r();return My(n[0],n[n.length-1],t??10)},e.tickFormat=function(t,n){var i=r();return hI(i[0],i[i.length-1],t??10,n)},e.nice=function(t){t==null&&(t=10);var n=r(),i=0,a=n.length-1,o=n[i],l=n[a],u,s,c=10;for(l<o&&(s=o,o=l,l=s,s=i,i=a,a=s);c-- >0;){if(s=Ly(o,l,t),s===u)return n[i]=o,n[a]=l,r(n);if(s>0)o=Math.floor(o/s)*s,l=Math.ceil(l/s)*s;else if(s<0)o=Math.ceil(o*s)/s,l=Math.floor(l*s)/s;else break;u=s}return e},e}function mI(){var e=I1();return e.copy=function(){return Ps(e,mI())},Bt.apply(e,arguments),aa(e)}function yI(e){var r;function t(n){return n==null||isNaN(n=+n)?r:n}return t.invert=t,t.domain=t.range=function(n){return arguments.length?(e=Array.from(n,sd),t):e.slice()},t.unknown=function(n){return arguments.length?(r=n,t):r},t.copy=function(){return yI(e).unknown(r)},e=arguments.length?Array.from(e,sd):[0,1],aa(t)}function gI(e,r){e=e.slice();var t=0,n=e.length-1,i=e[t],a=e[n],o;return a<i&&(o=t,t=n,n=o,o=i,i=a,a=o),e[t]=r.floor(i),e[n]=r.ceil(a),e}function D_(e){return Math.log(e)}function R_(e){return Math.exp(e)}function Yle(e){return-Math.log(-e)}function Xle(e){return-Math.exp(-e)}function qle(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Zle(e){return e===10?qle:e===Math.E?Math.exp:r=>Math.pow(e,r)}function Qle(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),r=>Math.log(r)/e)}function F_(e){return(r,t)=>-e(-r,t)}function M1(e){const r=e(D_,R_),t=r.domain;let n=10,i,a;function o(){return i=Qle(n),a=Zle(n),t()[0]<0?(i=F_(i),a=F_(a),e(Yle,Xle)):e(D_,R_),r}return r.base=function(l){return arguments.length?(n=+l,o()):n},r.domain=function(l){return arguments.length?(t(l),o()):t()},r.ticks=l=>{const u=t();let s=u[0],c=u[u.length-1];const f=c<s;f&&([s,c]=[c,s]);let d=i(s),v=i(c),p,y;const m=l==null?10:+l;let h=[];if(!(n%1)&&v-d<m){if(d=Math.floor(d),v=Math.ceil(v),s>0){for(;d<=v;++d)for(p=1;p<n;++p)if(y=d<0?p/a(-d):p*a(d),!(y<s)){if(y>c)break;h.push(y)}}else for(;d<=v;++d)for(p=n-1;p>=1;--p)if(y=d>0?p/a(-d):p*a(d),!(y<s)){if(y>c)break;h.push(y)}h.length*2<m&&(h=My(s,c,m))}else h=My(d,v,Math.min(v-d,m)).map(a);return f?h.reverse():h},r.tickFormat=(l,u)=>{if(l==null&&(l=10),u==null&&(u=n===10?"s":","),typeof u!="function"&&(!(n%1)&&(u=Yu(u)).precision==null&&(u.trim=!0),u=N1(u)),l===1/0)return u;const s=Math.max(1,n*l/r.ticks().length);return c=>{let f=c/a(Math.round(i(c)));return f*n<n-.5&&(f*=n),f<=s?u(c):""}},r.nice=()=>t(gI(t(),{floor:l=>a(Math.floor(i(l))),ceil:l=>a(Math.ceil(i(l)))})),r}function bI(){const e=M1(Gv()).domain([1,10]);return e.copy=()=>Ps(e,bI()).base(e.base()),Bt.apply(e,arguments),e}function z_(e){return function(r){return Math.sign(r)*Math.log1p(Math.abs(r/e))}}function B_(e){return function(r){return Math.sign(r)*Math.expm1(Math.abs(r))*e}}function L1(e){var r=1,t=e(z_(r),B_(r));return t.constant=function(n){return arguments.length?e(z_(r=+n),B_(r)):r},aa(t)}function wI(){var e=L1(Gv());return e.copy=function(){return Ps(e,wI()).constant(e.constant())},Bt.apply(e,arguments)}function U_(e){return function(r){return r<0?-Math.pow(-r,e):Math.pow(r,e)}}function Jle(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function eue(e){return e<0?-e*e:e*e}function D1(e){var r=e(kr,kr),t=1;function n(){return t===1?e(kr,kr):t===.5?e(Jle,eue):e(U_(t),U_(1/t))}return r.exponent=function(i){return arguments.length?(t=+i,n()):t},aa(r)}function R1(){var e=D1(Gv());return e.copy=function(){return Ps(e,R1()).exponent(e.exponent())},Bt.apply(e,arguments),e}function rue(){return R1.apply(null,arguments).exponent(.5)}function W_(e){return Math.sign(e)*e*e}function tue(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function EI(){var e=I1(),r=[0,1],t=!1,n;function i(a){var o=tue(e(a));return isNaN(o)?n:t?Math.round(o):o}return i.invert=function(a){return e.invert(W_(a))},i.domain=function(a){return arguments.length?(e.domain(a),i):e.domain()},i.range=function(a){return arguments.length?(e.range((r=Array.from(a,sd)).map(W_)),i):r.slice()},i.rangeRound=function(a){return i.range(a).round(!0)},i.round=function(a){return arguments.length?(t=!!a,i):t},i.clamp=function(a){return arguments.length?(e.clamp(a),i):e.clamp()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return EI(e.domain(),r).round(t).clamp(e.clamp()).unknown(n)},Bt.apply(i,arguments),aa(i)}function xI(){var e=[],r=[],t=[],n;function i(){var o=0,l=Math.max(1,r.length);for(t=new Array(l-1);++o<l;)t[o-1]=ole(e,o/l);return a}function a(o){return o==null||isNaN(o=+o)?n:r[Os(t,o)]}return a.invertExtent=function(o){var l=r.indexOf(o);return l<0?[NaN,NaN]:[l>0?t[l-1]:e[0],l<t.length?t[l]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(let l of o)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Vi),i()},a.range=function(o){return arguments.length?(r=Array.from(o),i()):r.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.quantiles=function(){return t.slice()},a.copy=function(){return xI().domain(e).range(r).unknown(n)},Bt.apply(a,arguments)}function SI(){var e=0,r=1,t=1,n=[.5],i=[0,1],a;function o(u){return u!=null&&u<=u?i[Os(n,u,0,t)]:a}function l(){var u=-1;for(n=new Array(t);++u<t;)n[u]=((u+1)*r-(u-t)*e)/(t+1);return o}return o.domain=function(u){return arguments.length?([e,r]=u,e=+e,r=+r,l()):[e,r]},o.range=function(u){return arguments.length?(t=(i=Array.from(u)).length-1,l()):i.slice()},o.invertExtent=function(u){var s=i.indexOf(u);return s<0?[NaN,NaN]:s<1?[e,n[0]]:s>=t?[n[t-1],r]:[n[s-1],n[s]]},o.unknown=function(u){return arguments.length&&(a=u),o},o.thresholds=function(){return n.slice()},o.copy=function(){return SI().domain([e,r]).range(i).unknown(a)},Bt.apply(aa(o),arguments)}function _I(){var e=[.5],r=[0,1],t,n=1;function i(a){return a!=null&&a<=a?r[Os(e,a,0,n)]:t}return i.domain=function(a){return arguments.length?(e=Array.from(a),n=Math.min(e.length,r.length-1),i):e.slice()},i.range=function(a){return arguments.length?(r=Array.from(a),n=Math.min(e.length,r.length-1),i):r.slice()},i.invertExtent=function(a){var o=r.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(t=a,i):t},i.copy=function(){return _I().domain(e).range(r).unknown(t)},Bt.apply(i,arguments)}const Ah=new Date,Th=new Date;function tr(e,r,t,n){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=a=>(e(a=new Date(+a)),a),i.ceil=a=>(e(a=new Date(a-1)),r(a,1),e(a),a),i.round=a=>{const o=i(a),l=i.ceil(a);return a-o<l-a?o:l},i.offset=(a,o)=>(r(a=new Date(+a),o==null?1:Math.floor(o)),a),i.range=(a,o,l)=>{const u=[];if(a=i.ceil(a),l=l==null?1:Math.floor(l),!(a<o)||!(l>0))return u;let s;do u.push(s=new Date(+a)),r(a,l),e(a);while(s<a&&a<o);return u},i.filter=a=>tr(o=>{if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},(o,l)=>{if(o>=o)if(l<0)for(;++l<=0;)for(;r(o,-1),!a(o););else for(;--l>=0;)for(;r(o,1),!a(o););}),t&&(i.count=(a,o)=>(Ah.setTime(+a),Th.setTime(+o),e(Ah),e(Th),Math.floor(t(Ah,Th))),i.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(n?o=>n(o)%a===0:o=>i.count(0,o)%a===0):i)),i}const dd=tr(()=>{},(e,r)=>{e.setTime(+e+r)},(e,r)=>r-e);dd.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?tr(r=>{r.setTime(Math.floor(r/e)*e)},(r,t)=>{r.setTime(+r+t*e)},(r,t)=>(t-r)/e):dd);dd.range;const Wn=1e3,jt=Wn*60,Vn=jt*60,ei=Vn*24,F1=ei*7,V_=ei*30,kh=ei*365,Sa=tr(e=>{e.setTime(e-e.getMilliseconds())},(e,r)=>{e.setTime(+e+r*Wn)},(e,r)=>(r-e)/Wn,e=>e.getUTCSeconds());Sa.range;const z1=tr(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Wn)},(e,r)=>{e.setTime(+e+r*jt)},(e,r)=>(r-e)/jt,e=>e.getMinutes());z1.range;const B1=tr(e=>{e.setUTCSeconds(0,0)},(e,r)=>{e.setTime(+e+r*jt)},(e,r)=>(r-e)/jt,e=>e.getUTCMinutes());B1.range;const U1=tr(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Wn-e.getMinutes()*jt)},(e,r)=>{e.setTime(+e+r*Vn)},(e,r)=>(r-e)/Vn,e=>e.getHours());U1.range;const W1=tr(e=>{e.setUTCMinutes(0,0,0)},(e,r)=>{e.setTime(+e+r*Vn)},(e,r)=>(r-e)/Vn,e=>e.getUTCHours());W1.range;const As=tr(e=>e.setHours(0,0,0,0),(e,r)=>e.setDate(e.getDate()+r),(e,r)=>(r-e-(r.getTimezoneOffset()-e.getTimezoneOffset())*jt)/ei,e=>e.getDate()-1);As.range;const Yv=tr(e=>{e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCDate(e.getUTCDate()+r)},(e,r)=>(r-e)/ei,e=>e.getUTCDate()-1);Yv.range;const OI=tr(e=>{e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCDate(e.getUTCDate()+r)},(e,r)=>(r-e)/ei,e=>Math.floor(e/ei));OI.range;function Za(e){return tr(r=>{r.setDate(r.getDate()-(r.getDay()+7-e)%7),r.setHours(0,0,0,0)},(r,t)=>{r.setDate(r.getDate()+t*7)},(r,t)=>(t-r-(t.getTimezoneOffset()-r.getTimezoneOffset())*jt)/F1)}const Xv=Za(0),vd=Za(1),nue=Za(2),iue=Za(3),qo=Za(4),aue=Za(5),oue=Za(6);Xv.range;vd.range;nue.range;iue.range;qo.range;aue.range;oue.range;function Qa(e){return tr(r=>{r.setUTCDate(r.getUTCDate()-(r.getUTCDay()+7-e)%7),r.setUTCHours(0,0,0,0)},(r,t)=>{r.setUTCDate(r.getUTCDate()+t*7)},(r,t)=>(t-r)/F1)}const qv=Qa(0),pd=Qa(1),lue=Qa(2),uue=Qa(3),Zo=Qa(4),sue=Qa(5),cue=Qa(6);qv.range;pd.range;lue.range;uue.range;Zo.range;sue.range;cue.range;const V1=tr(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,r)=>{e.setMonth(e.getMonth()+r)},(e,r)=>r.getMonth()-e.getMonth()+(r.getFullYear()-e.getFullYear())*12,e=>e.getMonth());V1.range;const H1=tr(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCMonth(e.getUTCMonth()+r)},(e,r)=>r.getUTCMonth()-e.getUTCMonth()+(r.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());H1.range;const ri=tr(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,r)=>{e.setFullYear(e.getFullYear()+r)},(e,r)=>r.getFullYear()-e.getFullYear(),e=>e.getFullYear());ri.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:tr(r=>{r.setFullYear(Math.floor(r.getFullYear()/e)*e),r.setMonth(0,1),r.setHours(0,0,0,0)},(r,t)=>{r.setFullYear(r.getFullYear()+t*e)});ri.range;const ti=tr(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,r)=>{e.setUTCFullYear(e.getUTCFullYear()+r)},(e,r)=>r.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());ti.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:tr(r=>{r.setUTCFullYear(Math.floor(r.getUTCFullYear()/e)*e),r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0)},(r,t)=>{r.setUTCFullYear(r.getUTCFullYear()+t*e)});ti.range;function $I(e,r,t,n,i,a){const o=[[Sa,1,Wn],[Sa,5,5*Wn],[Sa,15,15*Wn],[Sa,30,30*Wn],[a,1,jt],[a,5,5*jt],[a,15,15*jt],[a,30,30*jt],[i,1,Vn],[i,3,3*Vn],[i,6,6*Vn],[i,12,12*Vn],[n,1,ei],[n,2,2*ei],[t,1,F1],[r,1,V_],[r,3,3*V_],[e,1,kh]];function l(s,c,f){const d=c<s;d&&([s,c]=[c,s]);const v=f&&typeof f.range=="function"?f:u(s,c,f),p=v?v.range(s,+c+1):[];return d?p.reverse():p}function u(s,c,f){const d=Math.abs(c-s)/f,v=$1(([,,m])=>m).right(o,d);if(v===o.length)return e.every(Dy(s/kh,c/kh,f));if(v===0)return dd.every(Math.max(Dy(s,c,f),1));const[p,y]=o[d/o[v-1][2]<o[v][2]/d?v-1:v];return p.every(y)}return[l,u]}const[fue,due]=$I(ti,H1,qv,OI,W1,B1),[vue,pue]=$I(ri,V1,Xv,As,U1,z1);function Ch(e){if(0<=e.y&&e.y<100){var r=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return r.setFullYear(e.y),r}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Ih(e){if(0<=e.y&&e.y<100){var r=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return r.setUTCFullYear(e.y),r}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Ul(e,r,t){return{y:e,m:r,d:t,H:0,M:0,S:0,L:0}}function hue(e){var r=e.dateTime,t=e.date,n=e.time,i=e.periods,a=e.days,o=e.shortDays,l=e.months,u=e.shortMonths,s=Wl(i),c=Vl(i),f=Wl(a),d=Vl(a),v=Wl(o),p=Vl(o),y=Wl(l),m=Vl(l),h=Wl(u),b=Vl(u),w={a:pe,A:C,b:M,B:D,c:null,d:q_,e:q_,f:Rue,g:Yue,G:que,H:Mue,I:Lue,j:Due,L:PI,m:Fue,M:zue,p:te,q:ne,Q:J_,s:eO,S:Bue,u:Uue,U:Wue,V:Vue,w:Hue,W:Kue,x:null,X:null,y:Gue,Y:Xue,Z:Zue,"%":Q_},E={a:Ar,A:Fe,b:Wt,B:at,c:null,d:Z_,e:Z_,f:rse,g:fse,G:vse,H:Que,I:Jue,j:ese,L:TI,m:tse,M:nse,p:fn,q:Dr,Q:J_,s:eO,S:ise,u:ase,U:ose,V:lse,w:use,W:sse,x:null,X:null,y:cse,Y:dse,Z:pse,"%":Q_},x={a:T,A:N,b:A,B:H,c:K,d:Y_,e:Y_,f:Cue,g:G_,G:K_,H:X_,I:X_,j:Pue,L:kue,m:$ue,M:Aue,p:P,q:Oue,Q:jue,s:Nue,S:Tue,u:wue,U:Eue,V:xue,w:bue,W:Sue,x:ee,X:re,y:G_,Y:K_,Z:_ue,"%":Iue};w.x=S(t,w),w.X=S(n,w),w.c=S(r,w),E.x=S(t,E),E.X=S(n,E),E.c=S(r,E);function S(z,L){return function(ce){var I=[],Rr=-1,we=0,ot=z.length,lt,la,Cb;for(ce instanceof Date||(ce=new Date(+ce));++Rr<ot;)z.charCodeAt(Rr)===37&&(I.push(z.slice(we,Rr)),(la=H_[lt=z.charAt(++Rr)])!=null?lt=z.charAt(++Rr):la=lt==="e"?" ":"0",(Cb=L[lt])&&(lt=Cb(ce,la)),I.push(lt),we=Rr+1);return I.push(z.slice(we,Rr)),I.join("")}}function _(z,L){return function(ce){var I=Ul(1900,void 0,1),Rr=O(I,z,ce+="",0),we,ot;if(Rr!=ce.length)return null;if("Q"in I)return new Date(I.Q);if("s"in I)return new Date(I.s*1e3+("L"in I?I.L:0));if(L&&!("Z"in I)&&(I.Z=0),"p"in I&&(I.H=I.H%12+I.p*12),I.m===void 0&&(I.m="q"in I?I.q:0),"V"in I){if(I.V<1||I.V>53)return null;"w"in I||(I.w=1),"Z"in I?(we=Ih(Ul(I.y,0,1)),ot=we.getUTCDay(),we=ot>4||ot===0?pd.ceil(we):pd(we),we=Yv.offset(we,(I.V-1)*7),I.y=we.getUTCFullYear(),I.m=we.getUTCMonth(),I.d=we.getUTCDate()+(I.w+6)%7):(we=Ch(Ul(I.y,0,1)),ot=we.getDay(),we=ot>4||ot===0?vd.ceil(we):vd(we),we=As.offset(we,(I.V-1)*7),I.y=we.getFullYear(),I.m=we.getMonth(),I.d=we.getDate()+(I.w+6)%7)}else("W"in I||"U"in I)&&("w"in I||(I.w="u"in I?I.u%7:"W"in I?1:0),ot="Z"in I?Ih(Ul(I.y,0,1)).getUTCDay():Ch(Ul(I.y,0,1)).getDay(),I.m=0,I.d="W"in I?(I.w+6)%7+I.W*7-(ot+5)%7:I.w+I.U*7-(ot+6)%7);return"Z"in I?(I.H+=I.Z/100|0,I.M+=I.Z%100,Ih(I)):Ch(I)}}function O(z,L,ce,I){for(var Rr=0,we=L.length,ot=ce.length,lt,la;Rr<we;){if(I>=ot)return-1;if(lt=L.charCodeAt(Rr++),lt===37){if(lt=L.charAt(Rr++),la=x[lt in H_?L.charAt(Rr++):lt],!la||(I=la(z,ce,I))<0)return-1}else if(lt!=ce.charCodeAt(I++))return-1}return I}function P(z,L,ce){var I=s.exec(L.slice(ce));return I?(z.p=c.get(I[0].toLowerCase()),ce+I[0].length):-1}function T(z,L,ce){var I=v.exec(L.slice(ce));return I?(z.w=p.get(I[0].toLowerCase()),ce+I[0].length):-1}function N(z,L,ce){var I=f.exec(L.slice(ce));return I?(z.w=d.get(I[0].toLowerCase()),ce+I[0].length):-1}function A(z,L,ce){var I=h.exec(L.slice(ce));return I?(z.m=b.get(I[0].toLowerCase()),ce+I[0].length):-1}function H(z,L,ce){var I=y.exec(L.slice(ce));return I?(z.m=m.get(I[0].toLowerCase()),ce+I[0].length):-1}function K(z,L,ce){return O(z,r,L,ce)}function ee(z,L,ce){return O(z,t,L,ce)}function re(z,L,ce){return O(z,n,L,ce)}function pe(z){return o[z.getDay()]}function C(z){return a[z.getDay()]}function M(z){return u[z.getMonth()]}function D(z){return l[z.getMonth()]}function te(z){return i[+(z.getHours()>=12)]}function ne(z){return 1+~~(z.getMonth()/3)}function Ar(z){return o[z.getUTCDay()]}function Fe(z){return a[z.getUTCDay()]}function Wt(z){return u[z.getUTCMonth()]}function at(z){return l[z.getUTCMonth()]}function fn(z){return i[+(z.getUTCHours()>=12)]}function Dr(z){return 1+~~(z.getUTCMonth()/3)}return{format:function(z){var L=S(z+="",w);return L.toString=function(){return z},L},parse:function(z){var L=_(z+="",!1);return L.toString=function(){return z},L},utcFormat:function(z){var L=S(z+="",E);return L.toString=function(){return z},L},utcParse:function(z){var L=_(z+="",!0);return L.toString=function(){return z},L}}}var H_={"-":"",_:" ",0:"0"},fr=/^\s*\d+/,mue=/^%/,yue=/[\\^$*+?|[\]().{}]/g;function de(e,r,t){var n=e<0?"-":"",i=(n?-e:e)+"",a=i.length;return n+(a<t?new Array(t-a+1).join(r)+i:i)}function gue(e){return e.replace(yue,"\\$&")}function Wl(e){return new RegExp("^(?:"+e.map(gue).join("|")+")","i")}function Vl(e){return new Map(e.map((r,t)=>[r.toLowerCase(),t]))}function bue(e,r,t){var n=fr.exec(r.slice(t,t+1));return n?(e.w=+n[0],t+n[0].length):-1}function wue(e,r,t){var n=fr.exec(r.slice(t,t+1));return n?(e.u=+n[0],t+n[0].length):-1}function Eue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.U=+n[0],t+n[0].length):-1}function xue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.V=+n[0],t+n[0].length):-1}function Sue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.W=+n[0],t+n[0].length):-1}function K_(e,r,t){var n=fr.exec(r.slice(t,t+4));return n?(e.y=+n[0],t+n[0].length):-1}function G_(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),t+n[0].length):-1}function _ue(e,r,t){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(r.slice(t,t+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),t+n[0].length):-1}function Oue(e,r,t){var n=fr.exec(r.slice(t,t+1));return n?(e.q=n[0]*3-3,t+n[0].length):-1}function $ue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.m=n[0]-1,t+n[0].length):-1}function Y_(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.d=+n[0],t+n[0].length):-1}function Pue(e,r,t){var n=fr.exec(r.slice(t,t+3));return n?(e.m=0,e.d=+n[0],t+n[0].length):-1}function X_(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.H=+n[0],t+n[0].length):-1}function Aue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.M=+n[0],t+n[0].length):-1}function Tue(e,r,t){var n=fr.exec(r.slice(t,t+2));return n?(e.S=+n[0],t+n[0].length):-1}function kue(e,r,t){var n=fr.exec(r.slice(t,t+3));return n?(e.L=+n[0],t+n[0].length):-1}function Cue(e,r,t){var n=fr.exec(r.slice(t,t+6));return n?(e.L=Math.floor(n[0]/1e3),t+n[0].length):-1}function Iue(e,r,t){var n=mue.exec(r.slice(t,t+1));return n?t+n[0].length:-1}function jue(e,r,t){var n=fr.exec(r.slice(t));return n?(e.Q=+n[0],t+n[0].length):-1}function Nue(e,r,t){var n=fr.exec(r.slice(t));return n?(e.s=+n[0],t+n[0].length):-1}function q_(e,r){return de(e.getDate(),r,2)}function Mue(e,r){return de(e.getHours(),r,2)}function Lue(e,r){return de(e.getHours()%12||12,r,2)}function Due(e,r){return de(1+As.count(ri(e),e),r,3)}function PI(e,r){return de(e.getMilliseconds(),r,3)}function Rue(e,r){return PI(e,r)+"000"}function Fue(e,r){return de(e.getMonth()+1,r,2)}function zue(e,r){return de(e.getMinutes(),r,2)}function Bue(e,r){return de(e.getSeconds(),r,2)}function Uue(e){var r=e.getDay();return r===0?7:r}function Wue(e,r){return de(Xv.count(ri(e)-1,e),r,2)}function AI(e){var r=e.getDay();return r>=4||r===0?qo(e):qo.ceil(e)}function Vue(e,r){return e=AI(e),de(qo.count(ri(e),e)+(ri(e).getDay()===4),r,2)}function Hue(e){return e.getDay()}function Kue(e,r){return de(vd.count(ri(e)-1,e),r,2)}function Gue(e,r){return de(e.getFullYear()%100,r,2)}function Yue(e,r){return e=AI(e),de(e.getFullYear()%100,r,2)}function Xue(e,r){return de(e.getFullYear()%1e4,r,4)}function que(e,r){var t=e.getDay();return e=t>=4||t===0?qo(e):qo.ceil(e),de(e.getFullYear()%1e4,r,4)}function Zue(e){var r=e.getTimezoneOffset();return(r>0?"-":(r*=-1,"+"))+de(r/60|0,"0",2)+de(r%60,"0",2)}function Z_(e,r){return de(e.getUTCDate(),r,2)}function Que(e,r){return de(e.getUTCHours(),r,2)}function Jue(e,r){return de(e.getUTCHours()%12||12,r,2)}function ese(e,r){return de(1+Yv.count(ti(e),e),r,3)}function TI(e,r){return de(e.getUTCMilliseconds(),r,3)}function rse(e,r){return TI(e,r)+"000"}function tse(e,r){return de(e.getUTCMonth()+1,r,2)}function nse(e,r){return de(e.getUTCMinutes(),r,2)}function ise(e,r){return de(e.getUTCSeconds(),r,2)}function ase(e){var r=e.getUTCDay();return r===0?7:r}function ose(e,r){return de(qv.count(ti(e)-1,e),r,2)}function kI(e){var r=e.getUTCDay();return r>=4||r===0?Zo(e):Zo.ceil(e)}function lse(e,r){return e=kI(e),de(Zo.count(ti(e),e)+(ti(e).getUTCDay()===4),r,2)}function use(e){return e.getUTCDay()}function sse(e,r){return de(pd.count(ti(e)-1,e),r,2)}function cse(e,r){return de(e.getUTCFullYear()%100,r,2)}function fse(e,r){return e=kI(e),de(e.getUTCFullYear()%100,r,2)}function dse(e,r){return de(e.getUTCFullYear()%1e4,r,4)}function vse(e,r){var t=e.getUTCDay();return e=t>=4||t===0?Zo(e):Zo.ceil(e),de(e.getUTCFullYear()%1e4,r,4)}function pse(){return"+0000"}function Q_(){return"%"}function J_(e){return+e}function eO(e){return Math.floor(+e/1e3)}var oo,CI,II;hse({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function hse(e){return oo=hue(e),CI=oo.format,oo.parse,II=oo.utcFormat,oo.utcParse,oo}function mse(e){return new Date(e)}function yse(e){return e instanceof Date?+e:+new Date(+e)}function K1(e,r,t,n,i,a,o,l,u,s){var c=I1(),f=c.invert,d=c.domain,v=s(".%L"),p=s(":%S"),y=s("%I:%M"),m=s("%I %p"),h=s("%a %d"),b=s("%b %d"),w=s("%B"),E=s("%Y");function x(S){return(u(S)<S?v:l(S)<S?p:o(S)<S?y:a(S)<S?m:n(S)<S?i(S)<S?h:b:t(S)<S?w:E)(S)}return c.invert=function(S){return new Date(f(S))},c.domain=function(S){return arguments.length?d(Array.from(S,yse)):d().map(mse)},c.ticks=function(S){var _=d();return e(_[0],_[_.length-1],S??10)},c.tickFormat=function(S,_){return _==null?x:s(_)},c.nice=function(S){var _=d();return(!S||typeof S.range!="function")&&(S=r(_[0],_[_.length-1],S??10)),S?d(gI(_,S)):c},c.copy=function(){return Ps(c,K1(e,r,t,n,i,a,o,l,u,s))},c}function gse(){return Bt.apply(K1(vue,pue,ri,V1,Xv,As,U1,z1,Sa,CI).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function bse(){return Bt.apply(K1(fue,due,ti,H1,qv,Yv,W1,B1,Sa,II).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Zv(){var e=0,r=1,t,n,i,a,o=kr,l=!1,u;function s(f){return f==null||isNaN(f=+f)?u:o(i===0?.5:(f=(a(f)-t)*i,l?Math.max(0,Math.min(1,f)):f))}s.domain=function(f){return arguments.length?([e,r]=f,t=a(e=+e),n=a(r=+r),i=t===n?0:1/(n-t),s):[e,r]},s.clamp=function(f){return arguments.length?(l=!!f,s):l},s.interpolator=function(f){return arguments.length?(o=f,s):o};function c(f){return function(d){var v,p;return arguments.length?([v,p]=d,o=f(v,p),s):[o(0),o(1)]}}return s.range=c(ml),s.rangeRound=c(C1),s.unknown=function(f){return arguments.length?(u=f,s):u},function(f){return a=f,t=f(e),n=f(r),i=t===n?0:1/(n-t),s}}function oa(e,r){return r.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function jI(){var e=aa(Zv()(kr));return e.copy=function(){return oa(e,jI())},fi.apply(e,arguments)}function NI(){var e=M1(Zv()).domain([1,10]);return e.copy=function(){return oa(e,NI()).base(e.base())},fi.apply(e,arguments)}function MI(){var e=L1(Zv());return e.copy=function(){return oa(e,MI()).constant(e.constant())},fi.apply(e,arguments)}function G1(){var e=D1(Zv());return e.copy=function(){return oa(e,G1()).exponent(e.exponent())},fi.apply(e,arguments)}function wse(){return G1.apply(null,arguments).exponent(.5)}function LI(){var e=[],r=kr;function t(n){if(n!=null&&!isNaN(n=+n))return r((Os(e,n,1)-1)/(e.length-1))}return t.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let i of n)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(Vi),t},t.interpolator=function(n){return arguments.length?(r=n,t):r},t.range=function(){return e.map((n,i)=>r(i/(e.length-1)))},t.quantiles=function(n){return Array.from({length:n+1},(i,a)=>ale(e,a/n))},t.copy=function(){return LI(r).domain(e)},fi.apply(t,arguments)}function Qv(){var e=0,r=.5,t=1,n=1,i,a,o,l,u,s=kr,c,f=!1,d;function v(y){return isNaN(y=+y)?d:(y=.5+((y=+c(y))-a)*(n*y<n*a?l:u),s(f?Math.max(0,Math.min(1,y)):y))}v.domain=function(y){return arguments.length?([e,r,t]=y,i=c(e=+e),a=c(r=+r),o=c(t=+t),l=i===a?0:.5/(a-i),u=a===o?0:.5/(o-a),n=a<i?-1:1,v):[e,r,t]},v.clamp=function(y){return arguments.length?(f=!!y,v):f},v.interpolator=function(y){return arguments.length?(s=y,v):s};function p(y){return function(m){var h,b,w;return arguments.length?([h,b,w]=m,s=Ile(y,[h,b,w]),v):[s(0),s(.5),s(1)]}}return v.range=p(ml),v.rangeRound=p(C1),v.unknown=function(y){return arguments.length?(d=y,v):d},function(y){return c=y,i=y(e),a=y(r),o=y(t),l=i===a?0:.5/(a-i),u=a===o?0:.5/(o-a),n=a<i?-1:1,v}}function DI(){var e=aa(Qv()(kr));return e.copy=function(){return oa(e,DI())},fi.apply(e,arguments)}function RI(){var e=M1(Qv()).domain([.1,1,10]);return e.copy=function(){return oa(e,RI()).base(e.base())},fi.apply(e,arguments)}function FI(){var e=L1(Qv());return e.copy=function(){return oa(e,FI()).constant(e.constant())},fi.apply(e,arguments)}function Y1(){var e=D1(Qv());return e.copy=function(){return oa(e,Y1()).exponent(e.exponent())},fi.apply(e,arguments)}function Ese(){return Y1.apply(null,arguments).exponent(.5)}const Jl=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:A1,scaleDiverging:DI,scaleDivergingLog:RI,scaleDivergingPow:Y1,scaleDivergingSqrt:Ese,scaleDivergingSymlog:FI,scaleIdentity:yI,scaleImplicit:Ry,scaleLinear:mI,scaleLog:bI,scaleOrdinal:P1,scalePoint:ule,scalePow:R1,scaleQuantile:xI,scaleQuantize:SI,scaleRadial:EI,scaleSequential:jI,scaleSequentialLog:NI,scaleSequentialPow:G1,scaleSequentialQuantile:LI,scaleSequentialSqrt:wse,scaleSequentialSymlog:MI,scaleSqrt:rue,scaleSymlog:wI,scaleThreshold:_I,scaleTime:gse,scaleUtc:bse,tickFormat:hI},Symbol.toStringTag,{value:"Module"}));function xse(e){if(e in Jl)return Jl[e]();var r="scale".concat(ms(e));if(r in Jl)return Jl[r]()}function rO(e,r,t){if(typeof e=="function")return e.copy().domain(r).range(t);if(e!=null){var n=xse(e);if(n!=null)return n.domain(r).range(t),n}}function X1(e,r,t,n){if(!(t==null||n==null))return typeof e.scale=="function"?rO(e.scale,t,n):rO(r,t,n)}function Sse(e){return"scale".concat(ms(e))}function _se(e){return Sse(e)in Jl}var zI=(e,r,t)=>{if(e!=null){var{scale:n,type:i}=e;if(n==="auto")return i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?"point":i==="category"?"band":"linear";if(typeof n=="string")return _se(n)?n:"point"}};function Ose(e,r){for(var t=0,n=e.length,i=e[0]<e[e.length-1];t<n;){var a=Math.floor((t+n)/2);(i?e[a]<r:e[a]>r)?t=a+1:n=a}return t}function BI(e,r){if(e){var t=r??e.domain(),n=t.map(a=>{var o;return(o=e(a))!==null&&o!==void 0?o:0}),i=e.range();if(!(t.length===0||i.length<2))return a=>{var o,l,u=Ose(n,a);if(u<=0)return t[0];if(u>=t.length)return t[t.length-1];var s=(o=n[u-1])!==null&&o!==void 0?o:0,c=(l=n[u])!==null&&l!==void 0?l:0;return Math.abs(a-s)<=Math.abs(a-c)?t[u-1]:t[u]}}}function $se(e){if(e!=null)return"invert"in e&&typeof e.invert=="function"?e.invert.bind(e):BI(e,void 0)}function tO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function hd(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?tO(Object(t),!0).forEach(function(n){Pse(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Pse(e,r,t){return(r=Ase(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ase(e){var r=Tse(e,"string");return typeof r=="symbol"?r:r+""}function Tse(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Uy=[0,"auto"],Xe={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0,niceTicks:"auto"},UI=(e,r)=>e.cartesianAxis.xAxis[r],di=(e,r)=>{var t=UI(e,r);return t??Xe},qe={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:Uy,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,niceTicks:"auto",width:bs},WI=(e,r)=>e.cartesianAxis.yAxis[r],vi=(e,r)=>{var t=WI(e,r);return t??qe},VI={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},q1=(e,r)=>{var t=e.cartesianAxis.zAxis[r];return t??VI},Lr=(e,r,t)=>{switch(r){case"xAxis":return di(e,t);case"yAxis":return vi(e,t);case"zAxis":return q1(e,t);case"angleAxis":return E1(e,t);case"radiusAxis":return x1(e,t);default:throw new Error("Unexpected axis type: ".concat(r))}},kse=(e,r,t)=>{switch(r){case"xAxis":return di(e,t);case"yAxis":return vi(e,t);default:throw new Error("Unexpected axis type: ".concat(r))}},Ts=(e,r,t)=>{switch(r){case"xAxis":return di(e,t);case"yAxis":return vi(e,t);case"angleAxis":return E1(e,t);case"radiusAxis":return x1(e,t);default:throw new Error("Unexpected axis type: ".concat(r))}},HI=e=>e.graphicalItems.cartesianItems.some(r=>r.type==="bar")||e.graphicalItems.polarItems.some(r=>r.type==="radialBar");function KI(e,r){return t=>{switch(e){case"xAxis":return"xAxisId"in t&&t.xAxisId===r;case"yAxis":return"yAxisId"in t&&t.yAxisId===r;case"zAxis":return"zAxisId"in t&&t.zAxisId===r;case"angleAxis":return"angleAxisId"in t&&t.angleAxisId===r;case"radiusAxis":return"radiusAxisId"in t&&t.radiusAxisId===r;default:return!1}}}var Z1=e=>e.graphicalItems.cartesianItems,Cse=$([sr,Vv],KI),GI=(e,r,t)=>e.filter(t).filter(n=>(r==null?void 0:r.includeHidden)===!0?!0:!n.hide),ks=$([Z1,Lr,Cse],GI,{memoizeOptions:{resultEqualityCheck:Kv}}),YI=$([ks],e=>e.filter(r=>r.type==="area"||r.type==="bar").filter(_1)),XI=e=>e.filter(r=>!("stackId"in r)||r.stackId===void 0),Ise=$([ks],XI),qI=e=>e.map(r=>r.data).filter(Boolean).flat(1),jse=$([ks],qI,{memoizeOptions:{resultEqualityCheck:Kv}}),ZI=(e,r)=>{var{chartData:t=[],dataStartIndex:n,dataEndIndex:i}=r;return e.length>0?e:t.slice(n,i+1)},Q1=$([jse,Fv],ZI),QI=(e,r,t)=>(r==null?void 0:r.dataKey)!=null?e.map(n=>({value:Be(n,r.dataKey)})):t.length>0?t.map(n=>n.dataKey).flatMap(n=>e.map(i=>({value:Be(i,n)}))):e.map(n=>({value:n})),Cs=$([Q1,Lr,ks],QI);function Mo(e){if(An(e)||e instanceof Date){var r=Number(e);if(fe(r))return r}}function nO(e){if(Array.isArray(e)){var r=[Mo(e[0]),Mo(e[1])];return Sn(r)?r:void 0}var t=Mo(e);if(t!=null)return[t,t]}function ni(e){return e.map(Mo).filter(Xr)}function Nse(e,r){var t=Mo(e),n=Mo(r);return t==null&&n==null?0:t==null?-1:n==null?1:t-n}var Mse=$([Cs],e=>e==null?void 0:e.map(r=>r.value).sort(Nse));function JI(e,r){switch(e){case"xAxis":return r.direction==="x";case"yAxis":return r.direction==="y";default:return!1}}function Lse(e,r,t){return!t||typeof r!="number"||Qn(r)?[]:t.length?ni(t.flatMap(n=>{var i=Be(e,n.dataKey),a,o;if(Array.isArray(i)?[a,o]=i:a=o=i,!(!fe(a)||!fe(o)))return[r-a,r+o]})):[]}var nr=e=>{var r=cr(e),t=hl(e);return Ts(e,r,t)},Is=$([nr],e=>e==null?void 0:e.dataKey),Dse=$([YI,Fv,nr],oI),ej=(e,r,t,n)=>{var i={},a=r.reduce((o,l)=>{if(l.stackId==null)return o;var u=o[l.stackId];return u==null&&(u=[]),u.push(l),o[l.stackId]=u,o},i);return Object.fromEntries(Object.entries(a).map(o=>{var[l,u]=o,s=n?[...u].reverse():u,c=s.map(aI);return[l,{stackedData:kne(e,c,t),graphicalItems:s}]}))},Rse=$([Dse,YI,zv,QC],ej),rj=(e,r,t,n)=>{var{dataStartIndex:i,dataEndIndex:a}=r;if(n==null&&t!=="zAxis"){var o=jne(e,i,a);if(!(o!=null&&o[0]===0&&o[1]===0))return o}},Fse=$([Lr],e=>e.allowDataOverflow),J1=e=>{var r;if(e==null||!("domain"in e))return Uy;if(e.domain!=null)return e.domain;if("ticks"in e&&e.ticks!=null){if(e.type==="number"){var t=ni(e.ticks);return[Math.min(...t),Math.max(...t)]}if(e.type==="category")return e.ticks.map(String)}return(r=e==null?void 0:e.domain)!==null&&r!==void 0?r:Uy},tj=$([Lr],J1),nj=$([tj,Fse],BC),zse=$([Rse,ia,sr,nj],rj,{memoizeOptions:{resultEqualityCheck:Hv}}),eb=e=>e.errorBars,Bse=(e,r,t)=>e.flatMap(n=>r[n.id]).filter(Boolean).filter(n=>JI(t,n)),md=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var i=t.filter(Boolean);if(i.length!==0){var a=i.flat(),o=Math.min(...a),l=Math.max(...a);return[o,l]}},ij=(e,r,t,n,i)=>{var a,o;if(t.length>0&&e.forEach(l=>{t.forEach(u=>{var s,c,f=(s=n[u.id])===null||s===void 0?void 0:s.filter(h=>JI(i,h)),d=Be(l,(c=r.dataKey)!==null&&c!==void 0?c:u.dataKey),v=Lse(l,d,f);if(v.length>=2){var p=Math.min(...v),y=Math.max(...v);(a==null||p<a)&&(a=p),(o==null||y>o)&&(o=y)}var m=nO(d);m!=null&&(a=a==null?m[0]:Math.min(a,m[0]),o=o==null?m[1]:Math.max(o,m[1]))})}),(r==null?void 0:r.dataKey)!=null&&e.forEach(l=>{var u=nO(Be(l,r.dataKey));u!=null&&(a=a==null?u[0]:Math.min(a,u[0]),o=o==null?u[1]:Math.max(o,u[1]))}),fe(a)&&fe(o))return[a,o]},Use=$([Q1,Lr,Ise,eb,sr],ij,{memoizeOptions:{resultEqualityCheck:Hv}});function Wse(e){var{value:r}=e;if(An(r)||r instanceof Date)return r}var Vse=(e,r,t)=>{var n=e.map(Wse).filter(i=>i!=null);return t&&(r.dataKey==null||r.allowDuplicatedCategory&&GT(n))?zC(0,e.length):r.allowDuplicatedCategory?n:Array.from(new Set(n))},aj=e=>e.referenceElements.dots,yl=(e,r,t)=>e.filter(n=>n.ifOverflow==="extendDomain").filter(n=>r==="xAxis"?n.xAxisId===t:n.yAxisId===t),Hse=$([aj,sr,Vv],yl),oj=e=>e.referenceElements.areas,Kse=$([oj,sr,Vv],yl),lj=e=>e.referenceElements.lines,Gse=$([lj,sr,Vv],yl),uj=(e,r)=>{if(e!=null){var t=ni(e.map(n=>r==="xAxis"?n.x:n.y));if(t.length!==0)return[Math.min(...t),Math.max(...t)]}},Yse=$(Hse,sr,uj),sj=(e,r)=>{if(e!=null){var t=ni(e.flatMap(n=>[r==="xAxis"?n.x1:n.y1,r==="xAxis"?n.x2:n.y2]));if(t.length!==0)return[Math.min(...t),Math.max(...t)]}},Xse=$([Kse,sr],sj);function qse(e){var r;if(e.x!=null)return ni([e.x]);var t=(r=e.segment)===null||r===void 0?void 0:r.map(n=>n.x);return t==null||t.length===0?[]:ni(t)}function Zse(e){var r;if(e.y!=null)return ni([e.y]);var t=(r=e.segment)===null||r===void 0?void 0:r.map(n=>n.y);return t==null||t.length===0?[]:ni(t)}var cj=(e,r)=>{if(e!=null){var t=e.flatMap(n=>r==="xAxis"?qse(n):Zse(n));if(t.length!==0)return[Math.min(...t),Math.max(...t)]}},Qse=$([Gse,sr],cj),Jse=$(Yse,Qse,Xse,(e,r,t)=>md(e,t,r)),fj=(e,r,t,n,i,a,o,l)=>{if(t!=null)return t;var u=o==="vertical"&&l==="xAxis"||o==="horizontal"&&l==="yAxis",s=u?md(n,a,i):md(a,i);return Noe(r,s,e.allowDataOverflow)},ece=$([Lr,tj,nj,zse,Use,Jse,Ne,sr],fj,{memoizeOptions:{resultEqualityCheck:Hv}}),rce=[0,1],dj=(e,r,t,n,i,a,o)=>{if(!((e==null||t==null||t.length===0)&&o===void 0)){var{dataKey:l,type:u}=e,s=ui(r,a);if(s&&l==null){var c;return zC(0,(c=t==null?void 0:t.length)!==null&&c!==void 0?c:0)}return u==="category"?Vse(n,e,s):i==="expand"?rce:o}},rb=$([Lr,Ne,Q1,Cs,zv,sr,ece],dj),gl=$([Lr,HI,g1],zI),vj=(e,r,t)=>{var{niceTicks:n}=r;if(n!=="none"){var i=J1(r),a=Array.isArray(i)&&(i[0]==="auto"||i[1]==="auto");if((n==="snap125"||n==="adaptive")&&r!=null&&r.tickCount&&Sn(e)){if(a)return v_(e,r.tickCount,r.allowDecimals,n);if(r.type==="number")return p_(e,r.tickCount,r.allowDecimals,n)}if(n==="auto"&&t==="linear"&&r!=null&&r.tickCount){if(a&&Sn(e))return v_(e,r.tickCount,r.allowDecimals,"adaptive");if(r.type==="number"&&Sn(e))return p_(e,r.tickCount,r.allowDecimals,"adaptive")}}},tb=$([rb,Ts,gl],vj),pj=(e,r,t,n)=>{if(n!=="angleAxis"&&(e==null?void 0:e.type)==="number"&&Sn(r)&&Array.isArray(t)&&t.length>0){var i,a,o=r[0],l=(i=t[0])!==null&&i!==void 0?i:0,u=r[1],s=(a=t[t.length-1])!==null&&a!==void 0?a:0;return[Math.min(o,l),Math.max(u,s)]}return r},tce=$([Lr,rb,tb,sr],pj),nce=$(Cs,Lr,(e,r)=>{if(!(!r||r.type!=="number")){var t=1/0,n=Array.from(ni(e.map(f=>f.value))).sort((f,d)=>f-d),i=n[0],a=n[n.length-1];if(i==null||a==null)return 1/0;var o=a-i;if(o===0)return 1/0;for(var l=0;l<n.length-1;l++){var u=n[l],s=n[l+1];if(!(u==null||s==null)){var c=s-u;t=Math.min(t,c)}}return t/o}}),hj=$(nce,Ne,Foe,br,(e,r,t,n,i)=>i,(e,r,t,n,i)=>{if(!fe(e))return 0;var a=r==="vertical"?n.height:n.width;if(i==="gap")return e*a/2;if(i==="no-gap"){var o=Yi(t,e*a),l=e*a/2;return l-o-(l-o)/a*o}return 0}),ice=(e,r,t)=>{var n=di(e,r);return n==null||typeof n.padding!="string"?0:hj(e,"xAxis",r,t,n.padding)},ace=(e,r,t)=>{var n=vi(e,r);return n==null||typeof n.padding!="string"?0:hj(e,"yAxis",r,t,n.padding)},oce=$(di,ice,(e,r)=>{var t,n;if(e==null)return{left:0,right:0};var{padding:i}=e;return typeof i=="string"?{left:r,right:r}:{left:((t=i.left)!==null&&t!==void 0?t:0)+r,right:((n=i.right)!==null&&n!==void 0?n:0)+r}}),lce=$(vi,ace,(e,r)=>{var t,n;if(e==null)return{top:0,bottom:0};var{padding:i}=e;return typeof i=="string"?{top:r,bottom:r}:{top:((t=i.top)!==null&&t!==void 0?t:0)+r,bottom:((n=i.bottom)!==null&&n!==void 0?n:0)+r}}),uce=$([br,oce,jv,Iv,(e,r,t)=>t],(e,r,t,n,i)=>{var{padding:a}=n;return i?[a.left,t.width-a.right]:[e.left+r.left,e.left+e.width-r.right]}),sce=$([br,Ne,lce,jv,Iv,(e,r,t)=>t],(e,r,t,n,i,a)=>{var{padding:o}=i;return a?[n.height-o.bottom,o.top]:r==="horizontal"?[e.top+e.height-t.bottom,e.top+t.top]:[e.top+t.top,e.top+e.height-t.bottom]}),js=(e,r,t,n)=>{var i;switch(r){case"xAxis":return uce(e,t,n);case"yAxis":return sce(e,t,n);case"zAxis":return(i=q1(e,t))===null||i===void 0?void 0:i.range;case"angleAxis":return tI(e);case"radiusAxis":return nI(e,t);default:return}},mj=$([Lr,js],Bv),cce=$([gl,tce],Goe),nb=$([Lr,gl,cce,mj],X1),yj=(e,r,t,n)=>{if(!(t==null||t.dataKey==null)){var{type:i,scale:a}=t,o=ui(e,n);if(o&&(i==="number"||a!=="auto"))return r.map(l=>l.value)}},ib=$([Ne,Cs,Ts,sr],yj),Jv=$([nb],O1);$([nb],$se);$([nb,Mse],BI);$([ks,eb,sr],Bse);function gj(e,r){return e.id<r.id?-1:e.id>r.id?1:0}var ep=(e,r)=>r,rp=(e,r,t)=>t,fce=$(kv,ep,rp,(e,r,t)=>e.filter(n=>n.orientation===r).filter(n=>n.mirror===t).sort(gj)),dce=$(Cv,ep,rp,(e,r,t)=>e.filter(n=>n.orientation===r).filter(n=>n.mirror===t).sort(gj)),bj=(e,r)=>({width:e.width,height:r.height}),vce=(e,r)=>{var t=typeof r.width=="number"?r.width:bs;return{width:t,height:e.height}},pce=$(br,di,bj),hce=(e,r,t)=>{switch(r){case"top":return e.top;case"bottom":return t-e.bottom;default:return 0}},mce=(e,r,t)=>{switch(r){case"left":return e.left;case"right":return t-e.right;default:return 0}},yce=$(ci,br,fce,ep,rp,(e,r,t,n,i)=>{var a={},o;return t.forEach(l=>{var u=bj(r,l);o==null&&(o=hce(r,n,e));var s=n==="top"&&!i||n==="bottom"&&i;a[l.id]=o-Number(s)*u.height,o+=(s?-1:1)*u.height}),a}),gce=$(si,br,dce,ep,rp,(e,r,t,n,i)=>{var a={},o;return t.forEach(l=>{var u=vce(r,l);o==null&&(o=mce(r,n,e));var s=n==="left"&&!i||n==="right"&&i;a[l.id]=o-Number(s)*u.width,o+=(s?-1:1)*u.width}),a}),bce=(e,r)=>{var t=di(e,r);if(t!=null)return yce(e,t.orientation,t.mirror)},wce=$([br,di,bce,(e,r)=>r],(e,r,t,n)=>{if(r!=null){var i=t==null?void 0:t[n];return i==null?{x:e.left,y:0}:{x:e.left,y:i}}}),Ece=(e,r)=>{var t=vi(e,r);if(t!=null)return gce(e,t.orientation,t.mirror)},xce=$([br,vi,Ece,(e,r)=>r],(e,r,t,n)=>{if(r!=null){var i=t==null?void 0:t[n];return i==null?{x:0,y:e.top}:{x:i,y:e.top}}}),Sce=$(br,vi,(e,r)=>{var t=typeof r.width=="number"?r.width:bs;return{width:t,height:e.height}}),wj=(e,r,t,n)=>{if(t!=null){var{allowDuplicatedCategory:i,type:a,dataKey:o}=t,l=ui(e,n),u=r.map(s=>s.value);if(o&&l&&a==="category"&&i&&GT(u))return u}},ab=$([Ne,Cs,Lr,sr],wj),iO=$([Ne,kse,gl,Jv,ab,ib,js,tb,sr],(e,r,t,n,i,a,o,l,u)=>{if(r!=null){var s=ui(e,u);return{angle:r.angle,interval:r.interval,minTickGap:r.minTickGap,orientation:r.orientation,tick:r.tick,tickCount:r.tickCount,tickFormatter:r.tickFormatter,ticks:r.ticks,type:r.type,unit:r.unit,axisType:u,categoricalDomain:a,duplicateDomain:i,isCategorical:s,niceTicks:l,range:o,realScaleType:t,scale:n}}}),_ce=(e,r,t,n,i,a,o,l,u)=>{if(!(r==null||n==null)){var s=ui(e,u),{type:c,ticks:f,tickCount:d}=r,v=t==="scaleBand"&&typeof n.bandwidth=="function"?n.bandwidth()/2:2,p=c==="category"&&n.bandwidth?n.bandwidth()/v:0;p=u==="angleAxis"&&a!=null&&a.length>=2?Ct(a[0]-a[1])*2*p:p;var y=f||i;return y?y.map((m,h)=>{var b=o?o.indexOf(m):m,w=n.map(b);return fe(w)?{index:h,coordinate:w+p,value:m,offset:p}:null}).filter(Xr):s&&l?l.map((m,h)=>{var b=n.map(m);return fe(b)?{coordinate:b+p,value:m,index:h,offset:p}:null}).filter(Xr):n.ticks?n.ticks(d).map((m,h)=>{var b=n.map(m);return fe(b)?{coordinate:b+p,value:m,index:h,offset:p}:null}).filter(Xr):n.domain().map((m,h)=>{var b=n.map(m);return fe(b)?{coordinate:b+p,value:o?o[m]:m,index:h,offset:p}:null}).filter(Xr)}},Ej=$([Ne,Ts,gl,Jv,tb,js,ab,ib,sr],_ce),Oce=(e,r,t,n,i,a,o)=>{if(!(r==null||t==null||n==null||n[0]===n[1])){var l=ui(e,o),{tickCount:u}=r,s=0;return s=o==="angleAxis"&&(n==null?void 0:n.length)>=2?Ct(n[0]-n[1])*2*s:s,l&&a?a.map((c,f)=>{var d=t.map(c);return fe(d)?{coordinate:d+s,value:c,index:f,offset:s}:null}).filter(Xr):t.ticks?t.ticks(u).map((c,f)=>{var d=t.map(c);return fe(d)?{coordinate:d+s,value:c,index:f,offset:s}:null}).filter(Xr):t.domain().map((c,f)=>{var d=t.map(c);return fe(d)?{coordinate:d+s,value:i?i[c]:c,index:f,offset:s}:null}).filter(Xr)}},tp=$([Ne,Ts,Jv,js,ab,ib,sr],Oce),np=$(Lr,Jv,(e,r)=>{if(!(e==null||r==null))return hd(hd({},e),{},{scale:r})}),$ce=$([Lr,gl,rb,mj],X1),Pce=$([$ce],O1),Ace=$((e,r,t)=>q1(e,t),Pce,(e,r)=>{if(!(e==null||r==null))return hd(hd({},e),{},{scale:r})}),Tce=$([Ne,kv,Cv],(e,r,t)=>{switch(e){case"horizontal":return r.some(n=>n.reversed)?"right-to-left":"left-to-right";case"vertical":return t.some(n=>n.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),kce=(e,r,t)=>{var n;return(n=e.renderedTicks[r])===null||n===void 0?void 0:n[t]};$([kce],e=>{if(!(!e||e.length===0))return r=>{var t,n=1/0,i=e[0];for(var a of e){var o=Math.abs(a.coordinate-r);o<n&&(n=o,i=a)}return(t=i)===null||t===void 0?void 0:t.value}});var xj=e=>e.options.defaultTooltipEventType,Sj=e=>e.options.validateTooltipEventTypes;function _j(e,r,t){if(e==null)return r;var n=e?"axis":"item";return t==null?r:t.includes(n)?n:r}function ob(e,r){var t=xj(e),n=Sj(e);return _j(r,t,n)}function Cce(e){return V(r=>ob(r,e))}var Oj=(e,r)=>{var t,n=Number(r);if(!(Qn(n)||r==null))return n>=0?e==null||(t=e[n])===null||t===void 0?void 0:t.value:void 0},Ice=e=>e.tooltip.settings,Ii={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},jce={itemInteraction:{click:Ii,hover:Ii},axisInteraction:{click:Ii,hover:Ii},keyboardInteraction:Ii,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},$j=$r({name:"tooltip",initialState:jce,reducers:{addTooltipEntrySettings:{reducer(e,r){e.tooltipItemPayloads.push(r.payload)},prepare:_e()},replaceTooltipEntrySettings:{reducer(e,r){var{prev:t,next:n}=r.payload,i=It(e).tooltipItemPayloads.indexOf(t);i>-1&&(e.tooltipItemPayloads[i]=n)},prepare:_e()},removeTooltipEntrySettings:{reducer(e,r){var t=It(e).tooltipItemPayloads.indexOf(r.payload);t>-1&&e.tooltipItemPayloads.splice(t,1)},prepare:_e()},setTooltipSettingsState(e,r){e.settings=r.payload},setActiveMouseOverItemIndex(e,r){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=r.payload.activeIndex,e.itemInteraction.hover.dataKey=r.payload.activeDataKey,e.itemInteraction.hover.graphicalItemId=r.payload.activeGraphicalItemId,e.itemInteraction.hover.coordinate=r.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,r){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=r.payload.activeIndex,e.itemInteraction.click.dataKey=r.payload.activeDataKey,e.itemInteraction.click.graphicalItemId=r.payload.activeGraphicalItemId,e.itemInteraction.click.coordinate=r.payload.activeCoordinate},setMouseOverAxisIndex(e,r){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=r.payload.activeIndex,e.axisInteraction.hover.dataKey=r.payload.activeDataKey,e.axisInteraction.hover.coordinate=r.payload.activeCoordinate},setMouseClickAxisIndex(e,r){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=r.payload.activeIndex,e.axisInteraction.click.dataKey=r.payload.activeDataKey,e.axisInteraction.click.coordinate=r.payload.activeCoordinate},setSyncInteraction(e,r){e.syncInteraction=r.payload},setKeyboardInteraction(e,r){e.keyboardInteraction.active=r.payload.active,e.keyboardInteraction.index=r.payload.activeIndex,e.keyboardInteraction.coordinate=r.payload.activeCoordinate}}}),{addTooltipEntrySettings:Nce,replaceTooltipEntrySettings:Mce,removeTooltipEntrySettings:Lce,setTooltipSettingsState:Dce,setActiveMouseOverItemIndex:Pj,mouseLeaveItem:Rce,mouseLeaveChart:Aj,setActiveClickItemIndex:Fce,setMouseOverAxisIndex:Tj,setMouseClickAxisIndex:zce,setSyncInteraction:Wy,setKeyboardInteraction:yd}=$j.actions,Bce=$j.reducer;function aO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Pc(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?aO(Object(t),!0).forEach(function(n){Uce(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):aO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Uce(e,r,t){return(r=Wce(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Wce(e){var r=Vce(e,"string");return typeof r=="symbol"?r:r+""}function Vce(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Hce(e,r,t){return r==="axis"?t==="click"?e.axisInteraction.click:e.axisInteraction.hover:t==="click"?e.itemInteraction.click:e.itemInteraction.hover}function Kce(e){return e.index!=null}var kj=(e,r,t,n)=>{if(r==null)return Ii;var i=Hce(e,r,t);if(i==null)return Ii;if(i.active)return i;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var a=e.settings.active===!0;if(Kce(i)){if(a)return Pc(Pc({},i),{},{active:!0})}else if(n!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:n,graphicalItemId:void 0};return Pc(Pc({},Ii),{},{coordinate:i.coordinate})};function Gce(e){if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(e instanceof Date){var r=e.valueOf();return Number.isFinite(r)?r:void 0}var t=Number(e);return Number.isFinite(t)?t:void 0}function Yce(e,r){var t=Gce(e),n=r[0],i=r[1];if(t===void 0)return!1;var a=Math.min(n,i),o=Math.max(n,i);return t>=a&&t<=o}function Xce(e,r,t){if(t==null||r==null)return!0;var n=Be(e,r);return n==null||!Sn(t)?!0:Yce(n,t)}var lb=(e,r,t,n)=>{var i=e==null?void 0:e.index;if(i==null)return null;var a=Number(i);if(!fe(a))return i;var o=0,l=1/0;r.length>0&&(l=r.length-1);var u=Math.max(o,Math.min(a,l)),s=r[u];return s==null||Xce(s,t,n)?String(u):null},Cj=(e,r,t,n,i,a,o)=>{if(a!=null){var l=o[0],u=l==null?void 0:l.getPosition(a);if(u!=null)return u;var s=i==null?void 0:i[Number(a)];if(s)switch(t){case"horizontal":return{x:s.coordinate,y:(n.top+r)/2};default:return{x:(n.left+e)/2,y:s.coordinate}}}},Ij=(e,r,t,n)=>{if(r==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var i;if(t==="hover"?i=e.itemInteraction.hover.graphicalItemId:i=e.itemInteraction.click.graphicalItemId,e.syncInteraction.active&&i==null)return e.tooltipItemPayloads;if(i==null&&n!=null){var a=e.tooltipItemPayloads[0];return a!=null?[a]:[]}return e.tooltipItemPayloads.filter(o=>{var l;return((l=o.settings)===null||l===void 0?void 0:l.graphicalItemId)===i})},jj=e=>e.options.tooltipPayloadSearcher,bl=e=>e.tooltip;function oO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function lO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?oO(Object(t),!0).forEach(function(n){qce(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function qce(e,r,t){return(r=Zce(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Zce(e){var r=Qce(e,"string");return typeof r=="symbol"?r:r+""}function Qce(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Jce(e){if(typeof e=="string"||typeof e=="number")return e}function efe(e){if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return e}function rfe(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e=="function")return r=>e(r)}function uO(e){if(typeof e=="string")return e}function tfe(e){if(!(e==null||typeof e!="object")){var r="name"in e?Jce(e.name):void 0,t="unit"in e?efe(e.unit):void 0,n="dataKey"in e?rfe(e.dataKey):void 0,i="payload"in e?e.payload:void 0,a="color"in e?uO(e.color):void 0,o="fill"in e?uO(e.fill):void 0;return{name:r,unit:t,dataKey:n,payload:i,color:a,fill:o}}}function nfe(e,r){return e??r}var Nj=(e,r,t,n,i,a,o)=>{if(!(r==null||a==null)){var{chartData:l,computedData:u,dataStartIndex:s,dataEndIndex:c}=t,f=[];return e.reduce((d,v)=>{var p,{dataDefinedOnItem:y,settings:m}=v,h=nfe(y,l),b=Array.isArray(h)?iC(h,s,c):h,w=(p=m==null?void 0:m.dataKey)!==null&&p!==void 0?p:n,E=m==null?void 0:m.nameKey,x;if(n&&Array.isArray(b)&&!Array.isArray(b[0])&&o==="axis"?x=YT(b,n,i):x=a(b,r,u,E),Array.isArray(x))x.forEach(_=>{var O,P,T=tfe(_),N=T==null?void 0:T.name,A=T==null?void 0:T.dataKey,H=T==null?void 0:T.payload,K=lO(lO({},m),{},{name:N,unit:T==null?void 0:T.unit,color:(O=T==null?void 0:T.color)!==null&&O!==void 0?O:m==null?void 0:m.color,fill:(P=T==null?void 0:T.fill)!==null&&P!==void 0?P:m==null?void 0:m.fill});d.push(fS({tooltipEntrySettings:K,dataKey:A,payload:H,value:Be(H,A),name:N==null?void 0:String(N)}))});else{var S;d.push(fS({tooltipEntrySettings:m,dataKey:w,payload:x,value:Be(x,w),name:(S=Be(x,E))!==null&&S!==void 0?S:m==null?void 0:m.name}))}return d},f)}},ub=$([nr,HI,g1],zI),ife=$([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,r)=>[...e,...r]),afe=$([cr,hl],KI),wl=$([ife,nr,afe],GI,{memoizeOptions:{resultEqualityCheck:Kv}}),ofe=$([wl],e=>e.filter(_1)),lfe=$([wl],qI,{memoizeOptions:{resultEqualityCheck:Kv}}),El=$([lfe,ia],ZI),ufe=$([ofe,ia,nr],oI),sb=$([El,nr,wl],QI),Mj=$([nr],J1),sfe=$([nr],e=>e.allowDataOverflow),Lj=$([Mj,sfe],BC),cfe=$([wl],e=>e.filter(_1)),ffe=$([ufe,cfe,zv,QC],ej),dfe=$([ffe,ia,cr,Lj],rj),vfe=$([wl],XI),pfe=$([El,nr,vfe,eb,cr],ij,{memoizeOptions:{resultEqualityCheck:Hv}}),hfe=$([aj,cr,hl],yl),mfe=$([hfe,cr],uj),yfe=$([oj,cr,hl],yl),gfe=$([yfe,cr],sj),bfe=$([lj,cr,hl],yl),wfe=$([bfe,cr],cj),Efe=$([mfe,wfe,gfe],md),xfe=$([nr,Mj,Lj,dfe,pfe,Efe,Ne,cr],fj),Ns=$([nr,Ne,El,sb,zv,cr,xfe],dj),Sfe=$([Ns,nr,ub],vj),_fe=$([nr,Ns,Sfe,cr],pj),Dj=e=>{var r=cr(e),t=hl(e),n=!1;return js(e,r,t,n)},Rj=$([nr,Dj],Bv),Ofe=$([nr,ub,_fe,Rj],X1),Fj=$([Ofe],O1),$fe=$([Ne,sb,nr,cr],wj),Pfe=$([Ne,sb,nr,cr],yj),Afe=(e,r,t,n,i,a,o,l)=>{if(r){var{type:u}=r,s=ui(e,l);if(n){var c=t==="scaleBand"&&n.bandwidth?n.bandwidth()/2:2,f=u==="category"&&n.bandwidth?n.bandwidth()/c:0;return f=l==="angleAxis"&&i!=null&&(i==null?void 0:i.length)>=2?Ct(i[0]-i[1])*2*f:f,s&&o?o.map((d,v)=>{var p=n.map(d);return fe(p)?{coordinate:p+f,value:d,index:v,offset:f}:null}).filter(Xr):n.domain().map((d,v)=>{var p=n.map(d);return fe(p)?{coordinate:p+f,value:a?a[d]:d,index:v,offset:f}:null}).filter(Xr)}}},pi=$([Ne,nr,ub,Fj,Dj,$fe,Pfe,cr],Afe),cb=$([xj,Sj,Ice],(e,r,t)=>_j(t.shared,e,r)),zj=e=>e.tooltip.settings.trigger,fb=e=>e.tooltip.settings.defaultIndex,Ms=$([bl,cb,zj,fb],kj),Qo=$([Ms,El,Is,Ns],lb),Bj=$([pi,Qo],Oj),Tfe=$([Ms],e=>{if(e)return e.dataKey}),kfe=$([Ms],e=>{if(e)return e.graphicalItemId}),Uj=$([bl,cb,zj,fb],Ij),Cfe=$([si,ci,Ne,br,pi,fb,Uj],Cj),Ife=$([Ms,Cfe],(e,r)=>e!=null&&e.coordinate?e.coordinate:r),jfe=$([Ms],e=>{var r;return(r=e==null?void 0:e.active)!==null&&r!==void 0?r:!1}),Nfe=$([Uj,Qo,ia,Is,Bj,jj,cb],Nj),Mfe=$([Nfe],e=>{if(e!=null){var r=e.map(t=>t.payload).filter(t=>t!=null);return Array.from(new Set(r))}});function sO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function cO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?sO(Object(t),!0).forEach(function(n){Lfe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Lfe(e,r,t){return(r=Dfe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Dfe(e){var r=Rfe(e,"string");return typeof r=="symbol"?r:r+""}function Rfe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Ffe=()=>V(nr),zfe=()=>{var e=Ffe(),r=V(pi),t=V(Fj);return Gf(!e||!t?void 0:cO(cO({},e),{},{scale:t}),r)};function fO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function lo(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?fO(Object(t),!0).forEach(function(n){Bfe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Bfe(e,r,t){return(r=Ufe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ufe(e){var r=Wfe(e,"string");return typeof r=="symbol"?r:r+""}function Wfe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Vfe=(e,r,t,n)=>{var i=r.find(a=>a&&a.index===t);if(i){if(e==="horizontal")return{x:i.coordinate,y:n.relativeY};if(e==="vertical")return{x:n.relativeX,y:i.coordinate}}return{x:0,y:0}},Hfe=(e,r,t,n)=>{var i=r.find(s=>s&&s.index===t);if(i){if(e==="centric"){var a=i.coordinate,{radius:o}=n;return lo(lo(lo({},n),hr(n.cx,n.cy,o,a)),{},{angle:a,radius:o})}var l=i.coordinate,{angle:u}=n;return lo(lo(lo({},n),hr(n.cx,n.cy,l,u)),{},{angle:u,radius:l})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function Kfe(e,r){var{relativeX:t,relativeY:n}=e;return t>=r.left&&t<=r.left+r.width&&n>=r.top&&n<=r.top+r.height}var Wj=(e,r,t,n,i)=>{var a,o=(a=r==null?void 0:r.length)!==null&&a!==void 0?a:0;if(o<=1||e==null)return 0;if(n==="angleAxis"&&i!=null&&Math.abs(Math.abs(i[1]-i[0])-360)<=1e-6)for(var l=0;l<o;l++){var u,s,c,f,d,v=l>0?(u=t[l-1])===null||u===void 0?void 0:u.coordinate:(s=t[o-1])===null||s===void 0?void 0:s.coordinate,p=(c=t[l])===null||c===void 0?void 0:c.coordinate,y=l>=o-1?(f=t[0])===null||f===void 0?void 0:f.coordinate:(d=t[l+1])===null||d===void 0?void 0:d.coordinate,m=void 0;if(!(v==null||p==null||y==null))if(Ct(p-v)!==Ct(y-p)){var h=[];if(Ct(y-p)===Ct(i[1]-i[0])){m=y;var b=p+i[1]-i[0];h[0]=Math.min(b,(b+v)/2),h[1]=Math.max(b,(b+v)/2)}else{m=v;var w=y+i[1]-i[0];h[0]=Math.min(p,(w+p)/2),h[1]=Math.max(p,(w+p)/2)}var E=[Math.min(p,(m+p)/2),Math.max(p,(m+p)/2)];if(e>E[0]&&e<=E[1]||e>=h[0]&&e<=h[1]){var x;return(x=t[l])===null||x===void 0?void 0:x.index}}else{var S=Math.min(v,y),_=Math.max(v,y);if(e>(S+p)/2&&e<=(_+p)/2){var O;return(O=t[l])===null||O===void 0?void 0:O.index}}}else if(r)for(var P=0;P<o;P++){var T=r[P];if(T!=null){var N=r[P+1],A=r[P-1];if(P===0&&N!=null&&e<=(T.coordinate+N.coordinate)/2||P===o-1&&A!=null&&e>(T.coordinate+A.coordinate)/2||P>0&&P<o-1&&A!=null&&N!=null&&e>(T.coordinate+A.coordinate)/2&&e<=(T.coordinate+N.coordinate)/2)return T.index}}return-1},Gfe=()=>V(g1),db=(e,r)=>r,Vj=(e,r,t)=>t,vb=(e,r,t,n)=>n,Yfe=$(pi,e=>bv(e,r=>r.coordinate)),pb=$([bl,db,Vj,vb],kj),hb=$([pb,El,Is,Ns],lb),Xfe=(e,r,t)=>{if(r!=null){var n=bl(e);return r==="axis"?t==="hover"?n.axisInteraction.hover.dataKey:n.axisInteraction.click.dataKey:t==="hover"?n.itemInteraction.hover.dataKey:n.itemInteraction.click.dataKey}},Hj=$([bl,db,Vj,vb],Ij),gd=$([si,ci,Ne,br,pi,vb,Hj],Cj),qfe=$([pb,gd],(e,r)=>{var t;return(t=e.coordinate)!==null&&t!==void 0?t:r}),Kj=$([pi,hb],Oj),Zfe=$([Hj,hb,ia,Is,Kj,jj,db],Nj),Qfe=$([pb,hb],(e,r)=>({isActive:e.active&&r!=null,activeIndex:r})),Jfe=(e,r,t,n,i,a,o)=>{if(!(!e||!t||!n||!i)&&Kfe(e,o)){var l=Nne(e,r),u=Wj(l,a,i,t,n),s=Vfe(r,i,u,e);return{activeIndex:String(u),activeCoordinate:s}}},ede=(e,r,t,n,i,a,o)=>{if(!(!e||!n||!i||!a||!t)){var l=Poe(e,t);if(l){var u=Mne(l,r),s=Wj(u,o,a,n,i),c=Hfe(r,a,s,l);return{activeIndex:String(s),activeCoordinate:c}}}},rde=(e,r,t,n,i,a,o,l)=>{if(!(!e||!r||!n||!i||!a))return r==="horizontal"||r==="vertical"?Jfe(e,r,n,i,a,o,l):ede(e,r,t,n,i,a,o)},tde=$(e=>e.zIndex.zIndexMap,(e,r)=>r,(e,r,t)=>t,(e,r,t)=>{if(r!=null){var n=e[r];if(n!=null)return t?n.panoramaElement:n.element}}),nde=$(e=>e.zIndex.zIndexMap,e=>{var r=Object.keys(e).map(n=>parseInt(n,10)).concat(Object.values(rr)),t=Array.from(new Set(r));return t.sort((n,i)=>n-i)},{memoizeOptions:{resultEqualityCheck:Koe}});function dO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function vO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?dO(Object(t),!0).forEach(function(n){ide(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ide(e,r,t){return(r=ade(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ade(e){var r=ode(e,"string");return typeof r=="symbol"?r:r+""}function ode(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var lde={},ude={zIndexMap:Object.values(rr).reduce((e,r)=>vO(vO({},e),{},{[r]:{element:void 0,panoramaElement:void 0,consumers:0}}),lde)},sde=new Set(Object.values(rr));function cde(e){return sde.has(e)}var Gj=$r({name:"zIndex",initialState:ude,reducers:{registerZIndexPortal:{reducer:(e,r)=>{var{zIndex:t}=r.payload;e.zIndexMap[t]?e.zIndexMap[t].consumers+=1:e.zIndexMap[t]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:_e()},unregisterZIndexPortal:{reducer:(e,r)=>{var{zIndex:t}=r.payload;e.zIndexMap[t]&&(e.zIndexMap[t].consumers-=1,e.zIndexMap[t].consumers<=0&&!cde(t)&&delete e.zIndexMap[t])},prepare:_e()},registerZIndexPortalElement:{reducer:(e,r)=>{var{zIndex:t,element:n,isPanorama:i}=r.payload;e.zIndexMap[t]?i?e.zIndexMap[t].panoramaElement=n:e.zIndexMap[t].element=n:e.zIndexMap[t]={consumers:0,element:i?void 0:n,panoramaElement:i?n:void 0}},prepare:_e()},unregisterZIndexPortalElement:{reducer:(e,r)=>{var{zIndex:t}=r.payload;e.zIndexMap[t]&&(r.payload.isPanorama?e.zIndexMap[t].panoramaElement=void 0:e.zIndexMap[t].element=void 0)},prepare:_e()}}}),{registerZIndexPortal:fde,unregisterZIndexPortal:dde,registerZIndexPortalElement:vde,unregisterZIndexPortalElement:pde}=Gj.actions,hde=Gj.reducer;function cn(e){var{zIndex:r,children:t}=e,n=sie(),i=n&&r!==void 0&&r!==0,a=Pr(),o=Pe();g.useLayoutEffect(()=>i?(o(fde({zIndex:r})),()=>{o(dde({zIndex:r}))}):qa,[o,r,i]);var l=V(u=>tde(u,r,a));return i?l?Ud.createPortal(t,l):null:t}function Vy(){return Vy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vy.apply(null,arguments)}function pO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ac(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?pO(Object(t),!0).forEach(function(n){mde(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function mde(e,r,t){return(r=yde(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function yde(e){var r=gde(e,"string");return typeof r=="symbol"?r:r+""}function gde(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function bde(e){var{cursor:r,cursorComp:t,cursorProps:n}=e;return g.isValidElement(r)?g.cloneElement(r,n):g.createElement(t,n)}function wde(e){var r,{coordinate:t,payload:n,index:i,offset:a,tooltipAxisBandSize:o,layout:l,cursor:u,tooltipEventType:s,chartName:c}=e,f=t,d=n,v=i;if(!u||!f||c!=="ScatterChart"&&s!=="axis")return null;var p,y,m;if(c==="ScatterChart")p=f,y=Bae,m=rr.cursorLine;else if(c==="BarChart")p=Uae(l,f,a,o),y=jC,m=rr.cursorRectangle;else if(l==="radial"&&qT(f)){var{cx:h,cy:b,radius:w,startAngle:E,endAngle:x}=NC(f);p={cx:h,cy:b,startAngle:E,endAngle:x,innerRadius:w,outerRadius:w},y=LC,m=rr.cursorLine}else p={points:Coe(l,f,a)},y=p1,m=rr.cursorLine;var S=typeof u=="object"&&"className"in u?u.className:void 0,_=Ac(Ac(Ac(Ac({stroke:"#ccc",pointerEvents:"none"},a),p),hs(u)),{},{payload:d,payloadIndex:v,className:me("recharts-tooltip-cursor",S)});return g.createElement(cn,{zIndex:(r=e.zIndex)!==null&&r!==void 0?r:m},g.createElement(bde,{cursor:u,cursorComp:y,cursorProps:_}))}function Ede(e){var r=zfe(),t=yC(),n=fl(),i=Gfe();return r==null||t==null||n==null||i==null?null:g.createElement(wde,Vy({},e,{offset:t,layout:n,tooltipAxisBandSize:r,chartName:i}))}var Yj=g.createContext(null),xde=()=>g.useContext(Yj),Xj={exports:{}};(function(e){var r=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(u,s,c){this.fn=u,this.context=s,this.once=c||!1}function a(u,s,c,f,d){if(typeof c!="function")throw new TypeError("The listener must be a function");var v=new i(c,f||u,d),p=t?t+s:s;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],v]:u._events[p].push(v):(u._events[p]=v,u._eventsCount++),u}function o(u,s){--u._eventsCount===0?u._events=new n:delete u._events[s]}function l(){this._events=new n,this._eventsCount=0}l.prototype.eventNames=function(){var s=[],c,f;if(this._eventsCount===0)return s;for(f in c=this._events)r.call(c,f)&&s.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(c)):s},l.prototype.listeners=function(s){var c=t?t+s:s,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var d=0,v=f.length,p=new Array(v);d<v;d++)p[d]=f[d].fn;return p},l.prototype.listenerCount=function(s){var c=t?t+s:s,f=this._events[c];return f?f.fn?1:f.length:0},l.prototype.emit=function(s,c,f,d,v,p){var y=t?t+s:s;if(!this._events[y])return!1;var m=this._events[y],h=arguments.length,b,w;if(m.fn){switch(m.once&&this.removeListener(s,m.fn,void 0,!0),h){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,f),!0;case 4:return m.fn.call(m.context,c,f,d),!0;case 5:return m.fn.call(m.context,c,f,d,v),!0;case 6:return m.fn.call(m.context,c,f,d,v,p),!0}for(w=1,b=new Array(h-1);w<h;w++)b[w-1]=arguments[w];m.fn.apply(m.context,b)}else{var E=m.length,x;for(w=0;w<E;w++)switch(m[w].once&&this.removeListener(s,m[w].fn,void 0,!0),h){case 1:m[w].fn.call(m[w].context);break;case 2:m[w].fn.call(m[w].context,c);break;case 3:m[w].fn.call(m[w].context,c,f);break;case 4:m[w].fn.call(m[w].context,c,f,d);break;default:if(!b)for(x=1,b=new Array(h-1);x<h;x++)b[x-1]=arguments[x];m[w].fn.apply(m[w].context,b)}}return!0},l.prototype.on=function(s,c,f){return a(this,s,c,f,!1)},l.prototype.once=function(s,c,f){return a(this,s,c,f,!0)},l.prototype.removeListener=function(s,c,f,d){var v=t?t+s:s;if(!this._events[v])return this;if(!c)return o(this,v),this;var p=this._events[v];if(p.fn)p.fn===c&&(!d||p.once)&&(!f||p.context===f)&&o(this,v);else{for(var y=0,m=[],h=p.length;y<h;y++)(p[y].fn!==c||d&&!p[y].once||f&&p[y].context!==f)&&m.push(p[y]);m.length?this._events[v]=m.length===1?m[0]:m:o(this,v)}return this},l.prototype.removeAllListeners=function(s){var c;return s?(c=t?t+s:s,this._events[c]&&o(this,c)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=t,l.EventEmitter=l,e.exports=l})(Xj);var Sde=Xj.exports;const _de=it(Sde);var Xu=new _de,Hy="recharts.syncEvent.tooltip",hO="recharts.syncEvent.brush",qj=(e,r)=>{if(r&&Array.isArray(e)){var t=Number.parseInt(r,10);if(!Qn(t))return e[t]}},Ode={chartName:"",tooltipPayloadSearcher:()=>{},eventEmitter:void 0,defaultTooltipEventType:"axis"},Zj=$r({name:"options",initialState:Ode,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),$de=Zj.reducer,{createEventEmitter:Pde}=Zj.actions;function Ade(e){return e.tooltip.syncInteraction}var Tde={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},Qj=$r({name:"chartData",initialState:Tde,reducers:{setChartData(e,r){if(e.chartData=r.payload,r.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}r.payload.length>0&&e.dataEndIndex!==r.payload.length-1&&(e.dataEndIndex=r.payload.length-1)},setComputedData(e,r){e.computedData=r.payload},setDataStartEndIndexes(e,r){var{startIndex:t,endIndex:n}=r.payload;t!=null&&(e.dataStartIndex=t),n!=null&&(e.dataEndIndex=n)}}}),{setChartData:mO,setDataStartEndIndexes:kde,setComputedData:e0e}=Qj.actions,Cde=Qj.reducer,Ide=["x","y"];function yO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function uo(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?yO(Object(t),!0).forEach(function(n){jde(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function jde(e,r,t){return(r=Nde(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Nde(e){var r=Mde(e,"string");return typeof r=="symbol"?r:r+""}function Mde(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Lde(e,r){if(e==null)return{};var t,n,i=Dde(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Dde(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Rde(){var e=V(b1),r=V(w1),t=Pe(),n=V(JC),i=V(pi),a=fl(),o=ws(),l=V(u=>u.rootProps.className);g.useEffect(()=>{if(e==null)return qa;var u=(s,c,f)=>{if(r!==f&&e===s){if(n==="index"){var d;if(o&&c!==null&&c!==void 0&&(d=c.payload)!==null&&d!==void 0&&d.coordinate&&c.payload.sourceViewBox){var v=c.payload.coordinate,{x:p,y}=v,m=Lde(v,Ide),{x:h,y:b,width:w,height:E}=c.payload.sourceViewBox,x=uo(uo({},m),{},{x:o.x+(w?(p-h)/w:0)*o.width,y:o.y+(E?(y-b)/E:0)*o.height});t(uo(uo({},c),{},{payload:uo(uo({},c.payload),{},{coordinate:x})}))}else t(c);return}if(i!=null){var S;if(typeof n=="function"){var _={activeTooltipIndex:c.payload.index==null?void 0:Number(c.payload.index),isTooltipActive:c.payload.active,activeIndex:c.payload.index==null?void 0:Number(c.payload.index),activeLabel:c.payload.label,activeDataKey:c.payload.dataKey,activeCoordinate:c.payload.coordinate},O=n(i,_);S=i[O]}else n==="value"&&(S=i.find(re=>String(re.value)===c.payload.label));var{coordinate:P}=c.payload;if(S==null||c.payload.active===!1||P==null||o==null){t(Wy({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}var{x:T,y:N}=P,A=Math.min(T,o.x+o.width),H=Math.min(N,o.y+o.height),K={x:a==="horizontal"?S.coordinate:A,y:a==="horizontal"?H:S.coordinate},ee=Wy({active:c.payload.active,coordinate:K,dataKey:c.payload.dataKey,index:String(S.index),label:c.payload.label,sourceViewBox:c.payload.sourceViewBox,graphicalItemId:c.payload.graphicalItemId});t(ee)}}};return Xu.on(Hy,u),()=>{Xu.off(Hy,u)}},[l,t,r,e,n,i,a,o])}function Fde(){var e=V(b1),r=V(w1),t=Pe();g.useEffect(()=>{if(e==null)return qa;var n=(i,a,o)=>{r!==o&&e===i&&t(kde(a))};return Xu.on(hO,n),()=>{Xu.off(hO,n)}},[t,r,e])}function zde(){var e=Pe();g.useEffect(()=>{e(Pde())},[e]),Rde(),Fde()}function Bde(e,r,t,n,i,a){var o=V(p=>Xfe(p,e,r)),l=V(kfe),u=V(w1),s=V(b1),c=V(JC),f=V(Ade),d=f==null?void 0:f.active,v=ws();g.useEffect(()=>{if(!d&&s!=null&&u!=null){var p=Wy({active:a,coordinate:t,dataKey:o,index:i,label:typeof n=="number"?String(n):n,sourceViewBox:v,graphicalItemId:l});Xu.emit(Hy,s,p,u)}},[d,t,o,l,i,n,u,s,c,a,v])}function gO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function bO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?gO(Object(t),!0).forEach(function(n){Ude(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ude(e,r,t){return(r=Wde(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Wde(e){var r=Vde(e,"string");return typeof r=="symbol"?r:r+""}function Vde(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Hde(e){return e.dataKey}function Kde(e,r){return g.isValidElement(e)?g.cloneElement(e,r):typeof e=="function"?g.createElement(e,r):g.createElement(mae,r)}var wO=[],Gde={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:"auto",itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function Jj(e){var r,t,n=ur(e,Gde),{active:i,allowEscapeViewBox:a,animationDuration:o,animationEasing:l,content:u,filterNull:s,isAnimationActive:c,offset:f,payloadUniqBy:d,position:v,reverseDirection:p,useTranslate3d:y,wrapperStyle:m,cursor:h,shared:b,trigger:w,defaultIndex:E,portal:x,axisId:S}=n,_=Pe(),O=typeof E=="number"?String(E):E;g.useEffect(()=>{_(Dce({shared:b,trigger:w,axisId:S,active:i,defaultIndex:O}))},[_,b,w,S,i,O]);var P=ws(),T=AC(),N=Cce(b),{activeIndex:A,isActive:H}=(r=V(Dr=>Qfe(Dr,N,w,O)))!==null&&r!==void 0?r:{},K=V(Dr=>Zfe(Dr,N,w,O)),ee=V(Dr=>Kj(Dr,N,w,O)),re=V(Dr=>qfe(Dr,N,w,O)),pe=K,C=xde(),M=(t=i??H)!==null&&t!==void 0?t:!1,[D,te]=Ak([pe,M]),ne=N==="axis"?ee:void 0;Bde(N,w,re,ne,A,M);var Ar=x??C;if(Ar==null||P==null||N==null)return null;var Fe=pe??wO;M||(Fe=wO),s&&Fe.length&&(Fe=mk(Fe.filter(Dr=>Dr.value!=null&&(Dr.hide!==!0||n.includeHidden)),d,Hde));var Wt=Fe.length>0,at=bO(bO({},n),{},{payload:Fe,label:ne,active:M,activeIndex:A,coordinate:re,accessibilityLayer:T}),fn=g.createElement(Pae,{allowEscapeViewBox:a,animationDuration:o,animationEasing:l,isAnimationActive:c,active:M,coordinate:re,hasPayload:Wt,offset:f,position:v,reverseDirection:p,useTranslate3d:y,viewBox:P,wrapperStyle:m,lastBoundingBox:D,innerRef:te,hasPortalFromProps:!!x},Kde(u,at));return g.createElement(g.Fragment,null,Ud.createPortal(fn,Ar),M&&g.createElement(Ede,{cursor:h,tooltipEventType:N,coordinate:re,payload:Fe,index:A}))}var eN=e=>null;eN.displayName="Cell";function Yde(e,r,t){return(r=Xde(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Xde(e){var r=qde(e,"string");return typeof r=="symbol"?r:r+""}function qde(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}class Zde{constructor(r){Yde(this,"cache",new Map),this.maxSize=r}get(r){var t=this.cache.get(r);return t!==void 0&&(this.cache.delete(r),this.cache.set(r,t)),t}set(r,t){if(this.cache.has(r))this.cache.delete(r);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;n!=null&&this.cache.delete(n)}this.cache.set(r,t)}clear(){this.cache.clear()}size(){return this.cache.size}}function EO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Qde(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?EO(Object(t),!0).forEach(function(n){Jde(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):EO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Jde(e,r,t){return(r=eve(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function eve(e){var r=rve(e,"string");return typeof r=="symbol"?r:r+""}function rve(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var tve={cacheSize:2e3,enableCache:!0},rN=Qde({},tve),xO=new Zde(rN.cacheSize),nve={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},SO="recharts_measurement_span";function ive(e,r){var t=r.fontSize||"",n=r.fontFamily||"",i=r.fontWeight||"",a=r.fontStyle||"",o=r.letterSpacing||"",l=r.textTransform||"";return"".concat(e,"|").concat(t,"|").concat(n,"|").concat(i,"|").concat(a,"|").concat(o,"|").concat(l)}var _O=(e,r)=>{try{var t=document.getElementById(SO);t||(t=document.createElement("span"),t.setAttribute("id",SO),t.setAttribute("aria-hidden","true"),document.body.appendChild(t)),Object.assign(t.style,nve,r),t.textContent="".concat(e);var n=t.getBoundingClientRect();return{width:n.width,height:n.height}}catch{return{width:0,height:0}}},yu=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r==null||_s.isSsr)return{width:0,height:0};if(!rN.enableCache)return _O(r,t);var n=ive(r,t),i=xO.get(n);if(i)return i;var a=_O(r,t);return xO.set(n,a),a},tN;function ave(e,r,t){return(r=ove(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ove(e){var r=lve(e,"string");return typeof r=="symbol"?r:r+""}function lve(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var OO=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,$O=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,uve=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,sve=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,cve={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},fve=["cm","mm","pt","pc","in","Q","px"];function dve(e){return fve.includes(e)}var $o="NaN";function vve(e,r){return e*cve[r]}class pr{static parse(r){var t,[,n,i]=(t=sve.exec(r))!==null&&t!==void 0?t:[];return n==null?pr.NaN:new pr(parseFloat(n),i??"")}constructor(r,t){this.num=r,this.unit=t,this.num=r,this.unit=t,Qn(r)&&(this.unit=""),t!==""&&!uve.test(t)&&(this.num=NaN,this.unit=""),dve(t)&&(this.num=vve(r,t),this.unit="px")}add(r){return this.unit!==r.unit?new pr(NaN,""):new pr(this.num+r.num,this.unit)}subtract(r){return this.unit!==r.unit?new pr(NaN,""):new pr(this.num-r.num,this.unit)}multiply(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new pr(NaN,""):new pr(this.num*r.num,this.unit||r.unit)}divide(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new pr(NaN,""):new pr(this.num/r.num,this.unit||r.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return Qn(this.num)}}tN=pr;ave(pr,"NaN",new tN(NaN,""));function nN(e){if(e==null||e.includes($o))return $o;for(var r=e;r.includes("*")||r.includes("/");){var t,[,n,i,a]=(t=OO.exec(r))!==null&&t!==void 0?t:[],o=pr.parse(n??""),l=pr.parse(a??""),u=i==="*"?o.multiply(l):o.divide(l);if(u.isNaN())return $o;r=r.replace(OO,u.toString())}for(;r.includes("+")||/.-\d+(?:\.\d+)?/.test(r);){var s,[,c,f,d]=(s=$O.exec(r))!==null&&s!==void 0?s:[],v=pr.parse(c??""),p=pr.parse(d??""),y=f==="+"?v.add(p):v.subtract(p);if(y.isNaN())return $o;r=r.replace($O,y.toString())}return r}var PO=/\(([^()]*)\)/;function pve(e){for(var r=e,t;(t=PO.exec(r))!=null;){var[,n]=t;r=r.replace(PO,nN(n))}return r}function hve(e){var r=e.replace(/\s+/g,"");return r=pve(r),r=nN(r),r}function mve(e){try{return hve(e)}catch{return $o}}function jh(e){var r=mve(e.slice(5,-1));return r===$o?"":r}var yve=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],gve=["dx","dy","angle","className","breakAll"];function Ky(){return Ky=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ky.apply(null,arguments)}function AO(e,r){if(e==null)return{};var t,n,i=bve(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function bve(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var iN=/[ \f\n\r\t\v\u2028\u2029]+/,aN=e=>{var{children:r,breakAll:t,style:n}=e;try{var i=[];Te(r)||(t?i=r.toString().split(""):i=r.toString().split(iN));var a=i.map(l=>({word:l,width:yu(l,n).width})),o=t?0:yu(" ",n).width;return{wordsWithComputedWidth:a,spaceWidth:o}}catch{return null}};function oN(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}function wve(e){return Te(e)||typeof e=="string"||typeof e=="number"||typeof e=="boolean"}var lN=(e,r,t,n)=>e.reduce((i,a)=>{var{word:o,width:l}=a,u=i[i.length-1];if(u&&l!=null&&(r==null||n||u.width+l+t<Number(r)))u.words.push(o),u.width+=l+t;else{var s={words:[o],width:l};i.push(s)}return i},[]),uN=e=>e.reduce((r,t)=>r.width>t.width?r:t),Eve="…",TO=(e,r,t,n,i,a,o,l)=>{var u=e.slice(0,r),s=aN({breakAll:t,style:n,children:u+Eve});if(!s)return[!1,[]];var c=lN(s.wordsWithComputedWidth,a,o,l),f=c.length>i||uN(c).width>Number(a);return[f,c]},xve=(e,r,t,n,i)=>{var{maxLines:a,children:o,style:l,breakAll:u}=e,s=W(a),c=String(o),f=lN(r,n,t,i);if(!s||i)return f;var d=f.length>a||uN(f).width>Number(n);if(!d)return f;for(var v=0,p=c.length-1,y=0,m;v<=p&&y<=c.length-1;){var h=Math.floor((v+p)/2),b=h-1,[w,E]=TO(c,b,u,l,a,n,t,i),[x]=TO(c,h,u,l,a,n,t,i);if(!w&&!x&&(v=h+1),w&&x&&(p=h-1),!w&&x){m=E;break}y++}return m||f},kO=e=>{var r=Te(e)?[]:e.toString().split(iN);return[{words:r,width:void 0}]},Sve=e=>{var{width:r,scaleToFit:t,children:n,style:i,breakAll:a,maxLines:o}=e;if((r||t)&&!_s.isSsr){var l,u,s=aN({breakAll:a,children:n,style:i});if(s){var{wordsWithComputedWidth:c,spaceWidth:f}=s;l=c,u=f}else return kO(n);return xve({breakAll:a,children:n,maxLines:o,style:i},l,u,r,!!t)}return kO(n)},sN="#808080",_ve={angle:0,breakAll:!1,capHeight:"0.71em",fill:sN,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},mb=g.forwardRef((e,r)=>{var t=ur(e,_ve),{x:n,y:i,lineHeight:a,capHeight:o,fill:l,scaleToFit:u,textAnchor:s,verticalAnchor:c}=t,f=AO(t,yve),d=g.useMemo(()=>Sve({breakAll:f.breakAll,children:f.children,maxLines:f.maxLines,scaleToFit:u,style:f.style,width:f.width}),[f.breakAll,f.children,f.maxLines,u,f.style,f.width]),{dx:v,dy:p,angle:y,className:m,breakAll:h}=f,b=AO(f,gve);if(!An(n)||!An(i)||d.length===0)return null;var w=Number(n)+(W(v)?v:0),E=Number(i)+(W(p)?p:0);if(!fe(w)||!fe(E))return null;var x;switch(c){case"start":x=jh("calc(".concat(o,")"));break;case"middle":x=jh("calc(".concat((d.length-1)/2," * -").concat(a," + (").concat(o," / 2))"));break;default:x=jh("calc(".concat(d.length-1," * -").concat(a,")"));break}var S=[],_=d[0];if(u&&_!=null){var O=_.width,{width:P}=f;S.push("scale(".concat(W(P)&&W(O)?P/O:1,")"))}return y&&S.push("rotate(".concat(y,", ").concat(w,", ").concat(E,")")),S.length&&(b.transform=S.join(" ")),g.createElement("text",Ky({},Ir(b),{ref:r,x:w,y:E,className:me("recharts-text",m),textAnchor:s,fill:l.includes("url")?sN:l}),d.map((T,N)=>{var A=T.words.join(h?"":" ");return g.createElement("tspan",{x:w,dy:N===0?x:a,key:"".concat(A,"-").concat(N)},A)}))});mb.displayName="Text";function CO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function hn(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?CO(Object(t),!0).forEach(function(n){Ove(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):CO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ove(e,r,t){return(r=$ve(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function $ve(e){var r=Pve(e,"string");return typeof r=="symbol"?r:r+""}function Pve(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Ave=e=>{var{viewBox:r,position:t,offset:n=0,parentViewBox:i,clamp:a}=e,{x:o,y:l,height:u,upperWidth:s,lowerWidth:c}=u1(r),f=o,d=o+(s-c)/2,v=(f+d)/2,p=(s+c)/2,y=f+s/2,m=u>=0?1:-1,h=m*n,b=m>0?"end":"start",w=m>0?"start":"end",E=s>=0?1:-1,x=E*n,S=E>0?"end":"start",_=E>0?"start":"end",O=i;if(t==="top"){var P={x:f+s/2,y:l-h,horizontalAnchor:"middle",verticalAnchor:b};return a&&O&&(P.height=Math.max(l-O.y,0),P.width=s),P}if(t==="bottom"){var T={x:d+c/2,y:l+u+h,horizontalAnchor:"middle",verticalAnchor:w};return a&&O&&(T.height=Math.max(O.y+O.height-(l+u),0),T.width=c),T}if(t==="left"){var N={x:v-x,y:l+u/2,horizontalAnchor:S,verticalAnchor:"middle"};return a&&O&&(N.width=Math.max(N.x-O.x,0),N.height=u),N}if(t==="right"){var A={x:v+p+x,y:l+u/2,horizontalAnchor:_,verticalAnchor:"middle"};return a&&O&&(A.width=Math.max(O.x+O.width-A.x,0),A.height=u),A}var H=a&&O?{width:p,height:u}:{};return t==="insideLeft"?hn({x:v+x,y:l+u/2,horizontalAnchor:_,verticalAnchor:"middle"},H):t==="insideRight"?hn({x:v+p-x,y:l+u/2,horizontalAnchor:S,verticalAnchor:"middle"},H):t==="insideTop"?hn({x:f+s/2,y:l+h,horizontalAnchor:"middle",verticalAnchor:w},H):t==="insideBottom"?hn({x:d+c/2,y:l+u-h,horizontalAnchor:"middle",verticalAnchor:b},H):t==="insideTopLeft"?hn({x:f+x,y:l+h,horizontalAnchor:_,verticalAnchor:w},H):t==="insideTopRight"?hn({x:f+s-x,y:l+h,horizontalAnchor:S,verticalAnchor:w},H):t==="insideBottomLeft"?hn({x:d+x,y:l+u-h,horizontalAnchor:_,verticalAnchor:b},H):t==="insideBottomRight"?hn({x:d+c-x,y:l+u-h,horizontalAnchor:S,verticalAnchor:b},H):t&&typeof t=="object"&&(W(t.x)||Da(t.x))&&(W(t.y)||Da(t.y))?hn({x:o+Yi(t.x,p),y:l+Yi(t.y,u),horizontalAnchor:"end",verticalAnchor:"end"},H):hn({x:y,y:l+u/2,horizontalAnchor:"middle",verticalAnchor:"middle"},H)},Tve=["labelRef"],kve=["content"];function IO(e,r){if(e==null)return{};var t,n,i=Cve(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Cve(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function jO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function eu(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?jO(Object(t),!0).forEach(function(n){Ive(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ive(e,r,t){return(r=jve(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function jve(e){var r=Nve(e,"string");return typeof r=="symbol"?r:r+""}function Nve(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function zn(){return zn=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},zn.apply(null,arguments)}var cN=g.createContext(null),Mve=e=>{var{x:r,y:t,upperWidth:n,lowerWidth:i,width:a,height:o,children:l}=e,u=g.useMemo(()=>({x:r,y:t,upperWidth:n,lowerWidth:i,width:a,height:o}),[r,t,n,i,a,o]);return g.createElement(cN.Provider,{value:u},l)},fN=()=>{var e=g.useContext(cN),r=ws();return e||(r?u1(r):void 0)},Lve=g.createContext(null),Dve=()=>{var e=g.useContext(Lve),r=V(iI);return e||r},Rve=e=>{var{value:r,formatter:t}=e,n=Te(e.children)?r:e.children;return typeof t=="function"?t(n):n},yb=e=>e!=null&&typeof e=="function",Fve=(e,r)=>{var t=Ct(r-e),n=Math.min(Math.abs(r-e),360);return t*n},zve=(e,r,t,n,i)=>{var{offset:a,className:o}=e,{cx:l,cy:u,innerRadius:s,outerRadius:c,startAngle:f,endAngle:d,clockWise:v}=i,p=(s+c)/2,y=Fve(f,d),m=y>=0?1:-1,h,b;switch(r){case"insideStart":h=f+m*a,b=v;break;case"insideEnd":h=d-m*a,b=!v;break;case"end":h=d+m*a,b=v;break;default:throw new Error("Unsupported position ".concat(r))}b=y<=0?b:!b;var w=hr(l,u,p,h),E=hr(l,u,p,h+(b?1:-1)*359),x="M".concat(w.x,",").concat(w.y,`
    A`).concat(p,",").concat(p,",0,1,").concat(b?0:1,`,
    `).concat(E.x,",").concat(E.y),S=Te(e.id)?Lu("recharts-radial-line-"):e.id;return g.createElement("text",zn({},n,{dominantBaseline:"central",className:me("recharts-radial-bar-label",o)}),g.createElement("defs",null,g.createElement("path",{id:S,d:x})),g.createElement("textPath",{xlinkHref:"#".concat(S)},t))},Bve=(e,r,t)=>{var{cx:n,cy:i,innerRadius:a,outerRadius:o,startAngle:l,endAngle:u}=e,s=(l+u)/2;if(t==="outside"){var{x:c,y:f}=hr(n,i,o+r,s);return{x:c,y:f,textAnchor:c>=n?"start":"end",verticalAnchor:"middle"}}if(t==="center")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"middle"};if(t==="centerTop")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"start"};if(t==="centerBottom")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"end"};var d=(a+o)/2,{x:v,y:p}=hr(n,i,d,s);return{x:v,y:p,textAnchor:"middle",verticalAnchor:"middle"}},Yc=e=>e!=null&&"cx"in e&&W(e.cx),Uve={angle:0,offset:5,zIndex:rr.label,position:"middle",textBreakAll:!1};function Wve(e){if(!Yc(e))return e;var{cx:r,cy:t,outerRadius:n}=e,i=n*2;return{x:r-n,y:t-n,width:i,upperWidth:i,lowerWidth:i,height:i}}function Ti(e){var r=ur(e,Uve),{viewBox:t,parentViewBox:n,position:i,value:a,children:o,content:l,className:u="",textBreakAll:s,labelRef:c}=r,f=Dve(),d=fN(),v=i==="center"?d:f??d,p,y,m;t==null?p=v:Yc(t)?p=t:p=u1(t);var h=Wve(p);if(!p||Te(a)&&Te(o)&&!g.isValidElement(l)&&typeof l!="function")return null;var b=eu(eu({},r),{},{viewBox:p});if(g.isValidElement(l)){var w=IO(b,Tve);return g.cloneElement(l,w)}if(typeof l=="function"){var E=IO(b,kve);if(y=g.createElement(l,E),g.isValidElement(y))return y}else y=Rve(r);var x=Ir(r);if(Yc(p)){if(i==="insideStart"||i==="insideEnd"||i==="end")return zve(r,i,y,x,p);m=Bve(p,r.offset,r.position)}else{if(!h)return null;var S=Ave({viewBox:h,position:i,offset:r.offset,parentViewBox:Yc(n)?void 0:n,clamp:!0});m=eu(eu({x:S.x,y:S.y,textAnchor:S.horizontalAnchor,verticalAnchor:S.verticalAnchor},S.width!==void 0?{width:S.width}:{}),S.height!==void 0?{height:S.height}:{})}return g.createElement(cn,{zIndex:r.zIndex},g.createElement(mb,zn({ref:c,className:me("recharts-label",u)},x,m,{textAnchor:oN(x.textAnchor)?x.textAnchor:m.textAnchor,breakAll:s}),y))}Ti.displayName="Label";var Vve=(e,r,t)=>{if(!e)return null;var n={viewBox:r,labelRef:t};return e===!0?g.createElement(Ti,zn({key:"label-implicit"},n)):An(e)?g.createElement(Ti,zn({key:"label-implicit",value:e},n)):g.isValidElement(e)?e.type===Ti?g.cloneElement(e,eu({key:"label-implicit"},n)):g.createElement(Ti,zn({key:"label-implicit",content:e},n)):yb(e)?g.createElement(Ti,zn({key:"label-implicit",content:e},n)):e&&typeof e=="object"?g.createElement(Ti,zn({},e,{key:"label-implicit"},n)):null};function Hve(e){var{label:r,labelRef:t}=e,n=fN();return Vve(r,n,t)||null}var Kve=["valueAccessor"],Gve=["dataKey","clockWise","id","textBreakAll","zIndex"];function bd(){return bd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},bd.apply(null,arguments)}function NO(e,r){if(e==null)return{};var t,n,i=Yve(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Yve(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var Xve=e=>{var r=Array.isArray(e.value)?e.value[e.value.length-1]:e.value;if(wve(r))return r},dN=g.createContext(void 0),vN=dN.Provider,pN=g.createContext(void 0);pN.Provider;function qve(){return g.useContext(dN)}function Zve(){return g.useContext(pN)}function Xc(e){var{valueAccessor:r=Xve}=e,t=NO(e,Kve),{dataKey:n,clockWise:i,id:a,textBreakAll:o,zIndex:l}=t,u=NO(t,Gve),s=qve(),c=Zve(),f=s||c;return!f||!f.length?null:g.createElement(cn,{zIndex:l??rr.label},g.createElement(nt,{className:"recharts-label-list"},f.map((d,v)=>{var p,y=Te(n)?r(d,v):Be(d.payload,n),m=Te(a)?{}:{id:"".concat(a,"-").concat(v)};return g.createElement(Ti,bd({key:"label-".concat(v)},Ir(d),u,m,{fill:(p=t.fill)!==null&&p!==void 0?p:d.fill,parentViewBox:d.parentViewBox,value:y,textBreakAll:o,viewBox:d.viewBox,index:v,zIndex:0}))})))}Xc.displayName="LabelList";function hN(e){var{label:r}=e;return r?r===!0?g.createElement(Xc,{key:"labelList-implicit"}):g.isValidElement(r)||yb(r)?g.createElement(Xc,{key:"labelList-implicit",content:r}):typeof r=="object"?g.createElement(Xc,bd({key:"labelList-implicit"},r,{type:String(r.type)})):null:null}function Gy(){return Gy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Gy.apply(null,arguments)}var mN=e=>{var{cx:r,cy:t,r:n,className:i}=e,a=me("recharts-dot",i);return W(r)&&W(t)&&W(n)?g.createElement("circle",Gy({},Ft(e),B0(e),{className:a,cx:r,cy:t,r:n})):null},Qve={radiusAxis:{},angleAxis:{}},Jve=$r({name:"polarAxis",initialState:Qve,reducers:{addRadiusAxis(e,r){e.radiusAxis[r.payload.id]=r.payload},removeRadiusAxis(e,r){delete e.radiusAxis[r.payload.id]},addAngleAxis(e,r){e.angleAxis[r.payload.id]=r.payload},removeAngleAxis(e,r){delete e.angleAxis[r.payload.id]}}}),epe=Jve.reducer;function rpe(e){return e&&typeof e=="object"&&"className"in e&&typeof e.className=="string"?e.className:""}var yN={exports:{}},be={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb=Symbol.for("react.transitional.element"),bb=Symbol.for("react.portal"),ip=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),lp=Symbol.for("react.consumer"),up=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),vp=Symbol.for("react.lazy"),tpe=Symbol.for("react.view_transition"),npe=Symbol.for("react.client.reference");function Ut(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case gb:switch(e=e.type,e){case ip:case op:case ap:case cp:case fp:case tpe:return e;default:switch(e=e&&e.$$typeof,e){case up:case sp:case vp:case dp:return e;case lp:return e;default:return r}}case bb:return r}}}be.ContextConsumer=lp;be.ContextProvider=up;be.Element=gb;be.ForwardRef=sp;be.Fragment=ip;be.Lazy=vp;be.Memo=dp;be.Portal=bb;be.Profiler=op;be.StrictMode=ap;be.Suspense=cp;be.SuspenseList=fp;be.isContextConsumer=function(e){return Ut(e)===lp};be.isContextProvider=function(e){return Ut(e)===up};be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gb};be.isForwardRef=function(e){return Ut(e)===sp};be.isFragment=function(e){return Ut(e)===ip};be.isLazy=function(e){return Ut(e)===vp};be.isMemo=function(e){return Ut(e)===dp};be.isPortal=function(e){return Ut(e)===bb};be.isProfiler=function(e){return Ut(e)===op};be.isStrictMode=function(e){return Ut(e)===ap};be.isSuspense=function(e){return Ut(e)===cp};be.isSuspenseList=function(e){return Ut(e)===fp};be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ip||e===op||e===ap||e===cp||e===fp||typeof e=="object"&&e!==null&&(e.$$typeof===vp||e.$$typeof===dp||e.$$typeof===up||e.$$typeof===lp||e.$$typeof===sp||e.$$typeof===npe||e.getModuleId!==void 0)};be.typeOf=Ut;yN.exports=be;var ipe=yN.exports,MO=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",LO=null,Nh=null,gN=e=>{if(e===LO&&Array.isArray(Nh))return Nh;var r=[];return g.Children.forEach(e,t=>{Te(t)||(ipe.isFragment(t)?r=r.concat(gN(t.props.children)):r.push(t))}),Nh=r,LO=e,r};function ape(e,r){var t=[],n=[];return Array.isArray(r)?n=r.map(i=>MO(i)):n=[MO(r)],gN(e).forEach(i=>{var a=Vo(i,"type.displayName")||Vo(i,"type.name");a&&n.indexOf(a)!==-1&&t.push(i)}),t}var bN=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0,wN={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function r(t){var i;if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const a=t[Symbol.toStringTag];return a==null||!((i=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag))!=null&&i.writable)?!1:t.toString()===`[object ${a}]`}let n=t;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}e.isPlainObject=r})(wN);var ope=wN.isPlainObject;const lpe=it(ope);var DO,RO,FO,zO,BO;function UO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function WO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?UO(Object(t),!0).forEach(function(n){upe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):UO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function upe(e,r,t){return(r=spe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function spe(e){var r=cpe(e,"string");return typeof r=="symbol"?r:r+""}function cpe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function wd(){return wd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},wd.apply(null,arguments)}function Hl(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var VO=(e,r,t,n,i)=>{var a=t-n,o;return o=Le(DO||(DO=Hl(["M ",",",""])),e,r),o+=Le(RO||(RO=Hl(["L ",",",""])),e+t,r),o+=Le(FO||(FO=Hl(["L ",",",""])),e+t-a/2,r+i),o+=Le(zO||(zO=Hl(["L ",",",""])),e+t-a/2-n,r+i),o+=Le(BO||(BO=Hl(["L ",","," Z"])),e,r),o},fpe={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},dpe=e=>{var r=ur(e,fpe),{x:t,y:n,upperWidth:i,lowerWidth:a,height:o,className:l}=r,{animationEasing:u,animationDuration:s,animationBegin:c,isUpdateAnimationActive:f}=r,d=g.useRef(null),[v,p]=g.useState(-1),y=g.useRef(i),m=g.useRef(a),h=g.useRef(o),b=g.useRef(t),w=g.useRef(n),E=Rv(e,"trapezoid-");if(g.useEffect(()=>{if(d.current&&d.current.getTotalLength)try{var K=d.current.getTotalLength();K&&p(K)}catch{}},[]),t!==+t||n!==+n||i!==+i||a!==+a||o!==+o||i===0&&a===0||o===0)return null;var x=me("recharts-trapezoid",l);if(!f)return g.createElement("g",null,g.createElement("path",wd({},Ir(r),{className:x,d:VO(t,n,i,a,o)})));var S=y.current,_=m.current,O=h.current,P=b.current,T=w.current,N="0px ".concat(v===-1?1:v,"px"),A="".concat(v,"px ").concat(v,"px"),H=TC(["strokeDasharray"],s,u);return g.createElement(Dv,{animationId:E,key:E,canBegin:v>0,duration:s,easing:u,isActive:f,begin:c},K=>{var ee=or(S,i,K),re=or(_,a,K),pe=or(O,o,K),C=or(P,t,K),M=or(T,n,K);d.current&&(y.current=ee,m.current=re,h.current=pe,b.current=C,w.current=M);var D=K>0?{transition:H,strokeDasharray:A}:{strokeDasharray:N};return g.createElement("path",wd({},Ir(r),{className:x,d:VO(C,M,ee,re,pe),ref:d,style:WO(WO({},D),r.style)}))})},vpe=["option","shapeType","activeClassName","inActiveClassName"];function ppe(e,r){if(e==null)return{};var t,n,i=hpe(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function hpe(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function HO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ed(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?HO(Object(t),!0).forEach(function(n){mpe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):HO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function mpe(e,r,t){return(r=ype(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ype(e){var r=gpe(e,"string");return typeof r=="symbol"?r:r+""}function gpe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function bpe(e,r){return Ed(Ed({},r),e)}function wpe(e,r){return e==="symbols"}function KO(e){var{shapeType:r,elementProps:t}=e;switch(r){case"rectangle":return g.createElement(jC,t);case"trapezoid":return g.createElement(dpe,t);case"sector":return g.createElement(LC,t);case"symbols":if(wpe(r))return g.createElement(mv,t);break;case"curve":return g.createElement(p1,t);default:return null}}function Epe(e){return g.isValidElement(e)?e.props:e}function Yy(e){var{option:r,shapeType:t,activeClassName:n="recharts-active-shape",inActiveClassName:i="recharts-shape"}=e,a=ppe(e,vpe),o;if(g.isValidElement(r))o=g.cloneElement(r,Ed(Ed({},a),Epe(r)));else if(typeof r=="function")o=r(a,a.index);else if(lpe(r)&&typeof r!="boolean"){var l=bpe(r,a);o=g.createElement(KO,{shapeType:t,elementProps:l})}else{var u=a;o=g.createElement(KO,{shapeType:t,elementProps:u})}return a.isActive?g.createElement(nt,{className:n},o):g.createElement(nt,{className:i},o)}var xpe=(e,r,t)=>{var n=Pe();return(i,a)=>o=>{e==null||e(i,a,o),n(Pj({activeIndex:String(a),activeDataKey:r,activeCoordinate:i.tooltipPosition,activeGraphicalItemId:t}))}},Spe=e=>{var r=Pe();return(t,n)=>i=>{e==null||e(t,n,i),r(Rce())}},_pe=(e,r,t)=>{var n=Pe();return(i,a)=>o=>{e==null||e(i,a,o),n(Fce({activeIndex:String(a),activeDataKey:r,activeCoordinate:i.tooltipPosition,activeGraphicalItemId:t}))}};function EN(e){var{tooltipEntrySettings:r}=e,t=Pe(),n=Pr(),i=g.useRef(null);return g.useLayoutEffect(()=>{n||(i.current===null?t(Nce(r)):i.current!==r&&t(Mce({prev:i.current,next:r})),i.current=r)},[r,t,n]),g.useLayoutEffect(()=>()=>{i.current&&(t(Lce(i.current)),i.current=null)},[t]),null}function xN(e){var{legendPayload:r}=e,t=Pe(),n=Pr(),i=g.useRef(null);return g.useLayoutEffect(()=>{n||(i.current===null?t(Sie(r)):i.current!==r&&t(_ie({prev:i.current,next:r})),i.current=r)},[t,n,r]),g.useLayoutEffect(()=>()=>{i.current&&(t(Oie(i.current)),i.current=null)},[t]),null}var Mh,Ope=()=>{var[e]=g.useState(()=>Lu("uid-"));return e},$pe=(Mh=wM.useId)!==null&&Mh!==void 0?Mh:Ope;function Ppe(e,r){var t=$pe();return r||(e?"".concat(e,"-").concat(t):t)}var Ape=g.createContext(void 0),SN=e=>{var{id:r,type:t,children:n}=e,i=Ppe("recharts-".concat(t),r);return g.createElement(Ape.Provider,{value:i},n(i))},Tpe={cartesianItems:[],polarItems:[]},_N=$r({name:"graphicalItems",initialState:Tpe,reducers:{addCartesianGraphicalItem:{reducer(e,r){e.cartesianItems.push(r.payload)},prepare:_e()},replaceCartesianGraphicalItem:{reducer(e,r){var{prev:t,next:n}=r.payload,i=It(e).cartesianItems.indexOf(t);i>-1&&(e.cartesianItems[i]=n)},prepare:_e()},removeCartesianGraphicalItem:{reducer(e,r){var t=It(e).cartesianItems.indexOf(r.payload);t>-1&&e.cartesianItems.splice(t,1)},prepare:_e()},addPolarGraphicalItem:{reducer(e,r){e.polarItems.push(r.payload)},prepare:_e()},removePolarGraphicalItem:{reducer(e,r){var t=It(e).polarItems.indexOf(r.payload);t>-1&&e.polarItems.splice(t,1)},prepare:_e()},replacePolarGraphicalItem:{reducer(e,r){var{prev:t,next:n}=r.payload,i=It(e).polarItems.indexOf(t);i>-1&&(e.polarItems[i]=n)},prepare:_e()}}}),{addCartesianGraphicalItem:kpe,replaceCartesianGraphicalItem:Cpe,removeCartesianGraphicalItem:Ipe,addPolarGraphicalItem:r0e,removePolarGraphicalItem:t0e,replacePolarGraphicalItem:n0e}=_N.actions,jpe=_N.reducer,Npe=e=>{var r=Pe(),t=g.useRef(null);return g.useLayoutEffect(()=>{t.current===null?r(kpe(e)):t.current!==e&&r(Cpe({prev:t.current,next:e})),t.current=e},[r,e]),g.useLayoutEffect(()=>()=>{t.current&&(r(Ipe(t.current)),t.current=null)},[r]),null},ON=g.memo(Npe),Mpe=["points"];function GO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Lh(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?GO(Object(t),!0).forEach(function(n){Lpe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Lpe(e,r,t){return(r=Dpe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Dpe(e){var r=Rpe(e,"string");return typeof r=="symbol"?r:r+""}function Rpe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function xd(){return xd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},xd.apply(null,arguments)}function Fpe(e,r){if(e==null)return{};var t,n,i=zpe(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function zpe(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Bpe(e){var{option:r,dotProps:t,className:n}=e;if(g.isValidElement(r))return g.cloneElement(r,t);if(typeof r=="function")return r(t);var i=me(n,typeof r!="boolean"?r.className:""),a=t??{},o=Fpe(a,Mpe);return g.createElement(mN,xd({},o,{className:i}))}function Upe(e,r){return e==null?!1:r?!0:e.length===1}function Wpe(e){var{points:r,dot:t,className:n,dotClassName:i,dataKey:a,baseProps:o,needClip:l,clipPathId:u,zIndex:s=rr.scatter}=e;if(!Upe(r,t))return null;var c=bN(t),f=_ee(t),d=r.map((p,y)=>{var m,h,b=Lh(Lh(Lh({r:3},o),f),{},{index:y,cx:(m=p.x)!==null&&m!==void 0?m:void 0,cy:(h=p.y)!==null&&h!==void 0?h:void 0,dataKey:a,value:p.value,payload:p.payload,points:r});return g.createElement(Bpe,{key:"dot-".concat(y),option:t,dotProps:b,className:i})}),v={};return l&&u!=null&&(v.clipPath="url(#clipPath-".concat(c?"":"dots-").concat(u,")")),g.createElement(cn,{zIndex:s},g.createElement(nt,xd({className:n},v),d))}function YO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function XO(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?YO(Object(t),!0).forEach(function(n){Vpe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):YO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Vpe(e,r,t){return(r=Hpe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Hpe(e){var r=Kpe(e,"string");return typeof r=="symbol"?r:r+""}function Kpe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Gpe={xAxis:{},yAxis:{},zAxis:{}},$N=$r({name:"cartesianAxis",initialState:Gpe,reducers:{addXAxis:{reducer(e,r){e.xAxis[r.payload.id]=r.payload},prepare:_e()},replaceXAxis:{reducer(e,r){var{prev:t,next:n}=r.payload;e.xAxis[t.id]!==void 0&&(t.id!==n.id&&delete e.xAxis[t.id],e.xAxis[n.id]=n)},prepare:_e()},removeXAxis:{reducer(e,r){delete e.xAxis[r.payload.id]},prepare:_e()},addYAxis:{reducer(e,r){e.yAxis[r.payload.id]=r.payload},prepare:_e()},replaceYAxis:{reducer(e,r){var{prev:t,next:n}=r.payload;e.yAxis[t.id]!==void 0&&(t.id!==n.id&&delete e.yAxis[t.id],e.yAxis[n.id]=n)},prepare:_e()},removeYAxis:{reducer(e,r){delete e.yAxis[r.payload.id]},prepare:_e()},addZAxis:{reducer(e,r){e.zAxis[r.payload.id]=r.payload},prepare:_e()},replaceZAxis:{reducer(e,r){var{prev:t,next:n}=r.payload;e.zAxis[t.id]!==void 0&&(t.id!==n.id&&delete e.zAxis[t.id],e.zAxis[n.id]=n)},prepare:_e()},removeZAxis:{reducer(e,r){delete e.zAxis[r.payload.id]},prepare:_e()},updateYAxisWidth(e,r){var{id:t,width:n}=r.payload,i=e.yAxis[t];if(i){var a,o=i.widthHistory||[];if(o.length===3&&o[0]===o[2]&&n===o[1]&&n!==i.width&&Math.abs(n-((a=o[0])!==null&&a!==void 0?a:0))<=1)return;var l=[...o,n].slice(-3);e.yAxis[t]=XO(XO({},i),{},{width:n,widthHistory:l})}}}}),{addXAxis:Ype,replaceXAxis:Xpe,removeXAxis:qpe,addYAxis:Zpe,replaceYAxis:Qpe,removeYAxis:Jpe,addZAxis:i0e,replaceZAxis:a0e,removeZAxis:o0e,updateYAxisWidth:ehe}=$N.actions,rhe=$N.reducer,the=$([br],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),nhe=$([the,si,ci],(e,r,t)=>{if(!(!e||r==null||t==null))return{x:e.left,y:e.top,width:Math.max(0,r-e.left-e.right),height:Math.max(0,t-e.top-e.bottom)}}),wb=()=>V(nhe),ihe=()=>V(Mfe);function qO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Dh(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qO(Object(t),!0).forEach(function(n){ahe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ahe(e,r,t){return(r=ohe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ohe(e){var r=lhe(e,"string");return typeof r=="symbol"?r:r+""}function lhe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var uhe=e=>{var{point:r,childIndex:t,mainColor:n,activeDot:i,dataKey:a,clipPath:o}=e;if(i===!1||r.x==null||r.y==null)return null;var l={index:t,dataKey:a,cx:r.x,cy:r.y,r:4,fill:n??"none",strokeWidth:2,stroke:"#fff",payload:r.payload,value:r.value},u=Dh(Dh(Dh({},l),hs(i)),B0(i)),s;return g.isValidElement(i)?s=g.cloneElement(i,u):typeof i=="function"?s=i(u):s=g.createElement(mN,u),g.createElement(nt,{className:"recharts-active-dot",clipPath:o},s)};function she(e){var{points:r,mainColor:t,activeDot:n,itemDataKey:i,clipPath:a,zIndex:o=rr.activeDot}=e,l=V(Qo),u=ihe();if(r==null||u==null)return null;var s=r.find(c=>u.includes(c.payload));return Te(s)?null:g.createElement(cn,{zIndex:o},g.createElement(uhe,{point:s,childIndex:Number(l),mainColor:t,dataKey:i,activeDot:n,clipPath:a}))}var che=e=>{var{chartData:r}=e,t=Pe(),n=Pr();return g.useEffect(()=>n?()=>{}:(t(mO(r)),()=>{t(mO(void 0))}),[r,t,n]),null},ZO={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},fhe=$r({name:"brush",initialState:ZO,reducers:{setBrushSettings(e,r){return r.payload==null?ZO:r.payload}}}),dhe=fhe.reducer;function vhe(e){return(e%180+180)%180}var phe=function(r){var{width:t,height:n}=r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=vhe(i),o=a*Math.PI/180,l=Math.atan(n/t),u=o>l&&o<Math.PI-l?n/Math.sin(o):t/Math.cos(o);return Math.abs(u)},hhe={dots:[],areas:[],lines:[]},mhe=$r({name:"referenceElements",initialState:hhe,reducers:{addDot:(e,r)=>{e.dots.push(r.payload)},removeDot:(e,r)=>{var t=It(e).dots.findIndex(n=>n===r.payload);t!==-1&&e.dots.splice(t,1)},addArea:(e,r)=>{e.areas.push(r.payload)},removeArea:(e,r)=>{var t=It(e).areas.findIndex(n=>n===r.payload);t!==-1&&e.areas.splice(t,1)},addLine:(e,r)=>{e.lines.push(r.payload)},removeLine:(e,r)=>{var t=It(e).lines.findIndex(n=>n===r.payload);t!==-1&&e.lines.splice(t,1)}}}),yhe=mhe.reducer,ghe=g.createContext(void 0),bhe=e=>{var{children:r}=e,[t]=g.useState("".concat(Lu("recharts"),"-clip")),n=wb();if(n==null)return null;var{x:i,y:a,width:o,height:l}=n;return g.createElement(ghe.Provider,{value:t},g.createElement("defs",null,g.createElement("clipPath",{id:t},g.createElement("rect",{x:i,y:a,height:l,width:o}))),r)};function PN(e,r){if(r<1)return[];if(r===1)return e;for(var t=[],n=0;n<e.length;n+=r){var i=e[n];i!==void 0&&t.push(i)}return t}function whe(e,r,t){var n={width:e.width+r.width,height:e.height+r.height};return phe(n,t)}function Ehe(e,r,t){var n=t==="width",{x:i,y:a,width:o,height:l}=e;return r===1?{start:n?i:a,end:n?i+o:a+l}:{start:n?i+o:a+l,end:n?i:a}}function qu(e,r,t,n,i){if(e*r<e*n||e*r>e*i)return!1;var a=t();return e*(r-e*a/2-n)>=0&&e*(r+e*a/2-i)<=0}function xhe(e,r){return PN(e,r+1)}function She(e,r,t,n,i){for(var a=(n||[]).slice(),{start:o,end:l}=r,u=0,s=1,c=o,f=function(){var p=n==null?void 0:n[u];if(p===void 0)return{v:PN(n,s)};var y=u,m,h=()=>(m===void 0&&(m=t(p,y)),m),b=p.coordinate,w=u===0||qu(e,b,h,c,l);w||(u=0,c=o,s+=1),w&&(c=b+e*(h()/2+i),u+=s)},d;s<=a.length;)if(d=f(),d)return d.v;return[]}function _he(e,r,t,n,i){var a=(n||[]).slice(),o=a.length;if(o===0)return[];for(var{start:l,end:u}=r,s=1;s<=o;s++){for(var c=(o-1)%s,f=l,d=!0,v=function(){var E=n[y];if(E==null)return 0;var x=y,S,_=()=>(S===void 0&&(S=t(E,x)),S),O=E.coordinate,P=y===c||qu(e,O,_,f,u);if(!P)return d=!1,1;P&&(f=O+e*(_()/2+i))},p,y=c;y<o&&(p=v(),!(p!==0&&p===1));y+=s);if(d){for(var m=[],h=c;h<o;h+=s){var b=n[h];b!=null&&m.push(b)}return m}}return[]}function QO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function xr(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?QO(Object(t),!0).forEach(function(n){Ohe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):QO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ohe(e,r,t){return(r=$he(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function $he(e){var r=Phe(e,"string");return typeof r=="symbol"?r:r+""}function Phe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ahe(e,r,t,n,i){for(var a=(n||[]).slice(),o=a.length,{start:l}=r,{end:u}=r,s=function(d){var v=a[d];if(v==null)return 1;var p=v,y,m=()=>(y===void 0&&(y=t(v,d)),y);if(d===o-1){var h=e*(p.coordinate+e*m()/2-u);a[d]=p=xr(xr({},p),{},{tickCoord:h>0?p.coordinate-h*e:p.coordinate})}else a[d]=p=xr(xr({},p),{},{tickCoord:p.coordinate});if(p.tickCoord!=null){var b=qu(e,p.tickCoord,m,l,u);b&&(u=p.tickCoord-e*(m()/2+i),a[d]=xr(xr({},p),{},{isShow:!0}))}},c=o-1;c>=0;c--)s(c);return a}function The(e,r,t,n,i,a){var o=(n||[]).slice(),l=o.length,{start:u,end:s}=r;if(a){var c=n[l-1];if(c!=null){var f=t(c,l-1),d=e*(c.coordinate+e*f/2-s);if(o[l-1]=c=xr(xr({},c),{},{tickCoord:d>0?c.coordinate-d*e:c.coordinate}),c.tickCoord!=null){var v=qu(e,c.tickCoord,()=>f,u,s);v&&(s=c.tickCoord-e*(f/2+i),o[l-1]=xr(xr({},c),{},{isShow:!0}))}}}for(var p=a?l-1:l,y=function(b){var w=o[b];if(w==null)return 1;var E=w,x,S=()=>(x===void 0&&(x=t(w,b)),x);if(b===0){var _=e*(E.coordinate-e*S()/2-u);o[b]=E=xr(xr({},E),{},{tickCoord:_<0?E.coordinate-_*e:E.coordinate})}else o[b]=E=xr(xr({},E),{},{tickCoord:E.coordinate});if(E.tickCoord!=null){var O=qu(e,E.tickCoord,S,u,s);O&&(u=E.tickCoord+e*(S()/2+i),o[b]=xr(xr({},E),{},{isShow:!0}))}},m=0;m<p;m++)y(m);return o}function Eb(e,r,t){var{tick:n,ticks:i,viewBox:a,minTickGap:o,orientation:l,interval:u,tickFormatter:s,unit:c,angle:f}=e;if(!i||!i.length||!n)return[];if(W(u)||_s.isSsr){var d;return(d=xhe(i,W(u)?u:0))!==null&&d!==void 0?d:[]}var v=[],p=l==="top"||l==="bottom"?"width":"height",y=c&&p==="width"?yu(c,{fontSize:r,letterSpacing:t}):{width:0,height:0},m=(x,S)=>{var _=typeof s=="function"?s(x.value,S):x.value;return p==="width"?whe(yu(_,{fontSize:r,letterSpacing:t}),y,f):yu(_,{fontSize:r,letterSpacing:t})[p]},h=i[0],b=i[1],w=i.length>=2&&h!=null&&b!=null?Ct(b.coordinate-h.coordinate):1,E=Ehe(a,w,p);return u==="equidistantPreserveStart"?She(w,E,m,i,o):u==="equidistantPreserveEnd"?_he(w,E,m,i,o):(u==="preserveStart"||u==="preserveStartEnd"?v=The(w,E,m,i,o,u==="preserveStartEnd"):v=Ahe(w,E,m,i,o),v.filter(x=>x.isShow))}var khe=e=>{var{ticks:r,label:t,labelGapWithTick:n=5,tickSize:i=0,tickMargin:a=0}=e,o=0;if(r){Array.from(r).forEach(c=>{if(c){var f=c.getBoundingClientRect();f.width>o&&(o=f.width)}});var l=t?t.getBoundingClientRect().width:0,u=i+a,s=o+u+l+(t?n:0);return Math.round(s)}return 0},Che={xAxis:{},yAxis:{}},AN=$r({name:"renderedTicks",initialState:Che,reducers:{setRenderedTicks:(e,r)=>{var{axisType:t,axisId:n,ticks:i}=r.payload;e[t][n]=i},removeRenderedTicks:(e,r)=>{var{axisType:t,axisId:n}=r.payload;delete e[t][n]}}}),{setRenderedTicks:Ihe,removeRenderedTicks:jhe}=AN.actions,Nhe=AN.reducer,Mhe=["axisLine","width","height","className","hide","ticks","axisType","axisId"];function Lhe(e,r){if(e==null)return{};var t,n,i=Dhe(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Dhe(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ua.apply(null,arguments)}function JO(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Me(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?JO(Object(t),!0).forEach(function(n){Rhe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):JO(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Rhe(e,r,t){return(r=Fhe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Fhe(e){var r=zhe(e,"string");return typeof r=="symbol"?r:r+""}function zhe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Gn={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:rr.axis};function Bhe(e){var{x:r,y:t,width:n,height:i,orientation:a,mirror:o,axisLine:l,otherSvgProps:u}=e;if(!l)return null;var s=Me(Me(Me({},u),Ft(l)),{},{fill:"none"});if(a==="top"||a==="bottom"){var c=+(a==="top"&&!o||a==="bottom"&&o);s=Me(Me({},s),{},{x1:r,y1:t+c*i,x2:r+n,y2:t+c*i})}else{var f=+(a==="left"&&!o||a==="right"&&o);s=Me(Me({},s),{},{x1:r+f*n,y1:t,x2:r+f*n,y2:t+i})}return g.createElement("line",Ua({},s,{className:me("recharts-cartesian-axis-line",Vo(l,"className"))}))}function Uhe(e,r,t,n,i,a,o,l,u){var s,c,f,d,v,p,y=l?-1:1,m=e.tickSize||o,h=W(e.tickCoord)?e.tickCoord:e.coordinate;switch(a){case"top":s=c=e.coordinate,d=t+ +!l*i,f=d-y*m,p=f-y*u,v=h;break;case"left":f=d=e.coordinate,c=r+ +!l*n,s=c-y*m,v=s-y*u,p=h;break;case"right":f=d=e.coordinate,c=r+ +l*n,s=c+y*m,v=s+y*u,p=h;break;default:s=c=e.coordinate,d=t+ +l*i,f=d+y*m,p=f+y*u,v=h;break}return{line:{x1:s,y1:f,x2:c,y2:d},tick:{x:v,y:p}}}function Whe(e,r){switch(e){case"left":return r?"start":"end";case"right":return r?"end":"start";default:return"middle"}}function Vhe(e,r){switch(e){case"left":case"right":return"middle";case"top":return r?"start":"end";default:return r?"end":"start"}}function Hhe(e){var{option:r,tickProps:t,value:n}=e,i,a=me(t.className,"recharts-cartesian-axis-tick-value");if(g.isValidElement(r))i=g.cloneElement(r,Me(Me({},t),{},{className:a}));else if(typeof r=="function")i=r(Me(Me({},t),{},{className:a}));else{var o="recharts-cartesian-axis-tick-value";typeof r!="boolean"&&(o=me(o,rpe(r))),i=g.createElement(mb,Ua({},t,{className:o}),n)}return i}function Khe(e){var{ticks:r,axisType:t,axisId:n}=e,i=Pe();return g.useEffect(()=>{if(n==null||t==null)return qa;var a=r.map(o=>({value:o.value,coordinate:o.coordinate,offset:o.offset,index:o.index}));return i(Ihe({ticks:a,axisId:n,axisType:t})),()=>{i(jhe({axisId:n,axisType:t}))}},[i,r,n,t]),null}var Ghe=g.forwardRef((e,r)=>{var{ticks:t=[],tick:n,tickLine:i,stroke:a,tickFormatter:o,unit:l,padding:u,tickTextProps:s,orientation:c,mirror:f,x:d,y:v,width:p,height:y,tickSize:m,tickMargin:h,fontSize:b,letterSpacing:w,getTicksConfig:E,events:x,axisType:S,axisId:_}=e,O=Eb(Me(Me({},E),{},{ticks:t}),b,w),P=Ft(E),T=hs(n),N=oN(P.textAnchor)?P.textAnchor:Whe(c,f),A=Vhe(c,f),H={};typeof i=="object"&&(H=i);var K=Me(Me({},P),{},{fill:"none"},H),ee=O.map(C=>Me({entry:C},Uhe(C,d,v,p,y,c,m,f,h))),re=ee.map(C=>{var{entry:M,line:D}=C;return g.createElement(nt,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(M.value,"-").concat(M.coordinate,"-").concat(M.tickCoord)},i&&g.createElement("line",Ua({},K,D,{className:me("recharts-cartesian-axis-tick-line",Vo(i,"className"))})))}),pe=ee.map((C,M)=>{var D,te,{entry:ne,tick:Ar}=C,Fe=Me(Me(Me(Me({verticalAnchor:A},P),{},{textAnchor:N,stroke:"none",fill:a},Ar),{},{index:M,payload:ne,visibleTicksCount:O.length,tickFormatter:o,padding:u},s),{},{angle:(D=(te=s==null?void 0:s.angle)!==null&&te!==void 0?te:P.angle)!==null&&D!==void 0?D:0}),Wt=Me(Me({},Fe),T);return g.createElement(nt,Ua({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(ne.value,"-").concat(ne.coordinate,"-").concat(ne.tickCoord)},U0(x,ne,M)),n&&g.createElement(Hhe,{option:n,tickProps:Wt,value:"".concat(typeof o=="function"?o(ne.value,M):ne.value).concat(l||"")}))});return g.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(S,"-ticks")},g.createElement(Khe,{ticks:O,axisId:_,axisType:S}),pe.length>0&&g.createElement(cn,{zIndex:rr.label},g.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(S,"-tick-labels"),ref:r},pe)),re.length>0&&g.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(S,"-tick-lines")},re))}),Yhe=g.forwardRef((e,r)=>{var{axisLine:t,width:n,height:i,className:a,hide:o,ticks:l,axisType:u,axisId:s}=e,c=Lhe(e,Mhe),[f,d]=g.useState(""),[v,p]=g.useState(""),y=g.useRef(null);g.useImperativeHandle(r,()=>({getCalculatedWidth:()=>{var h;return khe({ticks:y.current,label:(h=e.labelRef)===null||h===void 0?void 0:h.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var m=g.useCallback(h=>{if(h){var b=h.getElementsByClassName("recharts-cartesian-axis-tick-value");y.current=b;var w=b[0];if(w){var E=window.getComputedStyle(w),x=E.fontSize,S=E.letterSpacing;(x!==f||S!==v)&&(d(x),p(S))}}},[f,v]);return o||n!=null&&n<=0||i!=null&&i<=0?null:g.createElement(cn,{zIndex:e.zIndex},g.createElement(nt,{className:me("recharts-cartesian-axis",a)},g.createElement(Bhe,{x:e.x,y:e.y,width:n,height:i,orientation:e.orientation,mirror:e.mirror,axisLine:t,otherSvgProps:Ft(e)}),g.createElement(Ghe,{ref:m,axisType:u,events:c,fontSize:f,getTicksConfig:e,height:e.height,letterSpacing:v,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:l,unit:e.unit,width:e.width,x:e.x,y:e.y,axisId:s}),g.createElement(Mve,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},g.createElement(Hve,{label:e.label,labelRef:e.labelRef}),e.children)))}),xb=g.forwardRef((e,r)=>{var t=ur(e,Gn);return g.createElement(Yhe,Ua({},t,{ref:r}))});xb.displayName="CartesianAxis";var Xhe=["x1","y1","x2","y2","key"],qhe=["offset"],Zhe=["xAxisId","yAxisId"],Qhe=["xAxisId","yAxisId"];function e$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function _r(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?e$(Object(t),!0).forEach(function(n){Jhe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):e$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Jhe(e,r,t){return(r=eme(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function eme(e){var r=rme(e,"string");return typeof r=="symbol"?r:r+""}function rme(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _a(){return _a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_a.apply(null,arguments)}function Sd(e,r){if(e==null)return{};var t,n,i=tme(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function tme(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var nme=e=>{var{fill:r}=e;if(!r||r==="none")return null;var{fillOpacity:t,x:n,y:i,width:a,height:o,ry:l}=e;return g.createElement("rect",{x:n,y:i,ry:l,width:a,height:o,stroke:"none",fill:r,fillOpacity:t,className:"recharts-cartesian-grid-bg"})};function TN(e){var{option:r,lineItemProps:t}=e,n;if(g.isValidElement(r))n=g.cloneElement(r,t);else if(typeof r=="function")n=r(t);else{var i,{x1:a,y1:o,x2:l,y2:u,key:s}=t,c=Sd(t,Xhe),f=(i=Ft(c))!==null&&i!==void 0?i:{},d=Sd(f,qhe);n=g.createElement("line",_a({},d,{x1:a,y1:o,x2:l,y2:u,fill:"none",key:s}))}return n}function ime(e){var{x:r,width:t,horizontal:n=!0,horizontalPoints:i}=e;if(!n||!i||!i.length)return null;var a=Sd(e,Zhe),o=i.map((l,u)=>{var s=_r(_r({},a),{},{x1:r,y1:l,x2:r+t,y2:l,key:"line-".concat(u),index:u});return g.createElement(TN,{key:"line-".concat(u),option:n,lineItemProps:s})});return g.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function ame(e){var{y:r,height:t,vertical:n=!0,verticalPoints:i}=e;if(!n||!i||!i.length)return null;var a=Sd(e,Qhe),o=i.map((l,u)=>{var s=_r(_r({},a),{},{x1:l,y1:r,x2:l,y2:r+t,key:"line-".concat(u),index:u});return g.createElement(TN,{option:n,lineItemProps:s,key:"line-".concat(u)})});return g.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function ome(e){var{horizontalFill:r,fillOpacity:t,x:n,y:i,width:a,height:o,horizontalPoints:l,horizontal:u=!0}=e;if(!u||!r||!r.length||l==null)return null;var s=l.map(f=>Math.round(f+i-i)).sort((f,d)=>f-d);i!==s[0]&&s.unshift(0);var c=s.map((f,d)=>{var v=s[d+1],p=v==null,y=p?i+o-f:v-f;if(y<=0)return null;var m=d%r.length;return g.createElement("rect",{key:"react-".concat(d),y:f,x:n,height:y,width:a,stroke:"none",fill:r[m],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return g.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},c)}function lme(e){var{vertical:r=!0,verticalFill:t,fillOpacity:n,x:i,y:a,width:o,height:l,verticalPoints:u}=e;if(!r||!t||!t.length)return null;var s=u.map(f=>Math.round(f+i-i)).sort((f,d)=>f-d);i!==s[0]&&s.unshift(0);var c=s.map((f,d)=>{var v=s[d+1],p=v==null,y=p?i+o-f:v-f;if(y<=0)return null;var m=d%t.length;return g.createElement("rect",{key:"react-".concat(d),x:f,y:a,width:y,height:l,stroke:"none",fill:t[m],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return g.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},c)}var ume=(e,r)=>{var{xAxis:t,width:n,height:i,offset:a}=e;return aC(Eb(_r(_r(_r({},Gn),t),{},{ticks:oC(t),viewBox:{x:0,y:0,width:n,height:i}})),a.left,a.left+a.width,r)},sme=(e,r)=>{var{yAxis:t,width:n,height:i,offset:a}=e;return aC(Eb(_r(_r(_r({},Gn),t),{},{ticks:oC(t),viewBox:{x:0,y:0,width:n,height:i}})),a.top,a.top+a.height,r)},cme={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:rr.grid};function Sb(e){var r=s1(),t=c1(),n=yC(),i=_r(_r({},ur(e,cme)),{},{x:W(e.x)?e.x:n.left,y:W(e.y)?e.y:n.top,width:W(e.width)?e.width:n.width,height:W(e.height)?e.height:n.height}),{xAxisId:a,yAxisId:o,x:l,y:u,width:s,height:c,syncWithTicks:f,horizontalValues:d,verticalValues:v}=i,p=Pr(),y=V(P=>iO(P,"xAxis",a,p)),m=V(P=>iO(P,"yAxis",o,p));if(!Tn(s)||!Tn(c)||!W(l)||!W(u))return null;var h=i.verticalCoordinatesGenerator||ume,b=i.horizontalCoordinatesGenerator||sme,{horizontalPoints:w,verticalPoints:E}=i;if((!w||!w.length)&&typeof b=="function"){var x=d&&d.length,S=b({yAxis:m?_r(_r({},m),{},{ticks:x?d:m.ticks}):void 0,width:r??s,height:t??c,offset:n},x?!0:f);Yf(Array.isArray(S),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof S,"]")),Array.isArray(S)&&(w=S)}if((!E||!E.length)&&typeof h=="function"){var _=v&&v.length,O=h({xAxis:y?_r(_r({},y),{},{ticks:_?v:y.ticks}):void 0,width:r??s,height:t??c,offset:n},_?!0:f);Yf(Array.isArray(O),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O,"]")),Array.isArray(O)&&(E=O)}return g.createElement(cn,{zIndex:i.zIndex},g.createElement("g",{className:"recharts-cartesian-grid"},g.createElement(nme,{fill:i.fill,fillOpacity:i.fillOpacity,x:i.x,y:i.y,width:i.width,height:i.height,ry:i.ry}),g.createElement(ome,_a({},i,{horizontalPoints:w})),g.createElement(lme,_a({},i,{verticalPoints:E})),g.createElement(ime,_a({},i,{offset:n,horizontalPoints:w,xAxis:y,yAxis:m})),g.createElement(ame,_a({},i,{offset:n,verticalPoints:E,xAxis:y,yAxis:m}))))}Sb.displayName="CartesianGrid";var fme={},dme=$r({name:"errorBars",initialState:fme,reducers:{addErrorBar:(e,r)=>{var{itemId:t,errorBar:n}=r.payload;e[t]||(e[t]=[]),e[t].push(n)},replaceErrorBar:(e,r)=>{var{itemId:t,prev:n,next:i}=r.payload;e[t]&&(e[t]=e[t].map(a=>a.dataKey===n.dataKey&&a.direction===n.direction?i:a))},removeErrorBar:(e,r)=>{var{itemId:t,errorBar:n}=r.payload;e[t]&&(e[t]=e[t].filter(i=>i.dataKey!==n.dataKey||i.direction!==n.direction))}}}),vme=dme.reducer,pme=["children"];function hme(e,r){if(e==null)return{};var t,n,i=mme(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function mme(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var yme={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},gme=g.createContext(yme);function kN(e){var{children:r}=e,t=hme(e,pme);return g.createElement(gme.Provider,{value:t},r)}function _b(e,r){var t,n,i=V(s=>di(s,e)),a=V(s=>vi(s,r)),o=(t=i==null?void 0:i.allowDataOverflow)!==null&&t!==void 0?t:Xe.allowDataOverflow,l=(n=a==null?void 0:a.allowDataOverflow)!==null&&n!==void 0?n:qe.allowDataOverflow,u=o||l;return{needClip:u,needClipX:o,needClipY:l}}function CN(e){var{xAxisId:r,yAxisId:t,clipPathId:n}=e,i=wb(),{needClipX:a,needClipY:o,needClip:l}=_b(r,t);if(!l||!i)return null;var{x:u,y:s,width:c,height:f}=i;return g.createElement("clipPath",{id:"clipPath-".concat(n)},g.createElement("rect",{x:a?u:u-c/2,y:o?s:s-f/2,width:a?c:c*2,height:o?f:f*2}))}var IN=(e,r,t,n)=>np(e,"xAxis",r,n),jN=(e,r,t,n)=>tp(e,"xAxis",r,n),NN=(e,r,t,n)=>np(e,"yAxis",t,n),MN=(e,r,t,n)=>tp(e,"yAxis",t,n),bme=$([Ne,IN,NN,jN,MN],(e,r,t,n,i)=>ui(e,"xAxis")?Gf(r,n,!1):Gf(t,i,!1)),wme=(e,r,t,n,i)=>i;function Eme(e){return e.type==="line"}var xme=$([Z1,wme],(e,r)=>e.filter(Eme).find(t=>t.id===r)),Sme=$([Ne,IN,NN,jN,MN,xme,bme,Fv],(e,r,t,n,i,a,o,l)=>{var{chartData:u,dataStartIndex:s,dataEndIndex:c}=l;if(!(a==null||r==null||t==null||n==null||i==null||n.length===0||i.length===0||o==null||e!=="horizontal"&&e!=="vertical")){var{dataKey:f,data:d}=a,v;if(d!=null&&d.length>0?v=d:v=u==null?void 0:u.slice(s,c+1),v!=null)return Vme({layout:e,xAxis:r,yAxis:t,xAxisTicks:n,yAxisTicks:i,dataKey:f,bandSize:o,displayedData:v})}});function _me(e){var r=hs(e),t=3,n=2;if(r!=null){var{r:i,strokeWidth:a}=r,o=Number(i),l=Number(a);return(Number.isNaN(o)||o<0)&&(o=t),(Number.isNaN(l)||l<0)&&(l=n),{r:o,strokeWidth:l}}return{r:t,strokeWidth:n}}var Ome=["id"],$me=["type","layout","connectNulls","needClip","shape"],Pme=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function Zu(){return Zu=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Zu.apply(null,arguments)}function r$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function yn(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?r$(Object(t),!0).forEach(function(n){Ame(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ame(e,r,t){return(r=Tme(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Tme(e){var r=kme(e,"string");return typeof r=="symbol"?r:r+""}function kme(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ob(e,r){if(e==null)return{};var t,n,i=Cme(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Cme(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var Ime=e=>{var{dataKey:r,name:t,stroke:n,legendType:i,hide:a}=e;return[{inactive:a,dataKey:r,type:i,color:n,value:Tv(t,r),payload:e}]},jme=g.memo(e=>{var{dataKey:r,data:t,stroke:n,strokeWidth:i,fill:a,name:o,hide:l,unit:u,tooltipType:s,id:c}=e,f={dataDefinedOnItem:t,getPosition:qa,settings:{stroke:n,strokeWidth:i,fill:a,dataKey:r,nameKey:void 0,name:Tv(o,r),hide:l,type:s,color:n,unit:u,graphicalItemId:c}};return g.createElement(EN,{tooltipEntrySettings:f})}),LN=(e,r)=>"".concat(r,"px ").concat(e,"px");function Nme(e,r){for(var t=e.length%2!==0?[...e,0]:e,n=[],i=0;i<r;++i)n.push(...t);return n}var Mme=(e,r,t)=>{var n=t.reduce((d,v)=>d+v,0);if(!n)return LN(r,e);for(var i=Math.floor(e/n),a=e%n,o=[],l=0,u=0;l<t.length;u+=(s=t[l])!==null&&s!==void 0?s:0,++l){var s,c=t[l];if(c!=null&&u+c>a){o=[...t.slice(0,l),a-u];break}}var f=o.length%2===0?[0,r]:[r];return[...Nme(t,i),...o,...f].map(d=>"".concat(d,"px")).join(", ")};function Lme(e){var{clipPathId:r,points:t,props:n}=e,{dot:i,dataKey:a,needClip:o}=n,l=Ob(n,Ome),u=Ft(l);return g.createElement(Wpe,{points:t,dot:i,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:a,baseProps:u,needClip:o,clipPathId:r})}function Dme(e){var{showLabels:r,children:t,points:n}=e,i=g.useMemo(()=>n==null?void 0:n.map(a=>{var o,l,u={x:(o=a.x)!==null&&o!==void 0?o:0,y:(l=a.y)!==null&&l!==void 0?l:0,width:0,lowerWidth:0,upperWidth:0,height:0};return yn(yn({},u),{},{value:a.value,payload:a.payload,viewBox:u,parentViewBox:void 0,fill:void 0})}),[n]);return g.createElement(vN,{value:r?i:void 0},t)}function t$(e){var{clipPathId:r,pathRef:t,points:n,strokeDasharray:i,props:a}=e,{type:o,layout:l,connectNulls:u,needClip:s,shape:c}=a,f=Ob(a,$me),d=yn(yn({},Ir(f)),{},{fill:"none",className:"recharts-line-curve",clipPath:s?"url(#clipPath-".concat(r,")"):void 0,points:n,type:o,layout:l,connectNulls:u,strokeDasharray:i??a.strokeDasharray});return g.createElement(g.Fragment,null,(n==null?void 0:n.length)>1&&g.createElement(Yy,Zu({shapeType:"curve",option:c},d,{pathRef:t})),g.createElement(Lme,{points:n,clipPathId:r,props:a}))}function Rme(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function Fme(e){var{clipPathId:r,props:t,pathRef:n,previousPointsRef:i,longestAnimatedLengthRef:a}=e,{points:o,strokeDasharray:l,isAnimationActive:u,animationBegin:s,animationDuration:c,animationEasing:f,animateNewValues:d,width:v,height:p,onAnimationEnd:y,onAnimationStart:m}=t,h=i.current,b=Rv(o,"recharts-line-"),w=g.useRef(b),[E,x]=g.useState(!1),S=!E,_=g.useCallback(()=>{typeof y=="function"&&y(),x(!1)},[y]),O=g.useCallback(()=>{typeof m=="function"&&m(),x(!0)},[m]),P=Rme(n.current),T=g.useRef(0);w.current!==b&&(T.current=a.current,w.current=b);var N=T.current;return g.createElement(Dme,{points:o,showLabels:S},t.children,g.createElement(Dv,{animationId:b,begin:s,duration:c,isActive:u,easing:f,onAnimationEnd:_,onAnimationStart:O,key:b},A=>{var H=or(N,P+N,A),K=Math.min(H,P),ee;if(u)if(l){var re="".concat(l).split(/[,\s]+/gim).map(M=>parseFloat(M));ee=Mme(K,P,re)}else ee=LN(P,K);else ee=l==null?void 0:String(l);if(A>0&&P>0&&(i.current=o,a.current=Math.max(a.current,K)),h){var pe=h.length/o.length,C=A===1?o:o.map((M,D)=>{var te=Math.floor(D*pe);if(h[te]){var ne=h[te];return yn(yn({},M),{},{x:or(ne.x,M.x,A),y:or(ne.y,M.y,A)})}return d?yn(yn({},M),{},{x:or(v*2,M.x,A),y:or(p/2,M.y,A)}):yn(yn({},M),{},{x:M.x,y:M.y})});return i.current=C,g.createElement(t$,{props:t,points:C,clipPathId:r,pathRef:n,strokeDasharray:ee})}return g.createElement(t$,{props:t,points:o,clipPathId:r,pathRef:n,strokeDasharray:ee})}),g.createElement(hN,{label:t.label}))}function zme(e){var{clipPathId:r,props:t}=e,n=g.useRef(null),i=g.useRef(0),a=g.useRef(null);return g.createElement(Fme,{props:t,clipPathId:r,previousPointsRef:n,longestAnimatedLengthRef:i,pathRef:a})}var Bme=(e,r)=>{var t,n;return{x:(t=e.x)!==null&&t!==void 0?t:void 0,y:(n=e.y)!==null&&n!==void 0?n:void 0,value:e.value,errorVal:Be(e.payload,r)}};class Ume extends g.Component{render(){var{hide:r,dot:t,points:n,className:i,xAxisId:a,yAxisId:o,top:l,left:u,width:s,height:c,id:f,needClip:d,zIndex:v}=this.props;if(r)return null;var p=me("recharts-line",i),y=f,{r:m,strokeWidth:h}=_me(t),b=bN(t),w=m*2+h,E=d?"url(#clipPath-".concat(b?"":"dots-").concat(y,")"):void 0;return g.createElement(cn,{zIndex:v},g.createElement(nt,{className:p},d&&g.createElement("defs",null,g.createElement(CN,{clipPathId:y,xAxisId:a,yAxisId:o}),!b&&g.createElement("clipPath",{id:"clipPath-dots-".concat(y)},g.createElement("rect",{x:u-w/2,y:l-w/2,width:s+w,height:c+w}))),g.createElement(kN,{xAxisId:a,yAxisId:o,data:n,dataPointFormatter:Bme,errorBarOffset:0},g.createElement(zme,{props:this.props,clipPathId:y}))),g.createElement(she,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:E}))}}var DN={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:rr.line,type:"linear"};function Wme(e){var r=ur(e,DN),{activeDot:t,animateNewValues:n,animationBegin:i,animationDuration:a,animationEasing:o,connectNulls:l,dot:u,hide:s,isAnimationActive:c,label:f,legendType:d,xAxisId:v,yAxisId:p,id:y}=r,m=Ob(r,Pme),{needClip:h}=_b(v,p),b=wb(),w=fl(),E=Pr(),x=V(T=>Sme(T,v,p,E,y));if(w!=="horizontal"&&w!=="vertical"||x==null||b==null)return null;var{height:S,width:_,x:O,y:P}=b;return g.createElement(Ume,Zu({},m,{id:y,connectNulls:l,dot:u,activeDot:t,animateNewValues:n,animationBegin:i,animationDuration:a,animationEasing:o,isAnimationActive:c,hide:s,label:f,legendType:d,xAxisId:v,yAxisId:p,points:x,layout:w,height:S,width:_,left:O,top:P,needClip:h}))}function Vme(e){var{layout:r,xAxis:t,yAxis:n,xAxisTicks:i,yAxisTicks:a,dataKey:o,bandSize:l,displayedData:u}=e;return u.map((s,c)=>{var f=Be(s,o);if(r==="horizontal"){var d=Kf({axis:t,ticks:i,bandSize:l,entry:s,index:c}),v=Te(f)?null:n.scale.map(f);return{x:d,y:v??null,value:f,payload:s}}var p=Te(f)?null:t.scale.map(f),y=Kf({axis:n,ticks:a,bandSize:l,entry:s,index:c});return p==null||y==null?null:{x:p,y,value:f,payload:s}}).filter(Boolean)}function Hme(e){var r=ur(e,DN),t=Pr();return g.createElement(SN,{id:r.id,type:"line"},n=>g.createElement(g.Fragment,null,g.createElement(xN,{legendPayload:Ime(r)}),g.createElement(jme,{dataKey:r.dataKey,data:r.data,stroke:r.stroke,strokeWidth:r.strokeWidth,fill:r.fill,name:r.name,hide:r.hide,unit:r.unit,tooltipType:r.tooltipType,id:n}),g.createElement(ON,{type:"line",id:n,data:r.data,xAxisId:r.xAxisId,yAxisId:r.yAxisId,zAxisId:0,dataKey:r.dataKey,hide:r.hide,isPanorama:t}),g.createElement(Wme,Zu({},r,{id:n}))))}var $b=g.memo(Hme,dl);$b.displayName="Line";var Kme=["option","isActive"];function gu(){return gu=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},gu.apply(null,arguments)}function Gme(e,r){if(e==null)return{};var t,n,i=Yme(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Yme(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Xme(e){var{option:r,isActive:t}=e,n=Gme(e,Kme);return typeof r=="string"?g.createElement(Yy,gu({option:g.createElement(mv,gu({type:r},n)),isActive:t,shapeType:"symbols"},n)):g.createElement(Yy,gu({option:r,isActive:t,shapeType:"symbols"},n))}var qme=(e,r,t,n,i,a,o)=>np(e,"xAxis",r,o),Zme=(e,r,t,n,i,a,o)=>tp(e,"xAxis",r,o),Qme=(e,r,t,n,i,a,o)=>np(e,"yAxis",t,o),Jme=(e,r,t,n,i,a,o)=>tp(e,"yAxis",t,o),eye=(e,r,t,n)=>Ace(e,"zAxis",n,!1),rye=(e,r,t,n,i)=>i,tye=(e,r,t,n,i,a)=>a,nye=(e,r,t,n,i,a,o)=>Fv(e,void 0,void 0,o),iye=$([Z1,rye],(e,r)=>e.filter(t=>t.type==="scatter").find(t=>t.id===r)),aye=$([nye,qme,Zme,Qme,Jme,eye,iye,tye],(e,r,t,n,i,a,o,l)=>{var{chartData:u,dataStartIndex:s,dataEndIndex:c}=e;if(o!=null){var f;if((o==null?void 0:o.data)!=null&&o.data.length>0?f=o.data:f=u==null?void 0:u.slice(s,c+1),!(f==null||r==null||n==null||t==null||i==null||(t==null?void 0:t.length)===0||(i==null?void 0:i.length)===0))return bye({displayedData:f,xAxis:r,yAxis:n,zAxis:a,scatterSettings:o,xAxisTicks:t,yAxisTicks:i,cells:l})}}),oye=["id"],lye=["onMouseEnter","onClick","onMouseLeave"],uye=["animationBegin","animationDuration","animationEasing","hide","isAnimationActive","legendType","lineJointType","lineType","shape","xAxisId","yAxisId","zAxisId"];function Xy(e,r){if(e==null)return{};var t,n,i=sye(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function sye(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Wa.apply(null,arguments)}function n$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Zr(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?n$(Object(t),!0).forEach(function(n){cye(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function cye(e,r,t){return(r=fye(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function fye(e){var r=dye(e,"string");return typeof r=="symbol"?r:r+""}function dye(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var vye=e=>{var{dataKey:r,name:t,fill:n,legendType:i,hide:a}=e;return[{inactive:a,dataKey:r,type:i,color:n,value:Tv(t,r),payload:e}]},pye=g.memo(e=>{var{dataKey:r,points:t,stroke:n,strokeWidth:i,fill:a,name:o,hide:l,tooltipType:u,id:s}=e,c={dataDefinedOnItem:t==null?void 0:t.map(f=>f.tooltipPayload),getPosition:f=>{var d;return t==null||(d=t[Number(f)])===null||d===void 0?void 0:d.tooltipPosition},settings:{stroke:n,strokeWidth:i,fill:a,nameKey:void 0,dataKey:r,name:Tv(o,r),hide:l,type:u,color:a,unit:"",graphicalItemId:s}};return g.createElement(EN,{tooltipEntrySettings:c})});function hye(e){var{points:r,props:t}=e,{line:n,lineType:i,lineJointType:a}=t;if(!n)return null;var o=Ft(t),l=hs(n),u,s;if(i==="joint")u=r.map(m=>{var h,b;return{x:(h=m.cx)!==null&&h!==void 0?h:null,y:(b=m.cy)!==null&&b!==void 0?b:null}});else if(i==="fitting"){var{xmin:c,xmax:f,a:d,b:v}=pre(r),p=m=>d*m+v;u=[{x:c,y:p(c)},{x:f,y:p(f)}]}var y=Zr(Zr(Zr({},o),{},{fill:"none",stroke:o&&o.fill},l),{},{points:u});return g.isValidElement(n)?s=g.cloneElement(n,y):typeof n=="function"?s=n(y):s=g.createElement(p1,Wa({},y,{type:a})),g.createElement(nt,{className:"recharts-scatter-line",key:"recharts-scatter-line"},s)}function mye(e){var{showLabels:r,points:t,children:n}=e,i=ws(),a=g.useMemo(()=>t==null?void 0:t.map(o=>{var l,u,s={x:(l=o.x)!==null&&l!==void 0?l:0,y:(u=o.y)!==null&&u!==void 0?u:0,width:o.width,height:o.height,lowerWidth:o.width,upperWidth:o.width};return Zr(Zr({},s),{},{value:void 0,payload:o.payload,viewBox:s,parentViewBox:i,fill:void 0})}),[i,t]);return g.createElement(vN,{value:r?a:void 0},n)}function yye(e){var{points:r,allOtherScatterProps:t}=e,{shape:n,activeShape:i,dataKey:a}=t,{id:o}=t,l=Xy(t,oye),u=V(Qo),{onMouseEnter:s,onClick:c,onMouseLeave:f}=t,d=Xy(t,lye),v=xpe(s,a,o),p=Spe(f),y=_pe(c,a,o);if(!$re(r))return null;var m=Ft(l);return g.createElement(g.Fragment,null,g.createElement(hye,{points:r,props:l}),r.map((h,b)=>{var w=i!=null&&i!==!1,E=w&&u===String(b),x=w&&E?i:n,S=Zr(Zr(Zr({},m),h),{},{index:b,[uC]:String(o)});return g.createElement(cn,{key:"symbol-".concat(h==null?void 0:h.cx,"-").concat(h==null?void 0:h.cy,"-").concat(h==null?void 0:h.size,"-").concat(b),zIndex:E?rr.activeDot:void 0},g.createElement(nt,Wa({className:"recharts-scatter-symbol"},U0(d,h,b),{onMouseEnter:v(h,b),onMouseLeave:p(h,b),onClick:y(h,b)}),g.createElement(Xme,Wa({option:x,isActive:E},S))))}))}function gye(e){var{previousPointsRef:r,props:t}=e,{points:n,isAnimationActive:i,animationBegin:a,animationDuration:o,animationEasing:l}=t,u=r.current,s=Rv(t,"recharts-scatter-"),[c,f]=g.useState(!1),d=g.useCallback(()=>{f(!1)},[]),v=g.useCallback(()=>{f(!0)},[]),p=!c;return g.createElement(mye,{showLabels:p,points:n},t.children,g.createElement(Dv,{animationId:s,begin:a,duration:o,isActive:i,easing:l,onAnimationEnd:d,onAnimationStart:v,key:s},y=>{var m=y===1?n:n==null?void 0:n.map((h,b)=>{var w=u&&u[b];return w?Zr(Zr({},h),{},{cx:h.cx==null?void 0:or(w.cx,h.cx,y),cy:h.cy==null?void 0:or(w.cy,h.cy,y),size:or(w.size,h.size,y)}):Zr(Zr({},h),{},{size:or(0,h.size,y)})});return y>0&&(r.current=m),g.createElement(nt,null,g.createElement(yye,{points:m,allOtherScatterProps:t,showLabels:p}))}),g.createElement(hN,{label:t.label}))}function bye(e){var{displayedData:r,xAxis:t,yAxis:n,zAxis:i,scatterSettings:a,xAxisTicks:o,yAxisTicks:l,cells:u}=e,s=Te(t.dataKey)?a.dataKey:t.dataKey,c=Te(n.dataKey)?a.dataKey:n.dataKey,f=i&&i.dataKey,d=i?i.range:VI.range,v=d&&d[0],p=t.scale.bandwidth?t.scale.bandwidth():0,y=n.scale.bandwidth?n.scale.bandwidth():0;return r.map((m,h)=>{var b=Be(m,s),w=Be(m,c),E=!Te(f)&&Be(m,f)||"-",x=[{name:Te(t.dataKey)?a.name:t.name||String(t.dataKey),unit:t.unit||"",value:b,payload:m,dataKey:s,type:a.tooltipType,graphicalItemId:a.id},{name:Te(n.dataKey)?a.name:n.name||String(n.dataKey),unit:n.unit||"",value:w,payload:m,dataKey:c,type:a.tooltipType,graphicalItemId:a.id}];E!=="-"&&i!=null&&x.push({name:i.name||i.dataKey,unit:i.unit||"",value:E,payload:m,dataKey:f,type:a.tooltipType,graphicalItemId:a.id});var S=Kf({axis:t,ticks:o,bandSize:p,entry:m,index:h,dataKey:s}),_=Kf({axis:n,ticks:l,bandSize:y,entry:m,index:h,dataKey:c}),O=E!=="-"&&i!=null?i.scale.map(E):v,P=O==null?0:Math.sqrt(Math.max(O,0)/Math.PI);return Zr(Zr({},m),{},{cx:S,cy:_,x:S==null?void 0:S-P,y:_==null?void 0:_-P,width:2*P,height:2*P,size:O,node:{x:b,y:w,z:E},tooltipPayload:x,tooltipPosition:{x:S,y:_},payload:m},u&&u[h]&&u[h].props)})}var wye=(e,r,t)=>({x:e.cx,y:e.cy,value:Number(t==="x"?e.node.x:e.node.y),errorVal:Be(e,r)});function Eye(e){var{hide:r,points:t,className:n,needClip:i,xAxisId:a,yAxisId:o,id:l}=e,u=g.useRef(null);if(r)return null;var s=me("recharts-scatter",n),c=l;return g.createElement(cn,{zIndex:e.zIndex},g.createElement(nt,{className:s,clipPath:i?"url(#clipPath-".concat(c,")"):void 0,id:l},i&&g.createElement("defs",null,g.createElement(CN,{clipPathId:c,xAxisId:a,yAxisId:o})),g.createElement(kN,{xAxisId:a,yAxisId:o,data:t,dataPointFormatter:wye,errorBarOffset:0},g.createElement(nt,{key:"recharts-scatter-symbols"},g.createElement(gye,{props:e,previousPointsRef:u})))))}var RN={xAxisId:0,yAxisId:0,zAxisId:0,label:!1,line:!1,legendType:"circle",lineType:"joint",lineJointType:"linear",shape:"circle",hide:!1,isAnimationActive:"auto",animationBegin:0,animationDuration:400,animationEasing:"linear",zIndex:rr.scatter};function xye(e){var r=ur(e,RN),{animationBegin:t,animationDuration:n,animationEasing:i,hide:a,isAnimationActive:o,legendType:l,lineJointType:u,lineType:s,shape:c,xAxisId:f,yAxisId:d,zAxisId:v}=r,p=Xy(r,uye),{needClip:y}=_b(f,d),m=g.useMemo(()=>ape(e.children,eN),[e.children]),h=Pr(),b=V(w=>aye(w,f,d,v,e.id,m,h));return y==null||b==null?null:g.createElement(g.Fragment,null,g.createElement(pye,{dataKey:e.dataKey,points:b,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,id:e.id}),g.createElement(Eye,Wa({},p,{xAxisId:f,yAxisId:d,zAxisId:v,lineType:s,lineJointType:u,legendType:l,shape:c,hide:a,isAnimationActive:o,animationBegin:t,animationDuration:n,animationEasing:i,points:b,needClip:y})))}function Sye(e){var r=ur(e,RN),t=Pr();return g.createElement(SN,{id:r.id,type:"scatter"},n=>g.createElement(g.Fragment,null,g.createElement(xN,{legendPayload:vye(r)}),g.createElement(ON,{type:"scatter",id:n,data:r.data,xAxisId:r.xAxisId,yAxisId:r.yAxisId,zAxisId:r.zAxisId,dataKey:r.dataKey,hide:r.hide,name:r.name,tooltipType:r.tooltipType,isPanorama:t}),g.createElement(xye,Wa({},r,{id:n}))))}var FN=g.memo(Sye,dl);FN.displayName="Scatter";var _ye=["domain","range"],Oye=["domain","range"];function i$(e,r){if(e==null)return{};var t,n,i=$ye(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function $ye(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function a$(e,r){return e===r?!0:Array.isArray(e)&&e.length===2&&Array.isArray(r)&&r.length===2?e[0]===r[0]&&e[1]===r[1]:!1}function zN(e,r){if(e===r)return!0;var{domain:t,range:n}=e,i=i$(e,_ye),{domain:a,range:o}=r,l=i$(r,Oye);return!a$(t,a)||!a$(n,o)?!1:dl(i,l)}var Pye=["type"],Aye=["dangerouslySetInnerHTML","ticks","scale"],Tye=["id","scale"];function qy(){return qy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},qy.apply(null,arguments)}function o$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function l$(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?o$(Object(t),!0).forEach(function(n){kye(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function kye(e,r,t){return(r=Cye(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Cye(e){var r=Iye(e,"string");return typeof r=="symbol"?r:r+""}function Iye(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Zy(e,r){if(e==null)return{};var t,n,i=jye(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function jye(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Nye(e){var r=Pe(),t=g.useRef(null),n=gC(),{type:i}=e,a=Zy(e,Pye),o=Uv(n,"xAxis",i),l=g.useMemo(()=>{if(o!=null)return l$(l$({},a),{},{type:o})},[a,o]);return g.useLayoutEffect(()=>{l!=null&&(t.current===null?r(Ype(l)):t.current!==l&&r(Xpe({prev:t.current,next:l})),t.current=l)},[l,r]),g.useLayoutEffect(()=>()=>{t.current&&(r(qpe(t.current)),t.current=null)},[r]),null}var Mye=e=>{var{xAxisId:r,className:t}=e,n=V(sC),i=Pr(),a="xAxis",o=V(d=>Ej(d,a,r,i)),l=V(d=>pce(d,r)),u=V(d=>wce(d,r)),s=V(d=>UI(d,r));if(l==null||u==null||s==null)return null;var c=Zy(e,Aye),f=Zy(s,Tye);return g.createElement(xb,qy({},c,f,{x:u.x,y:u.y,width:l.width,height:l.height,className:me("recharts-".concat(a," ").concat(a),t),viewBox:n,ticks:o,axisType:a,axisId:r}))},Lye={allowDataOverflow:Xe.allowDataOverflow,allowDecimals:Xe.allowDecimals,allowDuplicatedCategory:Xe.allowDuplicatedCategory,angle:Xe.angle,axisLine:Gn.axisLine,height:Xe.height,hide:!1,includeHidden:Xe.includeHidden,interval:Xe.interval,label:!1,minTickGap:Xe.minTickGap,mirror:Xe.mirror,orientation:Xe.orientation,padding:Xe.padding,reversed:Xe.reversed,scale:Xe.scale,tick:Xe.tick,tickCount:Xe.tickCount,tickLine:Gn.tickLine,tickSize:Gn.tickSize,type:Xe.type,niceTicks:Xe.niceTicks,xAxisId:0},Dye=e=>{var r=ur(e,Lye);return g.createElement(g.Fragment,null,g.createElement(Nye,{allowDataOverflow:r.allowDataOverflow,allowDecimals:r.allowDecimals,allowDuplicatedCategory:r.allowDuplicatedCategory,angle:r.angle,dataKey:r.dataKey,domain:r.domain,height:r.height,hide:r.hide,id:r.xAxisId,includeHidden:r.includeHidden,interval:r.interval,minTickGap:r.minTickGap,mirror:r.mirror,name:r.name,orientation:r.orientation,padding:r.padding,reversed:r.reversed,scale:r.scale,tick:r.tick,tickCount:r.tickCount,tickFormatter:r.tickFormatter,ticks:r.ticks,type:r.type,unit:r.unit,niceTicks:r.niceTicks}),g.createElement(Mye,r))},Pb=g.memo(Dye,zN);Pb.displayName="XAxis";var Rye=["type"],Fye=["dangerouslySetInnerHTML","ticks","scale"],zye=["id","scale"];function Qy(){return Qy=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qy.apply(null,arguments)}function u$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function s$(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?u$(Object(t),!0).forEach(function(n){Bye(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Bye(e,r,t){return(r=Uye(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Uye(e){var r=Wye(e,"string");return typeof r=="symbol"?r:r+""}function Wye(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Jy(e,r){if(e==null)return{};var t,n,i=Vye(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Vye(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function Hye(e){var r=Pe(),t=g.useRef(null),n=gC(),{type:i}=e,a=Jy(e,Rye),o=Uv(n,"yAxis",i),l=g.useMemo(()=>{if(o!=null)return s$(s$({},a),{},{type:o})},[o,a]);return g.useLayoutEffect(()=>{l!=null&&(t.current===null?r(Zpe(l)):t.current!==l&&r(Qpe({prev:t.current,next:l})),t.current=l)},[l,r]),g.useLayoutEffect(()=>()=>{t.current&&(r(Jpe(t.current)),t.current=null)},[r]),null}function Kye(e){var{yAxisId:r,className:t,width:n,label:i}=e,a=g.useRef(null),o=g.useRef(null),l=V(sC),u=Pr(),s=Pe(),c="yAxis",f=V(h=>Sce(h,r)),d=V(h=>xce(h,r)),v=V(h=>Ej(h,c,r,u)),p=V(h=>WI(h,r));if(g.useLayoutEffect(()=>{if(!(n!=="auto"||!f||yb(i)||g.isValidElement(i)||p==null)){var h=a.current;if(h){var b=h.getCalculatedWidth();Math.round(f.width)!==Math.round(b)&&s(ehe({id:r,width:b}))}}},[v,f,s,i,r,n,p]),f==null||d==null||p==null)return null;var y=Jy(e,Fye),m=Jy(p,zye);return g.createElement(xb,Qy({},y,m,{ref:a,labelRef:o,x:d.x,y:d.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:f.width,height:f.height,className:me("recharts-".concat(c," ").concat(c),t),viewBox:l,ticks:v,axisType:c,axisId:r}))}var Gye={allowDataOverflow:qe.allowDataOverflow,allowDecimals:qe.allowDecimals,allowDuplicatedCategory:qe.allowDuplicatedCategory,angle:qe.angle,axisLine:Gn.axisLine,hide:!1,includeHidden:qe.includeHidden,interval:qe.interval,label:!1,minTickGap:qe.minTickGap,mirror:qe.mirror,orientation:qe.orientation,padding:qe.padding,reversed:qe.reversed,scale:qe.scale,tick:qe.tick,tickCount:qe.tickCount,tickLine:Gn.tickLine,tickSize:Gn.tickSize,type:qe.type,niceTicks:qe.niceTicks,width:qe.width,yAxisId:0},Yye=e=>{var r=ur(e,Gye);return g.createElement(g.Fragment,null,g.createElement(Hye,{interval:r.interval,id:r.yAxisId,scale:r.scale,type:r.type,domain:r.domain,allowDataOverflow:r.allowDataOverflow,dataKey:r.dataKey,allowDuplicatedCategory:r.allowDuplicatedCategory,allowDecimals:r.allowDecimals,tickCount:r.tickCount,padding:r.padding,includeHidden:r.includeHidden,reversed:r.reversed,ticks:r.ticks,width:r.width,orientation:r.orientation,mirror:r.mirror,hide:r.hide,unit:r.unit,name:r.name,angle:r.angle,minTickGap:r.minTickGap,tick:r.tick,tickFormatter:r.tickFormatter,niceTicks:r.niceTicks}),g.createElement(Kye,r))},Ab=g.memo(Yye,zN);Ab.displayName="YAxis";var Xye=(e,r)=>r,Tb=$([Xye,Ne,iI,cr,Rj,pi,Yfe,br],rde);function qye(e){return"getBBox"in e.currentTarget&&typeof e.currentTarget.getBBox=="function"}function kb(e){var r=e.currentTarget.getBoundingClientRect(),t,n;if(qye(e)){var i=e.currentTarget.getBBox();t=i.width>0?r.width/i.width:1,n=i.height>0?r.height/i.height:1}else{var a=e.currentTarget;t=a.offsetWidth>0?r.width/a.offsetWidth:1,n=a.offsetHeight>0?r.height/a.offsetHeight:1}var o=(l,u)=>({relativeX:Math.round((l-r.left)/t),relativeY:Math.round((u-r.top)/n)});return"touches"in e?Array.from(e.touches).map(l=>o(l.clientX,l.clientY)):o(e.clientX,e.clientY)}var BN=yt("mouseClick"),UN=gs();UN.startListening({actionCreator:BN,effect:(e,r)=>{var t=e.payload,n=Tb(r.getState(),kb(t));(n==null?void 0:n.activeIndex)!=null&&r.dispatch(zce({activeIndex:n.activeIndex,activeDataKey:void 0,activeCoordinate:n.activeCoordinate}))}});var eg=yt("mouseMove"),WN=gs(),so=null,ca=null,Rh=null;WN.startListening({actionCreator:eg,effect:(e,r)=>{var t=e.payload,n=r.getState(),{throttleDelay:i,throttledEvents:a}=n.eventSettings,o=a==="all"||(a==null?void 0:a.includes("mousemove"));so!==null&&(cancelAnimationFrame(so),so=null),ca!==null&&(typeof i!="number"||!o)&&(clearTimeout(ca),ca=null),Rh=kb(t);var l=()=>{var u=r.getState(),s=ob(u,u.tooltip.settings.shared);if(!Rh){so=null,ca=null;return}if(s==="axis"){var c=Tb(u,Rh);(c==null?void 0:c.activeIndex)!=null?r.dispatch(Tj({activeIndex:c.activeIndex,activeDataKey:void 0,activeCoordinate:c.activeCoordinate})):r.dispatch(Aj())}so=null,ca=null};if(!o){l();return}i==="raf"?so=requestAnimationFrame(l):typeof i=="number"&&ca===null&&(ca=setTimeout(l,i))}});function Zye(e,r){return r instanceof HTMLElement?"HTMLElement <".concat(r.tagName,' class="').concat(r.className,'">'):r===window?"global.window":e==="children"&&typeof r=="object"&&r!==null?"<<CHILDREN>>":r}var c$={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0,reverseStackOrder:!1},VN=$r({name:"rootProps",initialState:c$,reducers:{updateOptions:(e,r)=>{var t;e.accessibilityLayer=r.payload.accessibilityLayer,e.barCategoryGap=r.payload.barCategoryGap,e.barGap=(t=r.payload.barGap)!==null&&t!==void 0?t:c$.barGap,e.barSize=r.payload.barSize,e.maxBarSize=r.payload.maxBarSize,e.stackOffset=r.payload.stackOffset,e.syncId=r.payload.syncId,e.syncMethod=r.payload.syncMethod,e.className=r.payload.className,e.baseValue=r.payload.baseValue,e.reverseStackOrder=r.payload.reverseStackOrder}}}),Qye=VN.reducer,{updateOptions:Jye}=VN.actions,ege=null,rge={updatePolarOptions:(e,r)=>e===null?r.payload:(e.startAngle=r.payload.startAngle,e.endAngle=r.payload.endAngle,e.cx=r.payload.cx,e.cy=r.payload.cy,e.innerRadius=r.payload.innerRadius,e.outerRadius=r.payload.outerRadius,e)},tge=$r({name:"polarOptions",initialState:ege,reducers:rge}),nge=tge.reducer,HN=yt("keyDown"),KN=yt("focus"),GN=yt("blur"),pp=gs(),co=null,fa=null,Tc=null;pp.startListening({actionCreator:HN,effect:(e,r)=>{Tc=e.payload,co!==null&&(cancelAnimationFrame(co),co=null);var t=r.getState(),{throttleDelay:n,throttledEvents:i}=t.eventSettings,a=i==="all"||i.includes("keydown");fa!==null&&(typeof n!="number"||!a)&&(clearTimeout(fa),fa=null);var o=()=>{try{var l=r.getState(),u=l.rootProps.accessibilityLayer!==!1;if(!u)return;var{keyboardInteraction:s}=l.tooltip,c=Tc;if(c!=="ArrowRight"&&c!=="ArrowLeft"&&c!=="Enter")return;var f=lb(s,El(l),Is(l),Ns(l)),d=f==null?-1:Number(f);if(!Number.isFinite(d)||d<0)return;var v=pi(l);if(c==="Enter"){var p=gd(l,"axis","hover",String(s.index));r.dispatch(yd({active:!s.active,activeIndex:s.index,activeCoordinate:p}));return}var y=Tce(l),m=y==="left-to-right"?1:-1,h=c==="ArrowRight"?1:-1,b=d+h*m;if(v==null||b>=v.length||b<0)return;var w=gd(l,"axis","hover",String(b));r.dispatch(yd({active:!0,activeIndex:b.toString(),activeCoordinate:w}))}finally{co=null,fa=null}};if(!a){o();return}n==="raf"?co=requestAnimationFrame(o):typeof n=="number"&&fa===null&&(o(),Tc=null,fa=setTimeout(()=>{Tc?o():(fa=null,co=null)},n))}});pp.startListening({actionCreator:KN,effect:(e,r)=>{var t=r.getState(),n=t.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:i}=t.tooltip;if(!i.active&&i.index==null){var a="0",o=gd(t,"axis","hover",String(a));r.dispatch(yd({active:!0,activeIndex:a,activeCoordinate:o}))}}}});pp.startListening({actionCreator:GN,effect:(e,r)=>{var t=r.getState(),n=t.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:i}=t.tooltip;i.active&&r.dispatch(yd({active:!1,activeIndex:i.index,activeCoordinate:i.coordinate}))}}});function YN(e){e.persist();var{currentTarget:r}=e;return new Proxy(e,{get:(t,n)=>{if(n==="currentTarget")return r;var i=Reflect.get(t,n);return typeof i=="function"?i.bind(t):i}})}var St=yt("externalEvent"),XN=gs(),kc=new Map,Kl=new Map,Fh=new Map;XN.startListening({actionCreator:St,effect:(e,r)=>{var{handler:t,reactEvent:n}=e.payload;if(t!=null){var i=n.type,a=YN(n);Fh.set(i,{handler:t,reactEvent:a});var o=kc.get(i);o!==void 0&&(cancelAnimationFrame(o),kc.delete(i));var l=r.getState(),{throttleDelay:u,throttledEvents:s}=l.eventSettings,c=s,f=c==="all"||(c==null?void 0:c.includes(i)),d=Kl.get(i);d!==void 0&&(typeof u!="number"||!f)&&(clearTimeout(d),Kl.delete(i));var v=()=>{var m=Fh.get(i);try{if(!m)return;var{handler:h,reactEvent:b}=m,w=r.getState(),E={activeCoordinate:Ife(w),activeDataKey:Tfe(w),activeIndex:Qo(w),activeLabel:Bj(w),activeTooltipIndex:Qo(w),isTooltipActive:jfe(w)};h&&h(E,b)}finally{kc.delete(i),Kl.delete(i),Fh.delete(i)}};if(!f){v();return}if(u==="raf"){var p=requestAnimationFrame(v);kc.set(i,p)}else if(typeof u=="number"){if(!Kl.has(i)){v();var y=setTimeout(v,u);Kl.set(i,y)}}else v()}}});var ige=$([bl],e=>e.tooltipItemPayloads),age=$([ige,(e,r)=>r,(e,r,t)=>t],(e,r,t)=>{if(r!=null){var n=e.find(a=>a.settings.graphicalItemId===t);if(n!=null){var{getPosition:i}=n;if(i!=null)return i(r)}}}),qN=yt("touchMove"),ZN=gs(),da=null,Ei=null,f$=null,Gl=null;ZN.startListening({actionCreator:qN,effect:(e,r)=>{var t=e.payload;if(!(t.touches==null||t.touches.length===0)){Gl=YN(t);var n=r.getState(),{throttleDelay:i,throttledEvents:a}=n.eventSettings,o=a==="all"||a.includes("touchmove");da!==null&&(cancelAnimationFrame(da),da=null),Ei!==null&&(typeof i!="number"||!o)&&(clearTimeout(Ei),Ei=null),f$=Array.from(t.touches).map(u=>kb({clientX:u.clientX,clientY:u.clientY,currentTarget:t.currentTarget}));var l=()=>{if(Gl!=null){var u=r.getState(),s=ob(u,u.tooltip.settings.shared);if(s==="axis"){var c,f=(c=f$)===null||c===void 0?void 0:c[0];if(f==null){da=null,Ei=null;return}var d=Tb(u,f);(d==null?void 0:d.activeIndex)!=null&&r.dispatch(Tj({activeIndex:d.activeIndex,activeDataKey:void 0,activeCoordinate:d.activeCoordinate}))}else if(s==="item"){var v,p=Gl.touches[0];if(document.elementFromPoint==null||p==null)return;var y=document.elementFromPoint(p.clientX,p.clientY);if(!y||!y.getAttribute)return;var m=y.getAttribute(Dne),h=(v=y.getAttribute(uC))!==null&&v!==void 0?v:void 0,b=wl(u).find(x=>x.id===h);if(m==null||b==null||h==null)return;var{dataKey:w}=b,E=age(u,m,h);r.dispatch(Pj({activeDataKey:w,activeIndex:m,activeCoordinate:E,activeGraphicalItemId:h}))}da=null,Ei=null}};if(!o){l();return}i==="raf"?da=requestAnimationFrame(l):typeof i=="number"&&Ei===null&&(l(),Gl=null,Ei=setTimeout(()=>{Gl?l():(Ei=null,da=null)},i))}}});var QN={throttleDelay:"raf",throttledEvents:["mousemove","touchmove","pointermove","scroll","wheel"]},JN=$r({name:"eventSettings",initialState:QN,reducers:{setEventSettings:(e,r)=>{r.payload.throttleDelay!=null&&(e.throttleDelay=r.payload.throttleDelay),r.payload.throttledEvents!=null&&(e.throttledEvents=r.payload.throttledEvents)}}}),{setEventSettings:oge}=JN.actions,lge=JN.reducer,uge=kk({brush:dhe,cartesianAxis:rhe,chartData:Cde,errorBars:vme,eventSettings:lge,graphicalItems:jpe,layout:xne,legend:$ie,options:$de,polarAxis:epe,polarOptions:nge,referenceElements:yhe,renderedTicks:Nhe,rootProps:Qye,tooltip:Bce,zIndex:hde}),sge=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Chart";return Gte({reducer:uge,preloadedState:r,middleware:n=>{var i;return n({serializableCheck:!1,immutableCheck:!["commonjs","es6","production"].includes((i="es6")!==null&&i!==void 0?i:"")}).concat([UN.middleware,WN.middleware,pp.middleware,XN.middleware,ZN.middleware])},enhancers:n=>{var i=n;return typeof n=="function"&&(i=n()),i.concat(Hk({type:"raf"}))},devTools:{serialize:{replacer:Zye},name:"recharts-".concat(t)}})};function cge(e){var{preloadedState:r,children:t,reduxStoreName:n}=e,i=Pr(),a=g.useRef(null);if(i)return t;a.current==null&&(a.current=sge(r,n));var o=Q0;return g.createElement(Yie,{context:o,store:a.current},t)}function fge(e){var{layout:r,margin:t}=e,n=Pe(),i=Pr();return g.useEffect(()=>{i||(n(bne(r)),n(gne(t)))},[n,i,r,t]),null}var dge=g.memo(fge,dl);function vge(e){var r=Pe();return g.useEffect(()=>{r(Jye(e))},[r,e]),null}var pge=e=>{var r=Pe();return g.useEffect(()=>{r(oge(e))},[r,e]),null},hge=g.memo(pge,dl);function d$(e){var{zIndex:r,isPanorama:t}=e,n=g.useRef(null),i=Pe();return g.useLayoutEffect(()=>(n.current&&i(vde({zIndex:r,element:n.current,isPanorama:t})),()=>{i(pde({zIndex:r,isPanorama:t}))}),[i,r,t]),g.createElement("g",{tabIndex:-1,ref:n,className:"recharts-zIndex-layer_".concat(r)})}function v$(e){var{children:r,isPanorama:t}=e,n=V(nde);if(!n||n.length===0)return r;var i=n.filter(o=>o<0),a=n.filter(o=>o>0);return g.createElement(g.Fragment,null,i.map(o=>g.createElement(d$,{key:o,zIndex:o,isPanorama:t})),r,a.map(o=>g.createElement(d$,{key:o,zIndex:o,isPanorama:t})))}var mge=["children"];function yge(e,r){if(e==null)return{};var t,n,i=gge(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function gge(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function _d(){return _d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_d.apply(null,arguments)}var bge={width:"100%",height:"100%",display:"block"},wge=g.forwardRef((e,r)=>{var t=s1(),n=c1(),i=AC();if(!Tn(t)||!Tn(n))return null;var{children:a,otherAttributes:o,title:l,desc:u}=e,s,c;return o!=null&&(typeof o.tabIndex=="number"?s=o.tabIndex:s=i?0:void 0,typeof o.role=="string"?c=o.role:c=i?"application":void 0),g.createElement(L0,_d({},o,{title:l,desc:u,role:c,tabIndex:s,width:t,height:n,style:bge,ref:r}),a)}),Ege=e=>{var{children:r}=e,t=V(jv);if(!t)return null;var{width:n,height:i,y:a,x:o}=t;return g.createElement(L0,{width:n,height:i,x:o,y:a},r)},p$=g.forwardRef((e,r)=>{var{children:t}=e,n=yge(e,mge),i=Pr();return i?g.createElement(Ege,null,g.createElement(v$,{isPanorama:!0},t)):g.createElement(wge,_d({ref:r},n),g.createElement(v$,{isPanorama:!1},t))});function xge(){var e=Pe(),[r,t]=g.useState(null),n=V(Lne);return g.useEffect(()=>{if(r!=null){var i=r.getBoundingClientRect(),a=i.width/r.offsetWidth;fe(a)&&a!==n&&e(Ene(a))}},[r,e,n]),t}function h$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Sge(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?h$(Object(t),!0).forEach(function(n){_ge(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function _ge(e,r,t){return(r=Oge(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Oge(e){var r=$ge(e,"string");return typeof r=="symbol"?r:r+""}function $ge(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Hi.apply(null,arguments)}var Pge=()=>(zde(),null);function Od(e){if(typeof e=="number")return e;if(typeof e=="string"){var r=parseFloat(e);if(!Number.isNaN(r))return r}return 0}var Age=g.forwardRef((e,r)=>{var t,n,i=g.useRef(null),[a,o]=g.useState({containerWidth:Od((t=e.style)===null||t===void 0?void 0:t.width),containerHeight:Od((n=e.style)===null||n===void 0?void 0:n.height)}),l=g.useCallback((s,c)=>{o(f=>{var d=Math.round(s),v=Math.round(c);return f.containerWidth===d&&f.containerHeight===v?f:{containerWidth:d,containerHeight:v}})},[]),u=g.useCallback(s=>{if(typeof r=="function"&&r(s),s!=null&&typeof ResizeObserver<"u"){var{width:c,height:f}=s.getBoundingClientRect();l(c,f);var d=p=>{var y=p[0];if(y!=null){var{width:m,height:h}=y.contentRect;l(m,h)}},v=new ResizeObserver(d);v.observe(s),i.current=v}},[r,l]);return g.useEffect(()=>()=>{var s=i.current;s!=null&&s.disconnect()},[l]),g.createElement(g.Fragment,null,g.createElement(Es,{width:a.containerWidth,height:a.containerHeight}),g.createElement("div",Hi({ref:u},e)))}),Tge=g.forwardRef((e,r)=>{var{width:t,height:n}=e,[i,a]=g.useState({containerWidth:Od(t),containerHeight:Od(n)}),o=g.useCallback((u,s)=>{a(c=>{var f=Math.round(u),d=Math.round(s);return c.containerWidth===f&&c.containerHeight===d?c:{containerWidth:f,containerHeight:d}})},[]),l=g.useCallback(u=>{if(typeof r=="function"&&r(u),u!=null){var{width:s,height:c}=u.getBoundingClientRect();o(s,c)}},[r,o]);return g.createElement(g.Fragment,null,g.createElement(Es,{width:i.containerWidth,height:i.containerHeight}),g.createElement("div",Hi({ref:l},e)))}),kge=g.forwardRef((e,r)=>{var{width:t,height:n}=e;return g.createElement(g.Fragment,null,g.createElement(Es,{width:t,height:n}),g.createElement("div",Hi({ref:r},e)))}),Cge=g.forwardRef((e,r)=>{var{width:t,height:n}=e;return typeof t=="string"||typeof n=="string"?g.createElement(Tge,Hi({},e,{ref:r})):typeof t=="number"&&typeof n=="number"?g.createElement(kge,Hi({},e,{width:t,height:n,ref:r})):g.createElement(g.Fragment,null,g.createElement(Es,{width:t,height:n}),g.createElement("div",Hi({ref:r},e)))});function Ige(e){return e?Age:Cge}var jge=g.forwardRef((e,r)=>{var{children:t,className:n,height:i,onClick:a,onContextMenu:o,onDoubleClick:l,onMouseDown:u,onMouseEnter:s,onMouseLeave:c,onMouseMove:f,onMouseUp:d,onTouchEnd:v,onTouchMove:p,onTouchStart:y,style:m,width:h,responsive:b,dispatchTouchEvents:w=!0}=e,E=g.useRef(null),x=Pe(),[S,_]=g.useState(null),[O,P]=g.useState(null),T=xge(),N=l1(),A=(N==null?void 0:N.width)>0?N.width:h,H=(N==null?void 0:N.height)>0?N.height:i,K=g.useCallback(L=>{T(L),typeof r=="function"&&r(L),_(L),P(L),L!=null&&(E.current=L)},[T,r,_,P]),ee=g.useCallback(L=>{x(BN(L)),x(St({handler:a,reactEvent:L}))},[x,a]),re=g.useCallback(L=>{x(eg(L)),x(St({handler:s,reactEvent:L}))},[x,s]),pe=g.useCallback(L=>{x(Aj()),x(St({handler:c,reactEvent:L}))},[x,c]),C=g.useCallback(L=>{x(eg(L)),x(St({handler:f,reactEvent:L}))},[x,f]),M=g.useCallback(()=>{x(KN())},[x]),D=g.useCallback(()=>{x(GN())},[x]),te=g.useCallback(L=>{x(HN(L.key))},[x]),ne=g.useCallback(L=>{x(St({handler:o,reactEvent:L}))},[x,o]),Ar=g.useCallback(L=>{x(St({handler:l,reactEvent:L}))},[x,l]),Fe=g.useCallback(L=>{x(St({handler:u,reactEvent:L}))},[x,u]),Wt=g.useCallback(L=>{x(St({handler:d,reactEvent:L}))},[x,d]),at=g.useCallback(L=>{x(St({handler:y,reactEvent:L}))},[x,y]),fn=g.useCallback(L=>{w&&x(qN(L)),x(St({handler:p,reactEvent:L}))},[x,w,p]),Dr=g.useCallback(L=>{x(St({handler:v,reactEvent:L}))},[x,v]),z=Ige(b);return g.createElement(Yj.Provider,{value:S},g.createElement(AT.Provider,{value:O},g.createElement(z,{width:A??(m==null?void 0:m.width),height:H??(m==null?void 0:m.height),className:me("recharts-wrapper",n),style:Sge({position:"relative",cursor:"default",width:A,height:H},m),onClick:ee,onContextMenu:ne,onDoubleClick:Ar,onFocus:M,onBlur:D,onKeyDown:te,onMouseDown:Fe,onMouseEnter:re,onMouseLeave:pe,onMouseMove:C,onMouseUp:Wt,onTouchEnd:Dr,onTouchMove:fn,onTouchStart:at,ref:K},g.createElement(Pge,null),t)))}),Nge=["width","height","responsive","children","className","style","compact","title","desc"];function Mge(e,r){if(e==null)return{};var t,n,i=Lge(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Lge(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}var Dge=g.forwardRef((e,r)=>{var{width:t,height:n,responsive:i,children:a,className:o,style:l,compact:u,title:s,desc:c}=e,f=Mge(e,Nge),d=Ft(f);return u?g.createElement(g.Fragment,null,g.createElement(Es,{width:t,height:n}),g.createElement(p$,{otherAttributes:d,title:s,desc:c},a)):g.createElement(jge,{className:o,style:l,width:t,height:n,responsive:i??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},g.createElement(p$,{otherAttributes:d,title:s,desc:c,ref:r},g.createElement(bhe,null,a)))});function rg(){return rg=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rg.apply(null,arguments)}function m$(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Rge(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?m$(Object(t),!0).forEach(function(n){Fge(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Fge(e,r,t){return(r=zge(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function zge(e){var r=Bge(e,"string");return typeof r=="symbol"?r:r+""}function Bge(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var Uge={top:5,right:5,bottom:5,left:5},Wge=Rge({accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,layout:"horizontal",margin:Uge,responsive:!1,reverseStackOrder:!1,stackOffset:"none",syncMethod:"index"},QN),eM=g.forwardRef(function(r,t){var n,i=ur(r.categoricalChartProps,Wge),{chartName:a,defaultTooltipEventType:o,validateTooltipEventTypes:l,tooltipPayloadSearcher:u,categoricalChartProps:s}=r,c={chartName:a,defaultTooltipEventType:o,validateTooltipEventTypes:l,tooltipPayloadSearcher:u,eventEmitter:void 0};return g.createElement(cge,{preloadedState:{options:c},reduxStoreName:(n=s.id)!==null&&n!==void 0?n:a},g.createElement(che,{chartData:s.data}),g.createElement(dge,{layout:i.layout,margin:i.margin}),g.createElement(hge,{throttleDelay:i.throttleDelay,throttledEvents:i.throttledEvents}),g.createElement(vge,{baseValue:i.baseValue,accessibilityLayer:i.accessibilityLayer,barCategoryGap:i.barCategoryGap,maxBarSize:i.maxBarSize,stackOffset:i.stackOffset,barGap:i.barGap,barSize:i.barSize,syncId:i.syncId,syncMethod:i.syncMethod,className:i.className,reverseStackOrder:i.reverseStackOrder}),g.createElement(Dge,rg({},i,{ref:t})))}),Vge=["axis"],Hge=g.forwardRef((e,r)=>g.createElement(eM,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Vge,tooltipPayloadSearcher:qj,categoricalChartProps:e,ref:r})),Kge=["item"],Gge=g.forwardRef((e,r)=>g.createElement(eM,{chartName:"ScatterChart",defaultTooltipEventType:"item",validateTooltipEventTypes:Kge,tooltipPayloadSearcher:qj,categoricalChartProps:e,ref:r}));function Yge({data:e,predictedData:r,showPrediction:t}){const n=t&&r.length>0?r.map(a=>({x:a.x,actual:a.y,predicted:a.predicted})):e.map(a=>({x:a.x,actual:a.y})),i=t&&r.length>0?[...r].sort((a,o)=>a.x-o.x).map(a=>({x:a.x,predicted:a.predicted})):[];return j.jsx("div",{className:"space-y-6",children:j.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-200",children:[j.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Data & Regression Line"}),j.jsx(mC,{width:"100%",height:400,children:j.jsxs(Gge,{margin:{top:20,right:30,left:20,bottom:20},children:[j.jsx(Sb,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),j.jsx(Pb,{type:"number",dataKey:"x",name:"X",stroke:"#6b7280",style:{fontSize:"14px"}}),j.jsx(Ab,{type:"number",dataKey:"actual",name:"Y",stroke:"#6b7280",style:{fontSize:"14px"}}),j.jsx(Jj,{cursor:{strokeDasharray:"3 3"},contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"12px"}}),j.jsx(v1,{wrapperStyle:{paddingTop:"20px"},iconType:"circle"}),j.jsx(FN,{name:"Actual Data",data:n,fill:"#2563EB"}),t&&j.jsx($b,{name:"Regression Line",data:i,dataKey:"predicted",stroke:"#10b981",strokeWidth:3,dot:!1})]})})]})})}function Xge({history:e}){return e.length===0?null:j.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-200",children:[j.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Training Progress (MSE over Epochs)"}),j.jsx(mC,{width:"100%",height:300,children:j.jsxs(Hge,{data:e,margin:{top:20,right:30,left:20,bottom:20},children:[j.jsx(Sb,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),j.jsx(Pb,{dataKey:"epoch",stroke:"#6b7280",style:{fontSize:"14px"},label:{value:"Epoch",position:"insideBottom",offset:-10}}),j.jsx(Ab,{stroke:"#6b7280",style:{fontSize:"14px"},label:{value:"MSE",angle:-90,position:"insideLeft"}}),j.jsx(Jj,{contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"12px"}}),j.jsx(v1,{wrapperStyle:{paddingTop:"10px"}}),j.jsx($b,{type:"monotone",dataKey:"mse",stroke:"#ef4444",strokeWidth:2,dot:{fill:"#ef4444",r:3},activeDot:{r:5},name:"Mean Squared Error"})]})})]})}function qge({result:e}){if(!e)return null;const r=[{label:"Slope (m)",value:e.slope.toFixed(4),icon:bee,color:"text-blue-600",bgColor:"bg-blue-50"},{label:"Intercept (b)",value:e.intercept.toFixed(4),icon:gee,color:"text-blue-600",bgColor:"bg-blue-50"},{label:"MSE",value:e.mse.toFixed(4),icon:pee,color:"text-blue-600",bgColor:"bg-blue-50"},{label:"R² Score",value:e.r2.toFixed(4),icon:hee,color:"text-blue-600",bgColor:"bg-blue-50"}];return j.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-200",children:[j.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Model Results"}),j.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:r.map(t=>{const n=t.icon;return j.jsxs("div",{className:`${t.bgColor} p-4 rounded-lg`,children:[j.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[j.jsx(n,{className:`w-4 h-4 ${t.color}`}),j.jsx("span",{className:"text-sm font-medium text-gray-600",children:t.label})]}),j.jsx("div",{className:`text-2xl font-bold ${t.color}`,children:t.value})]},t.label)})}),j.jsx("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg",children:j.jsxs("p",{className:"text-sm text-gray-700",children:[j.jsx("span",{className:"font-semibold",children:"Equation:"})," y = ",e.slope.toFixed(4),"x + ",e.intercept.toFixed(4)]})})]})}function Zge(){const{data:e,predictedData:r,result:t,trainingHistory:n,isTraining:i,generateData:a,trainModel:o,reset:l}=fee();return j.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:j.jsxs("div",{className:"container mx-auto px-4 py-8",children:[j.jsx("header",{className:"mb-8",children:j.jsx("div",{className:"flex items-center gap-3 mb-2",children:j.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Linear Regression Visualizer"})})}),j.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[j.jsx("div",{className:"lg:col-span-1",children:j.jsx(wee,{onGenerateData:a,onTrain:o,onReset:l,isTraining:i,hasData:e.length>0})}),j.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[e.length>0&&j.jsxs(j.Fragment,{children:[j.jsx(Yge,{data:e,predictedData:r,showPrediction:r.length>0}),j.jsx(qge,{result:t}),j.jsx(Xge,{history:n})]}),e.length===0&&j.jsxs("div",{className:"bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center",children:[j.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No Data Yet"}),j.jsx("p",{className:"text-gray-500",children:"Generate sample data to get started with SGD regression"})]})]})]})]})})}TA(document.getElementById("root")).render(j.jsx(g.StrictMode,{children:j.jsx(Zge,{})}));
