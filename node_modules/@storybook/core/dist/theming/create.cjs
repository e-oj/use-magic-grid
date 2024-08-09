"use strict";
var lt = Object.create;
var E = Object.defineProperty;
var dt = Object.getOwnPropertyDescriptor;
var ct = Object.getOwnPropertyNames;
var mt = Object.getPrototypeOf, gt = Object.prototype.hasOwnProperty;
var a = (e, t) => E(e, "name", { value: t, configurable: !0 });
var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), bt = (e, t) => {
  for (var r in t)
    E(e, r, { get: t[r], enumerable: !0 });
}, Fe = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of ct(t))
      !gt.call(e, o) && o !== r && E(e, o, { get: () => t[o], enumerable: !(n = dt(t, o)) || n.enumerable });
  return e;
};
var ee = (e, t, r) => (r = e != null ? lt(mt(e)) : {}, Fe(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? E(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), ht = (e) => Fe(E({}, "__esModule", { value: !0 }), e);

// ../node_modules/@babel/runtime/helpers/extends.js
var ze = S((Ba, I) => {
  function te() {
    return I.exports = te = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, I.exports.__esModule = !0, I.exports.default = I.exports, te.apply(this, arguments);
  }
  a(te, "_extends");
  I.exports = te, I.exports.__esModule = !0, I.exports.default = I.exports;
});

// ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var Ce = S((Ha, q) => {
  function vt(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  a(vt, "_assertThisInitialized");
  q.exports = vt, q.exports.__esModule = !0, q.exports.default = q.exports;
});

// ../node_modules/@babel/runtime/helpers/setPrototypeOf.js
var Z = S((Ea, O) => {
  function re(e, t) {
    return O.exports = re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ a(function(n, o) {
      return n.__proto__ = o, n;
    }, "_setPrototypeOf"), O.exports.__esModule = !0, O.exports.default = O.exports, re(e, t);
  }
  a(re, "_setPrototypeOf");
  O.exports = re, O.exports.__esModule = !0, O.exports.default = O.exports;
});

// ../node_modules/@babel/runtime/helpers/inheritsLoose.js
var Te = S((Wa, W) => {
  var yt = Z();
  function xt(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yt(e, t);
  }
  a(xt, "_inheritsLoose");
  W.exports = xt, W.exports.__esModule = !0, W.exports.default = W.exports;
});

// ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var Ae = S((Va, R) => {
  function ne(e) {
    return R.exports = ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ a(function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, "_getPrototypeOf"), R.exports.__esModule = !0, R.exports.default = R.exports, ne(e);
  }
  a(ne, "_getPrototypeOf");
  R.exports = ne, R.exports.__esModule = !0, R.exports.default = R.exports;
});

// ../node_modules/@babel/runtime/helpers/isNativeFunction.js
var Ie = S((Ga, U) => {
  function wt(e) {
    try {
      return Function.toString.call(e).indexOf("[native code]") !== -1;
    } catch {
      return typeof e == "function";
    }
  }
  a(wt, "_isNativeFunction");
  U.exports = wt, U.exports.__esModule = !0, U.exports.default = U.exports;
});

// ../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js
var Re = S((Ya, j) => {
  function Oe() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (j.exports = Oe = /* @__PURE__ */ a(function() {
      return !!e;
    }, "_isNativeReflectConstruct"), j.exports.__esModule = !0, j.exports.default = j.exports)();
  }
  a(Oe, "_isNativeReflectConstruct");
  j.exports = Oe, j.exports.__esModule = !0, j.exports.default = j.exports;
});

// ../node_modules/@babel/runtime/helpers/construct.js
var je = S((Za, V) => {
  var St = Z(), Ft = Re();
  function zt(e, t, r) {
    if (Ft()) return Reflect.construct.apply(null, arguments);
    var n = [null];
    n.push.apply(n, t);
    var o = new (e.bind.apply(e, n))();
    return r && St(o, r.prototype), o;
  }
  a(zt, "_construct");
  V.exports = zt, V.exports.__esModule = !0, V.exports.default = V.exports;
});

// ../node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var Me = S((_a, M) => {
  var Ct = Ae(), Tt = Z(), At = Ie(), It = je();
  function ae(e) {
    var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return M.exports = ae = /* @__PURE__ */ a(function(n) {
      if (n === null || !At(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof t < "u") {
        if (t.has(n)) return t.get(n);
        t.set(n, o);
      }
      function o() {
        return It(n, arguments, Ct(this).constructor);
      }
      return a(o, "Wrapper"), o.prototype = Object.create(n.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), Tt(o, n);
    }, "_wrapNativeSuper"), M.exports.__esModule = !0, M.exports.default = M.exports, ae(e);
  }
  a(ae, "_wrapNativeSuper");
  M.exports = ae, M.exports.__esModule = !0, M.exports.default = M.exports;
});

// ../node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js
var Pe = S((eo, N) => {
  function Ot(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e;
  }
  a(Ot, "_taggedTemplateLiteralLoose");
  N.exports = Ot, N.exports.__esModule = !0, N.exports.default = N.exports;
});

// ../node_modules/polished/dist/polished.cjs.js
var he = S((u) => {
  "use strict";
  Object.defineProperty(u, "__esModule", { value: !0 });
  var Rt = ze(), jt = Ce(), Mt = Te(), Pt = Me(), kt = Pe();
  function J(e) {
    return e && typeof e == "object" && "default" in e ? e : { default: e };
  }
  a(J, "_interopDefaultLegacy");
  var b = /* @__PURE__ */ J(Rt), $t = /* @__PURE__ */ J(jt), Bt = /* @__PURE__ */ J(Mt), Lt = /* @__PURE__ */ J(Pt), Qe = /* @__PURE__ */ J(
  kt);
  function ke() {
    var e;
    return e = arguments.length - 1, e < 0 || arguments.length <= e ? void 0 : arguments[e];
  }
  a(ke, "last");
  function Ht(e) {
    return -e;
  }
  a(Ht, "negation");
  function Dt(e, t) {
    return e + t;
  }
  a(Dt, "addition");
  function Et(e, t) {
    return e - t;
  }
  a(Et, "subtraction");
  function qt(e, t) {
    return e * t;
  }
  a(qt, "multiplication");
  function Wt(e, t) {
    return e / t;
  }
  a(Wt, "division");
  function Ut() {
    return Math.max.apply(Math, arguments);
  }
  a(Ut, "max");
  function Vt() {
    return Math.min.apply(Math, arguments);
  }
  a(Vt, "min");
  function Nt() {
    return Array.of.apply(Array, arguments);
  }
  a(Nt, "comma");
  var Gt = {
    symbols: {
      "*": {
        infix: {
          symbol: "*",
          f: qt,
          notation: "infix",
          precedence: 4,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: "*",
        regSymbol: "\\*"
      },
      "/": {
        infix: {
          symbol: "/",
          f: Wt,
          notation: "infix",
          precedence: 4,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: "/",
        regSymbol: "/"
      },
      "+": {
        infix: {
          symbol: "+",
          f: Dt,
          notation: "infix",
          precedence: 2,
          rightToLeft: 0,
          argCount: 2
        },
        prefix: {
          symbol: "+",
          f: ke,
          notation: "prefix",
          precedence: 3,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "+",
        regSymbol: "\\+"
      },
      "-": {
        infix: {
          symbol: "-",
          f: Et,
          notation: "infix",
          precedence: 2,
          rightToLeft: 0,
          argCount: 2
        },
        prefix: {
          symbol: "-",
          f: Ht,
          notation: "prefix",
          precedence: 3,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "-",
        regSymbol: "-"
      },
      ",": {
        infix: {
          symbol: ",",
          f: Nt,
          notation: "infix",
          precedence: 1,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: ",",
        regSymbol: ","
      },
      "(": {
        prefix: {
          symbol: "(",
          f: ke,
          notation: "prefix",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "(",
        regSymbol: "\\("
      },
      ")": {
        postfix: {
          symbol: ")",
          f: void 0,
          notation: "postfix",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: ")",
        regSymbol: "\\)"
      },
      min: {
        func: {
          symbol: "min",
          f: Vt,
          notation: "func",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "min",
        regSymbol: "min\\b"
      },
      max: {
        func: {
          symbol: "max",
          f: Ut,
          notation: "func",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "max",
        regSymbol: "max\\b"
      }
    }
  }, $e = Gt, Qt = {
    1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation:\
 0.4, lightness: 0.75 }).

`,
    2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, satu\
ration: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
    3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
    4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
    5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
    6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, \
blue: 100 }).

`,
    7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green\
: 205, blue: 100, alpha: 0.75 }).

`,
    8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
    9: `Please provide a number of steps to the modularScale helper.

`,
    10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
    11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
    12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
    13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
    14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
    15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
    16: `You must provide a template to this method.

`,
    17: `You passed an unsupported selector state to this method.

`,
    18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
    19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
    20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
    21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
    22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
    23: `fontFace expects a name of a font-family.

`,
    24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
    25: `fontFace expects localFonts to be an array.

`,
    26: `fontFace expects fileFormats to be an array.

`,
    27: `radialGradient requries at least 2 color-stops to properly render.

`,
    28: `Please supply a filename to retinaImage() as the first argument.

`,
    29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
    30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
    31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
    32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
    33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
    34: `borderRadius expects a radius value as a string or number as the second argument.

`,
    35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
    36: `Property must be a string value.

`,
    37: `Syntax Error at %s.

`,
    38: `Formula contains a function that needs parentheses at %s.

`,
    39: `Formula is missing closing parenthesis at %s.

`,
    40: `Formula has too many closing parentheses at %s.

`,
    41: `All values in a formula must have the same unit or be unitless.

`,
    42: `Please provide a number of steps to the modularScale helper.

`,
    43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
    44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
    45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
    46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
    47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
    48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
    49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
    50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
    51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
    52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
    53: `fontFace expects localFonts to be an array.

`,
    54: `fontFace expects fileFormats to be an array.

`,
    55: `fontFace expects a name of a font-family.

`,
    56: `linearGradient requries at least 2 color-stops to properly render.

`,
    57: `radialGradient requries at least 2 color-stops to properly render.

`,
    58: `Please supply a filename to retinaImage() as the first argument.

`,
    59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
    60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
    61: `Property must be a string value.

`,
    62: `borderRadius expects a radius value as a string or number as the second argument.

`,
    63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
    64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
    65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animat\
ion please supply them in simple values, e.g. animation('rotate', '2s').

`,
    66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
    67: `You must provide a template to this method.

`,
    68: `You passed an unsupported selector state to this method.

`,
    69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
    70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
    71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
    72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
    73: `Please provide a valid CSS variable.

`,
    74: `CSS variable not found and no default was provided.

`,
    75: `important requires a valid style object, got a %s instead.

`,
    76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
    77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
    78: `base must be set in "px" or "%" but you set it in "%s".
`
  };
  function Yt() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = t[0], o = [], i;
    for (i = 1; i < t.length; i += 1)
      o.push(t[i]);
    return o.forEach(function(s) {
      n = n.replace(/%[a-z]/, s);
    }), n;
  }
  a(Yt, "format");
  var p = /* @__PURE__ */ function(e) {
    Bt.default(t, e);
    function t(r) {
      var n;
      if (process.env.NODE_ENV === "production")
        n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r +
        " for more information.") || this;
      else {
        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
          i[s - 1] = arguments[s];
        n = e.call(this, Yt.apply(void 0, [Qt[r]].concat(i))) || this;
      }
      return $t.default(n);
    }
    return a(t, "PolishedError"), t;
  }(/* @__PURE__ */ Lt.default(Error)), Be = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;
  function Jt(e) {
    var t = {};
    return t.symbols = e ? b.default({}, $e.symbols, e.symbols) : b.default({}, $e.symbols), t;
  }
  a(Jt, "mergeSymbolMaps");
  function Le(e, t) {
    var r, n = e.pop();
    return t.push(n.f.apply(n, (r = []).concat.apply(r, t.splice(-n.argCount)))), n.precedence;
  }
  a(Le, "exec");
  function Zt(e, t) {
    var r = Jt(t), n, o = [r.symbols["("].prefix], i = [], s = new RegExp(
      // Pattern for numbers
      "\\d+(?:\\.\\d+)?|" + // ...and patterns for individual operators/function names
      Object.keys(r.symbols).map(function(v) {
        return r.symbols[v];
      }).sort(function(v, T) {
        return T.symbol.length - v.symbol.length;
      }).map(function(v) {
        return v.regSymbol;
      }).join("|") + "|(\\S)",
      "g"
    );
    s.lastIndex = 0;
    var f = !1;
    do {
      n = s.exec(e);
      var l = n || [")", void 0], c = l[0], h = l[1], d = r.symbols[c], m = d && !d.prefix && !d.func, x = !d || !d.postfix && !d.infix;
      if (h || (f ? x : m))
        throw new p(37, n ? n.index : e.length, e);
      if (f) {
        var w = d.postfix || d.infix;
        do {
          var C = o[o.length - 1];
          if ((w.precedence - C.precedence || C.rightToLeft) > 0) break;
        } while (Le(o, i));
        f = w.notation === "postfix", w.symbol !== ")" && (o.push(w), f && Le(o, i));
      } else if (d) {
        if (o.push(d.prefix || d.func), d.func && (n = s.exec(e), !n || n[0] !== "("))
          throw new p(38, n ? n.index : e.length, e);
      } else
        i.push(+c), f = !0;
    } while (n && o.length);
    if (o.length)
      throw new p(39, n ? n.index : e.length, e);
    if (n)
      throw new p(40, n ? n.index : e.length, e);
    return i.pop();
  }
  a(Zt, "calculate");
  function oe(e) {
    return e.split("").reverse().join("");
  }
  a(oe, "reverseString");
  function Xt(e, t) {
    var r = oe(e), n = r.match(Be);
    if (n && !n.every(function(i) {
      return i === n[0];
    }))
      throw new p(41);
    var o = oe(r.replace(Be, ""));
    return "" + Zt(o, t) + (n ? oe(n[0]) : "");
  }
  a(Xt, "math");
  var _t = /--[\S]*/g;
  function Kt(e, t) {
    if (!e || !e.match(_t))
      throw new p(73);
    var r;
    if (typeof document < "u" && document.documentElement !== null && (r = getComputedStyle(document.documentElement).getPropertyValue(e)), r)
      return r.trim();
    if (t)
      return t;
    throw new p(74);
  }
  a(Kt, "cssVar");
  function G(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  a(G, "capitalizeString");
  var er = ["Top", "Right", "Bottom", "Left"];
  function tr(e, t) {
    if (!e) return t.toLowerCase();
    var r = e.split("-");
    if (r.length > 1)
      return r.splice(1, 0, t), r.reduce(function(o, i) {
        return "" + o + G(i);
      });
    var n = e.replace(/([a-z])([A-Z])/g, "$1" + t + "$2");
    return e === n ? "" + e + t : n;
  }
  a(tr, "generateProperty");
  function rr(e, t) {
    for (var r = {}, n = 0; n < t.length; n += 1)
      (t[n] || t[n] === 0) && (r[tr(e, er[n])] = t[n]);
    return r;
  }
  a(rr, "generateStyles");
  function k(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    var o = r[0], i = r[1], s = i === void 0 ? o : i, f = r[2], l = f === void 0 ? o : f, c = r[3], h = c === void 0 ? s : c, d = [o, s, l, h];
    return rr(e, d);
  }
  a(k, "directionalProperty");
  function He(e, t) {
    return e.substr(-t.length) === t;
  }
  a(He, "endsWith");
  var nr = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function fe(e) {
    if (typeof e != "string") return e;
    var t = e.match(nr);
    return t ? parseFloat(e) : e;
  }
  a(fe, "stripUnit");
  var ar = /* @__PURE__ */ a(function(t) {
    return function(r, n) {
      n === void 0 && (n = "16px");
      var o = r, i = n;
      if (typeof r == "string") {
        if (!He(r, "px"))
          throw new p(69, t, r);
        o = fe(r);
      }
      if (typeof n == "string") {
        if (!He(n, "px"))
          throw new p(70, t, n);
        i = fe(n);
      }
      if (typeof o == "string")
        throw new p(71, r, t);
      if (typeof i == "string")
        throw new p(72, n, t);
      return "" + o / i + t;
    };
  }, "pxtoFactory"), Ye = ar, or = /* @__PURE__ */ Ye("em"), ir = or, ur = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function A(e) {
    if (typeof e != "string") return [e, ""];
    var t = e.match(ur);
    return t ? [parseFloat(e), t[2]] : [e, void 0];
  }
  a(A, "getValueAndUnit");
  function Je(e, t) {
    if (typeof e != "object" || e === null)
      throw new p(75, typeof e);
    var r = {};
    return Object.keys(e).forEach(function(n) {
      typeof e[n] == "object" && e[n] !== null ? r[n] = Je(e[n], t) : !t || t && (t === n || t.indexOf(n) >= 0) ? r[n] = e[n] + " !important" :
      r[n] = e[n];
    }), r;
  }
  a(Je, "important");
  var Ze = {
    minorSecond: 1.067,
    majorSecond: 1.125,
    minorThird: 1.2,
    majorThird: 1.25,
    perfectFourth: 1.333,
    augFourth: 1.414,
    perfectFifth: 1.5,
    minorSixth: 1.6,
    goldenSection: 1.618,
    majorSixth: 1.667,
    minorSeventh: 1.778,
    majorSeventh: 1.875,
    octave: 2,
    majorTenth: 2.5,
    majorEleventh: 2.667,
    majorTwelfth: 3,
    doubleOctave: 4
  };
  function sr(e) {
    return Ze[e];
  }
  a(sr, "getRatio");
  function fr(e, t, r) {
    if (t === void 0 && (t = "1em"), r === void 0 && (r = 1.333), typeof e != "number")
      throw new p(42);
    if (typeof r == "string" && !Ze[r])
      throw new p(43);
    var n = typeof t == "string" ? A(t) : [t, ""], o = n[0], i = n[1], s = typeof r == "string" ? sr(r) : r;
    if (typeof o == "string")
      throw new p(44, t);
    return "" + o * Math.pow(s, e) + (i || "");
  }
  a(fr, "modularScale");
  var pr = /* @__PURE__ */ Ye("rem"), lr = pr, pe = 16;
  function Xe(e) {
    var t = A(e);
    if (t[1] === "px")
      return parseFloat(e);
    if (t[1] === "%")
      return parseFloat(e) / 100 * pe;
    throw new p(78, t[1]);
  }
  a(Xe, "convertBase");
  function dr() {
    if (typeof document < "u" && document.documentElement !== null) {
      var e = getComputedStyle(document.documentElement).fontSize;
      return e ? Xe(e) : pe;
    }
    return pe;
  }
  a(dr, "getBaseFromDoc");
  function cr(e, t) {
    var r = A(e);
    if (r[1] !== "rem" && r[1] !== "")
      throw new p(77, r[1]);
    var n = t ? Xe(t) : dr();
    return r[0] * n + "px";
  }
  a(cr, "remToPx");
  var mr = {
    back: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    circ: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
    cubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
    expo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
    quad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
    quart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
    quint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
    sine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)"
  };
  function gr(e) {
    return mr[e.toLowerCase().trim()];
  }
  a(gr, "easeIn");
  var br = {
    back: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
    circ: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
    cubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
    expo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
    quad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
    quart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
    quint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
    sine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
  };
  function hr(e) {
    return br[e.toLowerCase().trim()];
  }
  a(hr, "easeInOut");
  var vr = {
    back: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
    cubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
    circ: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
    expo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
    quad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
    quart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
    quint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
    sine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)"
  };
  function yr(e) {
    return vr[e.toLowerCase().trim()];
  }
  a(yr, "easeOut");
  function le(e, t, r, n) {
    r === void 0 && (r = "320px"), n === void 0 && (n = "1200px");
    var o = A(e), i = o[0], s = o[1], f = A(t), l = f[0], c = f[1], h = A(r), d = h[0], m = h[1], x = A(n), w = x[0], C = x[1];
    if (typeof d != "number" || typeof w != "number" || !m || !C || m !== C)
      throw new p(47);
    if (typeof i != "number" || typeof l != "number" || s !== c)
      throw new p(48);
    if (s !== m || c !== C)
      throw new p(76);
    var v = (i - l) / (d - w), T = l - v * w;
    return "calc(" + T.toFixed(2) + (s || "") + " + " + (100 * v).toFixed(2) + "vw)";
  }
  a(le, "between");
  function xr(e) {
    var t;
    e === void 0 && (e = "&");
    var r = e + "::after";
    return t = {}, t[r] = {
      clear: "both",
      content: '""',
      display: "table"
    }, t;
  }
  a(xr, "clearFix");
  function wr(e) {
    return e === void 0 && (e = 0), {
      position: "absolute",
      top: e,
      right: e,
      bottom: e,
      left: e
    };
  }
  a(wr, "cover");
  function Sr(e, t) {
    t === void 0 && (t = 1);
    var r = {
      display: "inline-block",
      maxWidth: e || "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    };
    return t > 1 ? b.default({}, r, {
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: t,
      display: "-webkit-box",
      whiteSpace: "normal"
    }) : r;
  }
  a(Sr, "ellipsis");
  function Fr(e, t) {
    var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (Array.isArray(e) || (r = zr(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0;
      return function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  a(Fr, "_createForOfIteratorHelperLoose");
  function zr(e, t) {
    if (e) {
      if (typeof e == "string") return De(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return De(e, t);
    }
  }
  a(zr, "_unsupportedIterableToArray");
  function De(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
      n[r] = e[r];
    return n;
  }
  a(De, "_arrayLikeToArray");
  function Cr(e, t, r) {
    if (t === void 0 && (t = "320px"), r === void 0 && (r = "1200px"), !Array.isArray(e) && typeof e != "object" || e === null)
      throw new p(49);
    if (Array.isArray(e)) {
      for (var n = {}, o = {}, i = Fr(e), s; !(s = i()).done; ) {
        var f, l, c = s.value;
        if (!c.prop || !c.fromSize || !c.toSize)
          throw new p(50);
        o[c.prop] = c.fromSize, n["@media (min-width: " + t + ")"] = b.default({}, n["@media (min-width: " + t + ")"], (f = {}, f[c.prop] = le(
        c.fromSize, c.toSize, t, r), f)), n["@media (min-width: " + r + ")"] = b.default({}, n["@media (min-width: " + r + ")"], (l = {}, l[c.
        prop] = c.toSize, l));
      }
      return b.default({}, o, n);
    } else {
      var h, d, m;
      if (!e.prop || !e.fromSize || !e.toSize)
        throw new p(51);
      return m = {}, m[e.prop] = e.fromSize, m["@media (min-width: " + t + ")"] = (h = {}, h[e.prop] = le(e.fromSize, e.toSize, t, r), h), m["\
@media (min-width: " + r + ")"] = (d = {}, d[e.prop] = e.toSize, d), m;
    }
  }
  a(Cr, "fluidRange");
  var Tr = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i, Ar = {
    woff: "woff",
    woff2: "woff2",
    ttf: "truetype",
    otf: "opentype",
    eot: "embedded-opentype",
    svg: "svg",
    svgz: "svg"
  };
  function Ee(e, t) {
    return t ? ' format("' + Ar[e] + '")' : "";
  }
  a(Ee, "generateFormatHint");
  function Ir(e) {
    return !!e.replace(/\s+/g, " ").match(Tr);
  }
  a(Ir, "isDataURI");
  function Or(e, t, r) {
    if (Ir(e))
      return 'url("' + e + '")' + Ee(t[0], r);
    var n = t.map(function(o) {
      return 'url("' + e + "." + o + '")' + Ee(o, r);
    });
    return n.join(", ");
  }
  a(Or, "generateFileReferences");
  function Rr(e) {
    var t = e.map(function(r) {
      return 'local("' + r + '")';
    });
    return t.join(", ");
  }
  a(Rr, "generateLocalReferences");
  function jr(e, t, r, n) {
    var o = [];
    return t && o.push(Rr(t)), e && o.push(Or(e, r, n)), o.join(", ");
  }
  a(jr, "generateSources");
  function Mr(e) {
    var t = e.fontFamily, r = e.fontFilePath, n = e.fontStretch, o = e.fontStyle, i = e.fontVariant, s = e.fontWeight, f = e.fileFormats, l = f ===
    void 0 ? ["eot", "woff2", "woff", "ttf", "svg"] : f, c = e.formatHint, h = c === void 0 ? !1 : c, d = e.localFonts, m = d === void 0 ? [
    t] : d, x = e.unicodeRange, w = e.fontDisplay, C = e.fontVariationSettings, v = e.fontFeatureSettings;
    if (!t) throw new p(55);
    if (!r && !m)
      throw new p(52);
    if (m && !Array.isArray(m))
      throw new p(53);
    if (!Array.isArray(l))
      throw new p(54);
    var T = {
      "@font-face": {
        fontFamily: t,
        src: jr(r, m, l, h),
        unicodeRange: x,
        fontStretch: n,
        fontStyle: o,
        fontVariant: i,
        fontWeight: s,
        fontDisplay: w,
        fontVariationSettings: C,
        fontFeatureSettings: v
      }
    };
    return JSON.parse(JSON.stringify(T));
  }
  a(Mr, "fontFace");
  function Pr() {
    return {
      textIndent: "101%",
      overflow: "hidden",
      whiteSpace: "nowrap"
    };
  }
  a(Pr, "hideText");
  function kr() {
    return {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    };
  }
  a(kr, "hideVisually");
  function _e(e) {
    return e === void 0 && (e = 1.3), `
    @media only screen and (-webkit-min-device-pixel-ratio: ` + e + `),
    only screen and (min--moz-device-pixel-ratio: ` + e + `),
    only screen and (-o-min-device-pixel-ratio: ` + e + `/1),
    only screen and (min-resolution: ` + Math.round(e * 96) + `dpi),
    only screen and (min-resolution: ` + e + `dppx)
  `;
  }
  a(_e, "hiDPI");
  function Ke(e) {
    for (var t = "", r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    for (var i = 0; i < e.length; i += 1)
      if (t += e[i], i === n.length - 1 && n[i]) {
        var s = n.filter(function(f) {
          return !!f;
        });
        s.length > 1 ? (t = t.slice(0, -1), t += ", " + n[i]) : s.length === 1 && (t += "" + n[i]);
      } else n[i] && (t += n[i] + " ");
    return t.trim();
  }
  a(Ke, "constructGradientValue");
  var qe;
  function $r(e) {
    var t = e.colorStops, r = e.fallback, n = e.toDirection, o = n === void 0 ? "" : n;
    if (!t || t.length < 2)
      throw new p(56);
    return {
      backgroundColor: r || t[0].replace(/,\s+/g, ",").split(" ")[0].replace(/,(?=\S)/g, ", "),
      backgroundImage: Ke(qe || (qe = Qe.default(["linear-gradient(", "", ")"])), o, t.join(", ").replace(/,(?=\S)/g, ", "))
    };
  }
  a($r, "linearGradient");
  function Br() {
    var e;
    return [(e = {
      html: {
        lineHeight: "1.15",
        textSizeAdjust: "100%"
      },
      body: {
        margin: "0"
      },
      main: {
        display: "block"
      },
      h1: {
        fontSize: "2em",
        margin: "0.67em 0"
      },
      hr: {
        boxSizing: "content-box",
        height: "0",
        overflow: "visible"
      },
      pre: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      a: {
        backgroundColor: "transparent"
      },
      "abbr[title]": {
        borderBottom: "none",
        textDecoration: "underline"
      }
    }, e[`b,
    strong`] = {
      fontWeight: "bolder"
    }, e[`code,
    kbd,
    samp`] = {
      fontFamily: "monospace, monospace",
      fontSize: "1em"
    }, e.small = {
      fontSize: "80%"
    }, e[`sub,
    sup`] = {
      fontSize: "75%",
      lineHeight: "0",
      position: "relative",
      verticalAlign: "baseline"
    }, e.sub = {
      bottom: "-0.25em"
    }, e.sup = {
      top: "-0.5em"
    }, e.img = {
      borderStyle: "none"
    }, e[`button,
    input,
    optgroup,
    select,
    textarea`] = {
      fontFamily: "inherit",
      fontSize: "100%",
      lineHeight: "1.15",
      margin: "0"
    }, e[`button,
    input`] = {
      overflow: "visible"
    }, e[`button,
    select`] = {
      textTransform: "none"
    }, e[`button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`] = {
      WebkitAppearance: "button"
    }, e[`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`] = {
      borderStyle: "none",
      padding: "0"
    }, e[`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`] = {
      outline: "1px dotted ButtonText"
    }, e.fieldset = {
      padding: "0.35em 0.625em 0.75em"
    }, e.legend = {
      boxSizing: "border-box",
      color: "inherit",
      display: "table",
      maxWidth: "100%",
      padding: "0",
      whiteSpace: "normal"
    }, e.progress = {
      verticalAlign: "baseline"
    }, e.textarea = {
      overflow: "auto"
    }, e[`[type="checkbox"],
    [type="radio"]`] = {
      boxSizing: "border-box",
      padding: "0"
    }, e[`[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`] = {
      height: "auto"
    }, e['[type="search"]'] = {
      WebkitAppearance: "textfield",
      outlineOffset: "-2px"
    }, e['[type="search"]::-webkit-search-decoration'] = {
      WebkitAppearance: "none"
    }, e["::-webkit-file-upload-button"] = {
      WebkitAppearance: "button",
      font: "inherit"
    }, e.details = {
      display: "block"
    }, e.summary = {
      display: "list-item"
    }, e.template = {
      display: "none"
    }, e["[hidden]"] = {
      display: "none"
    }, e), {
      "abbr[title]": {
        textDecoration: "underline dotted"
      }
    }];
  }
  a(Br, "normalize");
  var We;
  function Lr(e) {
    var t = e.colorStops, r = e.extent, n = r === void 0 ? "" : r, o = e.fallback, i = e.position, s = i === void 0 ? "" : i, f = e.shape, l = f ===
    void 0 ? "" : f;
    if (!t || t.length < 2)
      throw new p(57);
    return {
      backgroundColor: o || t[0].split(" ")[0],
      backgroundImage: Ke(We || (We = Qe.default(["radial-gradient(", "", "", "", ")"])), s, l, n, t.join(", "))
    };
  }
  a(Lr, "radialGradient");
  function Hr(e, t, r, n, o) {
    var i;
    if (r === void 0 && (r = "png"), o === void 0 && (o = "_2x"), !e)
      throw new p(58);
    var s = r.replace(/^\./, ""), f = n ? n + "." + s : "" + e + o + "." + s;
    return i = {
      backgroundImage: "url(" + e + "." + s + ")"
    }, i[_e()] = b.default({
      backgroundImage: "url(" + f + ")"
    }, t ? {
      backgroundSize: t
    } : {}), i;
  }
  a(Hr, "retinaImage");
  var Dr = {
    easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
    easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
    easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
    easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
    easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
    easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
    easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
    easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
    easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
    easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
    easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
    easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
    easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
    easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
    easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
    easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
    easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
    easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
    easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
    easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
    easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
    easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
    easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
  };
  function Er(e) {
    return Dr[e];
  }
  a(Er, "getTimingFunction");
  function qr(e) {
    return Er(e);
  }
  a(qr, "timingFunctions");
  var Wr = /* @__PURE__ */ a(function(t, r, n) {
    var o = "" + n[0] + (n[1] || ""), i = "" + n[0] / 2 + (n[1] || ""), s = "" + r[0] + (r[1] || ""), f = "" + r[0] / 2 + (r[1] || "");
    switch (t) {
      case "top":
        return "0 " + i + " " + s + " " + i;
      case "topLeft":
        return o + " " + s + " 0 0";
      case "left":
        return f + " " + o + " " + f + " 0";
      case "bottomLeft":
        return o + " 0 0 " + s;
      case "bottom":
        return s + " " + i + " 0 " + i;
      case "bottomRight":
        return "0 0 " + o + " " + s;
      case "right":
        return f + " 0 " + f + " " + o;
      case "topRight":
      default:
        return "0 " + o + " " + s + " 0";
    }
  }, "getBorderWidth"), Ur = /* @__PURE__ */ a(function(t, r) {
    switch (t) {
      case "top":
      case "bottomRight":
        return {
          borderBottomColor: r
        };
      case "right":
      case "bottomLeft":
        return {
          borderLeftColor: r
        };
      case "bottom":
      case "topLeft":
        return {
          borderTopColor: r
        };
      case "left":
      case "topRight":
        return {
          borderRightColor: r
        };
      default:
        throw new p(59);
    }
  }, "getBorderColor");
  function Vr(e) {
    var t = e.pointingDirection, r = e.height, n = e.width, o = e.foregroundColor, i = e.backgroundColor, s = i === void 0 ? "transparent" :
    i, f = A(n), l = A(r);
    if (isNaN(l[0]) || isNaN(f[0]))
      throw new p(60);
    return b.default({
      width: "0",
      height: "0",
      borderColor: s
    }, Ur(t, o), {
      borderStyle: "solid",
      borderWidth: Wr(t, l, f)
    });
  }
  a(Vr, "triangle");
  function Nr(e) {
    e === void 0 && (e = "break-word");
    var t = e === "break-word" ? "break-all" : e;
    return {
      overflowWrap: e,
      wordWrap: e,
      wordBreak: t
    };
  }
  a(Nr, "wordWrap");
  function ie(e) {
    return Math.round(e * 255);
  }
  a(ie, "colorToInt");
  function Gr(e, t, r) {
    return ie(e) + "," + ie(t) + "," + ie(r);
  }
  a(Gr, "convertToInt");
  function Q(e, t, r, n) {
    if (n === void 0 && (n = Gr), t === 0)
      return n(r, r, r);
    var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * t, s = i * (1 - Math.abs(o % 2 - 1)), f = 0, l = 0, c = 0;
    o >= 0 && o < 1 ? (f = i, l = s) : o >= 1 && o < 2 ? (f = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) :
    o >= 4 && o < 5 ? (f = s, c = i) : o >= 5 && o < 6 && (f = i, c = s);
    var h = r - i / 2, d = f + h, m = l + h, x = c + h;
    return n(d, m, x);
  }
  a(Q, "hslToRgb");
  var Ue = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };
  function Qr(e) {
    if (typeof e != "string") return e;
    var t = e.toLowerCase();
    return Ue[t] ? "#" + Ue[t] : e;
  }
  a(Qr, "nameToHex");
  var Yr = /^#[a-fA-F0-9]{6}$/, Jr = /^#[a-fA-F0-9]{8}$/, Zr = /^#[a-fA-F0-9]{3}$/, Xr = /^#[a-fA-F0-9]{4}$/, ue = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  _r = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Kr = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  en = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function P(e) {
    if (typeof e != "string")
      throw new p(3);
    var t = Qr(e);
    if (t.match(Yr))
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16)
      };
    if (t.match(Jr)) {
      var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
        alpha: r
      };
    }
    if (t.match(Zr))
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16)
      };
    if (t.match(Xr)) {
      var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
        alpha: n
      };
    }
    var o = ue.exec(t);
    if (o)
      return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10)
      };
    var i = _r.exec(t.substring(0, 50));
    if (i)
      return {
        red: parseInt("" + i[1], 10),
        green: parseInt("" + i[2], 10),
        blue: parseInt("" + i[3], 10),
        alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
      };
    var s = Kr.exec(t);
    if (s) {
      var f = parseInt("" + s[1], 10), l = parseInt("" + s[2], 10) / 100, c = parseInt("" + s[3], 10) / 100, h = "rgb(" + Q(f, l, c) + ")", d = ue.
      exec(h);
      if (!d)
        throw new p(4, t, h);
      return {
        red: parseInt("" + d[1], 10),
        green: parseInt("" + d[2], 10),
        blue: parseInt("" + d[3], 10)
      };
    }
    var m = en.exec(t.substring(0, 50));
    if (m) {
      var x = parseInt("" + m[1], 10), w = parseInt("" + m[2], 10) / 100, C = parseInt("" + m[3], 10) / 100, v = "rgb(" + Q(x, w, C) + ")", T = ue.
      exec(v);
      if (!T)
        throw new p(4, t, v);
      return {
        red: parseInt("" + T[1], 10),
        green: parseInt("" + T[2], 10),
        blue: parseInt("" + T[3], 10),
        alpha: parseFloat("" + m[4]) > 1 ? parseFloat("" + m[4]) / 100 : parseFloat("" + m[4])
      };
    }
    throw new p(5);
  }
  a(P, "parseToRgb");
  function tn(e) {
    var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), i = Math.min(t, r, n), s = (o + i) / 2;
    if (o === i)
      return e.alpha !== void 0 ? {
        hue: 0,
        saturation: 0,
        lightness: s,
        alpha: e.alpha
      } : {
        hue: 0,
        saturation: 0,
        lightness: s
      };
    var f, l = o - i, c = s > 0.5 ? l / (2 - o - i) : l / (o + i);
    switch (o) {
      case t:
        f = (r - n) / l + (r < n ? 6 : 0);
        break;
      case r:
        f = (n - t) / l + 2;
        break;
      default:
        f = (t - r) / l + 4;
        break;
    }
    return f *= 60, e.alpha !== void 0 ? {
      hue: f,
      saturation: c,
      lightness: s,
      alpha: e.alpha
    } : {
      hue: f,
      saturation: c,
      lightness: s
    };
  }
  a(tn, "rgbToHsl");
  function z(e) {
    return tn(P(e));
  }
  a(z, "parseToHsl");
  var rn = /* @__PURE__ */ a(function(t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
  }, "reduceHexValue"), de = rn;
  function $(e) {
    var t = e.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  a($, "numberToHex");
  function se(e) {
    return $(Math.round(e * 255));
  }
  a(se, "colorToHex");
  function nn(e, t, r) {
    return de("#" + se(e) + se(t) + se(r));
  }
  a(nn, "convertToHex");
  function X(e, t, r) {
    return Q(e, t, r, nn);
  }
  a(X, "hslToHex");
  function ce(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return X(e, t, r);
    if (typeof e == "object" && t === void 0 && r === void 0)
      return X(e.hue, e.saturation, e.lightness);
    throw new p(1);
  }
  a(ce, "hsl");
  function me(e, t, r, n) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? X(e, t, r) : "rgba(" + Q(e, t, r) + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? X(e.hue, e.saturation, e.lightness) : "rgba(" + Q(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
    throw new p(2);
  }
  a(me, "hsla");
  function Y(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return de("#" + $(e) + $(t) + $(r));
    if (typeof e == "object" && t === void 0 && r === void 0)
      return de("#" + $(e.red) + $(e.green) + $(e.blue));
    throw new p(6);
  }
  a(Y, "rgb");
  function L(e, t, r, n) {
    if (typeof e == "string" && typeof t == "number") {
      var o = P(e);
      return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
    } else {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
        return n >= 1 ? Y(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1 ? Y(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
    }
    throw new p(7);
  }
  a(L, "rgba");
  var an = /* @__PURE__ */ a(function(t) {
    return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha >
    "u");
  }, "isRgb"), on = /* @__PURE__ */ a(function(t) {
    return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
  }, "isRgba"), un = /* @__PURE__ */ a(function(t) {
    return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.
    alpha > "u");
  }, "isHsl"), sn = /* @__PURE__ */ a(function(t) {
    return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
  }, "isHsla");
  function F(e) {
    if (typeof e != "object") throw new p(8);
    if (on(e)) return L(e);
    if (an(e)) return Y(e);
    if (sn(e)) return me(e);
    if (un(e)) return ce(e);
    throw new p(8);
  }
  a(F, "toColorString");
  function et(e, t, r) {
    return /* @__PURE__ */ a(function() {
      var o = r.concat(Array.prototype.slice.call(arguments));
      return o.length >= t ? e.apply(this, o) : et(e, t, o);
    }, "fn");
  }
  a(et, "curried");
  function y(e) {
    return et(e, e.length, []);
  }
  a(y, "curry");
  function fn(e, t) {
    if (t === "transparent") return t;
    var r = z(t);
    return F(b.default({}, r, {
      hue: r.hue + parseFloat(e)
    }));
  }
  a(fn, "adjustHue");
  var pn = /* @__PURE__ */ y(fn), ln = pn;
  function dn(e) {
    if (e === "transparent") return e;
    var t = z(e);
    return F(b.default({}, t, {
      hue: (t.hue + 180) % 360
    }));
  }
  a(dn, "complement");
  function H(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  a(H, "guard");
  function cn(e, t) {
    if (t === "transparent") return t;
    var r = z(t);
    return F(b.default({}, r, {
      lightness: H(0, 1, r.lightness - parseFloat(e))
    }));
  }
  a(cn, "darken");
  var mn = /* @__PURE__ */ y(cn), gn = mn;
  function bn(e, t) {
    if (t === "transparent") return t;
    var r = z(t);
    return F(b.default({}, r, {
      saturation: H(0, 1, r.saturation - parseFloat(e))
    }));
  }
  a(bn, "desaturate");
  var hn = /* @__PURE__ */ y(bn), vn = hn;
  function _(e) {
    if (e === "transparent") return 0;
    var t = P(e), r = Object.keys(t).map(function(s) {
      var f = t[s] / 255;
      return f <= 0.03928 ? f / 12.92 : Math.pow((f + 0.055) / 1.055, 2.4);
    }), n = r[0], o = r[1], i = r[2];
    return parseFloat((0.2126 * n + 0.7152 * o + 0.0722 * i).toFixed(3));
  }
  a(_, "getLuminance");
  function ge(e, t) {
    var r = _(e), n = _(t);
    return parseFloat((r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05)).toFixed(2));
  }
  a(ge, "getContrast");
  function yn(e) {
    return e === "transparent" ? e : F(b.default({}, z(e), {
      saturation: 0
    }));
  }
  a(yn, "grayscale");
  function xn(e) {
    if (typeof e == "object" && typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number")
      return e.alpha && typeof e.alpha == "number" ? me({
        hue: e.hue,
        saturation: e.saturation,
        lightness: e.lightness,
        alpha: e.alpha
      }) : ce({
        hue: e.hue,
        saturation: e.saturation,
        lightness: e.lightness
      });
    throw new p(45);
  }
  a(xn, "hslToColorString");
  function wn(e) {
    if (e === "transparent") return e;
    var t = P(e);
    return F(b.default({}, t, {
      red: 255 - t.red,
      green: 255 - t.green,
      blue: 255 - t.blue
    }));
  }
  a(wn, "invert");
  function Sn(e, t) {
    if (t === "transparent") return t;
    var r = z(t);
    return F(b.default({}, r, {
      lightness: H(0, 1, r.lightness + parseFloat(e))
    }));
  }
  a(Sn, "lighten");
  var Fn = /* @__PURE__ */ y(Sn), zn = Fn;
  function Cn(e, t) {
    var r = ge(e, t);
    return {
      AA: r >= 4.5,
      AALarge: r >= 3,
      AAA: r >= 7,
      AAALarge: r >= 4.5
    };
  }
  a(Cn, "meetsContrastGuidelines");
  function Tn(e, t, r) {
    if (t === "transparent") return r;
    if (r === "transparent") return t;
    if (e === 0) return r;
    var n = P(t), o = b.default({}, n, {
      alpha: typeof n.alpha == "number" ? n.alpha : 1
    }), i = P(r), s = b.default({}, i, {
      alpha: typeof i.alpha == "number" ? i.alpha : 1
    }), f = o.alpha - s.alpha, l = parseFloat(e) * 2 - 1, c = l * f === -1 ? l : l + f, h = 1 + l * f, d = (c / h + 1) / 2, m = 1 - d, x = {
      red: Math.floor(o.red * d + s.red * m),
      green: Math.floor(o.green * d + s.green * m),
      blue: Math.floor(o.blue * d + s.blue * m),
      alpha: o.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e))
    };
    return L(x);
  }
  a(Tn, "mix");
  var An = /* @__PURE__ */ y(Tn), be = An;
  function In(e, t) {
    if (t === "transparent") return t;
    var r = P(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = b.default({}, r, {
      alpha: H(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
    });
    return L(o);
  }
  a(In, "opacify");
  var On = /* @__PURE__ */ y(In), Rn = On, Ve = "#000", Ne = "#fff";
  function jn(e, t, r, n) {
    t === void 0 && (t = Ve), r === void 0 && (r = Ne), n === void 0 && (n = !0);
    var o = _(e) > 0.179, i = o ? t : r;
    return !n || ge(e, i) >= 4.5 ? i : o ? Ve : Ne;
  }
  a(jn, "readableColor");
  function Mn(e) {
    if (typeof e == "object" && typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number")
      return typeof e.alpha == "number" ? L({
        red: e.red,
        green: e.green,
        blue: e.blue,
        alpha: e.alpha
      }) : Y({
        red: e.red,
        green: e.green,
        blue: e.blue
      });
    throw new p(46);
  }
  a(Mn, "rgbToColorString");
  function Pn(e, t) {
    if (t === "transparent") return t;
    var r = z(t);
    return F(b.default({}, r, {
      saturation: H(0, 1, r.saturation + parseFloat(e))
    }));
  }
  a(Pn, "saturate");
  var kn = /* @__PURE__ */ y(Pn), $n = kn;
  function Bn(e, t) {
    return t === "transparent" ? t : F(b.default({}, z(t), {
      hue: parseFloat(e)
    }));
  }
  a(Bn, "setHue");
  var Ln = /* @__PURE__ */ y(Bn), Hn = Ln;
  function Dn(e, t) {
    return t === "transparent" ? t : F(b.default({}, z(t), {
      lightness: parseFloat(e)
    }));
  }
  a(Dn, "setLightness");
  var En = /* @__PURE__ */ y(Dn), qn = En;
  function Wn(e, t) {
    return t === "transparent" ? t : F(b.default({}, z(t), {
      saturation: parseFloat(e)
    }));
  }
  a(Wn, "setSaturation");
  var Un = /* @__PURE__ */ y(Wn), Vn = Un;
  function Nn(e, t) {
    return t === "transparent" ? t : be(parseFloat(e), "rgb(0, 0, 0)", t);
  }
  a(Nn, "shade");
  var Gn = /* @__PURE__ */ y(Nn), Qn = Gn;
  function Yn(e, t) {
    return t === "transparent" ? t : be(parseFloat(e), "rgb(255, 255, 255)", t);
  }
  a(Yn, "tint");
  var Jn = /* @__PURE__ */ y(Yn), Zn = Jn;
  function Xn(e, t) {
    if (t === "transparent") return t;
    var r = P(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = b.default({}, r, {
      alpha: H(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
    });
    return L(o);
  }
  a(Xn, "transparentize");
  var _n = /* @__PURE__ */ y(Xn), Kn = _n;
  function ea() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = Array.isArray(t[0]);
    if (!n && t.length > 8)
      throw new p(64);
    var o = t.map(function(i) {
      if (n && !Array.isArray(i) || !n && Array.isArray(i))
        throw new p(65);
      if (Array.isArray(i) && i.length > 8)
        throw new p(66);
      return Array.isArray(i) ? i.join(" ") : i;
    }).join(", ");
    return {
      animation: o
    };
  }
  a(ea, "animation");
  function ta() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return {
      backgroundImage: t.join(", ")
    };
  }
  a(ta, "backgroundImages");
  function ra() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return {
      background: t.join(", ")
    };
  }
  a(ra, "backgrounds");
  var na = ["top", "right", "bottom", "left"];
  function aa(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    if (typeof e == "string" && na.indexOf(e) >= 0) {
      var o;
      return o = {}, o["border" + G(e) + "Width"] = r[0], o["border" + G(e) + "Style"] = r[1], o["border" + G(e) + "Color"] = r[2], o;
    } else
      return r.unshift(e), {
        borderWidth: r[0],
        borderStyle: r[1],
        borderColor: r[2]
      };
  }
  a(aa, "border");
  function oa() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return k.apply(void 0, ["borderColor"].concat(t));
  }
  a(oa, "borderColor");
  function ia(e, t) {
    var r = G(e);
    if (!t && t !== 0)
      throw new p(62);
    if (r === "Top" || r === "Bottom") {
      var n;
      return n = {}, n["border" + r + "RightRadius"] = t, n["border" + r + "LeftRadius"] = t, n;
    }
    if (r === "Left" || r === "Right") {
      var o;
      return o = {}, o["borderTop" + r + "Radius"] = t, o["borderBottom" + r + "Radius"] = t, o;
    }
    throw new p(63);
  }
  a(ia, "borderRadius");
  function ua() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return k.apply(void 0, ["borderStyle"].concat(t));
  }
  a(ua, "borderStyle");
  function sa() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return k.apply(void 0, ["borderWidth"].concat(t));
  }
  a(sa, "borderWidth");
  function Ge(e, t) {
    var r = t ? ":" + t : "";
    return e(r);
  }
  a(Ge, "generateSelectors");
  function tt(e, t, r) {
    if (!t) throw new p(67);
    if (e.length === 0) return Ge(t, null);
    for (var n = [], o = 0; o < e.length; o += 1) {
      if (r && r.indexOf(e[o]) < 0)
        throw new p(68);
      n.push(Ge(t, e[o]));
    }
    return n = n.join(","), n;
  }
  a(tt, "statefulSelectors");
  var fa = [void 0, null, "active", "focus", "hover"];
  function pa(e) {
    return "button" + e + `,
  input[type="button"]` + e + `,
  input[type="reset"]` + e + `,
  input[type="submit"]` + e;
  }
  a(pa, "template$1");
  function la() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return tt(t, pa, fa);
  }
  a(la, "buttons");
  function da() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return k.apply(void 0, ["margin"].concat(t));
  }
  a(da, "margin");
  function ca() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return k.apply(void 0, ["padding"].concat(t));
  }
  a(ca, "padding");
  var ma = ["absolute", "fixed", "relative", "static", "sticky"];
  function ga(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    return ma.indexOf(e) >= 0 && e ? b.default({}, k.apply(void 0, [""].concat(r)), {
      position: e
    }) : k.apply(void 0, ["", e].concat(r));
  }
  a(ga, "position");
  function ba(e, t) {
    return t === void 0 && (t = e), {
      height: e,
      width: t
    };
  }
  a(ba, "size");
  var ha = [void 0, null, "active", "focus", "hover"];
  function va(e) {
    return 'input[type="color"]' + e + `,
    input[type="date"]` + e + `,
    input[type="datetime"]` + e + `,
    input[type="datetime-local"]` + e + `,
    input[type="email"]` + e + `,
    input[type="month"]` + e + `,
    input[type="number"]` + e + `,
    input[type="password"]` + e + `,
    input[type="search"]` + e + `,
    input[type="tel"]` + e + `,
    input[type="text"]` + e + `,
    input[type="time"]` + e + `,
    input[type="url"]` + e + `,
    input[type="week"]` + e + `,
    input:not([type])` + e + `,
    textarea` + e;
  }
  a(va, "template");
  function ya() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return tt(t, va, ha);
  }
  a(ya, "textInputs");
  function xa() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    if (Array.isArray(t[0]) && t.length === 2) {
      var n = t[1];
      if (typeof n != "string")
        throw new p(61);
      var o = t[0].map(function(i) {
        return i + " " + n;
      }).join(", ");
      return {
        transition: o
      };
    } else
      return {
        transition: t.join(", ")
      };
  }
  a(xa, "transitions");
  u.adjustHue = ln;
  u.animation = ea;
  u.backgroundImages = ta;
  u.backgrounds = ra;
  u.between = le;
  u.border = aa;
  u.borderColor = oa;
  u.borderRadius = ia;
  u.borderStyle = ua;
  u.borderWidth = sa;
  u.buttons = la;
  u.clearFix = xr;
  u.complement = dn;
  u.cover = wr;
  u.cssVar = Kt;
  u.darken = gn;
  u.desaturate = vn;
  u.directionalProperty = k;
  u.easeIn = gr;
  u.easeInOut = hr;
  u.easeOut = yr;
  u.ellipsis = Sr;
  u.em = ir;
  u.fluidRange = Cr;
  u.fontFace = Mr;
  u.getContrast = ge;
  u.getLuminance = _;
  u.getValueAndUnit = A;
  u.grayscale = yn;
  u.hiDPI = _e;
  u.hideText = Pr;
  u.hideVisually = kr;
  u.hsl = ce;
  u.hslToColorString = xn;
  u.hsla = me;
  u.important = Je;
  u.invert = wn;
  u.lighten = zn;
  u.linearGradient = $r;
  u.margin = da;
  u.math = Xt;
  u.meetsContrastGuidelines = Cn;
  u.mix = be;
  u.modularScale = fr;
  u.normalize = Br;
  u.opacify = Rn;
  u.padding = ca;
  u.parseToHsl = z;
  u.parseToRgb = P;
  u.position = ga;
  u.radialGradient = Lr;
  u.readableColor = jn;
  u.rem = lr;
  u.remToPx = cr;
  u.retinaImage = Hr;
  u.rgb = Y;
  u.rgbToColorString = Mn;
  u.rgba = L;
  u.saturate = $n;
  u.setHue = Hn;
  u.setLightness = qn;
  u.setSaturation = Vn;
  u.shade = Qn;
  u.size = ba;
  u.stripUnit = fe;
  u.textInputs = ya;
  u.timingFunctions = qr;
  u.tint = Zn;
  u.toColorString = F;
  u.transitions = xa;
  u.transparentize = Kn;
  u.triangle = Vr;
  u.wordWrap = Nr;
});

// ../node_modules/@storybook/global/dist/index.js
var it = S((fo, ot) => {
  "use strict";
  var xe = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, za = Object.getOwnPropertyNames, Ca = Object.prototype.hasOwnProperty,
  Ta = /* @__PURE__ */ a((e, t) => {
    for (var r in t)
      xe(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), Aa = /* @__PURE__ */ a((e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o of za(t))
        !Ca.call(e, o) && o !== r && xe(e, o, { get: /* @__PURE__ */ a(() => t[o], "get"), enumerable: !(n = Fa(t, o)) || n.enumerable });
    return e;
  }, "__copyProps"), Ia = /* @__PURE__ */ a((e) => Aa(xe({}, "__esModule", { value: !0 }), e), "__toCommonJS"), at = {};
  Ta(at, {
    global: /* @__PURE__ */ a(() => Oa, "global")
  });
  ot.exports = Ia(at);
  var Oa = (() => {
    let e;
    return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
    e = self : e = {}, e;
  })();
});

// src/theming/create.ts
var ka = {};
bt(ka, {
  create: () => Pa,
  themes: () => K
});
module.exports = ht(ka);

// src/theming/base.ts
var rt = ee(he(), 1), g = {
  // Official color palette
  primary: "#FF4785",
  // coral
  secondary: "#029CFD",
  // ocean
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  // Complimentary
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  // For borders
  border: "hsla(203, 50%, 30%, 0.15)",
  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  // Text
  defaultText: "#2E3438",
  inverseText: "#FFFFFF",
  positiveText: "#448028",
  negativeText: "#D43900",
  warningText: "#A15C20"
}, ve = {
  app: "#F6F9FC",
  bar: g.lightest,
  content: g.lightest,
  preview: g.lightest,
  gridCellSize: 10,
  hoverable: (0, rt.transparentize)(0.9, g.secondary),
  // hover state for items in a list
  // Notification, error, and warning backgrounds
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
}, D = {
  fonts: {
    base: [
      '"Nunito Sans"',
      "-apple-system",
      '".SFNSText-Regular"',
      '"San Francisco"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),
    mono: [
      "ui-monospace",
      "Menlo",
      "Monaco",
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};

// src/theming/themes/light.ts
var wa = {
  base: "light",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: ve.app,
  appContentBg: g.lightest,
  appPreviewBg: g.lightest,
  appBorderColor: g.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: D.fonts.base,
  fontCode: D.fonts.mono,
  // Text colors
  textColor: g.darkest,
  textInverseColor: g.lightest,
  textMutedColor: g.dark,
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: g.lightest,
  // Form colors
  buttonBg: ve.app,
  buttonBorder: g.medium,
  booleanBg: g.mediumlight,
  booleanSelectedBg: g.lightest,
  inputBg: g.lightest,
  inputBorder: g.border,
  inputTextColor: g.darkest,
  inputBorderRadius: 4
}, ye = wa;

// src/theming/themes/dark.ts
var Sa = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: "#222425",
  appContentBg: "#1B1C1D",
  appPreviewBg: g.lightest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  // Fonts
  fontBase: D.fonts.base,
  fontCode: D.fonts.mono,
  // Text colors
  textColor: "#C9CDCF",
  textInverseColor: "#222425",
  textMutedColor: "#798186",
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: "#292C2E",
  // Form colors
  buttonBg: "#222425",
  buttonBorder: "rgba(255,255,255,.1)",
  booleanBg: "#222425",
  booleanSelectedBg: "#2E3438",
  inputBg: "#1B1C1D",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: g.lightest,
  inputBorderRadius: 4
}, nt = Sa;

// src/theming/utils.ts
var B = ee(he(), 1), ut = ee(it(), 1), st = require("@storybook/core/client-logger");
var { window: we } = ut.global;
var Ra = /* @__PURE__ */ a((e) => typeof e != "string" ? (st.logger.warn(
  `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
), !1) : !0, "isColorString"), ja = /* @__PURE__ */ a((e) => !/(gradient|var|calc)/.test(e), "isValidColorForPolished"), Ma = /* @__PURE__ */ a(
(e, t) => e === "darken" ? (0, B.rgba)(`${(0, B.darken)(1, t)}`, 0.95) : e === "lighten" ? (0, B.rgba)(`${(0, B.lighten)(1, t)}`, 0.95) : t,
"applyPolished"), ft = /* @__PURE__ */ a((e) => (t) => {
  if (!Ra(t) || !ja(t))
    return t;
  try {
    return Ma(e, t);
  } catch {
    return t;
  }
}, "colorFactory"), lo = ft("lighten"), co = ft("darken"), pt = /* @__PURE__ */ a(() => !we || !we.matchMedia ? "light" : we.matchMedia("(pr\
efers-color-scheme: dark)").matches ? "dark" : "light", "getPreferredColorScheme");

// src/theming/create.ts
var K = {
  light: ye,
  dark: nt,
  normal: ye
}, Se = pt(), Pa = /* @__PURE__ */ a((e = { base: Se }, t) => {
  let r = {
    ...K[Se],
    ...K[e.base] || {},
    ...e,
    base: K[e.base] ? e.base : Se
  };
  return {
    ...t,
    ...r,
    barSelectedColor: e.barSelectedColor || r.colorSecondary
  };
}, "create");
