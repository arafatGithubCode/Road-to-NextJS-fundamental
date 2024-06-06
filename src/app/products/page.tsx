import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h3>
        <Link href="/products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="/products/2">Product 2</Link>
      </h3>
      <h3>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h3>
      <h3>
        <Link href={`/products/${productId}`}>{`Product ${productId}`}</Link>
      </h3>
    </>
  );
};

export default Products;
