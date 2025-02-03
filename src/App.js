import "./App.css";
import Navber from "./components/Navber";
import Script1 from "./components/Script1";
import UpperCaseConverter from "./components/UpperCaseConverter";
 
function App() {
  return (
    <>
      <Navber title="ayan" masage="new file" />

      <div className="container">
      <Script1 heading ="enter a text to analyze below"/>
      </div>
      <UpperCaseConverter />
    </>
  );
}

export default App;
