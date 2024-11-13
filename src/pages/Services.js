import React from 'react';
import Button from 'elements/Button';
import Header from 'parts/Header';
import data from '../json/landingPage.json';
import Footer from 'parts/Footer';
import { useLocation } from 'react-router-dom';
// Import the CSS file for the animations
import './styles.css'

export default function Service() {
  const location = useLocation();

  return (
    <>
      <Header location={location} />
      <div className="bg-gray-50">
        <div className="container mx-auto pt-20 pb-28">
          <h1 className="text-5xl text-theme-blue text-center font-bold mt-10">Our Service</h1>
          <p className="font-black text-lg text-gray-400 text-center mb-12" style={{color:"black"}}>
            We are ready to scale up your business with our great service.
          </p>

          <div className="grid gap-12 px-10 xl:px-40 2xl:px-40 md:px-20 lg:px-20">
            {Array.isArray(data.service) &&
              data.service.map((item, index) => (
                <div
                  key={item.id}
                  className={`card-animation ${index % 2 === 0 ? 'fold-left' : 'fold-right'}`}
                  style={{ animationDelay: `${index * 0.4}s` }} // Stagger the animations
                >
                  <Button type="link" href={`/categories/${item.id}`} className="w-full">
                    <div
                      className={`bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } overflow-hidden`}
                    >
                      
                      {/* Text Content */}
                      {/* Image */}
                      <img
                        src={item.imageUrl}
                        alt="Service"
                        className="w-full md:w-1/3 h-64 object-cover"
                      />
                       <div
                        className="p-6 flex text-white flex-col justify-center items-center md:w-2/3 bg-dark-green transition-all duration-500 ease-in-out hover:bg-light-greenish"
                      >
                        <h2 className="text-white text-center text-2xl font-bold py-3">
                          {item.title}
                        </h2>
                        <p className="text-white text-center mx-4">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </Button>
                </div>
              ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
