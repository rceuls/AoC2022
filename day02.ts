import { DayResponse } from "./shared.ts";

export const calculateTotalCalories: (
  input: string,
) => DayResponse<number> = (_input) => {
  console.time("START_DAY02");
  const toReturn = {
    part1: 1,
    part2: 1,
  };
  console.timeEnd("START_DAY02");
  return toReturn;
};
