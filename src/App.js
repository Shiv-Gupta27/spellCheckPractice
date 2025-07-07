import React from "react";
import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputText = (e)=>{
    let text = e.target.value
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word)=>{
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    const firstCorrection = correctedWords.find((word, index)=> word != words[index]);

    setSuggestedText(firstCorrection || "")

  }

  return(
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea rows={8} cols={50} placeholder="Enter text..." value={inputText} onChange={(e)=>{handleInputText(e)}} />
      {suggestedText?<p>Did you mean: <strong>{suggestedText}</strong></p>:<></>}
    </div>
  )  
}

export default App;
