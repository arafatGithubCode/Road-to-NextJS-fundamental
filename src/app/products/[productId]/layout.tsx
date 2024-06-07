type Props = {
  children: React.ReactNode;
};

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ProductDetails({ children }: Props) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading Products");
  }
  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
