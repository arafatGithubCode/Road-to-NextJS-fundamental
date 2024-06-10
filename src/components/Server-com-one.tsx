import fs from "fs";
import { ClientComOne } from "./Client-com-one";
export const ServerComOne = () => {
  fs.readFileSync("src/components/Server-com-one.tsx", "utf-8");
  return (
    <>
      <h1>Server comp one</h1>
    </>
  );
};
