import React, { useState } from "react";
import "./styles.css";

const emogieDict = {
  "😊": "smiling",
  "😳": "desbelief",
  "😔": "sad",
  "🥡": "take out box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",

  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face"
};

var knownEmogie = Object.keys(emogieDict);
export default function App() {
  const [text, setText] = useState("");

  function clickHandler(emoji) {
    // console.log(emoji);
    setText(emogieDict[emoji]);
  }

  function changeEventHandler(event) {
    console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emogieDict[userInput];
    if (meaning === undefined) {
      meaning = "No such emoji found";
    }

    setText(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji interpreter </h1>
      <input
        onChange={changeEventHandler}
        placeholder="Enter emoji here to know the meaning"
      ></input>
      <p>{text}</p>
      <span id="emojieDb">
        {knownEmogie.map((emoji) => {
          return (
            <span key={emoji} onClick={() => clickHandler(emoji)}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </span>
    </div>
  );
}
