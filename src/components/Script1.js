import React, { useState } from "react";

export default function Script1(props) {
  const handleUpclick = () => {
    console.log("was click");
    let newtext = text.toLocaleUpperCase();
    setText(newtext);
  };
  const handleloclick = () => {
    console.log("was click");
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  };

  const handlerevclick = () => {
    console.log("was click");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };
  const handllnclick = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handelOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const reduceSpaces = () => {
    setText(text.replace(/\s+/g, " "));  
  };
  const replaceSpaces = () => {
    setText(text.replace(/\s+/g, "_")); 
  };
  const convertToBinary = () => {
    const binaryText = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2)) // Convert each character to binary
      .join(" ");
      setText(binaryText);
  };
  const convertToText = () => {
    const textOutput = text
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2))) // Convert binary to ASCII text
      .join("");
    setText(textOutput);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <div className="containier my-3">
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to lower case
        </button>

        <button className="btn btn-primary mx-2" onClick={handlerevclick}>
          Convert to reverse
        </button>
        <button className="btn btn-primary mx-2" onClick={handllnclick}>
          Convert to first uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={reduceSpaces}>
          remove space 
        </button>
        <button className="btn btn-primary mx-2 mb-3" onClick={replaceSpaces}>
        replace Spaces
        </button>
        <button className="btn btn-success mx-2 mb-1" onClick={convertToBinary}>
        convert To Binary
        </button>
        <button className="btn btn-success mx-2 " onClick={convertToText }>
        convert To Binary
        </button>
        <h1> Your text summary </h1>
        <div className="langth">
          total character {text.length} total word {text.split(" ").length}
        </div>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
