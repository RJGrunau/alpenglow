import React from "react";
import styled from "styled-components";
import Masthead from "./mastead/masthead";
import SiteNavigation from "./nav/nav";

const Header = styled.header`
  width: 100%;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 75px 25px;
`;

const SiteHeader = () => {
  return (
    <Header>
      <HeaderContainer>
        <Masthead title={"Alpenglow"} subtitle={"Life in the mountains"} />
        <SiteNavigation />
      </HeaderContainer>
    </Header>
  );
};

export default SiteHeader;
