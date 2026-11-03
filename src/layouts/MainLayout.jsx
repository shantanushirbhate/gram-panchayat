
import { Outlet } from "react-router-dom";

import Header from "../common/Header";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;