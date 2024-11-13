/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Transition } from '@headlessui/react';
import Button from 'elements/Button';
import BrandIcon from 'parts/BrandIcon';
import Wave from 'react-wavify'

export default function Header(props) {
  const { location } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const path = location.pathname;

  return (
    <header
      className="header shadow-md"
      style={{
        maxWidth: '100%',
        width: '100%',
        backgroundColor: '#7f3cb9',
        color: 'white',
        borderRadius: '10px 10px 10px 10px',
      }}
    >
      <Fade>
        <div className="flex justify-between px-4 lg:px-8">
          <BrandIcon />

          <button
            className="block xl:hidden focus:outline-none"
            onClick={() => {
              setIsCollapse(!isCollapse);
              setIsServicesDropdownOpen(false);
              setIsTechnologiesDropdownOpen(false);
            }}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                className={`${isCollapse ? 'hidden' : 'block'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={`${!isCollapse ? 'hidden' : 'block'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden xl:flex flex-row mt-0 items-center text-white tracking-widest">
          <li className={`navbar-item ${path === '/' ? 'active-link' : ''} text-lg px-5 no-underline hover:bg-[#fff] hover:underline hover:text-purple`}>
            <Button
              className={`${path === '/' ? 'active-link' : ''} text-xl px-5 no-underline`}
              type="link"
              href="/"
              style={{
                color: path === '/' ? 'dark-green-1' : 'inherit',
                backgroundColor: 'inherit',
                fontWeight: "bold"
              }}
            >
              Home
            </Button>
          </li>

          <li
            className="navbar-item py-2 lg:py-0 relative text-lg px-5 no-underline hover:underline"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Button
              className={`${path === '/services' ? 'active-link' : ''} text-xl px-5 no-underline hover:underline`}
              type="link"
              href="/services"
              style={{
                color: path === '/services' ? 'dark-green-1' : '#fff',
                backgroundColor: 'inherit',
                fontWeight: "bold"
              }}
            >
              Services
            </Button>
          </li>

          <li className="navbar-item py-2 lg:py-0">
            <Button
              className={`${path === '/aboutus' ? 'active-link' : ''} text-xl px-5 no-underline hover:underline`}
              style={{
                color: path === '/aboutus' ? 'dark-green-1' : '#fff',
                backgroundColor: 'inherit',
                fontWeight: "bold"
              }}
              type="link"
              href="/aboutus"
            >
              About
            </Button>
          </li>

          <li className="navbar-item py-2 lg:py-0">
            <Button
              className={`${path === '/process' ? 'active-link' : ''} text-xl px-5 no-underline hover:underline`}
              style={{
                color: path === '/process' ? 'dark-green-1' : '#fff',
                backgroundColor: 'inherit',
                fontWeight: "bold"
              }}
              type="link"
              href="/process"
            >
              Process
            </Button>
          </li>

          <li className="navbar-item py-2 lg:py-0">
            <Button
              className={`${path === '/discuss-project' ? 'active-link' : ''} text-xl px-5 no-underline hover:underline hover:text-dark-green-1`}
              style={{
                color: path === '/discuss-project' ? 'dark-green-1' : '#fff',
                backgroundColor: 'inherit',
                fontWeight: "bold"
              }}
              type="link"
              href="/discuss-project"
            >
              Contact
            </Button>
          </li>

          <li className="navbar-item">
            <Button
              className="mx-auto ml-3 px-6 py-3 text-xl xl:text-xl xl:text-sm whitespace-nowrap text-white rounded-full border-2 hover:bg-dark-green-1 border-purple-800 transition duration-200"
              style={{
                backgroundColor: '#FCD34D',
                border: '#435c38',
                color: 'yellowish',
                fontWeight: "bold",
              }}
              type="link"
              href="/discuss-project"
            >
              +1800 xxxx zz
            </Button>
          </li>
        </ul>
      </Fade>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Fade>
          <ul className="z-50 flex flex-col text-white tracking-widest my-6 absolute w-full border-b-2 border-gray-300 xl:hidden bg-light-greenish">
            <li className="py-2">
              <Button
                className={`${path === '/' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/"
                style={{
                  color: path === '/' ? 'dark-green-1' : 'inherit',
                  backgroundColor: 'inherit',
                }}
              >
                Home
              </Button>
            </li>

            <li className="py-2 relative">
              <Button
                className={`${path === '/services' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/services"
                style={{
                  color: path === '/services' ? 'dark-green-1' : 'inherit',
                  backgroundColor: 'inherit',
                }}
                onClick={() => {
                  setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  setIsServicesDropdownOpen(true);
                  setIsTechnologiesDropdownOpen(false);
                }}
              >
                Services
              </Button>
            </li>

            <li className="py-2">
              <Button
                className={`${path === '/aboutus' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/aboutus"
                style={{
                  color: path === '/aboutus' ? '#fff' : 'inherit',
                  backgroundColor: 'inherit',
                }}
              >
                About
              </Button>
            </li>

            <li className="py-2">
              <Button
                className={`${path === '/process' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/process"
                style={{
                  color: path === '/process' ? 'dark-green-1' : 'inherit',
                  backgroundColor: 'inherit',
                }}
              >
                Process
              </Button>
            </li>

            <li className="py-2">
              <Button
                className={`${path === '/discuss-project' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/discuss-project"
                style={{
                  color: path === '/discuss-project' ? 'dark-green-1' : 'inherit',
                  backgroundColor: 'inherit',
                }}
              >
                Contact
              </Button>
            </li>

            <li className="mx-auto my-9">
              <Button
                className="mx-auto px-5 py-2 rounded-full border-2 border-dark-green hover:bg-dark-green border-dark-green-800 transition duration-200"
                style={{ backgroundColor: '#FCD34D', color: '#7f3cb9' }}
                type="link"
                href="/discuss-project"
              >
                +180 xxxx zz
              </Button>
            </li>
          </ul>
        </Fade>
      </Transition>
    </header>
  );
}
