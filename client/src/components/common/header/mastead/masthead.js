import React from "react";
import { WordmarkDiv } from "./styled-components/WordmarkDiv";
import { Subtitle } from "./styled-components/Subtitle";
import { Brand } from "./styled-components/Brand";

const Masthead = ({ title, subtitle }) => {
  return (
    <WordmarkDiv>
      <Brand>{title}</Brand>
      <Subtitle>{subtitle}</Subtitle>
    </WordmarkDiv>
  );
};

export default Masthead;
