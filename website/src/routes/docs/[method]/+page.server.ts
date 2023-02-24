import type { PageServerLoad } from './$types.js';

import { docData } from '$utils/docData.js';
import { markdownParser } from '$utils/markdown.js';

export const load: PageServerLoad = (({ params }) => {
    const methodName = params.method;
    
    const methodDoc = docData.functions.find(func => func.name.toLowerCase() === methodName.toLowerCase());
    const typeDoc = docData.typeAliases.find(type => type.name.toLowerCase() === methodName.toLowerCase());
    const classDoc = docData.classes.find(type => type.name.toLowerCase() === methodName.toLowerCase());

    const signature = methodDoc?.signatures[0] ?? typeDoc ?? classDoc;
    const fileSource = methodDoc?.source ?? typeDoc?.source ?? classDoc?.source;
    const code = generateCode(signature?.comment.blockTags.find(tag => tag.name === 'example')?.text);

    // Removes markdown code block syntax and adds imports
    function generateCode(codetext: string | undefined) {
        if (!codetext || !signature) return '';
        let code = codetext.replace(/```(ts|typescript)\n/, '').replace('```', '');
        
        // Deals with Top Level Await Bug in Stackblitz
        if (code.includes('await')) {
            let lines = code.split('\n');
            lines = lines.map((line, index) => {
                if (index < lines.length - 1) {
                    return '  ' + line;
                }
                return line;
            });
            code = lines.join('\n');
            code = `(async () => {\n${code}})()`;
        }
        // ----

        return `import { ${signature.name} } from 'moderndash';\n\n${code}`;
    }

    const parsedMarkdown = markdownParser(signature?.comment.description ?? 'No description').replace(/{@link ([^}]+)}/g, '<a href="/docs/$1">$1</a>');

    return {
        name: methodDoc?.name ?? typeDoc?.name ?? classDoc?.name,
        description: signature?.comment.description ?? 'No description',
        code,
        parsedMarkdown,
        path: fileSource && (fileSource.path + '/' + fileSource.file)
    };
});