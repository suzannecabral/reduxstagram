/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "@emotion/styled";

const Flex = () => {
  const FlexDiv = styled("div")`
    display: flex;
    flex-direction: row;
    background-color: limegreen;
  `;
  return <FlexDiv />;
};

const Styled = {
  Flex,
};

export { Flex };
export default Styled;
