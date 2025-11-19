import { useMemo, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Search } from 'lucide-react';
import { searchItems, Item } from '../utils/itemsData';
import { Music, Lamp, Trophy, GraduationCap, Package, Video } from 'lucide-react';

interface SearchResultsProps {
    searchQuery: string;
}

const categoryIcons: Record<string, any> = {
    'Music': Music,
    'Decoration': Lamp,
    'Sports': Trophy,
    'Uni Items': GraduationCap,
    'Video': Video,
    'Other Items': Package,
};

const categoryGradients: Record<string, string> = {
    'Music': 'from-violet-500 to-fuchsia-500',
    'Decoration': 'from-amber-500 to-orange-500',
    'Sports': 'from-emerald-500 to-teal-500',
    'Uni Items': 'from-blue-500 to-cyan-500',
    'Video': 'from-purple-500 to-indigo-500',
    'Other Items': 'from-rose-500 to-pink-500',
};

export default function SearchResults({ searchQuery }: SearchResultsProps) {
    const [rentedItems, setRentedItems] = useState<Record<string, boolean>>({});
    const results = useMemo(() => {
        return searchItems(searchQuery);
    }, [searchQuery]);

    const handleRentClick = (event: MouseEvent<HTMLButtonElement>, itemKey: string) => {
        event.preventDefault();
        event.stopPropagation();
        setRentedItems((prev) => ({
            ...prev,
            [itemKey]: true,
        }));
    };

    if (!searchQuery.trim()) {
        return (
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center py-16">
                        <Search className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Start Searching</h2>
                        <p className="text-neutral-400">Enter a search term to find items</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-4 mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">
                        Search Results
                    </h1>
                    <p className="text-lg text-neutral-400">
                        Found <span className="text-emerald-400 font-semibold">{results.length}</span> item{results.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </p>
                </div>

                {results.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {results.map((item) => {
                            const Icon = categoryIcons[item.categoryName] || Package;
                            const gradient = categoryGradients[item.categoryName] || 'from-rose-500 to-pink-500';
                            const itemKey = `${item.categoryId}-${item.id}`;
                            const isRented = rentedItems[itemKey];
                            
                            return (
                                <Link
                                    key={`${item.categoryId}-${item.id}`}
                                    to={`/category/${item.categoryId}`}
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
                                        <div className="absolute top-3 left-3">
                                            <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div>
                                            <span className="text-xs text-emerald-400 font-medium">{item.categoryName}</span>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mt-1">
                                                {item.name}
                                            </h3>
                                        </div>
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
                                                <button
                                                    type="button"
                                                    onClick={(event) => handleRentClick(event, itemKey)}
                                                    disabled={isRented}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                                        isRented
                                                            ? 'bg-neutral-700 text-neutral-300 cursor-not-allowed'
                                                            : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600'
                                                    }`}
                                                >
                                                    {isRented ? 'Rented' : 'Rent Now'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Search className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">No items found</h2>
                        <p className="text-neutral-400 mb-6">
                            We couldn't find any items matching "{searchQuery}"
                        </p>
                        <Link
                            to="/browse"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all"
                        >
                            Browse All Categories
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

