import { Wrapper, NavList, ListItem, NavHeading, StyledLink } from "./styled";

export default function Nav() {
  return (
    <Wrapper>
      <NavHeading>
        <StyledLink to="/">#VANLIFE</StyledLink>
      </NavHeading>
      <NavList>
        <ListItem>
          <StyledLink to="host">Host</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="about">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="vans">Vans</StyledLink>
        </ListItem>
      </NavList>
    </Wrapper>
  );
}
