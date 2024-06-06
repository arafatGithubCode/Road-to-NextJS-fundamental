const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>About product&apos;details {params.productId}.</h1>;
};

export default ProductDetails;
