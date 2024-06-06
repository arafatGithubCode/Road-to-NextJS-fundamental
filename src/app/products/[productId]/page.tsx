import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    description: `Product ${params.productId} description`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <h1>About product&apos;details {params.productId}.</h1>;
};

export default ProductDetails;
