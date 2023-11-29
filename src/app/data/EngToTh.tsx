import { EngToThaiMap } from "./EngToThaiMap";

export const EnglishToThai = (text: string) =>
   text.split("")
      .map((char) => EngToThaiMap[char] || char)
      .join("");