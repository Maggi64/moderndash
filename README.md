![ModernDash Logo](/website/src/assets/moderndash-logo.svg)

<p align=center>
  A Typescript-First utility library inspired by Lodash.
  Optimized for modern browsers.
</p>
<p align=center>
  ✅ ESM
  ✅ Tree-shakable
  ✅ Typescript Strict Mode (no any types)
  ✅ Zero dependencies
</p>

-------

> **Warning**
> This library is still in development and is not ready for production use.

## Documentation
The documentation is WIP.

## Removed Functions because of trivial native alternatives
Look at [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for native replacements.

### Array Functions
- compact
- concat
- differenceBy property shorthand
- drop
- dropRight
- fill
- findIndex
- findLastIndex
- first/head
- flatten
- flattenDeep
- flattenDepth
- fromPairs
- initial
- join
- last
- lastIndexOf
- nth
- without
- reverse
- slice
- sortedIndexOf
- tail
- take
- takeRight
- without

### Collection Functions
- each/forEach
- every
- filter
- find
- flatMap
- includes

### String Functions
- lowerCase
- trim
- trimEnd
- trimStart
- pad
- padEnd
- padStart

Functions are not considered trivial if they:
 - include reduce methods
 - include multiple nested function calls

## TODO
- More unzip tests
- Check if flatmapdeep, flatmapDepth is included in native flatmap
- GroupBy Property Shorthand

## Might be added later (open for discussion)
- pull functions (pull, pullAll, pullAllBy, pullAllWith, pullAt)
- remove
- sorted functions (sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy)
  - if performance is better than native alternatives (testing needed)
- xor functions (xor, xorBy, xorWith)
- zipObject, zipObjectDeep
- forEachRight
- findLast
- lowerFirst
- keyBy

## Continue at
 - invokeMap
