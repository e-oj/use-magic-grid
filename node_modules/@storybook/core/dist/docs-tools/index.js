var zs = Object.create;
var yt = Object.defineProperty;
var Ws = Object.getOwnPropertyDescriptor;
var Xs = Object.getOwnPropertyNames;
var Qs = Object.getPrototypeOf, Zs = Object.prototype.hasOwnProperty;
var r = (e, n) => yt(e, "name", { value: n, configurable: !0 });
var l = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var ep = (e, n, a, s) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let p of Xs(n))
      !Zs.call(e, p) && p !== a && yt(e, p, { get: () => n[p], enumerable: !(s = Ws(n, p)) || s.enumerable });
  return e;
};
var pr = (e, n, a) => (a = e != null ? zs(Qs(e)) : {}, ep(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  n || !e || !e.__esModule ? yt(a, "default", { value: e, enumerable: !0 }) : a,
  e
));

// ../node_modules/lodash/_freeGlobal.js
var dt = l((xT, ur) => {
  var cp = typeof global == "object" && global && global.Object === Object && global;
  ur.exports = cp;
});

// ../node_modules/lodash/_root.js
var L = l((bT, lr) => {
  var up = dt(), lp = typeof self == "object" && self && self.Object === Object && self, fp = up || lp || Function("return this")();
  lr.exports = fp;
});

// ../node_modules/lodash/_Symbol.js
var he = l((vT, fr) => {
  var yp = L(), dp = yp.Symbol;
  fr.exports = dp;
});

// ../node_modules/lodash/_getRawTag.js
var Tr = l((wT, mr) => {
  var yr = he(), dr = Object.prototype, mp = dr.hasOwnProperty, Tp = dr.toString, xe = yr ? yr.toStringTag : void 0;
  function gp(e) {
    var n = mp.call(e, xe), a = e[xe];
    try {
      e[xe] = void 0;
      var s = !0;
    } catch {
    }
    var p = Tp.call(e);
    return s && (n ? e[xe] = a : delete e[xe]), p;
  }
  r(gp, "getRawTag");
  mr.exports = gp;
});

// ../node_modules/lodash/_objectToString.js
var hr = l((JT, gr) => {
  var hp = Object.prototype, xp = hp.toString;
  function bp(e) {
    return xp.call(e);
  }
  r(bp, "objectToString");
  gr.exports = bp;
});

// ../node_modules/lodash/_baseGetTag.js
var ne = l((ET, vr) => {
  var xr = he(), vp = Tr(), wp = hr(), Pp = "[object Null]", Jp = "[object Undefined]", br = xr ? xr.toStringTag : void 0;
  function Sp(e) {
    return e == null ? e === void 0 ? Jp : Pp : br && br in Object(e) ? vp(e) : wp(e);
  }
  r(Sp, "baseGetTag");
  vr.exports = Sp;
});

// ../node_modules/lodash/isObject.js
var Ce = l((AT, wr) => {
  function Ep(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  r(Ep, "isObject");
  wr.exports = Ep;
});

// ../node_modules/lodash/isFunction.js
var mt = l((_T, Pr) => {
  var Op = ne(), Ap = Ce(), Np = "[object AsyncFunction]", _p = "[object Function]", Dp = "[object GeneratorFunction]", qp = "[object Proxy]";
  function Ip(e) {
    if (!Ap(e))
      return !1;
    var n = Op(e);
    return n == _p || n == Dp || n == Np || n == qp;
  }
  r(Ip, "isFunction");
  Pr.exports = Ip;
});

// ../node_modules/lodash/_coreJsData.js
var Sr = l((qT, Jr) => {
  var Rp = L(), jp = Rp["__core-js_shared__"];
  Jr.exports = jp;
});

// ../node_modules/lodash/_isMasked.js
var Ar = l((IT, Or) => {
  var Tt = Sr(), Er = function() {
    var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Fp(e) {
    return !!Er && Er in e;
  }
  r(Fp, "isMasked");
  Or.exports = Fp;
});

// ../node_modules/lodash/_toSource.js
var gt = l((jT, Nr) => {
  var Lp = Function.prototype, kp = Lp.toString;
  function Cp(e) {
    if (e != null) {
      try {
        return kp.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  r(Cp, "toSource");
  Nr.exports = Cp;
});

// ../node_modules/lodash/_baseIsNative.js
var Dr = l((LT, _r) => {
  var Up = mt(), Mp = Ar(), Vp = Ce(), Kp = gt(), Bp = /[\\^$.*+?()[\]{}|]/g, $p = /^\[object .+?Constructor\]$/, Gp = Function.prototype, Yp = Object.
  prototype, Hp = Gp.toString, zp = Yp.hasOwnProperty, Wp = RegExp(
    "^" + Hp.call(zp).replace(Bp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function Xp(e) {
    if (!Vp(e) || Mp(e))
      return !1;
    var n = Up(e) ? Wp : $p;
    return n.test(Kp(e));
  }
  r(Xp, "baseIsNative");
  _r.exports = Xp;
});

// ../node_modules/lodash/_getValue.js
var Ir = l((CT, qr) => {
  function Qp(e, n) {
    return e?.[n];
  }
  r(Qp, "getValue");
  qr.exports = Qp;
});

// ../node_modules/lodash/_getNative.js
var H = l((MT, Rr) => {
  var Zp = Dr(), ec = Ir();
  function tc(e, n) {
    var a = ec(e, n);
    return Zp(a) ? a : void 0;
  }
  r(tc, "getNative");
  Rr.exports = tc;
});

// ../node_modules/lodash/_defineProperty.js
var Fr = l((KT, jr) => {
  var rc = H(), nc = function() {
    try {
      var e = rc(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  jr.exports = nc;
});

// ../node_modules/lodash/_baseAssignValue.js
var Cr = l((BT, kr) => {
  var Lr = Fr();
  function oc(e, n, a) {
    n == "__proto__" && Lr ? Lr(e, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : e[n] = a;
  }
  r(oc, "baseAssignValue");
  kr.exports = oc;
});

// ../node_modules/lodash/_createBaseFor.js
var Mr = l((GT, Ur) => {
  function ac(e) {
    return function(n, a, s) {
      for (var p = -1, c = Object(n), y = s(n), d = y.length; d--; ) {
        var m = y[e ? d : ++p];
        if (a(c[m], m, c) === !1)
          break;
      }
      return n;
    };
  }
  r(ac, "createBaseFor");
  Ur.exports = ac;
});

// ../node_modules/lodash/_baseFor.js
var Kr = l((HT, Vr) => {
  var ic = Mr(), sc = ic();
  Vr.exports = sc;
});

// ../node_modules/lodash/_baseTimes.js
var $r = l((zT, Br) => {
  function pc(e, n) {
    for (var a = -1, s = Array(e); ++a < e; )
      s[a] = n(a);
    return s;
  }
  r(pc, "baseTimes");
  Br.exports = pc;
});

// ../node_modules/lodash/isObjectLike.js
var oe = l((XT, Gr) => {
  function cc(e) {
    return e != null && typeof e == "object";
  }
  r(cc, "isObjectLike");
  Gr.exports = cc;
});

// ../node_modules/lodash/_baseIsArguments.js
var Hr = l((ZT, Yr) => {
  var uc = ne(), lc = oe(), fc = "[object Arguments]";
  function yc(e) {
    return lc(e) && uc(e) == fc;
  }
  r(yc, "baseIsArguments");
  Yr.exports = yc;
});

// ../node_modules/lodash/isArguments.js
var ht = l((tg, Xr) => {
  var zr = Hr(), dc = oe(), Wr = Object.prototype, mc = Wr.hasOwnProperty, Tc = Wr.propertyIsEnumerable, gc = zr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? zr : function(e) {
    return dc(e) && mc.call(e, "callee") && !Tc.call(e, "callee");
  };
  Xr.exports = gc;
});

// ../node_modules/lodash/isArray.js
var M = l((rg, Qr) => {
  var hc = Array.isArray;
  Qr.exports = hc;
});

// ../node_modules/lodash/stubFalse.js
var en = l((ng, Zr) => {
  function xc() {
    return !1;
  }
  r(xc, "stubFalse");
  Zr.exports = xc;
});

// ../node_modules/lodash/isBuffer.js
var xt = l((be, ae) => {
  var bc = L(), vc = en(), nn = typeof be == "object" && be && !be.nodeType && be, tn = nn && typeof ae == "object" && ae && !ae.nodeType &&
  ae, wc = tn && tn.exports === nn, rn = wc ? bc.Buffer : void 0, Pc = rn ? rn.isBuffer : void 0, Jc = Pc || vc;
  ae.exports = Jc;
});

// ../node_modules/lodash/_isIndex.js
var bt = l((ag, on) => {
  var Sc = 9007199254740991, Ec = /^(?:0|[1-9]\d*)$/;
  function Oc(e, n) {
    var a = typeof e;
    return n = n ?? Sc, !!n && (a == "number" || a != "symbol" && Ec.test(e)) && e > -1 && e % 1 == 0 && e < n;
  }
  r(Oc, "isIndex");
  on.exports = Oc;
});

// ../node_modules/lodash/isLength.js
var Ue = l((sg, an) => {
  var Ac = 9007199254740991;
  function Nc(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ac;
  }
  r(Nc, "isLength");
  an.exports = Nc;
});

// ../node_modules/lodash/_baseIsTypedArray.js
var pn = l((cg, sn) => {
  var _c = ne(), Dc = Ue(), qc = oe(), Ic = "[object Arguments]", Rc = "[object Array]", jc = "[object Boolean]", Fc = "[object Date]", Lc = "\
[object Error]", kc = "[object Function]", Cc = "[object Map]", Uc = "[object Number]", Mc = "[object Object]", Vc = "[object RegExp]", Kc = "\
[object Set]", Bc = "[object String]", $c = "[object WeakMap]", Gc = "[object ArrayBuffer]", Yc = "[object DataView]", Hc = "[object Float32\
Array]", zc = "[object Float64Array]", Wc = "[object Int8Array]", Xc = "[object Int16Array]", Qc = "[object Int32Array]", Zc = "[object Uint\
8Array]", eu = "[object Uint8ClampedArray]", tu = "[object Uint16Array]", ru = "[object Uint32Array]", E = {};
  E[Hc] = E[zc] = E[Wc] = E[Xc] = E[Qc] = E[Zc] = E[eu] = E[tu] = E[ru] = !0;
  E[Ic] = E[Rc] = E[Gc] = E[jc] = E[Yc] = E[Fc] = E[Lc] = E[kc] = E[Cc] = E[Uc] = E[Mc] = E[Vc] = E[Kc] = E[Bc] = E[$c] = !1;
  function nu(e) {
    return qc(e) && Dc(e.length) && !!E[_c(e)];
  }
  r(nu, "baseIsTypedArray");
  sn.exports = nu;
});

// ../node_modules/lodash/_baseUnary.js
var un = l((lg, cn) => {
  function ou(e) {
    return function(n) {
      return e(n);
    };
  }
  r(ou, "baseUnary");
  cn.exports = ou;
});

// ../node_modules/lodash/_nodeUtil.js
var fn = l((ve, ie) => {
  var au = dt(), ln = typeof ve == "object" && ve && !ve.nodeType && ve, we = ln && typeof ie == "object" && ie && !ie.nodeType && ie, iu = we &&
  we.exports === ln, vt = iu && au.process, su = function() {
    try {
      var e = we && we.require && we.require("util").types;
      return e || vt && vt.binding && vt.binding("util");
    } catch {
    }
  }();
  ie.exports = su;
});

// ../node_modules/lodash/isTypedArray.js
var wt = l((yg, mn) => {
  var pu = pn(), cu = un(), yn = fn(), dn = yn && yn.isTypedArray, uu = dn ? cu(dn) : pu;
  mn.exports = uu;
});

// ../node_modules/lodash/_arrayLikeKeys.js
var gn = l((dg, Tn) => {
  var lu = $r(), fu = ht(), yu = M(), du = xt(), mu = bt(), Tu = wt(), gu = Object.prototype, hu = gu.hasOwnProperty;
  function xu(e, n) {
    var a = yu(e), s = !a && fu(e), p = !a && !s && du(e), c = !a && !s && !p && Tu(e), y = a || s || p || c, d = y ? lu(e.length, String) :
    [], m = d.length;
    for (var g in e)
      (n || hu.call(e, g)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      c && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
      mu(g, m))) && d.push(g);
    return d;
  }
  r(xu, "arrayLikeKeys");
  Tn.exports = xu;
});

// ../node_modules/lodash/_isPrototype.js
var xn = l((Tg, hn) => {
  var bu = Object.prototype;
  function vu(e) {
    var n = e && e.constructor, a = typeof n == "function" && n.prototype || bu;
    return e === a;
  }
  r(vu, "isPrototype");
  hn.exports = vu;
});

// ../node_modules/lodash/_overArg.js
var vn = l((hg, bn) => {
  function wu(e, n) {
    return function(a) {
      return e(n(a));
    };
  }
  r(wu, "overArg");
  bn.exports = wu;
});

// ../node_modules/lodash/_nativeKeys.js
var Pn = l((bg, wn) => {
  var Pu = vn(), Ju = Pu(Object.keys, Object);
  wn.exports = Ju;
});

// ../node_modules/lodash/_baseKeys.js
var Sn = l((vg, Jn) => {
  var Su = xn(), Eu = Pn(), Ou = Object.prototype, Au = Ou.hasOwnProperty;
  function Nu(e) {
    if (!Su(e))
      return Eu(e);
    var n = [];
    for (var a in Object(e))
      Au.call(e, a) && a != "constructor" && n.push(a);
    return n;
  }
  r(Nu, "baseKeys");
  Jn.exports = Nu;
});

// ../node_modules/lodash/isArrayLike.js
var On = l((Pg, En) => {
  var _u = mt(), Du = Ue();
  function qu(e) {
    return e != null && Du(e.length) && !_u(e);
  }
  r(qu, "isArrayLike");
  En.exports = qu;
});

// ../node_modules/lodash/keys.js
var Me = l((Sg, An) => {
  var Iu = gn(), Ru = Sn(), ju = On();
  function Fu(e) {
    return ju(e) ? Iu(e) : Ru(e);
  }
  r(Fu, "keys");
  An.exports = Fu;
});

// ../node_modules/lodash/_baseForOwn.js
var _n = l((Og, Nn) => {
  var Lu = Kr(), ku = Me();
  function Cu(e, n) {
    return e && Lu(e, n, ku);
  }
  r(Cu, "baseForOwn");
  Nn.exports = Cu;
});

// ../node_modules/lodash/_listCacheClear.js
var qn = l((Ng, Dn) => {
  function Uu() {
    this.__data__ = [], this.size = 0;
  }
  r(Uu, "listCacheClear");
  Dn.exports = Uu;
});

// ../node_modules/lodash/eq.js
var Pt = l((Dg, In) => {
  function Mu(e, n) {
    return e === n || e !== e && n !== n;
  }
  r(Mu, "eq");
  In.exports = Mu;
});

// ../node_modules/lodash/_assocIndexOf.js
var Pe = l((Ig, Rn) => {
  var Vu = Pt();
  function Ku(e, n) {
    for (var a = e.length; a--; )
      if (Vu(e[a][0], n))
        return a;
    return -1;
  }
  r(Ku, "assocIndexOf");
  Rn.exports = Ku;
});

// ../node_modules/lodash/_listCacheDelete.js
var Fn = l((jg, jn) => {
  var Bu = Pe(), $u = Array.prototype, Gu = $u.splice;
  function Yu(e) {
    var n = this.__data__, a = Bu(n, e);
    if (a < 0)
      return !1;
    var s = n.length - 1;
    return a == s ? n.pop() : Gu.call(n, a, 1), --this.size, !0;
  }
  r(Yu, "listCacheDelete");
  jn.exports = Yu;
});

// ../node_modules/lodash/_listCacheGet.js
var kn = l((Lg, Ln) => {
  var Hu = Pe();
  function zu(e) {
    var n = this.__data__, a = Hu(n, e);
    return a < 0 ? void 0 : n[a][1];
  }
  r(zu, "listCacheGet");
  Ln.exports = zu;
});

// ../node_modules/lodash/_listCacheHas.js
var Un = l((Cg, Cn) => {
  var Wu = Pe();
  function Xu(e) {
    return Wu(this.__data__, e) > -1;
  }
  r(Xu, "listCacheHas");
  Cn.exports = Xu;
});

// ../node_modules/lodash/_listCacheSet.js
var Vn = l((Mg, Mn) => {
  var Qu = Pe();
  function Zu(e, n) {
    var a = this.__data__, s = Qu(a, e);
    return s < 0 ? (++this.size, a.push([e, n])) : a[s][1] = n, this;
  }
  r(Zu, "listCacheSet");
  Mn.exports = Zu;
});

// ../node_modules/lodash/_ListCache.js
var Je = l((Kg, Kn) => {
  var el = qn(), tl = Fn(), rl = kn(), nl = Un(), ol = Vn();
  function se(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(se, "ListCache");
  se.prototype.clear = el;
  se.prototype.delete = tl;
  se.prototype.get = rl;
  se.prototype.has = nl;
  se.prototype.set = ol;
  Kn.exports = se;
});

// ../node_modules/lodash/_stackClear.js
var $n = l(($g, Bn) => {
  var al = Je();
  function il() {
    this.__data__ = new al(), this.size = 0;
  }
  r(il, "stackClear");
  Bn.exports = il;
});

// ../node_modules/lodash/_stackDelete.js
var Yn = l((Yg, Gn) => {
  function sl(e) {
    var n = this.__data__, a = n.delete(e);
    return this.size = n.size, a;
  }
  r(sl, "stackDelete");
  Gn.exports = sl;
});

// ../node_modules/lodash/_stackGet.js
var zn = l((zg, Hn) => {
  function pl(e) {
    return this.__data__.get(e);
  }
  r(pl, "stackGet");
  Hn.exports = pl;
});

// ../node_modules/lodash/_stackHas.js
var Xn = l((Xg, Wn) => {
  function cl(e) {
    return this.__data__.has(e);
  }
  r(cl, "stackHas");
  Wn.exports = cl;
});

// ../node_modules/lodash/_Map.js
var Ve = l((Zg, Qn) => {
  var ul = H(), ll = L(), fl = ul(ll, "Map");
  Qn.exports = fl;
});

// ../node_modules/lodash/_nativeCreate.js
var Se = l((eh, Zn) => {
  var yl = H(), dl = yl(Object, "create");
  Zn.exports = dl;
});

// ../node_modules/lodash/_hashClear.js
var ro = l((th, to) => {
  var eo = Se();
  function ml() {
    this.__data__ = eo ? eo(null) : {}, this.size = 0;
  }
  r(ml, "hashClear");
  to.exports = ml;
});

// ../node_modules/lodash/_hashDelete.js
var oo = l((nh, no) => {
  function Tl(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  r(Tl, "hashDelete");
  no.exports = Tl;
});

// ../node_modules/lodash/_hashGet.js
var io = l((ah, ao) => {
  var gl = Se(), hl = "__lodash_hash_undefined__", xl = Object.prototype, bl = xl.hasOwnProperty;
  function vl(e) {
    var n = this.__data__;
    if (gl) {
      var a = n[e];
      return a === hl ? void 0 : a;
    }
    return bl.call(n, e) ? n[e] : void 0;
  }
  r(vl, "hashGet");
  ao.exports = vl;
});

// ../node_modules/lodash/_hashHas.js
var po = l((sh, so) => {
  var wl = Se(), Pl = Object.prototype, Jl = Pl.hasOwnProperty;
  function Sl(e) {
    var n = this.__data__;
    return wl ? n[e] !== void 0 : Jl.call(n, e);
  }
  r(Sl, "hashHas");
  so.exports = Sl;
});

// ../node_modules/lodash/_hashSet.js
var uo = l((ch, co) => {
  var El = Se(), Ol = "__lodash_hash_undefined__";
  function Al(e, n) {
    var a = this.__data__;
    return this.size += this.has(e) ? 0 : 1, a[e] = El && n === void 0 ? Ol : n, this;
  }
  r(Al, "hashSet");
  co.exports = Al;
});

// ../node_modules/lodash/_Hash.js
var fo = l((lh, lo) => {
  var Nl = ro(), _l = oo(), Dl = io(), ql = po(), Il = uo();
  function pe(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(pe, "Hash");
  pe.prototype.clear = Nl;
  pe.prototype.delete = _l;
  pe.prototype.get = Dl;
  pe.prototype.has = ql;
  pe.prototype.set = Il;
  lo.exports = pe;
});

// ../node_modules/lodash/_mapCacheClear.js
var To = l((yh, mo) => {
  var yo = fo(), Rl = Je(), jl = Ve();
  function Fl() {
    this.size = 0, this.__data__ = {
      hash: new yo(),
      map: new (jl || Rl)(),
      string: new yo()
    };
  }
  r(Fl, "mapCacheClear");
  mo.exports = Fl;
});

// ../node_modules/lodash/_isKeyable.js
var ho = l((mh, go) => {
  function Ll(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  r(Ll, "isKeyable");
  go.exports = Ll;
});

// ../node_modules/lodash/_getMapData.js
var Ee = l((gh, xo) => {
  var kl = ho();
  function Cl(e, n) {
    var a = e.__data__;
    return kl(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  r(Cl, "getMapData");
  xo.exports = Cl;
});

// ../node_modules/lodash/_mapCacheDelete.js
var vo = l((xh, bo) => {
  var Ul = Ee();
  function Ml(e) {
    var n = Ul(this, e).delete(e);
    return this.size -= n ? 1 : 0, n;
  }
  r(Ml, "mapCacheDelete");
  bo.exports = Ml;
});

// ../node_modules/lodash/_mapCacheGet.js
var Po = l((vh, wo) => {
  var Vl = Ee();
  function Kl(e) {
    return Vl(this, e).get(e);
  }
  r(Kl, "mapCacheGet");
  wo.exports = Kl;
});

// ../node_modules/lodash/_mapCacheHas.js
var So = l((Ph, Jo) => {
  var Bl = Ee();
  function $l(e) {
    return Bl(this, e).has(e);
  }
  r($l, "mapCacheHas");
  Jo.exports = $l;
});

// ../node_modules/lodash/_mapCacheSet.js
var Oo = l((Sh, Eo) => {
  var Gl = Ee();
  function Yl(e, n) {
    var a = Gl(this, e), s = a.size;
    return a.set(e, n), this.size += a.size == s ? 0 : 1, this;
  }
  r(Yl, "mapCacheSet");
  Eo.exports = Yl;
});

// ../node_modules/lodash/_MapCache.js
var Ke = l((Oh, Ao) => {
  var Hl = To(), zl = vo(), Wl = Po(), Xl = So(), Ql = Oo();
  function ce(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(ce, "MapCache");
  ce.prototype.clear = Hl;
  ce.prototype.delete = zl;
  ce.prototype.get = Wl;
  ce.prototype.has = Xl;
  ce.prototype.set = Ql;
  Ao.exports = ce;
});

// ../node_modules/lodash/_stackSet.js
var _o = l((Nh, No) => {
  var Zl = Je(), ef = Ve(), tf = Ke(), rf = 200;
  function nf(e, n) {
    var a = this.__data__;
    if (a instanceof Zl) {
      var s = a.__data__;
      if (!ef || s.length < rf - 1)
        return s.push([e, n]), this.size = ++a.size, this;
      a = this.__data__ = new tf(s);
    }
    return a.set(e, n), this.size = a.size, this;
  }
  r(nf, "stackSet");
  No.exports = nf;
});

// ../node_modules/lodash/_Stack.js
var Jt = l((Dh, Do) => {
  var of = Je(), af = $n(), sf = Yn(), pf = zn(), cf = Xn(), uf = _o();
  function ue(e) {
    var n = this.__data__ = new of(e);
    this.size = n.size;
  }
  r(ue, "Stack");
  ue.prototype.clear = af;
  ue.prototype.delete = sf;
  ue.prototype.get = pf;
  ue.prototype.has = cf;
  ue.prototype.set = uf;
  Do.exports = ue;
});

// ../node_modules/lodash/_setCacheAdd.js
var Io = l((Ih, qo) => {
  var lf = "__lodash_hash_undefined__";
  function ff(e) {
    return this.__data__.set(e, lf), this;
  }
  r(ff, "setCacheAdd");
  qo.exports = ff;
});

// ../node_modules/lodash/_setCacheHas.js
var jo = l((jh, Ro) => {
  function yf(e) {
    return this.__data__.has(e);
  }
  r(yf, "setCacheHas");
  Ro.exports = yf;
});

// ../node_modules/lodash/_SetCache.js
var Lo = l((Lh, Fo) => {
  var df = Ke(), mf = Io(), Tf = jo();
  function Be(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.__data__ = new df(); ++n < a; )
      this.add(e[n]);
  }
  r(Be, "SetCache");
  Be.prototype.add = Be.prototype.push = mf;
  Be.prototype.has = Tf;
  Fo.exports = Be;
});

// ../node_modules/lodash/_arraySome.js
var Co = l((Ch, ko) => {
  function gf(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length; ++a < s; )
      if (n(e[a], a, e))
        return !0;
    return !1;
  }
  r(gf, "arraySome");
  ko.exports = gf;
});

// ../node_modules/lodash/_cacheHas.js
var Mo = l((Mh, Uo) => {
  function hf(e, n) {
    return e.has(n);
  }
  r(hf, "cacheHas");
  Uo.exports = hf;
});

// ../node_modules/lodash/_equalArrays.js
var St = l((Kh, Vo) => {
  var xf = Lo(), bf = Co(), vf = Mo(), wf = 1, Pf = 2;
  function Jf(e, n, a, s, p, c) {
    var y = a & wf, d = e.length, m = n.length;
    if (d != m && !(y && m > d))
      return !1;
    var g = c.get(e), b = c.get(n);
    if (g && b)
      return g == n && b == e;
    var A = -1, J = !0, v = a & Pf ? new xf() : void 0;
    for (c.set(e, n), c.set(n, e); ++A < d; ) {
      var N = e[A], q = n[A];
      if (s)
        var R = y ? s(q, N, A, n, e, c) : s(N, q, A, e, n, c);
      if (R !== void 0) {
        if (R)
          continue;
        J = !1;
        break;
      }
      if (v) {
        if (!bf(n, function(k, C) {
          if (!vf(v, C) && (N === k || p(N, k, a, s, c)))
            return v.push(C);
        })) {
          J = !1;
          break;
        }
      } else if (!(N === q || p(N, q, a, s, c))) {
        J = !1;
        break;
      }
    }
    return c.delete(e), c.delete(n), J;
  }
  r(Jf, "equalArrays");
  Vo.exports = Jf;
});

// ../node_modules/lodash/_Uint8Array.js
var Bo = l(($h, Ko) => {
  var Sf = L(), Ef = Sf.Uint8Array;
  Ko.exports = Ef;
});

// ../node_modules/lodash/_mapToArray.js
var Go = l((Gh, $o) => {
  function Of(e) {
    var n = -1, a = Array(e.size);
    return e.forEach(function(s, p) {
      a[++n] = [p, s];
    }), a;
  }
  r(Of, "mapToArray");
  $o.exports = Of;
});

// ../node_modules/lodash/_setToArray.js
var Ho = l((Hh, Yo) => {
  function Af(e) {
    var n = -1, a = Array(e.size);
    return e.forEach(function(s) {
      a[++n] = s;
    }), a;
  }
  r(Af, "setToArray");
  Yo.exports = Af;
});

// ../node_modules/lodash/_equalByTag.js
var Zo = l((Wh, Qo) => {
  var zo = he(), Wo = Bo(), Nf = Pt(), _f = St(), Df = Go(), qf = Ho(), If = 1, Rf = 2, jf = "[object Boolean]", Ff = "[object Date]", Lf = "\
[object Error]", kf = "[object Map]", Cf = "[object Number]", Uf = "[object RegExp]", Mf = "[object Set]", Vf = "[object String]", Kf = "[ob\
ject Symbol]", Bf = "[object ArrayBuffer]", $f = "[object DataView]", Xo = zo ? zo.prototype : void 0, Et = Xo ? Xo.valueOf : void 0;
  function Gf(e, n, a, s, p, c, y) {
    switch (a) {
      case $f:
        if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
          return !1;
        e = e.buffer, n = n.buffer;
      case Bf:
        return !(e.byteLength != n.byteLength || !c(new Wo(e), new Wo(n)));
      case jf:
      case Ff:
      case Cf:
        return Nf(+e, +n);
      case Lf:
        return e.name == n.name && e.message == n.message;
      case Uf:
      case Vf:
        return e == n + "";
      case kf:
        var d = Df;
      case Mf:
        var m = s & If;
        if (d || (d = qf), e.size != n.size && !m)
          return !1;
        var g = y.get(e);
        if (g)
          return g == n;
        s |= Rf, y.set(e, n);
        var b = _f(d(e), d(n), s, p, c, y);
        return y.delete(e), b;
      case Kf:
        if (Et)
          return Et.call(e) == Et.call(n);
    }
    return !1;
  }
  r(Gf, "equalByTag");
  Qo.exports = Gf;
});

// ../node_modules/lodash/_arrayPush.js
var ta = l((Qh, ea) => {
  function Yf(e, n) {
    for (var a = -1, s = n.length, p = e.length; ++a < s; )
      e[p + a] = n[a];
    return e;
  }
  r(Yf, "arrayPush");
  ea.exports = Yf;
});

// ../node_modules/lodash/_baseGetAllKeys.js
var na = l((ex, ra) => {
  var Hf = ta(), zf = M();
  function Wf(e, n, a) {
    var s = n(e);
    return zf(e) ? s : Hf(s, a(e));
  }
  r(Wf, "baseGetAllKeys");
  ra.exports = Wf;
});

// ../node_modules/lodash/_arrayFilter.js
var aa = l((rx, oa) => {
  function Xf(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, p = 0, c = []; ++a < s; ) {
      var y = e[a];
      n(y, a, e) && (c[p++] = y);
    }
    return c;
  }
  r(Xf, "arrayFilter");
  oa.exports = Xf;
});

// ../node_modules/lodash/stubArray.js
var sa = l((ox, ia) => {
  function Qf() {
    return [];
  }
  r(Qf, "stubArray");
  ia.exports = Qf;
});

// ../node_modules/lodash/_getSymbols.js
var ua = l((ix, ca) => {
  var Zf = aa(), ey = sa(), ty = Object.prototype, ry = ty.propertyIsEnumerable, pa = Object.getOwnPropertySymbols, ny = pa ? function(e) {
    return e == null ? [] : (e = Object(e), Zf(pa(e), function(n) {
      return ry.call(e, n);
    }));
  } : ey;
  ca.exports = ny;
});

// ../node_modules/lodash/_getAllKeys.js
var fa = l((sx, la) => {
  var oy = na(), ay = ua(), iy = Me();
  function sy(e) {
    return oy(e, iy, ay);
  }
  r(sy, "getAllKeys");
  la.exports = sy;
});

// ../node_modules/lodash/_equalObjects.js
var ma = l((cx, da) => {
  var ya = fa(), py = 1, cy = Object.prototype, uy = cy.hasOwnProperty;
  function ly(e, n, a, s, p, c) {
    var y = a & py, d = ya(e), m = d.length, g = ya(n), b = g.length;
    if (m != b && !y)
      return !1;
    for (var A = m; A--; ) {
      var J = d[A];
      if (!(y ? J in n : uy.call(n, J)))
        return !1;
    }
    var v = c.get(e), N = c.get(n);
    if (v && N)
      return v == n && N == e;
    var q = !0;
    c.set(e, n), c.set(n, e);
    for (var R = y; ++A < m; ) {
      J = d[A];
      var k = e[J], C = n[J];
      if (s)
        var Q = y ? s(C, k, J, n, e, c) : s(k, C, J, e, n, c);
      if (!(Q === void 0 ? k === C || p(k, C, a, s, c) : Q)) {
        q = !1;
        break;
      }
      R || (R = J == "constructor");
    }
    if (q && !R) {
      var w = e.constructor, K = n.constructor;
      w != K && "constructor" in e && "constructor" in n && !(typeof w == "function" && w instanceof w && typeof K == "function" && K instanceof
      K) && (q = !1);
    }
    return c.delete(e), c.delete(n), q;
  }
  r(ly, "equalObjects");
  da.exports = ly;
});

// ../node_modules/lodash/_DataView.js
var ga = l((lx, Ta) => {
  var fy = H(), yy = L(), dy = fy(yy, "DataView");
  Ta.exports = dy;
});

// ../node_modules/lodash/_Promise.js
var xa = l((fx, ha) => {
  var my = H(), Ty = L(), gy = my(Ty, "Promise");
  ha.exports = gy;
});

// ../node_modules/lodash/_Set.js
var va = l((yx, ba) => {
  var hy = H(), xy = L(), by = hy(xy, "Set");
  ba.exports = by;
});

// ../node_modules/lodash/_WeakMap.js
var Pa = l((dx, wa) => {
  var vy = H(), wy = L(), Py = vy(wy, "WeakMap");
  wa.exports = Py;
});

// ../node_modules/lodash/_getTag.js
var Da = l((mx, _a) => {
  var Ot = ga(), At = Ve(), Nt = xa(), _t = va(), Dt = Pa(), Na = ne(), le = gt(), Ja = "[object Map]", Jy = "[object Object]", Sa = "[objec\
t Promise]", Ea = "[object Set]", Oa = "[object WeakMap]", Aa = "[object DataView]", Sy = le(Ot), Ey = le(At), Oy = le(Nt), Ay = le(_t), Ny = le(
  Dt), X = Na;
  (Ot && X(new Ot(new ArrayBuffer(1))) != Aa || At && X(new At()) != Ja || Nt && X(Nt.resolve()) != Sa || _t && X(new _t()) != Ea || Dt && X(
  new Dt()) != Oa) && (X = /* @__PURE__ */ r(function(e) {
    var n = Na(e), a = n == Jy ? e.constructor : void 0, s = a ? le(a) : "";
    if (s)
      switch (s) {
        case Sy:
          return Aa;
        case Ey:
          return Ja;
        case Oy:
          return Sa;
        case Ay:
          return Ea;
        case Ny:
          return Oa;
      }
    return n;
  }, "getTag"));
  _a.exports = X;
});

// ../node_modules/lodash/_baseIsEqualDeep.js
var Ca = l((gx, ka) => {
  var qt = Jt(), _y = St(), Dy = Zo(), qy = ma(), qa = Da(), Ia = M(), Ra = xt(), Iy = wt(), Ry = 1, ja = "[object Arguments]", Fa = "[objec\
t Array]", $e = "[object Object]", jy = Object.prototype, La = jy.hasOwnProperty;
  function Fy(e, n, a, s, p, c) {
    var y = Ia(e), d = Ia(n), m = y ? Fa : qa(e), g = d ? Fa : qa(n);
    m = m == ja ? $e : m, g = g == ja ? $e : g;
    var b = m == $e, A = g == $e, J = m == g;
    if (J && Ra(e)) {
      if (!Ra(n))
        return !1;
      y = !0, b = !1;
    }
    if (J && !b)
      return c || (c = new qt()), y || Iy(e) ? _y(e, n, a, s, p, c) : Dy(e, n, m, a, s, p, c);
    if (!(a & Ry)) {
      var v = b && La.call(e, "__wrapped__"), N = A && La.call(n, "__wrapped__");
      if (v || N) {
        var q = v ? e.value() : e, R = N ? n.value() : n;
        return c || (c = new qt()), p(q, R, a, s, c);
      }
    }
    return J ? (c || (c = new qt()), qy(e, n, a, s, p, c)) : !1;
  }
  r(Fy, "baseIsEqualDeep");
  ka.exports = Fy;
});

// ../node_modules/lodash/_baseIsEqual.js
var It = l((xx, Va) => {
  var Ly = Ca(), Ua = oe();
  function Ma(e, n, a, s, p) {
    return e === n ? !0 : e == null || n == null || !Ua(e) && !Ua(n) ? e !== e && n !== n : Ly(e, n, a, s, Ma, p);
  }
  r(Ma, "baseIsEqual");
  Va.exports = Ma;
});

// ../node_modules/lodash/_baseIsMatch.js
var Ba = l((vx, Ka) => {
  var ky = Jt(), Cy = It(), Uy = 1, My = 2;
  function Vy(e, n, a, s) {
    var p = a.length, c = p, y = !s;
    if (e == null)
      return !c;
    for (e = Object(e); p--; ) {
      var d = a[p];
      if (y && d[2] ? d[1] !== e[d[0]] : !(d[0] in e))
        return !1;
    }
    for (; ++p < c; ) {
      d = a[p];
      var m = d[0], g = e[m], b = d[1];
      if (y && d[2]) {
        if (g === void 0 && !(m in e))
          return !1;
      } else {
        var A = new ky();
        if (s)
          var J = s(g, b, m, e, n, A);
        if (!(J === void 0 ? Cy(b, g, Uy | My, s, A) : J))
          return !1;
      }
    }
    return !0;
  }
  r(Vy, "baseIsMatch");
  Ka.exports = Vy;
});

// ../node_modules/lodash/_isStrictComparable.js
var Rt = l((Px, $a) => {
  var Ky = Ce();
  function By(e) {
    return e === e && !Ky(e);
  }
  r(By, "isStrictComparable");
  $a.exports = By;
});

// ../node_modules/lodash/_getMatchData.js
var Ya = l((Sx, Ga) => {
  var $y = Rt(), Gy = Me();
  function Yy(e) {
    for (var n = Gy(e), a = n.length; a--; ) {
      var s = n[a], p = e[s];
      n[a] = [s, p, $y(p)];
    }
    return n;
  }
  r(Yy, "getMatchData");
  Ga.exports = Yy;
});

// ../node_modules/lodash/_matchesStrictComparable.js
var jt = l((Ox, Ha) => {
  function Hy(e, n) {
    return function(a) {
      return a == null ? !1 : a[e] === n && (n !== void 0 || e in Object(a));
    };
  }
  r(Hy, "matchesStrictComparable");
  Ha.exports = Hy;
});

// ../node_modules/lodash/_baseMatches.js
var Wa = l((Nx, za) => {
  var zy = Ba(), Wy = Ya(), Xy = jt();
  function Qy(e) {
    var n = Wy(e);
    return n.length == 1 && n[0][2] ? Xy(n[0][0], n[0][1]) : function(a) {
      return a === e || zy(a, e, n);
    };
  }
  r(Qy, "baseMatches");
  za.exports = Qy;
});

// ../node_modules/lodash/isSymbol.js
var Ge = l((Dx, Xa) => {
  var Zy = ne(), ed = oe(), td = "[object Symbol]";
  function rd(e) {
    return typeof e == "symbol" || ed(e) && Zy(e) == td;
  }
  r(rd, "isSymbol");
  Xa.exports = rd;
});

// ../node_modules/lodash/_isKey.js
var Ye = l((Ix, Qa) => {
  var nd = M(), od = Ge(), ad = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, id = /^\w*$/;
  function sd(e, n) {
    if (nd(e))
      return !1;
    var a = typeof e;
    return a == "number" || a == "symbol" || a == "boolean" || e == null || od(e) ? !0 : id.test(e) || !ad.test(e) || n != null && e in Object(
    n);
  }
  r(sd, "isKey");
  Qa.exports = sd;
});

// ../node_modules/lodash/memoize.js
var ti = l((jx, ei) => {
  var Za = Ke(), pd = "Expected a function";
  function Ft(e, n) {
    if (typeof e != "function" || n != null && typeof n != "function")
      throw new TypeError(pd);
    var a = /* @__PURE__ */ r(function() {
      var s = arguments, p = n ? n.apply(this, s) : s[0], c = a.cache;
      if (c.has(p))
        return c.get(p);
      var y = e.apply(this, s);
      return a.cache = c.set(p, y) || c, y;
    }, "memoized");
    return a.cache = new (Ft.Cache || Za)(), a;
  }
  r(Ft, "memoize");
  Ft.Cache = Za;
  ei.exports = Ft;
});

// ../node_modules/lodash/_memoizeCapped.js
var ni = l((Lx, ri) => {
  var cd = ti(), ud = 500;
  function ld(e) {
    var n = cd(e, function(s) {
      return a.size === ud && a.clear(), s;
    }), a = n.cache;
    return n;
  }
  r(ld, "memoizeCapped");
  ri.exports = ld;
});

// ../node_modules/lodash/_stringToPath.js
var ai = l((Cx, oi) => {
  var fd = ni(), yd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dd = /\\(\\)?/g, md = fd(
  function(e) {
    var n = [];
    return e.charCodeAt(0) === 46 && n.push(""), e.replace(yd, function(a, s, p, c) {
      n.push(p ? c.replace(dd, "$1") : s || a);
    }), n;
  });
  oi.exports = md;
});

// ../node_modules/lodash/_arrayMap.js
var si = l((Ux, ii) => {
  function Td(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, p = Array(s); ++a < s; )
      p[a] = n(e[a], a, e);
    return p;
  }
  r(Td, "arrayMap");
  ii.exports = Td;
});

// ../node_modules/lodash/_baseToString.js
var yi = l((Vx, fi) => {
  var pi = he(), gd = si(), hd = M(), xd = Ge(), bd = 1 / 0, ci = pi ? pi.prototype : void 0, ui = ci ? ci.toString : void 0;
  function li(e) {
    if (typeof e == "string")
      return e;
    if (hd(e))
      return gd(e, li) + "";
    if (xd(e))
      return ui ? ui.call(e) : "";
    var n = e + "";
    return n == "0" && 1 / e == -bd ? "-0" : n;
  }
  r(li, "baseToString");
  fi.exports = li;
});

// ../node_modules/lodash/toString.js
var mi = l((Bx, di) => {
  var vd = yi();
  function wd(e) {
    return e == null ? "" : vd(e);
  }
  r(wd, "toString");
  di.exports = wd;
});

// ../node_modules/lodash/_castPath.js
var Lt = l((Gx, Ti) => {
  var Pd = M(), Jd = Ye(), Sd = ai(), Ed = mi();
  function Od(e, n) {
    return Pd(e) ? e : Jd(e, n) ? [e] : Sd(Ed(e));
  }
  r(Od, "castPath");
  Ti.exports = Od;
});

// ../node_modules/lodash/_toKey.js
var Oe = l((Hx, gi) => {
  var Ad = Ge(), Nd = 1 / 0;
  function _d(e) {
    if (typeof e == "string" || Ad(e))
      return e;
    var n = e + "";
    return n == "0" && 1 / e == -Nd ? "-0" : n;
  }
  r(_d, "toKey");
  gi.exports = _d;
});

// ../node_modules/lodash/_baseGet.js
var kt = l((Wx, hi) => {
  var Dd = Lt(), qd = Oe();
  function Id(e, n) {
    n = Dd(n, e);
    for (var a = 0, s = n.length; e != null && a < s; )
      e = e[qd(n[a++])];
    return a && a == s ? e : void 0;
  }
  r(Id, "baseGet");
  hi.exports = Id;
});

// ../node_modules/lodash/get.js
var bi = l((Qx, xi) => {
  var Rd = kt();
  function jd(e, n, a) {
    var s = e == null ? void 0 : Rd(e, n);
    return s === void 0 ? a : s;
  }
  r(jd, "get");
  xi.exports = jd;
});

// ../node_modules/lodash/_baseHasIn.js
var wi = l((eb, vi) => {
  function Fd(e, n) {
    return e != null && n in Object(e);
  }
  r(Fd, "baseHasIn");
  vi.exports = Fd;
});

// ../node_modules/lodash/_hasPath.js
var Ji = l((rb, Pi) => {
  var Ld = Lt(), kd = ht(), Cd = M(), Ud = bt(), Md = Ue(), Vd = Oe();
  function Kd(e, n, a) {
    n = Ld(n, e);
    for (var s = -1, p = n.length, c = !1; ++s < p; ) {
      var y = Vd(n[s]);
      if (!(c = e != null && a(e, y)))
        break;
      e = e[y];
    }
    return c || ++s != p ? c : (p = e == null ? 0 : e.length, !!p && Md(p) && Ud(y, p) && (Cd(e) || kd(e)));
  }
  r(Kd, "hasPath");
  Pi.exports = Kd;
});

// ../node_modules/lodash/hasIn.js
var Ei = l((ob, Si) => {
  var Bd = wi(), $d = Ji();
  function Gd(e, n) {
    return e != null && $d(e, n, Bd);
  }
  r(Gd, "hasIn");
  Si.exports = Gd;
});

// ../node_modules/lodash/_baseMatchesProperty.js
var Ai = l((ib, Oi) => {
  var Yd = It(), Hd = bi(), zd = Ei(), Wd = Ye(), Xd = Rt(), Qd = jt(), Zd = Oe(), em = 1, tm = 2;
  function rm(e, n) {
    return Wd(e) && Xd(n) ? Qd(Zd(e), n) : function(a) {
      var s = Hd(a, e);
      return s === void 0 && s === n ? zd(a, e) : Yd(n, s, em | tm);
    };
  }
  r(rm, "baseMatchesProperty");
  Oi.exports = rm;
});

// ../node_modules/lodash/identity.js
var _i = l((pb, Ni) => {
  function nm(e) {
    return e;
  }
  r(nm, "identity");
  Ni.exports = nm;
});

// ../node_modules/lodash/_baseProperty.js
var qi = l((ub, Di) => {
  function om(e) {
    return function(n) {
      return n?.[e];
    };
  }
  r(om, "baseProperty");
  Di.exports = om;
});

// ../node_modules/lodash/_basePropertyDeep.js
var Ri = l((fb, Ii) => {
  var am = kt();
  function im(e) {
    return function(n) {
      return am(n, e);
    };
  }
  r(im, "basePropertyDeep");
  Ii.exports = im;
});

// ../node_modules/lodash/property.js
var Fi = l((db, ji) => {
  var sm = qi(), pm = Ri(), cm = Ye(), um = Oe();
  function lm(e) {
    return cm(e) ? sm(um(e)) : pm(e);
  }
  r(lm, "property");
  ji.exports = lm;
});

// ../node_modules/lodash/_baseIteratee.js
var ki = l((Tb, Li) => {
  var fm = Wa(), ym = Ai(), dm = _i(), mm = M(), Tm = Fi();
  function gm(e) {
    return typeof e == "function" ? e : e == null ? dm : typeof e == "object" ? mm(e) ? ym(e[0], e[1]) : fm(e) : Tm(e);
  }
  r(gm, "baseIteratee");
  Li.exports = gm;
});

// ../node_modules/lodash/mapValues.js
var Ui = l((hb, Ci) => {
  var hm = Cr(), xm = _n(), bm = ki();
  function vm(e, n) {
    var a = {};
    return n = bm(n, 3), xm(e, function(s, p, c) {
      hm(a, p, n(s, p, c));
    }), a;
  }
  r(vm, "mapValues");
  Ci.exports = vm;
});

// ../node_modules/jsdoc-type-pratt-parser/dist/index.js
var Qi = l((Ze, Xi) => {
  (function(e, n) {
    typeof Ze == "object" && typeof Xi < "u" ? n(Ze) : typeof define == "function" && define.amd ? define(["exports"], n) : (e = typeof globalThis <
    "u" ? globalThis : e || self, n(e.jtpp = {}));
  })(Ze, function(e) {
    "use strict";
    function n(t) {
      return t.text !== void 0 && t.text !== "" ? `'${t.type}' with value '${t.text}'` : `'${t.type}'`;
    }
    r(n, "tokenToString");
    let Re = class Re extends Error {
      constructor(o) {
        super(`No parslet found for token: ${n(o)}`), this.token = o, Object.setPrototypeOf(this, Re.prototype);
      }
      getToken() {
        return this.token;
      }
    };
    r(Re, "NoParsletFoundError");
    let a = Re, je = class je extends Error {
      constructor(o) {
        super(`The parsing ended early. The next token was: ${n(o)}`), this.token = o, Object.setPrototypeOf(this, je.prototype);
      }
      getToken() {
        return this.token;
      }
    };
    r(je, "EarlyEndOfParseError");
    let s = je, Fe = class Fe extends Error {
      constructor(o, i) {
        let u = `Unexpected type: '${o.type}'.`;
        i !== void 0 && (u += ` Message: ${i}`), super(u), Object.setPrototypeOf(this, Fe.prototype);
      }
    };
    r(Fe, "UnexpectedTypeError");
    let p = Fe;
    function c(t) {
      return (o) => o.startsWith(t) ? { type: t, text: t } : null;
    }
    r(c, "makePunctuationRule");
    function y(t) {
      let o = 0, i, u = t[0], f = !1;
      if (u !== "'" && u !== '"')
        return null;
      for (; o < t.length; ) {
        if (o++, i = t[o], !f && i === u) {
          o++;
          break;
        }
        f = !f && i === "\\";
      }
      if (i !== u)
        throw new Error("Unterminated String");
      return t.slice(0, o);
    }
    r(y, "getQuoted");
    let d = new RegExp("[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}", "u"), m = new RegExp(
    "[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}", "u");
    function g(t) {
      let o = t[0];
      if (!d.test(o))
        return null;
      let i = 1;
      do {
        if (o = t[i], !m.test(o))
          break;
        i++;
      } while (i < t.length);
      return t.slice(0, i);
    }
    r(g, "getIdentifier");
    let b = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function A(t) {
      var o, i;
      return (i = (o = b.exec(t)) === null || o === void 0 ? void 0 : o[0]) !== null && i !== void 0 ? i : null;
    }
    r(A, "getNumber");
    let J = /* @__PURE__ */ r((t) => {
      let o = g(t);
      return o == null ? null : {
        type: "Identifier",
        text: o
      };
    }, "identifierRule");
    function v(t) {
      return (o) => {
        if (!o.startsWith(t))
          return null;
        let i = o[t.length];
        return i !== void 0 && m.test(i) ? null : {
          type: t,
          text: t
        };
      };
    }
    r(v, "makeKeyWordRule");
    let N = /* @__PURE__ */ r((t) => {
      let o = y(t);
      return o == null ? null : {
        type: "StringValue",
        text: o
      };
    }, "stringValueRule"), q = /* @__PURE__ */ r((t) => t.length > 0 ? null : {
      type: "EOF",
      text: ""
    }, "eofRule"), R = /* @__PURE__ */ r((t) => {
      let o = A(t);
      return o === null ? null : {
        type: "Number",
        text: o
      };
    }, "numberRule"), k = [
      q,
      c("=>"),
      c("("),
      c(")"),
      c("{"),
      c("}"),
      c("["),
      c("]"),
      c("|"),
      c("&"),
      c("<"),
      c(">"),
      c(","),
      c(";"),
      c("*"),
      c("?"),
      c("!"),
      c("="),
      c(":"),
      c("..."),
      c("."),
      c("#"),
      c("~"),
      c("/"),
      c("@"),
      v("undefined"),
      v("null"),
      v("function"),
      v("this"),
      v("new"),
      v("module"),
      v("event"),
      v("external"),
      v("typeof"),
      v("keyof"),
      v("readonly"),
      v("import"),
      v("is"),
      v("in"),
      R,
      J,
      N
    ], C = /^\s*\n\s*/, ee = class ee {
      static create(o) {
        let i = this.read(o);
        o = i.text;
        let u = this.read(o);
        return o = u.text, new ee(o, void 0, i.token, u.token);
      }
      constructor(o, i, u, f) {
        this.text = "", this.text = o, this.previous = i, this.current = u, this.next = f;
      }
      static read(o, i = !1) {
        i = i || C.test(o), o = o.trim();
        for (let u of k) {
          let f = u(o);
          if (f !== null) {
            let T = Object.assign(Object.assign({}, f), { startOfLine: i });
            return o = o.slice(T.text.length), { text: o, token: T };
          }
        }
        throw new Error("Unexpected Token " + o);
      }
      advance() {
        let o = ee.read(this.text);
        return new ee(o.text, this.current, this.next, o.token);
      }
    };
    r(ee, "Lexer");
    let Q = ee;
    function w(t) {
      if (t === void 0)
        throw new Error("Unexpected undefined");
      if (t.type === "JsdocTypeKeyValue" || t.type === "JsdocTypeParameterList" || t.type === "JsdocTypeProperty" || t.type === "JsdocTypeRe\
adonlyProperty" || t.type === "JsdocTypeObjectField" || t.type === "JsdocTypeJsdocObjectField" || t.type === "JsdocTypeIndexSignature" || t.
      type === "JsdocTypeMappedType")
        throw new p(t);
      return t;
    }
    r(w, "assertRootResult");
    function K(t) {
      return t.type === "JsdocTypeKeyValue" ? Ae(t) : w(t);
    }
    r(K, "assertPlainKeyValueOrRootResult");
    function Ts(t) {
      return t.type === "JsdocTypeName" ? t : Ae(t);
    }
    r(Ts, "assertPlainKeyValueOrNameResult");
    function Ae(t) {
      if (t.type !== "JsdocTypeKeyValue")
        throw new p(t);
      return t;
    }
    r(Ae, "assertPlainKeyValueResult");
    function gs(t) {
      var o;
      if (t.type === "JsdocTypeVariadic") {
        if (((o = t.element) === null || o === void 0 ? void 0 : o.type) === "JsdocTypeName")
          return t;
        throw new p(t);
      }
      if (t.type !== "JsdocTypeNumber" && t.type !== "JsdocTypeName")
        throw new p(t);
      return t;
    }
    r(gs, "assertNumberOrVariadicNameResult");
    function tt(t) {
      return t.type === "JsdocTypeIndexSignature" || t.type === "JsdocTypeMappedType";
    }
    r(tt, "isSquaredProperty");
    var h;
    (function(t) {
      t[t.ALL = 0] = "ALL", t[t.PARAMETER_LIST = 1] = "PARAMETER_LIST", t[t.OBJECT = 2] = "OBJECT", t[t.KEY_VALUE = 3] = "KEY_VALUE", t[t.UNION =
      4] = "UNION", t[t.INTERSECTION = 5] = "INTERSECTION", t[t.PREFIX = 6] = "PREFIX", t[t.INFIX = 7] = "INFIX", t[t.TUPLE = 8] = "TUPLE", t[t.
      SYMBOL = 9] = "SYMBOL", t[t.OPTIONAL = 10] = "OPTIONAL", t[t.NULLABLE = 11] = "NULLABLE", t[t.KEY_OF_TYPE_OF = 12] = "KEY_OF_TYPE_OF",
      t[t.FUNCTION = 13] = "FUNCTION", t[t.ARROW = 14] = "ARROW", t[t.ARRAY_BRACKETS = 15] = "ARRAY_BRACKETS", t[t.GENERIC = 16] = "GENERIC",
      t[t.NAME_PATH = 17] = "NAME_PATH", t[t.PARENTHESIS = 18] = "PARENTHESIS", t[t.SPECIAL_TYPES = 19] = "SPECIAL_TYPES";
    })(h || (h = {}));
    let ft = class ft {
      constructor(o, i, u) {
        this.grammar = o, typeof i == "string" ? this._lexer = Q.create(i) : this._lexer = i, this.baseParser = u;
      }
      get lexer() {
        return this._lexer;
      }
      /**
       * Parses a given string and throws an error if the parse ended before the end of the string.
       */
      parse() {
        let o = this.parseType(h.ALL);
        if (this.lexer.current.type !== "EOF")
          throw new s(this.lexer.current);
        return o;
      }
      /**
       * Parses with the current lexer and asserts that the result is a {@link RootResult}.
       */
      parseType(o) {
        return w(this.parseIntermediateType(o));
      }
      /**
       * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
       * to parse the state in the infix step.
       */
      parseIntermediateType(o) {
        let i = this.tryParslets(null, o);
        if (i === null)
          throw new a(this.lexer.current);
        return this.parseInfixIntermediateType(i, o);
      }
      /**
       * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
       * a result.
       */
      parseInfixIntermediateType(o, i) {
        let u = this.tryParslets(o, i);
        for (; u !== null; )
          o = u, u = this.tryParslets(o, i);
        return o;
      }
      /**
       * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
       */
      tryParslets(o, i) {
        for (let u of this.grammar) {
          let f = u(this, i, o);
          if (f !== null)
            return f;
        }
        return null;
      }
      /**
       * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
       * advanced.
       */
      consume(o) {
        return Array.isArray(o) || (o = [o]), o.includes(this.lexer.current.type) ? (this._lexer = this.lexer.advance(), !0) : !1;
      }
      acceptLexerState(o) {
        this._lexer = o.lexer;
      }
    };
    r(ft, "Parser");
    let B = ft;
    function Wt(t) {
      return t === "EOF" || t === "|" || t === "," || t === ")" || t === ">";
    }
    r(Wt, "isQuestionMarkUnknownType");
    let rt = /* @__PURE__ */ r((t, o, i) => {
      let u = t.lexer.current.type, f = t.lexer.next.type;
      return i == null && u === "?" && !Wt(f) || i != null && u === "?" ? (t.consume("?"), i == null ? {
        type: "JsdocTypeNullable",
        element: t.parseType(h.NULLABLE),
        meta: {
          position: "prefix"
        }
      } : {
        type: "JsdocTypeNullable",
        element: w(i),
        meta: {
          position: "suffix"
        }
      }) : null;
    }, "nullableParslet");
    function P(t) {
      let o = /* @__PURE__ */ r((i, u, f) => {
        let T = i.lexer.current.type, x = i.lexer.next.type;
        if (f === null) {
          if ("parsePrefix" in t && t.accept(T, x))
            return t.parsePrefix(i);
        } else if ("parseInfix" in t && t.precedence > u && t.accept(T, x))
          return t.parseInfix(i, f);
        return null;
      }, "parslet");
      return Object.defineProperty(o, "name", {
        value: t.name
      }), o;
    }
    r(P, "composeParslet");
    let Ne = P({
      name: "optionalParslet",
      accept: /* @__PURE__ */ r((t) => t === "=", "accept"),
      precedence: h.OPTIONAL,
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("="), {
        type: "JsdocTypeOptional",
        element: t.parseType(h.OPTIONAL),
        meta: {
          position: "prefix"
        }
      }), "parsePrefix"),
      parseInfix: /* @__PURE__ */ r((t, o) => (t.consume("="), {
        type: "JsdocTypeOptional",
        element: w(o),
        meta: {
          position: "suffix"
        }
      }), "parseInfix")
    }), _e = P({
      name: "numberParslet",
      accept: /* @__PURE__ */ r((t) => t === "Number", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        let o = parseFloat(t.lexer.current.text);
        return t.consume("Number"), {
          type: "JsdocTypeNumber",
          value: o
        };
      }, "parsePrefix")
    }), hs = P({
      name: "parenthesisParslet",
      accept: /* @__PURE__ */ r((t) => t === "(", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        if (t.consume("("), t.consume(")"))
          return {
            type: "JsdocTypeParameterList",
            elements: []
          };
        let o = t.parseIntermediateType(h.ALL);
        if (!t.consume(")"))
          throw new Error("Unterminated parenthesis");
        return o.type === "JsdocTypeParameterList" ? o : o.type === "JsdocTypeKeyValue" ? {
          type: "JsdocTypeParameterList",
          elements: [o]
        } : {
          type: "JsdocTypeParenthesis",
          element: w(o)
        };
      }, "parsePrefix")
    }), xs = P({
      name: "specialTypesParslet",
      accept: /* @__PURE__ */ r((t, o) => t === "?" && Wt(o) || t === "null" || t === "undefined" || t === "*", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        if (t.consume("null"))
          return {
            type: "JsdocTypeNull"
          };
        if (t.consume("undefined"))
          return {
            type: "JsdocTypeUndefined"
          };
        if (t.consume("*"))
          return {
            type: "JsdocTypeAny"
          };
        if (t.consume("?"))
          return {
            type: "JsdocTypeUnknown"
          };
        throw new Error("Unacceptable token: " + t.lexer.current.text);
      }, "parsePrefix")
    }), bs = P({
      name: "notNullableParslet",
      accept: /* @__PURE__ */ r((t) => t === "!", "accept"),
      precedence: h.NULLABLE,
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: t.parseType(h.NULLABLE),
        meta: {
          position: "prefix"
        }
      }), "parsePrefix"),
      parseInfix: /* @__PURE__ */ r((t, o) => (t.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: w(o),
        meta: {
          position: "suffix"
        }
      }), "parseInfix")
    });
    function vs({ allowTrailingComma: t }) {
      return P({
        name: "parameterListParslet",
        accept: /* @__PURE__ */ r((o) => o === ",", "accept"),
        precedence: h.PARAMETER_LIST,
        parseInfix: /* @__PURE__ */ r((o, i) => {
          let u = [
            K(i)
          ];
          o.consume(",");
          do
            try {
              let f = o.parseIntermediateType(h.PARAMETER_LIST);
              u.push(K(f));
            } catch (f) {
              if (t && f instanceof a)
                break;
              throw f;
            }
          while (o.consume(","));
          if (u.length > 0 && u.slice(0, -1).some((f) => f.type === "JsdocTypeVariadic"))
            throw new Error("Only the last parameter may be a rest parameter");
          return {
            type: "JsdocTypeParameterList",
            elements: u
          };
        }, "parseInfix")
      });
    }
    r(vs, "createParameterListParslet");
    let ws = P({
      name: "genericParslet",
      accept: /* @__PURE__ */ r((t, o) => t === "<" || t === "." && o === "<", "accept"),
      precedence: h.GENERIC,
      parseInfix: /* @__PURE__ */ r((t, o) => {
        let i = t.consume(".");
        t.consume("<");
        let u = [];
        do
          u.push(t.parseType(h.PARAMETER_LIST));
        while (t.consume(","));
        if (!t.consume(">"))
          throw new Error("Unterminated generic parameter list");
        return {
          type: "JsdocTypeGeneric",
          left: w(o),
          elements: u,
          meta: {
            brackets: "angle",
            dot: i
          }
        };
      }, "parseInfix")
    }), Ps = P({
      name: "unionParslet",
      accept: /* @__PURE__ */ r((t) => t === "|", "accept"),
      precedence: h.UNION,
      parseInfix: /* @__PURE__ */ r((t, o) => {
        t.consume("|");
        let i = [];
        do
          i.push(t.parseType(h.UNION));
        while (t.consume("|"));
        return {
          type: "JsdocTypeUnion",
          elements: [w(o), ...i]
        };
      }, "parseInfix")
    }), nt = [
      rt,
      Ne,
      _e,
      hs,
      xs,
      bs,
      vs({
        allowTrailingComma: !0
      }),
      ws,
      Ps,
      Ne
    ];
    function De({ allowSquareBracketsOnAnyType: t, allowJsdocNamePaths: o, pathGrammar: i }) {
      return /* @__PURE__ */ r(function(f, T, x) {
        if (x == null || T >= h.NAME_PATH)
          return null;
        let S = f.lexer.current.type, D = f.lexer.next.type;
        if (!(S === "." && D !== "<" || S === "[" && (t || x.type === "JsdocTypeName") || o && (S === "~" || S === "#")))
          return null;
        let j, Le = !1;
        f.consume(".") ? j = "property" : f.consume("[") ? (j = "property-brackets", Le = !0) : f.consume("~") ? j = "inner" : (f.consume("#"),
        j = "instance");
        let ir = i !== null ? new B(i, f.lexer, f) : f, U = ir.parseIntermediateType(h.NAME_PATH);
        f.acceptLexerState(ir);
        let ge;
        switch (U.type) {
          case "JsdocTypeName":
            ge = {
              type: "JsdocTypeProperty",
              value: U.value,
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeNumber":
            ge = {
              type: "JsdocTypeProperty",
              value: U.value.toString(10),
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeStringValue":
            ge = {
              type: "JsdocTypeProperty",
              value: U.value,
              meta: {
                quote: U.meta.quote
              }
            };
            break;
          case "JsdocTypeSpecialNamePath":
            if (U.specialType === "event")
              ge = U;
            else
              throw new p(U, "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");
            break;
          default:
            throw new p(U, "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'");
        }
        if (Le && !f.consume("]")) {
          let sr = f.lexer.current;
          throw new Error(`Unterminated square brackets. Next token is '${sr.type}' with text '${sr.text}'`);
        }
        return {
          type: "JsdocTypeNamePath",
          left: w(x),
          right: ge,
          pathType: j
        };
      }, "namePathParslet");
    }
    r(De, "createNamePathParslet");
    function $({ allowedAdditionalTokens: t }) {
      return P({
        name: "nameParslet",
        accept: /* @__PURE__ */ r((o) => o === "Identifier" || o === "this" || o === "new" || t.includes(o), "accept"),
        parsePrefix: /* @__PURE__ */ r((o) => {
          let { type: i, text: u } = o.lexer.current;
          return o.consume(i), {
            type: "JsdocTypeName",
            value: u
          };
        }, "parsePrefix")
      });
    }
    r($, "createNameParslet");
    let me = P({
      name: "stringValueParslet",
      accept: /* @__PURE__ */ r((t) => t === "StringValue", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        let o = t.lexer.current.text;
        return t.consume("StringValue"), {
          type: "JsdocTypeStringValue",
          value: o.slice(1, -1),
          meta: {
            quote: o[0] === "'" ? "single" : "double"
          }
        };
      }, "parsePrefix")
    });
    function qe({ pathGrammar: t, allowedTypes: o }) {
      return P({
        name: "specialNamePathParslet",
        accept: /* @__PURE__ */ r((i) => o.includes(i), "accept"),
        parsePrefix: /* @__PURE__ */ r((i) => {
          let u = i.lexer.current.type;
          if (i.consume(u), !i.consume(":"))
            return {
              type: "JsdocTypeName",
              value: u
            };
          let f, T = i.lexer.current;
          if (i.consume("StringValue"))
            f = {
              type: "JsdocTypeSpecialNamePath",
              value: T.text.slice(1, -1),
              specialType: u,
              meta: {
                quote: T.text[0] === "'" ? "single" : "double"
              }
            };
          else {
            let D = "", _ = ["Identifier", "@", "/"];
            for (; _.some((j) => i.consume(j)); )
              D += T.text, T = i.lexer.current;
            f = {
              type: "JsdocTypeSpecialNamePath",
              value: D,
              specialType: u,
              meta: {
                quote: void 0
              }
            };
          }
          let x = new B(t, i.lexer, i), S = x.parseInfixIntermediateType(f, h.ALL);
          return i.acceptLexerState(x), w(S);
        }, "parsePrefix")
      });
    }
    r(qe, "createSpecialNamePathParslet");
    let Xt = [
      $({
        allowedAdditionalTokens: ["external", "module"]
      }),
      me,
      _e,
      De({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: null
      })
    ], Z = [
      ...Xt,
      qe({
        allowedTypes: ["event"],
        pathGrammar: Xt
      })
    ];
    function ot(t) {
      let o;
      if (t.type === "JsdocTypeParameterList")
        o = t.elements;
      else if (t.type === "JsdocTypeParenthesis")
        o = [t.element];
      else
        throw new p(t);
      return o.map((i) => K(i));
    }
    r(ot, "getParameters");
    function Js(t) {
      let o = ot(t);
      if (o.some((i) => i.type === "JsdocTypeKeyValue"))
        throw new Error("No parameter should be named");
      return o;
    }
    r(Js, "getUnnamedParameters");
    function at({ allowNamedParameters: t, allowNoReturnType: o, allowWithoutParenthesis: i, allowNewAsFunctionKeyword: u }) {
      return P({
        name: "functionParslet",
        accept: /* @__PURE__ */ r((f, T) => f === "function" || u && f === "new" && T === "(", "accept"),
        parsePrefix: /* @__PURE__ */ r((f) => {
          let T = f.consume("new");
          f.consume("function");
          let x = f.lexer.current.type === "(";
          if (!x) {
            if (!i)
              throw new Error("function is missing parameter list");
            return {
              type: "JsdocTypeName",
              value: "function"
            };
          }
          let S = {
            type: "JsdocTypeFunction",
            parameters: [],
            arrow: !1,
            constructor: T,
            parenthesis: x
          }, D = f.parseIntermediateType(h.FUNCTION);
          if (t === void 0)
            S.parameters = Js(D);
          else {
            if (T && D.type === "JsdocTypeFunction" && D.arrow)
              return S = D, S.constructor = !0, S;
            S.parameters = ot(D);
            for (let _ of S.parameters)
              if (_.type === "JsdocTypeKeyValue" && !t.includes(_.key))
                throw new Error(`only allowed named parameters are ${t.join(", ")} but got ${_.type}`);
          }
          if (f.consume(":"))
            S.returnType = f.parseType(h.PREFIX);
          else if (!o)
            throw new Error("function is missing return type");
          return S;
        }, "parsePrefix")
      });
    }
    r(at, "createFunctionParslet");
    function it({ allowPostfix: t, allowEnclosingBrackets: o }) {
      return P({
        name: "variadicParslet",
        accept: /* @__PURE__ */ r((i) => i === "...", "accept"),
        precedence: h.PREFIX,
        parsePrefix: /* @__PURE__ */ r((i) => {
          i.consume("...");
          let u = o && i.consume("[");
          try {
            let f = i.parseType(h.PREFIX);
            if (u && !i.consume("]"))
              throw new Error("Unterminated variadic type. Missing ']'");
            return {
              type: "JsdocTypeVariadic",
              element: w(f),
              meta: {
                position: "prefix",
                squareBrackets: u
              }
            };
          } catch (f) {
            if (f instanceof a) {
              if (u)
                throw new Error("Empty square brackets for variadic are not allowed.");
              return {
                type: "JsdocTypeVariadic",
                meta: {
                  position: void 0,
                  squareBrackets: !1
                }
              };
            } else
              throw f;
          }
        }, "parsePrefix"),
        parseInfix: t ? (i, u) => (i.consume("..."), {
          type: "JsdocTypeVariadic",
          element: w(u),
          meta: {
            position: "suffix",
            squareBrackets: !1
          }
        }) : void 0
      });
    }
    r(it, "createVariadicParslet");
    let Qt = P({
      name: "symbolParslet",
      accept: /* @__PURE__ */ r((t) => t === "(", "accept"),
      precedence: h.SYMBOL,
      parseInfix: /* @__PURE__ */ r((t, o) => {
        if (o.type !== "JsdocTypeName")
          throw new Error("Symbol expects a name on the left side. (Reacting on '(')");
        t.consume("(");
        let i = {
          type: "JsdocTypeSymbol",
          value: o.value
        };
        if (!t.consume(")")) {
          let u = t.parseIntermediateType(h.SYMBOL);
          if (i.element = gs(u), !t.consume(")"))
            throw new Error("Symbol does not end after value");
        }
        return i;
      }, "parseInfix")
    }), Zt = P({
      name: "arrayBracketsParslet",
      precedence: h.ARRAY_BRACKETS,
      accept: /* @__PURE__ */ r((t, o) => t === "[" && o === "]", "accept"),
      parseInfix: /* @__PURE__ */ r((t, o) => (t.consume("["), t.consume("]"), {
        type: "JsdocTypeGeneric",
        left: {
          type: "JsdocTypeName",
          value: "Array"
        },
        elements: [
          w(o)
        ],
        meta: {
          brackets: "square",
          dot: !1
        }
      }), "parseInfix")
    });
    function st({ objectFieldGrammar: t, allowKeyTypes: o }) {
      return P({
        name: "objectParslet",
        accept: /* @__PURE__ */ r((i) => i === "{", "accept"),
        parsePrefix: /* @__PURE__ */ r((i) => {
          i.consume("{");
          let u = {
            type: "JsdocTypeObject",
            meta: {
              separator: "comma"
            },
            elements: []
          };
          if (!i.consume("}")) {
            let f, T = new B(t, i.lexer, i);
            for (; ; ) {
              T.acceptLexerState(i);
              let x = T.parseIntermediateType(h.OBJECT);
              i.acceptLexerState(T), x === void 0 && o && (x = i.parseIntermediateType(h.OBJECT));
              let S = !1;
              if (x.type === "JsdocTypeNullable" && (S = !0, x = x.element), x.type === "JsdocTypeNumber" || x.type === "JsdocTypeName" || x.
              type === "JsdocTypeStringValue") {
                let _;
                x.type === "JsdocTypeStringValue" && (_ = x.meta.quote), u.elements.push({
                  type: "JsdocTypeObjectField",
                  key: x.value.toString(),
                  right: void 0,
                  optional: S,
                  readonly: !1,
                  meta: {
                    quote: _
                  }
                });
              } else if (x.type === "JsdocTypeObjectField" || x.type === "JsdocTypeJsdocObjectField")
                u.elements.push(x);
              else
                throw new p(x);
              if (i.lexer.current.startOfLine)
                f = "linebreak";
              else if (i.consume(","))
                f = "comma";
              else if (i.consume(";"))
                f = "semicolon";
              else
                break;
              if (i.lexer.current.type === "}")
                break;
            }
            if (u.meta.separator = f ?? "comma", !i.consume("}"))
              throw new Error("Unterminated record type. Missing '}'");
          }
          return u;
        }, "parsePrefix")
      });
    }
    r(st, "createObjectParslet");
    function pt({ allowSquaredProperties: t, allowKeyTypes: o, allowReadonly: i, allowOptional: u }) {
      return P({
        name: "objectFieldParslet",
        precedence: h.KEY_VALUE,
        accept: /* @__PURE__ */ r((f) => f === ":", "accept"),
        parseInfix: /* @__PURE__ */ r((f, T) => {
          var x;
          let S = !1, D = !1;
          u && T.type === "JsdocTypeNullable" && (S = !0, T = T.element), i && T.type === "JsdocTypeReadonlyProperty" && (D = !0, T = T.element);
          let _ = (x = f.baseParser) !== null && x !== void 0 ? x : f;
          if (_.acceptLexerState(f), T.type === "JsdocTypeNumber" || T.type === "JsdocTypeName" || T.type === "JsdocTypeStringValue" || tt(T)) {
            if (tt(T) && !t)
              throw new p(T);
            _.consume(":");
            let j;
            T.type === "JsdocTypeStringValue" && (j = T.meta.quote);
            let Le = _.parseType(h.KEY_VALUE);
            return f.acceptLexerState(_), {
              type: "JsdocTypeObjectField",
              key: tt(T) ? T : T.value.toString(),
              right: Le,
              optional: S,
              readonly: D,
              meta: {
                quote: j
              }
            };
          } else {
            if (!o)
              throw new p(T);
            _.consume(":");
            let j = _.parseType(h.KEY_VALUE);
            return f.acceptLexerState(_), {
              type: "JsdocTypeJsdocObjectField",
              left: w(T),
              right: j
            };
          }
        }, "parseInfix")
      });
    }
    r(pt, "createObjectFieldParslet");
    function ct({ allowOptional: t, allowVariadic: o }) {
      return P({
        name: "keyValueParslet",
        precedence: h.KEY_VALUE,
        accept: /* @__PURE__ */ r((i) => i === ":", "accept"),
        parseInfix: /* @__PURE__ */ r((i, u) => {
          let f = !1, T = !1;
          if (t && u.type === "JsdocTypeNullable" && (f = !0, u = u.element), o && u.type === "JsdocTypeVariadic" && u.element !== void 0 &&
          (T = !0, u = u.element), u.type !== "JsdocTypeName")
            throw new p(u);
          i.consume(":");
          let x = i.parseType(h.KEY_VALUE);
          return {
            type: "JsdocTypeKeyValue",
            key: u.value,
            right: x,
            optional: f,
            variadic: T
          };
        }, "parseInfix")
      });
    }
    r(ct, "createKeyValueParslet");
    let er = [
      ...nt,
      at({
        allowWithoutParenthesis: !0,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      me,
      qe({
        allowedTypes: ["module", "external", "event"],
        pathGrammar: Z
      }),
      it({
        allowEnclosingBrackets: !0,
        allowPostfix: !0
      }),
      $({
        allowedAdditionalTokens: ["keyof"]
      }),
      Qt,
      Zt,
      De({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: Z
      })
    ], Ss = [
      ...er,
      st({
        // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
        // we leave out the object type deliberately
        objectFieldGrammar: [
          $({
            allowedAdditionalTokens: ["module", "in"]
          }),
          pt({
            allowSquaredProperties: !1,
            allowKeyTypes: !0,
            allowOptional: !1,
            allowReadonly: !1
          }),
          ...er
        ],
        allowKeyTypes: !0
      }),
      ct({
        allowOptional: !0,
        allowVariadic: !0
      })
    ], tr = P({
      name: "typeOfParslet",
      accept: /* @__PURE__ */ r((t) => t === "typeof", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("typeof"), {
        type: "JsdocTypeTypeof",
        element: w(t.parseType(h.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), Es = [
      $({
        allowedAdditionalTokens: ["module", "keyof", "event", "external", "in"]
      }),
      rt,
      Ne,
      me,
      _e,
      pt({
        allowSquaredProperties: !1,
        allowKeyTypes: !1,
        allowOptional: !1,
        allowReadonly: !1
      })
    ], Os = [
      ...nt,
      st({
        allowKeyTypes: !1,
        objectFieldGrammar: Es
      }),
      $({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      tr,
      at({
        allowWithoutParenthesis: !1,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      it({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      // additional name parslet is needed for some special cases
      $({
        allowedAdditionalTokens: ["keyof"]
      }),
      qe({
        allowedTypes: ["module"],
        pathGrammar: Z
      }),
      De({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: Z
      }),
      ct({
        allowOptional: !1,
        allowVariadic: !1
      }),
      Qt
    ];
    function As({ allowQuestionMark: t }) {
      return P({
        name: "tupleParslet",
        accept: /* @__PURE__ */ r((o) => o === "[", "accept"),
        parsePrefix: /* @__PURE__ */ r((o) => {
          o.consume("[");
          let i = {
            type: "JsdocTypeTuple",
            elements: []
          };
          if (o.consume("]"))
            return i;
          let u = o.parseIntermediateType(h.ALL);
          if (u.type === "JsdocTypeParameterList" ? u.elements[0].type === "JsdocTypeKeyValue" ? i.elements = u.elements.map(Ae) : i.elements =
          u.elements.map(w) : u.type === "JsdocTypeKeyValue" ? i.elements = [Ae(u)] : i.elements = [w(u)], !o.consume("]"))
            throw new Error("Unterminated '['");
          if (!t && i.elements.some((f) => f.type === "JsdocTypeUnknown"))
            throw new Error("Question mark in tuple not allowed");
          return i;
        }, "parsePrefix")
      });
    }
    r(As, "createTupleParslet");
    let Ns = P({
      name: "keyOfParslet",
      accept: /* @__PURE__ */ r((t) => t === "keyof", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("keyof"), {
        type: "JsdocTypeKeyof",
        element: w(t.parseType(h.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), _s = P({
      name: "importParslet",
      accept: /* @__PURE__ */ r((t) => t === "import", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        if (t.consume("import"), !t.consume("("))
          throw new Error("Missing parenthesis after import keyword");
        let o = t.parseType(h.PREFIX);
        if (o.type !== "JsdocTypeStringValue")
          throw new Error("Only string values are allowed as paths for imports");
        if (!t.consume(")"))
          throw new Error("Missing closing parenthesis after import keyword");
        return {
          type: "JsdocTypeImport",
          element: o
        };
      }, "parsePrefix")
    }), Ds = P({
      name: "readonlyPropertyParslet",
      accept: /* @__PURE__ */ r((t) => t === "readonly", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("readonly"), {
        type: "JsdocTypeReadonlyProperty",
        element: t.parseType(h.KEY_VALUE)
      }), "parsePrefix")
    }), qs = P({
      name: "arrowFunctionParslet",
      precedence: h.ARROW,
      accept: /* @__PURE__ */ r((t) => t === "=>", "accept"),
      parseInfix: /* @__PURE__ */ r((t, o) => (t.consume("=>"), {
        type: "JsdocTypeFunction",
        parameters: ot(o).map(Ts),
        arrow: !0,
        constructor: !1,
        parenthesis: !0,
        returnType: t.parseType(h.OBJECT)
      }), "parseInfix")
    }), Is = P({
      name: "intersectionParslet",
      accept: /* @__PURE__ */ r((t) => t === "&", "accept"),
      precedence: h.INTERSECTION,
      parseInfix: /* @__PURE__ */ r((t, o) => {
        t.consume("&");
        let i = [];
        do
          i.push(t.parseType(h.INTERSECTION));
        while (t.consume("&"));
        return {
          type: "JsdocTypeIntersection",
          elements: [w(o), ...i]
        };
      }, "parseInfix")
    }), Rs = P({
      name: "predicateParslet",
      precedence: h.INFIX,
      accept: /* @__PURE__ */ r((t) => t === "is", "accept"),
      parseInfix: /* @__PURE__ */ r((t, o) => {
        if (o.type !== "JsdocTypeName")
          throw new p(o, "A typescript predicate always has to have a name on the left side.");
        return t.consume("is"), {
          type: "JsdocTypePredicate",
          left: o,
          right: w(t.parseIntermediateType(h.INFIX))
        };
      }, "parseInfix")
    }), js = P({
      name: "objectSquareBracketPropertyParslet",
      accept: /* @__PURE__ */ r((t) => t === "[", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        if (t.baseParser === void 0)
          throw new Error("Only allowed inside object grammar");
        t.consume("[");
        let o = t.lexer.current.text;
        t.consume("Identifier");
        let i;
        if (t.consume(":")) {
          let u = t.baseParser;
          u.acceptLexerState(t), i = {
            type: "JsdocTypeIndexSignature",
            key: o,
            right: u.parseType(h.ARRAY_BRACKETS)
          }, t.acceptLexerState(u);
        } else if (t.consume("in")) {
          let u = t.baseParser;
          u.acceptLexerState(t), i = {
            type: "JsdocTypeMappedType",
            key: o,
            right: u.parseType(h.ARRAY_BRACKETS)
          }, t.acceptLexerState(u);
        } else
          throw new Error("Missing ':' or 'in' inside square bracketed property.");
        if (!t.consume("]"))
          throw new Error("Unterminated square brackets");
        return i;
      }, "parsePrefix")
    }), Fs = [
      Ds,
      $({
        allowedAdditionalTokens: ["module", "event", "keyof", "event", "external", "in"]
      }),
      rt,
      Ne,
      me,
      _e,
      pt({
        allowSquaredProperties: !0,
        allowKeyTypes: !1,
        allowOptional: !0,
        allowReadonly: !0
      }),
      js
    ], Ls = [
      ...nt,
      st({
        allowKeyTypes: !1,
        objectFieldGrammar: Fs
      }),
      tr,
      Ns,
      _s,
      me,
      at({
        allowWithoutParenthesis: !0,
        allowNoReturnType: !1,
        allowNamedParameters: ["this", "new", "args"],
        allowNewAsFunctionKeyword: !0
      }),
      As({
        allowQuestionMark: !1
      }),
      it({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      $({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      qe({
        allowedTypes: ["module"],
        pathGrammar: Z
      }),
      Zt,
      qs,
      De({
        allowSquareBracketsOnAnyType: !0,
        allowJsdocNamePaths: !1,
        pathGrammar: Z
      }),
      Is,
      Rs,
      ct({
        allowVariadic: !0,
        allowOptional: !0
      })
    ];
    function rr(t, o) {
      switch (o) {
        case "closure":
          return new B(Os, t).parse();
        case "jsdoc":
          return new B(Ss, t).parse();
        case "typescript":
          return new B(Ls, t).parse();
      }
    }
    r(rr, "parse");
    function ks(t, o = ["typescript", "closure", "jsdoc"]) {
      let i;
      for (let u of o)
        try {
          return rr(t, u);
        } catch (f) {
          i = f;
        }
      throw i;
    }
    r(ks, "tryParse");
    function Te(t, o) {
      let i = t[o.type];
      if (i === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${o.type}.`);
      return i(o, (u) => Te(t, u));
    }
    r(Te, "transform");
    function I(t) {
      throw new Error("This transform is not available. Are you trying the correct parsing mode?");
    }
    r(I, "notAvailableTransform");
    function nr(t) {
      let o = {
        params: []
      };
      for (let i of t.parameters)
        i.type === "JsdocTypeKeyValue" ? i.key === "this" ? o.this = i.right : i.key === "new" ? o.new = i.right : o.params.push(i) : o.params.
        push(i);
      return o;
    }
    r(nr, "extractSpecialParams");
    function Ie(t, o, i) {
      return t === "prefix" ? i + o : o + i;
    }
    r(Ie, "applyPosition");
    function G(t, o) {
      switch (o) {
        case "double":
          return `"${t}"`;
        case "single":
          return `'${t}'`;
        case void 0:
          return t;
      }
    }
    r(G, "quote");
    function or() {
      return {
        JsdocTypeParenthesis: /* @__PURE__ */ r((t, o) => `(${t.element !== void 0 ? o(t.element) : ""})`, "JsdocTypeParenthesis"),
        JsdocTypeKeyof: /* @__PURE__ */ r((t, o) => `keyof ${o(t.element)}`, "JsdocTypeKeyof"),
        JsdocTypeFunction: /* @__PURE__ */ r((t, o) => {
          if (t.arrow) {
            if (t.returnType === void 0)
              throw new Error("Arrow function needs a return type.");
            let i = `(${t.parameters.map(o).join(", ")}) => ${o(t.returnType)}`;
            return t.constructor && (i = "new " + i), i;
          } else {
            let i = t.constructor ? "new" : "function";
            return t.parenthesis && (i += `(${t.parameters.map(o).join(", ")})`, t.returnType !== void 0 && (i += `: ${o(t.returnType)}`)), i;
          }
        }, "JsdocTypeFunction"),
        JsdocTypeName: /* @__PURE__ */ r((t) => t.value, "JsdocTypeName"),
        JsdocTypeTuple: /* @__PURE__ */ r((t, o) => `[${t.elements.map(o).join(", ")}]`, "JsdocTypeTuple"),
        JsdocTypeVariadic: /* @__PURE__ */ r((t, o) => t.meta.position === void 0 ? "..." : Ie(t.meta.position, o(t.element), "..."), "Jsdoc\
TypeVariadic"),
        JsdocTypeNamePath: /* @__PURE__ */ r((t, o) => {
          let i = o(t.left), u = o(t.right);
          switch (t.pathType) {
            case "inner":
              return `${i}~${u}`;
            case "instance":
              return `${i}#${u}`;
            case "property":
              return `${i}.${u}`;
            case "property-brackets":
              return `${i}[${u}]`;
          }
        }, "JsdocTypeNamePath"),
        JsdocTypeStringValue: /* @__PURE__ */ r((t) => G(t.value, t.meta.quote), "JsdocTypeStringValue"),
        JsdocTypeAny: /* @__PURE__ */ r(() => "*", "JsdocTypeAny"),
        JsdocTypeGeneric: /* @__PURE__ */ r((t, o) => {
          if (t.meta.brackets === "square") {
            let i = t.elements[0], u = o(i);
            return i.type === "JsdocTypeUnion" || i.type === "JsdocTypeIntersection" ? `(${u})[]` : `${u}[]`;
          } else
            return `${o(t.left)}${t.meta.dot ? "." : ""}<${t.elements.map(o).join(", ")}>`;
        }, "JsdocTypeGeneric"),
        JsdocTypeImport: /* @__PURE__ */ r((t, o) => `import(${o(t.element)})`, "JsdocTypeImport"),
        JsdocTypeObjectField: /* @__PURE__ */ r((t, o) => {
          let i = "";
          return t.readonly && (i += "readonly "), typeof t.key == "string" ? i += G(t.key, t.meta.quote) : i += o(t.key), t.optional && (i +=
          "?"), t.right === void 0 ? i : i + `: ${o(t.right)}`;
        }, "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: /* @__PURE__ */ r((t, o) => `${o(t.left)}: ${o(t.right)}`, "JsdocTypeJsdocObjectField"),
        JsdocTypeKeyValue: /* @__PURE__ */ r((t, o) => {
          let i = t.key;
          return t.optional && (i += "?"), t.variadic && (i = "..." + i), t.right === void 0 ? i : i + `: ${o(t.right)}`;
        }, "JsdocTypeKeyValue"),
        JsdocTypeSpecialNamePath: /* @__PURE__ */ r((t) => `${t.specialType}:${G(t.value, t.meta.quote)}`, "JsdocTypeSpecialNamePath"),
        JsdocTypeNotNullable: /* @__PURE__ */ r((t, o) => Ie(t.meta.position, o(t.element), "!"), "JsdocTypeNotNullable"),
        JsdocTypeNull: /* @__PURE__ */ r(() => "null", "JsdocTypeNull"),
        JsdocTypeNullable: /* @__PURE__ */ r((t, o) => Ie(t.meta.position, o(t.element), "?"), "JsdocTypeNullable"),
        JsdocTypeNumber: /* @__PURE__ */ r((t) => t.value.toString(), "JsdocTypeNumber"),
        JsdocTypeObject: /* @__PURE__ */ r((t, o) => `{${t.elements.map(o).join((t.meta.separator === "comma" ? "," : ";") + " ")}}`, "Jsdoc\
TypeObject"),
        JsdocTypeOptional: /* @__PURE__ */ r((t, o) => Ie(t.meta.position, o(t.element), "="), "JsdocTypeOptional"),
        JsdocTypeSymbol: /* @__PURE__ */ r((t, o) => `${t.value}(${t.element !== void 0 ? o(t.element) : ""})`, "JsdocTypeSymbol"),
        JsdocTypeTypeof: /* @__PURE__ */ r((t, o) => `typeof ${o(t.element)}`, "JsdocTypeTypeof"),
        JsdocTypeUndefined: /* @__PURE__ */ r(() => "undefined", "JsdocTypeUndefined"),
        JsdocTypeUnion: /* @__PURE__ */ r((t, o) => t.elements.map(o).join(" | "), "JsdocTypeUnion"),
        JsdocTypeUnknown: /* @__PURE__ */ r(() => "?", "JsdocTypeUnknown"),
        JsdocTypeIntersection: /* @__PURE__ */ r((t, o) => t.elements.map(o).join(" & "), "JsdocTypeIntersection"),
        JsdocTypeProperty: /* @__PURE__ */ r((t) => G(t.value, t.meta.quote), "JsdocTypeProperty"),
        JsdocTypePredicate: /* @__PURE__ */ r((t, o) => `${o(t.left)} is ${o(t.right)}`, "JsdocTypePredicate"),
        JsdocTypeIndexSignature: /* @__PURE__ */ r((t, o) => `[${t.key}: ${o(t.right)}]`, "JsdocTypeIndexSignature"),
        JsdocTypeMappedType: /* @__PURE__ */ r((t, o) => `[${t.key} in ${o(t.right)}]`, "JsdocTypeMappedType")
      };
    }
    r(or, "stringifyRules");
    let Cs = or();
    function Us(t) {
      return Te(Cs, t);
    }
    r(Us, "stringify");
    let Ms = [
      "null",
      "true",
      "false",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield"
    ];
    function Y(t) {
      let o = {
        type: "NameExpression",
        name: t
      };
      return Ms.includes(t) && (o.reservedWord = !0), o;
    }
    r(Y, "makeName");
    let Vs = {
      JsdocTypeOptional: /* @__PURE__ */ r((t, o) => {
        let i = o(t.element);
        return i.optional = !0, i;
      }, "JsdocTypeOptional"),
      JsdocTypeNullable: /* @__PURE__ */ r((t, o) => {
        let i = o(t.element);
        return i.nullable = !0, i;
      }, "JsdocTypeNullable"),
      JsdocTypeNotNullable: /* @__PURE__ */ r((t, o) => {
        let i = o(t.element);
        return i.nullable = !1, i;
      }, "JsdocTypeNotNullable"),
      JsdocTypeVariadic: /* @__PURE__ */ r((t, o) => {
        if (t.element === void 0)
          throw new Error("dots without value are not allowed in catharsis mode");
        let i = o(t.element);
        return i.repeatable = !0, i;
      }, "JsdocTypeVariadic"),
      JsdocTypeAny: /* @__PURE__ */ r(() => ({
        type: "AllLiteral"
      }), "JsdocTypeAny"),
      JsdocTypeNull: /* @__PURE__ */ r(() => ({
        type: "NullLiteral"
      }), "JsdocTypeNull"),
      JsdocTypeStringValue: /* @__PURE__ */ r((t) => Y(G(t.value, t.meta.quote)), "JsdocTypeStringValue"),
      JsdocTypeUndefined: /* @__PURE__ */ r(() => ({
        type: "UndefinedLiteral"
      }), "JsdocTypeUndefined"),
      JsdocTypeUnknown: /* @__PURE__ */ r(() => ({
        type: "UnknownLiteral"
      }), "JsdocTypeUnknown"),
      JsdocTypeFunction: /* @__PURE__ */ r((t, o) => {
        let i = nr(t), u = {
          type: "FunctionType",
          params: i.params.map(o)
        };
        return i.this !== void 0 && (u.this = o(i.this)), i.new !== void 0 && (u.new = o(i.new)), t.returnType !== void 0 && (u.result = o(t.
        returnType)), u;
      }, "JsdocTypeFunction"),
      JsdocTypeGeneric: /* @__PURE__ */ r((t, o) => ({
        type: "TypeApplication",
        applications: t.elements.map((i) => o(i)),
        expression: o(t.left)
      }), "JsdocTypeGeneric"),
      JsdocTypeSpecialNamePath: /* @__PURE__ */ r((t) => Y(t.specialType + ":" + G(t.value, t.meta.quote)), "JsdocTypeSpecialNamePath"),
      JsdocTypeName: /* @__PURE__ */ r((t) => t.value !== "function" ? Y(t.value) : {
        type: "FunctionType",
        params: []
      }, "JsdocTypeName"),
      JsdocTypeNumber: /* @__PURE__ */ r((t) => Y(t.value.toString()), "JsdocTypeNumber"),
      JsdocTypeObject: /* @__PURE__ */ r((t, o) => {
        let i = {
          type: "RecordType",
          fields: []
        };
        for (let u of t.elements)
          u.type !== "JsdocTypeObjectField" && u.type !== "JsdocTypeJsdocObjectField" ? i.fields.push({
            type: "FieldType",
            key: o(u),
            value: void 0
          }) : i.fields.push(o(u));
        return i;
      }, "JsdocTypeObject"),
      JsdocTypeObjectField: /* @__PURE__ */ r((t, o) => {
        if (typeof t.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        return {
          type: "FieldType",
          key: Y(G(t.key, t.meta.quote)),
          value: t.right === void 0 ? void 0 : o(t.right)
        };
      }, "JsdocTypeObjectField"),
      JsdocTypeJsdocObjectField: /* @__PURE__ */ r((t, o) => ({
        type: "FieldType",
        key: o(t.left),
        value: o(t.right)
      }), "JsdocTypeJsdocObjectField"),
      JsdocTypeUnion: /* @__PURE__ */ r((t, o) => ({
        type: "TypeUnion",
        elements: t.elements.map((i) => o(i))
      }), "JsdocTypeUnion"),
      JsdocTypeKeyValue: /* @__PURE__ */ r((t, o) => ({
        type: "FieldType",
        key: Y(t.key),
        value: t.right === void 0 ? void 0 : o(t.right)
      }), "JsdocTypeKeyValue"),
      JsdocTypeNamePath: /* @__PURE__ */ r((t, o) => {
        let i = o(t.left), u;
        t.right.type === "JsdocTypeSpecialNamePath" ? u = o(t.right).name : u = G(t.right.value, t.right.meta.quote);
        let f = t.pathType === "inner" ? "~" : t.pathType === "instance" ? "#" : ".";
        return Y(`${i.name}${f}${u}`);
      }, "JsdocTypeNamePath"),
      JsdocTypeSymbol: /* @__PURE__ */ r((t) => {
        let o = "", i = t.element, u = !1;
        return i?.type === "JsdocTypeVariadic" && (i.meta.position === "prefix" ? o = "..." : u = !0, i = i.element), i?.type === "JsdocType\
Name" ? o += i.value : i?.type === "JsdocTypeNumber" && (o += i.value.toString()), u && (o += "..."), Y(`${t.value}(${o})`);
      }, "JsdocTypeSymbol"),
      JsdocTypeParenthesis: /* @__PURE__ */ r((t, o) => o(w(t.element)), "JsdocTypeParenthesis"),
      JsdocTypeMappedType: I,
      JsdocTypeIndexSignature: I,
      JsdocTypeImport: I,
      JsdocTypeKeyof: I,
      JsdocTypeTuple: I,
      JsdocTypeTypeof: I,
      JsdocTypeIntersection: I,
      JsdocTypeProperty: I,
      JsdocTypePredicate: I
    };
    function Ks(t) {
      return Te(Vs, t);
    }
    r(Ks, "catharsisTransform");
    function W(t) {
      switch (t) {
        case void 0:
          return "none";
        case "single":
          return "single";
        case "double":
          return "double";
      }
    }
    r(W, "getQuoteStyle");
    function Bs(t) {
      switch (t) {
        case "inner":
          return "INNER_MEMBER";
        case "instance":
          return "INSTANCE_MEMBER";
        case "property":
          return "MEMBER";
        case "property-brackets":
          return "MEMBER";
      }
    }
    r(Bs, "getMemberType");
    function ut(t, o) {
      return o.length === 2 ? {
        type: t,
        left: o[0],
        right: o[1]
      } : {
        type: t,
        left: o[0],
        right: ut(t, o.slice(1))
      };
    }
    r(ut, "nestResults");
    let $s = {
      JsdocTypeOptional: /* @__PURE__ */ r((t, o) => ({
        type: "OPTIONAL",
        value: o(t.element),
        meta: {
          syntax: t.meta.position === "prefix" ? "PREFIX_EQUAL_SIGN" : "SUFFIX_EQUALS_SIGN"
        }
      }), "JsdocTypeOptional"),
      JsdocTypeNullable: /* @__PURE__ */ r((t, o) => ({
        type: "NULLABLE",
        value: o(t.element),
        meta: {
          syntax: t.meta.position === "prefix" ? "PREFIX_QUESTION_MARK" : "SUFFIX_QUESTION_MARK"
        }
      }), "JsdocTypeNullable"),
      JsdocTypeNotNullable: /* @__PURE__ */ r((t, o) => ({
        type: "NOT_NULLABLE",
        value: o(t.element),
        meta: {
          syntax: t.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG"
        }
      }), "JsdocTypeNotNullable"),
      JsdocTypeVariadic: /* @__PURE__ */ r((t, o) => {
        let i = {
          type: "VARIADIC",
          meta: {
            syntax: t.meta.position === "prefix" ? "PREFIX_DOTS" : t.meta.position === "suffix" ? "SUFFIX_DOTS" : "ONLY_DOTS"
          }
        };
        return t.element !== void 0 && (i.value = o(t.element)), i;
      }, "JsdocTypeVariadic"),
      JsdocTypeName: /* @__PURE__ */ r((t) => ({
        type: "NAME",
        name: t.value
      }), "JsdocTypeName"),
      JsdocTypeTypeof: /* @__PURE__ */ r((t, o) => ({
        type: "TYPE_QUERY",
        name: o(t.element)
      }), "JsdocTypeTypeof"),
      JsdocTypeTuple: /* @__PURE__ */ r((t, o) => ({
        type: "TUPLE",
        entries: t.elements.map(o)
      }), "JsdocTypeTuple"),
      JsdocTypeKeyof: /* @__PURE__ */ r((t, o) => ({
        type: "KEY_QUERY",
        value: o(t.element)
      }), "JsdocTypeKeyof"),
      JsdocTypeImport: /* @__PURE__ */ r((t) => ({
        type: "IMPORT",
        path: {
          type: "STRING_VALUE",
          quoteStyle: W(t.element.meta.quote),
          string: t.element.value
        }
      }), "JsdocTypeImport"),
      JsdocTypeUndefined: /* @__PURE__ */ r(() => ({
        type: "NAME",
        name: "undefined"
      }), "JsdocTypeUndefined"),
      JsdocTypeAny: /* @__PURE__ */ r(() => ({
        type: "ANY"
      }), "JsdocTypeAny"),
      JsdocTypeFunction: /* @__PURE__ */ r((t, o) => {
        let i = nr(t), u = {
          type: t.arrow ? "ARROW" : "FUNCTION",
          params: i.params.map((f) => {
            if (f.type === "JsdocTypeKeyValue") {
              if (f.right === void 0)
                throw new Error("Function parameter without ':' is not expected to be 'KEY_VALUE'");
              return {
                type: "NAMED_PARAMETER",
                name: f.key,
                typeName: o(f.right)
              };
            } else
              return o(f);
          }),
          new: null,
          returns: null
        };
        return i.this !== void 0 ? u.this = o(i.this) : t.arrow || (u.this = null), i.new !== void 0 && (u.new = o(i.new)), t.returnType !==
        void 0 && (u.returns = o(t.returnType)), u;
      }, "JsdocTypeFunction"),
      JsdocTypeGeneric: /* @__PURE__ */ r((t, o) => {
        let i = {
          type: "GENERIC",
          subject: o(t.left),
          objects: t.elements.map(o),
          meta: {
            syntax: t.meta.brackets === "square" ? "SQUARE_BRACKET" : t.meta.dot ? "ANGLE_BRACKET_WITH_DOT" : "ANGLE_BRACKET"
          }
        };
        return t.meta.brackets === "square" && t.elements[0].type === "JsdocTypeFunction" && !t.elements[0].parenthesis && (i.objects[0] = {
          type: "NAME",
          name: "function"
        }), i;
      }, "JsdocTypeGeneric"),
      JsdocTypeObjectField: /* @__PURE__ */ r((t, o) => {
        if (typeof t.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        if (t.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: t.key,
            quoteStyle: W(t.meta.quote),
            value: null,
            readonly: !1
          };
        let i = o(t.right);
        return t.optional && (i = {
          type: "OPTIONAL",
          value: i,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: t.key.toString(),
          quoteStyle: W(t.meta.quote),
          value: i,
          readonly: !1
        };
      }, "JsdocTypeObjectField"),
      JsdocTypeJsdocObjectField: /* @__PURE__ */ r(() => {
        throw new Error("Keys may not be typed in jsdoctypeparser.");
      }, "JsdocTypeJsdocObjectField"),
      JsdocTypeKeyValue: /* @__PURE__ */ r((t, o) => {
        if (t.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: t.key,
            quoteStyle: "none",
            value: null,
            readonly: !1
          };
        let i = o(t.right);
        return t.optional && (i = {
          type: "OPTIONAL",
          value: i,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: t.key,
          quoteStyle: "none",
          value: i,
          readonly: !1
        };
      }, "JsdocTypeKeyValue"),
      JsdocTypeObject: /* @__PURE__ */ r((t, o) => {
        let i = [];
        for (let u of t.elements)
          (u.type === "JsdocTypeObjectField" || u.type === "JsdocTypeJsdocObjectField") && i.push(o(u));
        return {
          type: "RECORD",
          entries: i
        };
      }, "JsdocTypeObject"),
      JsdocTypeSpecialNamePath: /* @__PURE__ */ r((t) => {
        if (t.specialType !== "module")
          throw new Error(`jsdoctypeparser does not support type ${t.specialType} at this point.`);
        return {
          type: "MODULE",
          value: {
            type: "FILE_PATH",
            quoteStyle: W(t.meta.quote),
            path: t.value
          }
        };
      }, "JsdocTypeSpecialNamePath"),
      JsdocTypeNamePath: /* @__PURE__ */ r((t, o) => {
        let i = !1, u, f;
        t.right.type === "JsdocTypeSpecialNamePath" && t.right.specialType === "event" ? (i = !0, u = t.right.value, f = W(t.right.meta.quote)) :
        (u = t.right.value, f = W(t.right.meta.quote));
        let T = {
          type: Bs(t.pathType),
          owner: o(t.left),
          name: u,
          quoteStyle: f,
          hasEventPrefix: i
        };
        if (T.owner.type === "MODULE") {
          let x = T.owner;
          return T.owner = T.owner.value, x.value = T, x;
        } else
          return T;
      }, "JsdocTypeNamePath"),
      JsdocTypeUnion: /* @__PURE__ */ r((t, o) => ut("UNION", t.elements.map(o)), "JsdocTypeUnion"),
      JsdocTypeParenthesis: /* @__PURE__ */ r((t, o) => ({
        type: "PARENTHESIS",
        value: o(w(t.element))
      }), "JsdocTypeParenthesis"),
      JsdocTypeNull: /* @__PURE__ */ r(() => ({
        type: "NAME",
        name: "null"
      }), "JsdocTypeNull"),
      JsdocTypeUnknown: /* @__PURE__ */ r(() => ({
        type: "UNKNOWN"
      }), "JsdocTypeUnknown"),
      JsdocTypeStringValue: /* @__PURE__ */ r((t) => ({
        type: "STRING_VALUE",
        quoteStyle: W(t.meta.quote),
        string: t.value
      }), "JsdocTypeStringValue"),
      JsdocTypeIntersection: /* @__PURE__ */ r((t, o) => ut("INTERSECTION", t.elements.map(o)), "JsdocTypeIntersection"),
      JsdocTypeNumber: /* @__PURE__ */ r((t) => ({
        type: "NUMBER_VALUE",
        number: t.value.toString()
      }), "JsdocTypeNumber"),
      JsdocTypeSymbol: I,
      JsdocTypeProperty: I,
      JsdocTypePredicate: I,
      JsdocTypeMappedType: I,
      JsdocTypeIndexSignature: I
    };
    function Gs(t) {
      return Te($s, t);
    }
    r(Gs, "jtpTransform");
    function Ys() {
      return {
        JsdocTypeIntersection: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeIntersection",
          elements: t.elements.map(o)
        }), "JsdocTypeIntersection"),
        JsdocTypeGeneric: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeGeneric",
          left: o(t.left),
          elements: t.elements.map(o),
          meta: {
            dot: t.meta.dot,
            brackets: t.meta.brackets
          }
        }), "JsdocTypeGeneric"),
        JsdocTypeNullable: /* @__PURE__ */ r((t) => t, "JsdocTypeNullable"),
        JsdocTypeUnion: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeUnion",
          elements: t.elements.map(o)
        }), "JsdocTypeUnion"),
        JsdocTypeUnknown: /* @__PURE__ */ r((t) => t, "JsdocTypeUnknown"),
        JsdocTypeUndefined: /* @__PURE__ */ r((t) => t, "JsdocTypeUndefined"),
        JsdocTypeTypeof: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeTypeof",
          element: o(t.element)
        }), "JsdocTypeTypeof"),
        JsdocTypeSymbol: /* @__PURE__ */ r((t, o) => {
          let i = {
            type: "JsdocTypeSymbol",
            value: t.value
          };
          return t.element !== void 0 && (i.element = o(t.element)), i;
        }, "JsdocTypeSymbol"),
        JsdocTypeOptional: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeOptional",
          element: o(t.element),
          meta: {
            position: t.meta.position
          }
        }), "JsdocTypeOptional"),
        JsdocTypeObject: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeObject",
          meta: {
            separator: "comma"
          },
          elements: t.elements.map(o)
        }), "JsdocTypeObject"),
        JsdocTypeNumber: /* @__PURE__ */ r((t) => t, "JsdocTypeNumber"),
        JsdocTypeNull: /* @__PURE__ */ r((t) => t, "JsdocTypeNull"),
        JsdocTypeNotNullable: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeNotNullable",
          element: o(t.element),
          meta: {
            position: t.meta.position
          }
        }), "JsdocTypeNotNullable"),
        JsdocTypeSpecialNamePath: /* @__PURE__ */ r((t) => t, "JsdocTypeSpecialNamePath"),
        JsdocTypeObjectField: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeObjectField",
          key: t.key,
          right: t.right === void 0 ? void 0 : o(t.right),
          optional: t.optional,
          readonly: t.readonly,
          meta: t.meta
        }), "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeJsdocObjectField",
          left: o(t.left),
          right: o(t.right)
        }), "JsdocTypeJsdocObjectField"),
        JsdocTypeKeyValue: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeKeyValue",
          key: t.key,
          right: t.right === void 0 ? void 0 : o(t.right),
          optional: t.optional,
          variadic: t.variadic
        }), "JsdocTypeKeyValue"),
        JsdocTypeImport: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeImport",
          element: o(t.element)
        }), "JsdocTypeImport"),
        JsdocTypeAny: /* @__PURE__ */ r((t) => t, "JsdocTypeAny"),
        JsdocTypeStringValue: /* @__PURE__ */ r((t) => t, "JsdocTypeStringValue"),
        JsdocTypeNamePath: /* @__PURE__ */ r((t) => t, "JsdocTypeNamePath"),
        JsdocTypeVariadic: /* @__PURE__ */ r((t, o) => {
          let i = {
            type: "JsdocTypeVariadic",
            meta: {
              position: t.meta.position,
              squareBrackets: t.meta.squareBrackets
            }
          };
          return t.element !== void 0 && (i.element = o(t.element)), i;
        }, "JsdocTypeVariadic"),
        JsdocTypeTuple: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeTuple",
          elements: t.elements.map(o)
        }), "JsdocTypeTuple"),
        JsdocTypeName: /* @__PURE__ */ r((t) => t, "JsdocTypeName"),
        JsdocTypeFunction: /* @__PURE__ */ r((t, o) => {
          let i = {
            type: "JsdocTypeFunction",
            arrow: t.arrow,
            parameters: t.parameters.map(o),
            constructor: t.constructor,
            parenthesis: t.parenthesis
          };
          return t.returnType !== void 0 && (i.returnType = o(t.returnType)), i;
        }, "JsdocTypeFunction"),
        JsdocTypeKeyof: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeKeyof",
          element: o(t.element)
        }), "JsdocTypeKeyof"),
        JsdocTypeParenthesis: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeParenthesis",
          element: o(t.element)
        }), "JsdocTypeParenthesis"),
        JsdocTypeProperty: /* @__PURE__ */ r((t) => t, "JsdocTypeProperty"),
        JsdocTypePredicate: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypePredicate",
          left: o(t.left),
          right: o(t.right)
        }), "JsdocTypePredicate"),
        JsdocTypeIndexSignature: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeIndexSignature",
          key: t.key,
          right: o(t.right)
        }), "JsdocTypeIndexSignature"),
        JsdocTypeMappedType: /* @__PURE__ */ r((t, o) => ({
          type: "JsdocTypeMappedType",
          key: t.key,
          right: o(t.right)
        }), "JsdocTypeMappedType")
      };
    }
    r(Ys, "identityTransformRules");
    let ar = {
      JsdocTypeAny: [],
      JsdocTypeFunction: ["parameters", "returnType"],
      JsdocTypeGeneric: ["left", "elements"],
      JsdocTypeImport: [],
      JsdocTypeIndexSignature: ["right"],
      JsdocTypeIntersection: ["elements"],
      JsdocTypeKeyof: ["element"],
      JsdocTypeKeyValue: ["right"],
      JsdocTypeMappedType: ["right"],
      JsdocTypeName: [],
      JsdocTypeNamePath: ["left", "right"],
      JsdocTypeNotNullable: ["element"],
      JsdocTypeNull: [],
      JsdocTypeNullable: ["element"],
      JsdocTypeNumber: [],
      JsdocTypeObject: ["elements"],
      JsdocTypeObjectField: ["right"],
      JsdocTypeJsdocObjectField: ["left", "right"],
      JsdocTypeOptional: ["element"],
      JsdocTypeParenthesis: ["element"],
      JsdocTypeSpecialNamePath: [],
      JsdocTypeStringValue: [],
      JsdocTypeSymbol: ["element"],
      JsdocTypeTuple: ["elements"],
      JsdocTypeTypeof: ["element"],
      JsdocTypeUndefined: [],
      JsdocTypeUnion: ["elements"],
      JsdocTypeUnknown: [],
      JsdocTypeVariadic: ["element"],
      JsdocTypeProperty: [],
      JsdocTypePredicate: ["left", "right"]
    };
    function lt(t, o, i, u, f) {
      u?.(t, o, i);
      let T = ar[t.type];
      for (let x of T) {
        let S = t[x];
        if (S !== void 0)
          if (Array.isArray(S))
            for (let D of S)
              lt(D, t, x, u, f);
          else
            lt(S, t, x, u, f);
      }
      f?.(t, o, i);
    }
    r(lt, "_traverse");
    function Hs(t, o, i) {
      lt(t, void 0, void 0, o, i);
    }
    r(Hs, "traverse"), e.catharsisTransform = Ks, e.identityTransformRules = Ys, e.jtpTransform = Gs, e.parse = rr, e.stringify = Us, e.stringifyRules =
    or, e.transform = Te, e.traverse = Hs, e.tryParse = ks, e.visitorKeys = ar;
  });
});

// src/docs-tools/argTypes/convert/typescript/convert.ts
import { UnknownArgTypesError as np } from "@storybook/core/preview-errors";

// src/docs-tools/argTypes/convert/utils.ts
var cr = /^['"]|['"]$/g, tp = /* @__PURE__ */ r((e) => e.replace(cr, ""), "trimQuotes"), rp = /* @__PURE__ */ r((e) => cr.test(e), "includes\
Quotes"), ke = /* @__PURE__ */ r((e) => {
  let n = tp(e);
  return rp(e) || Number.isNaN(Number(n)) ? n : Number(n);
}, "parseLiteral");

// src/docs-tools/argTypes/convert/typescript/convert.ts
var op = /* @__PURE__ */ r((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let n = {};
      return e.signature.properties.forEach((a) => {
        n[a.key] = te(a.value);
      }), {
        name: "object",
        value: n
      };
    default:
      throw new np({ type: e, language: "Typescript" });
  }
}, "convertSig"), te = /* @__PURE__ */ r((e) => {
  let { name: n, raw: a } = e, s = {};
  switch (typeof a < "u" && (s.raw = a), e.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...s, name: n };
    case "Array":
      return { ...s, name: "array", value: e.elements.map(te) };
    case "signature":
      return { ...s, ...op(e) };
    case "union":
      let p;
      return e.elements?.every((c) => c.name === "literal") ? p = {
        ...s,
        name: "enum",
        // @ts-expect-error fix types
        value: e.elements?.map((c) => ke(c.value))
      } : p = { ...s, name: n, value: e.elements?.map(te) }, p;
    case "intersection":
      return { ...s, name: n, value: e.elements?.map(te) };
    default:
      return { ...s, name: "other", value: n };
  }
}, "convert");

// src/docs-tools/argTypes/convert/flow/convert.ts
import { UnknownArgTypesError as ap } from "@storybook/core/preview-errors";
var ip = /* @__PURE__ */ r((e) => e.name === "literal", "isLiteral"), sp = /* @__PURE__ */ r((e) => e.value.replace(/['|"]/g, ""), "toEnumOp\
tion"), pp = /* @__PURE__ */ r((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let n = {};
      return e.signature.properties.forEach((a) => {
        n[a.key] = re(a.value);
      }), {
        name: "object",
        value: n
      };
    default:
      throw new ap({ type: e, language: "Flow" });
  }
}, "convertSig"), re = /* @__PURE__ */ r((e) => {
  let { name: n, raw: a } = e, s = {};
  switch (typeof a < "u" && (s.raw = a), e.name) {
    case "literal":
      return { ...s, name: "other", value: e.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...s, name: n };
    case "Array":
      return { ...s, name: "array", value: e.elements.map(re) };
    case "signature":
      return { ...s, ...pp(e) };
    case "union":
      return e.elements?.every(ip) ? { ...s, name: "enum", value: e.elements?.map(sp) } : { ...s, name: n, value: e.elements?.map(re) };
    case "intersection":
      return { ...s, name: n, value: e.elements?.map(re) };
    default:
      return { ...s, name: "other", value: n };
  }
}, "convert");

// src/docs-tools/argTypes/convert/proptypes/convert.ts
var Mi = pr(Ui(), 1);
var wm = /^\(.*\) => /, fe = /* @__PURE__ */ r((e) => {
  let { name: n, raw: a, computed: s, value: p } = e, c = {};
  switch (typeof a < "u" && (c.raw = a), n) {
    case "enum": {
      let d = s ? p : p.map((m) => ke(m.value));
      return { ...c, name: n, value: d };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...c, name: n };
    case "func":
      return { ...c, name: "function" };
    case "bool":
    case "boolean":
      return { ...c, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...c, name: "array", value: p && fe(p) };
    case "object":
      return { ...c, name: n };
    case "objectOf":
      return { ...c, name: n, value: fe(p) };
    case "shape":
    case "exact":
      let y = (0, Mi.default)(p, (d) => fe(d));
      return { ...c, name: "object", value: y };
    case "union":
      return { ...c, name: "union", value: p.map((d) => fe(d)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if (n?.indexOf("|") > 0)
        try {
          let g = n.split("|").map((b) => JSON.parse(b));
          return { ...c, name: "enum", value: g };
        } catch {
        }
      let d = p ? `${n}(${p})` : n, m = wm.test(n) ? "function" : "other";
      return { ...c, name: m, value: d };
    }
  }
}, "convert");

// src/docs-tools/argTypes/convert/index.ts
var He = /* @__PURE__ */ r((e) => {
  let { type: n, tsType: a, flowType: s } = e;
  try {
    if (n != null) return fe(n);
    if (a != null) return te(a);
    if (s != null) return re(s);
  } catch (p) {
    console.error(p);
  }
  return null;
}, "convert");

// src/docs-tools/argTypes/docgen/types.ts
var Pm = /* @__PURE__ */ ((p) => (p.JAVASCRIPT = "JavaScript", p.FLOW = "Flow", p.TYPESCRIPT = "TypeScript", p.UNKNOWN = "Unknown", p))(Pm ||
{});

// src/docs-tools/argTypes/docgen/utils/defaultValue.ts
var Jm = ["null", "undefined"];
function ye(e) {
  return Jm.some((n) => n === e);
}
r(ye, "isDefaultValueBlacklisted");

// src/docs-tools/argTypes/docgen/utils/string.ts
var Vi = /* @__PURE__ */ r((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");

// src/docs-tools/argTypes/docgen/utils/docgenInfo.ts
function Ki(e) {
  return !!e.__docgenInfo;
}
r(Ki, "hasDocgen");
function Bi(e) {
  return e != null && Object.keys(e).length > 0;
}
r(Bi, "isValidDocgenSection");
function $i(e, n) {
  return Ki(e) ? e.__docgenInfo[n] : null;
}
r($i, "getDocgenSection");
function Gi(e) {
  return Ki(e) ? Vi(e.__docgenInfo.description) : "";
}
r(Gi, "getDocgenDescription");

// ../node_modules/comment-parser/es6/primitives.js
var F;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(F = F || (F = {}));

// ../node_modules/comment-parser/es6/util.js
function Ct(e) {
  return /^\s+$/.test(e);
}
r(Ct, "isSpace");
function Yi(e) {
  let n = e.match(/\r+$/);
  return n == null ? ["", e] : [e.slice(-n[0].length), e.slice(0, -n[0].length)];
}
r(Yi, "splitCR");
function V(e) {
  let n = e.match(/^\s+/);
  return n == null ? ["", e] : [e.slice(0, n[0].length), e.slice(n[0].length)];
}
r(V, "splitSpace");
function Hi(e) {
  return e.split(/\n/);
}
r(Hi, "splitLines");
function zi(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, e);
}
r(zi, "seedSpec");
function Ut(e = {}) {
  return Object.assign({ start: "", delimiter: "", postDelimiter: "", tag: "", postTag: "", name: "", postName: "", type: "", postType: "", description: "",
  end: "", lineEnd: "" }, e);
}
r(Ut, "seedTokens");

// ../node_modules/comment-parser/es6/parser/block-parser.js
var Sm = /^@\S+/;
function Mt({ fence: e = "```" } = {}) {
  let n = Em(e), a = /* @__PURE__ */ r((s, p) => n(s) ? !p : p, "toggleFence");
  return /* @__PURE__ */ r(function(p) {
    let c = [[]], y = !1;
    for (let d of p)
      Sm.test(d.tokens.description) && !y ? c.push([d]) : c[c.length - 1].push(d), y = a(d.tokens.description, y);
    return c;
  }, "parseBlock");
}
r(Mt, "getParser");
function Em(e) {
  return typeof e == "string" ? (n) => n.split(e).length % 2 === 0 : e;
}
r(Em, "getFencer");

// ../node_modules/comment-parser/es6/parser/source-parser.js
function Vt({ startLine: e = 0, markers: n = F } = {}) {
  let a = null, s = e;
  return /* @__PURE__ */ r(function(c) {
    let y = c, d = Ut();
    if ([d.lineEnd, y] = Yi(y), [d.start, y] = V(y), a === null && y.startsWith(n.start) && !y.startsWith(n.nostart) && (a = [], d.delimiter =
    y.slice(0, n.start.length), y = y.slice(n.start.length), [d.postDelimiter, y] = V(y)), a === null)
      return s++, null;
    let m = y.trimRight().endsWith(n.end);
    if (d.delimiter === "" && y.startsWith(n.delim) && !y.startsWith(n.end) && (d.delimiter = n.delim, y = y.slice(n.delim.length), [d.postDelimiter,
    y] = V(y)), m) {
      let g = y.trimRight();
      d.end = y.slice(g.length - n.end.length), y = g.slice(0, -n.end.length);
    }
    if (d.description = y, a.push({ number: s, source: c, tokens: d }), s++, m) {
      let g = a.slice();
      return a = null, g;
    }
    return null;
  }, "parseSource");
}
r(Vt, "getParser");

// ../node_modules/comment-parser/es6/parser/spec-parser.js
function Kt({ tokenizers: e }) {
  return /* @__PURE__ */ r(function(a) {
    var s;
    let p = zi({ source: a });
    for (let c of e)
      if (p = c(p), !((s = p.problems[p.problems.length - 1]) === null || s === void 0) && s.critical)
        break;
    return p;
  }, "parseSpec");
}
r(Kt, "getParser");

// ../node_modules/comment-parser/es6/parser/tokenizers/tag.js
function ze() {
  return (e) => {
    let { tokens: n } = e.source[0], a = n.description.match(/\s*(@(\S+))(\s*)/);
    return a === null ? (e.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: e.source[0].number,
      critical: !0
    }), e) : (n.tag = a[1], n.postTag = a[3], n.description = n.description.slice(a[0].length), e.tag = a[2], e);
  };
}
r(ze, "tagTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/type.js
function We(e = "compact") {
  let n = Am(e);
  return (a) => {
    let s = 0, p = [];
    for (let [d, { tokens: m }] of a.source.entries()) {
      let g = "";
      if (d === 0 && m.description[0] !== "{")
        return a;
      for (let b of m.description)
        if (b === "{" && s++, b === "}" && s--, g += b, s === 0)
          break;
      if (p.push([m, g]), s === 0)
        break;
    }
    if (s !== 0)
      return a.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: a.source[0].number,
        critical: !0
      }), a;
    let c = [], y = p[0][0].postDelimiter.length;
    for (let [d, [m, g]] of p.entries())
      m.type = g, d > 0 && (m.type = m.postDelimiter.slice(y) + g, m.postDelimiter = m.postDelimiter.slice(0, y)), [m.postType, m.description] =
      V(m.description.slice(g.length)), c.push(m.type);
    return c[0] = c[0].slice(1), c[c.length - 1] = c[c.length - 1].slice(0, -1), a.type = n(c), a;
  };
}
r(We, "typeTokenizer");
var Om = /* @__PURE__ */ r((e) => e.trim(), "trim");
function Am(e) {
  return e === "compact" ? (n) => n.map(Om).join("") : e === "preserve" ? (n) => n.join(`
`) : e;
}
r(Am, "getJoiner");

// ../node_modules/comment-parser/es6/parser/tokenizers/name.js
var Nm = /* @__PURE__ */ r((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function Xe() {
  let e = /* @__PURE__ */ r((n, { tokens: a }, s) => a.type === "" ? n : s, "typeEnd");
  return (n) => {
    let { tokens: a } = n.source[n.source.reduce(e, 0)], s = a.description.trimLeft(), p = s.split('"');
    if (p.length > 1 && p[0] === "" && p.length % 2 === 1)
      return n.name = p[1], a.name = `"${p[1]}"`, [a.postName, a.description] = V(s.slice(a.name.length)), n;
    let c = 0, y = "", d = !1, m;
    for (let b of s) {
      if (c === 0 && Ct(b))
        break;
      b === "[" && c++, b === "]" && c--, y += b;
    }
    if (c !== 0)
      return n.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: n.source[0].number,
        critical: !0
      }), n;
    let g = y;
    if (y[0] === "[" && y[y.length - 1] === "]") {
      d = !0, y = y.slice(1, -1);
      let b = y.split("=");
      if (y = b[0].trim(), b[1] !== void 0 && (m = b.slice(1).join("=").trim()), y === "")
        return n.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: n.source[0].number,
          critical: !0
        }), n;
      if (m === "")
        return n.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: n.source[0].number,
          critical: !0
        }), n;
      if (!Nm(m) && /=(?!>)/.test(m))
        return n.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: n.source[0].number,
          critical: !0
        }), n;
    }
    return n.optional = d, n.name = y, a.name = g, m !== void 0 && (n.default = m), [a.postName, a.description] = V(s.slice(a.name.length)),
    n;
  };
}
r(Xe, "nameTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/description.js
function Qe(e = "compact", n = F) {
  let a = Bt(e);
  return (s) => (s.description = a(s.source, n), s);
}
r(Qe, "descriptionTokenizer");
function Bt(e) {
  return e === "compact" ? _m : e === "preserve" ? Im : e;
}
r(Bt, "getJoiner");
function _m(e, n = F) {
  return e.map(({ tokens: { description: a } }) => a.trim()).filter((a) => a !== "").join(" ");
}
r(_m, "compactJoiner");
var Dm = /* @__PURE__ */ r((e, { tokens: n }, a) => n.type === "" ? e : a, "lineNo"), qm = /* @__PURE__ */ r(({ tokens: e }) => (e.delimiter ===
"" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function Im(e, n = F) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === n.start && (e = e.slice(1));
  let a = e[e.length - 1];
  return a !== void 0 && a.tokens.description === "" && a.tokens.end.endsWith(n.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(Dm, 0)), e.
  map(qm).join(`
`);
}
r(Im, "preserveJoiner");

// ../node_modules/comment-parser/es6/parser/index.js
function $t({ startLine: e = 0, fence: n = "```", spacing: a = "compact", markers: s = F, tokenizers: p = [
  ze(),
  We(a),
  Xe(),
  Qe(a)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let c = Vt({ startLine: e, markers: s }), y = Mt({ fence: n }), d = Kt({ tokenizers: p }), m = Bt(a);
  return function(g) {
    let b = [];
    for (let A of Hi(g)) {
      let J = c(A);
      if (J === null)
        continue;
      let v = y(J), N = v.slice(1).map(d);
      b.push({
        description: m(v[0], s),
        tags: N,
        source: J,
        problems: N.reduce((q, R) => q.concat(R.problems), [])
      });
    }
    return b;
  };
}
r($t, "getParser");

// ../node_modules/comment-parser/es6/stringifier/index.js
function Rm(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.
  lineEnd;
}
r(Rm, "join");
function Gt() {
  return (e) => e.source.map(({ tokens: n }) => Rm(n)).join(`
`);
}
r(Gt, "getStringifier");

// ../node_modules/comment-parser/es6/stringifier/inspect.js
var jm = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
var Dv = Object.keys(jm);

// ../node_modules/comment-parser/es6/index.js
function Wi(e, n = {}) {
  return $t(n)(e);
}
r(Wi, "parse");
var Qv = Gt();

// src/docs-tools/argTypes/jsdocParser.ts
var de = pr(Qi(), 1);
function Fm(e) {
  return e != null && e.includes("@");
}
r(Fm, "containsJsDoc");
function Lm(e) {
  let s = `/**
` + (e ?? "").split(`
`).map((c) => ` * ${c}`).join(`
`) + `
*/`, p = Wi(s, {
    spacing: "preserve"
  });
  if (!p || p.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return p[0];
}
r(Lm, "parse");
var km = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, Zi = /* @__PURE__ */ r((e, n = km) => {
  if (!Fm(e))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let a = Lm(e), s = Cm(a, n.tags);
  return s.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: a.description.trim(),
    extractedTags: s
  };
}, "parseJsDoc");
function Cm(e, n) {
  let a = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: !1
  };
  for (let s of e.tags)
    if (!(n !== void 0 && !n.includes(s.tag)))
      if (s.tag === "ignore") {
        a.ignore = !0;
        break;
      } else
        switch (s.tag) {
          case "param":
          case "arg":
          case "argument": {
            let p = Mm(s);
            p != null && (a.params == null && (a.params = []), a.params.push(p));
            break;
          }
          case "deprecated": {
            let p = Vm(s);
            p != null && (a.deprecated = p);
            break;
          }
          case "returns": {
            let p = Km(s);
            p != null && (a.returns = p);
            break;
          }
          default:
            break;
        }
  return a;
}
r(Cm, "extractJsDocTags");
function Um(e) {
  return e.replace(/[\.-]$/, "");
}
r(Um, "normaliseParamName");
function Mm(e) {
  if (!e.name || e.name === "-")
    return null;
  let n = rs(e.type);
  return {
    name: e.name,
    type: n,
    description: ts(e.description),
    getPrettyName: /* @__PURE__ */ r(() => Um(e.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ r(() => n ? ns(n) : null, "getTypeName")
  };
}
r(Mm, "extractParam");
function Vm(e) {
  return e.name ? es(e.name, e.description) : null;
}
r(Vm, "extractDeprecated");
function es(e, n) {
  let a = e === "" ? n : `${e} ${n}`;
  return ts(a);
}
r(es, "joinNameAndDescription");
function ts(e) {
  let n = e.replace(/^- /g, "").trim();
  return n === "" ? null : n;
}
r(ts, "normaliseDescription");
function Km(e) {
  let n = rs(e.type);
  return n ? {
    type: n,
    description: es(e.name, e.description),
    getTypeName: /* @__PURE__ */ r(() => ns(n), "getTypeName")
  } : null;
}
r(Km, "extractReturns");
var z = (0, de.stringifyRules)(), Bm = z.JsdocTypeObject;
z.JsdocTypeAny = () => "any";
z.JsdocTypeObject = (e, n) => `(${Bm(e, n)})`;
z.JsdocTypeOptional = (e, n) => n(e.element);
z.JsdocTypeNullable = (e, n) => n(e.element);
z.JsdocTypeNotNullable = (e, n) => n(e.element);
z.JsdocTypeUnion = (e, n) => e.elements.map(n).join("|");
function rs(e) {
  try {
    return (0, de.parse)(e, "typescript");
  } catch {
    return null;
  }
}
r(rs, "extractType");
function ns(e) {
  return (0, de.transform)(z, e);
}
r(ns, "extractTypeName");

// src/docs-tools/argTypes/utils.ts
var sw = 90, pw = 50;
function Ht(e) {
  return e.length > 90;
}
r(Ht, "isTooLongForTypeSummary");
function os(e) {
  return e.length > 50;
}
r(os, "isTooLongForDefaultValueSummary");
function O(e, n) {
  return e === n ? { summary: e } : { summary: e, detail: n };
}
r(O, "createSummaryValue");
var cw = /* @__PURE__ */ r((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines");

// src/docs-tools/argTypes/docgen/flow/createType.ts
function as({ name: e, value: n, elements: a, raw: s }) {
  return n ?? (a != null ? a.map(as).join(" | ") : s ?? e);
}
r(as, "generateUnionElement");
function $m({ name: e, raw: n, elements: a }) {
  return a != null ? O(a.map(as).join(" | ")) : n != null ? O(n.replace(/^\|\s*/, "")) : O(e);
}
r($m, "generateUnion");
function Gm({ type: e, raw: n }) {
  return n != null ? O(n) : O(e);
}
r(Gm, "generateFuncSignature");
function Ym({ type: e, raw: n }) {
  return n != null ? Ht(n) ? O(e, n) : O(n) : O(e);
}
r(Ym, "generateObjectSignature");
function Hm(e) {
  let { type: n } = e;
  return n === "object" ? Ym(e) : Gm(e);
}
r(Hm, "generateSignature");
function zm({ name: e, raw: n }) {
  return n != null ? Ht(n) ? O(e, n) : O(n) : O(e);
}
r(zm, "generateDefault");
function is(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return $m(e);
    case "signature":
      return Hm(e);
    default:
      return zm(e);
  }
}
r(is, "createType");

// src/docs-tools/argTypes/docgen/flow/createDefaultValue.ts
function ss(e, n) {
  if (e != null) {
    let { value: a } = e;
    if (!ye(a))
      return os(a) ? O(n?.name, a) : O(a);
  }
  return null;
}
r(ss, "createDefaultValue");

// src/docs-tools/argTypes/docgen/flow/createPropDef.ts
var ps = /* @__PURE__ */ r((e, n) => {
  let { flowType: a, description: s, required: p, defaultValue: c } = n;
  return {
    name: e,
    type: is(a),
    required: p,
    description: s,
    defaultValue: ss(c ?? null, a ?? null)
  };
}, "createFlowPropDef");

// src/docs-tools/argTypes/docgen/typeScript/createType.ts
function cs({ tsType: e, required: n }) {
  if (e == null)
    return null;
  let a = e.name;
  return n || (a = a.replace(" | undefined", "")), O(
    ["Array", "Record", "signature"].includes(e.name) ? e.raw : a
  );
}
r(cs, "createType");

// src/docs-tools/argTypes/docgen/typeScript/createDefaultValue.ts
function us({ defaultValue: e }) {
  if (e != null) {
    let { value: n } = e;
    if (!ye(n))
      return O(n);
  }
  return null;
}
r(us, "createDefaultValue");

// src/docs-tools/argTypes/docgen/typeScript/createPropDef.ts
var ls = /* @__PURE__ */ r((e, n) => {
  let { description: a, required: s } = n;
  return {
    name: e,
    type: cs(n),
    required: s,
    description: a,
    defaultValue: us(n)
  };
}, "createTsPropDef");

// src/docs-tools/argTypes/docgen/createPropDef.ts
function Wm(e) {
  return e != null ? O(e.name) : null;
}
r(Wm, "createType");
function Xm(e) {
  let { computed: n, func: a } = e;
  return typeof n > "u" && typeof a > "u";
}
r(Xm, "isReactDocgenTypescript");
function Qm(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: n }) => typeof n == "string" && n[0] === '"' && n[n.length - 1] === '"'
  ) : !1 : !1;
}
r(Qm, "isStringValued");
function Zm(e, n) {
  if (e != null) {
    let { value: a } = e;
    if (!ye(a))
      return Xm(e) && Qm(n) ? O(JSON.stringify(a)) : O(a);
  }
  return null;
}
r(Zm, "createDefaultValue");
function fs(e, n, a) {
  let { description: s, required: p, defaultValue: c } = a;
  return {
    name: e,
    type: Wm(n),
    required: p,
    description: s,
    defaultValue: Zm(c, n)
  };
}
r(fs, "createBasicPropDef");
function et(e, n) {
  if (n?.includesJsDoc) {
    let { description: a, extractedTags: s } = n;
    a != null && (e.description = n.description);
    let p = {
      ...s,
      params: s?.params?.map(
        (c) => ({
          name: c.getPrettyName(),
          description: c.description
        })
      )
    };
    Object.values(p).filter(Boolean).length > 0 && (e.jsDocTags = p);
  }
  return e;
}
r(et, "applyJsDocResult");
var eT = /* @__PURE__ */ r((e, n, a) => {
  let s = fs(e, n.type, n);
  return s.sbType = He(n), et(s, a);
}, "javaScriptFactory"), tT = /* @__PURE__ */ r((e, n, a) => {
  let s = ls(e, n);
  return s.sbType = He(n), et(s, a);
}, "tsFactory"), rT = /* @__PURE__ */ r((e, n, a) => {
  let s = ps(e, n);
  return s.sbType = He(n), et(s, a);
}, "flowFactory"), nT = /* @__PURE__ */ r((e, n, a) => {
  let s = fs(e, { name: "unknown" }, n);
  return et(s, a);
}, "unknownFactory"), zt = /* @__PURE__ */ r((e) => {
  switch (e) {
    case "JavaScript":
      return eT;
    case "TypeScript":
      return tT;
    case "Flow":
      return rT;
    default:
      return nT;
  }
}, "getPropDefFactory");

// src/docs-tools/argTypes/docgen/extractDocgenProps.ts
var ys = /* @__PURE__ */ r((e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
"getTypeSystem"), oT = /* @__PURE__ */ r((e) => {
  let n = ys(e[0]), a = zt(n);
  return e.map((s) => {
    let p = s;
    return s.type?.elements && (p = {
      ...s,
      type: {
        ...s.type,
        value: s.type.elements
      }
    }), ds(p.name, p, n, a);
  });
}, "extractComponentSectionArray"), aT = /* @__PURE__ */ r((e) => {
  let n = Object.keys(e), a = ys(e[n[0]]), s = zt(a);
  return n.map((p) => {
    let c = e[p];
    return c != null ? ds(p, c, a, s) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject"), Bw = /* @__PURE__ */ r((e, n) => {
  let a = $i(e, n);
  return Bi(a) ? Array.isArray(a) ? oT(a) : aT(a) : [];
}, "extractComponentProps");
function ds(e, n, a, s) {
  let p = Zi(n.description);
  return p.includesJsDoc && p.ignore ? null : {
    propDef: s(e, n, p),
    jsDocTags: p.extractedTags,
    docgenInfo: n,
    typeSystem: a
  };
}
r(ds, "extractProp");
function $w(e) {
  return e != null ? Gi(e) : "";
}
r($w, "extractComponentDescription");

// src/docs-tools/argTypes/enhanceArgTypes.ts
import { combineParameters as iT } from "@storybook/core/preview-api";
var zw = /* @__PURE__ */ r((e) => {
  let {
    component: n,
    argTypes: a,
    parameters: { docs: s = {} }
  } = e, { extractArgTypes: p } = s, c = p && n ? p(n) : {};
  return c ? iT(c, a) : a;
}, "enhanceArgTypes");

// src/docs-tools/shared.ts
var ms = "storybook/docs", Qw = `${ms}/panel`, Zw = "docs", eP = `${ms}/snippet-rendered`, sT = /* @__PURE__ */ ((s) => (s.AUTO = "auto", s.
CODE = "code", s.DYNAMIC = "dynamic", s))(sT || {});

// src/docs-tools/hasDocsOrControls.ts
var pT = /(addons\/|addon-|addon-essentials\/)(docs|controls)/, rP = /* @__PURE__ */ r((e) => e.presetsList?.some((n) => pT.test(n.name)), "\
hasDocsOrControls");
export {
  ms as ADDON_ID,
  pw as MAX_DEFAULT_VALUE_SUMMARY_LENGTH,
  sw as MAX_TYPE_SUMMARY_LENGTH,
  Qw as PANEL_ID,
  Zw as PARAM_KEY,
  eP as SNIPPET_RENDERED,
  sT as SourceType,
  Pm as TypeSystem,
  He as convert,
  O as createSummaryValue,
  zw as enhanceArgTypes,
  $w as extractComponentDescription,
  Bw as extractComponentProps,
  oT as extractComponentSectionArray,
  aT as extractComponentSectionObject,
  Gi as getDocgenDescription,
  $i as getDocgenSection,
  Ki as hasDocgen,
  rP as hasDocsOrControls,
  ye as isDefaultValueBlacklisted,
  os as isTooLongForDefaultValueSummary,
  Ht as isTooLongForTypeSummary,
  Bi as isValidDocgenSection,
  cw as normalizeNewlines,
  Zi as parseJsDoc,
  Vi as str
};
