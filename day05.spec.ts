import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayResult } from "./day05.ts";

const TEST_INPUT = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

Deno.test("Day 04 Part 01 + 02", () => {
  const calculated = generateDayResult({
    1: "NZ".split("").reverse(),
    2: "DCM".split("").reverse(),
    3: ["P"],
  }, TEST_INPUT);
  assertEquals(calculated.part1, "CMZ");
  assertEquals(calculated.part2, "MCD");
});
