import plantImg from '../assets/plant.svg';
import bowImg from '../assets/bow.svg';
import butterflyImg from '../assets/butterfly.svg';
import blueRibbonImg from '../assets/flower.svg';
import tulipImg from '../assets/tulip.svg';
import bunnyTulipImg from '../assets/bunnywithflower.svg';



export default function ProgressCards({ tasks, streak, isPlantSad }) {

    // Calculate completion math
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    // The SVG circle's full circumference is 251.2. We offset it based on the percentage.
    const strokeOffset = 251.2 - (251.2 * percentage) / 100;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PROGRESS CARD */}
            <div className="bg-sb-surface/80 rounded-[32px] p-5 border border-white shadow-sm flex flex-col justify-center">
                <h3 className="font-bold text-sb-dark mb-5 flex items-center gap-2">
                    <span className="text-xl">
                        <img src={bowImg} alt="Bow" className="w-6 h-6 rotate-9" />
                    </span> My Progress
                </h3>

                <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full transform -rotate-90 absolute inset-0 transition-all duration-500 ease-out">
                            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-sb-primary/20" />
                            <circle
                                cx="48" cy="48" r="40"
                                stroke="currentColor" strokeWidth="8" fill="transparent"
                                strokeDasharray="251.2"
                                strokeDashoffset={strokeOffset}
                                className="text-sb-primary stroke-current drop-shadow-sm transition-all duration-1000 ease-out"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                            <span className="text-2xl font-bold text-sb-dark leading-none">{percentage}%</span>
                            <span className="text-[10px] text-sb-text-sec font-bold uppercase tracking-wider mt-1">Today</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-sb-yellow text-lg">⭐</span> XP</span>
                            <span className="text-sb-text-main">75 / 100</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-orange-400 text-lg">🔥</span> Streak</span>
                            {/* DYNAMIC STREAK TEXT */}
                            <span className="text-sb-text-main">{streak} days</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-sb-sage text-lg">🌿</span> Level</span>
                            <span className="text-sb-text-main">Level 2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PLANT CARD */}
            <div className="bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col relative overflow-hidden">
                <h3 className="font-bold text-sb-sage mb-2 flex items-center gap-2">
                    <span className="text-xl">      
                <img src={tulipImg}  alt="ribbon" className="absolute -bottom-2 -left-2 w-12 h-12 rotate-6" />



                    </span>
                  <img src={blueRibbonImg} alt="ribbon" className="absolute  -left-1 w-12 h-12 rotate-150" />
                    
                    <img src={bunnyTulipImg} alt="bunny" className="absolute -bottom-2 -right-2 w-36 h-26 -scale-x-100 " />
                </h3>

                <div className="flex-1 flex items-center justify-center relative mt-2">
                    {/* DYNAMIC SPEECH BUBBLE */}
                    <div className="absolute top-0 right-2 bg-white px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm border border-sb-bg text-[11px] font-bold text-sb-dark text-center z-10 transform rotate-3">
                        {isPlantSad ? (
                            <>I need<br />water...<br />🥀</>
                        ) : (
                            <>You're<br />blooming<br />so well! ♡</>
                        )}
                    </div>

                    {/* DYNAMIC PLANT IMAGE */}
                    <div className="mt-6 relative z-0 hover:scale-105 transition-transform cursor-pointer">
                        <img
                            src={plantImg}
                            alt="My Plant"
                            className={`w-32 h-auto drop-shadow-md transition-all duration-900 ${isPlantSad ? 'grayscale sepia-[.50] opacity-80 scale-95' : 'animate-bounce'}`}
                                                    />
                    </div>

                    <span className="absolute top-6 left-6 text-sb-primary/40 text-xl animate-pulse delay-75">✨</span>
                    <span className="absolute bottom-4 right-12 text-sb-yellow text-lg animate-pulse opacity-20">✨</span>
                    <img src={butterflyImg} alt="Butterfly" className="absolute top-1/2 left-2 w-5 h-5 opacity-70 animate-bounce" />
                </div>
            </div>

        </div>
    );
}