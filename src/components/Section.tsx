import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', dark = false }) => {
    return (
        <section className={`py-20 px-4 ${dark ? 'matrix-bg' : ''} ${className}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 cyber-glitch">
                    [{title}]
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section; 