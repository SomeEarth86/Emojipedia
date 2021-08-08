import "./styles.css";
import React, { useState } from "react";

var emojiDatabase = {
  "🇧🇩": "Bangladesh",
  "🇧🇹": "Bhutan",
  "🇨🇳": "China",
  "🇲🇲": "Myanmar/Burma",
  "🇳🇵": "Nepal",
  "🇱🇰": "Sri Lanka",
  "🇵🇰": "Pakistan"
};

// console.log(Object.keys(emojiDatabase)); Converting Object to array item

var emojiArray = Object.keys(emojiDatabase);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDatabase[userInput];

    if (meaning === undefined) {
      meaning = "Error/ not a neighbour country ";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Neighbours of India</h1>

      <input onChange={emojiHandler} />

      <h2>
        {" "}
        <div style={{ fontWeight: "bolder" }}> {meaning} </div>{" "}
      </h2>

      <h4>
        {" "}
        Emojis we know <small>(click on flags)</small>
      </h4>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
