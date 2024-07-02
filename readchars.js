const loader_sync = require("./loader_sync.js");

const ll = loader_sync.read_lines("all-morphgnt.txt");
const chars = loader_sync.all_chars(ll);

let line = "";
for (const char of chars) {
    line = line + char;
}
console.log(line);