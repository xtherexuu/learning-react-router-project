import { Outlet } from "react-router-dom";
import { HostNav, NavElement, StyledNavLink, Wrapper } from "./styled";

export default function HostLayout() {
  return (
    <Wrapper>
      <HostNav>
        <NavElement>
          <StyledNavLink to="/host" end>Dashboard</StyledNavLink>
        </NavElement>
        <NavElement>
          <StyledNavLink to="income">Income</StyledNavLink>
        </NavElement>
        <NavElement>
          <StyledNavLink to="review">Reviews</StyledNavLink>
        </NavElement>
      </HostNav>
      <Outlet />
    </Wrapper>
  );
}
