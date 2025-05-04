import path from "path";
import { NodePlopAPI } from "plop";
import { templatesDir } from "../utils/constants";

export const zustandGenerator = (plop: NodePlopAPI) => {
  plop.setGenerator("zustand", {
    description: "Zustand Store",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the provider?",
        default: "User"
      },
    ],
    actions: () => {
      return [
        {
          type: "add",
          path: "src/store/{{pascalCase name}}.tsx",
          templateFile: path.join(templatesDir, "zustand/store.tsx.hbs"),
        },
      ];
    },
  });
};
