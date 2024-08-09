"use strict";
var vs = Object.create;
var ut = Object.defineProperty;
var Ts = Object.getOwnPropertyDescriptor;
var As = Object.getOwnPropertyNames;
var ks = Object.getPrototypeOf, Cs = Object.prototype.hasOwnProperty;
var l = (r, t) => ut(r, "name", { value: t, configurable: !0 });
var Se = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports), Rs = (r, t) => {
  for (var e in t)
    ut(r, e, { get: t[e], enumerable: !0 });
}, Ee = (r, t, e, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of As(t))
      !Cs.call(r, i) && i !== e && ut(r, i, { get: () => t[i], enumerable: !(s = Ts(t, i)) || s.enumerable });
  return r;
};
var Qt = (r, t, e) => (e = r != null ? vs(ks(r)) : {}, Ee(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !r || !r.__esModule ? ut(e, "default", { value: r, enumerable: !0 }) : e,
  r
)), Os = (r) => Ee(ut({}, "__esModule", { value: !0 }), r);

// ../node_modules/balanced-match/index.js
var ke = Se((Qi, Ae) => {
  "use strict";
  Ae.exports = ve;
  function ve(r, t, e) {
    r instanceof RegExp && (r = xe(r, e)), t instanceof RegExp && (t = xe(t, e));
    var s = Te(r, t, e);
    return s && {
      start: s[0],
      end: s[1],
      pre: e.slice(0, s[0]),
      body: e.slice(s[0] + r.length, s[1]),
      post: e.slice(s[1] + t.length)
    };
  }
  l(ve, "balanced");
  function xe(r, t) {
    var e = t.match(r);
    return e ? e[0] : null;
  }
  l(xe, "maybeMatch");
  ve.range = Te;
  function Te(r, t, e) {
    var s, i, n, o, h, a = e.indexOf(r), c = e.indexOf(t, a + 1), f = a;
    if (a >= 0 && c > 0) {
      if (r === t)
        return [a, c];
      for (s = [], n = e.length; f >= 0 && !h; )
        f == a ? (s.push(f), a = e.indexOf(r, f + 1)) : s.length == 1 ? h = [s.pop(), c] : (i = s.pop(), i < n && (n = i, o = c), c = e.indexOf(
        t, f + 1)), f = a < c && a >= 0 ? a : c;
      s.length && (h = [n, o]);
    }
    return h;
  }
  l(Te, "range");
});

// ../node_modules/brace-expansion/index.js
var Le = Se((er, Ne) => {
  var Ce = ke();
  Ne.exports = Ms;
  var Re = "\0SLASH" + Math.random() + "\0", Oe = "\0OPEN" + Math.random() + "\0", se = "\0CLOSE" + Math.random() + "\0", De = "\0COMMA" + Math.
  random() + "\0", Fe = "\0PERIOD" + Math.random() + "\0";
  function ee(r) {
    return parseInt(r, 10) == r ? parseInt(r, 10) : r.charCodeAt(0);
  }
  l(ee, "numeric");
  function Ds(r) {
    return r.split("\\\\").join(Re).split("\\{").join(Oe).split("\\}").join(se).split("\\,").join(De).split("\\.").join(Fe);
  }
  l(Ds, "escapeBraces");
  function Fs(r) {
    return r.split(Re).join("\\").split(Oe).join("{").split(se).join("}").split(De).join(",").split(Fe).join(".");
  }
  l(Fs, "unescapeBraces");
  function Me(r) {
    if (!r)
      return [""];
    var t = [], e = Ce("{", "}", r);
    if (!e)
      return r.split(",");
    var s = e.pre, i = e.body, n = e.post, o = s.split(",");
    o[o.length - 1] += "{" + i + "}";
    var h = Me(n);
    return n.length && (o[o.length - 1] += h.shift(), o.push.apply(o, h)), t.push.apply(t, o), t;
  }
  l(Me, "parseCommaParts");
  function Ms(r) {
    return r ? (r.substr(0, 2) === "{}" && (r = "\\{\\}" + r.substr(2)), dt(Ds(r), !0).map(Fs)) : [];
  }
  l(Ms, "expandTop");
  function Ns(r) {
    return "{" + r + "}";
  }
  l(Ns, "embrace");
  function Ls(r) {
    return /^-?0\d/.test(r);
  }
  l(Ls, "isPadded");
  function _s(r, t) {
    return r <= t;
  }
  l(_s, "lte");
  function Ps(r, t) {
    return r >= t;
  }
  l(Ps, "gte");
  function dt(r, t) {
    var e = [], s = Ce("{", "}", r);
    if (!s) return [r];
    var i = s.pre, n = s.post.length ? dt(s.post, !1) : [""];
    if (/\$$/.test(s.pre))
      for (var o = 0; o < n.length; o++) {
        var h = i + "{" + s.body + "}" + n[o];
        e.push(h);
      }
    else {
      var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body), f = a || c, u = s.body.
      indexOf(",") >= 0;
      if (!f && !u)
        return s.post.match(/,.*\}/) ? (r = s.pre + "{" + s.body + se + s.post, dt(r)) : [r];
      var d;
      if (f)
        d = s.body.split(/\.\./);
      else if (d = Me(s.body), d.length === 1 && (d = dt(d[0], !1).map(Ns), d.length === 1))
        return n.map(function(Ft) {
          return s.pre + d[0] + Ft;
        });
      var p;
      if (f) {
        var g = ee(d[0]), m = ee(d[1]), y = Math.max(d[0].length, d[1].length), w = d.length == 3 ? Math.abs(ee(d[2])) : 1, E = _s, S = m < g;
        S && (w *= -1, E = Ps);
        var b = d.some(Ls);
        p = [];
        for (var x = g; E(x, m); x += w) {
          var T;
          if (c)
            T = String.fromCharCode(x), T === "\\" && (T = "");
          else if (T = String(x), b) {
            var W = y - T.length;
            if (W > 0) {
              var Dt = new Array(W + 1).join("0");
              x < 0 ? T = "-" + Dt + T.slice(1) : T = Dt + T;
            }
          }
          p.push(T);
        }
      } else {
        p = [];
        for (var $ = 0; $ < d.length; $++)
          p.push.apply(p, dt(d[$], !1));
      }
      for (var $ = 0; $ < p.length; $++)
        for (var o = 0; o < n.length; o++) {
          var h = i + p[$] + n[o];
          (!t || f || h) && e.push(h);
        }
    }
    return e;
  }
  l(dt, "expand");
});

// src/core-server/presets/common-override-preset.ts
var Xi = {};
Rs(Xi, {
  build: () => Vi,
  docs: () => Ki,
  framework: () => Gi,
  stories: () => Hi,
  typescript: () => qi
});
module.exports = Os(Xi);

// src/core-server/utils/remove-mdx-entries.ts
var Zt = require("@storybook/core/common"), X = require("node:path");

// ../node_modules/slash/index.js
function te(r) {
  return r.startsWith("\\\\?\\") ? r : r.replace(/\\/g, "/");
}
l(te, "slash");

// ../node_modules/glob/node_modules/minimatch/dist/mjs/index.js
var Ue = Qt(Le(), 1);

// ../node_modules/glob/node_modules/minimatch/dist/mjs/assert-valid-pattern.js
var pt = /* @__PURE__ */ l((r) => {
  if (typeof r != "string")
    throw new TypeError("invalid pattern");
  if (r.length > 65536)
    throw new TypeError("pattern is too long");
}, "assertValidPattern");

// ../node_modules/glob/node_modules/minimatch/dist/mjs/brace-expressions.js
var js = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
  "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
  "[:ascii:]": ["\\x00-\\x7f", !1],
  "[:blank:]": ["\\p{Zs}\\t", !0],
  "[:cntrl:]": ["\\p{Cc}", !0],
  "[:digit:]": ["\\p{Nd}", !0],
  "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
  "[:lower:]": ["\\p{Ll}", !0],
  "[:print:]": ["\\p{C}", !0],
  "[:punct:]": ["\\p{P}", !0],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
  "[:upper:]": ["\\p{Lu}", !0],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
  "[:xdigit:]": ["A-Fa-f0-9", !1]
}, mt = /* @__PURE__ */ l((r) => r.replace(/[[\]\\-]/g, "\\$&"), "braceEscape"), Ws = /* @__PURE__ */ l((r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&"), "regexpEscape"), _e = /* @__PURE__ */ l((r) => r.join(""), "rangesToString"), Pe = /* @__PURE__ */ l((r, t) => {
  let e = t;
  if (r.charAt(e) !== "[")
    throw new Error("not in a brace expression");
  let s = [], i = [], n = e + 1, o = !1, h = !1, a = !1, c = !1, f = e, u = "";
  t: for (; n < r.length; ) {
    let m = r.charAt(n);
    if ((m === "!" || m === "^") && n === e + 1) {
      c = !0, n++;
      continue;
    }
    if (m === "]" && o && !a) {
      f = n + 1;
      break;
    }
    if (o = !0, m === "\\" && !a) {
      a = !0, n++;
      continue;
    }
    if (m === "[" && !a) {
      for (let [y, [w, E, S]] of Object.entries(js))
        if (r.startsWith(y, n)) {
          if (u)
            return ["$.", !1, r.length - e, !0];
          n += y.length, S ? i.push(w) : s.push(w), h = h || E;
          continue t;
        }
    }
    if (a = !1, u) {
      m > u ? s.push(mt(u) + "-" + mt(m)) : m === u && s.push(mt(m)), u = "", n++;
      continue;
    }
    if (r.startsWith("-]", n + 1)) {
      s.push(mt(m + "-")), n += 2;
      continue;
    }
    if (r.startsWith("-", n + 1)) {
      u = m, n += 2;
      continue;
    }
    s.push(mt(m)), n++;
  }
  if (f < n)
    return ["", !1, 0, !1];
  if (!s.length && !i.length)
    return ["$.", !1, r.length - e, !0];
  if (i.length === 0 && s.length === 1 && /^\\?.$/.test(s[0]) && !c) {
    let m = s[0].length === 2 ? s[0].slice(-1) : s[0];
    return [Ws(m), !1, f - e, !1];
  }
  let d = "[" + (c ? "^" : "") + _e(s) + "]", p = "[" + (c ? "" : "^") + _e(i) + "]";
  return [s.length && i.length ? "(" + d + "|" + p + ")" : s.length ? d : p, h, f - e, !0];
}, "parseClass");

// ../node_modules/glob/node_modules/minimatch/dist/mjs/unescape.js
var I = /* @__PURE__ */ l((r, { windowsPathsNoEscape: t = !1 } = {}) => t ? r.replace(/\[([^\/\\])\]/g, "$1") : r.replace(/((?!\\).|^)\[([^\/\\])\]/g,
"$1$2").replace(/\\([^\/])/g, "$1"), "unescape");

// ../node_modules/glob/node_modules/minimatch/dist/mjs/ast.js
var Is = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), je = /* @__PURE__ */ l((r) => Is.has(r), "isExtglobType"), zs = "(?!(?:^|/)\\.\\.\
?(?:$|/))", Mt = "(?!\\.)", Bs = /* @__PURE__ */ new Set(["[", "."]), Us = /* @__PURE__ */ new Set(["..", "."]), $s = new Set("().*{}+?[]^$\\\
!"), Gs = /* @__PURE__ */ l((r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "regExpEscape"), ie = "[^/]", We = ie + "*?", Ie = ie + "+\
?", st = class r {
  static {
    l(this, "AST");
  }
  type;
  #t;
  #s;
  #n = !1;
  #i = [];
  #h;
  #l;
  #f;
  #a = !1;
  #o;
  #e;
  // set to true if it's an extglob with no children
  // (which really means one child of '')
  #m = !1;
  constructor(t, e, s = {}) {
    this.type = t, t && (this.#s = !0), this.#h = e, this.#t = this.#h ? this.#h.#t : this, this.#o = this.#t === this ? s : this.#t.#o, this.#f =
    this.#t === this ? [] : this.#t.#f, t === "!" && !this.#t.#a && this.#f.push(this), this.#l = this.#h ? this.#h.#i.length : 0;
  }
  get hasMagic() {
    if (this.#s !== void 0)
      return this.#s;
    for (let t of this.#i)
      if (typeof t != "string" && (t.type || t.hasMagic))
        return this.#s = !0;
    return this.#s;
  }
  // reconstructs the pattern
  toString() {
    return this.#e !== void 0 ? this.#e : this.type ? this.#e = this.type + "(" + this.#i.map((t) => String(t)).join("|") + ")" : this.#e = this.#i.
    map((t) => String(t)).join("");
  }
  #w() {
    if (this !== this.#t)
      throw new Error("should only call on root");
    if (this.#a)
      return this;
    this.toString(), this.#a = !0;
    let t;
    for (; t = this.#f.pop(); ) {
      if (t.type !== "!")
        continue;
      let e = t, s = e.#h;
      for (; s; ) {
        for (let i = e.#l + 1; !s.type && i < s.#i.length; i++)
          for (let n of t.#i) {
            if (typeof n == "string")
              throw new Error("string part in extglob AST??");
            n.copyIn(s.#i[i]);
          }
        e = s, s = e.#h;
      }
    }
    return this;
  }
  push(...t) {
    for (let e of t)
      if (e !== "") {
        if (typeof e != "string" && !(e instanceof r && e.#h === this))
          throw new Error("invalid part: " + e);
        this.#i.push(e);
      }
  }
  toJSON() {
    let t = this.type === null ? this.#i.slice().map((e) => typeof e == "string" ? e : e.toJSON()) : [this.type, ...this.#i.map((e) => e.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === this.#t || this.#t.#a && this.#h?.type === "!") && t.push(
    {}), t;
  }
  isStart() {
    if (this.#t === this)
      return !0;
    if (!this.#h?.isStart())
      return !1;
    if (this.#l === 0)
      return !0;
    let t = this.#h;
    for (let e = 0; e < this.#l; e++) {
      let s = t.#i[e];
      if (!(s instanceof r && s.type === "!"))
        return !1;
    }
    return !0;
  }
  isEnd() {
    if (this.#t === this || this.#h?.type === "!")
      return !0;
    if (!this.#h?.isEnd())
      return !1;
    if (!this.type)
      return this.#h?.isEnd();
    let t = this.#h ? this.#h.#i.length : 0;
    return this.#l === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    let e = new r(this.type, t);
    for (let s of this.#i)
      e.copyIn(s);
    return e;
  }
  static #d(t, e, s, i) {
    let n = !1, o = !1, h = -1, a = !1;
    if (e.type === null) {
      let p = s, g = "";
      for (; p < t.length; ) {
        let m = t.charAt(p++);
        if (n || m === "\\") {
          n = !n, g += m;
          continue;
        }
        if (o) {
          p === h + 1 ? (m === "^" || m === "!") && (a = !0) : m === "]" && !(p === h + 2 && a) && (o = !1), g += m;
          continue;
        } else if (m === "[") {
          o = !0, h = p, a = !1, g += m;
          continue;
        }
        if (!i.noext && je(m) && t.charAt(p) === "(") {
          e.push(g), g = "";
          let y = new r(m, e);
          p = r.#d(t, y, p, i), e.push(y);
          continue;
        }
        g += m;
      }
      return e.push(g), p;
    }
    let c = s + 1, f = new r(null, e), u = [], d = "";
    for (; c < t.length; ) {
      let p = t.charAt(c++);
      if (n || p === "\\") {
        n = !n, d += p;
        continue;
      }
      if (o) {
        c === h + 1 ? (p === "^" || p === "!") && (a = !0) : p === "]" && !(c === h + 2 && a) && (o = !1), d += p;
        continue;
      } else if (p === "[") {
        o = !0, h = c, a = !1, d += p;
        continue;
      }
      if (je(p) && t.charAt(c) === "(") {
        f.push(d), d = "";
        let g = new r(p, f);
        f.push(g), c = r.#d(t, g, c, i);
        continue;
      }
      if (p === "|") {
        f.push(d), d = "", u.push(f), f = new r(null, e);
        continue;
      }
      if (p === ")")
        return d === "" && e.#i.length === 0 && (e.#m = !0), f.push(d), d = "", e.push(...u, f), c;
      d += p;
    }
    return e.type = null, e.#s = void 0, e.#i = [t.substring(s - 1)], c;
  }
  static fromGlob(t, e = {}) {
    let s = new r(null, void 0, e);
    return r.#d(t, s, 0, e), s;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== this.#t)
      return this.#t.toMMPattern();
    let t = this.toString(), [e, s, i, n] = this.toRegExpSource();
    if (!(i || this.#s || this.#o.nocase && !this.#o.nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return s;
    let h = (this.#o.nocase ? "i" : "") + (n ? "u" : "");
    return Object.assign(new RegExp(`^${e}$`, h), {
      _src: e,
      _glob: t
    });
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(t) {
    let e = t ?? !!this.#o.dot;
    if (this.#t === this && this.#w(), !this.type) {
      let a = this.isStart() && this.isEnd(), c = this.#i.map((p) => {
        let [g, m, y, w] = typeof p == "string" ? r.#S(p, this.#s, a) : p.toRegExpSource(t);
        return this.#s = this.#s || y, this.#n = this.#n || w, g;
      }).join(""), f = "";
      if (this.isStart() && typeof this.#i[0] == "string" && !(this.#i.length === 1 && Us.has(this.#i[0]))) {
        let g = Bs, m = (
          // dots are allowed, and the pattern starts with [ or .
          e && g.has(c.charAt(0)) || // the pattern starts with \., and then [ or .
          c.startsWith("\\.") && g.has(c.charAt(2)) || // the pattern starts with \.\., and then [ or .
          c.startsWith("\\.\\.") && g.has(c.charAt(4))
        ), y = !e && !t && g.has(c.charAt(0));
        f = m ? zs : y ? Mt : "";
      }
      let u = "";
      return this.isEnd() && this.#t.#a && this.#h?.type === "!" && (u = "(?:$|\\/)"), [
        f + c + u,
        I(c),
        this.#s = !!this.#s,
        this.#n
      ];
    }
    let s = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:", n = this.#u(e);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      let a = this.toString();
      return this.#i = [a], this.type = null, this.#s = void 0, [a, I(this.toString()), !1, !1];
    }
    let o = !s || t || e || !Mt ? "" : this.#u(!0);
    o === n && (o = ""), o && (n = `(?:${n})(?:${o})*?`);
    let h = "";
    if (this.type === "!" && this.#m)
      h = (this.isStart() && !e ? Mt : "") + Ie;
    else {
      let a = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !e && !t ? Mt : "") + We + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
      h = i + n + a;
    }
    return [
      h,
      I(n),
      this.#s = !!this.#s,
      this.#n
    ];
  }
  #u(t) {
    return this.#i.map((e) => {
      if (typeof e == "string")
        throw new Error("string type in extglob ast??");
      let [s, i, n, o] = e.toRegExpSource(t);
      return this.#n = this.#n || o, s;
    }).filter((e) => !(this.isStart() && this.isEnd()) || !!e).join("|");
  }
  static #S(t, e, s = !1) {
    let i = !1, n = "", o = !1;
    for (let h = 0; h < t.length; h++) {
      let a = t.charAt(h);
      if (i) {
        i = !1, n += ($s.has(a) ? "\\" : "") + a;
        continue;
      }
      if (a === "\\") {
        h === t.length - 1 ? n += "\\\\" : i = !0;
        continue;
      }
      if (a === "[") {
        let [c, f, u, d] = Pe(t, h);
        if (u) {
          n += c, o = o || f, h += u - 1, e = e || d;
          continue;
        }
      }
      if (a === "*") {
        s && t === "*" ? n += Ie : n += We, e = !0;
        continue;
      }
      if (a === "?") {
        n += ie, e = !0;
        continue;
      }
      n += Gs(a);
    }
    return [n, I(t), !!e, o];
  }
};

// ../node_modules/glob/node_modules/minimatch/dist/mjs/escape.js
var it = /* @__PURE__ */ l((r, { windowsPathsNoEscape: t = !1 } = {}) => t ? r.replace(/[?*()[\]]/g, "[$&]") : r.replace(/[?*()[\]\\]/g, "\\$\
&"), "escape");

// ../node_modules/glob/node_modules/minimatch/dist/mjs/index.js
var F = /* @__PURE__ */ l((r, t, e = {}) => (pt(t), !e.nocomment && t.charAt(0) === "#" ? !1 : new N(t, e).match(r)), "minimatch"), Hs = /^\*+([^+@!?\*\[\(]*)$/,
qs = /* @__PURE__ */ l((r) => (t) => !t.startsWith(".") && t.endsWith(r), "starDotExtTest"), Ks = /* @__PURE__ */ l((r) => (t) => t.endsWith(
r), "starDotExtTestDot"), Vs = /* @__PURE__ */ l((r) => (r = r.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(r)), "st\
arDotExtTestNocase"), Xs = /* @__PURE__ */ l((r) => (r = r.toLowerCase(), (t) => t.toLowerCase().endsWith(r)), "starDotExtTestNocaseDot"), Ys = /^\*+\.\*+$/,
Js = /* @__PURE__ */ l((r) => !r.startsWith(".") && r.includes("."), "starDotStarTest"), Zs = /* @__PURE__ */ l((r) => r !== "." && r !== ".\
." && r.includes("."), "starDotStarTestDot"), Qs = /^\.\*+$/, ti = /* @__PURE__ */ l((r) => r !== "." && r !== ".." && r.startsWith("."), "d\
otStarTest"), ei = /^\*+$/, si = /* @__PURE__ */ l((r) => r.length !== 0 && !r.startsWith("."), "starTest"), ii = /* @__PURE__ */ l((r) => r.
length !== 0 && r !== "." && r !== "..", "starTestDot"), ri = /^\?+([^+@!?\*\[\(]*)?$/, ni = /* @__PURE__ */ l(([r, t = ""]) => {
  let e = $e([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
}, "qmarksTestNocase"), oi = /* @__PURE__ */ l(([r, t = ""]) => {
  let e = Ge([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
}, "qmarksTestNocaseDot"), hi = /* @__PURE__ */ l(([r, t = ""]) => {
  let e = Ge([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
}, "qmarksTestDot"), ai = /* @__PURE__ */ l(([r, t = ""]) => {
  let e = $e([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
}, "qmarksTest"), $e = /* @__PURE__ */ l(([r]) => {
  let t = r.length;
  return (e) => e.length === t && !e.startsWith(".");
}, "qmarksTestNoExt"), Ge = /* @__PURE__ */ l(([r]) => {
  let t = r.length;
  return (e) => e.length === t && e !== "." && e !== "..";
}, "qmarksTestNoExtDot"), He = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ ||
process.platform : "posix", ze = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, li = He === "win32" ? ze.win32.sep : ze.posix.sep;
F.sep = li;
var R = Symbol("globstar **");
F.GLOBSTAR = R;
var ci = "[^/]", fi = ci + "*?", ui = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", di = "(?:(?!(?:\\/|^)\\.).)*?", pi = /* @__PURE__ */ l((r, t = {}) => (e) => F(
e, r, t), "filter");
F.filter = pi;
var _ = /* @__PURE__ */ l((r, t = {}) => Object.assign({}, r, t), "ext"), mi = /* @__PURE__ */ l((r) => {
  if (!r || typeof r != "object" || !Object.keys(r).length)
    return F;
  let t = F;
  return Object.assign(/* @__PURE__ */ l((s, i, n = {}) => t(s, i, _(r, n)), "m"), {
    Minimatch: class extends t.Minimatch {
      static {
        l(this, "Minimatch");
      }
      constructor(i, n = {}) {
        super(i, _(r, n));
      }
      static defaults(i) {
        return t.defaults(_(r, i)).Minimatch;
      }
    },
    AST: class extends t.AST {
      static {
        l(this, "AST");
      }
      /* c8 ignore start */
      constructor(i, n, o = {}) {
        super(i, n, _(r, o));
      }
      /* c8 ignore stop */
      static fromGlob(i, n = {}) {
        return t.AST.fromGlob(i, _(r, n));
      }
    },
    unescape: /* @__PURE__ */ l((s, i = {}) => t.unescape(s, _(r, i)), "unescape"),
    escape: /* @__PURE__ */ l((s, i = {}) => t.escape(s, _(r, i)), "escape"),
    filter: /* @__PURE__ */ l((s, i = {}) => t.filter(s, _(r, i)), "filter"),
    defaults: /* @__PURE__ */ l((s) => t.defaults(_(r, s)), "defaults"),
    makeRe: /* @__PURE__ */ l((s, i = {}) => t.makeRe(s, _(r, i)), "makeRe"),
    braceExpand: /* @__PURE__ */ l((s, i = {}) => t.braceExpand(s, _(r, i)), "braceExpand"),
    match: /* @__PURE__ */ l((s, i, n = {}) => t.match(s, i, _(r, n)), "match"),
    sep: t.sep,
    GLOBSTAR: R
  });
}, "defaults");
F.defaults = mi;
var qe = /* @__PURE__ */ l((r, t = {}) => (pt(r), t.nobrace || !/\{(?:(?!\{).)*\}/.test(r) ? [r] : (0, Ue.default)(r)), "braceExpand");
F.braceExpand = qe;
var gi = /* @__PURE__ */ l((r, t = {}) => new N(r, t).makeRe(), "makeRe");
F.makeRe = gi;
var wi = /* @__PURE__ */ l((r, t, e = {}) => {
  let s = new N(t, e);
  return r = r.filter((i) => s.match(i)), s.options.nonull && !r.length && r.push(t), r;
}, "match");
F.match = wi;
var Be = /[?*]|[+@!]\(.*?\)|\[|\]/, yi = /* @__PURE__ */ l((r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "regExpEscape"), N = class {
  static {
    l(this, "Minimatch");
  }
  options;
  set;
  pattern;
  windowsPathsNoEscape;
  nonegate;
  negate;
  comment;
  empty;
  preserveMultipleSlashes;
  partial;
  globSet;
  globParts;
  nocase;
  isWindows;
  platform;
  windowsNoMagicRoot;
  regexp;
  constructor(t, e = {}) {
    pt(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || He, this.isWindows = this.platform === "win32", this.
    windowsPathsNoEscape = !!e.windowsPathsNoEscape || e.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.
    replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!e.
    nonegate, this.comment = !1, this.empty = !1, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot =
    e.windowsNoMagicRoot !== void 0 ? e.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.
    set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return !0;
    for (let t of this.set)
      for (let e of t)
        if (typeof e != "string")
          return !0;
    return !1;
  }
  debug(...t) {
  }
  make() {
    let t = this.pattern, e = this.options;
    if (!e.nocomment && t.charAt(0) === "#") {
      this.comment = !0;
      return;
    }
    if (!t) {
      this.empty = !0;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], e.debug && (this.debug = (...n) => console.error(...n)), this.debug(
    this.pattern, this.globSet);
    let s = this.globSet.map((n) => this.slashSplit(n));
    this.globParts = this.preprocess(s), this.debug(this.pattern, this.globParts);
    let i = this.globParts.map((n, o, h) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        let a = n[0] === "" && n[1] === "" && (n[2] === "?" || !Be.test(n[2])) && !Be.test(n[3]), c = /^[a-z]:/i.test(n[0]);
        if (a)
          return [...n.slice(0, 4), ...n.slice(4).map((f) => this.parse(f))];
        if (c)
          return [n[0], ...n.slice(1).map((f) => this.parse(f))];
      }
      return n.map((a) => this.parse(a));
    });
    if (this.debug(this.pattern, i), this.set = i.filter((n) => n.indexOf(!1) === -1), this.isWindows)
      for (let n = 0; n < this.set.length; n++) {
        let o = this.set[n];
        o[0] === "" && o[1] === "" && this.globParts[n][2] === "?" && typeof o[3] == "string" && /^[a-z]:$/i.test(o[3]) && (o[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(t) {
    if (this.options.noglobstar)
      for (let s = 0; s < t.length; s++)
        for (let i = 0; i < t[s].length; i++)
          t[s][i] === "**" && (t[s][i] = "*");
    let { optimizationLevel: e = 1 } = this.options;
    return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : e >= 1 ? t = this.levelOneOptimize(t) : t = this.
    adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((e) => {
      let s = -1;
      for (; (s = e.indexOf("**", s + 1)) !== -1; ) {
        let i = s;
        for (; e[i + 1] === "**"; )
          i++;
        i !== s && e.splice(s, i - s);
      }
      return e;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((e) => (e = e.reduce((s, i) => {
      let n = s[s.length - 1];
      return i === "**" && n === "**" ? s : i === ".." && n && n !== ".." && n !== "." && n !== "**" ? (s.pop(), s) : (s.push(i), s);
    }, []), e.length === 0 ? [""] : e));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let e = !1;
    do {
      if (e = !1, !this.preserveMultipleSlashes) {
        for (let i = 1; i < t.length - 1; i++) {
          let n = t[i];
          i === 1 && n === "" && t[0] === "" || (n === "." || n === "") && (e = !0, t.splice(i, 1), i--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (e = !0, t.pop());
      }
      let s = 0;
      for (; (s = t.indexOf("..", s + 1)) !== -1; ) {
        let i = t[s - 1];
        i && i !== "." && i !== ".." && i !== "**" && (e = !0, t.splice(s - 1, 2), s -= 2);
      }
    } while (e);
    return t.length === 0 ? [""] : t;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(t) {
    let e = !1;
    do {
      e = !1;
      for (let s of t) {
        let i = -1;
        for (; (i = s.indexOf("**", i + 1)) !== -1; ) {
          let o = i;
          for (; s[o + 1] === "**"; )
            o++;
          o > i && s.splice(i + 1, o - i);
          let h = s[i + 1], a = s[i + 2], c = s[i + 3];
          if (h !== ".." || !a || a === "." || a === ".." || !c || c === "." || c === "..")
            continue;
          e = !0, s.splice(i, 1);
          let f = s.slice(0);
          f[i] = "**", t.push(f), i--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let o = 1; o < s.length - 1; o++) {
            let h = s[o];
            o === 1 && h === "" && s[0] === "" || (h === "." || h === "") && (e = !0, s.splice(o, 1), o--);
          }
          s[0] === "." && s.length === 2 && (s[1] === "." || s[1] === "") && (e = !0, s.pop());
        }
        let n = 0;
        for (; (n = s.indexOf("..", n + 1)) !== -1; ) {
          let o = s[n - 1];
          if (o && o !== "." && o !== ".." && o !== "**") {
            e = !0;
            let a = n === 1 && s[n + 1] === "**" ? ["."] : [];
            s.splice(n - 1, 2, ...a), s.length === 0 && s.push(""), n -= 2;
          }
        }
      }
    } while (e);
    return t;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(t) {
    for (let e = 0; e < t.length - 1; e++)
      for (let s = e + 1; s < t.length; s++) {
        let i = this.partsMatch(t[e], t[s], !this.preserveMultipleSlashes);
        i && (t[e] = i, t[s] = []);
      }
    return t.filter((e) => e.length);
  }
  partsMatch(t, e, s = !1) {
    let i = 0, n = 0, o = [], h = "";
    for (; i < t.length && n < e.length; )
      if (t[i] === e[n])
        o.push(h === "b" ? e[n] : t[i]), i++, n++;
      else if (s && t[i] === "**" && e[n] === t[i + 1])
        o.push(t[i]), i++;
      else if (s && e[n] === "**" && t[i] === e[n + 1])
        o.push(e[n]), n++;
      else if (t[i] === "*" && e[n] && (this.options.dot || !e[n].startsWith(".")) && e[n] !== "**") {
        if (h === "b")
          return !1;
        h = "a", o.push(t[i]), i++, n++;
      } else if (e[n] === "*" && t[i] && (this.options.dot || !t[i].startsWith(".")) && t[i] !== "**") {
        if (h === "a")
          return !1;
        h = "b", o.push(e[n]), i++, n++;
      } else
        return !1;
    return t.length === e.length && o;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    let t = this.pattern, e = !1, s = 0;
    for (let i = 0; i < t.length && t.charAt(i) === "!"; i++)
      e = !e, s++;
    s && (this.pattern = t.slice(s)), this.negate = e;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, e, s = !1) {
    let i = this.options;
    if (this.isWindows) {
      let m = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), y = !m && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]),
      w = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), E = !w && e[0] === "" && e[1] === "" && e[2] === "?" && typeof e[3] == "string" &&
      /^[a-z]:$/i.test(e[3]), S = y ? 3 : m ? 0 : void 0, b = E ? 3 : w ? 0 : void 0;
      if (typeof S == "number" && typeof b == "number") {
        let [x, T] = [t[S], e[b]];
        x.toLowerCase() === T.toLowerCase() && (e[b] = x, b > S ? e = e.slice(b) : S > b && (t = t.slice(S)));
      }
    }
    let { optimizationLevel: n = 1 } = this.options;
    n >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: e }), this.debug("matchOne", t.length, e.
    length);
    for (var o = 0, h = 0, a = t.length, c = e.length; o < a && h < c; o++, h++) {
      this.debug("matchOne loop");
      var f = e[h], u = t[o];
      if (this.debug(e, f, u), f === !1)
        return !1;
      if (f === R) {
        this.debug("GLOBSTAR", [e, f, u]);
        var d = o, p = h + 1;
        if (p === c) {
          for (this.debug("** at the end"); o < a; o++)
            if (t[o] === "." || t[o] === ".." || !i.dot && t[o].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; d < a; ) {
          var g = t[d];
          if (this.debug(`
globstar while`, t, d, e, p, g), this.matchOne(t.slice(d), e.slice(p), s))
            return this.debug("globstar found match!", d, a, g), !0;
          if (g === "." || g === ".." || !i.dot && g.charAt(0) === ".") {
            this.debug("dot detected!", t, d, e, p);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !!(s && (this.debug(`
>>> no match, partial?`, t, d, e, p), d === a));
      }
      let m;
      if (typeof f == "string" ? (m = u === f, this.debug("string match", f, u, m)) : (m = f.test(u), this.debug("pattern match", f, u, m)),
      !m)
        return !1;
    }
    if (o === a && h === c)
      return !0;
    if (o === a)
      return s;
    if (h === c)
      return o === a - 1 && t[o] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return qe(this.pattern, this.options);
  }
  parse(t) {
    pt(t);
    let e = this.options;
    if (t === "**")
      return R;
    if (t === "")
      return "";
    let s, i = null;
    (s = t.match(ei)) ? i = e.dot ? ii : si : (s = t.match(Hs)) ? i = (e.nocase ? e.dot ? Xs : Vs : e.dot ? Ks : qs)(s[1]) : (s = t.match(ri)) ?
    i = (e.nocase ? e.dot ? oi : ni : e.dot ? hi : ai)(s) : (s = t.match(Ys)) ? i = e.dot ? Zs : Js : (s = t.match(Qs)) && (i = ti);
    let n = st.fromGlob(t, this.options).toMMPattern();
    return i ? Object.assign(n, { test: i }) : n;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1)
      return this.regexp;
    let t = this.set;
    if (!t.length)
      return this.regexp = !1, this.regexp;
    let e = this.options, s = e.noglobstar ? fi : e.dot ? ui : di, i = new Set(e.nocase ? ["i"] : []), n = t.map((a) => {
      let c = a.map((f) => {
        if (f instanceof RegExp)
          for (let u of f.flags.split(""))
            i.add(u);
        return typeof f == "string" ? yi(f) : f === R ? R : f._src;
      });
      return c.forEach((f, u) => {
        let d = c[u + 1], p = c[u - 1];
        f !== R || p === R || (p === void 0 ? d !== void 0 && d !== R ? c[u + 1] = "(?:\\/|" + s + "\\/)?" + d : c[u] = s : d === void 0 ? c[u -
        1] = p + "(?:\\/|" + s + ")?" : d !== R && (c[u - 1] = p + "(?:\\/|\\/" + s + "\\/)" + d, c[u + 1] = R));
      }), c.filter((f) => f !== R).join("/");
    }).join("|"), [o, h] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    n = "^" + o + n + h + "$", this.negate && (n = "^(?!" + n + ").+$");
    try {
      this.regexp = new RegExp(n, [...i].join(""));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, e = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return !1;
    if (this.empty)
      return t === "";
    if (t === "/" && e)
      return !0;
    let s = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    let i = this.slashSplit(t);
    this.debug(this.pattern, "split", i);
    let n = this.set;
    this.debug(this.pattern, "set", n);
    let o = i[i.length - 1];
    if (!o)
      for (let h = i.length - 2; !o && h >= 0; h--)
        o = i[h];
    for (let h = 0; h < n.length; h++) {
      let a = n[h], c = i;
      if (s.matchBase && a.length === 1 && (c = [o]), this.matchOne(c, a, e))
        return s.flipNegate ? !0 : !this.negate;
    }
    return s.flipNegate ? !1 : this.negate;
  }
  static defaults(t) {
    return F.defaults(t).Minimatch;
  }
};
F.AST = st;
F.Minimatch = N;
F.escape = it;
F.unescape = I;

// ../node_modules/lru-cache/dist/esm/index.js
var rt = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, Ve = /* @__PURE__ */ new Set(),
re = typeof process == "object" && process ? process : {}, Xe = /* @__PURE__ */ l((r, t, e, s) => {
  typeof re.emitWarning == "function" ? re.emitWarning(r, t, e, s) : console.error(`[${e}] ${t}: ${r}`);
}, "emitWarning"), Nt = globalThis.AbortController, Ke = globalThis.AbortSignal;
if (typeof Nt > "u") {
  Ke = class {
    static {
      l(this, "AbortSignal");
    }
    onabort;
    _onabort = [];
    reason;
    aborted = !1;
    addEventListener(s, i) {
      this._onabort.push(i);
    }
  }, Nt = class {
    static {
      l(this, "AbortController");
    }
    constructor() {
      t();
    }
    signal = new Ke();
    abort(s) {
      if (!this.signal.aborted) {
        this.signal.reason = s, this.signal.aborted = !0;
        for (let i of this.signal._onabort)
          i(s);
        this.signal.onabort?.(s);
      }
    }
  };
  let r = re.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", t = /* @__PURE__ */ l(() => {
    r && (r = !1, Xe("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-c\
ontroller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, pass\
ing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WAR\
NING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
  }, "warnACPolyfill");
}
var bi = /* @__PURE__ */ l((r) => !Ve.has(r), "shouldWarn"), Rr = Symbol("type"), Y = /* @__PURE__ */ l((r) => r && r === Math.floor(r) && r >
0 && isFinite(r), "isPosInt"), Ye = /* @__PURE__ */ l((r) => Y(r) ? r <= Math.pow(2, 8) ? Uint8Array : r <= Math.pow(2, 16) ? Uint16Array : r <=
Math.pow(2, 32) ? Uint32Array : r <= Number.MAX_SAFE_INTEGER ? nt : null : null, "getUintArray"), nt = class extends Array {
  static {
    l(this, "ZeroArray");
  }
  constructor(t) {
    super(t), this.fill(0);
  }
}, ne = class r {
  static {
    l(this, "Stack");
  }
  heap;
  length;
  // private constructor
  static #t = !1;
  static create(t) {
    let e = Ye(t);
    if (!e)
      return [];
    r.#t = !0;
    let s = new r(t, e);
    return r.#t = !1, s;
  }
  constructor(t, e) {
    if (!r.#t)
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new e(t), this.length = 0;
  }
  push(t) {
    this.heap[this.length++] = t;
  }
  pop() {
    return this.heap[--this.length];
  }
}, gt = class r {
  static {
    l(this, "LRUCache");
  }
  // properties coming in from the options of these, only max and maxSize
  // really *need* to be protected. The rest can be modified, as they just
  // set defaults for various methods.
  #t;
  #s;
  #n;
  #i;
  #h;
  /**
   * {@link LRUCache.OptionsBase.ttl}
   */
  ttl;
  /**
   * {@link LRUCache.OptionsBase.ttlResolution}
   */
  ttlResolution;
  /**
   * {@link LRUCache.OptionsBase.ttlAutopurge}
   */
  ttlAutopurge;
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnGet}
   */
  updateAgeOnGet;
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnHas}
   */
  updateAgeOnHas;
  /**
   * {@link LRUCache.OptionsBase.allowStale}
   */
  allowStale;
  /**
   * {@link LRUCache.OptionsBase.noDisposeOnSet}
   */
  noDisposeOnSet;
  /**
   * {@link LRUCache.OptionsBase.noUpdateTTL}
   */
  noUpdateTTL;
  /**
   * {@link LRUCache.OptionsBase.maxEntrySize}
   */
  maxEntrySize;
  /**
   * {@link LRUCache.OptionsBase.sizeCalculation}
   */
  sizeCalculation;
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
   */
  noDeleteOnFetchRejection;
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
   */
  noDeleteOnStaleGet;
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
   */
  allowStaleOnFetchAbort;
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
   */
  allowStaleOnFetchRejection;
  /**
   * {@link LRUCache.OptionsBase.ignoreFetchAbort}
   */
  ignoreFetchAbort;
  // computed properties
  #l;
  #f;
  #a;
  #o;
  #e;
  #m;
  #w;
  #d;
  #u;
  #S;
  #g;
  #A;
  #k;
  #E;
  #b;
  #R;
  #p;
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(t) {
    return {
      // properties
      starts: t.#k,
      ttls: t.#E,
      sizes: t.#A,
      keyMap: t.#a,
      keyList: t.#o,
      valList: t.#e,
      next: t.#m,
      prev: t.#w,
      get head() {
        return t.#d;
      },
      get tail() {
        return t.#u;
      },
      free: t.#S,
      // methods
      isBackgroundFetch: /* @__PURE__ */ l((e) => t.#c(e), "isBackgroundFetch"),
      backgroundFetch: /* @__PURE__ */ l((e, s, i, n) => t.#L(e, s, i, n), "backgroundFetch"),
      moveToTail: /* @__PURE__ */ l((e) => t.#N(e), "moveToTail"),
      indexes: /* @__PURE__ */ l((e) => t.#T(e), "indexes"),
      rindexes: /* @__PURE__ */ l((e) => t.#O(e), "rindexes"),
      isStale: /* @__PURE__ */ l((e) => t.#y(e), "isStale")
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return this.#t;
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return this.#s;
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return this.#f;
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return this.#l;
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return this.#h;
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return this.#n;
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return this.#i;
  }
  constructor(t) {
    let { max: e = 0, ttl: s, ttlResolution: i = 1, ttlAutopurge: n, updateAgeOnGet: o, updateAgeOnHas: h, allowStale: a, dispose: c, disposeAfter: f,
    noDisposeOnSet: u, noUpdateTTL: d, maxSize: p = 0, maxEntrySize: g = 0, sizeCalculation: m, fetchMethod: y, noDeleteOnFetchRejection: w,
    noDeleteOnStaleGet: E, allowStaleOnFetchRejection: S, allowStaleOnFetchAbort: b, ignoreFetchAbort: x } = t;
    if (e !== 0 && !Y(e))
      throw new TypeError("max option must be a nonnegative integer");
    let T = e ? Ye(e) : Array;
    if (!T)
      throw new Error("invalid max value: " + e);
    if (this.#t = e, this.#s = p, this.maxEntrySize = g || this.#s, this.sizeCalculation = m, this.sizeCalculation) {
      if (!this.#s && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (y !== void 0 && typeof y != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (this.#h = y, this.#R = !!y, this.#a = /* @__PURE__ */ new Map(), this.#o = new Array(e).fill(void 0), this.#e = new Array(e).fill(void 0),
    this.#m = new T(e), this.#w = new T(e), this.#d = 0, this.#u = 0, this.#S = ne.create(e), this.#l = 0, this.#f = 0, typeof c == "functio\
n" && (this.#n = c), typeof f == "function" ? (this.#i = f, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#b = !!this.#n, this.#p =
    !!this.#i, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!w, this.allowStaleOnFetchRejection = !!S,
    this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!x, this.maxEntrySize !== 0) {
      if (this.#s !== 0 && !Y(this.#s))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Y(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      this.#F();
    }
    if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!E, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!h, this.ttlResolution = Y(i) ||
    i === 0 ? i : 1, this.ttlAutopurge = !!n, this.ttl = s || 0, this.ttl) {
      if (!Y(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      this.#D();
    }
    if (this.#t === 0 && this.ttl === 0 && this.#s === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#t && !this.#s) {
      let W = "LRU_CACHE_UNBOUNDED";
      bi(W) && (Ve.add(W), Xe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCac\
heWarning", W, r));
    }
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(t) {
    return this.#a.has(t) ? 1 / 0 : 0;
  }
  #D() {
    let t = new nt(this.#t), e = new nt(this.#t);
    this.#E = t, this.#k = e, this.#r = (n, o, h = rt.now()) => {
      if (e[n] = o !== 0 ? h : 0, t[n] = o, o !== 0 && this.ttlAutopurge) {
        let a = setTimeout(() => {
          this.#y(n) && this.delete(this.#o[n]);
        }, o + 1);
        a.unref && a.unref();
      }
    }, this.#C = (n) => {
      e[n] = t[n] !== 0 ? rt.now() : 0;
    }, this.#x = (n, o) => {
      if (t[o]) {
        let h = t[o], a = e[o];
        if (!h || !a)
          return;
        n.ttl = h, n.start = a, n.now = s || i();
        let c = n.now - a;
        n.remainingTTL = h - c;
      }
    };
    let s = 0, i = /* @__PURE__ */ l(() => {
      let n = rt.now();
      if (this.ttlResolution > 0) {
        s = n;
        let o = setTimeout(() => s = 0, this.ttlResolution);
        o.unref && o.unref();
      }
      return n;
    }, "getNow");
    this.getRemainingTTL = (n) => {
      let o = this.#a.get(n);
      if (o === void 0)
        return 0;
      let h = t[o], a = e[o];
      if (!h || !a)
        return 1 / 0;
      let c = (s || i()) - a;
      return h - c;
    }, this.#y = (n) => {
      let o = e[n], h = t[n];
      return !!h && !!o && (s || i()) - o > h;
    };
  }
  // conditionally set private methods related to TTL
  #C = /* @__PURE__ */ l(() => {
  }, "#updateItemAge");
  #x = /* @__PURE__ */ l(() => {
  }, "#statusTTL");
  #r = /* @__PURE__ */ l(() => {
  }, "#setItemTTL");
  /* c8 ignore stop */
  #y = /* @__PURE__ */ l(() => !1, "#isStale");
  #F() {
    let t = new nt(this.#t);
    this.#f = 0, this.#A = t, this.#v = (e) => {
      this.#f -= t[e], t[e] = 0;
    }, this.#P = (e, s, i, n) => {
      if (this.#c(s))
        return 0;
      if (!Y(i))
        if (n) {
          if (typeof n != "function")
            throw new TypeError("sizeCalculation must be a function");
          if (i = n(s, e), !Y(i))
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else
          throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size \
must be set.");
      return i;
    }, this.#_ = (e, s, i) => {
      if (t[e] = s, this.#s) {
        let n = this.#s - t[e];
        for (; this.#f > n; )
          this.#M(!0);
      }
      this.#f += t[e], i && (i.entrySize = s, i.totalCalculatedSize = this.#f);
    };
  }
  #v = /* @__PURE__ */ l((t) => {
  }, "#removeItemSize");
  #_ = /* @__PURE__ */ l((t, e, s) => {
  }, "#addItemSize");
  #P = /* @__PURE__ */ l((t, e, s, i) => {
    if (s || i)
      throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0;
  }, "#requireSize");
  *#T({ allowStale: t = this.allowStale } = {}) {
    if (this.#l)
      for (let e = this.#u; !(!this.#j(e) || ((t || !this.#y(e)) && (yield e), e === this.#d)); )
        e = this.#w[e];
  }
  *#O({ allowStale: t = this.allowStale } = {}) {
    if (this.#l)
      for (let e = this.#d; !(!this.#j(e) || ((t || !this.#y(e)) && (yield e), e === this.#u)); )
        e = this.#m[e];
  }
  #j(t) {
    return t !== void 0 && this.#a.get(this.#o[t]) === t;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (let t of this.#T())
      this.#e[t] !== void 0 && this.#o[t] !== void 0 && !this.#c(this.#e[t]) && (yield [this.#o[t], this.#e[t]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (let t of this.#O())
      this.#e[t] !== void 0 && this.#o[t] !== void 0 && !this.#c(this.#e[t]) && (yield [this.#o[t], this.#e[t]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (let t of this.#T()) {
      let e = this.#o[t];
      e !== void 0 && !this.#c(this.#e[t]) && (yield e);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (let t of this.#O()) {
      let e = this.#o[t];
      e !== void 0 && !this.#c(this.#e[t]) && (yield e);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (let t of this.#T())
      this.#e[t] !== void 0 && !this.#c(this.#e[t]) && (yield this.#e[t]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (let t of this.#O())
      this.#e[t] !== void 0 && !this.#c(this.#e[t]) && (yield this.#e[t]);
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(t, e = {}) {
    for (let s of this.#T()) {
      let i = this.#e[s], n = this.#c(i) ? i.__staleWhileFetching : i;
      if (n !== void 0 && t(n, this.#o[s], this))
        return this.get(this.#o[s], e);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(t, e = this) {
    for (let s of this.#T()) {
      let i = this.#e[s], n = this.#c(i) ? i.__staleWhileFetching : i;
      n !== void 0 && t.call(e, n, this.#o[s], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(t, e = this) {
    for (let s of this.#O()) {
      let i = this.#e[s], n = this.#c(i) ? i.__staleWhileFetching : i;
      n !== void 0 && t.call(e, n, this.#o[s], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let t = !1;
    for (let e of this.#O({ allowStale: !0 }))
      this.#y(e) && (this.delete(this.#o[e]), t = !0);
    return t;
  }
  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
   * single key. Always returns stale values, if their info is found in the
   * cache, so be sure to check for expired TTLs if relevant.
   */
  info(t) {
    let e = this.#a.get(t);
    if (e === void 0)
      return;
    let s = this.#e[e], i = this.#c(s) ? s.__staleWhileFetching : s;
    if (i === void 0)
      return;
    let n = { value: i };
    if (this.#E && this.#k) {
      let o = this.#E[e], h = this.#k[e];
      if (o && h) {
        let a = o - (rt.now() - h);
        n.ttl = a, n.start = Date.now();
      }
    }
    return this.#A && (n.size = this.#A[e]), n;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    let t = [];
    for (let e of this.#T({ allowStale: !0 })) {
      let s = this.#o[e], i = this.#e[e], n = this.#c(i) ? i.__staleWhileFetching : i;
      if (n === void 0 || s === void 0)
        continue;
      let o = { value: n };
      if (this.#E && this.#k) {
        o.ttl = this.#E[e];
        let h = rt.now() - this.#k[e];
        o.start = Math.floor(Date.now() - h);
      }
      this.#A && (o.size = this.#A[e]), t.unshift([s, o]);
    }
    return t;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(t) {
    this.clear();
    for (let [e, s] of t) {
      if (s.start) {
        let i = Date.now() - s.start;
        s.start = rt.now() - i;
      }
      this.set(e, s.value, s);
    }
  }
  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   */
  set(t, e, s = {}) {
    if (e === void 0)
      return this.delete(t), this;
    let { ttl: i = this.ttl, start: n, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: h = this.sizeCalculation, status: a } = s, {
    noUpdateTTL: c = this.noUpdateTTL } = s, f = this.#P(t, e, s.size || 0, h);
    if (this.maxEntrySize && f > this.maxEntrySize)
      return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(t), this;
    let u = this.#l === 0 ? void 0 : this.#a.get(t);
    if (u === void 0)
      u = this.#l === 0 ? this.#u : this.#S.length !== 0 ? this.#S.pop() : this.#l === this.#t ? this.#M(!1) : this.#l, this.#o[u] = t, this.#e[u] =
      e, this.#a.set(t, u), this.#m[this.#u] = u, this.#w[u] = this.#u, this.#u = u, this.#l++, this.#_(u, f, a), a && (a.set = "add"), c = !1;
    else {
      this.#N(u);
      let d = this.#e[u];
      if (e !== d) {
        if (this.#R && this.#c(d)) {
          d.__abortController.abort(new Error("replaced"));
          let { __staleWhileFetching: p } = d;
          p !== void 0 && !o && (this.#b && this.#n?.(p, t, "set"), this.#p && this.#g?.push([p, t, "set"]));
        } else o || (this.#b && this.#n?.(d, t, "set"), this.#p && this.#g?.push([d, t, "set"]));
        if (this.#v(u), this.#_(u, f, a), this.#e[u] = e, a) {
          a.set = "replace";
          let p = d && this.#c(d) ? d.__staleWhileFetching : d;
          p !== void 0 && (a.oldValue = p);
        }
      } else a && (a.set = "update");
    }
    if (i !== 0 && !this.#E && this.#D(), this.#E && (c || this.#r(u, i, n), a && this.#x(a, u)), !o && this.#p && this.#g) {
      let d = this.#g, p;
      for (; p = d?.shift(); )
        this.#i?.(...p);
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    try {
      for (; this.#l; ) {
        let t = this.#e[this.#d];
        if (this.#M(!0), this.#c(t)) {
          if (t.__staleWhileFetching)
            return t.__staleWhileFetching;
        } else if (t !== void 0)
          return t;
      }
    } finally {
      if (this.#p && this.#g) {
        let t = this.#g, e;
        for (; e = t?.shift(); )
          this.#i?.(...e);
      }
    }
  }
  #M(t) {
    let e = this.#d, s = this.#o[e], i = this.#e[e];
    return this.#R && this.#c(i) ? i.__abortController.abort(new Error("evicted")) : (this.#b || this.#p) && (this.#b && this.#n?.(i, s, "ev\
ict"), this.#p && this.#g?.push([i, s, "evict"])), this.#v(e), t && (this.#o[e] = void 0, this.#e[e] = void 0, this.#S.push(e)), this.#l ===
    1 ? (this.#d = this.#u = 0, this.#S.length = 0) : this.#d = this.#m[e], this.#a.delete(s), this.#l--, e;
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(t, e = {}) {
    let { updateAgeOnHas: s = this.updateAgeOnHas, status: i } = e, n = this.#a.get(t);
    if (n !== void 0) {
      let o = this.#e[n];
      if (this.#c(o) && o.__staleWhileFetching === void 0)
        return !1;
      if (this.#y(n))
        i && (i.has = "stale", this.#x(i, n));
      else return s && this.#C(n), i && (i.has = "hit", this.#x(i, n)), !0;
    } else i && (i.has = "miss");
    return !1;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(t, e = {}) {
    let { allowStale: s = this.allowStale } = e, i = this.#a.get(t);
    if (i === void 0 || !s && this.#y(i))
      return;
    let n = this.#e[i];
    return this.#c(n) ? n.__staleWhileFetching : n;
  }
  #L(t, e, s, i) {
    let n = e === void 0 ? void 0 : this.#e[e];
    if (this.#c(n))
      return n;
    let o = new Nt(), { signal: h } = s;
    h?.addEventListener("abort", () => o.abort(h.reason), {
      signal: o.signal
    });
    let a = {
      signal: o.signal,
      options: s,
      context: i
    }, c = /* @__PURE__ */ l((m, y = !1) => {
      let { aborted: w } = o.signal, E = s.ignoreFetchAbort && m !== void 0;
      if (s.status && (w && !y ? (s.status.fetchAborted = !0, s.status.fetchError = o.signal.reason, E && (s.status.fetchAbortIgnored = !0)) :
      s.status.fetchResolved = !0), w && !E && !y)
        return u(o.signal.reason);
      let S = p;
      return this.#e[e] === p && (m === void 0 ? S.__staleWhileFetching ? this.#e[e] = S.__staleWhileFetching : this.delete(t) : (s.status &&
      (s.status.fetchUpdated = !0), this.set(t, m, a.options))), m;
    }, "cb"), f = /* @__PURE__ */ l((m) => (s.status && (s.status.fetchRejected = !0, s.status.fetchError = m), u(m)), "eb"), u = /* @__PURE__ */ l(
    (m) => {
      let { aborted: y } = o.signal, w = y && s.allowStaleOnFetchAbort, E = w || s.allowStaleOnFetchRejection, S = E || s.noDeleteOnFetchRejection,
      b = p;
      if (this.#e[e] === p && (!S || b.__staleWhileFetching === void 0 ? this.delete(t) : w || (this.#e[e] = b.__staleWhileFetching)), E)
        return s.status && b.__staleWhileFetching !== void 0 && (s.status.returnedStale = !0), b.__staleWhileFetching;
      if (b.__returned === b)
        throw m;
    }, "fetchFail"), d = /* @__PURE__ */ l((m, y) => {
      let w = this.#h?.(t, n, a);
      w && w instanceof Promise && w.then((E) => m(E === void 0 ? void 0 : E), y), o.signal.addEventListener("abort", () => {
        (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) && (m(void 0), s.allowStaleOnFetchAbort && (m = /* @__PURE__ */ l((E) => c(E, !0),
        "res")));
      });
    }, "pcall");
    s.status && (s.status.fetchDispatched = !0);
    let p = new Promise(d).then(c, f), g = Object.assign(p, {
      __abortController: o,
      __staleWhileFetching: n,
      __returned: void 0
    });
    return e === void 0 ? (this.set(t, g, { ...a.options, status: void 0 }), e = this.#a.get(t)) : this.#e[e] = g, g;
  }
  #c(t) {
    if (!this.#R)
      return !1;
    let e = t;
    return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof Nt;
  }
  async fetch(t, e = {}) {
    let {
      // get options
      allowStale: s = this.allowStale,
      updateAgeOnGet: i = this.updateAgeOnGet,
      noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
      // set options
      ttl: o = this.ttl,
      noDisposeOnSet: h = this.noDisposeOnSet,
      size: a = 0,
      sizeCalculation: c = this.sizeCalculation,
      noUpdateTTL: f = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: p = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
      context: m,
      forceRefresh: y = !1,
      status: w,
      signal: E
    } = e;
    if (!this.#R)
      return w && (w.fetch = "get"), this.get(t, {
        allowStale: s,
        updateAgeOnGet: i,
        noDeleteOnStaleGet: n,
        status: w
      });
    let S = {
      allowStale: s,
      updateAgeOnGet: i,
      noDeleteOnStaleGet: n,
      ttl: o,
      noDisposeOnSet: h,
      size: a,
      sizeCalculation: c,
      noUpdateTTL: f,
      noDeleteOnFetchRejection: u,
      allowStaleOnFetchRejection: d,
      allowStaleOnFetchAbort: g,
      ignoreFetchAbort: p,
      status: w,
      signal: E
    }, b = this.#a.get(t);
    if (b === void 0) {
      w && (w.fetch = "miss");
      let x = this.#L(t, b, S, m);
      return x.__returned = x;
    } else {
      let x = this.#e[b];
      if (this.#c(x)) {
        let Ft = s && x.__staleWhileFetching !== void 0;
        return w && (w.fetch = "inflight", Ft && (w.returnedStale = !0)), Ft ? x.__staleWhileFetching : x.__returned = x;
      }
      let T = this.#y(b);
      if (!y && !T)
        return w && (w.fetch = "hit"), this.#N(b), i && this.#C(b), w && this.#x(w, b), x;
      let W = this.#L(t, b, S, m), $ = W.__staleWhileFetching !== void 0 && s;
      return w && (w.fetch = T ? "stale" : "refresh", $ && T && (w.returnedStale = !0)), $ ? W.__staleWhileFetching : W.__returned = W;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(t, e = {}) {
    let { allowStale: s = this.allowStale, updateAgeOnGet: i = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: o } = e,
    h = this.#a.get(t);
    if (h !== void 0) {
      let a = this.#e[h], c = this.#c(a);
      return o && this.#x(o, h), this.#y(h) ? (o && (o.get = "stale"), c ? (o && s && a.__staleWhileFetching !== void 0 && (o.returnedStale =
      !0), s ? a.__staleWhileFetching : void 0) : (n || this.delete(t), o && s && (o.returnedStale = !0), s ? a : void 0)) : (o && (o.get = "\
hit"), c ? a.__staleWhileFetching : (this.#N(h), i && this.#C(h), a));
    } else o && (o.get = "miss");
  }
  #W(t, e) {
    this.#w[e] = t, this.#m[t] = e;
  }
  #N(t) {
    t !== this.#u && (t === this.#d ? this.#d = this.#m[t] : this.#W(this.#w[t], this.#m[t]), this.#W(this.#u, t), this.#u = t);
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(t) {
    let e = !1;
    if (this.#l !== 0) {
      let s = this.#a.get(t);
      if (s !== void 0)
        if (e = !0, this.#l === 1)
          this.clear();
        else {
          this.#v(s);
          let i = this.#e[s];
          if (this.#c(i) ? i.__abortController.abort(new Error("deleted")) : (this.#b || this.#p) && (this.#b && this.#n?.(i, t, "delete"), this.#p &&
          this.#g?.push([i, t, "delete"])), this.#a.delete(t), this.#o[s] = void 0, this.#e[s] = void 0, s === this.#u)
            this.#u = this.#w[s];
          else if (s === this.#d)
            this.#d = this.#m[s];
          else {
            let n = this.#w[s];
            this.#m[n] = this.#m[s];
            let o = this.#m[s];
            this.#w[o] = this.#w[s];
          }
          this.#l--, this.#S.push(s);
        }
    }
    if (this.#p && this.#g?.length) {
      let s = this.#g, i;
      for (; i = s?.shift(); )
        this.#i?.(...i);
    }
    return e;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    for (let t of this.#O({ allowStale: !0 })) {
      let e = this.#e[t];
      if (this.#c(e))
        e.__abortController.abort(new Error("deleted"));
      else {
        let s = this.#o[t];
        this.#b && this.#n?.(e, s, "delete"), this.#p && this.#g?.push([e, s, "delete"]);
      }
    }
    if (this.#a.clear(), this.#e.fill(void 0), this.#o.fill(void 0), this.#E && this.#k && (this.#E.fill(0), this.#k.fill(0)), this.#A && this.#A.
    fill(0), this.#d = 0, this.#u = 0, this.#S.length = 0, this.#f = 0, this.#l = 0, this.#p && this.#g) {
      let t = this.#g, e;
      for (; e = t?.shift(); )
        this.#i?.(...e);
    }
  }
};

// ../node_modules/path-scurry/dist/mjs/index.js
var at = require("path"), os = require("url"), Oi = Qt(require("fs"), 1), q = require("fs"), Q = require("fs/promises");

// ../node_modules/minipass/dist/esm/index.js
var zt = require("events"), ue = Qt(require("stream"), 1), es = require("string_decoder");
var Je = typeof process == "object" && process ? process : {
  stdout: null,
  stderr: null
}, Si = /* @__PURE__ */ l((r) => !!r && typeof r == "object" && (r instanceof Z || r instanceof ue.default || Ei(r) || xi(r)), "isStream"), Ei = /* @__PURE__ */ l(
(r) => !!r && typeof r == "object" && r instanceof zt.EventEmitter && typeof r.pipe == "function" && // node core Writable streams have a pipe() method, but it throws
r.pipe !== ue.default.Writable.prototype.pipe, "isReadable"), xi = /* @__PURE__ */ l((r) => !!r && typeof r == "object" && r instanceof zt.EventEmitter &&
typeof r.write == "function" && typeof r.end == "function", "isWritable"), K = Symbol("EOF"), V = Symbol("maybeEmitEnd"), J = Symbol("emitte\
dEnd"), Lt = Symbol("emittingEnd"), wt = Symbol("emittedError"), _t = Symbol("closed"), Ze = Symbol("read"), Pt = Symbol("flush"), Qe = Symbol(
"flushChunk"), z = Symbol("encoding"), ot = Symbol("decoder"), A = Symbol("flowing"), yt = Symbol("paused"), ht = Symbol("resume"), k = Symbol(
"buffer"), M = Symbol("pipes"), C = Symbol("bufferLength"), oe = Symbol("bufferPush"), jt = Symbol("bufferShift"), O = Symbol("objectMode"),
v = Symbol("destroyed"), he = Symbol("error"), ae = Symbol("emitData"), ts = Symbol("emitEnd"), le = Symbol("emitEnd2"), G = Symbol("async"),
ce = Symbol("abort"), Wt = Symbol("aborted"), bt = Symbol("signal"), tt = Symbol("dataListeners"), L = Symbol("discarded"), St = /* @__PURE__ */ l(
(r) => Promise.resolve().then(r), "defer"), vi = /* @__PURE__ */ l((r) => r(), "nodefer"), Ti = /* @__PURE__ */ l((r) => r === "end" || r ===
"finish" || r === "prefinish", "isEndish"), Ai = /* @__PURE__ */ l((r) => r instanceof ArrayBuffer || !!r && typeof r == "object" && r.constructor &&
r.constructor.name === "ArrayBuffer" && r.byteLength >= 0, "isArrayBufferLike"), ki = /* @__PURE__ */ l((r) => !Buffer.isBuffer(r) && ArrayBuffer.
isView(r), "isArrayBufferView"), It = class {
  static {
    l(this, "Pipe");
  }
  src;
  dest;
  opts;
  ondrain;
  constructor(t, e, s) {
    this.src = t, this.dest = e, this.opts = s, this.ondrain = () => t[ht](), this.dest.on("drain", this.ondrain);
  }
  unpipe() {
    this.dest.removeListener("drain", this.ondrain);
  }
  // only here for the prototype
  /* c8 ignore start */
  proxyErrors(t) {
  }
  /* c8 ignore stop */
  end() {
    this.unpipe(), this.opts.end && this.dest.end();
  }
}, fe = class extends It {
  static {
    l(this, "PipeProxyErrors");
  }
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe();
  }
  constructor(t, e, s) {
    super(t, e, s), this.proxyErrors = (i) => e.emit("error", i), t.on("error", this.proxyErrors);
  }
}, Ci = /* @__PURE__ */ l((r) => !!r.objectMode, "isObjectModeOptions"), Ri = /* @__PURE__ */ l((r) => !r.objectMode && !!r.encoding && r.encoding !==
"buffer", "isEncodingOptions"), Z = class extends zt.EventEmitter {
  static {
    l(this, "Minipass");
  }
  [A] = !1;
  [yt] = !1;
  [M] = [];
  [k] = [];
  [O];
  [z];
  [G];
  [ot];
  [K] = !1;
  [J] = !1;
  [Lt] = !1;
  [_t] = !1;
  [wt] = null;
  [C] = 0;
  [v] = !1;
  [bt];
  [Wt] = !1;
  [tt] = 0;
  [L] = !1;
  /**
   * true if the stream can be written
   */
  writable = !0;
  /**
   * true if the stream can be read
   */
  readable = !0;
  /**
   * If `RType` is Buffer, then options do not need to be provided.
   * Otherwise, an options object must be provided to specify either
   * {@link Minipass.SharedOptions.objectMode} or
   * {@link Minipass.SharedOptions.encoding}, as appropriate.
   */
  constructor(...t) {
    let e = t[0] || {};
    if (super(), e.objectMode && typeof e.encoding == "string")
      throw new TypeError("Encoding and objectMode may not be used together");
    Ci(e) ? (this[O] = !0, this[z] = null) : Ri(e) ? (this[z] = e.encoding, this[O] = !1) : (this[O] = !1, this[z] = null), this[G] = !!e.async,
    this[ot] = this[z] ? new es.StringDecoder(this[z]) : null, e && e.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: /* @__PURE__ */ l(
    () => this[k], "get") }), e && e.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: /* @__PURE__ */ l(() => this[M],
    "get") });
    let { signal: s } = e;
    s && (this[bt] = s, s.aborted ? this[ce]() : s.addEventListener("abort", () => this[ce]()));
  }
  /**
   * The amount of data stored in the buffer waiting to be read.
   *
   * For Buffer strings, this will be the total byte length.
   * For string encoding streams, this will be the string character length,
   * according to JavaScript's `string.length` logic.
   * For objectMode streams, this is a count of the items waiting to be
   * emitted.
   */
  get bufferLength() {
    return this[C];
  }
  /**
   * The `BufferEncoding` currently in use, or `null`
   */
  get encoding() {
    return this[z];
  }
  /**
   * @deprecated - This is a read only property
   */
  set encoding(t) {
    throw new Error("Encoding must be set at instantiation time");
  }
  /**
   * @deprecated - Encoding may only be set at instantiation time
   */
  setEncoding(t) {
    throw new Error("Encoding must be set at instantiation time");
  }
  /**
   * True if this is an objectMode stream
   */
  get objectMode() {
    return this[O];
  }
  /**
   * @deprecated - This is a read-only property
   */
  set objectMode(t) {
    throw new Error("objectMode must be set at instantiation time");
  }
  /**
   * true if this is an async stream
   */
  get async() {
    return this[G];
  }
  /**
   * Set to true to make this stream async.
   *
   * Once set, it cannot be unset, as this would potentially cause incorrect
   * behavior.  Ie, a sync stream can be made async, but an async stream
   * cannot be safely made sync.
   */
  set async(t) {
    this[G] = this[G] || !!t;
  }
  // drop everything and get out of the flow completely
  [ce]() {
    this[Wt] = !0, this.emit("abort", this[bt]?.reason), this.destroy(this[bt]?.reason);
  }
  /**
   * True if the stream has been aborted.
   */
  get aborted() {
    return this[Wt];
  }
  /**
   * No-op setter. Stream aborted status is set via the AbortSignal provided
   * in the constructor options.
   */
  set aborted(t) {
  }
  write(t, e, s) {
    if (this[Wt])
      return !1;
    if (this[K])
      throw new Error("write after end");
    if (this[v])
      return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })),
      !0;
    typeof e == "function" && (s = e, e = "utf8"), e || (e = "utf8");
    let i = this[G] ? St : vi;
    if (!this[O] && !Buffer.isBuffer(t)) {
      if (ki(t))
        t = Buffer.from(t.buffer, t.byteOffset, t.byteLength);
      else if (Ai(t))
        t = Buffer.from(t);
      else if (typeof t != "string")
        throw new Error("Non-contiguous data written to non-objectMode stream");
    }
    return this[O] ? (this[A] && this[C] !== 0 && this[Pt](!0), this[A] ? this.emit("data", t) : this[oe](t), this[C] !== 0 && this.emit("re\
adable"), s && i(s), this[A]) : t.length ? (typeof t == "string" && // unless it is a string already ready for us to use
    !(e === this[z] && !this[ot]?.lastNeed) && (t = Buffer.from(t, e)), Buffer.isBuffer(t) && this[z] && (t = this[ot].write(t)), this[A] &&
    this[C] !== 0 && this[Pt](!0), this[A] ? this.emit("data", t) : this[oe](t), this[C] !== 0 && this.emit("readable"), s && i(s), this[A]) :
    (this[C] !== 0 && this.emit("readable"), s && i(s), this[A]);
  }
  /**
   * Low-level explicit read method.
   *
   * In objectMode, the argument is ignored, and one item is returned if
   * available.
   *
   * `n` is the number of bytes (or in the case of encoding streams,
   * characters) to consume. If `n` is not provided, then the entire buffer
   * is returned, or `null` is returned if no data is available.
   *
   * If `n` is greater that the amount of data in the internal buffer,
   * then `null` is returned.
   */
  read(t) {
    if (this[v])
      return null;
    if (this[L] = !1, this[C] === 0 || t === 0 || t && t > this[C])
      return this[V](), null;
    this[O] && (t = null), this[k].length > 1 && !this[O] && (this[k] = [
      this[z] ? this[k].join("") : Buffer.concat(this[k], this[C])
    ]);
    let e = this[Ze](t || null, this[k][0]);
    return this[V](), e;
  }
  [Ze](t, e) {
    if (this[O])
      this[jt]();
    else {
      let s = e;
      t === s.length || t === null ? this[jt]() : typeof s == "string" ? (this[k][0] = s.slice(t), e = s.slice(0, t), this[C] -= t) : (this[k][0] =
      s.subarray(t), e = s.subarray(0, t), this[C] -= t);
    }
    return this.emit("data", e), !this[k].length && !this[K] && this.emit("drain"), e;
  }
  end(t, e, s) {
    return typeof t == "function" && (s = t, t = void 0), typeof e == "function" && (s = e, e = "utf8"), t !== void 0 && this.write(t, e), s &&
    this.once("end", s), this[K] = !0, this.writable = !1, (this[A] || !this[yt]) && this[V](), this;
  }
  // don't let the internal resume be overwritten
  [ht]() {
    this[v] || (!this[tt] && !this[M].length && (this[L] = !0), this[yt] = !1, this[A] = !0, this.emit("resume"), this[k].length ? this[Pt]() :
    this[K] ? this[V]() : this.emit("drain"));
  }
  /**
   * Resume the stream if it is currently in a paused state
   *
   * If called when there are no pipe destinations or `data` event listeners,
   * this will place the stream in a "discarded" state, where all data will
   * be thrown away. The discarded state is removed if a pipe destination or
   * data handler is added, if pause() is called, or if any synchronous or
   * asynchronous iteration is started.
   */
  resume() {
    return this[ht]();
  }
  /**
   * Pause the stream
   */
  pause() {
    this[A] = !1, this[yt] = !0, this[L] = !1;
  }
  /**
   * true if the stream has been forcibly destroyed
   */
  get destroyed() {
    return this[v];
  }
  /**
   * true if the stream is currently in a flowing state, meaning that
   * any writes will be immediately emitted.
   */
  get flowing() {
    return this[A];
  }
  /**
   * true if the stream is currently in a paused state
   */
  get paused() {
    return this[yt];
  }
  [oe](t) {
    this[O] ? this[C] += 1 : this[C] += t.length, this[k].push(t);
  }
  [jt]() {
    return this[O] ? this[C] -= 1 : this[C] -= this[k][0].length, this[k].shift();
  }
  [Pt](t = !1) {
    do
      ;
    while (this[Qe](this[jt]()) && this[k].length);
    !t && !this[k].length && !this[K] && this.emit("drain");
  }
  [Qe](t) {
    return this.emit("data", t), this[A];
  }
  /**
   * Pipe all data emitted by this stream into the destination provided.
   *
   * Triggers the flow of data.
   */
  pipe(t, e) {
    if (this[v])
      return t;
    this[L] = !1;
    let s = this[J];
    return e = e || {}, t === Je.stdout || t === Je.stderr ? e.end = !1 : e.end = e.end !== !1, e.proxyErrors = !!e.proxyErrors, s ? e.end &&
    t.end() : (this[M].push(e.proxyErrors ? new fe(this, t, e) : new It(this, t, e)), this[G] ? St(() => this[ht]()) : this[ht]()), t;
  }
  /**
   * Fully unhook a piped destination stream.
   *
   * If the destination stream was the only consumer of this stream (ie,
   * there are no other piped destinations or `'data'` event listeners)
   * then the flow of data will stop until there is another consumer or
   * {@link Minipass#resume} is explicitly called.
   */
  unpipe(t) {
    let e = this[M].find((s) => s.dest === t);
    e && (this[M].length === 1 ? (this[A] && this[tt] === 0 && (this[A] = !1), this[M] = []) : this[M].splice(this[M].indexOf(e), 1), e.unpipe());
  }
  /**
   * Alias for {@link Minipass#on}
   */
  addListener(t, e) {
    return this.on(t, e);
  }
  /**
   * Mostly identical to `EventEmitter.on`, with the following
   * behavior differences to prevent data loss and unnecessary hangs:
   *
   * - Adding a 'data' event handler will trigger the flow of data
   *
   * - Adding a 'readable' event handler when there is data waiting to be read
   *   will cause 'readable' to be emitted immediately.
   *
   * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
   *   already passed will cause the event to be emitted immediately and all
   *   handlers removed.
   *
   * - Adding an 'error' event handler after an error has been emitted will
   *   cause the event to be re-emitted immediately with the error previously
   *   raised.
   */
  on(t, e) {
    let s = super.on(t, e);
    if (t === "data")
      this[L] = !1, this[tt]++, !this[M].length && !this[A] && this[ht]();
    else if (t === "readable" && this[C] !== 0)
      super.emit("readable");
    else if (Ti(t) && this[J])
      super.emit(t), this.removeAllListeners(t);
    else if (t === "error" && this[wt]) {
      let i = e;
      this[G] ? St(() => i.call(this, this[wt])) : i.call(this, this[wt]);
    }
    return s;
  }
  /**
   * Alias for {@link Minipass#off}
   */
  removeListener(t, e) {
    return this.off(t, e);
  }
  /**
   * Mostly identical to `EventEmitter.off`
   *
   * If a 'data' event handler is removed, and it was the last consumer
   * (ie, there are no pipe destinations or other 'data' event listeners),
   * then the flow of data will stop until there is another consumer or
   * {@link Minipass#resume} is explicitly called.
   */
  off(t, e) {
    let s = super.off(t, e);
    return t === "data" && (this[tt] = this.listeners("data").length, this[tt] === 0 && !this[L] && !this[M].length && (this[A] = !1)), s;
  }
  /**
   * Mostly identical to `EventEmitter.removeAllListeners`
   *
   * If all 'data' event handlers are removed, and they were the last consumer
   * (ie, there are no pipe destinations), then the flow of data will stop
   * until there is another consumer or {@link Minipass#resume} is explicitly
   * called.
   */
  removeAllListeners(t) {
    let e = super.removeAllListeners(t);
    return (t === "data" || t === void 0) && (this[tt] = 0, !this[L] && !this[M].length && (this[A] = !1)), e;
  }
  /**
   * true if the 'end' event has been emitted
   */
  get emittedEnd() {
    return this[J];
  }
  [V]() {
    !this[Lt] && !this[J] && !this[v] && this[k].length === 0 && this[K] && (this[Lt] = !0, this.emit("end"), this.emit("prefinish"), this.emit(
    "finish"), this[_t] && this.emit("close"), this[Lt] = !1);
  }
  /**
   * Mostly identical to `EventEmitter.emit`, with the following
   * behavior differences to prevent data loss and unnecessary hangs:
   *
   * If the stream has been destroyed, and the event is something other
   * than 'close' or 'error', then `false` is returned and no handlers
   * are called.
   *
   * If the event is 'end', and has already been emitted, then the event
   * is ignored. If the stream is in a paused or non-flowing state, then
   * the event will be deferred until data flow resumes. If the stream is
   * async, then handlers will be called on the next tick rather than
   * immediately.
   *
   * If the event is 'close', and 'end' has not yet been emitted, then
   * the event will be deferred until after 'end' is emitted.
   *
   * If the event is 'error', and an AbortSignal was provided for the stream,
   * and there are no listeners, then the event is ignored, matching the
   * behavior of node core streams in the presense of an AbortSignal.
   *
   * If the event is 'finish' or 'prefinish', then all listeners will be
   * removed after emitting the event, to prevent double-firing.
   */
  emit(t, ...e) {
    let s = e[0];
    if (t !== "error" && t !== "close" && t !== v && this[v])
      return !1;
    if (t === "data")
      return !this[O] && !s ? !1 : this[G] ? (St(() => this[ae](s)), !0) : this[ae](s);
    if (t === "end")
      return this[ts]();
    if (t === "close") {
      if (this[_t] = !0, !this[J] && !this[v])
        return !1;
      let n = super.emit("close");
      return this.removeAllListeners("close"), n;
    } else if (t === "error") {
      this[wt] = s, super.emit(he, s);
      let n = !this[bt] || this.listeners("error").length ? super.emit("error", s) : !1;
      return this[V](), n;
    } else if (t === "resume") {
      let n = super.emit("resume");
      return this[V](), n;
    } else if (t === "finish" || t === "prefinish") {
      let n = super.emit(t);
      return this.removeAllListeners(t), n;
    }
    let i = super.emit(t, ...e);
    return this[V](), i;
  }
  [ae](t) {
    for (let s of this[M])
      s.dest.write(t) === !1 && this.pause();
    let e = this[L] ? !1 : super.emit("data", t);
    return this[V](), e;
  }
  [ts]() {
    return this[J] ? !1 : (this[J] = !0, this.readable = !1, this[G] ? (St(() => this[le]()), !0) : this[le]());
  }
  [le]() {
    if (this[ot]) {
      let e = this[ot].end();
      if (e) {
        for (let s of this[M])
          s.dest.write(e);
        this[L] || super.emit("data", e);
      }
    }
    for (let e of this[M])
      e.end();
    let t = super.emit("end");
    return this.removeAllListeners("end"), t;
  }
  /**
   * Return a Promise that resolves to an array of all emitted data once
   * the stream ends.
   */
  async collect() {
    let t = Object.assign([], {
      dataLength: 0
    });
    this[O] || (t.dataLength = 0);
    let e = this.promise();
    return this.on("data", (s) => {
      t.push(s), this[O] || (t.dataLength += s.length);
    }), await e, t;
  }
  /**
   * Return a Promise that resolves to the concatenation of all emitted data
   * once the stream ends.
   *
   * Not allowed on objectMode streams.
   */
  async concat() {
    if (this[O])
      throw new Error("cannot concat in objectMode");
    let t = await this.collect();
    return this[z] ? t.join("") : Buffer.concat(t, t.dataLength);
  }
  /**
   * Return a void Promise that resolves once the stream ends.
   */
  async promise() {
    return new Promise((t, e) => {
      this.on(v, () => e(new Error("stream destroyed"))), this.on("error", (s) => e(s)), this.on("end", () => t());
    });
  }
  /**
   * Asynchronous `for await of` iteration.
   *
   * This will continue emitting all chunks until the stream terminates.
   */
  [Symbol.asyncIterator]() {
    this[L] = !1;
    let t = !1, e = /* @__PURE__ */ l(async () => (this.pause(), t = !0, { value: void 0, done: !0 }), "stop");
    return {
      next: /* @__PURE__ */ l(() => {
        if (t)
          return e();
        let i = this.read();
        if (i !== null)
          return Promise.resolve({ done: !1, value: i });
        if (this[K])
          return e();
        let n, o, h = /* @__PURE__ */ l((u) => {
          this.off("data", a), this.off("end", c), this.off(v, f), e(), o(u);
        }, "onerr"), a = /* @__PURE__ */ l((u) => {
          this.off("error", h), this.off("end", c), this.off(v, f), this.pause(), n({ value: u, done: !!this[K] });
        }, "ondata"), c = /* @__PURE__ */ l(() => {
          this.off("error", h), this.off("data", a), this.off(v, f), e(), n({ done: !0, value: void 0 });
        }, "onend"), f = /* @__PURE__ */ l(() => h(new Error("stream destroyed")), "ondestroy");
        return new Promise((u, d) => {
          o = d, n = u, this.once(v, f), this.once("error", h), this.once("end", c), this.once("data", a);
        });
      }, "next"),
      throw: e,
      return: e,
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  /**
   * Synchronous `for of` iteration.
   *
   * The iteration will terminate when the internal buffer runs out, even
   * if the stream has not yet terminated.
   */
  [Symbol.iterator]() {
    this[L] = !1;
    let t = !1, e = /* @__PURE__ */ l(() => (this.pause(), this.off(he, e), this.off(v, e), this.off("end", e), t = !0, { done: !0, value: void 0 }),
    "stop"), s = /* @__PURE__ */ l(() => {
      if (t)
        return e();
      let i = this.read();
      return i === null ? e() : { done: !1, value: i };
    }, "next");
    return this.once("end", e), this.once(he, e), this.once(v, e), {
      next: s,
      throw: e,
      return: e,
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  /**
   * Destroy a stream, preventing it from being used for any further purpose.
   *
   * If the stream has a `close()` method, then it will be called on
   * destruction.
   *
   * After destruction, any attempt to write data, read data, or emit most
   * events will be ignored.
   *
   * If an error argument is provided, then it will be emitted in an
   * 'error' event.
   */
  destroy(t) {
    if (this[v])
      return t ? this.emit("error", t) : this.emit(v), this;
    this[v] = !0, this[L] = !0, this[k].length = 0, this[C] = 0;
    let e = this;
    return typeof e.close == "function" && !this[_t] && e.close(), t ? this.emit("error", t) : this.emit(v), this;
  }
  /**
   * Alias for {@link isStream}
   *
   * Former export location, maintained for backwards compatibility.
   *
   * @deprecated
   */
  static get isStream() {
    return Si;
  }
};

// ../node_modules/path-scurry/dist/mjs/index.js
var Di = q.realpathSync.native, xt = {
  lstatSync: q.lstatSync,
  readdir: q.readdir,
  readdirSync: q.readdirSync,
  readlinkSync: q.readlinkSync,
  realpathSync: Di,
  promises: {
    lstat: Q.lstat,
    readdir: Q.readdir,
    readlink: Q.readlink,
    realpath: Q.realpath
  }
}, hs = /* @__PURE__ */ l((r) => !r || r === xt || r === Oi ? xt : {
  ...xt,
  ...r,
  promises: {
    ...xt.promises,
    ...r.promises || {}
  }
}, "fsFromOption"), as = /^\\\\\?\\([a-z]:)\\?$/i, Fi = /* @__PURE__ */ l((r) => r.replace(/\//g, "\\").replace(as, "$1\\"), "uncToDrive"), Mi = /[\\\/]/,
j = 0, ls = 1, cs = 2, H = 4, fs = 6, us = 8, et = 10, ds = 12, P = 15, Et = ~P, de = 16, ss = 32, vt = 64, B = 128, Bt = 256, $t = 512, is = vt |
B | $t, Ni = 1023, pe = /* @__PURE__ */ l((r) => r.isFile() ? us : r.isDirectory() ? H : r.isSymbolicLink() ? et : r.isCharacterDevice() ? cs :
r.isBlockDevice() ? fs : r.isSocket() ? ds : r.isFIFO() ? ls : j, "entToType"), rs = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ l((r) => {
  let t = rs.get(r);
  if (t)
    return t;
  let e = r.normalize("NFKD");
  return rs.set(r, e), e;
}, "normalize"), ns = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ l((r) => {
  let t = ns.get(r);
  if (t)
    return t;
  let e = Tt(r.toLowerCase());
  return ns.set(r, e), e;
}, "normalizeNocase"), Gt = class extends gt {
  static {
    l(this, "ResolveCache");
  }
  constructor() {
    super({ max: 256 });
  }
}, me = class extends gt {
  static {
    l(this, "ChildrenCache");
  }
  constructor(t = 16 * 1024) {
    super({
      maxSize: t,
      // parent + children
      sizeCalculation: /* @__PURE__ */ l((e) => e.length + 1, "sizeCalculation")
    });
  }
}, ps = Symbol("PathScurry setAsCwd"), D = class {
  static {
    l(this, "PathBase");
  }
  /**
   * the basename of this path
   *
   * **Important**: *always* test the path name against any test string
   * usingthe {@link isNamed} method, and not by directly comparing this
   * string. Otherwise, unicode path strings that the system sees as identical
   * will not be properly treated as the same path, leading to incorrect
   * behavior and possible security issues.
   */
  name;
  /**
   * the Path entry corresponding to the path root.
   *
   * @internal
   */
  root;
  /**
   * All roots found within the current PathScurry family
   *
   * @internal
   */
  roots;
  /**
   * a reference to the parent path, or undefined in the case of root entries
   *
   * @internal
   */
  parent;
  /**
   * boolean indicating whether paths are compared case-insensitively
   * @internal
   */
  nocase;
  // potential default fs override
  #t;
  // Stats fields
  #s;
  get dev() {
    return this.#s;
  }
  #n;
  get mode() {
    return this.#n;
  }
  #i;
  get nlink() {
    return this.#i;
  }
  #h;
  get uid() {
    return this.#h;
  }
  #l;
  get gid() {
    return this.#l;
  }
  #f;
  get rdev() {
    return this.#f;
  }
  #a;
  get blksize() {
    return this.#a;
  }
  #o;
  get ino() {
    return this.#o;
  }
  #e;
  get size() {
    return this.#e;
  }
  #m;
  get blocks() {
    return this.#m;
  }
  #w;
  get atimeMs() {
    return this.#w;
  }
  #d;
  get mtimeMs() {
    return this.#d;
  }
  #u;
  get ctimeMs() {
    return this.#u;
  }
  #S;
  get birthtimeMs() {
    return this.#S;
  }
  #g;
  get atime() {
    return this.#g;
  }
  #A;
  get mtime() {
    return this.#A;
  }
  #k;
  get ctime() {
    return this.#k;
  }
  #E;
  get birthtime() {
    return this.#E;
  }
  #b;
  #R;
  #p;
  #D;
  #C;
  #x;
  #r;
  #y;
  #F;
  #v;
  /**
   * This property is for compatibility with the Dirent class as of
   * Node v20, where Dirent['path'] refers to the path of the directory
   * that was passed to readdir.  So, somewhat counterintuitively, this
   * property refers to the *parent* path, not the path object itself.
   * For root entries, it's the path to the entry itself.
   */
  get path() {
    return (this.parent || this).fullpath();
  }
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(t, e = j, s, i, n, o, h) {
    this.name = t, this.#b = n ? Ut(t) : Tt(t), this.#r = e & Ni, this.nocase = n, this.roots = i, this.root = s || this, this.#y = o, this.#p =
    h.fullpath, this.#C = h.relative, this.#x = h.relativePosix, this.parent = h.parent, this.parent ? this.#t = this.parent.#t : this.#t = hs(
    h.fs);
  }
  /**
   * Returns the depth of the Path object from its root.
   *
   * For example, a path at `/foo/bar` would have a depth of 2.
   */
  depth() {
    return this.#R !== void 0 ? this.#R : this.parent ? this.#R = this.parent.depth() + 1 : this.#R = 0;
  }
  /**
   * @internal
   */
  childrenCache() {
    return this.#y;
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(t) {
    if (!t)
      return this;
    let e = this.getRootString(t), i = t.substring(e.length).split(this.splitSep);
    return e ? this.getRoot(e).#_(i) : this.#_(i);
  }
  #_(t) {
    let e = this;
    for (let s of t)
      e = e.child(s);
    return e;
  }
  /**
   * Returns the cached children Path objects, if still available.  If they
   * have fallen out of the cache, then returns an empty array, and resets the
   * READDIR_CALLED bit, so that future calls to readdir() will require an fs
   * lookup.
   *
   * @internal
   */
  children() {
    let t = this.#y.get(this);
    if (t)
      return t;
    let e = Object.assign([], { provisional: 0 });
    return this.#y.set(this, e), this.#r &= ~de, e;
  }
  /**
   * Resolves a path portion and returns or creates the child Path.
   *
   * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
   * `'..'`.
   *
   * This should not be called directly.  If `pathPart` contains any path
   * separators, it will lead to unsafe undefined behavior.
   *
   * Use `Path.resolve()` instead.
   *
   * @internal
   */
  child(t, e) {
    if (t === "" || t === ".")
      return this;
    if (t === "..")
      return this.parent || this;
    let s = this.children(), i = this.nocase ? Ut(t) : Tt(t);
    for (let a of s)
      if (a.#b === i)
        return a;
    let n = this.parent ? this.sep : "", o = this.#p ? this.#p + n + t : void 0, h = this.newChild(t, j, {
      ...e,
      parent: this,
      fullpath: o
    });
    return this.canReaddir() || (h.#r |= B), s.push(h), h;
  }
  /**
   * The relative path from the cwd. If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpath()
   */
  relative() {
    if (this.#C !== void 0)
      return this.#C;
    let t = this.name, e = this.parent;
    if (!e)
      return this.#C = this.name;
    let s = e.relative();
    return s + (!s || !e.parent ? "" : this.sep) + t;
  }
  /**
   * The relative path from the cwd, using / as the path separator.
   * If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpathPosix()
   * On posix systems, this is identical to relative().
   */
  relativePosix() {
    if (this.sep === "/")
      return this.relative();
    if (this.#x !== void 0)
      return this.#x;
    let t = this.name, e = this.parent;
    if (!e)
      return this.#x = this.fullpathPosix();
    let s = e.relativePosix();
    return s + (!s || !e.parent ? "" : "/") + t;
  }
  /**
   * The fully resolved path string for this Path entry
   */
  fullpath() {
    if (this.#p !== void 0)
      return this.#p;
    let t = this.name, e = this.parent;
    if (!e)
      return this.#p = this.name;
    let i = e.fullpath() + (e.parent ? this.sep : "") + t;
    return this.#p = i;
  }
  /**
   * On platforms other than windows, this is identical to fullpath.
   *
   * On windows, this is overridden to return the forward-slash form of the
   * full UNC path.
   */
  fullpathPosix() {
    if (this.#D !== void 0)
      return this.#D;
    if (this.sep === "/")
      return this.#D = this.fullpath();
    if (!this.parent) {
      let i = this.fullpath().replace(/\\/g, "/");
      return /^[a-z]:\//i.test(i) ? this.#D = `//?/${i}` : this.#D = i;
    }
    let t = this.parent, e = t.fullpathPosix(), s = e + (!e || !t.parent ? "" : "/") + this.name;
    return this.#D = s;
  }
  /**
   * Is the Path of an unknown type?
   *
   * Note that we might know *something* about it if there has been a previous
   * filesystem operation, for example that it does not exist, or is not a
   * link, or whether it has child entries.
   */
  isUnknown() {
    return (this.#r & P) === j;
  }
  isType(t) {
    return this[`is${t}`]();
  }
  getType() {
    return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" :
    this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : (
      /* c8 ignore start */
      this.isSocket() ? "Socket" : "Unknown"
    );
  }
  /**
   * Is the Path a regular file?
   */
  isFile() {
    return (this.#r & P) === us;
  }
  /**
   * Is the Path a directory?
   */
  isDirectory() {
    return (this.#r & P) === H;
  }
  /**
   * Is the path a character device?
   */
  isCharacterDevice() {
    return (this.#r & P) === cs;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (this.#r & P) === fs;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (this.#r & P) === ls;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (this.#r & P) === ds;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (this.#r & et) === et;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return this.#r & ss ? this : void 0;
  }
  /**
   * Return the cached link target if the entry has been the subject of a
   * successful readlink, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readlink() has been called at some point.
   */
  readlinkCached() {
    return this.#F;
  }
  /**
   * Returns the cached realpath target if the entry has been the subject
   * of a successful realpath, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * realpath() has been called at some point.
   */
  realpathCached() {
    return this.#v;
  }
  /**
   * Returns the cached child Path entries array if the entry has been the
   * subject of a successful readdir(), or [] otherwise.
   *
   * Does not read the filesystem, so an empty array *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readdir() has been called recently enough to still be valid.
   */
  readdirCached() {
    let t = this.children();
    return t.slice(0, t.provisional);
  }
  /**
   * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
   * any indication that readlink will definitely fail.
   *
   * Returns false if the path is known to not be a symlink, if a previous
   * readlink failed, or if the entry does not exist.
   */
  canReadlink() {
    if (this.#F)
      return !0;
    if (!this.parent)
      return !1;
    let t = this.#r & P;
    return !(t !== j && t !== et || this.#r & Bt || this.#r & B);
  }
  /**
   * Return true if readdir has previously been successfully called on this
   * path, indicating that cachedReaddir() is likely valid.
   */
  calledReaddir() {
    return !!(this.#r & de);
  }
  /**
   * Returns true if the path is known to not exist. That is, a previous lstat
   * or readdir failed to verify its existence when that would have been
   * expected, or a parent entry was marked either enoent or enotdir.
   */
  isENOENT() {
    return !!(this.#r & B);
  }
  /**
   * Return true if the path is a match for the given path name.  This handles
   * case sensitivity and unicode normalization.
   *
   * Note: even on case-sensitive systems, it is **not** safe to test the
   * equality of the `.name` property to determine whether a given pathname
   * matches, due to unicode normalization mismatches.
   *
   * Always use this method instead of testing the `path.name` property
   * directly.
   */
  isNamed(t) {
    return this.nocase ? this.#b === Ut(t) : this.#b === Tt(t);
  }
  /**
   * Return the Path object corresponding to the target of a symbolic link.
   *
   * If the Path is not a symbolic link, or if the readlink call fails for any
   * reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   */
  async readlink() {
    let t = this.#F;
    if (t)
      return t;
    if (this.canReadlink() && this.parent)
      try {
        let e = await this.#t.promises.readlink(this.fullpath()), s = this.parent.resolve(e);
        if (s)
          return this.#F = s;
      } catch (e) {
        this.#W(e.code);
        return;
      }
  }
  /**
   * Synchronous {@link PathBase.readlink}
   */
  readlinkSync() {
    let t = this.#F;
    if (t)
      return t;
    if (this.canReadlink() && this.parent)
      try {
        let e = this.#t.readlinkSync(this.fullpath()), s = this.parent.resolve(e);
        if (s)
          return this.#F = s;
      } catch (e) {
        this.#W(e.code);
        return;
      }
  }
  #P(t) {
    this.#r |= de;
    for (let e = t.provisional; e < t.length; e++)
      t[e].#T();
  }
  #T() {
    this.#r & B || (this.#r = (this.#r | B) & Et, this.#O());
  }
  #O() {
    let t = this.children();
    t.provisional = 0;
    for (let e of t)
      e.#T();
  }
  #j() {
    this.#r |= $t, this.#M();
  }
  // save the information when we know the entry is not a dir
  #M() {
    if (this.#r & vt)
      return;
    let t = this.#r;
    (t & P) === H && (t &= Et), this.#r = t | vt, this.#O();
  }
  #L(t = "") {
    t === "ENOTDIR" || t === "EPERM" ? this.#M() : t === "ENOENT" ? this.#T() : this.children().provisional = 0;
  }
  #c(t = "") {
    t === "ENOTDIR" ? this.parent.#M() : t === "ENOENT" && this.#T();
  }
  #W(t = "") {
    let e = this.#r;
    e |= Bt, t === "ENOENT" && (e |= B), (t === "EINVAL" || t === "UNKNOWN") && (e &= Et), this.#r = e, t === "ENOTDIR" && this.parent && this.
    parent.#M();
  }
  #N(t, e) {
    return this.#G(t, e) || this.#$(t, e);
  }
  #$(t, e) {
    let s = pe(t), i = this.newChild(t.name, s, { parent: this }), n = i.#r & P;
    return n !== H && n !== et && n !== j && (i.#r |= vt), e.unshift(i), e.provisional++, i;
  }
  #G(t, e) {
    for (let s = e.provisional; s < e.length; s++) {
      let i = e[s];
      if ((this.nocase ? Ut(t.name) : Tt(t.name)) === i.#b)
        return this.#H(t, i, s, e);
    }
  }
  #H(t, e, s, i) {
    let n = e.name;
    return e.#r = e.#r & Et | pe(t), n !== t.name && (e.name = t.name), s !== i.provisional && (s === i.length - 1 ? i.pop() : i.splice(s, 1),
    i.unshift(e)), i.provisional++, e;
  }
  /**
   * Call lstat() on this Path, and update all known information that can be
   * determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat() {
    if (!(this.#r & B))
      try {
        return this.#U(await this.#t.promises.lstat(this.fullpath())), this;
      } catch (t) {
        this.#c(t.code);
      }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if (!(this.#r & B))
      try {
        return this.#U(this.#t.lstatSync(this.fullpath())), this;
      } catch (t) {
        this.#c(t.code);
      }
  }
  #U(t) {
    let { atime: e, atimeMs: s, birthtime: i, birthtimeMs: n, blksize: o, blocks: h, ctime: a, ctimeMs: c, dev: f, gid: u, ino: d, mode: p, mtime: g,
    mtimeMs: m, nlink: y, rdev: w, size: E, uid: S } = t;
    this.#g = e, this.#w = s, this.#E = i, this.#S = n, this.#a = o, this.#m = h, this.#k = a, this.#u = c, this.#s = f, this.#l = u, this.#o =
    d, this.#n = p, this.#A = g, this.#d = m, this.#i = y, this.#f = w, this.#e = E, this.#h = S;
    let b = pe(t);
    this.#r = this.#r & Et | b | ss, b !== j && b !== H && b !== et && (this.#r |= vt);
  }
  #z = [];
  #B = !1;
  #q(t) {
    this.#B = !1;
    let e = this.#z.slice();
    this.#z.length = 0, e.forEach((s) => s(null, t));
  }
  /**
   * Standard node-style callback interface to get list of directory entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   *
   * @param cb The callback called with (er, entries).  Note that the `er`
   * param is somewhat extraneous, as all readdir() errors are handled and
   * simply result in an empty set of entries being returned.
   * @param allowZalgo Boolean indicating that immediately known results should
   * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
   * zalgo at your peril, the dark pony lord is devious and unforgiving.
   */
  readdirCB(t, e = !1) {
    if (!this.canReaddir()) {
      e ? t(null, []) : queueMicrotask(() => t(null, []));
      return;
    }
    let s = this.children();
    if (this.calledReaddir()) {
      let n = s.slice(0, s.provisional);
      e ? t(null, n) : queueMicrotask(() => t(null, n));
      return;
    }
    if (this.#z.push(t), this.#B)
      return;
    this.#B = !0;
    let i = this.fullpath();
    this.#t.readdir(i, { withFileTypes: !0 }, (n, o) => {
      if (n)
        this.#L(n.code), s.provisional = 0;
      else {
        for (let h of o)
          this.#N(h, s);
        this.#P(s);
      }
      this.#q(s.slice(0, s.provisional));
    });
  }
  #I;
  /**
   * Return an array of known child entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async readdir() {
    if (!this.canReaddir())
      return [];
    let t = this.children();
    if (this.calledReaddir())
      return t.slice(0, t.provisional);
    let e = this.fullpath();
    if (this.#I)
      await this.#I;
    else {
      let s = /* @__PURE__ */ l(() => {
      }, "resolve");
      this.#I = new Promise((i) => s = i);
      try {
        for (let i of await this.#t.promises.readdir(e, {
          withFileTypes: !0
        }))
          this.#N(i, t);
        this.#P(t);
      } catch (i) {
        this.#L(i.code), t.provisional = 0;
      }
      this.#I = void 0, s();
    }
    return t.slice(0, t.provisional);
  }
  /**
   * synchronous {@link PathBase.readdir}
   */
  readdirSync() {
    if (!this.canReaddir())
      return [];
    let t = this.children();
    if (this.calledReaddir())
      return t.slice(0, t.provisional);
    let e = this.fullpath();
    try {
      for (let s of this.#t.readdirSync(e, {
        withFileTypes: !0
      }))
        this.#N(s, t);
      this.#P(t);
    } catch (s) {
      this.#L(s.code), t.provisional = 0;
    }
    return t.slice(0, t.provisional);
  }
  canReaddir() {
    if (this.#r & is)
      return !1;
    let t = P & this.#r;
    return t === j || t === H || t === et;
  }
  shouldWalk(t, e) {
    return (this.#r & H) === H && !(this.#r & is) && !t.has(this) && (!e || e(this));
  }
  /**
   * Return the Path object corresponding to path as resolved
   * by realpath(3).
   *
   * If the realpath call fails for any reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   * On success, returns a Path object.
   */
  async realpath() {
    if (this.#v)
      return this.#v;
    if (!(($t | Bt | B) & this.#r))
      try {
        let t = await this.#t.promises.realpath(this.fullpath());
        return this.#v = this.resolve(t);
      } catch {
        this.#j();
      }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (this.#v)
      return this.#v;
    if (!(($t | Bt | B) & this.#r))
      try {
        let t = this.#t.realpathSync(this.fullpath());
        return this.#v = this.resolve(t);
      } catch {
        this.#j();
      }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [ps](t) {
    if (t === this)
      return;
    let e = /* @__PURE__ */ new Set([]), s = [], i = this;
    for (; i && i.parent; )
      e.add(i), i.#C = s.join(this.sep), i.#x = s.join("/"), i = i.parent, s.push("..");
    for (i = t; i && i.parent && !e.has(i); )
      i.#C = void 0, i.#x = void 0, i = i.parent;
  }
}, Ht = class r extends D {
  static {
    l(this, "PathWin32");
  }
  /**
   * Separator for generating path strings.
   */
  sep = "\\";
  /**
   * Separator for parsing path strings.
   */
  splitSep = Mi;
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(t, e = j, s, i, n, o, h) {
    super(t, e, s, i, n, o, h);
  }
  /**
   * @internal
   */
  newChild(t, e = j, s = {}) {
    return new r(t, e, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
  /**
   * @internal
   */
  getRootString(t) {
    return at.win32.parse(t).root;
  }
  /**
   * @internal
   */
  getRoot(t) {
    if (t = Fi(t.toUpperCase()), t === this.root.name)
      return this.root;
    for (let [e, s] of Object.entries(this.roots))
      if (this.sameRoot(t, e))
        return this.roots[t] = s;
    return this.roots[t] = new lt(t, this).root;
  }
  /**
   * @internal
   */
  sameRoot(t, e = this.root.name) {
    return t = t.toUpperCase().replace(/\//g, "\\").replace(as, "$1\\"), t === e;
  }
}, qt = class r extends D {
  static {
    l(this, "PathPosix");
  }
  /**
   * separator for parsing path strings
   */
  splitSep = "/";
  /**
   * separator for generating path strings
   */
  sep = "/";
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(t, e = j, s, i, n, o, h) {
    super(t, e, s, i, n, o, h);
  }
  /**
   * @internal
   */
  getRootString(t) {
    return t.startsWith("/") ? "/" : "";
  }
  /**
   * @internal
   */
  getRoot(t) {
    return this.root;
  }
  /**
   * @internal
   */
  newChild(t, e = j, s = {}) {
    return new r(t, e, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
}, Kt = class {
  static {
    l(this, "PathScurryBase");
  }
  /**
   * The root Path entry for the current working directory of this Scurry
   */
  root;
  /**
   * The string path for the root of this Scurry's current working directory
   */
  rootPath;
  /**
   * A collection of all roots encountered, referenced by rootPath
   */
  roots;
  /**
   * The Path entry corresponding to this PathScurry's current working directory.
   */
  cwd;
  #t;
  #s;
  #n;
  /**
   * Perform path comparisons case-insensitively.
   *
   * Defaults true on Darwin and Windows systems, false elsewhere.
   */
  nocase;
  #i;
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(t = process.cwd(), e, s, { nocase: i, childrenCacheSize: n = 16 * 1024, fs: o = xt } = {}) {
    this.#i = hs(o), (t instanceof URL || t.startsWith("file://")) && (t = (0, os.fileURLToPath)(t));
    let h = e.resolve(t);
    this.roots = /* @__PURE__ */ Object.create(null), this.rootPath = this.parseRootPath(h), this.#t = new Gt(), this.#s = new Gt(), this.#n =
    new me(n);
    let a = h.substring(this.rootPath.length).split(s);
    if (a.length === 1 && !a[0] && a.pop(), i === void 0)
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = i, this.root = this.newRoot(this.#i), this.roots[this.rootPath] = this.root;
    let c = this.root, f = a.length - 1, u = e.sep, d = this.rootPath, p = !1;
    for (let g of a) {
      let m = f--;
      c = c.child(g, {
        relative: new Array(m).fill("..").join(u),
        relativePosix: new Array(m).fill("..").join("/"),
        fullpath: d += (p ? "" : u) + g
      }), p = !0;
    }
    this.cwd = c;
  }
  /**
   * Get the depth of a provided path, string, or the cwd
   */
  depth(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.depth();
  }
  /**
   * Return the cache of child entries.  Exposed so subclasses can create
   * child Path objects in a platform-specific way.
   *
   * @internal
   */
  childrenCache() {
    return this.#n;
  }
  /**
   * Resolve one or more path strings to a resolved string
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolve(...t) {
    let e = "";
    for (let n = t.length - 1; n >= 0; n--) {
      let o = t[n];
      if (!(!o || o === ".") && (e = e ? `${o}/${e}` : o, this.isAbsolute(o)))
        break;
    }
    let s = this.#t.get(e);
    if (s !== void 0)
      return s;
    let i = this.cwd.resolve(e).fullpath();
    return this.#t.set(e, i), i;
  }
  /**
   * Resolve one or more path strings to a resolved string, returning
   * the posix path.  Identical to .resolve() on posix systems, but on
   * windows will return a forward-slash separated UNC path.
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolvePosix(...t) {
    let e = "";
    for (let n = t.length - 1; n >= 0; n--) {
      let o = t[n];
      if (!(!o || o === ".") && (e = e ? `${o}/${e}` : o, this.isAbsolute(o)))
        break;
    }
    let s = this.#s.get(e);
    if (s !== void 0)
      return s;
    let i = this.cwd.resolve(e).fullpathPosix();
    return this.#s.set(e, i), i;
  }
  /**
   * find the relative path from the cwd to the supplied path string or entry
   */
  relative(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.relative();
  }
  /**
   * find the relative path from the cwd to the supplied path string or
   * entry, using / as the path delimiter, even on Windows.
   */
  relativePosix(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.relativePosix();
  }
  /**
   * Return the basename for the provided string or Path object
   */
  basename(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.name;
  }
  /**
   * Return the dirname for the provided string or Path object
   */
  dirname(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), (t.parent || t).fullpath();
  }
  async readdir(t = this.cwd, e = {
    withFileTypes: !0
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s } = e;
    if (t.canReaddir()) {
      let i = await t.readdir();
      return s ? i : i.map((n) => n.name);
    } else
      return [];
  }
  readdirSync(t = this.cwd, e = {
    withFileTypes: !0
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0 } = e;
    return t.canReaddir() ? s ? t.readdirSync() : t.readdirSync().map((i) => i.name) : [];
  }
  /**
   * Call lstat() on the string or Path object, and update all known
   * information that can be determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.lstat();
  }
  /**
   * synchronous {@link PathScurryBase.lstat}
   */
  lstatSync(t = this.cwd) {
    return typeof t == "string" && (t = this.cwd.resolve(t)), t.lstatSync();
  }
  async readlink(t = this.cwd, { withFileTypes: e } = {
    withFileTypes: !1
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t.withFileTypes, t = this.cwd);
    let s = await t.readlink();
    return e ? s : s?.fullpath();
  }
  readlinkSync(t = this.cwd, { withFileTypes: e } = {
    withFileTypes: !1
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t.withFileTypes, t = this.cwd);
    let s = t.readlinkSync();
    return e ? s : s?.fullpath();
  }
  async realpath(t = this.cwd, { withFileTypes: e } = {
    withFileTypes: !1
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t.withFileTypes, t = this.cwd);
    let s = await t.realpath();
    return e ? s : s?.fullpath();
  }
  realpathSync(t = this.cwd, { withFileTypes: e } = {
    withFileTypes: !1
  }) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t.withFileTypes, t = this.cwd);
    let s = t.realpathSync();
    return e ? s : s?.fullpath();
  }
  async walk(t = this.cwd, e = {}) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0, follow: i = !1, filter: n, walkFilter: o } = e, h = [];
    (!n || n(t)) && h.push(s ? t : t.fullpath());
    let a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ l((u, d) => {
      a.add(u), u.readdirCB((p, g) => {
        if (p)
          return d(p);
        let m = g.length;
        if (!m)
          return d();
        let y = /* @__PURE__ */ l(() => {
          --m === 0 && d();
        }, "next");
        for (let w of g)
          (!n || n(w)) && h.push(s ? w : w.fullpath()), i && w.isSymbolicLink() ? w.realpath().then((E) => E?.isUnknown() ? E.lstat() : E).then(
          (E) => E?.shouldWalk(a, o) ? c(E, y) : y()) : w.shouldWalk(a, o) ? c(w, y) : y();
      }, !0);
    }, "walk"), f = t;
    return new Promise((u, d) => {
      c(f, (p) => {
        if (p)
          return d(p);
        u(h);
      });
    });
  }
  walkSync(t = this.cwd, e = {}) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0, follow: i = !1, filter: n, walkFilter: o } = e, h = [];
    (!n || n(t)) && h.push(s ? t : t.fullpath());
    let a = /* @__PURE__ */ new Set([t]);
    for (let c of a) {
      let f = c.readdirSync();
      for (let u of f) {
        (!n || n(u)) && h.push(s ? u : u.fullpath());
        let d = u;
        if (u.isSymbolicLink()) {
          if (!(i && (d = u.realpathSync())))
            continue;
          d.isUnknown() && d.lstatSync();
        }
        d.shouldWalk(a, o) && a.add(d);
      }
    }
    return h;
  }
  /**
   * Support for `for await`
   *
   * Alias for {@link PathScurryBase.iterate}
   *
   * Note: As of Node 19, this is very slow, compared to other methods of
   * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
   * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
   */
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  iterate(t = this.cwd, e = {}) {
    return typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd), this.stream(t, e)[Symbol.asyncIterator]();
  }
  /**
   * Iterating over a PathScurry performs a synchronous walk.
   *
   * Alias for {@link PathScurryBase.iterateSync}
   */
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  *iterateSync(t = this.cwd, e = {}) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0, follow: i = !1, filter: n, walkFilter: o } = e;
    (!n || n(t)) && (yield s ? t : t.fullpath());
    let h = /* @__PURE__ */ new Set([t]);
    for (let a of h) {
      let c = a.readdirSync();
      for (let f of c) {
        (!n || n(f)) && (yield s ? f : f.fullpath());
        let u = f;
        if (f.isSymbolicLink()) {
          if (!(i && (u = f.realpathSync())))
            continue;
          u.isUnknown() && u.lstatSync();
        }
        u.shouldWalk(h, o) && h.add(u);
      }
    }
  }
  stream(t = this.cwd, e = {}) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0, follow: i = !1, filter: n, walkFilter: o } = e, h = new Z({ objectMode: !0 });
    (!n || n(t)) && h.write(s ? t : t.fullpath());
    let a = /* @__PURE__ */ new Set(), c = [t], f = 0, u = /* @__PURE__ */ l(() => {
      let d = !1;
      for (; !d; ) {
        let p = c.shift();
        if (!p) {
          f === 0 && h.end();
          return;
        }
        f++, a.add(p);
        let g = /* @__PURE__ */ l((y, w, E = !1) => {
          if (y)
            return h.emit("error", y);
          if (i && !E) {
            let S = [];
            for (let b of w)
              b.isSymbolicLink() && S.push(b.realpath().then((x) => x?.isUnknown() ? x.lstat() : x));
            if (S.length) {
              Promise.all(S).then(() => g(null, w, !0));
              return;
            }
          }
          for (let S of w)
            S && (!n || n(S)) && (h.write(s ? S : S.fullpath()) || (d = !0));
          f--;
          for (let S of w) {
            let b = S.realpathCached() || S;
            b.shouldWalk(a, o) && c.push(b);
          }
          d && !h.flowing ? h.once("drain", u) : m || u();
        }, "onReaddir"), m = !0;
        p.readdirCB(g, !0), m = !1;
      }
    }, "process");
    return u(), h;
  }
  streamSync(t = this.cwd, e = {}) {
    typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof D || (e = t, t = this.cwd);
    let { withFileTypes: s = !0, follow: i = !1, filter: n, walkFilter: o } = e, h = new Z({ objectMode: !0 }), a = /* @__PURE__ */ new Set();
    (!n || n(t)) && h.write(s ? t : t.fullpath());
    let c = [t], f = 0, u = /* @__PURE__ */ l(() => {
      let d = !1;
      for (; !d; ) {
        let p = c.shift();
        if (!p) {
          f === 0 && h.end();
          return;
        }
        f++, a.add(p);
        let g = p.readdirSync();
        for (let m of g)
          (!n || n(m)) && (h.write(s ? m : m.fullpath()) || (d = !0));
        f--;
        for (let m of g) {
          let y = m;
          if (m.isSymbolicLink()) {
            if (!(i && (y = m.realpathSync())))
              continue;
            y.isUnknown() && y.lstatSync();
          }
          y.shouldWalk(a, o) && c.push(y);
        }
      }
      d && !h.flowing && h.once("drain", u);
    }, "process");
    return u(), h;
  }
  chdir(t = this.cwd) {
    let e = this.cwd;
    this.cwd = typeof t == "string" ? this.cwd.resolve(t) : t, this.cwd[ps](e);
  }
}, lt = class extends Kt {
  static {
    l(this, "PathScurryWin32");
  }
  /**
   * separator for generating path strings
   */
  sep = "\\";
  constructor(t = process.cwd(), e = {}) {
    let { nocase: s = !0 } = e;
    super(t, at.win32, "\\", { ...e, nocase: s }), this.nocase = s;
    for (let i = this.cwd; i; i = i.parent)
      i.nocase = this.nocase;
  }
  /**
   * @internal
   */
  parseRootPath(t) {
    return at.win32.parse(t).root.toUpperCase();
  }
  /**
   * @internal
   */
  newRoot(t) {
    return new Ht(this.rootPath, H, void 0, this.roots, this.nocase, this.childrenCache(), { fs: t });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(t) {
    return t.startsWith("/") || t.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(t);
  }
}, ct = class extends Kt {
  static {
    l(this, "PathScurryPosix");
  }
  /**
   * separator for generating path strings
   */
  sep = "/";
  constructor(t = process.cwd(), e = {}) {
    let { nocase: s = !1 } = e;
    super(t, at.posix, "/", { ...e, nocase: s }), this.nocase = s;
  }
  /**
   * @internal
   */
  parseRootPath(t) {
    return "/";
  }
  /**
   * @internal
   */
  newRoot(t) {
    return new qt(this.rootPath, H, void 0, this.roots, this.nocase, this.childrenCache(), { fs: t });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(t) {
    return t.startsWith("/");
  }
}, At = class extends ct {
  static {
    l(this, "PathScurryDarwin");
  }
  constructor(t = process.cwd(), e = {}) {
    let { nocase: s = !0 } = e;
    super(t, { ...e, nocase: s });
  }
}, _r = process.platform === "win32" ? Ht : qt, ms = process.platform === "win32" ? lt : process.platform === "darwin" ? At : ct;

// ../node_modules/glob/dist/esm/glob.js
var gs = require("url");

// ../node_modules/glob/dist/esm/pattern.js
var Li = /* @__PURE__ */ l((r) => r.length >= 1, "isPatternList"), _i = /* @__PURE__ */ l((r) => r.length >= 1, "isGlobList"), ft = class r {
  static {
    l(this, "Pattern");
  }
  #t;
  #s;
  #n;
  length;
  #i;
  #h;
  #l;
  #f;
  #a;
  #o;
  #e = !0;
  constructor(t, e, s, i) {
    if (!Li(t))
      throw new TypeError("empty pattern list");
    if (!_i(e))
      throw new TypeError("empty glob list");
    if (e.length !== t.length)
      throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = t.length, s < 0 || s >= this.length)
      throw new TypeError("index out of range");
    if (this.#t = t, this.#s = e, this.#n = s, this.#i = i, this.#n === 0) {
      if (this.isUNC()) {
        let [n, o, h, a, ...c] = this.#t, [f, u, d, p, ...g] = this.#s;
        c[0] === "" && (c.shift(), g.shift());
        let m = [n, o, h, a, ""].join("/"), y = [f, u, d, p, ""].join("/");
        this.#t = [m, ...c], this.#s = [y, ...g], this.length = this.#t.length;
      } else if (this.isDrive() || this.isAbsolute()) {
        let [n, ...o] = this.#t, [h, ...a] = this.#s;
        o[0] === "" && (o.shift(), a.shift());
        let c = n + "/", f = h + "/";
        this.#t = [c, ...o], this.#s = [f, ...a], this.length = this.#t.length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return this.#t[this.#n];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof this.#t[this.#n] == "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return this.#t[this.#n] === R;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return this.#t[this.#n] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return this.#l = this.#l || (this.#n === 0 ? this.isAbsolute() ? this.#s[0] + this.#s.slice(1).join("/") : this.#s.join("/") : this.#s.slice(
    this.#n).join("/"));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > this.#n + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    return this.#h !== void 0 ? this.#h : this.hasMore() ? (this.#h = new r(this.#t, this.#s, this.#n + 1, this.#i), this.#h.#o = this.#o, this.#h.#a =
    this.#a, this.#h.#f = this.#f, this.#h) : this.#h = null;
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    let t = this.#t;
    return this.#a !== void 0 ? this.#a : this.#a = this.#i === "win32" && this.#n === 0 && t[0] === "" && t[1] === "" && typeof t[2] == "st\
ring" && !!t[2] && typeof t[3] == "string" && !!t[3];
  }
  // pattern like C:/...
  // split = ['C:', ...]
  // XXX: would be nice to handle patterns like `c:*` to test the cwd
  // in c: for *, but I don't know of a way to even figure out what that
  // cwd is without actually chdir'ing into it?
  /**
   * True if the pattern starts with a drive letter on Windows
   */
  isDrive() {
    let t = this.#t;
    return this.#f !== void 0 ? this.#f : this.#f = this.#i === "win32" && this.#n === 0 && this.length > 1 && typeof t[0] == "string" && /^[a-z]:$/i.
    test(t[0]);
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    let t = this.#t;
    return this.#o !== void 0 ? this.#o : this.#o = t[0] === "" && t.length > 1 || this.isDrive() || this.isUNC();
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    let t = this.#t[0];
    return typeof t == "string" && this.isAbsolute() && this.#n === 0 ? t : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(this.#n === 0 || !this.isGlobstar() || !this.#e);
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    return this.#n === 0 || !this.isGlobstar() || !this.#e ? !1 : (this.#e = !1, !0);
  }
};

// ../node_modules/glob/dist/esm/ignore.js
var Pi = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux", kt = class {
  static {
    l(this, "Ignore");
  }
  relative;
  relativeChildren;
  absolute;
  absoluteChildren;
  constructor(t, { nobrace: e, nocase: s, noext: i, noglobstar: n, platform: o = Pi }) {
    this.relative = [], this.absolute = [], this.relativeChildren = [], this.absoluteChildren = [];
    let h = {
      dot: !0,
      nobrace: e,
      nocase: s,
      noext: i,
      noglobstar: n,
      optimizationLevel: 2,
      platform: o,
      nocomment: !0,
      nonegate: !0
    };
    for (let a of t) {
      let c = new N(a, h);
      for (let f = 0; f < c.set.length; f++) {
        let u = c.set[f], d = c.globParts[f];
        if (!u || !d)
          throw new Error("invalid pattern object");
        let p = new ft(u, d, 0, o), g = new N(p.globString(), h), m = d[d.length - 1] === "**", y = p.isAbsolute();
        y ? this.absolute.push(g) : this.relative.push(g), m && (y ? this.absoluteChildren.push(g) : this.relativeChildren.push(g));
      }
    }
  }
  ignored(t) {
    let e = t.fullpath(), s = `${e}/`, i = t.relative() || ".", n = `${i}/`;
    for (let o of this.relative)
      if (o.match(i) || o.match(n))
        return !0;
    for (let o of this.absolute)
      if (o.match(e) || o.match(s))
        return !0;
    return !1;
  }
  childrenIgnored(t) {
    let e = t.fullpath() + "/", s = (t.relative() || ".") + "/";
    for (let i of this.relativeChildren)
      if (i.match(s))
        return !0;
    for (let i of this.absoluteChildren)
      if (i.match(e))
        return !0;
    return !1;
  }
};

// ../node_modules/glob/dist/esm/processor.js
var ge = class r {
  static {
    l(this, "HasWalkedCache");
  }
  store;
  constructor(t = /* @__PURE__ */ new Map()) {
    this.store = t;
  }
  copy() {
    return new r(new Map(this.store));
  }
  hasWalked(t, e) {
    return this.store.get(t.fullpath())?.has(e.globString());
  }
  storeWalked(t, e) {
    let s = t.fullpath(), i = this.store.get(s);
    i ? i.add(e.globString()) : this.store.set(s, /* @__PURE__ */ new Set([e.globString()]));
  }
}, we = class {
  static {
    l(this, "MatchRecord");
  }
  store = /* @__PURE__ */ new Map();
  add(t, e, s) {
    let i = (e ? 2 : 0) | (s ? 1 : 0), n = this.store.get(t);
    this.store.set(t, n === void 0 ? i : i & n);
  }
  // match, absolute, ifdir
  entries() {
    return [...this.store.entries()].map(([t, e]) => [
      t,
      !!(e & 2),
      !!(e & 1)
    ]);
  }
}, ye = class {
  static {
    l(this, "SubWalks");
  }
  store = /* @__PURE__ */ new Map();
  add(t, e) {
    if (!t.canReaddir())
      return;
    let s = this.store.get(t);
    s ? s.find((i) => i.globString() === e.globString()) || s.push(e) : this.store.set(t, [e]);
  }
  get(t) {
    let e = this.store.get(t);
    if (!e)
      throw new Error("attempting to walk unknown path");
    return e;
  }
  entries() {
    return this.keys().map((t) => [t, this.store.get(t)]);
  }
  keys() {
    return [...this.store.keys()].filter((t) => t.canReaddir());
  }
}, Ct = class r {
  static {
    l(this, "Processor");
  }
  hasWalkedCache;
  matches = new we();
  subwalks = new ye();
  patterns;
  follow;
  dot;
  opts;
  constructor(t, e) {
    this.opts = t, this.follow = !!t.follow, this.dot = !!t.dot, this.hasWalkedCache = e ? e.copy() : new ge();
  }
  processPatterns(t, e) {
    this.patterns = e;
    let s = e.map((i) => [t, i]);
    for (let [i, n] of s) {
      this.hasWalkedCache.storeWalked(i, n);
      let o = n.root(), h = n.isAbsolute() && this.opts.absolute !== !1;
      if (o) {
        i = i.resolve(o === "/" && this.opts.root !== void 0 ? this.opts.root : o);
        let u = n.rest();
        if (u)
          n = u;
        else {
          this.matches.add(i, !0, !1);
          continue;
        }
      }
      if (i.isENOENT())
        continue;
      let a, c, f = !1;
      for (; typeof (a = n.pattern()) == "string" && (c = n.rest()); )
        i = i.resolve(a), n = c, f = !0;
      if (a = n.pattern(), c = n.rest(), f) {
        if (this.hasWalkedCache.hasWalked(i, n))
          continue;
        this.hasWalkedCache.storeWalked(i, n);
      }
      if (typeof a == "string") {
        let u = a === ".." || a === "" || a === ".";
        this.matches.add(i.resolve(a), h, u);
        continue;
      } else if (a === R) {
        (!i.isSymbolicLink() || this.follow || n.checkFollowGlobstar()) && this.subwalks.add(i, n);
        let u = c?.pattern(), d = c?.rest();
        if (!c || (u === "" || u === ".") && !d)
          this.matches.add(i, h, u === "" || u === ".");
        else if (u === "..") {
          let p = i.parent || i;
          d ? this.hasWalkedCache.hasWalked(p, d) || this.subwalks.add(p, d) : this.matches.add(p, h, !0);
        }
      } else a instanceof RegExp && this.subwalks.add(i, n);
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new r(this.opts, this.hasWalkedCache);
  }
  // return a new Processor containing the subwalks for each
  // child entry, and a set of matches, and
  // a hasWalkedCache that's a copy of this one
  // then we're going to call
  filterEntries(t, e) {
    let s = this.subwalks.get(t), i = this.child();
    for (let n of e)
      for (let o of s) {
        let h = o.isAbsolute(), a = o.pattern(), c = o.rest();
        a === R ? i.testGlobstar(n, o, c, h) : a instanceof RegExp ? i.testRegExp(n, a, c, h) : i.testString(n, a, c, h);
      }
    return i;
  }
  testGlobstar(t, e, s, i) {
    if ((this.dot || !t.name.startsWith(".")) && (e.hasMore() || this.matches.add(t, i, !1), t.canReaddir() && (this.follow || !t.isSymbolicLink() ?
    this.subwalks.add(t, e) : t.isSymbolicLink() && (s && e.checkFollowGlobstar() ? this.subwalks.add(t, s) : e.markFollowGlobstar() && this.
    subwalks.add(t, e)))), s) {
      let n = s.pattern();
      if (typeof n == "string" && // dots and empty were handled already
      n !== ".." && n !== "" && n !== ".")
        this.testString(t, n, s.rest(), i);
      else if (n === "..") {
        let o = t.parent || t;
        this.subwalks.add(o, s);
      } else n instanceof RegExp && this.testRegExp(t, n, s.rest(), i);
    }
  }
  testRegExp(t, e, s, i) {
    e.test(t.name) && (s ? this.subwalks.add(t, s) : this.matches.add(t, i, !1));
  }
  testString(t, e, s, i) {
    t.isNamed(e) && (s ? this.subwalks.add(t, s) : this.matches.add(t, i, !1));
  }
};

// ../node_modules/glob/dist/esm/walker.js
var ji = /* @__PURE__ */ l((r, t) => typeof r == "string" ? new kt([r], t) : Array.isArray(r) ? new kt(r, t) : r, "makeIgnore"), Vt = class {
  static {
    l(this, "GlobUtil");
  }
  path;
  patterns;
  opts;
  seen = /* @__PURE__ */ new Set();
  paused = !1;
  aborted = !1;
  #t = [];
  #s;
  #n;
  signal;
  maxDepth;
  constructor(t, e, s) {
    this.patterns = t, this.path = e, this.opts = s, this.#n = !s.posix && s.platform === "win32" ? "\\" : "/", s.ignore && (this.#s = ji(s.
    ignore, s)), this.maxDepth = s.maxDepth || 1 / 0, s.signal && (this.signal = s.signal, this.signal.addEventListener("abort", () => {
      this.#t.length = 0;
    }));
  }
  #i(t) {
    return this.seen.has(t) || !!this.#s?.ignored?.(t);
  }
  #h(t) {
    return !!this.#s?.childrenIgnored?.(t);
  }
  // backpressure mechanism
  pause() {
    this.paused = !0;
  }
  resume() {
    if (this.signal?.aborted)
      return;
    this.paused = !1;
    let t;
    for (; !this.paused && (t = this.#t.shift()); )
      t();
  }
  onResume(t) {
    this.signal?.aborted || (this.paused ? this.#t.push(t) : t());
  }
  // do the requisite realpath/stat checking, and return the path
  // to add or undefined to filter it out.
  async matchCheck(t, e) {
    if (e && this.opts.nodir)
      return;
    let s;
    if (this.opts.realpath) {
      if (s = t.realpathCached() || await t.realpath(), !s)
        return;
      t = s;
    }
    let i = t.isUnknown() || this.opts.stat;
    return this.matchCheckTest(i ? await t.lstat() : t, e);
  }
  matchCheckTest(t, e) {
    return t && (this.maxDepth === 1 / 0 || t.depth() <= this.maxDepth) && (!e || t.canReaddir()) && (!this.opts.nodir || !t.isDirectory()) &&
    !this.#i(t) ? t : void 0;
  }
  matchCheckSync(t, e) {
    if (e && this.opts.nodir)
      return;
    let s;
    if (this.opts.realpath) {
      if (s = t.realpathCached() || t.realpathSync(), !s)
        return;
      t = s;
    }
    let i = t.isUnknown() || this.opts.stat;
    return this.matchCheckTest(i ? t.lstatSync() : t, e);
  }
  matchFinish(t, e) {
    if (this.#i(t))
      return;
    let s = this.opts.absolute === void 0 ? e : this.opts.absolute;
    this.seen.add(t);
    let i = this.opts.mark && t.isDirectory() ? this.#n : "";
    if (this.opts.withFileTypes)
      this.matchEmit(t);
    else if (s) {
      let n = this.opts.posix ? t.fullpathPosix() : t.fullpath();
      this.matchEmit(n + i);
    } else {
      let n = this.opts.posix ? t.relativePosix() : t.relative(), o = this.opts.dotRelative && !n.startsWith(".." + this.#n) ? "." + this.#n :
      "";
      this.matchEmit(n ? o + n + i : "." + i);
    }
  }
  async match(t, e, s) {
    let i = await this.matchCheck(t, s);
    i && this.matchFinish(i, e);
  }
  matchSync(t, e, s) {
    let i = this.matchCheckSync(t, s);
    i && this.matchFinish(i, e);
  }
  walkCB(t, e, s) {
    this.signal?.aborted && s(), this.walkCB2(t, e, new Ct(this.opts), s);
  }
  walkCB2(t, e, s, i) {
    if (this.#h(t))
      return i();
    if (this.signal?.aborted && i(), this.paused) {
      this.onResume(() => this.walkCB2(t, e, s, i));
      return;
    }
    s.processPatterns(t, e);
    let n = 1, o = /* @__PURE__ */ l(() => {
      --n === 0 && i();
    }, "next");
    for (let [h, a, c] of s.matches.entries())
      this.#i(h) || (n++, this.match(h, a, c).then(() => o()));
    for (let h of s.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && h.depth() >= this.maxDepth)
        continue;
      n++;
      let a = h.readdirCached();
      h.calledReaddir() ? this.walkCB3(h, a, s, o) : h.readdirCB((c, f) => this.walkCB3(h, f, s, o), !0);
    }
    o();
  }
  walkCB3(t, e, s, i) {
    s = s.filterEntries(t, e);
    let n = 1, o = /* @__PURE__ */ l(() => {
      --n === 0 && i();
    }, "next");
    for (let [h, a, c] of s.matches.entries())
      this.#i(h) || (n++, this.match(h, a, c).then(() => o()));
    for (let [h, a] of s.subwalks.entries())
      n++, this.walkCB2(h, a, s.child(), o);
    o();
  }
  walkCBSync(t, e, s) {
    this.signal?.aborted && s(), this.walkCB2Sync(t, e, new Ct(this.opts), s);
  }
  walkCB2Sync(t, e, s, i) {
    if (this.#h(t))
      return i();
    if (this.signal?.aborted && i(), this.paused) {
      this.onResume(() => this.walkCB2Sync(t, e, s, i));
      return;
    }
    s.processPatterns(t, e);
    let n = 1, o = /* @__PURE__ */ l(() => {
      --n === 0 && i();
    }, "next");
    for (let [h, a, c] of s.matches.entries())
      this.#i(h) || this.matchSync(h, a, c);
    for (let h of s.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && h.depth() >= this.maxDepth)
        continue;
      n++;
      let a = h.readdirSync();
      this.walkCB3Sync(h, a, s, o);
    }
    o();
  }
  walkCB3Sync(t, e, s, i) {
    s = s.filterEntries(t, e);
    let n = 1, o = /* @__PURE__ */ l(() => {
      --n === 0 && i();
    }, "next");
    for (let [h, a, c] of s.matches.entries())
      this.#i(h) || this.matchSync(h, a, c);
    for (let [h, a] of s.subwalks.entries())
      n++, this.walkCB2Sync(h, a, s.child(), o);
    o();
  }
}, Rt = class extends Vt {
  static {
    l(this, "GlobWalker");
  }
  matches;
  constructor(t, e, s) {
    super(t, e, s), this.matches = /* @__PURE__ */ new Set();
  }
  matchEmit(t) {
    this.matches.add(t);
  }
  async walk() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    return this.path.isUnknown() && await this.path.lstat(), await new Promise((t, e) => {
      this.walkCB(this.path, this.patterns, () => {
        this.signal?.aborted ? e(this.signal.reason) : t(this.matches);
      });
    }), this.matches;
  }
  walkSync() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => {
      if (this.signal?.aborted)
        throw this.signal.reason;
    }), this.matches;
  }
}, Ot = class extends Vt {
  static {
    l(this, "GlobStream");
  }
  results;
  constructor(t, e, s) {
    super(t, e, s), this.results = new Z({
      signal: this.signal,
      objectMode: !0
    }), this.results.on("drain", () => this.resume()), this.results.on("resume", () => this.resume());
  }
  matchEmit(t) {
    this.results.write(t), this.results.flowing || this.pause();
  }
  stream() {
    let t = this.path;
    return t.isUnknown() ? t.lstat().then(() => {
      this.walkCB(t, this.patterns, () => this.results.end());
    }) : this.walkCB(t, this.patterns, () => this.results.end()), this.results;
  }
  streamSync() {
    return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => this.results.end()), this.results;
  }
};

// ../node_modules/glob/dist/esm/glob.js
var Wi = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux", U = class {
  static {
    l(this, "Glob");
  }
  absolute;
  cwd;
  root;
  dot;
  dotRelative;
  follow;
  ignore;
  magicalBraces;
  mark;
  matchBase;
  maxDepth;
  nobrace;
  nocase;
  nodir;
  noext;
  noglobstar;
  pattern;
  platform;
  realpath;
  scurry;
  stat;
  signal;
  windowsPathsNoEscape;
  withFileTypes;
  /**
   * The options provided to the constructor.
   */
  opts;
  /**
   * An array of parsed immutable {@link Pattern} objects.
   */
  patterns;
  /**
   * All options are stored as properties on the `Glob` object.
   *
   * See {@link GlobOptions} for full options descriptions.
   *
   * Note that a previous `Glob` object can be passed as the
   * `GlobOptions` to another `Glob` instantiation to re-use settings
   * and caches with a new pattern.
   *
   * Traversal functions can be called multiple times to run the walk
   * again.
   */
  constructor(t, e) {
    if (!e)
      throw new TypeError("glob options required");
    if (this.withFileTypes = !!e.withFileTypes, this.signal = e.signal, this.follow = !!e.follow, this.dot = !!e.dot, this.dotRelative = !!e.
    dotRelative, this.nodir = !!e.nodir, this.mark = !!e.mark, e.cwd ? (e.cwd instanceof URL || e.cwd.startsWith("file://")) && (e.cwd = (0, gs.fileURLToPath)(
    e.cwd)) : this.cwd = "", this.cwd = e.cwd || "", this.root = e.root, this.magicalBraces = !!e.magicalBraces, this.nobrace = !!e.nobrace,
    this.noext = !!e.noext, this.realpath = !!e.realpath, this.absolute = e.absolute, this.noglobstar = !!e.noglobstar, this.matchBase = !!e.
    matchBase, this.maxDepth = typeof e.maxDepth == "number" ? e.maxDepth : 1 / 0, this.stat = !!e.stat, this.ignore = e.ignore, this.withFileTypes &&
    this.absolute !== void 0)
      throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof t == "string" && (t = [t]), this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || e.allowWindowsEscape === !1, this.windowsPathsNoEscape &&
    (t = t.map((a) => a.replace(/\\/g, "/"))), this.matchBase) {
      if (e.noglobstar)
        throw new TypeError("base matching requires globstar");
      t = t.map((a) => a.includes("/") ? a : `./**/${a}`);
    }
    if (this.pattern = t, this.platform = e.platform || Wi, this.opts = { ...e, platform: this.platform }, e.scurry) {
      if (this.scurry = e.scurry, e.nocase !== void 0 && e.nocase !== e.scurry.nocase)
        throw new Error("nocase option contradicts provided scurry option");
    } else {
      let a = e.platform === "win32" ? lt : e.platform === "darwin" ? At : e.platform ? ct : ms;
      this.scurry = new a(this.cwd, {
        nocase: e.nocase,
        fs: e.fs
      });
    }
    this.nocase = this.scurry.nocase;
    let s = this.platform === "darwin" || this.platform === "win32", i = {
      // default nocase based on platform
      ...e,
      dot: this.dot,
      matchBase: this.matchBase,
      nobrace: this.nobrace,
      nocase: this.nocase,
      nocaseMagicOnly: s,
      nocomment: !0,
      noext: this.noext,
      nonegate: !0,
      optimizationLevel: 2,
      platform: this.platform,
      windowsPathsNoEscape: this.windowsPathsNoEscape,
      debug: !!this.opts.debug
    }, n = this.pattern.map((a) => new N(a, i)), [o, h] = n.reduce((a, c) => (a[0].push(...c.set), a[1].push(...c.globParts), a), [[], []]);
    this.patterns = o.map((a, c) => {
      let f = h[c];
      if (!f)
        throw new Error("invalid pattern object");
      return new ft(a, f, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new Rt(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new Rt(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new Ot(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new Ot(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).streamSync();
  }
  /**
   * Default sync iteration function. Returns a Generator that
   * iterates over the results.
   */
  iterateSync() {
    return this.streamSync()[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  /**
   * Default async iteration function. Returns an AsyncGenerator that
   * iterates over the results.
   */
  iterate() {
    return this.stream()[Symbol.asyncIterator]();
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
};

// ../node_modules/glob/dist/esm/has-magic.js
var be = /* @__PURE__ */ l((r, t = {}) => {
  Array.isArray(r) || (r = [r]);
  for (let e of r)
    if (new N(e, t).hasMagic())
      return !0;
  return !1;
}, "hasMagic");

// ../node_modules/glob/dist/esm/index.js
function Yt(r, t = {}) {
  return new U(r, t).streamSync();
}
l(Yt, "globStreamSync");
function ys(r, t = {}) {
  return new U(r, t).stream();
}
l(ys, "globStream");
function bs(r, t = {}) {
  return new U(r, t).walkSync();
}
l(bs, "globSync");
async function ws(r, t = {}) {
  return new U(r, t).walk();
}
l(ws, "glob_");
function Jt(r, t = {}) {
  return new U(r, t).iterateSync();
}
l(Jt, "globIterateSync");
function Ss(r, t = {}) {
  return new U(r, t).iterate();
}
l(Ss, "globIterate");
var Ii = Yt, zi = Object.assign(ys, { sync: Yt }), Bi = Jt, Ui = Object.assign(Ss, {
  sync: Jt
}), $i = Object.assign(bs, {
  stream: Yt,
  iterate: Jt
}), Xt = Object.assign(ws, {
  glob: ws,
  globSync: bs,
  sync: $i,
  globStream: ys,
  stream: zi,
  globStreamSync: Yt,
  streamSync: Ii,
  globIterate: Ss,
  iterate: Ui,
  globIterateSync: Jt,
  iterateSync: Bi,
  Glob: U,
  hasMagic: be,
  escape: it,
  unescape: I
});
Xt.glob = Xt;

// src/core-server/utils/remove-mdx-entries.ts
async function Es(r, t) {
  let e = (0, Zt.normalizeStories)(r, {
    configDir: t.configDir,
    workingDir: t.configDir,
    defaultFilesPattern: "**/*.@(stories.@(js|jsx|mjs|ts|tsx))"
  });
  return (await Promise.all(
    e.map(async ({ directory: i, files: n, titlePrefix: o }) => {
      let h = (0, X.join)(i, n), a = (0, X.isAbsolute)(h) ? h : (0, X.join)(t.configDir, h), c = (0, X.isAbsolute)(i) ? i : (0, X.join)(t.configDir,
      i);
      return {
        files: (await Xt(te(a), {
          ...(0, Zt.commonGlobOptions)(a),
          follow: !0
        })).map((f) => (0, X.relative)(c, f)),
        directory: i,
        titlePrefix: o
      };
    })
  )).flatMap(({ directory: i, files: n, titlePrefix: o }, h) => {
    let a = n.filter((f) => !f.endsWith(".mdx")), c = [];
    return a.length < n.length ? c = a.map((f) => ({
      directory: i,
      titlePrefix: o,
      files: `**/${f}`
    })) : c = [
      { directory: e[h].directory, titlePrefix: e[h].titlePrefix, files: e[h].files }
    ], c;
  });
}
l(Es, "removeMDXEntries");

// src/core-server/presets/common-override-preset.ts
var Gi = /* @__PURE__ */ l(async (r) => {
  let t = typeof r == "string" ? r : r?.name, e = typeof r == "string" ? {} : r?.options || {};
  return {
    name: t,
    options: e
  };
}, "framework"), Hi = /* @__PURE__ */ l(async (r, t) => t?.build?.test?.disableMDXEntries ? Es(r, t) : r, "stories"), qi = /* @__PURE__ */ l(
async (r, t) => t?.build?.test?.disableDocgen ? { ...r ?? {}, reactDocgen: !1, check: !1 } : r, "typescript"), Ki = /* @__PURE__ */ l(async (r, t) => t?.
build?.test?.disableAutoDocs ? {} : r, "docs"), xs = /* @__PURE__ */ l((r) => ({
  disableBlocks: r,
  disabledAddons: r ? ["@storybook/addon-docs", "@storybook/addon-essentials/docs", "@storybook/addon-coverage"] : [],
  disableMDXEntries: r,
  disableAutoDocs: r,
  disableDocgen: r,
  disableSourcemaps: r,
  disableTreeShaking: r,
  esbuildMinify: r
}), "createTestBuildFeatures"), Vi = /* @__PURE__ */ l(async (r, t) => ({
  ...r,
  test: t.test ? {
    ...xs(!!t.test),
    ...r?.test
  } : xs(!1)
}), "build");
