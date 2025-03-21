import React, { useState, useEffect } from 'react';
import { Terminal, Code, Palette, ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl?: string;
    type: 'dev' | 'design';
    technologies?: string[];
}

const Projects = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);
    const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'design'>('all');

    const bootLines = [
        '> INITIALIZING_PROJECT_MATRIX',
        '> LOADING_PORTFOLIO_DATA',
        '> RENDERING_INTERFACE',
        '> SYSTEM_READY'
    ];

    const projects: Project[] = [
        {
            title: 'Fudo Restaurant',
            description: 'A modern restaurant website with online ordering capabilities.',
            image: 'https://fudo-cyan.vercel.app/',
            liveUrl: 'https://fudo-cyan.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/Fudo.git',
            type: 'dev',
            technologies: ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            title: 'Fry Lyle',
            description: 'A food delivery application with real-time order tracking and seamless checkout process.',
            image: 'https://typscript-portfolio.vercel.app/',
            liveUrl: 'https://typscript-portfolio.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/typscript-portfolio',
            type: 'dev',
            technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Food Delivery API']
        },
        {
            title: 'PokéDex',
            description: 'A Pokémon encyclopedia application.',
            image: 'https://pok-dex-iota.vercel.app/',
            liveUrl: 'https://pok-dex-iota.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/Pok-Dex.git',
            type: 'dev',
            technologies: ['React', 'PokeAPI', 'CSS']
        },
        {
            title: 'Real Estate Platform',
            description: 'Modern real estate platform design with property listings and search.',
            image: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/ZaW7HoEmD2mdjQgHWm5KnS/REAL-LYLE-ESTATE',
            liveUrl: 'https://www.figma.com/proto/ZaW7HoEmD2mdjQgHWm5KnS/REAL-LYLE-ESTATE?node-id=11-2&starting-point-node-id=11%3A2&scaling=scale-down-width&content-scaling=fixed&t=Ta0bcEthezPAx65d-1',
            type: 'design'
        },
        {
            title: 'Jameson Website',
            description: 'Redesign concept for Jameson whiskey website.',
            image: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/cxlKc7PYVLrqTVycRTNQW6/JAMESON-LYLE',
            liveUrl: 'https://www.figma.com/proto/cxlKc7PYVLrqTVycRTNQW6/JAMESON-LYLE?node-id=1-2&t=VLmfmUzFtI9DnPRY-1',
            type: 'design'
        },
        {
            title: 'Luxury Watch Retail',
            description: 'E-commerce design for luxury timepieces.',
            image: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/4fBZUDfiTLPVER1IUI1YP1/Luxury-watch-retail-lyle',
            liveUrl: 'https://www.figma.com/proto/4fBZUDfiTLPVER1IUI1YP1/Luxury-watch-retail-lyle?node-id=17-3913&t=8XL61VvKZEIsvmzR-1',
            type: 'design'
        },
        {
            title: 'Food App Design',
            description: 'Mobile app design for food delivery service.',
            image: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/g0wVjkoplcHQAwNV0ESare/Food-app-design-Lyle',
            liveUrl: 'https://www.figma.com/proto/g0wVjkoplcHQAwNV0ESare/Food-app-design-Lyle?node-id=87-70&starting-point-node-id=27%3A2&t=pv4xNut81s26VsDO-1',
            type: 'design'
        }
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

    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' ? true : project.type === activeFilter
    );

    return (
        <div className="min-h-screen pt-20 px-4 bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
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
                                <Code className="w-6 h-6" />
                                PROJECT_MATRIX
                            </h1>
                            <p className="text-[#81c784] mt-4">EXECUTING PROJECT VISUALIZATION SEQUENCE</p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`cyber-button px-6 py-2 ${activeFilter === 'all' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                ALL
                            </button>
                            <button
                                onClick={() => setActiveFilter('dev')}
                                className={`cyber-button px-6 py-2 flex items-center gap-2 ${activeFilter === 'dev' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                <Code className="w-4 h-4" /> DEV
                            </button>
                            <button
                                onClick={() => setActiveFilter('design')}
                                className={`cyber-button px-6 py-2 flex items-center gap-2 ${activeFilter === 'design' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                <Palette className="w-4 h-4" /> DESIGN
                            </button>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className="group relative h-[400px] cyber-border overflow-hidden">
                                    {/* Background iframe (always blurred) */}
                                    <div className="absolute inset-0 filter blur-sm">
                                        <iframe
                                            src={project.image}
                                            title={project.title}
                                            className="w-full h-full"
                                            style={{
                                                border: 'none',
                                                width: '100%',
                                                height: '100%',
                                                minHeight: '400px'
                                            }}
                                            loading="lazy"
                                            sandbox="allow-scripts allow-same-origin allow-popups"
                                            allow="fullscreen"
                                        />
                                        {/* Green tint overlay */}
                                        <div className="absolute inset-0 bg-[#92f792] opacity-10 mix-blend-overlay"></div>
                                    </div>

                                    {/* Default View - Big Eye Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0">
                                        <Eye className="w-24 h-24 text-[#92f792] drop-shadow-[0_0_15px_rgba(146,247,146,0.5)]" />
                                    </div>

                                    {/* Hover Content */}
                                    <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-2xl text-[#92f792] mb-3">{project.title}</h3>
                                            {!project.liveUrl && (
                                                <span className="cyber-button px-3 py-1 text-sm text-[#92f792] animate-pulse">
                                                    IN_DEVELOPMENT
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[#81c784] text-lg mb-6">{project.description}</p>

                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-3 mb-6">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="text-sm cyber-button px-3 py-1 text-[#81c784]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-auto flex gap-6">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cyber-button flex items-center gap-2 text-[#92f792] hover:text-[#c8e6c9] px-6 py-3 text-lg"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                {project.type === 'design' ? 'VIEW DESIGN' : 'LIVE PREVIEW'}
                                            </a>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cyber-button flex items-center gap-2 text-[#81c784] hover:text-[#c8e6c9] px-6 py-3 text-lg"
                                                >
                                                    <Github className="w-5 h-5" />
                                                    CODE
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-4">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-sm font-mono">PROJECT_MATRIX.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects; 