import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
export default function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let x;
    if (start) {
      x = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => {
      clearInterval(x);
    };
  }, [time, start]);

  const milliseconds = (time / 10) % 100;
  const seconds = Math.floor((time % 6000) / 100);
  const minutes = Math.floor((time % 360000) / 6000);
  const hours = Math.floor(time / 360000);

  const startHandler = () => {
    setStart((prev) => !prev);
  };

  const pauseHandler = () => {
    setPause((pre) => !pre);
    setStart((prev) => false);
  };

  const resetHandler = () => {
    setTime(0);
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
            <p>{hours}</p>
          </div>
          <div className="time-Container">
            <p>{minutes}</p>
          </div>
          <div className="time-Container">
            <p>{seconds}</p>
          </div>
          <div className="time-Container">
            <p>{milliseconds}</p>
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
