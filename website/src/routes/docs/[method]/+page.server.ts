import type { PageServerLoad } from "./$types.js";

import { unique } from "moderndash";

import { docData } from "$utils/docData.js";
import { markdownParser } from "$utils/markdown.js";

export const load: PageServerLoad = (async ({ params }) => {
    const methodName = params.method;
    
    const methodDoc = docData.functions.find(func => func.name.toLowerCase() === methodName.toLowerCase());
    const typeDoc = docData.typeAliases.find(type => type.name.toLowerCase() === methodName.toLowerCase());
    const classDoc = docData.classes.find(type => type.name.toLowerCase() === methodName.toLowerCase());

    const signature = methodDoc?.signatures[0] ?? typeDoc ?? classDoc;
    const fileSource = methodDoc?.source ?? typeDoc?.source ?? classDoc?.source;
    const deprecated = signature?.comment.blockTags.find(tag => tag.name === "deprecated")?.text;
    
    if (!signature) return { status: 404 };

    const codeMarkdown = signature.comment.blockTags.find(tag => tag.name === "example")?.text;
    const code = getEmbedCode(signature.name, codeMarkdown);

    const description = signature.comment.description ?? "No description";
    let [parsedDescription, parsedDeprecated] = await Promise.all([markdownParser(description), markdownParser(deprecated ?? "")]);
    parsedDescription = parsedDescription.replaceAll(/{@link ([^}]+)}/g, '<a href="/docs/$1">$1</a>');

    return {
        name: methodDoc?.name ?? typeDoc?.name ?? classDoc?.name,
        description,
        parsedDeprecated,
        code,
        parsedDescription,
        path: fileSource && (fileSource.path + "/" + fileSource.file)
    };
});

function getEmbedCode(functionName: string, codeText: string | undefined) {
    if (!codeText) return "";
    let code = codeText.replace(/```(ts|typescript)\n/, "").replace("```", "");
    
    // Deals with Top Level Await Bug in Stackblitz
    if (code.includes("await")) {
        code = wrapInAsyncFunc(code);
    }

    return generateImportString(functionName, code) + code;
}


function generateImportString(functionName: string, code: string) {
    const codeWithOutComments = code.replaceAll(/\/\*[\S\s]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "");
    const foundFunctionNames = codeWithOutComments.match(
        new RegExp(`(?<!\\.)\\b(${docData.functions.map(func => func.name).join("|")})\\b`, "g")
    );

    const functionsToImport = unique([functionName, ...(foundFunctionNames ?? [])]);
    return `import { ${functionsToImport.join(", ")} } from 'moderndash';\n\n`;
}

function wrapInAsyncFunc(code: string) {
    let lines = code.split("\n");
    lines = lines.map((line, index) => {
        if (index < lines.length - 1) {
            return "  " + line;
        }
        return line;
    });
    code = lines.join("\n");
    code = `(async () => {\n${code}})()`;
    return code;
}
