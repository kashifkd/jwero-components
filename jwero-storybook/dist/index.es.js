import * as ie from "react";
import _o, { forwardRef as Wi, useContext as Yi } from "react";
function zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ke(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Pt = { exports: {} }, yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Ui() {
  if (bn) return yr;
  bn = 1;
  var e = _o, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, c, f) {
    var d, m = {}, y = null, E = null;
    f !== void 0 && (y = "" + f), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (d in c) n.call(c, d) && !i.hasOwnProperty(d) && (m[d] = c[d]);
    if (u && u.defaultProps) for (d in c = u.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: r, type: u, key: y, ref: E, props: m, _owner: o.current };
  }
  return yr.Fragment = t, yr.jsx = s, yr.jsxs = s, yr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Bi() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _o, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function h(a) {
      if (a === null || typeof a != "object")
        return null;
      var _ = b && a[b] || a[p];
      return typeof _ == "function" ? _ : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var _ = arguments.length, O = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          O[N - 1] = arguments[N];
        R("error", a, O);
      }
    }
    function R(a, _, O) {
      {
        var N = S.ReactDebugCurrentFrame, J = N.getStackAddendum();
        J !== "" && (_ += "%s", O = O.concat([J]));
        var oe = O.map(function(B) {
          return String(B);
        });
        oe.unshift("Warning: " + _), Function.prototype.apply.call(console[a], console, oe);
      }
    }
    var $ = !1, l = !1, P = !1, k = !1, ae = !1, fe;
    fe = Symbol.for("react.module.reference");
    function ce(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ae || a === o || a === f || a === d || k || a === E || $ || l || P || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === m || a.$$typeof === s || a.$$typeof === u || a.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === fe || a.getModuleId !== void 0));
    }
    function W(a, _, O) {
      var N = a.displayName;
      if (N)
        return N;
      var J = _.displayName || _.name || "";
      return J !== "" ? O + "(" + J + ")" : O;
    }
    function q(a) {
      return a.displayName || "Context";
    }
    function H(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var _ = a;
            return q(_) + ".Consumer";
          case s:
            var O = a;
            return q(O._context) + ".Provider";
          case c:
            return W(a, a.render, "ForwardRef");
          case m:
            var N = a.displayName || null;
            return N !== null ? N : H(a.type) || "Memo";
          case y: {
            var J = a, oe = J._payload, B = J._init;
            try {
              return H(B(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Ee = 0, de, Oe, Ce, Fe, x, T, F;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function j() {
      {
        if (Ee === 0) {
          de = console.log, Oe = console.info, Ce = console.warn, Fe = console.error, x = console.group, T = console.groupCollapsed, F = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        Ee++;
      }
    }
    function Y() {
      {
        if (Ee--, Ee === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, a, {
              value: de
            }),
            info: ne({}, a, {
              value: Oe
            }),
            warn: ne({}, a, {
              value: Ce
            }),
            error: ne({}, a, {
              value: Fe
            }),
            group: ne({}, a, {
              value: x
            }),
            groupCollapsed: ne({}, a, {
              value: T
            }),
            groupEnd: ne({}, a, {
              value: F
            })
          });
        }
        Ee < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = S.ReactCurrentDispatcher, I;
    function L(a, _, O) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (J) {
            var N = J.stack.trim().match(/\n( *(at )?)/);
            I = N && N[1] || "";
          }
        return `
` + I + a;
      }
    }
    var z = !1, V;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      V = new he();
    }
    function v(a, _) {
      if (!a || z)
        return "";
      {
        var O = V.get(a);
        if (O !== void 0)
          return O;
      }
      var N;
      z = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = M.current, M.current = null, j();
      try {
        if (_) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (we) {
              N = we;
            }
            Reflect.construct(a, [], B);
          } else {
            try {
              B.call();
            } catch (we) {
              N = we;
            }
            a.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            N = we;
          }
          a();
        }
      } catch (we) {
        if (we && N && typeof we.stack == "string") {
          for (var U = we.stack.split(`
`), Se = N.stack.split(`
`), pe = U.length - 1, ve = Se.length - 1; pe >= 1 && ve >= 0 && U[pe] !== Se[ve]; )
            ve--;
          for (; pe >= 1 && ve >= 0; pe--, ve--)
            if (U[pe] !== Se[ve]) {
              if (pe !== 1 || ve !== 1)
                do
                  if (pe--, ve--, ve < 0 || U[pe] !== Se[ve]) {
                    var ke = `
` + U[pe].replace(" at new ", " at ");
                    return a.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", a.displayName)), typeof a == "function" && V.set(a, ke), ke;
                  }
                while (pe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        z = !1, M.current = oe, Y(), Error.prepareStackTrace = J;
      }
      var er = a ? a.displayName || a.name : "", Je = er ? L(er) : "";
      return typeof a == "function" && V.set(a, Je), Je;
    }
    function be(a, _, O) {
      return v(a, !1);
    }
    function C(a) {
      var _ = a.prototype;
      return !!(_ && _.isReactComponent);
    }
    function Te(a, _, O) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return v(a, C(a));
      if (typeof a == "string")
        return L(a);
      switch (a) {
        case f:
          return L("Suspense");
        case d:
          return L("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            return be(a.render);
          case m:
            return Te(a.type, _, O);
          case y: {
            var N = a, J = N._payload, oe = N._init;
            try {
              return Te(oe(J), _, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, pr = {}, an = S.ReactDebugCurrentFrame;
    function jr(a) {
      if (a) {
        var _ = a._owner, O = Te(a.type, a._source, _ ? _.type : null);
        an.setExtraStackFrame(O);
      } else
        an.setExtraStackFrame(null);
    }
    function bi(a, _, O, N, J) {
      {
        var oe = Function.call.bind(Ye);
        for (var B in a)
          if (oe(a, B)) {
            var U = void 0;
            try {
              if (typeof a[B] != "function") {
                var Se = Error((N || "React class") + ": " + O + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              U = a[B](_, B, N, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              U = pe;
            }
            U && !(U instanceof Error) && (jr(J), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", O, B, typeof U), jr(null)), U instanceof Error && !(U.message in pr) && (pr[U.message] = !0, jr(J), w("Failed %s type: %s", O, U.message), jr(null));
          }
      }
    }
    var Ei = Array.isArray;
    function ft(a) {
      return Ei(a);
    }
    function _i(a) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, O = _ && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return O;
      }
    }
    function xi(a) {
      try {
        return cn(a), !1;
      } catch {
        return !0;
      }
    }
    function cn(a) {
      return "" + a;
    }
    function un(a) {
      if (xi(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _i(a)), cn(a);
    }
    var mr = S.ReactCurrentOwner, Si = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ln, fn, dt;
    dt = {};
    function Oi(a) {
      if (Ye.call(a, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Ti(a) {
      if (Ye.call(a, "key")) {
        var _ = Object.getOwnPropertyDescriptor(a, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function wi(a, _) {
      if (typeof a.ref == "string" && mr.current && _ && mr.current.stateNode !== _) {
        var O = H(mr.current.type);
        dt[O] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(mr.current.type), a.ref), dt[O] = !0);
      }
    }
    function Ri(a, _) {
      {
        var O = function() {
          ln || (ln = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        O.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Ci(a, _) {
      {
        var O = function() {
          fn || (fn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        O.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var $i = function(a, _, O, N, J, oe, B) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: _,
        ref: O,
        props: B,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Pi(a, _, O, N, J) {
      {
        var oe, B = {}, U = null, Se = null;
        O !== void 0 && (un(O), U = "" + O), Ti(_) && (un(_.key), U = "" + _.key), Oi(_) && (Se = _.ref, wi(_, J));
        for (oe in _)
          Ye.call(_, oe) && !Si.hasOwnProperty(oe) && (B[oe] = _[oe]);
        if (a && a.defaultProps) {
          var pe = a.defaultProps;
          for (oe in pe)
            B[oe] === void 0 && (B[oe] = pe[oe]);
        }
        if (U || Se) {
          var ve = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          U && Ri(B, ve), Se && Ci(B, ve);
        }
        return $i(a, U, Se, J, N, mr.current, B);
      }
    }
    var pt = S.ReactCurrentOwner, dn = S.ReactDebugCurrentFrame;
    function Qe(a) {
      if (a) {
        var _ = a._owner, O = Te(a.type, a._source, _ ? _.type : null);
        dn.setExtraStackFrame(O);
      } else
        dn.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function yt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function pn() {
      {
        if (pt.current) {
          var a = H(pt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Ai(a) {
      return "";
    }
    var mn = {};
    function ki(a) {
      {
        var _ = pn();
        if (!_) {
          var O = typeof a == "string" ? a : a.displayName || a.name;
          O && (_ = `

Check the top-level render call using <` + O + ">.");
        }
        return _;
      }
    }
    function yn(a, _) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var O = ki(_);
        if (mn[O])
          return;
        mn[O] = !0;
        var N = "";
        a && a._owner && a._owner !== pt.current && (N = " It was passed a child from " + H(a._owner.type) + "."), Qe(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, N), Qe(null);
      }
    }
    function hn(a, _) {
      {
        if (typeof a != "object")
          return;
        if (ft(a))
          for (var O = 0; O < a.length; O++) {
            var N = a[O];
            yt(N) && yn(N, _);
          }
        else if (yt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var J = h(a);
          if (typeof J == "function" && J !== a.entries)
            for (var oe = J.call(a), B; !(B = oe.next()).done; )
              yt(B.value) && yn(B.value, _);
        }
      }
    }
    function ji(a) {
      {
        var _ = a.type;
        if (_ == null || typeof _ == "string")
          return;
        var O;
        if (typeof _ == "function")
          O = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === m))
          O = _.propTypes;
        else
          return;
        if (O) {
          var N = H(_);
          bi(O, a.props, "prop", N, a);
        } else if (_.PropTypes !== void 0 && !mt) {
          mt = !0;
          var J = H(_);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ni(a) {
      {
        for (var _ = Object.keys(a.props), O = 0; O < _.length; O++) {
          var N = _[O];
          if (N !== "children" && N !== "key") {
            Qe(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Qe(null);
            break;
          }
        }
        a.ref !== null && (Qe(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    var vn = {};
    function gn(a, _, O, N, J, oe) {
      {
        var B = ce(a);
        if (!B) {
          var U = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ai();
          Se ? U += Se : U += pn();
          var pe;
          a === null ? pe = "null" : ft(a) ? pe = "array" : a !== void 0 && a.$$typeof === r ? (pe = "<" + (H(a.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, U);
        }
        var ve = Pi(a, _, O, J, oe);
        if (ve == null)
          return ve;
        if (B) {
          var ke = _.children;
          if (ke !== void 0)
            if (N)
              if (ft(ke)) {
                for (var er = 0; er < ke.length; er++)
                  hn(ke[er], a);
                Object.freeze && Object.freeze(ke);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hn(ke, a);
        }
        if (Ye.call(_, "key")) {
          var Je = H(a), we = Object.keys(_).filter(function(Vi) {
            return Vi !== "key";
          }), ht = we.length > 0 ? "{key: someKey, " + we.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vn[Je + ht]) {
            var Li = we.length > 0 ? "{" + we.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, Je, Li, Je), vn[Je + ht] = !0;
          }
        }
        return a === n ? Ni(ve) : ji(ve), ve;
      }
    }
    function Mi(a, _, O) {
      return gn(a, _, O, !0);
    }
    function Ii(a, _, O) {
      return gn(a, _, O, !1);
    }
    var Di = Ii, Fi = Mi;
    hr.Fragment = n, hr.jsx = Di, hr.jsxs = Fi;
  }()), hr;
}
process.env.NODE_ENV === "production" ? Pt.exports = Ui() : Pt.exports = Bi();
var Ve = Pt.exports;
const Er = {
  black: "#000",
  white: "#fff"
}, rr = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, tr = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, nr = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, or = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ir = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, vr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, qi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function _r(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" })), xo = "$$material";
function A() {
  return A = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, A.apply(null, arguments);
}
function Ae(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) >= 0) continue;
    t[n] = e[n];
  }
  return t;
}
function So(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ki = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Hi = /* @__PURE__ */ So(
  function(e) {
    return Ki.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ji(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Xi(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Zi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xi(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = Ji(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (u) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', u);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), xe = "-ms-", Br = "-moz-", G = "-webkit-", Vt = "comm", Wt = "rule", Yt = "decl", Qi = "@import", Oo = "@keyframes", es = "@layer", rs = Math.abs, Hr = String.fromCharCode, ts = Object.assign;
function ns(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function To(e) {
  return e.trim();
}
function os(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function K(e, r, t) {
  return e.replace(r, t);
}
function At(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function xr(e, r, t) {
  return e.slice(r, t);
}
function ze(e) {
  return e.length;
}
function zt(e) {
  return e.length;
}
function Nr(e, r) {
  return r.push(e), e;
}
function is(e, r) {
  return e.map(r).join("");
}
var Jr = 1, cr = 1, wo = 0, Re = 0, ge = 0, lr = "";
function Xr(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Jr, column: cr, length: s, return: "" };
}
function gr(e, r) {
  return ts(Xr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ss() {
  return ge;
}
function as() {
  return ge = Re > 0 ? _e(lr, --Re) : 0, cr--, ge === 10 && (cr = 1, Jr--), ge;
}
function Pe() {
  return ge = Re < wo ? _e(lr, Re++) : 0, cr++, ge === 10 && (cr = 1, Jr++), ge;
}
function Ue() {
  return _e(lr, Re);
}
function Lr() {
  return Re;
}
function Tr(e, r) {
  return xr(lr, e, r);
}
function Sr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ro(e) {
  return Jr = cr = 1, wo = ze(lr = e), Re = 0, [];
}
function Co(e) {
  return lr = "", e;
}
function Vr(e) {
  return To(Tr(Re - 1, kt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cs(e) {
  for (; (ge = Ue()) && ge < 33; )
    Pe();
  return Sr(e) > 2 || Sr(ge) > 3 ? "" : " ";
}
function us(e, r) {
  for (; --r && Pe() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97); )
    ;
  return Tr(e, Lr() + (r < 6 && Ue() == 32 && Pe() == 32));
}
function kt(e) {
  for (; Pe(); )
    switch (ge) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kt(ge);
        break;
      case 40:
        e === 41 && kt(e);
        break;
      case 92:
        Pe();
        break;
    }
  return Re;
}
function ls(e, r) {
  for (; Pe() && e + ge !== 57; )
    if (e + ge === 84 && Ue() === 47)
      break;
  return "/*" + Tr(r, Re - 1) + "*" + Hr(e === 47 ? e : Pe());
}
function fs(e) {
  for (; !Sr(Ue()); )
    Pe();
  return Tr(e, Re);
}
function ds(e) {
  return Co(Wr("", null, null, null, [""], e = Ro(e), 0, [0], e));
}
function Wr(e, r, t, n, o, i, s, u, c) {
  for (var f = 0, d = 0, m = s, y = 0, E = 0, b = 0, p = 1, h = 1, S = 1, w = 0, R = "", $ = o, l = i, P = n, k = R; h; )
    switch (b = w, w = Pe()) {
      case 40:
        if (b != 108 && _e(k, m - 1) == 58) {
          At(k += K(Vr(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Vr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += cs(b);
        break;
      case 92:
        k += us(Lr() - 1, 7);
        continue;
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            Nr(ps(ls(Pe(), Lr()), r, t), c);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * p:
        u[f++] = ze(k) * S;
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            S == -1 && (k = K(k, /\f/g, "")), E > 0 && ze(k) - m && Nr(E > 32 ? xn(k + ";", n, t, m - 1) : xn(K(k, " ", "") + ";", n, t, m - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (Nr(P = _n(k, r, t, f, d, o, u, R, $ = [], l = [], m), i), w === 123)
              if (d === 0)
                Wr(k, r, P, P, $, i, m, u, l);
              else
                switch (y === 99 && _e(k, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wr(e, P, P, n && Nr(_n(e, P, P, 0, 0, o, u, R, o, $ = [], m), l), o, l, m, u, n ? $ : l);
                    break;
                  default:
                    Wr(k, P, P, P, [""], l, 0, u, l);
                }
        }
        f = d = E = 0, p = S = 1, R = k = "", m = s;
        break;
      case 58:
        m = 1 + ze(k), E = b;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && as() == 125)
            continue;
        }
        switch (k += Hr(w), w * p) {
          case 38:
            S = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[f++] = (ze(k) - 1) * S, S = 1;
            break;
          case 64:
            Ue() === 45 && (k += Vr(Pe())), y = Ue(), d = m = ze(R = k += fs(Lr())), w++;
            break;
          case 45:
            b === 45 && ze(k) == 2 && (p = 0);
        }
    }
  return i;
}
function _n(e, r, t, n, o, i, s, u, c, f, d) {
  for (var m = o - 1, y = o === 0 ? i : [""], E = zt(y), b = 0, p = 0, h = 0; b < n; ++b)
    for (var S = 0, w = xr(e, m + 1, m = rs(p = s[b])), R = e; S < E; ++S)
      (R = To(p > 0 ? y[S] + " " + w : K(w, /&\f/g, y[S]))) && (c[h++] = R);
  return Xr(e, r, t, o === 0 ? Wt : u, c, f, d);
}
function ps(e, r, t) {
  return Xr(e, r, t, Vt, Hr(ss()), xr(e, 2, -2), 0);
}
function xn(e, r, t, n) {
  return Xr(e, r, t, Yt, xr(e, 0, n), xr(e, n + 1, -1), n);
}
function sr(e, r) {
  for (var t = "", n = zt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function ms(e, r, t, n) {
  switch (e.type) {
    case es:
      if (e.children.length) break;
    case Qi:
    case Yt:
      return e.return = e.return || e.value;
    case Vt:
      return "";
    case Oo:
      return e.return = e.value + "{" + sr(e.children, n) + "}";
    case Wt:
      e.value = e.props.join(",");
  }
  return ze(t = sr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ys(e) {
  var r = zt(e);
  return function(t, n, o, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e[u](t, n, o, i) || "";
    return s;
  };
}
function hs(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var vs = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ue(), o === 38 && i === 12 && (t[n] = 1), !Sr(i); )
    Pe();
  return Tr(r, Re);
}, gs = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Sr(o)) {
      case 0:
        o === 38 && Ue() === 12 && (t[n] = 1), r[n] += vs(Re - 1, t, n);
        break;
      case 2:
        r[n] += Vr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ue() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Hr(o);
    }
  while (o = Pe());
  return r;
}, bs = function(r, t) {
  return Co(gs(Ro(r), t));
}, Sn = /* @__PURE__ */ new WeakMap(), Es = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Sn.get(n)) && !o) {
      Sn.set(r, !0);
      for (var i = [], s = bs(t, i), u = n.props, c = 0, f = 0; c < s.length; c++)
        for (var d = 0; d < u.length; d++, f++)
          r.props[f] = i[c] ? s[c].replace(/&\f/g, u[d]) : u[d] + " " + s[c];
    }
  }
}, _s = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, xs = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ss = function(r) {
  return r.type === "comm" && r.children.indexOf(xs) > -1;
}, Os = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!t.parent, u = s ? t.parent.children : (
          // global rule at the root level
          o
        ), c = u.length - 1; c >= 0; c--) {
          var f = u[c];
          if (f.line < t.line)
            break;
          if (f.column < t.column) {
            if (Ss(f))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, $o = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Ts = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!$o(t[n]))
      return !0;
  return !1;
}, On = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, ws = function(r, t, n) {
  $o(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), On(r)) : Ts(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), On(r)));
};
function Po(e, r) {
  switch (ns(e, r)) {
    case 5103:
      return G + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + Br + e + xe + e + e;
    case 6828:
    case 4268:
      return G + e + xe + e + e;
    case 6165:
      return G + e + xe + "flex-" + e + e;
    case 5187:
      return G + e + K(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + xe + "flex-$1$2") + e;
    case 5443:
      return G + e + xe + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return G + e + xe + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return G + e + xe + K(e, "shrink", "negative") + e;
    case 5292:
      return G + e + xe + K(e, "basis", "preferred-size") + e;
    case 6060:
      return G + "box-" + K(e, "-grow", "") + G + e + xe + K(e, "grow", "positive") + e;
    case 4554:
      return G + K(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    case 6187:
      return K(K(K(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return K(K(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, G + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ze(e) - 1 - r > 6) switch (_e(e, r + 1)) {
        case 109:
          if (_e(e, r + 4) !== 45) break;
        case 102:
          return K(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + Br + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~At(e, "stretch") ? Po(K(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115) break;
    case 6444:
      switch (_e(e, ze(e) - 3 - (~At(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + G) + e;
        case 101:
          return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return G + e + xe + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + xe + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + xe + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + xe + e + e;
  }
  return e;
}
var Rs = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Yt:
      r.return = Po(r.value, r.length);
      break;
    case Oo:
      return sr([gr(r, {
        value: K(r.value, "@", "@" + G)
      })], o);
    case Wt:
      if (r.length) return is(r.props, function(i) {
        switch (os(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return sr([gr(r, {
              props: [K(i, /:(read-\w+)/, ":" + Br + "$1")]
            })], o);
          case "::placeholder":
            return sr([gr(r, {
              props: [K(i, /:(plac\w+)/, ":" + G + "input-$1")]
            }), gr(r, {
              props: [K(i, /:(plac\w+)/, ":" + Br + "$1")]
            }), gr(r, {
              props: [K(i, /:(plac\w+)/, xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Cs = [Rs], Ao = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var h = p.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Cs;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(p) {
      for (var h = p.getAttribute("data-emotion").split(" "), S = 1; S < h.length; S++)
        i[h[S]] = !0;
      u.push(p);
    }
  );
  var c, f = [Es, _s];
  process.env.NODE_ENV !== "production" && f.push(Os({
    get compat() {
      return b.compat;
    }
  }), ws);
  {
    var d, m = [ms, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? d.insert(p.return) : p.value && p.type !== Vt && d.insert(p.value + "{}"));
    } : hs(function(p) {
      d.insert(p);
    })], y = ys(f.concat(o, m)), E = function(h) {
      return sr(ds(h), y);
    };
    c = function(h, S, w, R) {
      d = w, process.env.NODE_ENV !== "production" && S.map !== void 0 && (d = {
        insert: function(l) {
          w.insert(l + S.map);
        }
      }), E(h ? h + "{" + S.styles + "}" : S.styles), R && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Zi({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(u), b;
}, jt = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function $s() {
  if (Tn) return X;
  Tn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(l) {
    if (typeof l == "object" && l !== null) {
      var P = l.$$typeof;
      switch (P) {
        case r:
          switch (l = l.type, l) {
            case c:
            case f:
            case n:
            case i:
            case o:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case u:
                case d:
                case b:
                case E:
                case s:
                  return l;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  function $(l) {
    return R(l) === f;
  }
  return X.AsyncMode = c, X.ConcurrentMode = f, X.ContextConsumer = u, X.ContextProvider = s, X.Element = r, X.ForwardRef = d, X.Fragment = n, X.Lazy = b, X.Memo = E, X.Portal = t, X.Profiler = i, X.StrictMode = o, X.Suspense = m, X.isAsyncMode = function(l) {
    return $(l) || R(l) === c;
  }, X.isConcurrentMode = $, X.isContextConsumer = function(l) {
    return R(l) === u;
  }, X.isContextProvider = function(l) {
    return R(l) === s;
  }, X.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, X.isForwardRef = function(l) {
    return R(l) === d;
  }, X.isFragment = function(l) {
    return R(l) === n;
  }, X.isLazy = function(l) {
    return R(l) === b;
  }, X.isMemo = function(l) {
    return R(l) === E;
  }, X.isPortal = function(l) {
    return R(l) === t;
  }, X.isProfiler = function(l) {
    return R(l) === i;
  }, X.isStrictMode = function(l) {
    return R(l) === o;
  }, X.isSuspense = function(l) {
    return R(l) === m;
  }, X.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === i || l === o || l === m || l === y || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === E || l.$$typeof === s || l.$$typeof === u || l.$$typeof === d || l.$$typeof === h || l.$$typeof === S || l.$$typeof === w || l.$$typeof === p);
  }, X.typeOf = R, X;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Ps() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === E || v.$$typeof === s || v.$$typeof === u || v.$$typeof === d || v.$$typeof === h || v.$$typeof === S || v.$$typeof === w || v.$$typeof === p);
    }
    function $(v) {
      if (typeof v == "object" && v !== null) {
        var be = v.$$typeof;
        switch (be) {
          case r:
            var C = v.type;
            switch (C) {
              case c:
              case f:
              case n:
              case i:
              case o:
              case m:
                return C;
              default:
                var Te = C && C.$$typeof;
                switch (Te) {
                  case u:
                  case d:
                  case b:
                  case E:
                  case s:
                    return Te;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var l = c, P = f, k = u, ae = s, fe = r, ce = d, W = n, q = b, H = E, ne = t, Ee = i, de = o, Oe = m, Ce = !1;
    function Fe(v) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(v) || $(v) === c;
    }
    function x(v) {
      return $(v) === f;
    }
    function T(v) {
      return $(v) === u;
    }
    function F(v) {
      return $(v) === s;
    }
    function D(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return $(v) === d;
    }
    function Y(v) {
      return $(v) === n;
    }
    function M(v) {
      return $(v) === b;
    }
    function I(v) {
      return $(v) === E;
    }
    function L(v) {
      return $(v) === t;
    }
    function z(v) {
      return $(v) === i;
    }
    function V(v) {
      return $(v) === o;
    }
    function he(v) {
      return $(v) === m;
    }
    Z.AsyncMode = l, Z.ConcurrentMode = P, Z.ContextConsumer = k, Z.ContextProvider = ae, Z.Element = fe, Z.ForwardRef = ce, Z.Fragment = W, Z.Lazy = q, Z.Memo = H, Z.Portal = ne, Z.Profiler = Ee, Z.StrictMode = de, Z.Suspense = Oe, Z.isAsyncMode = Fe, Z.isConcurrentMode = x, Z.isContextConsumer = T, Z.isContextProvider = F, Z.isElement = D, Z.isForwardRef = j, Z.isFragment = Y, Z.isLazy = M, Z.isMemo = I, Z.isPortal = L, Z.isProfiler = z, Z.isStrictMode = V, Z.isSuspense = he, Z.isValidElementType = R, Z.typeOf = $;
  }()), Z;
}
process.env.NODE_ENV === "production" ? jt.exports = $s() : jt.exports = Ps();
var As = jt.exports, ko = As, ks = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, js = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jo = {};
jo[ko.ForwardRef] = ks;
jo[ko.Memo] = js;
var Ns = !0;
function Ut(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Zr = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ns === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Qr = function(r, t, n) {
  Zr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ms(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Is = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Rn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ds = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Fs = /[A-Z]|^ms/g, No = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bt = function(r) {
  return r.charCodeAt(1) === 45;
}, Cn = function(r) {
  return r != null && typeof r != "boolean";
}, vt = /* @__PURE__ */ So(function(e) {
  return Bt(e) ? e : e.replace(Fs, "-$&").toLowerCase();
}), qr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(No, function(n, o, i) {
          return Le = {
            name: o,
            styles: i,
            next: Le
          }, o;
        });
  }
  return Is[r] !== 1 && !Bt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Ls = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Vs = ["normal", "none", "initial", "inherit", "unset"], Ws = qr, Ys = /^-ms-/, zs = /-(.)/g, $n = {};
  qr = function(r, t) {
    if (r === "content" && (typeof t != "string" || Vs.indexOf(t) === -1 && !Ls.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Ws(r, t);
    return n !== "" && !Bt(r) && r.indexOf("-") !== -1 && $n[r] === void 0 && ($n[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ys, "ms-").replace(zs, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Mo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Or(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Mo);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Le = {
          name: t.name,
          styles: t.styles,
          next: Le
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Le = {
              name: n.name,
              styles: n.styles,
              next: Le
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return Us(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Le, s = t(e);
        return Le = i, Or(e, r, s);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], c = t.replace(No, function(d, m, y) {
          var E = "animation" + u.length;
          return u.push("const " + E + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var f = r[t];
  return f !== void 0 ? f : t;
}
function Us(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Or(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Cn(s) && (n += vt(i) + ":" + qr(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Mo);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var u = 0; u < s.length; u++)
            Cn(s[u]) && (n += vt(i) + ":" + qr(i, s[u]) + ";");
        else {
          var c = Or(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += vt(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Ds), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var Pn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Io;
process.env.NODE_ENV !== "production" && (Io = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Le, ur = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  Le = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (o = !1, i += Or(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Rn), i += s[0]);
  for (var u = 1; u < r.length; u++)
    i += Or(n, t, r[u]), o && (process.env.NODE_ENV !== "production" && s[u] === void 0 && console.error(Rn), i += s[u]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(Io, function(y) {
    return c = y, "";
  })), Pn.lastIndex = 0;
  for (var f = "", d; (d = Pn.exec(i)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    d[1];
  var m = Ms(i) + f;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: c,
    next: Le,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: Le
  };
}, Bs = function(r) {
  return r();
}, Do = ie.useInsertionEffect ? ie.useInsertionEffect : !1, qt = Do || Bs, An = Do || ie.useLayoutEffect, qs = {}.hasOwnProperty, Gt = /* @__PURE__ */ ie.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ao({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Gt.displayName = "EmotionCacheContext");
var Gs = Gt.Provider, et = function(r) {
  return /* @__PURE__ */ Wi(function(t, n) {
    var o = Yi(Gt);
    return r(t, o, n);
  });
}, Ze = /* @__PURE__ */ ie.createContext({});
process.env.NODE_ENV !== "production" && (Ze.displayName = "EmotionThemeContext");
var kn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", jn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ks = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Zr(t, n, o), qt(function() {
    return Qr(t, n, o);
  }), null;
}, Hs = /* @__PURE__ */ et(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[kn], i = [n], s = "";
  typeof e.className == "string" ? s = Ut(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var u = ur(i, void 0, ie.useContext(Ze));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var c = e[jn];
    c && (u = ur([u, "label:" + c + ";"]));
  }
  s += r.key + "-" + u.name;
  var f = {};
  for (var d in e)
    qs.call(e, d) && d !== "css" && d !== kn && (process.env.NODE_ENV === "production" || d !== jn) && (f[d] = e[d]);
  return f.ref = t, f.className = s, /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement(Ks, {
    cache: r,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ ie.createElement(o, f));
});
process.env.NODE_ENV !== "production" && (Hs.displayName = "EmotionCssPropInternal");
var gt = { exports: {} }, Nn;
function Fo() {
  return Nn || (Nn = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(null, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(gt)), gt.exports;
}
Fo();
var Js = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Mn = !1, Lo = /* @__PURE__ */ et(function(e, r) {
  process.env.NODE_ENV !== "production" && !Mn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Mn = !0);
  var t = e.styles, n = ur([t], void 0, ie.useContext(Ze)), o = ie.useRef();
  return An(function() {
    var i = r.key + "-global", s = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), u = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), c !== null && (u = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, u], function() {
      s.flush();
    };
  }, [r]), An(function() {
    var i = o.current, s = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Qr(r, n.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    r.insert("", n, s, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Lo.displayName = "EmotionGlobal");
function rt() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return ur(r);
}
var Kt = function() {
  var r = rt.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Xs = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var u in i)
              i[u] && u && (s && (s += " "), s += u);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function Zs(e, r, t) {
  var n = [], o = Ut(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var Qs = function(r) {
  var t = r.cache, n = r.serializedArr;
  return qt(function() {
    for (var o = 0; o < n.length; o++)
      Qr(t, n[o], !1);
  }), null;
}, ea = /* @__PURE__ */ et(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var f = arguments.length, d = new Array(f), m = 0; m < f; m++)
      d[m] = arguments[m];
    var y = ur(d, r.registered);
    return n.push(y), Zr(r, y, !1), r.key + "-" + y.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var f = arguments.length, d = new Array(f), m = 0; m < f; m++)
      d[m] = arguments[m];
    return Zs(r.registered, o, Xs(d));
  }, s = {
    css: o,
    cx: i,
    theme: ie.useContext(Ze)
  }, u = e.children(s);
  return t = !0, /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement(Qs, {
    cache: r,
    serializedArr: n
  }), u);
});
process.env.NODE_ENV !== "production" && (ea.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var In = !0, ra = typeof jest < "u" || typeof vi < "u";
  if (In && !ra) {
    var Dn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : In ? window : global
    ), Fn = "__EMOTION_REACT_" + Js.version.split(".")[0] + "__";
    Dn[Fn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Dn[Fn] = !0;
  }
}
var ta = Hi, na = function(r) {
  return r !== "theme";
}, Ln = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ta : na;
}, Vn = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Wn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, oa = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Zr(t, n, o), qt(function() {
    return Qr(t, n, o);
  }), null;
}, ia = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = Vn(r, t, n), c = u || Ln(o), f = !c("as");
  return function() {
    var d = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Wn), m.push(d[0][0]);
      for (var y = d.length, E = 1; E < y; E++)
        process.env.NODE_ENV !== "production" && d[0][E] === void 0 && console.error(Wn), m.push(d[E], d[0][E]);
    }
    var b = et(function(p, h, S) {
      var w = f && p.as || o, R = "", $ = [], l = p;
      if (p.theme == null) {
        l = {};
        for (var P in p)
          l[P] = p[P];
        l.theme = ie.useContext(Ze);
      }
      typeof p.className == "string" ? R = Ut(h.registered, $, p.className) : p.className != null && (R = p.className + " ");
      var k = ur(m.concat($), h.registered, l);
      R += h.key + "-" + k.name, s !== void 0 && (R += " " + s);
      var ae = f && u === void 0 ? Ln(w) : c, fe = {};
      for (var ce in p)
        f && ce === "as" || // $FlowFixMe
        ae(ce) && (fe[ce] = p[ce]);
      return fe.className = R, fe.ref = S, /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement(oa, {
        cache: h,
        serialized: k,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ ie.createElement(w, fe));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = r.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = u, Object.defineProperty(b, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), b.withComponent = function(p, h) {
      return e(p, A({}, t, h, {
        shouldForwardProp: Vn(b, h, !0)
      })).apply(void 0, m);
    }, b;
  };
}, sa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Nt = ia.bind();
sa.forEach(function(e) {
  Nt[e] = Nt(e);
});
var Mt = { exports: {} }, Mr = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function aa() {
  if (Yn) return Q;
  Yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(l) {
    if (typeof l == "object" && l !== null) {
      var P = l.$$typeof;
      switch (P) {
        case r:
          switch (l = l.type, l) {
            case c:
            case f:
            case n:
            case i:
            case o:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case u:
                case d:
                case b:
                case E:
                case s:
                  return l;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  function $(l) {
    return R(l) === f;
  }
  return Q.AsyncMode = c, Q.ConcurrentMode = f, Q.ContextConsumer = u, Q.ContextProvider = s, Q.Element = r, Q.ForwardRef = d, Q.Fragment = n, Q.Lazy = b, Q.Memo = E, Q.Portal = t, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = m, Q.isAsyncMode = function(l) {
    return $(l) || R(l) === c;
  }, Q.isConcurrentMode = $, Q.isContextConsumer = function(l) {
    return R(l) === u;
  }, Q.isContextProvider = function(l) {
    return R(l) === s;
  }, Q.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, Q.isForwardRef = function(l) {
    return R(l) === d;
  }, Q.isFragment = function(l) {
    return R(l) === n;
  }, Q.isLazy = function(l) {
    return R(l) === b;
  }, Q.isMemo = function(l) {
    return R(l) === E;
  }, Q.isPortal = function(l) {
    return R(l) === t;
  }, Q.isProfiler = function(l) {
    return R(l) === i;
  }, Q.isStrictMode = function(l) {
    return R(l) === o;
  }, Q.isSuspense = function(l) {
    return R(l) === m;
  }, Q.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === i || l === o || l === m || l === y || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === E || l.$$typeof === s || l.$$typeof === u || l.$$typeof === d || l.$$typeof === h || l.$$typeof === S || l.$$typeof === w || l.$$typeof === p);
  }, Q.typeOf = R, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function ca() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === E || v.$$typeof === s || v.$$typeof === u || v.$$typeof === d || v.$$typeof === h || v.$$typeof === S || v.$$typeof === w || v.$$typeof === p);
    }
    function $(v) {
      if (typeof v == "object" && v !== null) {
        var be = v.$$typeof;
        switch (be) {
          case r:
            var C = v.type;
            switch (C) {
              case c:
              case f:
              case n:
              case i:
              case o:
              case m:
                return C;
              default:
                var Te = C && C.$$typeof;
                switch (Te) {
                  case u:
                  case d:
                  case b:
                  case E:
                  case s:
                    return Te;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var l = c, P = f, k = u, ae = s, fe = r, ce = d, W = n, q = b, H = E, ne = t, Ee = i, de = o, Oe = m, Ce = !1;
    function Fe(v) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(v) || $(v) === c;
    }
    function x(v) {
      return $(v) === f;
    }
    function T(v) {
      return $(v) === u;
    }
    function F(v) {
      return $(v) === s;
    }
    function D(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return $(v) === d;
    }
    function Y(v) {
      return $(v) === n;
    }
    function M(v) {
      return $(v) === b;
    }
    function I(v) {
      return $(v) === E;
    }
    function L(v) {
      return $(v) === t;
    }
    function z(v) {
      return $(v) === i;
    }
    function V(v) {
      return $(v) === o;
    }
    function he(v) {
      return $(v) === m;
    }
    ee.AsyncMode = l, ee.ConcurrentMode = P, ee.ContextConsumer = k, ee.ContextProvider = ae, ee.Element = fe, ee.ForwardRef = ce, ee.Fragment = W, ee.Lazy = q, ee.Memo = H, ee.Portal = ne, ee.Profiler = Ee, ee.StrictMode = de, ee.Suspense = Oe, ee.isAsyncMode = Fe, ee.isConcurrentMode = x, ee.isContextConsumer = T, ee.isContextProvider = F, ee.isElement = D, ee.isForwardRef = j, ee.isFragment = Y, ee.isLazy = M, ee.isMemo = I, ee.isPortal = L, ee.isProfiler = z, ee.isStrictMode = V, ee.isSuspense = he, ee.isValidElementType = R, ee.typeOf = $;
  }()), ee;
}
var Un;
function Vo() {
  return Un || (Un = 1, process.env.NODE_ENV === "production" ? Mr.exports = aa() : Mr.exports = ca()), Mr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bt, Bn;
function ua() {
  if (Bn) return bt;
  Bn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bt = o() ? Object.assign : function(i, s) {
    for (var u, c = n(i), f, d = 1; d < arguments.length; d++) {
      u = Object(arguments[d]);
      for (var m in u)
        r.call(u, m) && (c[m] = u[m]);
      if (e) {
        f = e(u);
        for (var y = 0; y < f.length; y++)
          t.call(u, f[y]) && (c[f[y]] = u[f[y]]);
      }
    }
    return c;
  }, bt;
}
var Et, qn;
function Ht() {
  if (qn) return Et;
  qn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Et = e, Et;
}
var _t, Gn;
function Wo() {
  return Gn || (Gn = 1, _t = Function.call.bind(Object.prototype.hasOwnProperty)), _t;
}
var xt, Kn;
function la() {
  if (Kn) return xt;
  Kn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Ht(), t = {}, n = Wo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, u, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var m;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (c || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = i[d](s, d, c, u, null, r);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + u + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xt = o, xt;
}
var St, Hn;
function fa() {
  if (Hn) return St;
  Hn = 1;
  var e = Vo(), r = ua(), t = Ht(), n = Wo(), o = la(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var c = "Warning: " + u;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return St = function(u, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(x) {
      var T = x && (f && x[f] || x[d]);
      if (typeof T == "function")
        return T;
    }
    var y = "<<anonymous>>", E = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: R,
      element: $(),
      elementType: l(),
      instanceOf: P,
      node: ce(),
      objectOf: ae,
      oneOf: k,
      oneOfType: fe,
      shape: q,
      exact: H
    };
    function b(x, T) {
      return x === T ? x !== 0 || 1 / x === 1 / T : x !== x && T !== T;
    }
    function p(x, T) {
      this.message = x, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function h(x) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, F = 0;
      function D(Y, M, I, L, z, V, he) {
        if (L = L || y, V = V || I, he !== t) {
          if (c) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = L + ":" + I;
            !T[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[be] = !0, F++);
          }
        }
        return M[I] == null ? Y ? M[I] === null ? new p("The " + z + " `" + V + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new p("The " + z + " `" + V + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : x(M, I, L, z, V);
      }
      var j = D.bind(null, !1);
      return j.isRequired = D.bind(null, !0), j;
    }
    function S(x) {
      function T(F, D, j, Y, M, I) {
        var L = F[D], z = de(L);
        if (z !== x) {
          var V = Oe(L);
          return new p(
            "Invalid " + Y + " `" + M + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return h(T);
    }
    function w() {
      return h(s);
    }
    function R(x) {
      function T(F, D, j, Y, M) {
        if (typeof x != "function")
          return new p("Property `" + M + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var I = F[D];
        if (!Array.isArray(I)) {
          var L = de(I);
          return new p("Invalid " + Y + " `" + M + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected an array."));
        }
        for (var z = 0; z < I.length; z++) {
          var V = x(I, z, j, Y, M + "[" + z + "]", t);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return h(T);
    }
    function $() {
      function x(T, F, D, j, Y) {
        var M = T[F];
        if (!u(M)) {
          var I = de(M);
          return new p("Invalid " + j + " `" + Y + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(x);
    }
    function l() {
      function x(T, F, D, j, Y) {
        var M = T[F];
        if (!e.isValidElementType(M)) {
          var I = de(M);
          return new p("Invalid " + j + " `" + Y + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(x);
    }
    function P(x) {
      function T(F, D, j, Y, M) {
        if (!(F[D] instanceof x)) {
          var I = x.name || y, L = Fe(F[D]);
          return new p("Invalid " + Y + " `" + M + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return h(T);
    }
    function k(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(F, D, j, Y, M) {
        for (var I = F[D], L = 0; L < x.length; L++)
          if (b(I, x[L]))
            return null;
        var z = JSON.stringify(x, function(he, v) {
          var be = Oe(v);
          return be === "symbol" ? String(v) : v;
        });
        return new p("Invalid " + Y + " `" + M + "` of value `" + String(I) + "` " + ("supplied to `" + j + "`, expected one of " + z + "."));
      }
      return h(T);
    }
    function ae(x) {
      function T(F, D, j, Y, M) {
        if (typeof x != "function")
          return new p("Property `" + M + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var I = F[D], L = de(I);
        if (L !== "object")
          return new p("Invalid " + Y + " `" + M + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected an object."));
        for (var z in I)
          if (n(I, z)) {
            var V = x(I, z, j, Y, M + "." + z, t);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return h(T);
    }
    function fe(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < x.length; T++) {
        var F = x[T];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(F) + " at index " + T + "."
          ), s;
      }
      function D(j, Y, M, I, L) {
        for (var z = [], V = 0; V < x.length; V++) {
          var he = x[V], v = he(j, Y, M, I, L, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && z.push(v.data.expectedType);
        }
        var be = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new p("Invalid " + I + " `" + L + "` supplied to " + ("`" + M + "`" + be + "."));
      }
      return h(D);
    }
    function ce() {
      function x(T, F, D, j, Y) {
        return ne(T[F]) ? null : new p("Invalid " + j + " `" + Y + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return h(x);
    }
    function W(x, T, F, D, j) {
      return new p(
        (x || "React class") + ": " + T + " type `" + F + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function q(x) {
      function T(F, D, j, Y, M) {
        var I = F[D], L = de(I);
        if (L !== "object")
          return new p("Invalid " + Y + " `" + M + "` of type `" + L + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var z in x) {
          var V = x[z];
          if (typeof V != "function")
            return W(j, Y, M, z, Oe(V));
          var he = V(I, z, j, Y, M + "." + z, t);
          if (he)
            return he;
        }
        return null;
      }
      return h(T);
    }
    function H(x) {
      function T(F, D, j, Y, M) {
        var I = F[D], L = de(I);
        if (L !== "object")
          return new p("Invalid " + Y + " `" + M + "` of type `" + L + "` " + ("supplied to `" + j + "`, expected `object`."));
        var z = r({}, F[D], x);
        for (var V in z) {
          var he = x[V];
          if (n(x, V) && typeof he != "function")
            return W(j, Y, M, V, Oe(he));
          if (!he)
            return new p(
              "Invalid " + Y + " `" + M + "` key `" + V + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(F[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var v = he(I, V, j, Y, M + "." + V, t);
          if (v)
            return v;
        }
        return null;
      }
      return h(T);
    }
    function ne(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(ne);
          if (x === null || u(x))
            return !0;
          var T = m(x);
          if (T) {
            var F = T.call(x), D;
            if (T !== x.entries) {
              for (; !(D = F.next()).done; )
                if (!ne(D.value))
                  return !1;
            } else
              for (; !(D = F.next()).done; ) {
                var j = D.value;
                if (j && !ne(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ee(x, T) {
      return x === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function de(x) {
      var T = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Ee(T, x) ? "symbol" : T;
    }
    function Oe(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var T = de(x);
      if (T === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function Ce(x) {
      var T = Oe(x);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function Fe(x) {
      return !x.constructor || !x.constructor.name ? y : x.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, St;
}
var Ot, Jn;
function da() {
  if (Jn) return Ot;
  Jn = 1;
  var e = Ht();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ot = function() {
    function n(s, u, c, f, d, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ot;
}
if (process.env.NODE_ENV !== "production") {
  var pa = Vo(), ma = !0;
  Mt.exports = fa()(pa.isElement, ma);
} else
  Mt.exports = da()();
var ya = Mt.exports;
const g = /* @__PURE__ */ zi(ya);
let It;
typeof document == "object" && (It = Ao({
  key: "css",
  prepend: !0
}));
function Yo(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && It ? /* @__PURE__ */ Ve.jsx(Gs, {
    value: It,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  /**
   * Your component tree.
   */
  children: g.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: g.bool
});
function ha(e) {
  return e == null || Object.keys(e).length === 0;
}
function zo(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e, n = typeof r == "function" ? (o) => r(ha(o) ? t : o) : r;
  return /* @__PURE__ */ Ve.jsx(Lo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (zo.propTypes = {
  defaultTheme: g.object,
  styles: g.oneOfType([g.array, g.string, g.object, g.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Uo(e, r) {
  const t = Nt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Bo = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: zo,
  StyledEngineProvider: Yo,
  ThemeContext: Ze,
  css: rt,
  default: Uo,
  internal_processStyles: Bo,
  keyframes: Kt
}, Symbol.toStringTag, { value: "Module" }));
function qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qo(e) {
  if (!qe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = qo(e[t]);
  }), r;
}
function Me(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? A({}, e) : e;
  return qe(e) && qe(r) && Object.keys(r).forEach((o) => {
    qe(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && qe(e[o]) ? n[o] = Me(e[o], r[o], t) : t.clone ? n[o] = qe(r[o]) ? qo(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me,
  isPlainObject: qe
}, Symbol.toStringTag, { value: "Module" })), ba = ["values", "unit", "step"], Ea = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => A({}, t, {
    [n.key]: n.val
  }), {});
};
function Go(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Ae(e, ba), i = Ea(r), s = Object.keys(i);
  function u(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function c(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function f(y, E) {
    const b = s.indexOf(E);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(b !== -1 && typeof r[s[b]] == "number" ? r[s[b]] : E) - n / 100}${t})`;
  }
  function d(y) {
    return s.indexOf(y) + 1 < s.length ? f(y, s[s.indexOf(y) + 1]) : u(y);
  }
  function m(y) {
    const E = s.indexOf(y);
    return E === 0 ? u(s[1]) : E === s.length - 1 ? c(s[E]) : f(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return A({
    keys: s,
    values: i,
    up: u,
    down: c,
    between: f,
    only: d,
    not: m,
    unit: t
  }, o);
}
const _a = {
  borderRadius: 4
}, He = process.env.NODE_ENV !== "production" ? g.oneOfType([g.number, g.string, g.object, g.array]) : {};
function br(e, r) {
  return r ? Me(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Jt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Xn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Jt[e]}px)`
};
function We(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Xn;
    return r.reduce((s, u, c) => (s[i.up(i.keys[c])] = t(r[c]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Xn;
    return Object.keys(r).reduce((s, u) => {
      if (Object.keys(i.values || Jt).indexOf(u) !== -1) {
        const c = i.up(u);
        s[c] = t(r[u], u);
      } else {
        const c = u;
        s[c] = r[c];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Ko(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ho(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function xa(e, ...r) {
  const t = Ko(e), n = [t, ...r].reduce((o, i) => Me(o, i), {});
  return Ho(Object.keys(t), n);
}
function Sa(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function Tt({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || Sa(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, u, c) => (Array.isArray(e) ? (s[u] = e[c] != null ? e[c] : e[i], i = c) : typeof e == "object" ? (s[u] = e[u] != null ? e[u] : e[i], i = u) : s[u] = e, s), {});
}
function Be(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : _r(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" }));
function tt(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Gr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = tt(e, t) || n, r && (o = r(o, n, e)), o;
}
function me(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const u = s[r], c = s.theme, f = tt(c, n) || {};
    return We(s, u, (m) => {
      let y = Gr(f, o, m);
      return m === y && typeof m == "string" && (y = Gr(f, o, `${r}${m === "default" ? "" : Be(m)}`, m)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: He
  } : {}, i.filterProps = [r], i;
}
function Ta(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const wa = {
  m: "margin",
  p: "padding"
}, Ra = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ca = Ta((e) => {
  if (e.length > 2)
    if (Zn[e])
      e = Zn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = wa[r], o = Ra[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), nt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ot = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], $a = [...nt, ...ot];
function wr(e, r, t, n) {
  var o;
  const i = (o = tt(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xt(e) {
  return wr(e, "spacing", 8, "spacing");
}
function Xe(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Pa(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Xe(r, t), n), {});
}
function Aa(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Ca(t), i = Pa(o, n), s = e[t];
  return We(e, s, i);
}
function Jo(e, r) {
  const t = Xt(e.theme);
  return Object.keys(e).map((n) => Aa(e, r, n, t)).reduce(br, {});
}
function ue(e) {
  return Jo(e, nt);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? nt.reduce((e, r) => (e[r] = He, e), {}) : {};
ue.filterProps = nt;
function le(e) {
  return Jo(e, ot);
}
le.propTypes = process.env.NODE_ENV !== "production" ? ot.reduce((e, r) => (e[r] = He, e), {}) : {};
le.filterProps = ot;
process.env.NODE_ENV !== "production" && $a.reduce((e, r) => (e[r] = He, e), {});
function ka(e = 8) {
  if (e.mui)
    return e;
  const r = Xt({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function it(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? br(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ne(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function De(e, r) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const ja = De("border", Ne), Na = De("borderTop", Ne), Ma = De("borderRight", Ne), Ia = De("borderBottom", Ne), Da = De("borderLeft", Ne), Fa = De("borderColor"), La = De("borderTopColor"), Va = De("borderRightColor"), Wa = De("borderBottomColor"), Ya = De("borderLeftColor"), za = De("outline", Ne), Ua = De("outlineColor"), st = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = wr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Xe(r, n)
    });
    return We(e, e.borderRadius, t);
  }
  return null;
};
st.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: He
} : {};
st.filterProps = ["borderRadius"];
it(ja, Na, Ma, Ia, Da, Fa, La, Va, Wa, Ya, st, za, Ua);
const at = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = wr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Xe(r, n)
    });
    return We(e, e.gap, t);
  }
  return null;
};
at.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: He
} : {};
at.filterProps = ["gap"];
const ct = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = wr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Xe(r, n)
    });
    return We(e, e.columnGap, t);
  }
  return null;
};
ct.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: He
} : {};
ct.filterProps = ["columnGap"];
const ut = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = wr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Xe(r, n)
    });
    return We(e, e.rowGap, t);
  }
  return null;
};
ut.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: He
} : {};
ut.filterProps = ["rowGap"];
const Ba = me({
  prop: "gridColumn"
}), qa = me({
  prop: "gridRow"
}), Ga = me({
  prop: "gridAutoFlow"
}), Ka = me({
  prop: "gridAutoColumns"
}), Ha = me({
  prop: "gridAutoRows"
}), Ja = me({
  prop: "gridTemplateColumns"
}), Xa = me({
  prop: "gridTemplateRows"
}), Za = me({
  prop: "gridTemplateAreas"
}), Qa = me({
  prop: "gridArea"
});
it(at, ct, ut, Ba, qa, Ga, Ka, Ha, Ja, Xa, Za, Qa);
function ar(e, r) {
  return r === "grey" ? r : e;
}
const ec = me({
  prop: "color",
  themeKey: "palette",
  transform: ar
}), rc = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ar
}), tc = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ar
});
it(ec, rc, tc);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const nc = me({
  prop: "width",
  transform: $e
}), Zt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Jt[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: $e(t)
      };
    };
    return We(e, e.maxWidth, r);
  }
  return null;
};
Zt.filterProps = ["maxWidth"];
const oc = me({
  prop: "minWidth",
  transform: $e
}), ic = me({
  prop: "height",
  transform: $e
}), sc = me({
  prop: "maxHeight",
  transform: $e
}), ac = me({
  prop: "minHeight",
  transform: $e
});
me({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
me({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const cc = me({
  prop: "boxSizing"
});
it(nc, Zt, oc, ic, sc, ac, cc);
const Rr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ne
  },
  borderTop: {
    themeKey: "borders",
    transform: Ne
  },
  borderRight: {
    themeKey: "borders",
    transform: Ne
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ne
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ne
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ne
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: st
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ar
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ar
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ar
  },
  // spacing
  p: {
    style: le
  },
  pt: {
    style: le
  },
  pr: {
    style: le
  },
  pb: {
    style: le
  },
  pl: {
    style: le
  },
  px: {
    style: le
  },
  py: {
    style: le
  },
  padding: {
    style: le
  },
  paddingTop: {
    style: le
  },
  paddingRight: {
    style: le
  },
  paddingBottom: {
    style: le
  },
  paddingLeft: {
    style: le
  },
  paddingX: {
    style: le
  },
  paddingY: {
    style: le
  },
  paddingInline: {
    style: le
  },
  paddingInlineStart: {
    style: le
  },
  paddingInlineEnd: {
    style: le
  },
  paddingBlock: {
    style: le
  },
  paddingBlockStart: {
    style: le
  },
  paddingBlockEnd: {
    style: le
  },
  m: {
    style: ue
  },
  mt: {
    style: ue
  },
  mr: {
    style: ue
  },
  mb: {
    style: ue
  },
  ml: {
    style: ue
  },
  mx: {
    style: ue
  },
  my: {
    style: ue
  },
  margin: {
    style: ue
  },
  marginTop: {
    style: ue
  },
  marginRight: {
    style: ue
  },
  marginBottom: {
    style: ue
  },
  marginLeft: {
    style: ue
  },
  marginX: {
    style: ue
  },
  marginY: {
    style: ue
  },
  marginInline: {
    style: ue
  },
  marginInlineStart: {
    style: ue
  },
  marginInlineEnd: {
    style: ue
  },
  marginBlock: {
    style: ue
  },
  marginBlockStart: {
    style: ue
  },
  marginBlockEnd: {
    style: ue
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: at
  },
  rowGap: {
    style: ut
  },
  columnGap: {
    style: ct
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: $e
  },
  maxWidth: {
    style: Zt
  },
  minWidth: {
    transform: $e
  },
  height: {
    transform: $e
  },
  maxHeight: {
    transform: $e
  },
  minHeight: {
    transform: $e
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function uc(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function lc(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Xo() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, u = i[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: c = t,
      themeKey: f,
      transform: d,
      style: m
    } = u;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = tt(o, f) || {};
    return m ? m(s) : We(s, n, (b) => {
      let p = Gr(y, d, b);
      return b === p && typeof b == "string" && (p = Gr(y, d, `${t}${b === "default" ? "" : Be(b)}`, b)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : Rr;
    function u(c) {
      let f = c;
      if (typeof c == "function")
        f = c(i);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const d = Ko(i.breakpoints), m = Object.keys(d);
      let y = d;
      return Object.keys(f).forEach((E) => {
        const b = lc(f[E], i);
        if (b != null)
          if (typeof b == "object")
            if (s[E])
              y = br(y, e(E, b, i, s));
            else {
              const p = We({
                theme: i
              }, b, (h) => ({
                [E]: h
              }));
              uc(p, b) ? y[E] = r({
                sx: b,
                theme: i
              }) : y = br(y, p);
            }
          else
            y = br(y, e(E, b, i, s));
      }), Ho(m, y);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return r;
}
const Cr = Xo();
Cr.filterProps = ["sx"];
function Zo(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const fc = ["breakpoints", "palette", "spacing", "shape"];
function $r(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ae(e, fc), u = Go(t), c = ka(o);
  let f = Me({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: A({
      mode: "light"
    }, n),
    spacing: c,
    shape: A({}, _a, i)
  }, s);
  return f.applyStyles = Zo, f = r.reduce((d, m) => Me(d, m), f), f.unstable_sxConfig = A({}, Rr, s == null ? void 0 : s.unstable_sxConfig), f.unstable_sx = function(m) {
    return Cr({
      sx: m,
      theme: this
    });
  }, f;
}
const dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r,
  private_createBreakpoints: Go,
  unstable_applyStyles: Zo
}, Symbol.toStringTag, { value: "Module" }));
function pc(e) {
  return Object.keys(e).length === 0;
}
function mc(e = null) {
  const r = ie.useContext(Ze);
  return !r || pc(r) ? e : r;
}
const yc = $r();
function hc(e = yc) {
  return mc(e);
}
const vc = ["sx"], gc = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : Rr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Qt(e) {
  const {
    sx: r
  } = e, t = Ae(e, vc), {
    systemProps: n,
    otherProps: o
  } = gc(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...s) => {
    const u = r(...s);
    return qe(u) ? A({}, n, u) : n;
  } : i = A({}, n, r), A({}, o, {
    sx: i
  });
}
const bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr,
  extendSxProp: Qt,
  unstable_createStyleFunctionSx: Xo,
  unstable_defaultSxConfig: Rr
}, Symbol.toStringTag, { value: "Module" })), Qn = (e) => e, Ec = () => {
  let e = Qn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Qn;
    }
  };
}, _c = Ec();
function Qo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Qo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function en() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Qo(e)) && (n && (n += " "), n += r);
  return n;
}
const xc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Pr(e, r, t = "Mui") {
  const n = xc[r];
  return n ? `${t}-${n}` : `${_c.generate(e)}-${r}`;
}
function ei(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Pr(e, o, t);
  }), n;
}
var Dt = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Sc() {
  if (eo) return re;
  eo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function p(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case f:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case s:
                case c:
                case y:
                case m:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return re.ContextConsumer = s, re.ContextProvider = i, re.Element = e, re.ForwardRef = c, re.Fragment = t, re.Lazy = y, re.Memo = m, re.Portal = r, re.Profiler = o, re.StrictMode = n, re.Suspense = f, re.SuspenseList = d, re.isAsyncMode = function() {
    return !1;
  }, re.isConcurrentMode = function() {
    return !1;
  }, re.isContextConsumer = function(h) {
    return p(h) === s;
  }, re.isContextProvider = function(h) {
    return p(h) === i;
  }, re.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, re.isForwardRef = function(h) {
    return p(h) === c;
  }, re.isFragment = function(h) {
    return p(h) === t;
  }, re.isLazy = function(h) {
    return p(h) === y;
  }, re.isMemo = function(h) {
    return p(h) === m;
  }, re.isPortal = function(h) {
    return p(h) === r;
  }, re.isProfiler = function(h) {
    return p(h) === o;
  }, re.isStrictMode = function(h) {
    return p(h) === n;
  }, re.isSuspense = function(h) {
    return p(h) === f;
  }, re.isSuspenseList = function(h) {
    return p(h) === d;
  }, re.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === f || h === d || h === E || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === m || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === b || h.getModuleId !== void 0);
  }, re.typeOf = p, re;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Oc() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = !1, p = !1, h = !1, S = !1, w = !1, R;
    R = Symbol.for("react.module.reference");
    function $(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === t || C === o || w || C === n || C === f || C === d || S || C === E || b || p || h || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === m || C.$$typeof === i || C.$$typeof === s || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === R || C.getModuleId !== void 0));
    }
    function l(C) {
      if (typeof C == "object" && C !== null) {
        var Te = C.$$typeof;
        switch (Te) {
          case e:
            var Ye = C.type;
            switch (Ye) {
              case t:
              case o:
              case n:
              case f:
              case d:
                return Ye;
              default:
                var pr = Ye && Ye.$$typeof;
                switch (pr) {
                  case u:
                  case s:
                  case c:
                  case y:
                  case m:
                  case i:
                    return pr;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var P = s, k = i, ae = e, fe = c, ce = t, W = y, q = m, H = r, ne = o, Ee = n, de = f, Oe = d, Ce = !1, Fe = !1;
    function x(C) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function T(C) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(C) {
      return l(C) === s;
    }
    function D(C) {
      return l(C) === i;
    }
    function j(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function Y(C) {
      return l(C) === c;
    }
    function M(C) {
      return l(C) === t;
    }
    function I(C) {
      return l(C) === y;
    }
    function L(C) {
      return l(C) === m;
    }
    function z(C) {
      return l(C) === r;
    }
    function V(C) {
      return l(C) === o;
    }
    function he(C) {
      return l(C) === n;
    }
    function v(C) {
      return l(C) === f;
    }
    function be(C) {
      return l(C) === d;
    }
    te.ContextConsumer = P, te.ContextProvider = k, te.Element = ae, te.ForwardRef = fe, te.Fragment = ce, te.Lazy = W, te.Memo = q, te.Portal = H, te.Profiler = ne, te.StrictMode = Ee, te.Suspense = de, te.SuspenseList = Oe, te.isAsyncMode = x, te.isConcurrentMode = T, te.isContextConsumer = F, te.isContextProvider = D, te.isElement = j, te.isForwardRef = Y, te.isFragment = M, te.isLazy = I, te.isMemo = L, te.isPortal = z, te.isProfiler = V, te.isStrictMode = he, te.isSuspense = v, te.isSuspenseList = be, te.isValidElementType = $, te.typeOf = l;
  }()), te;
}
process.env.NODE_ENV === "production" ? Dt.exports = Sc() : Dt.exports = Oc();
var to = Dt.exports;
const Tc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ri(e) {
  const r = `${e}`.match(Tc);
  return r && r[1] || "";
}
function ti(e, r = "") {
  return e.displayName || e.name || ri(e) || r;
}
function no(e, r, t) {
  const n = ti(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function ni(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ti(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case to.ForwardRef:
          return no(e, e.render, "ForwardRef");
        case to.Memo:
          return no(e, e.type, "memo");
        default:
          return;
      }
  }
}
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni,
  getFunctionName: ri
}, Symbol.toStringTag, { value: "Module" })), Rc = ["ownerState"], Cc = ["variants"], $c = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Pc(e) {
  return Object.keys(e).length === 0;
}
function Ac(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function wt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const kc = $r(), oo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ir({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Pc(r) ? e : r[t] || r;
}
function jc(e) {
  return e ? (r, t) => t[e] : null;
}
function Yr(e, r) {
  let {
    ownerState: t
  } = r, n = Ae(r, Rc);
  const o = typeof e == "function" ? e(A({
    ownerState: t
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Yr(i, A({
      ownerState: t
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let u = Ae(o, Cc);
    return i.forEach((c) => {
      let f = !0;
      typeof c.props == "function" ? f = c.props(A({
        ownerState: t
      }, n, t)) : Object.keys(c.props).forEach((d) => {
        (t == null ? void 0 : t[d]) !== c.props[d] && n[d] !== c.props[d] && (f = !1);
      }), f && (Array.isArray(u) || (u = [u]), u.push(typeof c.style == "function" ? c.style(A({
        ownerState: t
      }, n, t)) : c.style));
    }), u;
  }
  return o;
}
function Nc(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = kc,
    rootShouldForwardProp: n = wt,
    slotShouldForwardProp: o = wt
  } = e, i = (s) => Cr(A({}, s, {
    theme: Ir(A({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (s, u = {}) => {
    Bo(s, (l) => l.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: f,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = jc(oo(f))
    } = u, E = Ae(u, $c), b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), p = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && c && (h = `${c}-${oo(f || "Root")}`);
    let S = wt;
    f === "Root" || f === "root" ? S = n : f ? S = o : Ac(s) && (S = void 0);
    const w = Uo(s, A({
      shouldForwardProp: S,
      label: h
    }, E)), R = (l) => typeof l == "function" && l.__emotion_real !== l || qe(l) ? (P) => Yr(l, A({}, P, {
      theme: Ir({
        theme: P.theme,
        defaultTheme: t,
        themeId: r
      })
    })) : l, $ = (l, ...P) => {
      let k = R(l);
      const ae = P ? P.map(R) : [];
      c && y && ae.push((W) => {
        const q = Ir(A({}, W, {
          defaultTheme: t,
          themeId: r
        }));
        if (!q.components || !q.components[c] || !q.components[c].styleOverrides)
          return null;
        const H = q.components[c].styleOverrides, ne = {};
        return Object.entries(H).forEach(([Ee, de]) => {
          ne[Ee] = Yr(de, A({}, W, {
            theme: q
          }));
        }), y(W, ne);
      }), c && !b && ae.push((W) => {
        var q;
        const H = Ir(A({}, W, {
          defaultTheme: t,
          themeId: r
        })), ne = H == null || (q = H.components) == null || (q = q[c]) == null ? void 0 : q.variants;
        return Yr({
          variants: ne
        }, A({}, W, {
          theme: H
        }));
      }), p || ae.push(i);
      const fe = ae.length - P.length;
      if (Array.isArray(l) && fe > 0) {
        const W = new Array(fe).fill("");
        k = [...l, ...W], k.raw = [...l.raw, ...W];
      }
      const ce = w(k, ...ae);
      if (process.env.NODE_ENV !== "production") {
        let W;
        c && (W = `${c}${Be(f || "")}`), W === void 0 && (W = `Styled(${ni(s)})`), ce.displayName = W;
      }
      return s.muiName && (ce.muiName = s.muiName), ce;
    };
    return w.withConfig && ($.withConfig = w.withConfig), $;
  };
}
const Mc = Nc();
function oi(e, r) {
  const t = A({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = A({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = A({}, i), Object.keys(o).forEach((s) => {
        t[n][s] = oi(o[s], i[s]);
      }));
    } else t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Ic(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : oi(r.components[t].defaultProps, n);
}
function ii({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = hc(t);
  return n && (o = o[n] || o), Ic({
    theme: o,
    name: r,
    props: e
  });
}
function Dc(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dc
}, Symbol.toStringTag, { value: "Module" }));
function Lc(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function rn(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const u = r(s);
          u !== "" && i.push(u), t && t[s] && i.push(t[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Vc = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Wc = $r(), Yc = Mc("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, r) => r.root
});
function zc(e) {
  return ii({
    props: e,
    name: "MuiStack",
    defaultTheme: Wc
  });
}
function Uc(e, r) {
  const t = ie.Children.toArray(e).filter(Boolean);
  return t.reduce((n, o, i) => (n.push(o), i < t.length - 1 && n.push(/* @__PURE__ */ ie.cloneElement(r, {
    key: `separator-${i}`
  })), n), []);
}
const Bc = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], qc = ({
  ownerState: e,
  theme: r
}) => {
  let t = A({
    display: "flex",
    flexDirection: "column"
  }, We({
    theme: r
  }, Tt({
    values: e.direction,
    breakpoints: r.breakpoints.values
  }), (n) => ({
    flexDirection: n
  })));
  if (e.spacing) {
    const n = Xt(r), o = Object.keys(r.breakpoints.values).reduce((c, f) => ((typeof e.spacing == "object" && e.spacing[f] != null || typeof e.direction == "object" && e.direction[f] != null) && (c[f] = !0), c), {}), i = Tt({
      values: e.direction,
      base: o
    }), s = Tt({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((c, f, d) => {
      if (!i[c]) {
        const y = f > 0 ? i[d[f - 1]] : "column";
        i[c] = y;
      }
    }), t = Me(t, We({
      theme: r
    }, s, (c, f) => e.useFlexGap ? {
      gap: Xe(n, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Bc(f ? i[f] : e.direction)}`]: Xe(n, c)
      }
    }));
  }
  return t = xa(r.breakpoints, t), t;
};
function Gc(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = Yc,
    useThemeProps: t = zc,
    componentName: n = "MuiStack"
  } = e, o = () => rn({
    root: ["root"]
  }, (c) => Pr(n, c), {}), i = r(qc), s = /* @__PURE__ */ ie.forwardRef(function(c, f) {
    const d = t(c), m = Qt(d), {
      component: y = "div",
      direction: E = "column",
      spacing: b = 0,
      divider: p,
      children: h,
      className: S,
      useFlexGap: w = !1
    } = m, R = Ae(m, Vc), $ = {
      direction: E,
      spacing: b,
      useFlexGap: w
    }, l = o();
    return /* @__PURE__ */ Ve.jsx(i, A({
      as: y,
      ownerState: $,
      ref: f,
      className: en(l.root, S)
    }, R, {
      children: p ? Uc(h, p) : h
    }));
  });
  return process.env.NODE_ENV !== "production" && (s.propTypes = {
    children: g.node,
    direction: g.oneOfType([g.oneOf(["column-reverse", "column", "row-reverse", "row"]), g.arrayOf(g.oneOf(["column-reverse", "column", "row-reverse", "row"])), g.object]),
    divider: g.node,
    spacing: g.oneOfType([g.arrayOf(g.oneOfType([g.number, g.string])), g.number, g.object, g.string]),
    sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object])
  }), s;
}
function Kc(e, r) {
  return A({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var ye = {}, si = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(si);
var ai = si.exports;
const Hc = /* @__PURE__ */ Ke(Gi), Jc = /* @__PURE__ */ Ke(Fc);
var ci = ai;
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.alpha = di;
ye.blend = cu;
ye.colorChannel = void 0;
var Xc = ye.darken = nn;
ye.decomposeColor = Ie;
ye.emphasize = pi;
var io = ye.getContrastRatio = nu;
ye.getLuminance = Kr;
ye.hexToRgb = ui;
ye.hslToRgb = fi;
var Zc = ye.lighten = on;
ye.private_safeAlpha = ou;
ye.private_safeColorChannel = void 0;
ye.private_safeDarken = iu;
ye.private_safeEmphasize = au;
ye.private_safeLighten = su;
ye.recomposeColor = fr;
ye.rgbToHex = tu;
var so = ci(Hc), Qc = ci(Jc);
function tn(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Qc.default)(e, r, t);
}
function ui(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function eu(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function Ie(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ie(ui(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, so.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, so.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const li = (e) => {
  const r = Ie(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
ye.colorChannel = li;
const ru = (e, r) => {
  try {
    return li(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
ye.private_safeColorChannel = ru;
function fr(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function tu(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = Ie(e);
  return `#${r.map((t, n) => eu(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function fi(e) {
  e = Ie(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (f, d = (f + t / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let u = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (u += "a", c.push(r[3])), fr({
    type: u,
    values: c
  });
}
function Kr(e) {
  e = Ie(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Ie(fi(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function nu(e, r) {
  const t = Kr(e), n = Kr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function di(e, r) {
  return e = Ie(e), r = tn(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, fr(e);
}
function ou(e, r, t) {
  try {
    return di(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function nn(e, r) {
  if (e = Ie(e), r = tn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return fr(e);
}
function iu(e, r, t) {
  try {
    return nn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function on(e, r) {
  if (e = Ie(e), r = tn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return fr(e);
}
function su(e, r, t) {
  try {
    return on(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function pi(e, r = 0.15) {
  return Kr(e) > 0.5 ? nn(e, r) : on(e, r);
}
function au(e, r, t) {
  try {
    return pi(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function cu(e, r, t, n = 1) {
  const o = (c, f) => Math.round((c ** (1 / n) * (1 - t) + f ** (1 / n) * t) ** n), i = Ie(e), s = Ie(r), u = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return fr({
    type: "rgb",
    values: u
  });
}
const uu = ["mode", "contrastThreshold", "tonalOffset"], ao = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Er.white,
    default: Er.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Rt = {
  text: {
    primary: Er.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Er.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function co(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Zc(e.main, o) : r === "dark" && (e.dark = Xc(e.main, i)));
}
function lu(e = "light") {
  return e === "dark" ? {
    main: nr[200],
    light: nr[50],
    dark: nr[400]
  } : {
    main: nr[700],
    light: nr[400],
    dark: nr[800]
  };
}
function fu(e = "light") {
  return e === "dark" ? {
    main: tr[200],
    light: tr[50],
    dark: tr[400]
  } : {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  };
}
function du(e = "light") {
  return e === "dark" ? {
    main: rr[500],
    light: rr[300],
    dark: rr[700]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function pu(e = "light") {
  return e === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[700],
    light: or[500],
    dark: or[900]
  };
}
function mu(e = "light") {
  return e === "dark" ? {
    main: ir[400],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[800],
    light: ir[500],
    dark: ir[900]
  };
}
function yu(e = "light") {
  return e === "dark" ? {
    main: vr[400],
    light: vr[300],
    dark: vr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: vr[500],
    dark: vr[900]
  };
}
function hu(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Ae(e, uu), i = e.primary || lu(r), s = e.secondary || fu(r), u = e.error || du(r), c = e.info || pu(r), f = e.success || mu(r), d = e.warning || yu(r);
  function m(p) {
    const h = io(p, Rt.text.primary) >= t ? Rt.text.primary : ao.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = io(p, h);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${h} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const y = ({
    color: p,
    name: h,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: R = 700
  }) => {
    if (p = A({}, p), !p.main && p[S] && (p.main = p[S]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : _r(11, h ? ` (${h})` : "", S));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : _r(12, h ? ` (${h})` : "", JSON.stringify(p.main)));
    return co(p, "light", w, n), co(p, "dark", R, n), p.contrastText || (p.contrastText = m(p.main)), p;
  }, E = {
    dark: Rt,
    light: ao
  };
  return process.env.NODE_ENV !== "production" && (E[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Me(A({
    // A collection of common colors.
    common: A({}, Er),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: qi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[r]), o);
}
const vu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function gu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const uo = {
  textTransform: "uppercase"
}, lo = '"Roboto", "Helvetica", "Arial", sans-serif';
function bu(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = lo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m
  } = t, y = Ae(t, vu);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, b = m || ((S) => `${S / f * E}rem`), p = (S, w, R, $, l) => A({
    fontFamily: n,
    fontWeight: S,
    fontSize: b(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === lo ? {
    letterSpacing: `${gu($ / w)}em`
  } : {}, l, d), h = {
    h1: p(i, 96, 1.167, -1.5),
    h2: p(i, 60, 1.2, -0.5),
    h3: p(s, 48, 1.167, 0),
    h4: p(s, 34, 1.235, 0.25),
    h5: p(s, 24, 1.334, 0),
    h6: p(u, 20, 1.6, 0.15),
    subtitle1: p(s, 16, 1.75, 0.15),
    subtitle2: p(u, 14, 1.57, 0.1),
    body1: p(s, 16, 1.5, 0.15),
    body2: p(s, 14, 1.43, 0.15),
    button: p(u, 14, 1.75, 0.4, uo),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, uo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me(A({
    htmlFontSize: f,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: u,
    fontWeightBold: c
  }, h), y, {
    clone: !1
    // No need to clone deep
  });
}
const Eu = 0.2, _u = 0.14, xu = 0.12;
function se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Eu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_u})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xu})`].join(",");
}
const Su = ["none", se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ou = ["duration", "easing", "delay"], Tu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wu = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function fo(e) {
  return `${Math.round(e)}ms`;
}
function Ru(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Cu(e) {
  const r = A({}, Tu, e.easing), t = A({}, wu, e.duration);
  return A({
    getAutoHeightDuration: Ru,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: u = r.easeInOut,
        delay: c = 0
      } = i, f = Ae(i, Ou);
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", m = (y) => !isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(u) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : fo(s)} ${u} ${typeof c == "string" ? c : fo(c)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const $u = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Pu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Au(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Ae(e, Pu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : _r(18));
  const u = hu(n), c = $r(e);
  let f = Me(c, {
    mixins: Kc(c.breakpoints, t),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Su.slice(),
    typography: bu(u, i),
    transitions: Cu(o),
    zIndex: A({}, $u)
  });
  if (f = Me(f, s), f = r.reduce((d, m) => Me(d, m), f), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (y, E) => {
      let b;
      for (b in y) {
        const p = y[b];
        if (d.indexOf(b) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = Pr("", b);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[b] = {};
        }
      }
    };
    Object.keys(f.components).forEach((y) => {
      const E = f.components[y].styleOverrides;
      E && y.indexOf("Mui") === 0 && m(E, y);
    });
  }
  return f.unstable_sxConfig = A({}, Rr, s == null ? void 0 : s.unstable_sxConfig), f.unstable_sx = function(m) {
    return Cr({
      sx: m,
      theme: this
    });
  }, f;
}
const mi = Au();
function sn({
  props: e,
  name: r
}) {
  return ii({
    props: e,
    name: r,
    defaultTheme: mi,
    themeId: xo
  });
}
var Ar = {}, Ct = { exports: {} }, po;
function ku() {
  return po || (po = 1, function(e) {
    function r(t, n) {
      if (t == null) return {};
      var o = {};
      for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
        if (n.indexOf(i) >= 0) continue;
        o[i] = t[i];
      }
      return o;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ct)), Ct.exports;
}
const ju = /* @__PURE__ */ Ke(va), Nu = /* @__PURE__ */ Ke(ga), Mu = /* @__PURE__ */ Ke(Oa), Iu = /* @__PURE__ */ Ke(wc), Du = /* @__PURE__ */ Ke(dc), Fu = /* @__PURE__ */ Ke(bc);
var dr = ai;
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
var Lu = Ar.default = Qu;
Ar.shouldForwardProp = zr;
Ar.systemDefaultTheme = void 0;
var je = dr(Fo()), Ft = dr(ku()), mo = Ku(ju), Vu = Nu, Wu = dr(Mu), Yu = dr(Iu), zu = dr(Du), Uu = dr(Fu);
const Bu = ["ownerState"], qu = ["variants"], Gu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function yi(e) {
  if (typeof WeakMap != "function") return null;
  var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (yi = function(n) {
    return n ? t : r;
  })(e);
}
function Ku(e, r) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var t = yi(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
    var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
  }
  return n.default = e, t && t.set(e, n), n;
}
function Hu(e) {
  return Object.keys(e).length === 0;
}
function Ju(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xu = Ar.systemDefaultTheme = (0, zu.default)(), yo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Dr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Hu(r) ? e : r[t] || r;
}
function Zu(e) {
  return e ? (r, t) => t[e] : null;
}
function Ur(e, r) {
  let {
    ownerState: t
  } = r, n = (0, Ft.default)(r, Bu);
  const o = typeof e == "function" ? e((0, je.default)({
    ownerState: t
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Ur(i, (0, je.default)({
      ownerState: t
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let u = (0, Ft.default)(o, qu);
    return i.forEach((c) => {
      let f = !0;
      typeof c.props == "function" ? f = c.props((0, je.default)({
        ownerState: t
      }, n, t)) : Object.keys(c.props).forEach((d) => {
        (t == null ? void 0 : t[d]) !== c.props[d] && n[d] !== c.props[d] && (f = !1);
      }), f && (Array.isArray(u) || (u = [u]), u.push(typeof c.style == "function" ? c.style((0, je.default)({
        ownerState: t
      }, n, t)) : c.style));
    }), u;
  }
  return o;
}
function Qu(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Xu,
    rootShouldForwardProp: n = zr,
    slotShouldForwardProp: o = zr
  } = e, i = (s) => (0, Uu.default)((0, je.default)({}, s, {
    theme: Dr((0, je.default)({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (s, u = {}) => {
    (0, mo.internal_processStyles)(s, (l) => l.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: f,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = Zu(yo(f))
    } = u, E = (0, Ft.default)(u, Gu), b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), p = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && c && (h = `${c}-${yo(f || "Root")}`);
    let S = zr;
    f === "Root" || f === "root" ? S = n : f ? S = o : Ju(s) && (S = void 0);
    const w = (0, mo.default)(s, (0, je.default)({
      shouldForwardProp: S,
      label: h
    }, E)), R = (l) => typeof l == "function" && l.__emotion_real !== l || (0, Vu.isPlainObject)(l) ? (P) => Ur(l, (0, je.default)({}, P, {
      theme: Dr({
        theme: P.theme,
        defaultTheme: t,
        themeId: r
      })
    })) : l, $ = (l, ...P) => {
      let k = R(l);
      const ae = P ? P.map(R) : [];
      c && y && ae.push((W) => {
        const q = Dr((0, je.default)({}, W, {
          defaultTheme: t,
          themeId: r
        }));
        if (!q.components || !q.components[c] || !q.components[c].styleOverrides)
          return null;
        const H = q.components[c].styleOverrides, ne = {};
        return Object.entries(H).forEach(([Ee, de]) => {
          ne[Ee] = Ur(de, (0, je.default)({}, W, {
            theme: q
          }));
        }), y(W, ne);
      }), c && !b && ae.push((W) => {
        var q;
        const H = Dr((0, je.default)({}, W, {
          defaultTheme: t,
          themeId: r
        })), ne = H == null || (q = H.components) == null || (q = q[c]) == null ? void 0 : q.variants;
        return Ur({
          variants: ne
        }, (0, je.default)({}, W, {
          theme: H
        }));
      }), p || ae.push(i);
      const fe = ae.length - P.length;
      if (Array.isArray(l) && fe > 0) {
        const W = new Array(fe).fill("");
        k = [...l, ...W], k.raw = [...l.raw, ...W];
      }
      const ce = w(k, ...ae);
      if (process.env.NODE_ENV !== "production") {
        let W;
        c && (W = `${c}${(0, Wu.default)(f || "")}`), W === void 0 && (W = `Styled(${(0, Yu.default)(s)})`), ce.displayName = W;
      }
      return s.muiName && (ce.muiName = s.muiName), ce;
    };
    return w.withConfig && ($.withConfig = w.withConfig), $;
  };
}
function el(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rl = (e) => el(e) && e !== "classes", kr = Lu({
  themeId: xo,
  defaultTheme: mi,
  rootShouldForwardProp: rl
});
function tl(e) {
  return Pr("MuiTypography", e);
}
ei("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const nl = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], ol = (e) => {
  const {
    align: r,
    gutterBottom: t,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, u = {
    root: ["root", i, e.align !== "inherit" && `align${Be(r)}`, t && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return rn(u, tl, s);
}, il = kr("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.variant && r[t.variant], t.align !== "inherit" && r[`align${Be(t.align)}`], t.noWrap && r.noWrap, t.gutterBottom && r.gutterBottom, t.paragraph && r.paragraph];
  }
})(({
  theme: e,
  ownerState: r
}) => A({
  margin: 0
}, r.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, r.variant !== "inherit" && e.typography[r.variant], r.align !== "inherit" && {
  textAlign: r.align
}, r.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, r.gutterBottom && {
  marginBottom: "0.35em"
}, r.paragraph && {
  marginBottom: 16
})), ho = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, sl = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, al = (e) => sl[e] || e, hi = /* @__PURE__ */ ie.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiTypography"
  }), o = al(n.color), i = Qt(A({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: u,
    component: c,
    gutterBottom: f = !1,
    noWrap: d = !1,
    paragraph: m = !1,
    variant: y = "body1",
    variantMapping: E = ho
  } = i, b = Ae(i, nl), p = A({}, i, {
    align: s,
    color: o,
    className: u,
    component: c,
    gutterBottom: f,
    noWrap: d,
    paragraph: m,
    variant: y,
    variantMapping: E
  }), h = c || (m ? "p" : E[y] || ho[y]) || "span", S = ol(p);
  return /* @__PURE__ */ Ve.jsx(il, A({
    as: h,
    ref: t,
    ownerState: p,
    className: en(S.root, u)
  }, b));
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: g.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: g.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: g.object,
  /**
   * @ignore
   */
  className: g.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: g.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: g.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: g.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: g.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: g.oneOfType([g.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), g.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: g.object
});
function cl(e) {
  return Pr("MuiCircularProgress", e);
}
ei("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const ul = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let lt = (e) => e, vo, go, bo, Eo;
const Ge = 44, ll = Kt(vo || (vo = lt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), fl = Kt(go || (go = lt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), dl = (e) => {
  const {
    classes: r,
    variant: t,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", t, `color${Be(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Be(t)}`, o && "circleDisableShrink"]
  };
  return rn(i, cl, r);
}, pl = kr("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`color${Be(t.color)}`]];
  }
})(({
  ownerState: e,
  theme: r
}) => A({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: r.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (r.vars || r).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && rt(bo || (bo = lt`
      animation: ${0} 1.4s linear infinite;
    `), ll)), ml = kr("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, r) => r.svg
})({
  display: "block"
  // Keeps the progress centered
}), yl = kr("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.circle, r[`circle${Be(t.variant)}`], t.disableShrink && r.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: r
}) => A({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: r.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && rt(Eo || (Eo = lt`
      animation: ${0} 1.4s ease-in-out infinite;
    `), fl)), Lt = /* @__PURE__ */ ie.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: u = 40,
    style: c,
    thickness: f = 3.6,
    value: d = 0,
    variant: m = "indeterminate"
  } = n, y = Ae(n, ul), E = A({}, n, {
    color: i,
    disableShrink: s,
    size: u,
    thickness: f,
    value: d,
    variant: m
  }), b = dl(E), p = {}, h = {}, S = {};
  if (m === "determinate") {
    const w = 2 * Math.PI * ((Ge - f) / 2);
    p.strokeDasharray = w.toFixed(3), S["aria-valuenow"] = Math.round(d), p.strokeDashoffset = `${((100 - d) / 100 * w).toFixed(3)}px`, h.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ Ve.jsx(pl, A({
    className: en(b.root, o),
    style: A({
      width: u,
      height: u
    }, h, c),
    ownerState: E,
    ref: t,
    role: "progressbar"
  }, S, y, {
    children: /* @__PURE__ */ Ve.jsx(ml, {
      className: b.svg,
      ownerState: E,
      viewBox: `${Ge / 2} ${Ge / 2} ${Ge} ${Ge}`,
      children: /* @__PURE__ */ Ve.jsx(yl, {
        className: b.circle,
        style: p,
        ownerState: E,
        cx: Ge,
        cy: Ge,
        r: (Ge - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Lt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: g.object,
  /**
   * @ignore
   */
  className: g.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: g.oneOfType([g.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), g.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Lc(g.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: g.oneOfType([g.number, g.string]),
  /**
   * @ignore
   */
  style: g.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: g.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: g.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: g.oneOf(["determinate", "indeterminate"])
});
const gi = Gc({
  createStyledComponent: kr("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, r) => r.root
  }),
  useThemeProps: (e) => sn({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: g.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: g.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: g.oneOfType([g.oneOf(["column-reverse", "column", "row-reverse", "row"]), g.arrayOf(g.oneOf(["column-reverse", "column", "row-reverse", "row"])), g.object]),
  /**
   * Add an element between each child.
   */
  divider: g.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: g.oneOfType([g.arrayOf(g.oneOfType([g.number, g.string])), g.number, g.object, g.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: g.bool
});
const Fr = "start", $t = "end", vl = ({
  title: e,
  onClickFunction: r,
  iconProps: t,
  boxSx: n,
  textSx: o,
  loadingProps: i,
  disabled: s
}) => /* @__PURE__ */ Ve.jsxs(
  gi,
  {
    onClick: r,
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
    sx: {
      gap: (t == null ? void 0 : t.position) === Fr ? "0.35rem" : "0.2rem",
      padding: (t == null ? void 0 : t.position) === Fr ? "0.5rem 0.65rem 0.5rem 0.5rem" : (t == null ? void 0 : t.position) === $t ? "0.5rem 0.6rem 0.5rem 0.65rem" : "0.5rem 0.75rem",
      cursor: s ? "not-allowed" : "pointer",
      backgroundColor: "blue",
      borderRadius: "0.625rem",
      width: "fit-content",
      "&:hover": {
        boxShadow: "0px 2px 4px 0px (0,0,0,0.40)"
      },
      ...n
    },
    children: [
      i != null && i.loading && i.position === Fr ? /* @__PURE__ */ Ve.jsx(Lt, { size: 24 }) : !(i != null && i.loading) && (t != null && t.icon) && (t == null ? void 0 : t.position) === Fr ? t.icon : null,
      /* @__PURE__ */ Ve.jsx(
        hi,
        {
          sx: {
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.025rem",
            lineHeight: "normal",
            color: "white",
            userSelect: "none",
            ...o
          },
          children: e
        }
      ),
      i != null && i.loading && i.position === $t ? /* @__PURE__ */ Ve.jsx(Lt, { size: 24 }) : !(i != null && i.loading) && (t != null && t.icon) && (t == null ? void 0 : t.position) === $t ? t.icon : null
    ]
  }
);
export {
  vl as JweroPrimaryButton
};
//# sourceMappingURL=index.es.js.map
