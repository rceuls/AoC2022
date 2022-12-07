import { DayResponse, splittedInput } from "./shared.ts";

type DirectoryNode = {
  type: "D";
  size: number;
  subs: { [name: string]: DirectoryNode };
  parent?: DirectoryNode;
};

const calculateFileSize = (dir: DirectoryNode, allSizes: number[]) => {
  for (
    const subdir of Object.values(dir.subs)
  ) {
    subdir.size = calculateFileSize(subdir, allSizes);
  }
  const siz = dir.size + Object.values(dir.subs).reduce(
    (x, y) => x + (y.size || 0),
    0,
  );
  allSizes.push(siz);
  return siz;
};

export const generateDayResult: (
  input: string,
) => DayResponse<number> = (input) => {
  console.time("DAY07_TIMING");
  // first two are the root directory + list
  const fileSystem: DirectoryNode = {
    type: "D",
    subs: {},
    size: 0,
    parent: undefined,
  };
  let currentNode = fileSystem;
  const splitted = splittedInput(input).slice(2);
  for (const line of splitted) {
    if (line.startsWith("$")) {
      const [_, cmd, arg] = line.split(" ");
      if (cmd === "cd") {
        if (arg !== "..") {
          currentNode = currentNode.subs[arg] as DirectoryNode;
        } else {
          currentNode = currentNode.parent || currentNode;
        }
      }
    } else if (line.startsWith("dir")) {
      const name = line.substring(4);
      currentNode.subs[name] = {
        type: "D",
        subs: {},
        parent: currentNode,
        size: 0,
      } as DirectoryNode;
    } else {
      const [size] = line.split(" ");
      currentNode.size += +size;
    }
  }

  const sizes: number[] = [];
  fileSystem.size = calculateFileSize(fileSystem, sizes);
  const part1 = sizes.filter((x) => x < 100000).reduce((x, y) => x + y, 0);
  // LETS GET VERBOSICAL, BOSICAL
  const totalSpace = 70_000_000;
  const requiredSpace = 30_000_000;
  const rootSpace = fileSystem.size || 0;
  const freeWithoutDelete = totalSpace - rootSpace;
  const toFree = requiredSpace - freeWithoutDelete;
  const part2 = sizes.filter((x) => x > toFree);
  part2.sort((x, y) => x - y);
  console.timeEnd("DAY07_TIMING");
  return {
    part1: part1,
    part2: part2[0],
  };
};
