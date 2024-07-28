import {readLines} from "./loader_sync.js";
import {initializeWordData, wordsByLemma} from "./words.js";

const lines = readLines("all-morphgnt.txt");
initializeWordData(lines);
console.log(wordsByLemma);
