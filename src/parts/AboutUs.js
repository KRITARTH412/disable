import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { useMediaQuery } from 'react-responsive';
import Header from 'parts/Header';
import Discuss from 'parts/Discuss';
import './styles.css';

const AboutUs = (props) => {
    const isLargeScreen = useMediaQuery({ minWidth: 220 });
    const marginTop = isLargeScreen ? '100px' : '0';
    const steps = [
        {
            icon: 'fa-solid fa-hand-holding-heart',
            title: 'Dignity',
            descr: 'We ensure that every person is treated with the utmost respect, empowering them to live with pride and self-worth.',
        },
        {
            icon: 'fa-solid fa-hands-helping',
            title: 'Respect',
            descr: 'We foster a culture where each individual’s opinions and choices are acknowledged and honored.',
        },
        {
            icon: 'fa-solid fa-check-circle',
            title: 'Reliability',
            descr: 'Our commitment is to be consistently dependable, providing services that clients and families can trust without hesitation.',
        },
        {
            icon: 'fa-solid fa-users',
            title: 'Inclusion',
            descr: 'We cultivate an environment where everyone, regardless of their abilities, is welcomed and valued as an essential part of our community.',
        },
        {
            icon: 'fa-solid fa-user-friends',
            title: 'Engagement',
            descr: 'We prioritize active participation, ensuring that clients have a say in shaping the care they receive.',
        },
        {
            icon: 'fa-solid fa-globe',
            title: 'Diversity',
            descr: 'We embrace and reflect the variety of cultures and experiences in our community, tailoring our services to meet diverse needs.',
        },
    ];


    return (
        <>
            <Header {...props} />
            <div className="animated-background">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
            </div>

            {/* Animated Background */}

            <div className="font-sans relative z-10">
                <header
                    className="relative bg-cover bg-center mt-20 h-64 md:h-80 lg:h-96"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://plus.unsplash.com/premium_photo-1681492064765-ea359932d2d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGRpc2FiaWxpdHl8ZW58MHx8MHx8fDA%3D")',
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <div className="title px-4">
                            <h1 className="uppercase m-0 text-3xl sm:text-5xl md:text-6xl">About Us</h1>
                            {/* <p className="text-lg sm:text-xl mt-2">Scroll for more!</p> */}
                        </div>
                    </div>
                    <header className="relative bg-cover bg-center mt-20 h-64 md:h-80 lg:h-96" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("your-image-url")' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                            <div className="title px-4">
                                <h1 className="uppercase m-0 text-3xl sm:text-5xl md:text-6xl">About Us</h1>
                                {/* <p className="text-lg sm:text-xl mt-2">Scroll for more!</p> */}
                            </div>
                        </div>
                        {/* SVG Wave Animation */}
                        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
                            <path fill="#fff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,245.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </header>

                </header>

                <Zoom duration={2000}>
                    <section style={{ marginTop: marginTop }}>
                        <div className={`flex flex-col mt-2 mb-12 text-center mx-8 sm:mx-16 xl:mx-28`}>
                            <h1 className="text-3xl text-theme-blue font-bold mb-3">
                                About Us
                            </h1>

                            {/* Card Container */}
                            <div className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-8 card-gradient-hover">
                                <div className="p-4 md:w-3/5">
                                    <p className="font-light text-sm md:text-base text-white text-justify mb-2 leading-relaxed hover:text-white" style={{ fontWeight: "bold" }}>
                                        At n Excellence Care, we are dedicated to providing exceptional care and support to individuals with special needs. With over 25 years of combined experience, our founders have cultivated a deep understanding of the unique challenges faced by our participants. Our core values of Respect, Dignity, Empathy, Compassion,  Reliability, and Inclusion  guide every aspect of our services.

                                        We believe in treating every individual with the utmost respect and dignity, ensuring that their voices are heard and their needs are met. Our empathetic approach allows us to connect deeply with our participants, fostering a compassionate environment where everyone feels valued and understood. We are committed to creating an inclusive community where everyone, regardless of their abilities, can thrive and participate fully.
                                    </p>
                                </div>
                                <div className="relative md:w-2/5 h-48 md:h-auto">
                                    <img
                                        src="assets/images/para.png"
                                        alt="About Us"
                                        className="object-cover w-full h-full filter blur-md"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <h3 className="text-white text-lg md:text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
                                            Empowering Individuals with Care
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Zoom>
            </div>

            <section className={`mt-2 ${isLargeScreen ? 'px-10' : 'px-8'}`}>
                <div className="flex flex-col items-center justify-center">
                    {/* <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8">Our Purpose</h1> */}

                    {/* Parent Card for Vision and Mission */}
                    {/* <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-9/12 p-6 border border-gray-300 rounded-lg shadow-lg bg-gray" style={{borderRadius:"10px"}}> */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 xl:mr-16 xl:ml-16">
                        <div
                            className="relative flex flex-col items-center justify-center p-2 border-r border-gray-300 md:border-r-2 transition duration-300 ease-in-out group card-hover"
                            style={{
                                background: '#7f3cb9',
                                filter: 'blur(0px)',
                                color: "#fff",
                                borderRadius: "10px",
                            }}
                        >
                             <Zoom duration={2000}>
                                <div className="relative z-10 h-60vh" >
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4 mx-10 mt-4 text-center">Our Vision</h2>
                                    <p className="text-center text-base md:text-xl mx-7">
                                        "To be the leading catalyst for a society where individuals with special needs are empowered to live with freedom, dignity, and respect, achieving their fullest potential through innovative, inclusive, and accountable support services."
                                    </p>
                                </div>
                            </Zoom>
                        </div>

                            <div
                                className="relative flex flex-col items-center justify-center p-2 transition duration-300 ease-in-out group card-hover "
                                style={{
                                    background: '#7f3cb9',
                                    filter: 'blur(0px)',
                                    color: "#fff",
                                    borderRadius: "10px"
                                }}
                            >
                              <Zoom duration={2000}>
                                <div className="relative z-10 h-60vh"> 
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4 mx-10 mt-4 text-center">Our Mission</h2>
                                    <p className="text-center text-base md:text-xl mx-10">
                                        "Our mission is to deliver individualized, high-quality services that enable individuals with disabilities to lead independent and fulfilling lives. We are dedicated to fostering a culture of respect, empowerment, diversity, and inclusion, ensuring that every participant is supported in their journey towards achieving their personal goals and aspirations through effective communication and accountable practices."
                                    </p>
                                </div>
                                </Zoom>
                            </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
            <div className="circle-cards">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8" style={{ fontSize: "50px" }}>Core Values </h1>
                <ol>
                    {steps.map((step, index) => (
                        <>
                             <Zoom duration={2000}>
                                <li key={index}>
                                    <div className="icon"><i className={`fa-solid ${step.icon}`}></i></div>
                                    <div className="title">{step.title}</div>
                                    <div className="descr">{step.descr}</div>
                                </li>
                            </Zoom>
                        </>
                    ))}
                </ol>
            </div>

            <Discuss {...props} />
            <Footer />
        </>
    );
};

export default AboutUs;
