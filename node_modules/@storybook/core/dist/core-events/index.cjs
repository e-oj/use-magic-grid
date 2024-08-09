"use strict";
var A = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var D = Object.getOwnPropertyNames;
var I = Object.prototype.hasOwnProperty;
var C = (S, R) => {
  for (var T in R)
    A(S, T, { get: R[T], enumerable: !0 });
}, o = (S, R, T, N) => {
  if (R && typeof R == "object" || typeof R == "function")
    for (let _ of D(R))
      !I.call(S, _) && _ !== T && A(S, _, { get: () => R[_], enumerable: !(N = r(R, _)) || N.enumerable });
  return S;
};
var P = (S) => o(A({}, "__esModule", { value: !0 }), S);

// src/core-events/index.ts
var aE = {};
C(aE, {
  ARGTYPES_INFO_REQUEST: () => PE,
  ARGTYPES_INFO_RESPONSE: () => LE,
  CHANNEL_CREATED: () => Y,
  CHANNEL_WS_DISCONNECT: () => a,
  CONFIG_ERROR: () => U,
  CREATE_NEW_STORYFILE_REQUEST: () => G,
  CREATE_NEW_STORYFILE_RESPONSE: () => W,
  CURRENT_STORY_WAS_SET: () => H,
  DOCS_PREPARED: () => d,
  DOCS_RENDERED: () => p,
  FILE_COMPONENT_SEARCH_REQUEST: () => t,
  FILE_COMPONENT_SEARCH_RESPONSE: () => i,
  FORCE_REMOUNT: () => e,
  FORCE_RE_RENDER: () => l,
  GLOBALS_UPDATED: () => y,
  NAVIGATE_URL: () => F,
  PLAY_FUNCTION_THREW_EXCEPTION: () => c,
  PRELOAD_ENTRIES: () => f,
  PREVIEW_BUILDER_PROGRESS: () => g,
  PREVIEW_KEYDOWN: () => u,
  REGISTER_SUBSCRIPTION: () => s,
  REQUEST_WHATS_NEW_DATA: () => OE,
  RESET_STORY_ARGS: () => x,
  RESULT_WHATS_NEW_DATA: () => NE,
  SAVE_STORY_REQUEST: () => CE,
  SAVE_STORY_RESPONSE: () => oE,
  SELECT_STORY: () => M,
  SET_CONFIG: () => Q,
  SET_CURRENT_STORY: () => m,
  SET_GLOBALS: () => V,
  SET_INDEX: () => w,
  SET_STORIES: () => B,
  SET_WHATS_NEW_CACHE: () => rE,
  SHARED_STATE_CHANGED: () => X,
  SHARED_STATE_SET: () => b,
  STORIES_COLLAPSE_ALL: () => q,
  STORIES_EXPAND_ALL: () => K,
  STORY_ARGS_UPDATED: () => j,
  STORY_CHANGED: () => k,
  STORY_ERRORED: () => z,
  STORY_INDEX_INVALIDATED: () => J,
  STORY_MISSING: () => Z,
  STORY_PREPARED: () => $,
  STORY_RENDERED: () => v,
  STORY_RENDER_PHASE_CHANGED: () => n,
  STORY_SPECIFIED: () => EE,
  STORY_THREW_EXCEPTION: () => RE,
  STORY_UNCHANGED: () => SE,
  TELEMETRY_ERROR: () => IE,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: () => DE,
  UNHANDLED_ERRORS_WHILE_PLAYING: () => h,
  UPDATE_GLOBALS: () => _E,
  UPDATE_QUERY_PARAMS: () => TE,
  UPDATE_STORY_ARGS: () => AE,
  default: () => L
});
module.exports = P(aE);
var O = /* @__PURE__ */ ((E) => (E.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", E.CHANNEL_CREATED = "channelCreated", E.CONFIG_ERROR = "co\
nfigError", E.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", E.STORY_SPECIFIED = "storySpecified", E.SET_CONFIG = "setConfig", E.SET_STORIES =
"setStories", E.SET_INDEX = "setIndex", E.SET_CURRENT_STORY = "setCurrentStory", E.CURRENT_STORY_WAS_SET = "currentStoryWasSet", E.FORCE_RE_RENDER =
"forceReRender", E.FORCE_REMOUNT = "forceRemount", E.PRELOAD_ENTRIES = "preloadStories", E.STORY_PREPARED = "storyPrepared", E.DOCS_PREPARED =
"docsPrepared", E.STORY_CHANGED = "storyChanged", E.STORY_UNCHANGED = "storyUnchanged", E.STORY_RENDERED = "storyRendered", E.STORY_MISSING =
"storyMissing", E.STORY_ERRORED = "storyErrored", E.STORY_THREW_EXCEPTION = "storyThrewException", E.STORY_RENDER_PHASE_CHANGED = "storyRend\
erPhaseChanged", E.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", E.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErrorsWhilePla\
ying", E.UPDATE_STORY_ARGS = "updateStoryArgs", E.STORY_ARGS_UPDATED = "storyArgsUpdated", E.RESET_STORY_ARGS = "resetStoryArgs", E.SET_GLOBALS =
"setGlobals", E.UPDATE_GLOBALS = "updateGlobals", E.GLOBALS_UPDATED = "globalsUpdated", E.REGISTER_SUBSCRIPTION = "registerSubscription", E.
PREVIEW_KEYDOWN = "previewKeydown", E.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", E.SELECT_STORY = "selectStory", E.STORIES_COLLAPSE_ALL =
"storiesCollapseAll", E.STORIES_EXPAND_ALL = "storiesExpandAll", E.DOCS_RENDERED = "docsRendered", E.SHARED_STATE_CHANGED = "sharedStateChan\
ged", E.SHARED_STATE_SET = "sharedStateSet", E.NAVIGATE_URL = "navigateUrl", E.UPDATE_QUERY_PARAMS = "updateQueryParams", E.REQUEST_WHATS_NEW_DATA =
"requestWhatsNewData", E.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", E.SET_WHATS_NEW_CACHE = "setWhatsNewCache", E.TOGGLE_WHATS_NEW_NOTIFICATIONS =
"toggleWhatsNewNotifications", E.TELEMETRY_ERROR = "telemetryError", E.FILE_COMPONENT_SEARCH_REQUEST = "fileComponentSearchRequest", E.FILE_COMPONENT_SEARCH_RESPONSE =
"fileComponentSearchResponse", E.SAVE_STORY_REQUEST = "saveStoryRequest", E.SAVE_STORY_RESPONSE = "saveStoryResponse", E.ARGTYPES_INFO_REQUEST =
"argtypesInfoRequest", E.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", E.CREATE_NEW_STORYFILE_REQUEST = "createNewStoryfileRequest", E.CREATE_NEW_STORYFILE_RESPONSE =
"createNewStoryfileResponse", E))(O || {}), L = O, {
  CHANNEL_WS_DISCONNECT: a,
  CHANNEL_CREATED: Y,
  CONFIG_ERROR: U,
  CREATE_NEW_STORYFILE_REQUEST: G,
  CREATE_NEW_STORYFILE_RESPONSE: W,
  CURRENT_STORY_WAS_SET: H,
  DOCS_PREPARED: d,
  DOCS_RENDERED: p,
  FILE_COMPONENT_SEARCH_REQUEST: t,
  FILE_COMPONENT_SEARCH_RESPONSE: i,
  FORCE_RE_RENDER: l,
  FORCE_REMOUNT: e,
  GLOBALS_UPDATED: y,
  NAVIGATE_URL: F,
  PLAY_FUNCTION_THREW_EXCEPTION: c,
  UNHANDLED_ERRORS_WHILE_PLAYING: h,
  PRELOAD_ENTRIES: f,
  PREVIEW_BUILDER_PROGRESS: g,
  PREVIEW_KEYDOWN: u,
  REGISTER_SUBSCRIPTION: s,
  RESET_STORY_ARGS: x,
  SELECT_STORY: M,
  SET_CONFIG: Q,
  SET_CURRENT_STORY: m,
  SET_GLOBALS: V,
  SET_INDEX: w,
  SET_STORIES: B,
  SHARED_STATE_CHANGED: X,
  SHARED_STATE_SET: b,
  STORIES_COLLAPSE_ALL: q,
  STORIES_EXPAND_ALL: K,
  STORY_ARGS_UPDATED: j,
  STORY_CHANGED: k,
  STORY_ERRORED: z,
  STORY_INDEX_INVALIDATED: J,
  STORY_MISSING: Z,
  STORY_PREPARED: $,
  STORY_RENDER_PHASE_CHANGED: n,
  STORY_RENDERED: v,
  STORY_SPECIFIED: EE,
  STORY_THREW_EXCEPTION: RE,
  STORY_UNCHANGED: SE,
  UPDATE_GLOBALS: _E,
  UPDATE_QUERY_PARAMS: TE,
  UPDATE_STORY_ARGS: AE,
  REQUEST_WHATS_NEW_DATA: OE,
  RESULT_WHATS_NEW_DATA: NE,
  SET_WHATS_NEW_CACHE: rE,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: DE,
  TELEMETRY_ERROR: IE,
  SAVE_STORY_REQUEST: CE,
  SAVE_STORY_RESPONSE: oE,
  ARGTYPES_INFO_REQUEST: PE,
  ARGTYPES_INFO_RESPONSE: LE
} = O;
