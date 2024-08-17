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

const prefixes = {}

const lookForPrefix = (aaiform, lemma) => {
    const shortest = Math.min(aaiform.length, lemma.length);

    if (shortest < 3) return;

    for (let i=0; i < shortest-2; i++) {
        if (aaiform[i] !== lemma[i]) {
            if (i < 2) return;
            if (!"AEIOUHZ".includes(aaiform[i])) {
                return;
            }
            const pref = lemma.substring(0, i);
            prefixes[pref] = pref;
            return;
        }
    }
}

const contractions = word => {
    return [word, []];
}

const computeConjugation = (verb, lemma, parsing) => {
    const miVerb = lemma.endsWith("MI");
    const lemmaRoot = lemma.substring(0, lemma.length-2);
    let changes = [];
    if (!miVerb) {
        if (parsing[1] === "P" && !miVerb) {
            if (parsing[2] === "A") {
                if (parsing[3] === "I") {
                    if (parsing[0] === "1") {
                        if (parsing[5] === "S") {
                            let conjugated = lemmaRoot + "W";
                            changes.push(lemmaRoot + " + W");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        } else if (parsing[5] === "P") {
                            let conjugated = lemmaRoot + "OMEN";
                            changes.push(lemmaRoot + " + O + MEN");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        }
                    } else if (parsing[0] === "2") {
                        if (parsing[5] === "S") {
                            let conjugated = lemmaRoot + "EES";
                            changes.push(lemmaRoot + " + E + ES");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        } else if (parsing[5] === "P") {
                            let conjugated = lemmaRoot + "ETE";
                            changes.push(lemmaRoot + " + E + TE");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        }
                    } else if (parsing[0] === "3") {
                        if (parsing[5] === "S") {
                            let conjugated = lemmaRoot + "EI";
                            changes.push(lemmaRoot + " + E + I");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        } else if (parsing[5] === "P") {
                            let conjugated = lemmaRoot + "ONSI";
                            changes.push(lemmaRoot + " + O + NSI");
                            changes = changes + contractions(conjugated);
                            return [conjugated, changes];
                        }
                    }
                }
            }
        }
    }
    return ["", []]
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

        if (parsing.substring(1, 4) === "AAI") {
            lookForPrefix(word, lemma);
        }

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
//printDuplicates(verbTable);
for (const pref of Object.keys(prefixes)) {
    console.log(pref);
}
