import React from 'react';
import './AdditionalServices.css';

const AdditionalServices = () => {
    const customPCBuilds = [
        {
            title: 'Gaming PCs',
            subtitle: 'Entry / Mid / High-End',
            icon: '🎮',
            description: 'Custom gaming rigs for all budgets'
        },
        {
            title: 'Office & Business Workstations',
            icon: '💼',
            description: 'Professional productivity machines'
        },
        {
            title: 'Graphic Designing & Video Editing PCs',
            icon: '🎨',
            description: 'High-performance creative workstations'
        },
        {
            title: 'Online Classes & Home Use PCs',
            icon: '🏠',
            description: 'Reliable systems for everyday computing'
        },
        {
            title: 'Programming & Development Machines',
            icon: '💻',
            description: 'Optimized for coding and development'
        }
    ];

    const softwareDevelopment = [
        {
            title: 'Custom Software Applications',
            icon: '⚙️',
            description: 'Tailored solutions for your business'
        },
        {
            title: 'Billing & Inventory Software',
            icon: '📊',
            description: 'Streamline your business operations'
        },
        {
            title: 'Desktop Application Development',
            icon: '🖥️',
            description: 'Windows and cross-platform apps'
        },
        {
            title: 'Automation Tools & API Development',
            icon: '🔄',
            description: 'Automate workflows and integrate systems'
        }
    ];

    const cctvServices = [
        {
            title: 'IP Cameras',
            icon: '📹',
            description: 'High-resolution network cameras'
        },
        {
            title: 'Analog Cameras',
            icon: '📷',
            description: 'Traditional CCTV solutions'
        },
        {
            title: 'Dome & Bullet Cameras',
            icon: '🔘',
            description: 'Indoor and outdoor options'
        },
        {
            title: 'PTZ Cameras',
            icon: '🎥',
            description: 'Pan-Tilt-Zoom surveillance'
        },
        {
            title: 'Wi-Fi / Smart Cameras',
            icon: '📡',
            description: 'Wireless and IoT-enabled'
        },
        {
            title: 'Indoor & Outdoor Cameras',
            icon: '🏢',
            description: 'Weather-resistant options'
        }
    ];

    const cctvMaintenance = [
        {
            title: 'DVR Backup Checks',
            icon: '💾',
            description: 'Regular backup verification'
        },
        {
            title: 'Software & Firmware Updates',
            icon: '🔄',
            description: 'Keep systems up-to-date'
        },
        {
            title: 'Monthly / Quarterly Maintenance',
            icon: '📅',
            description: 'Scheduled service visits'
        },
        {
            title: 'Fault Finding & Troubleshooting',
            icon: '🔍',
            description: 'Quick issue resolution'
        },
        {
            title: 'Cable & Connector Replacement',
            icon: '🔌',
            description: 'Hardware repairs and upgrades'
        },
        {
            title: 'Network Configuration for Live Monitoring',
            icon: '🌐',
            description: 'Remote viewing setup'
        }
    ];

    const webDevelopment = [
        {
            title: 'Business Websites',
            icon: '🌐',
            description: 'Professional corporate websites'
        },
        {
            title: 'Personal Sites / Web Apps',
            icon: '👤',
            description: 'Custom web applications'
        },
        {
            title: 'Responsive & Mobile-Friendly Design',
            icon: '📱',
            description: 'Works on all devices'
        }
    ];

    const technologies = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB'
    ];

    const pcServices = [
        {
            title: 'Complete PC Assembly',
            icon: '🔧'
        },
        {
            title: 'System Upgrade (RAM / SSD / GPU)',
            icon: '⬆️'
        },
        {
            title: 'Software Installation & OS Setup',
            icon: '💿'
        },
        {
            title: 'Troubleshooting & Repairs',
            icon: '🔨'
        },
        {
            title: 'Annual Maintenance (AMC)',
            icon: '📋'
        }
    ];

    return (
        <section className="additional-services section" id="additional-services">
            <div className="container">
                {/* Custom PC Builds */}
                <div className="service-category">
                    <h2 className="section-title text-gradient">CUSTOM ASSEMBLED COMPUTERS</h2>
                    <p className="section-subtitle">Build as per Your Need • High Performance & Better Cooling • Easy Upgrades Anytime • Budget-Friendly Options • Genuine Parts with Warranty • Professional Assembly</p>

                    <h3 className="category-title">CUSTOM PC BUILDS FOR</h3>
                    <div className="grid grid-3">
                        {customPCBuilds.map((item, index) => (
                            <div key={index} className="service-card glass-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{item.icon}</div>
                                <h4 className="service-title">{item.title}</h4>
                                {item.subtitle && <p className="service-subtitle">{item.subtitle}</p>}
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="category-title">SERVICES WE OFFER</h3>
                    <div className="services-list">
                        {pcServices.map((item, index) => (
                            <div key={index} className="service-list-item">
                                <span className="list-icon">{item.icon}</span>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Software Development */}
                <div className="service-category">
                    <h2 className="section-title text-gradient">OUR SOFTWARE DEVELOPMENT SERVICES</h2>
                    <p className="section-subtitle">DEVELOPMENT • MAINTENANCE • SUPPORT</p>

                    <div className="grid grid-2">
                        {softwareDevelopment.map((item, index) => (
                            <div key={index} className="service-card glass-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{item.icon}</div>
                                <h4 className="service-title">{item.title}</h4>
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CCTV Services */}
                <div className="service-category">
                    <h2 className="section-title text-gradient">OUR CCTV SERVICES</h2>
                    <p className="section-subtitle">SECURITY • SURVEILLANCE • SAFETY</p>

                    <h3 className="category-title">TYPES OF CAMERAS WE PROVIDE</h3>
                    <div className="grid grid-3">
                        {cctvServices.map((item, index) => (
                            <div key={index} className="service-card glass-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{item.icon}</div>
                                <h4 className="service-title">{item.title}</h4>
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="category-title">MAINTENANCE & SUPPORT</h3>
                    <div className="grid grid-3">
                        {cctvMaintenance.map((item, index) => (
                            <div key={index} className="service-card glass-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{item.icon}</div>
                                <h4 className="service-title">{item.title}</h4>
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Web Development */}
                <div className="service-category">
                    <h2 className="section-title text-gradient">OUR WEB DEVELOPMENT SERVICES</h2>

                    <div className="grid grid-3">
                        {webDevelopment.map((item, index) => (
                            <div key={index} className="service-card glass-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">{item.icon}</div>
                                <h4 className="service-title">{item.title}</h4>
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="technologies-section">
                        <h3 className="category-title">TECHNOLOGIES WE WORK WITH</h3>
                        <div className="tech-tags">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;
