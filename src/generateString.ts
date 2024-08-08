import { CharSet, CharSetType } from './CharSet';

export function generateString(length: number, charSetOptions: CharSetType, additionalChars: string = ''): string {
    let charSet = '';

    const charSetMapping: Record<number, string> = {
        [CharSet.UpperCase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        [CharSet.LowerCase]: 'abcdefghijklmnopqrstuvwxyz',
        [CharSet.Numerical]: '0123456789',
        [CharSet.Symbols]: '!@#$%^&*()_+~|}{[]:;?><,./-='
    };

    for (const [key, value] of Object.entries(charSetMapping)) {
        const numericKey = Number(key);
        if (charSetOptions & numericKey) charSet += value;
    };

    charSet += additionalChars;

    let result = '';
    for (let i = 0; i < length; i++) {
        result += charSet[Math.floor(Math.random() * charSet.length)];
    };

    return result;
};