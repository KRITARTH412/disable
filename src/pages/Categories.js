/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import './Categories.css'

import Data from 'json/landingPage.json';

export default class ProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const detailData = Data.service.filter((item) => item.id === `${this.props.match.params.id}`);
        const detailDescription = detailData[0]?.detaildescription.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
        return (
            <>
                <Header {...this.props} />

                {/* Background Section */}
                <div className="bg-gradient-to-r from-yellowish via-yellowish to-yellowish py-24">
                    {/* Card Section */}
                    <div className="container mx-auto px-4 py-8 text-white">
                        <div className="bg-dark-green shadow-lg rounded-lg relative">
                            <div className="flex flex-col lg:flex-row items-start">
                                {/* Image Section with Background Designs */}
                                <div className="lg:w-1/2 w-full lg:py-10 px-10 mt-10 relative bg-design">
                                    <div className="circle"></div>
                                    <div className="triangle"></div>
                                    <div className="square"></div>
                                    <div className="circle-2"></div>
                                    <div className="circle-3"></div>
                                    {/* Image */}
                                    <img
                                        src={`../${detailData[0].imageUrl}`}
                                        alt="Project"
                                        className="w-full h-full object-cover rounded-lg relative z-10"
                                    />
                                </div>

                                {/* Title and Mini Description Section */}
                                <div className="lg:w-1/2 w-full p-6 lg:py-36  flex flex-col justify-center">
                                    <Zoom duration={2000}>
                                        <h2 className="text-3xl lg:text-4xl text-theme-white font-bold mb-4">
                                            {detailData[0].title}
                                        </h2>
                                    </Zoom>
                                    <Zoom duration={2000}>
                                        <h3 className="text-xl lg:text-2xl text-white-700 font-semibold mb-4">
                                            {detailData[0].minidesc}
                                        </h3>
                                    </Zoom>
                                </div>
                            </div>

                            {/* Details Section Below Image */}
                            <div className="p-6 lg:p-8">
                                <Zoom duration={2000}>
                                    <p className="text-lg text-white-600 mb-6">
                                        {detailDescription}
                                    </p>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>

                <Discuss {...this.props} />
                <Footer />
            </>
        );
    }
}
