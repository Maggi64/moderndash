# ModernDash

## Removed Functions because of trivial native alternatives
Consult [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for native replacements.

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

Functions are not considered trivial if they include reduce methods. This is because reduce methods are hard to read.

## Might be added later (open for discussion)
- dropRightWhile shorthands
- dropWhile shorthands
