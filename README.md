# ModernDash

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

## Continue at
 - invokeMap
