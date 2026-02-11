import { Outlet } from "react-router-dom";
import SiteChrome from "../components/SiteChrome";

export default function MainLayout() {
  return (
    <>
      <SiteChrome />
      <main id="page-content">
        <Outlet />
      </main>
    </>
  );
}
