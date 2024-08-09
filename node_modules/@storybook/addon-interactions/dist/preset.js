'use strict';

var common = require('storybook/internal/common');
var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);

var checkActionsLoaded=configDir=>{common.checkAddonOrder({before:{name:"@storybook/addon-actions",inEssentials:!0},after:{name:"@storybook/addon-interactions",inEssentials:!1},configFile:path__default.default.isAbsolute(configDir)?path__default.default.join(configDir,"main"):path__default.default.join(process.cwd(),configDir,"main"),getConfig:configFile=>common.serverRequire(configFile)});};

exports.checkActionsLoaded = checkActionsLoaded;
