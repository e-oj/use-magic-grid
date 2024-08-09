import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var ta = Object.create;
var _t = Object.defineProperty;
var ra = Object.getOwnPropertyDescriptor;
var na = Object.getOwnPropertyNames;
var oa = Object.getPrototypeOf, ia = Object.prototype.hasOwnProperty;
var o = (e, t) => _t(e, "name", { value: t, configurable: !0 }), v = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var sa = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of na(t))
      !ia.call(e, i) && i !== r && _t(e, i, { get: () => t[i], enumerable: !(n = ra(t, i)) || n.enumerable });
  return e;
};
var Ne = (e, t, r) => (r = e != null ? ta(oa(e)) : {}, sa(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? _t(r, "default", { value: e, enumerable: !0 }) : r,
  e
));

// ../node_modules/walk-up-path/dist/cjs/index.js
var Nr = d((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  Xe.walkUp = void 0;
  var Fr = v("path"), aa = /* @__PURE__ */ o(function* (e) {
    for (e = (0, Fr.resolve)(e); e; ) {
      yield e;
      let t = (0, Fr.dirname)(e);
      if (t === e)
        break;
      e = t;
    }
  }, "walkUp");
  Xe.walkUp = aa;
});

// ../node_modules/isexe/windows.js
var Mr = d((Ed, jr) => {
  jr.exports = Dr;
  Dr.sync = pa;
  var _r = v("fs");
  function ma(e, t) {
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
  o(ma, "checkPathExt");
  function Ar(e, t, r) {
    return !e.isSymbolicLink() && !e.isFile() ? !1 : ma(t, r);
  }
  o(Ar, "checkStat");
  function Dr(e, t, r) {
    _r.stat(e, function(n, i) {
      r(n, n ? !1 : Ar(i, e, t));
    });
  }
  o(Dr, "isexe");
  function pa(e, t) {
    return Ar(_r.statSync(e), e, t);
  }
  o(pa, "sync");
});

// ../node_modules/isexe/mode.js
var Ur = d((Pd, Br) => {
  Br.exports = $r;
  $r.sync = ya;
  var Lr = v("fs");
  function $r(e, t, r) {
    Lr.stat(e, function(n, i) {
      r(n, n ? !1 : Gr(i, t));
    });
  }
  o($r, "isexe");
  function ya(e, t) {
    return Gr(Lr.statSync(e), t);
  }
  o(ya, "sync");
  function Gr(e, t) {
    return e.isFile() && ha(e, t);
  }
  o(Gr, "checkStat");
  function ha(e, t) {
    var r = e.mode, n = e.uid, i = e.gid, s = t.uid !== void 0 ? t.uid : process.getuid && process.getuid(), a = t.gid !== void 0 ? t.gid : process.
    getgid && process.getgid(), c = parseInt("100", 8), f = parseInt("010", 8), y = parseInt("001", 8), u = c | f, h = r & y || r & f && i ===
    a || r & c && n === s || r & u && s === 0;
    return h;
  }
  o(ha, "checkMode");
});

// ../node_modules/isexe/index.js
var Jr = d((Id, Wr) => {
  var Td = v("fs"), Qe;
  process.platform === "win32" || global.TESTING_WINDOWS ? Qe = Mr() : Qe = Ur();
  Wr.exports = At;
  At.sync = ga;
  function At(e, t, r) {
    if (typeof t == "function" && (r = t, t = {}), !r) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(n, i) {
        At(e, t || {}, function(s, a) {
          s ? i(s) : n(a);
        });
      });
    }
    Qe(e, t || {}, function(n, i) {
      n && (n.code === "EACCES" || t && t.ignoreErrors) && (n = null, i = !1), r(n, i);
    });
  }
  o(At, "isexe");
  function ga(e, t) {
    try {
      return Qe.sync(e, t || {});
    } catch (r) {
      if (t && t.ignoreErrors || r.code === "EACCES")
        return !1;
      throw r;
    }
  }
  o(ga, "sync");
});

// ../node_modules/cross-spawn/node_modules/which/which.js
var Qr = d((Fd, Xr) => {
  var me = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", Vr = v("path"), wa = me ? ";" :
  ":", Yr = Jr(), Kr = /* @__PURE__ */ o((e) => Object.assign(new Error(`not found: ${e}`), { code: "ENOENT" }), "getNotFoundError"), Hr = /* @__PURE__ */ o(
  (e, t) => {
    let r = t.colon || wa, n = e.match(/\//) || me && e.match(/\\/) ? [""] : [
      // windows always checks the cwd first
      ...me ? [process.cwd()] : [],
      ...(t.path || process.env.PATH || /* istanbul ignore next: very unusual */
      "").split(r)
    ], i = me ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", s = me ? i.split(r) : [""];
    return me && e.indexOf(".") !== -1 && s[0] !== "" && s.unshift(""), {
      pathEnv: n,
      pathExt: s,
      pathExtExe: i
    };
  }, "getPathInfo"), zr = /* @__PURE__ */ o((e, t, r) => {
    typeof t == "function" && (r = t, t = {}), t || (t = {});
    let { pathEnv: n, pathExt: i, pathExtExe: s } = Hr(e, t), a = [], c = /* @__PURE__ */ o((y) => new Promise((u, h) => {
      if (y === n.length)
        return t.all && a.length ? u(a) : h(Kr(e));
      let m = n[y], l = /^".*"$/.test(m) ? m.slice(1, -1) : m, p = Vr.join(l, e), g = !l && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
      u(f(g, y, 0));
    }), "step"), f = /* @__PURE__ */ o((y, u, h) => new Promise((m, l) => {
      if (h === i.length)
        return m(c(u + 1));
      let p = i[h];
      Yr(y + p, { pathExt: s }, (g, S) => {
        if (!g && S)
          if (t.all)
            a.push(y + p);
          else
            return m(y + p);
        return m(f(y, u, h + 1));
      });
    }), "subStep");
    return r ? c(0).then((y) => r(null, y), r) : c(0);
  }, "which"), Sa = /* @__PURE__ */ o((e, t) => {
    t = t || {};
    let { pathEnv: r, pathExt: n, pathExtExe: i } = Hr(e, t), s = [];
    for (let a = 0; a < r.length; a++) {
      let c = r[a], f = /^".*"$/.test(c) ? c.slice(1, -1) : c, y = Vr.join(f, e), u = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + y : y;
      for (let h = 0; h < n.length; h++) {
        let m = u + n[h];
        try {
          if (Yr.sync(m, { pathExt: i }))
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
    throw Kr(e);
  }, "whichSync");
  Xr.exports = zr;
  zr.sync = Sa;
});

// ../node_modules/path-key/index.js
var jt = d((Rd, Dt) => {
  "use strict";
  var Zr = /* @__PURE__ */ o((e = {}) => {
    let t = e.env || process.env;
    return (e.platform || process.platform) !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
  }, "pathKey");
  Dt.exports = Zr;
  Dt.exports.default = Zr;
});

// ../node_modules/cross-spawn/lib/util/resolveCommand.js
var nn = d((_d, rn) => {
  "use strict";
  var en = v("path"), va = Qr(), ba = jt();
  function tn(e, t) {
    let r = e.options.env || process.env, n = process.cwd(), i = e.options.cwd != null, s = i && process.chdir !== void 0 && !process.chdir.
    disabled;
    if (s)
      try {
        process.chdir(e.options.cwd);
      } catch {
      }
    let a;
    try {
      a = va.sync(e.command, {
        path: r[ba({ env: r })],
        pathExt: t ? en.delimiter : void 0
      });
    } catch {
    } finally {
      s && process.chdir(n);
    }
    return a && (a = en.resolve(i ? e.options.cwd : "", a)), a;
  }
  o(tn, "resolveCommandAttempt");
  function xa(e) {
    return tn(e) || tn(e, !0);
  }
  o(xa, "resolveCommand");
  rn.exports = xa;
});

// ../node_modules/cross-spawn/lib/util/escape.js
var on = d((Dd, Lt) => {
  "use strict";
  var Mt = /([()\][%!^"`<>&|;, *?])/g;
  function Ea(e) {
    return e = e.replace(Mt, "^$1"), e;
  }
  o(Ea, "escapeCommand");
  function ka(e, t) {
    return e = `${e}`, e = e.replace(/(\\*)"/g, '$1$1\\"'), e = e.replace(/(\\*)$/, "$1$1"), e = `"${e}"`, e = e.replace(Mt, "^$1"), t && (e =
    e.replace(Mt, "^$1")), e;
  }
  o(ka, "escapeArgument");
  Lt.exports.command = Ea;
  Lt.exports.argument = ka;
});

// ../node_modules/shebang-regex/index.js
var an = d((Md, sn) => {
  "use strict";
  sn.exports = /^#!(.*)/;
});

// ../node_modules/shebang-command/index.js
var un = d((Ld, cn) => {
  "use strict";
  var Pa = an();
  cn.exports = (e = "") => {
    let t = e.match(Pa);
    if (!t)
      return null;
    let [r, n] = t[0].replace(/#! ?/, "").split(" "), i = r.split("/").pop();
    return i === "env" ? n : n ? `${i} ${n}` : i;
  };
});

// ../node_modules/cross-spawn/lib/util/readShebang.js
var fn = d(($d, ln) => {
  "use strict";
  var $t = v("fs"), Oa = un();
  function Ta(e) {
    let r = Buffer.alloc(150), n;
    try {
      n = $t.openSync(e, "r"), $t.readSync(n, r, 0, 150, 0), $t.closeSync(n);
    } catch {
    }
    return Oa(r.toString());
  }
  o(Ta, "readShebang");
  ln.exports = Ta;
});

// ../node_modules/cross-spawn/lib/parse.js
var yn = d((Bd, pn) => {
  "use strict";
  var Ia = v("path"), dn = nn(), mn = on(), Ca = fn(), Fa = process.platform === "win32", Na = /\.(?:com|exe)$/i, Ra = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function qa(e) {
    e.file = dn(e);
    let t = e.file && Ca(e.file);
    return t ? (e.args.unshift(e.file), e.command = t, dn(e)) : e.file;
  }
  o(qa, "detectShebang");
  function _a(e) {
    if (!Fa)
      return e;
    let t = qa(e), r = !Na.test(t);
    if (e.options.forceShell || r) {
      let n = Ra.test(t);
      e.command = Ia.normalize(e.command), e.command = mn.command(e.command), e.args = e.args.map((s) => mn.argument(s, n));
      let i = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${i}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  o(_a, "parseNonShell");
  function Aa(e, t, r) {
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
    return r.shell ? n : _a(n);
  }
  o(Aa, "parse");
  pn.exports = Aa;
});

// ../node_modules/cross-spawn/lib/enoent.js
var wn = d((Wd, gn) => {
  "use strict";
  var Gt = process.platform === "win32";
  function Bt(e, t) {
    return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${t} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  o(Bt, "notFoundError");
  function Da(e, t) {
    if (!Gt)
      return;
    let r = e.emit;
    e.emit = function(n, i) {
      if (n === "exit") {
        let s = hn(i, t, "spawn");
        if (s)
          return r.call(e, "error", s);
      }
      return r.apply(e, arguments);
    };
  }
  o(Da, "hookChildProcess");
  function hn(e, t) {
    return Gt && e === 1 && !t.file ? Bt(t.original, "spawn") : null;
  }
  o(hn, "verifyENOENT");
  function ja(e, t) {
    return Gt && e === 1 && !t.file ? Bt(t.original, "spawnSync") : null;
  }
  o(ja, "verifyENOENTSync");
  gn.exports = {
    hookChildProcess: Da,
    verifyENOENT: hn,
    verifyENOENTSync: ja,
    notFoundError: Bt
  };
});

// ../node_modules/cross-spawn/index.js
var bn = d((Vd, pe) => {
  "use strict";
  var Sn = v("child_process"), Ut = yn(), Wt = wn();
  function vn(e, t, r) {
    let n = Ut(e, t, r), i = Sn.spawn(n.command, n.args, n.options);
    return Wt.hookChildProcess(i, n), i;
  }
  o(vn, "spawn");
  function Ma(e, t, r) {
    let n = Ut(e, t, r), i = Sn.spawnSync(n.command, n.args, n.options);
    return i.error = i.error || Wt.verifyENOENTSync(i.status, n), i;
  }
  o(Ma, "spawnSync");
  pe.exports = vn;
  pe.exports.spawn = vn;
  pe.exports.sync = Ma;
  pe.exports._parse = Ut;
  pe.exports._enoent = Wt;
});

// ../node_modules/execa/node_modules/strip-final-newline/index.js
var En = d((Kd, xn) => {
  "use strict";
  xn.exports = (e) => {
    let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
    return e[e.length - 1] === t && (e = e.slice(0, e.length - 1)), e[e.length - 1] === r && (e = e.slice(0, e.length - 1)), e;
  };
});

// ../node_modules/npm-run-path/index.js
var On = d((Hd, qe) => {
  "use strict";
  var Re = v("path"), kn = jt(), Pn = /* @__PURE__ */ o((e) => {
    e = {
      cwd: process.cwd(),
      path: process.env[kn()],
      execPath: process.execPath,
      ...e
    };
    let t, r = Re.resolve(e.cwd), n = [];
    for (; t !== r; )
      n.push(Re.join(r, "node_modules/.bin")), t = r, r = Re.resolve(r, "..");
    let i = Re.resolve(e.cwd, e.execPath, "..");
    return n.push(i), n.concat(e.path).join(Re.delimiter);
  }, "npmRunPath");
  qe.exports = Pn;
  qe.exports.default = Pn;
  qe.exports.env = (e) => {
    e = {
      env: process.env,
      ...e
    };
    let t = { ...e.env }, r = kn({ env: t });
    return e.path = t[r], t[r] = qe.exports(e), t;
  };
});

// ../node_modules/mimic-fn/index.js
var In = d((Xd, Jt) => {
  "use strict";
  var Tn = /* @__PURE__ */ o((e, t) => {
    for (let r of Reflect.ownKeys(t))
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    return e;
  }, "mimicFn");
  Jt.exports = Tn;
  Jt.exports.default = Tn;
});

// ../node_modules/onetime/index.js
var Fn = d((Zd, et) => {
  "use strict";
  var La = In(), Ze = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ o((e, t = {}) => {
    if (typeof e != "function")
      throw new TypeError("Expected a function");
    let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
      if (Ze.set(s, ++n), n === 1)
        r = e.apply(this, a), e = null;
      else if (t.throw === !0)
        throw new Error(`Function \`${i}\` can only be called once`);
      return r;
    }, "onetime");
    return La(s, e), Ze.set(s, n), s;
  }, "onetime");
  et.exports = Cn;
  et.exports.default = Cn;
  et.exports.callCount = (e) => {
    if (!Ze.has(e))
      throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    return Ze.get(e);
  };
});

// ../node_modules/execa/node_modules/human-signals/build/src/core.js
var Nn = d((tt) => {
  "use strict";
  Object.defineProperty(tt, "__esModule", { value: !0 });
  tt.SIGNALS = void 0;
  var $a = [
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
  tt.SIGNALS = $a;
});

// ../node_modules/execa/node_modules/human-signals/build/src/realtime.js
var Vt = d((ye) => {
  "use strict";
  Object.defineProperty(ye, "__esModule", { value: !0 });
  ye.SIGRTMAX = ye.getRealtimeSignals = void 0;
  var Ga = /* @__PURE__ */ o(function() {
    let e = qn - Rn + 1;
    return Array.from({ length: e }, Ba);
  }, "getRealtimeSignals");
  ye.getRealtimeSignals = Ga;
  var Ba = /* @__PURE__ */ o(function(e, t) {
    return {
      name: `SIGRT${t + 1}`,
      number: Rn + t,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    };
  }, "getRealtimeSignal"), Rn = 34, qn = 64;
  ye.SIGRTMAX = qn;
});

// ../node_modules/execa/node_modules/human-signals/build/src/signals.js
var _n = d((rt) => {
  "use strict";
  Object.defineProperty(rt, "__esModule", { value: !0 });
  rt.getSignals = void 0;
  var Ua = v("os"), Wa = Nn(), Ja = Vt(), Va = /* @__PURE__ */ o(function() {
    let e = (0, Ja.getRealtimeSignals)();
    return [...Wa.SIGNALS, ...e].map(Ya);
  }, "getSignals");
  rt.getSignals = Va;
  var Ya = /* @__PURE__ */ o(function({
    name: e,
    number: t,
    description: r,
    action: n,
    forced: i = !1,
    standard: s
  }) {
    let {
      signals: { [e]: a }
    } = Ua.constants, c = a !== void 0;
    return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
  }, "normalizeSignal");
});

// ../node_modules/execa/node_modules/human-signals/build/src/main.js
var Dn = d((he) => {
  "use strict";
  Object.defineProperty(he, "__esModule", { value: !0 });
  he.signalsByNumber = he.signalsByName = void 0;
  var Ka = v("os"), An = _n(), Ha = Vt(), za = /* @__PURE__ */ o(function() {
    return (0, An.getSignals)().reduce(Xa, {});
  }, "getSignalsByName"), Xa = /* @__PURE__ */ o(function(e, { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }) {
    return {
      ...e,
      [t]: { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }
    };
  }, "getSignalByName"), Qa = za();
  he.signalsByName = Qa;
  var Za = /* @__PURE__ */ o(function() {
    let e = (0, An.getSignals)(), t = Ha.SIGRTMAX + 1, r = Array.from({ length: t }, (n, i) => ec(i, e));
    return Object.assign({}, ...r);
  }, "getSignalsByNumber"), ec = /* @__PURE__ */ o(function(e, t) {
    let r = tc(e, t);
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
  }, "getSignalByNumber"), tc = /* @__PURE__ */ o(function(e, t) {
    let r = t.find(({ name: n }) => Ka.constants.signals[n] === e);
    return r !== void 0 ? r : t.find((n) => n.number === e);
  }, "findSignalByNumber"), rc = Za();
  he.signalsByNumber = rc;
});

// ../node_modules/execa/lib/error.js
var Mn = d((cm, jn) => {
  "use strict";
  var { signalsByName: nc } = Dn(), oc = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s,
  isCanceled: a }) => e ? `timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was\
 killed with ${n} (${i})` : s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), ic = /* @__PURE__ */ o(({
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
    let m = i === void 0 ? void 0 : nc[i].description, l = n && n.code, g = `Command ${oc({ timedOut: f, timeout: h, errorCode: l, signal: i,
    signalDescription: m, exitCode: s, isCanceled: y })}: ${a}`, S = Object.prototype.toString.call(n) === "[object Error]", x = S ? `${g}
${n.message}` : g, _ = [x, t, e].filter(Boolean).join(`
`);
    return S ? (n.originalMessage = n.message, n.message = _) : n = new Error(_), n.shortMessage = x, n.command = a, n.escapedCommand = c, n.
    exitCode = s, n.signal = i, n.signalDescription = m, n.stdout = e, n.stderr = t, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
    bufferedData, n.failed = !0, n.timedOut = !!f, n.isCanceled = y, n.killed = u && !f, n;
  }, "makeError");
  jn.exports = ic;
});

// ../node_modules/execa/lib/stdio.js
var $n = d((lm, Yt) => {
  "use strict";
  var nt = ["stdin", "stdout", "stderr"], sc = /* @__PURE__ */ o((e) => nt.some((t) => e[t] !== void 0), "hasAlias"), Ln = /* @__PURE__ */ o(
  (e) => {
    if (!e)
      return;
    let { stdio: t } = e;
    if (t === void 0)
      return nt.map((n) => e[n]);
    if (sc(e))
      throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${nt.map((n) => `\`${n}\``).join(", ")}`);
    if (typeof t == "string")
      return t;
    if (!Array.isArray(t))
      throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
    let r = Math.max(t.length, nt.length);
    return Array.from({ length: r }, (n, i) => t[i]);
  }, "normalizeStdio");
  Yt.exports = Ln;
  Yt.exports.node = (e) => {
    let t = Ln(e);
    return t === "ipc" ? "ipc" : t === void 0 || typeof t == "string" ? [t, t, t, "ipc"] : t.includes("ipc") ? t : [...t, "ipc"];
  };
});

// ../node_modules/signal-exit/signals.js
var Gn = d((dm, ot) => {
  ot.exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
  ];
  process.platform !== "win32" && ot.exports.push(
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
  process.platform === "linux" && ot.exports.push(
    "SIGIO",
    "SIGPOLL",
    "SIGPWR",
    "SIGSTKFLT",
    "SIGUNUSED"
  );
});

// ../node_modules/signal-exit/index.js
var Vn = d((mm, Se) => {
  var I = global.process, ae = /* @__PURE__ */ o(function(e) {
    return e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.reallyExit == "func\
tion" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "function";
  }, "processOk");
  ae(I) ? (Bn = v("assert"), ge = Gn(), Un = /^win/i.test(I.platform), _e = v("events"), typeof _e != "function" && (_e = _e.EventEmitter), I.
  __signal_exit_emitter__ ? D = I.__signal_exit_emitter__ : (D = I.__signal_exit_emitter__ = new _e(), D.count = 0, D.emitted = {}), D.infinite ||
  (D.setMaxListeners(1 / 0), D.infinite = !0), Se.exports = function(e, t) {
    if (!ae(global.process))
      return function() {
      };
    Bn.equal(typeof e, "function", "a callback must be provided for exit handler"), we === !1 && Kt();
    var r = "exit";
    t && t.alwaysLast && (r = "afterexit");
    var n = /* @__PURE__ */ o(function() {
      D.removeListener(r, e), D.listeners("exit").length === 0 && D.listeners("afterexit").length === 0 && it();
    }, "remove");
    return D.on(r, e), n;
  }, it = /* @__PURE__ */ o(function() {
    !we || !ae(global.process) || (we = !1, ge.forEach(function(t) {
      try {
        I.removeListener(t, st[t]);
      } catch {
      }
    }), I.emit = at, I.reallyExit = Ht, D.count -= 1);
  }, "unload"), Se.exports.unload = it, ce = /* @__PURE__ */ o(function(t, r, n) {
    D.emitted[t] || (D.emitted[t] = !0, D.emit(t, r, n));
  }, "emit"), st = {}, ge.forEach(function(e) {
    st[e] = /* @__PURE__ */ o(function() {
      if (ae(global.process)) {
        var r = I.listeners(e);
        r.length === D.count && (it(), ce("exit", null, e), ce("afterexit", null, e), Un && e === "SIGHUP" && (e = "SIGINT"), I.kill(I.pid, e));
      }
    }, "listener");
  }), Se.exports.signals = function() {
    return ge;
  }, we = !1, Kt = /* @__PURE__ */ o(function() {
    we || !ae(global.process) || (we = !0, D.count += 1, ge = ge.filter(function(t) {
      try {
        return I.on(t, st[t]), !0;
      } catch {
        return !1;
      }
    }), I.emit = Jn, I.reallyExit = Wn);
  }, "load"), Se.exports.load = Kt, Ht = I.reallyExit, Wn = /* @__PURE__ */ o(function(t) {
    ae(global.process) && (I.exitCode = t || /* istanbul ignore next */
    0, ce("exit", I.exitCode, null), ce("afterexit", I.exitCode, null), Ht.call(I, I.exitCode));
  }, "processReallyExit"), at = I.emit, Jn = /* @__PURE__ */ o(function(t, r) {
    if (t === "exit" && ae(global.process)) {
      r !== void 0 && (I.exitCode = r);
      var n = at.apply(this, arguments);
      return ce("exit", I.exitCode, null), ce("afterexit", I.exitCode, null), n;
    } else
      return at.apply(this, arguments);
  }, "processEmit")) : Se.exports = function() {
    return function() {
    };
  };
  var Bn, ge, Un, _e, D, it, ce, st, we, Kt, Ht, Wn, at, Jn;
});

// ../node_modules/execa/lib/kill.js
var Kn = d((ym, Yn) => {
  "use strict";
  var ac = v("os"), cc = Vn(), uc = 1e3 * 5, lc = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
    let n = e(t);
    return fc(e, t, r, n), n;
  }, "spawnedKill"), fc = /* @__PURE__ */ o((e, t, r, n) => {
    if (!dc(t, r, n))
      return;
    let i = pc(r), s = setTimeout(() => {
      e("SIGKILL");
    }, i);
    s.unref && s.unref();
  }, "setKillTimeout"), dc = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => mc(e) && t !== !1 && r, "shouldForceKill"), mc = /* @__PURE__ */ o(
  (e) => e === ac.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), pc = /* @__PURE__ */ o(({
  forceKillAfterTimeout: e = !0 }) => {
    if (e === !0)
      return uc;
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e;
  }, "getForceKillAfterTimeout"), yc = /* @__PURE__ */ o((e, t) => {
    e.kill() && (t.isCanceled = !0);
  }, "spawnedCancel"), hc = /* @__PURE__ */ o((e, t, r) => {
    e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
  }, "timeoutKill"), gc = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
    if (t === 0 || t === void 0)
      return n;
    let i, s = new Promise((c, f) => {
      i = setTimeout(() => {
        hc(e, r, f);
      }, t);
    }), a = n.finally(() => {
      clearTimeout(i);
    });
    return Promise.race([s, a]);
  }, "setupTimeout"), wc = /* @__PURE__ */ o(({ timeout: e }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0))
      throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  }, "validateTimeout"), Sc = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
    if (!t || r)
      return n;
    let i = cc(() => {
      e.kill();
    });
    return n.finally(() => {
      i();
    });
  }, "setExitHandler");
  Yn.exports = {
    spawnedKill: lc,
    spawnedCancel: yc,
    setupTimeout: gc,
    validateTimeout: wc,
    setExitHandler: Sc
  };
});

// ../node_modules/execa/node_modules/is-stream/index.js
var zn = d((gm, Hn) => {
  "use strict";
  var Q = /* @__PURE__ */ o((e) => e !== null && typeof e == "object" && typeof e.pipe == "function", "isStream");
  Q.writable = (e) => Q(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
  Q.readable = (e) => Q(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object";
  Q.duplex = (e) => Q.writable(e) && Q.readable(e);
  Q.transform = (e) => Q.duplex(e) && typeof e._transform == "function";
  Hn.exports = Q;
});

// ../node_modules/get-stream/buffer-stream.js
var Qn = d((Sm, Xn) => {
  "use strict";
  var { PassThrough: vc } = v("stream");
  Xn.exports = (e) => {
    e = { ...e };
    let { array: t } = e, { encoding: r } = e, n = r === "buffer", i = !1;
    t ? i = !(r || n) : r = r || "utf8", n && (r = null);
    let s = new vc({ objectMode: i });
    r && s.setEncoding(r);
    let a = 0, c = [];
    return s.on("data", (f) => {
      c.push(f), i ? a = c.length : a += f.length;
    }), s.getBufferedValue = () => t ? c : n ? Buffer.concat(c, a) : c.join(""), s.getBufferedLength = () => a, s;
  };
});

// ../node_modules/get-stream/index.js
var Zn = d((vm, Ae) => {
  "use strict";
  var { constants: bc } = v("buffer"), xc = v("stream"), { promisify: Ec } = v("util"), kc = Qn(), Pc = Ec(xc.pipeline), ct = class extends Error {
    static {
      o(this, "MaxBufferError");
    }
    constructor() {
      super("maxBuffer exceeded"), this.name = "MaxBufferError";
    }
  };
  async function zt(e, t) {
    if (!e)
      throw new Error("Expected a stream");
    t = {
      maxBuffer: 1 / 0,
      ...t
    };
    let { maxBuffer: r } = t, n = kc(t);
    return await new Promise((i, s) => {
      let a = /* @__PURE__ */ o((c) => {
        c && n.getBufferedLength() <= bc.MAX_LENGTH && (c.bufferedData = n.getBufferedValue()), s(c);
      }, "rejectPromise");
      (async () => {
        try {
          await Pc(e, n), i();
        } catch (c) {
          a(c);
        }
      })(), n.on("data", () => {
        n.getBufferedLength() > r && a(new ct());
      });
    }), n.getBufferedValue();
  }
  o(zt, "getStream");
  Ae.exports = zt;
  Ae.exports.buffer = (e, t) => zt(e, { ...t, encoding: "buffer" });
  Ae.exports.array = (e, t) => zt(e, { ...t, array: !0 });
  Ae.exports.MaxBufferError = ct;
});

// ../node_modules/merge-stream/index.js
var to = d((xm, eo) => {
  "use strict";
  var { PassThrough: Oc } = v("stream");
  eo.exports = function() {
    var e = [], t = new Oc({ objectMode: !0 });
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
var io = d((km, oo) => {
  "use strict";
  var no = zn(), ro = Zn(), Tc = to(), Ic = /* @__PURE__ */ o((e, t) => {
    t === void 0 || e.stdin === void 0 || (no(t) ? t.pipe(e.stdin) : e.stdin.end(t));
  }, "handleInput"), Cc = /* @__PURE__ */ o((e, { all: t }) => {
    if (!t || !e.stdout && !e.stderr)
      return;
    let r = Tc();
    return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
  }, "makeAllStream"), Xt = /* @__PURE__ */ o(async (e, t) => {
    if (e) {
      e.destroy();
      try {
        return await t;
      } catch (r) {
        return r.bufferedData;
      }
    }
  }, "getBufferedData"), Qt = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
    if (!(!e || !r))
      return t ? ro(e, { encoding: t, maxBuffer: n }) : ro.buffer(e, { maxBuffer: n });
  }, "getStreamPromise"), Fc = /* @__PURE__ */ o(async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
    let c = Qt(e, { encoding: n, buffer: i, maxBuffer: s }), f = Qt(t, { encoding: n, buffer: i, maxBuffer: s }), y = Qt(r, { encoding: n, buffer: i,
    maxBuffer: s * 2 });
    try {
      return await Promise.all([a, c, f, y]);
    } catch (u) {
      return Promise.all([
        { error: u, signal: u.signal, timedOut: u.timedOut },
        Xt(e, c),
        Xt(t, f),
        Xt(r, y)
      ]);
    }
  }, "getSpawnedResult"), Nc = /* @__PURE__ */ o(({ input: e }) => {
    if (no(e))
      throw new TypeError("The `input` option cannot be a stream in sync mode");
  }, "validateInputSync");
  oo.exports = {
    handleInput: Ic,
    makeAllStream: Cc,
    getSpawnedResult: Fc,
    validateInputSync: Nc
  };
});

// ../node_modules/execa/lib/promise.js
var ao = d((Om, so) => {
  "use strict";
  var Rc = (async () => {
  })().constructor.prototype, qc = ["then", "catch", "finally"].map((e) => [
    e,
    Reflect.getOwnPropertyDescriptor(Rc, e)
  ]), _c = /* @__PURE__ */ o((e, t) => {
    for (let [r, n] of qc) {
      let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
      Reflect.defineProperty(e, r, { ...n, value: i });
    }
    return e;
  }, "mergePromise"), Ac = /* @__PURE__ */ o((e) => new Promise((t, r) => {
    e.on("exit", (n, i) => {
      t({ exitCode: n, signal: i });
    }), e.on("error", (n) => {
      r(n);
    }), e.stdin && e.stdin.on("error", (n) => {
      r(n);
    });
  }), "getSpawnedPromise");
  so.exports = {
    mergePromise: _c,
    getSpawnedPromise: Ac
  };
});

// ../node_modules/execa/lib/command.js
var lo = d((Im, uo) => {
  "use strict";
  var co = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), Dc = /^[\w.-]+$/, jc = /"/g, Mc = /* @__PURE__ */ o(
  (e) => typeof e != "string" || Dc.test(e) ? e : `"${e.replace(jc, '\\"')}"`, "escapeArg"), Lc = /* @__PURE__ */ o((e, t) => co(e, t).join(
  " "), "joinCommand"), $c = /* @__PURE__ */ o((e, t) => co(e, t).map((r) => Mc(r)).join(" "), "getEscapedCommand"), Gc = / +/g, Bc = /* @__PURE__ */ o(
  (e) => {
    let t = [];
    for (let r of e.trim().split(Gc)) {
      let n = t[t.length - 1];
      n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
    }
    return t;
  }, "parseCommand");
  uo.exports = {
    joinCommand: Lc,
    getEscapedCommand: $c,
    parseCommand: Bc
  };
});

// ../node_modules/execa/index.js
var wo = d((Fm, ve) => {
  "use strict";
  var Uc = v("path"), Zt = v("child_process"), Wc = bn(), Jc = En(), Vc = On(), Yc = Fn(), ut = Mn(), mo = $n(), { spawnedKill: Kc, spawnedCancel: Hc,
  setupTimeout: zc, validateTimeout: Xc, setExitHandler: Qc } = Kn(), { handleInput: Zc, getSpawnedResult: eu, makeAllStream: tu, validateInputSync: ru } = io(),
  { mergePromise: fo, getSpawnedPromise: nu } = ao(), { joinCommand: po, parseCommand: yo, getEscapedCommand: ho } = lo(), ou = 1e3 * 1e3 * 100,
  iu = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
    let s = t ? { ...process.env, ...e } : e;
    return r ? Vc.env({ env: s, cwd: n, execPath: i }) : s;
  }, "getEnv"), go = /* @__PURE__ */ o((e, t, r = {}) => {
    let n = Wc._parse(e, t, r);
    return e = n.command, t = n.args, r = n.options, r = {
      maxBuffer: ou,
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
    }, r.env = iu(r), r.stdio = mo(r), process.platform === "win32" && Uc.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e, args: t,
    options: r, parsed: n };
  }, "handleArguments"), De = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !Buffer.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
  Jc(t) : t, "handleOutput"), lt = /* @__PURE__ */ o((e, t, r) => {
    let n = go(e, t, r), i = po(e, t), s = ho(e, t);
    Xc(n.options);
    let a;
    try {
      a = Zt.spawn(n.file, n.args, n.options);
    } catch (l) {
      let p = new Zt.ChildProcess(), g = Promise.reject(ut({
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
      return fo(p, g);
    }
    let c = nu(a), f = zc(a, n.options, c), y = Qc(a, n.options, f), u = { isCanceled: !1 };
    a.kill = Kc.bind(null, a.kill.bind(a)), a.cancel = Hc.bind(null, a, u);
    let m = Yc(/* @__PURE__ */ o(async () => {
      let [{ error: l, exitCode: p, signal: g, timedOut: S }, x, _, w] = await eu(a, n.options, y), O = De(n.options, x), X = De(n.options, _),
      Fe = De(n.options, w);
      if (l || p !== 0 || g !== null) {
        let ze = ut({
          error: l,
          exitCode: p,
          signal: g,
          stdout: O,
          stderr: X,
          all: Fe,
          command: i,
          escapedCommand: s,
          parsed: n,
          timedOut: S,
          isCanceled: u.isCanceled,
          killed: a.killed
        });
        if (!n.options.reject)
          return ze;
        throw ze;
      }
      return {
        command: i,
        escapedCommand: s,
        exitCode: 0,
        stdout: O,
        stderr: X,
        all: Fe,
        failed: !1,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      };
    }, "handlePromise"));
    return Zc(a, n.options.input), a.all = tu(a, n.options), fo(a, m);
  }, "execa");
  ve.exports = lt;
  ve.exports.sync = (e, t, r) => {
    let n = go(e, t, r), i = po(e, t), s = ho(e, t);
    ru(n.options);
    let a;
    try {
      a = Zt.spawnSync(n.file, n.args, n.options);
    } catch (y) {
      throw ut({
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
    let c = De(n.options, a.stdout, a.error), f = De(n.options, a.stderr, a.error);
    if (a.error || a.status !== 0 || a.signal !== null) {
      let y = ut({
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
  ve.exports.command = (e, t) => {
    let [r, ...n] = yo(e);
    return lt(r, n, t);
  };
  ve.exports.commandSync = (e, t) => {
    let [r, ...n] = yo(e);
    return lt.sync(r, n, t);
  };
  ve.exports.node = (e, t, r = {}) => {
    t && !Array.isArray(t) && typeof t == "object" && (r = t, t = []);
    let n = mo.node(r), i = process.execArgv.filter((c) => !c.startsWith("--inspect")), {
      nodePath: s = process.execPath,
      nodeOptions: a = i
    } = r;
    return lt(
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
var xo = d((bo) => {
  var su = Object.create, mt = Object.defineProperty, au = Object.getOwnPropertyDescriptor, cu = Object.getOwnPropertyNames, uu = Object.getPrototypeOf,
  lu = Object.prototype.hasOwnProperty, So = /* @__PURE__ */ o((e) => mt(e, "__esModule", { value: !0 }), "__markAsModule"), fu = /* @__PURE__ */ o(
  (e, t) => {
    So(e);
    for (var r in t)
      mt(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), du = /* @__PURE__ */ o((e, t, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let n of cu(t))
        !lu.call(e, n) && n !== "default" && mt(e, n, { get: /* @__PURE__ */ o(() => t[n], "get"), enumerable: !(r = au(t, n)) || r.enumerable });
    return e;
  }, "__reExport"), tr = /* @__PURE__ */ o((e) => du(So(mt(e != null ? su(uu(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: /* @__PURE__ */ o(
  () => e.default, "get"), enumerable: !0 } : { value: e, enumerable: !0 })), e), "__toModule");
  fu(bo, {
    clearCache: /* @__PURE__ */ o(() => gu, "clearCache"),
    detect: /* @__PURE__ */ o(() => yu, "detect"),
    getNpmVersion: /* @__PURE__ */ o(() => hu, "getNpmVersion")
  });
  var mu = tr(v("fs")), ft = tr(v("path")), vo = tr(wo());
  async function dt(e) {
    try {
      return await mu.promises.access(e), !0;
    } catch {
      return !1;
    }
  }
  o(dt, "pathExists");
  var ue = /* @__PURE__ */ new Map();
  function er(e) {
    let t = `has_global_${e}`;
    return ue.has(t) ? Promise.resolve(ue.get(t)) : (0, vo.default)(e, ["--version"]).then((r) => /^\d+.\d+.\d+$/.test(r.stdout)).then((r) => (ue.
    set(t, r), r)).catch(() => !1);
  }
  o(er, "hasGlobalInstallation");
  function pu(e = ".") {
    let t = `lockfile_${e}`;
    return ue.has(t) ? Promise.resolve(ue.get(t)) : Promise.all([
      dt((0, ft.resolve)(e, "yarn.lock")),
      dt((0, ft.resolve)(e, "package-lock.json")),
      dt((0, ft.resolve)(e, "pnpm-lock.yaml")),
      dt((0, ft.resolve)(e, "bun.lockb"))
    ]).then(([r, n, i, s]) => {
      let a = null;
      return r ? a = "yarn" : i ? a = "pnpm" : s ? a = "bun" : n && (a = "npm"), ue.set(t, a), a;
    });
  }
  o(pu, "getTypeofLockFile");
  var yu = /* @__PURE__ */ o(async ({
    cwd: e,
    includeGlobalBun: t
  } = {}) => {
    let r = await pu(e);
    if (r)
      return r;
    let [n, i, s] = await Promise.all([
      er("yarn"),
      er("pnpm"),
      t && er("bun")
    ]);
    return n ? "yarn" : i ? "pnpm" : s ? "bun" : "npm";
  }, "detect");
  function hu(e) {
    return (0, vo.default)(e || "npm", ["--version"]).then((t) => t.stdout);
  }
  o(hu, "getNpmVersion");
  function gu() {
    return ue.clear();
  }
  o(gu, "clearCache");
});

// ../node_modules/universalify/index.js
var j = d((rr) => {
  "use strict";
  rr.fromCallback = function(e) {
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
  rr.fromPromise = function(e) {
    return Object.defineProperty(function(...t) {
      let r = t[t.length - 1];
      if (typeof r != "function") return e.apply(this, t);
      e.apply(this, t.slice(0, -1)).then((n) => r(null, n), r);
    }, "name", { value: e.name });
  };
});

// ../node_modules/graceful-fs/polyfills.js
var ko = d((Am, Eo) => {
  var re = v("constants"), wu = process.cwd, pt = null, Su = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    return pt || (pt = wu.call(process)), pt;
  };
  try {
    process.cwd();
  } catch {
  }
  typeof process.chdir == "function" && (nr = process.chdir, process.chdir = function(e) {
    pt = null, nr.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, nr));
  var nr;
  Eo.exports = vu;
  function vu(e) {
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
    }), Su === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(u) {
      function h(m, l, p) {
        var g = Date.now(), S = 0;
        u(m, l, /* @__PURE__ */ o(function x(_) {
          if (_ && (_.code === "EACCES" || _.code === "EPERM" || _.code === "EBUSY") && Date.now() - g < 6e4) {
            setTimeout(function() {
              e.stat(l, function(w, O) {
                w && w.code === "ENOENT" ? u(m, l, x) : p(_);
              });
            }, S), S < 100 && (S += 10);
            return;
          }
          p && p(_);
        }, "CB"));
      }
      return o(h, "rename"), Object.setPrototypeOf && Object.setPrototypeOf(h, u), h;
    }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(u) {
      function h(m, l, p, g, S, x) {
        var _;
        if (x && typeof x == "function") {
          var w = 0;
          _ = /* @__PURE__ */ o(function(O, X, Fe) {
            if (O && O.code === "EAGAIN" && w < 10)
              return w++, u.call(e, m, l, p, g, S, _);
            x.apply(this, arguments);
          }, "callback");
        }
        return u.call(e, m, l, p, g, S, _);
      }
      return o(h, "read"), Object.setPrototypeOf && Object.setPrototypeOf(h, u), h;
    }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(u) {
      return function(h, m, l, p, g) {
        for (var S = 0; ; )
          try {
            return u.call(e, h, m, l, p, g);
          } catch (x) {
            if (x.code === "EAGAIN" && S < 10) {
              S++;
              continue;
            }
            throw x;
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
              u.close(g, function(x) {
                l && l(S || x);
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
          u.futimes(S, m, l, function(x) {
            u.close(S, function(_) {
              p && p(x || _);
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
  o(vu, "patch");
});

// ../node_modules/graceful-fs/legacy-streams.js
var To = d((jm, Oo) => {
  var Po = v("stream").Stream;
  Oo.exports = bu;
  function bu(e) {
    return {
      ReadStream: t,
      WriteStream: r
    };
    function t(n, i) {
      if (!(this instanceof t)) return new t(n, i);
      Po.call(this);
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
      Po.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten =
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
  o(bu, "legacy");
});

// ../node_modules/graceful-fs/clone.js
var Co = d((Lm, Io) => {
  "use strict";
  Io.exports = Eu;
  var xu = Object.getPrototypeOf || function(e) {
    return e.__proto__;
  };
  function Eu(e) {
    if (e === null || typeof e != "object")
      return e;
    if (e instanceof Object)
      var t = { __proto__: xu(e) };
    else
      var t = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    }), t;
  }
  o(Eu, "clone");
});

// ../node_modules/graceful-fs/graceful-fs.js
var xe = d((Gm, sr) => {
  var N = v("fs"), ku = ko(), Pu = To(), Ou = Co(), yt = v("util"), B, gt;
  typeof Symbol == "function" && typeof Symbol.for == "function" ? (B = Symbol.for("graceful-fs.queue"), gt = Symbol.for("graceful-fs.previo\
us")) : (B = "___graceful-fs.queue", gt = "___graceful-fs.previous");
  function Tu() {
  }
  o(Tu, "noop");
  function Ro(e, t) {
    Object.defineProperty(e, B, {
      get: /* @__PURE__ */ o(function() {
        return t;
      }, "get")
    });
  }
  o(Ro, "publishQueue");
  var le = Tu;
  yt.debuglog ? le = yt.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (le = /* @__PURE__ */ o(function() {
    var e = yt.format.apply(yt, arguments);
    e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
  }, "debug"));
  N[B] || (Fo = global[B] || [], Ro(N, Fo), N.close = function(e) {
    function t(r, n) {
      return e.call(N, r, function(i) {
        i || No(), typeof n == "function" && n.apply(this, arguments);
      });
    }
    return o(t, "close"), Object.defineProperty(t, gt, {
      value: e
    }), t;
  }(N.close), N.closeSync = function(e) {
    function t(r) {
      e.apply(N, arguments), No();
    }
    return o(t, "closeSync"), Object.defineProperty(t, gt, {
      value: e
    }), t;
  }(N.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    le(N[B]), v("assert").equal(N[B].length, 0);
  }));
  var Fo;
  global[B] || Ro(global, N[B]);
  sr.exports = or(Ou(N));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !N.__patched && (sr.exports = or(N), N.__patched = !0);
  function or(e) {
    ku(e), e.gracefulify = or, e.createReadStream = X, e.createWriteStream = Fe;
    var t = e.readFile;
    e.readFile = r;
    function r(b, k, E) {
      return typeof k == "function" && (E = k, k = null), L(b, k, E);
      function L($, A, F, q) {
        return t($, A, function(P) {
          P && (P.code === "EMFILE" || P.code === "ENFILE") ? be([L, [$, A, F], P, q || Date.now(), Date.now()]) : typeof F == "function" &&
          F.apply(this, arguments);
        });
      }
      o(L, "go$readFile");
    }
    o(r, "readFile");
    var n = e.writeFile;
    e.writeFile = i;
    function i(b, k, E, L) {
      return typeof E == "function" && (L = E, E = null), $(b, k, E, L);
      function $(A, F, q, P, G) {
        return n(A, F, q, function(T) {
          T && (T.code === "EMFILE" || T.code === "ENFILE") ? be([$, [A, F, q, P], T, G || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      o($, "go$writeFile");
    }
    o(i, "writeFile");
    var s = e.appendFile;
    s && (e.appendFile = a);
    function a(b, k, E, L) {
      return typeof E == "function" && (L = E, E = null), $(b, k, E, L);
      function $(A, F, q, P, G) {
        return s(A, F, q, function(T) {
          T && (T.code === "EMFILE" || T.code === "ENFILE") ? be([$, [A, F, q, P], T, G || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      o($, "go$appendFile");
    }
    o(a, "appendFile");
    var c = e.copyFile;
    c && (e.copyFile = f);
    function f(b, k, E, L) {
      return typeof E == "function" && (L = E, E = 0), $(b, k, E, L);
      function $(A, F, q, P, G) {
        return c(A, F, q, function(T) {
          T && (T.code === "EMFILE" || T.code === "ENFILE") ? be([$, [A, F, q, P], T, G || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      o($, "go$copyFile");
    }
    o(f, "copyFile");
    var y = e.readdir;
    e.readdir = h;
    var u = /^v[0-5]\./;
    function h(b, k, E) {
      typeof k == "function" && (E = k, k = null);
      var L = u.test(process.version) ? /* @__PURE__ */ o(function(F, q, P, G) {
        return y(F, $(
          F,
          q,
          P,
          G
        ));
      }, "go$readdir") : /* @__PURE__ */ o(function(F, q, P, G) {
        return y(F, q, $(
          F,
          q,
          P,
          G
        ));
      }, "go$readdir");
      return L(b, k, E);
      function $(A, F, q, P) {
        return function(G, T) {
          G && (G.code === "EMFILE" || G.code === "ENFILE") ? be([
            L,
            [A, F, q],
            G,
            P || Date.now(),
            Date.now()
          ]) : (T && T.sort && T.sort(), typeof q == "function" && q.call(this, G, T));
        };
      }
    }
    if (o(h, "readdir"), process.version.substr(0, 4) === "v0.8") {
      var m = Pu(e);
      x = m.ReadStream, w = m.WriteStream;
    }
    var l = e.ReadStream;
    l && (x.prototype = Object.create(l.prototype), x.prototype.open = _);
    var p = e.WriteStream;
    p && (w.prototype = Object.create(p.prototype), w.prototype.open = O), Object.defineProperty(e, "ReadStream", {
      get: /* @__PURE__ */ o(function() {
        return x;
      }, "get"),
      set: /* @__PURE__ */ o(function(b) {
        x = b;
      }, "set"),
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "WriteStream", {
      get: /* @__PURE__ */ o(function() {
        return w;
      }, "get"),
      set: /* @__PURE__ */ o(function(b) {
        w = b;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var g = x;
    Object.defineProperty(e, "FileReadStream", {
      get: /* @__PURE__ */ o(function() {
        return g;
      }, "get"),
      set: /* @__PURE__ */ o(function(b) {
        g = b;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    var S = w;
    Object.defineProperty(e, "FileWriteStream", {
      get: /* @__PURE__ */ o(function() {
        return S;
      }, "get"),
      set: /* @__PURE__ */ o(function(b) {
        S = b;
      }, "set"),
      enumerable: !0,
      configurable: !0
    });
    function x(b, k) {
      return this instanceof x ? (l.apply(this, arguments), this) : x.apply(Object.create(x.prototype), arguments);
    }
    o(x, "ReadStream");
    function _() {
      var b = this;
      qt(b.path, b.flags, b.mode, function(k, E) {
        k ? (b.autoClose && b.destroy(), b.emit("error", k)) : (b.fd = E, b.emit("open", E), b.read());
      });
    }
    o(_, "ReadStream$open");
    function w(b, k) {
      return this instanceof w ? (p.apply(this, arguments), this) : w.apply(Object.create(w.prototype), arguments);
    }
    o(w, "WriteStream");
    function O() {
      var b = this;
      qt(b.path, b.flags, b.mode, function(k, E) {
        k ? (b.destroy(), b.emit("error", k)) : (b.fd = E, b.emit("open", E));
      });
    }
    o(O, "WriteStream$open");
    function X(b, k) {
      return new e.ReadStream(b, k);
    }
    o(X, "createReadStream");
    function Fe(b, k) {
      return new e.WriteStream(b, k);
    }
    o(Fe, "createWriteStream");
    var ze = e.open;
    e.open = qt;
    function qt(b, k, E, L) {
      return typeof E == "function" && (L = E, E = null), $(b, k, E, L);
      function $(A, F, q, P, G) {
        return ze(A, F, q, function(T, dd) {
          T && (T.code === "EMFILE" || T.code === "ENFILE") ? be([$, [A, F, q, P], T, G || Date.now(), Date.now()]) : typeof P == "function" &&
          P.apply(this, arguments);
        });
      }
      o($, "go$open");
    }
    return o(qt, "open"), e;
  }
  o(or, "patch");
  function be(e) {
    le("ENQUEUE", e[0].name, e[1]), N[B].push(e), ir();
  }
  o(be, "enqueue");
  var ht;
  function No() {
    for (var e = Date.now(), t = 0; t < N[B].length; ++t)
      N[B][t].length > 2 && (N[B][t][3] = e, N[B][t][4] = e);
    ir();
  }
  o(No, "resetQueue");
  function ir() {
    if (clearTimeout(ht), ht = void 0, N[B].length !== 0) {
      var e = N[B].shift(), t = e[0], r = e[1], n = e[2], i = e[3], s = e[4];
      if (i === void 0)
        le("RETRY", t.name, r), t.apply(null, r);
      else if (Date.now() - i >= 6e4) {
        le("TIMEOUT", t.name, r);
        var a = r.pop();
        typeof a == "function" && a.call(null, n);
      } else {
        var c = Date.now() - s, f = Math.max(s - i, 1), y = Math.min(f * 1.2, 100);
        c >= y ? (le("RETRY", t.name, r), t.apply(null, r.concat([i]))) : N[B].push(e);
      }
      ht === void 0 && (ht = setTimeout(ir, 0));
    }
  }
  o(ir, "retry");
});

// ../node_modules/fs-extra/lib/fs/index.js
var J = d((ee) => {
  "use strict";
  var qo = j().fromCallback, W = xe(), Iu = [
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
  ].filter((e) => typeof W[e] == "function");
  Object.assign(ee, W);
  Iu.forEach((e) => {
    ee[e] = qo(W[e]);
  });
  ee.exists = function(e, t) {
    return typeof t == "function" ? W.exists(e, t) : new Promise((r) => W.exists(e, r));
  };
  ee.read = function(e, t, r, n, i, s) {
    return typeof s == "function" ? W.read(e, t, r, n, i, s) : new Promise((a, c) => {
      W.read(e, t, r, n, i, (f, y, u) => {
        if (f) return c(f);
        a({ bytesRead: y, buffer: u });
      });
    });
  };
  ee.write = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? W.write(e, t, ...r) : new Promise((n, i) => {
      W.write(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesWritten: a, buffer: c });
      });
    });
  };
  ee.readv = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? W.readv(e, t, ...r) : new Promise((n, i) => {
      W.readv(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesRead: a, buffers: c });
      });
    });
  };
  ee.writev = function(e, t, ...r) {
    return typeof r[r.length - 1] == "function" ? W.writev(e, t, ...r) : new Promise((n, i) => {
      W.writev(e, t, ...r, (s, a, c) => {
        if (s) return i(s);
        n({ bytesWritten: a, buffers: c });
      });
    });
  };
  typeof W.realpath.native == "function" ? ee.realpath.native = qo(W.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
});

// ../node_modules/fs-extra/lib/mkdirs/utils.js
var Ao = d((Wm, _o) => {
  "use strict";
  var Cu = v("path");
  _o.exports.checkPath = /* @__PURE__ */ o(function(t) {
    if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(Cu.parse(t).root, ""))) {
      let n = new Error(`Path contains invalid characters: ${t}`);
      throw n.code = "EINVAL", n;
    }
  }, "checkPath");
});

// ../node_modules/fs-extra/lib/mkdirs/make-dir.js
var Lo = d((Vm, ar) => {
  "use strict";
  var Do = J(), { checkPath: jo } = Ao(), Mo = /* @__PURE__ */ o((e) => {
    let t = { mode: 511 };
    return typeof e == "number" ? e : { ...t, ...e }.mode;
  }, "getMode");
  ar.exports.makeDir = async (e, t) => (jo(e), Do.mkdir(e, {
    mode: Mo(t),
    recursive: !0
  }));
  ar.exports.makeDirSync = (e, t) => (jo(e), Do.mkdirSync(e, {
    mode: Mo(t),
    recursive: !0
  }));
});

// ../node_modules/fs-extra/lib/mkdirs/index.js
var H = d((Km, $o) => {
  "use strict";
  var Fu = j().fromPromise, { makeDir: Nu, makeDirSync: cr } = Lo(), ur = Fu(Nu);
  $o.exports = {
    mkdirs: ur,
    mkdirsSync: cr,
    // alias
    mkdirp: ur,
    mkdirpSync: cr,
    ensureDir: ur,
    ensureDirSync: cr
  };
});

// ../node_modules/fs-extra/lib/path-exists/index.js
var ne = d((Hm, Bo) => {
  "use strict";
  var Ru = j().fromPromise, Go = J();
  function qu(e) {
    return Go.access(e).then(() => !0).catch(() => !1);
  }
  o(qu, "pathExists");
  Bo.exports = {
    pathExists: Ru(qu),
    pathExistsSync: Go.existsSync
  };
});

// ../node_modules/fs-extra/lib/util/utimes.js
var lr = d((Xm, Uo) => {
  "use strict";
  var Ee = J(), _u = j().fromPromise;
  async function Au(e, t, r) {
    let n = await Ee.open(e, "r+"), i = null;
    try {
      await Ee.futimes(n, t, r);
    } finally {
      try {
        await Ee.close(n);
      } catch (s) {
        i = s;
      }
    }
    if (i)
      throw i;
  }
  o(Au, "utimesMillis");
  function Du(e, t, r) {
    let n = Ee.openSync(e, "r+");
    return Ee.futimesSync(n, t, r), Ee.closeSync(n);
  }
  o(Du, "utimesMillisSync");
  Uo.exports = {
    utimesMillis: _u(Au),
    utimesMillisSync: Du
  };
});

// ../node_modules/fs-extra/lib/util/stat.js
var fe = d((Zm, Yo) => {
  "use strict";
  var ke = J(), M = v("path"), Wo = j().fromPromise;
  function ju(e, t, r) {
    let n = r.dereference ? (i) => ke.stat(i, { bigint: !0 }) : (i) => ke.lstat(i, { bigint: !0 });
    return Promise.all([
      n(e),
      n(t).catch((i) => {
        if (i.code === "ENOENT") return null;
        throw i;
      })
    ]).then(([i, s]) => ({ srcStat: i, destStat: s }));
  }
  o(ju, "getStats");
  function Mu(e, t, r) {
    let n, i = r.dereference ? (a) => ke.statSync(a, { bigint: !0 }) : (a) => ke.lstatSync(a, { bigint: !0 }), s = i(e);
    try {
      n = i(t);
    } catch (a) {
      if (a.code === "ENOENT") return { srcStat: s, destStat: null };
      throw a;
    }
    return { srcStat: s, destStat: n };
  }
  o(Mu, "getStatsSync");
  async function Lu(e, t, r, n) {
    let { srcStat: i, destStat: s } = await ju(e, t, n);
    if (s) {
      if (je(i, s)) {
        let a = M.basename(e), c = M.basename(t);
        if (r === "move" && a !== c && a.toLowerCase() === c.toLowerCase())
          return { srcStat: i, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
      if (!i.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && fr(e, t))
      throw new Error(wt(e, t, r));
    return { srcStat: i, destStat: s };
  }
  o(Lu, "checkPaths");
  function $u(e, t, r, n) {
    let { srcStat: i, destStat: s } = Mu(e, t, n);
    if (s) {
      if (je(i, s)) {
        let a = M.basename(e), c = M.basename(t);
        if (r === "move" && a !== c && a.toLowerCase() === c.toLowerCase())
          return { srcStat: i, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (i.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
      if (!i.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
    }
    if (i.isDirectory() && fr(e, t))
      throw new Error(wt(e, t, r));
    return { srcStat: i, destStat: s };
  }
  o($u, "checkPathsSync");
  async function Jo(e, t, r, n) {
    let i = M.resolve(M.dirname(e)), s = M.resolve(M.dirname(r));
    if (s === i || s === M.parse(s).root) return;
    let a;
    try {
      a = await ke.stat(s, { bigint: !0 });
    } catch (c) {
      if (c.code === "ENOENT") return;
      throw c;
    }
    if (je(t, a))
      throw new Error(wt(e, r, n));
    return Jo(e, t, s, n);
  }
  o(Jo, "checkParentPaths");
  function Vo(e, t, r, n) {
    let i = M.resolve(M.dirname(e)), s = M.resolve(M.dirname(r));
    if (s === i || s === M.parse(s).root) return;
    let a;
    try {
      a = ke.statSync(s, { bigint: !0 });
    } catch (c) {
      if (c.code === "ENOENT") return;
      throw c;
    }
    if (je(t, a))
      throw new Error(wt(e, r, n));
    return Vo(e, t, s, n);
  }
  o(Vo, "checkParentPathsSync");
  function je(e, t) {
    return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
  }
  o(je, "areIdentical");
  function fr(e, t) {
    let r = M.resolve(e).split(M.sep).filter((i) => i), n = M.resolve(t).split(M.sep).filter((i) => i);
    return r.every((i, s) => n[s] === i);
  }
  o(fr, "isSrcSubdir");
  function wt(e, t, r) {
    return `Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`;
  }
  o(wt, "errMsg");
  Yo.exports = {
    // checkPaths
    checkPaths: Wo(Lu),
    checkPathsSync: $u,
    // checkParent
    checkParentPaths: Wo(Jo),
    checkParentPathsSync: Vo,
    // Misc
    isSrcSubdir: fr,
    areIdentical: je
  };
});

// ../node_modules/fs-extra/lib/copy/copy.js
var Qo = d((tp, Xo) => {
  "use strict";
  var U = J(), Me = v("path"), { mkdirs: Gu } = H(), { pathExists: Bu } = ne(), { utimesMillis: Uu } = lr(), Le = fe();
  async function Wu(e, t, r = {}) {
    typeof r == "function" && (r = { filter: r }), r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ? !!r.overwrite :
    r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0001"
    );
    let { srcStat: n, destStat: i } = await Le.checkPaths(e, t, "copy", r);
    if (await Le.checkParentPaths(e, n, t, "copy"), !await Ho(e, t, r)) return;
    let a = Me.dirname(t);
    await Bu(a) || await Gu(a), await zo(i, e, t, r);
  }
  o(Wu, "copy");
  async function Ho(e, t, r) {
    return r.filter ? r.filter(e, t) : !0;
  }
  o(Ho, "runFilter");
  async function zo(e, t, r, n) {
    let s = await (n.dereference ? U.stat : U.lstat)(t);
    if (s.isDirectory()) return Ku(s, e, t, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return Ju(s, e, t, r, n);
    if (s.isSymbolicLink()) return Hu(e, t, r, n);
    throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(
    `Unknown file: ${t}`);
  }
  o(zo, "getStatsAndPerformCopy");
  async function Ju(e, t, r, n, i) {
    if (!t) return Ko(e, r, n, i);
    if (i.overwrite)
      return await U.unlink(n), Ko(e, r, n, i);
    if (i.errorOnExist)
      throw new Error(`'${n}' already exists`);
  }
  o(Ju, "onFile");
  async function Ko(e, t, r, n) {
    if (await U.copyFile(t, r), n.preserveTimestamps) {
      Vu(e.mode) && await Yu(r, e.mode);
      let i = await U.stat(t);
      await Uu(r, i.atime, i.mtime);
    }
    return U.chmod(r, e.mode);
  }
  o(Ko, "copyFile");
  function Vu(e) {
    return (e & 128) === 0;
  }
  o(Vu, "fileIsNotWritable");
  function Yu(e, t) {
    return U.chmod(e, t | 128);
  }
  o(Yu, "makeFileWritable");
  async function Ku(e, t, r, n, i) {
    t || await U.mkdir(n);
    let s = await U.readdir(r);
    await Promise.all(s.map(async (a) => {
      let c = Me.join(r, a), f = Me.join(n, a);
      if (!await Ho(c, f, i)) return;
      let { destStat: u } = await Le.checkPaths(c, f, "copy", i);
      return zo(u, c, f, i);
    })), t || await U.chmod(n, e.mode);
  }
  o(Ku, "onDir");
  async function Hu(e, t, r, n) {
    let i = await U.readlink(t);
    if (n.dereference && (i = Me.resolve(process.cwd(), i)), !e)
      return U.symlink(i, r);
    let s = null;
    try {
      s = await U.readlink(r);
    } catch (a) {
      if (a.code === "EINVAL" || a.code === "UNKNOWN") return U.symlink(i, r);
      throw a;
    }
    if (n.dereference && (s = Me.resolve(process.cwd(), s)), Le.isSrcSubdir(i, s))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${s}'.`);
    if (Le.isSrcSubdir(s, i))
      throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
    return await U.unlink(r), U.symlink(i, r);
  }
  o(Hu, "onLink");
  Xo.exports = Wu;
});

// ../node_modules/fs-extra/lib/copy/copy-sync.js
var ni = d((np, ri) => {
  "use strict";
  var V = xe(), $e = v("path"), zu = H().mkdirsSync, Xu = lr().utimesMillisSync, Ge = fe();
  function Qu(e, t, r) {
    typeof r == "function" && (r = { filter: r }), r = r || {}, r.clobber = "clobber" in r ? !!r.clobber : !0, r.overwrite = "overwrite" in r ?
    !!r.overwrite : r.clobber, r.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
      `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
      "Warning",
      "fs-extra-WARN0002"
    );
    let { srcStat: n, destStat: i } = Ge.checkPathsSync(e, t, "copy", r);
    if (Ge.checkParentPathsSync(e, n, t, "copy"), r.filter && !r.filter(e, t)) return;
    let s = $e.dirname(t);
    return V.existsSync(s) || zu(s), Zo(i, e, t, r);
  }
  o(Qu, "copySync");
  function Zo(e, t, r, n) {
    let s = (n.dereference ? V.statSync : V.lstatSync)(t);
    if (s.isDirectory()) return il(s, e, t, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return Zu(s, e, t, r, n);
    if (s.isSymbolicLink()) return cl(e, t, r, n);
    throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(
    `Unknown file: ${t}`);
  }
  o(Zo, "getStats");
  function Zu(e, t, r, n, i) {
    return t ? el(e, r, n, i) : ei(e, r, n, i);
  }
  o(Zu, "onFile");
  function el(e, t, r, n) {
    if (n.overwrite)
      return V.unlinkSync(r), ei(e, t, r, n);
    if (n.errorOnExist)
      throw new Error(`'${r}' already exists`);
  }
  o(el, "mayCopyFile");
  function ei(e, t, r, n) {
    return V.copyFileSync(t, r), n.preserveTimestamps && tl(e.mode, t, r), dr(r, e.mode);
  }
  o(ei, "copyFile");
  function tl(e, t, r) {
    return rl(e) && nl(r, e), ol(t, r);
  }
  o(tl, "handleTimestamps");
  function rl(e) {
    return (e & 128) === 0;
  }
  o(rl, "fileIsNotWritable");
  function nl(e, t) {
    return dr(e, t | 128);
  }
  o(nl, "makeFileWritable");
  function dr(e, t) {
    return V.chmodSync(e, t);
  }
  o(dr, "setDestMode");
  function ol(e, t) {
    let r = V.statSync(e);
    return Xu(t, r.atime, r.mtime);
  }
  o(ol, "setDestTimestamps");
  function il(e, t, r, n, i) {
    return t ? ti(r, n, i) : sl(e.mode, r, n, i);
  }
  o(il, "onDir");
  function sl(e, t, r, n) {
    return V.mkdirSync(r), ti(t, r, n), dr(r, e);
  }
  o(sl, "mkDirAndCopy");
  function ti(e, t, r) {
    V.readdirSync(e).forEach((n) => al(n, e, t, r));
  }
  o(ti, "copyDir");
  function al(e, t, r, n) {
    let i = $e.join(t, e), s = $e.join(r, e);
    if (n.filter && !n.filter(i, s)) return;
    let { destStat: a } = Ge.checkPathsSync(i, s, "copy", n);
    return Zo(a, i, s, n);
  }
  o(al, "copyDirItem");
  function cl(e, t, r, n) {
    let i = V.readlinkSync(t);
    if (n.dereference && (i = $e.resolve(process.cwd(), i)), e) {
      let s;
      try {
        s = V.readlinkSync(r);
      } catch (a) {
        if (a.code === "EINVAL" || a.code === "UNKNOWN") return V.symlinkSync(i, r);
        throw a;
      }
      if (n.dereference && (s = $e.resolve(process.cwd(), s)), Ge.isSrcSubdir(i, s))
        throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${s}'.`);
      if (Ge.isSrcSubdir(s, i))
        throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
      return ul(i, r);
    } else
      return V.symlinkSync(i, r);
  }
  o(cl, "onLink");
  function ul(e, t) {
    return V.unlinkSync(t), V.symlinkSync(e, t);
  }
  o(ul, "copyLink");
  ri.exports = Qu;
});

// ../node_modules/fs-extra/lib/copy/index.js
var St = d((ip, oi) => {
  "use strict";
  var ll = j().fromPromise;
  oi.exports = {
    copy: ll(Qo()),
    copySync: ni()
  };
});

// ../node_modules/fs-extra/lib/remove/index.js
var Be = d((sp, si) => {
  "use strict";
  var ii = xe(), fl = j().fromCallback;
  function dl(e, t) {
    ii.rm(e, { recursive: !0, force: !0 }, t);
  }
  o(dl, "remove");
  function ml(e) {
    ii.rmSync(e, { recursive: !0, force: !0 });
  }
  o(ml, "removeSync");
  si.exports = {
    remove: fl(dl),
    removeSync: ml
  };
});

// ../node_modules/fs-extra/lib/empty/index.js
var pi = d((cp, mi) => {
  "use strict";
  var pl = j().fromPromise, ui = J(), li = v("path"), fi = H(), di = Be(), ai = pl(/* @__PURE__ */ o(async function(t) {
    let r;
    try {
      r = await ui.readdir(t);
    } catch {
      return fi.mkdirs(t);
    }
    return Promise.all(r.map((n) => di.remove(li.join(t, n))));
  }, "emptyDir"));
  function ci(e) {
    let t;
    try {
      t = ui.readdirSync(e);
    } catch {
      return fi.mkdirsSync(e);
    }
    t.forEach((r) => {
      r = li.join(e, r), di.removeSync(r);
    });
  }
  o(ci, "emptyDirSync");
  mi.exports = {
    emptyDirSync: ci,
    emptydirSync: ci,
    emptyDir: ai,
    emptydir: ai
  };
});

// ../node_modules/fs-extra/lib/ensure/file.js
var wi = d((lp, gi) => {
  "use strict";
  var yl = j().fromPromise, yi = v("path"), te = J(), hi = H();
  async function hl(e) {
    let t;
    try {
      t = await te.stat(e);
    } catch {
    }
    if (t && t.isFile()) return;
    let r = yi.dirname(e), n = null;
    try {
      n = await te.stat(r);
    } catch (i) {
      if (i.code === "ENOENT") {
        await hi.mkdirs(r), await te.writeFile(e, "");
        return;
      } else
        throw i;
    }
    n.isDirectory() ? await te.writeFile(e, "") : await te.readdir(r);
  }
  o(hl, "createFile");
  function gl(e) {
    let t;
    try {
      t = te.statSync(e);
    } catch {
    }
    if (t && t.isFile()) return;
    let r = yi.dirname(e);
    try {
      te.statSync(r).isDirectory() || te.readdirSync(r);
    } catch (n) {
      if (n && n.code === "ENOENT") hi.mkdirsSync(r);
      else throw n;
    }
    te.writeFileSync(e, "");
  }
  o(gl, "createFileSync");
  gi.exports = {
    createFile: yl(hl),
    createFileSync: gl
  };
});

// ../node_modules/fs-extra/lib/ensure/link.js
var Ei = d((dp, xi) => {
  "use strict";
  var wl = j().fromPromise, Si = v("path"), oe = J(), vi = H(), { pathExists: Sl } = ne(), { areIdentical: bi } = fe();
  async function vl(e, t) {
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
    if (r && bi(n, r)) return;
    let i = Si.dirname(t);
    await Sl(i) || await vi.mkdirs(i), await oe.link(e, t);
  }
  o(vl, "createLink");
  function bl(e, t) {
    let r;
    try {
      r = oe.lstatSync(t);
    } catch {
    }
    try {
      let s = oe.lstatSync(e);
      if (r && bi(s, r)) return;
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    let n = Si.dirname(t);
    return oe.existsSync(n) || vi.mkdirsSync(n), oe.linkSync(e, t);
  }
  o(bl, "createLinkSync");
  xi.exports = {
    createLink: wl(vl),
    createLinkSync: bl
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-paths.js
var Pi = d((pp, ki) => {
  "use strict";
  var ie = v("path"), Ue = J(), { pathExists: xl } = ne(), El = j().fromPromise;
  async function kl(e, t) {
    if (ie.isAbsolute(e)) {
      try {
        await Ue.lstat(e);
      } catch (s) {
        throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
      }
      return {
        toCwd: e,
        toDst: e
      };
    }
    let r = ie.dirname(t), n = ie.join(r, e);
    if (await xl(n))
      return {
        toCwd: n,
        toDst: e
      };
    try {
      await Ue.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
    }
    return {
      toCwd: e,
      toDst: ie.relative(r, e)
    };
  }
  o(kl, "symlinkPaths");
  function Pl(e, t) {
    if (ie.isAbsolute(e)) {
      if (!Ue.existsSync(e)) throw new Error("absolute srcpath does not exist");
      return {
        toCwd: e,
        toDst: e
      };
    }
    let r = ie.dirname(t), n = ie.join(r, e);
    if (Ue.existsSync(n))
      return {
        toCwd: n,
        toDst: e
      };
    if (!Ue.existsSync(e)) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: ie.relative(r, e)
    };
  }
  o(Pl, "symlinkPathsSync");
  ki.exports = {
    symlinkPaths: El(kl),
    symlinkPathsSync: Pl
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink-type.js
var Ii = d((hp, Ti) => {
  "use strict";
  var Oi = J(), Ol = j().fromPromise;
  async function Tl(e, t) {
    if (t) return t;
    let r;
    try {
      r = await Oi.lstat(e);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  o(Tl, "symlinkType");
  function Il(e, t) {
    if (t) return t;
    let r;
    try {
      r = Oi.lstatSync(e);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  o(Il, "symlinkTypeSync");
  Ti.exports = {
    symlinkType: Ol(Tl),
    symlinkTypeSync: Il
  };
});

// ../node_modules/fs-extra/lib/ensure/symlink.js
var Ri = d((wp, Ni) => {
  "use strict";
  var Cl = j().fromPromise, Ci = v("path"), Z = J(), { mkdirs: Fl, mkdirsSync: Nl } = H(), { symlinkPaths: Rl, symlinkPathsSync: ql } = Pi(),
  { symlinkType: _l, symlinkTypeSync: Al } = Ii(), { pathExists: Dl } = ne(), { areIdentical: Fi } = fe();
  async function jl(e, t, r) {
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
      if (Fi(c, f)) return;
    }
    let i = await Rl(e, t);
    e = i.toDst;
    let s = await _l(i.toCwd, r), a = Ci.dirname(t);
    return await Dl(a) || await Fl(a), Z.symlink(e, t, s);
  }
  o(jl, "createSymlink");
  function Ml(e, t, r) {
    let n;
    try {
      n = Z.lstatSync(t);
    } catch {
    }
    if (n && n.isSymbolicLink()) {
      let c = Z.statSync(e), f = Z.statSync(t);
      if (Fi(c, f)) return;
    }
    let i = ql(e, t);
    e = i.toDst, r = Al(i.toCwd, r);
    let s = Ci.dirname(t);
    return Z.existsSync(s) || Nl(s), Z.symlinkSync(e, t, r);
  }
  o(Ml, "createSymlinkSync");
  Ni.exports = {
    createSymlink: Cl(jl),
    createSymlinkSync: Ml
  };
});

// ../node_modules/fs-extra/lib/ensure/index.js
var $i = d((vp, Li) => {
  "use strict";
  var { createFile: qi, createFileSync: _i } = wi(), { createLink: Ai, createLinkSync: Di } = Ei(), { createSymlink: ji, createSymlinkSync: Mi } = Ri();
  Li.exports = {
    // file
    createFile: qi,
    createFileSync: _i,
    ensureFile: qi,
    ensureFileSync: _i,
    // link
    createLink: Ai,
    createLinkSync: Di,
    ensureLink: Ai,
    ensureLinkSync: Di,
    // symlink
    createSymlink: ji,
    createSymlinkSync: Mi,
    ensureSymlink: ji,
    ensureSymlinkSync: Mi
  };
});

// ../node_modules/jsonfile/utils.js
var vt = d((bp, Gi) => {
  function Ll(e, { EOL: t = `
`, finalEOL: r = !0, replacer: n = null, spaces: i } = {}) {
    let s = r ? t : "";
    return JSON.stringify(e, n, i).replace(/\n/g, t) + s;
  }
  o(Ll, "stringify");
  function $l(e) {
    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
  }
  o($l, "stripBom");
  Gi.exports = { stringify: Ll, stripBom: $l };
});

// ../node_modules/jsonfile/index.js
var Ji = d((Ep, Wi) => {
  var Pe;
  try {
    Pe = xe();
  } catch {
    Pe = v("fs");
  }
  var bt = j(), { stringify: Bi, stripBom: Ui } = vt();
  async function Gl(e, t = {}) {
    typeof t == "string" && (t = { encoding: t });
    let r = t.fs || Pe, n = "throws" in t ? t.throws : !0, i = await bt.fromCallback(r.readFile)(e, t);
    i = Ui(i);
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
  o(Gl, "_readFile");
  var Bl = bt.fromPromise(Gl);
  function Ul(e, t = {}) {
    typeof t == "string" && (t = { encoding: t });
    let r = t.fs || Pe, n = "throws" in t ? t.throws : !0;
    try {
      let i = r.readFileSync(e, t);
      return i = Ui(i), JSON.parse(i, t.reviver);
    } catch (i) {
      if (n)
        throw i.message = `${e}: ${i.message}`, i;
      return null;
    }
  }
  o(Ul, "readFileSync");
  async function Wl(e, t, r = {}) {
    let n = r.fs || Pe, i = Bi(t, r);
    await bt.fromCallback(n.writeFile)(e, i, r);
  }
  o(Wl, "_writeFile");
  var Jl = bt.fromPromise(Wl);
  function Vl(e, t, r = {}) {
    let n = r.fs || Pe, i = Bi(t, r);
    return n.writeFileSync(e, i, r);
  }
  o(Vl, "writeFileSync");
  var Yl = {
    readFile: Bl,
    readFileSync: Ul,
    writeFile: Jl,
    writeFileSync: Vl
  };
  Wi.exports = Yl;
});

// ../node_modules/fs-extra/lib/json/jsonfile.js
var Yi = d((Pp, Vi) => {
  "use strict";
  var xt = Ji();
  Vi.exports = {
    // jsonfile exports
    readJson: xt.readFile,
    readJsonSync: xt.readFileSync,
    writeJson: xt.writeFile,
    writeJsonSync: xt.writeFileSync
  };
});

// ../node_modules/fs-extra/lib/output-file/index.js
var Et = d((Op, zi) => {
  "use strict";
  var Kl = j().fromPromise, mr = J(), Ki = v("path"), Hi = H(), Hl = ne().pathExists;
  async function zl(e, t, r = "utf-8") {
    let n = Ki.dirname(e);
    return await Hl(n) || await Hi.mkdirs(n), mr.writeFile(e, t, r);
  }
  o(zl, "outputFile");
  function Xl(e, ...t) {
    let r = Ki.dirname(e);
    mr.existsSync(r) || Hi.mkdirsSync(r), mr.writeFileSync(e, ...t);
  }
  o(Xl, "outputFileSync");
  zi.exports = {
    outputFile: Kl(zl),
    outputFileSync: Xl
  };
});

// ../node_modules/fs-extra/lib/json/output-json.js
var Qi = d((Ip, Xi) => {
  "use strict";
  var { stringify: Ql } = vt(), { outputFile: Zl } = Et();
  async function ef(e, t, r = {}) {
    let n = Ql(t, r);
    await Zl(e, n, r);
  }
  o(ef, "outputJson");
  Xi.exports = ef;
});

// ../node_modules/fs-extra/lib/json/output-json-sync.js
var es = d((Fp, Zi) => {
  "use strict";
  var { stringify: tf } = vt(), { outputFileSync: rf } = Et();
  function nf(e, t, r) {
    let n = tf(t, r);
    rf(e, n, r);
  }
  o(nf, "outputJsonSync");
  Zi.exports = nf;
});

// ../node_modules/fs-extra/lib/json/index.js
var rs = d((Rp, ts) => {
  "use strict";
  var of = j().fromPromise, Y = Yi();
  Y.outputJson = of(Qi());
  Y.outputJsonSync = es();
  Y.outputJSON = Y.outputJson;
  Y.outputJSONSync = Y.outputJsonSync;
  Y.writeJSON = Y.writeJson;
  Y.writeJSONSync = Y.writeJsonSync;
  Y.readJSON = Y.readJson;
  Y.readJSONSync = Y.readJsonSync;
  ts.exports = Y;
});

// ../node_modules/fs-extra/lib/move/move.js
var as = d((qp, ss) => {
  "use strict";
  var sf = J(), ns = v("path"), { copy: af } = St(), { remove: is } = Be(), { mkdirp: cf } = H(), { pathExists: uf } = ne(), os = fe();
  async function lf(e, t, r = {}) {
    let n = r.overwrite || r.clobber || !1, { srcStat: i, isChangingCase: s = !1 } = await os.checkPaths(e, t, "move", r);
    await os.checkParentPaths(e, i, t, "move");
    let a = ns.dirname(t);
    return ns.parse(a).root !== a && await cf(a), ff(e, t, n, s);
  }
  o(lf, "move");
  async function ff(e, t, r, n) {
    if (!n) {
      if (r)
        await is(t);
      else if (await uf(t))
        throw new Error("dest already exists.");
    }
    try {
      await sf.rename(e, t);
    } catch (i) {
      if (i.code !== "EXDEV")
        throw i;
      await df(e, t, r);
    }
  }
  o(ff, "doRename");
  async function df(e, t, r) {
    return await af(e, t, {
      overwrite: r,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), is(e);
  }
  o(df, "moveAcrossDevice");
  ss.exports = lf;
});

// ../node_modules/fs-extra/lib/move/move-sync.js
var ds = d((Ap, fs) => {
  "use strict";
  var us = xe(), yr = v("path"), mf = St().copySync, ls = Be().removeSync, pf = H().mkdirpSync, cs = fe();
  function yf(e, t, r) {
    r = r || {};
    let n = r.overwrite || r.clobber || !1, { srcStat: i, isChangingCase: s = !1 } = cs.checkPathsSync(e, t, "move", r);
    return cs.checkParentPathsSync(e, i, t, "move"), hf(t) || pf(yr.dirname(t)), gf(e, t, n, s);
  }
  o(yf, "moveSync");
  function hf(e) {
    let t = yr.dirname(e);
    return yr.parse(t).root === t;
  }
  o(hf, "isParentRoot");
  function gf(e, t, r, n) {
    if (n) return pr(e, t, r);
    if (r)
      return ls(t), pr(e, t, r);
    if (us.existsSync(t)) throw new Error("dest already exists.");
    return pr(e, t, r);
  }
  o(gf, "doRename");
  function pr(e, t, r) {
    try {
      us.renameSync(e, t);
    } catch (n) {
      if (n.code !== "EXDEV") throw n;
      return wf(e, t, r);
    }
  }
  o(pr, "rename");
  function wf(e, t, r) {
    return mf(e, t, {
      overwrite: r,
      errorOnExist: !0,
      preserveTimestamps: !0
    }), ls(e);
  }
  o(wf, "moveAcrossDevice");
  fs.exports = yf;
});

// ../node_modules/fs-extra/lib/move/index.js
var ps = d((jp, ms) => {
  "use strict";
  var Sf = j().fromPromise;
  ms.exports = {
    move: Sf(as()),
    moveSync: ds()
  };
});

// ../node_modules/fs-extra/lib/index.js
var hr = d((Mp, ys) => {
  "use strict";
  ys.exports = {
    // Export promiseified graceful-fs:
    ...J(),
    // Export extra methods:
    ...St(),
    ...pi(),
    ...$i(),
    ...rs(),
    ...H(),
    ...ps(),
    ...Et(),
    ...ne(),
    ...Be()
  };
});

// ../node_modules/fetch-retry/index.js
var Ns = d((wy, Fs) => {
  "use strict";
  Fs.exports = function(e, t) {
    if (t = t || {}, typeof e != "function")
      throw new se("fetch must be a function");
    if (typeof t != "object")
      throw new se("defaults must be an object");
    if (t.retries !== void 0 && !It(t.retries))
      throw new se("retries must be a positive integer");
    if (t.retryDelay !== void 0 && !It(t.retryDelay) && typeof t.retryDelay != "function")
      throw new se("retryDelay must be a positive integer or a function returning a positive integer");
    if (t.retryOn !== void 0 && !Array.isArray(t.retryOn) && typeof t.retryOn != "function")
      throw new se("retryOn property expects an array or function");
    var r = {
      retries: 3,
      retryDelay: 1e3,
      retryOn: []
    };
    return t = Object.assign(r, t), /* @__PURE__ */ o(function(i, s) {
      var a = t.retries, c = t.retryDelay, f = t.retryOn;
      if (s && s.retries !== void 0)
        if (It(s.retries))
          a = s.retries;
        else
          throw new se("retries must be a positive integer");
      if (s && s.retryDelay !== void 0)
        if (It(s.retryDelay) || typeof s.retryDelay == "function")
          c = s.retryDelay;
        else
          throw new se("retryDelay must be a positive integer or a function returning a positive integer");
      if (s && s.retryOn)
        if (Array.isArray(s.retryOn) || typeof s.retryOn == "function")
          f = s.retryOn;
        else
          throw new se("retryOn property expects an array or function");
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
  function It(e) {
    return Number.isInteger(e) && e >= 0;
  }
  o(It, "isPositiveInteger");
  function se(e) {
    this.name = "ArgumentError", this.message = e;
  }
  o(se, "ArgumentError");
});

// src/telemetry/index.ts
import { logger as ea } from "@storybook/core/node-logger";

// ../node_modules/fd-package-json/dist/esm/main.js
var Rr = Ne(Nr(), 1);
import { resolve as ca } from "node:path";
import { stat as ua, readFile as la } from "node:fs/promises";
import { statSync as Sd, readFileSync as vd } from "node:fs";
async function fa(e) {
  try {
    return (await ua(e)).isFile();
  } catch {
    return !1;
  }
}
o(fa, "fileExists");
async function da(e) {
  for (let t of (0, Rr.walkUp)(e)) {
    let r = ca(t, "package.json");
    if (await fa(r))
      return r;
  }
  return null;
}
o(da, "findPackagePath");
async function qr(e) {
  let t = await da(e);
  if (!t)
    return null;
  try {
    let r = await la(t, { encoding: "utf8" });
    return JSON.parse(r);
  } catch {
    return null;
  }
}
o(qr, "findPackage");

// src/telemetry/storybook-metadata.ts
var Tt = Ne(xo(), 1);
import {
  loadMainConfig as Tf,
  getStorybookInfo as If,
  getStorybookConfiguration as Cf,
  getProjectRoot as Ff
} from "@storybook/core/common";
import { readConfig as Nf } from "@storybook/core/csf-tools";

// src/telemetry/package-json.ts
var hs = Ne(hr(), 1);
import vf from "node:path";
var gr = /* @__PURE__ */ o(async (e) => {
  let t = Object.keys(e);
  return Promise.all(t.map(kt));
}, "getActualPackageVersions"), kt = /* @__PURE__ */ o(async (e) => {
  try {
    let t = await wr(e);
    return {
      name: e,
      version: t.version
    };
  } catch {
    return { name: e, version: null };
  }
}, "getActualPackageVersion"), wr = /* @__PURE__ */ o(async (e) => {
  let t = v.resolve(vf.join(e, "package.json"), {
    paths: [process.cwd()]
  });
  return await (0, hs.readJson)(t);
}, "getActualPackageJson");

// src/telemetry/get-monorepo-type.ts
var We = Ne(hr(), 1);
import Sr from "node:path";
import { getProjectRoot as bf } from "@storybook/core/common";
var gs = {
  Nx: "nx.json",
  Turborepo: "turbo.json",
  Lerna: "lerna.json",
  Rush: "rush.json",
  Lage: "lage.config.json"
}, ws = /* @__PURE__ */ o(() => {
  let e = bf();
  if (!e) return;
  let r = Object.keys(gs).find((i) => {
    let s = Sr.join(e, gs[i]);
    return (0, We.existsSync)(s);
  });
  if (r)
    return r;
  if (!(0, We.existsSync)(Sr.join(e, "package.json")))
    return;
  if ((0, We.readJsonSync)(Sr.join(e, "package.json"))?.workspaces)
    return "Workspaces";
}, "getMonorepoType");

// src/telemetry/sanitize.ts
import bs from "node:path";
function Ss(e) {
  return e.replace(/[-[/{}()*+?.\\^$|]/g, "\\$&");
}
o(Ss, "regexpEscape");
function vs(e = "") {
  return e.replace(/\u001B\[[0-9;]*m/g, "");
}
o(vs, "removeAnsiEscapeCodes");
function Je(e, t = bs.sep) {
  if (!e) return e;
  let r = process.cwd().split(t);
  for (; r.length > 1; ) {
    let n = r.join(t), i = new RegExp(Ss(n), "gi");
    e = e.replace(i, "$SNIP");
    let s = r.join(t + t), a = new RegExp(Ss(s), "gi");
    e = e.replace(a, "$SNIP"), r.pop();
  }
  return e;
}
o(Je, "cleanPaths");
function Pt(e, t = bs.sep) {
  try {
    e = {
      ...JSON.parse(JSON.stringify(e)),
      message: vs(e.message),
      stack: vs(e.stack),
      cause: e.cause,
      name: e.name
    };
    let r = Je(JSON.stringify(e), t);
    return JSON.parse(r);
  } catch (r) {
    return `Sanitization error: ${r?.message}`;
  }
}
o(Pt, "sanitizeError");

// src/telemetry/get-framework-info.ts
import xf from "node:path";
import { frameworkPackages as Ef } from "@storybook/core/common";
var kf = [
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
], Pf = ["builder-webpack5", "builder-vite"];
function xs(e, t) {
  let { name: r = "", version: n, dependencies: i, devDependencies: s, peerDependencies: a } = e, c = {
    // We include the framework itself because it may be a renderer too (e.g. angular)
    [r]: n,
    ...i,
    ...s,
    ...a
  };
  return t.map((f) => `@storybook/${f}`).find((f) => c[f]);
}
o(xs, "findMatchingPackage");
var Of = /* @__PURE__ */ o((e) => {
  let t = xf.normalize(e).replace(new RegExp(/\\/, "g"), "/");
  return Object.keys(Ef).find((n) => t.endsWith(n)) || Je(e).replace(/.*node_modules[\\/]/, "");
}, "getFrameworkPackageName");
async function Es(e) {
  if (!e?.framework)
    return {};
  let t = typeof e.framework == "string" ? e.framework : e.framework?.name;
  if (!t)
    return {};
  let r = await wr(t);
  if (!r)
    return {};
  let n = xs(r, Pf), i = xs(r, kf), s = Of(t), a = typeof e.framework == "object" ? e.framework.options : {};
  return {
    framework: {
      name: s,
      options: a
    },
    builder: n,
    renderer: i
  };
}
o(Es, "getFrameworkInfo");

// src/telemetry/get-chromatic-version.ts
function ks(e) {
  let t = e.dependencies?.chromatic || e.devDependencies?.chromatic || e.peerDependencies?.chromatic;
  return t || (e.scripts && Object.values(e.scripts).find((r) => r?.match(/chromatic/)) ? "latest" : void 0);
}
o(ks, "getChromaticVersionSpecifier");

// src/telemetry/storybook-metadata.ts
var Ps = {
  next: "Next",
  "react-scripts": "CRA",
  gatsby: "Gatsby",
  "@nuxtjs/storybook": "nuxt",
  "@nrwl/storybook": "nx",
  "@vue/cli-service": "vue-cli",
  "@sveltejs/kit": "sveltekit"
}, Os = /* @__PURE__ */ o((e) => Je(e).replace(/\/dist\/.*/, "").replace(/\.[mc]?[tj]?s[x]?$/, "").replace(/\/register$/, "").replace(/\/manager$/,
"").replace(/\/preset$/, ""), "sanitizeAddonName"), Rf = /* @__PURE__ */ o(async ({
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
  }, i = Object.keys(n).find((w) => !!Ps[w]);
  if (i) {
    let { version: w } = await kt(i);
    r.metaFramework = {
      name: Ps[i],
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
    (w) => s.find((O) => w.includes(O))
  );
  r.testPackages = Object.fromEntries(
    await Promise.all(
      a.map(async (w) => [w, (await kt(w))?.version])
    )
  );
  let c = ws();
  c && (r.monorepo = c);
  try {
    let w = await (0, Tt.detect)({ cwd: Ff() }), O = await (0, Tt.getNpmVersion)(w);
    r.packageManager = {
      type: w,
      version: O
    };
  } catch {
  }
  r.hasCustomBabel = !!t.babel, r.hasCustomWebpack = !!t.webpackFinal, r.hasStaticDirs = !!t.staticDirs, typeof t.typescript == "object" && (r.
  typescriptOptions = t.typescript);
  let f = await Es(t);
  typeof t.refs == "object" && (r.refCount = Object.keys(t.refs).length), typeof t.features == "object" && (r.features = t.features);
  let y = {};
  t.addons && t.addons.forEach((w) => {
    let O, X;
    typeof w == "string" ? O = Os(w) : (w.name.includes("addon-essentials") && (X = w.options), O = Os(w.name)), y[O] = {
      options: X,
      version: void 0
    };
  });
  let u = ks(e);
  u && (y.chromatic = {
    version: void 0,
    versionSpecifier: u,
    options: void 0
  }), (await gr(y)).forEach(({ name: w, version: O }) => {
    y[w].version = O;
  });
  let m = Object.keys(y), l = Object.keys(n).filter((w) => w.includes("storybook") && !m.includes(w)).reduce((w, O) => ({
    ...w,
    [O]: { version: void 0 }
  }), {});
  (await gr(l)).forEach(({ name: w, version: O }) => {
    l[w].version = O;
  });
  let g = n.typescript ? "typescript" : "javascript", S = !!n["eslint-plugin-storybook"], x = If(e);
  try {
    let { previewConfig: w } = x;
    if (w) {
      let O = await Nf(w), X = !!(O.getFieldNode(["globals"]) || O.getFieldNode(["globalTypes"]));
      r.preview = { ...r.preview, usesGlobals: X };
    }
  } catch {
  }
  let _ = l[x.frameworkPackage]?.version;
  return {
    ...r,
    ...f,
    storybookVersion: _,
    storybookVersionSpecifier: x.version,
    language: g,
    storybookPackages: l,
    addons: y,
    hasStorybookEslint: S
  };
}, "computeStorybookMetadata"), Ot, Ts = /* @__PURE__ */ o(async (e) => {
  if (Ot)
    return Ot;
  let t = await qr(process.cwd()) || {}, r = (e || Cf(
    String(t?.scripts?.storybook || ""),
    "-c",
    "--config-dir"
  )) ?? ".storybook", n = await Tf({ configDir: r });
  return Ot = await Rf({ mainConfig: n, packageJson: t }), Ot;
}, "getStorybookMetadata");

// src/telemetry/telemetry.ts
import * as js from "os";

// ../node_modules/nanoid/index.js
import { randomFillSync as Cs } from "crypto";

// ../node_modules/nanoid/url-alphabet/index.js
var Is = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../node_modules/nanoid/index.js
var qf = 128, de, Oe, _f = /* @__PURE__ */ o((e) => {
  !de || de.length < e ? (de = Buffer.allocUnsafe(e * qf), Cs(de), Oe = 0) : Oe + e > de.length && (Cs(de), Oe = 0), Oe += e;
}, "fillPool");
var Ve = /* @__PURE__ */ o((e = 21) => {
  _f(e -= 0);
  let t = "";
  for (let r = Oe - e; r < Oe; r++)
    t += Is[de[r] & 63];
  return t;
}, "nanoid");

// src/telemetry/telemetry.ts
var Ms = Ne(Ns(), 1);

// src/telemetry/anonymous-id.ts
import Df from "node:path";
import { execSync as jf } from "child_process";
import { getProjectRoot as Mf } from "@storybook/core/common";

// src/telemetry/one-way-hash.ts
import { createHash as Af } from "crypto";
var vr = /* @__PURE__ */ o((e) => {
  let t = Af("sha256");
  return t.update("storybook-telemetry-salt"), t.update(e), t.digest("hex");
}, "oneWayHash");

// src/telemetry/anonymous-id.ts
function Lf(e) {
  return e.trim().replace(/#.*$/, "").replace(/^.*@/, "").replace(/^.*\/\//, "").replace(":", "/");
}
o(Lf, "normalizeGitUrl");
var Ct, Rs = /* @__PURE__ */ o(() => {
  if (Ct)
    return Ct;
  let e;
  try {
    let t = Mf(), r = Df.relative(t, process.cwd()), n = jf("git config --local --get remote.origin.url", {
      timeout: 1e3,
      stdio: "pipe"
    });
    e = `${Lf(String(n))}${r}`, Ct = vr(e);
  } catch {
  }
  return Ct;
}, "getAnonymousProjectId");

// src/telemetry/event-cache.ts
import { cache as xr } from "@storybook/core/common";
var br = Promise.resolve(), $f = /* @__PURE__ */ o(async (e, t) => {
  let r = await xr.get("lastEvents") || {};
  r[e] = { body: t, timestamp: Date.now() }, await xr.set("lastEvents", r);
}, "setHelper"), _s = /* @__PURE__ */ o(async (e, t) => (await br, br = $f(e, t), br), "set");
var Gf = /* @__PURE__ */ o((e) => {
  let { body: t, timestamp: r } = e;
  return {
    timestamp: r,
    eventType: t?.eventType,
    eventId: t?.eventId,
    sessionId: t?.sessionId
  };
}, "upgradeFields"), Bf = ["init", "upgrade"], Uf = ["build", "dev", "error"], qs = /* @__PURE__ */ o((e, t) => {
  let r = t.map((n) => e?.[n]).filter(Boolean).sort((n, i) => i.timestamp - n.timestamp);
  return r.length > 0 ? r[0] : void 0;
}, "lastEvent"), Wf = /* @__PURE__ */ o(async (e = void 0) => {
  let t = e || await xr.get("lastEvents") || {}, r = qs(t, Bf), n = qs(t, Uf);
  if (r)
    return !n?.timestamp || r.timestamp > n.timestamp ? Gf(r) : void 0;
}, "getPrecedingUpgrade");

// src/telemetry/session-id.ts
import { cache as As } from "@storybook/core/common";
var Jf = 1e3 * 60 * 60 * 2, Ye;
var Er = /* @__PURE__ */ o(async () => {
  let e = Date.now();
  if (!Ye) {
    let t = await As.get("session");
    t && t.lastUsed >= e - Jf ? Ye = t.id : Ye = Ve();
  }
  return await As.set("session", { id: Ye, lastUsed: e }), Ye;
}, "getSessionId");

// src/telemetry/fetch.ts
var Ds = global.fetch;

// src/telemetry/telemetry.ts
var Vf = (0, Ms.default)(Ds), Yf = process.env.STORYBOOK_TELEMETRY_URL || "https://storybook.js.org/event-log", Ft = [], Kf = /* @__PURE__ */ o(
(e, t) => {
  kr[e] = t;
}, "addToGlobalContext"), Hf = /* @__PURE__ */ o(() => {
  try {
    let e = js.platform();
    return e === "win32" ? "Windows" : e === "darwin" ? "macOS" : e === "linux" ? "Linux" : `Other: ${e}`;
  } catch {
    return "Unknown";
  }
}, "getOperatingSystem"), kr = {
  inCI: !!process.env.CI,
  isTTY: process.stdout.isTTY,
  platform: Hf(),
  nodeVersion: process.versions.node
}, zf = /* @__PURE__ */ o(async (e, t, r) => {
  let { eventType: n, payload: i, metadata: s, ...a } = e, c = await Er(), f = Ve(), y = { ...a, eventType: n, eventId: f, sessionId: c, metadata: s,
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
async function Ls(e, t = { retryDelay: 1e3, immediate: !1 }) {
  let { eventType: r, payload: n, metadata: i, ...s } = e, a = t.stripMetadata ? kr : {
    ...kr,
    anonymousId: Rs()
  }, c;
  try {
    c = zf(e, a, t), Ft.push(c), t.immediate ? await Promise.all(Ft) : await c;
    let f = await Er(), y = Ve(), u = { ...s, eventType: r, eventId: y, sessionId: f, metadata: i, payload: n, context: a };
    await _s(r, u);
  } catch {
  } finally {
    Ft = Ft.filter((f) => f !== c);
  }
}
o(Ls, "sendTelemetry");

// node_modules/chalk/source/vendor/ansi-styles/index.js
var $s = /* @__PURE__ */ o((e = 0) => (t) => `\x1B[${t + e}m`, "wrapAnsi16"), Gs = /* @__PURE__ */ o((e = 0) => (t) => `\x1B[${38 + e};5;${t}\
m`, "wrapAnsi256"), Bs = /* @__PURE__ */ o((e = 0) => (t, r, n) => `\x1B[${38 + e};2;${t};${r};${n}m`, "wrapAnsi16m"), C = {
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
}, Wy = Object.keys(C.modifier), Xf = Object.keys(C.color), Qf = Object.keys(C.bgColor), Jy = [...Xf, ...Qf];
function Zf() {
  let e = /* @__PURE__ */ new Map();
  for (let [t, r] of Object.entries(C)) {
    for (let [n, i] of Object.entries(r))
      C[n] = {
        open: `\x1B[${i[0]}m`,
        close: `\x1B[${i[1]}m`
      }, r[n] = C[n], e.set(i[0], i[1]);
    Object.defineProperty(C, t, {
      value: r,
      enumerable: !1
    });
  }
  return Object.defineProperty(C, "codes", {
    value: e,
    enumerable: !1
  }), C.color.close = "\x1B[39m", C.bgColor.close = "\x1B[49m", C.color.ansi = $s(), C.color.ansi256 = Gs(), C.color.ansi16m = Bs(), C.bgColor.
  ansi = $s(10), C.bgColor.ansi256 = Gs(10), C.bgColor.ansi16m = Bs(10), Object.defineProperties(C, {
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
      value: /* @__PURE__ */ o((t) => C.rgbToAnsi256(...C.hexToRgb(t)), "value"),
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
      value: /* @__PURE__ */ o((t, r, n) => C.ansi256ToAnsi(C.rgbToAnsi256(t, r, n)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ o((t) => C.ansi256ToAnsi(C.hexToAnsi256(t)), "value"),
      enumerable: !1
    }
  }), C;
}
o(Zf, "assembleStyles");
var ed = Zf(), z = ed;

// node_modules/chalk/source/vendor/supports-color/index.js
import Pr from "node:process";
import td from "node:os";
import Us from "node:tty";
function K(e, t = globalThis.Deno ? globalThis.Deno.args : Pr.argv) {
  let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
  return n !== -1 && (i === -1 || n < i);
}
o(K, "hasFlag");
var { env: R } = Pr, Nt;
K("no-color") || K("no-colors") || K("color=false") || K("color=never") ? Nt = 0 : (K("color") || K("colors") || K("color=true") || K("color\
=always")) && (Nt = 1);
function rd() {
  if ("FORCE_COLOR" in R)
    return R.FORCE_COLOR === "true" ? 1 : R.FORCE_COLOR === "false" ? 0 : R.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(R.FORCE_COLOR,
    10), 3);
}
o(rd, "envForceColor");
function nd(e) {
  return e === 0 ? !1 : {
    level: e,
    hasBasic: !0,
    has256: e >= 2,
    has16m: e >= 3
  };
}
o(nd, "translateLevel");
function od(e, { streamIsTTY: t, sniffFlags: r = !0 } = {}) {
  let n = rd();
  n !== void 0 && (Nt = n);
  let i = r ? Nt : n;
  if (i === 0)
    return 0;
  if (r) {
    if (K("color=16m") || K("color=full") || K("color=truecolor"))
      return 3;
    if (K("color=256"))
      return 2;
  }
  if ("TF_BUILD" in R && "AGENT_NAME" in R)
    return 1;
  if (e && !t && i === void 0)
    return 0;
  let s = i || 0;
  if (R.TERM === "dumb")
    return s;
  if (Pr.platform === "win32") {
    let a = td.release().split(".");
    return Number(a[0]) >= 10 && Number(a[2]) >= 10586 ? Number(a[2]) >= 14931 ? 3 : 2 : 1;
  }
  if ("CI" in R)
    return "GITHUB_ACTIONS" in R || "GITEA_ACTIONS" in R ? 3 : ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((a) => a in
    R) || R.CI_NAME === "codeship" ? 1 : s;
  if ("TEAMCITY_VERSION" in R)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(R.TEAMCITY_VERSION) ? 1 : 0;
  if (R.COLORTERM === "truecolor" || R.TERM === "xterm-kitty")
    return 3;
  if ("TERM_PROGRAM" in R) {
    let a = Number.parseInt((R.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (R.TERM_PROGRAM) {
      case "iTerm.app":
        return a >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(R.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(R.TERM) || "COLORTERM" in R ?
  1 : s;
}
o(od, "_supportsColor");
function Ws(e, t = {}) {
  let r = od(e, {
    streamIsTTY: e && e.isTTY,
    ...t
  });
  return nd(r);
}
o(Ws, "createSupportsColor");
var id = {
  stdout: Ws({ isTTY: Us.isatty(1) }),
  stderr: Ws({ isTTY: Us.isatty(2) })
}, Js = id;

// node_modules/chalk/source/utilities.js
function Vs(e, t, r) {
  let n = e.indexOf(t);
  if (n === -1)
    return e;
  let i = t.length, s = 0, a = "";
  do
    a += e.slice(s, n) + t + r, s = n + i, n = e.indexOf(t, s);
  while (n !== -1);
  return a += e.slice(s), a;
}
o(Vs, "stringReplaceAll");
function Ys(e, t, r, n) {
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
o(Ys, "stringEncaseCRLFWithFirstIndex");

// node_modules/chalk/source/index.js
var { stdout: Ks, stderr: Hs } = Js, Or = Symbol("GENERATOR"), Te = Symbol("STYLER"), Ke = Symbol("IS_EMPTY"), zs = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], Ie = /* @__PURE__ */ Object.create(null), sd = /* @__PURE__ */ o((e, t = {}) => {
  if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  let r = Ks ? Ks.level : 0;
  e.level = t.level === void 0 ? r : t.level;
}, "applyOptions");
var ad = /* @__PURE__ */ o((e) => {
  let t = /* @__PURE__ */ o((...r) => r.join(" "), "chalk");
  return sd(t, e), Object.setPrototypeOf(t, He.prototype), t;
}, "chalkFactory");
function He(e) {
  return ad(e);
}
o(He, "createChalk");
Object.setPrototypeOf(He.prototype, Function.prototype);
for (let [e, t] of Object.entries(z))
  Ie[e] = {
    get() {
      let r = Rt(this, Ir(t.open, t.close, this[Te]), this[Ke]);
      return Object.defineProperty(this, e, { value: r }), r;
    }
  };
Ie.visible = {
  get() {
    let e = Rt(this, this[Te], !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
var Tr = /* @__PURE__ */ o((e, t, r, ...n) => e === "rgb" ? t === "ansi16m" ? z[r].ansi16m(...n) : t === "ansi256" ? z[r].ansi256(z.rgbToAnsi256(
...n)) : z[r].ansi(z.rgbToAnsi(...n)) : e === "hex" ? Tr("rgb", t, r, ...z.hexToRgb(...n)) : z[r][e](...n), "getModelAnsi"), cd = ["rgb", "h\
ex", "ansi256"];
for (let e of cd) {
  Ie[e] = {
    get() {
      let { level: r } = this;
      return function(...n) {
        let i = Ir(Tr(e, zs[r], "color", ...n), z.color.close, this[Te]);
        return Rt(this, i, this[Ke]);
      };
    }
  };
  let t = "bg" + e[0].toUpperCase() + e.slice(1);
  Ie[t] = {
    get() {
      let { level: r } = this;
      return function(...n) {
        let i = Ir(Tr(e, zs[r], "bgColor", ...n), z.bgColor.close, this[Te]);
        return Rt(this, i, this[Ke]);
      };
    }
  };
}
var ud = Object.defineProperties(() => {
}, {
  ...Ie,
  level: {
    enumerable: !0,
    get() {
      return this[Or].level;
    },
    set(e) {
      this[Or].level = e;
    }
  }
}), Ir = /* @__PURE__ */ o((e, t, r) => {
  let n, i;
  return r === void 0 ? (n = e, i = t) : (n = r.openAll + e, i = t + r.closeAll), {
    open: e,
    close: t,
    openAll: n,
    closeAll: i,
    parent: r
  };
}, "createStyler"), Rt = /* @__PURE__ */ o((e, t, r) => {
  let n = /* @__PURE__ */ o((...i) => ld(n, i.length === 1 ? "" + i[0] : i.join(" ")), "builder");
  return Object.setPrototypeOf(n, ud), n[Or] = e, n[Te] = t, n[Ke] = r, n;
}, "createBuilder"), ld = /* @__PURE__ */ o((e, t) => {
  if (e.level <= 0 || !t)
    return e[Ke] ? "" : t;
  let r = e[Te];
  if (r === void 0)
    return t;
  let { openAll: n, closeAll: i } = r;
  if (t.includes("\x1B"))
    for (; r !== void 0; )
      t = Vs(t, r.close, r.open), r = r.parent;
  let s = t.indexOf(`
`);
  return s !== -1 && (t = Ys(t, i, n, s)), n + t + i;
}, "applyStyle");
Object.defineProperties(He.prototype, Ie);
var fd = He(), oh = He({ level: Hs ? Hs.level : 0 });
var Cr = fd;

// src/telemetry/notify.ts
import { cache as Xs } from "@storybook/core/common";
var Qs = "telemetry-notification-date", Ce = console, Zs = /* @__PURE__ */ o(async () => {
  await Xs.get(Qs, null) || (Xs.set(Qs, Date.now()), Ce.log(), Ce.log(
    `${Cr.magenta.bold(
      "attention"
    )} => Storybook now collects completely anonymous telemetry regarding usage.`
  ), Ce.log("This information is used to shape Storybook's roadmap and prioritize features."), Ce.log(
    "You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:"
  ), Ce.log(Cr.cyan("https://storybook.js.org/telemetry")), Ce.log());
}, "notify");

// src/telemetry/index.ts
var hh = /* @__PURE__ */ o(async (e, t = {}, r = {}) => {
  e !== "boot" && await Zs();
  let n = {
    eventType: e,
    payload: t
  };
  try {
    r?.stripMetadata || (n.metadata = await Ts(r?.configDir));
  } catch (i) {
    n.payload.metadataErrorMessage = Pt(i).message, r?.enableCrashReports && (n.payload.metadataError = Pt(i));
  } finally {
    let { error: i } = n.payload;
    i && (n.payload.error = Pt(i)), (!n.payload.error || r?.enableCrashReports) && (process.env?.STORYBOOK_TELEMETRY_DEBUG && (ea.info(`
[telemetry]`), ea.info(JSON.stringify(n, null, 2))), await Ls(n, r));
  }
}, "telemetry");
export {
  Kf as addToGlobalContext,
  Rf as computeStorybookMetadata,
  Wf as getPrecedingUpgrade,
  Ts as getStorybookMetadata,
  Ps as metaFrameworks,
  vr as oneWayHash,
  Os as sanitizeAddonName,
  hh as telemetry
};
