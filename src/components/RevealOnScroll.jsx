import { useEffect, useRef, useState } from "react";

function RevealOnScroll({
    as: Component = "div",
    children,
    className = "",
    delay = 0,
    direction = "up",
    ...props
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(
        () => typeof window !== "undefined" && !("IntersectionObserver" in window)
    );

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return undefined;
        }

        if (!("IntersectionObserver" in window)) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -70px 0px"
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <Component
            ref={ref}
            className={`reveal-on-scroll reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ "--reveal-delay": `${delay}ms` }}
            {...props}
        >
            {children}
        </Component>
    );
}

export default RevealOnScroll;
