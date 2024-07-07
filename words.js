
import {letters, letterMap, letterAccentMap, betaMap, LetterType, Breathing, AccentType, apostrophe, endSigma} from "./letters.js";

export const splitGreekWord = word => {
    return Array.from(word).map(letter => letterMap[letter]);
}

export class Word {
    constructor(word) {
        this.movableNu = false;
        if (word.endsWith("(ν)")) {
            this.movableNu = true;
            word = word.substring(0, word.length-3);
        }
        this.word = splitGreekWord(word);
    }

    toBeta(plain=true) {
        return this.word.map(letter => plain ? letter.betaLetter : letter.accentedBeta()).join("");
    }

    toGreek(plain=false) {
        let result = this.word.map(letter => plain ? letter.plain : letter.letter).join("");
        if (result.endsWith("σ")) {
            result = result.substring(0, result.length-1) + endSigma;
        }
        return result;
    }
}
