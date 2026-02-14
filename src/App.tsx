import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FocusArea from "./pages/FocusArea";
import FundingPartnerships from "./pages/FundingPartnerships";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<FocusArea/>}/>
          <Route path="/funding" element={<FundingPartnerships/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
