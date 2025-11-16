
import { Music, Lamp, Trophy, GraduationCap, Package, Video } from 'lucide-react';
import CategoryCard from './CategoryCard';

interface CategoryGridProps {
    searchQuery: string;
}

export default function CategoryGrid({ searchQuery }: CategoryGridProps) {
    const categories = [
        {
            id: 'music',
            title: 'Music',
            description: 'Instruments, audio gear, and studio equipment',
            icon: Music,
            itemCount: 234,
            gradient: 'from-violet-500 to-fuchsia-500',
            bgGradient: 'from-violet-500/10 to-fuchsia-500/10',
        },
        {
            id: 'decoration',
            title: 'Decoration',
            description: 'Event decor, furniture, and styling items',
            icon: Lamp,
            itemCount: 189,
            gradient: 'from-amber-500 to-orange-500',
            bgGradient: 'from-amber-500/10 to-orange-500/10',
        },
        {
            id: 'sports',
            title: 'Sports',
            description: 'Sporting equipment and outdoor gear',
            icon: Trophy,
            itemCount: 312,
            gradient: 'from-emerald-500 to-teal-500',
            bgGradient: 'from-emerald-500/10 to-teal-500/10',
        },
        {
            id: 'uni',
            title: 'Uni Items',
            description: 'Textbooks, study materials, and campus essentials',
            icon: GraduationCap,
            itemCount: 156,
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-500/10 to-cyan-500/10',
        },
        {
            id: 'video',
            title: 'Video',
            description: 'Cameras, lighting, and video production gear',
            icon: Video,
            itemCount: 198,
            gradient: 'from-purple-500 to-indigo-500',
            bgGradient: 'from-purple-500/10 to-indigo-500/10',
        },
        {
            id: 'other',
            title: 'Other Items',
            description: 'Tools, electronics, and miscellaneous rentals',
            icon: Package,
            itemCount: 427,
            gradient: 'from-rose-500 to-pink-500',
            bgGradient: 'from-rose-500/10 to-pink-500/10',
        },
    ];

    const filteredCategories = categories.filter((category) =>
        searchQuery === '' ||
        category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Browse Categories</h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Find exactly what you need from our diverse collection of rental items
                    </p>
                </div>

                {filteredCategories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCategories.map((category) => (
                            <CategoryCard key={category.id} {...category} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-neutral-400 text-lg">No categories found matching your search.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
