import { DayResponse, splittedInput } from "./shared.ts";

const FIRST_MAP = {
  "X": { "A": 1 + 3, "B": 1 + 0, "C": 1 + 6 },
  "Y": { "A": 2 + 6, "B": 2 + 3, "C": 2 + 0 },
  "Z": { "A": 3 + 0, "B": 3 + 6, "C": 3 + 3 },
};

const SECOND_MAP = {
  "X": { "A": 3 + 0, "B": 1 + 0, "C": 2 + 0 },
  "Y": { "A": 1 + 3, "B": 2 + 3, "C": 3 + 3 },
  "Z": { "A": 2 + 6, "B": 3 + 6, "C": 1 + 6 },
};

type FirstColumn = "A" | "B" | "C";
type SecondColumn = "X" | "Y" | "Z";

const splitRound = (input: string) => {
  const splitted = input.split(" ");
  const first = splitted[0] as FirstColumn;
  const last = splitted[1] as SecondColumn;
  const toReturn = {
    first,
    last,
    calculateScore: FIRST_MAP[last][first],
    calculateWinState: SECOND_MAP[last][first],
  };
  return toReturn;
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY02_TIMING");
  const splitted = splittedInput(input).map(splitRound);
  const toReturn = {
    part1: splitted.reduce((x, y) => x + y.calculateScore, 0),
    part2: splitted.reduce((x, y) => x + y.calculateWinState, 0),
  };
  console.timeEnd("DAY02_TIMING");
  return toReturn;
};
