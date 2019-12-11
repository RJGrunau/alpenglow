import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  grid-row: 2/3;
  grid-column: 2/3;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
  align-items: center;
`;
const NavItem = styled.li`
  font-style: italic;
  font-size: 22px;
`;
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
