"use strict";

export const makeEnum = values => {
    let maxIndex = Math.max(...Object.values(values));
    let enums = new Array(maxIndex+1);
    for (let [key, value] of Object.entries(values)) {
        enums[value] = key;
        enums[key] = value;
    }

    return enums;
}

export const AccentType = makeEnum({
    NONE: 0,
    GRAVE: 1,
    ACUTE: 2,
    CIRCUMFLEX: 3,
});