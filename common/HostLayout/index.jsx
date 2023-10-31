import { Outlet } from "react-router-dom";
import { HostNav, NavElement, StyledLink, Wrapper } from "./styled";

export default function HostLayout() {
  return (
    <Wrapper>
      <HostNav>
        <NavElement>
          <StyledLink to="/host">Dashboard</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="income">Income</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="review">Reviews</StyledLink>
        </NavElement>
      </HostNav>
      <Outlet />
    </Wrapper>
  );
}
