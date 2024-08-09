import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var Ae = Object.create;
var I = Object.defineProperty;
var ke = Object.getOwnPropertyDescriptor;
var Ce = Object.getOwnPropertyNames;
var Te = Object.getPrototypeOf, xe = Object.prototype.hasOwnProperty;
var n = (t, e) => I(t, "name", { value: e, configurable: !0 });
var _e = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Me = (t, e, o, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let s of Ce(e))
      !xe.call(t, s) && s !== o && I(t, s, { get: () => e[s], enumerable: !(r = ke(e, s)) || r.enumerable });
  return t;
};
var Ie = (t, e, o) => (o = t != null ? Ae(Te(t)) : {}, Me(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? I(o, "default", { value: t, enumerable: !0 }) : o,
  t
));

// ../node_modules/ts-dedent/dist/index.js
var Y = _e((C) => {
  "use strict";
  Object.defineProperty(C, "__esModule", { value: !0 });
  C.dedent = void 0;
  function U(t) {
    for (var e = [], o = 1; o < arguments.length; o++)
      e[o - 1] = arguments[o];
    var r = Array.from(typeof t == "string" ? [t] : t);
    r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var s = r.reduce(function(g, _) {
      var O = _.match(/\n([\t ]+|(?!\s).)/g);
      return O ? g.concat(O.map(function(M) {
        var y, b;
        return (b = (y = M.match(/[\t ]/g)) === null || y === void 0 ? void 0 : y.length) !== null && b !== void 0 ? b : 0;
      })) : g;
    }, []);
    if (s.length) {
      var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, s) + "}", "g");
      r = r.map(function(g) {
        return g.replace(a, `
`);
      });
    }
    r[0] = r[0].replace(/^\r?\n/, "");
    var d = r[0];
    return e.forEach(function(g, _) {
      var O = d.match(/(?:^|\n)( *)$/), M = O ? O[1] : "", y = g;
      typeof g == "string" && g.includes(`
`) && (y = String(g).split(`
`).map(function(b, Oe) {
        return Oe === 0 ? b : "" + M + b;
      }).join(`
`)), d += y + r[_ + 1];
    }), d;
  }
  n(U, "dedent");
  C.dedent = U;
  C.default = U;
});

// node_modules/chalk/source/vendor/ansi-styles/index.js
var L = /* @__PURE__ */ n((t = 0) => (e) => `\x1B[${e + t}m`, "wrapAnsi16"), B = /* @__PURE__ */ n((t = 0) => (e) => `\x1B[${38 + t};5;${e}m`,
"wrapAnsi256"), W = /* @__PURE__ */ n((t = 0) => (e, o, r) => `\x1B[${38 + t};2;${e};${o};${r}m`, "wrapAnsi16m"), u = {
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
}, He = Object.keys(u.modifier), Se = Object.keys(u.color), we = Object.keys(u.bgColor), Xe = [...Se, ...we];
function ve() {
  let t = /* @__PURE__ */ new Map();
  for (let [e, o] of Object.entries(u)) {
    for (let [r, s] of Object.entries(o))
      u[r] = {
        open: `\x1B[${s[0]}m`,
        close: `\x1B[${s[1]}m`
      }, o[r] = u[r], t.set(s[0], s[1]);
    Object.defineProperty(u, e, {
      value: o,
      enumerable: !1
    });
  }
  return Object.defineProperty(u, "codes", {
    value: t,
    enumerable: !1
  }), u.color.close = "\x1B[39m", u.bgColor.close = "\x1B[49m", u.color.ansi = L(), u.color.ansi256 = B(), u.color.ansi16m = W(), u.bgColor.
  ansi = L(10), u.bgColor.ansi256 = B(10), u.bgColor.ansi16m = W(10), Object.defineProperties(u, {
    rgbToAnsi256: {
      value(e, o, r) {
        return e === o && o === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 *
        Math.round(o / 255 * 5) + Math.round(r / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(e) {
        let o = /[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));
        if (!o)
          return [0, 0, 0];
        let [r] = o;
        r.length === 3 && (r = [...r].map((a) => a + a).join(""));
        let s = Number.parseInt(r, 16);
        return [
          /* eslint-disable no-bitwise */
          s >> 16 & 255,
          s >> 8 & 255,
          s & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: /* @__PURE__ */ n((e) => u.rgbToAnsi256(...u.hexToRgb(e)), "value"),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(e) {
        if (e < 8)
          return 30 + e;
        if (e < 16)
          return 90 + (e - 8);
        let o, r, s;
        if (e >= 232)
          o = ((e - 232) * 10 + 8) / 255, r = o, s = o;
        else {
          e -= 16;
          let g = e % 36;
          o = Math.floor(e / 36) / 5, r = Math.floor(g / 6) / 5, s = g % 6 / 5;
        }
        let a = Math.max(o, r, s) * 2;
        if (a === 0)
          return 30;
        let d = 30 + (Math.round(s) << 2 | Math.round(r) << 1 | Math.round(o));
        return a === 2 && (d += 60), d;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: /* @__PURE__ */ n((e, o, r) => u.ansi256ToAnsi(u.rgbToAnsi256(e, o, r)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ n((e) => u.ansi256ToAnsi(u.hexToAnsi256(e)), "value"),
      enumerable: !1
    }
  }), u;
}
n(ve, "assembleStyles");
var Ne = ve(), h = Ne;

// node_modules/chalk/source/vendor/supports-color/index.js
import S from "node:process";
import Le from "node:os";
import F from "node:tty";
function f(t, e = globalThis.Deno ? globalThis.Deno.args : S.argv) {
  let o = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", r = e.indexOf(o + t), s = e.indexOf("--");
  return r !== -1 && (s === -1 || r < s);
}
n(f, "hasFlag");
var { env: p } = S, T;
f("no-color") || f("no-colors") || f("color=false") || f("color=never") ? T = 0 : (f("color") || f("colors") || f("color=true") || f("color=\
always")) && (T = 1);
function Be() {
  if ("FORCE_COLOR" in p)
    return p.FORCE_COLOR === "true" ? 1 : p.FORCE_COLOR === "false" ? 0 : p.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(p.FORCE_COLOR,
    10), 3);
}
n(Be, "envForceColor");
function We(t) {
  return t === 0 ? !1 : {
    level: t,
    hasBasic: !0,
    has256: t >= 2,
    has16m: t >= 3
  };
}
n(We, "translateLevel");
function Fe(t, { streamIsTTY: e, sniffFlags: o = !0 } = {}) {
  let r = Be();
  r !== void 0 && (T = r);
  let s = o ? T : r;
  if (s === 0)
    return 0;
  if (o) {
    if (f("color=16m") || f("color=full") || f("color=truecolor"))
      return 3;
    if (f("color=256"))
      return 2;
  }
  if ("TF_BUILD" in p && "AGENT_NAME" in p)
    return 1;
  if (t && !e && s === void 0)
    return 0;
  let a = s || 0;
  if (p.TERM === "dumb")
    return a;
  if (S.platform === "win32") {
    let d = Le.release().split(".");
    return Number(d[0]) >= 10 && Number(d[2]) >= 10586 ? Number(d[2]) >= 14931 ? 3 : 2 : 1;
  }
  if ("CI" in p)
    return "GITHUB_ACTIONS" in p || "GITEA_ACTIONS" in p ? 3 : ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((d) => d in
    p) || p.CI_NAME === "codeship" ? 1 : a;
  if ("TEAMCITY_VERSION" in p)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(p.TEAMCITY_VERSION) ? 1 : 0;
  if (p.COLORTERM === "truecolor" || p.TERM === "xterm-kitty")
    return 3;
  if ("TERM_PROGRAM" in p) {
    let d = Number.parseInt((p.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (p.TERM_PROGRAM) {
      case "iTerm.app":
        return d >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(p.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(p.TERM) || "COLORTERM" in p ?
  1 : a;
}
n(Fe, "_supportsColor");
function K(t, e = {}) {
  let o = Fe(t, {
    streamIsTTY: t && t.isTTY,
    ...e
  });
  return We(o);
}
n(K, "createSupportsColor");
var Ke = {
  stdout: K({ isTTY: F.isatty(1) }),
  stderr: K({ isTTY: F.isatty(2) })
}, P = Ke;

// node_modules/chalk/source/utilities.js
function j(t, e, o) {
  let r = t.indexOf(e);
  if (r === -1)
    return t;
  let s = e.length, a = 0, d = "";
  do
    d += t.slice(a, r) + e + o, a = r + s, r = t.indexOf(e, a);
  while (r !== -1);
  return d += t.slice(a), d;
}
n(j, "stringReplaceAll");
function V(t, e, o, r) {
  let s = 0, a = "";
  do {
    let d = t[r - 1] === "\r";
    a += t.slice(s, d ? r - 1 : r) + e + (d ? `\r
` : `
`) + o, s = r + 1, r = t.indexOf(`
`, s);
  } while (r !== -1);
  return a += t.slice(s), a;
}
n(V, "stringEncaseCRLFWithFirstIndex");

// node_modules/chalk/source/index.js
var { stdout: $, stderr: D } = P, w = Symbol("GENERATOR"), E = Symbol("STYLER"), A = Symbol("IS_EMPTY"), G = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], R = /* @__PURE__ */ Object.create(null), Pe = /* @__PURE__ */ n((t, e = {}) => {
  if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  let o = $ ? $.level : 0;
  t.level = e.level === void 0 ? o : e.level;
}, "applyOptions");
var je = /* @__PURE__ */ n((t) => {
  let e = /* @__PURE__ */ n((...o) => o.join(" "), "chalk");
  return Pe(e, t), Object.setPrototypeOf(e, k.prototype), e;
}, "chalkFactory");
function k(t) {
  return je(t);
}
n(k, "createChalk");
Object.setPrototypeOf(k.prototype, Function.prototype);
for (let [t, e] of Object.entries(h))
  R[t] = {
    get() {
      let o = x(this, N(e.open, e.close, this[E]), this[A]);
      return Object.defineProperty(this, t, { value: o }), o;
    }
  };
R.visible = {
  get() {
    let t = x(this, this[E], !0);
    return Object.defineProperty(this, "visible", { value: t }), t;
  }
};
var v = /* @__PURE__ */ n((t, e, o, ...r) => t === "rgb" ? e === "ansi16m" ? h[o].ansi16m(...r) : e === "ansi256" ? h[o].ansi256(h.rgbToAnsi256(
...r)) : h[o].ansi(h.rgbToAnsi(...r)) : t === "hex" ? v("rgb", e, o, ...h.hexToRgb(...r)) : h[o][t](...r), "getModelAnsi"), Ve = ["rgb", "he\
x", "ansi256"];
for (let t of Ve) {
  R[t] = {
    get() {
      let { level: o } = this;
      return function(...r) {
        let s = N(v(t, G[o], "color", ...r), h.color.close, this[E]);
        return x(this, s, this[A]);
      };
    }
  };
  let e = "bg" + t[0].toUpperCase() + t.slice(1);
  R[e] = {
    get() {
      let { level: o } = this;
      return function(...r) {
        let s = N(v(t, G[o], "bgColor", ...r), h.bgColor.close, this[E]);
        return x(this, s, this[A]);
      };
    }
  };
}
var $e = Object.defineProperties(() => {
}, {
  ...R,
  level: {
    enumerable: !0,
    get() {
      return this[w].level;
    },
    set(t) {
      this[w].level = t;
    }
  }
}), N = /* @__PURE__ */ n((t, e, o) => {
  let r, s;
  return o === void 0 ? (r = t, s = e) : (r = o.openAll + t, s = e + o.closeAll), {
    open: t,
    close: e,
    openAll: r,
    closeAll: s,
    parent: o
  };
}, "createStyler"), x = /* @__PURE__ */ n((t, e, o) => {
  let r = /* @__PURE__ */ n((...s) => De(r, s.length === 1 ? "" + s[0] : s.join(" ")), "builder");
  return Object.setPrototypeOf(r, $e), r[w] = t, r[E] = e, r[A] = o, r;
}, "createBuilder"), De = /* @__PURE__ */ n((t, e) => {
  if (t.level <= 0 || !e)
    return t[A] ? "" : e;
  let o = t[E];
  if (o === void 0)
    return e;
  let { openAll: r, closeAll: s } = o;
  if (e.includes("\x1B"))
    for (; o !== void 0; )
      e = j(e, o.close, o.open), o = o.parent;
  let a = e.indexOf(`
`);
  return a !== -1 && (e = V(e, s, r, a)), r + e + s;
}, "applyStyle");
Object.defineProperties(k.prototype, R);
var Ge = k(), ao = k({ level: D ? D.level : 0 });
var m = Ge;

// src/server-errors.ts
var l = Ie(Y(), 1);

// src/storybook-error.ts
function H({
  code: t,
  category: e
}) {
  let o = String(t).padStart(4, "0");
  return `SB_${e}_${o}`;
}
n(H, "parseErrorCode");
var c = class t extends Error {
  static {
    n(this, "StorybookError");
  }
  /**
   * Category of the error. Used to classify the type of error, e.g., 'PREVIEW_API'.
   */
  category;
  /**
   * Code representing the error. Used to uniquely identify the error, e.g., 1.
   */
  code;
  /**
   * Data associated with the error. Used to provide additional information in the error message or to be passed to telemetry.
   */
  data = {};
  /**
   * Specifies the documentation for the error.
   * - If `true`, links to a documentation page on the Storybook website (make sure it exists before enabling) – This is not implemented yet.
   * - If a string, uses the provided URL for documentation (external or FAQ links).
   * - If `false` (default), no documentation link is added.
   */
  documentation;
  /**
   * Flag used to easily determine if the error originates from Storybook.
   */
  fromStorybook = !0;
  get fullErrorCode() {
    return H({ code: this.code, category: this.category });
  }
  /**
   * Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>.
   */
  get name() {
    let e = this.constructor.name;
    return `${this.fullErrorCode} (${e})`;
  }
  constructor(e) {
    super(t.getFullMessage(e)), this.category = e.category, this.documentation = e.documentation ?? !1, this.code = e.code;
  }
  /**
   * Generates the error message along with additional documentation link (if applicable).
   */
  static getFullMessage({
    documentation: e,
    code: o,
    category: r,
    message: s
  }) {
    let a;
    return e === !0 ? a = `https://storybook.js.org/error/${H({ code: o, category: r })}` : typeof e == "string" ? a = e : Array.isArray(e) &&
    (a = `
${e.map((d) => `	- ${d}`).join(`
`)}`), `${s}${a != null ? `

More info: ${a}
` : ""}`;
  }
};

// src/server-errors.ts
var Ue = /* @__PURE__ */ ((i) => (i.CLI = "CLI", i.CLI_INIT = "CLI_INIT", i.CLI_AUTOMIGRATE = "CLI_AUTOMIGRATE", i.CLI_UPGRADE = "CLI_UPGRAD\
E", i.CLI_ADD = "CLI_ADD", i.CODEMOD = "CODEMOD", i.CORE_SERVER = "CORE-SERVER", i.CSF_PLUGIN = "CSF-PLUGIN", i.CSF_TOOLS = "CSF-TOOLS", i.CORE_COMMON =
"CORE-COMMON", i.NODE_LOGGER = "NODE-LOGGER", i.TELEMETRY = "TELEMETRY", i.BUILDER_MANAGER = "BUILDER-MANAGER", i.BUILDER_VITE = "BUILDER-VI\
TE", i.BUILDER_WEBPACK5 = "BUILDER-WEBPACK5", i.SOURCE_LOADER = "SOURCE-LOADER", i.POSTINSTALL = "POSTINSTALL", i.DOCS_TOOLS = "DOCS-TOOLS",
i.CORE_WEBPACK = "CORE-WEBPACK", i.FRAMEWORK_ANGULAR = "FRAMEWORK_ANGULAR", i.FRAMEWORK_EMBER = "FRAMEWORK_EMBER", i.FRAMEWORK_HTML_VITE = "\
FRAMEWORK_HTML-VITE", i.FRAMEWORK_HTML_WEBPACK5 = "FRAMEWORK_HTML-WEBPACK5", i.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS", i.FRAMEWORK_PREACT_VITE =
"FRAMEWORK_PREACT-VITE", i.FRAMEWORK_PREACT_WEBPACK5 = "FRAMEWORK_PREACT-WEBPACK5", i.FRAMEWORK_REACT_VITE = "FRAMEWORK_REACT-VITE", i.FRAMEWORK_REACT_WEBPACK5 =
"FRAMEWORK_REACT-WEBPACK5", i.FRAMEWORK_SERVER_WEBPACK5 = "FRAMEWORK_SERVER-WEBPACK5", i.FRAMEWORK_SVELTE_VITE = "FRAMEWORK_SVELTE-VITE", i.
FRAMEWORK_SVELTE_WEBPACK5 = "FRAMEWORK_SVELTE-WEBPACK5", i.FRAMEWORK_SVELTEKIT = "FRAMEWORK_SVELTEKIT", i.FRAMEWORK_VUE_VITE = "FRAMEWORK_VU\
E-VITE", i.FRAMEWORK_VUE_WEBPACK5 = "FRAMEWORK_VUE-WEBPACK5", i.FRAMEWORK_VUE3_VITE = "FRAMEWORK_VUE3-VITE", i.FRAMEWORK_VUE3_WEBPACK5 = "FR\
AMEWORK_VUE3-WEBPACK5", i.FRAMEWORK_WEB_COMPONENTS_VITE = "FRAMEWORK_WEB-COMPONENTS-VITE", i.FRAMEWORK_WEB_COMPONENTS_WEBPACK5 = "FRAMEWORK_\
WEB-COMPONENTS-WEBPACK5", i))(Ue || {}), X = class extends c {
  static {
    n(this, "NxProjectDetectedError");
  }
  constructor() {
    super({
      category: "CLI_INIT",
      code: 1,
      documentation: "https://nx.dev/packages/storybook",
      message: l.dedent`
        We have detected Nx in your project. Nx has its own Storybook initializer, so please use it instead.
        Run "nx g @nx/storybook:configuration" to add Storybook to your project.`
    });
  }
}, z = class extends c {
  static {
    n(this, "MissingFrameworkFieldError");
  }
  constructor() {
    super({
      category: "CORE-COMMON",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api",
      message: l.dedent`
        Could not find a 'framework' field in Storybook config.
        
        Please run 'npx storybook automigrate' to automatically fix your config.`
    });
  }
}, J = class extends c {
  constructor(o) {
    super({
      category: "CORE-COMMON",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-framework-api",
      message: l.dedent`
        Invalid value of '${o.frameworkName}' in the 'framework' field of Storybook config.
        
        Please run 'npx storybook automigrate' to automatically fix your config.
      `
    });
    this.data = o;
  }
  static {
    n(this, "InvalidFrameworkNameError");
  }
}, q = class extends c {
  constructor(o) {
    super({
      category: "CORE-COMMON",
      code: 3,
      documentation: "",
      message: l.dedent`
        Could not evaluate the '${o.frameworkName}' package from the 'framework' field of Storybook config.
        
        Are you sure it's a valid package and is installed?`
    });
    this.data = o;
  }
  static {
    n(this, "CouldNotEvaluateFrameworkError");
  }
}, Q = class extends c {
  static {
    n(this, "ConflictingStaticDirConfigError");
  }
  constructor() {
    super({
      category: "CORE-SERVER",
      code: 1,
      documentation: "https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration",
      message: l.dedent`
        Storybook encountered a conflict when trying to serve statics. You have configured both:
        * Storybook's option in the config file: 'staticDirs'
        * Storybook's (deprecated) CLI flag: '--staticDir' or '-s'
        
        Please remove the CLI flag from your storybook script and use only the 'staticDirs' option instead.`
    });
  }
}, Z = class extends c {
  static {
    n(this, "InvalidStoriesEntryError");
  }
  constructor() {
    super({
      category: "CORE-COMMON",
      code: 4,
      documentation: "https://storybook.js.org/docs/react/faq#can-i-have-a-storybook-with-no-local-stories",
      message: l.dedent`
        Storybook could not index your stories.
        Your main configuration somehow does not contain a 'stories' field, or it resolved to an empty array.
        
        Please check your main configuration file and make sure it exports a 'stories' field that is not an empty array.`
    });
  }
}, ee = class extends c {
  static {
    n(this, "WebpackMissingStatsError");
  }
  constructor() {
    super({
      category: "BUILDER-WEBPACK5",
      code: 1,
      documentation: [
        "https://webpack.js.org/configuration/stats/",
        "https://storybook.js.org/docs/react/builders/webpack#configure"
      ],
      message: l.dedent`
        No Webpack stats found. Did you turn off stats reporting in your Webpack config?
        Storybook needs Webpack stats (including errors) in order to build correctly.`
    });
  }
}, oe = class extends c {
  constructor(o) {
    super({
      category: "BUILDER-WEBPACK5",
      code: 2,
      message: o.error.message.trim()
    });
    this.data = o;
  }
  static {
    n(this, "WebpackInvocationError");
  }
};
function te(t = "") {
  return t.replace(/\u001B\[[0-9;]*m/g, "");
}
n(te, "removeAnsiEscapeCodes");
var re = class extends c {
  constructor(o) {
    o.errors = o.errors.map((r) => ({
      ...r,
      message: te(r.message),
      stack: te(r.stack),
      name: r.name
    }));
    super({
      category: "BUILDER-WEBPACK5",
      code: 3,
      // This error message is a followup of errors logged by Webpack to the user
      message: l.dedent`
        There were problems when compiling your code with Webpack.
        Run Storybook with --debug-webpack for more information.
      `
    });
    this.data = o;
  }
  static {
    n(this, "WebpackCompilationError");
  }
}, ne = class extends c {
  constructor(o) {
    super({
      category: "CLI_INIT",
      code: 2,
      documentation: "https://storybook.js.org/docs/angular/faq#error-no-angularjson-file-found",
      message: l.dedent`
        An angular.json file was not found in the current working directory: ${o.path}
        Storybook needs it to work properly, so please rerun the command at the root of your project, where the angular.json file is located.`
    });
    this.data = o;
  }
  static {
    n(this, "MissingAngularJsonError");
  }
}, se = class extends c {
  static {
    n(this, "AngularLegacyBuildOptionsError");
  }
  constructor() {
    super({
      category: "FRAMEWORK_ANGULAR",
      code: 1,
      documentation: [
        "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#angular-drop-support-for-calling-storybook-directly",
        "https://github.com/storybookjs/storybook/tree/next/code/frameworks/angular#how-do-i-migrate-to-an-angular-storybook-builder"
      ],
      message: l.dedent`
        Your Storybook startup script uses a solution that is not supported anymore.
        You must use Angular builder to have an explicit configuration on the project used in angular.json.
        
        Please run 'npx storybook automigrate' to automatically fix your config.`
    });
  }
}, ie = class extends c {
  constructor(o) {
    super({
      category: "CORE-SERVER",
      code: 2,
      documentation: "",
      message: l.dedent`
        Storybook failed to load the following preset: ${o.presetName}.
        
        Please check whether your setup is correct, the Storybook dependencies (and their peer dependencies) are installed correctly and there are no package version clashes.
        
        If you believe this is a bug, please open an issue on Github.
        
        ${o.error.stack || o.error.message}`
    });
    this.data = o;
  }
  static {
    n(this, "CriticalPresetLoadError");
  }
}, ae = class extends c {
  static {
    n(this, "MissingBuilderError");
  }
  constructor() {
    super({
      category: "CORE-SERVER",
      code: 3,
      documentation: "https://github.com/storybookjs/storybook/issues/24071",
      message: l.dedent`
        Storybook could not find a builder configuration for your project. 
        Builders normally come from a framework package e.g. '@storybook/react-vite', or from builder packages e.g. '@storybook/builder-vite'.
        
        - Does your main config file contain a 'framework' field configured correctly?
        - Is the Storybook framework package installed correctly?
        - If you don't use a framework, does your main config contain a 'core.builder' configured correctly?
        - Are you in a monorepo and perhaps the framework package is hoisted incorrectly?
        
        If you believe this is a bug, please describe your issue in detail on Github.`
    });
  }
}, ce = class extends c {
  constructor(o) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/blob/next/code/frameworks/nextjs/README.md#nextjs-font-optimization",
      message: l.dedent`
        Failed to fetch \`${o.fontFamily}\` from Google Fonts with URL: \`${o.url}\``
    });
    this.data = o;
  }
  static {
    n(this, "GoogleFontsDownloadError");
  }
}, le = class extends c {
  constructor(o) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/code/frameworks/nextjs/README.md#nextjs-font-optimization",
      message: l.dedent`
        An error occurred when trying to load Google Fonts with URL \`${o.url}\`.
        
        ${o.error instanceof Error ? o.error.message : ""}`
    });
    this.data = o;
  }
  static {
    n(this, "GoogleFontsLoadingError");
  }
}, ue = class extends c {
  constructor(o) {
    super({
      category: "CORE-SERVER",
      code: 4,
      documentation: "",
      message: l.dedent`
        There was an exports mismatch error when trying to build Storybook.
        Please check whether the versions of your Storybook packages match whenever possible, as this might be the cause.
        
        Problematic example:
        { "@storybook/react": "7.5.3", "@storybook/react-vite": "7.4.5", "storybook": "7.3.0" }
        
        Correct example:
        { "@storybook/react": "7.5.3", "@storybook/react-vite": "7.5.3", "storybook": "7.5.3" }
        
        Please run \`npx storybook doctor\` for guidance on how to fix this issue.`
    });
    this.data = o;
  }
  static {
    n(this, "NoMatchingExportError");
  }
}, de = class extends c {
  constructor(o) {
    let r = [
      `Storybook failed to load ${o.location}`,
      "",
      "It looks like the file tried to load/import an ESM only module.",
      `Support for this is currently limited in ${o.location}`,
      "You can import ESM modules in your main file, but only as dynamic import.",
      ""
    ];
    o.line && r.push(
      m.white(
        `In your ${m.yellow(o.location)} file, line ${m.bold.cyan(
          o.num
        )} threw an error:`
      ),
      m.grey(o.line)
    ), r.push(
      "",
      m.white(
        `Convert the static import to a dynamic import ${m.underline("where they are used")}.`
      ),
      m.white("Example:") + " " + m.gray("await import(<your ESM only module>);"),
      ""
    );
    super({
      category: "CORE-SERVER",
      code: 5,
      documentation: "https://github.com/storybookjs/storybook/issues/23972#issuecomment-1948534058",
      message: r.join(`
`)
    });
    this.data = o;
  }
  static {
    n(this, "MainFileESMOnlyImportError");
  }
}, pe = class extends c {
  constructor(o) {
    super({
      category: "CORE-SERVER",
      code: 6,
      documentation: "https://storybook.js.org/docs/configure",
      message: l.dedent`
        No configuration files have been found in your configDir: ${m.yellow(o.location)}.
        Storybook needs a "main.js" file, please add it.
        
        You can pass a --config-dir flag to tell Storybook, where your main.js file is located at).`
    });
    this.data = o;
  }
  static {
    n(this, "MainFileMissingError");
  }
}, ge = class extends c {
  constructor(o) {
    let r = m.white(
      (o.error.stack || o.error.message).replaceAll(process.cwd(), "")
    );
    super({
      category: "CORE-SERVER",
      code: 7,
      message: l.dedent`
        Storybook couldn't evaluate your ${m.yellow(o.location)} file.
        
        Original error:
        ${r}`
    });
    this.data = o;
  }
  static {
    n(this, "MainFileEvaluationError");
  }
}, fe = class extends c {
  constructor(o) {
    super({
      category: "CLI_INIT",
      code: 3,
      documentation: "",
      message: l.dedent`
        There was an error while using ${o.packageManager} to create a new ${o.projectType} project.
        
        ${o.error instanceof Error ? o.error.message : ""}`
    });
    this.data = o;
  }
  static {
    n(this, "GenerateNewProjectOnInitError");
  }
}, me = class extends c {
  constructor(o) {
    super({
      category: "CLI_UPGRADE",
      code: 3,
      message: l.dedent`
        You are trying to upgrade Storybook to a lower version than the version currently installed. This is not supported.
        
        Storybook version ${o.beforeVersion} was detected in your project, but you are trying to "upgrade" to version ${o.currentVersion}.
        
        This usually happens when running the upgrade command without a version specifier, e.g. "npx storybook upgrade".
        This will cause npm to run the globally cached storybook binary, which might be an older version.
        
        Instead you should always run the Storybook CLI with a version specifier to force npm to download the latest version:
        
        "npx storybook@latest upgrade"`
    });
    this.data = o;
  }
  static {
    n(this, "UpgradeStorybookToLowerVersionError");
  }
}, he = class extends c {
  constructor(o) {
    super({
      category: "CLI_UPGRADE",
      code: 4,
      message: l.dedent`
        You are upgrading Storybook to the same version that is currently installed in the project, version ${o.beforeVersion}.
        
        This usually happens when running the upgrade command without a version specifier, e.g. "npx storybook upgrade".
        This will cause npm to run the globally cached storybook binary, which might be the same version that you already have.
        This also happens if you're running the Storybook CLI that is locally installed in your project.
        
        If you intended to upgrade to the latest version, you should always run the Storybook CLI with a version specifier to force npm to download the latest version:
        
        "npx storybook@latest upgrade"
        
        If you intended to re-run automigrations, you should run the "automigrate" command directly instead:
        
        "npx storybook automigrate"`
    });
    this.data = o;
  }
  static {
    n(this, "UpgradeStorybookToSameVersionError");
  }
}, ye = class extends c {
  static {
    n(this, "UpgradeStorybookUnknownCurrentVersionError");
  }
  constructor() {
    super({
      category: "CLI_UPGRADE",
      code: 5,
      message: l.dedent`
        We couldn't determine the current version of Storybook in your project.
        
        Are you running the Storybook CLI in a project without Storybook?
        It might help if you specify your Storybook config directory with the --config-dir flag.`
    });
  }
}, be = class extends c {
  static {
    n(this, "UpgradeStorybookInWrongWorkingDirectory");
  }
  constructor() {
    super({
      category: "CLI_UPGRADE",
      code: 6,
      message: l.dedent`
        You are running the upgrade command in a CWD that does not contain Storybook dependencies.
        
        Did you mean to run it in a different directory? Make sure the directory you run this command in contains a package.json with your Storybook dependencies.`
    });
  }
}, Ee = class extends c {
  static {
    n(this, "NoStatsForViteDevError");
  }
  constructor() {
    super({
      category: "BUILDER-VITE",
      code: 1,
      message: l.dedent`
        Unable to write preview stats as the Vite builder does not support stats in dev mode.
        
        Please remove the \`--stats-json\` flag when running in dev mode.`
    });
  }
}, Re = class extends c {
  constructor(o) {
    super({
      category: "CLI",
      code: 1,
      message: l.dedent`
        Unable to find versions of "${o.packageName}" using ${o.packageManager}
        ${o.error && `Reason: ${o.error}`}`
    });
    this.data = o;
  }
  static {
    n(this, "FindPackageVersionsError");
  }
};
export {
  se as AngularLegacyBuildOptionsError,
  Ue as Category,
  Q as ConflictingStaticDirConfigError,
  q as CouldNotEvaluateFrameworkError,
  ie as CriticalPresetLoadError,
  Re as FindPackageVersionsError,
  fe as GenerateNewProjectOnInitError,
  ce as GoogleFontsDownloadError,
  le as GoogleFontsLoadingError,
  J as InvalidFrameworkNameError,
  Z as InvalidStoriesEntryError,
  de as MainFileESMOnlyImportError,
  ge as MainFileEvaluationError,
  pe as MainFileMissingError,
  ne as MissingAngularJsonError,
  ae as MissingBuilderError,
  z as MissingFrameworkFieldError,
  ue as NoMatchingExportError,
  Ee as NoStatsForViteDevError,
  X as NxProjectDetectedError,
  be as UpgradeStorybookInWrongWorkingDirectory,
  me as UpgradeStorybookToLowerVersionError,
  he as UpgradeStorybookToSameVersionError,
  ye as UpgradeStorybookUnknownCurrentVersionError,
  re as WebpackCompilationError,
  oe as WebpackInvocationError,
  ee as WebpackMissingStatsError
};
