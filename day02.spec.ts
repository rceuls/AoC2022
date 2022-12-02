import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayTwoResult } from "./day02.ts";

const TEST_INPUT = `A Y
B X
C Z`;

Deno.test("Day 02 Part 01 + 02", () => {
  const calculated = generateDayTwoResult(TEST_INPUT);
  assertEquals(calculated.part1, 15);
  assertEquals(calculated.part2, 12);
});
