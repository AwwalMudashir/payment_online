import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/images/eServiceLogo.png";
import CookieConsent from "@/pages/landing/components/CookieConsent";
import { FadeIn } from "../custom/Animation";
import { logoImage } from "@/lib/env";
import Navbar from "../custom/Navbar";
import Footer from "../custom/Footer";

const LandingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* migrated navbar */}
      <Navbar />

      <main>
        <div className="flex-1">
          <Outlet />
        </div>
        {/* Cookie Consent */}
        <CookieConsent />
      </main>

      {/* migrated footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
