import Header from "./Navigation/Header";
import SideMenu from "./Navigation/SideMenu";
import Footer from "./Navigation/Footer";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Main = styled.main`
  position: relative;
  left: 100px;
  top: 84px;
`;
function Layout({ children }) {
  const colors = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={colors}>
      <ThemeContext.Consumer>
        {(colors) => (
          <>
            <Header {...colors} />
            <SideMenu {...colors}  />
            <Main className="container">{children}</Main>
            <Footer />
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default Layout;
