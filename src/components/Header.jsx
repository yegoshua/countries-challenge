import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "./Container";

const HeaderEl = styled.header`
   box-shadow: var(--shadow);
   background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({ href: "/" })``;

const ModeSwitcher = styled.div``;

export const Header = () => {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };
   useEffect(() => {
      document.body.setAttribute("data-theme", theme);
   }, [theme]);
   return (
      <HeaderEl>
         <Container>
            <Wrapper>
               <Title>Where is the World?</Title>
               <ModeSwitcher onClick={toggleTheme}>
                  <IoMoon />
               </ModeSwitcher>
            </Wrapper>
         </Container>
      </HeaderEl>
   );
};
