import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { GlobalStyled, mainColors } from "../style/GlobalStyled";

const Sheader = styled.div`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </Sheader>
  );
};
