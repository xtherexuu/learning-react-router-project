import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./features/about";
import HomePage from "./features/homePage";
import Nav from "./common/nav";
import Footer from "./common/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
