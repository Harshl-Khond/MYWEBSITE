import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

            {/* ===== HERO ===== */}
            <section className="home-hero">
                <div className="hero-bg-image">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
                        alt="AI Background"
                    />
                </div>
                <div className="hero-bg-gradient"></div>

                <div className="hero-content reveal-on-scroll fade-in">
                    <span className="hero-tag">🚀 BUILD SMARTER. SCALE FASTER.</span>
                    <h1 className="hero-title">
                        TechFarm<br />
                        <span className="hero-title-accent">Solutions</span>
                    </h1>
                    <p className="hero-tagline">CULTIVATING THE FUTURE</p>
                    <p className="hero-desc">
                        We engineer state-of-the-art digital ecosystems — from high-performance web platforms to AI-driven 
                        automation. Turn your most ambitious ideas into intelligent, market-ready products.
                    </p>
                    <div className="hero-cta">
                        <Link to="/contact" className="btn-primary">Get Started</Link>
                        <Link to="/about" className="btn-outline">Learn More →</Link>
                    </div>
                </div>

                <div className="hero-scroll-hint">
                    <span></span>
                </div>
            </section>

            {/* ===== TRUSTED BY ===== */}
            <section className="home-trusted reveal-on-scroll fade-in">
                <div className="home-container">
                    <p className="trusted-label">TRUSTED BY LEADING ORGANIZATIONS</p>
                    <div className="trusted-logos">
                        <span>StartupIndia</span>
                        <span>HealthTech Co.</span>
                        <span>EduNexus</span>
                        <span>FinBridge</span>
                        <span>CloudNine</span>
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="home-stats reveal-on-scroll slide-up">
                <div className="home-container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">50+</span>
                            <span className="stat-name">Projects Delivered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">30k+</span>
                            <span className="stat-name">Lines of Code</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">95%</span>
                            <span className="stat-name">Client Satisfaction</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">24/7</span>
                            <span className="stat-name">Expert Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="home-services reveal-on-scroll">
                <div className="home-container">
                    <div className="section-header reveal-on-scroll slide-up">
                        <span className="section-badge">WHAT WE DO</span>
                        <h2 className="section-title">Our Core Expertise</h2>
                        <p className="section-subtitle">We combine deep engineering with creative design to deliver digital products that make an impact.</p>
                    </div>

                    <div className="services-grid">
                        <div className="svc-home-card reveal-on-scroll slide-up" style={{ transitionDelay: '0.1s' }}>
                            <div className="svc-home-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721267.png" alt="Web" />
                            </div>
                            <h3>Web Development</h3>
                            <p>High-performance React &amp; Next.js applications built for speed, SEO, and conversion.</p>
                            <Link to="/services" className="svc-home-link">Learn More →</Link>
                        </div>

                        <div className="svc-home-card reveal-on-scroll slide-up" style={{ transitionDelay: '0.2s' }}>
                            <div className="svc-home-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2586/2586488.png" alt="Mobile" />
                            </div>
                            <h3>Mobile Apps</h3>
                            <p>Cross-platform Flutter &amp; React Native apps with native-quality performance and UX.</p>
                            <Link to="/services" className="svc-home-link">Learn More →</Link>
                        </div>

                        <div className="svc-home-card reveal-on-scroll slide-up" style={{ transitionDelay: '0.3s' }}>
                            <div className="svc-home-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="AI" />
                            </div>
                            <h3>AI &amp; Automation</h3>
                            <p>LLM-powered chatbots, RAG systems, and predictive analytics that transform your data.</p>
                            <Link to="/services" className="svc-home-link">Learn More →</Link>
                        </div>

                        <div className="svc-home-card reveal-on-scroll slide-up" style={{ transitionDelay: '0.4s' }}>
                            <div className="svc-home-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/4215/4215831.png" alt="Cloud" />
                            </div>
                            <h3>Cloud &amp; DevOps</h3>
                            <p>Auto-scaling infrastructure on AWS, GCP &amp; Azure with CI/CD and 99.9% uptime.</p>
                            <Link to="/services" className="svc-home-link">Learn More →</Link>
                        </div>
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
                        <span className="section-badge">WHY TECHFARM</span>
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