import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Professional & Trained Technicians',
            icon: '👨‍💼',
            description: 'Certified experts with years of experience'
        },
        {
            title: 'Fast Installation',
            icon: '⚡',
            description: 'Quick and efficient service delivery'
        },
        {
            title: 'High-Quality Products',
            icon: '⭐',
            description: 'Premium brands and reliable equipment'
        },
        {
            title: 'Affordable Rates',
            icon: '💰',
            description: 'Competitive pricing without compromising quality'
        },
        {
            title: 'On-Site Service',
            icon: '🚗',
            description: 'We come to your location'
        },
        {
            title: 'Free Site Visit & Quote',
            icon: '📋',
            description: 'No obligation consultation and estimates'
        },
        {
            title: 'Customer Support',
            icon: '🤝',
            description: '24/7 assistance and maintenance'
        }
    ];

    return (
        <section className="why-choose-us section" id="why-choose-us">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">WHY CHOOSE US?</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Your trusted partner for all digital solutions
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon-bg">
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                            <div className="feature-check">✓</div>
                        </div>
                    ))}
                </div>

                <div className="cta-banner">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today for a free consultation and quote!</p>
                    <a href="#contact" className="btn btn-primary">Get Free Quote</a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
