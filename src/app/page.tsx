"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [editedText, setEditedText] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const newText = EngToThai(event.target.value);
    setInputText(newText);
  }
  function EngToThai(text: string): string {
    return "fixed" + text;
  }
  function handleButton(): void {
    setEditedText(inputText);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Misspelled Texts Fix</h1>
      <input type="text" onChange={handleInput} />
      <button type="button" onClick={handleButton}>
        Edit
      </button>
      <span className="font-bold">Your text in English</span>
      <p>{editedText}</p>
    </main>
  );
}
