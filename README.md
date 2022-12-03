# Gets the number of cores of machine

## How to Use

```bash
npm install countcores
```

```js
import numcores from 'countcores';
console.log(numcores)
```

## publishing npm package


* package.json
  * Add `"main": "dist/index.js",` - Published module entry point is here
  * Add `"files" : ["dist","README.md"],` - Only publishes files in dist and README.md to npm
  * Add `"types" : "dist/index.d.ts"` - Detect types entry point 
* tsconfig.json
  * Add `"outDir": "./dist",` - Output to dist folder
  * Add `"exclude": ["dist",...]` - Do not typecheck generated files
  * Add `"declaration": true,` - generate index.d.ts
  * Add `"typeRoots": ["@types", "node_modules/@types"],` - detect your own custom types folder `@types`
    * `mkdir @types` and add `global.d.ts` 


## Typedoc

* Note: no need to install typedoc since the plugins with install the appropriate version

```bash
npm install typedoc-plugin-missing-exports
npm install --save-dev typedoc-umlclass
```

Add these script to package.json

```json
  "scripts": {
    "build": "npm run clean && tsc",
    "clean": "tsc --build --clean",
    "cleandoc": "rm -r docs",
    "doc": "typedoc --entryPointStrategy resolve .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```bash
npm run build
npm run cleandoc
npm run doc
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