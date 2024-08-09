import './chunk-CEH6MNVV.mjs';
import * as React from 'react';
import semver from 'semver';

var ServerComponentDecorator=(Story,{parameters:parameters2})=>{if(!parameters2?.react?.rsc)return React.createElement(Story,null);let major=semver.major(React.version),minor=semver.minor(React.version);if(major<18||major===18&&minor<3)throw new Error("React Server Components require React >= 18.3");return React.createElement(React.Suspense,null,React.createElement(Story,null))},decorators=[ServerComponentDecorator],parameters={react:{rsc:!0}};

export { ServerComponentDecorator, decorators, parameters };
