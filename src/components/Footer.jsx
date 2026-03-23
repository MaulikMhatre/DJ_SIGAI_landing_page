import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white bg-black mt-0 pt-0">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="footer-glow"></div>
      </div>

      <div
        className="max-w-full m-auto sm:px-8 py-12 
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 
                   bg-white/5 backdrop-blur-lg border-t border-white/10 
                   rounded-t-2xl shadow-[0_0_25px_rgba(34,211,238,0.3)]"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-xl primary-font font-semibold text-[#67c6fe] mb-4">Address</h2>
          <div className="rounded-lg overflow-hidden border border-white/20 flex-1">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0090642576706!2d72.83453817459258!3d19.107258282103757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1758569258615!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition duration-300"
            ></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0090642576706!2d72.83453817459258!3d19.107258282103757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1758569258615!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>

        <div className="flex flex-col text-xl sec-font items-center">
          <h2 className="text-xl primary-font font-semibold text-[#67c6fe] mb-4">Contact</h2>
          <p className="text-gray-300 flex items-center">
            <PhoneIcon className="mr-2 h-5 w-5" /> +91 9545629801
          </p>
          <p className="text-gray-300 flex items-center mt-2">
            <PhoneIcon className="mr-2 h-5 w-5" /> +91 9867720041
          </p>
          <p className="text-gray-300 flex items-center mt-4">
            <MailIcon className="mr-2 h-5 w-5" /> djs.sigai@gmail.com
          </p>
        </div>

        <div className="flex flex-col sec-font items-center">
          <h2 className="text-xl primary-font font-semibold text-[#67c6fe] mb-4">Links</h2>
          <ul className="space-y-2 text-gray-300 text-center text-xl">
            <li><a href="/" className="hover:text-[#67c6fe]">Home</a></li>
            <li><a href="/team" className="hover:text-[#67c6fe]">Team</a></li>
            <li><a href="/events" className="hover:text-[#67c6fe]">Events</a></li>
            <li><a href="/contact" className="hover:text-[#67c6fe]">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-xl primary-font font-semibold text-[#67c6fe] mb-4 text-center">Follow Us</h2>
            <div className="flex space-x-6 text-2xl">
              <a href="https://www.linkedin.com/company/djsce-acm-sigai-student-chapter/posts/?feedView=all" className="hover:text-blue-500 transition transform hover:scale-110">
                <LinkedinIcon />
              </a>
              <a href="https://www.instagram.com/djs.sigai/?hl=en" className="hover:text-pink-400 transition transform hover:scale-110">
                <InstagramIcon />
              </a>
              <a href="https://x.com/Sigai23713" className="hover:text-gray-500 transition transform hover:scale-110">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div>
            <img src="/nav_logo.png" alt="logo" className="mt-10 h-13 w-40" />
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-gray-400 text-base sec-font border-t border-white/10">
        © {new Date().getFullYear()} SIGAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
