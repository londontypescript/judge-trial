// Stands in for the gate: fails when the file "broken" exists.
const { existsSync } = require("node:fs");
if (existsSync("broken")) {
  console.error("gate: failed");
  process.exit(1);
}
console.log("gate: passed");
