
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Home
import HomePage from "../features/home/page/HomePage";

// About
import AboutPage from "../features/aboutt/page/AboutPage";
import AboutInformationPage from "../features/aboutt/page/AboutInformationPage";
import VillageIdentityPage from "../features/aboutt/page/VillageIdentityPage";
import VillageHistoryPage from "../features/aboutt/page/VillageHistoryPage";
import VillageInformationPage from "../features/aboutt/page/VillageInformationPage";
import CultureAndTraditionsPage from "../features/aboutt/page/CultureAndTraditionsPage";
import EmergencyContactsPage from "../features/aboutt/page/EmergencyContactsPage";
import HonorsAndAwardsPage from "../features/aboutt/page/HonorsAndAwardsPage";
import InitiativesAndEventsPage from "../features/aboutt/page/InitiativesAndEventsPage";
import OfficeDetailsPage from "../features/aboutt/page/OfficeDetailsPage";
import RolesAndResponsibilitiesPage from "../features/aboutt/page/RolesAndResponsibilitiesPage";
import WishesAndCongratulationsPage from "../features/aboutt/page/WishesAndCongratulationsPage";
import EmployeeListPage from "../features/aboutt/page/EmployeeListPage";
// Services
import ServicesPage from "../features/services/servicesPage";

// Gallery
import GalleryPage from "../features/gallery/GalleryPage";

// Contact
import ContactPage from "../features/contact/ContactPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/about/information"
          element={<AboutInformationPage />}
        />

        <Route
          path="/about/village-identity"
          element={<VillageIdentityPage />}
        />

        <Route
          path="/about/history"
          element={<VillageHistoryPage />}
        />

        <Route
          path="/about/village-information"
          element={<VillageInformationPage />}
        />

        <Route
          path="/about/culture-and-traditions"
          element={<CultureAndTraditionsPage />}
        />

        <Route
          path="/about/emergency-contacts"
          element={<EmergencyContactsPage />}
        />
        <Route
  path="/about/initiatives-and-events"
  element={<InitiativesAndEventsPage />}
        />
        
        <Route
  path="/about/office-details"
  element={<OfficeDetailsPage />}
/>
<Route
  path="/about/roles-and-responsibilities"
  element={<RolesAndResponsibilitiesPage />}
/>
      {/* Honors and Awards */}
<Route
  path="/about/honors-and-awards"
  element={<HonorsAndAwardsPage />}
/>

<Route
  path="/about/awards"
  element={<HonorsAndAwardsPage />}
        />
        
        <Route
  path="/about/wishes-and-congratulations"
  element={<WishesAndCongratulationsPage />}
        />
        <Route
  path="/about/employees"
  element={<EmployeeListPage />}
/>

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
