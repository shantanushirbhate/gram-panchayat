
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Home
import HomePage from "../features/home/page/HomePage";

// About
import AboutPage from "../features/aboutt/page/AboutPage";
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

// Transparency
import ArthikMahitiPage from "../features/transparency/page/ArthikMahitiPage";
import KamachiMahitiPage from "../features/transparency/page/KamachiMahitiPage";
import GramSabhaCornerPage from "../features/transparency/page/GramSabhaCornerPage";

// Education & Environment
import EducationParyavaranPage from "../features/educationParyavaran/page/EducationParyavaranPage";
import ParyavaranVShasvatVikasPage from "../features/educationParyavaran/page/ParyavaranVShasvatVikasPage";
import ShikshanAniYuvakKopraPage from "../features/educationParyavaran/page/ShikshanAniYuvakKopraPage";
import ShikshanVPayavaranPage from "../features/educationParyavaran/page/ShikshanVPayavaranPage";

// Samitiya
import SamitiyaPage from "../features/samitiya/page/SamitiyaPage";

// Services / Seva
import ServicesPage from "../features/services/page/servicesPage";
import SuchanaVJahiratiPage from "../features/services/page/SuchanaVJahiratiPage";
import OnlineKarBharnaPage from "../features/services/page/OnlineKarBharnaPage";
import NagrikSevaPage from "../features/services/page/NagrikSevaPage";
import ShaskiyaYojnaPage from "../features/services/page/ShaskiyaYojnaPage";
import MahitichaAdhikarPage from "../features/services/page/MahitichaAdhikarPage";

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
          element={<VillageInformationPage />}
        />

   

        <Route path="/about/history" element={<VillageHistoryPage />} />

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

        <Route
          path="/about/honors-and-awards"
          element={<HonorsAndAwardsPage />}
        />

        <Route path="/about/awards" element={<HonorsAndAwardsPage />} />

        <Route
          path="/about/wishes-and-congratulations"
          element={<WishesAndCongratulationsPage />}
        />

        <Route path="/about/employees" element={<EmployeeListPage />} />

        {/* Transparency */}

        <Route
          path="/transparency/arthik-mahiti"
          element={<ArthikMahitiPage />}
        />

        <Route
          path="/transparency/kamachi-mahiti"
          element={<KamachiMahitiPage />}
        />

        <Route
          path="/transparency/gram-sabha-corner"
          element={<GramSabhaCornerPage />}
        />

        {/* Education & Environment */}
        <Route
          path="/education-paryavaran"
          element={<EducationParyavaranPage />}
        />

        {/* Environment detail */}
        <Route
          path="/education-paryavaran/paryavaran-v-shasvat-vikas"
          element={<ParyavaranVShasvatVikasPage />}
        />

        <Route
          path="/education-paryavaran/paryavaran-shasvat-vikas"
          element={<ParyavaranVShasvatVikasPage />}
        />

        {/* Youth detail */}
        <Route
          path="/education-paryavaran/shikshan-ani-yuvak-kopra"
          element={<ShikshanAniYuvakKopraPage />}
        />

        <Route
          path="/education-paryavaran/shikshan-yuvak-kopra"
          element={<ShikshanAniYuvakKopraPage />}
        />

        {/* Education detail */}
        <Route
          path="/education-paryavaran/shikshan-v-paryavaran"
          element={<ShikshanVPayavaranPage />}
        />

        <Route
          path="/education-paryavaran/shikshan-paryavaran"
          element={<ShikshanVPayavaranPage />}
        />

        {/* Samitiya */}
        <Route path="/samitiya" element={<SamitiyaPage />} />

        {/* Services / Seva */}
        <Route path="/services" element={<ServicesPage />} />

        <Route
          path="/services/suchana-jahirati"
          element={<SuchanaVJahiratiPage />}
        />

        <Route
          path="/services/online-kar-bharna"
          element={<OnlineKarBharnaPage />}
        />

        <Route
          path="/services/nagrik-seva"
          element={<NagrikSevaPage />}
        />

        <Route
          path="/services/shaskiya-yojna"
          element={<ShaskiyaYojnaPage />}
        />

        <Route
          path="/services/mahiticha-adhikar"
          element={<MahitichaAdhikarPage />}
        />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
