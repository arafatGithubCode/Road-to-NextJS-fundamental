import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>welcome to home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">-products</Link>
    </div>
  );
};

export default Home;
