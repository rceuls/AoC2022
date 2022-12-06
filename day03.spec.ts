import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayResult } from "./day03.ts";

const TEST_INPUT = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

Deno.test("Day 03 Part 01 + 02", () => {
  const calculated = generateDayResult(TEST_INPUT);
  assertEquals(calculated.part1, 157);
  assertEquals(calculated.part2, 70);
});
