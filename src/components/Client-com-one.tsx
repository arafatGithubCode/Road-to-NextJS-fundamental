"use client";

import { useState } from "react";
import { ServerComOne } from "./Server-com-one";

export const ClientComOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("arafat");
  return (
    <>
      <h1>Client comp one</h1>
      {children}
    </>
  );
};
