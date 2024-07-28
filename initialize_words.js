import {readLines} from "./loader_sync.js";
import {initializeWordData, lemmas, verseLookup} from "./words.js";

const lines = readLines("all-morphgnt.txt");
initializeWordData(lines);
console.log(lemmas);
