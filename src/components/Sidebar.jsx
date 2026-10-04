import booksImg from '../assets/books.svg';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-sb-surface/80 backdrop-blur-md border border-white rounded-[32px] p-6 flex flex-col shadow-sm">

            {/* Logo Section */}
            <div className="mb-10 text-center mt-4">
                <h1 className="text-3xl font-bold text-sb-dark mb-2 tracking-tight">StudyBuddy <span className="text-sb-primary">♡</span></h1>
                <p className="text-sm text-sb-text-sec">Study. Grow. Repeat. <span className="text-sb-primary">♡</span></p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
                <button className="flex items-center gap-4 bg-sb-bg text-sb-dark px-5 py-3.5 rounded-2xl font-bold transition-all">
                    <span className="text-xl">🏠</span> Home
                </button>
                <button className="flex items-center gap-4 text-sb-text-sec hover:bg-sb-bg/50 px-5 py-3.5 rounded-2xl font-medium transition-all">
                    <span className="text-xl">☑️</span> Tasks
                </button>
                <button className="flex items-center gap-4 text-sb-text-sec hover:bg-sb-bg/50 px-5 py-3.5 rounded-2xl font-medium transition-all">
                    <span className="text-xl">🌱</span> Progress
                </button>
                <button className="flex items-center gap-4 text-sb-text-sec hover:bg-sb-bg/50 px-5 py-3.5 rounded-2xl font-medium transition-all">
                    <span className="text-xl">💬</span> Chat
                </button>
                <button className="flex items-center gap-4 text-sb-text-sec hover:bg-sb-bg/50 px-5 py-3.5 rounded-2xl font-medium transition-all">
                    <span className="text-xl">📄</span> Summary
                </button>
            </nav>

            {/* Bottom Illustration Area */}
            <div className="mt-auto text-center mb-4">
                <p className="text-sm text-sb-text-sec font-medium mb-4 italic leading-relaxed">
                    'Small steps<br />make big dreams'<br />
                    <span className="text-sb-primary text-xs">♡ ♡</span>
                </p>
                    <div className="h-40 bg-sb-bg rounded-2xl border border-sb-primary/20 flex items-center justify-center overflow-hidden">
                        <img src={booksImg} alt="Books" className="w-44 h-auto drop-shadow-sm" />
                    </div>
                    
            </div>
        </aside>
    );
  }