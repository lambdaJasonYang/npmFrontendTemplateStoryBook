# MWS - Template for building frontend npm packages via Storybook
## Summary

1. Write your library in `index.ts` 
2. `npm run build` : Generate types `index.d.ts` and library `index.js` via typescript tsc into `dist/` folder
3. Create a story for your library like `trial1.stories.ts`, importing from `index.js` to demo it on localhost:6006
4. `npm pub` Package and publish `dist/` folder

The brother repo is [https://github.com/userJY/npmFrontendTemplateWebpack](https://github.com/userJY/npmFrontendTemplateWebpack) which uses Webpack dev server instead of Storybook to demo the package.

## How to Use

```bash
npm install countcores
```

```js
import numcores from 'countcores';
console.log(numcores)
```

## How it was made


* package.json
  * Add `"main": "dist/index.js",` - Published module entry point is here
  * Add `"files" : ["dist","README.md"],` - Only publishes files in dist and README.md to npm
  * Add `"types" : "dist/index.d.ts"` - Detect types entry point 
* tsconfig.json
  * Add `"outDir": "./dist",` - Output to dist folder
  * Add `"exclude": ["dist","storybook"...]` - Do not typecheck generated files or storybook
  * Add `"declaration": true,` - generate index.d.ts
  * Add `"typeRoots": ["@types", "node_modules/@types"],` - detect your own custom types folder `@types`
    * `mkdir @types` and add `global.d.ts` 


## Typedoc

* Note: no need to install typedoc since the plugins with install the appropriate version

```bash
npm install typedoc-plugin-missing-exports
npm install --save-dev typedoc-umlclass
npm install typedoc
```

Add these script to package.json

```json
  "scripts": {
    "build": "npm run clean && tsc",
    "clean": "npm run cleandist && npm run cleandocs",
    "cleandist": "tsc --build --clean",
    "cleandocs": "rm -rf docs",
    "docs": "typedoc --options typedoc.json",
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "pub": "npm run clean && npm run build && npm run docs && npm publish"
  },
```

```bash
npm run build
npm run docs
```

## Storybook

* `trial.stores.ts` is the story that uses our demo library.   

```bash
npx storybook init
# select HTML
export NODE_OPTIONS=--openssl-legacy-provider
npm storybook start
#visit localhost:6006
```

## Deploy docs

Choose to deploy w/ github action as static page template

Modify `path: '.'` ==> `path: './docs'`

```.yml
        with:
          # Upload entire repository
          path: './docs'
```
