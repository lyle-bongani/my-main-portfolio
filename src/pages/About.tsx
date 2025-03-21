import React, { useEffect, useState } from 'react';
import { Terminal, Code, Rocket, Star, Bot, Globe, Book, Binary, ChevronRight } from 'lucide-react';

const About = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);

    const bioLines = [
        '> INITIALIZING_PERSONAL_DATA',
        '> LOADING_BACKGROUND_INFO',
        '> ACCESSING_JOURNEY_DETAILS',
        '> SYSTEM_READY'
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        bioLines.forEach((_, index) => {
            timeout = setTimeout(() => {
                setCurrentLine(index);
                if (index === bioLines.length - 1) {
                    setShowContent(true);
                }
            }, index * 800);
        });

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen pt-20 px-4 bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                {/* Boot Sequence */}
                <div className="mb-8 font-mono">
                    {bioLines.slice(0, currentLine + 1).map((line, index) => (
                        <div
                            key={index}
                            className="text-[#81c784] flex items-center gap-2 mb-2"
                        >
                            <Terminal className="w-4 h-4" />
                            <span>{line}</span>
                        </div>
                    ))}
                </div>

                {showContent && (
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
                                        {/* Decorative elements */}
                                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#92f792]"></div>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#92f792]"></div>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#92f792]"></div>
                                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#92f792]"></div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#92f792] opacity-10 animate-pulse rounded-lg"></div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-6 cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                                        <Code className="w-6 h-6" />
                                        SYSTEM.IDENTITY
                                    </h1>
                                    <p className="text-[#c8e6c9] text-lg leading-relaxed mb-4">
                                        I'm Lyle Chadya, a Web Developer & UI/UX Designer with a passion for creating innovative digital experiences.
                                    </p>
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
                                        After joining Uncommon.org's bootcamp in Bulawayo, I embarked on an exciting journey into web development and design.
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
                                <div className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all">
                                    <Globe className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">Jamason Website</h3>
                                    <p className="text-[#c8e6c9] text-sm">Enhanced user experience and modern interface implementation</p>
                                </div>
                                <div className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all">
                                    <Binary className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">Camps Pharmaceuticals</h3>
                                    <p className="text-[#c8e6c9] text-sm">Developed professional web presence for healthcare sector</p>
                                </div>
                                <div className="cyber-border p-4 hover:bg-[#81c784] hover:bg-opacity-10 transition-all">
                                    <Bot className="w-6 h-6 text-[#81c784] mb-3" />
                                    <h3 className="text-[#92f792] font-bold mb-2">Quiily Bot</h3>
                                    <p className="text-[#c8e6c9] text-sm">A chatbot built for development and learning purposes</p>
                                </div>
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