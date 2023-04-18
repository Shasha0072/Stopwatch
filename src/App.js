import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
export default function App() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milsec, setMilsec] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let x;
    if (start) {
      x = setInterval(() => {
        setMilsec((prev) => prev + 1);
      }, 7);
    }
    return () => {
      clearInterval(x);
    };
  }, [milsec, start]);

  const startHandler = () => {
    setStart((prev) => !prev);
  };

  const pauseHandler = () => {
    setPause((pre) => !pre);
    setStart((prev) => false);
  };

  const resetHandler = () => {
    setHr(0);
    setSec(0);
    setMin(0);
    setMilsec(0);
    setStart(false);
    setPause(false);
  };
  return (
    <div className="App">
      <div
        style={{
          background: "#3A1078",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <div
          style={{
            background: "#4E31AA",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
            height: "100px",
            padding: "5px",
            color: "white",
            margin: "1rem",
            borderRadius: "5px",
          }}
        >
          <div className="time-Container">
            <p>{hr} hr</p>
          </div>
          <div className="time-Container">
            <p>{min} min</p>
          </div>
          <div className="time-Container">
            <p>{sec} sec</p>
          </div>
          <div className="time-Container">
            <p>{milsec} mS</p>
          </div>
        </div>
        <div className="btn-container">
          <Button disabled={start} onClick={startHandler}>
            Start
          </Button>
          <Button onClick={pauseHandler}>Pause</Button>
          <Button onClick={resetHandler}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
