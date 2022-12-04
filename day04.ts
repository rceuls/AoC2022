import { DayResponse, splittedInput } from "./shared.ts";

type PairRange = [number, number];

const fullyContains: (first: PairRange, second: PairRange) =>  boolean = (first, second) =>
    (first[0] >= second[0] && first[1] <= second[1])

const overlaps: (first: PairRange, second: PairRange) => boolean = (first, second) => 
    (first[0] <= second[0] && first[1] >= second[0]) || (first[0] <= second[1] && first[1] >= second[1])

const toPair: (input: string) => PairRange = (input) => {
    const [first, last] = input.split("-").map(x => +x);
    return [first, last];
}

const rangeOverlaps = (input: string) => {
    const [first, last] = input.split(",").map(toPair);
    const fullyContained = fullyContains(first, last) || fullyContains(last, first);
    return {
        fullyContains: fullyContained,
        overlaps: fullyContained || overlaps(first, last)
    }
}

export const generateDayFourResult: (
    input: string,
  ) => DayResponse<number> = (input) => {
    console.time("DAY04_TIMING");
    const splitted = splittedInput(input).map(rangeOverlaps);
    const toReturn = {
      part1: splitted.filter(x => x.fullyContains).length,
      part2: splitted.filter(x => x.overlaps).length,
    };
    console.timeEnd("DAY04_TIMING");
    return toReturn;
  }
