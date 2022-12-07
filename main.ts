import { generateDayResult as generateDayOneResult } from "./day01.ts";
import { generateDayResult as generateDayTwoResult } from "./day02.ts";
import { generateDayResult as generateDayThreeResult } from "./day03.ts";
import { generateDayResult as generateDayFourResult } from "./day04.ts";
import {
  generateDayResult as generateDayFiveResult,
  staticCrates,
} from "./day05.ts";
import { generateDayResult as generateDaySixResult } from "./day06.ts";
import { generateDayResult as generateDaySevenResult } from "./day07.ts";

import { readAsText } from "./shared.ts";

const createDayInput = async () => ({
  day01: await readAsText("./input/day01.input.txt"),
  day02: await readAsText("./input/day02.input.txt"),
  day03: await readAsText("./input/day03.input.txt"),
  day04: await readAsText("./input/day04.input.txt"),
  day05: await readAsText("./input/day05.input.txt"),
  day06: await readAsText("./input/day06.input.txt"),
  day07: await readAsText("./input/day07.input.txt"),
});

const SHOULD_LOG_EXTENDED = Deno.env.get("VERBOSE") === "true";

const logIntermediateResults = (funcRes: unknown) => {
  if (SHOULD_LOG_EXTENDED) {
    console.log(funcRes);
  }
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.time("TOTAL");
  console.time("READ_INPUT_TIMING");
  const dayInput = await createDayInput();
  console.timeEnd("READ_INPUT_TIMING");
  logIntermediateResults(generateDayOneResult(dayInput.day01));
  logIntermediateResults(generateDayTwoResult(dayInput.day02));
  logIntermediateResults(generateDayThreeResult(dayInput.day03));
  logIntermediateResults(generateDayFourResult(dayInput.day04));
  logIntermediateResults(
    generateDayFiveResult(staticCrates(), dayInput.day05),
  );
  logIntermediateResults(
    generateDaySixResult(dayInput.day06),
  );
  logIntermediateResults(
    generateDaySevenResult(dayInput.day07),
  );
  console.timeEnd("TOTAL");
}
