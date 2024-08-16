import {letters} from "./letters.js";

const betaMap = { fromBeta: {}, toBeta: {}};

for (let letter of letters) {
    betaMap.fromBeta[letter.accentedBeta()] = letter.letter;
    betaMap.toBeta[letter.letter] = letter.accentedBeta();
}

console.log(JSON.stringify(betaMap));