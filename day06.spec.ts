import { generateDaySixResult } from "./day06.ts";
import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

const examples: { [name: string]: [number, number] } = {
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb": [7, 19],
  "bvwbjplbgvbhsrlpgdmjqwftvncz": [5, 23],
  "nppdvjthqldpwncqszvftbrmjlhg": [6, 23],
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg": [10, 29],
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw": [11, 26],
};

Deno.test("Day 06 Part 01 + 02", () => {
  for (const key of Object.keys(examples)) {
    const calculated = generateDaySixResult(key);
    assertEquals(calculated.part1, examples[key][0]);
    assertEquals(calculated.part2, examples[key][1]);
  }
});
