import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">

            {/* HERO BANNER */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-badge">WHO WE ARE</span>
                    <h1 className="about-hero-title">About Flowgenix</h1>
                    <p className="about-hero-subtitle">
                        We are a team of engineers, designers, and strategists building the next generation of intelligent digital products.
                    </p>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="about-story">
                <div className="about-container">
                    <div className="story-grid">
                        <div className="story-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="story-image"
                            />
                            <div className="story-image-glow"></div>
                        </div>
                        <div className="story-text">
                            <h2 className="section-label">Our Story</h2>
                            <h3 className="section-heading">From a Vision to a Digital Powerhouse</h3>
                            <p>
                                Flowgenix was founded with a single belief: technology should solve real problems, not create new ones.
                                What started as a small team of passionate developers has grown into a full-service digital agency
                                that partners with startups, enterprises, and organizations worldwide.
                            </p>
                            <p>
                                We combine deep technical expertise with creative problem-solving to deliver solutions that are
                                not just functional, but transformative. Every line of code we write, every interface we design,
                                and every system we architect is driven by our commitment to excellence and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION / VISION / VALUES */}
            <section className="about-pillars">
                <div className="about-container">
                    <div className="pillars-header">
                        <h2 className="section-label">What Drives Us</h2>
                        <h3 className="section-heading">Our Core Pillars</h3>
                    </div>
                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-icon">🎯</div>
                            <h4>Our Mission</h4>
                            <p>
                                To empower businesses with intelligent, scalable technology solutions that drive measurable growth.
                                We bridge the gap between complex technology and real-world business needs, making innovation accessible
                                to organizations of all sizes.
                            </p>
                        </div>
                        <div className="pillar-card pillar-card-alt">
                            <div className="pillar-icon">🔭</div>
                            <h4>Our Vision</h4>
                            <p>
                                To be the global leader in AI-powered digital transformation, setting the standard for how technology
                                can be harnessed to solve humanity's most pressing challenges — from healthcare to education to sustainability.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">💎</div>
                            <h4>Our Values</h4>
                            <p>
                                <strong>Integrity</strong> in every interaction. <strong>Excellence</strong> in every deliverable.
                                <strong>Innovation</strong> in every solution. <strong>Collaboration</strong> at every step.
                                These aren't just words — they are the foundation of every project we undertake.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="about-capabilities">
                <div className="about-container">
                    <div className="capabilities-header">
                        <h2 className="section-label">What We Do</h2>
                        <h3 className="section-heading">End-to-End Digital Solutions</h3>
                    </div>
                    <div className="capabilities-grid">
                        <div className="capability-item">
                            <div className="capability-number">01</div>
                            <div className="capability-content">
                                <h4>Discovery &amp; Strategy</h4>
                                <p>We deeply understand your business goals, target audience, and technical requirements before writing a single line of code.</p>
                            </div>
                        </div>
                        <div className="capability-item">
                            <div className="capability-number">02</div>
                            <div className="capability-content">
                                <h4>UI/UX Design</h4>
                                <p>Our designers craft pixel-perfect, user-centric interfaces that balance aesthetics with functionality.</p>
                            </div>
                        </div>
                        <div className="capability-item">
                            <div className="capability-number">03</div>
                            <div className="capability-content">
                                <h4>Development &amp; Engineering</h4>
                                <p>We build robust, scalable applications using modern frameworks — React, Node.js, Python, Flutter, and more.</p>
                            </div>
                        </div>
                        <div className="capability-item">
                            <div className="capability-number">04</div>
                            <div className="capability-content">
                                <h4>AI &amp; Automation</h4>
                                <p>From chatbots to predictive analytics, we integrate intelligent AI systems that give your business a competitive edge.</p>
                            </div>
                        </div>
                        <div className="capability-item">
                            <div className="capability-number">05</div>
                            <div className="capability-content">
                                <h4>Cloud &amp; DevOps</h4>
                                <p>We deploy and maintain secure, auto-scaling cloud infrastructure on AWS, GCP, and Azure for maximum uptime.</p>
                            </div>
                        </div>
                        <div className="capability-item">
                            <div className="capability-number">06</div>
                            <div className="capability-content">
                                <h4>Ongoing Support</h4>
                                <p>Our relationship doesn't end at launch. We provide 24/7 monitoring, maintenance, and iterative improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="about-team">
                <div className="about-container">
                    <div className="team-header">
                        <h2 className="section-label">The People</h2>
                        <h3 className="section-heading">Meet Our Leadership</h3>
                    </div>
                    <div className="team-grid">
                        <div className="team-card">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                                alt="CEO"
                                className="team-avatar"
                            />
                            <h4>Arjun Mehta</h4>
                            <span className="team-role">Founder &amp; CEO</span>
                            <p>Visionary leader with 10+ years in software architecture and AI research.</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                                alt="CTO"
                                className="team-avatar"
                            />
                            <h4>Priya Sharma</h4>
                            <span className="team-role">Chief Technology Officer</span>
                            <p>Full-stack expert specializing in cloud-native applications and DevOps.</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                                alt="Design Lead"
                                className="team-avatar"
                            />
                            <h4>Rahul Verma</h4>
                            <span className="team-role">Head of Design</span>
                            <p>Award-winning UI/UX designer passionate about creating intuitive digital experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="about-why">
                <div className="about-container">
                    <div className="why-header">
                        <h2 className="section-label">Why Flowgenix</h2>
                        <h3 className="section-heading">What Sets Us Apart</h3>
                    </div>
                    <div className="why-grid">
                        <div className="why-item">
                            <span className="why-stat">50+</span>
                            <p>Projects delivered across healthcare, education, fintech, and e-commerce</p>
                        </div>
                        <div className="why-item">
                            <span className="why-stat">95%</span>
                            <p>Client retention rate — our partners come back because we deliver results</p>
                        </div>
                        <div className="why-item">
                            <span className="why-stat">24/7</span>
                            <p>Dedicated support and monitoring to keep your systems running flawlessly</p>
                        </div>
                        <div className="why-item">
                            <span className="why-stat">3x</span>
                            <p>Average performance improvement in client applications after our optimization</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
