import React, {useState} from "react";


export default function Script1(props) {
    const handleUpclick =()=>{
        console.log("was click");
        let newtext= text.toLocaleUpperCase();
        setText(newtext);
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
      <button className="btn btn-primary" onClick={handleUpclick}>Convert to upper case </button>
    </>
  );
}
