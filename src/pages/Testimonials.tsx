import React, { useState, useEffect } from 'react';
import { Terminal, Star, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    message: string;
    rating: number;
}

const Testimonials = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

    const bootLines = [
        '> INITIALIZING_FEEDBACK_MATRIX',
        '> LOADING_CLIENT_DATA',
        '> PROCESSING_TESTIMONIALS',
        '> SYSTEM_READY'
    ];

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Tonderai Kawere',
            role: 'SOftware Development Instructor @Uncommon.org',
            avatar: './images/tonde.webp',
            message: 'Lyle\'s dedication to clean code and modern design principles is impressive. His work on our projects demonstrated strong problem-solving skills and attention to detail.',
            rating: 5
        },
        {
            id: 2,
            name: 'Gracious Tshabangu',
            role: 'Digital Marketing Instructor @Uncommon.org',
            avatar: './images/grace.webp',
            message: 'Working with Lyle was a great experience. His understanding of UI/UX principles and ability to implement complex features efficiently made him a valuable team member.',
            rating: 5
        },
        {
            id: 3,
            name: 'Dylan',
            role: 'UI/UX Design Instructor @Uncommon.org',
            avatar: './images/dylan.webp',
            message: 'Lyle consistently delivered high-quality work and showed great initiative in improving our project workflows. His cyberpunk-inspired designs brought a unique perspective to our applications.',
            rating: 5
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

    useEffect(() => {
        if (showContent) {
            const interval = setInterval(() => {
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [showContent, testimonials.length]);

    return (
        <div className="min-h-screen pt-20 px-4 bg-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">
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
                            <h1 className="text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] mb-4">
                                CLIENT_FEEDBACK_MATRIX
                            </h1>
                            <p className="text-[#81c784]">ANALYZING USER EXPERIENCES</p>
                        </div>

                        {/* Testimonials Display */}
                        <div className="relative cyber-border p-6 bg-[#1a1a1a] min-h-[400px]">
                            <div className="absolute top-4 right-4 flex gap-1">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-[#92f792] scale-125' : 'bg-[#81c784] opacity-50'
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="relative overflow-hidden">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`transition-all duration-500 ${activeTestimonial === index
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-full absolute top-0 left-0'
                                            }`}
                                    >
                                        <div className="flex flex-col md:flex-row items-center gap-8">
                                            {/* Avatar */}
                                            <div className="relative w-40 h-40 cyber-border p-2 rounded-full overflow-hidden group">
                                                <div className="absolute inset-0 bg-[#92f792] opacity-20 group-hover:opacity-30 transition-opacity" />
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-full h-full rounded-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 border-2 border-[#92f792] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-5 h-5 text-[#92f792] fill-current animate-pulse"
                                                        />
                                                    ))}
                                                </div>
                                                <div className="relative">
                                                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#92f792] opacity-30" />
                                                    <p className="text-[#c8e6c9] text-lg italic pl-6">
                                                        {testimonial.message}
                                                    </p>
                                                </div>
                                                <div className="pt-4">
                                                    <h3 className="text-[#92f792] text-xl font-bold">{testimonial.name}</h3>
                                                    <p className="text-[#81c784]">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-4">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-sm font-mono">TESTIMONIAL_MATRIX.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials; 