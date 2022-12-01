import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { calculateTotalCalories } from "./day01.ts";

const TEST_INPUT = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

Deno.test("Day 01 Part 01", () => {
  const calculated = calculateTotalCalories(TEST_INPUT);
  assertEquals(calculated.part1, 24000);
  assertEquals(calculated.part2, 45000);
});
