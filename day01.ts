import { DayResponse } from "./shared.ts";

const carriedCalories = (input: string) => {
  const cal = input.split("\n\n").map((e) =>
    e.split("\n")
      .map((c) => +c)
      .reduce((a, b) => a + b, 0)
  );
  cal.sort((x, y) => y - x);
  return cal;
};

export const generateDayOneResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("START_DAY01");
  const elves = carriedCalories(input);
  const toReturn = {
    part1: elves[0],
    part2: elves.slice(0, 3).reduce((x, y) => x + y),
  };
  console.timeEnd("START_DAY01");
  return toReturn;
};
