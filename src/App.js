import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ContactPage from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import PricePage from "./pages/Price";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
