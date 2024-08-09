"use strict";
var kt = Object.create;
var z = Object.defineProperty;
var Ot = Object.getOwnPropertyDescriptor;
var Rt = Object.getOwnPropertyNames;
var St = Object.getPrototypeOf, It = Object.prototype.hasOwnProperty;
var i = (e, u) => z(e, "name", { value: u, configurable: !0 });
var He = (e, u) => () => (e && (u = e(e = 0)), u);
var l = (e, u) => () => (u || e((u = { exports: {} }).exports, u), u.exports), Ke = (e, u) => {
  for (var t in u)
    z(e, t, { get: u[t], enumerable: !0 });
}, Ze = (e, u, t, r) => {
  if (u && typeof u == "object" || typeof u == "function")
    for (let D of Rt(u))
      !It.call(e, D) && D !== t && z(e, D, { get: () => u[D], enumerable: !(r = Ot(u, D)) || r.enumerable });
  return e;
};
var V = (e, u, t) => (t = e != null ? kt(St(e)) : {}, Ze(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  u || !e || !e.__esModule ? z(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), Je = (e) => Ze(z({}, "__esModule", { value: !0 }), e);

// ../node_modules/npmlog/node_modules/are-we-there-yet/lib/tracker-base.js
var ge = l((sD, Xe) => {
  "use strict";
  var Lt = require("events"), Mt = 0, Ce = class extends Lt {
    static {
      i(this, "TrackerBase");
    }
    constructor(u) {
      super(), this.id = ++Mt, this.name = u;
    }
  };
  Xe.exports = Ce;
});

// ../node_modules/npmlog/node_modules/are-we-there-yet/lib/tracker.js
var X = l((aD, Qe) => {
  "use strict";
  var Nt = ge(), pe = class extends Nt {
    static {
      i(this, "Tracker");
    }
    constructor(u, t) {
      super(u), this.workDone = 0, this.workTodo = t || 0;
    }
    completed() {
      return this.workTodo === 0 ? 0 : this.workDone / this.workTodo;
    }
    addWork(u) {
      this.workTodo += u, this.emit("change", this.name, this.completed(), this);
    }
    completeWork(u) {
      this.workDone += u, this.workDone > this.workTodo && (this.workDone = this.workTodo), this.emit("change", this.name, this.completed(),
      this);
    }
    finish() {
      this.workTodo = this.workDone = 1, this.emit("change", this.name, 1, this);
    }
  };
  Qe.exports = pe;
});

// ../node_modules/npmlog/node_modules/are-we-there-yet/lib/tracker-stream.js
var de = l((hD, eu) => {
  "use strict";
  var qt = require("stream"), Ut = X(), Ee = class extends qt.Transform {
    static {
      i(this, "TrackerStream");
    }
    constructor(u, t, r) {
      super(r), this.tracker = new Ut(u, t), this.name = u, this.id = this.tracker.id, this.tracker.on("change", this.trackerChange.bind(this));
    }
    trackerChange(u, t) {
      this.emit("change", u, t, this);
    }
    _transform(u, t, r) {
      this.tracker.completeWork(u.length ? u.length : 1), this.push(u), r();
    }
    _flush(u) {
      this.tracker.finish(), u();
    }
    completed() {
      return this.tracker.completed();
    }
    addWork(u) {
      return this.tracker.addWork(u);
    }
    finish() {
      return this.tracker.finish();
    }
  };
  eu.exports = Ee;
});

// ../node_modules/npmlog/node_modules/are-we-there-yet/lib/tracker-group.js
var ru = l((cD, tu) => {
  "use strict";
  var Gt = ge(), uu = X(), Wt = de(), me = class e extends Gt {
    static {
      i(this, "TrackerGroup");
    }
    parentGroup = null;
    trackers = [];
    completion = {};
    weight = {};
    totalWeight = 0;
    finished = !1;
    bubbleChange = $t(this);
    nameInTree() {
      for (var u = [], t = this; t; )
        u.unshift(t.name), t = t.parentGroup;
      return u.join("/");
    }
    addUnit(u, t) {
      if (u.addUnit) {
        for (var r = this; r; ) {
          if (u === r)
            throw new Error(
              "Attempted to add tracker group " + u.name + " to tree that already includes it " + this.nameInTree(this)
            );
          r = r.parentGroup;
        }
        u.parentGroup = this;
      }
      return this.weight[u.id] = t || 1, this.totalWeight += this.weight[u.id], this.trackers.push(u), this.completion[u.id] = u.completed(),
      u.on("change", this.bubbleChange), this.finished || this.emit("change", u.name, this.completion[u.id], u), u;
    }
    completed() {
      if (this.trackers.length === 0)
        return 0;
      for (var u = 1 / this.totalWeight, t = 0, r = 0; r < this.trackers.length; r++) {
        var D = this.trackers[r].id;
        t += u * this.weight[D] * this.completion[D];
      }
      return t;
    }
    newGroup(u, t) {
      return this.addUnit(new e(u), t);
    }
    newItem(u, t, r) {
      return this.addUnit(new uu(u, t), r);
    }
    newStream(u, t, r) {
      return this.addUnit(new Wt(u, t), r);
    }
    finish() {
      this.finished = !0, this.trackers.length || this.addUnit(new uu(), 1, !0);
      for (var u = 0; u < this.trackers.length; u++) {
        var t = this.trackers[u];
        t.finish(), t.removeListener("change", this.bubbleChange);
      }
      this.emit("change", this.name, 1, this);
    }
    debug(u = 0) {
      let t = " ".repeat(u), r = `${t}${this.name || "top"}: ${this.completed()}
`;
      return this.trackers.forEach(function(D) {
        r += D instanceof e ? D.debug(u + 1) : `${t} ${D.name}: ${D.completed()}
`;
      }), r;
    }
  };
  function $t(e) {
    return function(u, t, r) {
      e.completion[r.id] = t, !e.finished && e.emit("change", u || e.name, e.completed(), e);
    };
  }
  i($t, "bubbleChange");
  tu.exports = me;
});

// ../node_modules/npmlog/node_modules/are-we-there-yet/lib/index.js
var Du = l((Q) => {
  "use strict";
  Q.TrackerGroup = ru();
  Q.Tracker = X();
  Q.TrackerStream = de();
});

// ../node_modules/console-control-strings/index.js
var ee = l((d) => {
  "use strict";
  var m = "\x1B[";
  d.up = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "A";
  }, "up");
  d.down = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "B";
  }, "down");
  d.forward = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "C";
  }, "forward");
  d.back = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "D";
  }, "back");
  d.nextLine = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "E";
  }, "nextLine");
  d.previousLine = /* @__PURE__ */ i(function(u) {
    return m + (u || "") + "F";
  }, "previousLine");
  d.horizontalAbsolute = /* @__PURE__ */ i(function(u) {
    if (u == null) throw new Error("horizontalAboslute requires a column to position to");
    return m + u + "G";
  }, "horizontalAbsolute");
  d.eraseData = /* @__PURE__ */ i(function() {
    return m + "J";
  }, "eraseData");
  d.eraseLine = /* @__PURE__ */ i(function() {
    return m + "K";
  }, "eraseLine");
  d.goto = function(e, u) {
    return m + u + ";" + e + "H";
  };
  d.gotoSOL = function() {
    return "\r";
  };
  d.beep = function() {
    return "\x07";
  };
  d.hideCursor = /* @__PURE__ */ i(function() {
    return m + "?25l";
  }, "hideCursor");
  d.showCursor = /* @__PURE__ */ i(function() {
    return m + "?25h";
  }, "showCursor");
  var iu = {
    reset: 0,
    // styles
    bold: 1,
    italic: 3,
    underline: 4,
    inverse: 7,
    // resets
    stopBold: 22,
    stopItalic: 23,
    stopUnderline: 24,
    stopInverse: 27,
    // colors
    white: 37,
    black: 30,
    blue: 34,
    cyan: 36,
    green: 32,
    magenta: 35,
    red: 31,
    yellow: 33,
    bgWhite: 47,
    bgBlack: 40,
    bgBlue: 44,
    bgCyan: 46,
    bgGreen: 42,
    bgMagenta: 45,
    bgRed: 41,
    bgYellow: 43,
    grey: 90,
    brightBlack: 90,
    brightRed: 91,
    brightGreen: 92,
    brightYellow: 93,
    brightBlue: 94,
    brightMagenta: 95,
    brightCyan: 96,
    brightWhite: 97,
    bgGrey: 100,
    bgBrightBlack: 100,
    bgBrightRed: 101,
    bgBrightGreen: 102,
    bgBrightYellow: 103,
    bgBrightBlue: 104,
    bgBrightMagenta: 105,
    bgBrightCyan: 106,
    bgBrightWhite: 107
  };
  d.color = /* @__PURE__ */ i(function(u) {
    return (arguments.length !== 1 || !Array.isArray(u)) && (u = Array.prototype.slice.call(arguments)), m + u.map(Pt).join(";") + "m";
  }, "color");
  function Pt(e) {
    if (iu[e] != null) return iu[e];
    throw new Error("Unknown color or style name: " + e);
  }
  i(Pt, "colorNameToCode");
});

// ../node_modules/ansi-regex/index.js
var ve = l((ED, nu) => {
  "use strict";
  nu.exports = ({ onlyFirst: e = !1 } = {}) => {
    let u = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(u, e ? void 0 : "g");
  };
});

// ../node_modules/string-width/node_modules/strip-ansi/index.js
var ou = l((dD, su) => {
  "use strict";
  var Yt = ve();
  su.exports = (e) => typeof e == "string" ? e.replace(Yt(), "") : e;
});

// ../node_modules/is-fullwidth-code-point/index.js
var lu = l((mD, be) => {
  "use strict";
  var au = /* @__PURE__ */ i((e) => Number.isNaN(e) ? !1 : e >= 4352 && (e <= 4447 || // Hangul Jamo
  e === 9001 || // LEFT-POINTING ANGLE BRACKET
  e === 9002 || // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  11904 <= e && e <= 12871 && e !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  12880 <= e && e <= 19903 || // CJK Unified Ideographs .. Yi Radicals
  19968 <= e && e <= 42182 || // Hangul Jamo Extended-A
  43360 <= e && e <= 43388 || // Hangul Syllables
  44032 <= e && e <= 55203 || // CJK Compatibility Ideographs
  63744 <= e && e <= 64255 || // Vertical Forms
  65040 <= e && e <= 65049 || // CJK Compatibility Forms .. Small Form Variants
  65072 <= e && e <= 65131 || // Halfwidth and Fullwidth Forms
  65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || // Kana Supplement
  110592 <= e && e <= 110593 || // Enclosed Ideographic Supplement
  127488 <= e && e <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  131072 <= e && e <= 262141), "isFullwidthCodePoint");
  be.exports = au;
  be.exports.default = au;
});

// ../node_modules/string-width/node_modules/emoji-regex/index.js
var fu = l((bD, hu) => {
  "use strict";
  hu.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});

// ../node_modules/string-width/index.js
var j = l((BD, Be) => {
  "use strict";
  var zt = ou(), Vt = lu(), jt = fu(), cu = /* @__PURE__ */ i((e) => {
    if (typeof e != "string" || e.length === 0 || (e = zt(e), e.length === 0))
      return 0;
    e = e.replace(jt(), "  ");
    let u = 0;
    for (let t = 0; t < e.length; t++) {
      let r = e.codePointAt(t);
      r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (r > 65535 && t++, u += Vt(r) ? 2 : 1);
    }
    return u;
  }, "stringWidth");
  Be.exports = cu;
  Be.exports.default = cu;
});

// ../node_modules/wide-align/align.js
var Fu = l((te) => {
  "use strict";
  var Ae = j();
  te.center = Zt;
  te.left = Ht;
  te.right = Kt;
  function ue(e) {
    var u = "", t = " ", r = e;
    do
      r % 2 && (u += t), r = Math.floor(r / 2), t += t;
    while (r);
    return u;
  }
  i(ue, "createPadding");
  function Ht(e, u) {
    var t = e.trimRight();
    if (t.length === 0 && e.length >= u) return e;
    var r = "", D = Ae(t);
    return D < u && (r = ue(u - D)), t + r;
  }
  i(Ht, "alignLeft");
  function Kt(e, u) {
    var t = e.trimLeft();
    if (t.length === 0 && e.length >= u) return e;
    var r = "", D = Ae(t);
    return D < u && (r = ue(u - D)), r + t;
  }
  i(Kt, "alignRight");
  function Zt(e, u) {
    var t = e.trim();
    if (t.length === 0 && e.length >= u) return e;
    var r = "", D = "", n = Ae(t);
    if (n < u) {
      var o = parseInt((u - n) / 2, 10);
      r = ue(o), D = ue(u - (n + o));
    }
    return r + t + D;
  }
  i(Zt, "alignCenter");
});

// ../node_modules/aproba/index.js
var De = l((TD, du) => {
  "use strict";
  du.exports = pu;
  function Jt(e) {
    return e != null && typeof e == "object" && e.hasOwnProperty("callee");
  }
  i(Jt, "isArguments");
  var _ = {
    "*": { label: "any", check: /* @__PURE__ */ i(() => !0, "check") },
    A: { label: "array", check: /* @__PURE__ */ i((e) => Array.isArray(e) || Jt(e), "check") },
    S: { label: "string", check: /* @__PURE__ */ i((e) => typeof e == "string", "check") },
    N: { label: "number", check: /* @__PURE__ */ i((e) => typeof e == "number", "check") },
    F: { label: "function", check: /* @__PURE__ */ i((e) => typeof e == "function", "check") },
    O: { label: "object", check: /* @__PURE__ */ i((e) => typeof e == "object" && e != null && !_.A.check(e) && !_.E.check(e), "check") },
    B: { label: "boolean", check: /* @__PURE__ */ i((e) => typeof e == "boolean", "check") },
    E: { label: "error", check: /* @__PURE__ */ i((e) => e instanceof Error, "check") },
    Z: { label: "null", check: /* @__PURE__ */ i((e) => e == null, "check") }
  };
  function re(e, u) {
    let t = u[e.length] = u[e.length] || [];
    t.indexOf(e) === -1 && t.push(e);
  }
  i(re, "addSchema");
  function pu(e, u) {
    if (arguments.length !== 2) throw gu(["SA"], arguments.length);
    if (!e) throw Cu(0, "rawSchemas");
    if (!u) throw Cu(1, "args");
    if (!_.S.check(e)) throw xe(0, ["string"], e);
    if (!_.A.check(u)) throw xe(1, ["array"], u);
    let t = e.split("|"), r = {};
    t.forEach((n) => {
      for (let o = 0; o < n.length; ++o) {
        let h = n[o];
        if (!_[h]) throw Xt(o, h);
      }
      if (/E.*E/.test(n)) throw Qt(n);
      re(n, r), /E/.test(n) && (re(n.replace(/E.*$/, "E"), r), re(n.replace(/E/, "Z"), r), n.length === 1 && re("", r));
    });
    let D = r[u.length];
    if (!D)
      throw gu(Object.keys(r), u.length);
    for (let n = 0; n < u.length; ++n) {
      let o = D.filter((h) => {
        let f = h[n], C = _[f].check;
        return C(u[n]);
      });
      if (!o.length) {
        let h = D.map((f) => _[f[n]].label).filter((f) => f != null);
        throw xe(n, h, u[n]);
      }
      D = o;
    }
  }
  i(pu, "validate");
  function Cu(e) {
    return H("EMISSINGARG", "Missing required argument #" + (e + 1));
  }
  i(Cu, "missingRequiredArg");
  function Xt(e, u) {
    return H("EUNKNOWNTYPE", "Unknown type " + u + " in argument #" + (e + 1));
  }
  i(Xt, "unknownType");
  function xe(e, u, t) {
    let r;
    return Object.keys(_).forEach((D) => {
      _[D].check(t) && (r = _[D].label);
    }), H("EINVALIDTYPE", "Argument #" + (e + 1) + ": Expected " + Eu(u) + " but got " + r);
  }
  i(xe, "invalidType");
  function Eu(e) {
    return e.join(", ").replace(/, ([^,]+)$/, " or $1");
  }
  i(Eu, "englishList");
  function gu(e, u) {
    let t = Eu(e), r = e.every((D) => D.length === 1) ? "argument" : "arguments";
    return H("EWRONGARGCOUNT", "Expected " + t + " " + r + " but got " + u);
  }
  i(gu, "wrongNumberOfArgs");
  function Qt(e) {
    return H(
      "ETOOMANYERRORTYPES",
      'Only one error type per argument signature is allowed, more than one found in "' + e + '"'
    );
  }
  i(Qt, "moreThanOneError");
  function H(e, u) {
    let t = new Error(u);
    return t.code = e, Error.captureStackTrace && Error.captureStackTrace(t, pu), t;
  }
  i(H, "newException");
});

// ../node_modules/npmlog/node_modules/strip-ansi/index.js
var vu = l((_D, mu) => {
  "use strict";
  var er = ve();
  mu.exports = (e) => typeof e == "string" ? e.replace(er(), "") : e;
});

// ../node_modules/npmlog/node_modules/gauge/lib/wide-truncate.js
var Te = l((kD, bu) => {
  "use strict";
  var ye = j(), ur = vu();
  bu.exports = tr;
  function tr(e, u) {
    if (ye(e) === 0)
      return e;
    if (u <= 0)
      return "";
    if (ye(e) <= u)
      return e;
    for (var t = ur(e), r = e.length + t.length, D = e.slice(0, u + r); ye(D) > u; )
      D = D.slice(0, -1);
    return D;
  }
  i(tr, "wideTruncate");
});

// ../node_modules/npmlog/node_modules/gauge/lib/error.js
var Bu = l((ie) => {
  "use strict";
  var rr = require("util"), Dr = ie.User = /* @__PURE__ */ i(function e(u) {
    var t = new Error(u);
    return Error.captureStackTrace(t, e), t.code = "EGAUGE", t;
  }, "User");
  ie.MissingTemplateValue = /* @__PURE__ */ i(function e(u, t) {
    var r = new Dr(rr.format('Missing template value "%s"', u.type));
    return Error.captureStackTrace(r, e), r.template = u, r.values = t, r;
  }, "MissingTemplateValue");
  ie.Internal = /* @__PURE__ */ i(function e(u) {
    var t = new Error(u);
    return Error.captureStackTrace(t, e), t.code = "EGAUGEINTERNAL", t;
  }, "Internal");
});

// ../node_modules/npmlog/node_modules/gauge/lib/template-item.js
var xu = l((ID, Au) => {
  "use strict";
  var ir = j();
  Au.exports = N;
  function we(e) {
    return typeof e != "string" ? !1 : e.slice(-1) === "%";
  }
  i(we, "isPercent");
  function _e(e) {
    return Number(e.slice(0, -1)) / 100;
  }
  i(_e, "percent");
  function N(e, u) {
    if (this.overallOutputLength = u, this.finished = !1, this.type = null, this.value = null, this.length = null, this.maxLength = null, this.
    minLength = null, this.kerning = null, this.align = "left", this.padLeft = 0, this.padRight = 0, this.index = null, this.first = null, this.
    last = null, typeof e == "string")
      this.value = e;
    else
      for (var t in e)
        this[t] = e[t];
    return we(this.length) && (this.length = Math.round(this.overallOutputLength * _e(this.length))), we(this.minLength) && (this.minLength =
    Math.round(this.overallOutputLength * _e(this.minLength))), we(this.maxLength) && (this.maxLength = Math.round(this.overallOutputLength *
    _e(this.maxLength))), this;
  }
  i(N, "TemplateItem");
  N.prototype = {};
  N.prototype.getBaseLength = function() {
    var e = this.length;
    return e == null && typeof this.value == "string" && this.maxLength == null && this.minLength == null && (e = ir(this.value)), e;
  };
  N.prototype.getLength = function() {
    var e = this.getBaseLength();
    return e == null ? null : e + this.padLeft + this.padRight;
  };
  N.prototype.getMaxLength = function() {
    return this.maxLength == null ? null : this.maxLength + this.padLeft + this.padRight;
  };
  N.prototype.getMinLength = function() {
    return this.minLength == null ? null : this.minLength + this.padLeft + this.padRight;
  };
});

// ../node_modules/npmlog/node_modules/gauge/lib/render-template.js
var ke = l((MD, _u) => {
  "use strict";
  var K = Fu(), nr = De(), yu = Te(), q = Bu(), sr = xu();
  function or(e) {
    return function(u) {
      return Fr(u, e);
    };
  }
  i(or, "renderValueWithValues");
  var ar = _u.exports = function(e, u, t) {
    var r = fr(e, u, t), D = r.map(or(t)).join("");
    return K.left(yu(D, e), e);
  };
  function Tu(e) {
    var u = e.type[0].toUpperCase() + e.type.slice(1);
    return "pre" + u;
  }
  i(Tu, "preType");
  function wu(e) {
    var u = e.type[0].toUpperCase() + e.type.slice(1);
    return "post" + u;
  }
  i(wu, "postType");
  function lr(e, u) {
    if (e.type)
      return u[Tu(e)] || u[wu(e)];
  }
  i(lr, "hasPreOrPost");
  function hr(e, u) {
    var t = Object.assign({}, e), r = Object.create(u), D = [], n = Tu(t), o = wu(t);
    return r[n] && (D.push({ value: r[n] }), r[n] = null), t.minLength = null, t.length = null, t.maxLength = null, D.push(t), r[t.type] = r[t.
    type], r[o] && (D.push({ value: r[o] }), r[o] = null), function(h, f, C) {
      return ar(C, D, r);
    };
  }
  i(hr, "generatePreAndPost");
  function fr(e, u, t) {
    function r(a, w, _t) {
      var E = new sr(a, e), je = E.type;
      if (E.value == null)
        if (je in t)
          E.value = t[je];
        else {
          if (E.default == null)
            throw new q.MissingTemplateValue(E, t);
          E.value = E.default;
        }
      return E.value == null || E.value === "" ? null : (E.index = w, E.first = w === 0, E.last = w === _t.length - 1, lr(E, t) && (E.value =
      hr(E, t)), E);
    }
    i(r, "cloneAndObjectify");
    var D = u.map(r).filter(function(a) {
      return a != null;
    }), n = e, o = D.length;
    function h(a) {
      a > n && (a = n), n -= a;
    }
    i(h, "consumeSpace");
    function f(a, w) {
      if (a.finished)
        throw new q.Internal("Tried to finish template item that was already finished");
      if (w === 1 / 0)
        throw new q.Internal("Length of template item cannot be infinity");
      if (w != null && (a.length = w), a.minLength = null, a.maxLength = null, --o, a.finished = !0, a.length == null && (a.length = a.getBaseLength()),
      a.length == null)
        throw new q.Internal("Finished template items must have a length");
      h(a.getLength());
    }
    i(f, "finishSizing"), D.forEach(function(a) {
      if (a.kerning) {
        var w = a.first ? 0 : D[a.index - 1].padRight;
        !a.first && w < a.kerning && (a.padLeft = a.kerning - w), a.last || (a.padRight = a.kerning);
      }
    }), D.forEach(function(a) {
      a.getBaseLength() != null && f(a);
    });
    var C = 0, g, b;
    do
      g = !1, b = Math.round(n / o), D.forEach(function(a) {
        a.finished || a.maxLength && a.getMaxLength() < b && (f(a, a.maxLength), g = !0);
      });
    while (g && C++ < D.length);
    if (g)
      throw new q.Internal("Resize loop iterated too many times while determining maxLength");
    C = 0;
    do
      g = !1, b = Math.round(n / o), D.forEach(function(a) {
        a.finished || a.minLength && a.getMinLength() >= b && (f(a, a.minLength), g = !0);
      });
    while (g && C++ < D.length);
    if (g)
      throw new q.Internal("Resize loop iterated too many times while determining minLength");
    return b = Math.round(n / o), D.forEach(function(a) {
      a.finished || f(a, b);
    }), D;
  }
  i(fr, "prepareItems");
  function cr(e, u, t) {
    return nr("OON", arguments), e.type ? e.value(u, u[e.type + "Theme"] || {}, t) : e.value(u, {}, t);
  }
  i(cr, "renderFunction");
  function Fr(e, u) {
    var t = e.getBaseLength(), r = typeof e.value == "function" ? cr(e, u, t) : e.value;
    if (r == null || r === "")
      return "";
    var D = K[e.align] || K.left, n = e.padLeft ? K.left("", e.padLeft) : "", o = e.padRight ? K.right("", e.padRight) : "", h = yu(String(r),
    t), f = D(h, t);
    return n + f + o;
  }
  i(Fr, "renderValue");
});

// ../node_modules/npmlog/node_modules/gauge/lib/plumbing.js
var Ou = l((qD, ku) => {
  "use strict";
  var L = ee(), Cr = ke(), ne = De(), R = ku.exports = function(e, u, t) {
    t || (t = 80), ne("OAN", [e, u, t]), this.showing = !1, this.theme = e, this.width = t, this.template = u;
  };
  R.prototype = {};
  R.prototype.setTheme = function(e) {
    ne("O", [e]), this.theme = e;
  };
  R.prototype.setTemplate = function(e) {
    ne("A", [e]), this.template = e;
  };
  R.prototype.setWidth = function(e) {
    ne("N", [e]), this.width = e;
  };
  R.prototype.hide = function() {
    return L.gotoSOL() + L.eraseLine();
  };
  R.prototype.hideCursor = L.hideCursor;
  R.prototype.showCursor = L.showCursor;
  R.prototype.show = function(e) {
    var u = Object.create(this.theme);
    for (var t in e)
      u[t] = e[t];
    return Cr(this.width, this.template, u).trim() + L.color("reset") + L.eraseLine() + L.gotoSOL();
  };
});

// ../node_modules/has-unicode/index.js
var Su = l((GD, Ru) => {
  "use strict";
  var gr = require("os"), UD = Ru.exports = function() {
    if (gr.type() == "Windows_NT")
      return !1;
    var e = /UTF-?8$/i, u = process.env.LC_ALL || process.env.LC_CTYPE || process.env.LANG;
    return e.test(u);
  };
});

// ../node_modules/color-support/index.js
var Mu = l((WD, Lu) => {
  Lu.exports = Iu({ alwaysReturn: !0 }, Iu);
  function U(e, u) {
    return e.level = 0, e.hasBasic = !1, e.has256 = !1, e.has16m = !1, u.alwaysReturn ? e : !1;
  }
  i(U, "hasNone");
  function se(e) {
    return e.hasBasic = !0, e.has256 = !1, e.has16m = !1, e.level = 1, e;
  }
  i(se, "hasBasic");
  function G(e) {
    return e.hasBasic = !0, e.has256 = !0, e.has16m = !1, e.level = 2, e;
  }
  i(G, "has256");
  function oe(e) {
    return e.hasBasic = !0, e.has256 = !0, e.has16m = !0, e.level = 3, e;
  }
  i(oe, "has16m");
  function Iu(e, u) {
    if (e = e || {}, u = u || {}, typeof e.level == "number")
      switch (e.level) {
        case 0:
          return U(u, e);
        case 1:
          return se(u);
        case 2:
          return G(u);
        case 3:
          return oe(u);
      }
    if (u.level = 0, u.hasBasic = !1, u.has256 = !1, u.has16m = !1, typeof process > "u" || !process || !process.stdout || !process.env || !process.
    platform)
      return U(u, e);
    var t = e.env || process.env, r = e.stream || process.stdout, D = e.term || t.TERM || "", n = e.platform || process.platform;
    if (!e.ignoreTTY && !r.isTTY || !e.ignoreDumb && D === "dumb" && !t.COLORTERM)
      return U(u, e);
    if (n === "win32")
      return se(u);
    if (t.TMUX)
      return G(u);
    if (!e.ignoreCI && (t.CI || t.TEAMCITY_VERSION))
      return t.TRAVIS ? G(u) : U(u, e);
    switch (t.TERM_PROGRAM) {
      case "iTerm.app":
        var o = t.TERM_PROGRAM_VERSION || "0.";
        return /^[0-2]\./.test(o) ? G(u) : oe(u);
      case "HyperTerm":
      case "Hyper":
        return oe(u);
      case "MacTerm":
        return oe(u);
      case "Apple_Terminal":
        return G(u);
    }
    return /^xterm-256/.test(D) ? G(u) : /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(D) || t.COLORTERM ? se(u) : U(u, e);
  }
  i(Iu, "colorSupport");
});

// ../node_modules/npmlog/node_modules/gauge/lib/has-color.js
var qu = l((PD, Nu) => {
  "use strict";
  var pr = Mu();
  Nu.exports = pr().hasBasic;
});

// ../node_modules/npmlog/node_modules/signal-exit/dist/mjs/signals.js
var S, Uu = He(() => {
  S = [];
  S.push("SIGHUP", "SIGINT", "SIGTERM");
  process.platform !== "win32" && S.push(
    "SIGALRM",
    "SIGABRT",
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
  process.platform === "linux" && S.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
});

// ../node_modules/npmlog/node_modules/signal-exit/dist/mjs/index.js
var Gu = {};
Ke(Gu, {
  load: () => vr,
  onExit: () => mr,
  signals: () => S,
  unload: () => br
});
var ae, Oe, Re, Er, Se, le, dr, Ie, Le, Me, mr, vr, br, Wu = He(() => {
  Uu();
  ae = /* @__PURE__ */ i((e) => !!e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.
  reallyExit == "function" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "\
function", "processOk"), Oe = Symbol.for("signal-exit emitter"), Re = globalThis, Er = Object.defineProperty.bind(Object), Se = class {
    static {
      i(this, "Emitter");
    }
    emitted = {
      afterExit: !1,
      exit: !1
    };
    listeners = {
      afterExit: [],
      exit: []
    };
    count = 0;
    id = Math.random();
    constructor() {
      if (Re[Oe])
        return Re[Oe];
      Er(Re, Oe, {
        value: this,
        writable: !1,
        enumerable: !1,
        configurable: !1
      });
    }
    on(u, t) {
      this.listeners[u].push(t);
    }
    removeListener(u, t) {
      let r = this.listeners[u], D = r.indexOf(t);
      D !== -1 && (D === 0 && r.length === 1 ? r.length = 0 : r.splice(D, 1));
    }
    emit(u, t, r) {
      if (this.emitted[u])
        return !1;
      this.emitted[u] = !0;
      let D = !1;
      for (let n of this.listeners[u])
        D = n(t, r) === !0 || D;
      return u === "exit" && (D = this.emit("afterExit", t, r) || D), D;
    }
  }, le = class {
    static {
      i(this, "SignalExitBase");
    }
  }, dr = /* @__PURE__ */ i((e) => ({
    onExit(u, t) {
      return e.onExit(u, t);
    },
    load() {
      return e.load();
    },
    unload() {
      return e.unload();
    }
  }), "signalExitWrap"), Ie = class extends le {
    static {
      i(this, "SignalExitFallback");
    }
    onExit() {
      return () => {
      };
    }
    load() {
    }
    unload() {
    }
  }, Le = class extends le {
    static {
      i(this, "SignalExit");
    }
    // "SIGHUP" throws an `ENOSYS` error on Windows,
    // so use a supported signal instead
    /* c8 ignore start */
    #n = Me.platform === "win32" ? "SIGINT" : "SIGHUP";
    /* c8 ignore stop */
    #u = new Se();
    #e;
    #D;
    #i;
    #r = {};
    #t = !1;
    constructor(u) {
      super(), this.#e = u, this.#r = {};
      for (let t of S)
        this.#r[t] = () => {
          let r = this.#e.listeners(t), { count: D } = this.#u, n = u;
          if (typeof n.__signal_exit_emitter__ == "object" && typeof n.__signal_exit_emitter__.count == "number" && (D += n.__signal_exit_emitter__.
          count), r.length === D) {
            this.unload();
            let o = this.#u.emit("exit", null, t), h = t === "SIGHUP" ? this.#n : t;
            o || u.kill(u.pid, h);
          }
        };
      this.#i = u.reallyExit, this.#D = u.emit;
    }
    onExit(u, t) {
      if (!ae(this.#e))
        return () => {
        };
      this.#t === !1 && this.load();
      let r = t?.alwaysLast ? "afterExit" : "exit";
      return this.#u.on(r, u), () => {
        this.#u.removeListener(r, u), this.#u.listeners.exit.length === 0 && this.#u.listeners.afterExit.length === 0 && this.unload();
      };
    }
    load() {
      if (!this.#t) {
        this.#t = !0, this.#u.count += 1;
        for (let u of S)
          try {
            let t = this.#r[u];
            t && this.#e.on(u, t);
          } catch {
          }
        this.#e.emit = (u, ...t) => this.#o(u, ...t), this.#e.reallyExit = (u) => this.#s(u);
      }
    }
    unload() {
      this.#t && (this.#t = !1, S.forEach((u) => {
        let t = this.#r[u];
        if (!t)
          throw new Error("Listener not defined for signal: " + u);
        try {
          this.#e.removeListener(u, t);
        } catch {
        }
      }), this.#e.emit = this.#D, this.#e.reallyExit = this.#i, this.#u.count -= 1);
    }
    #s(u) {
      return ae(this.#e) ? (this.#e.exitCode = u || 0, this.#u.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode)) :
      0;
    }
    #o(u, ...t) {
      let r = this.#D;
      if (u === "exit" && ae(this.#e)) {
        typeof t[0] == "number" && (this.#e.exitCode = t[0]);
        let D = r.call(this.#e, u, ...t);
        return this.#u.emit("exit", this.#e.exitCode, null), D;
      } else
        return r.call(this.#e, u, ...t);
    }
  }, Me = globalThis.process, {
    onExit: (
      /**
       * Called when the process is exiting, whether via signal, explicit
       * exit, or running out of stuff to do.
       *
       * If the global process object is not suitable for instrumentation,
       * then this will be a no-op.
       *
       * Returns a function that may be used to unload signal-exit.
       */
      mr
    ),
    load: (
      /**
       * Load the listeners.  Likely you never need to call this, unless
       * doing a rather deep integration with signal-exit functionality.
       * Mostly exposed for the benefit of testing.
       *
       * @internal
       */
      vr
    ),
    unload: (
      /**
       * Unload the listeners.  Likely you never need to call this, unless
       * doing a rather deep integration with signal-exit functionality.
       * Mostly exposed for the benefit of testing.
       *
       * @internal
       */
      br
    )
  } = dr(ae(Me) ? new Le(Me) : new Ie());
});

// ../node_modules/npmlog/node_modules/gauge/lib/spin.js
var Pu = l((jD, $u) => {
  "use strict";
  $u.exports = /* @__PURE__ */ i(function(u, t) {
    return u[t % u.length];
  }, "spin");
});

// ../node_modules/npmlog/node_modules/gauge/lib/progress-bar.js
var Vu = l((KD, zu) => {
  "use strict";
  var Br = De(), Ar = ke(), xr = Te(), yr = j();
  zu.exports = function(e, u, t) {
    if (Br("ONN", [e, u, t]), t < 0 && (t = 0), t > 1 && (t = 1), u <= 0)
      return "";
    var r = Math.round(u * t), D = u - r, n = [
      { type: "complete", value: Yu(e.complete, r), length: r },
      { type: "remaining", value: Yu(e.remaining, D), length: D }
    ];
    return Ar(u, n, e);
  };
  function Yu(e, u) {
    var t = "", r = u;
    do
      r % 2 && (t += e), r = Math.floor(r / 2), e += e;
    while (r && yr(t) < u);
    return xr(t, u);
  }
  i(Yu, "repeat");
});

// ../node_modules/npmlog/node_modules/gauge/lib/base-theme.js
var Hu = l((JD, ju) => {
  "use strict";
  var Tr = Pu(), wr = Vu();
  ju.exports = {
    activityIndicator: /* @__PURE__ */ i(function(e, u, t) {
      if (e.spun != null)
        return Tr(u, e.spun);
    }, "activityIndicator"),
    progressbar: /* @__PURE__ */ i(function(e, u, t) {
      if (e.completed != null)
        return wr(u, t, e.completed);
    }, "progressbar")
  };
});

// ../node_modules/npmlog/node_modules/gauge/lib/theme-set.js
var Zu = l((QD, Ku) => {
  "use strict";
  Ku.exports = function() {
    return v.newThemeSet();
  };
  var v = {};
  v.baseTheme = Hu();
  v.newTheme = function(e, u) {
    return u || (u = e, e = this.baseTheme), Object.assign({}, e, u);
  };
  v.getThemeNames = function() {
    return Object.keys(this.themes);
  };
  v.addTheme = function(e, u, t) {
    this.themes[e] = this.newTheme(u, t);
  };
  v.addToAllThemes = function(e) {
    var u = this.themes;
    Object.keys(u).forEach(function(t) {
      Object.assign(u[t], e);
    }), Object.assign(this.baseTheme, e);
  };
  v.getTheme = function(e) {
    if (!this.themes[e])
      throw this.newMissingThemeError(e);
    return this.themes[e];
  };
  v.setDefault = function(e, u) {
    u == null && (u = e, e = {});
    var t = e.platform == null ? "fallback" : e.platform, r = !!e.hasUnicode, D = !!e.hasColor;
    this.defaults[t] || (this.defaults[t] = { true: {}, false: {} }), this.defaults[t][r][D] = u;
  };
  v.getDefault = function(e) {
    e || (e = {});
    var u = e.platform || process.platform, t = this.defaults[u] || this.defaults.fallback, r = !!e.hasUnicode, D = !!e.hasColor;
    if (!t)
      throw this.newMissingDefaultThemeError(u, r, D);
    if (!t[r][D]) {
      if (r && D && t[!r][D])
        r = !1;
      else if (r && D && t[r][!D])
        D = !1;
      else if (r && D && t[!r][!D])
        r = !1, D = !1;
      else if (r && !D && t[!r][D])
        r = !1;
      else if (!r && D && t[r][!D])
        D = !1;
      else if (t === this.defaults.fallback)
        throw this.newMissingDefaultThemeError(u, r, D);
    }
    return t[r][D] ? this.getTheme(t[r][D]) : this.getDefault(Object.assign({}, e, { platform: "fallback" }));
  };
  v.newMissingThemeError = /* @__PURE__ */ i(function e(u) {
    var t = new Error('Could not find a gauge theme named "' + u + '"');
    return Error.captureStackTrace.call(t, e), t.theme = u, t.code = "EMISSINGTHEME", t;
  }, "newMissingThemeError");
  v.newMissingDefaultThemeError = /* @__PURE__ */ i(function e(u, t, r) {
    var D = new Error(
      `Could not find a gauge theme for your platform/unicode/color use combo:
    platform = ` + u + `
    hasUnicode = ` + t + `
    hasColor = ` + r
    );
    return Error.captureStackTrace.call(D, e), D.platform = u, D.hasUnicode = t, D.hasColor = r, D.code = "EMISSINGTHEME", D;
  }, "newMissingDefaultThemeError");
  v.newThemeSet = function() {
    var e = /* @__PURE__ */ i(function(u) {
      return e.getDefault(u);
    }, "themeset");
    return Object.assign(e, v, {
      themes: Object.assign({}, this.themes),
      baseTheme: Object.assign({}, this.baseTheme),
      defaults: JSON.parse(JSON.stringify(this.defaults || {}))
    });
  };
});

// ../node_modules/npmlog/node_modules/gauge/lib/themes.js
var Xu = l((ui, Ju) => {
  "use strict";
  var I = ee().color, _r = Zu(), B = Ju.exports = new _r();
  B.addTheme("ASCII", {
    preProgressbar: "[",
    postProgressbar: "]",
    progressbarTheme: {
      complete: "#",
      remaining: "."
    },
    activityIndicatorTheme: "-\\|/",
    preSubsection: ">"
  });
  B.addTheme("colorASCII", B.getTheme("ASCII"), {
    progressbarTheme: {
      preComplete: I("bgBrightWhite", "brightWhite"),
      complete: "#",
      postComplete: I("reset"),
      preRemaining: I("bgBrightBlack", "brightBlack"),
      remaining: ".",
      postRemaining: I("reset")
    }
  });
  B.addTheme("brailleSpinner", {
    preProgressbar: "(",
    postProgressbar: ")",
    progressbarTheme: {
      complete: "#",
      remaining: "\u2802"
    },
    activityIndicatorTheme: "\u280B\u2819\u2839\u2838\u283C\u2834\u2826\u2827\u2807\u280F",
    preSubsection: ">"
  });
  B.addTheme("colorBrailleSpinner", B.getTheme("brailleSpinner"), {
    progressbarTheme: {
      preComplete: I("bgBrightWhite", "brightWhite"),
      complete: "#",
      postComplete: I("reset"),
      preRemaining: I("bgBrightBlack", "brightBlack"),
      remaining: "\u2802",
      postRemaining: I("reset")
    }
  });
  B.setDefault({}, "ASCII");
  B.setDefault({ hasColor: !0 }, "colorASCII");
  B.setDefault({ platform: "darwin", hasUnicode: !0 }, "brailleSpinner");
  B.setDefault({ platform: "darwin", hasUnicode: !0, hasColor: !0 }, "colorBrailleSpinner");
  B.setDefault({ platform: "linux", hasUnicode: !0 }, "brailleSpinner");
  B.setDefault({ platform: "linux", hasUnicode: !0, hasColor: !0 }, "colorBrailleSpinner");
});

// ../node_modules/npmlog/node_modules/gauge/lib/set-interval.js
var et = l((ti, Qu) => {
  "use strict";
  Qu.exports = setInterval;
});

// ../node_modules/npmlog/node_modules/gauge/lib/process.js
var Ne = l((ri, ut) => {
  "use strict";
  ut.exports = process;
});

// ../node_modules/npmlog/node_modules/gauge/lib/set-immediate.js
var tt = l((Di, qe) => {
  "use strict";
  var kr = Ne();
  try {
    qe.exports = setImmediate;
  } catch {
    qe.exports = kr.nextTick;
  }
});

// ../node_modules/npmlog/node_modules/gauge/lib/index.js
var Dt = l((ii, rt) => {
  "use strict";
  var Or = Ou(), Rr = Su(), Sr = qu(), Ir = (Wu(), Je(Gu)).onExit, Lr = Xu(), Mr = et(), M = Ne(), Nr = tt();
  rt.exports = p;
  function he(e, u) {
    return function() {
      return u.call(e);
    };
  }
  i(he, "callWith");
  function p(e, u) {
    var t, r;
    e && e.write ? (r = e, t = u || {}) : u && u.write ? (r = u, t = e || {}) : (r = M.stderr, t = e || u || {}), this._status = {
      spun: 0,
      section: "",
      subsection: ""
    }, this._paused = !1, this._disabled = !0, this._showing = !1, this._onScreen = !1, this._needsRedraw = !1, this._hideCursor = t.hideCursor ==
    null ? !0 : t.hideCursor, this._fixedFramerate = t.fixedFramerate == null ? !/^v0\.8\./.test(M.version) : t.fixedFramerate, this._lastUpdateAt =
    null, this._updateInterval = t.updateInterval == null ? 50 : t.updateInterval, this._themes = t.themes || Lr, this._theme = t.theme;
    var D = this._computeTheme(t.theme), n = t.template || [
      { type: "progressbar", length: 20 },
      { type: "activityIndicator", kerning: 1, length: 1 },
      { type: "section", kerning: 1, default: "" },
      { type: "subsection", kerning: 1, default: "" }
    ];
    this.setWriteTo(r, t.tty);
    var o = t.Plumbing || Or;
    this._gauge = new o(D, n, this.getWidth()), this._$$doRedraw = he(this, this._doRedraw), this._$$handleSizeChange = he(this, this._handleSizeChange),
    this._cleanupOnExit = t.cleanupOnExit == null || t.cleanupOnExit, this._removeOnExit = null, t.enabled || t.enabled == null && this._tty &&
    this._tty.isTTY ? this.enable() : this.disable();
  }
  i(p, "Gauge");
  p.prototype = {};
  p.prototype.isEnabled = function() {
    return !this._disabled;
  };
  p.prototype.setTemplate = function(e) {
    this._gauge.setTemplate(e), this._showing && this._requestRedraw();
  };
  p.prototype._computeTheme = function(e) {
    if (e || (e = {}), typeof e == "string")
      e = this._themes.getTheme(e);
    else if (Object.keys(e).length === 0 || e.hasUnicode != null || e.hasColor != null) {
      var u = e.hasUnicode == null ? Rr() : e.hasUnicode, t = e.hasColor == null ? Sr : e.hasColor;
      e = this._themes.getDefault({
        hasUnicode: u,
        hasColor: t,
        platform: e.platform
      });
    }
    return e;
  };
  p.prototype.setThemeset = function(e) {
    this._themes = e, this.setTheme(this._theme);
  };
  p.prototype.setTheme = function(e) {
    this._gauge.setTheme(this._computeTheme(e)), this._showing && this._requestRedraw(), this._theme = e;
  };
  p.prototype._requestRedraw = function() {
    this._needsRedraw = !0, this._fixedFramerate || this._doRedraw();
  };
  p.prototype.getWidth = function() {
    return (this._tty && this._tty.columns || 80) - 1;
  };
  p.prototype.setWriteTo = function(e, u) {
    var t = !this._disabled;
    t && this.disable(), this._writeTo = e, this._tty = u || e === M.stderr && M.stdout.isTTY && M.stdout || e.isTTY && e || this._tty, this.
    _gauge && this._gauge.setWidth(this.getWidth()), t && this.enable();
  };
  p.prototype.enable = function() {
    this._disabled && (this._disabled = !1, this._tty && this._enableEvents(), this._showing && this.show());
  };
  p.prototype.disable = function() {
    this._disabled || (this._showing && (this._lastUpdateAt = null, this._showing = !1, this._doRedraw(), this._showing = !0), this._disabled =
    !0, this._tty && this._disableEvents());
  };
  p.prototype._enableEvents = function() {
    this._cleanupOnExit && (this._removeOnExit = Ir(he(this, this.disable))), this._tty.on("resize", this._$$handleSizeChange), this._fixedFramerate &&
    (this.redrawTracker = Mr(this._$$doRedraw, this._updateInterval), this.redrawTracker.unref && this.redrawTracker.unref());
  };
  p.prototype._disableEvents = function() {
    this._tty.removeListener("resize", this._$$handleSizeChange), this._fixedFramerate && clearInterval(this.redrawTracker), this._removeOnExit &&
    this._removeOnExit();
  };
  p.prototype.hide = function(e) {
    if (this._disabled || !this._showing)
      return e && M.nextTick(e);
    this._showing = !1, this._doRedraw(), e && Nr(e);
  };
  p.prototype.show = function(e, u) {
    if (this._showing = !0, typeof e == "string")
      this._status.section = e;
    else if (typeof e == "object")
      for (var t = Object.keys(e), r = 0; r < t.length; ++r) {
        var D = t[r];
        this._status[D] = e[D];
      }
    u != null && (this._status.completed = u), !this._disabled && this._requestRedraw();
  };
  p.prototype.pulse = function(e) {
    this._status.subsection = e || "", this._status.spun++, !this._disabled && this._showing && this._requestRedraw();
  };
  p.prototype._handleSizeChange = function() {
    this._gauge.setWidth(this._tty.columns - 1), this._requestRedraw();
  };
  p.prototype._doRedraw = function() {
    if (!(this._disabled || this._paused)) {
      if (!this._fixedFramerate) {
        var e = Date.now();
        if (this._lastUpdateAt && e - this._lastUpdateAt < this._updateInterval)
          return;
        this._lastUpdateAt = e;
      }
      if (!this._showing && this._onScreen) {
        this._onScreen = !1;
        var u = this._gauge.hide();
        return this._hideCursor && (u += this._gauge.showCursor()), this._writeTo.write(u);
      }
      !this._showing && !this._onScreen || (this._showing && !this._onScreen && (this._onScreen = !0, this._needsRedraw = !0, this._hideCursor &&
      this._writeTo.write(this._gauge.hideCursor())), this._needsRedraw && (this._writeTo.write(this._gauge.show(this._status)) || (this._paused =
      !0, this._writeTo.on("drain", he(this, function() {
        this._paused = !1, this._doRedraw();
      })))));
    }
  };
});

// ../node_modules/set-blocking/index.js
var nt = l((si, it) => {
  it.exports = function(e) {
    [process.stdout, process.stderr].forEach(function(u) {
      u._handle && u.isTTY && typeof u._handle.setBlocking == "function" && u._handle.setBlocking(e);
    });
  };
});

// ../node_modules/npmlog/lib/log.js
var ht = l((at, lt) => {
  "use strict";
  var st = Du(), qr = Dt(), Ur = require("events").EventEmitter, s = at = lt.exports = new Ur(), Ue = require("util"), Gr = nt(), Ge = ee();
  Gr(!0);
  var k = process.stderr;
  Object.defineProperty(s, "stream", {
    set: /* @__PURE__ */ i(function(e) {
      k = e, this.gauge && this.gauge.setWriteTo(k, k);
    }, "set"),
    get: /* @__PURE__ */ i(function() {
      return k;
    }, "get")
  });
  var W;
  s.useColor = function() {
    return W ?? k.isTTY;
  };
  s.enableColor = function() {
    W = !0, this.gauge.setTheme({ hasColor: W, hasUnicode: $ });
  };
  s.disableColor = function() {
    W = !1, this.gauge.setTheme({ hasColor: W, hasUnicode: $ });
  };
  s.level = "info";
  s.gauge = new qr(k, {
    enabled: !1,
    // no progress bars unless asked
    theme: { hasColor: s.useColor() },
    template: [
      { type: "progressbar", length: 20 },
      { type: "activityIndicator", kerning: 1, length: 1 },
      { type: "section", default: "" },
      ":",
      { type: "logline", kerning: 1, default: "" }
    ]
  });
  s.tracker = new st.TrackerGroup();
  s.progressEnabled = s.gauge.isEnabled();
  var $;
  s.enableUnicode = function() {
    $ = !0, this.gauge.setTheme({ hasColor: this.useColor(), hasUnicode: $ });
  };
  s.disableUnicode = function() {
    $ = !1, this.gauge.setTheme({ hasColor: this.useColor(), hasUnicode: $ });
  };
  s.setGaugeThemeset = function(e) {
    this.gauge.setThemeset(e);
  };
  s.setGaugeTemplate = function(e) {
    this.gauge.setTemplate(e);
  };
  s.enableProgress = function() {
    this.progressEnabled || this._paused || (this.progressEnabled = !0, this.tracker.on("change", this.showProgress), this.gauge.enable());
  };
  s.disableProgress = function() {
    this.progressEnabled && (this.progressEnabled = !1, this.tracker.removeListener("change", this.showProgress), this.gauge.disable());
  };
  var We = ["newGroup", "newItem", "newStream"], ot = /* @__PURE__ */ i(function(e) {
    return Object.keys(s).forEach(function(u) {
      if (u[0] !== "_" && !We.filter(function(r) {
        return r === u;
      }).length && !e[u] && typeof s[u] == "function") {
        var t = s[u];
        e[u] = function() {
          return t.apply(s, arguments);
        };
      }
    }), e instanceof st.TrackerGroup && We.forEach(function(u) {
      var t = e[u];
      e[u] = function() {
        return ot(t.apply(e, arguments));
      };
    }), e;
  }, "mixinLog");
  We.forEach(function(e) {
    s[e] = function() {
      return ot(this.tracker[e].apply(this.tracker, arguments));
    };
  });
  s.clearProgress = function(e) {
    if (!this.progressEnabled)
      return e && process.nextTick(e);
    this.gauge.hide(e);
  };
  s.showProgress = function(e, u) {
    if (this.progressEnabled) {
      var t = {};
      e && (t.section = e);
      var r = s.record[s.record.length - 1];
      if (r) {
        t.subsection = r.prefix;
        var D = s.disp[r.level] || r.level, n = this._format(D, s.style[r.level]);
        r.prefix && (n += " " + this._format(r.prefix, this.prefixStyle)), n += " " + r.message.split(/\r?\n/)[0], t.logline = n;
      }
      t.completed = u || this.tracker.completed(), this.gauge.show(t);
    }
  }.bind(s);
  s.pause = function() {
    this._paused = !0, this.progressEnabled && this.gauge.disable();
  };
  s.resume = function() {
    if (this._paused) {
      this._paused = !1;
      var e = this._buffer;
      this._buffer = [], e.forEach(function(u) {
        this.emitLog(u);
      }, this), this.progressEnabled && this.gauge.enable();
    }
  };
  s._buffer = [];
  var Wr = 0;
  s.record = [];
  s.maxRecordSize = 1e4;
  s.log = function(e, u, t) {
    var r = this.levels[e];
    if (r === void 0)
      return this.emit("error", new Error(Ue.format(
        "Undefined log level: %j",
        e
      )));
    for (var D = new Array(arguments.length - 2), n = null, o = 2; o < arguments.length; o++) {
      var h = D[o - 2] = arguments[o];
      typeof h == "object" && h instanceof Error && h.stack && Object.defineProperty(h, "stack", {
        value: n = h.stack + "",
        enumerable: !0,
        writable: !0
      });
    }
    n && D.unshift(n + `
`), t = Ue.format.apply(Ue, D);
    var f = {
      id: Wr++,
      level: e,
      prefix: String(u || ""),
      message: t,
      messageRaw: D
    };
    this.emit("log", f), this.emit("log." + e, f), f.prefix && this.emit(f.prefix, f), this.record.push(f);
    var C = this.maxRecordSize, g = this.record.length - C;
    if (g > C / 10) {
      var b = Math.floor(C * 0.9);
      this.record = this.record.slice(-1 * b);
    }
    this.emitLog(f);
  }.bind(s);
  s.emitLog = function(e) {
    if (this._paused) {
      this._buffer.push(e);
      return;
    }
    this.progressEnabled && this.gauge.pulse(e.prefix);
    var u = this.levels[e.level];
    if (u !== void 0 && !(u < this.levels[this.level]) && !(u > 0 && !isFinite(u))) {
      var t = s.disp[e.level] != null ? s.disp[e.level] : e.level;
      this.clearProgress(), e.message.split(/\r?\n/).forEach(function(r) {
        var D = this.heading;
        D && (this.write(D, this.headingStyle), this.write(" ")), this.write(t, s.style[e.level]);
        var n = e.prefix || "";
        n && this.write(" "), this.write(n, this.prefixStyle), this.write(" " + r + `
`);
      }, this), this.showProgress();
    }
  };
  s._format = function(e, u) {
    if (k) {
      var t = "";
      if (this.useColor()) {
        u = u || {};
        var r = [];
        u.fg && r.push(u.fg), u.bg && r.push("bg" + u.bg[0].toUpperCase() + u.bg.slice(1)), u.bold && r.push("bold"), u.underline && r.push(
        "underline"), u.inverse && r.push("inverse"), r.length && (t += Ge.color(r)), u.beep && (t += Ge.beep());
      }
      return t += e, this.useColor() && (t += Ge.color("reset")), t;
    }
  };
  s.write = function(e, u) {
    k && k.write(this._format(e, u));
  };
  s.addLevel = function(e, u, t, r) {
    r == null && (r = e), this.levels[e] = u, this.style[e] = t, this[e] || (this[e] = function() {
      var D = new Array(arguments.length + 1);
      D[0] = e;
      for (var n = 0; n < arguments.length; n++)
        D[n + 1] = arguments[n];
      return this.log.apply(this, D);
    }.bind(this)), this.disp[e] = r;
  };
  s.prefixStyle = { fg: "magenta" };
  s.headingStyle = { fg: "white", bg: "black" };
  s.style = {};
  s.levels = {};
  s.disp = {};
  s.addLevel("silly", -1 / 0, { inverse: !0 }, "sill");
  s.addLevel("verbose", 1e3, { fg: "cyan", bg: "black" }, "verb");
  s.addLevel("info", 2e3, { fg: "green" });
  s.addLevel("timing", 2500, { fg: "green", bg: "black" });
  s.addLevel("http", 3e3, { fg: "green", bg: "black" });
  s.addLevel("notice", 3500, { fg: "cyan", bg: "black" });
  s.addLevel("warn", 4e3, { fg: "black", bg: "yellow" }, "WARN");
  s.addLevel("error", 5e3, { fg: "red", bg: "black" }, "ERR!");
  s.addLevel("silent", 1 / 0);
  s.on("error", function() {
  });
});

// ../node_modules/pretty-hrtime/index.js
var Ft = l((ai, ct) => {
  "use strict";
  var $r = ["h", "min", "s", "ms", "\u03BCs", "ns"], Pr = ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"], ft = [3600,
  60, 1, 1e6, 1e3, 1];
  ct.exports = function(e, u) {
    var t, r, D, n, o, h, f, C, g, b;
    if (t = !1, r = !1, u && (t = u.verbose || !1, r = u.precise || !1), !Array.isArray(e) || e.length !== 2 || typeof e[0] != "number" || typeof e[1] !=
    "number")
      return "";
    for (e[1] < 0 && (b = e[0] + e[1] / 1e9, e[0] = parseInt(b), e[1] = parseFloat((b % 1).toPrecision(9)) * 1e9), g = "", D = 0; D < 6 && (n =
    D < 3 ? 0 : 1, o = e[n], D !== 3 && D !== 0 && (o = o % ft[D - 1]), D === 2 && (o += e[1] / 1e9), h = o / ft[D], !(h >= 1 && (t && (h = Math.
    floor(h)), r ? C = h.toString() : (f = h >= 10 ? 0 : 2, C = h.toFixed(f)), C.indexOf(".") > -1 && C[C.length - 1] === "0" && (C = C.replace(
    /\.?0+$/, "")), g && (g += " "), g += C, t ? (g += " " + Pr[D], C !== "1" && (g += "s")) : g += " " + $r[D], !t))); D++)
      ;
    return g;
  };
});

// src/node-logger/index.ts
var iD = {};
Ke(iD, {
  colors: () => Tt,
  deprecate: () => DD,
  instance: () => y.default,
  logger: () => wt,
  once: () => T
});
module.exports = Je(iD);
var y = V(ht(), 1), yt = V(Ft(), 1);

// node_modules/chalk/source/vendor/ansi-styles/index.js
var Ct = /* @__PURE__ */ i((e = 0) => (u) => `\x1B[${u + e}m`, "wrapAnsi16"), gt = /* @__PURE__ */ i((e = 0) => (u) => `\x1B[${38 + e};5;${u}\
m`, "wrapAnsi256"), pt = /* @__PURE__ */ i((e = 0) => (u, t, r) => `\x1B[${38 + e};2;${u};${t};${r}m`, "wrapAnsi16m"), c = {
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
}, li = Object.keys(c.modifier), Yr = Object.keys(c.color), zr = Object.keys(c.bgColor), hi = [...Yr, ...zr];
function Vr() {
  let e = /* @__PURE__ */ new Map();
  for (let [u, t] of Object.entries(c)) {
    for (let [r, D] of Object.entries(t))
      c[r] = {
        open: `\x1B[${D[0]}m`,
        close: `\x1B[${D[1]}m`
      }, t[r] = c[r], e.set(D[0], D[1]);
    Object.defineProperty(c, u, {
      value: t,
      enumerable: !1
    });
  }
  return Object.defineProperty(c, "codes", {
    value: e,
    enumerable: !1
  }), c.color.close = "\x1B[39m", c.bgColor.close = "\x1B[49m", c.color.ansi = Ct(), c.color.ansi256 = gt(), c.color.ansi16m = pt(), c.bgColor.
  ansi = Ct(10), c.bgColor.ansi256 = gt(10), c.bgColor.ansi16m = pt(10), Object.defineProperties(c, {
    rgbToAnsi256: {
      value(u, t, r) {
        return u === t && t === r ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 *
        Math.round(t / 255 * 5) + Math.round(r / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value(u) {
        let t = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));
        if (!t)
          return [0, 0, 0];
        let [r] = t;
        r.length === 3 && (r = [...r].map((n) => n + n).join(""));
        let D = Number.parseInt(r, 16);
        return [
          /* eslint-disable no-bitwise */
          D >> 16 & 255,
          D >> 8 & 255,
          D & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: /* @__PURE__ */ i((u) => c.rgbToAnsi256(...c.hexToRgb(u)), "value"),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(u) {
        if (u < 8)
          return 30 + u;
        if (u < 16)
          return 90 + (u - 8);
        let t, r, D;
        if (u >= 232)
          t = ((u - 232) * 10 + 8) / 255, r = t, D = t;
        else {
          u -= 16;
          let h = u % 36;
          t = Math.floor(u / 36) / 5, r = Math.floor(h / 6) / 5, D = h % 6 / 5;
        }
        let n = Math.max(t, r, D) * 2;
        if (n === 0)
          return 30;
        let o = 30 + (Math.round(D) << 2 | Math.round(r) << 1 | Math.round(t));
        return n === 2 && (o += 60), o;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: /* @__PURE__ */ i((u, t, r) => c.ansi256ToAnsi(c.rgbToAnsi256(u, t, r)), "value"),
      enumerable: !1
    },
    hexToAnsi: {
      value: /* @__PURE__ */ i((u) => c.ansi256ToAnsi(c.hexToAnsi256(u)), "value"),
      enumerable: !1
    }
  }), c;
}
i(Vr, "assembleStyles");
var jr = Vr(), x = jr;

// node_modules/chalk/source/vendor/supports-color/index.js
var ce = V(require("node:process"), 1), dt = V(require("node:os"), 1), $e = V(require("node:tty"), 1);
function A(e, u = globalThis.Deno ? globalThis.Deno.args : ce.default.argv) {
  let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = u.indexOf(t + e), D = u.indexOf("--");
  return r !== -1 && (D === -1 || r < D);
}
i(A, "hasFlag");
var { env: F } = ce.default, fe;
A("no-color") || A("no-colors") || A("color=false") || A("color=never") ? fe = 0 : (A("color") || A("colors") || A("color=true") || A("color\
=always")) && (fe = 1);
function Hr() {
  if ("FORCE_COLOR" in F)
    return F.FORCE_COLOR === "true" ? 1 : F.FORCE_COLOR === "false" ? 0 : F.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(F.FORCE_COLOR,
    10), 3);
}
i(Hr, "envForceColor");
function Kr(e) {
  return e === 0 ? !1 : {
    level: e,
    hasBasic: !0,
    has256: e >= 2,
    has16m: e >= 3
  };
}
i(Kr, "translateLevel");
function Zr(e, { streamIsTTY: u, sniffFlags: t = !0 } = {}) {
  let r = Hr();
  r !== void 0 && (fe = r);
  let D = t ? fe : r;
  if (D === 0)
    return 0;
  if (t) {
    if (A("color=16m") || A("color=full") || A("color=truecolor"))
      return 3;
    if (A("color=256"))
      return 2;
  }
  if ("TF_BUILD" in F && "AGENT_NAME" in F)
    return 1;
  if (e && !u && D === void 0)
    return 0;
  let n = D || 0;
  if (F.TERM === "dumb")
    return n;
  if (ce.default.platform === "win32") {
    let o = dt.default.release().split(".");
    return Number(o[0]) >= 10 && Number(o[2]) >= 10586 ? Number(o[2]) >= 14931 ? 3 : 2 : 1;
  }
  if ("CI" in F)
    return "GITHUB_ACTIONS" in F || "GITEA_ACTIONS" in F ? 3 : ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((o) => o in
    F) || F.CI_NAME === "codeship" ? 1 : n;
  if ("TEAMCITY_VERSION" in F)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(F.TEAMCITY_VERSION) ? 1 : 0;
  if (F.COLORTERM === "truecolor" || F.TERM === "xterm-kitty")
    return 3;
  if ("TERM_PROGRAM" in F) {
    let o = Number.parseInt((F.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (F.TERM_PROGRAM) {
      case "iTerm.app":
        return o >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(F.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(F.TERM) || "COLORTERM" in F ?
  1 : n;
}
i(Zr, "_supportsColor");
function Et(e, u = {}) {
  let t = Zr(e, {
    streamIsTTY: e && e.isTTY,
    ...u
  });
  return Kr(t);
}
i(Et, "createSupportsColor");
var Jr = {
  stdout: Et({ isTTY: $e.default.isatty(1) }),
  stderr: Et({ isTTY: $e.default.isatty(2) })
}, mt = Jr;

// node_modules/chalk/source/utilities.js
function vt(e, u, t) {
  let r = e.indexOf(u);
  if (r === -1)
    return e;
  let D = u.length, n = 0, o = "";
  do
    o += e.slice(n, r) + u + t, n = r + D, r = e.indexOf(u, n);
  while (r !== -1);
  return o += e.slice(n), o;
}
i(vt, "stringReplaceAll");
function bt(e, u, t, r) {
  let D = 0, n = "";
  do {
    let o = e[r - 1] === "\r";
    n += e.slice(D, o ? r - 1 : r) + u + (o ? `\r
` : `
`) + t, D = r + 1, r = e.indexOf(`
`, D);
  } while (r !== -1);
  return n += e.slice(D), n;
}
i(bt, "stringEncaseCRLFWithFirstIndex");

// node_modules/chalk/source/index.js
var { stdout: Bt, stderr: At } = mt, Pe = Symbol("GENERATOR"), P = Symbol("STYLER"), Z = Symbol("IS_EMPTY"), xt = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], Y = /* @__PURE__ */ Object.create(null), Xr = /* @__PURE__ */ i((e, u = {}) => {
  if (u.level && !(Number.isInteger(u.level) && u.level >= 0 && u.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  let t = Bt ? Bt.level : 0;
  e.level = u.level === void 0 ? t : u.level;
}, "applyOptions");
var Qr = /* @__PURE__ */ i((e) => {
  let u = /* @__PURE__ */ i((...t) => t.join(" "), "chalk");
  return Xr(u, e), Object.setPrototypeOf(u, J.prototype), u;
}, "chalkFactory");
function J(e) {
  return Qr(e);
}
i(J, "createChalk");
Object.setPrototypeOf(J.prototype, Function.prototype);
for (let [e, u] of Object.entries(x))
  Y[e] = {
    get() {
      let t = Fe(this, ze(u.open, u.close, this[P]), this[Z]);
      return Object.defineProperty(this, e, { value: t }), t;
    }
  };
Y.visible = {
  get() {
    let e = Fe(this, this[P], !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
var Ye = /* @__PURE__ */ i((e, u, t, ...r) => e === "rgb" ? u === "ansi16m" ? x[t].ansi16m(...r) : u === "ansi256" ? x[t].ansi256(x.rgbToAnsi256(
...r)) : x[t].ansi(x.rgbToAnsi(...r)) : e === "hex" ? Ye("rgb", u, t, ...x.hexToRgb(...r)) : x[t][e](...r), "getModelAnsi"), eD = ["rgb", "h\
ex", "ansi256"];
for (let e of eD) {
  Y[e] = {
    get() {
      let { level: t } = this;
      return function(...r) {
        let D = ze(Ye(e, xt[t], "color", ...r), x.color.close, this[P]);
        return Fe(this, D, this[Z]);
      };
    }
  };
  let u = "bg" + e[0].toUpperCase() + e.slice(1);
  Y[u] = {
    get() {
      let { level: t } = this;
      return function(...r) {
        let D = ze(Ye(e, xt[t], "bgColor", ...r), x.bgColor.close, this[P]);
        return Fe(this, D, this[Z]);
      };
    }
  };
}
var uD = Object.defineProperties(() => {
}, {
  ...Y,
  level: {
    enumerable: !0,
    get() {
      return this[Pe].level;
    },
    set(e) {
      this[Pe].level = e;
    }
  }
}), ze = /* @__PURE__ */ i((e, u, t) => {
  let r, D;
  return t === void 0 ? (r = e, D = u) : (r = t.openAll + e, D = u + t.closeAll), {
    open: e,
    close: u,
    openAll: r,
    closeAll: D,
    parent: t
  };
}, "createStyler"), Fe = /* @__PURE__ */ i((e, u, t) => {
  let r = /* @__PURE__ */ i((...D) => tD(r, D.length === 1 ? "" + D[0] : D.join(" ")), "builder");
  return Object.setPrototypeOf(r, uD), r[Pe] = e, r[P] = u, r[Z] = t, r;
}, "createBuilder"), tD = /* @__PURE__ */ i((e, u) => {
  if (e.level <= 0 || !u)
    return e[Z] ? "" : u;
  let t = e[P];
  if (t === void 0)
    return u;
  let { openAll: r, closeAll: D } = t;
  if (u.includes("\x1B"))
    for (; t !== void 0; )
      u = vt(u, t.close, t.open), t = t.parent;
  let n = u.indexOf(`
`);
  return n !== -1 && (u = bt(u, D, r, n)), r + u + D;
}, "applyStyle");
Object.defineProperties(J.prototype, Y);
var rD = J(), vi = J({ level: At ? At.level : 0 });
var O = rD;

// src/node-logger/index.ts
y.default.stream = process.stdout;
var Tt = {
  pink: O.hex("F1618C"),
  purple: O.hex("B57EE5"),
  orange: O.hex("F3AD38"),
  green: O.hex("A2E05E"),
  blue: O.hex("6DABF5"),
  red: O.hex("F16161"),
  gray: O.gray
}, wt = {
  verbose: /* @__PURE__ */ i((e) => y.default.verbose("", e), "verbose"),
  info: /* @__PURE__ */ i((e) => y.default.info("", e), "info"),
  plain: /* @__PURE__ */ i((e) => console.log(e), "plain"),
  line: /* @__PURE__ */ i((e = 1) => console.log(`${Array(e - 1).fill(`
`)}`), "line"),
  warn: /* @__PURE__ */ i((e) => y.default.warn("", e), "warn"),
  trace: /* @__PURE__ */ i(({ message: e, time: u }) => y.default.info("", `${e} (${Tt.purple((0, yt.default)(u))})`), "trace"),
  setLevel: /* @__PURE__ */ i((e = "info") => {
    y.default.level = e;
  }, "setLevel"),
  error: /* @__PURE__ */ i((e) => {
    if (y.default.levels[y.default.level] < y.default.levels.error) {
      let u;
      e instanceof Error && e.stack ? u = e.stack.toString() : u = e.toString(), console.log(
        u.replace(e.toString(), O.red(e.toString())).replaceAll(process.cwd(), ".")
      );
    }
  }, "error")
};
var Ve = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ i((e) => (u) => {
  if (!Ve.has(u))
    return Ve.add(u), wt[e](u);
}, "once");
T.clear = () => Ve.clear();
T.verbose = T("verbose");
T.info = T("info");
T.warn = T("warn");
T.error = T("error");
var DD = T("warn");
