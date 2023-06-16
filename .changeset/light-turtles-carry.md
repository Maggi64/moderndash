---
"moderndash": minor
---

`range`
- 2x performance improvement by removing the js generator
  > API simplified: `[...range(0,5)]` => `range(0,5)`  
  > This isn't a breaking change, but you should still update your code for better performance.

- Support reverse ranges
  > `range(5,0)` => `[5,4,3,2,1]`  
  > `range(5,0,2)` => `[5,3,1]`