import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
    {
        title: "AI Automation",
        description: "Streamline workflows with intelligent agents and LLM-powered processing.",
        icon: "🤖"
    },
    {
        title: "Data Intelligence",
        description: "Transform raw data into actionable insights with RAG and vector search.",
        icon: "📊"
    },
    {
        title: "Cloud Native",
        description: "Scale effortlessly with auto-scaling infrastructure and 99.9% uptime.",
        icon: "☁️"
    },
    {
        title: "Modern Web",
        description: "High-performance applications built with React, Next.js and Framer Motion.",
        icon: "🌐"
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="section-container">
                <motion.div 
                    className="section-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">CORE CAPABILITIES</span>
                    <h2 className="section-title">Engineered for Performance</h2>
                </motion.div>
                
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="feature-card glass-effect"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                            <div className="feature-border"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
