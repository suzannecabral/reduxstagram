import React from "react";
import Single from "./Single";
import { Flex } from "./Styled";

const PhotoGrid = () => {
  return (
    <div>
      <h2>PhotoGrid</h2>
      <Flex>
        <Single />
        <Single />
        <Single />
      </Flex>
    </div>
  );
};

export default PhotoGrid;
