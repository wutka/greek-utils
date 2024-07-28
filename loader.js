"use strict";

import { promises } from 'fs';

export const load_file_async = async filename => {
    try {
        console.log("Loading file ", filename);
        const file = await promises.open(filename, "r");
        console.log("Opened file: ", file);

        let lines = [];
        for await (const line of file.readLines()) {
            console.log("line: ", line);
            lines.push(line);
        }
        return lines;
    } catch (err) {
        console.error(err);
    }
}

export const load_file = filename => {
    let returnLines = null;
    load_file_async(filename).then(lines => returnLines = lines);
    console.log(returnLines);
    return returnLines;
}

export const load_all = () => {
    return load_file("all-morphgnt.txt");
}

export const all_chars = lines => {
    let chars = new Set();
    for (let line of lines) {
        let parts = line.split(" ");
        for (let part of parts.slice(4)) {
            for (let i = 0; i < part.length; i++) {
                chars.add(part.charAt(i));
            }
        }
    }
    return chars;
}
