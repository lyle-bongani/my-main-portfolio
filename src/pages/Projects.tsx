import React, { useState, useEffect } from 'react';
import { Terminal, Code, Palette, ExternalLink, Github, Eye, Server, Layers } from 'lucide-react';
import BootSequence from '../components/BootSequence';

interface Project {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl?: string;
    type: 'frontend' | 'backend' | 'fullstack';
    technologies?: string[];
}

const Projects = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
    const [systemStatus, setSystemStatus] = useState<string[]>([]);

    const bootMessages = [
        'Loading project data...',
        'Initializing portfolio...',
        'Processing assets...',
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

    const projects: Project[] = [
        {
            title: 'PokéDex',
            description: 'A comprehensive Pokémon encyclopedia application with API integration for detailed Pokémon data, abilities, and stats.',
            image: 'https://pok-dex-iota.vercel.app/',
            liveUrl: 'https://pok-dex-iota.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/Pok-Dex.git',
            type: 'fullstack',
            technologies: ['TypeScript', 'React', 'PokeAPI', 'Node.js', 'Express']
        },
        {
            title: 'Backers New Inn',
            description: 'A modern restaurant management system built with Next.js and TypeScript for optimal performance and type safety.',
            image: 'https://backers-new-inn.vercel.app/',
            liveUrl: 'https://backers-new-inn.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/backers-new-inn',
            type: 'frontend',
            technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
        },
        {
            title: 'Fry Lyle App',
            description: 'A TypeScript-powered React frontend application for food delivery with modern UI components.',
            image: 'https://typscript-portfolio.vercel.app/',
            liveUrl: 'https://typscript-portfolio.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/typscript-portfolio',
            type: 'frontend',
            technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Redux']
        },
        {
            title: 'StreamMax',
            description: 'A mobile-first React TypeScript application for streaming content with responsive design.',
            image: 'https://stream-max-ruddy.vercel.app/',
            liveUrl: 'https://stream-max-ruddy.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/StreamMax',
            type: 'frontend',
            technologies: ['React', 'TypeScript', 'React Native', 'Mobile UI']
        },
        {
            title: 'Progress Report',
            description: 'A full-stack TypeScript application with Node.js backend and React frontend for comprehensive academic progress tracking.',
            image: 'https://progress-report-sage.vercel.app/',
            liveUrl: 'https://progress-report-sage.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/Progress-Report',
            type: 'fullstack',
            technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL']
        },
        {
            title: 'Tech Connect',
            description: 'A Next.js application with Firebase integration for professional networking and authentication.',
            image: 'https://tech-connect-blond.vercel.app/',
            liveUrl: 'https://tech-connect-blond.vercel.app/',
            githubUrl: 'https://github.com/lyle-bongani/tech-connect',
            type: 'fullstack',
            technologies: ['Next.js', 'Firebase', 'Firestore', 'Firebase Auth', 'TypeScript']
        }
    ];

    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' ? true : project.type === activeFilter
    );

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
                        {/* Header */}
                        <div className="cyber-border p-6">
                            <h1 className="text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                                <Code className="w-6 h-6" />
                                PROJECT_MATRIX
                            </h1>
                            <p className="text-[#81c784] mt-4">EXECUTING PROJECT VISUALIZATION SEQUENCE</p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`cyber-button px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base ${activeFilter === 'all' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                ALL
                            </button>
                            <button
                                onClick={() => setActiveFilter('frontend')}
                                className={`cyber-button px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base flex items-center gap-2 ${activeFilter === 'frontend' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                <Code className="w-3 h-3 sm:w-4 sm:h-4" /> FRONTEND
                            </button>
                            <button
                                onClick={() => setActiveFilter('backend')}
                                className={`cyber-button px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base flex items-center gap-2 ${activeFilter === 'backend' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                <Server className="w-3 h-3 sm:w-4 sm:h-4" /> BACKEND
                            </button>
                            <button
                                onClick={() => setActiveFilter('fullstack')}
                                className={`cyber-button px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base flex items-center gap-2 ${activeFilter === 'fullstack' ? 'text-[#92f792]' : 'text-[#81c784]'}`}
                            >
                                <Layers className="w-3 h-3 sm:w-4 sm:h-4" /> FULL STACK
                            </button>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className="group relative h-[300px] sm:h-[400px] cyber-border overflow-hidden">
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
                                                minHeight: '300px'
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
                                        <Eye className="w-16 h-16 sm:w-24 sm:h-24 text-[#92f792] drop-shadow-[0_0_15px_rgba(146,247,146,0.5)]" />
                                    </div>

                                    {/* Hover Content */}
                                    <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-8 flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl sm:text-2xl text-[#92f792] mb-2 sm:mb-3">{project.title}</h3>
                                            {!project.liveUrl && (
                                                <span className="cyber-button px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm text-[#92f792] animate-pulse">
                                                    IN_DEVELOPMENT
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[#81c784] text-sm sm:text-lg mb-4 sm:mb-6">{project.description}</p>

                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="text-xs sm:text-sm cyber-button px-2 py-1 sm:px-3 sm:py-1 text-[#81c784]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-6">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cyber-button flex items-center justify-center gap-2 text-[#92f792] hover:text-[#c8e6c9] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg"
                                            >
                                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                                LIVE PREVIEW
                                            </a>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cyber-button flex items-center justify-center gap-2 text-[#81c784] hover:text-[#c8e6c9] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg"
                                                >
                                                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
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