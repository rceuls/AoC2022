import { DayResponse, splittedInput } from "./shared.ts";

const carriedCalories = (input: string) => {
  const cal = input.split("\n\n").map((e) =>
    splittedInput(e)
      .map((c) => +c)
      .reduce((a, b) => a + b, 0)
  );
  cal.sort((x, y) => y - x);
  return cal;
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY01_TIMING");
  const elves = carriedCalories(input);
  const toReturn = {
    part1: elves[0],
    part2: elves.slice(0, 3).reduce((x, y) => x + y),
  };
  console.timeEnd("DAY01_TIMING");
  return toReturn;
};
