import { DayResponse, splittedInput } from "./shared.ts";

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  const heights = Array.from(
    splittedInput(input).map((x) => x.split("").map((x) => +x)),
  );

  const columns: { [name: number]: number[] } = {};
  const rowCount = heights.length;
  const columnCount = heights[0].length;

  const hitIndexes = new Set();
  console.time("DAY08.1");
  for (let row = 1; row < rowCount - 1; row++) {
    const relevantRow = heights[row];

    for (let column = 1; column < columnCount - 1; column++) {
      const value = relevantRow[column];
      const biggestToTheLeft = relevantRow.slice(column + 1).every((x) =>
        x < value
      );
      if (biggestToTheLeft) {
        hitIndexes.add([row, column]);
      } else {
        const biggestToTheRight = relevantRow.slice(0, column).every((x) =>
          x < value
        );
        if (biggestToTheRight) {
          hitIndexes.add([row, column]);
        } else {
          if (!(column in columns)) {
            const columnData = [];
            for (let i = 0; i < rowCount; i++) {
              columnData.push(heights[i][column]);
            }
            columns[column] = columnData;
          }
          const biggestToTheLeftColumn = columns[column].slice(row + 1).every((
            x,
          ) => x < value);
          if (biggestToTheLeftColumn) {
            hitIndexes.add([row, column]);
          } else {
            const biggestToTheRightColumn = columns[column].slice(0, row).every(
              (
                x,
              ) => x < value,
            );
            if (biggestToTheRightColumn) {
              hitIndexes.add([row, column]);
            }
          }
        }
      }
    }
  }

  const outside = (rowCount * 2) + ((columnCount - 2) * 2);
  const part1 = hitIndexes.size + outside;
  console.timeEnd("DAY08.1");

  console.time("DAY08.2");

  console.timeEnd("DAY08.2");

  return {
    part1: part1,
    part2: 0,
  };
};
