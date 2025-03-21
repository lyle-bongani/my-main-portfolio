import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Terminal,
    GitBranch,
    Shield,
    Rocket,
    Mail,
    ExternalLink,
    Command,
    AlertCircle,
    CheckCircle2,
    Timer,
    Palette,
    Layout,
    Code,
    Briefcase,
    Clock,
    Send,
    Calendar,
    User,
    MessageSquare,
    Link as LinkIcon,
    ArrowLeft
} from 'lucide-react';

const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(26, 26, 26, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(146, 247, 146, 0.5)';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 opacity-15"
        />
    );
};

const Home = () => {
    const [bootSequence, setBootSequence] = useState(false);
    const [systemStatus, setSystemStatus] = useState<string[]>([]);
    const textRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const bootMessages = [
        'Initializing design system...',
        'Loading UI components...',
        'Establishing creative connection...',
        'Mounting design assets...',
        'Starting frontend modules...',
        'Activating UX protocols...',
        'System ready.'
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        bootMessages.forEach((message, index) => {
            timeout = setTimeout(() => {
                setSystemStatus(prev => [...prev, message]);
                if (index === bootMessages.length - 1) {
                    setBootSequence(true);
                }
            }, index * 800);
        });

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!bootSequence) return;

        const text = "UI/UX DESIGNER & FRONT-END DEVELOPER";
        let index = 0;

        const typeText = () => {
            if (textRef.current && index < text.length) {
                textRef.current.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(typeText, 100);
            }
        };

        typeText();
    }, [bootSequence]);

    const [stats] = useState({
        uiDesigns: '5',
        graphicDesigns: '7',
        devProjects: '15',
        satisfaction: '100%'
    });

    const [activeCommand, setActiveCommand] = useState('');
    const commands = [
        { name: 'portfolio', description: 'View design portfolio', icon: Palette },
        { name: 'projects', description: 'Browse frontend projects', icon: Code },
        { name: 'ui-kit', description: 'Access component library', icon: Layout },
        { name: 'contact', description: 'Initialize communication', icon: Mail }
    ];

    const handleCommand = (cmd: string) => {
        setActiveCommand(cmd);
        // Command handling logic here
    };

    const [applicationForm, setApplicationForm] = useState({
        name: '',
        email: '',
        message: '',
        budget: '',
        timeline: ''
    });

    const [showApplication, setShowApplication] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setApplicationForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setTimeout(() => {
                setShowApplication(false);
                setSubmitStatus('idle');
                setApplicationForm({
                    name: '',
                    email: '',
                    message: '',
                    budget: '',
                    timeline: ''
                });
            }, 2000);
        }, 1500);
    };

    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmitEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');

        try {
            const mailtoUrl = `mailto:lylechadya139@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

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
        <div className="pt-16 min-h-screen relative overflow-hidden bg-[#1a1a1a]">
            <MatrixRain />

            {!bootSequence ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="cyber-border p-8 bg-[#1a1a1a] max-w-2xl w-full">
                        <div className="space-y-2">
                            {systemStatus.map((message, index) => (
                                <p key={index} className="text-[#c8e6c9] font-mono flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    <span>{message}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="cyber-border px-4 py-1 bg-[#81c784] bg-opacity-20">
                                <span className="text-[#92f792] flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    AVAILABLE FOR HIRE
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 cyber-glitch text-[#c8e6c9] px-2">
                            [LYLE_CHADYA]
                        </h1>
                        <p className="text-lg md:text-2xl mb-8 px-2">
                            <span ref={textRef} className="terminal-text"></span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
                        {/* Terminal Section */}
                        <div className="cyber-border p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400 mr-2 opacity-75"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 opacity-75"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 opacity-75"></div>
                            </div>
                            <div className="font-mono space-y-2">
                                <p className="text-[#81c784]">Available commands:</p>
                                {commands.map(cmd => {
                                    const Icon = cmd.icon;
                                    return (
                                        <button
                                            key={cmd.name}
                                            onClick={() => handleCommand(cmd.name)}
                                            className={`flex items-center gap-2 w-full text-left px-2 py-1 transition-colors
                                                ${activeCommand === cmd.name ? 'bg-[#81c784] text-[#1a1a1a]' : ''} 
                                                hover:bg-[#81c784] hover:bg-opacity-20`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            $ {cmd.name} - {cmd.description}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="cyber-border p-6">
                            <h3 className="text-xl font-bold mb-6 cyber-glitch text-[#c8e6c9]">
                                PORTFOLIO_METRICS
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="cyber-border p-4 flex items-center gap-2">
                                    <Layout className="w-5 h-5 text-[#81c784]" />
                                    <div>
                                        <div className="text-2xl font-bold text-[#92f792]">{stats.uiDesigns}</div>
                                        <div className="text-sm opacity-80">UI Designs</div>
                                    </div>
                                </div>
                                <div className="cyber-border p-4 flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-[#81c784]" />
                                    <div>
                                        <div className="text-2xl font-bold text-[#92f792]">{stats.graphicDesigns}</div>
                                        <div className="text-sm opacity-80">Graphic Designs</div>
                                    </div>
                                </div>
                                <div className="cyber-border p-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-[#81c784]" />
                                    <div>
                                        <div className="text-2xl font-bold text-[#92f792]">{stats.devProjects}</div>
                                        <div className="text-sm opacity-80">Dev Projects</div>
                                    </div>
                                </div>
                                <div className="cyber-border p-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#81c784]" />
                                    <div>
                                        <div className="text-2xl font-bold text-[#92f792]">{stats.satisfaction}</div>
                                        <div className="text-sm opacity-80">Satisfied Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-6xl mb-12">
                        <div className="cyber-border p-6">
                            <h3 className="text-xl font-bold mb-6 cyber-glitch text-[#c8e6c9] flex items-center gap-2">
                                <Briefcase className="w-5 h-5" />
                                HIRE_STATUS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="cyber-border p-4">
                                    <div className="flex items-center gap-2 text-[#81c784]">
                                        <Calendar className="w-5 h-5" />
                                        <span>Next Available</span>
                                    </div>
                                    <div className="text-[#92f792] text-xl mt-2">IMMEDIATE</div>
                                </div>
                                <div className="cyber-border p-4">
                                    <div className="flex items-center gap-2 text-[#81c784]">
                                        <Clock className="w-5 h-5" />
                                        <span>Working Hours</span>
                                    </div>
                                    <div className="text-[#92f792] text-xl mt-2">FLEXIBLE</div>
                                    <div className="text-sm text-[#81c784] mt-1 opacity-80">24/7 AVAILABILITY</div>
                                </div>
                                <div className="cyber-border p-4">
                                    <div className="flex items-center gap-2 text-[#81c784]">
                                        <LinkIcon className="w-5 h-5" />
                                        <span>Work Mode</span>
                                    </div>
                                    <div className="text-[#92f792] text-xl mt-2 flex items-center gap-2">
                                        <span className="text-sm bg-[#81c784] bg-opacity-20 px-2 py-1 rounded">REMOTE</span>
                                        <span className="text-sm text-[#81c784]">/</span>
                                        <span className="text-sm bg-[#81c784] bg-opacity-20 px-2 py-1 rounded">ON-SITE</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowApplication(true)}
                                className="cyber-button w-full justify-center text-sm sm:text-base py-3"
                            >
                                <span className="hidden sm:inline">INITIALIZE_HIRING_SEQUENCE</span>
                                <span className="sm:hidden">START_HIRING</span>
                            </button>
                        </div>
                    </div>

                    {showApplication && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-start justify-center z-[100] p-4 pt-20 overflow-y-auto">
                            <div className="cyber-border bg-[#1a1a1a] p-6 max-w-2xl w-full relative animate-slideDown">
                                {/* Decorative corner elements */}
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#92f792]"></div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#92f792]"></div>
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#92f792]"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#92f792]"></div>

                                {/* Background matrix effect */}
                                <div className="absolute inset-0 opacity-5 matrix-bg"></div>

                                {/* Header */}
                                <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-[#81c784] border-opacity-40">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-[#92f792]" />
                                        <h3 className="text-lg sm:text-xl font-bold cyber-glitch text-[#c8e6c9]">
                                            NEW_PROJECT_REQUEST
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setShowApplication(false)}
                                        className="cyber-button bg-[#1a1a1a] text-[#92f792] hover:text-[#c8e6c9] flex items-center gap-2 py-2 px-4 border border-[#81c784] border-opacity-50 w-full sm:w-auto justify-center sm:justify-start"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                        <span className="text-sm">BACK</span>
                                    </button>
                                </div>

                                {/* Form Content */}
                                <div className="relative bg-[#1a1a1a] bg-opacity-90 p-2 sm:p-4">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-[#81c784] text-sm sm:text-base">
                                                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <label className="font-mono">SYSTEM.USER.NAME</label>
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={applicationForm.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#1a1a1a] cyber-border p-3 text-[#c8e6c9] focus:border-[#92f792] outline-none text-sm sm:text-base"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-[#81c784] text-sm sm:text-base">
                                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <label className="font-mono">SYSTEM.USER.EMAIL</label>
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={applicationForm.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#1a1a1a] cyber-border p-3 text-[#c8e6c9] focus:border-[#92f792] outline-none text-sm sm:text-base"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-[#81c784] text-sm sm:text-base">
                                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <label className="font-mono">PROJECT.DETAILS</label>
                                            </div>
                                            <textarea
                                                name="message"
                                                value={applicationForm.message}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#1a1a1a] cyber-border p-3 text-[#c8e6c9] focus:border-[#92f792] outline-none min-h-[120px] text-sm sm:text-base"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-[#81c784] text-sm sm:text-base">
                                                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <label className="font-mono">PROJECT.BUDGET</label>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="budget"
                                                    value={applicationForm.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#1a1a1a] cyber-border p-3 text-[#c8e6c9] focus:border-[#92f792] outline-none text-sm sm:text-base"
                                                    placeholder="OPTIONAL"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-[#81c784] text-sm sm:text-base">
                                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <label className="font-mono">PROJECT.TIMELINE</label>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="timeline"
                                                    value={applicationForm.timeline}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#1a1a1a] cyber-border p-3 text-[#c8e6c9] focus:border-[#92f792] outline-none text-sm sm:text-base"
                                                    placeholder="OPTIONAL"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="cyber-button w-full justify-center mt-8 relative overflow-hidden group py-3 text-sm sm:text-base"
                                            disabled={submitStatus === 'loading' || submitStatus === 'success'}
                                        >
                                            <div className="absolute inset-0 bg-[#92f792] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-20"></div>
                                            {submitStatus === 'idle' && (
                                                <span className="flex items-center gap-2 justify-center">
                                                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <span className="font-mono">INITIALIZE_REQUEST</span>
                                                </span>
                                            )}
                                            {submitStatus === 'loading' && (
                                                <span className="flex items-center gap-2 justify-center">
                                                    <div className="animate-spin w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#92f792] border-t-transparent rounded-full"></div>
                                                    <span className="font-mono">PROCESSING...</span>
                                                </span>
                                            )}
                                            {submitStatus === 'success' && (
                                                <span className="flex items-center gap-2 justify-center text-[#92f792]">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <span className="font-mono">REQUEST_SENT</span>
                                                </span>
                                            )}
                                        </button>
                                    </form>
                                </div>

                                {/* Status indicator */}
                                <div className="mt-4 pt-4 border-t border-[#81c784] border-opacity-40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 text-[#81c784]">
                                        <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                        <span className="font-mono">SYSTEM.READY</span>
                                    </div>
                                    <div className="text-[#81c784] opacity-60 font-mono">
                                        SESSION_ID: {Math.random().toString(36).substring(2, 15).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 px-4 w-full sm:w-auto">
                        <Link to="/projects" className="cyber-button group flex items-center gap-2 justify-center text-sm sm:text-base">
                            <span className="group-hover:hidden">VIEW_PORTFOLIO</span>
                            <span className="hidden group-hover:inline flex items-center gap-2">
                                [LOADING_DESIGNS...] <Palette className="w-4 h-4" />
                            </span>
                        </Link>
                        <Link to="/contact" className="cyber-button group flex items-center gap-2 justify-center text-sm sm:text-base">
                            <span className="group-hover:hidden">START_COLLABORATION</span>
                            <span className="hidden group-hover:inline flex items-center gap-2">
                                [CONNECTING...] <Mail className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>

                    <div className="cyber-border p-4">
                        <div className="flex items-center space-x-4">
                            <CheckCircle2 className="w-5 h-5 text-[#81c784] animate-pulse" />
                            <p className="text-sm opacity-90">DESIGN_SYSTEM: OPERATIONAL</p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div id="contact" className="cyber-border p-6 bg-[#1a1a1a] mt-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Send className="w-6 h-6 text-[#92f792]" />
                            <h2 className="text-xl text-[#c8e6c9]">QUICK_CONTACT_PROTOCOL</h2>
                        </div>

                        <form onSubmit={handleSubmitEmail} className="space-y-4">
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
                                className={`cyber-button w-full p-4 flex items-center justify-center gap-2 ${formStatus === 'loading' ? 'opacity-50' : 'hover:text-[#92f792]'} transition-all`}
                            >
                                <Send className="w-5 h-5" />
                                {formStatus === 'idle' && 'INITIALIZE_TRANSMISSION'}
                                {formStatus === 'loading' && 'PROCESSING...'}
                                {formStatus === 'success' && 'TRANSMISSION_COMPLETE'}
                                {formStatus === 'error' && 'TRANSMISSION_FAILED'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home; 