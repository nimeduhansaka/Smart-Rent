import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { Music, Lamp, Trophy, GraduationCap, Package, Video, Star, MapPin } from 'lucide-react';

type FilterType = 'all' | 'available' | 'price-low' | 'rating';

export default function CategoryDetail() {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    // Scroll to top when category changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [categoryId]);

    const categoryInfo: Record<string, { title: string; icon: any; gradient: string }> = {
        music: { title: 'Music', icon: Music, gradient: 'from-violet-500 to-fuchsia-500' },
        decoration: { title: 'Decoration', icon: Lamp, gradient: 'from-amber-500 to-orange-500' },
        sports: { title: 'Sports', icon: Trophy, gradient: 'from-emerald-500 to-teal-500' },
        uni: { title: 'Uni Items', icon: GraduationCap, gradient: 'from-blue-500 to-cyan-500' },
        video: { title: 'Video', icon: Video, gradient: 'from-purple-500 to-indigo-500' },
        other: { title: 'Other Items', icon: Package, gradient: 'from-rose-500 to-pink-500' },
    };

    const category = categoryInfo[categoryId || 'other'];
    const Icon = category.icon;

    // Category-specific items
    const categoryItems: Record<string, any[]> = {
        music: [
            {
                id: 1,
                name: 'Professional Guitar',
                price: 2500,
                rating: 4.8,
                reviews: 32,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Keyboard Synthesizer',
                price: 3500,
                rating: 4.9,
                reviews: 28,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Drum Set',
                price: 5000,
                rating: 4.7,
                reviews: 45,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Studio Microphone',
                price: 1500,
                rating: 4.9,
                reviews: 67,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Violin with Case',
                price: 3000,
                rating: 4.6,
                reviews: 21,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'DJ Controller',
                price: 7500,
                rating: 4.8,
                reviews: 38,
                location: 'Sabaragamuwa Province',
                image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400',
                available: true,
            },
        ],
        decoration: [
            {
                id: 1,
                name: 'Vintage Table Lamps',
                price: 1000,
                rating: 4.7,
                reviews: 24,
                location: 'Uva Province',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED String Lights',
                price: 2500,
                rating: 4.9,
                reviews: 45,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Wedding Arch Set',
                price: 22500,
                rating: 4.8,
                reviews: 18,
                location: 'Central Province',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Balloon Decoration Kit',
                price: 10000,
                rating: 4.6,
                reviews: 52,
                location: 'Uva Province',
                image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Folding Chairs (Set of 10)',
                price: 4000,
                rating: 4.5,
                reviews: 31,
                location: 'Sabaragamuwa Province',
                image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400',
                available: true,
            },
        ],
        sports: [
            {
                id: 1,
                name: 'Mountain Bike',
                price: 1500,
                rating: 4.8,
                reviews: 42,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Tennis Racket Set',
                price: 1800,
                rating: 4.7,
                reviews: 28,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Camping Tent (4 Person)',
                price: 3000,
                rating: 4.9,
                reviews: 56,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Kayak with Paddle',
                price: 3500,
                rating: 4.8,
                reviews: 33,
                location: 'Central Province',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Golf Club Set',
                price: 3500,
                rating: 4.6,
                reviews: 24,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'Surfboard',
                price: 2800,
                rating: 4.7,
                reviews: 19,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400',
                available: true,
            },
        ],
        uni: [
            {
                id: 1,
                name: 'Scientific Calculator',
                price: 500,
                rating: 4.6,
                reviews: 47,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Engineering Textbook Set',
                price: 250,
                rating: 4.5,
                reviews: 31,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Laptop Stand & Accessories',
                price: 1200,
                rating: 4.8,
                reviews: 54,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Study Desk Lamp',
                price: 250,
                rating: 4.7,
                reviews: 38,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Art Supplies Kit',
                price: 500,
                rating: 4.9,
                reviews: 26,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400',
                available: true,
            },
        ],
        video: [
            {
                id: 1,
                name: 'DSLR Camera Kit',
                price: 6000,
                rating: 4.9,
                reviews: 64,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED Ring Light',
                price: 1000,
                rating: 4.8,
                reviews: 52,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Video Tripod Pro',
                price: 1800,
                rating: 4.7,
                reviews: 38,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Drone with 4K Camera',
                price: 7500,
                rating: 4.9,
                reviews: 41,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'GoPro Action Camera',
                price: 3500,
                rating: 4.8,
                reviews: 57,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'Studio Lighting Kit',
                price: 5000,
                rating: 4.7,
                reviews: 29,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=400',
                available: true,
            },
        ],
        other: [
            {
                id: 1,
                name: 'Power Tools Set',
                price: 3500,
                rating: 4.6,
                reviews: 43,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Pressure Washer',
                price: 3000,
                rating: 4.8,
                reviews: 36,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Projector & Screen',
                price: 4500,
                rating: 4.7,
                reviews: 28,
                location: 'Eastern Province',
                image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Party Speaker System',
                price: 3000,
                rating: 4.9,
                reviews: 51,
                location: 'Southern Province',
                image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Ladder (Extension)',
                price: 1800,
                rating: 4.5,
                reviews: 22,
                location: 'Western Province',
                image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400',
                available: true,
            },
        ],
    };

    // Get items for current category
    const allItems = categoryItems[categoryId || 'other'] || categoryItems.other;

    // Filter and sort items based on active filter
    const items = useMemo(() => {
        let filtered = [...allItems];

        switch (activeFilter) {
            case 'available':
                filtered = filtered.filter(item => item.available);
                break;
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return filtered;
    }, [activeFilter, allItems]);

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">{category.title}</h1>
                        <p className="text-neutral-400 mt-1">{items.length} items available</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-8">
                    <button 
                        onClick={() => setActiveFilter('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeFilter === 'all' 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                    >
                        All Items ({allItems.length})
                    </button>
                    <button 
                        onClick={() => setActiveFilter('available')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeFilter === 'available' 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                    >
                        Available Now ({allItems.filter(i => i.available).length})
                    </button>
                    <button 
                        onClick={() => setActiveFilter('price-low')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeFilter === 'price-low' 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                    >
                        Price: Low to High
                    </button>
                    <button 
                        onClick={() => setActiveFilter('rating')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeFilter === 'rating' 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                    >
                        Highest Rating
                    </button>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {!item.available && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-neutral-900 text-white rounded-lg font-medium">
                                            Currently Rented
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 space-y-3">
                                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                    {item.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>{item.rating}</span>
                                    </div>
                                    <span className="text-neutral-500">({item.reviews})</span>
                                    <div className="flex items-center gap-1 text-neutral-400">
                                        <MapPin className="w-4 h-4" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                                    <div className="text-white font-semibold">
                                        Rs.{item.price}.00
                                        <span className="text-neutral-400 text-sm font-normal">/day</span>
                                    </div>
                                    {item.available && (
                                        <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all">
                                            Rent Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
