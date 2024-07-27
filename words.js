import {letters, letterMap, letterAccentMap, betaMap, LetterType, Breathing, AccentType, apostrophe, endSigma} from "./letters.js";
import {makeEnum} from "./enums.js";

export const PartOfSpeech = makeEnum({
    Adjective: "A",
    Conjunction: "C",
    Adverb: "D",
    Interjection: "I",
    Noun: "N",
    Preposition: "P",
    DefiniteArticle: "RA",
    DemonstrativePronoun: "RD",
    IndefinitePronoun: "RI",
    PersonalPronoun: "RP",
    RelativePronoun: "RR",
    Verb: "V",
    Particle: "X",
});

export const Tense = makeEnum({
    Present: "P",
    Imperfect: "I",
    Future: "F",
    Aorist: "A",
    Perfect: "X",
    Pluperfect: "Y",
});

export const Voice = makeEnum({
    Active: "A",
    Middle: "M",
    Passive: "P",
});

export const Mood = makeEnum({
    Indicative: "I",
    Imperative: "D",
    Subjunctive: "S",
    Optative: "O",
    Infinitive: "N",
    Participle: "P",
});

export const Case = makeEnum({
    Nominative: "N",
    Genitive: "G",
    Dative: "D",
    Accusative: "A",
});

export const CaseNumber = makeEnum({
    Singular: "S",
    Plural: "P",
});

export const Gender = makeEnum({
    Masculine: "M",
    Feminine: "F",
    Neuter: "N",
});

export const Degree = makeEnum({
    Comparative: "C",
    Superlative: "S",
})

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
