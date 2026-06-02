
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Navbar from "./component/Navbar";
import AnnouncementBar from "./component/AnnouncementBar";
import Slider from "./component/Slider";
import QuickLinks from "./component/QuickLinks";
import AboutSection from "./component/AboutSection";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";

// 👉 Import page
import Recognition from "./pages/Recognition";
import History from "./pages/History";
import Vision from "./pages/Vision";
import Principal from "./pages/Principal";
import Management from "./pages/Management";
import Discipline from "./pages/Discipline";
import Contact from "./pages/Contact";

import ManagementMembers from "./Administration/ManagementMembers";
import StaffMembers from "./Administration/StaffMembers";
import Enrollment from "./Administration/Enrollment";
import Admission from "./Administration/Admission";
import Facilities from "./Administration/Facilities";
import SchoolCurriculum from "./Administration/SchoolCurriculum";
import ClubZone from "./Administration/ClubZone";
import Celebrations from "./Administration/Celebrations";
import Events from "./Administration/Events";
import Achievements from "./Administration/Achievements"; 
import Holidays from "./Administration/Holidays";
import Scholarship from "./Administration/Scholarship";

const Home = () => {
  return (
    <>
      <Slider />
      <QuickLinks />
      <AboutSection />
      <Gallery />
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [location.pathname]);
  return (
    <div>
      <Header />
      <Navbar />
      <AnnouncementBar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* ✅ Recognition Page */}
        <Route path="/about/recognition" element={<Recognition />} />
        <Route path="/about/History" element={<History />} />
        <Route path="/about/Vision" element={<Vision />} />
        <Route path="/about/Principal" element={<Principal />} />
        <Route path="/about/Management" element={<Management />} />
        <Route path="/about/Discipline" element={<Discipline />} />
        <Route path="/pages/Contact" element={<Contact />} />

        <Route path="/Administration/ManagementMembers" element={<ManagementMembers />} />
        <Route path="/Administration/StaffMembers" element={<StaffMembers />} />
        <Route path="/Administration/Enrollment" element={<Enrollment />} />
        <Route path="/Administration/Admission" element={<Admission />} />
        <Route path="/Administration/Facilities" element={<Facilities />} />
        <Route path="/Administration/SchoolCurriculum" element={<SchoolCurriculum />} />
        <Route path="/Administration/ClubZone" element={<ClubZone />} />
        <Route path="/Administration/Celebrations" element={<Celebrations />} />
        <Route path="/Administration/Events" element={<Events />} />
        <Route path="/Administration/Achievements" element={<Achievements />} />
        <Route path="/Administration/Holidays" element={<Holidays />} />
        <Route path="/Administration/Scholarship" element={<Scholarship />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;