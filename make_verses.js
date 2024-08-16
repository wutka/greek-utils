import {readLines} from "./loader_sync.js";

const lines = readLines("all-morphgnt.txt");
const verses = [];

for (const line of lines) {
    const parts = line.split(" ");
    const bookNum = parseInt(parts[0].substr(0, 2));
    const chapterNum = parseInt(parts[0].substr(2, 2));
    const verseNum = parseInt(parts[0].substr(4));

    while (bookNum > verses.length) {
        verses.push([]);
    }
    const currBook = verses[bookNum-1];
    while (chapterNum > currBook.length) {
        currBook.push([]);
    }
    const currChapter = currBook[chapterNum-1];
    while (verseNum > currChapter.length) {
        currChapter.push([]);
    }
    const currVerse = currChapter[verseNum-1];

    const word = [ bookNum, chapterNum, verseNum,
        parts[1], parts[2],
        parts[3], parts[4], parts[5],
        parts[6]
    ];
    currVerse.push(word);
}

console.log(JSON.stringify(verses));