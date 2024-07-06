import {makeEnum} from "./enums.js";

export const LetterType = makeEnum({
    CONSONANT: 0,
    VOWEL: 1,
});

export const AccentType = makeEnum({
    NONE: 0,
    GRAVE: 1,
    ACUTE: 2,
    CIRCUMFLEX: 3,
});

export const Breathing = makeEnum({
    NONE: 0,
    SMOOTH: 1,
    ROUGH: 2,
});

export class Letter {
    constructor(letter, isUpper, betaLetter, type,
                accentType = AccentType.NONE,
                breathing = Breathing.NONE, iota= false, diaeresis= false) {
        this.letter = letter;
        this.isUpper = isUpper;
        this.betaLetter = betaLetter;
        this.type = type;
        this.accentType = accentType;
        this.breathing = breathing;
        this.iota = iota;
        this.diaeresis = diaeresis;
    }
}

export const endSigma = "ς";
export const apostrophe= "’";

export const letters = [
    new Letter("Β", true, "B", LetterType.CONSONANT),
    new Letter("ί", false, "I", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("β", false, "B", LetterType.CONSONANT),
    new Letter("λ", false, "L", LetterType.CONSONANT),
    new Letter("ο", false, "O", LetterType.VOWEL),
    new Letter("ς", false, "S", LetterType.CONSONANT),
    new Letter("γ", false, "G", LetterType.CONSONANT),
    new Letter("ε", false, "E", LetterType.VOWEL),
    new Letter("ν", false, "N", LetterType.CONSONANT),
    new Letter("έ", false, "E", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("σ", false, "S", LetterType.CONSONANT),
    new Letter("ω", false, "W", LetterType.VOWEL),
    new Letter("ι", false, "I", LetterType.VOWEL),
    new Letter("Ἰ", true, "I", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("η", false, "H", LetterType.VOWEL),
    new Letter("ῦ", false, "U", LetterType.VOWEL, AccentType.CIRCUMFLEX),
    new Letter("χ", false, "X", LetterType.CONSONANT),
    new Letter("ρ", false, "R", LetterType.CONSONANT),
    new Letter("τ", false, "T", LetterType.CONSONANT),
    new Letter("Χ", false, "X", LetterType.CONSONANT),
    new Letter("ό", false, "O", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("υ", false, "U", LetterType.VOWEL),
    new Letter("ἱ", false, "I", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Δ", true, "D", LetterType.CONSONANT),
    new Letter("α", false, "A", LetterType.VOWEL),
    new Letter("ὶ", false, "I", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("δ", false, "D", LetterType.CONSONANT),
    new Letter("Ἀ", true, "A", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ά", false, "A", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("μ", false, "M", LetterType.CONSONANT),
    new Letter("ὰ", false, "A", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ἐ", false, "E", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ὸ", false, "O", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ὁ", false, "O", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("κ", false, "K", LetterType.CONSONANT),
    new Letter("ὲ", false, "E", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ώ", false, "W", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("ὼ", false, "W", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ύ", false, "U", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("ὺ", false, "U", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ἀ", false, "A", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("φ", false, "F", LetterType.CONSONANT),
    new Letter("ὐ", false, "U", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("Φ", true, "F", LetterType.CONSONANT),
    new Letter("Ζ", true, "Z", LetterType.CONSONANT),
    new Letter("ῆ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX),
    new Letter("Θ", true, "Q", LetterType.CONSONANT),
    new Letter("Ἑ", true, "E", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ν", true, "N", LetterType.CONSONANT),
    new Letter("Σ", true, "S", LetterType.CONSONANT),
    new Letter("Ῥ", true, "R", LetterType.CONSONANT, AccentType.NONE, Breathing.ROUGH),
    new Letter("ὴ", false, "H", LetterType.VOWEL, AccentType.GRAVE),
    new Letter("ή", false, "H", LetterType.VOWEL, AccentType.ACUTE),
    new Letter("θ", false, "Q", LetterType.CONSONANT),
    new Letter("ῶ", false, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX),
    new Letter("Ο", true, "O", LetterType.VOWEL, AccentType.NONE),
    new Letter("Ὀ", true, "O", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ζ", false, "Z", LetterType.CONSONANT),
    new Letter("Μ", true, "M", LetterType.CONSONANT),
    new Letter("π", false, "P", LetterType.CONSONANT),
    new Letter("Ἐ", true, "E", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ἄ", false, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ξ", false, "C", LetterType.CONSONANT),
    new Letter("ἧ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
    new Letter("ὅ", false, "O", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Π", true, "P", LetterType.CONSONANT),
    new Letter("ᾶ", false, "A", LetterType.VOWEL, AccentType.CIRCUMFLEX),
    new Letter("ὖ", false, "U", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("ἕ", false, "E", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Τ", true, "T", LetterType.CONSONANT),
    new Letter("ἡ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ὕ", false, "U", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ἦ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("ἰ", false, "I", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ῷ", false, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.NONE, true),
    new Letter("ἢ", false, "H", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("ἤ", false, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ῖ", false, "I", LetterType.VOWEL, AccentType.CIRCUMFLEX),
    new Letter("ὑ", false, "U", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ἔ", false, "E", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ἁ", false, "A", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ἅ", false, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ὢ", false, "W", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("ὤ", false, "W", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ᾳ", false, "A", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, true),
    new Letter("ὗ", false, "U", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
    new Letter("ὄ", false, "O", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ῇ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.NONE, true),
    new Letter("ῴ", false, "W", LetterType.VOWEL, AccentType.ACUTE, Breathing.NONE, true),
    new Letter("ἵ", false, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ῥ", false, "R", LetterType.CONSONANT, AccentType.NONE, Breathing.ROUGH),
    new Letter("ὡ", false, "W", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ἡ", true, "H", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ἱ", true, "I", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ἴ", false, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ἶ", false, "I", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Κ", true, "K", LetterType.CONSONANT),
    new Letter("ἠ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ψ", false, "Y", LetterType.CONSONANT),
    new Letter("ὃ", false, "O", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("Α", true, "A", LetterType.VOWEL, AccentType.NONE),
    new Letter("ἂ", false, "A", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("ὀ", false, "O", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ῳ", false, "W", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, true),
    new Letter("ῄ", false, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.NONE, true),
    new Letter("Γ", true, "G", LetterType.CONSONANT),
    new Letter("Ἠ", true, "H", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ΐ", false, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.NONE, false, true),
    new Letter("ἑ", false, "E", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ῃ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, true),
    new Letter("Ἄ", true, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ᾧ", false, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH, true),
    new Letter("Ε", true, "E", LetterType.VOWEL, AccentType.NONE),
    new Letter("Ὕ", true, "U", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ᾷ", false, "A", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.NONE, true),
    new Letter("ΰ", false, "U", LetterType.VOWEL, AccentType.ACUTE, Breathing.NONE, false, true),
    new Letter("Ὑ", true, "U", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ἓ", false, "E", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ἷ", false, "I", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
    new Letter("Ὃ", true, "O", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ὒ", false, "U", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("ὔ", false, "U", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ἥ", false, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Ἔ", true, "E", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("Ὅ", true, "O", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ὥ", false, "W", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("ᾖ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH, true),
    new Letter("ὧ", false, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
    new Letter("Ὁ", true, "O", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ᾠ", false, "W", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH, true),
    new Letter("ϋ", false, "U", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, false, true),
    new Letter("ἆ", false, "A", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Ἁ", true, "A", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ἤ", true, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ἣ", false, "H", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ἃ", false, "A", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ὦ", false, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Η", true, "H", LetterType.VOWEL),
    new Letter("ὠ", false, "W", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ϊ", false, "I", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, false, true),
    new Letter("ᾅ", false, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH, true),
    new Letter("ᾑ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH, true),
    new Letter("Ἢ", true, "H", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("Ὡ", true, "W", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ὦ", true, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Ἵ", true, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Ἕ", true, "E", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Λ", true, "L", LetterType.CONSONANT),
    new Letter("ῒ", false, "I", LetterType.VOWEL, AccentType.GRAVE, Breathing.NONE, false, true),
    new Letter("Ὄ", true, "O", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ῢ", false, "U", LetterType.VOWEL, AccentType.GRAVE, Breathing.NONE, false, true),
    new Letter("ὓ", false, "U", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("Ἅ", true, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Ὧ", true, "W", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
    new Letter("ᾔ", false, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH, true),
    new Letter("ᾗ", false, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH, true),
    new Letter("Ὥ", true, "W", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Ἥ", true, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.ROUGH),
    new Letter("Ἦ", true, "H", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("ᾐ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH, true),
    new Letter("Ἴ", true, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("Υ", true, "U", LetterType.VOWEL),
    new Letter("ἳ", false, "I", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ὂ", false, "O", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("Ρ", true, "R", LetterType.CONSONANT, AccentType.NONE, Breathing.NONE),
    new Letter("Ψ", true, "Y", LetterType.CONSONANT),
    new Letter("Ἓ", true, "E", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("Ἆ", true, "A", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Ἃ", true, "A", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("ᾴ", false, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.NONE, true),
    new Letter("Ξ", true, "C", LetterType.CONSONANT),
    new Letter("ᾄ", false, "A", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH, true),
    new Letter("Ὤ", true, "W", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("Ὗ", true, "U", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.ROUGH),
]

export const makeBetaMap = () => {
    const betaMap = {};
    for (const letter of letters) {
        if (!betaMap[letter.betaLetter]) {
            betaMap[letter.betaLetter] = [letter];
        } else {
            betaMap[letter.betaLetter].push(letter);
        }
    }
    return betaMap;
}

export const betaMap = makeBetaMap();

export const makeLetterMap = () => {
    const letterMap = {};
    for (const letter of letters) {
        const beta = betaMap[letter.betaLetter];
        if (!beta) {
            console.log("Error finding beta letter: "+letter.betaLetter);
            return null;
        }
        let found = false;
        for (const letterForm of beta) {
            if (!letterForm.isUpper && (letterForm.type === LetterType.CONSONANT ||
                (letterForm.accentType === AccentType.NONE &&
                    letterForm.breathing === Breathing.NONE &&
                    !letterForm.iota && !letterForm.diaeresis))) {
                letter.plain = letterForm.letter;
                found = true;
                break;
            }
        }

        if (!found) {
            console.log("Can't find plain letter form for ",letter);
            continue;
        }

        letterMap[letter] = letter;
        if (!letterMap[letter.plain]) {
            letterMap[letter.plain] = [letter];
        } else {
            letterMap[letter.plain].push(letter);
        }
    }
    return letterMap;
}

export const letterMap = makeLetterMap();
console.log(letterMap);
