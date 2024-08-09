var R = Object.defineProperty;
var o = (A, e) => R(A, "name", { value: e, configurable: !0 });

// src/storybook-error.ts
function E({
  code: A,
  category: e
}) {
  let t = String(A).padStart(4, "0");
  return `SB_${e}_${t}`;
}
o(E, "parseErrorCode");
var c = class c extends Error {
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
    return E({ code: this.code, category: this.category });
  }
  /**
   * Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>.
   */
  get name() {
    let e = this.constructor.name;
    return `${this.fullErrorCode} (${e})`;
  }
  constructor(e) {
    super(c.getFullMessage(e)), this.category = e.category, this.documentation = e.documentation ?? !1, this.code = e.code;
  }
  /**
   * Generates the error message along with additional documentation link (if applicable).
   */
  static getFullMessage({
    documentation: e,
    code: t,
    category: u,
    message: d
  }) {
    let s;
    return e === !0 ? s = `https://storybook.js.org/error/${E({ code: t, category: u })}` : typeof e == "string" ? s = e : Array.isArray(e) &&
    (s = `
${e.map((G) => `	- ${G}`).join(`
`)}`), `${d}${s != null ? `

More info: ${s}
` : ""}`;
  }
};
o(c, "StorybookError");
var n = c;

// src/manager-errors.ts
var g = /* @__PURE__ */ ((r) => (r.MANAGER_UNCAUGHT = "MANAGER_UNCAUGHT", r.MANAGER_UI = "MANAGER_UI", r.MANAGER_API = "MANAGER_API", r.MANAGER_CLIENT_LOGGER =
"MANAGER_CLIENT-LOGGER", r.MANAGER_CHANNELS = "MANAGER_CHANNELS", r.MANAGER_CORE_EVENTS = "MANAGER_CORE-EVENTS", r.MANAGER_ROUTER = "MANAGER\
_ROUTER", r.MANAGER_THEMING = "MANAGER_THEMING", r))(g || {}), i = class i extends n {
  constructor() {
    super({
      category: "MANAGER_UI",
      code: 1,
      message: "The Provider passed into Storybook's UI is not extended from the base Provider. Please check your Provider implementation."
    });
  }
};
o(i, "ProviderDoesNotExtendBaseProviderError");
var l = i, a = class a extends n {
  constructor(t) {
    super({
      category: "MANAGER_UNCAUGHT",
      code: 1,
      message: t.error.message
    });
    this.data = t;
    this.stack = t.error.stack;
  }
};
o(a, "UncaughtManagerError");
var N = a;
export {
  g as Category,
  l as ProviderDoesNotExtendBaseProviderError,
  N as UncaughtManagerError
};
