"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateString = generateString;
const CharSet_1 = require("./CharSet");
function generateString(length, charSetOptions, additionalChars = '') {
    let charSet = '';
    const charSetMapping = {
        [CharSet_1.CharSet.UpperCase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        [CharSet_1.CharSet.LowerCase]: 'abcdefghijklmnopqrstuvwxyz',
        [CharSet_1.CharSet.Numerical]: '0123456789',
        [CharSet_1.CharSet.Symbols]: '!@#$%^&*()_+~|}{[]:;?><,./-='
    };
    for (const [key, value] of Object.entries(charSetMapping)) {
        const numericKey = Number(key);
        if (charSetOptions & numericKey)
            charSet += value;
    }
    ;
    charSet += additionalChars;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charSet[Math.floor(Math.random() * charSet.length)];
    }
    ;
    return result;
}
;
//# sourceMappingURL=generateString.js.map