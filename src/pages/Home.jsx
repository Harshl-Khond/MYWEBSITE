import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import './Home.css';

const Home = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
        
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="home-page">
            <Hero />

            {/* ===== TRUSTED BY ===== */}
            <section className="home-trusted">
                <div className="home-container">
                    <motion.p 
                        className="trusted-label"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                    >
                        TRUSTED BY LEADING ORGANIZATIONS
                    </motion.p>
                    <motion.div 
                        className="trusted-logos"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span>StartupIndia</span>
                        <span>HealthTech Co.</span>
                        <span>EduNexus</span>
                        <span>FinBridge</span>
                        <span>CloudNine</span>
                    </motion.div>
                </div>
            </section>

            <Features />

            {/* ===== PROCESS SECTION ===== */}
            <section className="home-process">
                <div className="home-container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-badge">OUR WORKFLOW</span>
                        <h2 className="section-title">How We Build Excellence</h2>
                    </motion.div>

                    <div className="process-grid">
                        {[
                            { step: "01", title: "Discovery", desc: "We dive deep into your project goals and technical requirements." },
                            { step: "02", title: "Strategy", desc: "Architecting a scalable roadmap for AI integration and data flow." },
                            { step: "03", title: "Execution", desc: "Agile development sprints with continuous testing and feedback." },
                            { step: "04", title: "Scale", desc: "Deployment and optimization for high-availability production." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                className="process-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                            >
                                <span className="process-num text-gradient">{item.step}</span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="home-stats">
                <div className="home-container">
                    <div className="stats-grid">
                        {[
                            { label: "Projects Delivered", value: "50+" },
                            { label: "Lines of Code", value: "30k+" },
                            { label: "Satisfaction", value: "95%" },
                            { label: "Expert Support", value: "24/7" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                className="stat-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="stat-value text-gradient">{stat.value}</span>
                                <span className="stat-name">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED PROJECTS ===== */}
            <section className="home-projects reveal-on-scroll">
                <div className="home-container">
                    <div className="section-header reveal-on-scroll slide-up">
                        <span className="section-badge">RECENT WORK</span>
                        <h2 className="section-title">Featured Projects</h2>
                    </div>

                    <div className="featured-grid">
                        <article className="featured-card featured-large reveal-on-scroll scale-up">
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="RAG System" loading="lazy" />
                            <div className="featured-overlay">
                                <span className="featured-tag">AI / Machine Learning</span>
                                <h3>AI Knowledge Base (RAG)</h3>
                                <p>LLM-powered document Q&amp;A using LangChain, ChromaDB &amp; Groq</p>
                            </div>
                        </article>
                        <article className="featured-card reveal-on-scroll scale-up" style={{ transitionDelay: '0.2s' }}>
                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="HMS" loading="lazy" />
                            <div className="featured-overlay">
                                <span className="featured-tag">Healthcare</span>
                                <h3>Hospital Management</h3>
                                <p>Complete OPD/IPD, EMR &amp; billing platform</p>
                            </div>
                        </article>
                        <article className="featured-card reveal-on-scroll scale-up" style={{ transitionDelay: '0.3s' }}>
                            <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" alt="College" loading="lazy" />
                            <div className="featured-overlay">
                                <span className="featured-tag">Education</span>
                                <h3>NAAC College Website</h3>
                                <p>Full IQAC portal &amp; SSR data sections</p>
                            </div>
                        </article>
                    </div>

                    <div className="projects-cta-row reveal-on-scroll slide-up">
                        <Link to="/projects" className="btn-outline">View All Projects →</Link>
                    </div>
                </div>
            </section>

            {/* ===== WHY US ===== */}
            <section className="home-why reveal-on-scroll">
                <div className="home-container">
                    <div className="section-header reveal-on-scroll slide-up">
                        <span className="section-badge">WHY FLOWGENIX</span>
                        <h2 className="section-title">What Sets Us Apart</h2>
                    </div>
                    <div className="why-grid">
                        <div className="why-item reveal-on-scroll bounce-in" style={{ transitionDelay: '0.1s' }}>
                            <div className="why-num">01</div>
                            <h4>Startup Agility, Enterprise Quality</h4>
                            <p>We move fast without cutting corners. Agile sprints with production-grade code.</p>
                        </div>
                        <div className="why-item reveal-on-scroll bounce-in" style={{ transitionDelay: '0.2s' }}>
                            <div className="why-num">02</div>
                            <h4>Full-Stack Ownership</h4>
                            <p>From strategy to deployment to maintenance — one team, complete accountability.</p>
                        </div>
                        <div className="why-item reveal-on-scroll bounce-in" style={{ transitionDelay: '0.3s' }}>
                            <div className="why-num">03</div>
                            <h4>AI-First Thinking</h4>
                            <p>We integrate intelligence at the core, not as an afterthought. Every product we build is future-ready.</p>
                        </div>
                        <div className="why-item reveal-on-scroll bounce-in" style={{ transitionDelay: '0.4s' }}>
                            <div className="why-num">04</div>
                            <h4>Transparent Communication</h4>
                            <p>Weekly demos, open Slack channels, and no surprises. You're always in the loop.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="home-cta reveal-on-scroll scale-up">
                <div className="home-container">
                    <div className="cta-card-home">
                        <h2>Ready to Build Something Exceptional?</h2>
                        <p>Let's discuss your idea and craft a roadmap to bring it to life.</p>
                        <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;