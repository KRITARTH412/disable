/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Header from 'parts/Header';
import data from '../json/projectdetail.json';
import Footer from 'parts/Footer';
import { useLocation } from 'react-router-dom';
import './styles.css'

export default function Process() {
  const location = useLocation();

  return (
    <>
      <Header location={location} />
      <div className="how-to-work-section mt-24">
        <h1 style={{ fontSize: "48px" }}>How to Work with Us</h1>
        <ol>
          {data.howtowork.map((step, index) => (
             <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-110">
            <Zoom duration={1000 * index}>
              <li key={index}>
                <div className="icon"><i className="fa-solid fa-check-circle"></i></div>
                <div className="title">{step.title}</div>
                <div className="descr">{step.description}</div>
              </li>
            </Zoom>
            </div>
          ))}
        </ol>
      </div>
      <Footer />
    </>
  );
}
