"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [editedText, setEditedText] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const newText = EngToThai(event.target.value);
    setInputText(newText);
    setEditedText(inputText);
  }
  function EngToThai(text: string): string {
    return "fixed" + text;
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
          value={editedText}
        />
      </div>
    </main>
  );
}
