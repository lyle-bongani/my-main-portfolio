import React, { useState, useEffect } from 'react';
import { Terminal, Code, Rocket, Star, Bot, Globe, Book, Binary, ChevronRight, User } from 'lucide-react';
import BootSequence from '../components/BootSequence';

const About = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [systemStatus, setSystemStatus] = useState<string[]>([]);

    const bootMessages = [
        'Initializing design system...',
        'Loading UI components...',
        'Establishing creative connection...',
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

    return (
        <div className="min-h-screen pt-20 px-4 bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                {!bootComplete ? (
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
                    <div className="space-y-8 animate-fadeIn">
                        {/* Hero Section with Image */}
                        <div className="cyber-border p-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/3 relative">
                                    <div className="aspect-square relative">
                                        <img
                                            src="/images/me.jpg"
                                            alt="Lyle Chadya"
                                            className="w-full h-full object-cover rounded-lg cyber-border p-1"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h1 className="text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                                        <User className="w-6 h-6" />
                                        ABOUT_SYSTEM
                                    </h1>
                                    <p className="text-[#81c784] mt-4">I'm Lyle Chadya, a Software Developer with a passion for crafting innovative digital experiences</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                                        <div className="cyber-border p-3 text-center">
                                            <div className="text-[#92f792] text-xl font-bold">01</div>
                                            <div className="text-[#81c784] text-sm">Years of Experience</div>
                                        </div>
                                        <div className="cyber-border p-3 text-center">
                                            <div className="text-[#92f792] text-xl font-bold">15+</div>
                                            <div className="text-[#81c784] text-sm">Projects</div>
                                        </div>
                                        <div className="cyber-border p-3 text-center">
                                            <div className="text-[#92f792] text-xl font-bold">100%</div>
                                            <div className="text-[#81c784] text-sm">Client Satisfaction</div>
                                        </div>
                                        <div className="cyber-border p-3 text-center">
                                            <div className="text-[#92f792] text-xl font-bold">24/7</div>
                                            <div className="text-[#81c784] text-sm">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Journey Section */}
                        <div className="cyber-border p-6">
                            <h2 className="text-xl font-bold mb-6 text-[#92f792] flex items-center gap-3">
                                <Rocket className="w-5 h-5" />
                                INITIALIZATION_SEQUENCE
                            </h2>
                            <div className="space-y-4 text-[#c8e6c9]">
                                <div className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-[#81c784] mt-1" />
                                    <p className="leading-relaxed">
                                        After joining Uncommon.org's bootcamp in Bulawayo, I embarked on an exciting journey into Software Development
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="cyber-border p-6">
                            <h2 className="text-xl font-bold mb-6 text-[#92f792] flex items-center gap-3">
                                <Star className="w-5 h-5" />
                                EXECUTED_PROGRAMS
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <a 
                                    href="https://backers-new-inn.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all cursor-pointer"
                                >
                                    <Globe className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">Backers New Inn</h3>
                                    <p className="text-[#c8e6c9] text-sm">A modern restaurant website with online ordering capabilities</p>
                                </a>
                                <a 
                                    href="https://typscript-portfolio.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all cursor-pointer"
                                >
                                    <Binary className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">Fry Lyle</h3>
                                    <p className="text-[#c8e6c9] text-sm">A food delivery application with real-time order tracking</p>
                                </a>
                                <a 
                                    href="https://pok-dex-iota.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all cursor-pointer"
                                >
                                    <Bot className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">PokéDex</h3>
                                    <p className="text-[#c8e6c9] text-sm">A Pokémon encyclopedia application using PokeAPI</p>
                                </a>
                            </div>
                        </div>

                        {/* Future Vision */}
                        <div className="cyber-border p-6">
                            <h2 className="text-xl font-bold mb-6 text-[#92f792] flex items-center gap-3">
                                <Book className="w-5 h-5" />
                                FUTURE_PROTOCOLS
                            </h2>
                            <div className="bg-[#81c784] bg-opacity-10 p-4 rounded-lg">
                                <p className="text-[#c8e6c9] leading-relaxed">
                                    As I continue to grow in the development space, I'm eager to build impactful digital experiences, explore new technologies, and contribute to innovative projects.
                                </p>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-4">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-sm font-mono">SYSTEM.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About; 