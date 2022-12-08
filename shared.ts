export type DayResponse<T> = {
  part1: T;
  part2: T;
};

export const readAsText: (path: string) => Promise<string> = (path) =>
  Deno.readTextFile(path);

export const splittedInput = (input: string) => input.split("\n");

export function transpose<T>(matrix: T[][]) {
  const rows = matrix.length, cols = matrix[0].length;
  const grid: T[][] = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}
