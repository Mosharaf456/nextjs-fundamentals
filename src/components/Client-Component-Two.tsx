"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [count, setCount] = useState(2);

  return (
    <div>
      <h1>Client Component Two</h1>
      <p>Count: {count}</p>
    </div>
  );
}
