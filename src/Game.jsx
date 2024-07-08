import React from "react";
import Tower from "./Tower";

export default function Game({ towers }) {
  return (
    <main>
      {Object.keys(towers).map((id) => (
        <Tower key={id} id={id} discs={towers[id]} />
      ))}
    </main>
  );
}
