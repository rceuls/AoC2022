export default {
  allow: [
    "read",
    "env",
    "write",
  ],
  scripts: {
    generate: {
      cmd: "deno run createDay.ts --day",
    },
    start: {
      cmd: "deno run main.ts",
    },
    "start:verbose": {
      cmd: "deno run main.ts",
      env: {
        "VERBOSE": true,
      },
    },
    tests: {
      cmd: "deno test --parallel *.spec.ts",
    },
    createDay: "touch day04.ts && touch day04.spec.ts && touch day04.input.txt",
  },
};
