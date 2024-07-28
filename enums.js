"use strict";

export const makeEnum = values => {
    let isNumber = s => s >= '0' && s <= '9';
    let objectValues = Object.values(values);
    if (objectValues.length > 0 && !isNumber(objectValues[0])) {
        let enums = new Array(objectValues.length);
        let i=0;
        for (let [key, value]  of Object.entries(values)) {
            enums[key] = value;
            enums[value] = key;
            enums[i] = value;
        }
        return enums;
    } else {
        let maxIndex = Math.max(...Object.values(values));
        let enums = new Array(maxIndex+1);
        for (let [key, value] of Object.entries(values)) {
            enums[value] = key;
            enums[key] = value;
        }
        return enums;
    }
}

export const makeReverseEnumLookup = enumClass => {
    let enums = {};
    for (let [key, value] of Object.entries(enumClass)) {
        enums[value] = key;
    }
    return enums;
}

export const AccentType = makeEnum({
    NONE: 0,
    GRAVE: 1,
    ACUTE: 2,
    CIRCUMFLEX: 3,
});