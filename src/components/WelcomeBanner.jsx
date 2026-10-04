import girlImg from '../assets/girl.svg';
import bunnyBooksImg from '../assets/bunny-books.svg';
import angleTopImg from '../assets/angleTop.svg';



export default function WelcomeBanner({ streak }) {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}

            <header className="flex justify-end items-center gap-4 w-full">
                
                <div className="bg-sb-surface px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold flex items-center gap-2">
                    <span>🔥 {streak} day streak</span>
                                    </div>
                <div className="bg-sb-surface px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold flex items-center gap-3 hover:bg-white transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-sb-primary/20 rounded-full flex items-center justify-center text-lg">
                        <img src={girlImg} alt="Adiba Profile" className="w-8 h-8 rounded-full border-2 border-sb-primary/20 bg-white" />
                    </div>
                    Adiba <span className="text-sb-text-sec">⌄</span>
                </div>
            </header>

            {/* Banner */}
            <div className="bg-sb-primary/10 rounded-[32px] p-8 border border-white shadow-sm flex justify-between items-center relative overflow-hidden">
                <img src={girlImg} alt="Adiba Profile" className="w-50 h-40  " />

                <div className="z-10">
                    <h2 className="text-3xl font-bold text-sb-dark mb-2 tracking-tight ">Good morning, Adiba! ♡</h2>
                    <p className="text-sb-text-sec font-medium">You're doing great, keep going!</p>
                </div>
                <div className="text-6xl z-10">
                    <div className="z-10">
                        <img src={bunnyBooksImg} alt="Study Bunny" className="w-32 h-auto drop-shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
  }