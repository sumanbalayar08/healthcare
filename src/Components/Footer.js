import React from "react";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="flex-col bg-grey text-white space-y-4 py-[2%]">
      <div className="flex justify-between mx-[4%]">
        <ul className="flex-col space-y-2">
          <li className="text-3xl font-bold">Medico Health</li>
          <li>Amwaj Islands; Bahrain</li>
          <li>Kathmandu, Nepal</li>
        </ul>
        <ul className="flex-col space-y-2">
          <li className="text-xl font-bold">About</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
        <div className="flex spacex-x-3">
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://linkedin.com" />
        </div>
      </div>

      <div className="items-center justify-center flex">
        <span>For more info, write to us at medicohealth@info.com</span>
      </div>
    </div>
  );
};

export default Footer;
