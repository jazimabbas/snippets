import { NodePlopAPI } from "plop";
import { eslintGenerator } from "./eslint";

export const addAllGenerator = (plop: NodePlopAPI) => {
  eslintGenerator(plop);
};
