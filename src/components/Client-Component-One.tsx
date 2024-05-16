"use client";

import { useState } from "react";
// import { ClientComponentTwo } from "./Client-Component-Two";

export const ClientComponentOne = ({ children } : { children: React.ReactNode;} ) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Client Component One</h1>
      <p>Count: {count}</p>
      {/* <ClientComponentTwo /> */}
      
      {children}
    </div>
  );
}
