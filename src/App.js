import React, { useState } from "react";
import "./App.css";
import Robot from "./Components/Robot";

// Robot Simulator Component
function App() {
  const [position, setPosition] = useState({ x: 2, y: 2 }); // Initial position at (2, 2)
  const [direction, setDirection] = useState("NORTH"); // Initial direction facing NORTH

  const gridSize = 5;

  const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

  const moveForward = () => {
    setPosition((prev) => {
      let { x, y } = prev;
      switch (direction) {
        case "SOUTH":
          y = Math.min(gridSize - 1, y + 1);
          break;
        case "EAST":
          x = Math.min(gridSize - 1, x + 1);
          break;
        case "NORTH":
          y = Math.max(0, y - 1);
          break;
        case "WEST":
          x = Math.max(0, x - 1);
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  const rotateLeft = () => {
    setDirection((prev) => {
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 3) % 4];
    });
  };

  const rotateRight = () => {
    setDirection((prev) => {
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 1) % 4];
    });
  };

  return (
    <div className="App">
      <h1>Robot Simulator</h1>
      <div className="grid">
        {Array.from({ length: gridSize }, (_, y) => (
          <div key={y} className="row">
            {Array.from({ length: gridSize }, (_, x) => (
              <div
                key={x}
                className={`cell ${
                  position.x === x && position.y === y ? "robot" : ""
                }`}
              >
                {position.x === x && position.y === y && (
                  <Robot direction={direction} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
}

export default App;
