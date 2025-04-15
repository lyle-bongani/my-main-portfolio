import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Home, User, Code, Briefcase, Star, MessageSquare } from 'lucide-react';

interface NavItem {
    name: string;
    path: string;
    icon: React.ElementType;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.getElementById('mobile-menu');
            if (nav && !nav.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const navItems: NavItem[] = [
        { name: 'HOME', path: '/', icon: Home },
        { name: 'ABOUT', path: '/about', icon: User },
        { name: 'SKILLS', path: '/skills', icon: Code },
        { name: 'PROJECTS', path: '/projects', icon: Briefcase },
        { name: 'TESTIMONIALS', path: '/testimonials', icon: Star },
        { name: 'CONTACT', path: '/contact', icon: MessageSquare },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
            scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-[0_0_15px_rgba(146,247,146,0.1)]' : 'bg-[#1a1a1a]'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[70]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-[#92f792] hover:text-[#c8e6c9] transition-all group"
                    >
                        <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-bold text-lg tracking-wider cyber-glitch">[LC]</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative px-4 py-2 text-sm group transition-all duration-300 hover:text-[#92f792] ${
                                        isActive ? 'text-[#92f792]' : 'text-[#81c784]'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon className={`w-4 h-4 transition-transform duration-300 ${
                                            isActive ? 'scale-110' : 'group-hover:scale-110'
                                        }`} />
                                        <span>{item.name}</span>
                                    </div>
                                    {/* Active indicator line */}
                                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#92f792] transform origin-left transition-transform duration-300 ${
                                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                                    {/* Glow effect for active item */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#92f792] opacity-5 rounded" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden cyber-button p-2 hover:text-[#92f792] focus:outline-none transition-transform duration-300 hover:scale-105"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-[#92f792]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#81c784]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-menu"
                className={`lg:hidden fixed top-16 right-0 w-[280px] sm:w-[320px] h-[calc(100vh-4rem)] bg-[#1a1a1a] border-l border-[#81c784] border-opacity-30 transform transition-all duration-300 ease-in-out z-[50] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } shadow-[0_0_15px_rgba(146,247,146,0.1)]`}
            >
                <div className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 text-base sm:text-lg relative overflow-hidden group transition-all duration-300 ${
                                    isActive
                                        ? 'cyber-border bg-[#81c784] bg-opacity-10 text-[#92f792]'
                                        : 'text-[#81c784] hover:bg-[#81c784] hover:bg-opacity-5'
                                }`}
                            >
                                <Icon className={`w-5 h-5 transition-transform duration-300 ${
                                    isActive ? 'scale-110' : 'group-hover:scale-110'
                                }`} />
                                <span className="relative">
                                    {item.name}
                                    {/* Underline effect */}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#92f792] transform origin-left transition-transform duration-300 ${
                                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                                </span>
                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#92f792] rounded-l" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-[40] transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
};

export default Navbar; 