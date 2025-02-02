import "./App.css";
import Navber from "./components/Navber";
import Script1 from "./components/Script1";
 
function App() {
  return (
    <>
      <Navber title="ayan" masage="new file" />

      <div className="container">
      <Script1 heading ="enter a text to analyze below"/>
      </div>
      
    </>
  );
}

export default App;
