import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Hr } from "modules/modules/shared/components/Hr";

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledComments = styled.section`
  grid-column: 4 / -4;

  h2 {
    text-transform: uppercase;
  }
`;

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export const Comments = () => {
  return (
    <StyledComments>
      <Helmet>
        <script
          defer
          src="https://cdn.commento.io/js/commento.js"
          data-css-override="https://selfteach.me/css/commento.css"
          data-auto-init="true"
          type="text/javascript"
        ></script>
      </Helmet>
      <Hr />
      <h2>Comments</h2>
      <div id="commento" />
    </StyledComments>
  );
};
