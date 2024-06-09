import { Product } from "@/components/Product";
import { Reviews } from "@/components/Reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}
