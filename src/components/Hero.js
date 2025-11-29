import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container hero-content">
                <div className="hero-logo animate-fadeIn">
                    <img src={logo} alt="NRS Digital Solutions" />
                </div>

                <h1 className="hero-title animate-fadeInUp">
                    <span className="brand-name">NRS</span>
                    <span className="brand-subtitle">Digital Solutions</span>
                </h1>

                <p className="hero-tagline animate-fadeInUp">
                    Your One Stop Hub for Digital Excellence
                </p>

                <div className="hero-categories animate-fadeInUp">
                    <span className="category">SALES</span>
                    <span className="divider">|</span>
                    <span className="category">SERVICES</span>
                    <span className="divider">|</span>
                    <span className="category">SUPPORT</span>
                </div>

                <div className="hero-cta animate-fadeInUp">
                    <a href="#contact" className="btn btn-primary">Get Free Quote</a>
                    <a href="#services" className="btn btn-outline">Our Services</a>
                </div>

                <div className="hero-contact animate-fadeIn">
                    <div className="contact-item">
                        <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div>
                            <a href="tel:8012215966">80122 15966</a>
                            <span> | </span>
                            <a href="tel:7639425104">76394 25104</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator animate-pulse">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
};

export default Hero;
