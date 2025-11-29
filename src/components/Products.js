import React from 'react';
import './Products.css';

const Products = () => {
    const products = [
        {
            name: 'Computer',
            icon: '💻',
            description: 'Desktop PCs & Workstations'
        },
        {
            name: 'Laptop',
            icon: '💼',
            description: 'Business & Personal Laptops'
        },
        {
            name: 'Network',
            icon: '🌐',
            description: 'Routers, Switches & Access Points'
        },
        {
            name: 'Software',
            icon: '📀',
            description: 'Licensed Software Solutions'
        },
        {
            name: 'AMC',
            icon: '🔧',
            description: 'Annual Maintenance Contracts'
        },
        {
            name: 'Printer',
            icon: '🖨️',
            description: 'Printers & Scanners'
        }
    ];

    return (
        <section className="products section" id="products">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Our Products & Services</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Quality products and comprehensive support for all your digital needs
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="product-card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-icon-wrapper">
                                <div className="product-icon">{product.icon}</div>
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className="product-overlay">
                                <button className="btn-learn-more">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
