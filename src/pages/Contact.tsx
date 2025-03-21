import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Phone, Copy, Check, Send, Linkedin, Instagram, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Section from '../components/Section';

const Contact = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const bootLines = [
        '> INITIALIZING_CONTACT_INTERFACE',
        '> LOADING_COMMUNICATION_PROTOCOLS',
        '> ESTABLISHING_SECURE_CONNECTION',
        '> SYSTEM_READY'
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        bootLines.forEach((_, index) => {
            timeout = setTimeout(() => {
                setCurrentLine(index);
                if (index === bootLines.length - 1) {
                    setShowContent(true);
                }
            }, index * 800);
        });

        return () => clearTimeout(timeout);
    }, []);

    const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');

        try {
            // Create mailto URL with form data
            const mailtoUrl = `mailto:lylechadya139@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            // Open default email client
            window.location.href = mailtoUrl;

            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 3000);
        } catch (error) {
            console.error('Error opening email client:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen pt-20 px-4 bg-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">
                {/* Boot Sequence */}
                <div className="mb-8 font-mono">
                    {bootLines.slice(0, currentLine + 1).map((line, index) => (
                        <div key={index} className="text-[#81c784] flex items-center gap-2 mb-2">
                            <Terminal className="w-4 h-4" />
                            <span>{line}</span>
                        </div>
                    ))}
                </div>

                {showContent && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Header */}
                        <div className="cyber-border p-6">
                            <h1 className="text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                                <Mail className="w-8 h-8" />
                                CONTACT_INTERFACE
                            </h1>
                            <p className="text-[#81c784] mt-4">ESTABLISHING COMMUNICATION LINK...</p>
                        </div>

                        {/* Contact Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email Section */}
                            <div className="cyber-border p-6 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="w-6 h-6 text-[#92f792]" />
                                    <h2 className="text-xl text-[#c8e6c9]">EMAIL_PROTOCOL</h2>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg">
                                    <span className="text-[#81c784] font-mono">lylechadya139@gmail.com</span>
                                    <button
                                        onClick={() => copyToClipboard('lylechadya139@gmail.com', 'email')}
                                        className="cyber-button p-2 hover:text-[#92f792] transition-colors"
                                        title="Copy email"
                                    >
                                        {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Phone Section */}
                            <div className="cyber-border p-6 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Phone className="w-6 h-6 text-[#92f792]" />
                                    <h2 className="text-xl text-[#c8e6c9]">PHONE_PROTOCOL</h2>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg">
                                    <span className="text-[#81c784] font-mono">+263 77 531 2695</span>
                                    <button
                                        onClick={() => copyToClipboard('+263 77 531 2695', 'phone')}
                                        className="cyber-button p-2 hover:text-[#92f792] transition-colors"
                                        title="Copy phone"
                                    >
                                        {copiedPhone ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="cyber-border p-6 bg-[#1a1a1a]">
                            <h2 className="text-xl text-[#c8e6c9] mb-6">SOCIAL_PROTOCOLS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a
                                    href="https://www.linkedin.com/in/lyle-chadya-267957319/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-button p-4 flex items-center gap-3 hover:text-[#92f792] group"
                                >
                                    <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
                                    <span className="font-mono">LINKEDIN_CONNECTION</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/himothy_one/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-button p-4 flex items-center gap-3 hover:text-[#92f792] group"
                                >
                                    <Instagram className="w-6 h-6 group-hover:animate-pulse" />
                                    <span className="font-mono">INSTAGRAM_FEED</span>
                                </a>
                            </div>
                        </div>

                        {/* Email Form */}
                        <div className="cyber-border p-6 bg-[#1a1a1a]">
                            <div className="flex items-center gap-3 mb-6">
                                <Send className="w-6 h-6 text-[#92f792]" />
                                <h2 className="text-xl text-[#c8e6c9]">TRANSMISSION_PROTOCOL</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[#81c784] block">NAME</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[#81c784] block">EMAIL</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-[#81c784] block">SUBJECT</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors"
                                        placeholder="Enter subject"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[#81c784] block">MESSAGE</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors resize-none"
                                        placeholder="Enter your message"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className={`cyber-button w-full p-4 flex items-center justify-center gap-2 ${formStatus === 'loading' ? 'opacity-50' : 'hover:text-[#92f792]'
                                        } transition-all`}
                                >
                                    <Send className="w-5 h-5" />
                                    {formStatus === 'idle' && 'SEND_TRANSMISSION'}
                                    {formStatus === 'loading' && 'SENDING...'}
                                    {formStatus === 'success' && 'TRANSMISSION_SENT'}
                                    {formStatus === 'error' && 'TRANSMISSION_FAILED'}
                                </button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div className="cyber-border p-6 mt-8">
                            <div className="text-center space-y-4">
                                <p className="text-[#81c784] text-lg">
                                    RESPONSE_TIME: <span className="text-[#92f792]">{"<"}24 HOURS</span>
                                </p>
                                <p className="text-[#81c784] text-lg">
                                    STATUS: <span className="text-[#92f792]">AVAILABLE FOR OPPORTUNITIES</span>
                                </p>
                                <div className="w-4 h-4 rounded-full bg-[#92f792] mx-auto mt-4 animate-pulse"></div>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-4 mt-8">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-sm font-mono">CONTACT_SYSTEM.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact; 