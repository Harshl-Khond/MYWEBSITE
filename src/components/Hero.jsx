import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <motion.div 
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge-dot"></span>
                    Next-Gen AI Solutions
                </motion.div>
                
                <motion.h1 
                    className="hero-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Building the Future of <br />
                    <span className="text-gradient">Intelligent Systems</span>
                </motion.h1>
                
                <motion.p 
                    className="hero-subtext"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Flowgenix empowers startups and enterprises with state-of-the-art AI automation, 
                    scalable data ecosystems, and premium digital experiences.
                </motion.p>
                
                <motion.div 
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/contact" className="btn-primary-glow">
                        Launch Project
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </Link>
                    <Link to="/about" className="btn-secondary-link">
                        Explore Our Tech
                    </Link>
                </motion.div>

                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="visual-glow"></div>
                    <div className="visual-card-container">
                        <motion.div 
                            className="visual-card glass-effect"
                            whileHover={{ rotateY: 15, rotateX: 5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="card-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="card-content">
                                <div className="content-line long"></div>
                                <div className="content-line med"></div>
                                <div className="content-line short"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
