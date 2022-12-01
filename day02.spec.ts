import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayOneResult } from "./day01.ts";

const TEST_INPUT = ``;

Deno.test("Day 02 Part 01 + 02", () => {
  const calculated = generateDayOneResult(TEST_INPUT);
  assertEquals(calculated.part1, 1);
  assertEquals(calculated.part2, 1);
});
