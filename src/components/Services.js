import React from 'react';
import './Services.css';

const Services = () => {
    const networkSetup = [
        {
            title: 'New Network Installation',
            icon: '🌐',
            description: 'Complete network infrastructure setup'
        },
        {
            title: 'LAN/WAN Setup',
            icon: '🔗',
            description: 'Local and wide area network configuration'
        },
        {
            title: 'Wi-Fi Router Installation & Configuration',
            icon: '📡',
            description: 'Wireless network setup and optimization'
        },
        {
            title: 'Enterprise Network Solutions',
            icon: '🏢',
            description: 'Scalable business network infrastructure'
        },
        {
            title: 'Server Setup',
            icon: '🖥️',
            description: 'File Server / Domain Server configuration'
        },
        {
            title: 'Switch & Router Configuration',
            icon: '⚙️',
            description: 'Network device setup and management'
        },
        {
            title: 'Structured Cabling',
            icon: '🔌',
            description: 'CAT6 / Fiber optic cable installation'
        },
        {
            title: 'VPN Setup',
            icon: '🔒',
            description: 'Secure remote access configuration'
        }
    ];

    const networkMaintenance = [
        {
            title: 'Wi-Fi Range Improvement',
            icon: '📶',
            description: 'Optimize wireless coverage'
        },
        {
            title: 'Slow Network Issue Fixing',
            icon: '⚡',
            description: 'Performance troubleshooting'
        },
        {
            title: 'Upgrading Network Devices',
            icon: '🔄',
            description: 'Hardware modernization'
        },
        {
            title: 'Monitoring & Troubleshooting',
            icon: '🔍',
            description: 'Proactive network management'
        },
        {
            title: 'Regular Performance Checkups',
            icon: '✅',
            description: 'Scheduled maintenance'
        },
        {
            title: 'Backup & Data Security',
            icon: '💾',
            description: 'Data protection solutions'
        },
        {
            title: 'AMC (Annual Maintenance Contract)',
            icon: '📋',
            description: 'Comprehensive support plans'
        },
        {
            title: 'Security Patches',
            icon: '🛡️',
            description: 'System security updates'
        },
        {
            title: 'Firmware Updates',
            icon: '🔧',
            description: 'Device software maintenance'
        }
    ];

    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">
                        Networking • Solutions • Maintenance
                    </h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Comprehensive IT infrastructure services for your business
                    </p>
                </div>

                {/* Network Setup Services */}
                <div className="service-category">
                    <h3 className="category-title text-gradient">
                        OUR NETWORK SETUP SERVICES
                    </h3>
                    <div className="grid grid-4">
                        {networkSetup.map((service, index) => (
                            <div
                                key={index}
                                className="service-card glass-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Network Maintenance */}
                <div className="service-category">
                    <h3 className="category-title text-gradient">
                        NETWORK MAINTENANCE & SUPPORT
                    </h3>
                    <div className="grid grid-3">
                        {networkMaintenance.map((service, index) => (
                            <div
                                key={index}
                                className="service-card glass-card animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* We Provide Solutions For */}
                <div className="solutions-section">
                    <h3 className="category-title text-gradient">WE PROVIDE SOLUTIONS FOR</h3>
                    <div className="solutions-grid">
                        <div className="solution-item">🏠 Homes & Apartments</div>
                        <div className="solution-item">🏪 Shops & Small Businesses</div>
                        <div className="solution-item">🏢 Offices & Companies</div>
                        <div className="solution-item">🎓 Schools & Colleges</div>
                        <div className="solution-item">🏭 Warehouses & Godowns</div>
                        <div className="solution-item">🏥 Hospitals & Hotels</div>
                        <div className="solution-item">🏗️ Industrial Locations</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
