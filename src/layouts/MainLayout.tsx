import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageTransition from "../components/PageTransition";
import CustomScrollbar from "../components/CustomScrollbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <Outlet />
      </PageTransition>

      <Footer />
      <CustomScrollbar />
    </>
  );
}
