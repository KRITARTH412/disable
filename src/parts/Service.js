/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Button from 'elements/Button';

export default function Service({ data }) {
  // Limit the displayed items to 6
  const displayedItems = data.slice(0, 6);

  return (
    <div>
      <div className="container mx-auto pt-20 pb-28">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold md:text-4xl sm:text-3xl xs:text-2xl">
            Our Service
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 md:text-base sm:text-sm xs:text-xs">
            We are ready to scale up your business with our great service.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {displayedItems.map((item, index) => (
            <Zoom duration={2000}>
              <Button type="link" href={`/categories/${item.id}`}>
                <div>
                  <div
                    className="bg-dark-green group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105 hover:bg-light-greenish"
                    style={{ height: '350px', width: '100%' }}
                  >
                    <img
                      src={item.imageUrl}
                      alt="Service"
                      className="w-full h-3/4 object-cover rounded-t-2xl"
                    />
                    <h2
                      className="text-theme-white text-center py-4 lg:py-5 rounded-b-3xl font-extrabold lg:text-2xl md:text-xl sm:text-lg xs:text-xs text-white"
                    >
                      {item.title}
                    </h2>



                    {/* <h5
                      className="text-theme-white text-center mt-2 sm:mt-1 xl:mt-0 text-xs sm:text-sm lg:text-base md:text-xs xs:text-xxs"
                      style={{
                        color: '#fff',
                        fontSize: '0.875rem', // Default size
                        '@media (min-width: 800px)': {
                          fontSize: '0.75rem', // Decrease size slightly for screens larger than 800px
                        },
                      }}
                    >
                      {item.minidesc}
                    </h5> */}

                  </div>
                </div>
              </Button>
            </Zoom>
          ))}
        </div>

        {data.length > 6 && (
          <Fade bottom>
            <div className="flex justify-center mt-14">
              <Button
                href="/services"
                type="link"
                className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-dark-green px-5 border border-dark-green items-center rounded-full justify-center transition duration-300 hover:bg-dark-green hover:text-white"
              >
                <p className="font-normal py-3 lg:text-lg xl:text-base md:text-sm xs:text-xs" style={{ color: "" }}>
                  See More
                </p>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <svg className="w-4 h-4 -ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}
