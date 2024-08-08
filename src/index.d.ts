export const CharSet: {
    UpperCase: 1;
    LowerCase: 2;
    Numerical: 4;
    Symbols: 8;
  };
  
  export type CharSetType = typeof CharSet[keyof typeof CharSet];
  
  export function generateString(length: number, charSetOptions: CharSetType, additionalChars?: string): string;