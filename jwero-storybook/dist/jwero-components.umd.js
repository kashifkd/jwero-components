(function(g,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react"),require("@mui/material")):typeof define=="function"&&define.amd?define(["exports","react","@mui/material"],x):(g=typeof globalThis<"u"?globalThis:g||self,x(g.JweroComponents={},g.React,g.muiMaterial))})(this,function(g,x,V){"use strict";var K={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Ae(){if(ie)return I;ie=1;var Y=x,_=Symbol.for("react.element"),o=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,j=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function T(S,v,k){var h,R={},O=null,J=null;k!==void 0&&(O=""+k),v.key!==void 0&&(O=""+v.key),v.ref!==void 0&&(J=v.ref);for(h in v)E.call(v,h)&&!c.hasOwnProperty(h)&&(R[h]=v[h]);if(S&&S.defaultProps)for(h in v=S.defaultProps,v)R[h]===void 0&&(R[h]=v[h]);return{$$typeof:_,type:S,key:O,ref:J,props:R,_owner:j.current}}return I.Fragment=o,I.jsx=T,I.jsxs=T,I}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Fe(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){var Y=x,_=Symbol.for("react.element"),o=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),S=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),oe=Symbol.iterator,We="@@iterator";function Ye(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[We];return typeof r=="function"?r:null}var D=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];$e("error",e,t)}}function $e(e,r,t){{var n=D.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var f=t.map(function(i){return String(i)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var Le=!1,Me=!1,Ve=!1,Ne=!1,Ue=!1,fe;fe=Symbol.for("react.module.reference");function Je(e){return!!(typeof e=="string"||typeof e=="function"||e===E||e===c||Ue||e===j||e===k||e===h||Ne||e===J||Le||Me||Ve||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===R||e.$$typeof===T||e.$$typeof===S||e.$$typeof===v||e.$$typeof===fe||e.getModuleId!==void 0))}function Be(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function se(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case o:return"Portal";case c:return"Profiler";case j:return"StrictMode";case k:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return se(r)+".Consumer";case T:var t=e;return se(t._context)+".Provider";case v:return Be(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case O:{var u=e,f=u._payload,i=u._init;try{return b(i(f))}catch{return null}}}return null}var w=Object.assign,$=0,le,ce,de,ve,me,ye,he;function pe(){}pe.__reactDisabledLog=!0;function Pe(){{if($===0){le=console.log,ce=console.info,de=console.warn,ve=console.error,me=console.group,ye=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function qe(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},e,{value:le}),info:w({},e,{value:ce}),warn:w({},e,{value:de}),error:w({},e,{value:ve}),group:w({},e,{value:me}),groupCollapsed:w({},e,{value:ye}),groupEnd:w({},e,{value:he})})}$<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=D.ReactCurrentDispatcher,H;function B(e,r,t){{if(H===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||""}return`
`+H+e}}var Z=!1,P;{var ze=typeof WeakMap=="function"?WeakMap:Map;P=new ze}function be(e,r){if(!e||Z)return"";{var t=P.get(e);if(t!==void 0)return t}var n;Z=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=X.current,X.current=null,Pe();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(y){n=y}Reflect.construct(e,[],i)}else{try{i.call()}catch(y){n=y}e.call(i.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),m=n.stack.split(`
`),s=a.length-1,l=m.length-1;s>=1&&l>=0&&a[s]!==m[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==m[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==m[l]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&P.set(e,p),p}while(s>=1&&l>=0);break}}}finally{Z=!1,X.current=f,qe(),Error.prepareStackTrace=u}var F=e?e.displayName||e.name:"",C=F?B(F):"";return typeof e=="function"&&P.set(e,C),C}function Ke(e,r,t){return be(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function q(e,r,t){if(e==null)return"";if(typeof e=="function")return be(e,Ge(e));if(typeof e=="string")return B(e);switch(e){case k:return B("Suspense");case h:return B("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Ke(e.render);case R:return q(e.type,r,t);case O:{var n=e,u=n._payload,f=n._init;try{return q(f(u),r,t)}catch{}}}return""}var L=Object.prototype.hasOwnProperty,Re={},ge=D.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function Xe(e,r,t,n,u){{var f=Function.call.bind(L);for(var i in e)if(f(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var m=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(z(u),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),z(null)),a instanceof Error&&!(a.message in Re)&&(Re[a.message]=!0,z(u),d("Failed %s type: %s",t,a.message),z(null))}}}var He=Array.isArray;function Q(e){return He(e)}function Ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Qe(e){try{return Ee(e),!1}catch{return!0}}function Ee(e){return""+e}function _e(e){if(Qe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ze(e)),Ee(e)}var M=D.ReactCurrentOwner,er={key:!0,ref:!0,__self:!0,__source:!0},Te,Se,ee;ee={};function rr(e){if(L.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function tr(e){if(L.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function nr(e,r){if(typeof e.ref=="string"&&M.current&&r&&M.current.stateNode!==r){var t=b(M.current.type);ee[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(M.current.type),e.ref),ee[t]=!0)}}function ar(e,r){{var t=function(){Te||(Te=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){Se||(Se=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,n,u,f,i){var a={$$typeof:_,type:e,key:r,ref:t,props:i,_owner:f};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,u){{var f,i={},a=null,m=null;t!==void 0&&(_e(t),a=""+t),tr(r)&&(_e(r.key),a=""+r.key),rr(r)&&(m=r.ref,nr(r,u));for(f in r)L.call(r,f)&&!er.hasOwnProperty(f)&&(i[f]=r[f]);if(e&&e.defaultProps){var s=e.defaultProps;for(f in s)i[f]===void 0&&(i[f]=s[f])}if(a||m){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ar(i,l),m&&ir(i,l)}return ur(e,a,m,u,n,M.current,i)}}var re=D.ReactCurrentOwner,Oe=D.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}var te;te=!1;function ne(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function we(){{if(re.current){var e=b(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){return""}var Ce={};function sr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Ce[t])return;Ce[t]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),A(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function je(e,r){{if(typeof e!="object")return;if(Q(e))for(var t=0;t<e.length;t++){var n=e[t];ne(n)&&xe(n,r)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var u=Ye(e);if(typeof u=="function"&&u!==e.entries)for(var f=u.call(e),i;!(i=f.next()).done;)ne(i.value)&&xe(i.value,r)}}}function lr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=b(r);Xe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!te){te=!0;var u=b(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function cr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}var ke={};function De(e,r,t,n,u,f){{var i=Je(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var m=fr();m?a+=m:a+=we();var s;e===null?s="null":Q(e)?s="array":e!==void 0&&e.$$typeof===_?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=or(e,r,t,u,f);if(l==null)return l;if(i){var p=r.children;if(p!==void 0)if(n)if(Q(p)){for(var F=0;F<p.length;F++)je(p[F],e);Object.freeze&&Object.freeze(p)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else je(p,e)}if(L.call(r,"key")){var C=b(e),y=Object.keys(r).filter(function(pr){return pr!=="key"}),ae=y.length>0?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}";if(!ke[C+ae]){var hr=y.length>0?"{"+y.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ae,C,hr,C),ke[C+ae]=!0}}return e===E?cr(l):lr(l),l}}function dr(e,r,t){return De(e,r,t,!0)}function vr(e,r,t){return De(e,r,t,!1)}var mr=vr,yr=dr;W.Fragment=E,W.jsx=mr,W.jsxs=yr}()),W}process.env.NODE_ENV==="production"?K.exports=Ae():K.exports=Fe();var N=K.exports;const U="start",G="end",Ie=({title:Y,onClickFunction:_,iconProps:o,boxSx:E,textSx:j,loadingProps:c,disabled:T})=>N.jsxs(V.Stack,{onClick:_,direction:"row",alignItems:"center",justifyContent:"center",sx:{gap:(o==null?void 0:o.position)===U?"0.35rem":"0.2rem",padding:(o==null?void 0:o.position)===U?"0.5rem 0.65rem 0.5rem 0.5rem":(o==null?void 0:o.position)===G?"0.5rem 0.6rem 0.5rem 0.65rem":"0.5rem 0.75rem",cursor:T?"not-allowed":"pointer",backgroundColor:"blue",borderRadius:"0.625rem",width:"fit-content","&:hover":{boxShadow:"0px 2px 4px 0px (0,0,0,0.40)"},...E},children:[c!=null&&c.loading&&c.position===U?N.jsx(V.CircularProgress,{size:24}):!(c!=null&&c.loading)&&(o!=null&&o.icon)&&(o==null?void 0:o.position)===U?o.icon:null,N.jsx(V.Typography,{sx:{fontSize:"0.875rem",fontWeight:600,letterSpacing:"0.025rem",lineHeight:"normal",color:"white",userSelect:"none",...j},children:Y}),c!=null&&c.loading&&c.position===G?N.jsx(V.CircularProgress,{size:24}):!(c!=null&&c.loading)&&(o!=null&&o.icon)&&(o==null?void 0:o.position)===G?o.icon:null]});g.JweroPrimaryButton=Ie,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
