import fs from "fs";
export const ServerComTwo = () => {
  fs.readFileSync("src/components/Server-com-two.tsx", "utf-8");
  return <h1>Server comp Two</h1>;
};
