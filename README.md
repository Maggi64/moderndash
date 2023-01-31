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

<h3 align=center>
  <a href="https://moderndash.io" target="_blank">
       📓 Documentation
  </a>
</h3>

---

> **Warning**
> This library is still in beta.

## 🔖 Introduction
I developed ModernDash as an modern lightweight alternative to Lodash and other utility libraries.  
ModernDash provides powerful functions while encouraging you to use native JS where its appropriate.

Why would i need:
- `ModernDash.isArray()` when there is `Array.isArray()`
- `Lodash.compact(array)` when i could write `array.filter(Boolean)`

It ignores trivial functions and focuses of the functions you actually need.
## 💾 Installation

```bash
npm install moderndash
```

## Why is X lodash function not included?
Please check [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for native replacements.  
If you still think a function is missing open an issue.