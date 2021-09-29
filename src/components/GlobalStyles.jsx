import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = (props) => {
return (<div>
    <Global styles={css`
        h1{
          color: hotpink;
        }
      `}/>
  </div>
)};

export default GlobalStyles;
