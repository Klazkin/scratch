"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n: number, grid: string[]): string[] {}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const r: number = parseInt(firstMultipleInput[0], 10);

  const c: number = parseInt(firstMultipleInput[1], 10);

  const n: number = parseInt(firstMultipleInput[2], 10);

  let grid: string[] = [];

  for (let i: number = 0; i < r; i++) {
    const gridItem: string = readLine();
    grid.push(gridItem);
  }

  const result: string[] = bomberMan(n, grid);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
