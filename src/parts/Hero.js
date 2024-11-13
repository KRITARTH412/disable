/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Button from 'elements/Button';
import BuildWebsite1 from 'assets/images/LandingPage.jpg';
import BuildWebsite2 from 'assets/images/LandingPage2.jpg';
import BuildWebsite3 from 'assets/images/Landing3.jpg';
import BuildWebsite4 from 'assets/images/Landing4.jpg';
import './navbar.css';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentSlide, setCurrentSlide] = useState(0);

  const phrases = [
    "Empower Every Ability",
    "Empowering is Need",
  ];

  const slides = [BuildWebsite1, BuildWebsite3, BuildWebsite4];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before starting to delete
        setTypingSpeed(50);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="hero h-screen w-full overflow-hidden ">
      <div className="absolute md:top-24 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute top-24 sm:top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-80' : 'opacity-0'}`}
          />
        ))}
      </div>

      <Zoom duration={2000}>
        <div className="relative z-10 flex flex-col h-full text-center items-center justify-center px-5 sm:px-20 md:px-32 lg:px-40 top-32" style={{color:"#fff"}}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 text-[#6e9d32]">
            {text}
            <span className="blinking-cursor">|</span>
          </h1>

          <p className="font-light text-lg sm:text-xl leading-relaxed mb-16 text-center">
            Empowering lives with respect, dignity, and compassion – your trusted partner in exceptional care and support.
          </p>

          <Button href="/discuss-project" type="link" className="flex w-full max-w-md items-center px-8 py-5 text-xl rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200 mx-auto" style={{ backgroundColor: "#7f3cb9", border: "4c857f", alignItems: "center", justifyContent: "center" }}>
            Enquire Now
            <svg className="ml-2 w-6 h-6 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Zoom>
    </section>
  );
}
