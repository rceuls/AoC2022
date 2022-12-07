import { generateDayResult } from "./day07.ts";
import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

const TEST_INPUT = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

Deno.test("Day07 Part 01 + 02", () => {
  const calculated = generateDayResult(TEST_INPUT);
  assertEquals(calculated.part1, 95437);
  assertEquals(calculated.part2, 24933642);
});
