import fs from "fs";

export const readLines = (filename) => {
    const buff = fs.readFileSync(filename);

    let lines = [];
    let line_start = 0;
    for (let i=0; i < buff.length; i++) {
        if (buff[i] === 10) {
            if (i > line_start) {
                lines.push(buff.toString("utf8", line_start, i));
            } else {
                lines.push("");
            }
            line_start = i+1;
        }
    }
    if (line_start < buff.length) {
        lines.push(buff.toString("utf8", line_start, buff.length));
    }

    return lines;
}

export function allChars(lines) {
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