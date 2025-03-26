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
    ArrowLeft,
    ArrowRight,
    Star,
    Award,
    Target,
    Zap,
    Globe,
    Heart,
    Sparkles
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
    const [hoveredStat, setHoveredStat] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('welcome');

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

    const statDescriptions = {
        uiDesigns: 'Modern, intuitive interfaces that delight users',
        graphicDesigns: 'Creative visuals that tell compelling stories',
        devProjects: 'Robust applications built with cutting-edge tech',
        satisfaction: 'Happy clients who trust in my expertise'
    };

    const achievements = [
        { icon: Award, title: 'Best UI Design', description: 'Awarded for innovative interface design' },
        { icon: Star, title: 'Client Satisfaction', description: 'Consistently high client ratings' },
        { icon: Target, title: 'Project Success', description: '100% project completion rate' },
        { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround on all projects' }
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            setActiveSection('achievements');
        } else {
            setActiveSection('welcome');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="pt-20 min-h-screen relative overflow-hidden bg-[#1a1a1a]">
            <MatrixRain />

            {!bootSequence ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="cyber-border p-8 bg-[#1a1a1a] max-w-2xl w-full">
                        <div className="space-y-3">
                            {systemStatus.map((message, index) => (
                                <p key={index} className="text-[#c8e6c9] font-mono flex items-center gap-3">
                                    <Terminal className="w-4 h-4" />
                                    <span>{message}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-6">
                    {/* Welcome Section */}
                    <div className={`text-center mb-16 transition-opacity duration-500 ${activeSection === 'welcome' ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="cyber-border px-6 py-2 bg-[#81c784] bg-opacity-20 group hover:bg-opacity-30 transition-all duration-300">
                                <span className="text-[#c8e6c9] font-mono text-sm group-hover:text-[#92f792] transition-colors">
                                    Welcome to my portfolio
                                </span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#c8e6c9] mb-6 cyber-glitch">
                            <span ref={textRef}></span>
                        </h1>
                        <p className="text-[#c8e6c9] text-xl md:text-2xl max-w-3xl mx-auto group">
                            Crafting beautiful and functional digital experiences
                            <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-6 h-6 inline" />
                            </span>
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <span className="text-[#81c784] text-lg">by</span>
                            <div className="cyber-border px-4 py-1 bg-[#81c784] bg-opacity-10 group hover:bg-opacity-20 transition-all duration-300">
                                <span className="text-[#92f792] font-mono text-lg group-hover:text-[#c8e6c9] transition-colors">
                                    LYLE CHADYA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
                        {Object.entries(stats).map(([key, value]) => (
                            <div
                                key={key}
                                className="cyber-border p-8 bg-[#1a1a1a] group hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredStat(key)}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {key === 'uiDesigns' && <Palette className="w-7 h-7 text-[#c8e6c9] group-hover:text-[#92f792] transition-colors" />}
                                    {key === 'graphicDesigns' && <Layout className="w-7 h-7 text-[#c8e6c9] group-hover:text-[#92f792] transition-colors" />}
                                    {key === 'devProjects' && <Code className="w-7 h-7 text-[#c8e6c9] group-hover:text-[#92f792] transition-colors" />}
                                    {key === 'satisfaction' && <CheckCircle2 className="w-7 h-7 text-[#c8e6c9] group-hover:text-[#92f792] transition-colors" />}
                                    <h3 className="text-[#c8e6c9] font-semibold text-lg group-hover:text-[#92f792] transition-colors">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                                </div>
                                <p className="text-4xl font-bold text-[#c8e6c9] group-hover:text-[#92f792] transition-colors mb-2">
                                    {value}
                                </p>
                                {hoveredStat === key && (
                                    <p className="text-sm text-[#81c784] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {statDescriptions[key as keyof typeof statDescriptions]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Achievements Section */}
                    <div className="w-full max-w-6xl mb-16">
                        <h2 className="text-3xl font-bold text-[#c8e6c9] mb-8 text-center">ACHIEVEMENTS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="cyber-border p-8 bg-[#1a1a1a] group hover:bg-[#2a2a2a] transition-all duration-300">
                                    <achievement.icon className="w-10 h-10 text-[#92f792] mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-[#c8e6c9] font-semibold text-lg mb-3">{achievement.title}</h3>
                                    <p className="text-[#81c784] text-sm leading-relaxed">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-16 flex gap-6">
                        <Link to="/projects" className="cyber-button group flex items-center gap-3 px-8 py-4 text-lg">
                            <span>View Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="cyber-button group flex items-center gap-3 px-8 py-4 text-lg">
                            <span>Contact Me</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home; 