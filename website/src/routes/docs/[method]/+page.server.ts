import { unique } from 'moderndash';

import { docData } from '$utils/docData.js';
import { markdownParser } from '$utils/markdown.js';

export const load = (({ params }) => {
    const methodName = params.method;
    
    const methodDoc = docData.functions.find(func => func.name.toLowerCase() === methodName.toLowerCase());
    const typeDoc = docData.typeAliases.find(type => type.name.toLowerCase() === methodName.toLowerCase());
    const classDoc = docData.classes.find(type => type.name.toLowerCase() === methodName.toLowerCase());

    const signature = methodDoc?.signatures[0] ?? typeDoc ?? classDoc;
    const fileSource = methodDoc?.source ?? typeDoc?.source ?? classDoc?.source;
    
    if (!signature) return { status: 404 };

    const codeMarkdown = signature.comment.blockTags.find(tag => tag.name === 'example')?.text;
    const code = getEmbedCode(signature.name, codeMarkdown);

    const description = signature.comment.description ?? 'No description';
    const parsedMarkdown = markdownParser(description).replace(/{@link ([^}]+)}/g, '<a href="/docs/$1">$1</a>');

    return {
        name: methodDoc?.name ?? typeDoc?.name ?? classDoc?.name,
        description,
        code,
        parsedMarkdown,
        path: fileSource && (fileSource.path + '/' + fileSource.file)
    };
});

function getEmbedCode(functionName: string, codetext: string | undefined) {
    if (!codetext) return '';
    let code = codetext.replace(/```(ts|typescript)\n/, '').replace('```', '');
    
    // Deals with Top Level Await Bug in Stackblitz
    if (code.includes('await')) {
        code = wrapInAsyncFunc(code);
    }

    return generateImportString(functionName, code) + code;
}


function generateImportString(functionName: string, code: string) {
    const codeWithOutComments = code.replace(/\/\*[\S\s]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '');
    const foundFunctionNames = codeWithOutComments.match(
        new RegExp(`(?<!\\.)\\b(${docData.functions.map(func => func.name).join('|')})\\b`, 'g')
    );

    const functionsToImport = unique([functionName, ...(foundFunctionNames ?? [])]);
    return `import { ${functionsToImport.join(', ')} } from 'moderndash';\n\n`;
}

function wrapInAsyncFunc(code: string) {
    let lines = code.split('\n');
    lines = lines.map((line, index) => {
        if (index < lines.length - 1) {
            return '  ' + line;
        }
        return line;
    });
    code = lines.join('\n');
    code = `(async () => {\n${code}})()`;
    return code;
}
