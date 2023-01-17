import { readable } from 'svelte/store';

import extractedTypes from '$assets/extractedTypes.json';

export const docDataStore = readable(extractedTypes);