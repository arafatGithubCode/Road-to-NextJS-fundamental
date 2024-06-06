import { notFound } from "next/navigation";

const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
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
