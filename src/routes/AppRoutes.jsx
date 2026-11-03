
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../features/home/HomePage";
import AboutPage from "../features/aboutt/AboutPage";
import ServicesPage from "../features/services/servicesPage";
import GalleryPage from "../features/gallery/GalleryPage";
import ContactPage from "../features/contact/ContactPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
