import React from 'react';
import Section from '../components/Section';

const Experience = () => {
    const experiences = [
        {
            role: 'SENIOR_DEVELOPER',
            company: 'CYBER_CORP',
            period: '2020 - PRESENT',
            achievements: [
                'Led development of quantum-resistant encryption system',
                'Optimized system performance by 300%',
                'Managed team of 5 elite developers'
            ]
        },
        {
            role: 'SECURITY_ENGINEER',
            company: 'MATRIX_SYSTEMS',
            period: '2018 - 2020',
            achievements: [
                'Developed advanced intrusion detection system',
                'Implemented zero-trust architecture',
                'Reduced security incidents by 80%'
            ]
        },
        {
            role: 'FULL_STACK_DEV',
            company: 'TECH_NEXUS',
            period: '2016 - 2018',
            achievements: [
                'Built scalable microservices architecture',
                'Implemented real-time data processing',
                'Developed AI-powered analytics dashboard'
            ]
        }
    ];

    return (
        <Section title="EXPERIENCE_LOG" dark>
            <div className="space-y-8">
                {experiences.map((exp) => (
                    <div key={exp.company} className="cyber-border p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 bg-[#0a0a0a] text-[#39ff14] text-sm">
                            {exp.period}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold cyber-glitch mb-2">{exp.role}</h3>
                            <p className="text-[#39ff14]">{exp.company}</p>
                        </div>

                        <div className="space-y-4">
                            {exp.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <span className="text-[#39ff14]">{'>'}</span>
                                    <p className="terminal-text">{achievement}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-2 cyber-border inline-block">
                            <span className="text-sm">STATUS: VERIFIED</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 cyber-border p-6">
                <h3 className="text-xl font-bold mb-4 cyber-glitch">SYSTEM_METRICS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-[#39ff14]">5+</div>
                        <div className="text-sm">Years Active</div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-[#39ff14]">50+</div>
                        <div className="text-sm">Projects</div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-[#39ff14]">100+</div>
                        <div className="text-sm">Commits</div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-[#39ff14]">10+</div>
                        <div className="text-sm">Systems</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience; 