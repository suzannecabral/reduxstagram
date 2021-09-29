import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import PhotoGrid from "./components/PhotoGrid";

const Pink = styled("h1")`
  color: hotpink;
  font-family: "Billabong", sans-serif;
  font-size: 75px;
`;
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Pink>Reduxstagram</Pink>
      <PhotoGrid />
    </div>
  );
}

export default App;
