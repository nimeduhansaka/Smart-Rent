import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate('/search');
        }
    };

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-transparent">

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="border border-neutral-800/80 bg-neutral-950/70 rounded-3xl shadow-sm">
                    <div className="flex items-center justify-between h-20 sm:h-24 px-5 sm:px-8">

                        {/* Logo section */}
                        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="SmartRent logo"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain"
                                loading="eager"
                                width={112}
                                height={112}
                            />
                        </Link>

                        {/* Middle: Nav links (desktop) */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link to="/browse" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">Browse</Link>
                            <Link to="/list-item" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">List Item</Link>
                            <Link to="/how-it-works" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">How it Works</Link>
                            <Link to="/contact" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">Contact Us</Link>
                        </div>

                        {/* Right: Search + Actions (desktop) */}
                        <div className="hidden md:flex items-center gap-3">
                            <div className="relative">
                                <Search
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"/>
                                <input
                                    type="text"
                                    placeholder="Search items..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearchKeyDown}
                                    className="w-64 bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all"
                                />
                            </div>
                            <Link to="/signin" onClick={handleLinkClick}
                                className="px-3 py-2 text-lg font-medium  text-neutral-300 hover:text-white transition-colors">
                                Sign In
                            </Link>
                            <Link to="/signup" onClick={handleLinkClick} className="px-3 py-2 text-lg font-medium bg-transparent border border-[#4ECDC4] text-neutral-300 rounded-xl hover:bg-[#4ECDC4] hover:text-white transition-colors duration-300 ease-in-out">
                                Get Started
                            </Link>


                        </div>


                        {/* Mobile: menu button */}
                        <button
                            className="md:hidden text-neutral-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle navigation"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile drawer */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-neutral-800 px-4 sm:px-6 py-4">
                            <div className="flex flex-col gap-4">
                                <div className="relative">
                                    <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                    <input
                                        type="text"
                                        placeholder="Search items..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleSearchKeyDown}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                    />
                                </div>
                                <Link to="/browse" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">Browse</Link>
                                <Link to="/list-item" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">List Item</Link>
                                <Link to="/how-it-works" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">How it Works</Link>
                                <div className="flex gap-2 pt-2">
                                    <Link to="/signin" onClick={handleLinkClick} className="flex-1 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-800 rounded-lg text-center">
                                        Sign In
                                    </Link>
                                    <Link to="/signup" onClick={handleLinkClick} className="flex-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all text-center">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
