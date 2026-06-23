import { Container, Row, Col } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const achievements = [
    {
        title: "Unity Certified Associate",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/associate.png`
    },

    {
        title: "Unity Essentials",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/essentials.png`
    },

    {
        title: "Unity Junior Programmer",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/junior-programmer.png`
    }
];

const certificates = [

    {
        title: "Associate Game Developer",
        image: `${import.meta.env.BASE_URL}images/certificates/AssociateGameDeveloper.jpeg`
    },

    {
        title: "AR Application Development Fundamentals",
        image: `${import.meta.env.BASE_URL}images/certificates/ar fundamentals.jpeg`
    },

    {
        title: "Unity × Google Play Developer Program",
        image: `${import.meta.env.BASE_URL}images/certificates/GoogleplayXunity.jpeg`
    },

    {
        title: "Unity Junior     Programmer",
        image: `${import.meta.env.BASE_URL}images/certificates/junior-programmer.jpeg`
    },

    {
        title: "Unity Essentials",
        image: `${import.meta.env.BASE_URL}images/certificates/unityessentials.jpeg`
    }

];

function Achievement() {

    return (

        <section id="achievements">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    CERTIFICATIONS & ACHIEVEMENTS

                </h2>

                {/* UNITY BADGES */}

                <Row>

                    {achievements.map((badge, index) => (

                        <RevealOnScroll
                            as={Col}
                            lg={4}
                            md={6}
                            key={index}
                            className="mb-4"
                            delay={index * 100}
                        >

                            <div className="achievement-card">

                                <div className="achievement-image-wrapper">

                                    <img
                                        src={badge.image}
                                        alt={badge.title}
                                        className="achievement-image"
                                    />

                                </div>

                                <h5>
                                    {badge.title}
                                </h5>

                                <p>
                                    Issued by {badge.issuer}
                                </p>

                            </div>

                        </RevealOnScroll>

                    ))}

                </Row>

                {/* CERTIFICATE CAROUSEL */}

                <RevealOnScroll>

                    <div className="certificate-carousel">

                        <h3 className="text-center mb-5">

                            Additional Certifications

                        </h3>

                        <Swiper

                            modules={[Autoplay]}

                            spaceBetween={30}

                            slidesPerView={3}

                            loop={true}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },

                                768: {
                                    slidesPerView: 2
                                },

                                1200: {
                                    slidesPerView: 3
                                }
                            }}

                        >

                            {certificates.map((cert, index) => (

                                <SwiperSlide key={index}>

                                    <div className="certificate-slide">

                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="certificate-image"
                                        />

                                        <h5>
                                            {cert.title}
                                        </h5>

                                    </div>

                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>

                </RevealOnScroll>

            </Container>

        </section>

    );
}

export default Achievement;