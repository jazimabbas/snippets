import { NodePlopAPI } from "plop";

export const lowerCase = (plop: NodePlopAPI) => {
  plop.setHelper("lowerCase", (text: string) => {
    return text.toLowerCase();
  });
};
