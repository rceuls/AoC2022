import { DayResponse } from "./shared.ts";

const isMatchingWindow = (window: string[]) =>
  window.length === window.filter((c, i) => window.indexOf(c) === i).length;

const determineMarker = (input: string[], windowSize: number) => {
  let startIndex = 0;
  while (!isMatchingWindow(input.slice(startIndex, startIndex + windowSize))) {
    startIndex += 1;
  }
  return startIndex + windowSize;
};

export const generateDaySixResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY06_TIMING");
  const asArray = Array.from(input);
  const part1 = determineMarker(asArray, 4);
  const part2 = determineMarker(asArray, 14);
  console.timeEnd("DAY06_TIMING");
  return {
    part1,
    part2,
  };
};
