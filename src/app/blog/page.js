"use client";

import React, { useState } from "react";
import Header from "./Header";

const Blog = () => {
  const [count, setCount] = useState(0);

  const handleIncreas = () => {
    setCount(count + 1);
  };
  const handleDeacrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>
        lorem
        loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
      </p>
      <Header />
      <button onClick={handleIncreas}>+</button>

      {count}

      <button onClick={handleDeacrease}>-</button>
    </div>
  );
};

export default Blog;
