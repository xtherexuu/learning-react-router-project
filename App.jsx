import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./features/AboutPage";
import HomePage from "./features/HomePage";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import VansPage from "./features/VansPage";
import VanDetailPage from "./features/VanDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
