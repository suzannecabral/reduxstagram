import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyles = (props) => {
  return (
    <div>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      <Global
        styles={css`
          @import url("http://fonts.cdnfonts.com/css/billabong");
          body {
            font-family: "Roboto", sans-serif;
          }
        `}
      />
    </div>
  );
};

export default GlobalStyles;
