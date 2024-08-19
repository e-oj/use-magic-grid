# Use Magic Grid

## Official React wrapper for the [magic-grid](https://github.com/e-oj/Magic-Grid) library

**Note: Every item in the grid must have the same width.**

### Getting Started
#### Step 1

Get Magic Grid via NPM:

```
npm install use-magic-grid
```

#### Step 2 

Import the `useMagicGrid` hook:

```javascript
import { useMagicGrid } from 'use-magic-grid';
```

or

```js
const { useMagicGrid } = require('use-magic-grid');
```

#### Step 3

You're good to go! If you used a script tag, the library can be referenced via the global variable, MagicGrid.

```javascript
const magicGrid = useMagicGrid(...);

magicGrid.listen();
```

### Usage
#### Static content:
If your container doesn't have any dynamically loaded content i.e., all its child elements are always in the DOM, the `items` property is not necessary. You should initialize the grid this way:
```javascript
const magicGrid = useMagicGrid({
  container: "#container", // Required. Can be a class, id, or an HTMLElement.
  animate: true, // Optional.
});
```

#### Dynamic content:
If the container relies on data from an api, or experiences a delay, for whatever reason, before it can render its content in the DOM, you need to let the grid know the number of items to expect:
```javascript
const  magicGrid = useMagicGrid({
  container: "#container", // Required. Can be a class, id, or an HTMLElement.
  items: 20, // For a grid with 20 items. Required for dynamic content.
  animate: true, // Optional.
});
```

### API

#### useMagicGrid(config)
> config (required): Configuration object

Initializes the grid with a configuration object, positions items and starts listening for changes to the container size.
```javascript
const magicGrid = useMagicGrid({
  container: "#container", // Required. Can be a class, id, or an HTMLElement
  items: 30, // Optional. Number of items that should be present before initial positioning. Default: 1.
  gutter: 30, // Optional. Space between items. Default: 25(px).
  maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
  useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
  useTransform: true, // Optional. Position items using CSS transform? Default: True.
  animate: true, // Optional. Animate item positioning? Default: false.
  center: true, //Optional. Center the grid items? Default: true. 
});
```

---

#### .positionItems()
This function is useful in cases where you have to manually trigger a repositioning; for instance, if a new element is added to the container.

```javascript
const magicGrid = useMagicGrid({
  container: "#container", // Required. Can be a class, id, or an HTMLElement
  items: 30, // Required for dynamic content.
  animate: true, // Optional
});

// get data from api
// append new element to DOM

// reposition items
magicGrid.positionItems();
```

---
