'use strict';

var telemetry = require('storybook/internal/telemetry');
var fs = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);

var __require=(x=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(x,{get:(a,b)=>(typeof require<"u"?require:a)[b]}):x)(function(x){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+x+'" is not supported')});var STORYBOOK_ADDON_ONBOARDING_CHANNEL="STORYBOOK_ADDON_ONBOARDING_CHANNEL";var experimental_serverChannel=async(channel,options)=>{let{disableTelemetry}=await options.presets.apply("core",{});if(!disableTelemetry){let packageJsonPath=__require.resolve("@storybook/addon-onboarding/package.json"),{version:addonVersion}=JSON.parse(fs__default.default.readFileSync(packageJsonPath,{encoding:"utf-8"}));channel.on(STORYBOOK_ADDON_ONBOARDING_CHANNEL,({type,...event})=>{type==="telemetry"&&telemetry.telemetry("addon-onboarding",{...event,addonVersion});});}return channel};

exports.experimental_serverChannel = experimental_serverChannel;
