# Storybook Core

The `@storybook/core` package is the core of Storybook. It is responsible for the following:

- the main UI of storybook
- the UI used by addons
- the API used by addons
- the API used by the CLI
- the API used by the server
- prebundled code used by the browser
- static assets used by the browser
- utilities for CSF, MDX & Docs

## Private package

This package is not intended to be used by anyone but storybook internally.

Even though this is where all of the code is located, it is NOT to be the entry point when using functionality within!

Consumers of the code should import like so:

```ts
import { addons } from 'storybook/internal/manager-api';
```

Importing from `@storybook/core` is explicitly NOT supported; it WILL break in a future version of storybook, very likely in a non-major version bump.
