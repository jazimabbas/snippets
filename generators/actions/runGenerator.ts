import { NodePlopAPI } from "plop";

export const runGenerator = async (plop: NodePlopAPI) => {
  plop.setActionType("runGenerator", async function (answers, config, plop) {
    const generator = plop.getGenerator(config.generator); // Retrieves the pre-registered generator
    const childAnswers = await generator.runPrompts();
    await generator.runActions(childAnswers);

    return "";
  });
};
