/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';
import Logoicon from '../assets/images/logo192.png';
import Wave from 'react-wavify'

export default function Footer() {
  return (

    // <div className='App'>
    //   <div className='waveContainer'>
    //     <Wave className="wave" fill='#ddbff6'
    //         paused={false}
    //         options={{
    //           height: 60,
    //           amplitude: 20,
    //           speed: 0.2,
    //           points: 4
    //         }}
    //     />
    //     {/* 82C341 green */}
    //     {/* b87fed light2 purple */}
    //     <Wave className="wave" fill='#82C341'
    //         paused={false}
    //         options={{
    //           height: 90,
    //           amplitude: 25,
    //           speed: 0.3,
    //           points: 5
    //         }}
    //     />
    //     <Wave className="wave" fill='#8a2be2'
    //         paused={false}
    //         options={{
    //           height: 120,
    //           amplitude: 30,
    //           speed: 0.13,
    //           points: 6
    //         }}
    //     />

    //     <div className='footerContent'>
    //     <div className="flex flex-col sm:flex-row justify-center">
    //       <div className="w-1/3 flex-col ml-16 mr-8">
    //         <Button
    //           className=""
    //           type="link"
    //           href="/"
    //         >
    //           <div style={{ display: 'flex', alignItems: 'center' }}>
    //             <div className="navbar-logo mr-2">
    //               <img alt="logo" src={Logoicon} />
    //             </div>
    //             <p className="text-theme-white text-4xl" style={{ color: "#fff" }}>
    //               n
    //               <span className="text-theme-white">Excellence</span>
    //               Care
    //             </p>
    //           </div>
    //         </Button>
    //         <p className="w-full text-lg text-white font-light">
    //           Growing Your Business
    //           {' '}
    //           <br />
    //           Is Our Calling
    //         </p>
    //       </div>
    //       <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
    //         <h1 className="text-lg text-white pt-4 pb-2">
    //           Office
    //         </h1>
    //         <p className="text-lg text-white font-light">
    //           xyz@nexcellencecare.com.au
    //         </p>
    //         <p className="text-lg text-white font-light">
    //           23 Slim Place, <br />Constitution Hill, NSW - 2145
    //         </p>
    //       </div>
    //       <div className="w-1/3 ml-16 sm:ml-0 mt-0">
    //         <h1 className="text-lg text-white pt-4 pb-2">
    //           Social Media
    //         </h1>
    //         <div style={{ display: "flex" }}>
    //           <Button href="https://www.instagram.com/ten0nten?igsh=N25yZHRtYzRpaTY0" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
    //             <FaInstagram className="mr-5 text-theme-white w-10 h-10" style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)", borderRadius: "10px" }} />
    //           </Button>
    //           <Button href="https://www.linkedin.com/company/tenonten/" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
    //             <FaLinkedinIn className="mr-5 text-theme w-10 h-10" style={{ color: "#0072b1" }} />
    //           </Button>
    //           <Button href="" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
    //             <FaFacebook className="mr-5 text-theme w-10 h-10" style={{ color: "#1877F2" }} />
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex-col text-center mt-7">
    //       <p className="text-lg text-gray-400 font-light">
    //         Copyright 2021 - All rights reserved - n Excellence Care
    //       </p>
    //       <div className="flex-row">
    //         <p className="inline-block text-lg text-white font-light">
    //           Made with &#x2764; by&nbsp;
    //         </p>
    //         <Button href="" type="link" target="_blank" className="text-lg text-white font-light" isExternal>
    //           n Excellence Care
    //         </Button>
    //       </div>
    //     </div>

    //     </div>
    
    //   </div>
    // </div>




// old footer

    <div className=" border-t border-gray-200 pb-6 bg-dark-green" >
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/2 flex-col ml-16 xl:ml-8 xl:mr-8">
            <Button
              className=""
              type="link"
              href="/"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="navbar-logo mr-2">
                  <img alt="logo" src={Logoicon} />
                </div>
                <p className="text-theme-white text-1xl sm:text-4xl md:text-4xl xl:text-4xl " style={{ color: "#fff" }}>
                  n
                  <span className="text-theme-white">Excellence</span>
                  Care
                </p>
              </div>
            </Button>
            <p className="w-full text-lg text-white font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-white pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-white font-light">
              xyz@nexcellencecare.com.au
            </p>
            <p className="text-lg text-white font-light">
              {/* 23 Slim Place, */}Constitution Hill, NSW - 2145
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-white pt-4 pb-2">
              Social Media
            </h1>
            <div style={{ display: "flex" }}>
              <Button href="https://www.instagram.com/ten0nten?igsh=N25yZHRtYzRpaTY0" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
                <FaInstagram className="mr-5 text-theme-white w-10 h-10" style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)", borderRadius: "10px" }} />
              </Button>
              <Button href="https://www.linkedin.com/company/tenonten/" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
                <FaLinkedinIn className="mr-5 text-theme w-10 h-10" style={{ color: "white" }} />
              </Button>
              <Button href="" type="link" target="_blank" className="flex text-lg text-white font-light hover:underline" isExternal>
                <FaFacebook className="mr-5 text-theme w-10 h-10" style={{ color: "white" }} />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - n Excellence Care
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-white font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="" type="link" target="_blank" className="text-lg text-white font-light" isExternal>
              n Excellence Care
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
