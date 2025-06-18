import { Button, TextField } from "@mui/material";
import { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function Triangle() {
  const [side, setSide] = useState({
    a: false,
    b: false,
    c: false
  });

  const [Sp, setSp] = useState("");
  const [result, setArea] = useState("To get result please fill all required fields");

  const handleChange = (e) => {
    setSide({ ...side, [e.target.name]: parseFloat(e.target.value) });
  };

  function handleClick() {
    const a = side.a;
    const b = side.b;
    const c = side.c;

    if (a && b && c) {
      const S = semiPerimeter(a, b, c);
      if (S) {
        const Area = triangleArea(S, a, b, c);
        if (Area > 0) {
          setArea("please wait");
          setTimeout(() => {
            setArea(parseFloat(Area));
          }, 10000);
        } else {
          setArea("it is impossible to find the root of a negative number");
        }
      }
      setSp(parseFloat(S));
    } else {
      setSp(0);
      setArea("To get result please fill all required fields");
    }
  }

  function semiPerimeter(a, b, c) {
    const S = (a + b + c) / 2;
    return parseFloat(S);
  }

  function triangleArea(S, a, b, c) {
    const Area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return parseFloat(Area);
  }

  return (
    <div className="box">
      <h2>Triangle area</h2>
      <div className="box">
        <TextField
          margin="dense"
          fullWidth
          name="a"
          size="small"
          type="number"
          variant="filled"
          value={side.a}
          onChange={handleChange}
          placeholder="Please fill a side A"
        />
        <TextField
          margin="dense"
          fullWidth
          name="b"
          size="small"
          type="number"
          variant="filled"
          value={side.b}
          onChange={handleChange}
          placeholder="Please fill a side B"
        />
        <TextField
          margin="dense"
          fullWidth
          name="c"
          size="small"
          type="number"
          variant="filled"
          value={side.c}
          onChange={handleChange}
          placeholder="Please fill a side C"
        />
        <Button
          className="marg-top-1em"
          variant="contained"
          onClick={() => handleClick()}
          startIcon={<CalculateIcon />}
        >
          Calculate
        </Button>

        <p>Triangle area is</p>
        <span>{result}</span>
        <p>
          S = ({side.a || "a"} + {side.b || "b"} + {side.c || "c"}) /2
          <br />S = {Sp || "?"} <br />
          Area = √{Sp || "S"} ({Sp || "S"} − {side.a || "a"})({Sp || "S"} −{" "}
          {side.b || "b"})({Sp || "S"} − {side.c || "c"})
        </p>
      </div>
    </div>
  );
}
