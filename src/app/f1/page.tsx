import Link from "next/link";

export default function f1() {
  return (
    <>
      <h2>f1 page</h2>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
