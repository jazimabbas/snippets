import { NodePlopAPI } from "plop";
import path from "path";
import { templatesDir } from "../utils/constants";

export const eslintGenerator = (plop: NodePlopAPI) => {
  plop.setGenerator("controller", {
    description: "Eslint",
    prompts: [],
    actions: () => {
      return [
        {
          type: "add",
          path: "eslint.config.mjs",
          templateFile: path.join(templatesDir, "eslint/eslint.mjs.hbs"),
        },
      ];
    },
  });
};
