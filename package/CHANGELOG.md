# moderndash

## 2.3.1

### Patch Changes

- Update readme in package ([`867c378`](https://github.com/Maggi64/moderndash/commit/867c378878082a6176d991beebbc9b31039c2302))

## 2.3.0

### Minor Changes

- Reduce requirement to Node 16 | Add flag disclaimer for NodeJS <19 ([`6770e58`](https://github.com/Maggi64/moderndash/commit/6770e5822e1717503303b4e29bc3d939de531d58))

## 2.2.3

### Patch Changes

- `hash` | only create textEncoder when needed ([`991a1d9`](https://github.com/Maggi64/moderndash/commit/991a1d96e768ac01052d578e8d141d15db3e859d))

## 2.2.2

### Patch Changes

- `hash` | move TextEncoder in outer scope to improve performance ([`5512d34`](https://github.com/Maggi64/moderndash/commit/5512d343be8f7f6332941ac9d4ca6d705cb5fb8f))

- `randomInt` | Fix modulo bias ([`5f993cc`](https://github.com/Maggi64/moderndash/commit/5f993cc1ea6a6291d43c9f1e3061357c652f33cb))

- `randomString` | use randomInt internaly to fix modulo bias ([`b1b8d66`](https://github.com/Maggi64/moderndash/commit/b1b8d662b1c6340be9456bab75f5211c69783e6c))

- `randomFloat` | improve precision by generating all 52 float bits ([`d6dd5e0`](https://github.com/Maggi64/moderndash/commit/d6dd5e06b244f370969141653fa9c90a63342c2c))

## 2.2.1

### Patch Changes

- `flatKeys` | extract function into outer scope => performance ([`1207268`](https://github.com/Maggi64/moderndash/commit/12072685e20ab6e09a5526c3faab8dbb19af6891))

## 2.2.0

### Minor Changes

- Add `flatKeys` function ([`a45e4e4`](https://github.com/Maggi64/moderndash/commit/a45e4e47c8729db5d22d61bf00abc44b98207fe5))

### Patch Changes

- `set` | make path dot notation more robust ([`be904aa`](https://github.com/Maggi64/moderndash/commit/be904aac6284cc22051d89b297d24845cf5bfb5e))

- string functions | improve performance (use Map + reuse regex object) ([`b380dfa`](https://github.com/Maggi64/moderndash/commit/b380dfadcda599804389a7934a2779d11ea12f90))

- `chunk` | rename parameter to chunkSize ([`2e2bbdf`](https://github.com/Maggi64/moderndash/commit/2e2bbdf6f91688898c4a87a3f6daa5710cda0884))

- `set` | add example with array ([`8564d2f`](https://github.com/Maggi64/moderndash/commit/8564d2fd794730a6a961a9593171ec38b3ebef69))

- `drop/takeWhile` | simplify docs ([`42a51ee`](https://github.com/Maggi64/moderndash/commit/42a51ee73695f46a69d1a2145220b9fab9577681))

- `Memoize` | simplify docs ([`7ab7166`](https://github.com/Maggi64/moderndash/commit/7ab71665f460c30812f538cac2c767f652a4b531))

- `set` | check path with regex, ensuring it matches the right format ([`25b78e0`](https://github.com/Maggi64/moderndash/commit/25b78e0cc784d4b440690ebace80e64bebbf6b8d))

## 2.1.4

### Patch Changes

- Array Functions | Fix documentation errors ([`605fe75`](https://github.com/Maggi64/moderndash/commit/605fe75dc3d9c3ed10845aa4e3ff425bb4ef0e25))

- Array, Object, Number functions | Add readonly attribute to arrays + docs fixes ([`8708dea`](https://github.com/Maggi64/moderndash/commit/8708dea40338d729a3518337e38e7492f88761ad))

- `count` | typefixes in example ([`b4b775d`](https://github.com/Maggi64/moderndash/commit/b4b775d972e86dd55bf78626e09f55799de72b63))

## 2.1.3

### Patch Changes

- Add benchmark results to readme ([`f5d6128`](https://github.com/Maggi64/moderndash/commit/f5d612813f70e217c6a892d3ff28518812abae80))

- `intersection` | Add fastArrayFlat optimization from `difference` ([`192f807`](https://github.com/Maggi64/moderndash/commit/192f8079574d886cc49645408af607a1cbf82bc2))

- `difference` | improve performance ([`59612cc`](https://github.com/Maggi64/moderndash/commit/59612ccc4cd41e7801cbe2239d208aa24f1054e6))

- `group` | improve performance ([`f53bf9d`](https://github.com/Maggi64/moderndash/commit/f53bf9de857e2abbf8eaef0f48b422419765a632))

## 2.1.2

### Patch Changes

- `chunk` | Optimize performance ([`0f48b18`](https://github.com/Maggi64/moderndash/commit/0f48b18e6d09b177147e27244d3f2a798b7761a8))

- `shuffle` | simplify code and optimize performance ([`41901af`](https://github.com/Maggi64/moderndash/commit/41901af53ea6f6a56a867637dfb49603e04e28b1))

- `shuffle`, `sort` | clarify that they return a new array ([`b349d6b`](https://github.com/Maggi64/moderndash/commit/b349d6be95e45905d28e26f7fe24b6d9264dccc4))

## 2.1.1

### Patch Changes

- `intersection` | return unique values ([`8b1f9db`](https://github.com/Maggi64/moderndash/commit/8b1f9db719227353c5e323e1ff11fc13cb706198))

- `isEqual` | improve performance ([`4a3615c`](https://github.com/Maggi64/moderndash/commit/4a3615c96cb75b60c265be15c1c08bdd792f3e37))

- `deburr` | simplify and optimize ([`534ffc0`](https://github.com/Maggi64/moderndash/commit/534ffc0cc8d4a6b16e6be89d082a79688f2ba5ee))

- `count` | improve performance & remove automatic boolean handling ([`77b728c`](https://github.com/Maggi64/moderndash/commit/77b728c73d1160ac808dfb4adedeba662727de7a))

- `intersection` | performance optimization ([`86df217`](https://github.com/Maggi64/moderndash/commit/86df2171430836f88ee5137fb3d8bcd0a1b7d29e))

## 2.1.0

### Minor Changes

- `difference`, `unique`, `intersection` | remove isEqual as default for comparison to improve performance ([`2a9713a`](https://github.com/Maggi64/moderndash/commit/2a9713af3985eb171cf5724f62185afa69c36c53))

- `takeWhileRight` | Swapped parameter to correct order ([`f89650f`](https://github.com/Maggi64/moderndash/commit/f89650f251863ec4260d483168fac8d36dab569c))

### Patch Changes

- fix: randomString return empty string if charSet is emtpy ([`4327829`](https://github.com/Maggi64/moderndash/commit/43278294a8786a9b7f88fb6c68931c82952b2c29))

- Clarify ArrayMinLength docs ([`3870da0`](https://github.com/Maggi64/moderndash/commit/3870da0b01a078036896306a7cc280b4b1416571))

- fix optimize chunk & unique performance ([`e113a48`](https://github.com/Maggi64/moderndash/commit/e113a4826f2dc40e0686102bffc26b3a1be67721))

## 2.0.1

### Patch Changes

- Add whitespace to jsonifiable type docs ([`d31aec8`](https://github.com/Maggi64/moderndash/commit/d31aec8c4e8e2fcbf4b612e218ceb792a3885e0f))

## 2.0.0

### Major Changes

- breaking: rename `sample` to `randomElem` and move into crypto category ([`19f8365`](https://github.com/Maggi64/moderndash/commit/19f83651bbb96b2d2154042887f1e46b1e79c092))

- breaking: move randomInt & randomFloat into crypto category ([`f869bd8`](https://github.com/Maggi64/moderndash/commit/f869bd8273c498787f2ee1ec0cc7e4e1ea6d845f))

### Minor Changes

- feat: add `randomString` function ([`0d2caf4`](https://github.com/Maggi64/moderndash/commit/0d2caf4f3d4a6b07000a5e114d6ce720262b3a5a))

- feat: add `hash` function ([`750d942`](https://github.com/Maggi64/moderndash/commit/750d94245db4905bd0c30754ac70b7bedf197d26))

## 1.3.0

### Minor Changes

- feat: add tryCatch function ([`de31155`](https://github.com/Maggi64/moderndash/commit/de31155457c9799a059dae7a21391da2acfc4c75))

### Patch Changes

- fix: reduce example indent to 2 ([`3589b11`](https://github.com/Maggi64/moderndash/commit/3589b11c5e90c0ade4c764da616de04cfc8e285b))

## 1.2.0

### Minor Changes

- feat: add round function ([`7d239cb`](https://github.com/Maggi64/moderndash/commit/7d239cb32ea37290ad4a4e18c39b03631d654b2c))

### Patch Changes

- remove dash from @param docs ([`82d184e`](https://github.com/Maggi64/moderndash/commit/82d184e7643010d4efa38ac189e4da8478fac6b0))

## 1.1.1

### Patch Changes

- remove alpha tag from set function ([`42085ce`](https://github.com/Maggi64/moderndash/commit/42085ce524fd2732a5b00ec4f671736bebe8a288))

- clarify races docs ([`ba3d6e9`](https://github.com/Maggi64/moderndash/commit/ba3d6e9107eb5ad09d4e0341c415a6c76e2640ce))

- use array spread in range docs ([`445eff2`](https://github.com/Maggi64/moderndash/commit/445eff2773e8d9379407362cb8758c0fed1e7a1e))

## 1.1.0

### Minor Changes

- feat: added range function ([`57a0a59`](https://github.com/Maggi64/moderndash/commit/57a0a59fd39f6a19f68f39fc3d56f93f3e60f1de))

### Patch Changes

- difference docs make it clear that more then 2 arrays can be used ([`f0fb289`](https://github.com/Maggi64/moderndash/commit/f0fb289f431062bf49762c9e10e3bc5e4bc90546))

- simplify retry docs ([`1c52df6`](https://github.com/Maggi64/moderndash/commit/1c52df6c1155d88b70fae3160338f1fc51a1420f))

## 1.0.0

### Major Changes

- [`77825f5`](https://github.com/Maggi64/moderndash/commit/77825f55edd6ce51298e187b38eeee22b9be7668) - Release 1.0

### Minor Changes

- [`c49610c`](https://github.com/Maggi64/moderndash/commit/c49610c94de01d98c3d1ba2fd759c27b6406f6f3) - feat: add splitWords function

### Patch Changes

- [`94bb09b`](https://github.com/Maggi64/moderndash/commit/94bb09b1e7eb5417e5ba83833246c21070700e83) - change decDebounce docs to work around stackblitz bug

- [`7d4d139`](https://github.com/Maggi64/moderndash/commit/7d4d139ec3a7d2d79efe61665d26aeb9ec0409db) - Remove useless condition in (un)escapeHtml

- [`d7a26c0`](https://github.com/Maggi64/moderndash/commit/d7a26c0b2428ff7d692f40fa0a297efc52ee0abb) - Adjust difference docs for readability

## 0.14.2

### Patch Changes

- [`d964c8c`](https://github.com/Maggi64/moderndash/commit/d964c8cf9cb2d9c327a7c36105a6015ae8b642bc) - Exclude deburr example from case functions
