import React from "react";
import styled from "styled-components";

const NavigationBar = styled.nav`
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

export default function Navbar() {
  return (
    <NavigationBar>
      <div>Logo</div>
      <div>Links</div>
    </NavigationBar>
  );
}
