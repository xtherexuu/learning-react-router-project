import { Wrapper } from "./styled";
import Nav from "../Nav";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Wrapper>
      <Nav />
        <Outlet />
      <Footer />
    </Wrapper>
  );
}
