import { Button } from "react-bootstrap";

function createRipple(event) {
    const target = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    target.querySelector(".ripple")?.remove();
    target.appendChild(ripple);

    window.setTimeout(() => {
        ripple.remove();
    }, 650);
}

export function RippleLink({ children, className = "", onClick, ...props }) {
    const handleClick = (event) => {
        createRipple(event);
        onClick?.(event);
    };

    return (
        <a
            className={`ripple-btn ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </a>
    );
}

function RippleButton({ children, className = "", onClick, ...props }) {
    const handleClick = (event) => {
        createRipple(event);
        onClick?.(event);
    };

    return (
        <Button
            className={`ripple-btn ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </Button>
    );
}

export default RippleButton;
