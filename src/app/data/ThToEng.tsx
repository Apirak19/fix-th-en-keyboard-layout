import { ThToEngMap } from "./ThToEngMap";

export const ThaiToEnglish = (text: string): string => 
    text.split("")
      .map((char) => ThToEngMap[char] || char)
      .join("");