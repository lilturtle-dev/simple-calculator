import { useState } from "react";
import Circle from "./Circle";
import Triangle from "./Triangle";
import "./styles.css";
import Switch from "@mui/material/Switch";

export default function App() {
  const [switchFormula, setSwitchFormula] = useState(false);

  const switchHandler = () => {
    setSwitchFormula(!switchFormula);
  };
  //      {switchFormula ? 'Triangle' : 'Circle' }
  return (
    <div className="App">
      <h1>Geometric calculator</h1>
      <Switch defaultChecked onClick={() => switchHandler()} />
      {switchFormula ? 'Circle' : 'Triangle'}
      {switchFormula ? (
        <div>
          <Circle />
        </div>
      ) : (
        <Triangle />
      )}
    </div>
  );
}
