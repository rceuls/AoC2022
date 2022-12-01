import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateDayOneResult } from "./day01.ts";
import { readAsText } from "./shared.ts";

const DAY_INPUT = {
  day01: await readAsText("./day01.input.txt"),
};

Deno.test("Day 01 Part 01 + Part 02", () => {
  const calculated = generateDayOneResult(DAY_INPUT.day01);
  assertEquals(calculated.part1, 72240);
  assertEquals(calculated.part2, 210957);
});
