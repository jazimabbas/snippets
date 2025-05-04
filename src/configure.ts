import { NodePlopAPI } from "plop";

import { runGenerator } from "./actions/runGenerator";
import { eslintGenerator } from "./generators/eslint";
import { zustandGenerator } from "./generators/zustand";
import { lowerCase } from "./helpers/lowercase";

/**
 * Configures Plop generators and actions
 * @param plop - The Plop API instance
 * @returns Configuration object with initialization methods and generators
 */
export const configure = (plop: NodePlopAPI) => {
  return {
    /**
     * Initializes and registers all helpers
     */
    registerHelpers: () => {
      lowerCase(plop);
    },

    /**
     * Initializes and registers all actions
     */
    registerActions: () => {
      runGenerator(plop);
    },

    generators: {
      /**
       * Initializes all available generators
       */
      initializeAll: () => {
        eslintGenerator(plop);
        zustandGenerator(plop);
      },

      eslint: () => eslintGenerator(plop),
      zustand: () => zustandGenerator(plop),
    },
  };
};
