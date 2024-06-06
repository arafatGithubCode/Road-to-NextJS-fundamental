import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 500);
  });
  return {
    title: `Review ${params.reviewId} of ${title}`,
  };
};

const Review = ({ params }: Props) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h2>
      Review {params.reviewId} of product {params.productId}
    </h2>
  );
};

export default Review;
