import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Home, User, Code, Briefcase, Star, MessageSquare, Phone } from 'lucide-react';

interface NavItem {
    name: string;
    path: string;
    icon: React.ElementType;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#81c784] border-opacity-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-[#92f792] hover:text-[#c8e6c9] transition-colors">
                        <Terminal className="w-6 h-6" />
                        <span className="font-bold text-lg">[LC]</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-3 py-2 text-sm cyber-button ${location.pathname === item.path ? 'text-[#92f792]' : 'text-[#81c784]'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden cyber-button p-2 hover:text-[#92f792] focus:outline-none"
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
                className={`md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-[#1a1a1a] border-l border-[#81c784] border-opacity-30 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 text-sm cyber-border ${location.pathname === item.path
                                    ? 'bg-[#81c784] bg-opacity-20 text-[#92f792]'
                                    : 'text-[#81c784] hover:bg-[#81c784] hover:bg-opacity-10'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 