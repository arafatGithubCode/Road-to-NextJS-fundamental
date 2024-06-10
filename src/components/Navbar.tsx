import NavLink from "./NavLink";
import NavSearch from "./NavSearch";

const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <>
      <NavLink />
      <NavSearch />
    </>
  );
};

export default Navbar;
