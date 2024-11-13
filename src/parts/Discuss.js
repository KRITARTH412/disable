/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Discuss() {
  const isLargeScreen = useMediaQuery({ minWidth: 200 });
  return (
    <Fade bottom  >
      <section className={`flex container mx-auto justify-center ${isLargeScreen ? 'large-screen' : '#ecd3f0'}`} >
        <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-dark-green e text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss" >
          <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
            <h1 className="w-2/3 text-5xl sm:text-6xl leading-tight font-semibold">
               Have a query in mind?
            </h1>
            <Button href="/discuss-project" type="link" className="flex bg-white bg-yellow-300 text-blue-800 text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-dark-green shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105">
              Lets Discuss!
            </Button>
          </div>
          <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">Let's discuss it and find a solution together!"!</p>
        </div>
      </section>
    </Fade>
  );
}
