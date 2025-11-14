import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">

                        {/* Logo section */}
                        <a href="#" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="SmartRent logo"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain"
                                loading="eager"
                                width={112}
                                height={112}
                            />
                        </a>

                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Your trusted platform for renting anything you need. Simple, secure, and sustainable.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Music</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Decoration</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Sports</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Uni Items</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Other Items</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">How it Works</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-400 text-sm">
                        © 2025 RentSmart. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg flex items-center justify-center transition-colors">
                            <Twitter className="w-4 h-4 text-neutral-400" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg flex items-center justify-center transition-colors">
                            <Github className="w-4 h-4 text-neutral-400" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg flex items-center justify-center transition-colors">
                            <Linkedin className="w-4 h-4 text-neutral-400" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg flex items-center justify-center transition-colors">
                            <Mail className="w-4 h-4 text-neutral-400" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}
