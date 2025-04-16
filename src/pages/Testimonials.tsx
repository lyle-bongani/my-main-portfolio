import React, { useState, useEffect } from 'react';
import { Terminal, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    message: string;
    rating: number;
}

const Testimonials = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
    const [systemStatus, setSystemStatus] = useState<string[]>([]);

    const bootMessages = [
        'Initializing feedback matrix...',
        'Loading client testimonials...',
        'Processing user experiences...',
        'System ready.'
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
        },
        {
            id: 4,
            name: 'Quinton Dlovu',
            role: 'Software Developer',
            avatar: './images/q.jpg',
            message: 'Collaborating with Lyle has been exceptional. His technical expertise and innovative approach to problem-solving make him an outstanding developer. His ability to write clean, maintainable code is remarkable.',
            rating: 5
        },
        {
            id: 5,
            name: 'Daniel Mudimba',
            role: 'UI/UX & Product Designer',
            avatar: './images/danial.png',
            message: 'As a designer, I\'m impressed by Lyle\'s ability to perfectly translate design mockups into functional code. He has a great understanding of design principles and always implements UI components with pixel-perfect precision while maintaining excellent performance.',
            rating: 5
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

    useEffect(() => {
        if (bootComplete) {
            const interval = setInterval(() => {
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 20000);
            return () => clearInterval(interval);
        }
    }, [bootComplete, testimonials.length]);

    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-3 sm:px-4 bg-[#1a1a1a]">
            <MatrixRain />
            <div className="max-w-6xl mx-auto">
                {!bootComplete ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center px-3">
                        <div className="cyber-border p-4 sm:p-8 bg-[#1a1a1a] w-full max-w-lg">
                            <div className="space-y-3">
                                {systemStatus.map((message, index) => (
                                    <p key={index} className="text-[#c8e6c9] font-mono text-sm sm:text-base flex items-center gap-3">
                                        <Terminal className="w-4 h-4" />
                                        <span>{message}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                        {/* Header */}
                        <div className="cyber-border p-4 sm:p-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold cyber-glitch text-[#c8e6c9] mb-3 sm:mb-4">
                                CLIENT_FEEDBACK_MATRIX
                            </h1>
                            <p className="text-[#81c784] text-sm sm:text-base">ANALYZING USER EXPERIENCES</p>
                        </div>

                        {/* Testimonials Display */}
                        <div className="relative cyber-border p-4 sm:p-6 bg-[#1a1a1a] min-h-[450px] sm:min-h-[400px]">
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1.5">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                            activeTestimonial === index ? 'bg-[#92f792] scale-125' : 'bg-[#81c784] opacity-50'
                                        }`}
                                    />
                                ))}
                            </div>

                            <div className="relative overflow-hidden pt-8 sm:pt-4">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`transition-all duration-500 ${
                                            activeTestimonial === index
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-full absolute top-0 left-0'
                                        }`}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start items-center gap-6 sm:gap-8 md:gap-12">
                                            {/* Avatar */}
                                            <div className="relative w-28 h-28 sm:w-40 sm:h-40 cyber-border p-1.5 sm:p-2 rounded-full overflow-hidden group flex-shrink-0">
                                                <div className="absolute inset-0 bg-[#92f792] opacity-20 group-hover:opacity-30 transition-opacity" />
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-full h-full rounded-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 border-2 border-[#92f792] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-3 sm:space-y-4 text-center md:text-left">
                                                <div className="relative">
                                                    <Quote className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 text-[#92f792] opacity-30" />
                                                    <p className="text-[#c8e6c9] text-base sm:text-lg italic pl-4 sm:pl-6 md:max-w-2xl">
                                                        {testimonial.message}
                                                    </p>
                                                </div>
                                                <div className="pt-3 sm:pt-4 space-y-2">
                                                    <h3 className="text-[#92f792] text-lg sm:text-xl font-bold">{testimonial.name}</h3>
                                                    <p className="text-[#81c784] text-sm sm:text-base">{testimonial.role}</p>
                                                    <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mt-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-6 h-6 sm:w-8 sm:h-8 text-[#92f792] fill-current animate-pulse"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="cyber-border p-3 sm:p-4">
                            <div className="flex items-center gap-2 text-[#81c784]">
                                <div className="w-2 h-2 rounded-full bg-[#92f792] animate-pulse"></div>
                                <span className="text-xs sm:text-sm font-mono">TESTIMONIAL_MATRIX.STATUS: OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials; 