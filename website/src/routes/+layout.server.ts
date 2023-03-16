import type { LayoutServerLoad } from './$types';

import { group } from 'moderndash';

import { docData } from '$utils/docData.js';
 
export const load: LayoutServerLoad = (() => {
    const libaryElements = [...docData.functions, ...docData.classes, ...docData.typeAliases];

    const funcGroups = group(libaryElements, elem => elem.source?.path ?? 'Other');


    // Sorts the groups so that the top categories are at the top
    const topCategories = ['array', 'object', 'string', 'number', 'promise', 'validate', 'function', 'crypto', 'decorator'];

    const sortedGroups = Object.entries(funcGroups).sort(([titleA], [titleB]) => {
        const indexA = topCategories.indexOf(titleA);
        const indexB = topCategories.indexOf(titleB);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
    
        return titleA.localeCompare(titleB);
    });

    const sidebarEntries = sortedGroups.map(([categoryName, entries]) => ({ categoryName, entries: entries.map(entry => entry.name) }));

    return {
        sidebarEntries
    };
});