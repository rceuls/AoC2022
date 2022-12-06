import { parse } from "https://deno.land/std@0.119.0/flags/mod.ts";

const codeFile = `import { DayResponse } from "./shared.ts";

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY99_TIMING");
  // Add code here
  console.timeEnd("DAY99_TIMING");
  return {
    part1: input.length,
    part2: input.length,
  };
};
`;

const testFile = `import { generateDayResult } from "./day99.ts";
import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

Deno.test("Day99 Part 01 + 02", () => {
  const calculated = generateDayResult("test");
  assertEquals(calculated.part1, 4);
  assertEquals(calculated.part2, 4);
});
`;

const flags = parse(Deno.args, {
  string: ["day"],
});
console.log("Day number", flags.day);

if (import.meta.main) {
  await Deno.writeTextFile(
    `./day${flags.day}.spec.ts`,
    testFile.replaceAll("99", flags.day),
  );

  await Deno.writeTextFile(
    `./day${flags.day}.ts`,
    codeFile.replaceAll("99", flags.day),
  );

  await Deno.writeTextFile(
    `./day${flags.day}.input.txt`,
    "",
  );
}
