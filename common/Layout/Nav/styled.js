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
  padding-left: 20px;
  font-weight: 900;
  margin: 0;
  & > a {
    color: black;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  list-style-position: inside;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink)`
  color: #4d4d4d;
  text-decoration: none;
  /* padding: 5px 10px 5px 1px; */
  &:hover {
    color: #161616;
    text-decoration: underline;
  }
  & > div {
    width: 18px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
  }
  & > div > img {
    width: 18px;
  }
  & > div:before {
    content: "";
    display: none;
    width: 18px;
    height: 1.25px;
    background: black;
    position: absolute;
    bottom: -3px;
    left: 0px;
  }
  & > div:hover:before {
    display: block;
  }
  li > &.active {
    color: #161616;
    text-decoration: underline;
    font-weight: bold;
  }
`;
