import { DayResponse, splittedInput } from "./shared.ts";

type FileNode = {
  type: "F";
  size: number;
};

type DirectoryNode = {
  type: "D";
  size?: number;
  subs: { [name: string]: SystemNode };
  parent?: DirectoryNode;
};

type SystemNode = DirectoryNode | FileNode;

const calculateFileSize = (dir: DirectoryNode, allSizes: number[]) => {
  for (
    const subdir of Object.values(dir.subs).filter((x) => x.type === "D")
  ) {
    if (subdir.type === "D") {
      subdir.size = calculateFileSize(subdir, allSizes);
    }
  }
  const siz = Object.values(dir.subs).reduce(
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
      } as DirectoryNode;
    } else {
      const [size, name] = line.split(" ");
      currentNode.subs[name] = {
        type: "F",
        size: +size,
      } as FileNode;
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
  // console.log(Deno.inspect(fileSystem, { depth: 100 }));
  console.timeEnd("DAY07_TIMING");
  return {
    part1: part1,
    part2: part2[0],
  };
};
