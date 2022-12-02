import { generateDayOneResult } from "./day01.ts";
import { generateDayTwoResult } from "./day02.ts";
import { readAsText } from "./shared.ts";

const DAY_INPUT = {
  day01: await readAsText("./day01.input.txt"),
  day02: await readAsText("./day02.input.txt"),
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(generateDayOneResult(DAY_INPUT.day01));
  console.log(generateDayTwoResult(DAY_INPUT.day02));
}