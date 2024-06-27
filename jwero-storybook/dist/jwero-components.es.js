import ke from "react";
import { Stack as mr, CircularProgress as Ce, Typography as hr } from "@mui/material";
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  if (xe) return $;
  xe = 1;
  var A = ke, _ = Symbol.for("react.element"), o = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, C = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(T, d, x) {
    var y, E = {}, S = null, L = null;
    x !== void 0 && (S = "" + x), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (L = d.ref);
    for (y in d) R.call(d, y) && !c.hasOwnProperty(y) && (E[y] = d[y]);
    if (T && T.defaultProps) for (y in d = T.defaultProps, d) E[y] === void 0 && (E[y] = d[y]);
    return { $$typeof: _, type: T, key: S, ref: L, props: E, _owner: C.current };
  }
  return $.Fragment = o, $.jsx = g, $.jsxs = g, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function br() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var A = ke, _ = Symbol.for("react.element"), o = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), T = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, De = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[De];
      return typeof r == "function" ? r : null;
    }
    var j = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ie = !1, We = !1, $e = !1, Ye = !1, Le = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === c || Le || e === C || e === x || e === y || Ye || e === L || Ie || We || $e || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === g || e.$$typeof === T || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case C:
          return "StrictMode";
        case x:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ae(r) + ".Consumer";
          case g:
            var t = e;
            return ae(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : p(e.type) || "Memo";
          case S: {
            var u = e, f = u._payload, i = u._init;
            try {
              return p(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, ie, ue, oe, fe, le, se, ce;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          ie = console.log, ue = console.info, oe = console.warn, fe = console.error, le = console.group, se = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ie
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: oe
            }),
            error: O({}, e, {
              value: fe
            }),
            group: O({}, e, {
              value: le
            }),
            groupCollapsed: O({}, e, {
              value: se
            }),
            groupEnd: O({}, e, {
              value: ce
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, z;
    function V(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var K = !1, M;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Be();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Ne();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), m = n.stack.split(`
`), l = a.length - 1, s = m.length - 1; l >= 1 && s >= 0 && a[l] !== m[s]; )
            s--;
          for (; l >= 1 && s >= 0; l--, s--)
            if (a[l] !== m[s]) {
              if (l !== 1 || s !== 1)
                do
                  if (l--, s--, s < 0 || a[l] !== m[s]) {
                    var b = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, b), b;
                  }
                while (l >= 1 && s >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = f, Ue(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", w = D ? V(D) : "";
      return typeof e == "function" && M.set(e, w), w;
    }
    function Je(e, r, t) {
      return de(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case x:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case E:
            return N(e.type, r, t);
          case S: {
            var n = e, u = n._payload, f = n._init;
            try {
              return N(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, me = {}, he = j.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, u) {
      {
        var f = Function.call.bind(I);
        for (var i in e)
          if (f(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (U(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, U(u), v("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function P(e) {
      return Ke(e);
    }
    function Pe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (Ge(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(e)), ye(e);
    }
    var W = j.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, Ee, G;
    G = {};
    function He(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = p(W.current.type);
        G[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(W.current.type), e.ref), G[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          pe || (pe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, f, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, u) {
      {
        var f, i = {}, a = null, m = null;
        t !== void 0 && (be(t), a = "" + t), Ze(r) && (be(r.key), a = "" + r.key), He(r) && (m = r.ref, Qe(r, u));
        for (f in r)
          I.call(r, f) && !Xe.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (f in l)
            i[f] === void 0 && (i[f] = l[f]);
        }
        if (a || m) {
          var s = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, s), m && rr(i, s);
        }
        return tr(e, a, m, u, n, W.current, i);
      }
    }
    var X = j.ReactCurrentOwner, Re = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function _e() {
      {
        if (X.current) {
          var e = p(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var ge = {};
    function ir(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + p(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (P(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Te(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ae(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), i; !(i = f.next()).done; )
              Z(i.value) && Te(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = p(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var u = p(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Oe = {};
    function we(e, r, t, n, u, f) {
      {
        var i = Ve(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = ar();
          m ? a += m : a += _e();
          var l;
          e === null ? l = "null" : P(e) ? l = "array" : e !== void 0 && e.$$typeof === _ ? (l = "<" + (p(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var s = nr(e, r, t, u, f);
        if (s == null)
          return s;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (P(b)) {
                for (var D = 0; D < b.length; D++)
                  Se(b[D], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(b, e);
        }
        if (I.call(r, "key")) {
          var w = p(e), h = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), Q = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[w + Q]) {
            var vr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, w, vr, w), Oe[w + Q] = !0;
          }
        }
        return e === R ? or(s) : ur(s), s;
      }
    }
    function fr(e, r, t) {
      return we(e, r, t, !0);
    }
    function lr(e, r, t) {
      return we(e, r, t, !1);
    }
    var sr = lr, cr = fr;
    Y.Fragment = R, Y.jsx = sr, Y.jsxs = cr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = yr() : re.exports = br();
var B = re.exports;
const J = "start", ee = "end", Rr = ({
  title: A,
  onClickFunction: _,
  iconProps: o,
  boxSx: R,
  textSx: C,
  loadingProps: c,
  disabled: g
}) => /* @__PURE__ */ B.jsxs(
  mr,
  {
    onClick: _,
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
    sx: {
      gap: (o == null ? void 0 : o.position) === J ? "0.35rem" : "0.2rem",
      padding: (o == null ? void 0 : o.position) === J ? "0.5rem 0.65rem 0.5rem 0.5rem" : (o == null ? void 0 : o.position) === ee ? "0.5rem 0.6rem 0.5rem 0.65rem" : "0.5rem 0.75rem",
      cursor: g ? "not-allowed" : "pointer",
      backgroundColor: "blue",
      borderRadius: "0.625rem",
      width: "fit-content",
      "&:hover": {
        boxShadow: "0px 2px 4px 0px (0,0,0,0.40)"
      },
      ...R
    },
    children: [
      c != null && c.loading && c.position === J ? /* @__PURE__ */ B.jsx(Ce, { size: 24 }) : !(c != null && c.loading) && (o != null && o.icon) && (o == null ? void 0 : o.position) === J ? o.icon : null,
      /* @__PURE__ */ B.jsx(
        hr,
        {
          sx: {
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.025rem",
            lineHeight: "normal",
            color: "white",
            userSelect: "none",
            ...C
          },
          children: A
        }
      ),
      c != null && c.loading && c.position === ee ? /* @__PURE__ */ B.jsx(Ce, { size: 24 }) : !(c != null && c.loading) && (o != null && o.icon) && (o == null ? void 0 : o.position) === ee ? o.icon : null
    ]
  }
);
export {
  Rr as JweroPrimaryButton
};
