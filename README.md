![ModernDash Logo](https://raw.githubusercontent.com/Maggi64/moderndash/main/website/src/assets/moderndashLogo.svg)

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
  <a href="https://bundlephobia.com/package/moderndash@latest">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/moderndash@latest?color=Green">
  </a>
  <a href="https://www.npmjs.com/package/moderndash">
    <img alt="npm" src="https://img.shields.io/npm/dw/moderndash">
  </a>
  <a href="https://www.npmjs.com/package/moderndash">
    <img alt="npm" src="https://img.shields.io/npm/v/moderndash?color=blue&label=version">
  </a>
  <span>
    <img alt="node-current" src="https://img.shields.io/node/v/moderndash?color=blue">
  </span>
  <a href="https://github.com/Maggi64/moderndash/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/maggi64/moderndash?color=orange">
  </a>
</div>

<h3 align=center class="hide-on-website">
  <a href="https://moderndash.io/docs/chunk" target="_blank">
       📓 Documentation
  </a>
</h3>

---

<div align=center class="space-y">
  <img alt="introduction code" src="https://raw.githubusercontent.com/Maggi64/moderndash/main/website/src/assets/introCodeV6.png">
</div>

## 💾 Installation

```bash
npm install moderndash
```
## 📋 Requirements

**NodeJS:** `>16.14` | **Typescript**: `>4.7`

*NodeJS 16-18*:  
To use the `cryto` functions set the [experimental-global-webcrypto](https://nodejs.dev/en/api/v16/cli#--experimental-global-webcrypto) flag.

*Typescript 4.8 - 4.9:*  
To use the `decorator` functions set the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag.

**Works out of the box with NodeJS 19 & Typescript 5 or above.**

## 🚀 Performance

ModernDash aims to outperform Lodash and deliver lightning-fast utility functions. Performance is not an afterthought, but a top priority. You can expect ModernDash to exceed or at least match the performance of Lodash in most benchmarks, ensuring that your project stays speedy and efficient.

**[[ Benchmark Results](https://github.com/Maggi64/moderndash/blob/main/benchmark/RESULTS.md) ]**

## 🗃 FAQ

### Why is X lodash function not included?
Please refer to [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [youmightnotneed.com/lodash](https://youmightnotneed.com/lodash) for native replacements.  
If you still believe a function is missing, please open an issue.

### Why no pipe utility functions?
The upcoming [pipe operator](https://github.com/tc39/proposal-pipeline-operator) in JavaScript will provide function composition, so the framework focuses on providing other useful utility functions that are not yet available.

The pipe operator can already be included via [babel](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator).

## 💌 Love & Thanks

To [type-fest](https://github.com/sindresorhus/type-fest) for providing some valuable types.

## 🧰 Contribute

Check the [contribute](https://github.com/Maggi64/moderndash/blob/main/CONTRIBUTE.md) section!
