import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Disc from "./Disc";
import "./App.css";
import Game from "./Game";

function App() {
  const [towers, setTowers] = useState({
    A: ["disc-0", "disc-1", "disc-2", "disc-3", "disc-4", "disc-5", "disc-6"],
    B: [],
    C: [],
  });

  const [warning, setWarning] = useState(0);

  function handleDragEnd({ active, over }) {
    setTowers((prevTowers) => {
      const newTowers = { ...prevTowers };

      const sourceTower = Object.keys(newTowers).find((key) =>
        newTowers[key].includes(active.id)
      );
      newTowers[sourceTower] = newTowers[sourceTower].filter(
        (id) => id !== active.id
      );

      if (
        newTowers[over.id].length === 0 ||
        Disc.discIndex(active.id) < Disc.discIndex(newTowers[over.id][0])
      ) {
        newTowers[over.id].unshift(active.id);
      } else {
        if (warning === 0) {
          alert("Invalid move: cannot place larger disc on smaller disc");
          newTowers[sourceTower].unshift(active.id);
          setWarning(1);
        } else {
          newTowers[sourceTower].unshift(active.id);
        }
      }
      return newTowers;
    });
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <header>
        <h1>Tower of The Gods</h1>
      </header>
      <Game towers={towers} />
      <footer>
        <p>Created by Ryan the Great</p>
      </footer>
    </DndContext>
  );
}

export default App;
