import "./App.css";
import { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import MainInput from "./MainInput";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <MainInput value={value} setValue={setValue}/>
      {value==='HI'?(<PrimaryBtn setValue={setValue} value="HI" />):(<PrimaryBtn setValue={setValue} value="TEST"/>)}
    </div>
  );
};

export default App;
