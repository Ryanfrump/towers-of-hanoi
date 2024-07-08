import React from "react";
import { useDraggable } from "@dnd-kit/core";
import Disc1 from "./assets/Untitled/Rectangle-1.png";
import Disc2 from "./assets/Untitled/Rectangle-2.png";
import Disc3 from "./assets/Untitled/Rectangle-3.png";
import Disc4 from "./assets/Untitled/Rectangle-4.png";
import Disc5 from "./assets/Untitled/Rectangle-5.png";
import Disc6 from "./assets/Untitled/Rectangle-6.png";
import Disc7 from "./assets/Untitled/Rectangle-7.png";

const discImages = [Disc1, Disc2, Disc3, Disc4, Disc5, Disc6, Disc7];

export default function Disc({ id, isDraggable }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled: !isDraggable,
  });

  const discIndex = parseInt(id.split("-")[1], 10);
  const image = discImages[discIndex];

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        backgroundImage: `url(${image})`,
      }
    : {
        backgroundImage: `url(${image})`,
      };

  const discClassName = `disc disc-${discIndex + 1}`;

  return (
    <div
      className={discClassName}
      ref={setNodeRef}
      style={style}
      {...(isDraggable ? listeners : {})}
      {...attributes}
    ></div>
  );
}
