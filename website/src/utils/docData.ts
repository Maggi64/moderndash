import { ProjectParser } from "typedoc-json-parser";

import extractedTypes from "$assets/extractedTypes.json";

export const docData = new ProjectParser({ data: extractedTypes as ProjectParser.Json });