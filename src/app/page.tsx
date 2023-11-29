"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
  const [texts, setTexts] = useState<{ input: string; edited: string }>({
    input: "",
    edited: ""
  })

  const ThToEngMap: Record<string, string> = {
    "ๅ": "1",
    "/": "2",
    "-": "3",
    "ภ": "4",
    "ถ": "5",
    "ุ": "6",
    "ึ": "7",
    "ค": "8",
    "ต": "9",
    "จ": "0",
    "ข": "-",
    "ช": "=",
    "+": "!",
    "๑": "@",
    "๒": "#",
    "๓": "$",
    "๔": "%",
    "ู": "^",
    "฿": "&",
    "๕": "*",
    "๖": "(",
    "๗": ")",
    "๘": "_",
    "๙": "+",
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
    "ฃ": "\\",
    "๐": "Q",
    "\"": "W",
    "ฎ": "E",
    "ฑ": "R",
    "ธ": "T",
    "ํ": "Y",
    "๊": "U",
    "ณ": "I",
    "ฯ": "O",
    "ญ": "P",
    "ฐ": "{",
    ",": "}",
    "ฅ": "|",
    "ฟ": "a",
    "ห": "s",
    "ก": "d",
    "ด": "f",
    "เ": "g",
    "้": "h",
    "่": "j",
    "า": "k",
    "ส": "l",
    "ว": ";",
    "ง": "'",
    "ฤ": "A",
    "ฆ": "S",
    "ฏ": "D",
    "โ": "F",
    "ฌ": "G",
    "็": "H",
    "๋": "J",
    "ษ": "K",
    "ศ": "L",
    "ซ": ":",
    ".": "\"",
    "ผ": "z",
    "ป": "x",
    "แ": "c",
    "อ": "v",
    "ิ": "b",
    "ื": "n",
    "ท": "m",
    "ม": ",",
    "ใ": ".",
    "ฝ": "/",
    "(": "Z",
    ")": "X",
    "ฉ": "C",
    "ฮ": "V",
    "ฺ": "B",
    "์": "N",
    "?": "M",
    "ฒ": "<",
    "ฬ": ">",
    "ฦ": "?",
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
