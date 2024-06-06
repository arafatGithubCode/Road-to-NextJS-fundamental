import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "first blog",
  },
};
const First = () => {
  return <h2>First blog page (Nested Routing)</h2>;
};

export default First;
