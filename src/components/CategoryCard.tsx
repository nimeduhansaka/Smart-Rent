import {type LucideIcon, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    itemCount: number;
    gradient: string;
    bgGradient: string;
}

export default function CategoryCard({
                                         title,
                                         description,
                                         icon: Icon,
                                         itemCount,
                                         gradient,
                                         bgGradient,
                                     }: CategoryCardProps) {
    return (
        <div className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${bgGradient} rounded-full blur-3xl opacity-50`}></div>

                <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full">
              {itemCount} items
            </span>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-neutral-300 transition-all">
                            {title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-4 transition-all">
                        <span className="text-sm font-medium">Browse items</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
