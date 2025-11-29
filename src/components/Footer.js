import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">
                            <span className="text-gradient">NRS</span> Digital Solutions
                        </h3>
                        <p>Your One Stop Hub for Digital Excellence</p>
                        <div className="footer-categories">
                            <span>SALES</span> | <span>SERVICES</span> | <span>SUPPORT</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#why-choose-us">Why Choose Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Our Services</h4>
                        <ul>
                            <li>Network Installation</li>
                            <li>Network Maintenance</li>
                            <li>CCTV Installation</li>
                            <li>Computer & Laptop Sales</li>
                            <li>AMC Services</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>📞 <a href="tel:8012215966">80122 15966</a></li>
                            <li>📞 <a href="tel:7639425104">76394 25104</a></li>
                            <li>📍 Vayalur Road, Somarasampettai</li>
                            <li>📍 Trichy - 620012</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 NRS Digital Solutions. All rights reserved.</p>
                    <p>Designed with ❤️ for Digital Excellence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
