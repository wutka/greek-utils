enum LetterType {
    CONSONANT = 0,
    VOWEL = 1,
}

enum AccentType {
    NONE = 0,
    GRAVE = 1,
    ACUTE = 2,
    CIRCUMFLEX = 3,
}

enum Breathing {
    NONE = 0,
    SMOOTH = 1,
    ROUGH = 2,
}

class Letter {
    letter: string;
    isUpper : boolean;
    betaLetter : string;
    type : LetterType;
    accentType : AccentType;
    breathing: Breathing;
    iota: boolean;
    diaresis: boolean;

    constructor(letter: string, isUpper: boolean, betaLetter : string, type : LetterType,
                accentType : AccentType = AccentType.NONE,
                breathing : Breathing = Breathing.NONE, iota: boolean = false, diaresis: boolean = false) {
        this.letter = letter;
        this.isUpper = isUpper;
        this.betaLetter = betaLetter;
        this.type = type;
        this.accentType = accentType;
        this.breathing = breathing;
        this.iota = iota;
        this.diaresis = diaresis;
    }
}

const endSigma : string = "ς";
const apostrophe: string = "’";

const letters = [
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
    new Letter("ω", false, "W", LetterType.VOWEL, AccentType.ACUTE),
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
    new Letter("ύ", false, "U", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
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
    new Letter("Ο", false, "O", LetterType.VOWEL, AccentType.NONE),
    new Letter("Ὀ", false, "O", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
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
    new Letter("ἢ", false, "H", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
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
    new Letter("Ἡ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("Ἱ", false, "I", LetterType.VOWEL, AccentType.NONE, Breathing.ROUGH),
    new Letter("ἴ", false, "I", LetterType.VOWEL, AccentType.ACUTE, Breathing.SMOOTH),
    new Letter("ἶ", false, "I", LetterType.VOWEL, AccentType.CIRCUMFLEX, Breathing.SMOOTH),
    new Letter("Κ", true, "K", LetterType.CONSONANT),
    new Letter("ἠ", false, "H", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ψ", true, "Y", LetterType.CONSONANT),
    new Letter("ὃ", false, "O", LetterType.VOWEL, AccentType.GRAVE, Breathing.ROUGH),
    new Letter("Α", true, "A", LetterType.VOWEL, AccentType.NONE),
    new Letter("ἂ", false, "A", LetterType.VOWEL, AccentType.GRAVE, Breathing.SMOOTH),
    new Letter("ὀ", false, "O", LetterType.VOWEL, AccentType.NONE, Breathing.SMOOTH),
    new Letter("ῳ", false, "W", LetterType.VOWEL, AccentType.NONE, Breathing.NONE, true),

]