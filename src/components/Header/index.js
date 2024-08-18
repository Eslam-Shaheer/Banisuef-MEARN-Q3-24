import React from "react";
import classses from "./header.module.css";
import { menuItems } from "./menuItems";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className={classses.container}>
      <h1>Banisuef MEARN</h1>
      {menuItems.map((item) => (
        <NavLink href={item.href} label={item.label} />
      ))}
    </header>
  );
};
export default Header;
