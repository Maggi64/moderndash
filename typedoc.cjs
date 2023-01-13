/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
    entryPoints: ["./package/src/index.ts"],
    tsconfig: "./package/tsconfig.json",
    json: "./docs.json",
    excludeNotDocumented: true
}
