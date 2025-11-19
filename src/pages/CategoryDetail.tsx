import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { Music, Lamp, Trophy, GraduationCap, Package, Video, Star, MapPin } from 'lucide-react';

type FilterType = 'all' | 'available' | 'price-low' | 'rating';

interface CategoryDetailProps {
    searchQuery?: string;
}

export default function CategoryDetail({ searchQuery = '' }: CategoryDetailProps) {
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

        // Music item section
        music: [
            {
                id: 1,
                name: 'Professional Guitar',
                price: 25,
                rating: 4.8,
                reviews: 32,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Keyboard Synthesizer',
                price: 35,
                rating: 4.9,
                reviews: 28,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Drum Set',
                price: 50,
                rating: 4.7,
                reviews: 45,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Studio Microphone',
                price: 15,
                rating: 4.9,
                reviews: 67,
                location: 'Kurunagala',
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Violin with Case',
                price: 30,
                rating: 4.6,
                reviews: 21,
                location: 'Matara',
                image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400',
                available: true,
            },
            {
                id: 6,
                name: 'DJ Controller',
                price: 40,
                rating: 4.8,
                reviews: 38,
                location: 'Anuradhapura',
                image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400',
                available: true,
            },
            {
                id: 7,
                name: 'Portable PA Tower',
                price: 75,
                rating: 4.9,
                reviews: 22,
                location: 'Nuwara Eliya',
                image: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=400',
                available: false,
            },
            {
                id: 8,
                name: 'Modern Bass Guitar',
                price: 45,
                rating: 4.7,
                reviews: 30,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1543060749-aa3f115aad09?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80',
                available: true,
            },
            {
                id: 9,
                name: 'Modular Synth Rack',
                price: 55,
                rating: 4.8,
                reviews: 27,
                location: 'Kalutara',
                image: 'https://images.unsplash.com/photo-1625466124375-dcb0bae69af7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80',
                available: true,
            },
            {
                id: 10,
                name: 'Hybrid Drum Pad',
                price: 40,
                rating: 4.6,
                reviews: 19,
                location: 'Elpitiya',
                image: 'https://images.unsplash.com/photo-1647788738087-d6249557cf62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80',
                available: false,
            },
        ],

        // Decoration item section
        decoration: [
            {
                id: 1,
                name: 'Vintage Table Lamps',
                price: 15,
                rating: 4.7,
                reviews: 24,
                location: 'Kalutara',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED String Lights',
                price: 12,
                rating: 4.9,
                reviews: 45,
                location: 'Matara',
                image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Wedding Arch Set',
                price: 80,
                rating: 4.8,
                reviews: 18,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Balloon Decoration Kit',
                price: 20,
                rating: 4.6,
                reviews: 52,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Folding Chairs (Set of 10)',
                price: 35,
                rating: 4.5,
                reviews: 31,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400',
                available: false,
            },
        ],

        // Sport section
        sports: [
            {
                id: 1,
                name: 'Mountain Bike',
                price: 30,
                rating: 4.8,
                reviews: 42,
                location: 'Matara',
                image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Tennis Racket Set',
                price: 18,
                rating: 4.7,
                reviews: 28,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Camping Tent (4 Person)',
                price: 40,
                rating: 4.9,
                reviews: 56,
                location: 'Kurunagala',
                image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Kayak with Paddle',
                price: 45,
                rating: 4.8,
                reviews: 33,
                location: 'Anuradhapura',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Golf Club Set',
                price: 35,
                rating: 4.6,
                reviews: 24,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400',
                available: false,
            },
            {
                id: 6,
                name: 'Surfboard',
                price: 28,
                rating: 4.7,
                reviews: 19,
                location: 'Hambantota',
                image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400',
                available: true,
            },
        ],

        // Uni item section
        uni: [
            {
                id: 1,
                name: 'Scientific Calculator',
                price: 8,
                rating: 4.6,
                reviews: 47,
                location: 'Pambahinna',
                image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Engineering Textbook Set',
                price: 25,
                rating: 4.5,
                reviews: 31,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Laptop Stand & Accessories',
                price: 12,
                rating: 4.8,
                reviews: 54,
                location: 'Anuradhapura',
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Study Desk Lamp',
                price: 10,
                rating: 4.7,
                reviews: 38,
                location: 'Jaffna',
                image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Art Supplies Kit',
                price: 20,
                rating: 4.9,
                reviews: 26,
                location: 'Trincomale',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400',
                available: true,
            },
        ],

        // Video section
        video: [
            {
                id: 1,
                name: 'DSLR Camera Kit',
                price: 60,
                rating: 4.9,
                reviews: 64,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'LED Ring Light',
                price: 20,
                rating: 4.8,
                reviews: 52,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Video Tripod Pro',
                price: 25,
                rating: 4.7,
                reviews: 38,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Drone with 4K Camera',
                price: 75,
                rating: 4.9,
                reviews: 41,
                location: 'Kalutara',
                image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'GoPro Action Camera',
                price: 35,
                rating: 4.8,
                reviews: 57,
                location: 'Matara',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
                available: false,
            },
            {
                id: 6,
                name: 'Studio Lighting Kit',
                price: 50,
                rating: 4.7,
                reviews: 29,
                location: 'Jaffna',
                image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=400',
                available: true,
            },
        ],

        // Other item section
        other: [
            {
                id: 1,
                name: 'Power Tools Set',
                price: 35,
                rating: 4.6,
                reviews: 43,
                location: 'Polonnaruwa',
                image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
                available: true,
            },
            {
                id: 2,
                name: 'Pressure Washer',
                price: 40,
                rating: 4.8,
                reviews: 36,
                location: 'Nuwara Eliya',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
                available: true,
            },
            {
                id: 3,
                name: 'Projector & Screen',
                price: 45,
                rating: 4.7,
                reviews: 28,
                location: 'Colombo',
                image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
                available: false,
            },
            {
                id: 4,
                name: 'Party Speaker System',
                price: 30,
                rating: 4.9,
                reviews: 51,
                location: 'Balangoda',
                image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
                available: true,
            },
            {
                id: 5,
                name: 'Ladder (Extension)',
                price: 18,
                rating: 4.5,
                reviews: 22,
                location: 'Galle',
                image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400',
                available: false,
            },
        ],
    };

    // Get items for current category
    const allItems = categoryItems[categoryId || 'other'] || categoryItems.other;

    // Filter and sort items based on active filter and search query
    const items = useMemo(() => {
        let filtered = [...allItems];

        // Apply search query filter
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(lowerQuery) ||
                item.location.toLowerCase().includes(lowerQuery)
            );
        }

        // Apply active filter
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
    }, [activeFilter, allItems, searchQuery]);

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
                                        ${item.price}
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
