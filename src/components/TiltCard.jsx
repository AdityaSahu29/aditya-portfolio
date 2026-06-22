import { useRef } from "react";
import { Card } from "react-bootstrap";

function TiltCard({ children, className = "", maxTilt = 8, ...props }) {
    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * maxTilt * 2;
        const rotateX = ((0.5 - (y / rect.height)) * maxTilt * 2);

        card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--glare-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--glare-y", `${(y / rect.height) * 100}%`);
    };

    const resetTilt = () => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--glare-x", "50%");
        card.style.setProperty("--glare-y", "0%");
    };

    return (
        <Card
            ref={cardRef}
            className={`glass-card game-card tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            {...props}
        >
            {children}
        </Card>
    );
}

export default TiltCard;
