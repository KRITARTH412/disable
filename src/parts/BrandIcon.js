/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the phone icon

import Button from 'elements/Button';

import Logoicon from '../assets/images/logo192.png';
import "./navbar.css"

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex items-center">
          {/* <img src={Logoicon} alt="logo" className="w-9 h-9 mr-2" style={{ borderRadius: "6px" }} /> */}
          <div className="navbar-logo mr-2">
            <img alt="logo" src={Logoicon} />
          </div>
          <p className="text-white text-xl sm:text-2xl ml-2 mr-12 sm:mr-12 text-lg xs:text-base">
             <span className="text-white">n</span> Excellence Care
           </p>
        </div>

        {/* Adding margin to the phone section and hiding it below 700px */}
      </div>
    </Button>
  );
}
