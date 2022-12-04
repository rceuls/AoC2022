export default {
  allow: [
    "read"
  ],
  scripts: {
    start: {
      cmd: "deno run main.ts",
      watch: true
    },
    tests: {
      cmd: "deno test --parallel *.spec.ts",
    },
    createDay: "touch day04.ts && touch day04.spec.ts && touch day04.input.txt"
  },
};