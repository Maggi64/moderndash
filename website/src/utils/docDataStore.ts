import { readable } from 'svelte/store';
import { ProjectParser } from 'typedoc-json-parser';

import extractedTypes from '$assets/extractedTypes.json';

export const docDataStore = readable(new ProjectParser({ data: extractedTypes as ProjectParser.Json }));