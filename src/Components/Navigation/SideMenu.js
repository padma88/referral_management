import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Section = styled.section`
  position: fixed;
  left: 0;
  top: 61px;
  padding: 2em;
  background: #55465e;
  height: 100vh;
  width: 10vh;
  min-width: fit-content;
  z-index: 1;
`;

const Menu = styled.ul`
  li {
    margin: 1em 0;
  }
`;
const MyNavLink = styled(NavLink)`
  color: #fff;
  &:hover {
    color: #fff;
  }
  i {
    font-size: 20px;
  }
`;
function SideMenu() {
  return (
    <Section>
      <nav>
        <Menu>
          <li>
            <MyNavLink to="/">
              <i className="bi bi-hospital px-2"></i>Dashboard
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/users">
              <i className="bi bi-hospital px-2"></i>All Users
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/">
              <i className="bi bi-hospital px-2"></i>Facilities
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/">
              <i className="bi bi-hospital px-2"></i>Providers
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/">
              <i className="bi bi-hospital px-2"></i>Patients
            </MyNavLink>
          </li>
        </Menu>
      </nav>
    </Section>
  );
}

export default SideMenu;
