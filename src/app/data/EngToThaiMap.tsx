import { ThToEngMap } from "./ThToEngMap";

export const EngToThaiMap: Record<string, string> = {}
for (const [thai, eng] of Object.entries(ThToEngMap)) {
   EngToThaiMap[eng] = thai   
}