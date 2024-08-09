import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var Si = Object.create;
var we = Object.defineProperty;
var bi = Object.getOwnPropertyDescriptor;
var Ei = Object.getOwnPropertyNames;
var _i = Object.getPrototypeOf, xi = Object.prototype.hasOwnProperty;
var a = (e, r) => we(e, "name", { value: r, configurable: !0 }), b = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (r, t) => (typeof require < "u" ? require : r)[t]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Oi = (e, r) => () => (e && (r = e(e = 0)), r);
var S = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), Pi = (e, r) => {
  for (var t in r)
    we(e, t, { get: r[t], enumerable: !0 });
}, bt = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let i of Ei(r))
      !xi.call(e, i) && i !== t && we(e, i, { get: () => r[i], enumerable: !(n = bi(r, i)) || n.enumerable });
  return e;
};
var ae = (e, r, t) => (t = e != null ? Si(_i(e)) : {}, bt(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? we(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), Fi = (e) => bt(we({}, "__esModule", { value: !0 }), e);

// ../node_modules/universalify/index.js
var C = S((Ge) => {
  "use strict";
  Ge.fromCallback = function(e) {
    return Object.defineProperty(function(...r) {
      if (typeof r[r.length - 1] == "function") e.apply(this, r);
      else
        return new Promise((t, n) => {
          e.call(
            this,
            ...r,
            (i, o) => i != null ? n(i) : t(o)
          );
        });
    }, "name", { value: e.name });
  };
  Ge.fromPromise = function(e) {
    return Object.defineProperty(function(...r) {
      let t = r[r.length - 1];
      if (typeof t != "function") return e.apply(this, r);
      e.apply(this, r.slice(0, -1)).then((n) => t(null, n), t);
    }, "name", { value: e.name });
  };
});

// ../node_modules/graceful-fs/polyfills.js
var _t = S((Is, Et) => {
  var re = b("constants"), ki = process.cwd, je = null, ji = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    return je || (je = ki.call(process)), je;
  };
  try {
    process.cwd();
  } catch {
  }
  typeof process.chdir == "function" && (He = process.chdir, process.chdir = function(e) {
    je = null, He.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, He));
  var He;
  Et.exports = Di;
  function Di(e) {
    re.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && r(e), e.lutimes || t(e), e.chown = o(e.chown), e.fchown =
    o(e.fchown), e.lchown = o(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = s(e.chownSync),
    e.fchownSync = s(e.fchownSync), e.lchownSync = s(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync =
    i(e.lchmodSync), e.stat = u(e.stat), e.fstat = u(e.fstat), e.lstat = u(e.lstat), e.statSync = y(e.statSync), e.fstatSync = y(e.fstatSync),
    e.lstatSync = y(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(c, d, l) {
      l && process.nextTick(l);
    }, e.lchmodSync = function() {
    }), e.chown && !e.lchown && (e.lchown = function(c, d, l, m) {
      m && process.nextTick(m);
    }, e.lchownSync = function() {
    }), ji === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(c) {
      function d(l, m, p) {
        var h = Date.now(), w = 0;
        c(l, m, /* @__PURE__ */ a(function v(P) {
          if (P && (P.code === "EACCES" || P.code === "EPERM" || P.code === "EBUSY") && Date.now() - h < 6e4) {
            setTimeout(function() {
              e.stat(m, function(O, L) {
                O && O.code === "ENOENT" ? c(l, m, v) : p(P);
              });
            }, w), w < 100 && (w += 10);
            return;
          }
          p && p(P);
        }, "CB"));
      }
      return a(d, "rename"), Object.setPrototypeOf && Object.setPrototypeOf(d, c), d;
    }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(c) {
      function d(l, m, p, h, w, v) {
        var P;
        if (v && typeof v == "function") {
          var O = 0;
          P = /* @__PURE__ */ a(function(L, J, Y) {
            if (L && L.code === "EAGAIN" && O < 10)
              return O++, c.call(e, l, m, p, h, w, P);
            v.apply(this, arguments);
          }, "callback");
        }
        return c.call(e, l, m, p, h, w, P);
      }
      return a(d, "read"), Object.setPrototypeOf && Object.setPrototypeOf(d, c), d;
    }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(c) {
      return function(d, l, m, p, h) {
        for (var w = 0; ; )
          try {
            return c.call(e, d, l, m, p, h);
          } catch (v) {
            if (v.code === "EAGAIN" && w < 10) {
              w++;
              continue;
            }
            throw v;
          }
      };
    }(e.readSync);
    function r(c) {
      c.lchmod = function(d, l, m) {
        c.open(
          d,
          re.O_WRONLY | re.O_SYMLINK,
          l,
          function(p, h) {
            if (p) {
              m && m(p);
              return;
            }
            c.fchmod(h, l, function(w) {
              c.close(h, function(v) {
                m && m(w || v);
              });
            });
          }
        );
      }, c.lchmodSync = function(d, l) {
        var m = c.openSync(d, re.O_WRONLY | re.O_SYMLINK, l), p = !0, h;
        try {
          h = c.fchmodSync(m, l), p = !1;
        } finally {
          if (p)
            try {
              c.closeSync(m);
            } catch {
            }
          else
            c.closeSync(m);
        }
        return h;
      };
    }
    a(r, "patchLchmod");
    function t(c) {
      re.hasOwnProperty("O_SYMLINK") && c.futimes ? (c.lutimes = function(d, l, m, p) {
        c.open(d, re.O_SYMLINK, function(h, w) {
          if (h) {
            p && p(h);
            return;
          }
          c.futimes(w, l, m, function(v) {
            c.close(w, function(P) {
              p && p(v || P);
            });
          });
        });
      }, c.lutimesSync = function(d, l, m) {
        var p = c.openSync(d, re.O_SYMLINK), h, w = !0;
        try {
          h = c.futimesSync(p, l, m), w = !1;
        } finally {
          if (w)
            try {
              c.closeSync(p);
            } catch {
            }
          else
            c.closeSync(p);
        }
        return h;
      }) : c.futimes && (c.lutimes = function(d, l, m, p) {
        p && process.nextTick(p);
      }, c.lutimesSync = function() {
      });
    }
    a(t, "patchLutimes");
    function n(c) {
      return c && function(d, l, m) {
        return c.call(e, d, l, function(p) {
          f(p) && (p = null), m && m.apply(this, arguments);
        });
      };
    }
    a(n, "chmodFix");
    function i(c) {
      return c && function(d, l) {
        try {
          return c.call(e, d, l);
        } catch (m) {
          if (!f(m)) throw m;
        }
      };
    }
    a(i, "chmodFixSync");
    function o(c) {
      return c && function(d, l, m, p) {
        return c.call(e, d, l, m, function(h) {
          f(h) && (h = null), p && p.apply(this, arguments);
        });
      };
    }
    a(o, "chownFix");
    function s(c) {
      return c && function(d, l, m) {
        try {
          return c.call(e, d, l, m);
        } catch (p) {
          if (!f(p)) throw p;
        }
      };
    }
    a(s, "chownFixSync");
    function u(c) {
      return c && function(d, l, m) {
        typeof l == "function" && (m = l, l = null);
        function p(h, w) {
          w && (w.uid < 0 && (w.uid += 4294967296), w.gid < 0 && (w.gid += 4294967296)), m && m.apply(this, arguments);
        }
        return a(p, "callback"), l ? c.call(e, d, l, p) : c.call(e, d, p);
      };
    }
    a(u, "statFix");
    function y(c) {
      return c && function(d, l) {
        var m = l ? c.call(e, d, l) : c.call(e, d);
        return m && (m.uid < 0 && (m.uid += 4294967296), m.gid < 0 && (m.gid += 4294967296)), m;
      };
    }
    a(y, "statFixSync");
    function f(c) {
      if (!c || c.code === "ENOSYS")
        return !0;
      var d = !process.getuid || process.getuid() !== 0;
      return !!(d && (c.code === "EINVAL" || c.code === "EPERM"));
    }
    a(f, "chownErOk");
  }
  a(Di, "patch");
});

// ../node_modules/graceful-fs/legacy-streams.js
var Pt = S((Ms, Ot) => {
  var xt = b("stream").Stream;
  Ot.exports = qi;
  function qi(e) {
    return {
      ReadStream: r,
      WriteStream: t
    };
    function r(n, i) {
      if (!(this instanceof r)) return new r(n, i);
      xt.call(this);
      var o = this;
      this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i =
      i || {};
      for (var s = Object.keys(i), u = 0, y = s.length; u < y; u++) {
        var f = s[u];
        this[f] = i[f];
      }
      if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
        if (typeof this.start != "number")
          throw TypeError("start must be a Number");
        if (this.end === void 0)
          this.end = 1 / 0;
        else if (typeof this.end != "number")
          throw TypeError("end must be a Number");
        if (this.start > this.end)
          throw new Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function() {
          o._read();
        });
        return;
      }
      e.open(this.path, this.flags, this.mode, function(c, d) {
        if (c) {
          o.emit("error", c), o.readable = !1;
          return;
        }
        o.fd = d, o.emit("open", d), o._read();
      });
    }
    function t(n, i) {
      if (!(this instanceof t)) return new t(n, i);
      xt.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten =
      0, i = i || {};
      for (var o = Object.keys(i), s = 0, u = o.length; s < u; s++) {
        var y = o[s];
        this[y] = i[y];
      }
      if (this.start !== void 0) {
        if (typeof this.start != "number")
          throw TypeError("start must be a Number");
        if (this.start < 0)
          throw new Error("start must be >= zero");
        this.pos = this.start;
      }
      this.busy = !1, this._queue = [], this.fd === null && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.
      mode, void 0]), this.flush());
    }
  }
  a(qi, "legacy");
});

// ../node_modules/graceful-fs/clone.js
var kt = S((Ws, Ft) => {
  "use strict";
  Ft.exports = Li;
  var Ti = Object.getPrototypeOf || function(e) {
    return e.__proto__;
  };
  function Li(e) {
    if (e === null || typeof e != "object")
      return e;
    if (e instanceof Object)
      var r = { __proto__: Ti(e) };
    else
      var r = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    }), r;
  }
  a(Li, "clone");
});

// ../node_modules/graceful-fs/graceful-fs.js
var le = S((Bs, Ye) => {
  var D = b("fs"), Ni = _t(), Ri = Pt(), Ci = kt(), De = b("util"), W, Te;
  typeof Symbol == "function" && typeof Symbol.for == "function" ? (W = Symbol.for("graceful-fs.queue"), Te = Symbol.for("graceful-fs.previo\
us")) : (W = "___graceful-fs.queue", Te = "___graceful-fs.previous");
  function Ii() {
  }
  a(Ii, "noop");
  function qt(e, r) {
    Object.defineProperty(e, W, {
      get: /* @__PURE__ */ a(function() {
        return r;
      }, "get")
    });
  }
  a(qt, "publishQueue");
  var se = Ii;
  De.debuglog ? se = De.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (se = /* @__PURE__ */ a(function() {
    var e = De.format.apply(De, arguments);
    e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
  }, "debug"));
  D[W] || (jt = global[W] || [], qt(D, jt), D.close = function(e) {
    function r(t, n) {
      return e.call(D, t, function(i) {
        i || Dt(), typeof n == "function" && n.apply(this, arguments);
      });
    }
    return a(r, "close"), Object.defineProperty(r, Te, {
      value: e
    }), r;
  }(D.close), D.closeSync = function(e) {
    function r(t) {
      e.apply(D, arguments), Dt();
    }
    return a(r, "closeSync"), Object.defineProperty(r, Te, {
      value: e
    }), r;
  }(D.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    se(D[W]), b("assert").equal(D[W].length, 0);
  }));
  var jt;
  global[W] || qt(global, D[W]);
  Ye.exports = Ve(Ci(D));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !D.__patched && (Ye.exports = Ve(D), D.__patched = !0);
  function Ve(e) {
    Ni(e), e.gracefulify = Ve, e.createReadStream = J, e.createWriteStream = Y;
    var r = e.readFile;
    e.readFile = t;
    function t(g, x, E) {
      return typeof x == "function" && (E = x, x = null), A(g, x, E);
      function A(M, R, j, q) {
        return r(M, R, function(F) {
          F && (F.code === "EMFILE" || F.code === "ENFILE") ? ue([A, [M, R, j], F, q || Date.now(), Date.now()]) : typeof j == "function" &&
          j.apply(this, arguments);
        });
      }
      a(A, "go$readFile");
    }
    a(t, "readFile");
    var n = e.writeFile;
    e.writeFile = i;
    function i(g, x, E, A) {
      return typeof E == "function" && (A = E, E = null), M(g, x, E, A);
      function M(R, j, q, F, $) {
        return n(R, j, q, function(k) {
          k && (k.code === "EMFILE" || k.code === "ENFILE") ? ue([M, [R, j, q, F], k, $ || Date.now(), Date.now()]) : typeof F == "function" &&
          F.apply(this, arguments);
        });
      }
      a(M, "go$writeFile");
    }
    a(i, "writeFile");
    var o = e.appendFile;
    o && (e.appendFile = s);
    function s(g, x, E, A) {
      return typeof E == "function" && (A = E, E = null), M(g, x, E, A);
      function M(R, j, q, F, $) {
        return o(R, j, q, function(k) {
          k && (k.code === "EMFILE" || k.code === "ENFILE") ? ue([M, [R, j, q, F], k, $ || Date.now(), Date.now()]) : typeof F == "function" &&
          F.apply(this, arguments);
        });
      }
      a(M, "go$appendFile");
    }
    a(s, "appendFile");
    var u = e.copyFile;
    u && (e.copyFile = y);
    function y(g, x, E, A) {
      return typeof E == "function" && (A = E, E = 0), M(g, x, E, A);
      function M(R, j, q, F, $) {
        return u(R, j, q, function(k) {
          k && (k.code === "EMFILE" || k.code === "ENFILE") ? ue([M, [R, j, q, F], k, $ || Date.now(), Date.now()]) : typeof F == "function" &&
          F.apply(this, arguments);
        });
      }
      a(M, "go$copyFile");
    }
    a(y, "copyFile");
    var f = e.readdir;
    e.readdir = d;
    var c = /^v[0-5]\./;
    function d(g, x, E) {
      typeof x == "function" && (E = x, x = null);
      var A = c.test(process.version) ? /* @__PURE__ */ a(function(j, q, F, $) {
        return f(j, M(
          j,
          q,
          F,
          $
        ));
      }, "go$readdir") : /* @__PURE__ */ a(function(j, q, F, $) {
        return f(j, q, M(
          j,
          q,
          F,
          $
        ));
      }, "go$readdir");
      return A(g, x, E);
      function M(R, j, q, F) {
        return function($, k) {
          $ && ($.code === "EMFILE" || $.code === "ENFILE") ? ue([
            A,
            [R, j, q],
            $,
            F || Date.now(),
            Date.now()
          ]) : (k && k.sort && k.sort(), typeof q == "function" && q.call(this, $, k));
        };
      }
    }
    if (a(d, "readdir"), process.version.substr(0, 4) === "v0.8") {
      var l = Ri(e);
      v = l.ReadStream, O = l.WriteStream;
    }
    var m = e.ReadStream;
    m && (v.prototype = Object.create(m.prototype), v.prototype.open = P);
    var p = e.WriteStream;
    p && (O.prototype = Object.create(p.prototype), O.prototype.open = L), Object.defineProperty(e, "ReadStream", {
      get: /* @__PURE__ */ a(function() {
        return v;
      }, "get"),
      set: /* @__PURE__ */ a(function(g) {
        v = g;
      }, "set"),
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "WriteStream", {
      get: /* @__PURE__ */ a(function() {
        return O;
      }, "get"),
      set: /* @__PURE__ */ a(function(g) {
        O = g;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var h = v;
    Object.defineProperty(e, "FileReadStream", {
      get: /* @__PURE__ */ a(function() {
        return h;
      }, "get"),
      set: /* @__PURE__ */ a(function(g) {
        h = g;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var w = O;
    Object.defineProperty(e, "FileWriteStream", {
      get: /* @__PURE__ */ a(function() {
        return w;
      }, "get"),
      set: /* @__PURE__ */ a(function(g) {
        w = g;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    function v(g, x) {
      return this instanceof v ? (m.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments);
    }
    a(v, "ReadStream");
    function P() {
      var g = this;
      te(g.path, g.flags, g.mode, function(x, E) {
        x ? (g.autoClose && g.destroy(), g.emit("error", x)) : (g.fd = E, g.emit("open", E), g.read());
      });
    }
    a(P, "ReadStream$open");
    function O(g, x) {
      return this instanceof O ? (p.apply(this, arguments), this) : O.apply(Object.create(O.prototype), arguments);
    }
    a(O, "WriteStream");
    function L() {
      var g = this;
      te(g.path, g.flags, g.mode, function(x, E) {
        x ? (g.destroy(), g.emit("error", x)) : (g.fd = E, g.emit("open", E));
      });
    }
    a(L, "WriteStream$open");
    function J(g, x) {
      return new e.ReadStream(g, x);
    }
    a(J, "createReadStream");
    function Y(g, x) {
      return new e.WriteStream(g, x);
    }
    a(Y, "createWriteStream");
    var Q = e.open;
    e.open = te;
    function te(g, x, E, A) {
      return typeof E == "function" && (A = E, E = null), M(g, x, E, A);
      function M(R, j, q, F, $) {
        return Q(R, j, q, function(k, Ns) {
          k && (k.code === "EMFILE" || k.code === "ENFILE") ? ue([M, [R, j, q, F], k, $ || Date.now(), Date.now()]) : typeof F == "function" &&
          F.apply(this, arguments);
        });
      }
      a(M, "go$open");
    }
    return a(te, "open"), e;
  }
  a(Ve, "patch");
  function ue(e) {
    se("ENQUEUE", e[0].name, e[1]), D[W].push(e), ze();
  }
  a(ue, "enqueue");
  var qe;
  function Dt() {
    for (var e = Date.now(), r = 0; r < D[W].length; ++r)
      D[W][r].length > 2 && (D[W][r][3] = e, D[W][r][4] = e);
    ze();
  }
  a(Dt, "resetQueue");
  function ze() {
    if (clearTimeout(qe), qe = void 0, D[W].length !== 0) {
      var e = D[W].shift(), r = e[0], t = e[1], n = e[2], i = e[3], o = e[4];
      if (i === void 0)
        se("RETRY", r.name, t), r.apply(null, t);
      else if (Date.now() - i >= 6e4) {
        se("TIMEOUT", r.name, t);
        var s = t.pop();
        typeof s == "function" && s.call(null, n);
      } else {
        var u = Date.now() - o, y = Math.max(o - i, 1), f = Math.min(y * 1.2, 100);
        u >= f ? (se("RETRY", r.name, t), r.apply(null, t.concat([i]))) : D[W].push(e);
      }
      qe === void 0 && (qe = setTimeout(ze, 0));
    }
  }
  a(ze, "retry");
});

// ../node_modules/fs-extra/lib/fs/index.js
var G = S((Z) => {
  "use strict";
  var Tt = C().fromCallback, U = le(), Ai = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchmod",
    "lchown",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((e) => typeof U[e] == "function");
  Object.assign(Z, U);
  Ai.forEach((e) => {
    Z[e] = Tt(U[e]);
  });
  Z.exists = function(e, r) {
    return typeof r == "function" ? U.exists(e, r) : new Promise((t) => U.exists(e, t));
  };
  Z.read = function(e, r, t, n, i, o) {
    return typeof o == "function" ? U.read(e, r, t, n, i, o) : new Promise((s, u) => {
      U.read(e, r, t, n, i, (y, f, c) => {
        if (y) return u(y);
        s({ bytesRead: f, buffer: c });
      });
    });
  };
  Z.write = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.write(e, r, ...t) : new Promise((n, i) => {
      U.write(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesWritten: s, buffer: u });
      });
    });
  };
  Z.readv = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.readv(e, r, ...t) : new Promise((n, i) => {
      U.readv(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesRead: s, buffers: u });
      });
    });
  };
  Z.writev = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.writev(e, r, ...t) : new Promise((n, i) => {
      U.writev(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesWritten: s, buffers: u });
      });
    });
  };
  typeof U.realpath.native == "function" ? Z.realpath.native = Tt(U.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
});

// ../node_modules/fs-extra/lib/mkdirs/utils.js
var Nt = S((Hs, Lt) => {
  "use strict";
  var Mi = b("path");
  Lt.exports.checkPath = /* @__PURE__ */ a(function(r) {
    if (process.platform === "win32" && /[<>:"|?*]/.test(r.replace(Mi.parse(r).root, ""))) {
      let n = new Error(`Path contains invalid characters: ${r}`);
      throw n.code = "EINVAL", n;
    }
  }, "checkPath");
});

// ../node_modules/fs-extra/lib/mkdirs/make-dir.js
var At = S((zs, Ke) => {
  "use strict";
  var Rt = G(), { checkPath: Ct } = Nt(), It = /* @__PURE__ */ a((e) => {
    let r = { mode: 511 };
    return typeof e == "number" ? e : { ...r, ...e }.mode;
  }, "getMode");
  Ke.exports.makeDir = async (e, r) => (Ct(e), Rt.mkdir(e, {
    mode: It(r),
    recursive: !0
  }));
  Ke.exports.makeDirSync = (e, r) => (Ct(e), Rt.mkdirSync(e, {
    mode: It(r),
    recursive: !0
  }));
});

// ../node_modules/fs-extra/lib/mkdirs/index.js
var K = S((Ks, Mt) => {
  "use strict";
  var $i = C().fromPromise, { makeDir: Wi, makeDirSync: Xe } = At(), Qe = $i(Wi);
  Mt.exports = {
    mkdirs: Qe,
    mkdirsSync: Xe,
    // alias
    mkdirp: Qe,
    mkdirpSync: Xe,
    ensureDir: Qe,
    ensureDirSync: Xe
  };
});

// ../node_modules/fs-extra/lib/path-exists/index.js
var ne = S((Xs, Wt) => {
  "use strict";
  var Ji = C().fromPromise, $t = G();
  function Bi(e) {
    return $t.access(e).then(() => !0).catch(() => !1);
  }
  a(Bi, "pathExists");
  Wt.exports = {
    pathExists: Ji(Bi),
    pathExistsSync: $t.existsSync
  };
});

// ../node_modules/fs-extra/lib/util/utimes.js
var Ze = S((Zs, Jt) => {
  "use strict";
  var fe = G(), Ui = C().fromPromise;
  async function Gi(e, r, t) {
    let n = await fe.open(e, "r+"), i = null;
    try {
      await fe.futimes(n, r, t);
    } finally {
      try {
        await fe.close(n);
      } catch (o) {
        i = o;
      }
    }
    if (i)
      throw i;
  }
  a(Gi, "utimesMillis");
  function Hi(e, r, t) {
    let n = fe.openSync(e, "r+");
    return fe.futimesSync(n, r, t), fe.closeSync(n);
  }
  a(Hi, "utimesMillisSync");
  Jt.exports = {
    utimesMillis: Ui(Gi),
    utimesMillisSync: Hi
  };
});

// ../node_modules/fs-extra/lib/util/stat.js
var ce = S((tc, Ht) => {
  "use strict";
  var pe = G(), I = b("path"), Bt = C().fromPromise;
  function Vi(e, r, t) {
    let n = t.dereference ? (i) => pe.stat(i, { bigint: !0 }) : (i) => pe.lstat(i, { bigint: !0 });
    return Promise.all([
      n(e),
      n(r).catch((i) => {
        if (i.code === "ENOENT") return null;
        throw i;
      })
    ]).then(([i, o]) => ({ srcStat: i, destStat: o }));
  }
  a(Vi, "getStats");
  function zi(e, r, t) {
    let n, i = t.dereference ? (s) => pe.statSync(s, { bigint: !0 }) : (s) => pe.lstatSync(s, { bigint: !0 }), o = i(e);
    try {
      n = i(r);
    } catch (s) {
      if (s.code === "ENOENT") return { srcStat: o, destStat: null };
      throw s;
    }
    return { srcStat: o, destStat: n };
  }
  a(zi, "getStatsSync");
  async function Yi(e, r, t, n) {
    let { srcStat: i, destStat: o } = await Vi(e, r, n);
    if (o) {
      if (ge(i, o)) {
        let s = I.basename(e), u = I.basename(r);
        if (t === "move" && s !== u && s.toLowerCase() === u.toLowerCase())
          return { srcStat: i, destStat: o, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !o.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${r}' with directory '${e}'.`);
      if (!i.isDirectory() && o.isDirectory())
        throw new Error(`Cannot overwrite directory '${r}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && et(e, r))
      throw new Error(Le(e, r, t));
    return { srcStat: i, destStat: o };
  }
  a(Yi, "checkPaths");
  function Ki(e, r, t, n) {
    let { srcStat: i, destStat: o } = zi(e, r, n);
    if (o) {
      if (ge(i, o)) {
        let s = I.basename(e), u = I.basename(r);
        if (t === "move" && s !== u && s.toLowerCase() === u.toLowerCase())
          return { srcStat: i, destStat: o, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !o.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${r}' with directory '${e}'.`);
      if (!i.isDirectory() && o.isDirectory())
        throw new Error(`Cannot overwrite directory '${r}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && et(e, r))
      throw new Error(Le(e, r, t));
    return { srcStat: i, destStat: o };
  }
  a(Ki, "checkPathsSync");
  async function Ut(e, r, t, n) {
    let i = I.resolve(I.dirname(e)), o = I.resolve(I.dirname(t));
    if (o === i || o === I.parse(o).root) return;
    let s;
    try {
      s = await pe.stat(o, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (ge(r, s))
      throw new Error(Le(e, t, n));
    return Ut(e, r, o, n);
  }
  a(Ut, "checkParentPaths");
  function Gt(e, r, t, n) {
    let i = I.resolve(I.dirname(e)), o = I.resolve(I.dirname(t));
    if (o === i || o === I.parse(o).root) return;
    let s;
    try {
      s = pe.statSync(o, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (ge(r, s))
      throw new Error(Le(e, t, n));
    return Gt(e, r, o, n);
  }
  a(Gt, "checkParentPathsSync");
  function ge(e, r) {
    return r.ino && r.dev && r.ino === e.ino && r.dev === e.dev;
  }
  a(ge, "areIdentical");
  function et(e, r) {
    let t = I.resolve(e).split(I.sep).filter((i) => i), n = I.resolve(r).split(I.sep).filter((i) => i);
    return t.every((i, o) => n[o] === i);
  }
  a(et, "isSrcSubdir");
  function Le(e, r, t) {
    return `Cannot ${t} '${e}' to a subdirectory of itself, '${r}'.`;
  }
  a(Le, "errMsg");
  Ht.exports = {
    // checkPaths
    checkPaths: Bt(Yi),
    checkPathsSync: Ki,
    // checkParent
    checkParentPaths: Bt(Ut),
    checkParentPathsSync: Gt,
    // Misc
    isSrcSubdir: et,
    areIdentical: ge
  };
});

// ../node_modules/fs-extra/lib/copy/copy.js
var Xt = S((nc, Kt) => {
  "use strict";
  var B = G(), ve = b("path"), { mkdirs: Xi } = K(), { pathExists: Qi } = ne(), { utimesMillis: Zi } = Ze(), Se = ce();
  async function eo(e, r, t = {}) {
    typeof t == "function" && (t = { filter: t }), t.clobber = "clobber" in t ? !!t.clobber : !0, t.overwrite = "overwrite" in t ? !!t.overwrite :
    t.clobber, t.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0001"
    );
    let { srcStat: n, destStat: i } = await Se.checkPaths(e, r, "copy", t);
    if (await Se.checkParentPaths(e, n, r, "copy"), !await zt(e, r, t)) return;
    let s = ve.dirname(r);
    await Qi(s) || await Xi(s), await Yt(i, e, r, t);
  }
  a(eo, "copy");
  async function zt(e, r, t) {
    return t.filter ? t.filter(e, r) : !0;
  }
  a(zt, "runFilter");
  async function Yt(e, r, t, n) {
    let o = await (n.dereference ? B.stat : B.lstat)(r);
    if (o.isDirectory()) return io(o, e, r, t, n);
    if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return to(o, e, r, t, n);
    if (o.isSymbolicLink()) return oo(e, r, t, n);
    throw o.isSocket() ? new Error(`Cannot copy a socket file: ${r}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${r}`) : new Error(
    `Unknown file: ${r}`);
  }
  a(Yt, "getStatsAndPerformCopy");
  async function to(e, r, t, n, i) {
    if (!r) return Vt(e, t, n, i);
    if (i.overwrite)
      return await B.unlink(n), Vt(e, t, n, i);
    if (i.errorOnExist)
      throw new Error(`'${n}' already exists`);
  }
  a(to, "onFile");
  async function Vt(e, r, t, n) {
    if (await B.copyFile(r, t), n.preserveTimestamps) {
      ro(e.mode) && await no(t, e.mode);
      let i = await B.stat(r);
      await Zi(t, i.atime, i.mtime);
    }
    return B.chmod(t, e.mode);
  }
  a(Vt, "copyFile");
  function ro(e) {
    return (e & 128) === 0;
  }
  a(ro, "fileIsNotWritable");
  function no(e, r) {
    return B.chmod(e, r | 128);
  }
  a(no, "makeFileWritable");
  async function io(e, r, t, n, i) {
    r || await B.mkdir(n);
    let o = await B.readdir(t);
    await Promise.all(o.map(async (s) => {
      let u = ve.join(t, s), y = ve.join(n, s);
      if (!await zt(u, y, i)) return;
      let { destStat: c } = await Se.checkPaths(u, y, "copy", i);
      return Yt(c, u, y, i);
    })), r || await B.chmod(n, e.mode);
  }
  a(io, "onDir");
  async function oo(e, r, t, n) {
    let i = await B.readlink(r);
    if (n.dereference && (i = ve.resolve(process.cwd(), i)), !e)
      return B.symlink(i, t);
    let o = null;
    try {
      o = await B.readlink(t);
    } catch (s) {
      if (s.code === "EINVAL" || s.code === "UNKNOWN") return B.symlink(i, t);
      throw s;
    }
    if (n.dereference && (o = ve.resolve(process.cwd(), o)), Se.isSrcSubdir(i, o))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
    if (Se.isSrcSubdir(o, i))
      throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
    return await B.unlink(t), B.symlink(i, t);
  }
  a(oo, "onLink");
  Kt.exports = eo;
});

// ../node_modules/fs-extra/lib/copy/copy-sync.js
var rr = S((oc, tr) => {
  "use strict";
  var H = le(), be = b("path"), ao = K().mkdirsSync, so = Ze().utimesMillisSync, Ee = ce();
  function co(e, r, t) {
    typeof t == "function" && (t = { filter: t }), t = t || {}, t.clobber = "clobber" in t ? !!t.clobber : !0, t.overwrite = "overwrite" in t ?
    !!t.overwrite : t.clobber, t.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0002"
    );
    let { srcStat: n, destStat: i } = Ee.checkPathsSync(e, r, "copy", t);
    if (Ee.checkParentPathsSync(e, n, r, "copy"), t.filter && !t.filter(e, r)) return;
    let o = be.dirname(r);
    return H.existsSync(o) || ao(o), Qt(i, e, r, t);
  }
  a(co, "copySync");
  function Qt(e, r, t, n) {
    let o = (n.dereference ? H.statSync : H.lstatSync)(r);
    if (o.isDirectory()) return ho(o, e, r, t, n);
    if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return uo(o, e, r, t, n);
    if (o.isSymbolicLink()) return vo(e, r, t, n);
    throw o.isSocket() ? new Error(`Cannot copy a socket file: ${r}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${r}`) : new Error(
    `Unknown file: ${r}`);
  }
  a(Qt, "getStats");
  function uo(e, r, t, n, i) {
    return r ? lo(e, t, n, i) : Zt(e, t, n, i);
  }
  a(uo, "onFile");
  function lo(e, r, t, n) {
    if (n.overwrite)
      return H.unlinkSync(t), Zt(e, r, t, n);
    if (n.errorOnExist)
      throw new Error(`'${t}' already exists`);
  }
  a(lo, "mayCopyFile");
  function Zt(e, r, t, n) {
    return H.copyFileSync(r, t), n.preserveTimestamps && fo(e.mode, r, t), tt(t, e.mode);
  }
  a(Zt, "copyFile");
  function fo(e, r, t) {
    return po(e) && mo(t, e), yo(r, t);
  }
  a(fo, "handleTimestamps");
  function po(e) {
    return (e & 128) === 0;
  }
  a(po, "fileIsNotWritable");
  function mo(e, r) {
    return tt(e, r | 128);
  }
  a(mo, "makeFileWritable");
  function tt(e, r) {
    return H.chmodSync(e, r);
  }
  a(tt, "setDestMode");
  function yo(e, r) {
    let t = H.statSync(e);
    return so(r, t.atime, t.mtime);
  }
  a(yo, "setDestTimestamps");
  function ho(e, r, t, n, i) {
    return r ? er(t, n, i) : wo(e.mode, t, n, i);
  }
  a(ho, "onDir");
  function wo(e, r, t, n) {
    return H.mkdirSync(t), er(r, t, n), tt(t, e);
  }
  a(wo, "mkDirAndCopy");
  function er(e, r, t) {
    H.readdirSync(e).forEach((n) => go(n, e, r, t));
  }
  a(er, "copyDir");
  function go(e, r, t, n) {
    let i = be.join(r, e), o = be.join(t, e);
    if (n.filter && !n.filter(i, o)) return;
    let { destStat: s } = Ee.checkPathsSync(i, o, "copy", n);
    return Qt(s, i, o, n);
  }
  a(go, "copyDirItem");
  function vo(e, r, t, n) {
    let i = H.readlinkSync(r);
    if (n.dereference && (i = be.resolve(process.cwd(), i)), e) {
      let o;
      try {
        o = H.readlinkSync(t);
      } catch (s) {
        if (s.code === "EINVAL" || s.code === "UNKNOWN") return H.symlinkSync(i, t);
        throw s;
      }
      if (n.dereference && (o = be.resolve(process.cwd(), o)), Ee.isSrcSubdir(i, o))
        throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
      if (Ee.isSrcSubdir(o, i))
        throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
      return So(i, t);
    } else
      return H.symlinkSync(i, t);
  }
  a(vo, "onLink");
  function So(e, r) {
    return H.unlinkSync(r), H.symlinkSync(e, r);
  }
  a(So, "copyLink");
  tr.exports = co;
});

// ../node_modules/fs-extra/lib/copy/index.js
var Ne = S((sc, nr) => {
  "use strict";
  var bo = C().fromPromise;
  nr.exports = {
    copy: bo(Xt()),
    copySync: rr()
  };
});

// ../node_modules/fs-extra/lib/remove/index.js
var _e = S((cc, or) => {
  "use strict";
  var ir = le(), Eo = C().fromCallback;
  function _o(e, r) {
    ir.rm(e, { recursive: !0, force: !0 }, r);
  }
  a(_o, "remove");
  function xo(e) {
    ir.rmSync(e, { recursive: !0, force: !0 });
  }
  a(xo, "removeSync");
  or.exports = {
    remove: Eo(_o),
    removeSync: xo
  };
});

// ../node_modules/fs-extra/lib/empty/index.js
var mr = S((lc, pr) => {
  "use strict";
  var Oo = C().fromPromise, cr = G(), ur = b("path"), lr = K(), fr = _e(), ar = Oo(/* @__PURE__ */ a(async function(r) {
    let t;
    try {
      t = await cr.readdir(r);
    } catch {
      return lr.mkdirs(r);
    }
    return Promise.all(t.map((n) => fr.remove(ur.join(r, n))));
  }, "emptyDir"));
  function sr(e) {
    let r;
    try {
      r = cr.readdirSync(e);
    } catch {
      return lr.mkdirsSync(e);
    }
    r.forEach((t) => {
      t = ur.join(e, t), fr.removeSync(t);
    });
  }
  a(sr, "emptyDirSync");
  pr.exports = {
    emptyDirSync: sr,
    emptydirSync: sr,
    emptyDir: ar,
    emptydir: ar
  };
});

// ../node_modules/fs-extra/lib/ensure/file.js
var wr = S((pc, hr) => {
  "use strict";
  var Po = C().fromPromise, dr = b("path"), ee = G(), yr = K();
  async function Fo(e) {
    let r;
    try {
      r = await ee.stat(e);
    } catch {
    }
    if (r && r.isFile()) return;
    let t = dr.dirname(e), n = null;
    try {
      n = await ee.stat(t);
    } catch (i) {
      if (i.code === "ENOENT") {
        await yr.mkdirs(t), await ee.writeFile(e, "");
        return;
      } else
        throw i;
    }
    n.isDirectory() ? await ee.writeFile(e, "") : await ee.readdir(t);
  }
  a(Fo, "createFile");
  function ko(e) {
    let r;
    try {
      r = ee.statSync(e);
    } catch {
    }
    if (r && r.isFile()) return;
    let t = dr.dirname(e);
    try {
      ee.statSync(t).isDirectory() || ee.readdirSync(t);
    } catch (n) {
      if (n && n.code === "ENOENT") yr.mkdirsSync(t);
      else throw n;
    }
    ee.writeFileSync(e, "");
  }
  a(ko, "createFileSync");
  hr.exports = {
    createFile: Po(Fo),
    createFileSync: ko
  };
});

// ../node_modules/fs-extra/lib/ensure/link.js
var Er = S((dc, br) => {
  "use strict";
  var jo = C().fromPromise, gr = b("path"), ie = G(), vr = K(), { pathExists: Do } = ne(), { areIdentical: Sr } = ce();
  async function qo(e, r) {
    let t;
    try {
      t = await ie.lstat(r);
    } catch {
    }
    let n;
    try {
      n = await ie.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    if (t && Sr(n, t)) return;
    let i = gr.dirname(r);
    await Do(i) || await vr.mkdirs(i), await ie.link(e, r);
  }
  a(qo, "createLink");
  function To(e, r) {
    let t;
    try {
      t = ie.lstatSync(r);
    } catch {
    }
    try {
      let o = ie.lstatSync(e);
      if (t && Sr(o, t)) return;
    } catch (o) {
      throw o.message = o.message.replace("lstat", "ensureLink"), o;
    }
    let n = gr.dirname(r);
    return ie.existsSync(n) || vr.mkdirsSync(n), ie.linkSync(e, r);
  }
  a(To, "createLinkSync");
  br.exports = {
    createLink: jo(qo),
    createLinkSync: To
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-paths.js
var xr = S((hc, _r) => {
  "use strict";
  var oe = b("path"), xe = G(), { pathExists: Lo } = ne(), No = C().fromPromise;
  async function Ro(e, r) {
    if (oe.isAbsolute(e)) {
      try {
        await xe.lstat(e);
      } catch (o) {
        throw o.message = o.message.replace("lstat", "ensureSymlink"), o;
      }
      return {
        toCwd: e,
        toDst: e
      };
    }
    let t = oe.dirname(r), n = oe.join(t, e);
    if (await Lo(n))
      return {
        toCwd: n,
        toDst: e
      };
    try {
      await xe.lstat(e);
    } catch (o) {
      throw o.message = o.message.replace("lstat", "ensureSymlink"), o;
    }
    return {
      toCwd: e,
      toDst: oe.relative(t, e)
    };
  }
  a(Ro, "symlinkPaths");
  function Co(e, r) {
    if (oe.isAbsolute(e)) {
      if (!xe.existsSync(e)) throw new Error("absolute srcpath does not exist");
      return {
        toCwd: e,
        toDst: e
      };
    }
    let t = oe.dirname(r), n = oe.join(t, e);
    if (xe.existsSync(n))
      return {
        toCwd: n,
        toDst: e
      };
    if (!xe.existsSync(e)) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: oe.relative(t, e)
    };
  }
  a(Co, "symlinkPathsSync");
  _r.exports = {
    symlinkPaths: No(Ro),
    symlinkPathsSync: Co
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-type.js
var Fr = S((gc, Pr) => {
  "use strict";
  var Or = G(), Io = C().fromPromise;
  async function Ao(e, r) {
    if (r) return r;
    let t;
    try {
      t = await Or.lstat(e);
    } catch {
      return "file";
    }
    return t && t.isDirectory() ? "dir" : "file";
  }
  a(Ao, "symlinkType");
  function Mo(e, r) {
    if (r) return r;
    let t;
    try {
      t = Or.lstatSync(e);
    } catch {
      return "file";
    }
    return t && t.isDirectory() ? "dir" : "file";
  }
  a(Mo, "symlinkTypeSync");
  Pr.exports = {
    symlinkType: Io(Ao),
    symlinkTypeSync: Mo
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink.js
var qr = S((Sc, Dr) => {
  "use strict";
  var $o = C().fromPromise, kr = b("path"), X = G(), { mkdirs: Wo, mkdirsSync: Jo } = K(), { symlinkPaths: Bo, symlinkPathsSync: Uo } = xr(),
  { symlinkType: Go, symlinkTypeSync: Ho } = Fr(), { pathExists: Vo } = ne(), { areIdentical: jr } = ce();
  async function zo(e, r, t) {
    let n;
    try {
      n = await X.lstat(r);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let [u, y] = await Promise.all([
        X.stat(e),
        X.stat(r)
      ]);
      if (jr(u, y)) return;
    }
    let i = await Bo(e, r);
    e = i.toDst;
    let o = await Go(i.toCwd, t), s = kr.dirname(r);
    return await Vo(s) || await Wo(s), X.symlink(e, r, o);
  }
  a(zo, "createSymlink");
  function Yo(e, r, t) {
    let n;
    try {
      n = X.lstatSync(r);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let u = X.statSync(e), y = X.statSync(r);
      if (jr(u, y)) return;
    }
    let i = Uo(e, r);
    e = i.toDst, t = Ho(i.toCwd, t);
    let o = kr.dirname(r);
    return X.existsSync(o) || Jo(o), X.symlinkSync(e, r, t);
  }
  a(Yo, "createSymlinkSync");
  Dr.exports = {
    createSymlink: $o(zo),
    createSymlinkSync: Yo
  };
});

// ../node_modules/fs-extra/lib/ensure/index.js
var Mr = S((Ec, Ar) => {
  "use strict";
  var { createFile: Tr, createFileSync: Lr } = wr(), { createLink: Nr, createLinkSync: Rr } = Er(), { createSymlink: Cr, createSymlinkSync: Ir } = qr();
  Ar.exports = {
    // file
    createFile: Tr,
    createFileSync: Lr,
    ensureFile: Tr,
    ensureFileSync: Lr,
    // link
    createLink: Nr,
    createLinkSync: Rr,
    ensureLink: Nr,
    ensureLinkSync: Rr,
    // symlink
    createSymlink: Cr,
    createSymlinkSync: Ir,
    ensureSymlink: Cr,
    ensureSymlinkSync: Ir
  };
});

// ../node_modules/jsonfile/utils.js
var Re = S((_c, $r) => {
  function Ko(e, { EOL: r = `
`, finalEOL: t = !0, replacer: n = null, spaces: i } = {}) {
    let o = t ? r : "";
    return JSON.stringify(e, n, i).replace(/\n/g, r) + o;
  }
  a(Ko, "stringify");
  function Xo(e) {
    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
  }
  a(Xo, "stripBom");
  $r.exports = { stringify: Ko, stripBom: Xo };
});

// ../node_modules/jsonfile/index.js
var Ur = S((Oc, Br) => {
  var me;
  try {
    me = le();
  } catch {
    me = b("fs");
  }
  var Ce = C(), { stringify: Wr, stripBom: Jr } = Re();
  async function Qo(e, r = {}) {
    typeof r == "string" && (r = { encoding: r });
    let t = r.fs || me, n = "throws" in r ? r.throws : !0, i = await Ce.fromCallback(t.readFile)(e, r);
    i = Jr(i);
    let o;
    try {
      o = JSON.parse(i, r ? r.reviver : null);
    } catch (s) {
      if (n)
        throw s.message = `${e}: ${s.message}`, s;
      return null;
    }
    return o;
  }
  a(Qo, "_readFile");
  var Zo = Ce.fromPromise(Qo);
  function ea(e, r = {}) {
    typeof r == "string" && (r = { encoding: r });
    let t = r.fs || me, n = "throws" in r ? r.throws : !0;
    try {
      let i = t.readFileSync(e, r);
      return i = Jr(i), JSON.parse(i, r.reviver);
    } catch (i) {
      if (n)
        throw i.message = `${e}: ${i.message}`, i;
      return null;
    }
  }
  a(ea, "readFileSync");
  async function ta(e, r, t = {}) {
    let n = t.fs || me, i = Wr(r, t);
    await Ce.fromCallback(n.writeFile)(e, i, t);
  }
  a(ta, "_writeFile");
  var ra = Ce.fromPromise(ta);
  function na(e, r, t = {}) {
    let n = t.fs || me, i = Wr(r, t);
    return n.writeFileSync(e, i, t);
  }
  a(na, "writeFileSync");
  var ia = {
    readFile: Zo,
    readFileSync: ea,
    writeFile: ra,
    writeFileSync: na
  };
  Br.exports = ia;
});

// ../node_modules/fs-extra/lib/json/jsonfile.js
var Hr = S((Fc, Gr) => {
  "use strict";
  var Ie = Ur();
  Gr.exports = {
    // jsonfile exports
    readJson: Ie.readFile,
    readJsonSync: Ie.readFileSync,
    writeJson: Ie.writeFile,
    writeJsonSync: Ie.writeFileSync
  };
});

// ../node_modules/fs-extra/lib/output-file/index.js
var Ae = S((kc, Yr) => {
  "use strict";
  var oa = C().fromPromise, rt = G(), Vr = b("path"), zr = K(), aa = ne().pathExists;
  async function sa(e, r, t = "utf-8") {
    let n = Vr.dirname(e);
    return await aa(n) || await zr.mkdirs(n), rt.writeFile(e, r, t);
  }
  a(sa, "outputFile");
  function ca(e, ...r) {
    let t = Vr.dirname(e);
    rt.existsSync(t) || zr.mkdirsSync(t), rt.writeFileSync(e, ...r);
  }
  a(ca, "outputFileSync");
  Yr.exports = {
    outputFile: oa(sa),
    outputFileSync: ca
  };
});

// ../node_modules/fs-extra/lib/json/output-json.js
var Xr = S((Dc, Kr) => {
  "use strict";
  var { stringify: ua } = Re(), { outputFile: la } = Ae();
  async function fa(e, r, t = {}) {
    let n = ua(r, t);
    await la(e, n, t);
  }
  a(fa, "outputJson");
  Kr.exports = fa;
});

// ../node_modules/fs-extra/lib/json/output-json-sync.js
var Zr = S((Tc, Qr) => {
  "use strict";
  var { stringify: pa } = Re(), { outputFileSync: ma } = Ae();
  function da(e, r, t) {
    let n = pa(r, t);
    ma(e, n, t);
  }
  a(da, "outputJsonSync");
  Qr.exports = da;
});

// ../node_modules/fs-extra/lib/json/index.js
var tn = S((Nc, en) => {
  "use strict";
  var ya = C().fromPromise, V = Hr();
  V.outputJson = ya(Xr());
  V.outputJsonSync = Zr();
  V.outputJSON = V.outputJson;
  V.outputJSONSync = V.outputJsonSync;
  V.writeJSON = V.writeJson;
  V.writeJSONSync = V.writeJsonSync;
  V.readJSON = V.readJson;
  V.readJSONSync = V.readJsonSync;
  en.exports = V;
});

// ../node_modules/fs-extra/lib/move/move.js
var sn = S((Rc, an) => {
  "use strict";
  var ha = G(), rn = b("path"), { copy: wa } = Ne(), { remove: on } = _e(), { mkdirp: ga } = K(), { pathExists: va } = ne(), nn = ce();
  async function Sa(e, r, t = {}) {
    let n = t.overwrite || t.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = await nn.checkPaths(e, r, "move", t);
    await nn.checkParentPaths(e, i, r, "move");
    let s = rn.dirname(r);
    return rn.parse(s).root !== s && await ga(s), ba(e, r, n, o);
  }
  a(Sa, "move");
  async function ba(e, r, t, n) {
    if (!n) {
      if (t)
        await on(r);
      else if (await va(r))
        throw new Error("dest already exists.");
    }
    try {
      await ha.rename(e, r);
    } catch (i) {
      if (i.code !== "EXDEV")
        throw i;
      await Ea(e, r, t);
    }
  }
  a(ba, "doRename");
  async function Ea(e, r, t) {
    return await wa(e, r, {
      overwrite: t,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), on(e);
  }
  a(Ea, "moveAcrossDevice");
  an.exports = Sa;
});

// ../node_modules/fs-extra/lib/move/move-sync.js
var pn = S((Ic, fn) => {
  "use strict";
  var un = le(), it = b("path"), _a = Ne().copySync, ln = _e().removeSync, xa = K().mkdirpSync, cn = ce();
  function Oa(e, r, t) {
    t = t || {};
    let n = t.overwrite || t.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = cn.checkPathsSync(e, r, "move", t);
    return cn.checkParentPathsSync(e, i, r, "move"), Pa(r) || xa(it.dirname(r)), Fa(e, r, n, o);
  }
  a(Oa, "moveSync");
  function Pa(e) {
    let r = it.dirname(e);
    return it.parse(r).root === r;
  }
  a(Pa, "isParentRoot");
  function Fa(e, r, t, n) {
    if (n) return nt(e, r, t);
    if (t)
      return ln(r), nt(e, r, t);
    if (un.existsSync(r)) throw new Error("dest already exists.");
    return nt(e, r, t);
  }
  a(Fa, "doRename");
  function nt(e, r, t) {
    try {
      un.renameSync(e, r);
    } catch (n) {
      if (n.code !== "EXDEV") throw n;
      return ka(e, r, t);
    }
  }
  a(nt, "rename");
  function ka(e, r, t) {
    return _a(e, r, {
      overwrite: t,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), ln(e);
  }
  a(ka, "moveAcrossDevice");
  fn.exports = Oa;
});

// ../node_modules/fs-extra/lib/move/index.js
var dn = S((Mc, mn) => {
  "use strict";
  var ja = C().fromPromise;
  mn.exports = {
    move: ja(sn()),
    moveSync: pn()
  };
});

// ../node_modules/fs-extra/lib/index.js
var Oe = S(($c, yn) => {
  "use strict";
  yn.exports = {
    // Export promiseified graceful-fs:
    ...G(),
    // Export extra methods:
    ...Ne(),
    ...mr(),
    ...Mr(),
    ...tn(),
    ...K(),
    ...dn(),
    ...Ae(),
    ...ne(),
    ..._e()
  };
});

// ../node_modules/tslib/tslib.es6.mjs
var $n = {};
Pi($n, {
  __addDisposableResource: () => An,
  __assign: () => Me,
  __asyncDelegator: () => Dn,
  __asyncGenerator: () => jn,
  __asyncValues: () => qn,
  __await: () => de,
  __awaiter: () => _n,
  __classPrivateFieldGet: () => Rn,
  __classPrivateFieldIn: () => In,
  __classPrivateFieldSet: () => Cn,
  __createBinding: () => We,
  __decorate: () => Sn,
  __disposeResources: () => Mn,
  __esDecorate: () => Ta,
  __exportStar: () => On,
  __extends: () => gn,
  __generator: () => xn,
  __importDefault: () => Nn,
  __importStar: () => Ln,
  __makeTemplateObject: () => Tn,
  __metadata: () => En,
  __param: () => bn,
  __propKey: () => Na,
  __read: () => ut,
  __rest: () => vn,
  __runInitializers: () => La,
  __setFunctionName: () => Ra,
  __spread: () => Pn,
  __spreadArray: () => kn,
  __spreadArrays: () => Fn,
  __values: () => $e,
  default: () => Aa
});
function gn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  ct(e, r);
  function t() {
    this.constructor = e;
  }
  a(t, "__"), e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function vn(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]]);
  return t;
}
function Sn(e, r, t, n) {
  var i = arguments.length, o = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, r, t, n);
  else for (var u = e.length - 1; u >= 0; u--) (s = e[u]) && (o = (i < 3 ? s(o) : i > 3 ? s(r, t, o) : s(r, t)) || o);
  return i > 3 && o && Object.defineProperty(r, t, o), o;
}
function bn(e, r) {
  return function(t, n) {
    r(t, n, e);
  };
}
function Ta(e, r, t, n, i, o) {
  function s(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  a(s, "accept");
  for (var u = n.kind, y = u === "getter" ? "get" : u === "setter" ? "set" : "value", f = !r && e ? n.static ? e : e.prototype : null, c = r ||
  (f ? Object.getOwnPropertyDescriptor(f, n.name) : {}), d, l = !1, m = t.length - 1; m >= 0; m--) {
    var p = {};
    for (var h in n) p[h] = h === "access" ? {} : n[h];
    for (var h in n.access) p.access[h] = n.access[h];
    p.addInitializer = function(v) {
      if (l) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(s(v || null));
    };
    var w = (0, t[m])(u === "accessor" ? { get: c.get, set: c.set } : c[y], p);
    if (u === "accessor") {
      if (w === void 0) continue;
      if (w === null || typeof w != "object") throw new TypeError("Object expected");
      (d = s(w.get)) && (c.get = d), (d = s(w.set)) && (c.set = d), (d = s(w.init)) && i.unshift(d);
    } else (d = s(w)) && (u === "field" ? i.unshift(d) : c[y] = d);
  }
  f && Object.defineProperty(f, n.name, c), l = !0;
}
function La(e, r, t) {
  for (var n = arguments.length > 2, i = 0; i < r.length; i++)
    t = n ? r[i].call(e, t) : r[i].call(e);
  return n ? t : void 0;
}
function Na(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ra(e, r, t) {
  return typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0,
  value: t ? "".concat(t, " ", r) : r });
}
function En(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, r);
}
function _n(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return a(i, "adopt"), new (t || (t = Promise))(function(o, s) {
    function u(c) {
      try {
        f(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    a(u, "fulfilled");
    function y(c) {
      try {
        f(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    a(y, "rejected");
    function f(c) {
      c.done ? o(c.value) : i(c.value).then(u, y);
    }
    a(f, "step"), f((n = n.apply(e, r || [])).next());
  });
}
function xn(e, r) {
  var t = { label: 0, sent: /* @__PURE__ */ a(function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, "sent"), trys: [], ops: [] }, n, i, o, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(f) {
    return function(c) {
      return y([f, c]);
    };
  }
  function y(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, f[0] && (t = 0)), t; ) try {
      if (n = 1, i && (o = f[0] & 2 ? i.return : f[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, f[1])).done)
       return o;
      switch (i = 0, o && (f = [f[0] & 2, o.value]), f[0]) {
        case 0:
        case 1:
          o = f;
          break;
        case 4:
          return t.label++, { value: f[1], done: !1 };
        case 5:
          t.label++, i = f[1], f = [0];
          continue;
        case 7:
          f = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            t = 0;
            continue;
          }
          if (f[0] === 3 && (!o || f[1] > o[0] && f[1] < o[3])) {
            t.label = f[1];
            break;
          }
          if (f[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = f;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(f);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      f = r.call(e, t);
    } catch (c) {
      f = [6, c], i = 0;
    } finally {
      n = o = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function On(e, r) {
  for (var t in e) t !== "default" && !Object.prototype.hasOwnProperty.call(r, t) && We(r, e, t);
}
function $e(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: /* @__PURE__ */ a(function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }, "next")
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ut(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, o = [], s;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) o.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}
function Pn() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e = e.concat(ut(arguments[r]));
  return e;
}
function Fn() {
  for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
  for (var n = Array(e), i = 0, r = 0; r < t; r++)
    for (var o = arguments[r], s = 0, u = o.length; s < u; s++, i++)
      n[i] = o[s];
  return n;
}
function kn(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, i = r.length, o; n < i; n++)
    (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}
function de(e) {
  return this instanceof de ? (this.v = e, this) : new de(e);
}
function jn(e, r, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(l) {
    n[l] && (i[l] = function(m) {
      return new Promise(function(p, h) {
        o.push([l, m, p, h]) > 1 || u(l, m);
      });
    });
  }
  function u(l, m) {
    try {
      y(n[l](m));
    } catch (p) {
      d(o[0][3], p);
    }
  }
  function y(l) {
    l.value instanceof de ? Promise.resolve(l.value.v).then(f, c) : d(o[0][2], l);
  }
  function f(l) {
    u("next", l);
  }
  function c(l) {
    u("throw", l);
  }
  function d(l, m) {
    l(m), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
}
function Dn(e) {
  var r, t;
  return r = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), r[Symbol.iterator] = function() {
    return this;
  }, r;
  function n(i, o) {
    r[i] = e[i] ? function(s) {
      return (t = !t) ? { value: de(e[i](s)), done: !1 } : o ? o(s) : s;
    } : o;
  }
}
function qn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof $e == "function" ? $e(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] =
  function() {
    return this;
  }, t);
  function n(o) {
    t[o] = e[o] && function(s) {
      return new Promise(function(u, y) {
        s = e[o](s), i(u, y, s.done, s.value);
      });
    };
  }
  function i(o, s, u, y) {
    Promise.resolve(y).then(function(f) {
      o({ value: f, done: u });
    }, s);
  }
}
function Tn(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}
function Ln(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var t in e) t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && We(r, e, t);
  return Ca(r, e), r;
}
function Nn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Rn(e, r, t, n) {
  if (t === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not\
 declare it");
  return t === "m" ? n : t === "a" ? n.call(e) : n ? n.value : r.get(e);
}
function Cn(e, r, t, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not \
declare it");
  return n === "a" ? i.call(e, t) : i ? i.value = t : r.set(e, t), t;
}
function In(e, r) {
  if (r === null || typeof r != "object" && typeof r != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function An(e, r, t) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = r[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n = r[Symbol.dispose];
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    e.stack.push({ value: r, dispose: n, async: t });
  } else t && e.stack.push({ async: !0 });
  return r;
}
function Mn(e) {
  function r(n) {
    e.error = e.hasError ? new Ia(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0;
  }
  a(r, "fail");
  function t() {
    for (; e.stack.length; ) {
      var n = e.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async) return Promise.resolve(i).then(t, function(o) {
          return r(o), t();
        });
      } catch (o) {
        r(o);
      }
    }
    if (e.hasError) throw e.error;
  }
  return a(t, "next"), t();
}
var ct, Me, We, Ca, Ia, Aa, Wn = Oi(() => {
  ct = /* @__PURE__ */ a(function(e, r) {
    return ct = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
      t.__proto__ = n;
    } || function(t, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }, ct(e, r);
  }, "extendStatics");
  a(gn, "__extends");
  Me = /* @__PURE__ */ a(function() {
    return Me = Object.assign || /* @__PURE__ */ a(function(r) {
      for (var t, n = 1, i = arguments.length; n < i; n++) {
        t = arguments[n];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
      }
      return r;
    }, "__assign"), Me.apply(this, arguments);
  }, "__assign");
  a(vn, "__rest");
  a(Sn, "__decorate");
  a(bn, "__param");
  a(Ta, "__esDecorate");
  a(La, "__runInitializers");
  a(Na, "__propKey");
  a(Ra, "__setFunctionName");
  a(En, "__metadata");
  a(_n, "__awaiter");
  a(xn, "__generator");
  We = Object.create ? function(e, r, t, n) {
    n === void 0 && (n = t);
    var i = Object.getOwnPropertyDescriptor(r, t);
    (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return r[t];
    }, "get") }), Object.defineProperty(e, n, i);
  } : function(e, r, t, n) {
    n === void 0 && (n = t), e[n] = r[t];
  };
  a(On, "__exportStar");
  a($e, "__values");
  a(ut, "__read");
  a(Pn, "__spread");
  a(Fn, "__spreadArrays");
  a(kn, "__spreadArray");
  a(de, "__await");
  a(jn, "__asyncGenerator");
  a(Dn, "__asyncDelegator");
  a(qn, "__asyncValues");
  a(Tn, "__makeTemplateObject");
  Ca = Object.create ? function(e, r) {
    Object.defineProperty(e, "default", { enumerable: !0, value: r });
  } : function(e, r) {
    e.default = r;
  };
  a(Ln, "__importStar");
  a(Nn, "__importDefault");
  a(Rn, "__classPrivateFieldGet");
  a(Cn, "__classPrivateFieldSet");
  a(In, "__classPrivateFieldIn");
  a(An, "__addDisposableResource");
  Ia = typeof SuppressedError == "function" ? SuppressedError : function(e, r, t) {
    var n = new Error(t);
    return n.name = "SuppressedError", n.error = e, n.suppressed = r, n;
  };
  a(Mn, "__disposeResources");
  Aa = {
    __extends: gn,
    __assign: Me,
    __rest: vn,
    __decorate: Sn,
    __param: bn,
    __metadata: En,
    __awaiter: _n,
    __generator: xn,
    __createBinding: We,
    __exportStar: On,
    __values: $e,
    __read: ut,
    __spread: Pn,
    __spreadArrays: Fn,
    __spreadArray: kn,
    __await: de,
    __asyncGenerator: jn,
    __asyncDelegator: Dn,
    __asyncValues: qn,
    __makeTemplateObject: Tn,
    __importStar: Ln,
    __importDefault: Nn,
    __classPrivateFieldGet: Rn,
    __classPrivateFieldSet: Cn,
    __classPrivateFieldIn: In,
    __addDisposableResource: An,
    __disposeResources: Mn
  };
});

// ../node_modules/@yarnpkg/esbuild-plugin-pnp/lib/index.js
var Bn = S((Je) => {
  "use strict";
  Object.defineProperty(Je, "__esModule", { value: !0 });
  Je.pnpPlugin = void 0;
  var Jn = (Wn(), Fi($n)), Ma = Jn.__importStar(b("fs")), $a = Jn.__importDefault(b("path")), Wa = /()/, Ja = [".tsx", ".ts", ".jsx", ".mjs",
  ".cjs", ".js", ".css", ".json"];
  function Ba(e) {
    return e.map((r) => {
      let t = r.indexOf("*");
      return t !== -1 ? { prefix: r.slice(0, t), suffix: r.slice(t + 1) } : r;
    });
  }
  a(Ba, "parseExternals");
  function Ua(e, r) {
    for (let t of r)
      if (typeof t == "object") {
        if (e.length >= t.prefix.length + t.suffix.length && e.startsWith(t.prefix) && e.endsWith(t.suffix))
          return !0;
      } else if (e === t || !t.startsWith("/") && !t.startsWith("./") && !t.startsWith("../") && t !== "." && t !== ".." && e.startsWith(`${t}\
/`))
        return !0;
    return !1;
  }
  a(Ua, "isExternal");
  async function Ga(e) {
    return {
      contents: await Ma.promises.readFile(e.path),
      loader: "default",
      // For regular imports in the `file` namespace, resolveDir is the directory the
      // file being resolved lives in. For all other virtual modules, this defaults to
      // empty string: ""
      // A sensible value for pnp imports is the same as the `file` namespace, as pnp
      // still resolves to files on disk (in the cache).
      resolveDir: $a.default.dirname(e.path)
    };
  }
  a(Ga, "defaultOnLoad");
  async function Ha(e, { resolvedPath: r, error: t, watchFiles: n }) {
    let i = t ? [{ text: t.message }] : [], o;
    switch (e.kind) {
      case "require-call":
      case "require-resolve":
      case "dynamic-import":
        o = { warnings: i };
        break;
      default:
        o = { errors: i };
        break;
    }
    return r !== null ? { namespace: "pnp", path: r, watchFiles: n } : { external: !0, ...o, watchFiles: n };
  }
  a(Ha, "defaultOnResolve");
  function Va({ baseDir: e = process.cwd(), extensions: r = Ja, filter: t = Wa, onResolve: n = Ha, onLoad: i = Ga } = {}) {
    return {
      name: "@yarnpkg/esbuild-plugin-pnp",
      setup(o) {
        var s, u;
        let { findPnpApi: y } = b("module");
        if (typeof y > "u")
          return;
        let f = Ba((s = o.initialOptions.external) !== null && s !== void 0 ? s : []), c = (u = o.initialOptions.platform) !== null && u !==
        void 0 ? u : "browser", d = c === "node", l = new Set(o.initialOptions.conditions);
        l.add("default"), (c === "browser" || c === "node") && l.add(c);
        let m = new Set(l);
        m.add("import");
        let p = new Set(l);
        p.add("require"), o.onResolve({ filter: t }, (h) => {
          var w, v;
          if (Ua(h.path, f))
            return { external: !0 };
          let P = l;
          h.kind === "dynamic-import" || h.kind === "import-statement" ? P = m : (h.kind === "require-call" || h.kind === "require-resolve") &&
          (P = p);
          let O = h.resolveDir ? `${h.resolveDir}/` : h.importer ? h.importer : `${e}/`, L = y(O);
          if (!L)
            return;
          let J = null, Y;
          try {
            J = L.resolveRequest(h.path, O, {
              conditions: P,
              considerBuiltins: d,
              extensions: r
            });
          } catch (te) {
            Y = te;
          }
          let Q = [L.resolveRequest("pnpapi", null)];
          if (J) {
            let te = L.findPackageLocator(J);
            if (te) {
              let g = L.getPackageInformation(te);
              g?.linkType === "SOFT" && Q.push((v = (w = L.resolveVirtual) === null || w === void 0 ? void 0 : w.call(L, J)) !== null && v !==
              void 0 ? v : J);
            }
          }
          return n(h, { resolvedPath: J, error: Y, watchFiles: Q });
        }), o.onLoad !== null && o.onLoad({ filter: t }, i);
      }
    };
  }
  a(Va, "pnpPlugin");
  Je.pnpPlugin = Va;
});

// ../node_modules/esbuild-plugin-alias/index.js
var Gn = S((iu, Un) => {
  Un.exports = (e) => {
    let r = Object.keys(e), t = new RegExp(`^(${r.map((n) => za(n)).join("|")})$`);
    return {
      name: "alias",
      setup(n) {
        n.onResolve({ filter: t }, (i) => ({
          path: e[i.path]
        }));
      }
    };
  };
  function za(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  a(za, "escapeRegExp");
});

// ../node_modules/ejs/lib/utils.js
var Vn = S((z) => {
  "use strict";
  var Ya = /[|\\{}()[\]^$+*?.]/g, Ka = Object.prototype.hasOwnProperty, lt = /* @__PURE__ */ a(function(e, r) {
    return Ka.apply(e, [r]);
  }, "hasOwn");
  z.escapeRegExpChars = function(e) {
    return e ? String(e).replace(Ya, "\\$&") : "";
  };
  var Xa = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  }, Qa = /[&<>'"]/g;
  function Za(e) {
    return Xa[e] || e;
  }
  a(Za, "encode_char");
  var es = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
  z.escapeXML = function(e) {
    return e == null ? "" : String(e).replace(Qa, Za);
  };
  function Hn() {
    return Function.prototype.toString.call(this) + `;
` + es;
  }
  a(Hn, "escapeXMLToString");
  try {
    typeof Object.defineProperty == "function" ? Object.defineProperty(z.escapeXML, "toString", { value: Hn }) : z.escapeXML.toString = Hn;
  } catch {
    console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
  }
  z.shallowCopy = function(e, r) {
    if (r = r || {}, e != null)
      for (var t in r)
        lt(r, t) && (t === "__proto__" || t === "constructor" || (e[t] = r[t]));
    return e;
  };
  z.shallowCopyFromList = function(e, r, t) {
    if (t = t || [], r = r || {}, e != null)
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        if (typeof r[i] < "u") {
          if (!lt(r, i) || i === "__proto__" || i === "constructor")
            continue;
          e[i] = r[i];
        }
      }
    return e;
  };
  z.cache = {
    _data: {},
    set: /* @__PURE__ */ a(function(e, r) {
      this._data[e] = r;
    }, "set"),
    get: /* @__PURE__ */ a(function(e) {
      return this._data[e];
    }, "get"),
    remove: /* @__PURE__ */ a(function(e) {
      delete this._data[e];
    }, "remove"),
    reset: /* @__PURE__ */ a(function() {
      this._data = {};
    }, "reset")
  };
  z.hyphenToCamel = function(e) {
    return e.replace(/-[a-z]/g, function(r) {
      return r[1].toUpperCase();
    });
  };
  z.createNullProtoObjWherePossible = function() {
    return typeof Object.create == "function" ? function() {
      return /* @__PURE__ */ Object.create(null);
    } : { __proto__: null } instanceof Object ? function() {
      return {};
    } : function() {
      return { __proto__: null };
    };
  }();
  z.hasOwnOnlyObject = function(e) {
    var r = z.createNullProtoObjWherePossible();
    for (var t in e)
      lt(e, t) && (r[t] = e[t]);
    return r;
  };
});

// ../node_modules/ejs/package.json
var zn = S((cu, ts) => {
  ts.exports = {
    name: "ejs",
    description: "Embedded JavaScript templates",
    keywords: [
      "template",
      "engine",
      "ejs"
    ],
    version: "3.1.10",
    author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
    license: "Apache-2.0",
    bin: {
      ejs: "./bin/cli.js"
    },
    main: "./lib/ejs.js",
    jsdelivr: "ejs.min.js",
    unpkg: "ejs.min.js",
    repository: {
      type: "git",
      url: "git://github.com/mde/ejs.git"
    },
    bugs: "https://github.com/mde/ejs/issues",
    homepage: "https://github.com/mde/ejs",
    dependencies: {
      jake: "^10.8.5"
    },
    devDependencies: {
      browserify: "^16.5.1",
      eslint: "^6.8.0",
      "git-directory-deploy": "^1.5.1",
      jsdoc: "^4.0.2",
      "lru-cache": "^4.0.1",
      mocha: "^10.2.0",
      "uglify-js": "^3.3.16"
    },
    engines: {
      node: ">=0.10.0"
    },
    scripts: {
      test: "npx jake test"
    }
  };
});

// ../node_modules/ejs/lib/ejs.js
var ni = S((_) => {
  "use strict";
  var pt = b("fs"), Pe = b("path"), T = Vn(), Yn = !1, rs = zn().version, ns = "<", is = ">", os = "%", ti = "locals", as = "ejs", ss = "(<%\
%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", ri = [
    "delimiter",
    "scope",
    "context",
    "debug",
    "compileDebug",
    "client",
    "_with",
    "rmWhitespace",
    "strict",
    "filename",
    "async"
  ], cs = ri.concat("cache"), Kn = /^\uFEFF/, ft = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
  _.cache = T.cache;
  _.fileLoader = pt.readFileSync;
  _.localsName = ti;
  _.promiseImpl = new Function("return this;")().Promise;
  _.resolveInclude = function(e, r, t) {
    var n = Pe.dirname, i = Pe.extname, o = Pe.resolve, s = o(t ? r : n(r), e), u = i(e);
    return u || (s += ".ejs"), s;
  };
  function Xn(e, r) {
    var t;
    if (r.some(function(n) {
      return t = _.resolveInclude(e, n, !0), pt.existsSync(t);
    }))
      return t;
  }
  a(Xn, "resolvePaths");
  function us(e, r) {
    var t, n, i = r.views, o = /^[A-Za-z]+:\\|^\//.exec(e);
    if (o && o.length)
      e = e.replace(/^\/*/, ""), Array.isArray(r.root) ? t = Xn(e, r.root) : t = _.resolveInclude(e, r.root || "/", !0);
    else if (r.filename && (n = _.resolveInclude(e, r.filename), pt.existsSync(n) && (t = n)), !t && Array.isArray(i) && (t = Xn(e, i)), !t &&
    typeof r.includer != "function")
      throw new Error('Could not find the include file "' + r.escapeFunction(e) + '"');
    return t;
  }
  a(us, "getIncludePath");
  function Fe(e, r) {
    var t, n = e.filename, i = arguments.length > 1;
    if (e.cache) {
      if (!n)
        throw new Error("cache option requires a filename");
      if (t = _.cache.get(n), t)
        return t;
      i || (r = Qn(n).toString().replace(Kn, ""));
    } else if (!i) {
      if (!n)
        throw new Error("Internal EJS error: no file name or template provided");
      r = Qn(n).toString().replace(Kn, "");
    }
    return t = _.compile(r, e), e.cache && _.cache.set(n, t), t;
  }
  a(Fe, "handleCache");
  function ls(e, r, t) {
    var n;
    if (t) {
      try {
        n = Fe(e)(r);
      } catch (i) {
        return t(i);
      }
      t(null, n);
    } else {
      if (typeof _.promiseImpl == "function")
        return new _.promiseImpl(function(i, o) {
          try {
            n = Fe(e)(r), i(n);
          } catch (s) {
            o(s);
          }
        });
      throw new Error("Please provide a callback function");
    }
  }
  a(ls, "tryHandleCache");
  function Qn(e) {
    return _.fileLoader(e);
  }
  a(Qn, "fileLoader");
  function fs(e, r) {
    var t = T.shallowCopy(T.createNullProtoObjWherePossible(), r);
    if (t.filename = us(e, t), typeof r.includer == "function") {
      var n = r.includer(e, t.filename);
      if (n && (n.filename && (t.filename = n.filename), n.template))
        return Fe(t, n.template);
    }
    return Fe(t);
  }
  a(fs, "includeFile");
  function Zn(e, r, t, n, i) {
    var o = r.split(`
`), s = Math.max(n - 3, 0), u = Math.min(o.length, n + 3), y = i(t), f = o.slice(s, u).map(function(c, d) {
      var l = d + s + 1;
      return (l == n ? " >> " : "    ") + l + "| " + c;
    }).join(`
`);
    throw e.path = y, e.message = (y || "ejs") + ":" + n + `
` + f + `

` + e.message, e;
  }
  a(Zn, "rethrow");
  function ei(e) {
    return e.replace(/;(\s*$)/, "$1");
  }
  a(ei, "stripSemi");
  _.compile = /* @__PURE__ */ a(function(r, t) {
    var n;
    return t && t.scope && (Yn || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), Yn = !0), t.context || (t.context =
    t.scope), delete t.scope), n = new N(r, t), n.compile();
  }, "compile");
  _.render = function(e, r, t) {
    var n = r || T.createNullProtoObjWherePossible(), i = t || T.createNullProtoObjWherePossible();
    return arguments.length == 2 && T.shallowCopyFromList(i, n, ri), Fe(i, e)(n);
  };
  _.renderFile = function() {
    var e = Array.prototype.slice.call(arguments), r = e.shift(), t, n = { filename: r }, i, o;
    return typeof arguments[arguments.length - 1] == "function" && (t = e.pop()), e.length ? (i = e.shift(), e.length ? T.shallowCopy(n, e.pop()) :
    (i.settings && (i.settings.views && (n.views = i.settings.views), i.settings["view cache"] && (n.cache = !0), o = i.settings["view optio\
ns"], o && T.shallowCopy(n, o)), T.shallowCopyFromList(n, i, cs)), n.filename = r) : i = T.createNullProtoObjWherePossible(), ls(n, i, t);
  };
  _.Template = N;
  _.clearCache = function() {
    _.cache.reset();
  };
  function N(e, r) {
    var t = T.hasOwnOnlyObject(r), n = T.createNullProtoObjWherePossible();
    this.templateText = e, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", n.client = t.client || !1, n.escapeFunction =
    t.escape || t.escapeFunction || T.escapeXML, n.compileDebug = t.compileDebug !== !1, n.debug = !!t.debug, n.filename = t.filename, n.openDelimiter =
    t.openDelimiter || _.openDelimiter || ns, n.closeDelimiter = t.closeDelimiter || _.closeDelimiter || is, n.delimiter = t.delimiter || _.
    delimiter || os, n.strict = t.strict || !1, n.context = t.context, n.cache = t.cache || !1, n.rmWhitespace = t.rmWhitespace, n.root = t.
    root, n.includer = t.includer, n.outputFunctionName = t.outputFunctionName, n.localsName = t.localsName || _.localsName || ti, n.views =
    t.views, n.async = t.async, n.destructuredLocals = t.destructuredLocals, n.legacyInclude = typeof t.legacyInclude < "u" ? !!t.legacyInclude :
    !0, n.strict ? n._with = !1 : n._with = typeof t._with < "u" ? t._with : !0, this.opts = n, this.regex = this.createRegex();
  }
  a(N, "Template");
  N.modes = {
    EVAL: "eval",
    ESCAPED: "escaped",
    RAW: "raw",
    COMMENT: "comment",
    LITERAL: "literal"
  };
  N.prototype = {
    createRegex: /* @__PURE__ */ a(function() {
      var e = ss, r = T.escapeRegExpChars(this.opts.delimiter), t = T.escapeRegExpChars(this.opts.openDelimiter), n = T.escapeRegExpChars(this.
      opts.closeDelimiter);
      return e = e.replace(/%/g, r).replace(/</g, t).replace(/>/g, n), new RegExp(e);
    }, "createRegex"),
    compile: /* @__PURE__ */ a(function() {
      var e, r, t = this.opts, n = "", i = "", o = t.escapeFunction, s, u = t.filename ? JSON.stringify(t.filename) : "undefined";
      if (!this.source) {
        if (this.generateSource(), n += `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`, t.outputFunctionName) {
          if (!ft.test(t.outputFunctionName))
            throw new Error("outputFunctionName is not a valid JS identifier.");
          n += "  var " + t.outputFunctionName + ` = __append;
`;
        }
        if (t.localsName && !ft.test(t.localsName))
          throw new Error("localsName is not a valid JS identifier.");
        if (t.destructuredLocals && t.destructuredLocals.length) {
          for (var y = "  var __locals = (" + t.localsName + ` || {}),
`, f = 0; f < t.destructuredLocals.length; f++) {
            var c = t.destructuredLocals[f];
            if (!ft.test(c))
              throw new Error("destructuredLocals[" + f + "] is not a valid JS identifier.");
            f > 0 && (y += `,
  `), y += c + " = __locals." + c;
          }
          n += y + `;
`;
        }
        t._with !== !1 && (n += "  with (" + t.localsName + ` || {}) {
`, i += `  }
`), i += `  return __output;
`, this.source = n + this.source + i;
      }
      t.compileDebug ? e = `var __line = 1
  , __lines = ` + JSON.stringify(this.templateText) + `
  , __filename = ` + u + `;
try {
` + this.source + `} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
` : e = this.source, t.client && (e = "escapeFn = escapeFn || " + o.toString() + `;
` + e, t.compileDebug && (e = "rethrow = rethrow || " + Zn.toString() + `;
` + e)), t.strict && (e = `"use strict";
` + e), t.debug && console.log(e), t.compileDebug && t.filename && (e = e + `
//# sourceURL=` + u + `
`);
      try {
        if (t.async)
          try {
            s = new Function("return (async function(){}).constructor;")();
          } catch (p) {
            throw p instanceof SyntaxError ? new Error("This environment does not support async/await") : p;
          }
        else
          s = Function;
        r = new s(t.localsName + ", escapeFn, include, rethrow", e);
      } catch (p) {
        throw p instanceof SyntaxError && (t.filename && (p.message += " in " + t.filename), p.message += ` while compiling ejs

`, p.message += `If the above error is not helpful, you may want to try EJS-Lint:
`, p.message += "https://github.com/RyanZim/EJS-Lint", t.async || (p.message += `
`, p.message += "Or, if you meant to create an async function, pass `async: true` as an option.")), p;
      }
      var d = t.client ? r : /* @__PURE__ */ a(function(h) {
        var w = /* @__PURE__ */ a(function(v, P) {
          var O = T.shallowCopy(T.createNullProtoObjWherePossible(), h);
          return P && (O = T.shallowCopy(O, P)), fs(v, t)(O);
        }, "include");
        return r.apply(
          t.context,
          [h || T.createNullProtoObjWherePossible(), o, w, Zn]
        );
      }, "anonymous");
      if (t.filename && typeof Object.defineProperty == "function") {
        var l = t.filename, m = Pe.basename(l, Pe.extname(l));
        try {
          Object.defineProperty(d, "name", {
            value: m,
            writable: !1,
            enumerable: !1,
            configurable: !0
          });
        } catch {
        }
      }
      return d;
    }, "compile"),
    generateSource: /* @__PURE__ */ a(function() {
      var e = this.opts;
      e.rmWhitespace && (this.templateText = this.templateText.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
      var r = this, t = this.parseTemplateText(), n = this.opts.delimiter, i = this.opts.openDelimiter, o = this.opts.closeDelimiter;
      t && t.length && t.forEach(function(s, u) {
        var y;
        if (s.indexOf(i + n) === 0 && s.indexOf(i + n + n) !== 0 && (y = t[u + 2], !(y == n + o || y == "-" + n + o || y == "_" + n + o)))
          throw new Error('Could not find matching close tag for "' + s + '".');
        r.scanLine(s);
      });
    }, "generateSource"),
    parseTemplateText: /* @__PURE__ */ a(function() {
      for (var e = this.templateText, r = this.regex, t = r.exec(e), n = [], i; t; )
        i = t.index, i !== 0 && (n.push(e.substring(0, i)), e = e.slice(i)), n.push(t[0]), e = e.slice(t[0].length), t = r.exec(e);
      return e && n.push(e), n;
    }, "parseTemplateText"),
    _addOutput: /* @__PURE__ */ a(function(e) {
      if (this.truncate && (e = e.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = !1), !e)
        return e;
      e = e.replace(/\\/g, "\\\\"), e = e.replace(/\n/g, "\\n"), e = e.replace(/\r/g, "\\r"), e = e.replace(/"/g, '\\"'), this.source += '  \
  ; __append("' + e + `")
`;
    }, "_addOutput"),
    scanLine: /* @__PURE__ */ a(function(e) {
      var r = this, t = this.opts.delimiter, n = this.opts.openDelimiter, i = this.opts.closeDelimiter, o = 0;
      switch (o = e.split(`
`).length - 1, e) {
        case n + t:
        case n + t + "_":
          this.mode = N.modes.EVAL;
          break;
        case n + t + "=":
          this.mode = N.modes.ESCAPED;
          break;
        case n + t + "-":
          this.mode = N.modes.RAW;
          break;
        case n + t + "#":
          this.mode = N.modes.COMMENT;
          break;
        case n + t + t:
          this.mode = N.modes.LITERAL, this.source += '    ; __append("' + e.replace(n + t + t, n + t) + `")
`;
          break;
        case t + t + i:
          this.mode = N.modes.LITERAL, this.source += '    ; __append("' + e.replace(t + t + i, t + i) + `")
`;
          break;
        case t + i:
        case "-" + t + i:
        case "_" + t + i:
          this.mode == N.modes.LITERAL && this._addOutput(e), this.mode = null, this.truncate = e.indexOf("-") === 0 || e.indexOf("_") === 0;
          break;
        default:
          if (this.mode) {
            switch (this.mode) {
              case N.modes.EVAL:
              case N.modes.ESCAPED:
              case N.modes.RAW:
                e.lastIndexOf("//") > e.lastIndexOf(`
`) && (e += `
`);
            }
            switch (this.mode) {
              case N.modes.EVAL:
                this.source += "    ; " + e + `
`;
                break;
              case N.modes.ESCAPED:
                this.source += "    ; __append(escapeFn(" + ei(e) + `))
`;
                break;
              case N.modes.RAW:
                this.source += "    ; __append(" + ei(e) + `)
`;
                break;
              case N.modes.COMMENT:
                break;
              case N.modes.LITERAL:
                this._addOutput(e);
                break;
            }
          } else
            this._addOutput(e);
      }
      r.opts.compileDebug && o && (this.currentLine += o, this.source += "    ; __line = " + this.currentLine + `
`);
    }, "scanLine")
  };
  _.escapeXML = T.escapeXML;
  _.__express = _.renderFile;
  _.VERSION = rs;
  _.name = as;
  typeof window < "u" && (window.ejs = _);
});

// src/builder-manager/index.ts
var Be = ae(Oe(), 1);
import { dirname as wi, join as ye, parse as ks } from "node:path";
import hi from "express";
import { logger as St } from "@storybook/core/node-logger";

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/module-info.js
var hn = /* @__PURE__ */ a((e) => {
  let {
    type: r = "esm",
    varName: t,
    namedExports: n = null,
    defaultExport: i = !0
  } = typeof e == "string" ? { varName: e } : e;
  return { type: r, varName: t, namedExports: n, defaultExport: i };
}, "normalizeModuleInfo");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/on-load.js
var Da = /* @__PURE__ */ a((e) => `module.exports = ${e};`, "createCjsContents");
var qa = /* @__PURE__ */ a((e, r, t) => {
  let n = t ? [`export default ${e};`] : [];
  if (r && r.length) {
    let i = [...new Set(r)].join(", ");
    n.push(`const { ${i} } = ${e};`), n.push(`export { ${i} };`);
  }
  return n.join(`
`);
}, "createEsmContents"), wn = /* @__PURE__ */ a((e) => {
  let { type: r, varName: t, namedExports: n, defaultExport: i } = e;
  switch (r) {
    case "esm":
      return qa(t, n, i);
    case "cjs":
      return Da(t);
  }
}, "createContents");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/with-reg-exp.js
var ot = "global-externals", at = /* @__PURE__ */ a((e) => {
  let { modulePathFilter: r, getModuleInfo: t } = e;
  return {
    name: ot,
    setup(n) {
      n.onResolve({ filter: r }, (i) => ({
        path: i.path,
        namespace: ot
      })), n.onLoad({ filter: /.*/, namespace: ot }, (i) => {
        let o = i.path, s = hn(t(o));
        return { contents: wn(s) };
      });
    }
  };
}, "globalExternalsWithRegExp");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/with-object.js
var st = /* @__PURE__ */ a((e) => {
  let r = {
    modulePathFilter: new RegExp(`^(?:${Object.keys(e).join("|")})$`),
    getModuleInfo: /* @__PURE__ */ a((t) => e[t], "getModuleInfo")
  };
  return at(r);
}, "globalExternals");

// src/builder-manager/index.ts
var gi = ae(Bn(), 1), vi = ae(Gn(), 1);
import { stringifyProcessEnvs as js } from "@storybook/core/common";
import { globalsModuleInfoMap as Ds } from "@storybook/core/manager/globals-module-info";

// src/builder-manager/utils/template.ts
var ii = ae(Oe(), 1), oi = ae(ni(), 1);
import { dirname as ps, join as ms } from "node:path";
var mt = /* @__PURE__ */ a(async (e) => ms(ps(b.resolve("@storybook/core/package.json")), "assets/server", e), "getTemplatePath"), ai = /* @__PURE__ */ a(
async (e) => {
  let r = await mt(e);
  return ii.default.readFile(r, "utf8");
}, "readTemplate");
var dt = /* @__PURE__ */ a(async (e, r, t, n, i, o, s, u, y, f, c, { versionCheck: d, previewUrl: l, configType: m, ignorePreview: p }, h) => {
  let w = await r, v = await e, P = Object.entries(h).reduce(
    (O, [L, J]) => ({ ...O, [L]: JSON.stringify(J) }),
    {}
  );
  return (0, oi.render)(v, {
    title: w ? `${w} - Storybook` : "Storybook",
    files: { js: o, css: i },
    favicon: await t,
    globals: {
      FEATURES: JSON.stringify(await s, null, 2),
      REFS: JSON.stringify(await u, null, 2),
      LOGLEVEL: JSON.stringify(await y, null, 2),
      DOCS_OPTIONS: JSON.stringify(await f, null, 2),
      CONFIG_TYPE: JSON.stringify(await m, null, 2),
      // These two need to be double stringified because the UI expects a string
      VERSIONCHECK: JSON.stringify(JSON.stringify(d), null, 2),
      PREVIEW_URL: JSON.stringify(l, null, 2),
      // global preview URL
      TAGS_OPTIONS: JSON.stringify(await c, null, 2),
      ...P
    },
    head: await n || "",
    ignorePreview: p
  });
}, "renderHTML");

// src/builder-manager/utils/managerEntries.ts
var yt = ae(Oe(), 1);
import { resolvePathInStorybookCache as ds } from "@storybook/core/common";
import { join as si, parse as ys, relative as hs, sep as ws } from "node:path";

// ../node_modules/slash/index.js
function ke(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
a(ke, "slash");

// src/builder-manager/utils/managerEntries.ts
var ci = /* @__PURE__ */ a((e) => e.replaceAll(".", "").replaceAll("@", "").replaceAll(ws, "-").replaceAll("/", "-").replaceAll(new RegExp(/^(-)+/g),
""), "sanitizeBase"), gs = /* @__PURE__ */ a((e) => {
  let r = e.split(/-?node_modules-?/);
  return r[r.length - 1].replaceAll("storybook-addon-", "").replaceAll("dist-", "");
}, "sanitizeFinal");
async function ui(e, r) {
  return Promise.all(
    e.map(async (t, n) => {
      let { name: i, dir: o } = ys(t), s = ds("sb-manager", r);
      if (!s)
        throw new Error("Could not create/find cache directory");
      let u = hs(process.cwd(), o), y = si(
        s,
        gs(si(`${ci(u)}-${n}`, `${ci(i)}-bundle.js`))
      );
      return await yt.default.ensureFile(y), await yt.default.writeFile(y, `import '${ke(t)}';`), y;
    })
  );
}
a(ui, "wrapManagerEntries");

// src/builder-manager/utils/data.ts
import { basename as vs } from "node:path";
import { getRefs as Ss } from "@storybook/core/common";
var ht = /* @__PURE__ */ a(async (e) => {
  let r = Ss(e), t = e.presets.apply("favicon").then((l) => vs(l)), n = e.presets.apply("features"), i = e.presets.apply("logLevel"), o = e.
  presets.apply("title"), s = e.presets.apply("docs", {}), u = e.presets.apply("tags", {}), y = ai("template.ejs"), f = e.presets.apply("man\
agerHead"), [c, d] = await Promise.all([
    //
    fi.get(),
    li(e)
  ]);
  return {
    refs: r,
    features: n,
    title: o,
    docsOptions: s,
    template: y,
    customHead: f,
    instance: c,
    config: d,
    logLevel: i,
    favicon: t,
    tagsOptions: u
  };
}, "getData");

// src/builder-manager/utils/safeResolve.ts
var pi = /* @__PURE__ */ a((e) => {
  try {
    return Promise.resolve(b.resolve(e));
  } catch {
    return Promise.resolve(!1);
  }
}, "safeResolve");

// src/builder-manager/utils/files.ts
var wt = ae(Oe(), 1);
import { join as bs, normalize as Es } from "node:path";
async function gt(e, r) {
  let t = await Promise.all(
    r?.map(async (o) => {
      let { location: s, url: u } = _s(o, e);
      return await wt.default.ensureFile(s), await wt.default.writeFile(s, o.contents), u;
    }) || []
  ), n = t.filter((o) => o.endsWith(".js"));
  return { cssFiles: t.filter((o) => o.endsWith(".css")), jsFiles: n };
}
a(gt, "readOrderedFiles");
function _s(e, r) {
  let t = e.path.replace(r, ""), n = Es(bs(r, t)), i = `./sb-addons${ke(t).split("/").map(encodeURIComponent).join("/")}`;
  return { location: n, url: i };
}
a(_s, "sanitizePath");

// src/builder-manager/utils/framework.ts
import xs from "node:path";
import { extractProperRendererNameFromFramework as mi, getFrameworkName as Os } from "@storybook/core/common";
var di = /* @__PURE__ */ a((e) => {
  if (e)
    return typeof e == "string" ? e : e.name;
}, "pluckNameFromConfigProperty"), yi = /* @__PURE__ */ a((e) => e.replaceAll(xs.sep, "/"), "normalizePath"), Ps = /* @__PURE__ */ a((e) => yi(
e).match(/(@storybook\/.*)$/)?.[1], "pluckStorybookPackageFromPath"), Fs = /* @__PURE__ */ a((e) => yi(e).split("node_modules/")[1] ?? e, "p\
luckThirdPartyPackageFromPath"), vt = /* @__PURE__ */ a(async (e) => {
  let r = {}, { builder: t } = await e.presets.apply("core"), n = await Os(e);
  await mi(n) && (r.STORYBOOK_RENDERER = await mi(n) ?? void 0);
  let o = di(t);
  o && (r.STORYBOOK_BUILDER = Ps(o) ?? Fs(o));
  let s = di(await e.presets.apply("framework"));
  return s && (r.STORYBOOK_FRAMEWORK = s), r;
}, "buildFrameworkGlobalsFromOptions");

// src/builder-manager/index.ts
var Ue, he, li = /* @__PURE__ */ a(async (e) => {
  let [r, t, n, i] = await Promise.all([
    e.presets.apply("managerEntries", []),
    pi(ye(e.configDir, "manager")),
    mt("addon.tsconfig.json"),
    e.presets.apply("env")
  ]), o = t ? [...r, t] : r;
  return {
    entryPoints: await ui(o, e.cacheKey),
    outdir: ye(e.outputDir || "./", "sb-addons"),
    format: "iife",
    write: !1,
    ignoreAnnotations: !0,
    resolveExtensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
    outExtension: { ".js": ".js" },
    loader: {
      ".js": "jsx",
      // media
      ".png": "dataurl",
      ".gif": "dataurl",
      ".jpg": "dataurl",
      ".jpeg": "dataurl",
      ".svg": "dataurl",
      ".webp": "dataurl",
      ".webm": "dataurl",
      ".mp3": "dataurl",
      // modern fonts
      ".woff2": "dataurl",
      // legacy font formats
      ".woff": "dataurl",
      ".eot": "dataurl",
      ".ttf": "dataurl"
    },
    target: ["chrome100", "safari15", "firefox91"],
    platform: "browser",
    bundle: !0,
    minify: !0,
    sourcemap: !1,
    conditions: ["browser", "module", "default"],
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsx: "transform",
    jsxImportSource: "react",
    tsconfig: n,
    legalComments: "external",
    plugins: [
      (0, vi.default)({
        process: b.resolve("process/browser.js"),
        util: b.resolve("util/util.js"),
        assert: b.resolve("browser-assert")
      }),
      st(Ds),
      (0, gi.pnpPlugin)()
    ],
    banner: {
      js: "try{"
    },
    footer: {
      js: '}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }'
    },
    define: {
      "process.env": JSON.stringify(i),
      ...js(i),
      global: "window",
      module: "{}"
    }
  };
}, "getConfig"), fi = {
  get: /* @__PURE__ */ a(async () => {
    let { build: e } = await import("esbuild");
    return e;
  }, "get")
}, qs = /* @__PURE__ */ a(async function* ({
  startTime: r,
  options: t,
  router: n
}) {
  St.info("=> Starting manager..");
  let {
    config: i,
    favicon: o,
    customHead: s,
    features: u,
    instance: y,
    refs: f,
    template: c,
    title: d,
    logLevel: l,
    docsOptions: m,
    tagsOptions: p
  } = await ht(t);
  yield;
  let h = i.outdir;
  await Be.default.remove(h), yield, Ue = await y({
    ...i
  }), yield;
  let w = ye(
    wi(b.resolve("@storybook/core/package.json")),
    "dist",
    "manager"
  );
  n.use("/sb-addons", hi.static(h, { immutable: !0, maxAge: "5m" })), n.use("/sb-manager", hi.static(w, { immutable: !0, maxAge: "5m" }));
  let { cssFiles: v, jsFiles: P } = await gt(h, Ue?.outputFiles), O = await vt(t);
  yield;
  let L = await dt(
    c,
    d,
    o,
    s,
    v,
    P,
    u,
    f,
    l,
    m,
    p,
    t,
    O
  );
  return yield, n.use("/", ({ path: J }, Y, Q) => {
    J === "/" ? Y.status(200).send(L) : Q();
  }), n.use("/index.html", ({ path: J }, Y) => {
    Y.status(200).send(L);
  }), {
    bail: Ls,
    stats: {
      toJson: /* @__PURE__ */ a(() => ({}), "toJson")
    },
    totalTime: process.hrtime(r)
  };
}, "starterGeneratorFn"), Ts = /* @__PURE__ */ a(async function* ({ startTime: r, options: t }) {
  if (!t.outputDir)
    throw new Error("outputDir is required");
  St.info("=> Building manager..");
  let {
    config: n,
    customHead: i,
    favicon: o,
    features: s,
    instance: u,
    refs: y,
    template: f,
    title: c,
    logLevel: d,
    docsOptions: l,
    tagsOptions: m
  } = await ht(t);
  yield;
  let p = n.outdir, h = ye(
    wi(b.resolve("@storybook/core/package.json")),
    "dist",
    "manager"
  ), w = ye(t.outputDir, "sb-manager");
  Ue = await u({
    ...n,
    minify: !0
  }), yield;
  let v = Be.default.copy(h, w, {
    filter: /* @__PURE__ */ a((Y) => {
      let { ext: Q } = ks(Y);
      return Q ? Q === ".js" : !0;
    }, "filter")
  }), { cssFiles: P, jsFiles: O } = await gt(p, Ue?.outputFiles), L = await vt(t);
  yield;
  let J = await dt(
    f,
    c,
    o,
    i,
    P,
    O,
    s,
    y,
    d,
    l,
    m,
    t,
    L
  );
  return await Promise.all([
    //
    Be.default.writeFile(ye(t.outputDir, "index.html"), J),
    v
  ]), St.trace({ message: "=> Manager built", time: process.hrtime(r) }), {
    toJson: /* @__PURE__ */ a(() => ({}), "toJson")
  };
}, "builderGeneratorFn"), Ls = /* @__PURE__ */ a(async () => {
  if (he)
    try {
      await he.throw(new Error());
    } catch {
    }
}, "bail"), Yu = /* @__PURE__ */ a(async (e) => {
  he = qs(e);
  let r;
  do
    r = await he.next();
  while (!r.done);
  return r.value;
}, "start"), Ku = /* @__PURE__ */ a(async (e) => {
  he = Ts(e);
  let r;
  do
    r = await he.next();
  while (!r.done);
  return r.value;
}, "build"), Xu = [], Qu = [];
export {
  Ls as bail,
  Ku as build,
  Xu as corePresets,
  fi as executor,
  li as getConfig,
  Qu as overridePresets,
  Yu as start
};
