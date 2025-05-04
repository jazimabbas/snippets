import { NodePlopAPI } from "plop";
import { runGenerator } from "./generators/actions/runGenerator";
import { addAllGenerator } from "./generators/addAll";

export default function (plop: NodePlopAPI) {
  runGenerator(plop);

  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [],
    actions: [],
  });

  addAllGenerator(plop);
}
