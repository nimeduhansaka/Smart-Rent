import { TrendingUp, Shield, Zap } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Rent Anything,
                            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent pb-3.5">
                Anytime, Anywhere
              </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            Explore rentals from music gear to sports tools and project essentials. Find what you need fast, rent anytime easily.
                        </p>

                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
                            Explore Categories
                        </button>
                        <button className="px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all border border-neutral-800">
                            List Your Item
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-white font-medium">Best Prices</h3>
                            <p className="text-neutral-400 text-sm text-center">Competitive rates for all items</p>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                                <Shield className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-white font-medium">Secure Rentals</h3>
                            <p className="text-neutral-400 text-sm text-center">Protected transactions & insurance</p>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                <Zap className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-white font-medium">Quick Process</h3>
                            <p className="text-neutral-400 text-sm text-center">Rent in minutes, not hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
