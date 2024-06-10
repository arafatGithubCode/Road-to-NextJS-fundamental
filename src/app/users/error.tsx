"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-red-500 text-2xl">Error fetching user data</div>
    </div>
  );
}
