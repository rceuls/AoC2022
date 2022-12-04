import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayFourResult } from "./day04.ts";

const TEST_INPUT = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

Deno.test("Day 04 Part 01 + 02", () => {
  const calculated = generateDayFourResult(TEST_INPUT);
  assertEquals(calculated.part1, 2);
  assertEquals(calculated.part2, 4);
});
