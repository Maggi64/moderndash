/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
    entryPoints: ["./package/src/index.ts"],
    tsconfig: "./package/tsconfig.json",
    json: "./website/src/assets/extractedTypes.json",
    excludeNotDocumented: true
}
