import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Contact Us</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Get in touch with us for all your digital solution needs
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="info-card animate-slideInLeft">
                            <div className="info-icon">📞</div>
                            <h3>Call Us</h3>
                            <p>
                                <a href="tel:8012215966">80122 15966</a>
                            </p>
                            <p>
                                <a href="tel:7639425104">76394 25104</a>
                            </p>
                        </div>

                        <div className="info-card animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                            <div className="info-icon">📍</div>
                            <h3>Visit Us</h3>
                            <p>Vayalur Road, Near UCO Bank</p>
                            <p>Somarasampettai, Trichy - 620012</p>
                        </div>

                        <div className="info-card animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                            <div className="info-icon">🏢</div>
                            <h3>Branch Office</h3>
                            <p>Singaravel Nagar</p>
                            <p>Samayapuram, Trichy - 621112</p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="map-container animate-slideInRight">
                        <div className="map-placeholder">
                            <iframe
                                title="NRS Digital Solutions Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiA3OMKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="map-overlay">
                            <p>📍 Vayalur Road, Somarasampettai, Trichy</p>
                        </div>
                    </div>
                </div>

                {/* Quick Contact Form */}
                <div className="contact-form-wrapper animate-fadeInUp">
                    <h3>Send us a Message</h3>
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <select required>
                                <option value="">Select Service</option>
                                <option value="network">Network Setup</option>
                                <option value="maintenance">Maintenance & Support</option>
                                <option value="computer">Computer/Laptop</option>
                                <option value="cctv">CCTV Installation</option>
                                <option value="software">Software Solutions</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
