import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">

            {/* HERO BANNER */}
            <section className="services-hero">
                <div className="services-hero-content">
                    <span className="services-badge">WHAT WE OFFER</span>
                    <h1 className="services-hero-title">Our Services</h1>
                    <p className="services-hero-subtitle">
                        End-to-end digital solutions engineered for performance, scalability, and impact. We don't just build software — we build competitive advantages.
                    </p>
                </div>
            </section>

            {/* MAIN SERVICES GRID */}
            <section className="services-main">
                <div className="services-container">
                    <div className="services-grid">

                        {/* Web Development */}
                        <div className="svc-card svc-card-featured">
                            <div className="svc-card-accent"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721267.png" alt="Web" />
                            </div>
                            <h3>Web Development</h3>
                            <p>
                                We build blazing-fast, SEO-optimized websites and web applications using React, Next.js, and Node.js. 
                                From landing pages to enterprise portals, every project is crafted for performance and conversion.
                            </p>
                            <ul className="svc-features">
                                <li>Single Page Applications (SPA)</li>
                                <li>Progressive Web Apps (PWA)</li>
                                <li>E-commerce Platforms</li>
                                <li>Custom CMS Solutions</li>
                            </ul>
                        </div>

                        {/* Mobile App Development */}
                        <div className="svc-card">
                            <div className="svc-card-accent svc-accent-blue"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2586/2586488.png" alt="Mobile" />
                            </div>
                            <h3>Mobile App Development</h3>
                            <p>
                                Native-quality cross-platform apps built with Flutter and React Native. We focus on smooth animations, 
                                offline-first architecture, and seamless user experiences on both iOS and Android.
                            </p>
                            <ul className="svc-features">
                                <li>Cross-Platform (Flutter / React Native)</li>
                                <li>Native iOS &amp; Android</li>
                                <li>App Store Optimization</li>
                                <li>Push Notifications &amp; Analytics</li>
                            </ul>
                        </div>

                        {/* AI & ML */}
                        <div className="svc-card">
                            <div className="svc-card-accent"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="AI" />
                            </div>
                            <h3>AI &amp; Machine Learning</h3>
                            <p>
                                Harness the power of Large Language Models, computer vision, and predictive analytics. 
                                We build intelligent systems that automate workflows and unlock insights from your data.
                            </p>
                            <ul className="svc-features">
                                <li>Custom AI Chatbots &amp; Agents</li>
                                <li>RAG Systems &amp; LLM Integration</li>
                                <li>Predictive Analytics Dashboards</li>
                                <li>NLP &amp; Document Processing</li>
                            </ul>
                        </div>

                        {/* UI/UX Design */}
                        <div className="svc-card svc-card-featured">
                            <div className="svc-card-accent svc-accent-blue"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Design" />
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>
                                Design-driven development that puts users first. We create pixel-perfect interfaces backed by 
                                user research, wireframing, prototyping, and rigorous usability testing.
                            </p>
                            <ul className="svc-features">
                                <li>User Research &amp; Personas</li>
                                <li>Wireframing &amp; Prototyping</li>
                                <li>Design Systems &amp; Brand Guidelines</li>
                                <li>Responsive &amp; Accessible Design</li>
                            </ul>
                        </div>

                        {/* Cloud & DevOps */}
                        <div className="svc-card">
                            <div className="svc-card-accent"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/4215/4215831.png" alt="Cloud" />
                            </div>
                            <h3>Cloud &amp; DevOps</h3>
                            <p>
                                Secure, auto-scaling cloud infrastructure on AWS, GCP, and Azure. We set up CI/CD pipelines, 
                                containerized deployments, and monitoring to ensure 99.9% uptime.
                            </p>
                            <ul className="svc-features">
                                <li>AWS / GCP / Azure Setup</li>
                                <li>Docker &amp; Kubernetes</li>
                                <li>CI/CD Pipelines</li>
                                <li>24/7 Monitoring &amp; Alerts</li>
                            </ul>
                        </div>

                        {/* Digital Marketing */}
                        <div className="svc-card">
                            <div className="svc-card-accent svc-accent-blue"></div>
                            <div className="svc-card-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Marketing" />
                            </div>
                            <h3>Digital Marketing</h3>
                            <p>
                                Data-driven marketing strategies that amplify your online presence. We combine SEO, content 
                                marketing, and paid campaigns to drive real, measurable growth.
                            </p>
                            <ul className="svc-features">
                                <li>SEO &amp; Content Strategy</li>
                                <li>Social Media Management</li>
                                <li>Google &amp; Meta Ads</li>
                                <li>Analytics &amp; Reporting</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="services-process">
                <div className="services-container">
                    <div className="process-header">
                        <span className="services-badge">HOW WE WORK</span>
                        <h2 className="process-title">Our Development Process</h2>
                        <p className="process-subtitle">A proven, transparent workflow that keeps you in the loop at every stage.</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Discovery Call</h4>
                                <p>We listen to your goals, analyze your market, and define the project scope and timeline.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Strategy &amp; Design</h4>
                                <p>Wireframes, prototypes, and a detailed roadmap are created for your approval before any code is written.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Agile Development</h4>
                                <p>We build in 2-week sprints with regular demos, so you see progress and can provide feedback continuously.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Testing &amp; QA</h4>
                                <p>Rigorous automated and manual testing ensures your product is rock-solid before launch.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">5</div>
                            <div className="step-content">
                                <h4>Launch &amp; Support</h4>
                                <p>We deploy to production, monitor performance, and provide ongoing maintenance and iterative improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="services-tech">
                <div className="services-container">
                    <div className="tech-header">
                        <span className="services-badge">TECHNOLOGIES</span>
                        <h2 className="process-title">Our Tech Stack</h2>
                    </div>
                    <div className="tech-grid">
                        <div className="tech-item">React</div>
                        <div className="tech-item">Next.js</div>
                        <div className="tech-item">Node.js</div>
                        <div className="tech-item">Python</div>
                        <div className="tech-item">Flutter</div>
                        <div className="tech-item">FastAPI</div>
                        <div className="tech-item">PostgreSQL</div>
                        <div className="tech-item">MongoDB</div>
                        <div className="tech-item">Docker</div>
                        <div className="tech-item">AWS</div>
                        <div className="tech-item">TensorFlow</div>
                        <div className="tech-item">LangChain</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta">
                <div className="services-container">
                    <div className="cta-box">
                        <h2>Have a Project in Mind?</h2>
                        <p>Let's discuss how we can bring your vision to life with the right technology and strategy.</p>
                        <Link to="/contact" className="cta-button">
                            Start a Conversation →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
