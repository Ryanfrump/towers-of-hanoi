import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Disc from "./Disc";
import TowerPng from "./assets/Untitled/tower.png";

export default function Tower({ id, discs }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    backgroundImage: `url(${TowerPng})`,
  };

  return (
    <section className="tower" ref={setNodeRef} style={style}>
      {discs.map((discId, index) => (
        <Disc key={discId} id={discId} isTopDisc={index === 0} />
      ))}
    </section>
  );
}
