import './chunk-BYXBJQAS.js';
import './chunk-JBWKEMOK.js';
import { dedent } from 'ts-dedent';
import { lt } from 'semver';
import chalk from 'chalk';

var blocker={id:"minimumNode16",async check(){let nodeVersion=process.versions.node;return nodeVersion&&lt(nodeVersion,"18.0.0")?{nodeVersion}:!1},log(options,data){return dedent`
      We've detected you're using Node.js v${data.nodeVersion}.
      Storybook needs Node.js 18 or higher.

      ${chalk.yellow("https://nodejs.org/en/download")}
    `}};

export { blocker };
