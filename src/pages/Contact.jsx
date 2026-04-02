import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', service: '', budget: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        if (errors[e.target.id]) {
            setErrors({ ...errors, [e.target.id]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="contact-page">

            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="contact-badge">GET IN TOUCH</span>
                    <h1 className="contact-hero-title">Start a Conversation</h1>
                    <p className="contact-hero-subtitle">
                        Have a project idea, a question, or just want to say hello? We'd love to hear from you. Let's start a conversation.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="contact-main">
                <div className="contact-container">
                    <div className="contact-grid">

                        {/* LEFT — INFO CARDS */}
                        <div className="contact-info">

                            <div className="info-card">
                                <div className="info-icon" aria-hidden="true">📍</div>
                                <div>
                                    <h4>Our Office</h4>
                                    <p>Flowgenix AI Pvt. Ltd.</p>
                                    <p>Indore, Madhya Pradesh, India</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon" aria-hidden="true">📧</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>hello@flowgenix.ai</p>
                                    <p>support@flowgenix.ai</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon" aria-hidden="true">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 98765 43210</p>
                                    <p>Mon – Sat, 10 AM – 7 PM IST</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon" aria-hidden="true">⏱️</div>
                                <div>
                                    <h4>Response Time</h4>
                                    <p>We typically respond within 2–4 hours during business days.</p>
                                </div>
                            </div>

                            {/* SOCIAL LINKS */}
                            <div className="contact-socials">
                                <h4>Follow Us</h4>
                                <div className="social-links">
                                    <a href="#" aria-label="LinkedIn" className="social-link">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                    <a href="#" aria-label="GitHub" className="social-link">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="social-link">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                    </a>
                                    <a href="#" aria-label="Instagram" className="social-link">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — FORM */}
                        <div className="contact-form-wrapper">
                            {!submitted ? (
                                <>
                                    <h2 className="form-heading">Send Us a Message</h2>
                                    <p className="form-subheading">Fill in the details below and we'll get back to you shortly.</p>

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="firstName">First Name *</label>
                                                <input type="text" id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} aria-required="true" />
                                                {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input type="text" id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} aria-required="true" />
                                            {errors.email && <span className="form-error">{errors.email}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="service">Service Interested In</label>
                                            <select id="service" value={formData.service} onChange={handleChange}>
                                                <option value="">Select a service</option>
                                                <option value="web">Web Development</option>
                                                <option value="mobile">Mobile App Development</option>
                                                <option value="ai">AI &amp; Machine Learning</option>
                                                <option value="design">UI/UX Design</option>
                                                <option value="cloud">Cloud &amp; DevOps</option>
                                                <option value="marketing">Digital Marketing</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="budget">Estimated Budget</label>
                                            <select id="budget" value={formData.budget} onChange={handleChange}>
                                                <option value="">Select budget range</option>
                                                <option value="10k-25k">₹10,000 – ₹25,000</option>
                                                <option value="25k-50k">₹25,000 – ₹50,000</option>
                                                <option value="50k-1L">₹50,000 – ₹1,00,000</option>
                                                <option value="1L+">₹1,00,000+</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Project Details *</label>
                                            <textarea id="message" rows="5" placeholder="Tell us about your project, goals, and timeline..." value={formData.message} onChange={handleChange} aria-required="true"></textarea>
                                            {errors.message && <span className="form-error">{errors.message}</span>}
                                        </div>

                                        <button type="submit" className="form-submit">
                                            Send Message 🚀
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="form-success">
                                    <div className="success-icon">✅</div>
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <button className="form-submit" onClick={() => { setSubmitted(false); setFormData({ firstName:'', lastName:'', email:'', phone:'', service:'', budget:'', message:'' }); }}>
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="contact-map">
                <div className="contact-container">
                    <div className="map-wrapper">
                        <iframe
                            title="Flowgenix Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7091436024!2d75.69815!3d22.72383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '16px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
