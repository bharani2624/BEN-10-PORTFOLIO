import React, { useEffect, useRef, useState } from 'react';

const TagCloud = ({ tags }) => {
    const containerRef = useRef(null);
    const [tagPositions, setTagPositions] = useState([]);
    const [mouseOver, setMouseOver] = useState(false);

    const settings = {
        height: 400,
        width: 400,
        radius: 150,
        speed: 3,
        slower: 0.9,
        timer: 5,
        fontMultiplier: 15,
    };

    useEffect(() => {
        initContainer();
        deployTags();
        const intervalId = setInterval(updateTags, settings.timer);
        return () => clearInterval(intervalId);
    }, []);

    const initContainer = () => {
        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', () => setMouseOver(true));
        container.addEventListener('mouseleave', () => setMouseOver(false));
    };

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        updateRotation(mouseX, mouseY);
    };

    const deployTags = () => {
        const positions = tags.map((_, i) => {
            const phi = Math.acos(-1 + (2 * (i + 1) - 1) / tags.length);
            const theta = Math.sqrt(tags.length * Math.PI) * phi;
            return {
                cx: settings.radius * Math.cos(theta) * Math.sin(phi),
                cy: settings.radius * Math.sin(theta) * Math.sin(phi),
                cz: settings.radius * Math.cos(phi),
                alpha: 0,
            };
        });
        setTagPositions(positions);
    };

    const updateTags = () => {
        if (!mouseOver) return;

        setTagPositions((prev) =>
            prev.map((tag) => {
                const per = settings.radius * 2 / (settings.radius * 2 + tag.cz);
                return {
                    ...tag,
                    x: tag.cx * per,
                    y: tag.cy * per,
                    alpha: per / 2,
                };
            })
        );
    };

    const updateRotation = (mouseX, mouseY) => {
        const fy = settings.speed - (settings.speed / (settings.height / 2)) * mouseY;
        const fx = (settings.speed / (settings.width / 2)) * mouseX - settings.speed;

        const sy = Math.sin(fy * (Math.PI / 180));
        const cy = Math.cos(fy * (Math.PI / 180));
        const sx = Math.sin(fx * (Math.PI / 180));
        const cx = Math.cos(fx * (Math.PI / 180));

        setTagPositions((prev) =>
            prev.map((tag) => {
                const rx1 = tag.cx;
                const ry1 = tag.cy * cy + tag.cz * -sy;
                const rz1 = tag.cy * sy + tag.cz * cy;
                return {
                    ...tag,
                    cx: rx1 * cx + rz1 * sx,
                    cy: ry1,
                    cz: rx1 * -sx + rz1 * cx,
                };
            })
        );
    };

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center h-[400px] w-[400px] bg-slate-200 rounded-lg overflow-hidden"
        >
            {tagPositions.map((tag, index) => (
                <div
                    key={index}
                    style={{
                        left: `${tag.x + settings.width / 2}px`,
                        top: `${tag.y + settings.height / 2}px`,
                        opacity: tag.alpha,
                        fontSize: `${settings.fontMultiplier * tag.alpha}px`,
                    }}
                    className="absolute text-center transition-transform duration-300 ease-in-out"
                >
                    {tags[index]}
                </div>
            ))}
        </div>
    );
};

export default TagCloud;
