import React from "react";
import Masthead from "./mastead/masthead";
import SiteNavigation from "./nav/nav";
import { HeaderContainer } from "./styled-components/HeaderContainer";
import { Header } from "./styled-components/Header.1";

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
