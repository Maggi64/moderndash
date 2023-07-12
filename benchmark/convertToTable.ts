const data = `moderndash - array/chunk.bench.ts > chunk
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

moderndash - array/range.bench.ts > range
1.09x faster than lodash
5.90x faster than radash

moderndash - array/intersection.bench.ts > intersection
3.36x faster than lodash
18.73x faster than remeda

moderndash - array/intersection.bench.ts > intersectionWith
1.10x faster than lodash

modernDash - array/move.bench.ts > Move
2.62x faster than rambda

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

lodash - crypto/randomFloat.bench.ts > randomFloat
5.40x faster than moderndash

lodash - crypto/randomInt.bench.ts > randomInt
55.47x faster than moderndash

moderndash - number/median.bench.ts > median
1.05x faster than rambda

moderndash - object/flatKeys.bench.ts > set
2.95x faster than radash

moderndash - object/set.bench.ts > set
1.02x faster than lodash
1.05x faster than radash

moderndash - object/omit.bench.ts > omit
1.35x faster than radash
2.39x faster than remeda
3.89x faster than lodash

moderndash - object/pick.bench.ts > pick
1.10x faster than radash
6.71x faster than remeda
14.27x faster than lodash

moderndash - string/camelCase.bench.ts > camelCase
1.95x faster than radash
2.11x faster than lodash

moderndash - string/deburr.bench.ts > deburr
1.06x faster than lodash

moderndash - string/escapeHtml.bench.ts > escapeHtml
1.03x faster than lodash

moderndash - string/kebabCase.bench.ts > kebabCase
1.59x faster than lodash
2.15x faster than radash

radash - string/pascalCase.bench.ts > pascalCase
3.33x faster than moderndash

moderndash - string/snakeCase.bench.ts > snakeCase
2.74x faster than radash

moderndash - string/splitWords.bench.ts > splitWords
1.49x faster than lodash

moderndash - string/titleCase.bench.ts > titleCase
1.10x faster than radash
1.65x faster than lodash

moderndash - string/trim.bench.ts > trim
9.14x faster than lodash
11.07x faster than radash

moderndash - string/trimStart.bench.ts > trimStart
11.16x faster than lodash

moderndash - string/unescape.bench.ts > escapeHtml
1.12x faster than lodash

moderndash - validate/isEmpty.bench.ts > isEmpty
6.45x faster than radash
8.20x faster than rambda
196.47x faster than lodash

moderndash - validate/isEqual.bench.ts > isEqual
3.08x faster than radash
6.99x faster than remeda
58.49x faster than lodash

radash - validate/isPlainObject.bench.ts > isPlainObject
1.81x faster than moderndash
15.34x faster than lodash`;

const benchResults = data.split("\n\n");

const libNames = ["moderndash", "lodash", "radash", "rambda", "remeda"];

let resTable = `File,${libNames.join(",")}\n`;

for (const result of benchResults) {
    // object of libName: empty
    const testResults = {} as Record<string, string>;

    const lines = result.split("\n");
    const [header, ...results] = lines;
    const [fastestLib, testHeader] = header.split(" - ");

    const testName = testHeader.replace(/\.bench\.ts > .*$/g, "");
    testResults[fastestLib] = "1.00x";

    for (const libName of libNames)
        if (libName !== fastestLib)
            testResults[libName] = "-";

    for (const result of results) {
        const [speed, libName] = result.split(" faster than ");
        testResults[libName] = speed;
        if (speed !== "1.00x")
            testResults[libName] += " slower";
    }

    const row = `${testName},${libNames.map(libName => testResults[libName]).join(",")}\n`;
    resTable += row;
}

console.log(resTable);