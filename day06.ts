import { DayResponse } from "./shared.ts";

const isMatchingWindow = (window: string[]) =>
  window.every((c, i) => window.indexOf(c) === i);

const determineMarker = (input: string[], windowSize: number) => {
  let startIndex = 0;
  while (!isMatchingWindow(input.slice(startIndex, startIndex + windowSize))) {
    startIndex += 1;
  }
  return startIndex + windowSize;
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY06.1+2");
  const asArray = Array.from(input);
  console.time("DAY06.1");
  const part1 = determineMarker(asArray, 4);
  console.timeEnd("DAY06.1");
  console.time("DAY06.2");
  const part2 = determineMarker(asArray, 14);
  console.timeEnd("DAY06.2");
  console.timeEnd("DAY06.1+2");
  return {
    part1,
    part2,
  };
};
