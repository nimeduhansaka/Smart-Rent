import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
                    <p className="text-neutral-400">Sign in to continue to SmartRent</p>
                </div>

                {/* Form */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-neutral-400 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-neutral-700 bg-neutral-950 text-emerald-500 focus:ring-emerald-500/50"
                            />
                            Remember me
                        </label>
                        <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20">
                        Sign In
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-neutral-900 text-neutral-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="py-3 px-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-800 transition-colors">
                            Google
                        </button>
                        <button className="py-3 px-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-800 transition-colors">
                            Facebook
                        </button>
                    </div>

                    <p className="text-center text-sm text-neutral-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
