import { Outlet } from "react-router-dom";
import SiteChrome from "../components/SiteChrome";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <>
      <SiteChrome />
      <main id="page-content">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
