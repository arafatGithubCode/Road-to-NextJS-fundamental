"use client";

import { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  console.log("Nav searched rendered");
  return <div>Nav Search</div>;
};

export default NavSearch;
