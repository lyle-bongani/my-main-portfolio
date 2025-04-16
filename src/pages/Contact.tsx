import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Phone, Copy, Check, Send, Linkedin, Github, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

const Contact = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [systemStatus, setSystemStatus] = useState<string[]>([]);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const bootMessages = [
        'Initializing contact interface...',
        'Establishing secure channels...',
        'Loading communication protocols...',
        'System ready.'
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        bootMessages.forEach((message, index) => {
            timeout = setTimeout(() => {
                setSystemStatus(prev => [...prev, message]);
                if (index === bootMessages.length - 1) {
                    setTimeout(() => setBootComplete(true), 500);
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
            const mailtoUrl = `mailto:lylechadya139@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            window.location.href = mailtoUrl;

            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
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
        <div className="min-h-screen pt-16 sm:pt-20 px-3 sm:px-4 bg-[#1a1a1a] relative">
            <div className="absolute inset-0 z-0">
                <MatrixRain />
            </div>
            
            {/* Loading Overlay */}
            {!bootComplete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] bg-opacity-90 px-3">
                    <div className="cyber-border p-4 sm:p-8 bg-[#1a1a1a] w-full max-w-lg">
                        <div className="space-y-3">
                            {systemStatus.map((message, index) => (
                                <p key={index} className="text-[#c8e6c9] font-mono text-sm sm:text-base flex items-center gap-3">
                                    <Terminal className="w-4 h-4" />
                                    <span>{message}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                    {/* Header */}
                    <div className="cyber-border p-4 sm:p-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                            CONTACT_INTERFACE
                        </h1>
                        <p className="text-[#81c784] mt-3 sm:mt-4 text-sm sm:text-base">Let's connect and create something amazing together.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Contact Info */}
                        <div className="cyber-border p-4 sm:p-6 bg-[#1a1a1a]">
                            <div className="space-y-4 sm:space-y-6">
                                {/* Email Section */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#92f792]" />
                                        <h2 className="text-lg sm:text-xl text-[#c8e6c9]">EMAIL</h2>
                                    </div>
                                    <div className="flex items-center justify-between p-3 sm:p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#333] transition-colors duration-300">
                                        <a 
                                            href="mailto:lylechadya139@gmail.com"
                                            className="text-[#81c784] font-mono text-sm sm:text-base hover:text-[#92f792] transition-colors truncate mr-2"
                                        >
                                            lylechadya139@gmail.com
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard('lylechadya139@gmail.com', 'email')}
                                            className="cyber-button p-2 hover:text-[#92f792] transition-colors flex-shrink-0"
                                            title="Copy email"
                                        >
                                            {copiedEmail ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Phone Section */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#92f792]" />
                                        <h2 className="text-lg sm:text-xl text-[#c8e6c9]">PHONE</h2>
                                    </div>
                                    <div className="flex items-center justify-between p-3 sm:p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#333] transition-colors duration-300">
                                        <a 
                                            href="tel:+263775312695"
                                            className="text-[#81c784] font-mono text-sm sm:text-base hover:text-[#92f792] transition-colors"
                                        >
                                            +263 77 531 2695
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard('+263 77 531 2695', 'phone')}
                                            className="cyber-button p-2 hover:text-[#92f792] transition-colors flex-shrink-0"
                                            title="Copy phone"
                                        >
                                            {copiedPhone ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                                    <a
                                        href="https://www.linkedin.com/in/lyle-chadya-368930358/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cyber-button p-2 sm:p-3 hover:text-[#92f792]"
                                    >
                                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a
                                        href="https://github.com/lyle-bongani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cyber-button p-2 sm:p-3 hover:text-[#92f792]"
                                    >
                                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="cyber-border p-4 sm:p-6 bg-[#1a1a1a]">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[#81c784] block text-sm sm:text-base">NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-2.5 sm:p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors text-sm sm:text-base"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[#81c784] block text-sm sm:text-base">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-2.5 sm:p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors text-sm sm:text-base"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[#81c784] block text-sm sm:text-base">MESSAGE</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-[#2a2a2a] border border-[#81c784] text-[#c8e6c9] p-2.5 sm:p-3 rounded-lg focus:outline-none focus:border-[#92f792] focus:ring-1 focus:ring-[#92f792] transition-colors resize-none text-sm sm:text-base"
                                        placeholder="Enter your message"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className={`cyber-button w-full p-3 sm:p-4 flex items-center justify-center gap-2 ${formStatus === 'loading' ? 'opacity-50' : 'hover:text-[#92f792]'} transition-all text-sm sm:text-base`}
                                >
                                    {formStatus === 'idle' && (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                            SEND MESSAGE
                                        </>
                                    )}
                                    {formStatus === 'loading' && (
                                        <>
                                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                            SENDING...
                                        </>
                                    )}
                                    {formStatus === 'success' && (
                                        <>
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                            SENT SUCCESSFULLY
                                        </>
                                    )}
                                    {formStatus === 'error' && (
                                        <>
                                            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                            FAILED TO SEND
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 