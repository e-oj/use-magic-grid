import './chunk-BYXBJQAS.js';
import './chunk-JBWKEMOK.js';
import { dedent } from 'ts-dedent';
import chalk from 'chalk';

var blocker={id:"storyStoreV7removal",async check({mainConfig}){let features=mainConfig?.features;return features===void 0?!1:!!Object.hasOwn(features,"storyStoreV7")},log(){return dedent`
      StoryStoreV7 feature must be removed from your Storybook configuration.
      This feature was removed in Storybook 8.0.0.
      Please see the migration guide for more information:
      ${chalk.yellow("https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#storystorev6-and-storiesof-is-deprecated")}
      
      In your Storybook configuration we found storyStoreV7 feature defined. For instance:

      export default = {
          features: {
              ${chalk.cyan("storyStoreV7: false")}, <--- ${chalk.bold("remove this line")}
          },
      };

      You need to remove the storyStoreV7 property.
    `}};

export { blocker };
