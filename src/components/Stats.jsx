import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
    {
        num: 4,
        text: "Years of experience",
    },
    {
        num: 8,
        text: "Projects Completed",
    },
    {
        num: 12,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code Commits",
    },
];

function Stats() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    return (
        <div className='container ml-4 mt-[10vh] pt-2 xl:pt-0 pb-2 xl:pb-0'>
            <div className='flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => (
                    <div 
                        className='flex-1 flex gap-3 items-center justify-center xl:justify-start bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 md:p-4 shadow-lg w-full sm:w-auto sm:max-w-[45%] lg:max-w-[30%]' 
                        key={index}
                    >
                        {startAnimation && (
                            <CountUp end={item.num} duration={5} delay={2} className='text-2xl sm:text-3xl xl:text-5xl text-white font-extrabold' />
                        )}
                        <p className={`${item.text.length < 15 ? "max-w-[80px]" : "max-w-[120px]"} leading-snug text-white/80 text-xs sm:text-sm xl:text-base`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;
