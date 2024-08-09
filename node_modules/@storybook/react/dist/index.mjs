import { entry_preview_exports } from './chunk-SXKPGB5T.mjs';
import './chunk-CEH6MNVV.mjs';
import { global } from '@storybook/global';
import { setProjectAnnotations as setProjectAnnotations$1, composeStory as composeStory$1, composeStories as composeStories$1 } from 'storybook/internal/preview-api';
import { TestingLibraryMustBeConfiguredError } from 'storybook/internal/preview-errors';
import React from 'react';

var{window:globalWindow}=global;globalWindow&&(globalWindow.STORYBOOK_ENV="react");function setProjectAnnotations(projectAnnotations){return setProjectAnnotations$1(projectAnnotations)}var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS={...entry_preview_exports,renderToCanvas:({storyContext:{context,unboundStoryFn:Story,testingLibraryRender:render,canvasElement}})=>{if(render==null)throw new TestingLibraryMustBeConfiguredError;let{unmount}=render(React.createElement(Story,{...context}),{baseElement:context.canvasElement});return unmount}};function composeStory(story,componentAnnotations,projectAnnotations,exportsName){return composeStory$1(story,componentAnnotations,projectAnnotations,INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,exportsName)}function composeStories(csfExports,projectAnnotations){return composeStories$1(csfExports,projectAnnotations,composeStory)}typeof module<"u"&&module?.hot?.decline();

export { INTERNAL_DEFAULT_PROJECT_ANNOTATIONS, composeStories, composeStory, setProjectAnnotations };
