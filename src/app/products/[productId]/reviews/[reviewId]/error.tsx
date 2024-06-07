"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <h3>{error.message}</h3>;
}
