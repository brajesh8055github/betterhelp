import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-6">
      {/* Navigation Links */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Top Navigation */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 lg:mb-0">
          {["Home", "Business", "About", "FAQ", "Reviews", "Advice", "Careers", "Find a Therapist", "Online Therapy", "Contact", "For Therapists"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:underline text-sm lg:text-base"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {[
            { name: "facebook", icon: <FaFacebook /> },
            { name: "instagram", icon: <IoLogoInstagram /> },
            { name: "x", icon: <FaXTwitter /> },
            { name: "linkedin", icon: <IoLogoLinkedin /> },
            { name: "tiktok", icon: <IoLogoTiktok /> },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:opacity-80"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
          <a href="#" className="hover:underline text-sm">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-sm">
            Sharing Settings
          </a>
          <a href="#" className="hover:underline text-sm">
            Web Accessibility
          </a>
        </div>
        <p className="text-sm">&copy; 2024 BetterHelp</p>
      </div>
    </footer>
  );
};

export default Footer;
