"use client";
import { useRouter } from "next/router";

const OrderPlace = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing an order");
    router.push("/");
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place an order</button>
    </>
  );
};

export default OrderPlace;
