import blueRibbonImg from '../assets/flower.svg';
import tulipImg from '../assets/tulip.svg';
import bunnyTulipImg from '../assets/bunny-books.svg';


export default function SummaryWidget({ tasks }) {
    // 1. Calculate the actual numbers
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="flex flex-col gap-6">
            {/* Blue Sticky Note */}
                <div
                    className="relative rounded-2xl p-6 shadow-sm flex items-center justify-center h-[120px] w-full"
                    style={{
                        backgroundColor: '#e0f2fe', // Light blue base
                        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.5) 50%, transparent 50%), linear-gradient(rgba(255,255,255,.5) 50%, transparent 50%)',
                        backgroundSize: '20px 20px' // Creates the checkered grid
                    }}
                >
                    {/* Blue Ribbon (Make sure you import this image if you have it) */}
                    <img src={blueRibbonImg} alt="ribbon" className="absolute -top-3 -left-2 w-12 h-12 rotate-[-10deg]" />

                    {/* Tilted Text */}
                    <h3 className="text-blue-400 font-bold text-lg text-center rotate-[-5deg]">
                        You can<br />do it ♡
                    </h3>

                    {/* Bunny & Tulip (Make sure you import this image if you have it) */}
                <img src={bunnyTulipImg} alt="bunny" className="absolute -bottom-2 -right-2 w-36 h-26 -scale-x-100 " />
                <img src={tulipImg}  alt="ribbon" className="absolute -bottom-2 -left-2 w-12 h-12 rotate-6" />

                </div>
                

            {/* Daily Summary */}
            <div className="bg-sb-surface/80 rounded-[32px] p-5 border border-white shadow-sm flex-1 flex flex-col justify-center min-h-[120px]">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-sb-dark flex items-center gap-2 text-sm">
                        📄 Daily Summary
                    </h3>
                    <span className="text-[10px] font-bold text-sb-text-sec hover:text-sb-dark cursor-pointer transition-colors">View All</span>
                </div>
                <p className="text-xs font-medium text-sb-text-sec leading-relaxed">
                    {/* 2. Insert the dynamic variables here */}
                    You completed <span className="font-bold text-sb-dark">{completedTasks}/{totalTasks}</span> tasks today. Great progress! ♡<br /><br />
                    Focus more on TOC and keep the momentum going.
                </p>
            </div>
        </div>
    );
  }