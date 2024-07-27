"use strict";

const { open } = require('node:fs/promises')

async function load_file_async(filename) {
    const file = await open(filename);

    let lines = [];
    for await (const line of file.readLines()) {
        lines.push(line);
    }
    return lines;
}

function load_file(filename) {
    load_file_async(filename).then(lines => lines);
}

function load_all() {
    return load_file("all-morphgnt.txt");
}

function all_chars(lines) {
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
