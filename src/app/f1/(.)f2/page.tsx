import Link from "next/link";

export default function InterceptedF2() {
  return (
    <>
      <h2>(.)Intercepted F2 page</h2>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
