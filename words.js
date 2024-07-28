import {letters, letterMap, letterAccentMap, betaMap, LetterType, Breathing, AccentType, apostrophe, endSigma} from "./letters.js";
import {makeEnum, makeReverseEnumLookup} from "./enums.js";

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
    for (let i=0; i < word.length; i++) {
        if (!letterMap[word[i]]) {
            console.log("Can't find letter ", word[i], " in ", word);
        }
    }
    return Array.from(word).map(letter => letterMap[letter]);
}

export class Word {
    constructor(word) {
        this.movableNu = false;
        this.optionalSigma = false;
        if (word.endsWith("(ν)")) {
            this.movableNu = true;
            word = word.substring(0, word.length-3);
        } else if (word.endsWith("(ς)")) {
            this.optionalSigma = true;
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

    toString() {
        return this.toGreek();
    }
}

export class ParsedWord {
    constructor(word, wordWithPunctuation, partOfSpeech, parsing, lemma) {
        this.word = new Word(word);
        this.wordWithPunctuation = wordWithPunctuation;
        this.partOfSpeech = PartOfSpeech[partOfSpeech.replace("-","")];
        this.parsing = parsing;
        this.lemma = null;
        this.bookChapterVerse = [];
    }
}

export class Lemma {
    constructor(lemma) {
        this.word = new Word(lemma);
        this.partsOfSpeech = {};
    }
}

export const lemmas = {}
export const verseLookup = {}

export const initializeWordData = lines => {
    for (const line of lines) {
        let [bookChapterVerse, partOfSpeech, parsing, punctuated, word, normalizedWord, lemma] =
            line.split(" ");
        const parsedWord = new ParsedWord(normalizedWord, punctuated, partOfSpeech, parsing, lemma);
        partOfSpeech = partOfSpeech.replace("-", "");

        let lemmaObj = lemmas[lemma];
        if (!lemmaObj) {
            lemmaObj = new Lemma(lemma);
            lemmas[lemma] = lemmaObj;
        }
        parsedWord.lemma = lemmaObj;

        let psMap = lemmaObj.partsOfSpeech[partOfSpeech];
        if (!psMap) {
            psMap = {};
            lemmaObj.partsOfSpeech[partOfSpeech] = psMap;
        }

        let parsingMap = psMap[parsing];
        if (!parsingMap) {
            parsingMap = {};
            psMap[parsing] = parsingMap;
        }

        const wordGreek = parsedWord.word.toGreek();
        let lemmaWord = parsingMap[wordGreek];
        if (!lemmaWord) {
            lemmaWord = parsedWord;
            parsingMap[wordGreek] = lemmaWord;
        }
        lemmaWord.bookChapterVerse.push(bookChapterVerse);

        const verseList = verseLookup[bookChapterVerse];
        if (!verseList) {
            verseLookup[bookChapterVerse] = [parsedWord];
        } else {
            verseList.push(parsedWord);
        }
    }
}