"use client";
import { useState, useEffect, FC } from "react";

const BuyMeCoffeeWidget: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const target = document.querySelector<HTMLElement>("#bottom-section");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div
            className={`fixed bottom-24 right-6 z-50 transition-all duration-500 ease-out md:bottom-24 md:right-14 ${
                isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-75 translate-y-4 pointer-events-none"
            }`}
        >
            <a
                href="https://www.buymeacoffee.com/Nimedu"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
            >
                <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    className="h-12 w-auto md:h-[60px] rounded-xl"
                />
            </a>
        </div>
    );
};

export default BuyMeCoffeeWidget;
