import path from "path";

// After transpiling TypeScript, the path to the templates directory will be different
export const templatesDir = path.resolve(__dirname, "../templates");
