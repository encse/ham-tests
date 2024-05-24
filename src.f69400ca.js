// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = b;
exports.Fragment = k;
exports.cloneElement = E;
exports.createContext = G;
exports.h = exports.createElement = _;
exports.createRef = m;
exports.hydrate = D;
exports.options = exports.isValidElement = void 0;
exports.render = B;
exports.toChildArray = H;
var n,
  l,
  u,
  t,
  i,
  o,
  r,
  f,
  e,
  c,
  s,
  a,
  h = {},
  p = [],
  v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  y = Array.isArray;
function d(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function w(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function _(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return g(l, f, i, o, null);
}
function g(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == r ? ++u : r,
    __i: -1,
    __u: 0
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function m() {
  return {
    current: null
  };
}
function k(n) {
  return n.children;
}
function b(n, l) {
  this.props = n, this.context = l;
}
function x(n, l) {
  if (null == l) return n.__ ? x(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? x(n) : null;
}
function C(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return C(n);
  }
}
function M(n) {
  (!n.__d && (n.__d = !0) && i.push(n) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
  var n, u, t, o, r, e, c, s;
  for (i.sort(f); n = i.shift();) n.__d && (u = i.length, o = void 0, e = (r = (t = n).__v).__e, c = [], s = [], t.__P && ((o = d({}, r)).__v = r.__v + 1, l.vnode && l.vnode(o), O(t.__P, o, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [e] : null, c, null == e ? x(r) : e, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, j(c, o, s), o.__e != e && C(o)), i.length > u && i.sort(f));
  P.__r = 0;
}
function S(n, l, u, t, i, o, r, f, e, c, s) {
  var a,
    v,
    y,
    d,
    w,
    _ = t && t.__k || p,
    g = l.length;
  for (u.__d = e, $(u, l, _), e = u.__d, a = 0; a < g; a++) null != (y = u.__k[a]) && "boolean" != typeof y && "function" != typeof y && (v = -1 === y.__i ? h : _[y.__i] || h, y.__i = a, O(n, y, v, i, o, r, f, e, c, s), d = y.__e, y.ref && v.ref != y.ref && (v.ref && N(v.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 65536 & y.__u || v.__k === y.__k ? (e && !e.isConnected && (e = x(v)), e = I(y, e, n)) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
  u.__d = e, u.__e = w;
}
function $(n, l, u) {
  var t,
    i,
    o,
    r,
    f,
    e = l.length,
    c = u.length,
    s = c,
    a = 0;
  for (n.__k = [], t = 0; t < e; t++) r = t + a, null != (i = n.__k[t] = null == (i = l[t]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? g(null, i, null, null, null) : y(i) ? g(k, {
    children: i
  }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = n, i.__b = n.__b + 1, f = L(i, u, r, s), i.__i = f, o = null, -1 !== f && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f === r + 1 ? a++ : f > r ? s > e - r ? a += f - r : a-- : f < r ? f == r - 1 && (a = f - r) : a = 0, f !== t + a && (i.__u |= 65536))) : (o = u[r]) && null == o.key && o.__e && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x(o)), V(o, o, !1), u[r] = null, s--);
  if (s) for (t = 0; t < c; t++) null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x(o)), V(o, o));
}
function I(n, l, u) {
  var t, i;
  if ("function" == typeof n.type) {
    for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = I(t[i], l, u));
    return l;
  }
  n.__e != l && (u.insertBefore(n.__e, l || null), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 === l.nodeType);
  return l;
}
function H(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (y(n) ? n.some(function (n) {
    H(n, l);
  }) : l.push(n)), l;
}
function L(n, l, u, t) {
  var i = n.key,
    o = n.type,
    r = u - 1,
    f = u + 1,
    e = l[u];
  if (null === e || e && i == e.key && o === e.type && 0 == (131072 & e.__u)) return u;
  if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
      r--;
    }
    if (f < l.length) {
      if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}
function T(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || v.test(l) ? u : u + "px";
}
function A(n, l, u, t, i) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || T(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || T(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = e, n.addEventListener(l, o ? s : c, o)) : n.removeEventListener(l, o ? s : c, o);else {
    if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function F(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u.t) u.t = e++;else if (u.t < t.u) return;
      return t(l.event ? l.event(u) : u);
    }
  };
}
function O(n, u, t, i, o, r, f, e, c, s) {
  var a,
    h,
    p,
    v,
    w,
    _,
    g,
    m,
    x,
    C,
    M,
    P,
    $,
    I,
    H,
    L = u.type;
  if (void 0 !== u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [e = u.__e = t.__e]), (a = l.__b) && a(u);
  n: if ("function" == typeof L) try {
    if (m = u.props, x = (a = L.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? g = (h = u.__c = t.__c).__ = h.__E : ("prototype" in L && L.prototype.render ? u.__c = h = new L(m, C) : (u.__c = h = new b(m, C), h.constructor = L, h.render = q), x && x.sub(h), h.props = m, h.state || (h.state = {}), h.context = C, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != L.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, L.getDerivedStateFromProps(m, h.__s))), v = h.props, w = h.state, h.__v = u, p) null == L.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (null == L.getDerivedStateFromProps && m !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, C), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, C) || u.__v === t.__v)) {
        for (u.__v !== t.__v && (h.props = m, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
          n && (n.__ = u);
        }), M = 0; M < h._sb.length; M++) h.__h.push(h._sb[M]);
        h._sb = [], h.__h.length && f.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(v, w, _);
      });
    }
    if (h.context = C, h.props = m, h.__P = n, h.__e = !1, P = l.__r, $ = 0, "prototype" in L && L.prototype.render) {
      for (h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++) h.__h.push(h._sb[I]);
      h._sb = [];
    } else do {
      h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++$ < 25);
    h.state = h.__s, null != h.getChildContext && (i = d(d({}, i), h.getChildContext())), p || null == h.getSnapshotBeforeUpdate || (_ = h.getSnapshotBeforeUpdate(v, w)), S(n, y(H = null != a && a.type === k && null == a.key ? a.props.children : a) ? H : [H], u, t, i, o, r, f, e, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && f.push(h), g && (h.__E = h.__ = null);
  } catch (n) {
    u.__v = null, c || null != r ? (u.__e = e, u.__u |= c ? 160 : 32, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l.__e(n, u, t);
  } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z(t.__e, u, t, i, o, r, f, c, s);
  (a = l.diffed) && a(u);
}
function j(n, u, t) {
  u.__d = void 0;
  for (var i = 0; i < t.length; i++) N(t[i], t[++i], t[++i]);
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function z(l, u, t, i, o, r, f, e, c) {
  var s,
    a,
    p,
    v,
    d,
    _,
    g,
    m = t.props,
    k = u.props,
    b = u.type;
  if ("svg" === b ? o = "http://www.w3.org/2000/svg" : "math" === b ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != r) for (s = 0; s < r.length; s++) if ((d = r[s]) && "setAttribute" in d == !!b && (b ? d.localName === b : 3 === d.nodeType)) {
    l = d, r[s] = null;
    break;
  }
  if (null == l) {
    if (null === b) return document.createTextNode(k);
    l = document.createElementNS(o, b, k.is && k), r = null, e = !1;
  }
  if (null === b) m === k || e && l.data === k || (l.data = k);else {
    if (r = r && n.call(l.childNodes), m = t.props || h, !e && null != r) for (m = {}, s = 0; s < l.attributes.length; s++) m[(d = l.attributes[s]).name] = d.value;
    for (s in m) if (d = m[s], "children" == s) ;else if ("dangerouslySetInnerHTML" == s) p = d;else if ("key" !== s && !(s in k)) {
      if ("value" == s && "defaultValue" in k || "checked" == s && "defaultChecked" in k) continue;
      A(l, s, null, d, o);
    }
    for (s in k) d = k[s], "children" == s ? v = d : "dangerouslySetInnerHTML" == s ? a = d : "value" == s ? _ = d : "checked" == s ? g = d : "key" === s || e && "function" != typeof d || m[s] === d || A(l, s, d, m[s], o);
    if (a) e || p && (a.__html === p.__html || a.__html === l.innerHTML) || (l.innerHTML = a.__html), u.__k = [];else if (p && (l.innerHTML = ""), S(l, y(v) ? v : [v], u, t, i, "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : o, r, f, r ? r[0] : t.__k && x(t, 0), e, c), null != r) for (s = r.length; s--;) null != r[s] && w(r[s]);
    e || (s = "value", void 0 !== _ && (_ !== l[s] || "progress" === b && !_ || "option" === b && _ !== m[s]) && A(l, s, _, m[s], o), s = "checked", void 0 !== g && g !== l[s] && A(l, s, g, m[s], o));
  }
  return l;
}
function N(n, u, t) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, t);
  }
}
function V(n, u, t) {
  var i, o;
  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && V(i[o], u, t || "function" != typeof n.type);
  t || null == n.__e || w(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
  return this.constructor(n, u);
}
function B(u, t, i) {
  var o, r, f, e;
  l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], O(t, u = (!o && i || t).__k = _(k, null, [u]), r || h, h, t.namespaceURI, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), j(f, u, e);
}
function D(n, l) {
  B(n, l, D);
}
function E(l, u, t) {
  var i,
    o,
    r,
    f,
    e = d({}, l.props);
  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), g(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
  var u = {
    __c: l = "__cC" + a++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, t;
      return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
        return t;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, M(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = p.slice, exports.options = l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, exports.isValidElement = t = function (n) {
  return null != n && null == n.constructor;
}, b.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n && (n = n(d({}, u), this.props)), n && d(u, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, b.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, P.__r = 0, e = 0, c = F(!1), s = F(!0), a = 0;
},{}],"../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
exports.jsxs = exports.jsxDEV = exports.jsx = u;
exports.jsxAttr = l;
exports.jsxEscape = _;
exports.jsxTemplate = a;
var _preact = require("preact");
var t = /["&<]/;
function n(r) {
  if (0 === r.length || !1 === t.test(r)) return r;
  for (var e = 0, n = 0, o = "", f = ""; n < r.length; n++) {
    switch (r.charCodeAt(n)) {
      case 34:
        f = "&quot;";
        break;
      case 38:
        f = "&amp;";
        break;
      case 60:
        f = "&lt;";
        break;
      default:
        continue;
    }
    n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
  }
  return n !== e && (o += r.slice(e, n)), o;
}
var o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  f = 0,
  i = Array.isArray;
function u(e, t, n, o, i, u) {
  t || (t = {});
  var a,
    c,
    p = t;
  if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
  var l = {
    type: e,
    props: p,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --f,
    __i: -1,
    __u: 0,
    __source: i,
    __self: u
  };
  if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
  return _preact.options.vnode && _preact.options.vnode(l), l;
}
function a(r) {
  var t = u(_preact.Fragment, {
    tpl: r,
    exprs: [].slice.call(arguments, 1)
  });
  return t.key = t.__v, t;
}
var c = {},
  p = /[A-Z]/g;
function l(e, t) {
  if (_preact.options.attr) {
    var f = _preact.options.attr(e, t);
    if ("string" == typeof f) return f;
  }
  if ("ref" === e || "key" === e) return "";
  if ("style" === e && "object" == typeof t) {
    var i = "";
    for (var u in t) {
      var a = t[u];
      if (null != a && "" !== a) {
        var l = "-" == u[0] ? u : c[u] || (c[u] = u.replace(p, "-$&").toLowerCase()),
          _ = ";";
        "number" != typeof a || l.startsWith("--") || o.test(l) || (_ = "px;"), i = i + l + ":" + a + _;
      }
    }
    return e + '="' + i + '"';
  }
  return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + n(t) + '"';
}
function _(r) {
  if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
  if ("object" == typeof r) {
    if (void 0 === r.constructor) return r;
    if (i(r)) {
      for (var e = 0; e < r.length; e++) r[e] = _(r[e]);
      return r;
    }
  }
  return n("" + r);
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"assoc.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function pairs(mappings) {
  var res = [];
  for (var _i = 0, _Object$keys = Object.keys(mappings); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var _iterator = _createForOfIteratorHelper(mappings[k]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        res.push([k, v]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return res;
}
},{}],"pick.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;
exports.pickInt = pickInt;
exports.pickN = pickN;
function pickInt(max) {
  return Math.floor(Math.random() * max);
}
function pick(options) {
  return options[Math.floor(Math.random() * options.length)];
}
function pickN(options, n) {
  var res = [];
  var _loop = function _loop() {
    var picked = pick(options);
    res.push(picked);
    options = options.filter(function (x) {
      return x != picked;
    });
  };
  while (res.length < n && options.length > 0) {
    _loop();
  }
  return res;
}
},{}],"questions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBackward = generateBackward;
exports.generateBadPair = generateBadPair;
exports.generateForward = generateForward;
exports.generateGoodPair = generateGoodPair;
var _pick = require("./pick");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function makeOptions(items) {
  items = _toConsumableArray(items);
  items.sort(function (_) {
    return Math.random() - 0.5;
  });
  return items;
}
function generateForward(topic, source, questionText, pairs) {
  var pair = (0, _pick.pick)(pairs);
  var wrongAnswers = (0, _pick.pickN)(pairs.filter(function (p) {
    return p[0] != pair[0];
  }).map(function (p) {
    return p[1];
  }), 3);
  return {
    topic: topic,
    text: questionText(pair[0]),
    correctAnswer: pair[1],
    options: makeOptions([pair[1]].concat(_toConsumableArray(wrongAnswers))),
    source: source,
    attempts: 0,
    failures: 0
  };
}
function generateBackward(topic, source, questionText, pairs) {
  return generateForward(topic, source, questionText, pairs.map(function (p) {
    return [p[1], p[0]];
  }));
}
function generateGoodPair(topic, source, pairs) {
  var items = (0, _pick.pickN)(pairs, 4);
  var correctAnswer = format(items[0]);
  var wrongAnswers = items.slice(1).map(function (x) {
    return makeItWrong(x, pairs);
  }).map(format);
  return {
    topic: topic,
    text: "Select the correct one.",
    correctAnswer: correctAnswer,
    options: makeOptions([correctAnswer].concat(_toConsumableArray(wrongAnswers))),
    source: source,
    attempts: 0,
    failures: 0
  };
}
function generateBadPair(topic, source, pairs) {
  var items = (0, _pick.pickN)(pairs, 4);
  var correctAnswer = format(makeItWrong(items[0], pairs));
  var wrongAnswers = items.slice(1).map(format);
  return {
    topic: topic,
    text: "Select the wrong one.",
    correctAnswer: correctAnswer,
    options: makeOptions([correctAnswer].concat(_toConsumableArray(wrongAnswers))),
    source: source,
    attempts: 0,
    failures: 0
  };
}
function makeItWrong(item, pairs) {
  var badChoices = pairs.filter(function (x) {
    return x[0] != item[0];
  }).map(function (x) {
    return x[1];
  });
  return [item[0], (0, _pick.pick)(badChoices)];
}
function format(pair) {
  return "".concat(pair[0], " - ").concat(pair[1]);
}
},{"./pick":"pick.ts"}],"prefixes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateQuestion = generateQuestion;
var _assoc = require("./assoc");
var _pick = require("./pick");
var _questions = require("./questions");
var prefixes = (0, _assoc.pairs)({
  "Portugal": ["CT", "CS"],
  "Andorra": ["C3"],
  "Germany": ["DL", "DA...DO"],
  "Spain": ["EA", "EB", "EC", "ED"],
  "Ireland": ["EI"],
  "Moldova": ["ER"],
  "Estonia": ["ES"],
  "Belarus": ["EU"],
  "France": ["F", "FA...FE"],
  "United Kingdom": ["G", "GB...GM", "M"],
  "Hungary": ["HA", "HG"],
  "Switzerland": ["HB"],
  "Liechtenstein": ["HB0"],
  "Vatican": ["HV"],
  "Italy": ["I", "IA...IZ"],
  "Norway": ["LA", "LB"],
  "Luxembourg": ["LX"],
  "Lithuania": ["LY"],
  "Bulgaria": ["LZ"],
  "Austria": ["OE"],
  "Finland": ["OH", "OF...OI"],
  "Czech Republic": ["OK", "OL"],
  "Slovakia": ["OM"],
  "Belgium": ["ON"],
  "Faroe Islands": ["OY"],
  "Denmark": ["OZ"],
  "Netherlands": ["PA", "PB", "PD", "PE", "PI"],
  "Russia": ["RA", "UA..."],
  "Kaliningrad": ["RA2"],
  "Sweden": ["SM", "SK", "SL"],
  "Poland": ["SP", "SO"],
  "Greece": ["SV"],
  "Slovenia": ["S5"],
  "Corsica": ["TK"],
  "San Marino": ["T7"],
  "Bosnia and Herzegovina": ["T9"],
  "Turkey": ["TA", "TB", "TC"],
  "Ukraine": ["UR"],
  "Latvia": ["YL"],
  "Romania": ["YO"],
  "Serbia and Montenegro": ["YU", "YT"],
  "Albania": ["ZA"],
  "North Macedonia": ["Z3"],
  "Gibraltar": ["ZB"],
  "Monaco": ["3A"],
  "Croatia": ["9A"],
  "Malta": ["9H"]
});
function generateQuestion() {
  var topic = "Callsign prefixes";
  var source = "https://tankonyv.ham.hu/A_vizsga-DJ4UF/?cid=a11";
  var generator = (0, _pick.pick)([function () {
    return (0, _questions.generateForward)(topic, source, function (st) {
      return "What is the prefix of ".concat(st, "?");
    }, prefixes);
  }, function () {
    return (0, _questions.generateBackward)(topic, source, function (st) {
      return "What country corresponds to the prefix ".concat(st, "?");
    }, prefixes);
  }, function () {
    return (0, _questions.generateGoodPair)(topic, source, prefixes);
  }, function () {
    return (0, _questions.generateBadPair)(topic, source, prefixes);
  }]);
  return generator();
}
},{"./assoc":"assoc.ts","./pick":"pick.ts","./questions":"questions.ts"}],"qcodes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateQuestion = generateQuestion;
var _pick = require("./pick");
var _questions = require("./questions");
var qcodes = [["QRA?", "What is the name (or call sign) of your station?"], ["QRA", "The name (or call sign) of my station is ..."], ["QRB?", "How far are you from my station?"], ["QRB", "The distance between our stations is ... nautical miles (or km)."], ["QRG?", "Will you tell me my exact frequency (or that of ...)?"], ["QRG", "Your exact frequency (or that of ... ) is ... kHz (or MHz)."], ["QRH?", "Does my frequency vary?"], ["QRH", "Your frequency varies."], ["QRI?", "How is the tone of my transmission?"], ["QRI", "The tone of your transmission is (1: good, 2: variable 3: bad)"], ["QRK?", "What is the readability of my signals (or those of ...)?"], ["QRK", "The readability of your signals (or those of ...) is ... (1: bad .. 5: excellent)."], ["QRL?", "Are you busy?"], ["QRL", "I am busy. (or I am busy with ... ) Please do not interfere."], ["QRM?", "Do you have interference?"], ["QRM", "I have interference."], ["QRN?", "Are you troubled by static noise?"], ["QRN", "I am troubled by static noise."], ["QRO?", "Shall I increase transmit power?"], ["QRO", "Please increase transmit power."], ["QRP?", "Shall I decrease transmit power?"], ["QRP", "Please decrease transmit power."], ["QRQ?", "Shall I send faster?"], ["QRQ", "Please send faster (... words per minute)."], ["QRS?", "Shall I send more slowly?"], ["QRS", "Please send more slowly (... words per minute)."], ["QRT?", "Shall I cease or suspend operation?"], ["QRT", "I am suspending operation."], ["QRU?", "Have you anything for me?"], ["QRU", "I have nothing for you."], ["QRV?", "Are you ready?"], ["QRV", "I am ready."], ["QRX?", "Shall I standby? / When will you call me again?"], ["QRX", "Please standby. / I will call you again at ... (hours) on ... kHz (or MHz)."], ["QRZ?", "Who is calling me?"], ["QRZ", "You are being called by ... (on ... kHz (or MHz))."], ["QSA?", "What is the strength of my signals (or those of ... )?"], ["QSA", "The strength of your signals (or those of ...) is ... (1: very weak .. 5: very strong)."], ["QSB?", "Are my signals fading?"], ["QSB", "Your signals are fading."], ["QSD?", "Is my keying defective?"], ["QSD", "Your keying is defective."], ["QSK?", "Can you hear me between your signals (while transmitting), and if so can I break in on your transmission?"], ["QSK", "I can hear you between my signals (while transmitting); break in on my transmission."], ["QSL?", "Can you acknowledge receipt?"], ["QSL", "I am acknowledging receipt."], ["QSM?", "Shall I repeat the last telegram (message) which I sent you, or some previous telegram (message)?"], ["QSM", "Repeat the last telegram (message) which you sent me (or telegram(s) (message(s)) numbers(s) ...)."], ["QSN?", "Did you hear me (or ...) on ... kHz (or MHz)?."], ["QSN", "I did hear you (or ...) on ... kHz (or MHz)."], ["QSO?", "Can you communicate with ... direct or by relay?"], ["QSO", "I can communicate with ... direct (or by relay through ...)."], ["QSP?", "Will you relay a message to ...?"], ["QSP", "I will relay a message to ... ."], ["QSS?", "What working frequency will you use?"], ["QSS", "I will use ... kHz (or MHz)."], ["QSU?", "Shall I send or reply on this frequency (or on ... kHz (or MHz))?"], ["QSU", "Please send or reply on this frequency (or on ... kHz (or MHz))."], ["QSV?", "Shall I send a series of \"V\" on this frequency (or on ... kHz (or MHz))?"], ["QSV", "Please send a series of \"V\" on this frequency (or on ... kHz (or MHz))."], ["QSX?", "Will you listen to ... on ... kHz (or MHz)?"], ["QSX", "I am listening to ... on ... kHz (or MHz)."], ["QSY?", "Shall I change transmission frequency (to ... kHz (or MHz))?"], ["QSY", "Please change transmission frequency (to ... kHz (or MHz))."], ["QSZ?", "Shall I send each word or group more than once?"], ["QSZ", "Send each word or group twice (or ... times)."], ["QTC?", "How many telegrams (messages) have you to send?"], ["QTC", "I have ... telegrams (messages) for you (or for ...)."], ["QTH?", "What is your position in latitude and longitude (or according to any other indication)?"], ["QTH", "My position is ... latitude, ... longitude."], ["QTR?", "What is the correct time?"], ["QTR", "The correct time is ... hours."]];
function generateQuestion() {
  var topic = "Q-codes";
  var source = "https://www.giangrandi.org/electronics/radio/qcode.shtml";
  var generator = (0, _pick.pick)([function () {
    return (0, _questions.generateForward)(topic, source, function (st) {
      return "Translate '".concat(st, "'");
    }, qcodes);
  }, function () {
    return (0, _questions.generateBackward)(topic, source, function (st) {
      return st;
    }, qcodes);
  }]);
  return generator();
}
},{"./pick":"pick.ts","./questions":"questions.ts"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = x;
exports.useContext = P;
exports.useDebugValue = V;
exports.useEffect = _;
exports.useErrorBoundary = b;
exports.useId = g;
exports.useImperativeHandle = T;
exports.useLayoutEffect = A;
exports.useMemo = q;
exports.useReducer = y;
exports.useRef = F;
exports.useState = p;
var _preact = require("preact");
var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = _preact.options,
  a = e.__b,
  v = e.__r,
  l = e.diffed,
  m = e.__c,
  s = e.unmount,
  d = e.__;
function h(n, t) {
  e.__h && e.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({
    __V: c
  }), u.__[n];
}
function p(n) {
  return o = 1, y(D, n);
}
function y(n, u, i) {
  var o = h(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function _(n, u) {
  var i = h(t++, 3);
  !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function A(n, u) {
  var i = h(t++, 4);
  !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function F(n) {
  return o = 5, q(function () {
    return {
      current: n
    };
  }, []);
}
function T(n, t, r) {
  o = 6, A(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function q(n, r) {
  var u = h(t++, 7);
  return C(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function x(n, t) {
  return o = 8, q(function () {
    return n;
  }, t);
}
function P(n) {
  var u = r.context[n.__c],
    i = h(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function V(n, t) {
  e.useDebugValue && e.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = h(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = h(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], e.__e(t, n.__v);
  }
}
e.__b = function (n) {
  r = null, a && a(n);
}, e.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), d && d(n, t);
}, e.__r = function (n) {
  v && v(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, e.diffed = function (n) {
  l && l(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, e.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], e.__e(r, n.__v);
    }
  }), m && m(n, t);
}, e.unmount = function (n) {
  s && s(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && e.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function () {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"index.tsx":[function(require,module,exports) {
"use strict";

var _jsxRuntime = require("preact/jsx-runtime");
var _preact = require("preact");
var _prefixes = require("./prefixes");
var _qcodes = require("./qcodes");
var _pick = require("./pick");
var _hooks = require("preact/hooks");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var avgLimit = 0.6;
var QuestionWidget = function QuestionWidget(props) {
  var q = props.question;
  var color = props.correct == "good" ? "green" : props.correct == "bad" ? "red" : "";
  return (0, _jsxRuntime.jsxs)("div", {
    className: "option-container",
    children: [(0, _jsxRuntime.jsx)("h2", {
      children: q.topic
    }), (0, _jsxRuntime.jsx)("p", {
      children: q.text
    }), (0, _jsxRuntime.jsx)("button", {
      className: props.selectedOption == 0 ? color : "",
      onClick: function onClick() {
        return props.checkAnswer(0);
      },
      children: q.options[0]
    }), (0, _jsxRuntime.jsx)("button", {
      className: props.selectedOption == 1 ? color : "",
      onClick: function onClick() {
        return props.checkAnswer(1);
      },
      children: q.options[1]
    }), (0, _jsxRuntime.jsx)("button", {
      className: props.selectedOption == 2 ? color : "",
      onClick: function onClick() {
        return props.checkAnswer(2);
      },
      children: q.options[2]
    }), (0, _jsxRuntime.jsx)("button", {
      className: props.selectedOption == 3 ? color : "",
      onClick: function onClick() {
        return props.checkAnswer(3);
      },
      children: q.options[3]
    }), (0, _jsxRuntime.jsxs)("div", {
      className: "feedback",
      children: [props.correct == "good" && "That's right!", props.correct == "bad" && "Unfortunately not..."]
    }), (0, _jsxRuntime.jsx)("div", {
      className: "source",
      children: (0, _jsxRuntime.jsx)("a", {
        href: props.question.source,
        children: "source"
      })
    })]
  });
};
function weight(question) {
  return (question.failures + 1) / (question.attempts + 1);
}
function reciteOldQuestion(questions) {
  console.log("recite old question");
  var correctedWeight = function correctedWeight(q) {
    return weight(q) < avgLimit ? 0 : weight(q);
  };
  var totalWeight = sum(questions.map(correctedWeight));
  var r = Math.random() * totalWeight;
  var acc = 0;
  for (var i = 0; i < questions.length; i++) {
    acc += correctedWeight(questions[i]);
    if (acc > r) {
      return i;
    }
  }
  return questions.length - 1;
}
function generateNewQuestion(questions) {
  console.log("generate new question");
  return (0, _pick.pick)([_prefixes.generateQuestion, _qcodes.generateQuestion])();
}
function sum(ns) {
  var s = 0;
  var _iterator = _createForOfIteratorHelper(ns),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      s += n;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return s;
}
function generateQuestion(state) {
  var avgWeight = sum(state.questions.map(weight)) / state.questions.length;
  console.log(state.questions.length, avgWeight);
  if (state.questions.length < 4 || avgWeight < avgLimit) {
    var newQuestion = generateNewQuestion(state.questions);
    return _objectSpread(_objectSpread({}, state), {}, {
      questions: [newQuestion].concat(_toConsumableArray(state.questions)),
      currentQuestionIndex: 0,
      correct: "notAnswered",
      selectedOption: "notSelected"
    });
  } else {
    return _objectSpread(_objectSpread({}, state), {}, {
      currentQuestionIndex: reciteOldQuestion(state.questions),
      correct: "notAnswered",
      selectedOption: "notSelected"
    });
  }
}
var initialState = generateQuestion({
  questions: [],
  currentQuestionIndex: -1,
  correct: "notAnswered",
  selectedOption: "notSelected"
});
var App = function App() {
  var _useState = (0, _hooks.useState)(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var checkAnswer = (0, _hooks.useCallback)(function (selectedOption) {
    if (state.correct == "good") {
      return;
    }
    var question = state.questions[state.currentQuestionIndex];
    var ok = question.options[selectedOption] === question.correctAnswer;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      questions: state.questions.map(function (q, i) {
        if (i == state.currentQuestionIndex) {
          return _objectSpread(_objectSpread({}, q), {}, {
            attempts: q.attempts + 1,
            failures: q.failures + (!ok ? 1 : 0)
          });
        } else {
          return q;
        }
      }),
      selectedOption: selectedOption,
      correct: ok ? "good" : "bad"
    }));
    if (ok) {
      setTimeout(function () {
        setState(generateQuestion);
      }, 500);
    } else {
      setTimeout(function () {
        setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            correct: "notAnswered",
            selectedOption: "notSelected"
          });
        });
      }, 500);
    }
  }, [state]);
  return (0, _jsxRuntime.jsx)("div", {
    children: (0, _jsxRuntime.jsx)(QuestionWidget, {
      question: state.questions[state.currentQuestionIndex],
      checkAnswer: checkAnswer,
      correct: state.correct,
      selectedOption: state.selectedOption
    })
  });
};
(0, _preact.render)((0, _jsxRuntime.jsx)(App, {}), document.body);
},{"preact/jsx-runtime":"../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js","preact":"../node_modules/preact/dist/preact.module.js","./prefixes":"prefixes.ts","./qcodes":"qcodes.ts","./pick":"pick.ts","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62850" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.tsx"], null)
//# sourceMappingURL=/src.f69400ca.js.map