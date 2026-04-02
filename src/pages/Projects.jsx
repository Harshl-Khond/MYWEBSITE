import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {

    const projects = [
        {
            title: 'AI Knowledge Base (RAG System)',
            category: 'AI / Machine Learning',
            tagColor: 'tag-green',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            description: 'An intelligent Retrieval-Augmented Generation system powered by LLMs. Users upload documents and get instant, context-aware answers from their own knowledge base using LangChain, ChromaDB, and Groq.',
            tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React'],
        },
        {
            title: 'Invoice & Billing Software',
            category: 'Business Automation',
            tagColor: 'tag-blue',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
            description: 'A comprehensive invoicing platform with GST calculation, automated billing cycles, payment tracking, PDF generation, and multi-branch support. Built for Indian businesses with full compliance.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Razorpay'],
        },
        {
            title: 'College Website (NAAC Compliant)',
            category: 'Education',
            tagColor: 'tag-purple',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
            description: 'A full-featured college website designed as per NAAC accreditation guidelines — with SSR data sections, IQAC portal, department pages, faculty profiles, NIRF data, and student grievance system.',
            tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'AWS S3'],
        },
        {
            title: 'E-Commerce Shop Platform',
            category: 'E-Commerce',
            tagColor: 'tag-green',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
            description: 'A scalable multi-vendor e-commerce platform with product catalog, cart management, order tracking, coupon engine, and integrated payment gateways for seamless online shopping.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        },
        {
            title: 'Hospital Management System',
            category: 'Healthcare',
            tagColor: 'tag-blue',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
            description: 'A complete HMS covering OPD/IPD management, patient records (EMR), appointment scheduling, lab reports, pharmacy inventory, billing, and role-based access for doctors, nurses, and admin.',
            tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
        },
        {
            title: 'Inventory Management System',
            category: 'Business Automation',
            tagColor: 'tag-blue',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
            description: 'A real-time inventory tracking system with barcode scanning, low-stock alerts, purchase order automation, multi-warehouse support, and detailed analytics dashboards for smarter operations.',
            tech: ['React', 'Node.js', 'MySQL', 'Redis'],
        },
        {
            title: 'CRM Platform',
            category: 'Business Automation',
            tagColor: 'tag-purple',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
            description: 'A powerful Customer Relationship Management tool with lead tracking, sales pipeline visualization, email automation, task management, and performance analytics to close deals faster.',
            tech: ['Next.js', 'Node.js', 'PostgreSQL', 'SendGrid'],
        },
    ];

    const categories = ['All', 'AI / Machine Learning', 'Business Automation', 'Education', 'E-Commerce', 'Healthcare'];
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="projects-page">

            {/* HERO */}
            <section className="projects-hero">
                <div className="projects-hero-content">
                    <span className="projects-badge">OUR WORK</span>
                    <h1 className="projects-hero-title">Selected Projects</h1>
                    <p className="projects-hero-subtitle">
                        Real-world solutions we've built for businesses across healthcare, education, commerce, and AI. Every project is a story of innovation meeting execution.
                    </p>
                </div>
            </section>

            {/* CATEGORY FILTERS */}
            <section className="projects-filters">
                <div className="projects-container">
                    <div className="filter-pills" role="tablist" aria-label="Filter projects by category">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`filter-pill ${activeFilter === cat ? 'filter-active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                                role="tab"
                                aria-selected={activeFilter === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="projects-showcase">
                <div className="projects-container">
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <article key={index} className="project-card">
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                    <div className="project-image-overlay"></div>
                                    <span className={`project-tag ${project.tagColor}`}>{project.category}</span>
                                </div>
                                <div className="project-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-chip">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="no-projects">
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* STATS BAR */}
            <section className="projects-stats">
                <div className="projects-container">
                    <div className="stats-bar">
                        <div className="stat-block">
                            <span className="stat-num">50+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-block">
                            <span className="stat-num">7+</span>
                            <span className="stat-label">Industries Served</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-block">
                            <span className="stat-num">30+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-block">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">On-Time Delivery</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="projects-cta">
                <div className="projects-container">
                    <div className="cta-card">
                        <h2>Want Something Like This?</h2>
                        <p>We'd love to hear about your project. Let's build something amazing together.</p>
                        <Link to="/contact" className="cta-btn">
                            Let's Talk →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Projects;
