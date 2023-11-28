"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
  const [texts, setTexts] = useState<{ input: string; edited: string }>({
    input: "",
    edited: ""
  })

  const ThToEngMap: Record<string, string> = {
    "ๆ": "q",
    "ไ": "w",
    "ำ": "e",
    "พ": "r",
    "ะ": "t",
    "ั": "y",
    "ี": "u",
    "ร": "i",
    "น": "o",
    "ย": "p",
    "บ": "[",
    "ล": "]",
    "ฃ": "a",
    "ฟ": "s",
    "ห": "d",
    "ก": "f",
    "ด": "g",
    "เ": "h",
    "้": "j",
    "่": "k",
    "า": "l",
    "ส": ";",
    "ว": "'",
    "ซ": "z",
    "ต": "x",
    "อ": "c",
    "ม": "v",
    "ศ": "b",
    "ื": "n",
    "ง": "m",
    "๐": "Q",
    "ฎ": "W",
    "ฑ": "E",
    "ธ": "R",
    "ํ": "T",
    "โ": "Y",
    "ฌ": "U",
    "็": "I",
    "ณ": "O",
    "ฯ": "P",
    "ฆ": "{",
    "ฏ": "}",
    "๓": "A",
    "ษ": "S",
    "ศ": "D",
    "ซ": "F",
    "๐": "G",
    "ฒ": "H",
    "ฬ": "J",
    "ฦ": "K",
    "ฅ": "L",
    "๑": ":",
    "๖": "\"",
    "๐": "Z",
    "ฤ": "X",
    "ฦ": "C",
    "ง": "V",
    "จ": "B",
    "ฎ": "N",
    "ฑ": "M",
  };

  const ThaiToEng = (text: string): string => 
    text.split("")
      .map((char) => ThToEngMap[char] || char)
      .join("");
  
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newText = ThaiToEng(event.target.value);
    setTexts({...texts, input: newText, edited: newText})
  }

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center font-bold text-5xl">Misspelled Texts Fix</h1>
      <div className="flex flex-col items-center my-5">
        <span className="font-bold mt-7">Put your text in Thai</span>
        <textarea
          className="w-[700px] my-3"
          style={{ borderRadius: "10px" }}
          rows={4}
          onChange={handleInput}
        />
        <span className="font-bold mt-7">Your text in English</span>
        <textarea
          className="w-[700px] my-3"
          style={{ borderRadius: "10px" }}
          rows={4}
          value={texts.edited}
        />
      </div>
    </main>
  );
}
