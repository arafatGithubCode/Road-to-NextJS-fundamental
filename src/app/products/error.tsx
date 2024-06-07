"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <h3>
      {error.message} <button onClick={reset}>try again</button>
    </h3>
  );
}
