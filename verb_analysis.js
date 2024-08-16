import {readLines} from "./loader_sync.js";
import {letters} from "./letters.js";

const lines = readLines("all-morphgnt.txt");

const makeLetterLookup = () => {
    const letterLookup = {}
    for (const letter of letters) {
        letterLookup[letter.letter] = letter.betaLetter;
    }
    return letterLookup;
}

const letterLookup = makeLetterLookup();

const makeBetaWord = word => {
    let betaWord = "";
    for (let i = 0; i < word.length; i++) {
        betaWord = betaWord + letterLookup[word[i]];
    }
    return betaWord;
}
const makeVerbTable = () => {
    const verbTable = {}

    for (const line of lines) {
        const parts = line.split(" ");
        if (parts[1] !== "V-") continue;

        const location = parts[0];
        const parsing = parts[2];
        const word = makeBetaWord(parts[4]);
        const lemma = makeBetaWord(parts[6]);

        let verbInfo = verbTable[lemma];
        if (!verbInfo) {
            verbInfo = {}
            verbTable[lemma] = verbInfo;
        }

        let verbForm = verbInfo[parsing];

        if (!verbForm) {
            verbForm = {}
            verbInfo[parsing] = verbForm;
        }

        let wordInfo = verbForm[word];
        if (!wordInfo) {
            wordInfo = [location];
            verbForm[word] = wordInfo;
        } else {
            wordInfo.push(location);
        }
    }
    return verbTable;
}

const printDuplicates = verbTable => {
    for (const [lemma, parsings] of Object.entries(verbTable)) {
        for (const [parsing, words] of Object.entries(parsings)) {
            if (Object.keys(words).length > 1) {
                console.log("Different words for parsing", parsing, "of", lemma, words);
            }
        }
    }
}
const verbTable = makeVerbTable();
//console.log(JSON.stringify(verbTable, null, 2));
printDuplicates(verbTable);