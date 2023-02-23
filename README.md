![ModernDash Logo](/website/src/assets/moderndashLogo.svg)

<p align=center>
  A Typescript-First utility library inspired by Lodash.
  Optimized for modern browsers & developer experience.
</p>

<div align=center class="space-y">
  ✅ ESM
  ✅ Tree-shakable
  ✅ Typescript Strict Mode (no any)
  ✅ 100% Test Coverage
  <br>
  ✅ Zero dependencies
  ✅ Hoverable Docs
  ✅ TS Decorators
  ✅ ESNext
</div>
<p></p>

<div align=center class="center">
  <a href="https://bundlephobia.com/package/moderndash@0.11.1">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/moderndash@latest?color=Green">
  </a>
  <a href="https://www.npmjs.com/package/moderndash">
    <img alt="npm" src="https://img.shields.io/npm/dw/moderndash">
  </a>
  <a href="https://www.npmjs.com/package/moderndash">
    <img alt="npm" src="https://img.shields.io/npm/v/moderndash?label=version">
  </a>
  <img alt="node-current" src="https://img.shields.io/node/v/moderndash">
  <a href="https://github.com/Maggi64/moderndash/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/maggi64/moderndash">
  </a>
</div>

<h3 align=center class="hide-on-website">
  <a href="https://moderndash.io" target="_blank">
       📓 Documentation
  </a>
</h3>

---

## 📓 Introduction
ModernDash is a modern and lightweight alternative to utility libraries like Lodash. It provides important functions while encouraging the use of native JS wherever possible.

ModernDash ignores trivial functions and instead focuses on the functions that you actually need.
```typescript
// We don't need
Lodash.isArray(arr)
Lodash.compact(arr)

// When we have these native replacements
Array.isArray(arr)
arr.filter(Boolean)
```
## 💾 Installation

```bash
npm install moderndash
```

## FAQ

### Why is X lodash function not included?
Please refer to [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [youmightnotneed.com/lodash](https://youmightnotneed.com/lodash) for native replacements.  
If you still believe a function is missing, please open an issue.

### Why no pipe utility functions?
The upcoming [pipe operator](https://github.com/tc39/proposal-pipeline-operator) in JavaScript will provide function composition, so the framework focuses on providing other useful utility functions that are not yet available.

The pipe operator can already be included via [babel](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator).

## Contribute

### Package
The documentation and examples are stored directly in the code as TSDoc and will be extracted in the website build process.

Run the follwing commands to run the test suite.
- `cd package` => go into the package folder
- `npm run test-dev` => to run the test suite in watch mode
- `npm run test` => to run the tests once with code coverage

To check the test coverage report open `/package/coverage/index.html` in the browser.

### Website
Run the following commands to start the website dev server.

- `npm run build:docs-data` => This creates the a json file for the website.
- `cd website` => Go into the website directory
- `npm run dev` => Start the dev server

The website can be rendered for production with `npm run build:docs` from the project root.