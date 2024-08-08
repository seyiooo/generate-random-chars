export const CharSet = {
    UpperCase: 1,
    LowerCase: 2,
    Numerical: 4,
    Symbols: 8
} as const;

export type CharSetType = typeof CharSet[keyof typeof CharSet];