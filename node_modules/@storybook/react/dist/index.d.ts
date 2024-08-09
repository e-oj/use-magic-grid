import { Args, ComponentAnnotations, AnnotatedStoryFn, ArgsStoryFn, ArgsFromMeta, StoryAnnotations, StrictArgs, DecoratorFunction, LoaderFunction, StoryContext as StoryContext$1, ProjectAnnotations, NamedOrDefaultProjectAnnotations, StoryAnnotationsOrFn, ComposedStoryFn, Store_CSFExports, StoriesWithPartialProps } from 'storybook/internal/types';
export { ArgTypes, Args, Parameters, StrictArgs } from 'storybook/internal/types';
import { ComponentType, ComponentProps } from 'react';
import { Simplify, SetOptional } from 'type-fest';
import { R as ReactRenderer } from './types-a5624094.js';

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
type Meta<TCmpOrArgs = Args> = [TCmpOrArgs] extends [ComponentType<any>] ? ComponentAnnotations<ReactRenderer, ComponentProps<TCmpOrArgs>> : ComponentAnnotations<ReactRenderer, TCmpOrArgs>;
/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
type StoryFn<TCmpOrArgs = Args> = [TCmpOrArgs] extends [ComponentType<any>] ? AnnotatedStoryFn<ReactRenderer, ComponentProps<TCmpOrArgs>> : AnnotatedStoryFn<ReactRenderer, TCmpOrArgs>;
/**
 * Story object that represents a CSFv3 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
type StoryObj<TMetaOrCmpOrArgs = Args> = [TMetaOrCmpOrArgs] extends [
    {
        render?: ArgsStoryFn<ReactRenderer, any>;
        component?: infer Component;
        args?: infer DefaultArgs;
    }
] ? Simplify<(Component extends ComponentType<any> ? ComponentProps<Component> : unknown) & ArgsFromMeta<ReactRenderer, TMetaOrCmpOrArgs>> extends infer TArgs ? StoryAnnotations<ReactRenderer, AddMocks<TArgs, DefaultArgs>, SetOptional<TArgs, keyof TArgs & keyof DefaultArgs>> : never : TMetaOrCmpOrArgs extends ComponentType<any> ? StoryAnnotations<ReactRenderer, ComponentProps<TMetaOrCmpOrArgs>> : StoryAnnotations<ReactRenderer, TMetaOrCmpOrArgs>;
type AddMocks<TArgs, DefaultArgs> = Simplify<{
    [T in keyof TArgs]: T extends keyof DefaultArgs ? DefaultArgs[T] extends (...args: any) => any & {
        mock: {};
    } ? DefaultArgs[T] : TArgs[T] : TArgs[T];
}>;
type Decorator<TArgs = StrictArgs> = DecoratorFunction<ReactRenderer, TArgs>;
type Loader<TArgs = StrictArgs> = LoaderFunction<ReactRenderer, TArgs>;
type StoryContext<TArgs = StrictArgs> = StoryContext$1<ReactRenderer, TArgs>;
type Preview = ProjectAnnotations<ReactRenderer>;

/** Function that sets the globalConfig of your storybook. The global config is the preview module of your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *```jsx
 * // setup.js (for jest)
 * import { setProjectAnnotations } from '@storybook/react';
 * import projectAnnotations from './.storybook/preview';
 *
 * setProjectAnnotations(projectAnnotations);
 *```
 *
 * @param projectAnnotations - e.g. (import * as projectAnnotations from '../.storybook/preview')
 */
declare function setProjectAnnotations(projectAnnotations: NamedOrDefaultProjectAnnotations<ReactRenderer> | NamedOrDefaultProjectAnnotations<ReactRenderer>[]): ProjectAnnotations<ReactRenderer>;
declare const INTERNAL_DEFAULT_PROJECT_ANNOTATIONS: ProjectAnnotations<ReactRenderer>;
/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally projectAnnotations e.g. (import * as projectAnnotations from '../.storybook/preview)
 * and will return a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStory } from '@storybook/react';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param story
 * @param componentAnnotations - e.g. (import Meta from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 * @param [exportsName] - in case your story does not contain a name and you want it to have a name.
 */
declare function composeStory<TArgs extends Args = Args>(story: StoryAnnotationsOrFn<ReactRenderer, TArgs>, componentAnnotations: Meta<TArgs | any>, projectAnnotations?: ProjectAnnotations<ReactRenderer>, exportsName?: string): ComposedStoryFn<ReactRenderer, Partial<TArgs>>;
/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally projectAnnotations (e.g. `import * as projectAnnotations from '../.storybook/preview`)
 * and will return an object containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/react';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param csfExports - e.g. (import * as stories from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 */
declare function composeStories<TModule extends Store_CSFExports<ReactRenderer, any>>(csfExports: TModule, projectAnnotations?: ProjectAnnotations<ReactRenderer>): Omit<StoriesWithPartialProps<ReactRenderer, TModule>, keyof Store_CSFExports>;

export { Decorator, INTERNAL_DEFAULT_PROJECT_ANNOTATIONS, Loader, Meta, Preview, ReactRenderer, StoryContext, StoryFn, StoryObj, composeStories, composeStory, setProjectAnnotations };
