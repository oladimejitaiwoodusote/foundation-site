import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FocusArea from "./pages/FocusArea";
import FundingPartnerships from "./pages/FundingPartnerships";
import Impact from "./pages/Impact";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<FocusArea/>}/>
          <Route path="/funding" element={<FundingPartnerships/>}/>
          <Route path="/impact" element={<Impact/>}/>
          <Route path="about" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
