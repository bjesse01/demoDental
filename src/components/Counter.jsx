import React, { useEffect, useState } from "react";

export const Counter = ({ targetCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    const step = () => {
      if (count < targetCount) {
        setCount(count + 1);
        animationFrame = requestAnimationFrame(step);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [count, targetCount]);

  return <p className="font-bold text-xl">{count}</p>;
};
