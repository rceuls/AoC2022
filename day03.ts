import { DayResponse, splittedInput } from "./shared.ts";

const lookup: { [name: string]: number } = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26,
  "A": 27,
  "B": 28,
  "C": 29,
  "D": 30,
  "E": 31,
  "F": 32,
  "G": 33,
  "H": 34,
  "I": 35,
  "J": 36,
  "K": 37,
  "L": 38,
  "M": 39,
  "N": 40,
  "O": 41,
  "P": 42,
  "Q": 43,
  "R": 44,
  "S": 45,
  "T": 46,
  "U": 47,
  "V": 48,
  "W": 49,
  "X": 50,
  "Y": 51,
  "Z": 52,
};

const splitRound = (input: string) => {
  const part01 = input.substring(0, input.length / 2);
  const part02 = input.substring(input.length / 2);
  for (let i = 0; i < part01.length; i++) {
    for (let j = 0; j < part01.length; j++) {
      if (part01[i] === part02[j]) {
        return lookup[part01[i]];
      }
    }
  }
  return 0;
};
const calculateBadge = (input: string[]) => {
  const data = input.map((x) => ({ len: x.length, data: x })).sort((a, b) =>
    a.len - b.len
  );
  const shortest = data[0];
  const theOthers = [data[1].data, data[2].data];

  for (let i = 0; i < shortest.len; i++) {
    const target = shortest.data[i];
    if (theOthers.every((s) => s.includes(target))) {
      return lookup[target];
    }
  }
  return 0;
};

const assembleRounds = (input: string[]) => {
  const listOfLists = [];
  let grouped = [];
  let counter = 1;
  for (let i = 0; i < input.length; i++) {
    if (counter % 3 === 0) {
      grouped.push(input[i]);
      listOfLists.push([...grouped]);
      grouped = [];
      counter = 1;
    } else {
      grouped.push(input[i]);
      counter += 1;
    }
  }
  return listOfLists;
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY03.1+2");
  const splittedPart1 = splittedInput(input).map(splitRound);
  const splittedPart2 = assembleRounds(splittedInput(input)).map(
    calculateBadge,
  );
  const toReturn = {
    part1: splittedPart1.reduce((x, y) => x + y, 0),
    part2: splittedPart2.reduce((x, y) => x + y, 0),
  };
  console.timeEnd("DAY03.1+2");
  return toReturn;
};
