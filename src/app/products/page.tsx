export const fetchCache = "default-cache";

type Product = {
  id: number;
  price: number;
  title: string;
  description: string;
};
export default async function page() {
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();
  return (
    <div className="flex gap-5">
      {products &&
        products.map((product: Product) => {
          return (
            <div className="m-4 p-5 shadow-lg" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          );
        })}
    </div>
  );
}
