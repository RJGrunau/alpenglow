import React from "react";
import { NavItem } from "../styled-components/NavItem";
import { NavList } from "../styled-components/NavList";
import { Nav } from "../styled-components/Nav.1";

const navItems = [
  { title: "News" },
  { title: "Reviews" },
  { title: "Library" },
  { title: "Reviews" }
];
const SiteNavigation = () => {
  return (
    <Nav>
      <NavList>
        {navItems.map((item, i) => (
          <NavItem key={i}>{item.title}</NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default SiteNavigation;
