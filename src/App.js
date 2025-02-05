import { useState } from "react";
import "./App.css";
import Navber from "./components/Navber";
import Script1 from "./components/Script1";
import UpperCaseConverter from "./components/UpperCaseConverter";
import Alert from "./components/Alert";

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
  return (
    <>
      <Navber
        title="ayan"
        masage="new file"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <Script1
          heading="enter a text to analyze below"
          Showalert={Showalert}
        />
      </div>
      <UpperCaseConverter />
    </>
  );
}

export default App;
