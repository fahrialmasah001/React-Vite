import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
