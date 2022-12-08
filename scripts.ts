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
    "start:debug": {
      cmd: "deno run --inspect-brk main.ts",
      env: {
        "VERBOSE": true,
      },
    },
    tests: {
      cmd: "deno test --parallel *.spec.ts",
    },
  },
};
