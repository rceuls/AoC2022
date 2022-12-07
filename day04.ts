import { DayResponse, splittedInput } from "./shared.ts";

type PairRange = { start: number; end: number };

const fullyContains: (first: PairRange, second: PairRange) => boolean = (
  first,
  second,
) => (first.start >= second.start && first.end <= second.end);

const overlaps: (first: PairRange, second: PairRange) => boolean = (
  first,
  second,
) =>
  (first.start <= second.start && first.end >= second.start) ||
  (first.start <= second.end && first.end >= second.end);

const toPair: (input: string) => PairRange = (input) => {
  const [start, end] = input.split("-").map((x) => +x);
  return { start, end };
};

const rangeOverlaps = (input: string) => {
  const [first, last] = input.split(",").map(toPair);
  const fullyContained = fullyContains(first, last) ||
    fullyContains(last, first);
  return {
    fullyContains: fullyContained,
    overlaps: fullyContained || overlaps(first, last),
  };
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY04.1+2");
  const splitted = splittedInput(input).map(rangeOverlaps);
  const toReturn = {
    part1: splitted.filter((x) => x.fullyContains).length,
    part2: splitted.filter((x) => x.overlaps).length,
  };
  console.timeEnd("DAY04.1+2");
  return toReturn;
};
