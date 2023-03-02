 # Benchmark Results
*Note: The performance benchmarks for ModernDash are a work in progress, and contributions to help improve them further are welcome. Please keep in mind that JavaScript benchmarks can be flaky due to various factors like hardware and software conditions.*

 Benchmarks are included in the repo so you can verify the results yourself.
 ```
 > npm run benchmark
 
 moderndash - validate/isEmpty.bench.ts > isEmpty
    14.10x faster than radash
    325.08x faster than lodash

  moderndash - array/takeRightWhile.bench.ts > takeWhile
    1.84x faster than lodash

  moderndash - validate/isEqual.bench.ts > isEqual
    2.75x faster than radash
    6.51x faster than remeda
    57.11x faster than lodash

  moderndash - array/intersection.bench.ts > intersection
    3.47x faster than lodash
    18.63x faster than remeda

  moderndash - array/intersection.bench.ts > intersectionWith
    91.30x faster than lodash

  moderndash - array/takeWhile.bench.ts > takeWhile
    1.76x faster than lodash
    12.71x faster than remeda

  moderndash - array/group.bench.ts > group
    1.05x faster than lodash
    1.30x faster than radash
    2.53x faster than remeda

  moderndash - array/difference.bench.ts > difference
    1.40x faster than radash
    1.61x faster than remeda
    3.72x faster than lodash

  moderndash - array/difference.bench.ts > difference 4 arrays
    1.10x faster than lodash

  moderndash - array/difference.bench.ts > difference compareFn
    1.00x faster than lodash
    1.39x faster than remeda

  moderndash - array/chunk.bench.ts > chunk
    1.24x faster than lodash
    1.37x faster than radash
    4.17x faster than remeda

  moderndash - array/unique.bench.ts > unique
    2.07x faster than remeda
    3.78x faster than radash
    5.15x faster than lodash

  lodash - crypto/randomInt.bench.ts > randomInt
    16.28x faster than moderndash
  Note: lodash uses non-secure Math.random() which is faster

  moderndash - array/dropRightWhile.bench.ts > dropRightWhile
    1.91x faster than lodash

  moderndash - object/omit.bench.ts > omit
    1.69x faster than radash
    1.76x faster than remeda
    3.89x faster than lodash

  moderndash - object/pick.bench.ts > pick
    1.67x faster than radash
    8.39x faster than remeda
    17.53x faster than lodash

  moderndash - array/dropWhile.bench.ts > dropWhile
    1.35x faster than lodash

  moderndash - array/shuffle.bench.ts > shuffle
    1.41x faster than lodash
    12.56x faster than radash

  moderndash - string/camelCase.bench.ts > camelCase
    1.17x faster than lodash
    1.22x faster than radash

  moderndash - array/count.bench.ts > count
    1.03x faster than lodash
    1.03x faster than radash

  moderndash - string/deburr.bench.ts > deburr
    1.45x faster than lodash
```