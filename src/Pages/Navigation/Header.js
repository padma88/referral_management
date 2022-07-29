import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
////${primary};
const Head = styled.header.attrs((props) => props)`
width: 100%;
min-height: fit-content;
padding: 10px 2em;
background: ${props => props.primary};
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
z-index: 2
`

const Menu = styled.ul`
display: flex;
li {
    margin: 0 10px
}
`

const MyNavLink = styled(NavLink)`
color: #fff;
&:hover {
    color: #fff;
}
i {
    font-size: 20px
}
`
function Header(props) {
  return (
    <Head {...props}>
      <MyNavLink  to="/"><h3>Ref+</h3></MyNavLink>
      <nav>
        <Menu>
          <li>
            <MyNavLink to="/"><i className="bi bi-bell"></i></MyNavLink>
          </li>
          <li>
            <MyNavLink to="/"><i className="bi bi-person-circle px-2"><span className="px-2">Padma</span></i></MyNavLink>
          </li>
        </Menu>
      </nav>
    </Head>
  );
}

export default Header;
