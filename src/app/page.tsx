"use client";

import { useState, ChangeEvent } from "react";
import { ThaiToEnglish } from "./data/ThToEng";
import { EnglishToThai } from "./data/EngToTh";

export default function Home() {
  const [texts, setTexts] = useState<{ input: string; edited: string }>({
    input: "",
    edited: ""
  })
  const [mode, setMode] = useState<string>("ThaiToEnglish")
  
  
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (mode == "ThaiToEnglish") {
      const newText = ThaiToEnglish(event.target.value);
      setTexts({...texts, input: newText, edited: newText})
    } else {
      const newText = EnglishToThai(event.target.value);
      setTexts({...texts, input: newText, edited: newText})
    }
  }
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    setMode(event.target.value);
    
  };
  
  console.log(mode);
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center font-bold text-5xl">Misspelled Texts Fix</h1>
      <div className="flex justify-center items-center mt-5">
      <select name="mode" id="" className="bg-blue-300 p-2 relative" onChange={handleSelect} style={{ borderRadius: "5px" }}>
        <option className="p-3" value="ThaiToEnglish" style={{borderRadius: "5px"}}>Thai to English</option>
        <option value="EnglishToThai">English to Thai</option>
      </select>
      </div>
      <div className="flex flex-col items-center my-5">
        <p className="font-bold mt-7">Put your text in {mode === "ThaiToEnglish" ? "Thai" : "English" }</p>
        <textarea
          className="w-[700px] my-3 px-3 py-2 "
          style={{ borderRadius: "10px" }}
          rows={4}
          onChange={handleInput}
        />
        <p className="font-bold mt-7">Your text in {mode === "ThaiToEnglish" ? "English" : "Thai" }</p>
        <textarea
          className="w-[700px] my-3 px-3 py-2"
          style={{ borderRadius: "10px" }}
          rows={4}
          value={texts.edited}
          readOnly
        />
      </div>
    </main>
  );
}
