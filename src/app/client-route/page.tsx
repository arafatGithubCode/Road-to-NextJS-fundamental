"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  const result = serverSideFunction();
  console.log("client route rendered");
  return (
    <>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
