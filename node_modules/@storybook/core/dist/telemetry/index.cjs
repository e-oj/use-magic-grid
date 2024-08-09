"use strict";
var wa = Object.create;
var Re = Object.defineProperty;
var Sa = Object.getOwnPropertyDescriptor;
var va = Object.getOwnPropertyNames;
var ba = Object.getPrototypeOf, xa = Object.prototype.hasOwnProperty;
var o = (e, t) => Re(e, "name", { value: t, configurable: !0 });
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ea = (e, t) => {
  for (var r in t)
    Re(e, r, { get: t[r], enumerable: !0 });
}, $r = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of va(t))
      !xa.call(e, i) && i !== r && Re(e, i, { get: () => t[i], enumerable: !(n = Sa(t, i)) || n.enumerable });
  return e;
};
var Y = (e, t, r) => (r = e != null ? wa(ba(e)) : {}, $r(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Re(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), ka = (e) => $r(Re({}, "__esModule", { value: !0 }), e);

// ../node_modules/walk-up-path/dist/cjs/index.js
var Br = d((Qe) => {
  "use strict";
  Object.defineProperty(Qe, "__esModule", { value: !0 });
  Qe.walkUp = void 0;
  var Gr = require("path"), Pa = /* @__PURE__ */ o(function* (e) {
    for (e = (0, Gr.resolve)(e); e; ) {
      yield e;
      let t = (0, Gr.dirname)(e);
      if (t === e)
        break;
      e = t;
    }
  }, "walkUp");
  Qe.walkUp = Pa;
});

// ../node_modules/isexe/windows.js
var Xr = d((wd, zr) => {
  zr.exports = Hr;
  Hr.sync = Ca;
  var Yr = require("fs");
  function Ia(e, t) {
    var r = t.pathExt !== void 0 ? t.pathExt : process.env.PATHEXT;
    if (!r || (r = r.split(";"), r.indexOf("") !== -1))
      return !0;
    for (var n = 0; n < r.length; n++) {
      var i = r[n].toLowerCase();
      if (i && e.substr(-i.length).toLowerCase() === i)
        return !0;
    }
    return !1;
  }
  o(Ia, "checkPathExt");
  function Kr(e, t, r) {
    return !e.isSymbolicLink() && !e.isFile() ? !1 : Ia(t, r);
  }
  o(Kr, "checkStat");
  function Hr(e, t, r) {
    Yr.stat(e, function(n, i) {
      r(n, n ? !1 : Kr(i, e, t));
    });
  }
  o(Hr, "isexe");
  function Ca(e, t) {
    return Kr(Yr.statSync(e), e, t);
  }
  o(Ca, "sync");
});

// ../node_modules/isexe/mode.js
var rn = d((vd, tn) => {
  tn.exports = Zr;
  Zr.sync = Fa;
  var Qr = require("fs");
  function Zr(e, t, r) {
    Qr.stat(e, function(n, i) {
      r(n, n ? !1 : en(i, t));
    });
  }
  o(Zr, "isexe");
  function Fa(e, t) {
    return en(Qr.statSync(e), t);
  }
  o(Fa, "sync");
  function en(e, t) {
    return e.isFile() && Na(e, t);
  }
  o(en, "checkStat");
  function Na(e, t) {
    var r = e.mode, n = e.uid, i = e.gid, s = t.uid !== void 0 ? t.uid : process.getuid && process.getuid(), a = t.gid !== void 0 ? t.gid : process.
    getgid && process.getgid(), c = parseInt("100", 8), f = parseInt("010", 8), y = parseInt("001", 8), u = c | f, h = r & y || r & f && i ===
    a || r & c && n === s || r & u && s === 0;
    return h;
  }
  o(Na, "checkMode");
});

// ../node_modules/isexe/index.js
var on = d((Ed, nn) => {
  var xd = require("fs"), et;
  process.platform === "win32" || global.TESTING_WINDOWS ? et = Xr() : et = rn();
  nn.exports = $t;
  $t.sync = Ra;
  function $t(e, t, r) {
    if (typeof t == "function" && (r = t, t = {}), !r) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(n, i) {
        $t(e, t || {}, function(s, a) {
          s ? i(s) : n(a);
        });
      });
    }
    et(e, t || {}, function(n, i) {
      n && (n.code === "EACCES" || t && t.ignoreErrors) && (n = null, i = !1), r(n, i);
    });
  }
  o($t, "isexe");
  function Ra(e, t) {
    try {
      return et.sync(e, t || {});
    } catch (r) {
      if (t && t.ignoreErrors || r.code === "EACCES")
        return !1;
      throw r;
    }
  }
  o(Ra, "sync");
});

// ../node_modules/cross-spawn/node_modules/which/which.js
var dn = d((Pd, fn) => {
  var pe = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", sn = require("path"), qa = pe ?
  ";" : ":", an = on(), cn = /* @__PURE__ */ o((e) => Object.assign(new Error(`not found: ${e}`), { code: "ENOENT" }), "getNotFoundError"), un = /* @__PURE__ */ o(
  (e, t) => {
    let r = t.colon || qa, n = e.match(/\//) || pe && e.match(/\\/) ? [""] : [
      // windows always checks the cwd first
      ...pe ? [process.cwd()] : [],
      ...(t.path || process.env.PATH || /* istanbul ignore next: very unusual */
      "").split(r)
    ], i = pe ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", s = pe ? i.split(r) : [""];
    return pe && e.indexOf(".") !== -1 && s[0] !== "" && s.unshift(""), {
      pathEnv: n,
      pathExt: s,
      pathExtExe: i
    };
  }, "getPathInfo"), ln = /* @__PURE__ */ o((e, t, r) => {
    typeof t == "function" && (r = t, t = {}), t || (t = {});
    let { pathEnv: n, pathExt: i, pathExtExe: s } = un(e, t), a = [], c = /* @__PURE__ */ o((y) => new Promise((u, h) => {
      if (y === n.length)
        return t.all && a.length ? u(a) : h(cn(e));
      let m = n[y], l = /^".*"$/.test(m) ? m.slice(1, -1) : m, p = sn.join(l, e), g = !l && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
      u(f(g, y, 0));
    }), "step"), f = /* @__PURE__ */ o((y, u, h) => new Promise((m, l) => {
      if (h === i.length)
        return m(c(u + 1));
      let p = i[h];
      an(y + p, { pathExt: s }, (g, S) => {
        if (!g && S)
          if (t.all)
            a.push(y + p);
          else
            return m(y + p);
        return m(f(y, u, h + 1));
      });
    }), "subStep");
    return r ? c(0).then((y) => r(null, y), r) : c(0);
  }, "which"), _a = /* @__PURE__ */ o((e, t) => {
    t = t || {};
    let { pathEnv: r, pathExt: n, pathExtExe: i } = un(e, t), s = [];
    for (let a = 0; a < r.length; a++) {
      let c = r[a], f = /^".*"$/.test(c) ? c.slice(1, -1) : c, y = sn.join(f, e), u = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + y : y;
      for (let h = 0; h < n.length; h++) {
        let m = u + n[h];
        try {
          if (an.sync(m, { pathExt: i }))
            if (t.all)
              s.push(m);
            else
              return m;
        } catch {
        }
      }
    }
    if (t.all && s.length)
      return s;
    if (t.nothrow)
      return null;
    throw cn(e);
  }, "whichSync");
  fn.exports = ln;
  ln.sync = _a;
});

// ../node_modules/path-key/index.js
var Bt = d((Td, Gt) => {
  "use strict";
  var mn = /* @__PURE__ */ o((e = {}) => {
    let t = e.env || process.env;
    return (e.platform || process.platform) !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
  }, "pathKey");
  Gt.exports = mn;
  Gt.exports.default = mn;
});

// ../node_modules/cross-spawn/lib/util/resolveCommand.js
var gn = d((Cd, hn) => {
  "use strict";
  var pn = require("path"), Aa = dn(), Da = Bt();
  function yn(e, t) {
    let r = e.options.env || process.env, n = process.cwd(), i = e.options.cwd != null, s = i && process.chdir !== void 0 && !process.chdir.
    disabled;
    if (s)
      try {
        process.chdir(e.options.cwd);
      } catch {
      }
    let a;
    try {
      a = Aa.sync(e.command, {
        path: r[Da({ env: r })],
        pathExt: t ? pn.delimiter : void 0
      });
    } catch {
    } finally {
      s && process.chdir(n);
    }
    return a && (a = pn.resolve(i ? e.options.cwd : "", a)), a;
  }
  o(yn, "resolveCommandAttempt");
  function ja(e) {
    return yn(e) || yn(e, !0);
  }
  o(ja, "resolveCommand");
  hn.exports = ja;
});

// ../node_modules/cross-spawn/lib/util/escape.js
var wn = d((Nd, Wt) => {
  "use strict";
  var Ut = /([()\][%!^"`<>&|;, *?])/g;
  function Ma(e) {
    return e = e.replace(Ut, "^$1"), e;
  }
  o(Ma, "escapeCommand");
  function La(e, t) {
    return e = `${e}`, e = e.replace(/(\\*)"/g, '$1$1\\"'), e = e.replace(/(\\*)$/, "$1$1"), e = `"${e}"`, e = e.replace(Ut, "^$1"), t && (e =
    e.replace(Ut, "^$1")), e;
  }
  o(La, "escapeArgument");
  Wt.exports.command = Ma;
  Wt.exports.argument = La;
});

// ../node_modules/shebang-regex/index.js
var vn = d((qd, Sn) => {
  "use strict";
  Sn.exports = /^#!(.*)/;
});

// ../node_modules/shebang-command/index.js
var xn = d((_d, bn) => {
  "use strict";
  var $a = vn();
  bn.exports = (e = "") => {
    let t = e.match($a);
    if (!t)
      return null;
    let [r, n] = t[0].replace(/#! ?/, "").split(" "), i = r.split("/").pop();
    return i === "env" ? n : n ? `${i} ${n}` : i;
  };
});

// ../node_modules/cross-spawn/lib/util/readShebang.js
var kn = d((Ad, En) => {
  "use strict";
  var Jt = require("fs"), Ga = xn();
  function Ba(e) {
    let r = Buffer.alloc(150), n;
    try {
      n = Jt.openSync(e, "r"), Jt.readSync(n, r, 0, 150, 0), Jt.closeSync(n);
    } catch {
    }
    return Ga(r.toString());
  }
  o(Ba, "readShebang");
  En.exports = Ba;
});

// ../node_modules/cross-spawn/lib/parse.js
var In = d((jd, Tn) => {
  "use strict";
  var Ua = require("path"), Pn = gn(), On = wn(), Wa = kn(), Ja = process.platform === "win32", Va = /\.(?:com|exe)$/i, Ya = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function Ka(e) {
    e.file = Pn(e);
    let t = e.file && Wa(e.file);
    return t ? (e.args.unshift(e.file), e.command = t, Pn(e)) : e.file;
  }
  o(Ka, "detectShebang");
  function Ha(e) {
    if (!Ja)
      return e;
    let t = Ka(e), r = !Va.test(t);
    if (e.options.forceShell || r) {
      let n = Ya.test(t);
      e.command = Ua.normalize(e.command), e.command = On.command(e.command), e.args = e.args.map((s) => On.argument(s, n));
      let i = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${i}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  o(Ha, "parseNonShell");
  function za(e, t, r) {
    t && !Array.isArray(t) && (r = t, t = null), t = t ? t.slice(0) : [], r = Object.assign({}, r);
    let n = {
      command: e,
      args: t,
      options: r,
      file: void 0,
      original: {
        command: e,
        args: t
      }
    };
    return r.shell ? n : Ha(n);
  }
  o(za, "parse");
  Tn.exports = za;
});

// ../node_modules/cross-spawn/lib/enoent.js
var Nn = d((Ld, Fn) => {
  "use strict";
  var Vt = process.platform === "win32";
  function Yt(e, t) {
    return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${t} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  o(Yt, "notFoundError");
  function Xa(e, t) {
    if (!Vt)
      return;
    let r = e.emit;
    e.emit = function(n, i) {
      if (n === "exit") {
        let s = Cn(i, t, "spawn");
        if (s)
          return r.call(e, "error", s);
      }
      return r.apply(e, arguments);
    };
  }
  o(Xa, "hookChildProcess");
  function Cn(e, t) {
    return Vt && e === 1 && !t.file ? Yt(t.original, "spawn") : null;
  }
  o(Cn, "verifyENOENT");
  function Qa(e, t) {
    return Vt && e === 1 && !t.file ? Yt(t.original, "spawnSync") : null;
  }
  o(Qa, "verifyENOENTSync");
  Fn.exports = {
    hookChildProcess: Xa,
    verifyENOENT: Cn,
    verifyENOENTSync: Qa,
    notFoundError: Yt
  };
});

// ../node_modules/cross-spawn/index.js
var _n = d((Gd, ye) => {
  "use strict";
  var Rn = require("child_process"), Kt = In(), Ht = Nn();
  function qn(e, t, r) {
    let n = Kt(e, t, r), i = Rn.spawn(n.command, n.args, n.options);
    return Ht.hookChildProcess(i, n), i;
  }
  o(qn, "spawn");
  function Za(e, t, r) {
    let n = Kt(e, t, r), i = Rn.spawnSync(n.command, n.args, n.options);
    return i.error = i.error || Ht.verifyENOENTSync(i.status, n), i;
  }
  o(Za, "spawnSync");
  ye.exports = qn;
  ye.exports.spawn = qn;
  ye.exports.sync = Za;
  ye.exports._parse = Kt;
  ye.exports._enoent = Ht;
});

// ../node_modules/execa/node_modules/strip-final-newline/index.js
var Dn = d((Ud, An) => {
  "use strict";
  An.exports = (e) => {
    let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
    return e[e.length - 1] === t && (e = e.slice(0, e.length - 1)), e[e.length - 1] === r && (e = e.slice(0, e.length - 1)), e;
  };
});

// ../node_modules/npm-run-path/index.js
var Ln = d((Wd, _e) => {
  "use strict";
  var qe = require("path"), jn = Bt(), Mn = /* @__PURE__ */ o((e) => {
    e = {
      cwd: process.cwd(),
      path: process.env[jn()],
      execPath: process.execPath,
      ...e
    };
    let t, r = qe.resolve(e.cwd), n = [];
    for (; t !== r; )
      n.push(qe.join(r, "node_modules/.bin")), t = r, r = qe.resolve(r, "..");
    let i = qe.resolve(e.cwd, e.execPath, "..");
    return n.push(i), n.concat(e.path).join(qe.delimiter);
  }, "npmRunPath");
  _e.exports = Mn;
  _e.exports.default = Mn;
  _e.exports.env = (e) => {
    e = {
      env: process.env,
      ...e
    };
    let t = { ...e.env }, r = jn({ env: t });
    return e.path = t[r], t[r] = _e.exports(e), t;
  };
});

// ../node_modules/mimic-fn/index.js
var Gn = d((Vd, zt) => {
  "use strict";
  var $n = /* @__PURE__ */ o((e, t) => {
    for (let r of Reflect.ownKeys(t))
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    return e;
  }, "mimicFn");
  zt.exports = $n;
  zt.exports.default = $n;
});

// ../node_modules/onetime/index.js
var Un = d((Kd, rt) => {
  "use strict";
  var ec = Gn(), tt = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ o((e, t = {}) => {
    if (typeof e != "function")
      throw new TypeError("Expected a function");
    let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
      if (tt.set(s, ++n), n === 1)
        r = e.apply(this, a), e = null;
      else if (t.throw === !0)
        throw new Error(`Function \`${i}\` can only be called once`);
      return r;
    }, "onetime");
    return ec(s, e), tt.set(s, n), s;
  }, "onetime");
  rt.exports = Bn;
  rt.exports.default = Bn;
  rt.exports.callCount = (e) => {
    if (!tt.has(e))
      throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    return tt.get(e);
  };
});

// ../node_modules/execa/node_modules/human-signals/build/src/core.js
var Wn = d((nt) => {
  "use strict";
  Object.defineProperty(nt, "__esModule", { value: !0 });
  nt.SIGNALS = void 0;
  var tc = [
    {
      name: "SIGHUP",
      number: 1,
      action: "terminate",
      description: "Terminal closed",
      standard: "posix"
    },
    {
      name: "SIGINT",
      number: 2,
      action: "terminate",
      description: "User interruption with CTRL-C",
      standard: "ansi"
    },
    {
      name: "SIGQUIT",
      number: 3,
      action: "core",
      description: "User interruption with CTRL-\\",
      standard: "posix"
    },
    {
      name: "SIGILL",
      number: 4,
      action: "core",
      description: "Invalid machine instruction",
      standard: "ansi"
    },
    {
      name: "SIGTRAP",
      number: 5,
      action: "core",
      description: "Debugger breakpoint",
      standard: "posix"
    },
    {
      name: "SIGABRT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "ansi"
    },
    {
      name: "SIGIOT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "bsd"
    },
    {
      name: "SIGBUS",
      number: 7,
      action: "core",
      description: "Bus error due to misaligned, non-existing address or paging error",
      standard: "bsd"
    },
    {
      name: "SIGEMT",
      number: 7,
      action: "terminate",
      description: "Command should be emulated but is not implemented",
      standard: "other"
    },
    {
      name: "SIGFPE",
      number: 8,
      action: "core",
      description: "Floating point arithmetic error",
      standard: "ansi"
    },
    {
      name: "SIGKILL",
      number: 9,
      action: "terminate",
      description: "Forced termination",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGUSR1",
      number: 10,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGSEGV",
      number: 11,
      action: "core",
      description: "Segmentation fault",
      standard: "ansi"
    },
    {
      name: "SIGUSR2",
      number: 12,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGPIPE",
      number: 13,
      action: "terminate",
      description: "Broken pipe or socket",
      standard: "posix"
    },
    {
      name: "SIGALRM",
      number: 14,
      action: "terminate",
      description: "Timeout or timer",
      standard: "posix"
    },
    {
      name: "SIGTERM",
      number: 15,
      action: "terminate",
      description: "Termination",
      standard: "ansi"
    },
    {
      name: "SIGSTKFLT",
      number: 16,
      action: "terminate",
      description: "Stack is empty or overflowed",
      standard: "other"
    },
    {
      name: "SIGCHLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "posix"
    },
    {
      name: "SIGCLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "other"
    },
    {
      name: "SIGCONT",
      number: 18,
      action: "unpause",
      description: "Unpaused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGSTOP",
      number: 19,
      action: "pause",
      description: "Paused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGTSTP",
      number: 20,
      action: "pause",
      description: 'Paused using CTRL-Z or "suspend"',
      standard: "posix"
    },
    {
      name: "SIGTTIN",
      number: 21,
      action: "pause",
      description: "Background process cannot read terminal input",
      standard: "posix"
    },
    {
      name: "SIGBREAK",
      number: 21,
      action: "terminate",
      description: "User interruption with CTRL-BREAK",
      standard: "other"
    },
    {
      name: "SIGTTOU",
      number: 22,
      action: "pause",
      description: "Background process cannot write to terminal output",
      standard: "posix"
    },
    {
      name: "SIGURG",
      number: 23,
      action: "ignore",
      description: "Socket received out-of-band data",
      standard: "bsd"
    },
    {
      name: "SIGXCPU",
      number: 24,
      action: "core",
      description: "Process timed out",
      standard: "bsd"
    },
    {
      name: "SIGXFSZ",
      number: 25,
      action: "core",
      description: "File too big",
      standard: "bsd"
    },
    {
      name: "SIGVTALRM",
      number: 26,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGPROF",
      number: 27,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGWINCH",
      number: 28,
      action: "ignore",
      description: "Terminal window size changed",
      standard: "bsd"
    },
    {
      name: "SIGIO",
      number: 29,
      action: "terminate",
      description: "I/O is available",
      standard: "other"
    },
    {
      name: "SIGPOLL",
      number: 29,
      action: "terminate",
      description: "Watched event",
      standard: "other"
    },
    {
      name: "SIGINFO",
      number: 29,
      action: "ignore",
      description: "Request for process information",
      standard: "other"
    },
    {
      name: "SIGPWR",
      number: 30,
      action: "terminate",
      description: "Device running out of power",
      standard: "systemv"
    },
    {
      name: "SIGSYS",
      number: 31,
      action: "core",
      description: "Invalid system call",
      standard: "other"
    },
    {
      name: "SIGUNUSED",
      number: 31,
      action: "terminate",
      description: "Invalid system call",
      standard: "other"
    }
  ];
  nt.SIGNALS = tc;
});

// ../node_modules/execa/node_modules/human-signals/build/src/realtime.js
var Xt = d((he) => {
  "use strict";
  Object.defineProperty(he, "__esModule", { value: !0 });
  he.SIGRTMAX = he.getRealtimeSignals = void 0;
  var rc = /* @__PURE__ */ o(function() {
    let e = Vn - Jn + 1;
    return Array.from({ length: e }, nc);
  }, "getRealtimeSignals");
  he.getRealtimeSignals = rc;
  var nc = /* @__PURE__ */ o(function(e, t) {
    return {
      name: `SIGRT${t + 1}`,
      number: Jn + t,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    };
  }, "getRealtimeSignal"), Jn = 34, Vn = 64;
  he.SIGRTMAX = Vn;
});

// ../node_modules/execa/node_modules/human-signals/build/src/signals.js
var Yn = d((ot) => {
  "use strict";
  Object.defineProperty(ot, "__esModule", { value: !0 });
  ot.getSignals = void 0;
  var oc = require("os"), ic = Wn(), sc = Xt(), ac = /* @__PURE__ */ o(function() {
    let e = (0, sc.getRealtimeSignals)();
    return [...ic.SIGNALS, ...e].map(cc);
  }, "getSignals");
  ot.getSignals = ac;
  var cc = /* @__PURE__ */ o(function({
    name: e,
    number: t,
    description: r,
    action: n,
    forced: i = !1,
    standard: s
  }) {
    let {
      signals: { [e]: a }
    } = oc.constants, c = a !== void 0;
    return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
  }, "normalizeSignal");
});

// ../node_modules/execa/node_modules/human-signals/build/src/main.js
var Hn = d((ge) => {
  "use strict";
  Object.defineProperty(ge, "__esModule", { value: !0 });
  ge.signalsByNumber = ge.signalsByName = void 0;
  var uc = require("os"), Kn = Yn(), lc = Xt(), fc = /* @__PURE__ */ o(function() {
    return (0, Kn.getSignals)().reduce(dc, {});
  }, "getSignalsByName"), dc = /* @__PURE__ */ o(function(e, { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }) {
    return {
      ...e,
      [t]: { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }
    };
  }, "getSignalByName"), mc = fc();
  ge.signalsByName = mc;
  var pc = /* @__PURE__ */ o(function() {
    let e = (0, Kn.getSignals)(), t = lc.SIGRTMAX + 1, r = Array.from({ length: t }, (n, i) => yc(i, e));
    return Object.assign({}, ...r);
  }, "getSignalsByNumber"), yc = /* @__PURE__ */ o(function(e, t) {
    let r = hc(e, t);
    if (r === void 0)
      return {};
    let { name: n, description: i, supported: s, action: a, forced: c, standard: f } = r;
    return {
      [e]: {
        name: n,
        number: e,
        description: i,
        supported: s,
        action: a,
        forced: c,
        standard: f
      }
    };
  }, "getSignalByNumber"), hc = /* @__PURE__ */ o(function(e, t) {
    let r = t.find(({ name: n }) => uc.constants.signals[n] === e);
    return r !== void 0 ? r : t.find((n) => n.number === e);
  }, "findSignalByNumber"), gc = pc();
  ge.signalsByNumber = gc;
});

// ../node_modules/execa/lib/error.js
var Xn = d((nm, zn) => {
  "use strict";
  var { signalsByName: wc } = Hn(), Sc = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s,
  isCanceled: a }) => e ? `timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was\
 killed with ${n} (${i})` : s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), vc = /* @__PURE__ */ o(({
    stdout: e,
    stderr: t,
    all: r,
    error: n,
    signal: i,
    exitCode: s,
    command: a,
    escapedCommand: c,
    timedOut: f,
    isCanceled: y,
    killed: u,
    parsed: { options: { timeout: h } }
  }) => {
    s = s === null ? void 0 : s, i = i === null ? void 0 : i;
    let m = i === void 0 ? void 0 : wc[i].description, l = n && n.code, g = `Command ${Sc({ timedOut: f, timeout: h, errorCode: l, signal: i,
    signalDescription: m, exitCode: s, isCanceled: y })}: ${a}`, S = Object.prototype.toString.call(n) === "[object Error]", b = S ? `${g}
${n.message}` : g, q = [b, t, e].filter(Boolean).join(`
`);
    return S ? (n.originalMessage = n.message, n.message = q) : n = new Error(q), n.shortMessage = b, n.command = a, n.escapedCommand = c, n.
    exitCode = s, n.signal = i, n.signalDescription = m, n.stdout = e, n.stderr = t, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
    bufferedData, n.failed = !0, n.timedOut = !!f, n.isCanceled = y, n.killed = u && !f, n;
  }, "makeError");
  zn.exports = vc;
});

// ../node_modules/execa/lib/stdio.js
var Zn = d((im, Qt) => {
  "use strict";
  var it = ["stdin", "stdout", "stderr"], bc = /* @__PURE__ */ o((e) => it.some((t) => e[t] !== void 0), "hasAlias"), Qn = /* @__PURE__ */ o(
  (e) => {
    if (!e)
      return;
    let { stdio: t } = e;
    if (t === void 0)
      return it.map((n) => e[n]);
    if (bc(e))
      throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${it.map((n) => `\`${n}\``).join(", ")}`);
    if (typeof t == "string")
      return t;
    if (!Array.isArray(t))
      throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
    let r = Math.max(t.length, it.length);
    return Array.from({ length: r }, (n, i) => t[i]);
  }, "normalizeStdio");
  Qt.exports = Qn;
  Qt.exports.node = (e) => {
    let t = Qn(e);
    return t === "ipc" ? "ipc" : t === void 0 || typeof t == "string" ? [t, t, t, "ipc"] : t.includes("ipc") ? t : [...t, "ipc"];
  };
});

// ../node_modules/signal-exit/signals.js
var eo = d((am, st) => {
  st.exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
  ];
  process.platform !== "win32" && st.exports.push(
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
  process.platform === "linux" && st.exports.push(
    "SIGIO",
    "SIGPOLL",
    "SIGPWR",
    "SIGSTKFLT",
    "SIGUNUSED"
  );
});

// ../node_modules/signal-exit/index.js
var io = d((cm, ve) => {
  var T = global.process, ce = /* @__PURE__ */ o(function(e) {
    return e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.reallyExit == "func\
tion" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "function";
  }, "processOk");
  ce(T) ? (to = require("assert"), we = eo(), ro = /^win/i.test(T.platform), Ae = require("events"), typeof Ae != "function" && (Ae = Ae.EventEmitter),
  T.__signal_exit_emitter__ ? A = T.__signal_exit_emitter__ : (A = T.__signal_exit_emitter__ = new Ae(), A.count = 0, A.emitted = {}), A.infinite ||
  (A.setMaxListeners(1 / 0), A.infinite = !0), ve.exports = function(e, t) {
    if (!ce(global.process))
      return function() {
      };
    to.equal(typeof e, "function", "a callback must be provided for exit handler"), Se === !1 && Zt();
    var r = "exit";
    t && t.alwaysLast && (r = "afterexit");
    var n = /* @__PURE__ */ o(function() {
      A.removeListener(r, e), A.listeners("exit").length === 0 && A.listeners("afterexit").length === 0 && at();
    }, "remove");
    return A.on(r, e), n;
  }, at = /* @__PURE__ */ o(function() {
    !Se || !ce(global.process) || (Se = !1, we.forEach(function(t) {
      try {
        T.removeListener(t, ct[t]);
      } catch {
      }
    }), T.emit = ut, T.reallyExit = er, A.count -= 1);
  }, "unload"), ve.exports.unload = at, ue = /* @__PURE__ */ o(function(t, r, n) {
    A.emitted[t] || (A.emitted[t] = !0, A.emit(t, r, n));
  }, "emit"), ct = {}, we.forEach(function(e) {
    ct[e] = /* @__PURE__ */ o(function() {
      if (ce(global.process)) {
        var r = T.listeners(e);
        r.length === A.count && (at(), ue("exit", null, e), ue("afterexit", null, e), ro && e === "SIGHUP" && (e = "SIGINT"), T.kill(T.pid, e));
      }
    }, "listener");
  }), ve.exports.signals = function() {
    return we;
  }, Se = !1, Zt = /* @__PURE__ */ o(function() {
    Se || !ce(global.process) || (Se = !0, A.count += 1, we = we.filter(function(t) {
      try {
        return T.on(t, ct[t]), !0;
      } catch {
        return !1;
      }
    }), T.emit = oo, T.reallyExit = no);
  }, "load"), ve.exports.load = Zt, er = T.reallyExit, no = /* @__PURE__ */ o(function(t) {
    ce(global.process) && (T.exitCode = t || /* istanbul ignore next */
    0, ue("exit", T.exitCode, null), ue("afterexit", T.exitCode, null), er.call(T, T.exitCode));
  }, "processReallyExit"), ut = T.emit, oo = /* @__PURE__ */ o(function(t, r) {
    if (t === "exit" && ce(global.process)) {
      r !== void 0 && (T.exitCode = r);
      var n = ut.apply(this, arguments);
      return ue("exit", T.exitCode, null), ue("afterexit", T.exitCode, null), n;
    } else
      return ut.apply(this, arguments);
  }, "processEmit")) : ve.exports = function() {
    return function() {
    };
  };
  var to, we, ro, Ae, A, at, ue, ct, Se, Zt, er, no, ut, oo;
});

// ../node_modules/execa/lib/kill.js
var ao = d((lm, so) => {
  "use strict";
  var xc = require("os"), Ec = io(), kc = 1e3 * 5, Pc = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
    let n = e(t);
    return Oc(e, t, r, n), n;
  }, "spawnedKill"), Oc = /* @__PURE__ */ o((e, t, r, n) => {
    if (!Tc(t, r, n))
      return;
    let i = Cc(r), s = setTimeout(() => {
      e("SIGKILL");
    }, i);
    s.unref && s.unref();
  }, "setKillTimeout"), Tc = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => Ic(e) && t !== !1 && r, "shouldForceKill"), Ic = /* @__PURE__ */ o(
  (e) => e === xc.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), Cc = /* @__PURE__ */ o(({
  forceKillAfterTimeout: e = !0 }) => {
    if (e === !0)
      return kc;
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e;
  }, "getForceKillAfterTimeout"), Fc = /* @__PURE__ */ o((e, t) => {
    e.kill() && (t.isCanceled = !0);
  }, "spawnedCancel"), Nc = /* @__PURE__ */ o((e, t, r) => {
    e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
  }, "timeoutKill"), Rc = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
    if (t === 0 || t === void 0)
      return n;
    let i, s = new Promise((c, f) => {
      i = setTimeout(() => {
        Nc(e, r, f);
      }, t);
    }), a = n.finally(() => {
      clearTimeout(i);
    });
    return Promise.race([s, a]);
  }, "setupTimeout"), qc = /* @__PURE__ */ o(({ timeout: e }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0))
      throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  }, "validateTimeout"), _c = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
    if (!t || r)
      return n;
    let i = Ec(() => {
      e.kill();
    });
    return n.finally(() => {
      i();
    });
  }, "setExitHandler");
  so.exports = {
    spawnedKill: Pc,
    spawnedCancel: Fc,
    setupTimeout: Rc,
    validateTimeout: qc,
    setExitHandler: _c
  };
});

// ../node_modules/execa/node_modules/is-stream/index.js
var uo = d((dm, co) => {
  "use strict";
  var Q = /* @__PURE__ */ o((e) => e !== null && typeof e == "object" && typeof e.pipe == "function", "isStream");
  Q.writable = (e) => Q(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
  Q.readable = (e) => Q(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object";
  Q.duplex = (e) => Q.writable(e) && Q.readable(e);
  Q.transform = (e) => Q.duplex(e) && typeof e._transform == "function";
  co.exports = Q;
});

// ../node_modules/get-stream/buffer-stream.js
var fo = d((pm, lo) => {
  "use strict";
  var { PassThrough: Ac } = require("stream");
  lo.exports = (e) => {
    e = { ...e };
    let { array: t } = e, { encoding: r } = e, n = r === "buffer", i = !1;
    t ? i = !(r || n) : r = r || "utf8", n && (r = null);
    let s = new Ac({ objectMode: i });
    r && s.setEncoding(r);
    let a = 0, c = [];
    return s.on("data", (f) => {
      c.push(f), i ? a = c.length : a += f.length;
    }), s.getBufferedValue = () => t ? c : n ? Buffer.concat(c, a) : c.join(""), s.getBufferedLength = () => a, s;
  };
});

// ../node_modules/get-stream/index.js
var mo = d((ym, De) => {
  "use strict";
  var { constants: Dc } = require("buffer"), jc = require("stream"), { promisify: Mc } = require("util"), Lc = fo(), $c = Mc(jc.pipeline), lt = class extends Error {
    static {
      o(this, "MaxBufferError");
    }
    constructor() {
      super("maxBuffer exceeded"), this.name = "MaxBufferError";
    }
  };
  async function tr(e, t) {
    if (!e)
      throw new Error("Expected a stream");
    t = {
      maxBuffer: 1 / 0,
      ...t
    };
    let { maxBuffer: r } = t, n = Lc(t);
    return await new Promise((i, s) => {
      let a = /* @__PURE__ */ o((c) => {
        c && n.getBufferedLength() <= Dc.MAX_LENGTH && (c.bufferedData = n.getBufferedValue()), s(c);
      }, "rejectPromise");
      (async () => {
        try {
          await $c(e, n), i();
        } catch (c) {
          a(c);
        }
      })(), n.on("data", () => {
        n.getBufferedLength() > r && a(new lt());
      });
    }), n.getBufferedValue();
  }
  o(tr, "getStream");
  De.exports = tr;
  De.exports.buffer = (e, t) => tr(e, { ...t, encoding: "buffer" });
  De.exports.array = (e, t) => tr(e, { ...t, array: !0 });
  De.exports.MaxBufferError = lt;
});

// ../node_modules/merge-stream/index.js
var yo = d((gm, po) => {
  "use strict";
  var { PassThrough: Gc } = require("stream");
  po.exports = function() {
    var e = [], t = new Gc({ objectMode: !0 });
    return t.setMaxListeners(0), t.add = r, t.isEmpty = n, t.on("unpipe", i), Array.prototype.slice.call(arguments).forEach(r), t;
    function r(s) {
      return Array.isArray(s) ? (s.forEach(r), this) : (e.push(s), s.once("end", i.bind(null, s)), s.once("error", t.emit.bind(t, "error")),
      s.pipe(t, { end: !1 }), this);
    }
    o(r, "add");
    function n() {
      return e.length == 0;
    }
    o(n, "isEmpty");
    function i(s) {
      e = e.filter(function(a) {
        return a !== s;
      }), !e.length && t.readable && t.end();
    }
    o(i, "remove");
  };
});

// ../node_modules/execa/lib/stream.js
var So = d((Sm, wo) => {
  "use strict";
  var go = uo(), ho = mo(), Bc = yo(), Uc = /* @__PURE__ */ o((e, t) => {
    t === void 0 || e.stdin === void 0 || (go(t) ? t.pipe(e.stdin) : e.stdin.end(t));
  }, "handleInput"), Wc = /* @__PURE__ */ o((e, { all: t }) => {
    if (!t || !e.stdout && !e.stderr)
      return;
    let r = Bc();
    return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
  }, "makeAllStream"), rr = /* @__PURE__ */ o(async (e, t) => {
    if (e) {
      e.destroy();
      try {
        return await t;
      } catch (r) {
        return r.bufferedData;
      }
    }
  }, "getBufferedData"), nr = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
    if (!(!e || !r))
      return t ? ho(e, { encoding: t, maxBuffer: n }) : ho.buffer(e, { maxBuffer: n });
  }, "getStreamPromise"), Jc = /* @__PURE__ */ o(async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
    let c = nr(e, { encoding: n, buffer: i, maxBuffer: s }), f = nr(t, { encoding: n, buffer: i, maxBuffer: s }), y = nr(r, { encoding: n, buffer: i,
    maxBuffer: s * 2 });
    try {
      return await Promise.all([a, c, f, y]);
    } catch (u) {
      return Promise.all([
        { error: u, signal: u.signal, timedOut: u.timedOut },
        rr(e, c),
        rr(t, f),
        rr(r, y)
      ]);
    }
  }, "getSpawnedResult"), Vc = /* @__PURE__ */ o(({ input: e }) => {
    if (go(e))
      throw new TypeError("The `input` option cannot be a stream in sync mode");
  }, "validateInputSync");
  wo.exports = {
    handleInput: Uc,
    makeAllStream: Wc,
    getSpawnedResult: Jc,
    validateInputSync: Vc
  };
});

// ../node_modules/execa/lib/promise.js
var bo = d((bm, vo) => {
  "use strict";
  var Yc = (async () => {
  })().constructor.prototype, Kc = ["then", "catch", "finally"].map((e) => [
    e,
    Reflect.getOwnPropertyDescriptor(Yc, e)
  ]), Hc = /* @__PURE__ */ o((e, t) => {
    for (let [r, n] of Kc) {
      let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
      Reflect.defineProperty(e, r, { ...n, value: i });
    }
    return e;
  }, "mergePromise"), zc = /* @__PURE__ */ o((e) => new Promise((t, r) => {
    e.on("exit", (n, i) => {
      t({ exitCode: n, signal: i });
    }), e.on("error", (n) => {
      r(n);
    }), e.stdin && e.stdin.on("error", (n) => {
      r(n);
    });
  }), "getSpawnedPromise");
  vo.exports = {
    mergePromise: Hc,
    getSpawnedPromise: zc
  };
});

// ../node_modules/execa/lib/command.js
var ko = d((Em, Eo) => {
  "use strict";
  var xo = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), Xc = /^[\w.-]+$/, Qc = /"/g, Zc = /* @__PURE__ */ o(
  (e) => typeof e != "string" || Xc.test(e) ? e : `"${e.replace(Qc, '\\"')}"`, "escapeArg"), eu = /* @__PURE__ */ o((e, t) => xo(e, t).join(
  " "), "joinCommand"), tu = /* @__PURE__ */ o((e, t) => xo(e, t).map((r) => Zc(r)).join(" "), "getEscapedCommand"), ru = / +/g, nu = /* @__PURE__ */ o(
  (e) => {
    let t = [];
    for (let r of e.trim().split(ru)) {
      let n = t[t.length - 1];
      n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
    }
    return t;
  }, "parseCommand");
  Eo.exports = {
    joinCommand: eu,
    getEscapedCommand: tu,
    parseCommand: nu
  };
});

// ../node_modules/execa/index.js
var No = d((Pm, be) => {
  "use strict";
  var ou = require("path"), or = require("child_process"), iu = _n(), su = Dn(), au = Ln(), cu = Un(), ft = Xn(), Oo = Zn(), { spawnedKill: uu,
  spawnedCancel: lu, setupTimeout: fu, validateTimeout: du, setExitHandler: mu } = ao(), { handleInput: pu, getSpawnedResult: yu, makeAllStream: hu,
  validateInputSync: gu } = So(), { mergePromise: Po, getSpawnedPromise: wu } = bo(), { joinCommand: To, parseCommand: Io, getEscapedCommand: Co } = ko(),
  Su = 1e3 * 1e3 * 100, vu = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
    let s = t ? { ...process.env, ...e } : e;
    return r ? au.env({ env: s, cwd: n, execPath: i }) : s;
  }, "getEnv"), Fo = /* @__PURE__ */ o((e, t, r = {}) => {
    let n = iu._parse(e, t, r);
    return e = n.command, t = n.args, r = n.options, r = {
      maxBuffer: Su,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: r.cwd || process.cwd(),
      execPath: process.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      ...r
    }, r.env = vu(r), r.stdio = Oo(r), process.platform === "win32" && ou.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e, args: t,
    options: r, parsed: n };
  }, "handleArguments"), je = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !Buffer.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
  su(t) : t, "handleOutput"), dt = /* @__PURE__ */ o((e, t, r) => {
    let n = Fo(e, t, r), i = To(e, t), s = Co(e, t);
    du(n.options);
    let a;
    try {
      a = or.spawn(n.file, n.args, n.options);
    } catch (l) {
      let p = new or.ChildProcess(), g = Promise.reject(ft({
        error: l,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
      return Po(p, g);
    }
    let c = wu(a), f = fu(a, n.options, c), y = mu(a, n.options, f), u = { isCanceled: !1 };
    a.kill = uu.bind(null, a.kill.bind(a)), a.cancel = lu.bind(null, a, u);
    let m = cu(/* @__PURE__ */ o(async () => {
      let [{ error: l, exitCode: p, signal: g, timedOut: S }, b, q, w] = await yu(a, n.options, y), P = je(n.options, b), X = je(n.options, q),
      Ne = je(n.options, w);
      if (l || p !== 0 || g !== null) {
        let Xe = ft({
          error: l,
          exitCode: p,
          signal: g,
          stdout: P,
          stderr: X,
          all: Ne,
          command: i,
          escapedCommand: s,
          parsed: n,
          timedOut: S,
          isCanceled: u.isCanceled,
          killed: a.killed
        });
        if (!n.options.reject)
          return Xe;
        throw Xe;
      }
      return {
        command: i,
        escapedCommand: s,
        exitCode: 0,
        stdout: P,
        stderr: X,
        all: Ne,
        failed: !1,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      };
    }, "handlePromise"));
    return pu(a, n.options.input), a.all = hu(a, n.options), Po(a, m);
  }, "execa");
  be.exports = dt;
  be.exports.sync = (e, t, r) => {
    let n = Fo(e, t, r), i = To(e, t), s = Co(e, t);
    gu(n.options);
    let a;
    try {
      a = or.spawnSync(n.file, n.args, n.options);
    } catch (y) {
      throw ft({
        error: y,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      });
    }
    let c = je(n.options, a.stdout, a.error), f = je(n.options, a.stderr, a.error);
    if (a.error || a.status !== 0 || a.signal !== null) {
      let y = ft({
        stdout: c,
        stderr: f,
        error: a.error,
        signal: a.signal,
        exitCode: a.status,
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: a.error && a.error.code === "ETIMEDOUT",
        isCanceled: !1,
        killed: a.signal !== null
      });
      if (!n.options.reject)
        return y;
      throw y;
    }
    return {
      command: i,
      escapedCommand: s,
      exitCode: 0,
      stdout: c,
      stderr: f,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  };
  be.exports.command = (e, t) => {
    let [r, ...n] = Io(e);
    return dt(r, n, t);
  };
  be.exports.commandSync = (e, t) => {
    let [r, ...n] = Io(e);
    return dt.sync(r, n, t);
  };
  be.exports.node = (e, t, r = {}) => {
    t && !Array.isArray(t) && typeof t == "object" && (r = t, t = []);
    let n = Oo.node(r), i = process.execArgv.filter((c) => !c.startsWith("--inspect")), {
      nodePath: s = process.execPath,
      nodeOptions: a = i
    } = r;
    return dt(
      s,
      [
        ...a,
        e,
        ...Array.isArray(t) ? t : []
      ],
      {
        ...r,
        stdin: void 0,
        stdout: void 0,
        stderr: void 0,
        stdio: n,
        shell: !1
      }
    );
  };
});

// ../node_modules/detect-package-manager/dist/index.js
var Ao = d((_o) => {
  var bu = Object.create, yt = Object.defineProperty, xu = Object.getOwnPropertyDescriptor, Eu = Object.getOwnPropertyNames, ku = Object.getPrototypeOf,
  Pu = Object.prototype.hasOwnProperty, Ro = /* @__PURE__ */ o((e) => yt(e, "__esModule", { value: !0 }), "__markAsModule"), Ou = /* @__PURE__ */ o(
  (e, t) => {
    Ro(e);
    for (var r in t)
      yt(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), Tu = /* @__PURE__ */ o((e, t, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let n of Eu(t))
        !Pu.call(e, n) && n !== "default" && yt(e, n, { get: /* @__PURE__ */ o(() => t[n], "get"), enumerable: !(r = xu(t, n)) || r.enumerable });
    return e;
  }, "__reExport"), sr = /* @__PURE__ */ o((e) => Tu(Ro(yt(e != null ? bu(ku(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: /* @__PURE__ */ o(
  () => e.default, "get"), enumerable: !0 } : { value: e, enumerable: !0 })), e), "__toModule");
  Ou(_o, {
    clearCache: /* @__PURE__ */ o(() => Ru, "clearCache"),
    detect: /* @__PURE__ */ o(() => Fu, "detect"),
    getNpmVersion: /* @__PURE__ */ o(() => Nu, "getNpmVersion")
  });
  var Iu = sr(require("fs")), mt = sr(require("path")), qo = sr(No());
  async function pt(e) {
    try {
      return await Iu.promises.access(e), !0;
    } catch {
      return !1;
    }
  }
  o(pt, "pathExists");
  var le = /* @__PURE__ */ new Map();
  function ir(e) {
    let t = `has_global_${e}`;
    return le.has(t) ? Promise.resolve(le.get(t)) : (0, qo.default)(e, ["--version"]).then((r) => /^\d+.\d+.\d+$/.test(r.stdout)).then((r) => (le.
    set(t, r), r)).catch(() => !1);
  }
  o(ir, "hasGlobalInstallation");
  function Cu(e = ".") {
    let t = `lockfile_${e}`;
    return le.has(t) ? Promise.resolve(le.get(t)) : Promise.all([
      pt((0, mt.resolve)(e, "yarn.lock")),
      pt((0, mt.resolve)(e, "package-lock.json")),
      pt((0, mt.resolve)(e, "pnpm-lock.yaml")),
      pt((0, mt.resolve)(e, "bun.lockb"))
    ]).then(([r, n, i, s]) => {
      let a = null;
      return r ? a = "yarn" : i ? a = "pnpm" : s ? a = "bun" : n && (a = "npm"), le.set(t, a), a;
    });
  }
  o(Cu, "getTypeofLockFile");
  var Fu = /* @__PURE__ */ o(async ({
    cwd: e,
    includeGlobalBun: t
  } = {}) => {
    let r = await Cu(e);
    if (r)
      return r;
    let [n, i, s] = await Promise.all([
      ir("yarn"),
      ir("pnpm"),
      t && ir("bun")
    ]);
    return n ? "yarn" : i ? "pnpm" : s ? "bun" : "npm";
  }, "detect");
  function Nu(e) {
    return (0, qo.default)(e || "npm", ["--version"]).then((t) => t.stdout);
  }
  o(Nu, "getNpmVersion");
  function Ru() {
    return le.clear();
  }
  o(Ru, "clearCache");
});

// ../node_modules/universalify/index.js
var D = d((ar) => {
  "use strict";
  ar.fromCallback = function(e) {
    return Object.defineProperty(function(...t) {
      if (typeof t[t.length - 1] == "function") e.apply(this, t);
      else
        return new Promise((r, n) => {
          e.call(
            this,
            ...t,
            (i, s) => i != null ? n(i) : r(s)
          );
        });
    }, "name", { value: e.name });
  };
  ar.fromPromise = function(e) {
    return Object.defineProperty(function(...t) {
      let r = t[t.length - 1];
      if (typeof r != "function") return e.apply(this, t);
      e.apply(this, t.slice(0, -1)).then((n) => r(null, n), r);
    }, "name", { value: e.name });
  };
});

// ../node_modules/graceful-fs/polyfills.js
var jo = d((Fm, Do) => {
  var re = require("constants"), qu = process.cwd, ht = null, _u = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    return ht || (ht = qu.call(process)), ht;
  };
  try {
    process.cwd();
  } catch {
  }
  typeof process.chdir == "function" && (cr = process.chdir, process.chdir = function(e) {
    ht = null, cr.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, cr));
  var cr;
  Do.exports = Au;
  function Au(e) {
    re.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || r(e), e.chown = s(e.chown), e.fchown =
    s(e.fchown), e.lchown = s(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = a(e.chownSync),
    e.fchownSync = a(e.fchownSync), e.lchownSync = a(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync =
    i(e.lchmodSync), e.stat = c(e.stat), e.fstat = c(e.fstat), e.lstat = c(e.lstat), e.statSync = f(e.statSync), e.fstatSync = f(e.fstatSync),
    e.lstatSync = f(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(u, h, m) {
      m && process.nextTick(m);
    }, e.lchmodSync = function() {
    }), e.chown && !e.lchown && (e.lchown = function(u, h, m, l) {
      l && process.nextTick(l);
    }, e.lchownSync = function() {
    }), _u === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(u) {
      function h(m, l, p) {
        var g = Date.now(), S = 0;
        u(m, l, /* @__PURE__ */ o(function b(q) {
          if (q && (q.code === "EACCES" || q.code === "EPERM" || q.code === "EBUSY") && Date.now() - g < 6e4) {
            setTimeout(function() {
              e.stat(l, function(w, P) {
                w && w.code === "ENOENT" ? u(m, l, b) : p(q);
              });
            }, S), S < 100 && (S += 10);
            return;
          }
          p && p(q);
        }, "CB"));
      }
      return o(h, "rename"), Object.setPrototypeOf && Object.setPrototypeOf(h, u), h;
    }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(u) {
      function h(m, l, p, g, S, b) {
        var q;
        if (b && typeof b == "function") {
          var w = 0;
          q = /* @__PURE__ */ o(function(P, X, Ne) {
            if (P && P.code === "EAGAIN" && w < 10)
              return w++, u.call(e, m, l, p, g, S, q);
            b.apply(this, arguments);
          }, "callback");
        }
        return u.call(e, m, l, p, g, S, q);
      }
      return o(h, "read"), Object.setPrototypeOf && Object.setPrototypeOf(h, u), h;
    }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(u) {
      return function(h, m, l, p, g) {
        for (var S = 0; ; )
          try {
            return u.call(e, h, m, l, p, g);
          } catch (b) {
            if (b.code === "EAGAIN" && S < 10) {
              S++;
              continue;
            }
            throw b;
          }
      };
    }(e.readSync);
    function t(u) {
      u.lchmod = function(h, m, l) {
        u.open(
          h,
          re.O_WRONLY | re.O_SYMLINK,
          m,
          function(p, g) {
            if (p) {
              l && l(p);
              return;
            }
            u.fchmod(g, m, function(S) {
              u.close(g, function(b) {
                l && l(S || b);
              });
            });
          }
        );
      }, u.lchmodSync = function(h, m) {
        var l = u.openSync(h, re.O_WRONLY | re.O_SYMLINK, m), p = !0, g;
        try {
          g = u.fchmodSync(l, m), p = !1;
        } finally {
          if (p)
            try {
              u.closeSync(l);
            } catch {
            }
          else
            u.closeSync(l);
        }
        return g;
      };
    }
    o(t, "patchLchmod");
    function r(u) {
      re.hasOwnProperty("O_SYMLINK") && u.futimes ? (u.lutimes = function(h, m, l, p) {
        u.open(h, re.O_SYMLINK, function(g, S) {
          if (g) {
            p && p(g);
            return;
          }
          u.futimes(S, m, l, function(b) {
            u.close(S, function(q) {
              p && p(b || q);
            });
          });
        });
      }, u.lutimesSync = function(h, m, l) {
        var p = u.openSync(h, re.O_SYMLINK), g, S = !0;
        try {
          g = u.futimesSync(p, m, l), S = !1;
        } finally {
          if (S)
            try {
              u.closeSync(p);
            } catch {
            }
          else
            u.closeSync(p);
        }
        return g;
      }) : u.futimes && (u.lutimes = function(h, m, l, p) {
        p && process.nextTick(p);
      }, u.lutimesSync = function() {
      });
    }
    o(r, "patchLutimes");
    function n(u) {
      return u && function(h, m, l) {
        return u.call(e, h, m, function(p) {
          y(p) && (p = null), l && l.apply(this, arguments);
        });
      };
    }
    o(n, "chmodFix");
    function i(u) {
      return u && function(h, m) {
        try {
          return u.call(e, h, m);
        } catch (l) {
          if (!y(l)) throw l;
        }
      };
    }
    o(i, "chmodFixSync");
    function s(u) {
      return u && function(h, m, l, p) {
        return u.call(e, h, m, l, function(g) {
          y(g) && (g = null), p && p.apply(this, arguments);
        });
      };
    }
    o(s, "chownFix");
    function a(u) {
      return u && function(h, m, l) {
        try {
          return u.call(e, h, m, l);
        } catch (p) {
          if (!y(p)) throw p;
        }
      };
    }
    o(a, "chownFixSync");
    function c(u) {
      return u && function(h, m, l) {
        typeof m == "function" && (l = m, m = null);
        function p(g, S) {
          S && (S.uid < 0 && (S.uid += 4294967296), S.gid < 0 && (S.gid += 4294967296)), l && l.apply(this, arguments);
        }
        return o(p, "callback"), m ? u.call(e, h, m, p) : u.call(e, h, p);
      };
    }
    o(c, "statFix");
    function f(u) {
      return u && function(h, m) {
        var l = m ? u.call(e, h, m) : u.call(e, h);
        return l && (l.uid < 0 && (l.uid += 4294967296), l.gid < 0 && (l.gid += 4294967296)), l;
      };
    }
    o(f, "statFixSync");
    function y(u) {
      if (!u || u.code === "ENOSYS")
        return !0;
      var h = !process.getuid || process.getuid() !== 0;
      return !!(h && (u.code === "EINVAL" || u.code === "EPERM"));
    }
    o(y, "chownErOk");
  }
  o(Au, "patch");
});

// ../node_modules/graceful-fs/legacy-streams.js
var $o = d((Rm, Lo) => {
  var Mo = require("stream").Stream;
  Lo.exports = Du;
  function Du(e) {
    return {
      ReadStream: t,
      WriteStream: r
    };
    function t(n, i) {
      if (!(this instanceof t)) return new t(n, i);
      Mo.call(this);
      var s = this;
      this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i =
      i || {};
      for (var a = Object.keys(i), c = 0, f = a.length; c < f; c++) {
        var y = a[c];
        this[y] = i[y];
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
          s._read();
        });
        return;
      }
      e.open(this.path, this.flags, this.mode, function(u, h) {
        if (u) {
          s.emit("error", u), s.readable = !1;
          return;
        }
        s.fd = h, s.emit("open", h), s._read();
      });
    }
    function r(n, i) {
      if (!(this instanceof r)) return new r(n, i);
      Mo.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten =
      0, i = i || {};
      for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
        var f = s[a];
        this[f] = i[f];
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
  o(Du, "legacy");
});

// ../node_modules/graceful-fs/clone.js
var Bo = d((_m, Go) => {
  "use strict";
  Go.exports = Mu;
  var ju = Object.getPrototypeOf || function(e) {
    return e.__proto__;
  };
  function Mu(e) {
    if (e === null || typeof e != "object")
      return e;
    if (e instanceof Object)
      var t = { __proto__: ju(e) };
    else
      var t = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    }), t;
  }
  o(Mu, "clone");
});

// ../node_modules/graceful-fs/graceful-fs.js
var Ee = d((Dm, fr) => {
  var F = require("fs"), Lu = jo(), $u = $o(), Gu = Bo(), gt = require("util"), G, St;
  typeof Symbol == "function" && typeof Symbol.for == "function" ? (G = Symbol.for("graceful-fs.queue"), St = Symbol.for("graceful-fs.previo\
us")) : (G = "___graceful-fs.queue", St = "___graceful-fs.previous");
  function Bu() {
  }
  o(Bu, "noop");
  function Jo(e, t) {
    Object.defineProperty(e, G, {
      get: /* @__PURE__ */ o(function() {
        return t;
      }, "get")
    });
  }
  o(Jo, "publishQueue");
  var fe = Bu;
  gt.debuglog ? fe = gt.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (fe = /* @__PURE__ */ o(function() {
    var e = gt.format.apply(gt, arguments);
    e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
  }, "debug"));
  F[G] || (Uo = global[G] || [], Jo(F, Uo), F.close = function(e) {
    function t(r, n) {
      return e.call(F, r, function(i) {
        i || Wo(), typeof n == "function" && n.apply(this, arguments);
      });
    }
    return o(t, "close"), Object.defineProperty(t, St, {
      value: e
    }), t;
  }(F.close), F.closeSync = function(e) {
    function t(r) {
      e.apply(F, arguments), Wo();
    }
    return o(t, "closeSync"), Object.defineProperty(t, St, {
      value: e
    }), t;
  }(F.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    fe(F[G]), require("assert").equal(F[G].length, 0);
  }));
  var Uo;
  global[G] || Jo(global, F[G]);
  fr.exports = ur(Gu(F));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !F.__patched && (fr.exports = ur(F), F.__patched = !0);
  function ur(e) {
    Lu(e), e.gracefulify = ur, e.createReadStream = X, e.createWriteStream = Ne;
    var t = e.readFile;
    e.readFile = r;
    function r(v, E, x) {
      return typeof E == "function" && (x = E, E = null), M(v, E, x);
      function M(L, _, C, R) {
        return t(L, _, function(k) {
          k && (k.code === "EMFILE" || k.code === "ENFILE") ? xe([M, [L, _, C], k, R || Date.now(), Date.now()]) : typeof C == "function" &&
          C.apply(this, arguments);
        });
      }
      o(M, "go$readFile");
    }
    o(r, "readFile");
    var n = e.writeFile;
    e.writeFile = i;
    function i(v, E, x, M) {
      return typeof x == "function" && (M = x, x = null), L(v, E, x, M);
      function L(_, C, R, k, $) {
        return n(_, C, R, function(O) {
          O && (O.code === "EMFILE" || O.code === "ENFILE") ? xe([L, [_, C, R, k], O, $ || Date.now(), Date.now()]) : typeof k == "function" &&
          k.apply(this, arguments);
        });
      }
      o(L, "go$writeFile");
    }
    o(i, "writeFile");
    var s = e.appendFile;
    s && (e.appendFile = a);
    function a(v, E, x, M) {
      return typeof x == "function" && (M = x, x = null), L(v, E, x, M);
      function L(_, C, R, k, $) {
        return s(_, C, R, function(O) {
          O && (O.code === "EMFILE" || O.code === "ENFILE") ? xe([L, [_, C, R, k], O, $ || Date.now(), Date.now()]) : typeof k == "function" &&
          k.apply(this, arguments);
        });
      }
      o(L, "go$appendFile");
    }
    o(a, "appendFile");
    var c = e.copyFile;
    c && (e.copyFile = f);
    function f(v, E, x, M) {
      return typeof x == "function" && (M = x, x = 0), L(v, E, x, M);
      function L(_, C, R, k, $) {
        return c(_, C, R, function(O) {
          O && (O.code === "EMFILE" || O.code === "ENFILE") ? xe([L, [_, C, R, k], O, $ || Date.now(), Date.now()]) : typeof k == "function" &&
          k.apply(this, arguments);
        });
      }
      o(L, "go$copyFile");
    }
    o(f, "copyFile");
    var y = e.readdir;
    e.readdir = h;
    var u = /^v[0-5]\./;
    function h(v, E, x) {
      typeof E == "function" && (x = E, E = null);
      var M = u.test(process.version) ? /* @__PURE__ */ o(function(C, R, k, $) {
        return y(C, L(
          C,
          R,
          k,
          $
        ));
      }, "go$readdir") : /* @__PURE__ */ o(function(C, R, k, $) {
        return y(C, R, L(
          C,
          R,
          k,
          $
        ));
      }, "go$readdir");
      return M(v, E, x);
      function L(_, C, R, k) {
        return function($, O) {
          $ && ($.code === "EMFILE" || $.code === "ENFILE") ? xe([
            M,
            [_, C, R],
            $,
            k || Date.now(),
            Date.now()
          ]) : (O && O.sort && O.sort(), typeof R == "function" && R.call(this, $, O));
        };
      }
    }
    if (o(h, "readdir"), process.version.substr(0, 4) === "v0.8") {
      var m = $u(e);
      b = m.ReadStream, w = m.WriteStream;
    }
    var l = e.ReadStream;
    l && (b.prototype = Object.create(l.prototype), b.prototype.open = q);
    var p = e.WriteStream;
    p && (w.prototype = Object.create(p.prototype), w.prototype.open = P), Object.defineProperty(e, "ReadStream", {
      get: /* @__PURE__ */ o(function() {
        return b;
      }, "get"),
      set: /* @__PURE__ */ o(function(v) {
        b = v;
      }, "set"),
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "WriteStream", {
      get: /* @__PURE__ */ o(function() {
        return w;
      }, "get"),
      set: /* @__PURE__ */ o(function(v) {
        w = v;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var g = b;
    Object.defineProperty(e, "FileReadStream", {
      get: /* @__PURE__ */ o(function() {
        return g;
      }, "get"),
      set: /* @__PURE__ */ o(function(v) {
        g = v;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var S = w;
    Object.defineProperty(e, "FileWriteStream", {
      get: /* @__PURE__ */ o(function() {
        return S;
      }, "get"),
      set: /* @__PURE__ */ o(function(v) {
        S = v;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    function b(v, E) {
      return this instanceof b ? (l.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments);
    }
    o(b, "ReadStream");
    function q() {
      var v = this;
      Lt(v.path, v.flags, v.mode, function(E, x) {
        E ? (v.autoClose && v.destroy(), v.emit("error", E)) : (v.fd = x, v.emit("open", x), v.read());
      });
    }
    o(q, "ReadStream$open");
    function w(v, E) {
      return this instanceof w ? (p.apply(this, arguments), this) : w.apply(Object.create(w.prototype), arguments);
    }
    o(w, "WriteStream");
    function P() {
      var v = this;
      Lt(v.path, v.flags, v.mode, function(E, x) {
        E ? (v.destroy(), v.emit("error", E)) : (v.fd = x, v.emit("open", x));
      });
    }
    o(P, "WriteStream$open");
    function X(v, E) {
      return new e.ReadStream(v, E);
    }
    o(X, "createReadStream");
    function Ne(v, E) {
      return new e.WriteStream(v, E);
    }
    o(Ne, "createWriteStream");
    var Xe = e.open;
    e.open = Lt;
    function Lt(v, E, x, M) {
      return typeof x == "function" && (M = x, x = null), L(v, E, x, M);
      function L(_, C, R, k, $) {
        return Xe(_, C, R, function(O, dd) {
          O && (O.code === "EMFILE" || O.code === "ENFILE") ? xe([L, [_, C, R, k], O, $ || Date.now(), Date.now()]) : typeof k == "function" &&
          k.apply(this, arguments);
        });
      }
      o(L, "go$open");
    }
    return o(Lt, "open"), e;
  }
  o(ur, "patch");
  function xe(e) {
    fe("ENQUEUE", e[0].name, e[1]), F[G].push(e), lr();
  }
  o(xe, "enqueue");
  var wt;
  function Wo() {
    for (var e = Date.now(), t = 0; t < F[G].length; ++t)
      F[G][t].length > 2 && (F[G][t][3] = e, F[G][t][4] = e);
    lr();
  }
  o(Wo, "resetQueue");
  function lr() {
    if (clearTimeout(wt), wt = void 0, F[G].length !== 0) {
      var e = F[G].shift(), t = e[0], r = e[1], n = e[2], i = e[3], s = e[4];
      if (i === void 0)
        fe("RETRY", t.name, r), t.apply(null, r);
      else if (Date.now() - i >= 6e4) {
        fe("TIMEOUT", t.name, r);
        var a = r.pop();
        typeof a == "function" && a.call(null, n);
      } else {
        var c = Date.now() - s, f = Math.max(s - i, 1), y = Math.min(f * 1.2, 100);
        c >= y ? (fe("RETRY", t.name, r), t.apply(null, r.concat([i]))) : F[G].push(e);
      }
      wt === void 0 && (wt = setTimeout(lr, 0));
    }
  }
  o(lr, "retry");
});

// ../node_modules/fs-extra/lib/fs/index.js
var W = d((ee) => {
  "use strict";
  var Vo = D().fromCallback, U = Ee(), Uu = [
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
  Uu.forEach((e) => {
    ee[e] = Vo(U[e]);
  });
  ee.exists = function(e, t) {
    return typeof t == "function" ? U.exists(e, t) : new Promise((r) => U.exists(e, r));
  };
  ee.read = function(e, t, r, n, i, s) {
    return typeof s == "function" ? U.read(e, t, r, n, i, s) : new Promise((a, c) => {
      U.read(e, t, r, n, i, (f, y, u) => {
        if (f) return c(f);
        a({ bytesRead: y, buffer: u });
      });
    });
  };
  ee.write = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? U.write(e, t, ...r) : new Promise((n, i) => {
      U.write(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesWritten: a, buffer: c });
      });
    });
  };
  ee.readv = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? U.readv(e, t, ...r) : new Promise((n, i) => {
      U.readv(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesRead: a, buffers: c });
      });
    });
  };
  ee.writev = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? U.writev(e, t, ...r) : new Promise((n, i) => {
      U.writev(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesWritten: a, buffers: c });
      });
    });
  };
  typeof U.realpath.native == "function" ? ee.realpath.native = Vo(U.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
});

// ../node_modules/fs-extra/lib/mkdirs/utils.js
var Ko = d((Lm, Yo) => {
  "use strict";
  var Wu = require("path");
  Yo.exports.checkPath = /* @__PURE__ */ o(function(t) {
    if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(Wu.parse(t).root, ""))) {
      let n = new Error(`Path contains invalid characters: ${t}`);
      throw n.code = "EINVAL", n;
    }
  }, "checkPath");
});

// ../node_modules/fs-extra/lib/mkdirs/make-dir.js
var Qo = d((Gm, dr) => {
  "use strict";
  var Ho = W(), { checkPath: zo } = Ko(), Xo = /* @__PURE__ */ o((e) => {
    let t = { mode: 511 };
    return typeof e == "number" ? e : { ...t, ...e }.mode;
  }, "getMode");
  dr.exports.makeDir = async (e, t) => (zo(e), Ho.mkdir(e, {
    mode: Xo(t),
    recursive: !0
  }));
  dr.exports.makeDirSync = (e, t) => (zo(e), Ho.mkdirSync(e, {
    mode: Xo(t),
    recursive: !0
  }));
});

// ../node_modules/fs-extra/lib/mkdirs/index.js
var H = d((Um, Zo) => {
  "use strict";
  var Ju = D().fromPromise, { makeDir: Vu, makeDirSync: mr } = Qo(), pr = Ju(Vu);
  Zo.exports = {
    mkdirs: pr,
    mkdirsSync: mr,
    // alias
    mkdirp: pr,
    mkdirpSync: mr,
    ensureDir: pr,
    ensureDirSync: mr
  };
});

// ../node_modules/fs-extra/lib/path-exists/index.js
var ne = d((Wm, ti) => {
  "use strict";
  var Yu = D().fromPromise, ei = W();
  function Ku(e) {
    return ei.access(e).then(() => !0).catch(() => !1);
  }
  o(Ku, "pathExists");
  ti.exports = {
    pathExists: Yu(Ku),
    pathExistsSync: ei.existsSync
  };
});

// ../node_modules/fs-extra/lib/util/utimes.js
var yr = d((Vm, ri) => {
  "use strict";
  var ke = W(), Hu = D().fromPromise;
  async function zu(e, t, r) {
    let n = await ke.open(e, "r+"), i = null;
    try {
      await ke.futimes(n, t, r);
    } finally {
      try {
        await ke.close(n);
      } catch (s) {
        i = s;
      }
    }
    if (i)
      throw i;
  }
  o(zu, "utimesMillis");
  function Xu(e, t, r) {
    let n = ke.openSync(e, "r+");
    return ke.futimesSync(n, t, r), ke.closeSync(n);
  }
  o(Xu, "utimesMillisSync");
  ri.exports = {
    utimesMillis: Hu(zu),
    utimesMillisSync: Xu
  };
});

// ../node_modules/fs-extra/lib/util/stat.js
var de = d((Km, si) => {
  "use strict";
  var Pe = W(), j = require("path"), ni = D().fromPromise;
  function Qu(e, t, r) {
    let n = r.dereference ? (i) => Pe.stat(i, { bigint: !0 }) : (i) => Pe.lstat(i, { bigint: !0 });
    return Promise.all([
      n(e),
      n(t).catch((i) => {
        if (i.code === "ENOENT") return null;
        throw i;
      })
    ]).then(([i, s]) => ({ srcStat: i, destStat: s }));
  }
  o(Qu, "getStats");
  function Zu(e, t, r) {
    let n, i = r.dereference ? (a) => Pe.statSync(a, { bigint: !0 }) : (a) => Pe.lstatSync(a, { bigint: !0 }), s = i(e);
    try {
      n = i(t);
    } catch (a) {
      if (a.code === "ENOENT") return { srcStat: s, destStat: null };
      throw a;
    }
    return { srcStat: s, destStat: n };
  }
  o(Zu, "getStatsSync");
  async function el(e, t, r, n) {
    let { srcStat: i, destStat: s } = await Qu(e, t, n);
    if (s) {
      if (Me(i, s)) {
        let a = j.basename(e), c = j.basename(t);
        if (r === "move" && a !== c && a.toLowerCase() === c.toLowerCase())
          return { srcStat: i, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
      if (!i.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && hr(e, t))
      throw new Error(vt(e, t, r));
    return { srcStat: i, destStat: s };
  }
  o(el, "checkPaths");
  function tl(e, t, r, n) {
    let { srcStat: i, destStat: s } = Zu(e, t, n);
    if (s) {
      if (Me(i, s)) {
        let a = j.basename(e), c = j.basename(t);
        if (r === "move" && a !== c && a.toLowerCase() === c.toLowerCase())
          return { srcStat: i, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
      if (!i.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && hr(e, t))
      throw new Error(vt(e, t, r));
    return { srcStat: i, destStat: s };
  }
  o(tl, "checkPathsSync");
  async function oi(e, t, r, n) {
    let i = j.resolve(j.dirname(e)), s = j.resolve(j.dirname(r));
    if (s === i || s === j.parse(s).root) return;
    let a;
    try {
      a = await Pe.stat(s, { bigint: !0 });
    } catch (c) {
      if (c.code === "ENOENT") return;
      throw c;
    }
    if (Me(t, a))
      throw new Error(vt(e, r, n));
    return oi(e, t, s, n);
  }
  o(oi, "checkParentPaths");
  function ii(e, t, r, n) {
    let i = j.resolve(j.dirname(e)), s = j.resolve(j.dirname(r));
    if (s === i || s === j.parse(s).root) return;
    let a;
    try {
      a = Pe.statSync(s, { bigint: !0 });
    } catch (c) {
      if (c.code === "ENOENT") return;
      throw c;
    }
    if (Me(t, a))
      throw new Error(vt(e, r, n));
    return ii(e, t, s, n);
  }
  o(ii, "checkParentPathsSync");
  function Me(e, t) {
    return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
  }
  o(Me, "areIdentical");
  function hr(e, t) {
    let r = j.resolve(e).split(j.sep).filter((i) => i), n = j.resolve(t).split(j.sep).filter((i) => i);
    return r.every((i, s) => n[s] === i);
  }
  o(hr, "isSrcSubdir");
  function vt(e, t, r) {
    return `Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`;
  }
  o(vt, "errMsg");
  si.exports = {
    // checkPaths
    checkPaths: ni(el),
    checkPathsSync: tl,
    // checkParent
    checkParentPaths: ni(oi),
    checkParentPathsSync: ii,
    // Misc
    isSrcSubdir: hr,
    areIdentical: Me
  };
});

// ../node_modules/fs-extra/lib/copy/copy.js
var fi = d((zm, li) => {
  "use strict";
  var B = W(), Le = require("path"), { mkdirs: rl } = H(), { pathExists: nl } = ne(), { utimesMillis: ol } = yr(), $e = de();
  async function il(e, t, r = {}) {
    typeof r == "function" && (r = { filter: r }), r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ? !!r.overwrite :
    r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0001"
    );
    let { srcStat: n, destStat: i } = await $e.checkPaths(e, t, "copy", r);
    if (await $e.checkParentPaths(e, n, t, "copy"), !await ci(e, t, r)) return;
    let a = Le.dirname(t);
    await nl(a) || await rl(a), await ui(i, e, t, r);
  }
  o(il, "copy");
  async function ci(e, t, r) {
    return r.filter ? r.filter(e, t) : !0;
  }
  o(ci, "runFilter");
  async function ui(e, t, r, n) {
    let s = await (n.dereference ? B.stat : B.lstat)(t);
    if (s.isDirectory()) return ul(s, e, t, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return sl(s, e, t, r, n);
    if (s.isSymbolicLink()) return ll(e, t, r, n);
    throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(
    `Unknown file: ${t}`);
  }
  o(ui, "getStatsAndPerformCopy");
  async function sl(e, t, r, n, i) {
    if (!t) return ai(e, r, n, i);
    if (i.overwrite)
      return await B.unlink(n), ai(e, r, n, i);
    if (i.errorOnExist)
      throw new Error(`'${n}' already exists`);
  }
  o(sl, "onFile");
  async function ai(e, t, r, n) {
    if (await B.copyFile(t, r), n.preserveTimestamps) {
      al(e.mode) && await cl(r, e.mode);
      let i = await B.stat(t);
      await ol(r, i.atime, i.mtime);
    }
    return B.chmod(r, e.mode);
  }
  o(ai, "copyFile");
  function al(e) {
    return (e & 128) === 0;
  }
  o(al, "fileIsNotWritable");
  function cl(e, t) {
    return B.chmod(e, t | 128);
  }
  o(cl, "makeFileWritable");
  async function ul(e, t, r, n, i) {
    t || await B.mkdir(n);
    let s = await B.readdir(r);
    await Promise.all(s.map(async (a) => {
      let c = Le.join(r, a), f = Le.join(n, a);
      if (!await ci(c, f, i)) return;
      let { destStat: u } = await $e.checkPaths(c, f, "copy", i);
      return ui(u, c, f, i);
    })), t || await B.chmod(n, e.mode);
  }
  o(ul, "onDir");
  async function ll(e, t, r, n) {
    let i = await B.readlink(t);
    if (n.dereference && (i = Le.resolve(process.cwd(), i)), !e)
      return B.symlink(i, r);
    let s = null;
    try {
      s = await B.readlink(r);
    } catch (a) {
      if (a.code === "EINVAL" || a.code === "UNKNOWN") return B.symlink(i, r);
      throw a;
    }
    if (n.dereference && (s = Le.resolve(process.cwd(), s)), $e.isSrcSubdir(i, s))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${s}'.`);
    if ($e.isSrcSubdir(s, i))
      throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
    return await B.unlink(r), B.symlink(i, r);
  }
  o(ll, "onLink");
  li.exports = il;
});

// ../node_modules/fs-extra/lib/copy/copy-sync.js
var hi = d((Qm, yi) => {
  "use strict";
  var J = Ee(), Ge = require("path"), fl = H().mkdirsSync, dl = yr().utimesMillisSync, Be = de();
  function ml(e, t, r) {
    typeof r == "function" && (r = { filter: r }), r = r || {}, r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ?
    !!r.overwrite : r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0002"
    );
    let { srcStat: n, destStat: i } = Be.checkPathsSync(e, t, "copy", r);
    if (Be.checkParentPathsSync(e, n, t, "copy"), r.filter && !r.filter(e, t)) return;
    let s = Ge.dirname(t);
    return J.existsSync(s) || fl(s), di(i, e, t, r);
  }
  o(ml, "copySync");
  function di(e, t, r, n) {
    let s = (n.dereference ? J.statSync : J.lstatSync)(t);
    if (s.isDirectory()) return vl(s, e, t, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return pl(s, e, t, r, n);
    if (s.isSymbolicLink()) return El(e, t, r, n);
    throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(
    `Unknown file: ${t}`);
  }
  o(di, "getStats");
  function pl(e, t, r, n, i) {
    return t ? yl(e, r, n, i) : mi(e, r, n, i);
  }
  o(pl, "onFile");
  function yl(e, t, r, n) {
    if (n.overwrite)
      return J.unlinkSync(r), mi(e, t, r, n);
    if (n.errorOnExist)
      throw new Error(`'${r}' already exists`);
  }
  o(yl, "mayCopyFile");
  function mi(e, t, r, n) {
    return J.copyFileSync(t, r), n.preserveTimestamps && hl(e.mode, t, r), gr(r, e.mode);
  }
  o(mi, "copyFile");
  function hl(e, t, r) {
    return gl(e) && wl(r, e), Sl(t, r);
  }
  o(hl, "handleTimestamps");
  function gl(e) {
    return (e & 128) === 0;
  }
  o(gl, "fileIsNotWritable");
  function wl(e, t) {
    return gr(e, t | 128);
  }
  o(wl, "makeFileWritable");
  function gr(e, t) {
    return J.chmodSync(e, t);
  }
  o(gr, "setDestMode");
  function Sl(e, t) {
    let r = J.statSync(e);
    return dl(t, r.atime, r.mtime);
  }
  o(Sl, "setDestTimestamps");
  function vl(e, t, r, n, i) {
    return t ? pi(r, n, i) : bl(e.mode, r, n, i);
  }
  o(vl, "onDir");
  function bl(e, t, r, n) {
    return J.mkdirSync(r), pi(t, r, n), gr(r, e);
  }
  o(bl, "mkDirAndCopy");
  function pi(e, t, r) {
    J.readdirSync(e).forEach((n) => xl(n, e, t, r));
  }
  o(pi, "copyDir");
  function xl(e, t, r, n) {
    let i = Ge.join(t, e), s = Ge.join(r, e);
    if (n.filter && !n.filter(i, s)) return;
    let { destStat: a } = Be.checkPathsSync(i, s, "copy", n);
    return di(a, i, s, n);
  }
  o(xl, "copyDirItem");
  function El(e, t, r, n) {
    let i = J.readlinkSync(t);
    if (n.dereference && (i = Ge.resolve(process.cwd(), i)), e) {
      let s;
      try {
        s = J.readlinkSync(r);
      } catch (a) {
        if (a.code === "EINVAL" || a.code === "UNKNOWN") return J.symlinkSync(i, r);
        throw a;
      }
      if (n.dereference && (s = Ge.resolve(process.cwd(), s)), Be.isSrcSubdir(i, s))
        throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${s}'.`);
      if (Be.isSrcSubdir(s, i))
        throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
      return kl(i, r);
    } else
      return J.symlinkSync(i, r);
  }
  o(El, "onLink");
  function kl(e, t) {
    return J.unlinkSync(t), J.symlinkSync(e, t);
  }
  o(kl, "copyLink");
  yi.exports = ml;
});

// ../node_modules/fs-extra/lib/copy/index.js
var bt = d((ep, gi) => {
  "use strict";
  var Pl = D().fromPromise;
  gi.exports = {
    copy: Pl(fi()),
    copySync: hi()
  };
});

// ../node_modules/fs-extra/lib/remove/index.js
var Ue = d((tp, Si) => {
  "use strict";
  var wi = Ee(), Ol = D().fromCallback;
  function Tl(e, t) {
    wi.rm(e, { recursive: !0, force: !0 }, t);
  }
  o(Tl, "remove");
  function Il(e) {
    wi.rmSync(e, { recursive: !0, force: !0 });
  }
  o(Il, "removeSync");
  Si.exports = {
    remove: Ol(Tl),
    removeSync: Il
  };
});

// ../node_modules/fs-extra/lib/empty/index.js
var Ti = d((np, Oi) => {
  "use strict";
  var Cl = D().fromPromise, xi = W(), Ei = require("path"), ki = H(), Pi = Ue(), vi = Cl(/* @__PURE__ */ o(async function(t) {
    let r;
    try {
      r = await xi.readdir(t);
    } catch {
      return ki.mkdirs(t);
    }
    return Promise.all(r.map((n) => Pi.remove(Ei.join(t, n))));
  }, "emptyDir"));
  function bi(e) {
    let t;
    try {
      t = xi.readdirSync(e);
    } catch {
      return ki.mkdirsSync(e);
    }
    t.forEach((r) => {
      r = Ei.join(e, r), Pi.removeSync(r);
    });
  }
  o(bi, "emptyDirSync");
  Oi.exports = {
    emptyDirSync: bi,
    emptydirSync: bi,
    emptyDir: vi,
    emptydir: vi
  };
});

// ../node_modules/fs-extra/lib/ensure/file.js
var Ni = d((ip, Fi) => {
  "use strict";
  var Fl = D().fromPromise, Ii = require("path"), te = W(), Ci = H();
  async function Nl(e) {
    let t;
    try {
      t = await te.stat(e);
    } catch {
    }
    if (t && t.isFile()) return;
    let r = Ii.dirname(e), n = null;
    try {
      n = await te.stat(r);
    } catch (i) {
      if (i.code === "ENOENT") {
        await Ci.mkdirs(r), await te.writeFile(e, "");
        return;
      } else
        throw i;
    }
    n.isDirectory() ? await te.writeFile(e, "") : await te.readdir(r);
  }
  o(Nl, "createFile");
  function Rl(e) {
    let t;
    try {
      t = te.statSync(e);
    } catch {
    }
    if (t && t.isFile()) return;
    let r = Ii.dirname(e);
    try {
      te.statSync(r).isDirectory() || te.readdirSync(r);
    } catch (n) {
      if (n && n.code === "ENOENT") Ci.mkdirsSync(r);
      else throw n;
    }
    te.writeFileSync(e, "");
  }
  o(Rl, "createFileSync");
  Fi.exports = {
    createFile: Fl(Nl),
    createFileSync: Rl
  };
});

// ../node_modules/fs-extra/lib/ensure/link.js
var Di = d((ap, Ai) => {
  "use strict";
  var ql = D().fromPromise, Ri = require("path"), oe = W(), qi = H(), { pathExists: _l } = ne(), { areIdentical: _i } = de();
  async function Al(e, t) {
    let r;
    try {
      r = await oe.lstat(t);
    } catch {
    }
    let n;
    try {
      n = await oe.lstat(e);
    } catch (a) {
      throw a.message = a.message.replace("lstat", "ensureLink"), a;
    }
    if (r && _i(n, r)) return;
    let i = Ri.dirname(t);
    await _l(i) || await qi.mkdirs(i), await oe.link(e, t);
  }
  o(Al, "createLink");
  function Dl(e, t) {
    let r;
    try {
      r = oe.lstatSync(t);
    } catch {
    }
    try {
      let s = oe.lstatSync(e);
      if (r && _i(s, r)) return;
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    let n = Ri.dirname(t);
    return oe.existsSync(n) || qi.mkdirsSync(n), oe.linkSync(e, t);
  }
  o(Dl, "createLinkSync");
  Ai.exports = {
    createLink: ql(Al),
    createLinkSync: Dl
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-paths.js
var Mi = d((up, ji) => {
  "use strict";
  var ie = require("path"), We = W(), { pathExists: jl } = ne(), Ml = D().fromPromise;
  async function Ll(e, t) {
    if (ie.isAbsolute(e)) {
      try {
        await We.lstat(e);
      } catch (s) {
        throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
      }
      return {
        toCwd: e,
        toDst: e
      };
    }
    let r = ie.dirname(t), n = ie.join(r, e);
    if (await jl(n))
      return {
        toCwd: n,
        toDst: e
      };
    try {
      await We.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
    }
    return {
      toCwd: e,
      toDst: ie.relative(r, e)
    };
  }
  o(Ll, "symlinkPaths");
  function $l(e, t) {
    if (ie.isAbsolute(e)) {
      if (!We.existsSync(e)) throw new Error("absolute srcpath does not exist");
      return {
        toCwd: e,
        toDst: e
      };
    }
    let r = ie.dirname(t), n = ie.join(r, e);
    if (We.existsSync(n))
      return {
        toCwd: n,
        toDst: e
      };
    if (!We.existsSync(e)) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: ie.relative(r, e)
    };
  }
  o($l, "symlinkPathsSync");
  ji.exports = {
    symlinkPaths: Ml(Ll),
    symlinkPathsSync: $l
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-type.js
var Gi = d((fp, $i) => {
  "use strict";
  var Li = W(), Gl = D().fromPromise;
  async function Bl(e, t) {
    if (t) return t;
    let r;
    try {
      r = await Li.lstat(e);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  o(Bl, "symlinkType");
  function Ul(e, t) {
    if (t) return t;
    let r;
    try {
      r = Li.lstatSync(e);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  o(Ul, "symlinkTypeSync");
  $i.exports = {
    symlinkType: Gl(Bl),
    symlinkTypeSync: Ul
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink.js
var Ji = d((mp, Wi) => {
  "use strict";
  var Wl = D().fromPromise, Bi = require("path"), Z = W(), { mkdirs: Jl, mkdirsSync: Vl } = H(), { symlinkPaths: Yl, symlinkPathsSync: Kl } = Mi(),
  { symlinkType: Hl, symlinkTypeSync: zl } = Gi(), { pathExists: Xl } = ne(), { areIdentical: Ui } = de();
  async function Ql(e, t, r) {
    let n;
    try {
      n = await Z.lstat(t);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let [c, f] = await Promise.all([
        Z.stat(e),
        Z.stat(t)
      ]);
      if (Ui(c, f)) return;
    }
    let i = await Yl(e, t);
    e = i.toDst;
    let s = await Hl(i.toCwd, r), a = Bi.dirname(t);
    return await Xl(a) || await Jl(a), Z.symlink(e, t, s);
  }
  o(Ql, "createSymlink");
  function Zl(e, t, r) {
    let n;
    try {
      n = Z.lstatSync(t);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let c = Z.statSync(e), f = Z.statSync(t);
      if (Ui(c, f)) return;
    }
    let i = Kl(e, t);
    e = i.toDst, r = zl(i.toCwd, r);
    let s = Bi.dirname(t);
    return Z.existsSync(s) || Vl(s), Z.symlinkSync(e, t, r);
  }
  o(Zl, "createSymlinkSync");
  Wi.exports = {
    createSymlink: Wl(Ql),
    createSymlinkSync: Zl
  };
});

// ../node_modules/fs-extra/lib/ensure/index.js
var Zi = d((yp, Qi) => {
  "use strict";
  var { createFile: Vi, createFileSync: Yi } = Ni(), { createLink: Ki, createLinkSync: Hi } = Di(), { createSymlink: zi, createSymlinkSync: Xi } = Ji();
  Qi.exports = {
    // file
    createFile: Vi,
    createFileSync: Yi,
    ensureFile: Vi,
    ensureFileSync: Yi,
    // link
    createLink: Ki,
    createLinkSync: Hi,
    ensureLink: Ki,
    ensureLinkSync: Hi,
    // symlink
    createSymlink: zi,
    createSymlinkSync: Xi,
    ensureSymlink: zi,
    ensureSymlinkSync: Xi
  };
});

// ../node_modules/jsonfile/utils.js
var xt = d((hp, es) => {
  function ef(e, { EOL: t = `
`, finalEOL: r = !0, replacer: n = null, spaces: i } = {}) {
    let s = r ? t : "";
    return JSON.stringify(e, n, i).replace(/\n/g, t) + s;
  }
  o(ef, "stringify");
  function tf(e) {
    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
  }
  o(tf, "stripBom");
  es.exports = { stringify: ef, stripBom: tf };
});

// ../node_modules/jsonfile/index.js
var os = d((wp, ns) => {
  var Oe;
  try {
    Oe = Ee();
  } catch {
    Oe = require("fs");
  }
  var Et = D(), { stringify: ts, stripBom: rs } = xt();
  async function rf(e, t = {}) {
    typeof t == "string" && (t = { encoding: t });
    let r = t.fs || Oe, n = "throws" in t ? t.throws : !0, i = await Et.fromCallback(r.readFile)(e, t);
    i = rs(i);
    let s;
    try {
      s = JSON.parse(i, t ? t.reviver : null);
    } catch (a) {
      if (n)
        throw a.message = `${e}: ${a.message}`, a;
      return null;
    }
    return s;
  }
  o(rf, "_readFile");
  var nf = Et.fromPromise(rf);
  function of(e, t = {}) {
    typeof t == "string" && (t = { encoding: t });
    let r = t.fs || Oe, n = "throws" in t ? t.throws : !0;
    try {
      let i = r.readFileSync(e, t);
      return i = rs(i), JSON.parse(i, t.reviver);
    } catch (i) {
      if (n)
        throw i.message = `${e}: ${i.message}`, i;
      return null;
    }
  }
  o(of, "readFileSync");
  async function sf(e, t, r = {}) {
    let n = r.fs || Oe, i = ts(t, r);
    await Et.fromCallback(n.writeFile)(e, i, r);
  }
  o(sf, "_writeFile");
  var af = Et.fromPromise(sf);
  function cf(e, t, r = {}) {
    let n = r.fs || Oe, i = ts(t, r);
    return n.writeFileSync(e, i, r);
  }
  o(cf, "writeFileSync");
  var uf = {
    readFile: nf,
    readFileSync: of,
    writeFile: af,
    writeFileSync: cf
  };
  ns.exports = uf;
});

// ../node_modules/fs-extra/lib/json/jsonfile.js
var ss = d((vp, is) => {
  "use strict";
  var kt = os();
  is.exports = {
    // jsonfile exports
    readJson: kt.readFile,
    readJsonSync: kt.readFileSync,
    writeJson: kt.writeFile,
    writeJsonSync: kt.writeFileSync
  };
});

// ../node_modules/fs-extra/lib/output-file/index.js
var Pt = d((bp, us) => {
  "use strict";
  var lf = D().fromPromise, wr = W(), as = require("path"), cs = H(), ff = ne().pathExists;
  async function df(e, t, r = "utf-8") {
    let n = as.dirname(e);
    return await ff(n) || await cs.mkdirs(n), wr.writeFile(e, t, r);
  }
  o(df, "outputFile");
  function mf(e, ...t) {
    let r = as.dirname(e);
    wr.existsSync(r) || cs.mkdirsSync(r), wr.writeFileSync(e, ...t);
  }
  o(mf, "outputFileSync");
  us.exports = {
    outputFile: lf(df),
    outputFileSync: mf
  };
});

// ../node_modules/fs-extra/lib/json/output-json.js
var fs = d((Ep, ls) => {
  "use strict";
  var { stringify: pf } = xt(), { outputFile: yf } = Pt();
  async function hf(e, t, r = {}) {
    let n = pf(t, r);
    await yf(e, n, r);
  }
  o(hf, "outputJson");
  ls.exports = hf;
});

// ../node_modules/fs-extra/lib/json/output-json-sync.js
var ms = d((Pp, ds) => {
  "use strict";
  var { stringify: gf } = xt(), { outputFileSync: wf } = Pt();
  function Sf(e, t, r) {
    let n = gf(t, r);
    wf(e, n, r);
  }
  o(Sf, "outputJsonSync");
  ds.exports = Sf;
});

// ../node_modules/fs-extra/lib/json/index.js
var ys = d((Tp, ps) => {
  "use strict";
  var vf = D().fromPromise, V = ss();
  V.outputJson = vf(fs());
  V.outputJsonSync = ms();
  V.outputJSON = V.outputJson;
  V.outputJSONSync = V.outputJsonSync;
  V.writeJSON = V.writeJson;
  V.writeJSONSync = V.writeJsonSync;
  V.readJSON = V.readJson;
  V.readJSONSync = V.readJsonSync;
  ps.exports = V;
});

// ../node_modules/fs-extra/lib/move/move.js
var vs = d((Ip, Ss) => {
  "use strict";
  var bf = W(), hs = require("path"), { copy: xf } = bt(), { remove: ws } = Ue(), { mkdirp: Ef } = H(), { pathExists: kf } = ne(), gs = de();
  async function Pf(e, t, r = {}) {
    let n = r.overwrite || r.clobber || !1, { srcStat: i, isChangingCase: s = !1 } = await gs.checkPaths(e, t, "move", r);
    await gs.checkParentPaths(e, i, t, "move");
    let a = hs.dirname(t);
    return hs.parse(a).root !== a && await Ef(a), Of(e, t, n, s);
  }
  o(Pf, "move");
  async function Of(e, t, r, n) {
    if (!n) {
      if (r)
        await ws(t);
      else if (await kf(t))
        throw new Error("dest already exists.");
    }
    try {
      await bf.rename(e, t);
    } catch (i) {
      if (i.code !== "EXDEV")
        throw i;
      await Tf(e, t, r);
    }
  }
  o(Of, "doRename");
  async function Tf(e, t, r) {
    return await xf(e, t, {
      overwrite: r,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), ws(e);
  }
  o(Tf, "moveAcrossDevice");
  Ss.exports = Pf;
});

// ../node_modules/fs-extra/lib/move/move-sync.js
var Ps = d((Fp, ks) => {
  "use strict";
  var xs = Ee(), vr = require("path"), If = bt().copySync, Es = Ue().removeSync, Cf = H().mkdirpSync, bs = de();
  function Ff(e, t, r) {
    r = r || {};
    let n = r.overwrite || r.clobber || !1, { srcStat: i, isChangingCase: s = !1 } = bs.checkPathsSync(e, t, "move", r);
    return bs.checkParentPathsSync(e, i, t, "move"), Nf(t) || Cf(vr.dirname(t)), Rf(e, t, n, s);
  }
  o(Ff, "moveSync");
  function Nf(e) {
    let t = vr.dirname(e);
    return vr.parse(t).root === t;
  }
  o(Nf, "isParentRoot");
  function Rf(e, t, r, n) {
    if (n) return Sr(e, t, r);
    if (r)
      return Es(t), Sr(e, t, r);
    if (xs.existsSync(t)) throw new Error("dest already exists.");
    return Sr(e, t, r);
  }
  o(Rf, "doRename");
  function Sr(e, t, r) {
    try {
      xs.renameSync(e, t);
    } catch (n) {
      if (n.code !== "EXDEV") throw n;
      return qf(e, t, r);
    }
  }
  o(Sr, "rename");
  function qf(e, t, r) {
    return If(e, t, {
      overwrite: r,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), Es(e);
  }
  o(qf, "moveAcrossDevice");
  ks.exports = Ff;
});

// ../node_modules/fs-extra/lib/move/index.js
var Ts = d((Rp, Os) => {
  "use strict";
  var _f = D().fromPromise;
  Os.exports = {
    move: _f(vs()),
    moveSync: Ps()
  };
});

// ../node_modules/fs-extra/lib/index.js
var br = d((qp, Is) => {
  "use strict";
  Is.exports = {
    // Export promiseified graceful-fs:
    ...W(),
    // Export extra methods:
    ...bt(),
    ...Ti(),
    ...Zi(),
    ...ys(),
    ...H(),
    ...Ts(),
    ...Pt(),
    ...ne(),
    ...Ue()
  };
});

// ../node_modules/fetch-retry/index.js
var Js = d((oy, Ws) => {
  "use strict";
  Ws.exports = function(e, t) {
    if (t = t || {}, typeof e != "function")
      throw new ae("fetch must be a function");
    if (typeof t != "object")
      throw new ae("defaults must be an object");
    if (t.retries !== void 0 && !Nt(t.retries))
      throw new ae("retries must be a positive integer");
    if (t.retryDelay !== void 0 && !Nt(t.retryDelay) && typeof t.retryDelay != "function")
      throw new ae("retryDelay must be a positive integer or a function returning a positive integer");
    if (t.retryOn !== void 0 && !Array.isArray(t.retryOn) && typeof t.retryOn != "function")
      throw new ae("retryOn property expects an array or function");
    var r = {
      retries: 3,
      retryDelay: 1e3,
      retryOn: []
    };
    return t = Object.assign(r, t), /* @__PURE__ */ o(function(i, s) {
      var a = t.retries, c = t.retryDelay, f = t.retryOn;
      if (s && s.retries !== void 0)
        if (Nt(s.retries))
          a = s.retries;
        else
          throw new ae("retries must be a positive integer");
      if (s && s.retryDelay !== void 0)
        if (Nt(s.retryDelay) || typeof s.retryDelay == "function")
          c = s.retryDelay;
        else
          throw new ae("retryDelay must be a positive integer or a function returning a positive integer");
      if (s && s.retryOn)
        if (Array.isArray(s.retryOn) || typeof s.retryOn == "function")
          f = s.retryOn;
        else
          throw new ae("retryOn property expects an array or function");
      return new Promise(function(y, u) {
        var h = /* @__PURE__ */ o(function(l) {
          var p = typeof Request < "u" && i instanceof Request ? i.clone() : i;
          e(p, s).then(function(g) {
            if (Array.isArray(f) && f.indexOf(g.status) === -1)
              y(g);
            else if (typeof f == "function")
              try {
                return Promise.resolve(f(l, null, g)).then(function(S) {
                  S ? m(l, null, g) : y(g);
                }).catch(u);
              } catch (S) {
                u(S);
              }
            else
              l < a ? m(l, null, g) : y(g);
          }).catch(function(g) {
            if (typeof f == "function")
              try {
                Promise.resolve(f(l, g, null)).then(function(S) {
                  S ? m(l, g, null) : u(g);
                }).catch(function(S) {
                  u(S);
                });
              } catch (S) {
                u(S);
              }
            else l < a ? m(l, g, null) : u(g);
          });
        }, "wrappedFetch");
        function m(l, p, g) {
          var S = typeof c == "function" ? c(l, p, g) : c;
          setTimeout(function() {
            h(++l);
          }, S);
        }
        o(m, "retry"), h(0);
      });
    }, "fetchRetry");
  };
  function Nt(e) {
    return Number.isInteger(e) && e >= 0;
  }
  o(Nt, "isPositiveInteger");
  function ae(e) {
    this.name = "ArgumentError", this.message = e;
  }
  o(ae, "ArgumentError");
});

// src/telemetry/index.ts
var fd = {};
Ea(fd, {
  addToGlobalContext: () => na,
  computeStorybookMetadata: () => Bs,
  getPrecedingUpgrade: () => Zs,
  getStorybookMetadata: () => Tr,
  metaFrameworks: () => Pr,
  oneWayHash: () => Rt,
  sanitizeAddonName: () => Or,
  telemetry: () => ld
});
module.exports = ka(fd);
var Lr = require("@storybook/core/node-logger");

// ../node_modules/fd-package-json/dist/esm/main.js
var Ur = Y(Br(), 1), Wr = require("node:path"), Ze = require("node:fs/promises"), Jr = require("node:fs");
async function Oa(e) {
  try {
    return (await (0, Ze.stat)(e)).isFile();
  } catch {
    return !1;
  }
}
o(Oa, "fileExists");
async function Ta(e) {
  for (let t of (0, Ur.walkUp)(e)) {
    let r = (0, Wr.resolve)(t, "package.json");
    if (await Oa(r))
      return r;
  }
  return null;
}
o(Ta, "findPackagePath");
async function Vr(e) {
  let t = await Ta(e);
  if (!t)
    return null;
  try {
    let r = await (0, Ze.readFile)(t, { encoding: "utf8" });
    return JSON.parse(r);
  } catch {
    return null;
  }
}
o(Vr, "findPackage");

// src/telemetry/storybook-metadata.ts
var Ft = Y(Ao(), 1), se = require("@storybook/core/common"), Gs = require("@storybook/core/csf-tools");

// src/telemetry/package-json.ts
var Cs = Y(br(), 1), Fs = Y(require("node:path"), 1);
var xr = /* @__PURE__ */ o(async (e) => {
  let t = Object.keys(e);
  return Promise.all(t.map(Ot));
}, "getActualPackageVersions"), Ot = /* @__PURE__ */ o(async (e) => {
  try {
    let t = await Er(e);
    return {
      name: e,
      version: t.version
    };
  } catch {
    return { name: e, version: null };
  }
}, "getActualPackageVersion"), Er = /* @__PURE__ */ o(async (e) => {
  let t = require.resolve(Fs.default.join(e, "package.json"), {
    paths: [process.cwd()]
  });
  return await (0, Cs.readJson)(t);
}, "getActualPackageJson");

// src/telemetry/get-monorepo-type.ts
var Je = Y(br(), 1), Tt = Y(require("node:path"), 1), Rs = require("@storybook/core/common");
var Ns = {
  Nx: "nx.json",
  Turborepo: "turbo.json",
  Lerna: "lerna.json",
  Rush: "rush.json",
  Lage: "lage.config.json"
}, qs = /* @__PURE__ */ o(() => {
  let e = (0, Rs.getProjectRoot)();
  if (!e) return;
  let r = Object.keys(Ns).find((i) => {
    let s = Tt.default.join(e, Ns[i]);
    return (0, Je.existsSync)(s);
  });
  if (r)
    return r;
  if (!(0, Je.existsSync)(Tt.default.join(e, "package.json")))
    return;
  if ((0, Je.readJsonSync)(Tt.default.join(e, "package.json"))?.workspaces)
    return "Workspaces";
}, "getMonorepoType");

// src/telemetry/sanitize.ts
var kr = Y(require("node:path"), 1);
function _s(e) {
  return e.replace(/[-[/{}()*+?.\\^$|]/g, "\\$&");
}
o(_s, "regexpEscape");
function As(e = "") {
  return e.replace(/\u001B\[[0-9;]*m/g, "");
}
o(As, "removeAnsiEscapeCodes");
function Ve(e, t = kr.default.sep) {
  if (!e) return e;
  let r = process.cwd().split(t);
  for (; r.length > 1; ) {
    let n = r.join(t), i = new RegExp(_s(n), "gi");
    e = e.replace(i, "$SNIP");
    let s = r.join(t + t), a = new RegExp(_s(s), "gi");
    e = e.replace(a, "$SNIP"), r.pop();
  }
  return e;
}
o(Ve, "cleanPaths");
function It(e, t = kr.default.sep) {
  try {
    e = {
      ...JSON.parse(JSON.stringify(e)),
      message: As(e.message),
      stack: As(e.stack),
      cause: e.cause,
      name: e.name
    };
    let r = Ve(JSON.stringify(e), t);
    return JSON.parse(r);
  } catch (r) {
    return `Sanitization error: ${r?.message}`;
  }
}
o(It, "sanitizeError");

// src/telemetry/get-framework-info.ts
var js = Y(require("node:path"), 1), Ms = require("@storybook/core/common");
var Af = [
  "html",
  "react",
  "svelte",
  "vue3",
  "preact",
  "server",
  "vue",
  "web-components",
  "angular",
  "ember"
], Df = ["builder-webpack5", "builder-vite"];
function Ds(e, t) {
  let { name: r = "", version: n, dependencies: i, devDependencies: s, peerDependencies: a } = e, c = {
    // We include the framework itself because it may be a renderer too (e.g. angular)
    [r]: n,
    ...i,
    ...s,
    ...a
  };
  return t.map((f) => `@storybook/${f}`).find((f) => c[f]);
}
o(Ds, "findMatchingPackage");
var jf = /* @__PURE__ */ o((e) => {
  let t = js.default.normalize(e).replace(new RegExp(/\\/, "g"), "/");
  return Object.keys(Ms.frameworkPackages).find((n) => t.endsWith(n)) || Ve(e).replace(/.*node_modules[\\/]/, "");
}, "getFrameworkPackageName");
async function Ls(e) {
  if (!e?.framework)
    return {};
  let t = typeof e.framework == "string" ? e.framework : e.framework?.name;
  if (!t)
    return {};
  let r = await Er(t);
  if (!r)
    return {};
  let n = Ds(r, Df), i = Ds(r, Af), s = jf(t), a = typeof e.framework == "object" ? e.framework.options : {};
  return {
    framework: {
      name: s,
      options: a
    },
    builder: n,
    renderer: i
  };
}
o(Ls, "getFrameworkInfo");

// src/telemetry/get-chromatic-version.ts
function $s(e) {
  let t = e.dependencies?.chromatic || e.devDependencies?.chromatic || e.peerDependencies?.chromatic;
  return t || (e.scripts && Object.values(e.scripts).find((r) => r?.match(/chromatic/)) ? "latest" : void 0);
}
o($s, "getChromaticVersionSpecifier");

// src/telemetry/storybook-metadata.ts
var Pr = {
  next: "Next",
  "react-scripts": "CRA",
  gatsby: "Gatsby",
  "@nuxtjs/storybook": "nuxt",
  "@nrwl/storybook": "nx",
  "@vue/cli-service": "vue-cli",
  "@sveltejs/kit": "sveltekit"
}, Or = /* @__PURE__ */ o((e) => Ve(e).replace(/\/dist\/.*/, "").replace(/\.[mc]?[tj]?s[x]?$/, "").replace(/\/register$/, "").replace(/\/manager$/,
"").replace(/\/preset$/, ""), "sanitizeAddonName"), Bs = /* @__PURE__ */ o(async ({
  packageJson: e,
  mainConfig: t
}) => {
  let r = {
    generatedAt: (/* @__PURE__ */ new Date()).getTime(),
    hasCustomBabel: !1,
    hasCustomWebpack: !1,
    hasStaticDirs: !1,
    hasStorybookEslint: !1,
    refCount: 0
  }, n = {
    ...e?.dependencies,
    ...e?.devDependencies,
    ...e?.peerDependencies
  }, i = Object.keys(n).find((w) => !!Pr[w]);
  if (i) {
    let { version: w } = await Ot(i);
    r.metaFramework = {
      name: Pr[i],
      packageName: i,
      version: w
    };
  }
  let s = [
    "playwright",
    "vitest",
    "jest",
    "cypress",
    "nightwatch",
    "webdriver",
    "@web/test-runner",
    "puppeteer",
    "karma",
    "jasmine",
    "chai",
    "testing-library",
    "@ngneat/spectator",
    "wdio",
    "msw",
    "miragejs",
    "sinon"
  ], a = Object.keys(n).filter(
    (w) => s.find((P) => w.includes(P))
  );
  r.testPackages = Object.fromEntries(
    await Promise.all(
      a.map(async (w) => [w, (await Ot(w))?.version])
    )
  );
  let c = qs();
  c && (r.monorepo = c);
  try {
    let w = await (0, Ft.detect)({ cwd: (0, se.getProjectRoot)() }), P = await (0, Ft.getNpmVersion)(w);
    r.packageManager = {
      type: w,
      version: P
    };
  } catch {
  }
  r.hasCustomBabel = !!t.babel, r.hasCustomWebpack = !!t.webpackFinal, r.hasStaticDirs = !!t.staticDirs, typeof t.typescript == "object" && (r.
  typescriptOptions = t.typescript);
  let f = await Ls(t);
  typeof t.refs == "object" && (r.refCount = Object.keys(t.refs).length), typeof t.features == "object" && (r.features = t.features);
  let y = {};
  t.addons && t.addons.forEach((w) => {
    let P, X;
    typeof w == "string" ? P = Or(w) : (w.name.includes("addon-essentials") && (X = w.options), P = Or(w.name)), y[P] = {
      options: X,
      version: void 0
    };
  });
  let u = $s(e);
  u && (y.chromatic = {
    version: void 0,
    versionSpecifier: u,
    options: void 0
  }), (await xr(y)).forEach(({ name: w, version: P }) => {
    y[w].version = P;
  });
  let m = Object.keys(y), l = Object.keys(n).filter((w) => w.includes("storybook") && !m.includes(w)).reduce((w, P) => ({
    ...w,
    [P]: { version: void 0 }
  }), {});
  (await xr(l)).forEach(({ name: w, version: P }) => {
    l[w].version = P;
  });
  let g = n.typescript ? "typescript" : "javascript", S = !!n["eslint-plugin-storybook"], b = (0, se.getStorybookInfo)(e);
  try {
    let { previewConfig: w } = b;
    if (w) {
      let P = await (0, Gs.readConfig)(w), X = !!(P.getFieldNode(["globals"]) || P.getFieldNode(["globalTypes"]));
      r.preview = { ...r.preview, usesGlobals: X };
    }
  } catch {
  }
  let q = l[b.frameworkPackage]?.version;
  return {
    ...r,
    ...f,
    storybookVersion: q,
    storybookVersionSpecifier: b.version,
    language: g,
    storybookPackages: l,
    addons: y,
    hasStorybookEslint: S
  };
}, "computeStorybookMetadata"), Ct, Tr = /* @__PURE__ */ o(async (e) => {
  if (Ct)
    return Ct;
  let t = await Vr(process.cwd()) || {}, r = (e || (0, se.getStorybookConfiguration)(
    String(t?.scripts?.storybook || ""),
    "-c",
    "--config-dir"
  )) ?? ".storybook", n = await (0, se.loadMainConfig)({ configDir: r });
  return Ct = await Bs({ mainConfig: n, packageJson: t }), Ct;
}, "getStorybookMetadata");

// src/telemetry/telemetry.ts
var ta = Y(require("os"), 1);

// ../node_modules/nanoid/index.js
var Ir = require("crypto");

// ../node_modules/nanoid/url-alphabet/index.js
var Us = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../node_modules/nanoid/index.js
var Mf = 128, me, Te, Lf = /* @__PURE__ */ o((e) => {
  !me || me.length < e ? (me = Buffer.allocUnsafe(e * Mf), (0, Ir.randomFillSync)(me), Te = 0) : Te + e > me.length && ((0, Ir.randomFillSync)(
  me), Te = 0), Te += e;
}, "fillPool");
var Ye = /* @__PURE__ */ o((e = 21) => {
  Lf(e -= 0);
  let t = "";
  for (let r = Te - e; r < Te; r++)
    t += Us[me[r] & 63];
  return t;
}, "nanoid");

// src/telemetry/telemetry.ts
var ra = Y(Js(), 1);

// src/telemetry/anonymous-id.ts
var Ys = Y(require("node:path"), 1), Ks = require("child_process"), Hs = require("@storybook/core/common");

// src/telemetry/one-way-hash.ts
var Vs = require("crypto");
var Rt = /* @__PURE__ */ o((e) => {
  let t = (0, Vs.createHash)("sha256");
  return t.update("storybook-telemetry-salt"), t.update(e), t.digest("hex");
}, "oneWayHash");

// src/telemetry/anonymous-id.ts
function $f(e) {
  return e.trim().replace(/#.*$/, "").replace(/^.*@/, "").replace(/^.*\/\//, "").replace(":", "/");
}
o($f, "normalizeGitUrl");
var qt, zs = /* @__PURE__ */ o(() => {
  if (qt)
    return qt;
  let e;
  try {
    let t = (0, Hs.getProjectRoot)(), r = Ys.default.relative(t, process.cwd()), n = (0, Ks.execSync)("git config --local --get remote.origi\
n.url", {
      timeout: 1e3,
      stdio: "pipe"
    });
    e = `${$f(String(n))}${r}`, qt = Rt(e);
  } catch {
  }
  return qt;
}, "getAnonymousProjectId");

// src/telemetry/event-cache.ts
var _t = require("@storybook/core/common");
var Cr = Promise.resolve(), Gf = /* @__PURE__ */ o(async (e, t) => {
  let r = await _t.cache.get("lastEvents") || {};
  r[e] = { body: t, timestamp: Date.now() }, await _t.cache.set("lastEvents", r);
}, "setHelper"), Qs = /* @__PURE__ */ o(async (e, t) => (await Cr, Cr = Gf(e, t), Cr), "set");
var Bf = /* @__PURE__ */ o((e) => {
  let { body: t, timestamp: r } = e;
  return {
    timestamp: r,
    eventType: t?.eventType,
    eventId: t?.eventId,
    sessionId: t?.sessionId
  };
}, "upgradeFields"), Uf = ["init", "upgrade"], Wf = ["build", "dev", "error"], Xs = /* @__PURE__ */ o((e, t) => {
  let r = t.map((n) => e?.[n]).filter(Boolean).sort((n, i) => i.timestamp - n.timestamp);
  return r.length > 0 ? r[0] : void 0;
}, "lastEvent"), Zs = /* @__PURE__ */ o(async (e = void 0) => {
  let t = e || await _t.cache.get("lastEvents") || {}, r = Xs(t, Uf), n = Xs(t, Wf);
  if (r)
    return !n?.timestamp || r.timestamp > n.timestamp ? Bf(r) : void 0;
}, "getPrecedingUpgrade");

// src/telemetry/session-id.ts
var Fr = require("@storybook/core/common");
var Jf = 1e3 * 60 * 60 * 2, Ke;
var Nr = /* @__PURE__ */ o(async () => {
  let e = Date.now();
  if (!Ke) {
    let t = await Fr.cache.get("session");
    t && t.lastUsed >= e - Jf ? Ke = t.id : Ke = Ye();
  }
  return await Fr.cache.set("session", { id: Ke, lastUsed: e }), Ke;
}, "getSessionId");

// src/telemetry/fetch.ts
var ea = global.fetch;

// src/telemetry/telemetry.ts
var Vf = (0, ra.default)(ea), Yf = process.env.STORYBOOK_TELEMETRY_URL || "https://storybook.js.org/event-log", At = [], na = /* @__PURE__ */ o(
(e, t) => {
  Rr[e] = t;
}, "addToGlobalContext"), Kf = /* @__PURE__ */ o(() => {
  try {
    let e = ta.platform();
    return e === "win32" ? "Windows" : e === "darwin" ? "macOS" : e === "linux" ? "Linux" : `Other: ${e}`;
  } catch {
    return "Unknown";
  }
}, "getOperatingSystem"), Rr = {
  inCI: !!process.env.CI,
  isTTY: process.stdout.isTTY,
  platform: Kf(),
  nodeVersion: process.versions.node
}, Hf = /* @__PURE__ */ o(async (e, t, r) => {
  let { eventType: n, payload: i, metadata: s, ...a } = e, c = await Nr(), f = Ye(), y = { ...a, eventType: n, eventId: f, sessionId: c, metadata: s,
  payload: i, context: t };
  return Vf(Yf, {
    method: "post",
    body: JSON.stringify(y),
    headers: { "Content-Type": "application/json" },
    retries: 3,
    retryOn: [503, 504],
    retryDelay: /* @__PURE__ */ o((u) => 2 ** u * (typeof r?.retryDelay == "number" && !Number.isNaN(r?.retryDelay) ? r.retryDelay : 1e3), "\
retryDelay")
  });
}, "prepareRequest");
async function oa(e, t = { retryDelay: 1e3, immediate: !1 }) {
  let { eventType: r, payload: n, metadata: i, ...s } = e, a = t.stripMetadata ? Rr : {
    ...Rr,
    anonymousId: zs()
  }, c;
  try {
    c = Hf(e, a, t), At.push(c), t.immediate ? await Promise.all(At) : await c;
    let f = await Nr(), y = Ye(), u = { ...s, eventType: r, eventId: y, sessionId: f, metadata: i, payload: n, context: a };
    await Qs(r, u);
  } catch {
  } finally {
    At = At.filter((f) => f !== c);
  }
}
o(oa, "sendTelemetry");

// node_modules/chalk/source/vendor/ansi-styles/index.js
var ia = /* @__PURE__ */ o((e = 0) => (t) => `\x1B[${t + e}m`, "wrapAnsi16"), sa = /* @__PURE__ */ o((e = 0) => (t) => `\x1B[${38 + e};5;${t}\
m`, "wrapAnsi256"), aa = /* @__PURE__ */ o((e = 0) => (t, r, n) => `\x1B[${38 + e};2;${t};${r};${n}m`, "wrapAnsi16m"), I = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
}, ky = Object.keys(I.modifier), zf = Object.keys(I.color), Xf = Object.keys(I.bgColor), Py = [...zf, ...Xf];
function Qf() {
  let e = /* @__PURE__ */ new Map();
  for (let [t, r] of Object.entries(I)) {
    for (let [n, i] of Object.entries(r))
      I[n] = {
        open: `\x1B[${i[0]}m`,
        close: `\x1B[${i[1]}m`
      }, r[n] = I[n], e.set(i[0], i[1]);
    Object.defineProperty(I, t, {
      value: r,
      enumerable: !1
    });
  }
  return Object.defineProperty(I, "codes", {
    value: e,
    enumerable: !1
  }), I.color.close = "\x1B[39m", I.bgColor.close = "\x1B[49m", I.color.ansi = ia(), I.color.ansi256 = sa(), I.color.ansi16m = aa(), I.bgColor.
  ansi = ia(10), I.bgColor.ansi256 = sa(10), I.bgColor.ansi16m = aa(10), Object.defineProperties(I, {
    rgbToAnsi256: {
      value(t, r, n) {
        return t === r && r === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 *
        Math.round(r / 255 * 5) + Math.round(n / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(t) {
        let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));
        if (!r)
          return [0, 0, 0];
        let [n] = r;
        n.length === 3 && (n = [...n].map((s) => s + s).join(""));
        let i = Number.parseInt(n, 16);
        return [
          /* eslint-disable no-bitwise */
          i >> 16 & 255,
          i >> 8 & 255,
          i & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: /* @__PURE__ */ o((t) => I.rgbToAnsi256(...I.hexToRgb(t)), "value"),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(t) {
        if (t < 8)
          return 30 + t;
        if (t < 16)
          return 90 + (t - 8);
        let r, n, i;
        if (t >= 232)
          r = ((t - 232) * 10 + 8) / 255, n = r, i = r;
        else {
          t -= 16;
          let c = t % 36;
          r = Math.floor(t / 36) / 5, n = Math.floor(c / 6) / 5, i = c % 6 / 5;
        }
        let s = Math.max(r, n, i) * 2;
        if (s === 0)
          return 30;
        let a = 30 + (Math.round(i) << 2 | Math.round(n) << 1 | Math.round(r));
        return s === 2 && (a += 60), a;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: /* @__PURE__ */ o((t, r, n) => I.ansi256ToAnsi(I.rgbToAnsi256(t, r, n)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ o((t) => I.ansi256ToAnsi(I.hexToAnsi256(t)), "value"),
      enumerable: !1
    }
  }), I;
}
o(Qf, "assembleStyles");
var Zf = Qf(), z = Zf;

// node_modules/chalk/source/vendor/supports-color/index.js
var jt = Y(require("node:process"), 1), ua = Y(require("node:os"), 1), qr = Y(require("node:tty"), 1);
function K(e, t = globalThis.Deno ? globalThis.Deno.args : jt.default.argv) {
  let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
  return n !== -1 && (i === -1 || n < i);
}
o(K, "hasFlag");
var { env: N } = jt.default, Dt;
K("no-color") || K("no-colors") || K("color=false") || K("color=never") ? Dt = 0 : (K("color") || K("colors") || K("color=true") || K("color\
=always")) && (Dt = 1);
function ed() {
  if ("FORCE_COLOR" in N)
    return N.FORCE_COLOR === "true" ? 1 : N.FORCE_COLOR === "false" ? 0 : N.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(N.FORCE_COLOR,
    10), 3);
}
o(ed, "envForceColor");
function td(e) {
  return e === 0 ? !1 : {
    level: e,
    hasBasic: !0,
    has256: e >= 2,
    has16m: e >= 3
  };
}
o(td, "translateLevel");
function rd(e, { streamIsTTY: t, sniffFlags: r = !0 } = {}) {
  let n = ed();
  n !== void 0 && (Dt = n);
  let i = r ? Dt : n;
  if (i === 0)
    return 0;
  if (r) {
    if (K("color=16m") || K("color=full") || K("color=truecolor"))
      return 3;
    if (K("color=256"))
      return 2;
  }
  if ("TF_BUILD" in N && "AGENT_NAME" in N)
    return 1;
  if (e && !t && i === void 0)
    return 0;
  let s = i || 0;
  if (N.TERM === "dumb")
    return s;
  if (jt.default.platform === "win32") {
    let a = ua.default.release().split(".");
    return Number(a[0]) >= 10 && Number(a[2]) >= 10586 ? Number(a[2]) >= 14931 ? 3 : 2 : 1;
  }
  if ("CI" in N)
    return "GITHUB_ACTIONS" in N || "GITEA_ACTIONS" in N ? 3 : ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((a) => a in
    N) || N.CI_NAME === "codeship" ? 1 : s;
  if ("TEAMCITY_VERSION" in N)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(N.TEAMCITY_VERSION) ? 1 : 0;
  if (N.COLORTERM === "truecolor" || N.TERM === "xterm-kitty")
    return 3;
  if ("TERM_PROGRAM" in N) {
    let a = Number.parseInt((N.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (N.TERM_PROGRAM) {
      case "iTerm.app":
        return a >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(N.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(N.TERM) || "COLORTERM" in N ?
  1 : s;
}
o(rd, "_supportsColor");
function ca(e, t = {}) {
  let r = rd(e, {
    streamIsTTY: e && e.isTTY,
    ...t
  });
  return td(r);
}
o(ca, "createSupportsColor");
var nd = {
  stdout: ca({ isTTY: qr.default.isatty(1) }),
  stderr: ca({ isTTY: qr.default.isatty(2) })
}, la = nd;

// node_modules/chalk/source/utilities.js
function fa(e, t, r) {
  let n = e.indexOf(t);
  if (n === -1)
    return e;
  let i = t.length, s = 0, a = "";
  do
    a += e.slice(s, n) + t + r, s = n + i, n = e.indexOf(t, s);
  while (n !== -1);
  return a += e.slice(s), a;
}
o(fa, "stringReplaceAll");
function da(e, t, r, n) {
  let i = 0, s = "";
  do {
    let a = e[n - 1] === "\r";
    s += e.slice(i, a ? n - 1 : n) + t + (a ? `\r
` : `
`) + r, i = n + 1, n = e.indexOf(`
`, i);
  } while (n !== -1);
  return s += e.slice(i), s;
}
o(da, "stringEncaseCRLFWithFirstIndex");

// node_modules/chalk/source/index.js
var { stdout: ma, stderr: pa } = la, _r = Symbol("GENERATOR"), Ie = Symbol("STYLER"), He = Symbol("IS_EMPTY"), ya = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], Ce = /* @__PURE__ */ Object.create(null), od = /* @__PURE__ */ o((e, t = {}) => {
  if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  let r = ma ? ma.level : 0;
  e.level = t.level === void 0 ? r : t.level;
}, "applyOptions");
var id = /* @__PURE__ */ o((e) => {
  let t = /* @__PURE__ */ o((...r) => r.join(" "), "chalk");
  return od(t, e), Object.setPrototypeOf(t, ze.prototype), t;
}, "chalkFactory");
function ze(e) {
  return id(e);
}
o(ze, "createChalk");
Object.setPrototypeOf(ze.prototype, Function.prototype);
for (let [e, t] of Object.entries(z))
  Ce[e] = {
    get() {
      let r = Mt(this, Dr(t.open, t.close, this[Ie]), this[He]);
      return Object.defineProperty(this, e, { value: r }), r;
    }
  };
Ce.visible = {
  get() {
    let e = Mt(this, this[Ie], !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
var Ar = /* @__PURE__ */ o((e, t, r, ...n) => e === "rgb" ? t === "ansi16m" ? z[r].ansi16m(...n) : t === "ansi256" ? z[r].ansi256(z.rgbToAnsi256(
...n)) : z[r].ansi(z.rgbToAnsi(...n)) : e === "hex" ? Ar("rgb", t, r, ...z.hexToRgb(...n)) : z[r][e](...n), "getModelAnsi"), sd = ["rgb", "h\
ex", "ansi256"];
for (let e of sd) {
  Ce[e] = {
    get() {
      let { level: r } = this;
      return function(...n) {
        let i = Dr(Ar(e, ya[r], "color", ...n), z.color.close, this[Ie]);
        return Mt(this, i, this[He]);
      };
    }
  };
  let t = "bg" + e[0].toUpperCase() + e.slice(1);
  Ce[t] = {
    get() {
      let { level: r } = this;
      return function(...n) {
        let i = Dr(Ar(e, ya[r], "bgColor", ...n), z.bgColor.close, this[Ie]);
        return Mt(this, i, this[He]);
      };
    }
  };
}
var ad = Object.defineProperties(() => {
}, {
  ...Ce,
  level: {
    enumerable: !0,
    get() {
      return this[_r].level;
    },
    set(e) {
      this[_r].level = e;
    }
  }
}), Dr = /* @__PURE__ */ o((e, t, r) => {
  let n, i;
  return r === void 0 ? (n = e, i = t) : (n = r.openAll + e, i = t + r.closeAll), {
    open: e,
    close: t,
    openAll: n,
    closeAll: i,
    parent: r
  };
}, "createStyler"), Mt = /* @__PURE__ */ o((e, t, r) => {
  let n = /* @__PURE__ */ o((...i) => cd(n, i.length === 1 ? "" + i[0] : i.join(" ")), "builder");
  return Object.setPrototypeOf(n, ad), n[_r] = e, n[Ie] = t, n[He] = r, n;
}, "createBuilder"), cd = /* @__PURE__ */ o((e, t) => {
  if (e.level <= 0 || !t)
    return e[He] ? "" : t;
  let r = e[Ie];
  if (r === void 0)
    return t;
  let { openAll: n, closeAll: i } = r;
  if (t.includes("\x1B"))
    for (; r !== void 0; )
      t = fa(t, r.close, r.open), r = r.parent;
  let s = t.indexOf(`
`);
  return s !== -1 && (t = da(t, i, n, s)), n + t + i;
}, "applyStyle");
Object.defineProperties(ze.prototype, Ce);
var ud = ze(), Ay = ze({ level: pa ? pa.level : 0 });
var jr = ud;

// src/telemetry/notify.ts
var Mr = require("@storybook/core/common");
var ha = "telemetry-notification-date", Fe = console, ga = /* @__PURE__ */ o(async () => {
  await Mr.cache.get(ha, null) || (Mr.cache.set(ha, Date.now()), Fe.log(), Fe.log(
    `${jr.magenta.bold(
      "attention"
    )} => Storybook now collects completely anonymous telemetry regarding usage.`
  ), Fe.log("This information is used to shape Storybook's roadmap and prioritize features."), Fe.log(
    "You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:"
  ), Fe.log(jr.cyan("https://storybook.js.org/telemetry")), Fe.log());
}, "notify");

// src/telemetry/index.ts
var ld = /* @__PURE__ */ o(async (e, t = {}, r = {}) => {
  e !== "boot" && await ga();
  let n = {
    eventType: e,
    payload: t
  };
  try {
    r?.stripMetadata || (n.metadata = await Tr(r?.configDir));
  } catch (i) {
    n.payload.metadataErrorMessage = It(i).message, r?.enableCrashReports && (n.payload.metadataError = It(i));
  } finally {
    let { error: i } = n.payload;
    i && (n.payload.error = It(i)), (!n.payload.error || r?.enableCrashReports) && (process.env?.STORYBOOK_TELEMETRY_DEBUG && (Lr.logger.info(
    `
[telemetry]`), Lr.logger.info(JSON.stringify(n, null, 2))), await oa(n, r));
  }
}, "telemetry");
