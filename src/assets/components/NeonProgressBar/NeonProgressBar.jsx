import React, { useEffect, useState } from "react";
import './NeonProgressBar.css'; 

const NeonProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const max = 100;

    useEffect(() => {
        const anim = setInterval(() => {
            if (progress === max) {
                clearInterval(anim);
            } else {
                setProgress((prev) => prev + 1);
            }
        }, 50); 

        return () => clearInterval(anim); 
    }, [progress]);

    return (
        <div className="neon-bar">
            <progress className="bar" value={progress} max={max}></progress>
            <span className="bar__value">{progress}%</span>
        </div>
    );
};

export default NeonProgressBar;
