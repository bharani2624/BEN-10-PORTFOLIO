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
        <div className="neon-bar w-full lg:w-full xl:w-full md:w-full flex items-center justify-between">
  <progress className="bar w-10/12 sm:w-40" value={progress} max={max}></progress>
  <span className="bar__value text-white w-2/12 text-center text-[1px]">{progress}%</span>
</div>

    );
};

export default NeonProgressBar;
