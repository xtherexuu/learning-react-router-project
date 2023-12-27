import { Wrapper, NavList, ListItem, NavHeading, StyledLink } from "./styled";
import loginIconSrc from "../../../Utils/loginIcom.png";

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
        <ListItem>
          <StyledLink to="login">
            <div>
              <img src={loginIconSrc}></img>
            </div>
          </StyledLink>
        </ListItem>
      </NavList>
    </Wrapper>
  );
}
