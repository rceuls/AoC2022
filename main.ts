import { generateDayResult as generateDayOneResult } from "./day01.ts";
import { generateDayResult as generateDayTwoResult } from "./day02.ts";
import { generateDayResult as generateDayThreeResult } from "./day03.ts";
import { generateDayResult as generateDayFourResult } from "./day04.ts";
import {
  generateDayResult as generateDayFiveResult,
  staticCrates,
} from "./day05.ts";
import { generateDayResult as generateDaySixResult } from "./day06.ts";

import { readAsText } from "./shared.ts";

const DAY_INPUT = {
  day01: await readAsText("./input/day01.input.txt"),
  day02: await readAsText("./input/day02.input.txt"),
  day03: await readAsText("./input/day03.input.txt"),
  day04: await readAsText("./input/day04.input.txt"),
  day05: await readAsText("./input/day05.input.txt"),
  day06: await readAsText("./input/day06.input.txt"),
};

const SHOULD_LOG_EXTENDED = Deno.env.get("VERBOSE") === "true";

const logIntermediateResults = (funcRes: unknown) => {
  if (SHOULD_LOG_EXTENDED) {
    console.log(funcRes);
  }
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.time("TOTAL");
  logIntermediateResults(generateDayOneResult(DAY_INPUT.day01));
  logIntermediateResults(generateDayTwoResult(DAY_INPUT.day02));
  logIntermediateResults(generateDayThreeResult(DAY_INPUT.day03));
  logIntermediateResults(generateDayFourResult(DAY_INPUT.day04));
  logIntermediateResults(
    generateDayFiveResult(staticCrates(), DAY_INPUT.day05),
  );
  logIntermediateResults(
    generateDaySixResult(DAY_INPUT.day06),
  );
  console.timeEnd("TOTAL");
}
