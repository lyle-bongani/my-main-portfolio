import React, { useState, useEffect } from 'react';
import {
    Terminal,
    Palette,
    Code,
    Server,
    Wrench,
    Layers,
    PenTool,
    Monitor,
    Cpu,
    Workflow,
    Brain
} from 'lucide-react';

interface Skill {
    name: string;
    proficiency: number;
}

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: Skill[];
}

const Skills = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('Frontend');
    const [systemStatus, setSystemStatus] = useState<string[]>([]);

    const bootMessages = [
        'Initializing skill matrix...',
        'Loading proficiency data...',
        'Analyzing capabilities...',
        'System ready.'
    ];

    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            icon: Monitor,
            skills: [
                { name: 'HTML/CSS', proficiency: 95 },
                { name: 'JavaScript (ES6+)', proficiency: 90 },
                { name: 'TypeScript', proficiency: 85 },
                { name: 'React', proficiency: 90 },
                { name: 'Next.js', proficiency: 85 },
                { name: 'Tailwind CSS', proficiency: 95 },
                { name: 'Styled Components', proficiency: 85 },
                { name: 'Framer Motion', proficiency: 80 }
            ]
        },
        {
            title: 'Backend',
            icon: Server,
            skills: [
                { name: 'Node.js', proficiency: 80 },
                { name: 'Firebase Firestore', proficiency: 85 },
                { name: 'MongoDB', proficiency: 80 }
            ]
        },
        {
            title: 'Tools & Methods',
            icon: Wrench,
            skills: [
                { name: 'VSCode', proficiency: 95 },
                { name: 'GitHub', proficiency: 90 },
                { name: 'Figma', proficiency: 60 },
                { name: 'Canva', proficiency: 60 },
                { name: 'WordPress', proficiency: 80 }
            ]
        },
        {
            title: 'Personal Skills',
            icon: Brain,
            skills: [
                { name: 'Problem Solving', proficiency: 90 },
                { name: 'Team Collaboration', proficiency: 85 },
                { name: 'Time Management', proficiency: 85 },
                { name: 'Communication', proficiency: 90 },
                { name: 'Adaptability', proficiency: 85 },
                { name: 'Project Management', proficiency: 80 }
            ]
        }
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
                        {/* Header */}
                        <div className="cyber-border p-6">
                            <h1 className="text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] flex items-center gap-3">
                                <Code className="w-6 h-6" />
                                SKILL_MATRIX
                            </h1>
                            <p className="text-[#81c784] mt-4">SELECT CATEGORY TO VIEW DETAILED ANALYSIS</p>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Categories Navigation */}
                            <div className="cyber-border p-4 space-y-2">
                                {skillCategories.map((category) => {
                                    const Icon = category.icon;
                                    return (
                                        <button
                                            key={category.title}
                                            onClick={() => setActiveCategory(category.title)}
                                            className={`w-full flex items-center gap-3 p-3 transition-all ${activeCategory === category.title
                                                ? 'cyber-border bg-[#81c784] bg-opacity-20 text-[#92f792]'
                                                : 'text-[#81c784] hover:bg-[#81c784] hover:bg-opacity-10'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="text-sm">{category.title}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Skills Display */}
                            <div className="col-span-1 md:col-span-3 cyber-border p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {skillCategories
                                        .find((cat) => cat.title === activeCategory)
                                        ?.skills.map((skill) => (
                                            <div key={skill.name} className="cyber-border p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[#c8e6c9]">{skill.name}</span>
                                                    <span className="text-[#92f792] text-sm">{skill.proficiency}%</span>
                                                </div>
                                                <div className="h-2 bg-[#81c784] bg-opacity-20 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#92f792] transition-all duration-1000"
                                                        style={{ width: `${skill.proficiency}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-4">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-sm font-mono">SKILL_MATRIX.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills; 