import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  background-color: #fff7ed;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 10px;
`;

export const NavHeading = styled.h1`
  font-size: 25px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  & > a {
    color: black;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  list-style-position: inside;
  align-items: center;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink)`
  color: #4d4d4d;
  text-decoration: none;
  padding: 5px 20px;
  &:hover {
    color: #161616;
    text-decoration: underline;
  }
  li > &.active {
    color: #161616;
    text-decoration: underline;
    font-weight: bold;
  }
`;
