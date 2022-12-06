import { DayResponse } from "./shared.ts";

export const staticCrates = () => {
  return {
    1: "NRJTZBDF".split("").reverse(),
    2: "HJNSR".split("").reverse(),
    3: "QFZGJNRC".split("").reverse(),
    4: "QTRGNVF".split("").reverse(),
    5: "FQTL".split("").reverse(),
    6: "NGRBZWCQ".split("").reverse(),
    7: "MHNSLCF".split("").reverse(),
    8: "JTMQND".split("").reverse(),
    9: "SGP".split("").reverse(),
  };
};

export const generateDayResult: (
  cratesReadOnly: { [name: number]: string[] },
  input: string,
) => DayResponse<string> = (cratesReadOnly, input) => {
  console.time("DAY05_TIMING");
  const crates9000 = JSON.parse(JSON.stringify(cratesReadOnly));
  const crates9001 = JSON.parse(JSON.stringify(cratesReadOnly));
  for (const k of Object.keys(crates9001)) {
    crates9001[k] = crates9001[k].reverse();
  }

  const [_, commands] = input.split("\n\n");
  for (const cmd of commands.split("\n")) {
    const [amount, source, target] = cmd.split(" ").map((x) => +x).filter((x) =>
      !isNaN(x)
    );
    for (let i = 0; i < amount; i++) {
      const popped = crates9000[source].pop();
      if (popped) {
        crates9000[target].push(popped);
      }
    }

    const stackToMove = crates9001[source].slice(0, amount);
    crates9001[target] = [...stackToMove, ...crates9001[target]];
    crates9001[source] = crates9001[source].slice(amount);
  }
  const lastRow9000 = [];
  const lastRow9001 = [];

  for (const key of Object.keys(crates9000)) {
    lastRow9000.push(crates9000[+key].reverse()[0]);
    lastRow9001.push(crates9001[+key][0]);
  }
  const toReturn = {
    part1: lastRow9000.join(""),
    part2: lastRow9001.join(""),
  };
  console.timeEnd("DAY05_TIMING");
  return toReturn;
};
