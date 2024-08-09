"use strict";
var Qs = Object.create;
var ge = Object.defineProperty;
var Zs = Object.getOwnPropertyDescriptor;
var ep = Object.getOwnPropertyNames;
var tp = Object.getPrototypeOf, rp = Object.prototype.hasOwnProperty;
var r = (e, n) => ge(e, "name", { value: n, configurable: !0 });
var l = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), np = (e, n) => {
  for (var a in n)
    ge(e, a, { get: n[a], enumerable: !0 });
}, lr = (e, n, a, s) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let p of ep(n))
      !rp.call(e, p) && p !== a && ge(e, p, { get: () => n[p], enumerable: !(s = Zs(n, p)) || s.enumerable });
  return e;
};
var fr = (e, n, a) => (a = e != null ? Qs(tp(e)) : {}, lr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  n || !e || !e.__esModule ? ge(a, "default", { value: e, enumerable: !0 }) : a,
  e
)), op = (e) => lr(ge({}, "__esModule", { value: !0 }), e);

// ../node_modules/lodash/_freeGlobal.js
var ut = l((ST, Tr) => {
  var lp = typeof global == "object" && global && global.Object === Object && global;
  Tr.exports = lp;
});

// ../node_modules/lodash/_root.js
var L = l((ET, gr) => {
  var fp = ut(), yp = typeof self == "object" && self && self.Object === Object && self, dp = fp || yp || Function("return this")();
  gr.exports = dp;
});

// ../node_modules/lodash/_Symbol.js
var he = l((OT, hr) => {
  var mp = L(), Tp = mp.Symbol;
  hr.exports = Tp;
});

// ../node_modules/lodash/_getRawTag.js
var wr = l((AT, vr) => {
  var xr = he(), br = Object.prototype, gp = br.hasOwnProperty, hp = br.toString, xe = xr ? xr.toStringTag : void 0;
  function xp(e) {
    var n = gp.call(e, xe), a = e[xe];
    try {
      e[xe] = void 0;
      var s = !0;
    } catch {
    }
    var p = hp.call(e);
    return s && (n ? e[xe] = a : delete e[xe]), p;
  }
  r(xp, "getRawTag");
  vr.exports = xp;
});

// ../node_modules/lodash/_objectToString.js
var Jr = l((NT, Pr) => {
  var bp = Object.prototype, vp = bp.toString;
  function wp(e) {
    return vp.call(e);
  }
  r(wp, "objectToString");
  Pr.exports = wp;
});

// ../node_modules/lodash/_baseGetTag.js
var ne = l((qT, Or) => {
  var Sr = he(), Pp = wr(), Jp = Jr(), Sp = "[object Null]", Ep = "[object Undefined]", Er = Sr ? Sr.toStringTag : void 0;
  function Op(e) {
    return e == null ? e === void 0 ? Ep : Sp : Er && Er in Object(e) ? Pp(e) : Jp(e);
  }
  r(Op, "baseGetTag");
  Or.exports = Op;
});

// ../node_modules/lodash/isObject.js
var Le = l((RT, Ar) => {
  function Ap(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  r(Ap, "isObject");
  Ar.exports = Ap;
});

// ../node_modules/lodash/isFunction.js
var lt = l((FT, _r) => {
  var _p = ne(), Np = Le(), Dp = "[object AsyncFunction]", qp = "[object Function]", Ip = "[object GeneratorFunction]", Rp = "[object Proxy]";
  function jp(e) {
    if (!Np(e))
      return !1;
    var n = _p(e);
    return n == qp || n == Ip || n == Dp || n == Rp;
  }
  r(jp, "isFunction");
  _r.exports = jp;
});

// ../node_modules/lodash/_coreJsData.js
var Dr = l((kT, Nr) => {
  var Fp = L(), Lp = Fp["__core-js_shared__"];
  Nr.exports = Lp;
});

// ../node_modules/lodash/_isMasked.js
var Rr = l((CT, Ir) => {
  var ft = Dr(), qr = function() {
    var e = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function kp(e) {
    return !!qr && qr in e;
  }
  r(kp, "isMasked");
  Ir.exports = kp;
});

// ../node_modules/lodash/_toSource.js
var yt = l((MT, jr) => {
  var Cp = Function.prototype, Up = Cp.toString;
  function Mp(e) {
    if (e != null) {
      try {
        return Up.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  r(Mp, "toSource");
  jr.exports = Mp;
});

// ../node_modules/lodash/_baseIsNative.js
var Lr = l((KT, Fr) => {
  var Vp = lt(), Kp = Rr(), Bp = Le(), $p = yt(), Gp = /[\\^$.*+?()[\]{}|]/g, Yp = /^\[object .+?Constructor\]$/, Hp = Function.prototype, zp = Object.
  prototype, Wp = Hp.toString, Xp = zp.hasOwnProperty, Qp = RegExp(
    "^" + Wp.call(Xp).replace(Gp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function Zp(e) {
    if (!Bp(e) || Kp(e))
      return !1;
    var n = Vp(e) ? Qp : Yp;
    return n.test($p(e));
  }
  r(Zp, "baseIsNative");
  Fr.exports = Zp;
});

// ../node_modules/lodash/_getValue.js
var Cr = l(($T, kr) => {
  function ec(e, n) {
    return e?.[n];
  }
  r(ec, "getValue");
  kr.exports = ec;
});

// ../node_modules/lodash/_getNative.js
var H = l((YT, Ur) => {
  var tc = Lr(), rc = Cr();
  function nc(e, n) {
    var a = rc(e, n);
    return tc(a) ? a : void 0;
  }
  r(nc, "getNative");
  Ur.exports = nc;
});

// ../node_modules/lodash/_defineProperty.js
var Vr = l((zT, Mr) => {
  var oc = H(), ac = function() {
    try {
      var e = oc(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  Mr.exports = ac;
});

// ../node_modules/lodash/_baseAssignValue.js
var $r = l((WT, Br) => {
  var Kr = Vr();
  function ic(e, n, a) {
    n == "__proto__" && Kr ? Kr(e, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : e[n] = a;
  }
  r(ic, "baseAssignValue");
  Br.exports = ic;
});

// ../node_modules/lodash/_createBaseFor.js
var Yr = l((QT, Gr) => {
  function sc(e) {
    return function(n, a, s) {
      for (var p = -1, c = Object(n), y = s(n), d = y.length; d--; ) {
        var m = y[e ? d : ++p];
        if (a(c[m], m, c) === !1)
          break;
      }
      return n;
    };
  }
  r(sc, "createBaseFor");
  Gr.exports = sc;
});

// ../node_modules/lodash/_baseFor.js
var zr = l((eg, Hr) => {
  var pc = Yr(), cc = pc();
  Hr.exports = cc;
});

// ../node_modules/lodash/_baseTimes.js
var Xr = l((tg, Wr) => {
  function uc(e, n) {
    for (var a = -1, s = Array(e); ++a < e; )
      s[a] = n(a);
    return s;
  }
  r(uc, "baseTimes");
  Wr.exports = uc;
});

// ../node_modules/lodash/isObjectLike.js
var oe = l((ng, Qr) => {
  function lc(e) {
    return e != null && typeof e == "object";
  }
  r(lc, "isObjectLike");
  Qr.exports = lc;
});

// ../node_modules/lodash/_baseIsArguments.js
var en = l((ag, Zr) => {
  var fc = ne(), yc = oe(), dc = "[object Arguments]";
  function mc(e) {
    return yc(e) && fc(e) == dc;
  }
  r(mc, "baseIsArguments");
  Zr.exports = mc;
});

// ../node_modules/lodash/isArguments.js
var dt = l((sg, nn) => {
  var tn = en(), Tc = oe(), rn = Object.prototype, gc = rn.hasOwnProperty, hc = rn.propertyIsEnumerable, xc = tn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? tn : function(e) {
    return Tc(e) && gc.call(e, "callee") && !hc.call(e, "callee");
  };
  nn.exports = xc;
});

// ../node_modules/lodash/isArray.js
var M = l((pg, on) => {
  var bc = Array.isArray;
  on.exports = bc;
});

// ../node_modules/lodash/stubFalse.js
var sn = l((cg, an) => {
  function vc() {
    return !1;
  }
  r(vc, "stubFalse");
  an.exports = vc;
});

// ../node_modules/lodash/isBuffer.js
var mt = l((be, ae) => {
  var wc = L(), Pc = sn(), un = typeof be == "object" && be && !be.nodeType && be, pn = un && typeof ae == "object" && ae && !ae.nodeType &&
  ae, Jc = pn && pn.exports === un, cn = Jc ? wc.Buffer : void 0, Sc = cn ? cn.isBuffer : void 0, Ec = Sc || Pc;
  ae.exports = Ec;
});

// ../node_modules/lodash/_isIndex.js
var Tt = l((lg, ln) => {
  var Oc = 9007199254740991, Ac = /^(?:0|[1-9]\d*)$/;
  function _c(e, n) {
    var a = typeof e;
    return n = n ?? Oc, !!n && (a == "number" || a != "symbol" && Ac.test(e)) && e > -1 && e % 1 == 0 && e < n;
  }
  r(_c, "isIndex");
  ln.exports = _c;
});

// ../node_modules/lodash/isLength.js
var ke = l((yg, fn) => {
  var Nc = 9007199254740991;
  function Dc(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Nc;
  }
  r(Dc, "isLength");
  fn.exports = Dc;
});

// ../node_modules/lodash/_baseIsTypedArray.js
var dn = l((mg, yn) => {
  var qc = ne(), Ic = ke(), Rc = oe(), jc = "[object Arguments]", Fc = "[object Array]", Lc = "[object Boolean]", kc = "[object Date]", Cc = "\
[object Error]", Uc = "[object Function]", Mc = "[object Map]", Vc = "[object Number]", Kc = "[object Object]", Bc = "[object RegExp]", $c = "\
[object Set]", Gc = "[object String]", Yc = "[object WeakMap]", Hc = "[object ArrayBuffer]", zc = "[object DataView]", Wc = "[object Float32\
Array]", Xc = "[object Float64Array]", Qc = "[object Int8Array]", Zc = "[object Int16Array]", eu = "[object Int32Array]", tu = "[object Uint\
8Array]", ru = "[object Uint8ClampedArray]", nu = "[object Uint16Array]", ou = "[object Uint32Array]", E = {};
  E[Wc] = E[Xc] = E[Qc] = E[Zc] = E[eu] = E[tu] = E[ru] = E[nu] = E[ou] = !0;
  E[jc] = E[Fc] = E[Hc] = E[Lc] = E[zc] = E[kc] = E[Cc] = E[Uc] = E[Mc] = E[Vc] = E[Kc] = E[Bc] = E[$c] = E[Gc] = E[Yc] = !1;
  function au(e) {
    return Rc(e) && Ic(e.length) && !!E[qc(e)];
  }
  r(au, "baseIsTypedArray");
  yn.exports = au;
});

// ../node_modules/lodash/_baseUnary.js
var Tn = l((gg, mn) => {
  function iu(e) {
    return function(n) {
      return e(n);
    };
  }
  r(iu, "baseUnary");
  mn.exports = iu;
});

// ../node_modules/lodash/_nodeUtil.js
var hn = l((ve, ie) => {
  var su = ut(), gn = typeof ve == "object" && ve && !ve.nodeType && ve, we = gn && typeof ie == "object" && ie && !ie.nodeType && ie, pu = we &&
  we.exports === gn, gt = pu && su.process, cu = function() {
    try {
      var e = we && we.require && we.require("util").types;
      return e || gt && gt.binding && gt.binding("util");
    } catch {
    }
  }();
  ie.exports = cu;
});

// ../node_modules/lodash/isTypedArray.js
var ht = l((xg, vn) => {
  var uu = dn(), lu = Tn(), xn = hn(), bn = xn && xn.isTypedArray, fu = bn ? lu(bn) : uu;
  vn.exports = fu;
});

// ../node_modules/lodash/_arrayLikeKeys.js
var Pn = l((bg, wn) => {
  var yu = Xr(), du = dt(), mu = M(), Tu = mt(), gu = Tt(), hu = ht(), xu = Object.prototype, bu = xu.hasOwnProperty;
  function vu(e, n) {
    var a = mu(e), s = !a && du(e), p = !a && !s && Tu(e), c = !a && !s && !p && hu(e), y = a || s || p || c, d = y ? yu(e.length, String) :
    [], m = d.length;
    for (var g in e)
      (n || bu.call(e, g)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      c && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
      gu(g, m))) && d.push(g);
    return d;
  }
  r(vu, "arrayLikeKeys");
  wn.exports = vu;
});

// ../node_modules/lodash/_isPrototype.js
var Sn = l((wg, Jn) => {
  var wu = Object.prototype;
  function Pu(e) {
    var n = e && e.constructor, a = typeof n == "function" && n.prototype || wu;
    return e === a;
  }
  r(Pu, "isPrototype");
  Jn.exports = Pu;
});

// ../node_modules/lodash/_overArg.js
var On = l((Jg, En) => {
  function Ju(e, n) {
    return function(a) {
      return e(n(a));
    };
  }
  r(Ju, "overArg");
  En.exports = Ju;
});

// ../node_modules/lodash/_nativeKeys.js
var _n = l((Eg, An) => {
  var Su = On(), Eu = Su(Object.keys, Object);
  An.exports = Eu;
});

// ../node_modules/lodash/_baseKeys.js
var Dn = l((Og, Nn) => {
  var Ou = Sn(), Au = _n(), _u = Object.prototype, Nu = _u.hasOwnProperty;
  function Du(e) {
    if (!Ou(e))
      return Au(e);
    var n = [];
    for (var a in Object(e))
      Nu.call(e, a) && a != "constructor" && n.push(a);
    return n;
  }
  r(Du, "baseKeys");
  Nn.exports = Du;
});

// ../node_modules/lodash/isArrayLike.js
var In = l((_g, qn) => {
  var qu = lt(), Iu = ke();
  function Ru(e) {
    return e != null && Iu(e.length) && !qu(e);
  }
  r(Ru, "isArrayLike");
  qn.exports = Ru;
});

// ../node_modules/lodash/keys.js
var Ce = l((Dg, Rn) => {
  var ju = Pn(), Fu = Dn(), Lu = In();
  function ku(e) {
    return Lu(e) ? ju(e) : Fu(e);
  }
  r(ku, "keys");
  Rn.exports = ku;
});

// ../node_modules/lodash/_baseForOwn.js
var Fn = l((Ig, jn) => {
  var Cu = zr(), Uu = Ce();
  function Mu(e, n) {
    return e && Cu(e, n, Uu);
  }
  r(Mu, "baseForOwn");
  jn.exports = Mu;
});

// ../node_modules/lodash/_listCacheClear.js
var kn = l((jg, Ln) => {
  function Vu() {
    this.__data__ = [], this.size = 0;
  }
  r(Vu, "listCacheClear");
  Ln.exports = Vu;
});

// ../node_modules/lodash/eq.js
var xt = l((Lg, Cn) => {
  function Ku(e, n) {
    return e === n || e !== e && n !== n;
  }
  r(Ku, "eq");
  Cn.exports = Ku;
});

// ../node_modules/lodash/_assocIndexOf.js
var Pe = l((Cg, Un) => {
  var Bu = xt();
  function $u(e, n) {
    for (var a = e.length; a--; )
      if (Bu(e[a][0], n))
        return a;
    return -1;
  }
  r($u, "assocIndexOf");
  Un.exports = $u;
});

// ../node_modules/lodash/_listCacheDelete.js
var Vn = l((Mg, Mn) => {
  var Gu = Pe(), Yu = Array.prototype, Hu = Yu.splice;
  function zu(e) {
    var n = this.__data__, a = Gu(n, e);
    if (a < 0)
      return !1;
    var s = n.length - 1;
    return a == s ? n.pop() : Hu.call(n, a, 1), --this.size, !0;
  }
  r(zu, "listCacheDelete");
  Mn.exports = zu;
});

// ../node_modules/lodash/_listCacheGet.js
var Bn = l((Kg, Kn) => {
  var Wu = Pe();
  function Xu(e) {
    var n = this.__data__, a = Wu(n, e);
    return a < 0 ? void 0 : n[a][1];
  }
  r(Xu, "listCacheGet");
  Kn.exports = Xu;
});

// ../node_modules/lodash/_listCacheHas.js
var Gn = l(($g, $n) => {
  var Qu = Pe();
  function Zu(e) {
    return Qu(this.__data__, e) > -1;
  }
  r(Zu, "listCacheHas");
  $n.exports = Zu;
});

// ../node_modules/lodash/_listCacheSet.js
var Hn = l((Yg, Yn) => {
  var el = Pe();
  function tl(e, n) {
    var a = this.__data__, s = el(a, e);
    return s < 0 ? (++this.size, a.push([e, n])) : a[s][1] = n, this;
  }
  r(tl, "listCacheSet");
  Yn.exports = tl;
});

// ../node_modules/lodash/_ListCache.js
var Je = l((zg, zn) => {
  var rl = kn(), nl = Vn(), ol = Bn(), al = Gn(), il = Hn();
  function se(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(se, "ListCache");
  se.prototype.clear = rl;
  se.prototype.delete = nl;
  se.prototype.get = ol;
  se.prototype.has = al;
  se.prototype.set = il;
  zn.exports = se;
});

// ../node_modules/lodash/_stackClear.js
var Xn = l((Xg, Wn) => {
  var sl = Je();
  function pl() {
    this.__data__ = new sl(), this.size = 0;
  }
  r(pl, "stackClear");
  Wn.exports = pl;
});

// ../node_modules/lodash/_stackDelete.js
var Zn = l((Zg, Qn) => {
  function cl(e) {
    var n = this.__data__, a = n.delete(e);
    return this.size = n.size, a;
  }
  r(cl, "stackDelete");
  Qn.exports = cl;
});

// ../node_modules/lodash/_stackGet.js
var to = l((th, eo) => {
  function ul(e) {
    return this.__data__.get(e);
  }
  r(ul, "stackGet");
  eo.exports = ul;
});

// ../node_modules/lodash/_stackHas.js
var no = l((nh, ro) => {
  function ll(e) {
    return this.__data__.has(e);
  }
  r(ll, "stackHas");
  ro.exports = ll;
});

// ../node_modules/lodash/_Map.js
var Ue = l((ah, oo) => {
  var fl = H(), yl = L(), dl = fl(yl, "Map");
  oo.exports = dl;
});

// ../node_modules/lodash/_nativeCreate.js
var Se = l((ih, ao) => {
  var ml = H(), Tl = ml(Object, "create");
  ao.exports = Tl;
});

// ../node_modules/lodash/_hashClear.js
var po = l((sh, so) => {
  var io = Se();
  function gl() {
    this.__data__ = io ? io(null) : {}, this.size = 0;
  }
  r(gl, "hashClear");
  so.exports = gl;
});

// ../node_modules/lodash/_hashDelete.js
var uo = l((ch, co) => {
  function hl(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  r(hl, "hashDelete");
  co.exports = hl;
});

// ../node_modules/lodash/_hashGet.js
var fo = l((lh, lo) => {
  var xl = Se(), bl = "__lodash_hash_undefined__", vl = Object.prototype, wl = vl.hasOwnProperty;
  function Pl(e) {
    var n = this.__data__;
    if (xl) {
      var a = n[e];
      return a === bl ? void 0 : a;
    }
    return wl.call(n, e) ? n[e] : void 0;
  }
  r(Pl, "hashGet");
  lo.exports = Pl;
});

// ../node_modules/lodash/_hashHas.js
var mo = l((yh, yo) => {
  var Jl = Se(), Sl = Object.prototype, El = Sl.hasOwnProperty;
  function Ol(e) {
    var n = this.__data__;
    return Jl ? n[e] !== void 0 : El.call(n, e);
  }
  r(Ol, "hashHas");
  yo.exports = Ol;
});

// ../node_modules/lodash/_hashSet.js
var go = l((mh, To) => {
  var Al = Se(), _l = "__lodash_hash_undefined__";
  function Nl(e, n) {
    var a = this.__data__;
    return this.size += this.has(e) ? 0 : 1, a[e] = Al && n === void 0 ? _l : n, this;
  }
  r(Nl, "hashSet");
  To.exports = Nl;
});

// ../node_modules/lodash/_Hash.js
var xo = l((gh, ho) => {
  var Dl = po(), ql = uo(), Il = fo(), Rl = mo(), jl = go();
  function pe(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(pe, "Hash");
  pe.prototype.clear = Dl;
  pe.prototype.delete = ql;
  pe.prototype.get = Il;
  pe.prototype.has = Rl;
  pe.prototype.set = jl;
  ho.exports = pe;
});

// ../node_modules/lodash/_mapCacheClear.js
var wo = l((xh, vo) => {
  var bo = xo(), Fl = Je(), Ll = Ue();
  function kl() {
    this.size = 0, this.__data__ = {
      hash: new bo(),
      map: new (Ll || Fl)(),
      string: new bo()
    };
  }
  r(kl, "mapCacheClear");
  vo.exports = kl;
});

// ../node_modules/lodash/_isKeyable.js
var Jo = l((vh, Po) => {
  function Cl(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  r(Cl, "isKeyable");
  Po.exports = Cl;
});

// ../node_modules/lodash/_getMapData.js
var Ee = l((Ph, So) => {
  var Ul = Jo();
  function Ml(e, n) {
    var a = e.__data__;
    return Ul(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  r(Ml, "getMapData");
  So.exports = Ml;
});

// ../node_modules/lodash/_mapCacheDelete.js
var Oo = l((Sh, Eo) => {
  var Vl = Ee();
  function Kl(e) {
    var n = Vl(this, e).delete(e);
    return this.size -= n ? 1 : 0, n;
  }
  r(Kl, "mapCacheDelete");
  Eo.exports = Kl;
});

// ../node_modules/lodash/_mapCacheGet.js
var _o = l((Oh, Ao) => {
  var Bl = Ee();
  function $l(e) {
    return Bl(this, e).get(e);
  }
  r($l, "mapCacheGet");
  Ao.exports = $l;
});

// ../node_modules/lodash/_mapCacheHas.js
var Do = l((_h, No) => {
  var Gl = Ee();
  function Yl(e) {
    return Gl(this, e).has(e);
  }
  r(Yl, "mapCacheHas");
  No.exports = Yl;
});

// ../node_modules/lodash/_mapCacheSet.js
var Io = l((Dh, qo) => {
  var Hl = Ee();
  function zl(e, n) {
    var a = Hl(this, e), s = a.size;
    return a.set(e, n), this.size += a.size == s ? 0 : 1, this;
  }
  r(zl, "mapCacheSet");
  qo.exports = zl;
});

// ../node_modules/lodash/_MapCache.js
var Me = l((Ih, Ro) => {
  var Wl = wo(), Xl = Oo(), Ql = _o(), Zl = Do(), ef = Io();
  function ce(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  r(ce, "MapCache");
  ce.prototype.clear = Wl;
  ce.prototype.delete = Xl;
  ce.prototype.get = Ql;
  ce.prototype.has = Zl;
  ce.prototype.set = ef;
  Ro.exports = ce;
});

// ../node_modules/lodash/_stackSet.js
var Fo = l((jh, jo) => {
  var tf = Je(), rf = Ue(), nf = Me(), of = 200;
  function af(e, n) {
    var a = this.__data__;
    if (a instanceof tf) {
      var s = a.__data__;
      if (!rf || s.length < of - 1)
        return s.push([e, n]), this.size = ++a.size, this;
      a = this.__data__ = new nf(s);
    }
    return a.set(e, n), this.size = a.size, this;
  }
  r(af, "stackSet");
  jo.exports = af;
});

// ../node_modules/lodash/_Stack.js
var bt = l((Lh, Lo) => {
  var sf = Je(), pf = Xn(), cf = Zn(), uf = to(), lf = no(), ff = Fo();
  function ue(e) {
    var n = this.__data__ = new sf(e);
    this.size = n.size;
  }
  r(ue, "Stack");
  ue.prototype.clear = pf;
  ue.prototype.delete = cf;
  ue.prototype.get = uf;
  ue.prototype.has = lf;
  ue.prototype.set = ff;
  Lo.exports = ue;
});

// ../node_modules/lodash/_setCacheAdd.js
var Co = l((Ch, ko) => {
  var yf = "__lodash_hash_undefined__";
  function df(e) {
    return this.__data__.set(e, yf), this;
  }
  r(df, "setCacheAdd");
  ko.exports = df;
});

// ../node_modules/lodash/_setCacheHas.js
var Mo = l((Mh, Uo) => {
  function mf(e) {
    return this.__data__.has(e);
  }
  r(mf, "setCacheHas");
  Uo.exports = mf;
});

// ../node_modules/lodash/_SetCache.js
var Ko = l((Kh, Vo) => {
  var Tf = Me(), gf = Co(), hf = Mo();
  function Ve(e) {
    var n = -1, a = e == null ? 0 : e.length;
    for (this.__data__ = new Tf(); ++n < a; )
      this.add(e[n]);
  }
  r(Ve, "SetCache");
  Ve.prototype.add = Ve.prototype.push = gf;
  Ve.prototype.has = hf;
  Vo.exports = Ve;
});

// ../node_modules/lodash/_arraySome.js
var $o = l(($h, Bo) => {
  function xf(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length; ++a < s; )
      if (n(e[a], a, e))
        return !0;
    return !1;
  }
  r(xf, "arraySome");
  Bo.exports = xf;
});

// ../node_modules/lodash/_cacheHas.js
var Yo = l((Yh, Go) => {
  function bf(e, n) {
    return e.has(n);
  }
  r(bf, "cacheHas");
  Go.exports = bf;
});

// ../node_modules/lodash/_equalArrays.js
var vt = l((zh, Ho) => {
  var vf = Ko(), wf = $o(), Pf = Yo(), Jf = 1, Sf = 2;
  function Ef(e, n, a, s, p, c) {
    var y = a & Jf, d = e.length, m = n.length;
    if (d != m && !(y && m > d))
      return !1;
    var g = c.get(e), b = c.get(n);
    if (g && b)
      return g == n && b == e;
    var A = -1, J = !0, v = a & Sf ? new vf() : void 0;
    for (c.set(e, n), c.set(n, e); ++A < d; ) {
      var _ = e[A], q = n[A];
      if (s)
        var R = y ? s(q, _, A, n, e, c) : s(_, q, A, e, n, c);
      if (R !== void 0) {
        if (R)
          continue;
        J = !1;
        break;
      }
      if (v) {
        if (!wf(n, function(k, C) {
          if (!Pf(v, C) && (_ === k || p(_, k, a, s, c)))
            return v.push(C);
        })) {
          J = !1;
          break;
        }
      } else if (!(_ === q || p(_, q, a, s, c))) {
        J = !1;
        break;
      }
    }
    return c.delete(e), c.delete(n), J;
  }
  r(Ef, "equalArrays");
  Ho.exports = Ef;
});

// ../node_modules/lodash/_Uint8Array.js
var Wo = l((Xh, zo) => {
  var Of = L(), Af = Of.Uint8Array;
  zo.exports = Af;
});

// ../node_modules/lodash/_mapToArray.js
var Qo = l((Qh, Xo) => {
  function _f(e) {
    var n = -1, a = Array(e.size);
    return e.forEach(function(s, p) {
      a[++n] = [p, s];
    }), a;
  }
  r(_f, "mapToArray");
  Xo.exports = _f;
});

// ../node_modules/lodash/_setToArray.js
var ea = l((ex, Zo) => {
  function Nf(e) {
    var n = -1, a = Array(e.size);
    return e.forEach(function(s) {
      a[++n] = s;
    }), a;
  }
  r(Nf, "setToArray");
  Zo.exports = Nf;
});

// ../node_modules/lodash/_equalByTag.js
var aa = l((rx, oa) => {
  var ta = he(), ra = Wo(), Df = xt(), qf = vt(), If = Qo(), Rf = ea(), jf = 1, Ff = 2, Lf = "[object Boolean]", kf = "[object Date]", Cf = "\
[object Error]", Uf = "[object Map]", Mf = "[object Number]", Vf = "[object RegExp]", Kf = "[object Set]", Bf = "[object String]", $f = "[ob\
ject Symbol]", Gf = "[object ArrayBuffer]", Yf = "[object DataView]", na = ta ? ta.prototype : void 0, wt = na ? na.valueOf : void 0;
  function Hf(e, n, a, s, p, c, y) {
    switch (a) {
      case Yf:
        if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
          return !1;
        e = e.buffer, n = n.buffer;
      case Gf:
        return !(e.byteLength != n.byteLength || !c(new ra(e), new ra(n)));
      case Lf:
      case kf:
      case Mf:
        return Df(+e, +n);
      case Cf:
        return e.name == n.name && e.message == n.message;
      case Vf:
      case Bf:
        return e == n + "";
      case Uf:
        var d = If;
      case Kf:
        var m = s & jf;
        if (d || (d = Rf), e.size != n.size && !m)
          return !1;
        var g = y.get(e);
        if (g)
          return g == n;
        s |= Ff, y.set(e, n);
        var b = qf(d(e), d(n), s, p, c, y);
        return y.delete(e), b;
      case $f:
        if (wt)
          return wt.call(e) == wt.call(n);
    }
    return !1;
  }
  r(Hf, "equalByTag");
  oa.exports = Hf;
});

// ../node_modules/lodash/_arrayPush.js
var sa = l((ox, ia) => {
  function zf(e, n) {
    for (var a = -1, s = n.length, p = e.length; ++a < s; )
      e[p + a] = n[a];
    return e;
  }
  r(zf, "arrayPush");
  ia.exports = zf;
});

// ../node_modules/lodash/_baseGetAllKeys.js
var ca = l((ix, pa) => {
  var Wf = sa(), Xf = M();
  function Qf(e, n, a) {
    var s = n(e);
    return Xf(e) ? s : Wf(s, a(e));
  }
  r(Qf, "baseGetAllKeys");
  pa.exports = Qf;
});

// ../node_modules/lodash/_arrayFilter.js
var la = l((px, ua) => {
  function Zf(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, p = 0, c = []; ++a < s; ) {
      var y = e[a];
      n(y, a, e) && (c[p++] = y);
    }
    return c;
  }
  r(Zf, "arrayFilter");
  ua.exports = Zf;
});

// ../node_modules/lodash/stubArray.js
var ya = l((ux, fa) => {
  function ey() {
    return [];
  }
  r(ey, "stubArray");
  fa.exports = ey;
});

// ../node_modules/lodash/_getSymbols.js
var Ta = l((fx, ma) => {
  var ty = la(), ry = ya(), ny = Object.prototype, oy = ny.propertyIsEnumerable, da = Object.getOwnPropertySymbols, ay = da ? function(e) {
    return e == null ? [] : (e = Object(e), ty(da(e), function(n) {
      return oy.call(e, n);
    }));
  } : ry;
  ma.exports = ay;
});

// ../node_modules/lodash/_getAllKeys.js
var ha = l((yx, ga) => {
  var iy = ca(), sy = Ta(), py = Ce();
  function cy(e) {
    return iy(e, py, sy);
  }
  r(cy, "getAllKeys");
  ga.exports = cy;
});

// ../node_modules/lodash/_equalObjects.js
var va = l((mx, ba) => {
  var xa = ha(), uy = 1, ly = Object.prototype, fy = ly.hasOwnProperty;
  function yy(e, n, a, s, p, c) {
    var y = a & uy, d = xa(e), m = d.length, g = xa(n), b = g.length;
    if (m != b && !y)
      return !1;
    for (var A = m; A--; ) {
      var J = d[A];
      if (!(y ? J in n : fy.call(n, J)))
        return !1;
    }
    var v = c.get(e), _ = c.get(n);
    if (v && _)
      return v == n && _ == e;
    var q = !0;
    c.set(e, n), c.set(n, e);
    for (var R = y; ++A < m; ) {
      J = d[A];
      var k = e[J], C = n[J];
      if (s)
        var K = y ? s(C, k, J, n, e, c) : s(k, C, J, e, n, c);
      if (!(K === void 0 ? k === C || p(k, C, a, s, c) : K)) {
        q = !1;
        break;
      }
      R || (R = J == "constructor");
    }
    if (q && !R) {
      var w = e.constructor, B = n.constructor;
      w != B && "constructor" in e && "constructor" in n && !(typeof w == "function" && w instanceof w && typeof B == "function" && B instanceof
      B) && (q = !1);
    }
    return c.delete(e), c.delete(n), q;
  }
  r(yy, "equalObjects");
  ba.exports = yy;
});

// ../node_modules/lodash/_DataView.js
var Pa = l((gx, wa) => {
  var dy = H(), my = L(), Ty = dy(my, "DataView");
  wa.exports = Ty;
});

// ../node_modules/lodash/_Promise.js
var Sa = l((hx, Ja) => {
  var gy = H(), hy = L(), xy = gy(hy, "Promise");
  Ja.exports = xy;
});

// ../node_modules/lodash/_Set.js
var Oa = l((xx, Ea) => {
  var by = H(), vy = L(), wy = by(vy, "Set");
  Ea.exports = wy;
});

// ../node_modules/lodash/_WeakMap.js
var _a = l((bx, Aa) => {
  var Py = H(), Jy = L(), Sy = Py(Jy, "WeakMap");
  Aa.exports = Sy;
});

// ../node_modules/lodash/_getTag.js
var La = l((vx, Fa) => {
  var Pt = Pa(), Jt = Ue(), St = Sa(), Et = Oa(), Ot = _a(), ja = ne(), le = yt(), Na = "[object Map]", Ey = "[object Object]", Da = "[objec\
t Promise]", qa = "[object Set]", Ia = "[object WeakMap]", Ra = "[object DataView]", Oy = le(Pt), Ay = le(Jt), _y = le(St), Ny = le(Et), Dy = le(
  Ot), X = ja;
  (Pt && X(new Pt(new ArrayBuffer(1))) != Ra || Jt && X(new Jt()) != Na || St && X(St.resolve()) != Da || Et && X(new Et()) != qa || Ot && X(
  new Ot()) != Ia) && (X = /* @__PURE__ */ r(function(e) {
    var n = ja(e), a = n == Ey ? e.constructor : void 0, s = a ? le(a) : "";
    if (s)
      switch (s) {
        case Oy:
          return Ra;
        case Ay:
          return Na;
        case _y:
          return Da;
        case Ny:
          return qa;
        case Dy:
          return Ia;
      }
    return n;
  }, "getTag"));
  Fa.exports = X;
});

// ../node_modules/lodash/_baseIsEqualDeep.js
var $a = l((Px, Ba) => {
  var At = bt(), qy = vt(), Iy = aa(), Ry = va(), ka = La(), Ca = M(), Ua = mt(), jy = ht(), Fy = 1, Ma = "[object Arguments]", Va = "[objec\
t Array]", Ke = "[object Object]", Ly = Object.prototype, Ka = Ly.hasOwnProperty;
  function ky(e, n, a, s, p, c) {
    var y = Ca(e), d = Ca(n), m = y ? Va : ka(e), g = d ? Va : ka(n);
    m = m == Ma ? Ke : m, g = g == Ma ? Ke : g;
    var b = m == Ke, A = g == Ke, J = m == g;
    if (J && Ua(e)) {
      if (!Ua(n))
        return !1;
      y = !0, b = !1;
    }
    if (J && !b)
      return c || (c = new At()), y || jy(e) ? qy(e, n, a, s, p, c) : Iy(e, n, m, a, s, p, c);
    if (!(a & Fy)) {
      var v = b && Ka.call(e, "__wrapped__"), _ = A && Ka.call(n, "__wrapped__");
      if (v || _) {
        var q = v ? e.value() : e, R = _ ? n.value() : n;
        return c || (c = new At()), p(q, R, a, s, c);
      }
    }
    return J ? (c || (c = new At()), Ry(e, n, a, s, p, c)) : !1;
  }
  r(ky, "baseIsEqualDeep");
  Ba.exports = ky;
});

// ../node_modules/lodash/_baseIsEqual.js
var _t = l((Sx, Ha) => {
  var Cy = $a(), Ga = oe();
  function Ya(e, n, a, s, p) {
    return e === n ? !0 : e == null || n == null || !Ga(e) && !Ga(n) ? e !== e && n !== n : Cy(e, n, a, s, Ya, p);
  }
  r(Ya, "baseIsEqual");
  Ha.exports = Ya;
});

// ../node_modules/lodash/_baseIsMatch.js
var Wa = l((Ox, za) => {
  var Uy = bt(), My = _t(), Vy = 1, Ky = 2;
  function By(e, n, a, s) {
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
        var A = new Uy();
        if (s)
          var J = s(g, b, m, e, n, A);
        if (!(J === void 0 ? My(b, g, Vy | Ky, s, A) : J))
          return !1;
      }
    }
    return !0;
  }
  r(By, "baseIsMatch");
  za.exports = By;
});

// ../node_modules/lodash/_isStrictComparable.js
var Nt = l((_x, Xa) => {
  var $y = Le();
  function Gy(e) {
    return e === e && !$y(e);
  }
  r(Gy, "isStrictComparable");
  Xa.exports = Gy;
});

// ../node_modules/lodash/_getMatchData.js
var Za = l((Dx, Qa) => {
  var Yy = Nt(), Hy = Ce();
  function zy(e) {
    for (var n = Hy(e), a = n.length; a--; ) {
      var s = n[a], p = e[s];
      n[a] = [s, p, Yy(p)];
    }
    return n;
  }
  r(zy, "getMatchData");
  Qa.exports = zy;
});

// ../node_modules/lodash/_matchesStrictComparable.js
var Dt = l((Ix, ei) => {
  function Wy(e, n) {
    return function(a) {
      return a == null ? !1 : a[e] === n && (n !== void 0 || e in Object(a));
    };
  }
  r(Wy, "matchesStrictComparable");
  ei.exports = Wy;
});

// ../node_modules/lodash/_baseMatches.js
var ri = l((jx, ti) => {
  var Xy = Wa(), Qy = Za(), Zy = Dt();
  function ed(e) {
    var n = Qy(e);
    return n.length == 1 && n[0][2] ? Zy(n[0][0], n[0][1]) : function(a) {
      return a === e || Xy(a, e, n);
    };
  }
  r(ed, "baseMatches");
  ti.exports = ed;
});

// ../node_modules/lodash/isSymbol.js
var Be = l((Lx, ni) => {
  var td = ne(), rd = oe(), nd = "[object Symbol]";
  function od(e) {
    return typeof e == "symbol" || rd(e) && td(e) == nd;
  }
  r(od, "isSymbol");
  ni.exports = od;
});

// ../node_modules/lodash/_isKey.js
var $e = l((Cx, oi) => {
  var ad = M(), id = Be(), sd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pd = /^\w*$/;
  function cd(e, n) {
    if (ad(e))
      return !1;
    var a = typeof e;
    return a == "number" || a == "symbol" || a == "boolean" || e == null || id(e) ? !0 : pd.test(e) || !sd.test(e) || n != null && e in Object(
    n);
  }
  r(cd, "isKey");
  oi.exports = cd;
});

// ../node_modules/lodash/memoize.js
var si = l((Mx, ii) => {
  var ai = Me(), ud = "Expected a function";
  function qt(e, n) {
    if (typeof e != "function" || n != null && typeof n != "function")
      throw new TypeError(ud);
    var a = /* @__PURE__ */ r(function() {
      var s = arguments, p = n ? n.apply(this, s) : s[0], c = a.cache;
      if (c.has(p))
        return c.get(p);
      var y = e.apply(this, s);
      return a.cache = c.set(p, y) || c, y;
    }, "memoized");
    return a.cache = new (qt.Cache || ai)(), a;
  }
  r(qt, "memoize");
  qt.Cache = ai;
  ii.exports = qt;
});

// ../node_modules/lodash/_memoizeCapped.js
var ci = l((Kx, pi) => {
  var ld = si(), fd = 500;
  function yd(e) {
    var n = ld(e, function(s) {
      return a.size === fd && a.clear(), s;
    }), a = n.cache;
    return n;
  }
  r(yd, "memoizeCapped");
  pi.exports = yd;
});

// ../node_modules/lodash/_stringToPath.js
var li = l(($x, ui) => {
  var dd = ci(), md = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Td = /\\(\\)?/g, gd = dd(
  function(e) {
    var n = [];
    return e.charCodeAt(0) === 46 && n.push(""), e.replace(md, function(a, s, p, c) {
      n.push(p ? c.replace(Td, "$1") : s || a);
    }), n;
  });
  ui.exports = gd;
});

// ../node_modules/lodash/_arrayMap.js
var yi = l((Gx, fi) => {
  function hd(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, p = Array(s); ++a < s; )
      p[a] = n(e[a], a, e);
    return p;
  }
  r(hd, "arrayMap");
  fi.exports = hd;
});

// ../node_modules/lodash/_baseToString.js
var xi = l((Hx, hi) => {
  var di = he(), xd = yi(), bd = M(), vd = Be(), wd = 1 / 0, mi = di ? di.prototype : void 0, Ti = mi ? mi.toString : void 0;
  function gi(e) {
    if (typeof e == "string")
      return e;
    if (bd(e))
      return xd(e, gi) + "";
    if (vd(e))
      return Ti ? Ti.call(e) : "";
    var n = e + "";
    return n == "0" && 1 / e == -wd ? "-0" : n;
  }
  r(gi, "baseToString");
  hi.exports = gi;
});

// ../node_modules/lodash/toString.js
var vi = l((Wx, bi) => {
  var Pd = xi();
  function Jd(e) {
    return e == null ? "" : Pd(e);
  }
  r(Jd, "toString");
  bi.exports = Jd;
});

// ../node_modules/lodash/_castPath.js
var It = l((Qx, wi) => {
  var Sd = M(), Ed = $e(), Od = li(), Ad = vi();
  function _d(e, n) {
    return Sd(e) ? e : Ed(e, n) ? [e] : Od(Ad(e));
  }
  r(_d, "castPath");
  wi.exports = _d;
});

// ../node_modules/lodash/_toKey.js
var Oe = l((eb, Pi) => {
  var Nd = Be(), Dd = 1 / 0;
  function qd(e) {
    if (typeof e == "string" || Nd(e))
      return e;
    var n = e + "";
    return n == "0" && 1 / e == -Dd ? "-0" : n;
  }
  r(qd, "toKey");
  Pi.exports = qd;
});

// ../node_modules/lodash/_baseGet.js
var Rt = l((rb, Ji) => {
  var Id = It(), Rd = Oe();
  function jd(e, n) {
    n = Id(n, e);
    for (var a = 0, s = n.length; e != null && a < s; )
      e = e[Rd(n[a++])];
    return a && a == s ? e : void 0;
  }
  r(jd, "baseGet");
  Ji.exports = jd;
});

// ../node_modules/lodash/get.js
var Ei = l((ob, Si) => {
  var Fd = Rt();
  function Ld(e, n, a) {
    var s = e == null ? void 0 : Fd(e, n);
    return s === void 0 ? a : s;
  }
  r(Ld, "get");
  Si.exports = Ld;
});

// ../node_modules/lodash/_baseHasIn.js
var Ai = l((ib, Oi) => {
  function kd(e, n) {
    return e != null && n in Object(e);
  }
  r(kd, "baseHasIn");
  Oi.exports = kd;
});

// ../node_modules/lodash/_hasPath.js
var Ni = l((pb, _i) => {
  var Cd = It(), Ud = dt(), Md = M(), Vd = Tt(), Kd = ke(), Bd = Oe();
  function $d(e, n, a) {
    n = Cd(n, e);
    for (var s = -1, p = n.length, c = !1; ++s < p; ) {
      var y = Bd(n[s]);
      if (!(c = e != null && a(e, y)))
        break;
      e = e[y];
    }
    return c || ++s != p ? c : (p = e == null ? 0 : e.length, !!p && Kd(p) && Vd(y, p) && (Md(e) || Ud(e)));
  }
  r($d, "hasPath");
  _i.exports = $d;
});

// ../node_modules/lodash/hasIn.js
var qi = l((ub, Di) => {
  var Gd = Ai(), Yd = Ni();
  function Hd(e, n) {
    return e != null && Yd(e, n, Gd);
  }
  r(Hd, "hasIn");
  Di.exports = Hd;
});

// ../node_modules/lodash/_baseMatchesProperty.js
var Ri = l((fb, Ii) => {
  var zd = _t(), Wd = Ei(), Xd = qi(), Qd = $e(), Zd = Nt(), em = Dt(), tm = Oe(), rm = 1, nm = 2;
  function om(e, n) {
    return Qd(e) && Zd(n) ? em(tm(e), n) : function(a) {
      var s = Wd(a, e);
      return s === void 0 && s === n ? Xd(a, e) : zd(n, s, rm | nm);
    };
  }
  r(om, "baseMatchesProperty");
  Ii.exports = om;
});

// ../node_modules/lodash/identity.js
var Fi = l((db, ji) => {
  function am(e) {
    return e;
  }
  r(am, "identity");
  ji.exports = am;
});

// ../node_modules/lodash/_baseProperty.js
var ki = l((Tb, Li) => {
  function im(e) {
    return function(n) {
      return n?.[e];
    };
  }
  r(im, "baseProperty");
  Li.exports = im;
});

// ../node_modules/lodash/_basePropertyDeep.js
var Ui = l((hb, Ci) => {
  var sm = Rt();
  function pm(e) {
    return function(n) {
      return sm(n, e);
    };
  }
  r(pm, "basePropertyDeep");
  Ci.exports = pm;
});

// ../node_modules/lodash/property.js
var Vi = l((bb, Mi) => {
  var cm = ki(), um = Ui(), lm = $e(), fm = Oe();
  function ym(e) {
    return lm(e) ? cm(fm(e)) : um(e);
  }
  r(ym, "property");
  Mi.exports = ym;
});

// ../node_modules/lodash/_baseIteratee.js
var Bi = l((wb, Ki) => {
  var dm = ri(), mm = Ri(), Tm = Fi(), gm = M(), hm = Vi();
  function xm(e) {
    return typeof e == "function" ? e : e == null ? Tm : typeof e == "object" ? gm(e) ? mm(e[0], e[1]) : dm(e) : hm(e);
  }
  r(xm, "baseIteratee");
  Ki.exports = xm;
});

// ../node_modules/lodash/mapValues.js
var Gi = l((Jb, $i) => {
  var bm = $r(), vm = Fn(), wm = Bi();
  function Pm(e, n) {
    var a = {};
    return n = wm(n, 3), vm(e, function(s, p, c) {
      bm(a, p, n(s, p, c));
    }), a;
  }
  r(Pm, "mapValues");
  $i.exports = Pm;
});

// ../node_modules/jsdoc-type-pratt-parser/dist/index.js
var es = l((We, Zi) => {
  (function(e, n) {
    typeof We == "object" && typeof Zi < "u" ? n(We) : typeof define == "function" && define.amd ? define(["exports"], n) : (e = typeof globalThis <
    "u" ? globalThis : e || self, n(e.jtpp = {}));
  })(We, function(e) {
    "use strict";
    function n(t) {
      return t.text !== void 0 && t.text !== "" ? `'${t.type}' with value '${t.text}'` : `'${t.type}'`;
    }
    r(n, "tokenToString");
    class a extends Error {
      static {
        r(this, "NoParsletFoundError");
      }
      constructor(o) {
        super(`No parslet found for token: ${n(o)}`), this.token = o, Object.setPrototypeOf(this, a.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class s extends Error {
      static {
        r(this, "EarlyEndOfParseError");
      }
      constructor(o) {
        super(`The parsing ended early. The next token was: ${n(o)}`), this.token = o, Object.setPrototypeOf(this, s.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class p extends Error {
      static {
        r(this, "UnexpectedTypeError");
      }
      constructor(o, i) {
        let u = `Unexpected type: '${o.type}'.`;
        i !== void 0 && (u += ` Message: ${i}`), super(u), Object.setPrototypeOf(this, p.prototype);
      }
    }
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
    let _ = /* @__PURE__ */ r((t) => {
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
      _
    ], C = /^\s*\n\s*/;
    class K {
      static {
        r(this, "Lexer");
      }
      static create(o) {
        let i = this.read(o);
        o = i.text;
        let u = this.read(o);
        return o = u.text, new K(o, void 0, i.token, u.token);
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
        let o = K.read(this.text);
        return new K(o.text, this.current, this.next, o.token);
      }
    }
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
    function B(t) {
      return t.type === "JsdocTypeKeyValue" ? _e(t) : w(t);
    }
    r(B, "assertPlainKeyValueOrRootResult");
    function xs(t) {
      return t.type === "JsdocTypeName" ? t : _e(t);
    }
    r(xs, "assertPlainKeyValueOrNameResult");
    function _e(t) {
      if (t.type !== "JsdocTypeKeyValue")
        throw new p(t);
      return t;
    }
    r(_e, "assertPlainKeyValueResult");
    function bs(t) {
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
    r(bs, "assertNumberOrVariadicNameResult");
    function Ze(t) {
      return t.type === "JsdocTypeIndexSignature" || t.type === "JsdocTypeMappedType";
    }
    r(Ze, "isSquaredProperty");
    var h;
    (function(t) {
      t[t.ALL = 0] = "ALL", t[t.PARAMETER_LIST = 1] = "PARAMETER_LIST", t[t.OBJECT = 2] = "OBJECT", t[t.KEY_VALUE = 3] = "KEY_VALUE", t[t.UNION =
      4] = "UNION", t[t.INTERSECTION = 5] = "INTERSECTION", t[t.PREFIX = 6] = "PREFIX", t[t.INFIX = 7] = "INFIX", t[t.TUPLE = 8] = "TUPLE", t[t.
      SYMBOL = 9] = "SYMBOL", t[t.OPTIONAL = 10] = "OPTIONAL", t[t.NULLABLE = 11] = "NULLABLE", t[t.KEY_OF_TYPE_OF = 12] = "KEY_OF_TYPE_OF",
      t[t.FUNCTION = 13] = "FUNCTION", t[t.ARROW = 14] = "ARROW", t[t.ARRAY_BRACKETS = 15] = "ARRAY_BRACKETS", t[t.GENERIC = 16] = "GENERIC",
      t[t.NAME_PATH = 17] = "NAME_PATH", t[t.PARENTHESIS = 18] = "PARENTHESIS", t[t.SPECIAL_TYPES = 19] = "SPECIAL_TYPES";
    })(h || (h = {}));
    class Z {
      static {
        r(this, "Parser");
      }
      constructor(o, i, u) {
        this.grammar = o, typeof i == "string" ? this._lexer = K.create(i) : this._lexer = i, this.baseParser = u;
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
    }
    function Zt(t) {
      return t === "EOF" || t === "|" || t === "," || t === ")" || t === ">";
    }
    r(Zt, "isQuestionMarkUnknownType");
    let et = /* @__PURE__ */ r((t, o, i) => {
      let u = t.lexer.current.type, f = t.lexer.next.type;
      return i == null && u === "?" && !Zt(f) || i != null && u === "?" ? (t.consume("?"), i == null ? {
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
    }), De = P({
      name: "numberParslet",
      accept: /* @__PURE__ */ r((t) => t === "Number", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => {
        let o = parseFloat(t.lexer.current.text);
        return t.consume("Number"), {
          type: "JsdocTypeNumber",
          value: o
        };
      }, "parsePrefix")
    }), vs = P({
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
    }), ws = P({
      name: "specialTypesParslet",
      accept: /* @__PURE__ */ r((t, o) => t === "?" && Zt(o) || t === "null" || t === "undefined" || t === "*", "accept"),
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
    }), Ps = P({
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
    function Js({ allowTrailingComma: t }) {
      return P({
        name: "parameterListParslet",
        accept: /* @__PURE__ */ r((o) => o === ",", "accept"),
        precedence: h.PARAMETER_LIST,
        parseInfix: /* @__PURE__ */ r((o, i) => {
          let u = [
            B(i)
          ];
          o.consume(",");
          do
            try {
              let f = o.parseIntermediateType(h.PARAMETER_LIST);
              u.push(B(f));
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
    r(Js, "createParameterListParslet");
    let Ss = P({
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
    }), Es = P({
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
    }), tt = [
      et,
      Ne,
      De,
      vs,
      ws,
      Ps,
      Js({
        allowTrailingComma: !0
      }),
      Ss,
      Es,
      Ne
    ];
    function qe({ allowSquareBracketsOnAnyType: t, allowJsdocNamePaths: o, pathGrammar: i }) {
      return /* @__PURE__ */ r(function(f, T, x) {
        if (x == null || T >= h.NAME_PATH)
          return null;
        let S = f.lexer.current.type, D = f.lexer.next.type;
        if (!(S === "." && D !== "<" || S === "[" && (t || x.type === "JsdocTypeName") || o && (S === "~" || S === "#")))
          return null;
        let j, je = !1;
        f.consume(".") ? j = "property" : f.consume("[") ? (j = "property-brackets", je = !0) : f.consume("~") ? j = "inner" : (f.consume("#"),
        j = "instance");
        let cr = i !== null ? new Z(i, f.lexer, f) : f, U = cr.parseIntermediateType(h.NAME_PATH);
        f.acceptLexerState(cr);
        let Te;
        switch (U.type) {
          case "JsdocTypeName":
            Te = {
              type: "JsdocTypeProperty",
              value: U.value,
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeNumber":
            Te = {
              type: "JsdocTypeProperty",
              value: U.value.toString(10),
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeStringValue":
            Te = {
              type: "JsdocTypeProperty",
              value: U.value,
              meta: {
                quote: U.meta.quote
              }
            };
            break;
          case "JsdocTypeSpecialNamePath":
            if (U.specialType === "event")
              Te = U;
            else
              throw new p(U, "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");
            break;
          default:
            throw new p(U, "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'");
        }
        if (je && !f.consume("]")) {
          let ur = f.lexer.current;
          throw new Error(`Unterminated square brackets. Next token is '${ur.type}' with text '${ur.text}'`);
        }
        return {
          type: "JsdocTypeNamePath",
          left: w(x),
          right: Te,
          pathType: j
        };
      }, "namePathParslet");
    }
    r(qe, "createNamePathParslet");
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
    let de = P({
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
    function Ie({ pathGrammar: t, allowedTypes: o }) {
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
            let D = "", N = ["Identifier", "@", "/"];
            for (; N.some((j) => i.consume(j)); )
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
          let x = new Z(t, i.lexer, i), S = x.parseInfixIntermediateType(f, h.ALL);
          return i.acceptLexerState(x), w(S);
        }, "parsePrefix")
      });
    }
    r(Ie, "createSpecialNamePathParslet");
    let er = [
      $({
        allowedAdditionalTokens: ["external", "module"]
      }),
      de,
      De,
      qe({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: null
      })
    ], ee = [
      ...er,
      Ie({
        allowedTypes: ["event"],
        pathGrammar: er
      })
    ];
    function rt(t) {
      let o;
      if (t.type === "JsdocTypeParameterList")
        o = t.elements;
      else if (t.type === "JsdocTypeParenthesis")
        o = [t.element];
      else
        throw new p(t);
      return o.map((i) => B(i));
    }
    r(rt, "getParameters");
    function Os(t) {
      let o = rt(t);
      if (o.some((i) => i.type === "JsdocTypeKeyValue"))
        throw new Error("No parameter should be named");
      return o;
    }
    r(Os, "getUnnamedParameters");
    function nt({ allowNamedParameters: t, allowNoReturnType: o, allowWithoutParenthesis: i, allowNewAsFunctionKeyword: u }) {
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
            S.parameters = Os(D);
          else {
            if (T && D.type === "JsdocTypeFunction" && D.arrow)
              return S = D, S.constructor = !0, S;
            S.parameters = rt(D);
            for (let N of S.parameters)
              if (N.type === "JsdocTypeKeyValue" && !t.includes(N.key))
                throw new Error(`only allowed named parameters are ${t.join(", ")} but got ${N.type}`);
          }
          if (f.consume(":"))
            S.returnType = f.parseType(h.PREFIX);
          else if (!o)
            throw new Error("function is missing return type");
          return S;
        }, "parsePrefix")
      });
    }
    r(nt, "createFunctionParslet");
    function ot({ allowPostfix: t, allowEnclosingBrackets: o }) {
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
    r(ot, "createVariadicParslet");
    let tr = P({
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
          if (i.element = bs(u), !t.consume(")"))
            throw new Error("Symbol does not end after value");
        }
        return i;
      }, "parseInfix")
    }), rr = P({
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
    function at({ objectFieldGrammar: t, allowKeyTypes: o }) {
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
            let f, T = new Z(t, i.lexer, i);
            for (; ; ) {
              T.acceptLexerState(i);
              let x = T.parseIntermediateType(h.OBJECT);
              i.acceptLexerState(T), x === void 0 && o && (x = i.parseIntermediateType(h.OBJECT));
              let S = !1;
              if (x.type === "JsdocTypeNullable" && (S = !0, x = x.element), x.type === "JsdocTypeNumber" || x.type === "JsdocTypeName" || x.
              type === "JsdocTypeStringValue") {
                let N;
                x.type === "JsdocTypeStringValue" && (N = x.meta.quote), u.elements.push({
                  type: "JsdocTypeObjectField",
                  key: x.value.toString(),
                  right: void 0,
                  optional: S,
                  readonly: !1,
                  meta: {
                    quote: N
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
    r(at, "createObjectParslet");
    function it({ allowSquaredProperties: t, allowKeyTypes: o, allowReadonly: i, allowOptional: u }) {
      return P({
        name: "objectFieldParslet",
        precedence: h.KEY_VALUE,
        accept: /* @__PURE__ */ r((f) => f === ":", "accept"),
        parseInfix: /* @__PURE__ */ r((f, T) => {
          var x;
          let S = !1, D = !1;
          u && T.type === "JsdocTypeNullable" && (S = !0, T = T.element), i && T.type === "JsdocTypeReadonlyProperty" && (D = !0, T = T.element);
          let N = (x = f.baseParser) !== null && x !== void 0 ? x : f;
          if (N.acceptLexerState(f), T.type === "JsdocTypeNumber" || T.type === "JsdocTypeName" || T.type === "JsdocTypeStringValue" || Ze(T)) {
            if (Ze(T) && !t)
              throw new p(T);
            N.consume(":");
            let j;
            T.type === "JsdocTypeStringValue" && (j = T.meta.quote);
            let je = N.parseType(h.KEY_VALUE);
            return f.acceptLexerState(N), {
              type: "JsdocTypeObjectField",
              key: Ze(T) ? T : T.value.toString(),
              right: je,
              optional: S,
              readonly: D,
              meta: {
                quote: j
              }
            };
          } else {
            if (!o)
              throw new p(T);
            N.consume(":");
            let j = N.parseType(h.KEY_VALUE);
            return f.acceptLexerState(N), {
              type: "JsdocTypeJsdocObjectField",
              left: w(T),
              right: j
            };
          }
        }, "parseInfix")
      });
    }
    r(it, "createObjectFieldParslet");
    function st({ allowOptional: t, allowVariadic: o }) {
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
    r(st, "createKeyValueParslet");
    let nr = [
      ...tt,
      nt({
        allowWithoutParenthesis: !0,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      de,
      Ie({
        allowedTypes: ["module", "external", "event"],
        pathGrammar: ee
      }),
      ot({
        allowEnclosingBrackets: !0,
        allowPostfix: !0
      }),
      $({
        allowedAdditionalTokens: ["keyof"]
      }),
      tr,
      rr,
      qe({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: ee
      })
    ], As = [
      ...nr,
      at({
        // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
        // we leave out the object type deliberately
        objectFieldGrammar: [
          $({
            allowedAdditionalTokens: ["module", "in"]
          }),
          it({
            allowSquaredProperties: !1,
            allowKeyTypes: !0,
            allowOptional: !1,
            allowReadonly: !1
          }),
          ...nr
        ],
        allowKeyTypes: !0
      }),
      st({
        allowOptional: !0,
        allowVariadic: !0
      })
    ], or = P({
      name: "typeOfParslet",
      accept: /* @__PURE__ */ r((t) => t === "typeof", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("typeof"), {
        type: "JsdocTypeTypeof",
        element: w(t.parseType(h.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), _s = [
      $({
        allowedAdditionalTokens: ["module", "keyof", "event", "external", "in"]
      }),
      et,
      Ne,
      de,
      De,
      it({
        allowSquaredProperties: !1,
        allowKeyTypes: !1,
        allowOptional: !1,
        allowReadonly: !1
      })
    ], Ns = [
      ...tt,
      at({
        allowKeyTypes: !1,
        objectFieldGrammar: _s
      }),
      $({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      or,
      nt({
        allowWithoutParenthesis: !1,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      ot({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      // additional name parslet is needed for some special cases
      $({
        allowedAdditionalTokens: ["keyof"]
      }),
      Ie({
        allowedTypes: ["module"],
        pathGrammar: ee
      }),
      qe({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: ee
      }),
      st({
        allowOptional: !1,
        allowVariadic: !1
      }),
      tr
    ];
    function Ds({ allowQuestionMark: t }) {
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
          if (u.type === "JsdocTypeParameterList" ? u.elements[0].type === "JsdocTypeKeyValue" ? i.elements = u.elements.map(_e) : i.elements =
          u.elements.map(w) : u.type === "JsdocTypeKeyValue" ? i.elements = [_e(u)] : i.elements = [w(u)], !o.consume("]"))
            throw new Error("Unterminated '['");
          if (!t && i.elements.some((f) => f.type === "JsdocTypeUnknown"))
            throw new Error("Question mark in tuple not allowed");
          return i;
        }, "parsePrefix")
      });
    }
    r(Ds, "createTupleParslet");
    let qs = P({
      name: "keyOfParslet",
      accept: /* @__PURE__ */ r((t) => t === "keyof", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("keyof"), {
        type: "JsdocTypeKeyof",
        element: w(t.parseType(h.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), Is = P({
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
    }), Rs = P({
      name: "readonlyPropertyParslet",
      accept: /* @__PURE__ */ r((t) => t === "readonly", "accept"),
      parsePrefix: /* @__PURE__ */ r((t) => (t.consume("readonly"), {
        type: "JsdocTypeReadonlyProperty",
        element: t.parseType(h.KEY_VALUE)
      }), "parsePrefix")
    }), js = P({
      name: "arrowFunctionParslet",
      precedence: h.ARROW,
      accept: /* @__PURE__ */ r((t) => t === "=>", "accept"),
      parseInfix: /* @__PURE__ */ r((t, o) => (t.consume("=>"), {
        type: "JsdocTypeFunction",
        parameters: rt(o).map(xs),
        arrow: !0,
        constructor: !1,
        parenthesis: !0,
        returnType: t.parseType(h.OBJECT)
      }), "parseInfix")
    }), Fs = P({
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
    }), Ls = P({
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
    }), ks = P({
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
    }), Cs = [
      Rs,
      $({
        allowedAdditionalTokens: ["module", "event", "keyof", "event", "external", "in"]
      }),
      et,
      Ne,
      de,
      De,
      it({
        allowSquaredProperties: !0,
        allowKeyTypes: !1,
        allowOptional: !0,
        allowReadonly: !0
      }),
      ks
    ], Us = [
      ...tt,
      at({
        allowKeyTypes: !1,
        objectFieldGrammar: Cs
      }),
      or,
      qs,
      Is,
      de,
      nt({
        allowWithoutParenthesis: !0,
        allowNoReturnType: !1,
        allowNamedParameters: ["this", "new", "args"],
        allowNewAsFunctionKeyword: !0
      }),
      Ds({
        allowQuestionMark: !1
      }),
      ot({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      $({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      Ie({
        allowedTypes: ["module"],
        pathGrammar: ee
      }),
      rr,
      js,
      qe({
        allowSquareBracketsOnAnyType: !0,
        allowJsdocNamePaths: !1,
        pathGrammar: ee
      }),
      Fs,
      Ls,
      st({
        allowVariadic: !0,
        allowOptional: !0
      })
    ];
    function ar(t, o) {
      switch (o) {
        case "closure":
          return new Z(Ns, t).parse();
        case "jsdoc":
          return new Z(As, t).parse();
        case "typescript":
          return new Z(Us, t).parse();
      }
    }
    r(ar, "parse");
    function Ms(t, o = ["typescript", "closure", "jsdoc"]) {
      let i;
      for (let u of o)
        try {
          return ar(t, u);
        } catch (f) {
          i = f;
        }
      throw i;
    }
    r(Ms, "tryParse");
    function me(t, o) {
      let i = t[o.type];
      if (i === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${o.type}.`);
      return i(o, (u) => me(t, u));
    }
    r(me, "transform");
    function I(t) {
      throw new Error("This transform is not available. Are you trying the correct parsing mode?");
    }
    r(I, "notAvailableTransform");
    function ir(t) {
      let o = {
        params: []
      };
      for (let i of t.parameters)
        i.type === "JsdocTypeKeyValue" ? i.key === "this" ? o.this = i.right : i.key === "new" ? o.new = i.right : o.params.push(i) : o.params.
        push(i);
      return o;
    }
    r(ir, "extractSpecialParams");
    function Re(t, o, i) {
      return t === "prefix" ? i + o : o + i;
    }
    r(Re, "applyPosition");
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
    function sr() {
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
        JsdocTypeVariadic: /* @__PURE__ */ r((t, o) => t.meta.position === void 0 ? "..." : Re(t.meta.position, o(t.element), "..."), "Jsdoc\
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
        JsdocTypeNotNullable: /* @__PURE__ */ r((t, o) => Re(t.meta.position, o(t.element), "!"), "JsdocTypeNotNullable"),
        JsdocTypeNull: /* @__PURE__ */ r(() => "null", "JsdocTypeNull"),
        JsdocTypeNullable: /* @__PURE__ */ r((t, o) => Re(t.meta.position, o(t.element), "?"), "JsdocTypeNullable"),
        JsdocTypeNumber: /* @__PURE__ */ r((t) => t.value.toString(), "JsdocTypeNumber"),
        JsdocTypeObject: /* @__PURE__ */ r((t, o) => `{${t.elements.map(o).join((t.meta.separator === "comma" ? "," : ";") + " ")}}`, "Jsdoc\
TypeObject"),
        JsdocTypeOptional: /* @__PURE__ */ r((t, o) => Re(t.meta.position, o(t.element), "="), "JsdocTypeOptional"),
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
    r(sr, "stringifyRules");
    let Vs = sr();
    function Ks(t) {
      return me(Vs, t);
    }
    r(Ks, "stringify");
    let Bs = [
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
      return Bs.includes(t) && (o.reservedWord = !0), o;
    }
    r(Y, "makeName");
    let $s = {
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
        let i = ir(t), u = {
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
    function Gs(t) {
      return me($s, t);
    }
    r(Gs, "catharsisTransform");
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
    function Ys(t) {
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
    r(Ys, "getMemberType");
    function pt(t, o) {
      return o.length === 2 ? {
        type: t,
        left: o[0],
        right: o[1]
      } : {
        type: t,
        left: o[0],
        right: pt(t, o.slice(1))
      };
    }
    r(pt, "nestResults");
    let Hs = {
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
        let i = ir(t), u = {
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
          type: Ys(t.pathType),
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
      JsdocTypeUnion: /* @__PURE__ */ r((t, o) => pt("UNION", t.elements.map(o)), "JsdocTypeUnion"),
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
      JsdocTypeIntersection: /* @__PURE__ */ r((t, o) => pt("INTERSECTION", t.elements.map(o)), "JsdocTypeIntersection"),
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
    function zs(t) {
      return me(Hs, t);
    }
    r(zs, "jtpTransform");
    function Ws() {
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
    r(Ws, "identityTransformRules");
    let pr = {
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
    function ct(t, o, i, u, f) {
      u?.(t, o, i);
      let T = pr[t.type];
      for (let x of T) {
        let S = t[x];
        if (S !== void 0)
          if (Array.isArray(S))
            for (let D of S)
              ct(D, t, x, u, f);
          else
            ct(S, t, x, u, f);
      }
      f?.(t, o, i);
    }
    r(ct, "_traverse");
    function Xs(t, o, i) {
      ct(t, void 0, void 0, o, i);
    }
    r(Xs, "traverse"), e.catharsisTransform = Gs, e.identityTransformRules = Ws, e.jtpTransform = zs, e.parse = ar, e.stringify = Ks, e.stringifyRules =
    sr, e.transform = me, e.traverse = Xs, e.tryParse = Ms, e.visitorKeys = pr;
  });
});

// src/docs-tools/index.ts
var TT = {};
np(TT, {
  ADDON_ID: () => Qt,
  MAX_DEFAULT_VALUE_SUMMARY_LENGTH: () => Ym,
  MAX_TYPE_SUMMARY_LENGTH: () => Gm,
  PANEL_ID: () => lT,
  PARAM_KEY: () => fT,
  SNIPPET_RENDERED: () => yT,
  SourceType: () => hs,
  TypeSystem: () => Hi,
  convert: () => Ae,
  createSummaryValue: () => O,
  enhanceArgTypes: () => uT,
  extractComponentDescription: () => cT,
  extractComponentProps: () => pT,
  extractComponentSectionArray: () => ds,
  extractComponentSectionObject: () => ms,
  getDocgenDescription: () => Ct,
  getDocgenSection: () => kt,
  hasDocgen: () => Ft,
  hasDocsOrControls: () => mT,
  isDefaultValueBlacklisted: () => Q,
  isTooLongForDefaultValueSummary: () => Wt,
  isTooLongForTypeSummary: () => Xe,
  isValidDocgenSection: () => Lt,
  normalizeNewlines: () => Hm,
  parseJsDoc: () => zt,
  str: () => jt
});
module.exports = op(TT);

// src/docs-tools/argTypes/convert/typescript/convert.ts
var dr = require("@storybook/core/preview-errors");

// src/docs-tools/argTypes/convert/utils.ts
var yr = /^['"]|['"]$/g, ap = /* @__PURE__ */ r((e) => e.replace(yr, ""), "trimQuotes"), ip = /* @__PURE__ */ r((e) => yr.test(e), "includes\
Quotes"), Fe = /* @__PURE__ */ r((e) => {
  let n = ap(e);
  return ip(e) || Number.isNaN(Number(n)) ? n : Number(n);
}, "parseLiteral");

// src/docs-tools/argTypes/convert/typescript/convert.ts
var sp = /* @__PURE__ */ r((e) => {
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
      throw new dr.UnknownArgTypesError({ type: e, language: "Typescript" });
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
      return { ...s, ...sp(e) };
    case "union":
      let p;
      return e.elements?.every((c) => c.name === "literal") ? p = {
        ...s,
        name: "enum",
        // @ts-expect-error fix types
        value: e.elements?.map((c) => Fe(c.value))
      } : p = { ...s, name: n, value: e.elements?.map(te) }, p;
    case "intersection":
      return { ...s, name: n, value: e.elements?.map(te) };
    default:
      return { ...s, name: "other", value: n };
  }
}, "convert");

// src/docs-tools/argTypes/convert/flow/convert.ts
var mr = require("@storybook/core/preview-errors");
var pp = /* @__PURE__ */ r((e) => e.name === "literal", "isLiteral"), cp = /* @__PURE__ */ r((e) => e.value.replace(/['|"]/g, ""), "toEnumOp\
tion"), up = /* @__PURE__ */ r((e) => {
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
      throw new mr.UnknownArgTypesError({ type: e, language: "Flow" });
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
      return { ...s, ...up(e) };
    case "union":
      return e.elements?.every(pp) ? { ...s, name: "enum", value: e.elements?.map(cp) } : { ...s, name: n, value: e.elements?.map(re) };
    case "intersection":
      return { ...s, name: n, value: e.elements?.map(re) };
    default:
      return { ...s, name: "other", value: n };
  }
}, "convert");

// src/docs-tools/argTypes/convert/proptypes/convert.ts
var Yi = fr(Gi(), 1);
var Jm = /^\(.*\) => /, fe = /* @__PURE__ */ r((e) => {
  let { name: n, raw: a, computed: s, value: p } = e, c = {};
  switch (typeof a < "u" && (c.raw = a), n) {
    case "enum": {
      let d = s ? p : p.map((m) => Fe(m.value));
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
      let y = (0, Yi.default)(p, (d) => fe(d));
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
      let d = p ? `${n}(${p})` : n, m = Jm.test(n) ? "function" : "other";
      return { ...c, name: m, value: d };
    }
  }
}, "convert");

// src/docs-tools/argTypes/convert/index.ts
var Ae = /* @__PURE__ */ r((e) => {
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
var Hi = /* @__PURE__ */ ((p) => (p.JAVASCRIPT = "JavaScript", p.FLOW = "Flow", p.TYPESCRIPT = "TypeScript", p.UNKNOWN = "Unknown", p))(Hi ||
{});

// src/docs-tools/argTypes/docgen/utils/defaultValue.ts
var Sm = ["null", "undefined"];
function Q(e) {
  return Sm.some((n) => n === e);
}
r(Q, "isDefaultValueBlacklisted");

// src/docs-tools/argTypes/docgen/utils/string.ts
var jt = /* @__PURE__ */ r((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");

// src/docs-tools/argTypes/docgen/utils/docgenInfo.ts
function Ft(e) {
  return !!e.__docgenInfo;
}
r(Ft, "hasDocgen");
function Lt(e) {
  return e != null && Object.keys(e).length > 0;
}
r(Lt, "isValidDocgenSection");
function kt(e, n) {
  return Ft(e) ? e.__docgenInfo[n] : null;
}
r(kt, "getDocgenSection");
function Ct(e) {
  return Ft(e) ? jt(e.__docgenInfo.description) : "";
}
r(Ct, "getDocgenDescription");

// ../node_modules/comment-parser/es6/primitives.js
var F;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(F = F || (F = {}));

// ../node_modules/comment-parser/es6/util.js
function Ut(e) {
  return /^\s+$/.test(e);
}
r(Ut, "isSpace");
function zi(e) {
  let n = e.match(/\r+$/);
  return n == null ? ["", e] : [e.slice(-n[0].length), e.slice(0, -n[0].length)];
}
r(zi, "splitCR");
function V(e) {
  let n = e.match(/^\s+/);
  return n == null ? ["", e] : [e.slice(0, n[0].length), e.slice(n[0].length)];
}
r(V, "splitSpace");
function Wi(e) {
  return e.split(/\n/);
}
r(Wi, "splitLines");
function Xi(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, e);
}
r(Xi, "seedSpec");
function Mt(e = {}) {
  return Object.assign({ start: "", delimiter: "", postDelimiter: "", tag: "", postTag: "", name: "", postName: "", type: "", postType: "", description: "",
  end: "", lineEnd: "" }, e);
}
r(Mt, "seedTokens");

// ../node_modules/comment-parser/es6/parser/block-parser.js
var Em = /^@\S+/;
function Vt({ fence: e = "```" } = {}) {
  let n = Om(e), a = /* @__PURE__ */ r((s, p) => n(s) ? !p : p, "toggleFence");
  return /* @__PURE__ */ r(function(p) {
    let c = [[]], y = !1;
    for (let d of p)
      Em.test(d.tokens.description) && !y ? c.push([d]) : c[c.length - 1].push(d), y = a(d.tokens.description, y);
    return c;
  }, "parseBlock");
}
r(Vt, "getParser");
function Om(e) {
  return typeof e == "string" ? (n) => n.split(e).length % 2 === 0 : e;
}
r(Om, "getFencer");

// ../node_modules/comment-parser/es6/parser/source-parser.js
function Kt({ startLine: e = 0, markers: n = F } = {}) {
  let a = null, s = e;
  return /* @__PURE__ */ r(function(c) {
    let y = c, d = Mt();
    if ([d.lineEnd, y] = zi(y), [d.start, y] = V(y), a === null && y.startsWith(n.start) && !y.startsWith(n.nostart) && (a = [], d.delimiter =
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
r(Kt, "getParser");

// ../node_modules/comment-parser/es6/parser/spec-parser.js
function Bt({ tokenizers: e }) {
  return /* @__PURE__ */ r(function(a) {
    var s;
    let p = Xi({ source: a });
    for (let c of e)
      if (p = c(p), !((s = p.problems[p.problems.length - 1]) === null || s === void 0) && s.critical)
        break;
    return p;
  }, "parseSpec");
}
r(Bt, "getParser");

// ../node_modules/comment-parser/es6/parser/tokenizers/tag.js
function Ge() {
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
r(Ge, "tagTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/type.js
function Ye(e = "compact") {
  let n = _m(e);
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
r(Ye, "typeTokenizer");
var Am = /* @__PURE__ */ r((e) => e.trim(), "trim");
function _m(e) {
  return e === "compact" ? (n) => n.map(Am).join("") : e === "preserve" ? (n) => n.join(`
`) : e;
}
r(_m, "getJoiner");

// ../node_modules/comment-parser/es6/parser/tokenizers/name.js
var Nm = /* @__PURE__ */ r((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function He() {
  let e = /* @__PURE__ */ r((n, { tokens: a }, s) => a.type === "" ? n : s, "typeEnd");
  return (n) => {
    let { tokens: a } = n.source[n.source.reduce(e, 0)], s = a.description.trimLeft(), p = s.split('"');
    if (p.length > 1 && p[0] === "" && p.length % 2 === 1)
      return n.name = p[1], a.name = `"${p[1]}"`, [a.postName, a.description] = V(s.slice(a.name.length)), n;
    let c = 0, y = "", d = !1, m;
    for (let b of s) {
      if (c === 0 && Ut(b))
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
r(He, "nameTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/description.js
function ze(e = "compact", n = F) {
  let a = $t(e);
  return (s) => (s.description = a(s.source, n), s);
}
r(ze, "descriptionTokenizer");
function $t(e) {
  return e === "compact" ? Dm : e === "preserve" ? Rm : e;
}
r($t, "getJoiner");
function Dm(e, n = F) {
  return e.map(({ tokens: { description: a } }) => a.trim()).filter((a) => a !== "").join(" ");
}
r(Dm, "compactJoiner");
var qm = /* @__PURE__ */ r((e, { tokens: n }, a) => n.type === "" ? e : a, "lineNo"), Im = /* @__PURE__ */ r(({ tokens: e }) => (e.delimiter ===
"" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function Rm(e, n = F) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === n.start && (e = e.slice(1));
  let a = e[e.length - 1];
  return a !== void 0 && a.tokens.description === "" && a.tokens.end.endsWith(n.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(qm, 0)), e.
  map(Im).join(`
`);
}
r(Rm, "preserveJoiner");

// ../node_modules/comment-parser/es6/parser/index.js
function Gt({ startLine: e = 0, fence: n = "```", spacing: a = "compact", markers: s = F, tokenizers: p = [
  Ge(),
  Ye(a),
  He(),
  ze(a)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let c = Kt({ startLine: e, markers: s }), y = Vt({ fence: n }), d = Bt({ tokenizers: p }), m = $t(a);
  return function(g) {
    let b = [];
    for (let A of Wi(g)) {
      let J = c(A);
      if (J === null)
        continue;
      let v = y(J), _ = v.slice(1).map(d);
      b.push({
        description: m(v[0], s),
        tags: _,
        source: J,
        problems: _.reduce((q, R) => q.concat(R.problems), [])
      });
    }
    return b;
  };
}
r(Gt, "getParser");

// ../node_modules/comment-parser/es6/stringifier/index.js
function jm(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.
  lineEnd;
}
r(jm, "join");
function Yt() {
  return (e) => e.source.map(({ tokens: n }) => jm(n)).join(`
`);
}
r(Yt, "getStringifier");

// ../node_modules/comment-parser/es6/stringifier/inspect.js
var Fm = {
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
var Lv = Object.keys(Fm);

// ../node_modules/comment-parser/es6/index.js
function Qi(e, n = {}) {
  return Gt(n)(e);
}
r(Qi, "parse");
var ow = Yt();

// src/docs-tools/argTypes/jsdocParser.ts
var ye = fr(es(), 1);
function Lm(e) {
  return e != null && e.includes("@");
}
r(Lm, "containsJsDoc");
function km(e) {
  let s = `/**
` + (e ?? "").split(`
`).map((c) => ` * ${c}`).join(`
`) + `
*/`, p = Qi(s, {
    spacing: "preserve"
  });
  if (!p || p.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return p[0];
}
r(km, "parse");
var Cm = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, zt = /* @__PURE__ */ r((e, n = Cm) => {
  if (!Lm(e))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let a = km(e), s = Um(a, n.tags);
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
function Um(e, n) {
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
            let p = Vm(s);
            p != null && (a.params == null && (a.params = []), a.params.push(p));
            break;
          }
          case "deprecated": {
            let p = Km(s);
            p != null && (a.deprecated = p);
            break;
          }
          case "returns": {
            let p = Bm(s);
            p != null && (a.returns = p);
            break;
          }
          default:
            break;
        }
  return a;
}
r(Um, "extractJsDocTags");
function Mm(e) {
  return e.replace(/[\.-]$/, "");
}
r(Mm, "normaliseParamName");
function Vm(e) {
  if (!e.name || e.name === "-")
    return null;
  let n = ns(e.type);
  return {
    name: e.name,
    type: n,
    description: rs(e.description),
    getPrettyName: /* @__PURE__ */ r(() => Mm(e.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ r(() => n ? os(n) : null, "getTypeName")
  };
}
r(Vm, "extractParam");
function Km(e) {
  return e.name ? ts(e.name, e.description) : null;
}
r(Km, "extractDeprecated");
function ts(e, n) {
  let a = e === "" ? n : `${e} ${n}`;
  return rs(a);
}
r(ts, "joinNameAndDescription");
function rs(e) {
  let n = e.replace(/^- /g, "").trim();
  return n === "" ? null : n;
}
r(rs, "normaliseDescription");
function Bm(e) {
  let n = ns(e.type);
  return n ? {
    type: n,
    description: ts(e.name, e.description),
    getTypeName: /* @__PURE__ */ r(() => os(n), "getTypeName")
  } : null;
}
r(Bm, "extractReturns");
var z = (0, ye.stringifyRules)(), $m = z.JsdocTypeObject;
z.JsdocTypeAny = () => "any";
z.JsdocTypeObject = (e, n) => `(${$m(e, n)})`;
z.JsdocTypeOptional = (e, n) => n(e.element);
z.JsdocTypeNullable = (e, n) => n(e.element);
z.JsdocTypeNotNullable = (e, n) => n(e.element);
z.JsdocTypeUnion = (e, n) => e.elements.map(n).join("|");
function ns(e) {
  try {
    return (0, ye.parse)(e, "typescript");
  } catch {
    return null;
  }
}
r(ns, "extractType");
function os(e) {
  return (0, ye.transform)(z, e);
}
r(os, "extractTypeName");

// src/docs-tools/argTypes/utils.ts
var Gm = 90, Ym = 50;
function Xe(e) {
  return e.length > 90;
}
r(Xe, "isTooLongForTypeSummary");
function Wt(e) {
  return e.length > 50;
}
r(Wt, "isTooLongForDefaultValueSummary");
function O(e, n) {
  return e === n ? { summary: e } : { summary: e, detail: n };
}
r(O, "createSummaryValue");
var Hm = /* @__PURE__ */ r((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines");

// src/docs-tools/argTypes/docgen/flow/createType.ts
function as({ name: e, value: n, elements: a, raw: s }) {
  return n ?? (a != null ? a.map(as).join(" | ") : s ?? e);
}
r(as, "generateUnionElement");
function zm({ name: e, raw: n, elements: a }) {
  return a != null ? O(a.map(as).join(" | ")) : n != null ? O(n.replace(/^\|\s*/, "")) : O(e);
}
r(zm, "generateUnion");
function Wm({ type: e, raw: n }) {
  return n != null ? O(n) : O(e);
}
r(Wm, "generateFuncSignature");
function Xm({ type: e, raw: n }) {
  return n != null ? Xe(n) ? O(e, n) : O(n) : O(e);
}
r(Xm, "generateObjectSignature");
function Qm(e) {
  let { type: n } = e;
  return n === "object" ? Xm(e) : Wm(e);
}
r(Qm, "generateSignature");
function Zm({ name: e, raw: n }) {
  return n != null ? Xe(n) ? O(e, n) : O(n) : O(e);
}
r(Zm, "generateDefault");
function is(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return zm(e);
    case "signature":
      return Qm(e);
    default:
      return Zm(e);
  }
}
r(is, "createType");

// src/docs-tools/argTypes/docgen/flow/createDefaultValue.ts
function ss(e, n) {
  if (e != null) {
    let { value: a } = e;
    if (!Q(a))
      return Wt(a) ? O(n?.name, a) : O(a);
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
    if (!Q(n))
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
function eT(e) {
  return e != null ? O(e.name) : null;
}
r(eT, "createType");
function tT(e) {
  let { computed: n, func: a } = e;
  return typeof n > "u" && typeof a > "u";
}
r(tT, "isReactDocgenTypescript");
function rT(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: n }) => typeof n == "string" && n[0] === '"' && n[n.length - 1] === '"'
  ) : !1 : !1;
}
r(rT, "isStringValued");
function nT(e, n) {
  if (e != null) {
    let { value: a } = e;
    if (!Q(a))
      return tT(e) && rT(n) ? O(JSON.stringify(a)) : O(a);
  }
  return null;
}
r(nT, "createDefaultValue");
function fs(e, n, a) {
  let { description: s, required: p, defaultValue: c } = a;
  return {
    name: e,
    type: eT(n),
    required: p,
    description: s,
    defaultValue: nT(c, n)
  };
}
r(fs, "createBasicPropDef");
function Qe(e, n) {
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
r(Qe, "applyJsDocResult");
var oT = /* @__PURE__ */ r((e, n, a) => {
  let s = fs(e, n.type, n);
  return s.sbType = Ae(n), Qe(s, a);
}, "javaScriptFactory"), aT = /* @__PURE__ */ r((e, n, a) => {
  let s = ls(e, n);
  return s.sbType = Ae(n), Qe(s, a);
}, "tsFactory"), iT = /* @__PURE__ */ r((e, n, a) => {
  let s = ps(e, n);
  return s.sbType = Ae(n), Qe(s, a);
}, "flowFactory"), sT = /* @__PURE__ */ r((e, n, a) => {
  let s = fs(e, { name: "unknown" }, n);
  return Qe(s, a);
}, "unknownFactory"), Xt = /* @__PURE__ */ r((e) => {
  switch (e) {
    case "JavaScript":
      return oT;
    case "TypeScript":
      return aT;
    case "Flow":
      return iT;
    default:
      return sT;
  }
}, "getPropDefFactory");

// src/docs-tools/argTypes/docgen/extractDocgenProps.ts
var ys = /* @__PURE__ */ r((e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
"getTypeSystem"), ds = /* @__PURE__ */ r((e) => {
  let n = ys(e[0]), a = Xt(n);
  return e.map((s) => {
    let p = s;
    return s.type?.elements && (p = {
      ...s,
      type: {
        ...s.type,
        value: s.type.elements
      }
    }), Ts(p.name, p, n, a);
  });
}, "extractComponentSectionArray"), ms = /* @__PURE__ */ r((e) => {
  let n = Object.keys(e), a = ys(e[n[0]]), s = Xt(a);
  return n.map((p) => {
    let c = e[p];
    return c != null ? Ts(p, c, a, s) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject"), pT = /* @__PURE__ */ r((e, n) => {
  let a = kt(e, n);
  return Lt(a) ? Array.isArray(a) ? ds(a) : ms(a) : [];
}, "extractComponentProps");
function Ts(e, n, a, s) {
  let p = zt(n.description);
  return p.includesJsDoc && p.ignore ? null : {
    propDef: s(e, n, p),
    jsDocTags: p.extractedTags,
    docgenInfo: n,
    typeSystem: a
  };
}
r(Ts, "extractProp");
function cT(e) {
  return e != null ? Ct(e) : "";
}
r(cT, "extractComponentDescription");

// src/docs-tools/argTypes/enhanceArgTypes.ts
var gs = require("@storybook/core/preview-api");
var uT = /* @__PURE__ */ r((e) => {
  let {
    component: n,
    argTypes: a,
    parameters: { docs: s = {} }
  } = e, { extractArgTypes: p } = s, c = p && n ? p(n) : {};
  return c ? (0, gs.combineParameters)(c, a) : a;
}, "enhanceArgTypes");

// src/docs-tools/shared.ts
var Qt = "storybook/docs", lT = `${Qt}/panel`, fT = "docs", yT = `${Qt}/snippet-rendered`, hs = /* @__PURE__ */ ((s) => (s.AUTO = "auto", s.
CODE = "code", s.DYNAMIC = "dynamic", s))(hs || {});

// src/docs-tools/hasDocsOrControls.ts
var dT = /(addons\/|addon-|addon-essentials\/)(docs|controls)/, mT = /* @__PURE__ */ r((e) => e.presetsList?.some((n) => dT.test(n.name)), "\
hasDocsOrControls");
