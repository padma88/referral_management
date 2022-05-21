import Header from "./Navigation/Header";
import SideMenu from "./Navigation/SideMenu";
import Footer from "./Navigation/Footer";
import styled from "styled-components";

const Main = styled.main`
    position: relative;
    left: 200px;
    top: 75px;
    height: 100%;
    width: 100%
`
function Layout ({children}) {
    return <>
        <Header />
        <SideMenu />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
}

export default Layout;