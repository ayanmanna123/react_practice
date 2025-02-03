import React, {useState} from "react";


export default function Script1(props) {
    const handleUpclick =()=>{
        console.log("was click");
        let newtext= text.toLocaleUpperCase();
        setText(newtext);
    }
    const handleloclick =()=>{
      console.log("was click");
      let newtext= text.toLocaleLowerCase();
      setText(newtext);
  }
  const handleboldclick =()=>{
    console.log("was click");
    setText(<span className="fw-bold">{text}</span>);
     
  } 
    const handlerevclick =()=>{
      console.log("was click");
      let newtext = "";
      for (let i = text.length - 1; i >= 0; i--) {
        newtext += text[i];
      }
      setText(newtext);
       
      }
      const handllnclick =()=>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
         
        }

    const handelOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
     
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
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upper case </button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lower case </button>
      <button className="btn btn-primary mx-2" onClick={handleboldclick}>Convert to bold case </button>
      <button className="btn btn-primary mx-2" onClick={handlerevclick}>Convert to rev case </button>
      <button className="btn btn-primary mx-2" onClick={handllnclick}>Convert to rev case </button>
      <h1> Your text summary </h1>
      <div className="langth">total character {text.length} total word {text.split(" ").length}</div>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>preview</h2>
      <p>{text}</p>

      </div>
    </>
  );
}
