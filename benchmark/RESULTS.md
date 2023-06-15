 # Benchmark Results
*Note: The performance benchmarks for ModernDash are a work in progress, and contributions to help improve them further are welcome. Please keep in mind that JavaScript benchmarks can be flaky due to various factors like hardware and software conditions.*

 Benchmarks are included in the repo so you can verify the results yourself.
 ```
 > npm run bench
 
  moderndash - array/chunk.bench.ts > chunk
    1.00x faster than lodash
    1.40x faster than radash
    7.57x faster than remeda

  moderndash - array/count.bench.ts > count
    1.03x faster than lodash
    1.05x faster than radash

  moderndash - array/difference.bench.ts > difference
    1.30x faster than radash
    1.88x faster than remeda
    4.52x faster than lodash

  moderndash - array/difference.bench.ts > difference 4 arrays
    1.32x faster than lodash

  lodash - array/difference.bench.ts > difference compareFn
    1.07x faster than remeda
    1.26x faster than moderndash

  moderndash - array/dropRightWhile.bench.ts > dropRightWhile
    2.07x faster than lodash

  moderndash - array/dropWhile.bench.ts > dropWhile
    1.78x faster than lodash

  moderndash - array/group.bench.ts > group
    1.46x faster than lodash
    1.63x faster than radash
    4.02x faster than remeda

  moderndash - array/intersection.bench.ts > intersection
    3.36x faster than lodash
    18.73x faster than remeda

  moderndash - array/intersection.bench.ts > intersectionWith
    1.10x faster than lodash

  modernDash - array/move.bench.ts > Move
    2.62x faster than Rambda (Note: unfair comparison, Rambda copies the array instead of mutating it)

  moderndash - array/shuffle.bench.ts > shuffle
    1.71x faster than lodash
    14.47x faster than radash

  moderndash - array/takeRightWhile.bench.ts > takeRightWhile
    1.15x faster than lodash

  moderndash - array/takeWhile.bench.ts > takeWhile
    2.37x faster than lodash
    29.94x faster than remeda

  moderndash - array/unique.bench.ts > unique
    1.74x faster than remeda
    3.50x faster than radash
    5.37x faster than lodash

  lodash - crypto/randomInt.bench.ts > randomInt
    15.04x faster than moderndash (Note: using crypto.randomInt which is slower than Math.random)

  moderndash - number/median.bench.ts > median
    1.05x faster than rambda

  moderndash - object/flatKeys.bench.ts > set
    2.40x faster than radash

  moderndash - object/omit.bench.ts > omit
    1.47x faster than remeda
    1.71x faster than radash
    3.56x faster than lodash

  moderndash - object/pick.bench.ts > pick
    1.08x faster than radash
    5.06x faster than remeda
    9.64x faster than lodash

  moderndash - object/set.bench.ts > set
    1.10x faster than lodash
    1.15x faster than radash

  moderndash - string/camelCase.bench.ts > camelCase
    2.05x faster than radash
    2.07x faster than lodash

  moderndash - string/deburr.bench.ts > deburr
    1.38x faster than lodash

  moderndash - string/kebabCase.bench.ts > kebabCase
    1.63x faster than lodash
    2.29x faster than radash

  moderndash - string/splitWords.bench.ts > splitWords
    1.72x faster than lodash

  moderndash - string/titleCase.bench.ts > titleCase
    1.34x faster than radash
    2.06x faster than lodash

  moderndash - string/trim.bench.ts > trim
    10.31x faster than radash
    15.50x faster than lodash

  moderndash - string/trimStart.bench.ts > trimStart
    13.03x faster than lodash

  moderndash - validate/isEmpty.bench.ts > isEmpty
    9.56x faster than radash
    250.66x faster than lodash

  moderndash - validate/isEqual.bench.ts > isEqual
    3.31x faster than radash
    7.69x faster than remeda
    62.16x faster than lodash
```