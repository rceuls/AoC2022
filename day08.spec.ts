import { generateDayResult } from "./day08.ts";
import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

const TEST_INPUT = `30373
25512
65332
33549
35390`;

Deno.test("Day08 Part 01 + 02", () => {
  const calculated = generateDayResult(TEST_INPUT);
  assertEquals(calculated.part1, 21);
  assertEquals(calculated.part2, 8);
});
