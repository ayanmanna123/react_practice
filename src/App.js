import { useState } from "react";
import "./App.css";
import Navber from "./components/Navber";
import Script1 from "./components/Script1";
import UpperCaseConverter from "./components/UpperCaseConverter";
import Alert from "./components/Alert";
import  Dropdown from "./components/Dropdown";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const Showalert = (massage, type) => {
    setalert({
      msg: massage,
      type: type,
    });
    setTimeout(() =>{
     setalert(null);
    },2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      Showalert("dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      Showalert("light mode is enabled", "success");
    }
  };
  const greenMode = () => {
    document.body.style.backgroundColor = "#EBEBD3";
    document.body.style.color = "#F95738 ";
    document.querySelector("#navbar").style.backgroundColor = "#083D77";
    document.querySelector("#ExampleFormControlTextarea1").style.backgroundColor = "#eaeaad";
    document.querySelector("#dropdown1").style.backgroundColor = "pink";
    document.querySelector("#lowercliclbtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#reversebtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#firstuppercasebtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#clearbtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#copybtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#binary").style.backgroundColor = "#F4D35E";
    document.querySelector("#desimal").style.backgroundColor = "#F4D35E";
    document.querySelector("#Copybtn").style.backgroundColor = "#F4D35E";
    document.querySelector("#upclickbtn").style.backgroundColor = "#F4D35E";
    
  };
  const blueMode = () => {
    document.body.style.backgroundColor = "#C2F9BB";
    document.body.style.color = "#20063B";
    document.querySelector("#navbar").style.backgroundColor = "#9AD1D4";
    document.querySelector("#ExampleFormControlTextarea1").style.backgroundColor = "#eaeaad";
    document.querySelector("#dropdown1").style.backgroundColor = " 9AD1D4";
    document.querySelector("#lowercliclbtn").style.backgroundColor = "#62C370";
    document.querySelector("#reversebtn").style.backgroundColor = "#62C370";
    document.querySelector("#firstuppercasebtn").style.backgroundColor = "#62C370";
    document.querySelector("#clearbtn").style.backgroundColor = "#62C370";
    document.querySelector("#copybtn").style.backgroundColor = "#62C370";
    document.querySelector("#binary").style.backgroundColor = "#62C370";
    document.querySelector("#desimal").style.backgroundColor = "#62C370";
    document.querySelector("#Copybtn").style.backgroundColor = "#62C370";
    document.querySelector("#upclickbtn").style.backgroundColor = "#62C370";
  };
  const blackMode = () => {
    document.body.style.backgroundColor = "#538c9e";
    document.body.style.color = "white";
    document.querySelector("#navbar").style.backgroundColor = "#007EA7";
  };
  return (
    <>
      <Navber
        title="ayan"
        masage="new file"
        mode={mode}
        toggleMode={toggleMode}
        greenMode={greenMode}
        blueMode={blueMode}
        blackMode={blackMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <Script1
          heading="enter a text to analyze below"
          Showalert={Showalert}
        />
      </div>
      <UpperCaseConverter />
      <Dropdown

       />
    </>
  );
}

export default App;
