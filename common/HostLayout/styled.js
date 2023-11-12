import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 110px - 50px - 44.094px);
  padding: 0 27px;
`;

export const HostNav = styled.ul`
  list-style: none inside;
  display: flex;
  gap: 27px;
  padding: 0;
`;

export const NavElement = styled.li`
  font-size: 18px;
  font-weight: 500;
  &:hover {
    font-weight: 700;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #4d4d4d;
  text-decoration: none;
  &:hover {
    color: #161616;
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
    color: black;
    text-decoration: underline;
  }
`;
