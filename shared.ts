export type DayResponse<T> = {
  part1: T;
  part2: T;
};

export const readAsText: (path: string) => Promise<string> = (path) =>
  Deno.readTextFile(path);
