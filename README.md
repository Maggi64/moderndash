![ModernDash Logo](/website/src/assets/moderndashLogo.svg)

<p align=center>
  A Typescript-First utility library inspired by Lodash.
  Optimized for modern browsers & developer experience.
</p>

<div align=center>
  ✅ ESM
  ✅ Tree-shakable
  ✅ Typescript Strict Mode (no any)<br>
  ✅ Zero dependencies
  ✅ Hoverable Docs
  ✅ TS Decorators
  ✅ ESNext
</div>
<p></p>

<div align=center>
  <a href="https://bundlephobia.com/package/moderndash@0.11.1">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/moderndash@latest?color=Green">
  </a>
  <a href="https://www.npmjs.com/package/moderndash">
    <img alt="npm" src="https://img.shields.io/npm/dw/moderndash">
  </a>
  <a href="https://github.com/Maggi64/moderndash/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/maggi64/moderndash">
  </a>
</div>

<h3 align=center>
  <a href="https://moderndash.io" target="_blank">
       📓 Documentation
  </a>
</h3>

---

## 🔖 Introduction
ModernDash is a modern and lightweight alternative to utility libraries like Lodash. It provides important functions while encouraging use of native JS where possible.

ModernDash ignores trivial functions and focuses of the functions you actually need.
```typescript
// We don't need
Lodash.isArray(arr)
Lodash.compact(arr)

// When we these native replacements
Array.isArray(arr)
arr.filter(Boolean)
```
## 💾 Installation

```bash
npm install moderndash
```

## Why is X lodash function not included?
Please check [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for native replacements.  
If you still think a function is missing open an issue.