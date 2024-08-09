"use strict";
var ji = Object.create;
var we = Object.defineProperty;
var Di = Object.getOwnPropertyDescriptor;
var qi = Object.getOwnPropertyNames;
var Ti = Object.getPrototypeOf, Li = Object.prototype.hasOwnProperty;
var a = (e, r) => we(e, "name", { value: r, configurable: !0 });
var Ni = (e, r) => () => (e && (r = e(e = 0)), r);
var S = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), Ft = (e, r) => {
  for (var t in r)
    we(e, t, { get: r[t], enumerable: !0 });
}, kt = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let i of qi(r))
      !Li.call(e, i) && i !== t && we(e, i, { get: () => r[i], enumerable: !(n = Di(r, i)) || n.enumerable });
  return e;
};
var J = (e, r, t) => (t = e != null ? ji(Ti(e)) : {}, kt(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? we(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), jt = (e) => kt(we({}, "__esModule", { value: !0 }), e);

// ../node_modules/universalify/index.js
var R = S((Ye) => {
  "use strict";
  Ye.fromCallback = function(e) {
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
  Ye.fromPromise = function(e) {
    return Object.defineProperty(function(...r) {
      let t = r[r.length - 1];
      if (typeof t != "function") return e.apply(this, r);
      e.apply(this, r.slice(0, -1)).then((n) => t(null, n), t);
    }, "name", { value: e.name });
  };
});

// ../node_modules/graceful-fs/polyfills.js
var qt = S((Ls, Dt) => {
  var ie = require("constants"), Ri = process.cwd, De = null, Ci = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    return De || (De = Ri.call(process)), De;
  };
  try {
    process.cwd();
  } catch {
  }
  typeof process.chdir == "function" && (Ke = process.chdir, process.chdir = function(e) {
    De = null, Ke.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Ke));
  var Ke;
  Dt.exports = Ii;
  function Ii(e) {
    ie.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && r(e), e.lutimes || t(e), e.chown = o(e.chown), e.fchown =
    o(e.fchown), e.lchown = o(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = s(e.chownSync),
    e.fchownSync = s(e.fchownSync), e.lchownSync = s(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync =
    i(e.lchmodSync), e.stat = u(e.stat), e.fstat = u(e.fstat), e.lstat = u(e.lstat), e.statSync = y(e.statSync), e.fstatSync = y(e.fstatSync),
    e.lstatSync = y(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(c, d, l) {
      l && process.nextTick(l);
    }, e.lchmodSync = function() {
    }), e.chown && !e.lchown && (e.lchown = function(c, d, l, m) {
      m && process.nextTick(m);
    }, e.lchownSync = function() {
    }), Ci === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(c) {
      function d(l, m, p) {
        var h = Date.now(), w = 0;
        c(l, m, /* @__PURE__ */ a(function v(O) {
          if (O && (O.code === "EACCES" || O.code === "EPERM" || O.code === "EBUSY") && Date.now() - h < 6e4) {
            setTimeout(function() {
              e.stat(m, function(x, T) {
                x && x.code === "ENOENT" ? c(l, m, v) : p(O);
              });
            }, w), w < 100 && (w += 10);
            return;
          }
          p && p(O);
        }, "CB"));
      }
      return a(d, "rename"), Object.setPrototypeOf && Object.setPrototypeOf(d, c), d;
    }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(c) {
      function d(l, m, p, h, w, v) {
        var O;
        if (v && typeof v == "function") {
          var x = 0;
          O = /* @__PURE__ */ a(function(T, W, K) {
            if (T && T.code === "EAGAIN" && x < 10)
              return x++, c.call(e, l, m, p, h, w, O);
            v.apply(this, arguments);
          }, "callback");
        }
        return c.call(e, l, m, p, h, w, O);
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
          ie.O_WRONLY | ie.O_SYMLINK,
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
        var m = c.openSync(d, ie.O_WRONLY | ie.O_SYMLINK, l), p = !0, h;
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
      ie.hasOwnProperty("O_SYMLINK") && c.futimes ? (c.lutimes = function(d, l, m, p) {
        c.open(d, ie.O_SYMLINK, function(h, w) {
          if (h) {
            p && p(h);
            return;
          }
          c.futimes(w, l, m, function(v) {
            c.close(w, function(O) {
              p && p(v || O);
            });
          });
        });
      }, c.lutimesSync = function(d, l, m) {
        var p = c.openSync(d, ie.O_SYMLINK), h, w = !0;
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
  a(Ii, "patch");
});

// ../node_modules/graceful-fs/legacy-streams.js
var Nt = S((Rs, Lt) => {
  var Tt = require("stream").Stream;
  Lt.exports = Ai;
  function Ai(e) {
    return {
      ReadStream: r,
      WriteStream: t
    };
    function r(n, i) {
      if (!(this instanceof r)) return new r(n, i);
      Tt.call(this);
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
      Tt.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten =
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
  a(Ai, "legacy");
});

// ../node_modules/graceful-fs/clone.js
var Ct = S((Is, Rt) => {
  "use strict";
  Rt.exports = $i;
  var Mi = Object.getPrototypeOf || function(e) {
    return e.__proto__;
  };
  function $i(e) {
    if (e === null || typeof e != "object")
      return e;
    if (e instanceof Object)
      var r = { __proto__: Mi(e) };
    else
      var r = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    }), r;
  }
  a($i, "clone");
});

// ../node_modules/graceful-fs/graceful-fs.js
var fe = S((Ms, Ze) => {
  var j = require("fs"), Wi = qt(), Ji = Nt(), Bi = Ct(), qe = require("util"), $, Le;
  typeof Symbol == "function" && typeof Symbol.for == "function" ? ($ = Symbol.for("graceful-fs.queue"), Le = Symbol.for("graceful-fs.previo\
us")) : ($ = "___graceful-fs.queue", Le = "___graceful-fs.previous");
  function Ui() {
  }
  a(Ui, "noop");
  function Mt(e, r) {
    Object.defineProperty(e, $, {
      get: /* @__PURE__ */ a(function() {
        return r;
      }, "get")
    });
  }
  a(Mt, "publishQueue");
  var ce = Ui;
  qe.debuglog ? ce = qe.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (ce = /* @__PURE__ */ a(function() {
    var e = qe.format.apply(qe, arguments);
    e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
  }, "debug"));
  j[$] || (It = global[$] || [], Mt(j, It), j.close = function(e) {
    function r(t, n) {
      return e.call(j, t, function(i) {
        i || At(), typeof n == "function" && n.apply(this, arguments);
      });
    }
    return a(r, "close"), Object.defineProperty(r, Le, {
      value: e
    }), r;
  }(j.close), j.closeSync = function(e) {
    function r(t) {
      e.apply(j, arguments), At();
    }
    return a(r, "closeSync"), Object.defineProperty(r, Le, {
      value: e
    }), r;
  }(j.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    ce(j[$]), require("assert").equal(j[$].length, 0);
  }));
  var It;
  global[$] || Mt(global, j[$]);
  Ze.exports = Xe(Bi(j));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !j.__patched && (Ze.exports = Xe(j), j.__patched = !0);
  function Xe(e) {
    Wi(e), e.gracefulify = Xe, e.createReadStream = W, e.createWriteStream = K;
    var r = e.readFile;
    e.readFile = t;
    function t(g, _, b) {
      return typeof _ == "function" && (b = _, _ = null), I(g, _, b);
      function I(A, N, k, D) {
        return r(A, N, function(P) {
          P && (P.code === "EMFILE" || P.code === "ENFILE") ? le([I, [A, N, k], P, D || Date.now(), Date.now()]) : typeof k == "function" &&
          k.apply(this, arguments);
        });
      }
      a(I, "go$readFile");
    }
    a(t, "readFile");
    var n = e.writeFile;
    e.writeFile = i;
    function i(g, _, b, I) {
      return typeof b == "function" && (I = b, b = null), A(g, _, b, I);
      function A(N, k, D, P, M) {
        return n(N, k, D, function(F) {
          F && (F.code === "EMFILE" || F.code === "ENFILE") ? le([A, [N, k, D, P], F, M || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      a(A, "go$writeFile");
    }
    a(i, "writeFile");
    var o = e.appendFile;
    o && (e.appendFile = s);
    function s(g, _, b, I) {
      return typeof b == "function" && (I = b, b = null), A(g, _, b, I);
      function A(N, k, D, P, M) {
        return o(N, k, D, function(F) {
          F && (F.code === "EMFILE" || F.code === "ENFILE") ? le([A, [N, k, D, P], F, M || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      a(A, "go$appendFile");
    }
    a(s, "appendFile");
    var u = e.copyFile;
    u && (e.copyFile = y);
    function y(g, _, b, I) {
      return typeof b == "function" && (I = b, b = 0), A(g, _, b, I);
      function A(N, k, D, P, M) {
        return u(N, k, D, function(F) {
          F && (F.code === "EMFILE" || F.code === "ENFILE") ? le([A, [N, k, D, P], F, M || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      a(A, "go$copyFile");
    }
    a(y, "copyFile");
    var f = e.readdir;
    e.readdir = d;
    var c = /^v[0-5]\./;
    function d(g, _, b) {
      typeof _ == "function" && (b = _, _ = null);
      var I = c.test(process.version) ? /* @__PURE__ */ a(function(k, D, P, M) {
        return f(k, A(
          k,
          D,
          P,
          M
        ));
      }, "go$readdir") : /* @__PURE__ */ a(function(k, D, P, M) {
        return f(k, D, A(
          k,
          D,
          P,
          M
        ));
      }, "go$readdir");
      return I(g, _, b);
      function A(N, k, D, P) {
        return function(M, F) {
          M && (M.code === "EMFILE" || M.code === "ENFILE") ? le([
            I,
            [N, k, D],
            M,
            P || Date.now(),
            Date.now()
          ]) : (F && F.sort && F.sort(), typeof D == "function" && D.call(this, M, F));
        };
      }
    }
    if (a(d, "readdir"), process.version.substr(0, 4) === "v0.8") {
      var l = Ji(e);
      v = l.ReadStream, x = l.WriteStream;
    }
    var m = e.ReadStream;
    m && (v.prototype = Object.create(m.prototype), v.prototype.open = O);
    var p = e.WriteStream;
    p && (x.prototype = Object.create(p.prototype), x.prototype.open = T), Object.defineProperty(e, "ReadStream", {
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
        return x;
      }, "get"),
      set: /* @__PURE__ */ a(function(g) {
        x = g;
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
    var w = x;
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
    function v(g, _) {
      return this instanceof v ? (m.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments);
    }
    a(v, "ReadStream");
    function O() {
      var g = this;
      ne(g.path, g.flags, g.mode, function(_, b) {
        _ ? (g.autoClose && g.destroy(), g.emit("error", _)) : (g.fd = b, g.emit("open", b), g.read());
      });
    }
    a(O, "ReadStream$open");
    function x(g, _) {
      return this instanceof x ? (p.apply(this, arguments), this) : x.apply(Object.create(x.prototype), arguments);
    }
    a(x, "WriteStream");
    function T() {
      var g = this;
      ne(g.path, g.flags, g.mode, function(_, b) {
        _ ? (g.destroy(), g.emit("error", _)) : (g.fd = b, g.emit("open", b));
      });
    }
    a(T, "WriteStream$open");
    function W(g, _) {
      return new e.ReadStream(g, _);
    }
    a(W, "createReadStream");
    function K(g, _) {
      return new e.WriteStream(g, _);
    }
    a(K, "createWriteStream");
    var Z = e.open;
    e.open = ne;
    function ne(g, _, b, I) {
      return typeof b == "function" && (I = b, b = null), A(g, _, b, I);
      function A(N, k, D, P, M) {
        return Z(N, k, D, function(F, Ds) {
          F && (F.code === "EMFILE" || F.code === "ENFILE") ? le([A, [N, k, D, P], F, M || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      a(A, "go$open");
    }
    return a(ne, "open"), e;
  }
  a(Xe, "patch");
  function le(e) {
    ce("ENQUEUE", e[0].name, e[1]), j[$].push(e), Qe();
  }
  a(le, "enqueue");
  var Te;
  function At() {
    for (var e = Date.now(), r = 0; r < j[$].length; ++r)
      j[$][r].length > 2 && (j[$][r][3] = e, j[$][r][4] = e);
    Qe();
  }
  a(At, "resetQueue");
  function Qe() {
    if (clearTimeout(Te), Te = void 0, j[$].length !== 0) {
      var e = j[$].shift(), r = e[0], t = e[1], n = e[2], i = e[3], o = e[4];
      if (i === void 0)
        ce("RETRY", r.name, t), r.apply(null, t);
      else if (Date.now() - i >= 6e4) {
        ce("TIMEOUT", r.name, t);
        var s = t.pop();
        typeof s == "function" && s.call(null, n);
      } else {
        var u = Date.now() - o, y = Math.max(o - i, 1), f = Math.min(y * 1.2, 100);
        u >= f ? (ce("RETRY", r.name, t), r.apply(null, t.concat([i]))) : j[$].push(e);
      }
      Te === void 0 && (Te = setTimeout(Qe, 0));
    }
  }
  a(Qe, "retry");
});

// ../node_modules/fs-extra/lib/fs/index.js
var G = S((ee) => {
  "use strict";
  var $t = R().fromCallback, U = fe(), Gi = [
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
  Object.assign(ee, U);
  Gi.forEach((e) => {
    ee[e] = $t(U[e]);
  });
  ee.exists = function(e, r) {
    return typeof r == "function" ? U.exists(e, r) : new Promise((t) => U.exists(e, t));
  };
  ee.read = function(e, r, t, n, i, o) {
    return typeof o == "function" ? U.read(e, r, t, n, i, o) : new Promise((s, u) => {
      U.read(e, r, t, n, i, (y, f, c) => {
        if (y) return u(y);
        s({ bytesRead: f, buffer: c });
      });
    });
  };
  ee.write = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.write(e, r, ...t) : new Promise((n, i) => {
      U.write(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesWritten: s, buffer: u });
      });
    });
  };
  ee.readv = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.readv(e, r, ...t) : new Promise((n, i) => {
      U.readv(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesRead: s, buffers: u });
      });
    });
  };
  ee.writev = function(e, r, ...t) {
    return typeof t[t.length - 1] == "function" ? U.writev(e, r, ...t) : new Promise((n, i) => {
      U.writev(e, r, ...t, (o, s, u) => {
        if (o) return i(o);
        n({ bytesWritten: s, buffers: u });
      });
    });
  };
  typeof U.realpath.native == "function" ? ee.realpath.native = $t(U.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
});

// ../node_modules/fs-extra/lib/mkdirs/utils.js
var Jt = S((Js, Wt) => {
  "use strict";
  var Hi = require("path");
  Wt.exports.checkPath = /* @__PURE__ */ a(function(r) {
    if (process.platform === "win32" && /[<>:"|?*]/.test(r.replace(Hi.parse(r).root, ""))) {
      let n = new Error(`Path contains invalid characters: ${r}`);
      throw n.code = "EINVAL", n;
    }
  }, "checkPath");
});

// ../node_modules/fs-extra/lib/mkdirs/make-dir.js
var Ht = S((Us, et) => {
  "use strict";
  var Bt = G(), { checkPath: Ut } = Jt(), Gt = /* @__PURE__ */ a((e) => {
    let r = { mode: 511 };
    return typeof e == "number" ? e : { ...r, ...e }.mode;
  }, "getMode");
  et.exports.makeDir = async (e, r) => (Ut(e), Bt.mkdir(e, {
    mode: Gt(r),
    recursive: !0
  }));
  et.exports.makeDirSync = (e, r) => (Ut(e), Bt.mkdirSync(e, {
    mode: Gt(r),
    recursive: !0
  }));
});

// ../node_modules/fs-extra/lib/mkdirs/index.js
var X = S((Hs, Vt) => {
  "use strict";
  var Vi = R().fromPromise, { makeDir: zi, makeDirSync: tt } = Ht(), rt = Vi(zi);
  Vt.exports = {
    mkdirs: rt,
    mkdirsSync: tt,
    // alias
    mkdirp: rt,
    mkdirpSync: tt,
    ensureDir: rt,
    ensureDirSync: tt
  };
});

// ../node_modules/fs-extra/lib/path-exists/index.js
var oe = S((Vs, Yt) => {
  "use strict";
  var Yi = R().fromPromise, zt = G();
  function Ki(e) {
    return zt.access(e).then(() => !0).catch(() => !1);
  }
  a(Ki, "pathExists");
  Yt.exports = {
    pathExists: Yi(Ki),
    pathExistsSync: zt.existsSync
  };
});

// ../node_modules/fs-extra/lib/util/utimes.js
var nt = S((Ys, Kt) => {
  "use strict";
  var pe = G(), Xi = R().fromPromise;
  async function Qi(e, r, t) {
    let n = await pe.open(e, "r+"), i = null;
    try {
      await pe.futimes(n, r, t);
    } finally {
      try {
        await pe.close(n);
      } catch (o) {
        i = o;
      }
    }
    if (i)
      throw i;
  }
  a(Qi, "utimesMillis");
  function Zi(e, r, t) {
    let n = pe.openSync(e, "r+");
    return pe.futimesSync(n, r, t), pe.closeSync(n);
  }
  a(Zi, "utimesMillisSync");
  Kt.exports = {
    utimesMillis: Xi(Qi),
    utimesMillisSync: Zi
  };
});

// ../node_modules/fs-extra/lib/util/stat.js
var ue = S((Xs, er) => {
  "use strict";
  var me = G(), C = require("path"), Xt = R().fromPromise;
  function eo(e, r, t) {
    let n = t.dereference ? (i) => me.stat(i, { bigint: !0 }) : (i) => me.lstat(i, { bigint: !0 });
    return Promise.all([
      n(e),
      n(r).catch((i) => {
        if (i.code === "ENOENT") return null;
        throw i;
      })
    ]).then(([i, o]) => ({ srcStat: i, destStat: o }));
  }
  a(eo, "getStats");
  function to(e, r, t) {
    let n, i = t.dereference ? (s) => me.statSync(s, { bigint: !0 }) : (s) => me.lstatSync(s, { bigint: !0 }), o = i(e);
    try {
      n = i(r);
    } catch (s) {
      if (s.code === "ENOENT") return { srcStat: o, destStat: null };
      throw s;
    }
    return { srcStat: o, destStat: n };
  }
  a(to, "getStatsSync");
  async function ro(e, r, t, n) {
    let { srcStat: i, destStat: o } = await eo(e, r, n);
    if (o) {
      if (ge(i, o)) {
        let s = C.basename(e), u = C.basename(r);
        if (t === "move" && s !== u && s.toLowerCase() === u.toLowerCase())
          return { srcStat: i, destStat: o, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !o.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${r}' with directory '${e}'.`);
      if (!i.isDirectory() && o.isDirectory())
        throw new Error(`Cannot overwrite directory '${r}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && it(e, r))
      throw new Error(Ne(e, r, t));
    return { srcStat: i, destStat: o };
  }
  a(ro, "checkPaths");
  function no(e, r, t, n) {
    let { srcStat: i, destStat: o } = to(e, r, n);
    if (o) {
      if (ge(i, o)) {
        let s = C.basename(e), u = C.basename(r);
        if (t === "move" && s !== u && s.toLowerCase() === u.toLowerCase())
          return { srcStat: i, destStat: o, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !o.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${r}' with directory '${e}'.`);
      if (!i.isDirectory() && o.isDirectory())
        throw new Error(`Cannot overwrite directory '${r}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && it(e, r))
      throw new Error(Ne(e, r, t));
    return { srcStat: i, destStat: o };
  }
  a(no, "checkPathsSync");
  async function Qt(e, r, t, n) {
    let i = C.resolve(C.dirname(e)), o = C.resolve(C.dirname(t));
    if (o === i || o === C.parse(o).root) return;
    let s;
    try {
      s = await me.stat(o, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (ge(r, s))
      throw new Error(Ne(e, t, n));
    return Qt(e, r, o, n);
  }
  a(Qt, "checkParentPaths");
  function Zt(e, r, t, n) {
    let i = C.resolve(C.dirname(e)), o = C.resolve(C.dirname(t));
    if (o === i || o === C.parse(o).root) return;
    let s;
    try {
      s = me.statSync(o, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (ge(r, s))
      throw new Error(Ne(e, t, n));
    return Zt(e, r, o, n);
  }
  a(Zt, "checkParentPathsSync");
  function ge(e, r) {
    return r.ino && r.dev && r.ino === e.ino && r.dev === e.dev;
  }
  a(ge, "areIdentical");
  function it(e, r) {
    let t = C.resolve(e).split(C.sep).filter((i) => i), n = C.resolve(r).split(C.sep).filter((i) => i);
    return t.every((i, o) => n[o] === i);
  }
  a(it, "isSrcSubdir");
  function Ne(e, r, t) {
    return `Cannot ${t} '${e}' to a subdirectory of itself, '${r}'.`;
  }
  a(Ne, "errMsg");
  er.exports = {
    // checkPaths
    checkPaths: Xt(ro),
    checkPathsSync: no,
    // checkParent
    checkParentPaths: Xt(Qt),
    checkParentPathsSync: Zt,
    // Misc
    isSrcSubdir: it,
    areIdentical: ge
  };
});

// ../node_modules/fs-extra/lib/copy/copy.js
var or = S((Zs, ir) => {
  "use strict";
  var B = G(), ve = require("path"), { mkdirs: io } = X(), { pathExists: oo } = oe(), { utimesMillis: ao } = nt(), Se = ue();
  async function so(e, r, t = {}) {
    typeof t == "function" && (t = { filter: t }), t.clobber = "clobber" in t ? !!t.clobber : !0, t.overwrite = "overwrite" in t ? !!t.overwrite :
    t.clobber, t.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0001"
    );
    let { srcStat: n, destStat: i } = await Se.checkPaths(e, r, "copy", t);
    if (await Se.checkParentPaths(e, n, r, "copy"), !await rr(e, r, t)) return;
    let s = ve.dirname(r);
    await oo(s) || await io(s), await nr(i, e, r, t);
  }
  a(so, "copy");
  async function rr(e, r, t) {
    return t.filter ? t.filter(e, r) : !0;
  }
  a(rr, "runFilter");
  async function nr(e, r, t, n) {
    let o = await (n.dereference ? B.stat : B.lstat)(r);
    if (o.isDirectory()) return fo(o, e, r, t, n);
    if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return co(o, e, r, t, n);
    if (o.isSymbolicLink()) return po(e, r, t, n);
    throw o.isSocket() ? new Error(`Cannot copy a socket file: ${r}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${r}`) : new Error(
    `Unknown file: ${r}`);
  }
  a(nr, "getStatsAndPerformCopy");
  async function co(e, r, t, n, i) {
    if (!r) return tr(e, t, n, i);
    if (i.overwrite)
      return await B.unlink(n), tr(e, t, n, i);
    if (i.errorOnExist)
      throw new Error(`'${n}' already exists`);
  }
  a(co, "onFile");
  async function tr(e, r, t, n) {
    if (await B.copyFile(r, t), n.preserveTimestamps) {
      uo(e.mode) && await lo(t, e.mode);
      let i = await B.stat(r);
      await ao(t, i.atime, i.mtime);
    }
    return B.chmod(t, e.mode);
  }
  a(tr, "copyFile");
  function uo(e) {
    return (e & 128) === 0;
  }
  a(uo, "fileIsNotWritable");
  function lo(e, r) {
    return B.chmod(e, r | 128);
  }
  a(lo, "makeFileWritable");
  async function fo(e, r, t, n, i) {
    r || await B.mkdir(n);
    let o = await B.readdir(t);
    await Promise.all(o.map(async (s) => {
      let u = ve.join(t, s), y = ve.join(n, s);
      if (!await rr(u, y, i)) return;
      let { destStat: c } = await Se.checkPaths(u, y, "copy", i);
      return nr(c, u, y, i);
    })), r || await B.chmod(n, e.mode);
  }
  a(fo, "onDir");
  async function po(e, r, t, n) {
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
  a(po, "onLink");
  ir.exports = so;
});

// ../node_modules/fs-extra/lib/copy/copy-sync.js
var lr = S((tc, ur) => {
  "use strict";
  var H = fe(), be = require("path"), mo = X().mkdirsSync, yo = nt().utimesMillisSync, Ee = ue();
  function ho(e, r, t) {
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
    return H.existsSync(o) || mo(o), ar(i, e, r, t);
  }
  a(ho, "copySync");
  function ar(e, r, t, n) {
    let o = (n.dereference ? H.statSync : H.lstatSync)(r);
    if (o.isDirectory()) return _o(o, e, r, t, n);
    if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return wo(o, e, r, t, n);
    if (o.isSymbolicLink()) return Po(e, r, t, n);
    throw o.isSocket() ? new Error(`Cannot copy a socket file: ${r}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${r}`) : new Error(
    `Unknown file: ${r}`);
  }
  a(ar, "getStats");
  function wo(e, r, t, n, i) {
    return r ? go(e, t, n, i) : sr(e, t, n, i);
  }
  a(wo, "onFile");
  function go(e, r, t, n) {
    if (n.overwrite)
      return H.unlinkSync(t), sr(e, r, t, n);
    if (n.errorOnExist)
      throw new Error(`'${t}' already exists`);
  }
  a(go, "mayCopyFile");
  function sr(e, r, t, n) {
    return H.copyFileSync(r, t), n.preserveTimestamps && vo(e.mode, r, t), ot(t, e.mode);
  }
  a(sr, "copyFile");
  function vo(e, r, t) {
    return So(e) && bo(t, e), Eo(r, t);
  }
  a(vo, "handleTimestamps");
  function So(e) {
    return (e & 128) === 0;
  }
  a(So, "fileIsNotWritable");
  function bo(e, r) {
    return ot(e, r | 128);
  }
  a(bo, "makeFileWritable");
  function ot(e, r) {
    return H.chmodSync(e, r);
  }
  a(ot, "setDestMode");
  function Eo(e, r) {
    let t = H.statSync(e);
    return yo(r, t.atime, t.mtime);
  }
  a(Eo, "setDestTimestamps");
  function _o(e, r, t, n, i) {
    return r ? cr(t, n, i) : xo(e.mode, t, n, i);
  }
  a(_o, "onDir");
  function xo(e, r, t, n) {
    return H.mkdirSync(t), cr(r, t, n), ot(t, e);
  }
  a(xo, "mkDirAndCopy");
  function cr(e, r, t) {
    H.readdirSync(e).forEach((n) => Oo(n, e, r, t));
  }
  a(cr, "copyDir");
  function Oo(e, r, t, n) {
    let i = be.join(r, e), o = be.join(t, e);
    if (n.filter && !n.filter(i, o)) return;
    let { destStat: s } = Ee.checkPathsSync(i, o, "copy", n);
    return ar(s, i, o, n);
  }
  a(Oo, "copyDirItem");
  function Po(e, r, t, n) {
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
      return Fo(i, t);
    } else
      return H.symlinkSync(i, t);
  }
  a(Po, "onLink");
  function Fo(e, r) {
    return H.unlinkSync(r), H.symlinkSync(e, r);
  }
  a(Fo, "copyLink");
  ur.exports = ho;
});

// ../node_modules/fs-extra/lib/copy/index.js
var Re = S((nc, fr) => {
  "use strict";
  var ko = R().fromPromise;
  fr.exports = {
    copy: ko(or()),
    copySync: lr()
  };
});

// ../node_modules/fs-extra/lib/remove/index.js
var _e = S((ic, mr) => {
  "use strict";
  var pr = fe(), jo = R().fromCallback;
  function Do(e, r) {
    pr.rm(e, { recursive: !0, force: !0 }, r);
  }
  a(Do, "remove");
  function qo(e) {
    pr.rmSync(e, { recursive: !0, force: !0 });
  }
  a(qo, "removeSync");
  mr.exports = {
    remove: jo(Do),
    removeSync: qo
  };
});

// ../node_modules/fs-extra/lib/empty/index.js
var br = S((ac, Sr) => {
  "use strict";
  var To = R().fromPromise, hr = G(), wr = require("path"), gr = X(), vr = _e(), dr = To(/* @__PURE__ */ a(async function(r) {
    let t;
    try {
      t = await hr.readdir(r);
    } catch {
      return gr.mkdirs(r);
    }
    return Promise.all(t.map((n) => vr.remove(wr.join(r, n))));
  }, "emptyDir"));
  function yr(e) {
    let r;
    try {
      r = hr.readdirSync(e);
    } catch {
      return gr.mkdirsSync(e);
    }
    r.forEach((t) => {
      t = wr.join(e, t), vr.removeSync(t);
    });
  }
  a(yr, "emptyDirSync");
  Sr.exports = {
    emptyDirSync: yr,
    emptydirSync: yr,
    emptyDir: dr,
    emptydir: dr
  };
});

// ../node_modules/fs-extra/lib/ensure/file.js
var Or = S((cc, xr) => {
  "use strict";
  var Lo = R().fromPromise, Er = require("path"), te = G(), _r = X();
  async function No(e) {
    let r;
    try {
      r = await te.stat(e);
    } catch {
    }
    if (r && r.isFile()) return;
    let t = Er.dirname(e), n = null;
    try {
      n = await te.stat(t);
    } catch (i) {
      if (i.code === "ENOENT") {
        await _r.mkdirs(t), await te.writeFile(e, "");
        return;
      } else
        throw i;
    }
    n.isDirectory() ? await te.writeFile(e, "") : await te.readdir(t);
  }
  a(No, "createFile");
  function Ro(e) {
    let r;
    try {
      r = te.statSync(e);
    } catch {
    }
    if (r && r.isFile()) return;
    let t = Er.dirname(e);
    try {
      te.statSync(t).isDirectory() || te.readdirSync(t);
    } catch (n) {
      if (n && n.code === "ENOENT") _r.mkdirsSync(t);
      else throw n;
    }
    te.writeFileSync(e, "");
  }
  a(Ro, "createFileSync");
  xr.exports = {
    createFile: Lo(No),
    createFileSync: Ro
  };
});

// ../node_modules/fs-extra/lib/ensure/link.js
var Dr = S((lc, jr) => {
  "use strict";
  var Co = R().fromPromise, Pr = require("path"), ae = G(), Fr = X(), { pathExists: Io } = oe(), { areIdentical: kr } = ue();
  async function Ao(e, r) {
    let t;
    try {
      t = await ae.lstat(r);
    } catch {
    }
    let n;
    try {
      n = await ae.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    if (t && kr(n, t)) return;
    let i = Pr.dirname(r);
    await Io(i) || await Fr.mkdirs(i), await ae.link(e, r);
  }
  a(Ao, "createLink");
  function Mo(e, r) {
    let t;
    try {
      t = ae.lstatSync(r);
    } catch {
    }
    try {
      let o = ae.lstatSync(e);
      if (t && kr(o, t)) return;
    } catch (o) {
      throw o.message = o.message.replace("lstat", "ensureLink"), o;
    }
    let n = Pr.dirname(r);
    return ae.existsSync(n) || Fr.mkdirsSync(n), ae.linkSync(e, r);
  }
  a(Mo, "createLinkSync");
  jr.exports = {
    createLink: Co(Ao),
    createLinkSync: Mo
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-paths.js
var Tr = S((pc, qr) => {
  "use strict";
  var se = require("path"), xe = G(), { pathExists: $o } = oe(), Wo = R().fromPromise;
  async function Jo(e, r) {
    if (se.isAbsolute(e)) {
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
    let t = se.dirname(r), n = se.join(t, e);
    if (await $o(n))
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
      toDst: se.relative(t, e)
    };
  }
  a(Jo, "symlinkPaths");
  function Bo(e, r) {
    if (se.isAbsolute(e)) {
      if (!xe.existsSync(e)) throw new Error("absolute srcpath does not exist");
      return {
        toCwd: e,
        toDst: e
      };
    }
    let t = se.dirname(r), n = se.join(t, e);
    if (xe.existsSync(n))
      return {
        toCwd: n,
        toDst: e
      };
    if (!xe.existsSync(e)) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: se.relative(t, e)
    };
  }
  a(Bo, "symlinkPathsSync");
  qr.exports = {
    symlinkPaths: Wo(Jo),
    symlinkPathsSync: Bo
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-type.js
var Rr = S((dc, Nr) => {
  "use strict";
  var Lr = G(), Uo = R().fromPromise;
  async function Go(e, r) {
    if (r) return r;
    let t;
    try {
      t = await Lr.lstat(e);
    } catch {
      return "file";
    }
    return t && t.isDirectory() ? "dir" : "file";
  }
  a(Go, "symlinkType");
  function Ho(e, r) {
    if (r) return r;
    let t;
    try {
      t = Lr.lstatSync(e);
    } catch {
      return "file";
    }
    return t && t.isDirectory() ? "dir" : "file";
  }
  a(Ho, "symlinkTypeSync");
  Nr.exports = {
    symlinkType: Uo(Go),
    symlinkTypeSync: Ho
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink.js
var Mr = S((hc, Ar) => {
  "use strict";
  var Vo = R().fromPromise, Cr = require("path"), Q = G(), { mkdirs: zo, mkdirsSync: Yo } = X(), { symlinkPaths: Ko, symlinkPathsSync: Xo } = Tr(),
  { symlinkType: Qo, symlinkTypeSync: Zo } = Rr(), { pathExists: ea } = oe(), { areIdentical: Ir } = ue();
  async function ta(e, r, t) {
    let n;
    try {
      n = await Q.lstat(r);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let [u, y] = await Promise.all([
        Q.stat(e),
        Q.stat(r)
      ]);
      if (Ir(u, y)) return;
    }
    let i = await Ko(e, r);
    e = i.toDst;
    let o = await Qo(i.toCwd, t), s = Cr.dirname(r);
    return await ea(s) || await zo(s), Q.symlink(e, r, o);
  }
  a(ta, "createSymlink");
  function ra(e, r, t) {
    let n;
    try {
      n = Q.lstatSync(r);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let u = Q.statSync(e), y = Q.statSync(r);
      if (Ir(u, y)) return;
    }
    let i = Xo(e, r);
    e = i.toDst, t = Zo(i.toCwd, t);
    let o = Cr.dirname(r);
    return Q.existsSync(o) || Yo(o), Q.symlinkSync(e, r, t);
  }
  a(ra, "createSymlinkSync");
  Ar.exports = {
    createSymlink: Vo(ta),
    createSymlinkSync: ra
  };
});

// ../node_modules/fs-extra/lib/ensure/index.js
var Vr = S((gc, Hr) => {
  "use strict";
  var { createFile: $r, createFileSync: Wr } = Or(), { createLink: Jr, createLinkSync: Br } = Dr(), { createSymlink: Ur, createSymlinkSync: Gr } = Mr();
  Hr.exports = {
    // file
    createFile: $r,
    createFileSync: Wr,
    ensureFile: $r,
    ensureFileSync: Wr,
    // link
    createLink: Jr,
    createLinkSync: Br,
    ensureLink: Jr,
    ensureLinkSync: Br,
    // symlink
    createSymlink: Ur,
    createSymlinkSync: Gr,
    ensureSymlink: Ur,
    ensureSymlinkSync: Gr
  };
});

// ../node_modules/jsonfile/utils.js
var Ce = S((vc, zr) => {
  function na(e, { EOL: r = `
`, finalEOL: t = !0, replacer: n = null, spaces: i } = {}) {
    let o = t ? r : "";
    return JSON.stringify(e, n, i).replace(/\n/g, r) + o;
  }
  a(na, "stringify");
  function ia(e) {
    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
  }
  a(ia, "stripBom");
  zr.exports = { stringify: na, stripBom: ia };
});

// ../node_modules/jsonfile/index.js
var Qr = S((bc, Xr) => {
  var de;
  try {
    de = fe();
  } catch {
    de = require("fs");
  }
  var Ie = R(), { stringify: Yr, stripBom: Kr } = Ce();
  async function oa(e, r = {}) {
    typeof r == "string" && (r = { encoding: r });
    let t = r.fs || de, n = "throws" in r ? r.throws : !0, i = await Ie.fromCallback(t.readFile)(e, r);
    i = Kr(i);
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
  a(oa, "_readFile");
  var aa = Ie.fromPromise(oa);
  function sa(e, r = {}) {
    typeof r == "string" && (r = { encoding: r });
    let t = r.fs || de, n = "throws" in r ? r.throws : !0;
    try {
      let i = t.readFileSync(e, r);
      return i = Kr(i), JSON.parse(i, r.reviver);
    } catch (i) {
      if (n)
        throw i.message = `${e}: ${i.message}`, i;
      return null;
    }
  }
  a(sa, "readFileSync");
  async function ca(e, r, t = {}) {
    let n = t.fs || de, i = Yr(r, t);
    await Ie.fromCallback(n.writeFile)(e, i, t);
  }
  a(ca, "_writeFile");
  var ua = Ie.fromPromise(ca);
  function la(e, r, t = {}) {
    let n = t.fs || de, i = Yr(r, t);
    return n.writeFileSync(e, i, t);
  }
  a(la, "writeFileSync");
  var fa = {
    readFile: aa,
    readFileSync: sa,
    writeFile: ua,
    writeFileSync: la
  };
  Xr.exports = fa;
});

// ../node_modules/fs-extra/lib/json/jsonfile.js
var en = S((_c, Zr) => {
  "use strict";
  var Ae = Qr();
  Zr.exports = {
    // jsonfile exports
    readJson: Ae.readFile,
    readJsonSync: Ae.readFileSync,
    writeJson: Ae.writeFile,
    writeJsonSync: Ae.writeFileSync
  };
});

// ../node_modules/fs-extra/lib/output-file/index.js
var Me = S((xc, nn) => {
  "use strict";
  var pa = R().fromPromise, at = G(), tn = require("path"), rn = X(), ma = oe().pathExists;
  async function da(e, r, t = "utf-8") {
    let n = tn.dirname(e);
    return await ma(n) || await rn.mkdirs(n), at.writeFile(e, r, t);
  }
  a(da, "outputFile");
  function ya(e, ...r) {
    let t = tn.dirname(e);
    at.existsSync(t) || rn.mkdirsSync(t), at.writeFileSync(e, ...r);
  }
  a(ya, "outputFileSync");
  nn.exports = {
    outputFile: pa(da),
    outputFileSync: ya
  };
});

// ../node_modules/fs-extra/lib/json/output-json.js
var an = S((Pc, on) => {
  "use strict";
  var { stringify: ha } = Ce(), { outputFile: wa } = Me();
  async function ga(e, r, t = {}) {
    let n = ha(r, t);
    await wa(e, n, t);
  }
  a(ga, "outputJson");
  on.exports = ga;
});

// ../node_modules/fs-extra/lib/json/output-json-sync.js
var cn = S((kc, sn) => {
  "use strict";
  var { stringify: va } = Ce(), { outputFileSync: Sa } = Me();
  function ba(e, r, t) {
    let n = va(r, t);
    Sa(e, n, t);
  }
  a(ba, "outputJsonSync");
  sn.exports = ba;
});

// ../node_modules/fs-extra/lib/json/index.js
var ln = S((Dc, un) => {
  "use strict";
  var Ea = R().fromPromise, V = en();
  V.outputJson = Ea(an());
  V.outputJsonSync = cn();
  V.outputJSON = V.outputJson;
  V.outputJSONSync = V.outputJsonSync;
  V.writeJSON = V.writeJson;
  V.writeJSONSync = V.writeJsonSync;
  V.readJSON = V.readJson;
  V.readJSONSync = V.readJsonSync;
  un.exports = V;
});

// ../node_modules/fs-extra/lib/move/move.js
var yn = S((qc, dn) => {
  "use strict";
  var _a = G(), fn = require("path"), { copy: xa } = Re(), { remove: mn } = _e(), { mkdirp: Oa } = X(), { pathExists: Pa } = oe(), pn = ue();
  async function Fa(e, r, t = {}) {
    let n = t.overwrite || t.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = await pn.checkPaths(e, r, "move", t);
    await pn.checkParentPaths(e, i, r, "move");
    let s = fn.dirname(r);
    return fn.parse(s).root !== s && await Oa(s), ka(e, r, n, o);
  }
  a(Fa, "move");
  async function ka(e, r, t, n) {
    if (!n) {
      if (t)
        await mn(r);
      else if (await Pa(r))
        throw new Error("dest already exists.");
    }
    try {
      await _a.rename(e, r);
    } catch (i) {
      if (i.code !== "EXDEV")
        throw i;
      await ja(e, r, t);
    }
  }
  a(ka, "doRename");
  async function ja(e, r, t) {
    return await xa(e, r, {
      overwrite: t,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), mn(e);
  }
  a(ja, "moveAcrossDevice");
  dn.exports = Fa;
});

// ../node_modules/fs-extra/lib/move/move-sync.js
var Sn = S((Lc, vn) => {
  "use strict";
  var wn = fe(), ct = require("path"), Da = Re().copySync, gn = _e().removeSync, qa = X().mkdirpSync, hn = ue();
  function Ta(e, r, t) {
    t = t || {};
    let n = t.overwrite || t.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = hn.checkPathsSync(e, r, "move", t);
    return hn.checkParentPathsSync(e, i, r, "move"), La(r) || qa(ct.dirname(r)), Na(e, r, n, o);
  }
  a(Ta, "moveSync");
  function La(e) {
    let r = ct.dirname(e);
    return ct.parse(r).root === r;
  }
  a(La, "isParentRoot");
  function Na(e, r, t, n) {
    if (n) return st(e, r, t);
    if (t)
      return gn(r), st(e, r, t);
    if (wn.existsSync(r)) throw new Error("dest already exists.");
    return st(e, r, t);
  }
  a(Na, "doRename");
  function st(e, r, t) {
    try {
      wn.renameSync(e, r);
    } catch (n) {
      if (n.code !== "EXDEV") throw n;
      return Ra(e, r, t);
    }
  }
  a(st, "rename");
  function Ra(e, r, t) {
    return Da(e, r, {
      overwrite: t,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), gn(e);
  }
  a(Ra, "moveAcrossDevice");
  vn.exports = Ta;
});

// ../node_modules/fs-extra/lib/move/index.js
var En = S((Rc, bn) => {
  "use strict";
  var Ca = R().fromPromise;
  bn.exports = {
    move: Ca(yn()),
    moveSync: Sn()
  };
});

// ../node_modules/fs-extra/lib/index.js
var Oe = S((Cc, _n) => {
  "use strict";
  _n.exports = {
    // Export promiseified graceful-fs:
    ...G(),
    // Export extra methods:
    ...Re(),
    ...br(),
    ...Vr(),
    ...ln(),
    ...X(),
    ...En(),
    ...Me(),
    ...oe(),
    ..._e()
  };
});

// ../node_modules/tslib/tslib.es6.mjs
var zn = {};
Ft(zn, {
  __addDisposableResource: () => Hn,
  __assign: () => $e,
  __asyncDelegator: () => An,
  __asyncGenerator: () => In,
  __asyncValues: () => Mn,
  __await: () => ye,
  __awaiter: () => qn,
  __classPrivateFieldGet: () => Bn,
  __classPrivateFieldIn: () => Gn,
  __classPrivateFieldSet: () => Un,
  __createBinding: () => Je,
  __decorate: () => kn,
  __disposeResources: () => Vn,
  __esDecorate: () => Ma,
  __exportStar: () => Ln,
  __extends: () => Pn,
  __generator: () => Tn,
  __importDefault: () => Jn,
  __importStar: () => Wn,
  __makeTemplateObject: () => $n,
  __metadata: () => Dn,
  __param: () => jn,
  __propKey: () => Wa,
  __read: () => mt,
  __rest: () => Fn,
  __runInitializers: () => $a,
  __setFunctionName: () => Ja,
  __spread: () => Nn,
  __spreadArray: () => Cn,
  __spreadArrays: () => Rn,
  __values: () => We,
  default: () => Ga
});
function Pn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  pt(e, r);
  function t() {
    this.constructor = e;
  }
  a(t, "__"), e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function Fn(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]]);
  return t;
}
function kn(e, r, t, n) {
  var i = arguments.length, o = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, r, t, n);
  else for (var u = e.length - 1; u >= 0; u--) (s = e[u]) && (o = (i < 3 ? s(o) : i > 3 ? s(r, t, o) : s(r, t)) || o);
  return i > 3 && o && Object.defineProperty(r, t, o), o;
}
function jn(e, r) {
  return function(t, n) {
    r(t, n, e);
  };
}
function Ma(e, r, t, n, i, o) {
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
function $a(e, r, t) {
  for (var n = arguments.length > 2, i = 0; i < r.length; i++)
    t = n ? r[i].call(e, t) : r[i].call(e);
  return n ? t : void 0;
}
function Wa(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ja(e, r, t) {
  return typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0,
  value: t ? "".concat(t, " ", r) : r });
}
function Dn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, r);
}
function qn(e, r, t, n) {
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
function Tn(e, r) {
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
function Ln(e, r) {
  for (var t in e) t !== "default" && !Object.prototype.hasOwnProperty.call(r, t) && Je(r, e, t);
}
function We(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: /* @__PURE__ */ a(function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }, "next")
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mt(e, r) {
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
function Nn() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e = e.concat(mt(arguments[r]));
  return e;
}
function Rn() {
  for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
  for (var n = Array(e), i = 0, r = 0; r < t; r++)
    for (var o = arguments[r], s = 0, u = o.length; s < u; s++, i++)
      n[i] = o[s];
  return n;
}
function Cn(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, i = r.length, o; n < i; n++)
    (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}
function ye(e) {
  return this instanceof ye ? (this.v = e, this) : new ye(e);
}
function In(e, r, t) {
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
    l.value instanceof ye ? Promise.resolve(l.value.v).then(f, c) : d(o[0][2], l);
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
function An(e) {
  var r, t;
  return r = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), r[Symbol.iterator] = function() {
    return this;
  }, r;
  function n(i, o) {
    r[i] = e[i] ? function(s) {
      return (t = !t) ? { value: ye(e[i](s)), done: !1 } : o ? o(s) : s;
    } : o;
  }
}
function Mn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof We == "function" ? We(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] =
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
function $n(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}
function Wn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var t in e) t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Je(r, e, t);
  return Ba(r, e), r;
}
function Jn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Bn(e, r, t, n) {
  if (t === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not\
 declare it");
  return t === "m" ? n : t === "a" ? n.call(e) : n ? n.value : r.get(e);
}
function Un(e, r, t, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not \
declare it");
  return n === "a" ? i.call(e, t) : i ? i.value = t : r.set(e, t), t;
}
function Gn(e, r) {
  if (r === null || typeof r != "object" && typeof r != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Hn(e, r, t) {
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
function Vn(e) {
  function r(n) {
    e.error = e.hasError ? new Ua(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0;
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
var pt, $e, Je, Ba, Ua, Ga, Yn = Ni(() => {
  pt = /* @__PURE__ */ a(function(e, r) {
    return pt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
      t.__proto__ = n;
    } || function(t, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }, pt(e, r);
  }, "extendStatics");
  a(Pn, "__extends");
  $e = /* @__PURE__ */ a(function() {
    return $e = Object.assign || /* @__PURE__ */ a(function(r) {
      for (var t, n = 1, i = arguments.length; n < i; n++) {
        t = arguments[n];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
      }
      return r;
    }, "__assign"), $e.apply(this, arguments);
  }, "__assign");
  a(Fn, "__rest");
  a(kn, "__decorate");
  a(jn, "__param");
  a(Ma, "__esDecorate");
  a($a, "__runInitializers");
  a(Wa, "__propKey");
  a(Ja, "__setFunctionName");
  a(Dn, "__metadata");
  a(qn, "__awaiter");
  a(Tn, "__generator");
  Je = Object.create ? function(e, r, t, n) {
    n === void 0 && (n = t);
    var i = Object.getOwnPropertyDescriptor(r, t);
    (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return r[t];
    }, "get") }), Object.defineProperty(e, n, i);
  } : function(e, r, t, n) {
    n === void 0 && (n = t), e[n] = r[t];
  };
  a(Ln, "__exportStar");
  a(We, "__values");
  a(mt, "__read");
  a(Nn, "__spread");
  a(Rn, "__spreadArrays");
  a(Cn, "__spreadArray");
  a(ye, "__await");
  a(In, "__asyncGenerator");
  a(An, "__asyncDelegator");
  a(Mn, "__asyncValues");
  a($n, "__makeTemplateObject");
  Ba = Object.create ? function(e, r) {
    Object.defineProperty(e, "default", { enumerable: !0, value: r });
  } : function(e, r) {
    e.default = r;
  };
  a(Wn, "__importStar");
  a(Jn, "__importDefault");
  a(Bn, "__classPrivateFieldGet");
  a(Un, "__classPrivateFieldSet");
  a(Gn, "__classPrivateFieldIn");
  a(Hn, "__addDisposableResource");
  Ua = typeof SuppressedError == "function" ? SuppressedError : function(e, r, t) {
    var n = new Error(t);
    return n.name = "SuppressedError", n.error = e, n.suppressed = r, n;
  };
  a(Vn, "__disposeResources");
  Ga = {
    __extends: Pn,
    __assign: $e,
    __rest: Fn,
    __decorate: kn,
    __param: jn,
    __metadata: Dn,
    __awaiter: qn,
    __generator: Tn,
    __createBinding: Je,
    __exportStar: Ln,
    __values: We,
    __read: mt,
    __spread: Nn,
    __spreadArrays: Rn,
    __spreadArray: Cn,
    __await: ye,
    __asyncGenerator: In,
    __asyncDelegator: An,
    __asyncValues: Mn,
    __makeTemplateObject: $n,
    __importStar: Wn,
    __importDefault: Jn,
    __classPrivateFieldGet: Bn,
    __classPrivateFieldSet: Un,
    __classPrivateFieldIn: Gn,
    __addDisposableResource: Hn,
    __disposeResources: Vn
  };
});

// ../node_modules/@yarnpkg/esbuild-plugin-pnp/lib/index.js
var Xn = S((Be) => {
  "use strict";
  Object.defineProperty(Be, "__esModule", { value: !0 });
  Be.pnpPlugin = void 0;
  var Kn = (Yn(), jt(zn)), Ha = Kn.__importStar(require("fs")), Va = Kn.__importDefault(require("path")), za = /()/, Ya = [".tsx", ".ts", ".\
jsx", ".mjs", ".cjs", ".js", ".css", ".json"];
  function Ka(e) {
    return e.map((r) => {
      let t = r.indexOf("*");
      return t !== -1 ? { prefix: r.slice(0, t), suffix: r.slice(t + 1) } : r;
    });
  }
  a(Ka, "parseExternals");
  function Xa(e, r) {
    for (let t of r)
      if (typeof t == "object") {
        if (e.length >= t.prefix.length + t.suffix.length && e.startsWith(t.prefix) && e.endsWith(t.suffix))
          return !0;
      } else if (e === t || !t.startsWith("/") && !t.startsWith("./") && !t.startsWith("../") && t !== "." && t !== ".." && e.startsWith(`${t}\
/`))
        return !0;
    return !1;
  }
  a(Xa, "isExternal");
  async function Qa(e) {
    return {
      contents: await Ha.promises.readFile(e.path),
      loader: "default",
      // For regular imports in the `file` namespace, resolveDir is the directory the
      // file being resolved lives in. For all other virtual modules, this defaults to
      // empty string: ""
      // A sensible value for pnp imports is the same as the `file` namespace, as pnp
      // still resolves to files on disk (in the cache).
      resolveDir: Va.default.dirname(e.path)
    };
  }
  a(Qa, "defaultOnLoad");
  async function Za(e, { resolvedPath: r, error: t, watchFiles: n }) {
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
  a(Za, "defaultOnResolve");
  function es({ baseDir: e = process.cwd(), extensions: r = Ya, filter: t = za, onResolve: n = Za, onLoad: i = Qa } = {}) {
    return {
      name: "@yarnpkg/esbuild-plugin-pnp",
      setup(o) {
        var s, u;
        let { findPnpApi: y } = require("module");
        if (typeof y > "u")
          return;
        let f = Ka((s = o.initialOptions.external) !== null && s !== void 0 ? s : []), c = (u = o.initialOptions.platform) !== null && u !==
        void 0 ? u : "browser", d = c === "node", l = new Set(o.initialOptions.conditions);
        l.add("default"), (c === "browser" || c === "node") && l.add(c);
        let m = new Set(l);
        m.add("import");
        let p = new Set(l);
        p.add("require"), o.onResolve({ filter: t }, (h) => {
          var w, v;
          if (Xa(h.path, f))
            return { external: !0 };
          let O = l;
          h.kind === "dynamic-import" || h.kind === "import-statement" ? O = m : (h.kind === "require-call" || h.kind === "require-resolve") &&
          (O = p);
          let x = h.resolveDir ? `${h.resolveDir}/` : h.importer ? h.importer : `${e}/`, T = y(x);
          if (!T)
            return;
          let W = null, K;
          try {
            W = T.resolveRequest(h.path, x, {
              conditions: O,
              considerBuiltins: d,
              extensions: r
            });
          } catch (ne) {
            K = ne;
          }
          let Z = [T.resolveRequest("pnpapi", null)];
          if (W) {
            let ne = T.findPackageLocator(W);
            if (ne) {
              let g = T.getPackageInformation(ne);
              g?.linkType === "SOFT" && Z.push((v = (w = T.resolveVirtual) === null || w === void 0 ? void 0 : w.call(T, W)) !== null && v !==
              void 0 ? v : W);
            }
          }
          return n(h, { resolvedPath: W, error: K, watchFiles: Z });
        }), o.onLoad !== null && o.onLoad({ filter: t }, i);
      }
    };
  }
  a(es, "pnpPlugin");
  Be.pnpPlugin = es;
});

// ../node_modules/esbuild-plugin-alias/index.js
var Zn = S((eu, Qn) => {
  Qn.exports = (e) => {
    let r = Object.keys(e), t = new RegExp(`^(${r.map((n) => ts(n)).join("|")})$`);
    return {
      name: "alias",
      setup(n) {
        n.onResolve({ filter: t }, (i) => ({
          path: e[i.path]
        }));
      }
    };
  };
  function ts(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  a(ts, "escapeRegExp");
});

// ../node_modules/ejs/lib/utils.js
var ti = S((z) => {
  "use strict";
  var rs = /[|\\{}()[\]^$+*?.]/g, ns = Object.prototype.hasOwnProperty, dt = /* @__PURE__ */ a(function(e, r) {
    return ns.apply(e, [r]);
  }, "hasOwn");
  z.escapeRegExpChars = function(e) {
    return e ? String(e).replace(rs, "\\$&") : "";
  };
  var is = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  }, os = /[&<>'"]/g;
  function as(e) {
    return is[e] || e;
  }
  a(as, "encode_char");
  var ss = `var _ENCODE_HTML_RULES = {
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
    return e == null ? "" : String(e).replace(os, as);
  };
  function ei() {
    return Function.prototype.toString.call(this) + `;
` + ss;
  }
  a(ei, "escapeXMLToString");
  try {
    typeof Object.defineProperty == "function" ? Object.defineProperty(z.escapeXML, "toString", { value: ei }) : z.escapeXML.toString = ei;
  } catch {
    console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
  }
  z.shallowCopy = function(e, r) {
    if (r = r || {}, e != null)
      for (var t in r)
        dt(r, t) && (t === "__proto__" || t === "constructor" || (e[t] = r[t]));
    return e;
  };
  z.shallowCopyFromList = function(e, r, t) {
    if (t = t || [], r = r || {}, e != null)
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        if (typeof r[i] < "u") {
          if (!dt(r, i) || i === "__proto__" || i === "constructor")
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
      dt(e, t) && (r[t] = e[t]);
    return r;
  };
});

// ../node_modules/ejs/package.json
var ri = S((iu, cs) => {
  cs.exports = {
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
var fi = S((E) => {
  "use strict";
  var ht = require("fs"), Pe = require("path"), q = ti(), ni = !1, us = ri().version, ls = "<", fs = ">", ps = "%", ui = "locals", ms = "ejs",
  ds = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", li = [
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
  ], ys = li.concat("cache"), ii = /^\uFEFF/, yt = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
  E.cache = q.cache;
  E.fileLoader = ht.readFileSync;
  E.localsName = ui;
  E.promiseImpl = new Function("return this;")().Promise;
  E.resolveInclude = function(e, r, t) {
    var n = Pe.dirname, i = Pe.extname, o = Pe.resolve, s = o(t ? r : n(r), e), u = i(e);
    return u || (s += ".ejs"), s;
  };
  function oi(e, r) {
    var t;
    if (r.some(function(n) {
      return t = E.resolveInclude(e, n, !0), ht.existsSync(t);
    }))
      return t;
  }
  a(oi, "resolvePaths");
  function hs(e, r) {
    var t, n, i = r.views, o = /^[A-Za-z]+:\\|^\//.exec(e);
    if (o && o.length)
      e = e.replace(/^\/*/, ""), Array.isArray(r.root) ? t = oi(e, r.root) : t = E.resolveInclude(e, r.root || "/", !0);
    else if (r.filename && (n = E.resolveInclude(e, r.filename), ht.existsSync(n) && (t = n)), !t && Array.isArray(i) && (t = oi(e, i)), !t &&
    typeof r.includer != "function")
      throw new Error('Could not find the include file "' + r.escapeFunction(e) + '"');
    return t;
  }
  a(hs, "getIncludePath");
  function Fe(e, r) {
    var t, n = e.filename, i = arguments.length > 1;
    if (e.cache) {
      if (!n)
        throw new Error("cache option requires a filename");
      if (t = E.cache.get(n), t)
        return t;
      i || (r = ai(n).toString().replace(ii, ""));
    } else if (!i) {
      if (!n)
        throw new Error("Internal EJS error: no file name or template provided");
      r = ai(n).toString().replace(ii, "");
    }
    return t = E.compile(r, e), e.cache && E.cache.set(n, t), t;
  }
  a(Fe, "handleCache");
  function ws(e, r, t) {
    var n;
    if (t) {
      try {
        n = Fe(e)(r);
      } catch (i) {
        return t(i);
      }
      t(null, n);
    } else {
      if (typeof E.promiseImpl == "function")
        return new E.promiseImpl(function(i, o) {
          try {
            n = Fe(e)(r), i(n);
          } catch (s) {
            o(s);
          }
        });
      throw new Error("Please provide a callback function");
    }
  }
  a(ws, "tryHandleCache");
  function ai(e) {
    return E.fileLoader(e);
  }
  a(ai, "fileLoader");
  function gs(e, r) {
    var t = q.shallowCopy(q.createNullProtoObjWherePossible(), r);
    if (t.filename = hs(e, t), typeof r.includer == "function") {
      var n = r.includer(e, t.filename);
      if (n && (n.filename && (t.filename = n.filename), n.template))
        return Fe(t, n.template);
    }
    return Fe(t);
  }
  a(gs, "includeFile");
  function si(e, r, t, n, i) {
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
  a(si, "rethrow");
  function ci(e) {
    return e.replace(/;(\s*$)/, "$1");
  }
  a(ci, "stripSemi");
  E.compile = /* @__PURE__ */ a(function(r, t) {
    var n;
    return t && t.scope && (ni || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), ni = !0), t.context || (t.context =
    t.scope), delete t.scope), n = new L(r, t), n.compile();
  }, "compile");
  E.render = function(e, r, t) {
    var n = r || q.createNullProtoObjWherePossible(), i = t || q.createNullProtoObjWherePossible();
    return arguments.length == 2 && q.shallowCopyFromList(i, n, li), Fe(i, e)(n);
  };
  E.renderFile = function() {
    var e = Array.prototype.slice.call(arguments), r = e.shift(), t, n = { filename: r }, i, o;
    return typeof arguments[arguments.length - 1] == "function" && (t = e.pop()), e.length ? (i = e.shift(), e.length ? q.shallowCopy(n, e.pop()) :
    (i.settings && (i.settings.views && (n.views = i.settings.views), i.settings["view cache"] && (n.cache = !0), o = i.settings["view optio\
ns"], o && q.shallowCopy(n, o)), q.shallowCopyFromList(n, i, ys)), n.filename = r) : i = q.createNullProtoObjWherePossible(), ws(n, i, t);
  };
  E.Template = L;
  E.clearCache = function() {
    E.cache.reset();
  };
  function L(e, r) {
    var t = q.hasOwnOnlyObject(r), n = q.createNullProtoObjWherePossible();
    this.templateText = e, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", n.client = t.client || !1, n.escapeFunction =
    t.escape || t.escapeFunction || q.escapeXML, n.compileDebug = t.compileDebug !== !1, n.debug = !!t.debug, n.filename = t.filename, n.openDelimiter =
    t.openDelimiter || E.openDelimiter || ls, n.closeDelimiter = t.closeDelimiter || E.closeDelimiter || fs, n.delimiter = t.delimiter || E.
    delimiter || ps, n.strict = t.strict || !1, n.context = t.context, n.cache = t.cache || !1, n.rmWhitespace = t.rmWhitespace, n.root = t.
    root, n.includer = t.includer, n.outputFunctionName = t.outputFunctionName, n.localsName = t.localsName || E.localsName || ui, n.views =
    t.views, n.async = t.async, n.destructuredLocals = t.destructuredLocals, n.legacyInclude = typeof t.legacyInclude < "u" ? !!t.legacyInclude :
    !0, n.strict ? n._with = !1 : n._with = typeof t._with < "u" ? t._with : !0, this.opts = n, this.regex = this.createRegex();
  }
  a(L, "Template");
  L.modes = {
    EVAL: "eval",
    ESCAPED: "escaped",
    RAW: "raw",
    COMMENT: "comment",
    LITERAL: "literal"
  };
  L.prototype = {
    createRegex: /* @__PURE__ */ a(function() {
      var e = ds, r = q.escapeRegExpChars(this.opts.delimiter), t = q.escapeRegExpChars(this.opts.openDelimiter), n = q.escapeRegExpChars(this.
      opts.closeDelimiter);
      return e = e.replace(/%/g, r).replace(/</g, t).replace(/>/g, n), new RegExp(e);
    }, "createRegex"),
    compile: /* @__PURE__ */ a(function() {
      var e, r, t = this.opts, n = "", i = "", o = t.escapeFunction, s, u = t.filename ? JSON.stringify(t.filename) : "undefined";
      if (!this.source) {
        if (this.generateSource(), n += `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`, t.outputFunctionName) {
          if (!yt.test(t.outputFunctionName))
            throw new Error("outputFunctionName is not a valid JS identifier.");
          n += "  var " + t.outputFunctionName + ` = __append;
`;
        }
        if (t.localsName && !yt.test(t.localsName))
          throw new Error("localsName is not a valid JS identifier.");
        if (t.destructuredLocals && t.destructuredLocals.length) {
          for (var y = "  var __locals = (" + t.localsName + ` || {}),
`, f = 0; f < t.destructuredLocals.length; f++) {
            var c = t.destructuredLocals[f];
            if (!yt.test(c))
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
` + e, t.compileDebug && (e = "rethrow = rethrow || " + si.toString() + `;
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
        var w = /* @__PURE__ */ a(function(v, O) {
          var x = q.shallowCopy(q.createNullProtoObjWherePossible(), h);
          return O && (x = q.shallowCopy(x, O)), gs(v, t)(x);
        }, "include");
        return r.apply(
          t.context,
          [h || q.createNullProtoObjWherePossible(), o, w, si]
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
          this.mode = L.modes.EVAL;
          break;
        case n + t + "=":
          this.mode = L.modes.ESCAPED;
          break;
        case n + t + "-":
          this.mode = L.modes.RAW;
          break;
        case n + t + "#":
          this.mode = L.modes.COMMENT;
          break;
        case n + t + t:
          this.mode = L.modes.LITERAL, this.source += '    ; __append("' + e.replace(n + t + t, n + t) + `")
`;
          break;
        case t + t + i:
          this.mode = L.modes.LITERAL, this.source += '    ; __append("' + e.replace(t + t + i, t + i) + `")
`;
          break;
        case t + i:
        case "-" + t + i:
        case "_" + t + i:
          this.mode == L.modes.LITERAL && this._addOutput(e), this.mode = null, this.truncate = e.indexOf("-") === 0 || e.indexOf("_") === 0;
          break;
        default:
          if (this.mode) {
            switch (this.mode) {
              case L.modes.EVAL:
              case L.modes.ESCAPED:
              case L.modes.RAW:
                e.lastIndexOf("//") > e.lastIndexOf(`
`) && (e += `
`);
            }
            switch (this.mode) {
              case L.modes.EVAL:
                this.source += "    ; " + e + `
`;
                break;
              case L.modes.ESCAPED:
                this.source += "    ; __append(escapeFn(" + ci(e) + `))
`;
                break;
              case L.modes.RAW:
                this.source += "    ; __append(" + ci(e) + `)
`;
                break;
              case L.modes.COMMENT:
                break;
              case L.modes.LITERAL:
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
  E.escapeXML = q.escapeXML;
  E.__express = E.renderFile;
  E.VERSION = us;
  E.name = ms;
  typeof window < "u" && (window.ejs = E);
});

// src/builder-manager/index.ts
var js = {};
Ft(js, {
  bail: () => ki,
  build: () => Ps,
  corePresets: () => Fs,
  executor: () => Et,
  getConfig: () => bt,
  overridePresets: () => ks,
  start: () => Os
});
module.exports = jt(js);
var Y = require("node:path"), He = J(Oe(), 1), Pt = J(require("express"), 1), Ve = require("@storybook/core/node-logger");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/module-info.js
var xn = /* @__PURE__ */ a((e) => {
  let {
    type: r = "esm",
    varName: t,
    namedExports: n = null,
    defaultExport: i = !0
  } = typeof e == "string" ? { varName: e } : e;
  return { type: r, varName: t, namedExports: n, defaultExport: i };
}, "normalizeModuleInfo");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/on-load.js
var Ia = /* @__PURE__ */ a((e) => `module.exports = ${e};`, "createCjsContents");
var Aa = /* @__PURE__ */ a((e, r, t) => {
  let n = t ? [`export default ${e};`] : [];
  if (r && r.length) {
    let i = [...new Set(r)].join(", ");
    n.push(`const { ${i} } = ${e};`), n.push(`export { ${i} };`);
  }
  return n.join(`
`);
}, "createEsmContents"), On = /* @__PURE__ */ a((e) => {
  let { type: r, varName: t, namedExports: n, defaultExport: i } = e;
  switch (r) {
    case "esm":
      return Aa(t, n, i);
    case "cjs":
      return Ia(t);
  }
}, "createContents");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/with-reg-exp.js
var ut = "global-externals", lt = /* @__PURE__ */ a((e) => {
  let { modulePathFilter: r, getModuleInfo: t } = e;
  return {
    name: ut,
    setup(n) {
      n.onResolve({ filter: r }, (i) => ({
        path: i.path,
        namespace: ut
      })), n.onLoad({ filter: /.*/, namespace: ut }, (i) => {
        let o = i.path, s = xn(t(o));
        return { contents: On(s) };
      });
    }
  };
}, "globalExternalsWithRegExp");

// ../node_modules/@fal-works/esbuild-plugin-global-externals/lib/with-object.js
var ft = /* @__PURE__ */ a((e) => {
  let r = {
    modulePathFilter: new RegExp(`^(?:${Object.keys(e).join("|")})$`),
    getModuleInfo: /* @__PURE__ */ a((t) => e[t], "getModuleInfo")
  };
  return lt(r);
}, "globalExternals");

// src/builder-manager/index.ts
var xi = J(Xn(), 1), Oi = J(Zn(), 1), Pi = require("@storybook/core/common"), Fi = require("@storybook/core/manager/globals-module-info");

// src/builder-manager/utils/template.ts
var Ue = require("node:path"), pi = J(Oe(), 1), mi = J(fi(), 1);
var wt = /* @__PURE__ */ a(async (e) => (0, Ue.join)((0, Ue.dirname)(require.resolve("@storybook/core/package.json")), "assets/server", e), "\
getTemplatePath"), di = /* @__PURE__ */ a(async (e) => {
  let r = await wt(e);
  return pi.default.readFile(r, "utf8");
}, "readTemplate");
var gt = /* @__PURE__ */ a(async (e, r, t, n, i, o, s, u, y, f, c, { versionCheck: d, previewUrl: l, configType: m, ignorePreview: p }, h) => {
  let w = await r, v = await e, O = Object.entries(h).reduce(
    (x, [T, W]) => ({ ...x, [T]: JSON.stringify(W) }),
    {}
  );
  return (0, mi.render)(v, {
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
      ...O
    },
    head: await n || "",
    ignorePreview: p
  });
}, "renderHTML");

// src/builder-manager/utils/managerEntries.ts
var vt = J(Oe(), 1), hi = require("@storybook/core/common"), re = require("node:path");

// ../node_modules/slash/index.js
function ke(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
a(ke, "slash");

// src/builder-manager/utils/managerEntries.ts
var yi = /* @__PURE__ */ a((e) => e.replaceAll(".", "").replaceAll("@", "").replaceAll(re.sep, "-").replaceAll("/", "-").replaceAll(new RegExp(
/^(-)+/g), ""), "sanitizeBase"), vs = /* @__PURE__ */ a((e) => {
  let r = e.split(/-?node_modules-?/);
  return r[r.length - 1].replaceAll("storybook-addon-", "").replaceAll("dist-", "");
}, "sanitizeFinal");
async function wi(e, r) {
  return Promise.all(
    e.map(async (t, n) => {
      let { name: i, dir: o } = (0, re.parse)(t), s = (0, hi.resolvePathInStorybookCache)("sb-manager", r);
      if (!s)
        throw new Error("Could not create/find cache directory");
      let u = (0, re.relative)(process.cwd(), o), y = (0, re.join)(
        s,
        vs((0, re.join)(`${yi(u)}-${n}`, `${yi(i)}-bundle.js`))
      );
      return await vt.default.ensureFile(y), await vt.default.writeFile(y, `import '${ke(t)}';`), y;
    })
  );
}
a(wi, "wrapManagerEntries");

// src/builder-manager/utils/data.ts
var gi = require("node:path"), vi = require("@storybook/core/common");
var St = /* @__PURE__ */ a(async (e) => {
  let r = (0, vi.getRefs)(e), t = e.presets.apply("favicon").then((l) => (0, gi.basename)(l)), n = e.presets.apply("features"), i = e.presets.
  apply("logLevel"), o = e.presets.apply("title"), s = e.presets.apply("docs", {}), u = e.presets.apply("tags", {}), y = di("template.ejs"),
  f = e.presets.apply("managerHead"), [c, d] = await Promise.all([
    //
    Et.get(),
    bt(e)
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
var Si = /* @__PURE__ */ a((e) => {
  try {
    return Promise.resolve(require.resolve(e));
  } catch {
    return Promise.resolve(!1);
  }
}, "safeResolve");

// src/builder-manager/utils/files.ts
var _t = J(Oe(), 1), Ge = require("node:path");
async function xt(e, r) {
  let t = await Promise.all(
    r?.map(async (o) => {
      let { location: s, url: u } = Ss(o, e);
      return await _t.default.ensureFile(s), await _t.default.writeFile(s, o.contents), u;
    }) || []
  ), n = t.filter((o) => o.endsWith(".js"));
  return { cssFiles: t.filter((o) => o.endsWith(".css")), jsFiles: n };
}
a(xt, "readOrderedFiles");
function Ss(e, r) {
  let t = e.path.replace(r, ""), n = (0, Ge.normalize)((0, Ge.join)(r, t)), i = `./sb-addons${ke(t).split("/").map(encodeURIComponent).join(
  "/")}`;
  return { location: n, url: i };
}
a(Ss, "sanitizePath");

// src/builder-manager/utils/framework.ts
var Ei = J(require("node:path"), 1), je = require("@storybook/core/common");
var bi = /* @__PURE__ */ a((e) => {
  if (e)
    return typeof e == "string" ? e : e.name;
}, "pluckNameFromConfigProperty"), _i = /* @__PURE__ */ a((e) => e.replaceAll(Ei.default.sep, "/"), "normalizePath"), bs = /* @__PURE__ */ a(
(e) => _i(e).match(/(@storybook\/.*)$/)?.[1], "pluckStorybookPackageFromPath"), Es = /* @__PURE__ */ a((e) => _i(e).split("node_modules/")[1] ??
e, "pluckThirdPartyPackageFromPath"), Ot = /* @__PURE__ */ a(async (e) => {
  let r = {}, { builder: t } = await e.presets.apply("core"), n = await (0, je.getFrameworkName)(e);
  await (0, je.extractProperRendererNameFromFramework)(n) && (r.STORYBOOK_RENDERER = await (0, je.extractProperRendererNameFromFramework)(n) ??
  void 0);
  let o = bi(t);
  o && (r.STORYBOOK_BUILDER = bs(o) ?? Es(o));
  let s = bi(await e.presets.apply("framework"));
  return s && (r.STORYBOOK_FRAMEWORK = s), r;
}, "buildFrameworkGlobalsFromOptions");

// src/builder-manager/index.ts
var ze, he, bt = /* @__PURE__ */ a(async (e) => {
  let [r, t, n, i] = await Promise.all([
    e.presets.apply("managerEntries", []),
    Si((0, Y.join)(e.configDir, "manager")),
    wt("addon.tsconfig.json"),
    e.presets.apply("env")
  ]), o = t ? [...r, t] : r;
  return {
    entryPoints: await wi(o, e.cacheKey),
    outdir: (0, Y.join)(e.outputDir || "./", "sb-addons"),
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
      (0, Oi.default)({
        process: require.resolve("process/browser.js"),
        util: require.resolve("util/util.js"),
        assert: require.resolve("browser-assert")
      }),
      ft(Fi.globalsModuleInfoMap),
      (0, xi.pnpPlugin)()
    ],
    banner: {
      js: "try{"
    },
    footer: {
      js: '}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }'
    },
    define: {
      "process.env": JSON.stringify(i),
      ...(0, Pi.stringifyProcessEnvs)(i),
      global: "window",
      module: "{}"
    }
  };
}, "getConfig"), Et = {
  get: /* @__PURE__ */ a(async () => {
    let { build: e } = await import("esbuild");
    return e;
  }, "get")
}, _s = /* @__PURE__ */ a(async function* ({
  startTime: r,
  options: t,
  router: n
}) {
  Ve.logger.info("=> Starting manager..");
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
  } = await St(t);
  yield;
  let h = i.outdir;
  await He.default.remove(h), yield, ze = await y({
    ...i
  }), yield;
  let w = (0, Y.join)(
    (0, Y.dirname)(require.resolve("@storybook/core/package.json")),
    "dist",
    "manager"
  );
  n.use("/sb-addons", Pt.default.static(h, { immutable: !0, maxAge: "5m" })), n.use("/sb-manager", Pt.default.static(w, { immutable: !0, maxAge: "\
5m" }));
  let { cssFiles: v, jsFiles: O } = await xt(h, ze?.outputFiles), x = await Ot(t);
  yield;
  let T = await gt(
    c,
    d,
    o,
    s,
    v,
    O,
    u,
    f,
    l,
    m,
    p,
    t,
    x
  );
  return yield, n.use("/", ({ path: W }, K, Z) => {
    W === "/" ? K.status(200).send(T) : Z();
  }), n.use("/index.html", ({ path: W }, K) => {
    K.status(200).send(T);
  }), {
    bail: ki,
    stats: {
      toJson: /* @__PURE__ */ a(() => ({}), "toJson")
    },
    totalTime: process.hrtime(r)
  };
}, "starterGeneratorFn"), xs = /* @__PURE__ */ a(async function* ({ startTime: r, options: t }) {
  if (!t.outputDir)
    throw new Error("outputDir is required");
  Ve.logger.info("=> Building manager..");
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
  } = await St(t);
  yield;
  let p = n.outdir, h = (0, Y.join)(
    (0, Y.dirname)(require.resolve("@storybook/core/package.json")),
    "dist",
    "manager"
  ), w = (0, Y.join)(t.outputDir, "sb-manager");
  ze = await u({
    ...n,
    minify: !0
  }), yield;
  let v = He.default.copy(h, w, {
    filter: /* @__PURE__ */ a((K) => {
      let { ext: Z } = (0, Y.parse)(K);
      return Z ? Z === ".js" : !0;
    }, "filter")
  }), { cssFiles: O, jsFiles: x } = await xt(p, ze?.outputFiles), T = await Ot(t);
  yield;
  let W = await gt(
    f,
    c,
    o,
    i,
    O,
    x,
    s,
    y,
    d,
    l,
    m,
    t,
    T
  );
  return await Promise.all([
    //
    He.default.writeFile((0, Y.join)(t.outputDir, "index.html"), W),
    v
  ]), Ve.logger.trace({ message: "=> Manager built", time: process.hrtime(r) }), {
    toJson: /* @__PURE__ */ a(() => ({}), "toJson")
  };
}, "builderGeneratorFn"), ki = /* @__PURE__ */ a(async () => {
  if (he)
    try {
      await he.throw(new Error());
    } catch {
    }
}, "bail"), Os = /* @__PURE__ */ a(async (e) => {
  he = _s(e);
  let r;
  do
    r = await he.next();
  while (!r.done);
  return r.value;
}, "start"), Ps = /* @__PURE__ */ a(async (e) => {
  he = xs(e);
  let r;
  do
    r = await he.next();
  while (!r.done);
  return r.value;
}, "build"), Fs = [], ks = [];
