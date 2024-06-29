var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// ../../node_modules/react/cjs/react.production.min.js
var exports_react_production_min = {};
__export(exports_react_production_min, {
  version: () => {
    {
      return $version;
    }
  },
  useTransition: () => {
    {
      return $useTransition;
    }
  },
  useSyncExternalStore: () => {
    {
      return $useSyncExternalStore;
    }
  },
  useState: () => {
    {
      return $useState;
    }
  },
  useRef: () => {
    {
      return $useRef;
    }
  },
  useReducer: () => {
    {
      return $useReducer;
    }
  },
  useMemo: () => {
    {
      return $useMemo;
    }
  },
  useLayoutEffect: () => {
    {
      return $useLayoutEffect;
    }
  },
  useInsertionEffect: () => {
    {
      return $useInsertionEffect;
    }
  },
  useImperativeHandle: () => {
    {
      return $useImperativeHandle;
    }
  },
  useId: () => {
    {
      return $useId;
    }
  },
  useEffect: () => {
    {
      return $useEffect;
    }
  },
  useDeferredValue: () => {
    {
      return $useDeferredValue;
    }
  },
  useDebugValue: () => {
    {
      return $useDebugValue;
    }
  },
  useContext: () => {
    {
      return $useContext;
    }
  },
  useCallback: () => {
    {
      return $useCallback;
    }
  },
  unstable_act: () => {
    {
      return $unstable_act;
    }
  },
  startTransition: () => {
    {
      return $startTransition;
    }
  },
  memo: () => {
    {
      return $memo;
    }
  },
  lazy: () => {
    {
      return $lazy;
    }
  },
  isValidElement: () => {
    {
      return $isValidElement;
    }
  },
  forwardRef: () => {
    {
      return $forwardRef;
    }
  },
  createRef: () => {
    {
      return $createRef;
    }
  },
  createFactory: () => {
    {
      return $createFactory;
    }
  },
  createElement: () => {
    {
      return $createElement;
    }
  },
  createContext: () => {
    {
      return $createContext;
    }
  },
  cloneElement: () => {
    {
      return $cloneElement;
    }
  },
  act: () => {
    {
      return $act;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => {
    {
      return $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    }
  },
  Suspense: () => {
    {
      return $Suspense;
    }
  },
  StrictMode: () => {
    {
      return $StrictMode;
    }
  },
  PureComponent: () => {
    {
      return $PureComponent;
    }
  },
  Profiler: () => {
    {
      return $Profiler;
    }
  },
  Fragment: () => {
    {
      return $Fragment;
    }
  },
  Component: () => {
    {
      return $Component;
    }
  },
  Children: () => {
    {
      return $Children;
    }
  }
});
var $Children, $Component, $Fragment, $Profiler, $PureComponent, $StrictMode, $Suspense, $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $act, $cloneElement, $createContext, $createElement, $createFactory, $createRef, $forwardRef, $isValidElement, $lazy, $memo, $startTransition, $unstable_act, $useCallback, $useContext, $useDebugValue, $useDeferredValue, $useEffect, $useId, $useImperativeHandle, $useInsertionEffect, $useLayoutEffect, $useMemo, $useReducer, $useRef, $useState, $useSyncExternalStore, $useTransition, $version;
var init_react_production_min = __esm(() => {
  var A = function(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = z && a[z] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  };
  var E = function(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  };
  var F = function() {
  };
  var G = function(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  };
  var M = function(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (b != null)
      for (d in b.ref !== undefined && (h = b.ref), b.key !== undefined && (k = "" + b.key), b)
        J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (g === 1)
      c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0;m < g; m++)
        f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps)
      for (d in g = a.defaultProps, g)
        c[d] === undefined && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  };
  var N = function(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  };
  var O = function(a) {
    return typeof a === "object" && a !== null && a.$$typeof === l;
  };
  var escape = function(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  };
  var Q = function(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  };
  var R = function(a, b, e, d, c) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
    if (h)
      return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = d === "" ? "." : d + ":";
    if (I(a))
      for (var g = 0;g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
    else if (f = A(a), typeof f === "function")
      for (a = f.call(a), g = 0;!(k = a.next()).done; )
        k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if (k === "object")
      throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  };
  var S = function(a, b, e) {
    if (a == null)
      return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  };
  var T = function(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (a._status === 0 || a._status === -1)
          a._status = 1, a._result = b2;
      }, function(b2) {
        if (a._status === 0 || a._status === -1)
          a._status = 2, a._result = b2;
      });
      a._status === -1 && (a._status = 0, a._result = b);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  };
  var X = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  var l = Symbol.for("react.element");
  var n = Symbol.for("react.portal");
  var p = Symbol.for("react.fragment");
  var q = Symbol.for("react.strict_mode");
  var r = Symbol.for("react.profiler");
  var t = Symbol.for("react.provider");
  var u = Symbol.for("react.context");
  var v = Symbol.for("react.forward_ref");
  var w = Symbol.for("react.suspense");
  var x = Symbol.for("react.memo");
  var y = Symbol.for("react.lazy");
  var z = Symbol.iterator;
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } };
  var C = Object.assign;
  var D = {};
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  F.prototype = E.prototype;
  var H = G.prototype = new F;
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray;
  var J = Object.prototype.hasOwnProperty;
  var K = { current: null };
  var L = { key: true, ref: true, __self: true, __source: true };
  var P = /\/+/g;
  var U = { current: null };
  var V = { transition: null };
  var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  $Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  $Component = E;
  $Fragment = p;
  $Profiler = r;
  $PureComponent = G;
  $StrictMode = q;
  $Suspense = w;
  $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  $act = X;
  $cloneElement = function(a, b, e) {
    if (a === null || a === undefined)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== undefined && (k = b.ref, h = K.current);
      b.key !== undefined && (c = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === undefined && g !== undefined ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0;m < f; m++)
        g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  $createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  $createElement = M;
  $createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  $createRef = function() {
    return { current: null };
  };
  $forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  $isValidElement = O;
  $lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  $memo = function(a, b) {
    return { $$typeof: x, type: a, compare: b === undefined ? null : b };
  };
  $startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  $unstable_act = X;
  $useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  $useContext = function(a) {
    return U.current.useContext(a);
  };
  $useDebugValue = function() {
  };
  $useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  $useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  $useId = function() {
    return U.current.useId();
  };
  $useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  $useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  $useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  $useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  $useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  $useRef = function(a) {
    return U.current.useRef(a);
  };
  $useState = function(a) {
    return U.current.useState(a);
  };
  $useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  $useTransition = function() {
    return U.current.useTransition();
  };
  $version = "18.3.1";
});

// ../../node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  init_react_production_min();
  if (true) {
    module.exports = exports_react_production_min;
  } else {
  }
});

// ../../node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS((exports) => {
  var f = function(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (;0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  };
  var h = function(a) {
    return a.length === 0 ? null : a[0];
  };
  var k = function(a) {
    if (a.length === 0)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1;d < w2; ) {
          var m = 2 * (d + 1) - 1, C2 = a[m], n2 = m + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m] = c, d = m);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  };
  var g = function(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  };
  var G2 = function(a) {
    for (var b = h(t2);b !== null; ) {
      if (b.callback === null)
        k(t2);
      else if (b.startTime <= a)
        k(t2), b.sortIndex = b.expirationTime, f(r2, b);
      else
        break;
      b = h(t2);
    }
  };
  var H2 = function(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (h(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        b !== null && K2(H2, b.startTime - a);
      }
  };
  var J2 = function(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2);v2 !== null && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if (typeof d === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? v2.callback = e : v2 === h(r2) && k(r2);
          G2(b);
        } else
          k(r2);
        v2 = h(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m = h(t2);
        m !== null && K2(H2, m.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  };
  var M2 = function() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  };
  var R2 = function() {
    if (O2 !== null) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  };
  var I2 = function(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  };
  var K2 = function(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  };
  if (typeof performance === "object" && typeof performance.now === "function") {
    l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var l2;
  var p2;
  var q2;
  var r2 = [];
  var t2 = [];
  var u2 = 1;
  var v2 = null;
  var y2 = 3;
  var z2 = false;
  var A2 = false;
  var B2 = false;
  var D2 = typeof setTimeout === "function" ? setTimeout : null;
  var E2 = typeof clearTimeout === "function" ? clearTimeout : null;
  var F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var N2 = false;
  var O2 = null;
  var L2 = -1;
  var P2 = 5;
  var Q2 = -1;
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    T2 = new MessageChannel, U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  var T2;
  var U2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1000 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5000;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f(t2, a), h(r2) === null && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
});

// ../../node_modules/scheduler/index.js
var require_scheduler = __commonJS((exports, module) => {
  var scheduler_production_min = __toESM(require_scheduler_production_min(), 1);
  if (true) {
    module.exports = scheduler_production_min;
  } else {
  }
});

// ../../node_modules/react-dom/cjs/react-dom.production.min.js
var exports_react_dom_production_min = {};
__export(exports_react_dom_production_min, {
  version: () => {
    {
      return $version2;
    }
  },
  unstable_renderSubtreeIntoContainer: () => {
    {
      return $unstable_renderSubtreeIntoContainer;
    }
  },
  unstable_batchedUpdates: () => {
    {
      return $unstable_batchedUpdates;
    }
  },
  unmountComponentAtNode: () => {
    {
      return $unmountComponentAtNode;
    }
  },
  render: () => {
    {
      return $render;
    }
  },
  hydrateRoot: () => {
    {
      return $hydrateRoot;
    }
  },
  hydrate: () => {
    {
      return $hydrate;
    }
  },
  flushSync: () => {
    {
      return $flushSync;
    }
  },
  findDOMNode: () => {
    {
      return $findDOMNode;
    }
  },
  createRoot: () => {
    {
      return $createRoot;
    }
  },
  createPortal: () => {
    {
      return $createPortal;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => {
    {
      return $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2;
    }
  }
});
var $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2, $createPortal, $createRoot, $findDOMNode, $flushSync, $hydrate, $hydrateRoot, $render, $unmountComponentAtNode, $unstable_batchedUpdates, $unstable_renderSubtreeIntoContainer, $version2;
var init_react_dom_production_min = __esm(() => {
  var aa = __toESM(require_react(), 1);
  var ca = __toESM(require_scheduler(), 1);
  var p2 = function(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1;c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  };
  var fa = function(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  };
  var ha = function(a, b) {
    ea[a] = b;
    for (a = 0;a < b.length; a++)
      da.add(b[a]);
  };
  var oa = function(a) {
    if (ja.call(ma, a))
      return true;
    if (ja.call(la, a))
      return false;
    if (ka.test(a))
      return ma[a] = true;
    la[a] = true;
    return false;
  };
  var pa = function(a, b, c, d) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return a !== "data-" && a !== "aria-";
      default:
        return false;
    }
  };
  var qa = function(a, b, c, d) {
    if (b === null || typeof b === "undefined" || pa(a, b, c, d))
      return true;
    if (d)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return b === false;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  };
  var v2 = function(a, b, c, d, e, f, g) {
    this.acceptsBooleans = b === 2 || b === 3 || b === 4;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  };
  var sa = function(a) {
    return a[1].toUpperCase();
  };
  var ta = function(a, b, c, d) {
    var e = z2.hasOwnProperty(b) ? z2[b] : null;
    if (e !== null ? e.type !== 0 : d || !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N")
      qa(b, c, e, d) && (c = null), d || e === null ? oa(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  };
  var Ka = function(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  };
  var Ma = function(a) {
    if (La === undefined)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
    return "\n" + La + a;
  };
  var Oa = function(a, b) {
    if (!a || Na)
      return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      if (b)
        if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect === "object" && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d && typeof l2.stack === "string") {
        for (var e = l2.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1;1 <= g && 0 <= h && e[g] !== f[h]; )
          h--;
        for (;1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f[h]) {
            if (g !== 1 || h !== 1) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  };
  var Pa = function(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  };
  var Qa = function(a) {
    if (a == null)
      return null;
    if (typeof a === "function")
      return a.displayName || a.name || null;
    if (typeof a === "string")
      return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if (typeof a === "object")
      switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, b !== null ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
    return null;
  };
  var Ra = function(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof b === "function")
          return b.displayName || b.name || null;
        if (typeof b === "string")
          return b;
    }
    return null;
  };
  var Sa = function(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  };
  var Ta = function(a) {
    var b = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
  };
  var Ua = function(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
      var { get: e, set: f } = c;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  };
  var Va = function(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  };
  var Wa = function(a) {
    if (!a)
      return false;
    var b = a._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  };
  var Xa = function(a) {
    a = a || (typeof document !== "undefined" ? document : undefined);
    if (typeof a === "undefined")
      return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  };
  var Ya = function(a, b) {
    var c = b.checked;
    return A2({}, b, { defaultChecked: undefined, defaultValue: undefined, value: undefined, checked: c != null ? c : a._wrapperState.initialChecked });
  };
  var Za = function(a, b) {
    var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
    c = Sa(b.value != null ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
  };
  var ab = function(a, b) {
    b = b.checked;
    b != null && ta(a, "checked", b, false);
  };
  var bb = function(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (c != null)
      if (d === "number") {
        if (c === 0 && a.value === "" || a.value != c)
          a.value = "" + c;
      } else
        a.value !== "" + c && (a.value = "" + c);
    else if (d === "submit" || d === "reset") {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
  };
  var db = function(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!(d !== "submit" && d !== "reset" || b.value !== undefined && b.value !== null))
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    c !== "" && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    c !== "" && (a.name = c);
  };
  var cb = function(a, b, c) {
    if (b !== "number" || Xa(a.ownerDocument) !== a)
      c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  };
  var fb = function(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0;e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0;c < a.length; c++)
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0;e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        b !== null || a[e].disabled || (b = a[e]);
      }
      b !== null && (b.selected = true);
    }
  };
  var gb = function(a, b) {
    if (b.dangerouslySetInnerHTML != null)
      throw Error(p2(91));
    return A2({}, b, { value: undefined, defaultValue: undefined, children: "" + a._wrapperState.initialValue });
  };
  var hb = function(a, b) {
    var c = b.value;
    if (c == null) {
      c = b.children;
      b = b.defaultValue;
      if (c != null) {
        if (b != null)
          throw Error(p2(92));
        if (eb(c)) {
          if (1 < c.length)
            throw Error(p2(93));
          c = c[0];
        }
        b = c;
      }
      b == null && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  };
  var ib = function(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
    d != null && (a.defaultValue = "" + d);
  };
  var jb = function(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
  };
  var kb = function(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  };
  var lb = function(a, b) {
    return a == null || a === "http://www.w3.org/1999/xhtml" ? kb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
  };
  var ob = function(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && c.nodeType === 3) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  };
  var rb = function(a, b, c) {
    return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  };
  var sb = function(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = c.indexOf("--") === 0, e = rb(c, b[c], d);
        c === "float" && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
  };
  var ub = function(a, b) {
    if (b) {
      if (tb[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
        throw Error(p2(137, a));
      if (b.dangerouslySetInnerHTML != null) {
        if (b.children != null)
          throw Error(p2(60));
        if (typeof b.dangerouslySetInnerHTML !== "object" || !("__html" in b.dangerouslySetInnerHTML))
          throw Error(p2(61));
      }
      if (b.style != null && typeof b.style !== "object")
        throw Error(p2(62));
    }
  };
  var vb = function(a, b) {
    if (a.indexOf("-") === -1)
      return typeof b.is === "string";
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  };
  var xb = function(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return a.nodeType === 3 ? a.parentNode : a;
  };
  var Bb = function(a) {
    if (a = Cb(a)) {
      if (typeof yb !== "function")
        throw Error(p2(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  };
  var Eb = function(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  };
  var Fb = function() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b)
        for (a = 0;a < b.length; a++)
          Bb(b[a]);
    }
  };
  var Gb = function(a, b) {
    return a(b);
  };
  var Hb = function() {
  };
  var Jb = function(a, b, c) {
    if (Ib)
      return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, zb !== null || Ab !== null)
        Hb(), Fb();
    }
  };
  var Kb = function(a, b) {
    var c = a.stateNode;
    if (c === null)
      return null;
    var d = Db(c);
    if (d === null)
      return null;
    c = d[b];
    a:
      switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
          a = !d;
          break a;
        default:
          a = false;
      }
    if (a)
      return null;
    if (c && typeof c !== "function")
      throw Error(p2(231, b, typeof c));
    return c;
  };
  var Nb = function(a, b, c, d, e, f, g, h, k) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l2);
    } catch (m) {
      this.onError(m);
    }
  };
  var Tb = function(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  };
  var Ub = function(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  };
  var Vb = function(a) {
    var b = a, c = a;
    if (a.alternate)
      for (;b.return; )
        b = b.return;
    else {
      a = b;
      do
        b = a, (b.flags & 4098) !== 0 && (c = b.return), a = b.return;
      while (a);
    }
    return b.tag === 3 ? c : null;
  };
  var Wb = function(a) {
    if (a.tag === 13) {
      var b = a.memoizedState;
      b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
      if (b !== null)
        return b.dehydrated;
    }
    return null;
  };
  var Xb = function(a) {
    if (Vb(a) !== a)
      throw Error(p2(188));
  };
  var Yb = function(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (b === null)
        throw Error(p2(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b;; ) {
      var e = c.return;
      if (e === null)
        break;
      var f = e.alternate;
      if (f === null) {
        d = e.return;
        if (d !== null) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child;f; ) {
          if (f === c)
            return Xb(e), a;
          if (f === d)
            return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p2(188));
      }
      if (c.return !== d.return)
        c = e, d = f;
      else {
        for (var g = false, h = e.child;h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child;h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g)
            throw Error(p2(189));
        }
      }
      if (c.alternate !== d)
        throw Error(p2(190));
    }
    if (c.tag !== 3)
      throw Error(p2(188));
    return c.stateNode.current === c ? a : b;
  };
  var Zb = function(a) {
    a = Yb(a);
    return a !== null ? $b(a) : null;
  };
  var $b = function(a) {
    if (a.tag === 5 || a.tag === 6)
      return a;
    for (a = a.child;a !== null; ) {
      var b = $b(a);
      if (b !== null)
        return b;
      a = a.sibling;
    }
    return null;
  };
  var mc = function(a) {
    if (lc && typeof lc.onCommitFiberRoot === "function")
      try {
        lc.onCommitFiberRoot(kc, a, undefined, (a.current.flags & 128) === 128);
      } catch (b) {
      }
  };
  var nc = function(a) {
    a >>>= 0;
    return a === 0 ? 32 : 31 - (pc(a) / qc | 0) | 0;
  };
  var tc = function(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  };
  var uc = function(a, b) {
    var c = a.pendingLanes;
    if (c === 0)
      return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (g !== 0) {
      var h = g & ~e;
      h !== 0 ? d = tc(h) : (f &= g, f !== 0 && (d = tc(f)));
    } else
      g = c & ~e, g !== 0 ? d = tc(g) : f !== 0 && (d = tc(f));
    if (d === 0)
      return 0;
    if (b !== 0 && b !== d && (b & e) === 0 && (e = d & -d, f = b & -b, e >= f || e === 16 && (f & 4194240) !== 0))
      return b;
    (d & 4) !== 0 && (d |= c & 16);
    b = a.entangledLanes;
    if (b !== 0)
      for (a = a.entanglements, b &= d;0 < b; )
        c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  };
  var vc = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5000;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  };
  var wc = function(a, b) {
    for (var { suspendedLanes: c, pingedLanes: d, expirationTimes: e, pendingLanes: f } = a;0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (k === -1) {
        if ((h & c) === 0 || (h & d) !== 0)
          e[g] = vc(h, b);
      } else
        k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  };
  var xc = function(a) {
    a = a.pendingLanes & -1073741825;
    return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
  };
  var yc = function() {
    var a = rc;
    rc <<= 1;
    (rc & 4194240) === 0 && (rc = 64);
    return a;
  };
  var zc = function(a) {
    for (var b = [], c = 0;31 > c; c++)
      b.push(a);
    return b;
  };
  var Ac = function(a, b, c) {
    a.pendingLanes |= b;
    b !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  };
  var Bc = function(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes;0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  };
  var Cc = function(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements;c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  };
  var Dc = function(a) {
    a &= -a;
    return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  };
  var Sc = function(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  };
  var Tc = function(a, b, c, d, e, f) {
    if (a === null || a.nativeEvent !== f)
      return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, b !== null && (b = Cb(b), b !== null && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    e !== null && b.indexOf(e) === -1 && b.push(e);
    return a;
  };
  var Uc = function(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  };
  var Vc = function(a) {
    var b = Wc(a.target);
    if (b !== null) {
      var c = Vb(b);
      if (c !== null) {
        if (b = c.tag, b === 13) {
          if (b = Wb(c), b !== null) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (b === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  };
  var Xc = function(a) {
    if (a.blockedOn !== null)
      return false;
    for (var b = a.targetContainers;0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c === null) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else
        return b = Cb(c), b !== null && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  };
  var Zc = function(a, b, c) {
    Xc(a) && c.delete(b);
  };
  var $c = function() {
    Jc = false;
    Lc !== null && Xc(Lc) && (Lc = null);
    Mc !== null && Xc(Mc) && (Mc = null);
    Nc !== null && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  };
  var ad = function(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  };
  var bd = function(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1;c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    Lc !== null && ad(Lc, a);
    Mc !== null && ad(Mc, a);
    Nc !== null && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0;c < Qc.length; c++)
      d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (;0 < Qc.length && (c = Qc[0], c.blockedOn === null); )
      Vc(c), c.blockedOn === null && Qc.shift();
  };
  var ed = function(a, b, c, d) {
    var e = C2, f = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a, b, c, d);
    } finally {
      C2 = e, cd.transition = f;
    }
  };
  var gd = function(a, b, c, d) {
    var e = C2, f = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a, b, c, d);
    } finally {
      C2 = e, cd.transition = f;
    }
  };
  var fd = function(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (e === null)
        hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d))
        d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (;e !== null; ) {
          var f = Cb(e);
          f !== null && Ec(f);
          f = Yc(a, b, c, d);
          f === null && hd(a, b, d, id, c);
          if (f === e)
            break;
          e = f;
        }
        e !== null && d.stopPropagation();
      } else
        hd(a, b, d, null, c);
    }
  };
  var Yc = function(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (a !== null)
      if (b = Vb(a), b === null)
        a = null;
      else if (c = b.tag, c === 13) {
        a = Wb(b);
        if (a !== null)
          return a;
        a = null;
      } else if (c === 3) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return b.tag === 3 ? b.stateNode.containerInfo : null;
        a = null;
      } else
        b !== a && (a = null);
    id = a;
    return null;
  };
  var jd = function(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  };
  var nd = function() {
    if (md)
      return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0;a < c && b[a] === e[a]; a++)
      ;
    var g = c - a;
    for (d = 1;d <= g && b[c - d] === e[f - d]; d++)
      ;
    return md = e.slice(a, 1 < d ? 1 - d : undefined);
  };
  var od = function(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
    a === 10 && (a = 13);
    return 32 <= a || a === 13 ? a : 0;
  };
  var pd = function() {
    return true;
  };
  var qd = function() {
    return false;
  };
  var rd = function(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A2(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  };
  var Pd = function(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  };
  var zd = function() {
    return Pd;
  };
  var ge = function(a, b) {
    switch (a) {
      case "keyup":
        return $d.indexOf(b.keyCode) !== -1;
      case "keydown":
        return b.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  };
  var he = function(a) {
    a = a.detail;
    return typeof a === "object" && "data" in a ? a.data : null;
  };
  var je = function(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (b.which !== 32)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  };
  var ke = function(a, b) {
    if (ie)
      return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && b.locale !== "ko" ? null : b.data;
      default:
        return null;
    }
  };
  var me = function(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
  };
  var ne = function(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  };
  var re = function(a) {
    se(a, 0);
  };
  var te = function(a) {
    var b = ue(a);
    if (Wa(b))
      return a;
  };
  var ve = function(a, b) {
    if (a === "change")
      return b;
  };
  var Ae = function() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  };
  var Be = function(a) {
    if (a.propertyName === "value" && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  };
  var Ce = function(a, b, c) {
    a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
  };
  var De = function(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return te(qe);
  };
  var Ee = function(a, b) {
    if (a === "click")
      return te(b);
  };
  var Fe = function(a, b) {
    if (a === "input" || a === "change")
      return te(b);
  };
  var Ge = function(a, b) {
    return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
  };
  var Ie = function(a, b) {
    if (He(a, b))
      return true;
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
      return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0;d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e]))
        return false;
    }
    return true;
  };
  var Je = function(a) {
    for (;a && a.firstChild; )
      a = a.firstChild;
    return a;
  };
  var Ke = function(a, b) {
    var c = Je(a);
    a = 0;
    for (var d;c; ) {
      if (c.nodeType === 3) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (;c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = undefined;
      }
      c = Je(c);
    }
  };
  var Le = function(a, b) {
    return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Le(a, b.parentNode) : ("contains" in a) ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  };
  var Me = function() {
    for (var a = window, b = Xa();b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = typeof b.contentWindow.location.href === "string";
      } catch (d) {
        c = false;
      }
      if (c)
        a = b.contentWindow;
      else
        break;
      b = Xa(a.document);
    }
    return b;
  };
  var Ne = function(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
  };
  var Oe = function(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (d !== null && Ne(c)) {
        if (b = d.start, a = d.end, a === undefined && (a = b), "selectionStart" in c)
          c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = d.end === undefined ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(c, d);
          e && g && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c;a = a.parentNode; )
        a.nodeType === 1 && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      typeof c.focus === "function" && c.focus();
      for (c = 0;c < b.length; c++)
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  };
  var Ue = function(a, b, c) {
    var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Te || Qe == null || Qe !== Xa(d) || (d = Qe, ("selectionStart" in d) && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  };
  var Ve = function(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  };
  var Ze = function(a) {
    if (Xe[a])
      return Xe[a];
    if (!We[a])
      return a;
    var b = We[a], c;
    for (c in b)
      if (b.hasOwnProperty(c) && c in Ye)
        return Xe[a] = b[c];
    return a;
  };
  var ff = function(a, b) {
    df.set(a, b);
    fa(b, [a]);
  };
  var nf = function(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, undefined, a);
    a.currentTarget = null;
  };
  var se = function(a, b) {
    b = (b & 4) !== 0;
    for (var c = 0;c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = undefined;
        if (b)
          for (var g = d.length - 1;0 <= g; g--) {
            var h = d[g], k = h.instance, l2 = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f = k;
          }
        else
          for (g = 0;g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l2 = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f = k;
          }
      }
    }
    if (Qb)
      throw a = Rb, Qb = false, Rb = null, a;
  };
  var D2 = function(a, b) {
    var c = b[of];
    c === undefined && (c = b[of] = new Set);
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  };
  var qf = function(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  };
  var sf = function(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        b2 !== "selectionchange" && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = a.nodeType === 9 ? a : a.ownerDocument;
      b === null || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  };
  var pf = function(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = undefined;
    !Lb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
    d ? e !== undefined ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== undefined ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  };
  var hd = function(a, b, c, d, e) {
    var f = d;
    if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
      a:
        for (;; ) {
          if (d === null)
            return;
          var g = d.tag;
          if (g === 3 || g === 4) {
            var h = d.stateNode.containerInfo;
            if (h === e || h.nodeType === 8 && h.parentNode === e)
              break;
            if (g === 4)
              for (g = d.return;g !== null; ) {
                var k = g.tag;
                if (k === 3 || k === 4) {
                  if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                    return;
                }
                g = g.return;
              }
            for (;h !== null; ) {
              g = Wc(h);
              if (g === null)
                return;
              k = g.tag;
              if (k === 5 || k === 6) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (h2 !== undefined) {
          var k2 = td, n2 = a;
          switch (a) {
            case "keypress":
              if (od(c) === 0)
                break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (c.button === 2)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var t2 = (b & 4) !== 0, J2 = !t2 && a === "scroll", x2 = t2 ? h2 !== null ? h2 + "Capture" : null : h2;
          t2 = [];
          for (var w2 = d2, u2;w2 !== null; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            u2.tag === 5 && F2 !== null && (u2 = F2, x2 !== null && (F2 = Kb(w2, x2), F2 != null && t2.push(tf(w2, F2, u2))));
            if (J2)
              break;
            w2 = w2.return;
          }
          0 < t2.length && (h2 = new k2(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
        }
      }
      if ((b & 7) === 0) {
        a: {
          h2 = a === "mouseover" || a === "pointerover";
          k2 = a === "mouseout" || a === "pointerout";
          if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (n2 = c.relatedTarget || c.toElement, k2 = d2, n2 = n2 ? Wc(n2) : null, n2 !== null && (J2 = Vb(n2), n2 !== J2 || n2.tag !== 5 && n2.tag !== 6))
                n2 = null;
            } else
              k2 = null, n2 = d2;
            if (k2 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if (a === "pointerout" || a === "pointerover")
                t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = k2 == null ? h2 : ue(k2);
              u2 = n2 == null ? h2 : ue(n2);
              h2 = new t2(F2, w2 + "leave", k2, c, e2);
              h2.target = J2;
              h2.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k2 && n2)
                b: {
                  t2 = k2;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2;u2; u2 = vf(u2))
                    w2++;
                  u2 = 0;
                  for (F2 = x2;F2; F2 = vf(F2))
                    u2++;
                  for (;0 < w2 - u2; )
                    t2 = vf(t2), w2--;
                  for (;0 < u2 - w2; )
                    x2 = vf(x2), u2--;
                  for (;w2--; ) {
                    if (t2 === x2 || x2 !== null && t2 === x2.alternate)
                      break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
              else
                t2 = null;
              k2 !== null && wf(g2, h2, k2, t2, false);
              n2 !== null && J2 !== null && wf(g2, J2, n2, t2, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if (k2 === "select" || k2 === "input" && h2.type === "file")
            var na = ve;
          else if (me(h2))
            if (we)
              na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          a === "focusout" && (xa = h2._wrapperState) && xa.controlled && h2.type === "number" && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || xa.contentEditable === "true")
              Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae)
          b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = undefined;
          }
        else
          ie ? ge(a, c) && (ba = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (ba = "onCompositionStart");
        ba && (de && c.locale !== "ko" && (ie || ba !== "onCompositionStart" ? ba === "onCompositionEnd" && ie && ($a = nd()) : (kd = e2, ld = ("value" in kd) ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), $a !== null && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c))
          d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  };
  var tf = function(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  };
  var oe = function(a, b) {
    for (var c = b + "Capture", d = [];a !== null; ) {
      var e = a, f = e.stateNode;
      e.tag === 5 && f !== null && (e = f, f = Kb(a, c), f != null && d.unshift(tf(a, f, e)), f = Kb(a, b), f != null && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  };
  var vf = function(a) {
    if (a === null)
      return null;
    do
      a = a.return;
    while (a && a.tag !== 5);
    return a ? a : null;
  };
  var wf = function(a, b, c, d, e) {
    for (var f = b._reactName, g = [];c !== null && c !== d; ) {
      var h = c, k = h.alternate, l2 = h.stateNode;
      if (k !== null && k === d)
        break;
      h.tag === 5 && l2 !== null && (h = l2, e ? (k = Kb(c, f), k != null && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), k != null && g.push(tf(c, k, h))));
      c = c.return;
    }
    g.length !== 0 && a.push({ event: b, listeners: g });
  };
  var zf = function(a) {
    return (typeof a === "string" ? a : "" + a).replace(xf, "\n").replace(yf, "");
  };
  var Af = function(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c)
      throw Error(p2(425));
  };
  var Bf = function() {
  };
  var Ef = function(a, b) {
    return a === "textarea" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
  };
  var If = function(a) {
    setTimeout(function() {
      throw a;
    });
  };
  var Kf = function(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && e.nodeType === 8)
        if (c = e.data, c === "/$") {
          if (d === 0) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else
          c !== "$" && c !== "$?" && c !== "$!" || d++;
      c = e;
    } while (c);
    bd(b);
  };
  var Lf = function(a) {
    for (;a != null; a = a.nextSibling) {
      var b = a.nodeType;
      if (b === 1 || b === 3)
        break;
      if (b === 8) {
        b = a.data;
        if (b === "$" || b === "$!" || b === "$?")
          break;
        if (b === "/$")
          return null;
      }
    }
    return a;
  };
  var Mf = function(a) {
    a = a.previousSibling;
    for (var b = 0;a; ) {
      if (a.nodeType === 8) {
        var c = a.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (b === 0)
            return a;
          b--;
        } else
          c === "/$" && b++;
      }
      a = a.previousSibling;
    }
    return null;
  };
  var Wc = function(a) {
    var b = a[Of];
    if (b)
      return b;
    for (var c = a.parentNode;c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (b.child !== null || c !== null && c.child !== null)
          for (a = Mf(a);a !== null; ) {
            if (c = a[Of])
              return c;
            a = Mf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  };
  var Cb = function(a) {
    a = a[Of] || a[uf];
    return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
  };
  var ue = function(a) {
    if (a.tag === 5 || a.tag === 6)
      return a.stateNode;
    throw Error(p2(33));
  };
  var Db = function(a) {
    return a[Pf] || null;
  };
  var Uf = function(a) {
    return { current: a };
  };
  var E2 = function(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  };
  var G2 = function(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  };
  var Yf = function(a, b) {
    var c = a.type.contextTypes;
    if (!c)
      return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c)
      e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  };
  var Zf = function(a) {
    a = a.childContextTypes;
    return a !== null && a !== undefined;
  };
  var $f = function() {
    E2(Wf);
    E2(H2);
  };
  var ag = function(a, b, c) {
    if (H2.current !== Vf)
      throw Error(p2(168));
    G2(H2, b);
    G2(Wf, c);
  };
  var bg = function(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if (typeof d.getChildContext !== "function")
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in b))
        throw Error(p2(108, Ra(a) || "Unknown", e));
    return A2({}, c, d);
  };
  var cg = function(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H2.current;
    G2(H2, a);
    G2(Wf, Wf.current);
    return true;
  };
  var dg = function(a, b, c) {
    var d = a.stateNode;
    if (!d)
      throw Error(p2(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H2), G2(H2, a)) : E2(Wf);
    G2(Wf, c);
  };
  var hg = function(a) {
    eg === null ? eg = [a] : eg.push(a);
  };
  var ig = function(a) {
    fg = true;
    hg(a);
  };
  var jg = function() {
    if (!gg && eg !== null) {
      gg = true;
      var a = 0, b = C2;
      try {
        var c = eg;
        for (C2 = 1;a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (d !== null);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw eg !== null && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C2 = b, gg = false;
      }
    }
    return null;
  };
  var tg = function(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  };
  var ug = function(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else
      rg = 1 << f | c << e | d, sg = a;
  };
  var vg = function(a) {
    a.return !== null && (tg(a, 1), ug(a, 1, 0));
  };
  var wg = function(a) {
    for (;a === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (;a === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  };
  var Ag = function(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    b === null ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  };
  var Cg = function(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return b !== null ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = b.nodeType !== 8 ? null : b, b !== null ? (c = qg !== null ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  };
  var Dg = function(a) {
    return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
  };
  var Eg = function(a) {
    if (I2) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a))
            throw Error(p2(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
        }
      } else {
        if (Dg(a))
          throw Error(p2(418));
        a.flags = a.flags & -4097 | 2;
        I2 = false;
        xg = a;
      }
    }
  };
  var Fg = function(a) {
    for (a = a.return;a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
      a = a.return;
    xg = a;
  };
  var Gg = function(a) {
    if (a !== xg)
      return false;
    if (!I2)
      return Fg(a), I2 = true, false;
    var b;
    (b = a.tag !== 3) && !(b = a.tag !== 5) && (b = a.type, b = b !== "head" && b !== "body" && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a))
        throw Hg(), Error(p2(418));
      for (;b; )
        Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (a.tag === 13) {
      a = a.memoizedState;
      a = a !== null ? a.dehydrated : null;
      if (!a)
        throw Error(p2(317));
      a: {
        a = a.nextSibling;
        for (b = 0;a; ) {
          if (a.nodeType === 8) {
            var c = a.data;
            if (c === "/$") {
              if (b === 0) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else
              c !== "$" && c !== "$!" && c !== "$?" || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  };
  var Hg = function() {
    for (var a = yg;a; )
      a = Lf(a.nextSibling);
  };
  var Ig = function() {
    yg = xg = null;
    I2 = false;
  };
  var Jg = function(a) {
    zg === null ? zg = [a] : zg.push(a);
  };
  var Lg = function(a, b, c) {
    a = c.ref;
    if (a !== null && typeof a !== "function" && typeof a !== "object") {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (c.tag !== 1)
            throw Error(p2(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(p2(147, a));
        var e = d, f = "" + a;
        if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === f)
          return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          a2 === null ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if (typeof a !== "string")
        throw Error(p2(284));
      if (!c._owner)
        throw Error(p2(290, a));
    }
    return a;
  };
  var Mg = function(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  };
  var Ng = function(a) {
    var b = a._init;
    return b(a._payload);
  };
  var Og = function(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        d2 === null ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a)
        return null;
      for (;d2 !== null; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = new Map;b2 !== null; )
        b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a)
        return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (d2 !== null)
        return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && b2.alternate === null && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 6)
        return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya)
        return m(a2, b2, c2.props.children, d2, c2.key);
      if (b2 !== null && (b2.elementType === f2 || typeof f2 === "object" && f2 !== null && f2.$$typeof === Ha && Ng(f2) === b2.type))
        return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (b2 === null || b2.tag !== 7)
        return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q2(a2, b2, c2) {
      if (typeof b2 === "string" && b2 !== "" || typeof b2 === "number")
        return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if (typeof b2 === "object" && b2 !== null) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q2(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2))
          return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r2(a2, b2, c2, d2) {
      var e2 = b2 !== null ? b2.key : null;
      if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
        return e2 !== null ? null : h(a2, b2, "" + c2, d2);
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r2(a2, b2, e2(c2._payload), d2);
        }
        if (eb(c2) || Ka(c2))
          return e2 !== null ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y2(a2, b2, c2, d2, e2) {
      if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
        return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if (typeof d2 === "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y2(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2))
          return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n2(e2, g2, h2, k2) {
      for (var l3 = null, m2 = null, u2 = g2, w2 = g2 = 0, x2 = null;u2 !== null && w2 < h2.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h2[w2], k2);
        if (n3 === null) {
          u2 === null && (u2 = x2);
          break;
        }
        a && u2 && n3.alternate === null && b(e2, u2);
        g2 = f(n3, g2, w2);
        m2 === null ? l3 = n3 : m2.sibling = n3;
        m2 = n3;
        u2 = x2;
      }
      if (w2 === h2.length)
        return c(e2, u2), I2 && tg(e2, w2), l3;
      if (u2 === null) {
        for (;w2 < h2.length; w2++)
          u2 = q2(e2, h2[w2], k2), u2 !== null && (g2 = f(u2, g2, w2), m2 === null ? l3 = u2 : m2.sibling = u2, m2 = u2);
        I2 && tg(e2, w2);
        return l3;
      }
      for (u2 = d(e2, u2);w2 < h2.length; w2++)
        x2 = y2(u2, e2, w2, h2[w2], k2), x2 !== null && (a && x2.alternate !== null && u2.delete(x2.key === null ? w2 : x2.key), g2 = f(x2, g2, w2), m2 === null ? l3 = x2 : m2.sibling = x2, m2 = x2);
      a && u2.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && tg(e2, w2);
      return l3;
    }
    function t2(e2, g2, h2, k2) {
      var l3 = Ka(h2);
      if (typeof l3 !== "function")
        throw Error(p2(150));
      h2 = l3.call(h2);
      if (h2 == null)
        throw Error(p2(151));
      for (var u2 = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next();m2 !== null && !n3.done; w2++, n3 = h2.next()) {
        m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
        var t3 = r2(e2, m2, n3.value, k2);
        if (t3 === null) {
          m2 === null && (m2 = x2);
          break;
        }
        a && m2 && t3.alternate === null && b(e2, m2);
        g2 = f(t3, g2, w2);
        u2 === null ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m2 = x2;
      }
      if (n3.done)
        return c(e2, m2), I2 && tg(e2, w2), l3;
      if (m2 === null) {
        for (;!n3.done; w2++, n3 = h2.next())
          n3 = q2(e2, n3.value, k2), n3 !== null && (g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I2 && tg(e2, w2);
        return l3;
      }
      for (m2 = d(e2, m2);!n3.done; w2++, n3 = h2.next())
        n3 = y2(m2, e2, w2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && m2.delete(n3.key === null ? w2 : n3.key), g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && tg(e2, w2);
      return l3;
    }
    function J2(a2, d2, f2, h2) {
      typeof f2 === "object" && f2 !== null && f2.type === ya && f2.key === null && (f2 = f2.props.children);
      if (typeof f2 === "object" && f2 !== null) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l3 = d2;l3 !== null; ) {
                if (l3.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (l3.tag === 7) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k2 || typeof k2 === "object" && k2 !== null && k2.$$typeof === Ha && Ng(k2) === l3.type) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f2.props);
                    d2.ref = Lg(a2, l3, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l3);
                  break;
                } else
                  b(a2, l3);
                l3 = l3.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l3 = f2.key;d2 !== null; ) {
                if (d2.key === l3)
                  if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else
                  b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l3 = f2._init, J2(a2, d2, l3(f2._payload), h2);
        }
        if (eb(f2))
          return n2(a2, d2, f2, h2);
        if (Ka(f2))
          return t2(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return typeof f2 === "string" && f2 !== "" || typeof f2 === "number" ? (f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J2;
  };
  var $g = function() {
    Zg = Yg = Xg = null;
  };
  var ah = function(a) {
    var b = Wg.current;
    E2(Wg);
    a._currentValue = b;
  };
  var bh = function(a, b, c) {
    for (;a !== null; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, d !== null && (d.childLanes |= b)) : d !== null && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c)
        break;
      a = a.return;
    }
  };
  var ch = function(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (dh = true), a.firstContext = null);
  };
  var eh = function(a) {
    var b = a._currentValue;
    if (Zg !== a)
      if (a = { context: a, memoizedValue: b, next: null }, Yg === null) {
        if (Xg === null)
          throw Error(p2(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else
        Yg = Yg.next = a;
    return b;
  };
  var gh = function(a) {
    fh === null ? fh = [a] : fh.push(a);
  };
  var hh = function(a, b, c, d) {
    var e = b.interleaved;
    e === null ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  };
  var ih = function(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    c !== null && (c.lanes |= b);
    c = a;
    for (a = a.return;a !== null; )
      a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
    return c.tag === 3 ? c.stateNode : null;
  };
  var kh = function(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  };
  var lh = function(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  };
  var mh = function(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  };
  var nh = function(a, b, c) {
    var d = a.updateQueue;
    if (d === null)
      return null;
    d = d.shared;
    if ((K2 & 2) !== 0) {
      var e = d.pending;
      e === null ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    e === null ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  };
  var oh = function(a, b, c) {
    b = b.updateQueue;
    if (b !== null && (b = b.shared, (c & 4194240) !== 0)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  };
  var ph = function(a, b) {
    var { updateQueue: c, alternate: d } = a;
    if (d !== null && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (c !== null) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          f === null ? e = f = g : f = f.next = g;
          c = c.next;
        } while (c !== null);
        f === null ? e = f = b : f = f.next = b;
      } else
        e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    a === null ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  };
  var qh = function(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var { firstBaseUpdate: f, lastBaseUpdate: g } = e, h = e.shared.pending;
    if (h !== null) {
      e.shared.pending = null;
      var k = h, l2 = k.next;
      k.next = null;
      g === null ? f = l2 : g.next = l2;
      g = k;
      var m = a.alternate;
      m !== null && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (h === null ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k));
    }
    if (f !== null) {
      var q2 = e.baseState;
      g = 0;
      m = l2 = k = null;
      h = f;
      do {
        var { lane: r2, eventTime: y2 } = h;
        if ((d & r2) === r2) {
          m !== null && (m = m.next = {
            eventTime: y2,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n2 = a, t2 = h;
            r2 = b;
            y2 = c;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if (typeof n2 === "function") {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = typeof n2 === "function" ? n2.call(y2, q2, r2) : n2;
                if (r2 === null || r2 === undefined)
                  break a;
                q2 = A2({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          h.callback !== null && h.lane !== 0 && (a.flags |= 64, r2 = e.effects, r2 === null ? e.effects = [h] : r2.push(h));
        } else
          y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, m === null ? (l2 = m = y2, k = q2) : m = m.next = y2, g |= r2;
        h = h.next;
        if (h === null)
          if (h = e.shared.pending, h === null)
            break;
          else
            r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      m === null && (k = q2);
      e.baseState = k;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (b !== null) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else
        f === null && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q2;
    }
  };
  var sh = function(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (a !== null)
      for (b = 0;b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (e !== null) {
          d.callback = null;
          d = c;
          if (typeof e !== "function")
            throw Error(p2(191, e));
          e.call(d);
        }
      }
  };
  var xh = function(a) {
    if (a === th)
      throw Error(p2(174));
    return a;
  };
  var yh = function(a, b) {
    G2(wh, b);
    G2(vh, a);
    G2(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E2(uh);
    G2(uh, b);
  };
  var zh = function() {
    E2(uh);
    E2(vh);
    E2(wh);
  };
  var Ah = function(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G2(vh, a), G2(uh, c));
  };
  var Bh = function(a) {
    vh.current === a && (E2(uh), E2(vh));
  };
  var Ch = function(a) {
    for (var b = a;b !== null; ) {
      if (b.tag === 13) {
        var c = b.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
          return b;
      } else if (b.tag === 19 && b.memoizedProps.revealOrder !== undefined) {
        if ((b.flags & 128) !== 0)
          return b;
      } else if (b.child !== null) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a)
        break;
      for (;b.sibling === null; ) {
        if (b.return === null || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  };
  var Eh = function() {
    for (var a = 0;a < Dh.length; a++)
      Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  };
  var P2 = function() {
    throw Error(p2(321));
  };
  var Mh = function(a, b) {
    if (b === null)
      return false;
    for (var c = 0;c < b.length && c < a.length; c++)
      if (!He(a[c], b[c]))
        return false;
    return true;
  };
  var Nh = function(a, b, c, d, e, f) {
    Hh = f;
    M2 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = a === null || a.memoizedState === null ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f)
          throw Error(p2(301));
        f += 1;
        O2 = N2 = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = N2 !== null && N2.next !== null;
    Hh = 0;
    O2 = N2 = M2 = null;
    Ih = false;
    if (b)
      throw Error(p2(300));
    return a;
  };
  var Sh = function() {
    var a = Kh !== 0;
    Kh = 0;
    return a;
  };
  var Th = function() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    O2 === null ? M2.memoizedState = O2 = a : O2 = O2.next = a;
    return O2;
  };
  var Uh = function() {
    if (N2 === null) {
      var a = M2.alternate;
      a = a !== null ? a.memoizedState : null;
    } else
      a = N2.next;
    var b = O2 === null ? M2.memoizedState : O2.next;
    if (b !== null)
      O2 = b, N2 = a;
    else {
      if (a === null)
        throw Error(p2(310));
      N2 = a;
      a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
      O2 === null ? M2.memoizedState = O2 = a : O2 = O2.next = a;
    }
    return O2;
  };
  var Vh = function(a, b) {
    return typeof b === "function" ? b(a) : b;
  };
  var Wh = function(a) {
    var b = Uh(), c = b.queue;
    if (c === null)
      throw Error(p2(311));
    c.lastRenderedReducer = a;
    var d = N2, e = d.baseQueue, f = c.pending;
    if (f !== null) {
      if (e !== null) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (e !== null) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l2 = f;
      do {
        var m = l2.lane;
        if ((Hh & m) === m)
          k !== null && (k = k.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
        else {
          var q2 = {
            lane: m,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          k === null ? (h = k = q2, g = d) : k = k.next = q2;
          M2.lanes |= m;
          rh |= m;
        }
        l2 = l2.next;
      } while (l2 !== null && l2 !== f);
      k === null ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (a !== null) {
      e = a;
      do
        f = e.lane, M2.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else
      e === null && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  };
  var Xh = function(a) {
    var b = Uh(), c = b.queue;
    if (c === null)
      throw Error(p2(311));
    c.lastRenderedReducer = a;
    var { dispatch: d, pending: e } = c, f = b.memoizedState;
    if (e !== null) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      b.baseQueue === null && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  };
  var Yh = function() {
  };
  var Zh = function(a, b) {
    var c = M2, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || O2 !== null && O2.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), undefined, null);
      if (Q2 === null)
        throw Error(p2(349));
      (Hh & 30) !== 0 || di(c, b, e);
    }
    return e;
  };
  var di = function(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M2.updateQueue;
    b === null ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.stores = [a]) : (c = b.stores, c === null ? b.stores = [a] : c.push(a));
  };
  var ci = function(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  };
  var ai = function(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  };
  var ei = function(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  };
  var fi = function(a) {
    var b = ih(a, 1);
    b !== null && gi(b, a, 1, -1);
  };
  var hi = function(a) {
    var b = Th();
    typeof a === "function" && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M2, a);
    return [b.memoizedState, a];
  };
  var bi = function(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M2.updateQueue;
    b === null ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  };
  var ji = function() {
    return Uh().memoizedState;
  };
  var ki = function(a, b, c, d) {
    var e = Th();
    M2.flags |= a;
    e.memoizedState = bi(1 | b, c, undefined, d === undefined ? null : d);
  };
  var li = function(a, b, c, d) {
    var e = Uh();
    d = d === undefined ? null : d;
    var f = undefined;
    if (N2 !== null) {
      var g = N2.memoizedState;
      f = g.destroy;
      if (d !== null && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M2.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  };
  var mi = function(a, b) {
    return ki(8390656, 8, a, b);
  };
  var $h = function(a, b) {
    return li(2048, 8, a, b);
  };
  var ni = function(a, b) {
    return li(4, 2, a, b);
  };
  var oi = function(a, b) {
    return li(4, 4, a, b);
  };
  var pi = function(a, b) {
    if (typeof b === "function")
      return a = a(), b(a), function() {
        b(null);
      };
    if (b !== null && b !== undefined)
      return a = a(), b.current = a, function() {
        b.current = null;
      };
  };
  var qi = function(a, b, c) {
    c = c !== null && c !== undefined ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  };
  var ri = function() {
  };
  var si = function(a, b) {
    var c = Uh();
    b = b === undefined ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Mh(b, d[1]))
      return d[0];
    c.memoizedState = [a, b];
    return a;
  };
  var ti = function(a, b) {
    var c = Uh();
    b = b === undefined ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Mh(b, d[1]))
      return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  };
  var ui = function(a, b, c) {
    if ((Hh & 21) === 0)
      return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M2.lanes |= c, rh |= c, a.baseState = true);
    return b;
  };
  var vi = function(a, b) {
    var c = C2;
    C2 = c !== 0 && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C2 = c, Gh.transition = d;
    }
  };
  var wi = function() {
    return Uh().memoizedState;
  };
  var xi = function(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a))
      Ai(b, c);
    else if (c = hh(a, b, c, d), c !== null) {
      var e = R2();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  };
  var ii = function(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a))
      Ai(b, e);
    else {
      var f = a.alternate;
      if (a.lanes === 0 && (f === null || f.lanes === 0) && (f = b.lastRenderedReducer, f !== null))
        try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            k === null ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c = hh(a, b, e, d);
      c !== null && (e = R2(), gi(c, a, d, e), Bi(c, b, d));
    }
  };
  var zi = function(a) {
    var b = a.alternate;
    return a === M2 || b !== null && b === M2;
  };
  var Ai = function(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  };
  var Bi = function(a, b, c) {
    if ((c & 4194240) !== 0) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  };
  var Ci = function(a, b) {
    if (a && a.defaultProps) {
      b = A2({}, b);
      a = a.defaultProps;
      for (var c in a)
        b[c] === undefined && (b[c] = a[c]);
      return b;
    }
    return b;
  };
  var Di = function(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = c === null || c === undefined ? b : A2({}, b, c);
    a.memoizedState = c;
    a.lanes === 0 && (a.updateQueue.baseState = c);
  };
  var Fi = function(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  };
  var Gi = function(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    typeof f === "object" && f !== null ? f = eh(f) : (e = Zf(b) ? Xf : H2.current, d = b.contextTypes, f = (d = d !== null && d !== undefined) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = b.state !== null && b.state !== undefined ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  };
  var Hi = function(a, b, c, d) {
    a = b.state;
    typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
    typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  };
  var Ii = function(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    typeof f === "object" && f !== null ? e.context = eh(f) : (f = Zf(b) ? Xf : H2.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    typeof f === "function" && (Di(a, b, f, c), e.state = a.memoizedState);
    typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    typeof e.componentDidMount === "function" && (a.flags |= 4194308);
  };
  var Ji = function(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  };
  var Ki = function(a, b, c) {
    return { value: a, source: null, stack: c != null ? c : null, digest: b != null ? b : null };
  };
  var Li = function(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  };
  var Ni = function(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  };
  var Qi = function(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if (typeof d === "function") {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
      Li(a, b);
      typeof d !== "function" && (Ri === null ? Ri = new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
    });
    return c;
  };
  var Si = function(a, b, c) {
    var d = a.pingCache;
    if (d === null) {
      d = a.pingCache = new Mi;
      var e = new Set;
      d.set(b, e);
    } else
      e = d.get(b), e === undefined && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  };
  var Ui = function(a) {
    do {
      var b;
      if (b = a.tag === 13)
        b = a.memoizedState, b = b !== null ? b.dehydrated !== null ? true : false : true;
      if (b)
        return a;
      a = a.return;
    } while (a !== null);
    return null;
  };
  var Vi = function(a, b, c, d, e) {
    if ((a.mode & 1) === 0)
      return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  };
  var Xi = function(a, b, c, d) {
    b.child = a === null ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  };
  var Yi = function(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (a !== null && !dh)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I2 && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  };
  var $i = function(a, b, c, d, e) {
    if (a === null) {
      var f = c.type;
      if (typeof f === "function" && !aj(f) && f.defaultProps === undefined && c.compare === null && c.defaultProps === undefined)
        return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if ((a.lanes & e) === 0) {
      var g = f.memoizedProps;
      c = c.compare;
      c = c !== null ? c : Ie;
      if (c(g, d) && a.ref === b.ref)
        return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  };
  var bj = function(a, b, c, d, e) {
    if (a !== null) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref)
        if (dh = false, b.pendingProps = d = f, (a.lanes & e) !== 0)
          (a.flags & 131072) !== 0 && (dh = true);
        else
          return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  };
  var dj = function(a, b, c) {
    var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
    if (d.mode === "hidden")
      if ((b.mode & 1) === 0)
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
      else {
        if ((c & 1073741824) === 0)
          return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G2(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = f !== null ? f.baseLanes : c;
        G2(ej, fj);
        fj |= d;
      }
    else
      f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  };
  var gj = function(a, b) {
    var c = b.ref;
    if (a === null && c !== null || a !== null && a.ref !== c)
      b.flags |= 512, b.flags |= 2097152;
  };
  var cj = function(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H2.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (a !== null && !dh)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I2 && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  };
  var hj = function(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else
      f = false;
    ch(b, e);
    if (b.stateNode === null)
      ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (a === null) {
      var { stateNode: g, memoizedProps: h } = b;
      g.props = h;
      var k = g.context, l2 = c.contextType;
      typeof l2 === "object" && l2 !== null ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
      var m = c.getDerivedStateFromProps, q2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
      q2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Hi(b, g, d, l2);
      jh = false;
      var r2 = b.memoizedState;
      g.state = r2;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r2 !== k || Wf.current || jh ? (typeof m === "function" && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k, l2)) ? (q2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4194308)) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l2 = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l2;
      q2 = b.pendingProps;
      r2 = g.context;
      k = c.contextType;
      typeof k === "object" && k !== null ? k = eh(k) : (k = Zf(c) ? Xf : H2.current, k = Yf(b, k));
      var y2 = c.getDerivedStateFromProps;
      (m = typeof y2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== q2 || r2 !== k) && Hi(b, g, d, k);
      jh = false;
      r2 = b.memoizedState;
      g.state = r2;
      qh(b, d, g, e);
      var n2 = b.memoizedState;
      h !== q2 || r2 !== n2 || Wf.current || jh ? (typeof y2 === "function" && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k) || false) ? (m || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, n2, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, n2, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 1024)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k, d = l2) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  };
  var jj = function(a, b, c, d, e, f) {
    gj(a, b);
    var g = (b.flags & 128) !== 0;
    if (!d && !g)
      return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
    b.flags |= 1;
    a !== null && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  };
  var kj = function(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  };
  var lj = function(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  };
  var nj = function(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  };
  var oj = function(a, b, c) {
    var d = b.pendingProps, e = L2.current, f = false, g = (b.flags & 128) !== 0, h;
    (h = g) || (h = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
    if (h)
      f = true, b.flags &= -129;
    else if (a === null || a.memoizedState !== null)
      e |= 1;
    G2(L2, e & 1);
    if (a === null) {
      Eg(b);
      a = b.memoizedState;
      if (a !== null && (a = a.dehydrated, a !== null))
        return (b.mode & 1) === 0 ? b.lanes = 1 : a.data === "$!" ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, (d & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (e !== null && (h = e.dehydrated, h !== null))
      return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      (g & 1) === 0 && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      h !== null ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = g === null ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    (b.mode & 1) === 0 && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    a !== null && (c = b.deletions, c === null ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  };
  var qj = function(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  };
  var sj = function(a, b, c, d) {
    d !== null && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  };
  var rj = function(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256)
        return b.flags &= -257, d = Ki(Error(p2(422))), sj(a, b, g, d);
      if (b.memoizedState !== null)
        return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      (b.mode & 1) !== 0 && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if ((b.mode & 1) === 0)
      return sj(a, b, g, null);
    if (e.data === "$!") {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d)
        var h = d.dgst;
      d = h;
      f = Error(p2(419));
      d = Ki(f, d, undefined);
      return sj(a, b, g, d);
    }
    h = (g & a.childLanes) !== 0;
    if (dh || h) {
      d = Q2;
      if (d !== null) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = (e & (d.suspendedLanes | g)) !== 0 ? 0 : e;
        e !== 0 && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p2(421)));
      return sj(a, b, g, d);
    }
    if (e.data === "$?")
      return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I2 = true;
    zg = null;
    a !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  };
  var vj = function(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    d !== null && (d.lanes |= b);
    bh(a.return, b, c);
  };
  var wj = function(a, b, c, d, e) {
    var f = a.memoizedState;
    f === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  };
  var xj = function(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L2.current;
    if ((d & 2) !== 0)
      d = d & 1 | 2, b.flags |= 128;
    else {
      if (a !== null && (a.flags & 128) !== 0)
        a:
          for (a = b.child;a !== null; ) {
            if (a.tag === 13)
              a.memoizedState !== null && vj(a, c, b);
            else if (a.tag === 19)
              vj(a, c, b);
            else if (a.child !== null) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b)
              break a;
            for (;a.sibling === null; ) {
              if (a.return === null || a.return === b)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      d &= 1;
    }
    G2(L2, d);
    if ((b.mode & 1) === 0)
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null;c !== null; )
            a = c.alternate, a !== null && Ch(a) === null && (e = c), c = c.sibling;
          c = e;
          c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null;e !== null; ) {
            a = e.alternate;
            if (a !== null && Ch(a) === null) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, undefined);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  };
  var ij = function(a, b) {
    (b.mode & 1) === 0 && a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
  };
  var Zi = function(a, b, c) {
    a !== null && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if ((c & b.childLanes) === 0)
      return null;
    if (a !== null && b.child !== a.child)
      throw Error(p2(153));
    if (b.child !== null) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b;a.sibling !== null; )
        a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  };
  var yj = function(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G2(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (d !== null) {
          if (d.dehydrated !== null)
            return G2(L2, L2.current & 1), b.flags |= 128, null;
          if ((c & b.child.childLanes) !== 0)
            return oj(a, b, c);
          G2(L2, L2.current & 1);
          a = Zi(a, b, c);
          return a !== null ? a.sibling : null;
        }
        G2(L2, L2.current & 1);
        break;
      case 19:
        d = (c & b.childLanes) !== 0;
        if ((a.flags & 128) !== 0) {
          if (d)
            return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G2(L2, L2.current);
        if (d)
          break;
        else
          return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  };
  var Dj = function(a, b) {
    if (!I2)
      switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null;b !== null; )
            b.alternate !== null && (c = b), b = b.sibling;
          c === null ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null;c !== null; )
            c.alternate !== null && (d = c), c = c.sibling;
          d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
  };
  var S2 = function(a) {
    var b = a.alternate !== null && a.alternate.child === a.child, c = 0, d = 0;
    if (b)
      for (var e = a.child;e !== null; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else
      for (e = a.child;e !== null; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  };
  var Ej = function(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S2(b), null;
      case 1:
        return Zf(b.type) && $f(), S2(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E2(Wf);
        E2(H2);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (a === null || a.child === null)
          Gg(b) ? b.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b.flags & 256) === 0 || (b.flags |= 1024, zg !== null && (Fj(zg), zg = null));
        Aj(a, b);
        S2(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (a !== null && b.stateNode != null)
          Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (b.stateNode === null)
              throw Error(p2(166));
            S2(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = (b.mode & 1) !== 0;
            switch (c) {
              case "dialog":
                D2("cancel", d);
                D2("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0;e < lf.length; e++)
                  D2(lf[e], d);
                break;
              case "source":
                D2("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D2("error", d);
                D2("load", d);
                break;
              case "details":
                D2("toggle", d);
                break;
              case "input":
                Za(d, f);
                D2("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D2("invalid", d);
                break;
              case "textarea":
                hb(d, f), D2("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f)
              if (f.hasOwnProperty(g)) {
                var h = f[g];
                g === "children" ? typeof h === "string" ? d.textContent !== h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && h != null && g === "onScroll" && D2("scroll", d);
              }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick === "function" && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            d !== null && (b.flags |= 4);
          } else {
            g = e.nodeType === 9 ? e : e.ownerDocument;
            a === "http://www.w3.org/1999/xhtml" && (a = kb(c));
            a === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D2("cancel", a);
                  D2("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D2("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0;e < lf.length; e++)
                    D2(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D2("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D2("error", a);
                  D2("load", a);
                  e = d;
                  break;
                case "details":
                  D2("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D2("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A2({}, d, { value: undefined });
                  D2("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D2("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h)
                if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  f === "style" ? sb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : undefined, k != null && nb(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && ob(a, k) : typeof k === "number" && ob(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ea.hasOwnProperty(f) ? k != null && f === "onScroll" && D2("scroll", a) : k != null && ta(a, f, k, g));
                }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  d.value != null && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                  break;
                default:
                  typeof e.onClick === "function" && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          b.ref !== null && (b.flags |= 512, b.flags |= 2097152);
        }
        S2(b);
        return null;
      case 6:
        if (a && b.stateNode != null)
          Cj(a, b, a.memoizedProps, d);
        else {
          if (typeof d !== "string" && b.stateNode === null)
            throw Error(p2(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, a !== null)
                switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, (a.mode & 1) !== 0);
                    break;
                  case 5:
                    a.memoizedProps.suppressHydrationWarning !== true && Af(d.nodeValue, c, (a.mode & 1) !== 0);
                }
            }
            f && (b.flags |= 4);
          } else
            d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S2(b);
        return null;
      case 13:
        E2(L2);
        d = b.memoizedState;
        if (a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
          if (I2 && yg !== null && (b.mode & 1) !== 0 && (b.flags & 128) === 0)
            Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), d !== null && d.dehydrated !== null) {
            if (a === null) {
              if (!f)
                throw Error(p2(318));
              f = b.memoizedState;
              f = f !== null ? f.dehydrated : null;
              if (!f)
                throw Error(p2(317));
              f[Of] = b;
            } else
              Ig(), (b.flags & 128) === 0 && (b.memoizedState = null), b.flags |= 4;
            S2(b);
            f = false;
          } else
            zg !== null && (Fj(zg), zg = null), f = true;
          if (!f)
            return b.flags & 65536 ? b : null;
        }
        if ((b.flags & 128) !== 0)
          return b.lanes = c, b;
        d = d !== null;
        d !== (a !== null && a.memoizedState !== null) && d && (b.child.flags |= 8192, (b.mode & 1) !== 0 && (a === null || (L2.current & 1) !== 0 ? T2 === 0 && (T2 = 3) : tj()));
        b.updateQueue !== null && (b.flags |= 4);
        S2(b);
        return null;
      case 4:
        return zh(), Aj(a, b), a === null && sf(b.stateNode.containerInfo), S2(b), null;
      case 10:
        return ah(b.type._context), S2(b), null;
      case 17:
        return Zf(b.type) && $f(), S2(b), null;
      case 19:
        E2(L2);
        f = b.memoizedState;
        if (f === null)
          return S2(b), null;
        d = (b.flags & 128) !== 0;
        g = f.rendering;
        if (g === null)
          if (d)
            Dj(f, false);
          else {
            if (T2 !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = b.child;a !== null; ) {
                g = Ch(a);
                if (g !== null) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  d !== null && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child;c !== null; )
                    f = c, a = d, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            f.tail !== null && B2() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
        else {
          if (!d)
            if (a = Ch(g), a !== null) {
              if (b.flags |= 128, d = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Dj(f, true), f.tail === null && f.tailMode === "hidden" && !g.alternate && !I2)
                return S2(b), null;
            } else
              2 * B2() - f.renderingStartTime > Gj && c !== 1073741824 && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, c !== null ? c.sibling = g : b.child = g, f.last = g);
        }
        if (f.tail !== null)
          return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B2(), b.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b;
        S2(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = b.memoizedState !== null, a !== null && a.memoizedState !== null !== d && (b.flags |= 8192), d && (b.mode & 1) !== 0 ? (fj & 1073741824) !== 0 && (S2(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S2(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b.tag));
  };
  var Ij = function(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E2(Wf), E2(H2), Eh(), a = b.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E2(L2);
        a = b.memoizedState;
        if (a !== null && a.dehydrated !== null) {
          if (b.alternate === null)
            throw Error(p2(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E2(L2), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  };
  var Lj = function(a, b) {
    var c = a.ref;
    if (c !== null)
      if (typeof c === "function")
        try {
          c(null);
        } catch (d) {
          W2(a, b, d);
        }
      else
        c.current = null;
  };
  var Mj = function(a, b, c) {
    try {
      c();
    } catch (d) {
      W2(a, b, d);
    }
  };
  var Oj = function(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a)
        var c = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && d.rangeCount !== 0) {
            c = d.anchorNode;
            var { anchorOffset: e, focusNode: f } = d;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F2) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l2 = 0, m = 0, q2 = a, r2 = null;
            b:
              for (;; ) {
                for (var y2;; ) {
                  q2 !== c || e !== 0 && q2.nodeType !== 3 || (h = g + e);
                  q2 !== f || d !== 0 && q2.nodeType !== 3 || (k = g + d);
                  q2.nodeType === 3 && (g += q2.nodeValue.length);
                  if ((y2 = q2.firstChild) === null)
                    break;
                  r2 = q2;
                  q2 = y2;
                }
                for (;; ) {
                  if (q2 === a)
                    break b;
                  r2 === c && ++l2 === e && (h = g);
                  r2 === f && ++m === d && (k = g);
                  if ((y2 = q2.nextSibling) !== null)
                    break;
                  q2 = r2;
                  r2 = q2.parentNode;
                }
                q2 = y2;
              }
            c = h === -1 || k === -1 ? null : { start: h, end: k };
          } else
            c = null;
        }
      c = c || { start: 0, end: 0 };
    } else
      c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V2 = b;V2 !== null; )
      if (b = V2, a = b.child, (b.subtreeFlags & 1028) !== 0 && a !== null)
        a.return = b, V2 = a;
      else
        for (;V2 !== null; ) {
          b = V2;
          try {
            var n2 = b.alternate;
            if ((b.flags & 1024) !== 0)
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (n2 !== null) {
                    var { memoizedProps: t2, memoizedState: J2 } = n2, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u2 = b.stateNode.containerInfo;
                  u2.nodeType === 1 ? u2.textContent = "" : u2.nodeType === 9 && u2.documentElement && u2.removeChild(u2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p2(163));
              }
          } catch (F2) {
            W2(b, b.return, F2);
          }
          a = b.sibling;
          if (a !== null) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
    n2 = Nj;
    Nj = false;
    return n2;
  };
  var Pj = function(a, b, c) {
    var d = b.updateQueue;
    d = d !== null ? d.lastEffect : null;
    if (d !== null) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = undefined;
          f !== undefined && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  };
  var Qj = function(a, b) {
    b = b.updateQueue;
    b = b !== null ? b.lastEffect : null;
    if (b !== null) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  };
  var Rj = function(a) {
    var b = a.ref;
    if (b !== null) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      typeof b === "function" ? b(a) : b.current = a;
    }
  };
  var Sj = function(a) {
    var b = a.alternate;
    b !== null && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    a.tag === 5 && (b = a.stateNode, b !== null && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  };
  var Tj = function(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 4;
  };
  var Uj = function(a) {
    a:
      for (;; ) {
        for (;a.sibling === null; ) {
          if (a.return === null || Tj(a.return))
            return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling;a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
          if (a.flags & 2)
            continue a;
          if (a.child === null || a.tag === 4)
            continue a;
          else
            a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2))
          return a.stateNode;
      }
  };
  var Vj = function(a, b, c) {
    var d = a.tag;
    if (d === 5 || d === 6)
      a = a.stateNode, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== undefined || b.onclick !== null || (b.onclick = Bf));
    else if (d !== 4 && (a = a.child, a !== null))
      for (Vj(a, b, c), a = a.sibling;a !== null; )
        Vj(a, b, c), a = a.sibling;
  };
  var Wj = function(a, b, c) {
    var d = a.tag;
    if (d === 5 || d === 6)
      a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (d !== 4 && (a = a.child, a !== null))
      for (Wj(a, b, c), a = a.sibling;a !== null; )
        Wj(a, b, c), a = a.sibling;
  };
  var Yj = function(a, b, c) {
    for (c = c.child;c !== null; )
      Zj(a, b, c), c = c.sibling;
  };
  var Zj = function(a, b, c) {
    if (lc && typeof lc.onCommitFiberUnmount === "function")
      try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
    switch (c.tag) {
      case 5:
        U2 || Lj(c, b);
      case 6:
        var d = X2, e = Xj;
        X2 = null;
        Yj(a, b, c);
        X2 = d;
        Xj = e;
        X2 !== null && (Xj ? (a = X2, c = c.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
        break;
      case 18:
        X2 !== null && (Xj ? (a = X2, c = c.stateNode, a.nodeType === 8 ? Kf(a.parentNode, c) : a.nodeType === 1 && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
        break;
      case 4:
        d = X2;
        e = Xj;
        X2 = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X2 = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            g !== undefined && ((f & 2) !== 0 ? Mj(c, b, g) : (f & 4) !== 0 && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U2 && (Lj(c, b), d = c.stateNode, typeof d.componentWillUnmount === "function"))
          try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W2(c, b, h);
          }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U2 = (d = U2) || c.memoizedState !== null, Yj(a, b, c), U2 = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  };
  var ak = function(a) {
    var b = a.updateQueue;
    if (b !== null) {
      a.updateQueue = null;
      var c = a.stateNode;
      c === null && (c = a.stateNode = new Kj);
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  };
  var ck = function(a, b) {
    var c = b.deletions;
    if (c !== null)
      for (var d = 0;d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a:
            for (;h !== null; ) {
              switch (h.tag) {
                case 5:
                  X2 = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
          if (X2 === null)
            throw Error(p2(160));
          Zj(f, g, e);
          X2 = null;
          Xj = false;
          var k = e.alternate;
          k !== null && (k.return = null);
          e.return = null;
        } catch (l2) {
          W2(e, b, l2);
        }
      }
    if (b.subtreeFlags & 12854)
      for (b = b.child;b !== null; )
        dk(b, a), b = b.sibling;
  };
  var dk = function(a, b) {
    var { alternate: c, flags: d } = a;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t2) {
            W2(a, a.return, t2);
          }
          try {
            Pj(5, a, a.return);
          } catch (t2) {
            W2(a, a.return, t2);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && c !== null && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && c !== null && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W2(a, a.return, t2);
          }
        }
        if (d & 4 && (e = a.stateNode, e != null)) {
          var f = a.memoizedProps, g = c !== null ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (k !== null)
            try {
              h === "input" && f.type === "radio" && f.name != null && ab(e, f);
              vb(h, g);
              var l2 = vb(h, f);
              for (g = 0;g < k.length; g += 2) {
                var m = k[g], q2 = k[g + 1];
                m === "style" ? sb(e, q2) : m === "dangerouslySetInnerHTML" ? nb(e, q2) : m === "children" ? ob(e, q2) : ta(e, m, q2, l2);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y2 = f.value;
                  y2 != null ? fb(e, !!f.multiple, y2, false) : r2 !== !!f.multiple && (f.defaultValue != null ? fb(e, !!f.multiple, f.defaultValue, true) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t2) {
              W2(a, a.return, t2);
            }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (a.stateNode === null)
            throw Error(p2(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t2) {
            W2(a, a.return, t2);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && c !== null && c.memoizedState.isDehydrated)
          try {
            bd(b.containerInfo);
          } catch (t2) {
            W2(a, a.return, t2);
          }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = e.memoizedState !== null, e.stateNode.isHidden = f, !f || e.alternate !== null && e.alternate.memoizedState !== null || (fk = B2()));
        d & 4 && ak(a);
        break;
      case 22:
        m = c !== null && c.memoizedState !== null;
        a.mode & 1 ? (U2 = (l2 = U2) || m, ck(b, a), U2 = l2) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l2 = a.memoizedState !== null;
          if ((a.stateNode.isHidden = l2) && !m && (a.mode & 1) !== 0)
            for (V2 = a, m = a.child;m !== null; ) {
              for (q2 = V2 = m;V2 !== null; ) {
                r2 = V2;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if (typeof n2.componentWillUnmount === "function") {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W2(d, c, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (r2.memoizedState !== null) {
                      gk(q2);
                      continue;
                    }
                }
                y2 !== null ? (y2.return = r2, V2 = y2) : gk(q2);
              }
              m = m.sibling;
            }
          a:
            for (m = null, q2 = a;; ) {
              if (q2.tag === 5) {
                if (m === null) {
                  m = q2;
                  try {
                    e = q2.stateNode, l2 ? (f = e.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q2.stateNode, k = q2.memoizedProps.style, g = k !== undefined && k !== null && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t2) {
                    W2(a, a.return, t2);
                  }
                }
              } else if (q2.tag === 6) {
                if (m === null)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t2) {
                    W2(a, a.return, t2);
                  }
              } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a) && q2.child !== null) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a)
                break a;
              for (;q2.sibling === null; ) {
                if (q2.return === null || q2.return === a)
                  break a;
                m === q2 && (m = null);
                q2 = q2.return;
              }
              m === q2 && (m = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(b, a), ek(a);
    }
  };
  var ek = function(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return;c !== null; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p2(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k) {
        W2(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  };
  var hk = function(a, b, c) {
    V2 = a;
    ik(a, b, c);
  };
  var ik = function(a, b, c) {
    for (var d = (a.mode & 1) !== 0;V2 !== null; ) {
      var e = V2, f = e.child;
      if (e.tag === 22 && d) {
        var g = e.memoizedState !== null || Jj;
        if (!g) {
          var h = e.alternate, k = h !== null && h.memoizedState !== null || U2;
          h = Jj;
          var l2 = U2;
          Jj = g;
          if ((U2 = k) && !l2)
            for (V2 = e;V2 !== null; )
              g = V2, k = g.child, g.tag === 22 && g.memoizedState !== null ? jk(e) : k !== null ? (k.return = g, V2 = k) : jk(e);
          for (;f !== null; )
            V2 = f, ik(f, b, c), f = f.sibling;
          V2 = e;
          Jj = h;
          U2 = l2;
        }
        kk(a, b, c);
      } else
        (e.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = e, V2 = f) : kk(a, b, c);
    }
  };
  var kk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      if ((b.flags & 8772) !== 0) {
        var c = b.alternate;
        try {
          if ((b.flags & 8772) !== 0)
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U2 || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U2)
                  if (c === null)
                    d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = b.updateQueue;
                f !== null && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (g !== null) {
                  c = null;
                  if (b.child !== null)
                    switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (c === null && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (b.memoizedState === null) {
                  var l2 = b.alternate;
                  if (l2 !== null) {
                    var m = l2.memoizedState;
                    if (m !== null) {
                      var q2 = m.dehydrated;
                      q2 !== null && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p2(163));
            }
          U2 || b.flags & 512 && Rj(b);
        } catch (r2) {
          W2(b, b.return, r2);
        }
      }
      if (b === a) {
        V2 = null;
        break;
      }
      c = b.sibling;
      if (c !== null) {
        c.return = b.return;
        V2 = c;
        break;
      }
      V2 = b.return;
    }
  };
  var gk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      if (b === a) {
        V2 = null;
        break;
      }
      var c = b.sibling;
      if (c !== null) {
        c.return = b.return;
        V2 = c;
        break;
      }
      V2 = b.return;
    }
  };
  var jk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W2(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if (typeof d.componentDidMount === "function") {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W2(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W2(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W2(b, g, k);
            }
        }
      } catch (k) {
        W2(b, b.return, k);
      }
      if (b === a) {
        V2 = null;
        break;
      }
      var h = b.sibling;
      if (h !== null) {
        h.return = b.return;
        V2 = h;
        break;
      }
      V2 = b.return;
    }
  };
  var R2 = function() {
    return (K2 & 6) !== 0 ? B2() : Ak !== -1 ? Ak : Ak = B2();
  };
  var yi = function(a) {
    if ((a.mode & 1) === 0)
      return 1;
    if ((K2 & 2) !== 0 && Z !== 0)
      return Z & -Z;
    if (Kg.transition !== null)
      return Bk === 0 && (Bk = yc()), Bk;
    a = C2;
    if (a !== 0)
      return a;
    a = window.event;
    a = a === undefined ? 16 : jd(a.type);
    return a;
  };
  var gi = function(a, b, c, d) {
    if (50 < yk)
      throw yk = 0, zk = null, Error(p2(185));
    Ac(a, c, d);
    if ((K2 & 2) === 0 || a !== Q2)
      a === Q2 && ((K2 & 2) === 0 && (qk |= c), T2 === 4 && Ck(a, Z)), Dk(a, d), c === 1 && K2 === 0 && (b.mode & 1) === 0 && (Gj = B2() + 500, fg && jg());
  };
  var Dk = function(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q2 ? Z : 0);
    if (d === 0)
      c !== null && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      c != null && bc(c);
      if (b === 1)
        a.tag === 0 ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          (K2 & 6) === 0 && jg();
        }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  };
  var Gk = function(a, b) {
    Ak = -1;
    Bk = 0;
    if ((K2 & 6) !== 0)
      throw Error(p2(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c)
      return null;
    var d = uc(a, a === Q2 ? Z : 0);
    if (d === 0)
      return null;
    if ((d & 30) !== 0 || (d & a.expiredLanes) !== 0 || b)
      b = Ik(a, d);
    else {
      b = d;
      var e = K2;
      K2 |= 2;
      var f = Jk();
      if (Q2 !== a || Z !== b)
        uk = null, Gj = B2() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K2 = e;
      Y !== null ? b = 0 : (Q2 = null, Z = 0, b = T2);
    }
    if (b !== 0) {
      b === 2 && (e = xc(a), e !== 0 && (d = e, b = Nk(a, e)));
      if (b === 1)
        throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
      if (b === 6)
        Ck(a, d);
      else {
        e = a.current.alternate;
        if ((d & 30) === 0 && !Ok(e) && (b = Ik(a, d), b === 2 && (f = xc(a), f !== 0 && (d = f, b = Nk(a, f))), b === 1))
          throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B2(), 10 < b)) {
              if (uc(a, 0) !== 0)
                break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R2();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d)
              break;
            b = a.eventTimes;
            for (e = -1;0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B2() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3000 > d ? 3000 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a, B2());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  };
  var Nk = function(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    a !== 2 && (b = tk, tk = c, b !== null && Fj(b));
    return a;
  };
  var Fj = function(a) {
    tk === null ? tk = a : tk.push.apply(tk, a);
  };
  var Ok = function(a) {
    for (var b = a;; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (c !== null && (c = c.stores, c !== null))
          for (var d = 0;d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e))
                return false;
            } catch (g) {
              return false;
            }
          }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && c !== null)
        c.return = b, b = c;
      else {
        if (b === a)
          break;
        for (;b.sibling === null; ) {
          if (b.return === null || b.return === a)
            return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  };
  var Ck = function(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes;0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  };
  var Ek = function(a) {
    if ((K2 & 6) !== 0)
      throw Error(p2(327));
    Hk();
    var b = uc(a, 0);
    if ((b & 1) === 0)
      return Dk(a, B2()), null;
    var c = Ik(a, b);
    if (a.tag !== 0 && c === 2) {
      var d = xc(a);
      d !== 0 && (b = d, c = Nk(a, d));
    }
    if (c === 1)
      throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B2()), c;
    if (c === 6)
      throw Error(p2(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B2());
    return null;
  };
  var Qk = function(a, b) {
    var c = K2;
    K2 |= 1;
    try {
      return a(b);
    } finally {
      K2 = c, K2 === 0 && (Gj = B2() + 500, fg && jg());
    }
  };
  var Rk = function(a) {
    wk !== null && wk.tag === 0 && (K2 & 6) === 0 && Hk();
    var b = K2;
    K2 |= 1;
    var c = ok.transition, d = C2;
    try {
      if (ok.transition = null, C2 = 1, a)
        return a();
    } finally {
      C2 = d, ok.transition = c, K2 = b, (K2 & 6) === 0 && jg();
    }
  };
  var Hj = function() {
    fj = ej.current;
    E2(ej);
  };
  var Kk = function(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== -1 && (a.timeoutHandle = -1, Gf(c));
    if (Y !== null)
      for (c = Y.return;c !== null; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            d !== null && d !== undefined && $f();
            break;
          case 3:
            zh();
            E2(Wf);
            E2(H2);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E2(L2);
            break;
          case 19:
            E2(L2);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
    Q2 = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T2 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (fh !== null) {
      for (b = 0;b < fh.length; b++)
        if (c = fh[b], d = c.interleaved, d !== null) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (f !== null) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
      fh = null;
    }
    return a;
  };
  var Mk = function(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M2.memoizedState;d !== null; ) {
            var e = d.queue;
            e !== null && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O2 = N2 = M2 = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (c === null || c.return === null) {
          T2 = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (k !== null && typeof k === "object" && typeof k.then === "function") {
            var l2 = k, m = h, q2 = m.tag;
            if ((m.mode & 1) === 0 && (q2 === 0 || q2 === 11 || q2 === 15)) {
              var r2 = m.alternate;
              r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y2 = Ui(g);
            if (y2 !== null) {
              y2.flags &= -257;
              Vi(y2, g, h, f, b);
              y2.mode & 1 && Si(f, l2, b);
              b = y2;
              k = l2;
              var n2 = b.updateQueue;
              if (n2 === null) {
                var t2 = new Set;
                t2.add(k);
                b.updateQueue = t2;
              } else
                n2.add(k);
              break a;
            } else {
              if ((b & 1) === 0) {
                Si(f, l2, b);
                tj();
                break a;
              }
              k = Error(p2(426));
            }
          } else if (I2 && h.mode & 1) {
            var J2 = Ui(g);
            if (J2 !== null) {
              (J2.flags & 65536) === 0 && (J2.flags |= 256);
              Vi(J2, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          T2 !== 4 && (T2 = 2);
          sk === null ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x2 = Ni(f, k, b);
                ph(f, x2);
                break a;
              case 1:
                h = k;
                var { type: w2, stateNode: u2 } = f;
                if ((f.flags & 128) === 0 && (typeof w2.getDerivedStateFromError === "function" || u2 !== null && typeof u2.componentDidCatch === "function" && (Ri === null || !Ri.has(u2)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F2 = Qi(f, h, b);
                  ph(f, F2);
                  break a;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && c !== null && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  };
  var Jk = function() {
    var a = mk.current;
    mk.current = Rh;
    return a === null ? Rh : a;
  };
  var tj = function() {
    if (T2 === 0 || T2 === 3 || T2 === 2)
      T2 = 4;
    Q2 === null || (rh & 268435455) === 0 && (qk & 268435455) === 0 || Ck(Q2, Z);
  };
  var Ik = function(a, b) {
    var c = K2;
    K2 |= 2;
    var d = Jk();
    if (Q2 !== a || Z !== b)
      uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K2 = c;
    mk.current = d;
    if (Y !== null)
      throw Error(p2(261));
    Q2 = null;
    Z = 0;
    return T2;
  };
  var Tk = function() {
    for (;Y !== null; )
      Uk(Y);
  };
  var Lk = function() {
    for (;Y !== null && !cc(); )
      Uk(Y);
  };
  var Uk = function(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    b === null ? Sk(a) : Y = b;
    nk.current = null;
  };
  var Sk = function(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if ((b.flags & 32768) === 0) {
        if (c = Ej(c, b, fj), c !== null) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (c !== null) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (a !== null)
          a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T2 = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (b !== null) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (b !== null);
    T2 === 0 && (T2 = 5);
  };
  var Pk = function(a, b, c) {
    var d = C2, e = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C2 = d;
    }
    return null;
  };
  var Wk = function(a, b, c, d) {
    do
      Hk();
    while (wk !== null);
    if ((K2 & 6) !== 0)
      throw Error(p2(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (c === null)
      return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current)
      throw Error(p2(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q2 && (Y = Q2 = null, Z = 0);
    (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = (c.flags & 15990) !== 0;
    if ((c.subtreeFlags & 15990) !== 0 || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C2;
      C2 = 1;
      var h = K2;
      K2 |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c, a, e);
      dc();
      K2 = h;
      C2 = g;
      ok.transition = f;
    } else
      a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    f === 0 && (Ri = null);
    mc(c.stateNode, d);
    Dk(a, B2());
    if (b !== null)
      for (d = a.onRecoverableError, c = 0;c < b.length; c++)
        e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi)
      throw Oi = false, a = Pi, Pi = null, a;
    (xk & 1) !== 0 && a.tag !== 0 && Hk();
    f = a.pendingLanes;
    (f & 1) !== 0 ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  };
  var Hk = function() {
    if (wk !== null) {
      var a = Dc(xk), b = ok.transition, c = C2;
      try {
        ok.transition = null;
        C2 = 16 > a ? 16 : a;
        if (wk === null)
          var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if ((K2 & 6) !== 0)
            throw Error(p2(331));
          var e = K2;
          K2 |= 4;
          for (V2 = a.current;V2 !== null; ) {
            var f = V2, g = f.child;
            if ((V2.flags & 16) !== 0) {
              var h = f.deletions;
              if (h !== null) {
                for (var k = 0;k < h.length; k++) {
                  var l2 = h[k];
                  for (V2 = l2;V2 !== null; ) {
                    var m = V2;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q2 = m.child;
                    if (q2 !== null)
                      q2.return = m, V2 = q2;
                    else
                      for (;V2 !== null; ) {
                        m = V2;
                        var { sibling: r2, return: y2 } = m;
                        Sj(m);
                        if (m === l2) {
                          V2 = null;
                          break;
                        }
                        if (r2 !== null) {
                          r2.return = y2;
                          V2 = r2;
                          break;
                        }
                        V2 = y2;
                      }
                  }
                }
                var n2 = f.alternate;
                if (n2 !== null) {
                  var t2 = n2.child;
                  if (t2 !== null) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (t2 !== null);
                  }
                }
                V2 = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && g !== null)
              g.return = f, V2 = g;
            else
              b:
                for (;V2 !== null; ) {
                  f = V2;
                  if ((f.flags & 2048) !== 0)
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(9, f, f.return);
                    }
                  var x2 = f.sibling;
                  if (x2 !== null) {
                    x2.return = f.return;
                    V2 = x2;
                    break b;
                  }
                  V2 = f.return;
                }
          }
          var w2 = a.current;
          for (V2 = w2;V2 !== null; ) {
            g = V2;
            var u2 = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && u2 !== null)
              u2.return = g, V2 = u2;
            else
              b:
                for (g = w2;V2 !== null; ) {
                  h = V2;
                  if ((h.flags & 2048) !== 0)
                    try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, h);
                      }
                    } catch (na) {
                      W2(h, h.return, na);
                    }
                  if (h === g) {
                    V2 = null;
                    break b;
                  }
                  var F2 = h.sibling;
                  if (F2 !== null) {
                    F2.return = h.return;
                    V2 = F2;
                    break b;
                  }
                  V2 = h.return;
                }
          }
          K2 = e;
          jg();
          if (lc && typeof lc.onPostCommitFiberRoot === "function")
            try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
          d = true;
        }
        return d;
      } finally {
        C2 = c, ok.transition = b;
      }
    }
    return false;
  };
  var Xk = function(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R2();
    a !== null && (Ac(a, 1, b), Dk(a, b));
  };
  var W2 = function(a, b, c) {
    if (a.tag === 3)
      Xk(a, a, c);
    else
      for (;b !== null; ) {
        if (b.tag === 3) {
          Xk(b, a, c);
          break;
        } else if (b.tag === 1) {
          var d = b.stateNode;
          if (typeof b.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ri === null || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R2();
            b !== null && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
  };
  var Ti = function(a, b, c) {
    var d = a.pingCache;
    d !== null && d.delete(b);
    b = R2();
    a.pingedLanes |= a.suspendedLanes & c;
    Q2 === a && (Z & c) === c && (T2 === 4 || T2 === 3 && (Z & 130023424) === Z && 500 > B2() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  };
  var Yk = function(a, b) {
    b === 0 && ((a.mode & 1) === 0 ? b = 1 : (b = sc, sc <<= 1, (sc & 130023424) === 0 && (sc = 4194304)));
    var c = R2();
    a = ih(a, b);
    a !== null && (Ac(a, b, c), Dk(a, c));
  };
  var uj = function(a) {
    var b = a.memoizedState, c = 0;
    b !== null && (c = b.retryLane);
    Yk(a, c);
  };
  var bk = function(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        e !== null && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    d !== null && d.delete(b);
    Yk(a, c);
  };
  var Fk = function(a, b) {
    return ac(a, b);
  };
  var $k = function(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  };
  var Bg = function(a, b, c, d) {
    return new $k(a, b, c, d);
  };
  var aj = function(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  };
  var Zk = function(a) {
    if (typeof a === "function")
      return aj(a) ? 1 : 0;
    if (a !== undefined && a !== null) {
      a = a.$$typeof;
      if (a === Da)
        return 11;
      if (a === Ga)
        return 14;
    }
    return 2;
  };
  var Pg = function(a, b) {
    var c = a.alternate;
    c === null ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  };
  var Rg = function(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if (typeof a === "function")
      aj(a) && (g = 1);
    else if (typeof a === "string")
      g = 5;
    else
      a:
        switch (a) {
          case ya:
            return Tg(c.children, e, f, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
          case Ia:
            return pj(c, e, f, b);
          default:
            if (typeof a === "object" && a !== null)
              switch (a.$$typeof) {
                case Ba:
                  g = 10;
                  break a;
                case Ca:
                  g = 9;
                  break a;
                case Da:
                  g = 11;
                  break a;
                case Ga:
                  g = 14;
                  break a;
                case Ha:
                  g = 16;
                  d = null;
                  break a;
              }
            throw Error(p2(130, a == null ? a : typeof a, ""));
        }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  };
  var Tg = function(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  };
  var pj = function(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  };
  var Qg = function(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  };
  var Sg = function(a, b, c) {
    b = Bg(4, a.children !== null ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  };
  var al = function(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  };
  var bl = function(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    b === 1 ? (b = 1, f === true && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  };
  var cl = function(a, b, c) {
    var d = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
    return { $$typeof: wa, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
  };
  var dl = function(a) {
    if (!a)
      return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || a.tag !== 1)
        throw Error(p2(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (b !== null);
      throw Error(p2(171));
    }
    if (a.tag === 1) {
      var c = a.type;
      if (Zf(c))
        return bg(a, c, b);
    }
    return b;
  };
  var el = function(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R2();
    e = yi(c);
    f = mh(d, e);
    f.callback = b !== undefined && b !== null ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  };
  var fl = function(a, b, c, d) {
    var e = b.current, f = R2(), g = yi(e);
    c = dl(c);
    b.context === null ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = d === undefined ? null : d;
    d !== null && (b.callback = d);
    a = nh(e, b, g);
    a !== null && (gi(a, e, g, f), oh(a, e, g));
    return g;
  };
  var gl = function(a) {
    a = a.current;
    if (!a.child)
      return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  };
  var hl = function(a, b) {
    a = a.memoizedState;
    if (a !== null && a.dehydrated !== null) {
      var c = a.retryLane;
      a.retryLane = c !== 0 && c < b ? c : b;
    }
  };
  var il = function(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  };
  var jl = function() {
    return null;
  };
  var ll = function(a) {
    this._internalRoot = a;
  };
  var ml = function(a) {
    this._internalRoot = a;
  };
  var nl = function(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
  };
  var ol = function(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
  };
  var pl = function() {
  };
  var ql = function(a, b, c, d, e) {
    if (e) {
      if (typeof d === "function") {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(a.nodeType === 8 ? a.parentNode : a);
      Rk();
      return g;
    }
    for (;e = a.lastChild; )
      a.removeChild(e);
    if (typeof d === "function") {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  };
  var rl = function(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof e === "function") {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else
      g = ql(c, b, a, e, d);
    return gl(g);
  };
  var da = new Set;
  var ea = {};
  var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
  var ja = Object.prototype.hasOwnProperty;
  var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var la = {};
  var ma = {};
  var z2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z2[a] = new v2(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z2[b] = new v2(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z2[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z2[a] = new v2(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z2[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z2[a] = new v2(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z2[a] = new v2(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z2[a] = new v2(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z2[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z2[b] = new v2(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z2[b] = new v2(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z2[b] = new v2(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z2[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z2[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
  });
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var va = Symbol.for("react.element");
  var wa = Symbol.for("react.portal");
  var ya = Symbol.for("react.fragment");
  var za = Symbol.for("react.strict_mode");
  var Aa = Symbol.for("react.profiler");
  var Ba = Symbol.for("react.provider");
  var Ca = Symbol.for("react.context");
  var Da = Symbol.for("react.forward_ref");
  var Ea = Symbol.for("react.suspense");
  var Fa = Symbol.for("react.suspense_list");
  var Ga = Symbol.for("react.memo");
  var Ha = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var Ia = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var Ja = Symbol.iterator;
  var A2 = Object.assign;
  var La;
  var Na = false;
  var eb = Array.isArray;
  var mb;
  var nb = function(a) {
    return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
      a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild;a.firstChild; )
        a.removeChild(a.firstChild);
      for (;b.firstChild; )
        a.appendChild(b.firstChild);
    }
  });
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  var wb = null;
  var yb = null;
  var zb = null;
  var Ab = null;
  var Ib = false;
  var Lb = false;
  if (ia)
    try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
  var Mb;
  var Ob = false;
  var Pb = null;
  var Qb = false;
  var Rb = null;
  var Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  var ac = ca.unstable_scheduleCallback;
  var bc = ca.unstable_cancelCallback;
  var cc = ca.unstable_shouldYield;
  var dc = ca.unstable_requestPaint;
  var B2 = ca.unstable_now;
  var ec = ca.unstable_getCurrentPriorityLevel;
  var fc = ca.unstable_ImmediatePriority;
  var gc = ca.unstable_UserBlockingPriority;
  var hc = ca.unstable_NormalPriority;
  var ic = ca.unstable_LowPriority;
  var jc = ca.unstable_IdlePriority;
  var kc = null;
  var lc = null;
  var oc = Math.clz32 ? Math.clz32 : nc;
  var pc = Math.log;
  var qc = Math.LN2;
  var rc = 64;
  var sc = 4194304;
  var C2 = 0;
  var Ec;
  var Fc;
  var Gc;
  var Hc;
  var Ic;
  var Jc = false;
  var Kc = [];
  var Lc = null;
  var Mc = null;
  var Nc = null;
  var Oc = new Map;
  var Pc = new Map;
  var Qc = [];
  var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  var cd = ua.ReactCurrentBatchConfig;
  var dd = true;
  var id = null;
  var kd = null;
  var ld = null;
  var md = null;
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 };
  var td = rd(sd);
  var ud = A2({}, sd, { view: 0, detail: 0 });
  var vd = rd(ud);
  var wd;
  var xd;
  var yd;
  var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return a.relatedTarget === undefined ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } });
  var Bd = rd(Ad);
  var Cd = A2({}, Ad, { dataTransfer: 0 });
  var Dd = rd(Cd);
  var Ed = A2({}, ud, { relatedTarget: 0 });
  var Fd = rd(Ed);
  var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Hd = rd(Gd);
  var Id = A2({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } });
  var Jd = rd(Id);
  var Kd = A2({}, sd, { data: 0 });
  var Ld = rd(Kd);
  var Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  };
  var Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  var Qd = A2({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if (b !== "Unidentified")
        return b;
    }
    return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return a.type === "keypress" ? od(a) : 0;
  }, keyCode: function(a) {
    return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  }, which: function(a) {
    return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  } });
  var Rd = rd(Qd);
  var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  var Td = rd(Sd);
  var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
  var Vd = rd(Ud);
  var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Xd = rd(Wd);
  var Yd = A2({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : ("wheelDeltaX" in a) ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : ("wheelDeltaY" in a) ? -a.wheelDeltaY : ("wheelDelta" in a) ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Zd = rd(Yd);
  var $d = [9, 13, 27, 32];
  var ae = ia && "CompositionEvent" in window;
  var be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be;
  var de = ia && (!ae || be && 8 < be && 11 >= be);
  var ee = String.fromCharCode(32);
  var fe = false;
  var ie = false;
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  var pe = null;
  var qe = null;
  var we = false;
  if (ia) {
    if (ia) {
      ye = "oninput" in document;
      if (!ye) {
        ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = typeof ze.oninput === "function";
      }
      xe = ye;
    } else
      xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  var xe;
  var ye;
  var ze;
  var He = typeof Object.is === "function" ? Object.is : Ge;
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
  var Qe = null;
  var Re = null;
  var Se = null;
  var Te = false;
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
  var Xe = {};
  var Ye = {};
  ia && (Ye = document.createElement("div").style, ("AnimationEvent" in window) || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), ("TransitionEvent" in window) || delete We.transitionend.transition);
  var $e = Ze("animationend");
  var af = Ze("animationiteration");
  var bf = Ze("animationstart");
  var cf = Ze("transitionend");
  var df = new Map;
  var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  for (gf = 0;gf < ef.length; gf++) {
    hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  var hf;
  var jf;
  var kf;
  var gf;
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  var xf = /\r\n?/g;
  var yf = /\u0000|\uFFFD/g;
  var Cf = null;
  var Df = null;
  var Ff = typeof setTimeout === "function" ? setTimeout : undefined;
  var Gf = typeof clearTimeout === "function" ? clearTimeout : undefined;
  var Hf = typeof Promise === "function" ? Promise : undefined;
  var Jf = typeof queueMicrotask === "function" ? queueMicrotask : typeof Hf !== "undefined" ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  var Nf = Math.random().toString(36).slice(2);
  var Of = "__reactFiber$" + Nf;
  var Pf = "__reactProps$" + Nf;
  var uf = "__reactContainer$" + Nf;
  var of = "__reactEvents$" + Nf;
  var Qf = "__reactListeners$" + Nf;
  var Rf = "__reactHandles$" + Nf;
  var Sf = [];
  var Tf = -1;
  var Vf = {};
  var H2 = Uf(Vf);
  var Wf = Uf(false);
  var Xf = Vf;
  var eg = null;
  var fg = false;
  var gg = false;
  var kg = [];
  var lg = 0;
  var mg = null;
  var ng = 0;
  var og = [];
  var pg = 0;
  var qg = null;
  var rg = 1;
  var sg = "";
  var xg = null;
  var yg = null;
  var I2 = false;
  var zg = null;
  var Kg = ua.ReactCurrentBatchConfig;
  var Ug = Og(true);
  var Vg = Og(false);
  var Wg = Uf(null);
  var Xg = null;
  var Yg = null;
  var Zg = null;
  var fh = null;
  var jh = false;
  var th = {};
  var uh = Uf(th);
  var vh = Uf(th);
  var wh = Uf(th);
  var L2 = Uf(0);
  var Dh = [];
  var Fh = ua.ReactCurrentDispatcher;
  var Gh = ua.ReactCurrentBatchConfig;
  var Hh = 0;
  var M2 = null;
  var N2 = null;
  var O2 = null;
  var Ih = false;
  var Jh = false;
  var Kh = 0;
  var Lh = 0;
  var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
  var Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, b === undefined ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = c !== null && c !== undefined ? c.concat([a]) : null;
    return ki(4194308, 4, pi.bind(null, b, a), c);
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = b === undefined ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = c !== undefined ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M2, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M2, e = Th();
    if (I2) {
      if (c === undefined)
        throw Error(p2(407));
      c = c();
    } else {
      c = b();
      if (Q2 === null)
        throw Error(p2(349));
      (Hh & 30) !== 0 || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(null, d, f, a), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), undefined, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q2.identifierPrefix;
    if (I2) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else
      c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false };
  var Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N2.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  };
  var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return N2 === null ? b.memoizedState = a : ui(b, N2.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R2(), e = yi(a), f = mh(d, e);
    f.payload = b;
    c !== undefined && c !== null && (f.callback = c);
    b = nh(a, f, e);
    b !== null && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R2(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    c !== undefined && c !== null && (f.callback = c);
    b = nh(a, f, e);
    b !== null && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R2(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    b !== undefined && b !== null && (e.callback = b);
    b = nh(a, e, d);
    b !== null && (gi(b, a, d, c), oh(b, a, d));
  } };
  var Mi = typeof WeakMap === "function" ? WeakMap : Map;
  var Wi = ua.ReactCurrentOwner;
  var dh = false;
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  var zj;
  var Aj;
  var Bj;
  var Cj;
  zj = function(a, b) {
    for (var c = b.child;c !== null; ) {
      if (c.tag === 5 || c.tag === 6)
        a.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (;c.sibling === null; ) {
        if (c.return === null || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A2({}, e, { value: undefined });
          d = A2({}, d, { value: undefined });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l2 in e)
        if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
          if (l2 === "style") {
            var h = e[l2];
            for (g in h)
              h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else
            l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
      for (l2 in d) {
        var k = d[l2];
        h = e != null ? e[l2] : undefined;
        if (d.hasOwnProperty(l2) && k !== h && (k != null || h != null))
          if (l2 === "style")
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k)
                k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else
              c || (f || (f = []), f.push(l2, c)), c = k;
          else
            l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : undefined, h = h ? h.__html : undefined, k != null && h !== k && (f = f || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && D2("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l2, k));
      }
      c && (f = f || []).push("style", c);
      var l2 = f;
      if (b.updateQueue = l2)
        b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  var Jj = false;
  var U2 = false;
  var Kj = typeof WeakSet === "function" ? WeakSet : Set;
  var V2 = null;
  var Nj = false;
  var X2 = null;
  var Xj = false;
  var lk = Math.ceil;
  var mk = ua.ReactCurrentDispatcher;
  var nk = ua.ReactCurrentOwner;
  var ok = ua.ReactCurrentBatchConfig;
  var K2 = 0;
  var Q2 = null;
  var Y = null;
  var Z = 0;
  var fj = 0;
  var ej = Uf(0);
  var T2 = 0;
  var pk = null;
  var rh = 0;
  var qk = 0;
  var rk = 0;
  var sk = null;
  var tk = null;
  var fk = 0;
  var Gj = Infinity;
  var uk = null;
  var Oi = false;
  var Pi = null;
  var Ri = null;
  var vk = false;
  var wk = null;
  var xk = 0;
  var yk = 0;
  var zk = null;
  var Ak = -1;
  var Bk = 0;
  var Vk;
  Vk = function(a, b, c) {
    if (a !== null)
      if (a.memoizedProps !== b.pendingProps || Wf.current)
        dh = true;
      else {
        if ((a.lanes & c) === 0 && (b.flags & 128) === 0)
          return dh = false, yj(a, b, c);
        dh = (a.flags & 131072) !== 0 ? true : false;
      }
    else
      dh = false, I2 && (b.flags & 1048576) !== 0 && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H2.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === undefined ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = e.state !== null && e.state !== undefined ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I2 && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p2(306, d, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (a === null)
            throw Error(p2(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated)
            if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p2(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p2(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else
              for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c = Vg(b, null, d, c), b.child = c;c; )
                c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), a === null && Eg(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : f !== null && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return a === null && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G2(Wg, d._currentValue);
          d._currentValue = g;
          if (f !== null)
            if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else
              for (f = b.child, f !== null && (f.return = b);f !== null; ) {
                var h = f.dependencies;
                if (h !== null) {
                  g = f.child;
                  for (var k = h.firstContext;k !== null; ) {
                    if (k.context === d) {
                      if (f.tag === 1) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l2 = f.updateQueue;
                        if (l2 !== null) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          m === null ? k.next = k : (k.next = m.next, m.next = k);
                          l2.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      k !== null && (k.lanes |= c);
                      bh(f.return, c, b);
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (f.tag === 10)
                  g = f.type === b.type ? null : f.child;
                else if (f.tag === 18) {
                  g = f.return;
                  if (g === null)
                    throw Error(p2(341));
                  g.lanes |= c;
                  h = g.alternate;
                  h !== null && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else
                  g = f.child;
                if (g !== null)
                  g.return = f;
                else
                  for (g = f;g !== null; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    f = g.sibling;
                    if (f !== null) {
                      f.return = g.return;
                      g = f;
                      break;
                    }
                    g = g.return;
                  }
                f = g;
              }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p2(156, b.tag));
  };
  var kl = typeof reportError === "function" ? reportError : function(a) {
    console.error(a);
  };
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (b === null)
      throw Error(p2(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0;c < Qc.length && b !== 0 && b < Qc[c].priority; c++)
        ;
      Qc.splice(c, 0, a);
      c === 0 && Vc(a);
    }
  };
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          c !== 0 && (Cc(b, c | 1), Dk(b, B2()), (K2 & 6) === 0 && (Gj = B2() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (b2 !== null) {
            var c2 = R2();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (a.tag === 13) {
      var b = ih(a, 134217728);
      if (b !== null) {
        var c = R2();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (a.tag === 13) {
      var b = yi(a), c = ih(a, b);
      if (c !== null) {
        var d = R2();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a, b) {
    var c = C2;
    try {
      return C2 = a, b();
    } finally {
      C2 = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if (c.type === "radio" && b != null) {
          for (c = a;c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0;b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e)
                throw Error(p2(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, b != null && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
  var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return a === null ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber)
      try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
  }
  var vl;
  $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = sl;
  $createPortal = function(a, b) {
    var c = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
    if (!nl(b))
      throw Error(p2(200));
    return cl(a, b, null, c);
  };
  $createRoot = function(a, b) {
    if (!nl(a))
      throw Error(p2(299));
    var c = false, d = "", e = kl;
    b !== null && b !== undefined && (b.unstable_strictMode === true && (c = true), b.identifierPrefix !== undefined && (d = b.identifierPrefix), b.onRecoverableError !== undefined && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    return new ll(b);
  };
  $findDOMNode = function(a) {
    if (a == null)
      return null;
    if (a.nodeType === 1)
      return a;
    var b = a._reactInternals;
    if (b === undefined) {
      if (typeof a.render === "function")
        throw Error(p2(188));
      a = Object.keys(a).join(",");
      throw Error(p2(268, a));
    }
    a = Zb(b);
    a = a === null ? null : a.stateNode;
    return a;
  };
  $flushSync = function(a) {
    return Rk(a);
  };
  $hydrate = function(a, b, c) {
    if (!ol(b))
      throw Error(p2(200));
    return rl(null, a, b, true, c);
  };
  $hydrateRoot = function(a, b, c) {
    if (!nl(a))
      throw Error(p2(405));
    var d = c != null && c.hydratedSources || null, e = false, f = "", g = kl;
    c !== null && c !== undefined && (c.unstable_strictMode === true && (e = true), c.identifierPrefix !== undefined && (f = c.identifierPrefix), c.onRecoverableError !== undefined && (g = c.onRecoverableError));
    b = el(b, null, a, 1, c != null ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d)
      for (a = 0;a < d.length; a++)
        c = d[a], e = c._getVersion, e = e(c._source), b.mutableSourceEagerHydrationData == null ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
    return new ml(b);
  };
  $render = function(a, b, c) {
    if (!ol(b))
      throw Error(p2(200));
    return rl(null, a, b, false, c);
  };
  $unmountComponentAtNode = function(a) {
    if (!ol(a))
      throw Error(p2(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  $unstable_batchedUpdates = Qk;
  $unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c))
      throw Error(p2(200));
    if (a == null || a._reactInternals === undefined)
      throw Error(p2(38));
    return rl(a, b, c, false, d);
  };
  $version2 = "18.3.1-next-f1338f8080-20240426";
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  init_react_dom_production_min();
  var checkDCE = function() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    if (false) {
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  };
  if (true) {
    checkDCE();
    module.exports = exports_react_dom_production_min;
  } else {
  }
});

// ../../node_modules/react-dom/client.js
var require_client = __commonJS((exports) => {
  var m = __toESM(require_react_dom(), 1);
  if (true) {
    exports.createRoot = m.createRoot;
    exports.hydrateRoot = m.hydrateRoot;
  } else {
  }
  var i;
});

// ../../node_modules/react/cjs/react-jsx-runtime.production.min.js
var exports_react_jsx_runtime_production_min = {};
__export(exports_react_jsx_runtime_production_min, {
  jsxs: () => {
    {
      return $jsxs;
    }
  },
  jsx: () => {
    {
      return $jsx;
    }
  },
  Fragment: () => {
    {
      return $Fragment2;
    }
  }
});
var $Fragment2, $jsx, $jsxs;
var init_react_jsx_runtime_production_min = __esm(() => {
  var f = __toESM(require_react(), 1);
  var q2 = function(c, a, g) {
    var b, d = {}, e = null, h = null;
    g !== undefined && (e = "" + g);
    a.key !== undefined && (e = "" + a.key);
    a.ref !== undefined && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p3.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        d[b] === undefined && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n2.current };
  };
  var k = Symbol.for("react.element");
  var l2 = Symbol.for("react.fragment");
  var m = Object.prototype.hasOwnProperty;
  var n2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var p3 = { key: true, ref: true, __self: true, __source: true };
  $Fragment2 = l2;
  $jsx = q2;
  $jsxs = q2;
});

// ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS((exports, module) => {
  init_react_jsx_runtime_production_min();
  if (true) {
    module.exports = exports_react_jsx_runtime_production_min;
  } else {
  }
});

// web/main.tsx
var client4 = __toESM(require_client(), 1);

// ../../packages/pcall/src/proxy.ts
function createProxy(callback, path = []) {
  return new Proxy(() => {
  }, {
    get(_targ, key) {
      if (typeof key !== "string" || key === "then") {
        return;
      }
      return createProxy(callback, [...path, key]);
    },
    apply(_targ, _thisArg, args) {
      const isApply = path[path.length - 1] === "apply";
      return callback(isApply ? path.slice(0, -1) : path, isApply ? args.length >= 2 ? args[1] : [] : args);
    }
  });
}

// ../../packages/pcall/src/error.ts
function error(status, message) {
  return new RPCError(status, message);
}

class RPCError {
  name = "RPCError";
  status;
  code;
  message;
  constructor(status, message) {
    this.status = status;
    this.code = RPC_ERROR_CODES_BY_STATUS[status];
    this.message = message;
  }
  toJSON() {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    };
  }
}
var RPC_ERROR_CODES_BY_STATUS = {
  PARSE_ERROR: 418,
  INPUT_PARSE_ERROR: 418,
  OUTPUT_PARSE_ERROR: 418,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499
};

// ../../packages/pcall/src/util.ts
function isObj(value) {
  return value !== null && typeof value === "object";
}
function isFn(value) {
  return typeof value === "function";
}
function isLiteral(value) {
  return typeof value === "string" || typeof value === "number";
}

// ../../packages/pcall/src/procedure.ts
var $procedure = Symbol("procedure");

// ../../packages/pcall/src/router.ts
var $router = Symbol("router");

// ../../packages/pcall/src/rpc.ts
class RPCRequest {
  id;
  jsonrpc = "2.0";
  method;
  params;
  constructor(id2, method, params) {
    this.id = id2;
    this.method = method;
    this.params = params;
  }
  static async from(what) {
    try {
      return await what.json();
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw error("PARSE_ERROR");
      }
      throw err;
    }
  }
}

class RPCResponse {
  id;
  jsonrpc = "2.0";
  result;
  error;
  constructor(id2, result, error5) {
    this.id = id2;
    this.result = result;
    this.error = error5;
  }
  static error(id2, err) {
    if (!(err instanceof RPCError)) {
      throw err;
    }
    return new RPCResponse(id2, undefined, err);
  }
  static async from(what) {
    try {
      return await what.json();
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw error("PARSE_ERROR");
      }
      throw err;
    }
  }
}

// ../../packages/pcall/src/ws/client.ts
var parse = function(values) {
  return values.map((arg) => {
    if (isObj(arg)) {
      return { type: "object", value: JSON.stringify(arg) };
    }
    if (isFn(arg)) {
      return { type: "function", value: arg.toString() };
    }
    if (isLiteral(arg)) {
      return { type: "literal", value: arg };
    }
    throw new Error(`Unsupported type ${typeof arg} for value ${arg}`);
  });
};

class SocketClient {
  ws;
  events = new Map;
  constructor(url) {
    this.ws = new WebSocket(url);
    this.setup();
  }
  get connected() {
    return this.ws.readyState === WebSocket.OPEN;
  }
  setup() {
    this.ws.onopen = () => {
      this.events.get("connect")?.();
    };
    this.ws.onclose = () => {
      this.events.get("disconnect")?.();
    };
    this.ws.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      const handler = this.events.get(message.event);
      if (!handler) {
        throw new Error(`Event ${message.event} not found`);
      }
      handler(...message.payload);
    };
    this.ws.onerror = (err) => {
      console.error(err);
    };
  }
  emit(event, ...args) {
    if (!this.connected) {
      throw new Error("Socket is not open");
    }
    const payload = parse(args);
    this.ws.send(JSON.stringify({ event, payload }));
  }
  on(event, callback) {
    this.events.set(event, callback);
  }
  off(event) {
    this.events.delete(event);
  }
  close() {
    this.ws.close();
  }
}

// ../../packages/pcall/src/client.ts
function client2(url, opts = {}) {
  const loggerx = (isFn(opts.logger) ? opts.logger() : opts.logger) ? logger : undefined;
  const batch = opts.link === "batch" ? new Batch(url + "?batch", loggerx, opts.batch) : null;
  return createProxy((path, args) => {
    if (path.length === 1 && path[0] === "$ws") {
      return new SocketClient(wsUrl(url));
    }
    const method = path.join(".");
    const params = args[0];
    return batch ? batch.addRequest(method, params) : linear(url, method, params, loggerx);
  });
}
async function _fetch(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  });
  return RPCResponse.from(res);
}
async function linear(url, method, params, logger) {
  const request = new RPCRequest(1, method, params);
  logger?.info(request.method, request);
  const response = await _fetch(url, request);
  if ("error" in response) {
    logger?.error(request.method, response);
    throw response.error;
  }
  logger?.ok(request.method, response);
  return response.result;
}
var wsUrl = function(url) {
  return url.replace(/(http:\/\/|https:\/\/)/, "ws://") + "/ws";
};
var css = function(styles) {
  return Object.entries(styles).map(([k, v3]) => `${k}: ${v3}`).join("; ");
};
var log = function(dir, method, data, color = "gray") {
  console.log(`%c %s %s %O`, styles + `;background: ${colors[color]}`, dir === "up" ? ">>" : "<<", method, data);
};
var MAX = 10;
var TIMEOUT = 100;

class Batch {
  url;
  max;
  timeout;
  timeoutId = null;
  requestId = 0;
  requests = [];
  pendingRequests = new Map;
  logger;
  constructor(url, logger, opts = {}) {
    this.url = url;
    this.max = opts.max ?? MAX;
    this.timeout = opts.timeout ?? TIMEOUT;
    this.logger = logger;
  }
  addRequest(method, params) {
    const req = new RPCRequest(this.requestId++, method, params);
    this.requests.push(req);
    const promise = new Promise((resolve, reject) => {
      this.pendingRequests.set(req.id, { resolve, reject });
    });
    if (this.requests.length >= this.max) {
      this.debug(`== max reached | requests: ${this.requests.length} ==`);
      if (this.timeoutId) {
        this.debug(`== clearing timeout | requests: ${this.requests.length} ==`);
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
      this.send();
    } else if (!this.timeoutId) {
      this.debug(`== setting timeout | requests: ${this.requests.length} ==`);
      this.timeoutId = setTimeout(() => {
        this.send();
        this.timeoutId = null;
      }, this.timeout);
    }
    return promise;
  }
  async send() {
    const batch = this.requests.slice();
    this.requests.length = 0;
    this.debug(`== sending batch | requests: ${batch.length} ==`);
    if (batch.length === 0)
      return;
    this.logger?.info("batch", batch);
    try {
      const responses = await _fetch(this.url, batch);
      for (const { id: id2, result, error: error5 } of responses) {
        const request = this.pendingRequests.get(id2);
        if (!request) {
          this.logger?.error("batch", { id: id2, result, error: error5 });
          console.error("No pending request with ID", id2);
          continue;
        }
        if (error5) {
          this.logger?.error("batch", { id: id2, result, error: error5 });
          request.reject(error5);
        } else {
          this.logger?.ok("batch", { id: id2, result, error: error5 });
          request.resolve(result);
        }
        this.pendingRequests.delete(id2);
      }
    } catch (err) {
      for (const { reject } of this.pendingRequests.values()) {
        reject(err);
      }
      this.pendingRequests.clear();
    }
  }
  debug(...msg) {
    if (true)
      console.log(...msg);
  }
}
var styles = css({
  padding: "2px 2px",
  color: "black",
  ["border-radius"]: "4px"
});
var colors = {
  gray: "rgba(100, 100, 100, 0.2)",
  blue: "#add8e6",
  green: "#90ee90",
  red: "#ffcccb"
};
var logger = {
  info: (m, d) => log("up", m, d, "blue"),
  ok: (m, d) => log("down", m, d, "green"),
  error: (m, d) => log("down", m, d, "red")
};

// web/app.tsx
var import_react = __toESM(require_react(), 1);

// node_modules/chess.js/dist/esm/chess.js
var rank = function(square) {
  return square >> 4;
};
var file = function(square) {
  return square & 15;
};
var isDigit = function(c) {
  return "0123456789".indexOf(c) !== -1;
};
var algebraic = function(square) {
  const f = file(square);
  const r2 = rank(square);
  return "abcdefgh".substring(f, f + 1) + "87654321".substring(r2, r2 + 1);
};
var swapColor = function(color) {
  return color === WHITE ? BLACK : WHITE;
};
function validateFen(fen) {
  const tokens = fen.split(/\s+/);
  if (tokens.length !== 6) {
    return {
      ok: false,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  }
  const moveNumber = parseInt(tokens[5], 10);
  if (isNaN(moveNumber) || moveNumber <= 0) {
    return {
      ok: false,
      error: "Invalid FEN: move number must be a positive integer"
    };
  }
  const halfMoves = parseInt(tokens[4], 10);
  if (isNaN(halfMoves) || halfMoves < 0) {
    return {
      ok: false,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  }
  if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
    return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
  }
  if (/[^kKqQ-]/.test(tokens[2])) {
    return { ok: false, error: "Invalid FEN: castling availability is invalid" };
  }
  if (!/^(w|b)$/.test(tokens[1])) {
    return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
  }
  const rows = tokens[0].split("/");
  if (rows.length !== 8) {
    return {
      ok: false,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  }
  for (let i = 0;i < rows.length; i++) {
    let sumFields = 0;
    let previousWasNumber = false;
    for (let k = 0;k < rows[i].length; k++) {
      if (isDigit(rows[i][k])) {
        if (previousWasNumber) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        }
        sumFields += parseInt(rows[i][k], 10);
        previousWasNumber = true;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        }
        sumFields += 1;
        previousWasNumber = false;
      }
    }
    if (sumFields !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
    }
  }
  if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
    return { ok: false, error: "Invalid FEN: illegal en-passant square" };
  }
  const kings = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color, regex } of kings) {
    if (!regex.test(tokens[0])) {
      return { ok: false, error: `Invalid FEN: missing ${color} king` };
    }
    if ((tokens[0].match(regex) || []).length > 1) {
      return { ok: false, error: `Invalid FEN: too many ${color} kings` };
    }
  }
  if (Array.from(rows[0] + rows[7]).some((char) => char.toUpperCase() === "P")) {
    return {
      ok: false,
      error: "Invalid FEN: some pawns are on the edge rows"
    };
  }
  return { ok: true };
}
var getDisambiguator = function(move, moves) {
  const from = move.from;
  const to = move.to;
  const piece = move.piece;
  let ambiguities = 0;
  let sameRank = 0;
  let sameFile = 0;
  for (let i = 0, len = moves.length;i < len; i++) {
    const ambigFrom = moves[i].from;
    const ambigTo = moves[i].to;
    const ambigPiece = moves[i].piece;
    if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
      ambiguities++;
      if (rank(from) === rank(ambigFrom)) {
        sameRank++;
      }
      if (file(from) === file(ambigFrom)) {
        sameFile++;
      }
    }
  }
  if (ambiguities > 0) {
    if (sameRank > 0 && sameFile > 0) {
      return algebraic(from);
    } else if (sameFile > 0) {
      return algebraic(from).charAt(1);
    } else {
      return algebraic(from).charAt(0);
    }
  }
  return "";
};
var addMove = function(moves, color, from, to, piece, captured = undefined, flags = BITS.NORMAL) {
  const r2 = rank(to);
  if (piece === PAWN && (r2 === RANK_1 || r2 === RANK_8)) {
    for (let i = 0;i < PROMOTIONS.length; i++) {
      const promotion = PROMOTIONS[i];
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion,
        flags: flags | BITS.PROMOTION
      });
    }
  } else {
    moves.push({
      color,
      from,
      to,
      piece,
      captured,
      flags
    });
  }
};
var inferPieceType = function(san) {
  let pieceType = san.charAt(0);
  if (pieceType >= "a" && pieceType <= "h") {
    const matches = san.match(/[a-h]\d.*[a-h]\d/);
    if (matches) {
      return;
    }
    return PAWN;
  }
  pieceType = pieceType.toLowerCase();
  if (pieceType === "o") {
    return KING;
  }
  return pieceType;
};
var strippedSan = function(move) {
  return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
};
var trimFen = function(fen) {
  return fen.split(" ").slice(0, 4).join(" ");
};
var WHITE = "w";
var BLACK = "b";
var PAWN = "p";
var KNIGHT = "n";
var BISHOP = "b";
var ROOK = "r";
var QUEEN = "q";
var KING = "k";
var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var EMPTY = -1;
var FLAGS = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
};
var BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
};
var Ox88 = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
var PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
};
var PIECE_OFFSETS = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
};
var ATTACKS = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
];
var RAYS = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
];
var PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
var SYMBOLS = "pnbrqkPNBRQK";
var PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
var RANK_1 = 7;
var RANK_2 = 6;
var RANK_7 = 1;
var RANK_8 = 0;
var SIDES = {
  [KING]: BITS.KSIDE_CASTLE,
  [QUEEN]: BITS.QSIDE_CASTLE
};
var ROOKS = {
  w: [
    { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
  ]
};
var SECOND_RANK = { b: RANK_7, w: RANK_2 };
var TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];

class Chess {
  _board = new Array(128);
  _turn = WHITE;
  _header = {};
  _kings = { w: EMPTY, b: EMPTY };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  _positionCount = {};
  constructor(fen = DEFAULT_POSITION) {
    this.load(fen);
  }
  clear({ preserveHeaders = false } = {}) {
    this._board = new Array(128);
    this._kings = { w: EMPTY, b: EMPTY };
    this._turn = WHITE;
    this._castling = { w: 0, b: 0 };
    this._epSquare = EMPTY;
    this._halfMoves = 0;
    this._moveNumber = 1;
    this._history = [];
    this._comments = {};
    this._header = preserveHeaders ? this._header : {};
    this._positionCount = {};
    delete this._header["SetUp"];
    delete this._header["FEN"];
  }
  removeHeader(key) {
    if (key in this._header) {
      delete this._header[key];
    }
  }
  load(fen, { skipValidation = false, preserveHeaders = false } = {}) {
    let tokens = fen.split(/\s+/);
    if (tokens.length >= 2 && tokens.length < 6) {
      const adjustments = ["-", "-", "0", "1"];
      fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
    }
    tokens = fen.split(/\s+/);
    if (!skipValidation) {
      const { ok: ok2, error: error5 } = validateFen(fen);
      if (!ok2) {
        throw new Error(error5);
      }
    }
    const position = tokens[0];
    let square = 0;
    this.clear({ preserveHeaders });
    for (let i = 0;i < position.length; i++) {
      const piece = position.charAt(i);
      if (piece === "/") {
        square += 8;
      } else if (isDigit(piece)) {
        square += parseInt(piece, 10);
      } else {
        const color = piece < "a" ? WHITE : BLACK;
        this._put({ type: piece.toLowerCase(), color }, algebraic(square));
        square++;
      }
    }
    this._turn = tokens[1];
    if (tokens[2].indexOf("K") > -1) {
      this._castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("Q") > -1) {
      this._castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf("k") > -1) {
      this._castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("q") > -1) {
      this._castling.b |= BITS.QSIDE_CASTLE;
    }
    this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
    this._halfMoves = parseInt(tokens[4], 10);
    this._moveNumber = parseInt(tokens[5], 10);
    this._updateSetup(fen);
    this._incPositionCount(fen);
  }
  fen() {
    let empty = 0;
    let fen = "";
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (this._board[i]) {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        const { color, type: piece } = this._board[i];
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      } else {
        empty++;
      }
      if (i + 1 & 136) {
        if (empty > 0) {
          fen += empty;
        }
        if (i !== Ox88.h1) {
          fen += "/";
        }
        empty = 0;
        i += 8;
      }
    }
    let castling = "";
    if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
      castling += "K";
    }
    if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
      castling += "Q";
    }
    if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
      castling += "k";
    }
    if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
      castling += "q";
    }
    castling = castling || "-";
    let epSquare = "-";
    if (this._epSquare !== EMPTY) {
      const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
      const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
      for (const square of squares) {
        if (square & 136) {
          continue;
        }
        const color = this._turn;
        if (this._board[square]?.color === color && this._board[square]?.type === PAWN) {
          this._makeMove({
            color,
            from: square,
            to: this._epSquare,
            piece: PAWN,
            captured: PAWN,
            flags: BITS.EP_CAPTURE
          });
          const isLegal = !this._isKingAttacked(color);
          this._undoMove();
          if (isLegal) {
            epSquare = algebraic(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      fen,
      this._turn,
      castling,
      epSquare,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  _updateSetup(fen) {
    if (this._history.length > 0)
      return;
    if (fen !== DEFAULT_POSITION) {
      this._header["SetUp"] = "1";
      this._header["FEN"] = fen;
    } else {
      delete this._header["SetUp"];
      delete this._header["FEN"];
    }
  }
  reset() {
    this.load(DEFAULT_POSITION);
  }
  get(square) {
    return this._board[Ox88[square]] || false;
  }
  put({ type, color }, square) {
    if (this._put({ type, color }, square)) {
      this._updateCastlingRights();
      this._updateEnPassantSquare();
      this._updateSetup(this.fen());
      return true;
    }
    return false;
  }
  _put({ type, color }, square) {
    if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
      return false;
    }
    if (!(square in Ox88)) {
      return false;
    }
    const sq = Ox88[square];
    if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
      return false;
    }
    const currentPieceOnSquare = this._board[sq];
    if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
      this._kings[currentPieceOnSquare.color] = EMPTY;
    }
    this._board[sq] = { type, color };
    if (type === KING) {
      this._kings[color] = sq;
    }
    return true;
  }
  remove(square) {
    const piece = this.get(square);
    delete this._board[Ox88[square]];
    if (piece && piece.type === KING) {
      this._kings[piece.color] = EMPTY;
    }
    this._updateCastlingRights();
    this._updateEnPassantSquare();
    this._updateSetup(this.fen());
    return piece;
  }
  _updateCastlingRights() {
    const whiteKingInPlace = this._board[Ox88.e1]?.type === KING && this._board[Ox88.e1]?.color === WHITE;
    const blackKingInPlace = this._board[Ox88.e8]?.type === KING && this._board[Ox88.e8]?.color === BLACK;
    if (!whiteKingInPlace || this._board[Ox88.a1]?.type !== ROOK || this._board[Ox88.a1]?.color !== WHITE) {
      this._castling.w &= ~BITS.QSIDE_CASTLE;
    }
    if (!whiteKingInPlace || this._board[Ox88.h1]?.type !== ROOK || this._board[Ox88.h1]?.color !== WHITE) {
      this._castling.w &= ~BITS.KSIDE_CASTLE;
    }
    if (!blackKingInPlace || this._board[Ox88.a8]?.type !== ROOK || this._board[Ox88.a8]?.color !== BLACK) {
      this._castling.b &= ~BITS.QSIDE_CASTLE;
    }
    if (!blackKingInPlace || this._board[Ox88.h8]?.type !== ROOK || this._board[Ox88.h8]?.color !== BLACK) {
      this._castling.b &= ~BITS.KSIDE_CASTLE;
    }
  }
  _updateEnPassantSquare() {
    if (this._epSquare === EMPTY) {
      return;
    }
    const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16);
    const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
    const attackers = [currentSquare + 1, currentSquare - 1];
    if (this._board[startSquare] !== null || this._board[this._epSquare] !== null || this._board[currentSquare]?.color !== swapColor(this._turn) || this._board[currentSquare]?.type !== PAWN) {
      this._epSquare = EMPTY;
      return;
    }
    const canCapture = (square) => !(square & 136) && this._board[square]?.color === this._turn && this._board[square]?.type === PAWN;
    if (!attackers.some(canCapture)) {
      this._epSquare = EMPTY;
    }
  }
  _attacked(color, square) {
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i] === undefined || this._board[i].color !== color) {
        continue;
      }
      const piece = this._board[i];
      const difference = i - square;
      if (difference === 0) {
        continue;
      }
      const index = difference + 119;
      if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE)
              return true;
          } else {
            if (piece.color === BLACK)
              return true;
          }
          continue;
        }
        if (piece.type === "n" || piece.type === "k")
          return true;
        const offset = RAYS[index];
        let j = i + offset;
        let blocked = false;
        while (j !== square) {
          if (this._board[j] != null) {
            blocked = true;
            break;
          }
          j += offset;
        }
        if (!blocked)
          return true;
      }
    }
    return false;
  }
  _isKingAttacked(color) {
    const square = this._kings[color];
    return square === -1 ? false : this._attacked(swapColor(color), square);
  }
  isAttacked(square, attackedBy) {
    return this._attacked(attackedBy, Ox88[square]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const pieces = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    };
    const bishops = [];
    let numPieces = 0;
    let squareColor = 0;
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      squareColor = (squareColor + 1) % 2;
      if (i & 136) {
        i += 7;
        continue;
      }
      const piece = this._board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(squareColor);
        }
        numPieces++;
      }
    }
    if (numPieces === 2) {
      return true;
    } else if (numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
      return true;
    } else if (numPieces === pieces[BISHOP] + 2) {
      let sum = 0;
      const len = bishops.length;
      for (let i = 0;i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true;
      }
    }
    return false;
  }
  isThreefoldRepetition() {
    return this._getPositionCount(this.fen()) >= 3;
  }
  isDraw() {
    return this._halfMoves >= 100 || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose = false, square = undefined, piece = undefined } = {}) {
    const moves = this._moves({ square, piece });
    if (verbose) {
      return moves.map((move) => this._makePretty(move));
    } else {
      return moves.map((move) => this._moveToSan(move, moves));
    }
  }
  _moves({ legal = true, piece = undefined, square = undefined } = {}) {
    const forSquare = square ? square.toLowerCase() : undefined;
    const forPiece = piece?.toLowerCase();
    const moves = [];
    const us = this._turn;
    const them = swapColor(us);
    let firstSquare = Ox88.a8;
    let lastSquare = Ox88.h1;
    let singleSquare = false;
    if (forSquare) {
      if (!(forSquare in Ox88)) {
        return [];
      } else {
        firstSquare = lastSquare = Ox88[forSquare];
        singleSquare = true;
      }
    }
    for (let from = firstSquare;from <= lastSquare; from++) {
      if (from & 136) {
        from += 7;
        continue;
      }
      if (!this._board[from] || this._board[from].color === them) {
        continue;
      }
      const { type } = this._board[from];
      let to;
      if (type === PAWN) {
        if (forPiece && forPiece !== type)
          continue;
        to = from + PAWN_OFFSETS[us][0];
        if (!this._board[to]) {
          addMove(moves, us, from, to, PAWN);
          to = from + PAWN_OFFSETS[us][1];
          if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
            addMove(moves, us, from, to, PAWN, undefined, BITS.BIG_PAWN);
          }
        }
        for (let j = 2;j < 4; j++) {
          to = from + PAWN_OFFSETS[us][j];
          if (to & 136)
            continue;
          if (this._board[to]?.color === them) {
            addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
          } else if (to === this._epSquare) {
            addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
          }
        }
      } else {
        if (forPiece && forPiece !== type)
          continue;
        for (let j = 0, len = PIECE_OFFSETS[type].length;j < len; j++) {
          const offset = PIECE_OFFSETS[type][j];
          to = from;
          while (true) {
            to += offset;
            if (to & 136)
              break;
            if (!this._board[to]) {
              addMove(moves, us, from, to, type);
            } else {
              if (this._board[to].color === us)
                break;
              addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
              break;
            }
            if (type === KNIGHT || type === KING)
              break;
          }
        }
      }
    }
    if (forPiece === undefined || forPiece === KING) {
      if (!singleSquare || lastSquare === this._kings[us]) {
        if (this._castling[us] & BITS.KSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom + 2;
          if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, undefined, BITS.KSIDE_CASTLE);
          }
        }
        if (this._castling[us] & BITS.QSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom - 2;
          if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, undefined, BITS.QSIDE_CASTLE);
          }
        }
      }
    }
    if (!legal || this._kings[us] === -1) {
      return moves;
    }
    const legalMoves = [];
    for (let i = 0, len = moves.length;i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(us)) {
        legalMoves.push(moves[i]);
      }
      this._undoMove();
    }
    return legalMoves;
  }
  move(move, { strict = false } = {}) {
    let moveObj = null;
    if (typeof move === "string") {
      moveObj = this._moveFromSan(move, strict);
    } else if (typeof move === "object") {
      const moves = this._moves();
      for (let i = 0, len = moves.length;i < len; i++) {
        if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
          moveObj = moves[i];
          break;
        }
      }
    }
    if (!moveObj) {
      if (typeof move === "string") {
        throw new Error(`Invalid move: ${move}`);
      } else {
        throw new Error(`Invalid move: ${JSON.stringify(move)}`);
      }
    }
    const prettyMove = this._makePretty(moveObj);
    this._makeMove(moveObj);
    this._incPositionCount(prettyMove.after);
    return prettyMove;
  }
  _push(move) {
    this._history.push({
      move,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _makeMove(move) {
    const us = this._turn;
    const them = swapColor(us);
    this._push(move);
    this._board[move.to] = this._board[move.from];
    delete this._board[move.from];
    if (move.flags & BITS.EP_CAPTURE) {
      if (this._turn === BLACK) {
        delete this._board[move.to - 16];
      } else {
        delete this._board[move.to + 16];
      }
    }
    if (move.promotion) {
      this._board[move.to] = { type: move.promotion, color: us };
    }
    if (this._board[move.to].type === KING) {
      this._kings[us] = move.to;
      if (move.flags & BITS.KSIDE_CASTLE) {
        const castlingTo = move.to - 1;
        const castlingFrom = move.to + 1;
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        const castlingTo = move.to + 1;
        const castlingFrom = move.to - 2;
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      }
      this._castling[us] = 0;
    }
    if (this._castling[us]) {
      for (let i = 0, len = ROOKS[us].length;i < len; i++) {
        if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
          this._castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    if (this._castling[them]) {
      for (let i = 0, len = ROOKS[them].length;i < len; i++) {
        if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
          this._castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    if (move.flags & BITS.BIG_PAWN) {
      if (us === BLACK) {
        this._epSquare = move.to - 16;
      } else {
        this._epSquare = move.to + 16;
      }
    } else {
      this._epSquare = EMPTY;
    }
    if (move.piece === PAWN) {
      this._halfMoves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      this._halfMoves = 0;
    } else {
      this._halfMoves++;
    }
    if (us === BLACK) {
      this._moveNumber++;
    }
    this._turn = them;
  }
  undo() {
    const move = this._undoMove();
    if (move) {
      const prettyMove = this._makePretty(move);
      this._decPositionCount(prettyMove.after);
      return prettyMove;
    }
    return null;
  }
  _undoMove() {
    const old = this._history.pop();
    if (old === undefined) {
      return null;
    }
    const move = old.move;
    this._kings = old.kings;
    this._turn = old.turn;
    this._castling = old.castling;
    this._epSquare = old.epSquare;
    this._halfMoves = old.halfMoves;
    this._moveNumber = old.moveNumber;
    const us = this._turn;
    const them = swapColor(us);
    this._board[move.from] = this._board[move.to];
    this._board[move.from].type = move.piece;
    delete this._board[move.to];
    if (move.captured) {
      if (move.flags & BITS.EP_CAPTURE) {
        let index;
        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }
        this._board[index] = { type: PAWN, color: them };
      } else {
        this._board[move.to] = { type: move.captured, color: them };
      }
    }
    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      let castlingTo, castlingFrom;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castlingTo = move.to + 1;
        castlingFrom = move.to - 1;
      } else {
        castlingTo = move.to - 2;
        castlingFrom = move.to + 1;
      }
      this._board[castlingTo] = this._board[castlingFrom];
      delete this._board[castlingFrom];
    }
    return move;
  }
  pgn({ newline = "\n", maxWidth = 0 } = {}) {
    const result = [];
    let headerExists = false;
    for (const i in this._header) {
      result.push("[" + i + ' "' + this._header[i] + '"]' + newline);
      headerExists = true;
    }
    if (headerExists && this._history.length) {
      result.push(newline);
    }
    const appendComment = (moveString2) => {
      const comment = this._comments[this.fen()];
      if (typeof comment !== "undefined") {
        const delimiter = moveString2.length > 0 ? " " : "";
        moveString2 = `${moveString2}${delimiter}{${comment}}`;
      }
      return moveString2;
    };
    const reversedHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    const moves = [];
    let moveString = "";
    if (reversedHistory.length === 0) {
      moves.push(appendComment(""));
    }
    while (reversedHistory.length > 0) {
      moveString = appendComment(moveString);
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (!this._history.length && move.color === "b") {
        const prefix = `${this._moveNumber}. ...`;
        moveString = moveString ? `${moveString} ${prefix}` : prefix;
      } else if (move.color === "w") {
        if (moveString.length) {
          moves.push(moveString);
        }
        moveString = this._moveNumber + ".";
      }
      moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
      this._makeMove(move);
    }
    if (moveString.length) {
      moves.push(appendComment(moveString));
    }
    if (typeof this._header.Result !== "undefined") {
      moves.push(this._header.Result);
    }
    if (maxWidth === 0) {
      return result.join("") + moves.join(" ");
    }
    const strip = function() {
      if (result.length > 0 && result[result.length - 1] === " ") {
        result.pop();
        return true;
      }
      return false;
    };
    const wrapComment = function(width, move) {
      for (const token of move.split(" ")) {
        if (!token) {
          continue;
        }
        if (width + token.length > maxWidth) {
          while (strip()) {
            width--;
          }
          result.push(newline);
          width = 0;
        }
        result.push(token);
        width += token.length;
        result.push(" ");
        width++;
      }
      if (strip()) {
        width--;
      }
      return width;
    };
    let currentWidth = 0;
    for (let i = 0;i < moves.length; i++) {
      if (currentWidth + moves[i].length > maxWidth) {
        if (moves[i].includes("{")) {
          currentWidth = wrapComment(currentWidth, moves[i]);
          continue;
        }
      }
      if (currentWidth + moves[i].length > maxWidth && i !== 0) {
        if (result[result.length - 1] === " ") {
          result.pop();
        }
        result.push(newline);
        currentWidth = 0;
      } else if (i !== 0) {
        result.push(" ");
        currentWidth++;
      }
      result.push(moves[i]);
      currentWidth += moves[i].length;
    }
    return result.join("");
  }
  header(...args) {
    for (let i = 0;i < args.length; i += 2) {
      if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
        this._header[args[i]] = args[i + 1];
      }
    }
    return this._header;
  }
  loadPgn(pgn, { strict = false, newlineChar = "\r?\n" } = {}) {
    function mask(str) {
      return str.replace(/\\/g, "\\");
    }
    function parsePgnHeader(header) {
      const headerObj = {};
      const headers2 = header.split(new RegExp(mask(newlineChar)));
      let key = "";
      let value = "";
      for (let i = 0;i < headers2.length; i++) {
        const regex = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        key = headers2[i].replace(regex, "$1");
        value = headers2[i].replace(regex, "$2");
        if (key.trim().length > 0) {
          headerObj[key] = value;
        }
      }
      return headerObj;
    }
    pgn = pgn.trim();
    const headerRegex = new RegExp("^(\\[((?:" + mask(newlineChar) + ")|.)*\\])((?:\\s*" + mask(newlineChar) + "){2}|(?:\\s*" + mask(newlineChar) + ")*$)");
    const headerRegexResults = headerRegex.exec(pgn);
    const headerString = headerRegexResults ? headerRegexResults.length >= 2 ? headerRegexResults[1] : "" : "";
    this.reset();
    const headers = parsePgnHeader(headerString);
    let fen = "";
    for (const key in headers) {
      if (key.toLowerCase() === "fen") {
        fen = headers[key];
      }
      this.header(key, headers[key]);
    }
    if (!strict) {
      if (fen) {
        this.load(fen, { preserveHeaders: true });
      }
    } else {
      if (headers["SetUp"] === "1") {
        if (!("FEN" in headers)) {
          throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
        }
        this.load(headers["FEN"], { preserveHeaders: true });
      }
    }
    function toHex(s) {
      return Array.from(s).map(function(c) {
        return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/%/g, "").toLowerCase();
      }).join("");
    }
    function fromHex(s) {
      return s.length == 0 ? "" : decodeURIComponent("%" + (s.match(/.{1,2}/g) || []).join("%"));
    }
    const encodeComment = function(s) {
      s = s.replace(new RegExp(mask(newlineChar), "g"), " ");
      return `{${toHex(s.slice(1, s.length - 1))}}`;
    };
    const decodeComment = function(s) {
      if (s.startsWith("{") && s.endsWith("}")) {
        return fromHex(s.slice(1, s.length - 1));
      }
    };
    let ms = pgn.replace(headerString, "").replace(new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, "g"), function(_match, bracket, semicolon) {
      return bracket !== undefined ? encodeComment(bracket) : " " + encodeComment(`{${semicolon.slice(1)}}`);
    }).replace(new RegExp(mask(newlineChar), "g"), " ");
    const ravRegex = /(\([^()]+\))+?/g;
    while (ravRegex.test(ms)) {
      ms = ms.replace(ravRegex, "");
    }
    ms = ms.replace(/\d+\.(\.\.)?/g, "");
    ms = ms.replace(/\.\.\./g, "");
    ms = ms.replace(/\$\d+/g, "");
    let moves = ms.trim().split(new RegExp(/\s+/));
    moves = moves.filter((move) => move !== "");
    let result = "";
    for (let halfMove = 0;halfMove < moves.length; halfMove++) {
      const comment = decodeComment(moves[halfMove]);
      if (comment !== undefined) {
        this._comments[this.fen()] = comment;
        continue;
      }
      const move = this._moveFromSan(moves[halfMove], strict);
      if (move == null) {
        if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) {
          result = moves[halfMove];
        } else {
          throw new Error(`Invalid move in PGN: ${moves[halfMove]}`);
        }
      } else {
        result = "";
        this._makeMove(move);
        this._incPositionCount(this.fen());
      }
    }
    if (result && Object.keys(this._header).length && !this._header["Result"]) {
      this.header("Result", result);
    }
  }
  _moveToSan(move, moves) {
    let output = "";
    if (move.flags & BITS.KSIDE_CASTLE) {
      output = "O-O";
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = "O-O-O";
    } else {
      if (move.piece !== PAWN) {
        const disambiguator = getDisambiguator(move, moves);
        output += move.piece.toUpperCase() + disambiguator;
      }
      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += "x";
      }
      output += algebraic(move.to);
      if (move.promotion) {
        output += "=" + move.promotion.toUpperCase();
      }
    }
    this._makeMove(move);
    if (this.isCheck()) {
      if (this.isCheckmate()) {
        output += "#";
      } else {
        output += "+";
      }
    }
    this._undoMove();
    return output;
  }
  _moveFromSan(move, strict = false) {
    const cleanMove = strippedSan(move);
    let pieceType = inferPieceType(cleanMove);
    let moves = this._moves({ legal: true, piece: pieceType });
    for (let i = 0, len = moves.length;i < len; i++) {
      if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
        return moves[i];
      }
    }
    if (strict) {
      return null;
    }
    let piece = undefined;
    let matches = undefined;
    let from = undefined;
    let to = undefined;
    let promotion = undefined;
    let overlyDisambiguated = false;
    matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
    if (matches) {
      piece = matches[1];
      from = matches[2];
      to = matches[3];
      promotion = matches[4];
      if (from.length == 1) {
        overlyDisambiguated = true;
      }
    } else {
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      }
    }
    pieceType = inferPieceType(cleanMove);
    moves = this._moves({
      legal: true,
      piece: piece ? piece : pieceType
    });
    if (!to) {
      return null;
    }
    for (let i = 0, len = moves.length;i < len; i++) {
      if (!from) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves)).replace("x", "")) {
          return moves[i];
        }
      } else if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
        return moves[i];
      } else if (overlyDisambiguated) {
        const square = algebraic(moves[i].from);
        if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }
    return null;
  }
  ascii() {
    let s = "   +------------------------+\n";
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (file(i) === 0) {
        s += " " + "87654321"[rank(i)] + " |";
      }
      if (this._board[i]) {
        const piece = this._board[i].type;
        const color = this._board[i].color;
        const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += " " + symbol + " ";
      } else {
        s += " . ";
      }
      if (i + 1 & 136) {
        s += "|\n";
        i += 8;
      }
    }
    s += "   +------------------------+\n";
    s += "     a  b  c  d  e  f  g  h";
    return s;
  }
  perft(depth) {
    const moves = this._moves({ legal: false });
    let nodes = 0;
    const color = this._turn;
    for (let i = 0, len = moves.length;i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(color)) {
        if (depth - 1 > 0) {
          nodes += this.perft(depth - 1);
        } else {
          nodes++;
        }
      }
      this._undoMove();
    }
    return nodes;
  }
  _makePretty(uglyMove) {
    const { color, piece, from, to, flags, captured, promotion } = uglyMove;
    let prettyFlags = "";
    for (const flag in BITS) {
      if (BITS[flag] & flags) {
        prettyFlags += FLAGS[flag];
      }
    }
    const fromAlgebraic = algebraic(from);
    const toAlgebraic = algebraic(to);
    const move = {
      color,
      piece,
      from: fromAlgebraic,
      to: toAlgebraic,
      san: this._moveToSan(uglyMove, this._moves({ legal: true })),
      flags: prettyFlags,
      lan: fromAlgebraic + toAlgebraic,
      before: this.fen(),
      after: ""
    };
    this._makeMove(uglyMove);
    move.after = this.fen();
    this._undoMove();
    if (captured) {
      move.captured = captured;
    }
    if (promotion) {
      move.promotion = promotion;
      move.lan += promotion;
    }
    return move;
  }
  turn() {
    return this._turn;
  }
  board() {
    const output = [];
    let row = [];
    for (let i = Ox88.a8;i <= Ox88.h1; i++) {
      if (this._board[i] == null) {
        row.push(null);
      } else {
        row.push({
          square: algebraic(i),
          type: this._board[i].type,
          color: this._board[i].color
        });
      }
      if (i + 1 & 136) {
        output.push(row);
        row = [];
        i += 8;
      }
    }
    return output;
  }
  squareColor(square) {
    if (square in Ox88) {
      const sq = Ox88[square];
      return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose = false } = {}) {
    const reversedHistory = [];
    const moveHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (verbose) {
        moveHistory.push(this._makePretty(move));
      } else {
        moveHistory.push(this._moveToSan(move, this._moves()));
      }
      this._makeMove(move);
    }
    return moveHistory;
  }
  _getPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    return this._positionCount[trimmedFen] || 0;
  }
  _incPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    if (this._positionCount[trimmedFen] === undefined) {
      this._positionCount[trimmedFen] = 0;
    }
    this._positionCount[trimmedFen] += 1;
  }
  _decPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    if (this._positionCount[trimmedFen] === 1) {
      delete this._positionCount[trimmedFen];
    } else {
      this._positionCount[trimmedFen] -= 1;
    }
  }
  _pruneComments() {
    const reversedHistory = [];
    const currentComments = {};
    const copyComment = (fen) => {
      if (fen in this._comments) {
        currentComments[fen] = this._comments[fen];
      }
    };
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    copyComment(this.fen());
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      this._makeMove(move);
      copyComment(this.fen());
    }
    this._comments = currentComments;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(comment) {
    this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
  }
  deleteComment() {
    const comment = this._comments[this.fen()];
    delete this._comments[this.fen()];
    return comment;
  }
  getComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      return { fen, comment: this._comments[fen] };
    });
  }
  deleteComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      const comment = this._comments[fen];
      delete this._comments[fen];
      return { fen, comment };
    });
  }
  setCastlingRights(color, rights) {
    for (const side of [KING, QUEEN]) {
      if (rights[side] !== undefined) {
        if (rights[side]) {
          this._castling[color] |= SIDES[side];
        } else {
          this._castling[color] &= ~SIDES[side];
        }
      }
    }
    this._updateCastlingRights();
    const result = this.getCastlingRights(color);
    return (rights[KING] === undefined || rights[KING] === result[KING]) && (rights[QUEEN] === undefined || rights[QUEEN] === result[QUEEN]);
  }
  getCastlingRights(color) {
    return {
      [KING]: (this._castling[color] & SIDES[KING]) !== 0,
      [QUEEN]: (this._castling[color] & SIDES[QUEEN]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}

// web/chessboard/pieces.tsx
var jsx_runtime = __toESM(require_jsx_runtime(), 1);
var defaultPieces = {
  wp: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsx("path", {
      d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z",
      style: {
        opacity: "1",
        fill: "#ffffff",
        fillOpacity: "1",
        fillRule: "nonzero",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      }
    })
  }),
  wr: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "#ffffff",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 34,14 L 31,17 L 14,17 L 11,14"
        }),
        jsx_runtime.jsx("path", {
          d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
          style: { strokeLinecap: "butt", strokeLinejoin: "miter" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
        }),
        jsx_runtime.jsx("path", {
          d: "M 11,14 L 34,14",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }
        })
      ]
    })
  }),
  wn: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "none",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
          style: { fill: "#ffffff", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
          style: { fill: "#ffffff", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
          style: { fill: "#000000", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
          transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
          style: { fill: "#000000", stroke: "#000000" }
        })
      ]
    })
  }),
  wb: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "none",
        fillRule: "evenodd",
        fillOpacity: "1",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsxs("g", {
          style: { fill: "#ffffff", stroke: "#000000", strokeLinecap: "butt" },
          children: [
            jsx_runtime.jsx("path", {
              d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
            }),
            jsx_runtime.jsx("path", {
              d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
            }),
            jsx_runtime.jsx("path", {
              d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
            })
          ]
        }),
        jsx_runtime.jsx("path", {
          d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }
        })
      ]
    })
  }),
  wq: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        fill: "#ffffff",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinejoin: "round"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
        }),
        jsx_runtime.jsx("path", {
          d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
        }),
        jsx_runtime.jsx("path", {
          d: "M 11.5,30 C 15,29 30,29 33.5,30",
          style: { fill: "none" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5",
          style: { fill: "none" }
        }),
        jsx_runtime.jsx("circle", {
          cx: "6",
          cy: "12",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "14",
          cy: "9",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "22.5",
          cy: "8",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "31",
          cy: "9",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "39",
          cy: "12",
          r: "2"
        })
      ]
    })
  }),
  wk: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        fill: "none",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 22.5,11.63 L 22.5,6",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 20,8 L 25,8",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
          style: {
            fill: "#ffffff",
            stroke: "#000000",
            strokeLinecap: "butt",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
          style: { fill: "#ffffff", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,30 C 18,27 27,27 32.5,30",
          style: { fill: "none", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5",
          style: { fill: "none", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,37 C 18,34 27,34 32.5,37",
          style: { fill: "none", stroke: "#000000" }
        })
      ]
    })
  }),
  bp: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsx("path", {
      d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z",
      style: {
        opacity: "1",
        fill: "#000000",
        fillOpacity: "1",
        fillRule: "nonzero",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      }
    })
  }),
  br: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "#000000",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ",
          style: { strokeLinecap: "butt", strokeLinejoin: "miter" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ",
          style: { strokeLinecap: "butt" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12,35.5 L 33,35.5 L 33,35.5",
          style: {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 13,31.5 L 32,31.5",
          style: {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 14,29.5 L 31,29.5",
          style: {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 14,16.5 L 31,16.5",
          style: {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 11,14 L 34,14",
          style: {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter"
          }
        })
      ]
    })
  }),
  bn: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "none",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
          style: { fill: "#000000", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
          style: { fill: "#000000", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
          style: { fill: "#ffffff", stroke: "#ffffff" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
          transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
          style: { fill: "#ffffff", stroke: "#ffffff" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ",
          style: { fill: "#ffffff", stroke: "none" }
        })
      ]
    })
  }),
  bb: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        opacity: "1",
        fill: "none",
        fillRule: "evenodd",
        fillOpacity: "1",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsxs("g", {
          style: { fill: "#000000", stroke: "#000000", strokeLinecap: "butt" },
          children: [
            jsx_runtime.jsx("path", {
              d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
            }),
            jsx_runtime.jsx("path", {
              d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
            }),
            jsx_runtime.jsx("path", {
              d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
            })
          ]
        }),
        jsx_runtime.jsx("path", {
          d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
          style: { fill: "none", stroke: "#ffffff", strokeLinejoin: "miter" }
        })
      ]
    })
  }),
  bq: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        fill: "#000000",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z",
          style: { strokeLinecap: "butt", fill: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z"
        }),
        jsx_runtime.jsx("path", {
          d: "M 11.5,30 C 15,29 30,29 33.5,30"
        }),
        jsx_runtime.jsx("path", {
          d: "m 12,33.5 c 6,-1 15,-1 21,0"
        }),
        jsx_runtime.jsx("circle", {
          cx: "6",
          cy: "12",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "14",
          cy: "9",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "22.5",
          cy: "8",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "31",
          cy: "9",
          r: "2"
        }),
        jsx_runtime.jsx("circle", {
          cx: "39",
          cy: "12",
          r: "2"
        }),
        jsx_runtime.jsx("path", {
          d: "M 11,38.5 A 35,35 1 0 0 34,38.5",
          style: { fill: "none", stroke: "#000000", strokeLinecap: "butt" }
        }),
        jsx_runtime.jsxs("g", {
          style: { fill: "none", stroke: "#ffffff" },
          children: [
            jsx_runtime.jsx("path", {
              d: "M 11,29 A 35,35 1 0 1 34,29"
            }),
            jsx_runtime.jsx("path", {
              d: "M 12.5,31.5 L 32.5,31.5"
            }),
            jsx_runtime.jsx("path", {
              d: "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
            }),
            jsx_runtime.jsx("path", {
              d: "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
            })
          ]
        })
      ]
    })
  }),
  bk: jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "45",
    height: "45",
    children: jsx_runtime.jsxs("g", {
      style: {
        fill: "none",
        fillOpacity: "1",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "4",
        strokeDasharray: "none",
        strokeOpacity: "1"
      },
      children: [
        jsx_runtime.jsx("path", {
          d: "M 22.5,11.63 L 22.5,6",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" },
          id: "path6570"
        }),
        jsx_runtime.jsx("path", {
          d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
          style: {
            fill: "#000000",
            fillOpacity: "1",
            strokeLinecap: "butt",
            strokeLinejoin: "miter"
          }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
          style: { fill: "#000000", stroke: "#000000" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 20,8 L 25,8",
          style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5",
          style: { fill: "none", stroke: "#ffffff" }
        }),
        jsx_runtime.jsx("path", {
          d: "M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37",
          style: { fill: "none", stroke: "#ffffff" }
        })
      ]
    })
  })
};

// web/app.tsx
var jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var api = client2("http://localhost:8000/rpc");
var ws = api.$ws();
var chess = new Chess;
var COLUMNS = "abcdefgh".split("");
function App() {
  const [connected, setConnected] = import_react.useState(false);
  const [searching, setSearching] = import_react.useState(false);
  const [id2, setId] = import_react.useState(null);
  const [color, setColor] = import_react.useState("white");
  const [board, setBoard] = import_react.useState(() => getBoard());
  const [boardWidth, setBoardWidth] = import_react.useState(512);
  console.log("COLOR", color);
  const from = import_react.useRef(null);
  import_react.useEffect(() => {
    ws.on("connect", () => setConnected(true));
    ws.on("disconnect", () => setConnected(false));
    ws.on("init", ({ id: id3, color: color2 }) => {
      setSearching(false);
      setId(id3);
      setColor(color2);
      console.log("Game started with id:", id3);
    });
    ws.on("move", (move) => {
      console.log("Received move:", move);
      chess.move(move);
      onTurn();
    });
  }, []);
  function getBoard() {
    const board2 = chess.board();
    return color === "white" ? board2 : board2.map((row) => row.toReversed()).toReversed();
  }
  import_react.useEffect(() => {
    setBoard(getBoard());
  }, [color]);
  function onTurn() {
    console.log("Turn:", chess.turn(), chess.board());
    setBoard(getBoard());
  }
  function makeMove(from2, to) {
    let move;
    try {
      move = chess.move({ from: from2, to, promotion: "q" });
    } catch (err) {
      console.log(err);
      return;
    }
    console.log("Move:", move);
    ws.emit("move", { id: id2, move });
    onTurn();
  }
  function onSquareClick(square, piece) {
    console.log("Square:", square, "Piece:", piece);
    if (from.current === square)
      return;
    const turn = chess.turn();
    if (from.current && piece?.color !== turn) {
      makeMove(from.current, square);
      from.current = null;
      return;
    }
    if (piece && piece.color === turn) {
      from.current = square;
    }
  }
  const boardRef = import_react.useRef(null);
  const rect = import_react.useMemo(() => boardRef.current?.getBoundingClientRect(), [boardRef.current]);
  if (!connected)
    return jsx_runtime2.jsx("main", {
      className: "flex h-screen items-center justify-center",
      children: jsx_runtime2.jsx("h1", {
        children: "Connecting..."
      })
    });
  return jsx_runtime2.jsxs("main", {
    className: "relative flex flex-col h-screen items-center justify-center",
    children: [
      jsx_runtime2.jsx("button", {
        className: "btn",
        onClick: () => {
          if (searching)
            return;
          setSearching(true);
          ws.emit("search");
        },
        children: searching ? "Searching..." : "Search for game"
      }),
      jsx_runtime2.jsx("button", {
        className: "btn",
        onClick: () => setColor(color === "white" ? "black" : "white"),
        children: "Color"
      }),
      jsx_runtime2.jsx("div", {
        className: "flex flex-col w-full bg-red-200",
        children: jsx_runtime2.jsx("div", {
          ref: boardRef,
          className: "w-full",
          children: jsx_runtime2.jsx("div", {
            className: "relative",
            style: { width: boardWidth, height: boardWidth },
            children: board.map((row, r2) => jsx_runtime2.jsx("div", {
              className: "flex",
              children: row.map((piece, c) => {
                const square = color === "white" ? COLUMNS[c] + (8 - r2) : COLUMNS[7 - c] + (r2 + 1);
                const squareColor = (r2 + c) % 2 === 0 ? "white" : "black";
                return jsx_runtime2.jsxs("div", {
                  className: "relative",
                  style: {
                    width: boardWidth / 8,
                    height: boardWidth / 8,
                    backgroundColor: squareColor === "white" ? "#edd7a4" : "#b58863"
                  },
                  onClick: () => onSquareClick(square, piece),
                  children: [
                    piece && jsx_runtime2.jsx("svg", {
                      viewBox: "1 1 43 43",
                      width: boardWidth / 8,
                      height: boardWidth / 8,
                      className: "block hover:cursor-grab",
                      children: jsx_runtime2.jsx("g", {
                        children: defaultPieces[`${piece.color}${piece.type}`]
                      })
                    }),
                    c === 0 && jsx_runtime2.jsx("div", {
                      className: "absolute left-1 top-1 text-xs",
                      style: {
                        color: squareColor === "white" ? "#b58863" : "#edd7a4"
                      },
                      children: color === "white" ? 8 - r2 : r2 + 1
                    }),
                    r2 === 7 && jsx_runtime2.jsx("div", {
                      className: "absolute right-1 bottom-1 text-xs",
                      style: {
                        color: squareColor === "white" ? "#b58863" : "#edd7a4"
                      },
                      children: color === "white" ? COLUMNS[c] : COLUMNS[7 - c]
                    })
                  ]
                }, c);
              })
            }, r2))
          })
        })
      }),
      jsx_runtime2.jsx("h3", {
        className: "text-2xl",
        children: color
      }),
      jsx_runtime2.jsx("h3", {
        className: "text-2xl",
        children: id2
      })
    ]
  });
}

// web/web-component.ts
var COLUMNS2 = "abcdefgh".split("");

class HTMLChessboardElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          min-height: 512px;
          min-width: 512px;
        }
        .row {
          display: flex;
        }
        .square {
          width: 64px;
          height: 64px;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
        }
        .notation {
          position: absolute;
          left: 1px;
          top: 1px;
          font-size: 12px;
        }
      </style>
      <div class="container"></div>
    `;
    const $container = shadow.querySelector(".container");
    for (let r2 = 0;r2 < 8; r2++) {
      const $row = document.createElement("div");
      $row.className = "row";
      for (let c = 0;c < 8; c++) {
        const square = COLUMNS2[c] + (8 - r2);
        const $square = document.createElement("div");
        $square.className = "square";
        $square.style.backgroundColor = (r2 + c) % 2 === 0 ? "white" : "black";
        $square.dataset.square = square;
        const $notation = document.createElement("div");
        $notation.textContent = square;
        $notation.className = "notation";
        $notation.style.color = $square.style.backgroundColor === "white" ? "black" : "white";
        $square.appendChild($notation);
        $row.appendChild($square);
      }
      $container.appendChild($row);
    }
  }
  static sayHello() {
    console.log("Hello from Chessboard!");
  }
  connectedCallback() {
    console.log("connected");
  }
  disconnectedCallback() {
    console.log("disconnected");
  }
  adoptedCallback() {
    console.log("adopted");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed", { name, oldValue, newValue });
  }
  static get observedAttributes() {
    return ["color"];
  }
  get color() {
    return this.getAttribute("color");
  }
  set color(value) {
    this.setAttribute("color", value);
  }
  movePiece(from, to) {
    console.log("move piece", { from, to });
  }
}
customElements.define("chess-board", HTMLChessboardElement);

// web/main.tsx
var jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
client4.default.createRoot(document.querySelector("#app")).render(jsx_runtime3.jsx(App, {}));
