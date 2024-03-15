 # Benchmark Results
*Note: The performance benchmarks for ModernDash are a work in progress, and contributions to help improve them further are welcome. Please keep in mind that JavaScript benchmarks can be flaky due to various factors like hardware and software conditions.*

 Benchmarks are included in the repo so you can verify the results yourself.

## Notes 
- `randomInt` & `randomFloat` use `crypto.generateRandomValues()` which is secure but much slower
- `move` in rambda copies the array instead of modifying it in place

## Results

| File                 | moderndash | lodash | radash | rambda | remeda |
| -------------------- | ---------- | ------ | ------ | ------ | ------ |
| array/chunk          | 1.00x      | 1.00x  | 1.40x  | -      | 7.57x  |
| array/count          | 1.00x      | 1.03x  | 1.05x  | -      | -      |
| array/difference     | 1.00x      | 4.52x  | 1.30x  | -      | 1.88x  |
| array/dropRightWhile | 1.00x      | 2.07x  | -      | -      | -      |
| array/dropWhile      | 1.00x      | 1.78x  | -      | -      | -      |
| array/group          | 1.00x      | 1.46x  | 1.63x  | -      | 4.02x  |
| array/range          | 1.00x      | 1.09x  | 5.90x  | -      | -      |
| array/intersection   | 1.00x      | 3.36x  | -      | -      | 18.73x |
| array/move           | 1.00x      | -      | -      | 2.62x  | -      |
| array/shuffle        | 1.00x      | 1.71x  | 14.47x | -      | -      |
| array/takeRightWhile | 1.00x      | 1.15x  | -      | -      | -      |
| array/takeWhile      | 1.00x      | 2.37x  | -      | -      | 29.94x |
| array/unique         | 1.00x      | 5.37x  | 3.50x  | -      | 1.74x  |
| crypto/randomFloat   | 5.40x      | 1.00x  | -      | -      | -      |
| crypto/randomInt     | 55.47x     | 1.00x  | -      | -      | -      |
| number/median        | 1.00x      | -      | -      | 1.05x  | -      |
| object/flatKeys      | 1.00x      | -      | 2.95x  | -      | -      |
| object/set           | 1.00x      | 1.02x  | 1.05x  | -      | -      |
| object/omit          | 1.00x      | 3.89x  | 1.35x  | -      | 2.39x  |
| object/pick          | 1.00x      | 14.27x | 1.10x  | -      | 6.71x  |
| string/camelCase     | 1.00x      | 2.11x  | 1.95x  | -      | -      |
| string/deburr        | 1.00x      | 1.06x  | -      | -      | -      |
| string/escapeHtml    | 1.00x      | 1.03x  | -      | -      | -      |
| string/kebabCase     | 1.00x      | 1.59x  | 2.15x  | -      | -      |
| string/pascalCase    | 3.33x      | -      | 1.00x  | -      | -      |
| string/snakeCase     | 1.00x      | -      | 2.74x  | -      | -      |
| string/splitWords    | 1.00x      | 1.49x  | -      | -      | -      |
| string/titleCase     | 1.00x      | 1.65x  | 1.10x  | -      | -      |
| string/trim          | 1.00x      | 9.14x  | 11.07x | -      | -      |
| string/trimStart     | 1.00x      | 11.16x | -      | -      | -      |
| string/unescape      | 1.00x      | 1.12x  | -      | -      | -      |
| validate/isEmpty     | 1.00x      | 196.47x| 6.45x  | 8.20x  | -      |
| validate/isEqual     | 1.00x      | 58.49x | 3.08x  | -      | 6.99x  |
