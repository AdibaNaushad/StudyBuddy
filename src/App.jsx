import React from 'react';

function App() {
  return (
    // The main wrapper covering the whole screen with our custom background color
    <div className="min-h-screen bg-sb-bg p-6 flex gap-6 font-sans">

      {/* 1. LEFT SIDEBAR */}
      <aside className="w-64 bg-sb-surface/80 backdrop-blur-md border border-white rounded-[32px] p-6 flex flex-col shadow-sm">

        {/* Logo Section */}
        <div className="mb-10 text-center mt-4">
          <h1 className="text-3xl font-bold text-sb-dark mb-2 tracking-tight">StudyBuddy <span className="text-sb-primary">♡</span></h1>
          <p className="text-sm text-sb-text-sec">Study. Grow. Repeat. <span className="text-sb-primary">♡</span></p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {/* Active Link (Home) */}
          <button className="flex items-center gap-4 bg-sb-bg text-sb-dark px-5 py-3.5 rounded-2xl font-bold transition-all">
            <span className="text-xl">🏠</span> Home
          </button>

          {/* Inactive Links */}
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
          {/* Placeholder for the book/bunny image */}
          <div className="h-32 bg-sb-bg rounded-2xl border border-sb-primary/20 flex items-center justify-center text-xs text-sb-dark/50">
            [Books Graphic]
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col gap-6 h-full">

        {/* Header */}
        <header className="flex justify-end items-center gap-4 w-full">
          <div className="bg-sb-surface px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold flex items-center gap-2">
            🔥 7 day streak
          </div>
          <div className="bg-sb-surface px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold flex items-center gap-3 hover:bg-white transition-colors cursor-pointer">
            {/* Temporary Profile Avatar */}
            <div className="w-8 h-8 bg-sb-primary/20 rounded-full flex items-center justify-center text-lg">
              👧🏻
            </div>
            Adiba <span className="text-sb-text-sec">⌄</span>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">

          {/* Left & Center Column (Widgets) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Welcome Banner */}
            <div className="bg-sb-primary/10 rounded-[32px] p-8 border border-white shadow-sm flex justify-between items-center relative overflow-hidden">
              <div className="z-10">
                <h2 className="text-3xl font-bold text-sb-dark mb-2 tracking-tight">Good morning, Adiba! ♡</h2>
                <p className="text-sb-text-sec font-medium">You're doing great, keep going!</p>
              </div>
              {/* Temporary Illustration Placeholder */}
              <div className="text-6xl z-10">
                🐰📚
              </div>
            </div>

            {/* Placeholder for Progress, Plant, and Tasks */}

            {/* Middle Row: Progress & Plant */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Progress Card */}
              <div className="bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col justify-center">
                <div className="flex justify-between items-center mb-5">

                  <h3 className="font-bold text-sb-dark mb-6 flex items-center gap-2">
                    <span className="text-xl">🎀</span> My Progress
                  </h3>
                </div>


                <div className="flex items-center gap-6">
                  {/* Circular Progress Ring */}
                  <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                      {/* Background Track */}
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-sb-primary/20" />
                      {/* Progress Bar (75%) */}
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="62.8" className="text-sb-primary stroke-current drop-shadow-sm" strokeLinecap="round" />
                    </svg>
                    <div className="text-center z-10 flex flex-col items-center">
                      <span className="text-2xl font-bold text-sb-dark leading-none">75%</span>
                      <span className="text-[10px] text-sb-text-sec font-bold uppercase tracking-wider mt-1">Today</span>
                    </div>
                  </div>

                  {/* Stats List */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-sb-yellow text-lg">⭐</span> XP</span>
                      <span className="text-sb-text-main">75 / 100</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-orange-400 text-lg">🔥</span> Streak</span>
                      <span className="text-sb-text-main">7 days</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="flex items-center gap-2 text-sb-text-sec"><span className="text-sb-sage text-lg">🌿</span> Level</span>
                      <span className="text-sb-text-main">Level 2</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Plant Card */}
              <div className="bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col relative overflow-hidden">
                <h3 className="font-bold text-sb-sage mb-2 flex items-center gap-2">
                  <span className="text-xl">🌱</span> My Plant
                </h3>

                <div className="flex-1 flex items-center justify-center relative mt-2">
                  {/* Floating Speech Bubble */}
                  <div className="absolute top-0 right-2 bg-white px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm border border-sb-bg text-[11px] font-bold text-sb-dark text-center z-10 transform rotate-3">
                    You're<br />blooming<br />so well! ♡
                  </div>

                  {/* Plant Illustration Placeholder */}
                  <div className="text-7xl mt-6 relative z-0 hover:scale-105 transition-transform cursor-pointer">
                    🪴
                  </div>

                  {/* Decorative elements */}
                  <span className="absolute top-6 left-6 text-sb-primary/40 text-xl animate-pulse">✨</span>
                  <span className="absolute bottom-4 right-12 text-sb-yellow text-lg animate-pulse delay-75">✨</span>
                  <span className="absolute top-1/2 left-2 text-sb-blue/50 text-sm">🦋</span>
                </div>
              </div>
            </div>

            {/* Placeholder for Tasks Widget */}
              {/* Bottom Row: Tasks & Summary */}
              <div className="flex flex-col md:flex-row gap-6">

                {/* Today's Tasks Card */}
                <div className="flex-[2] bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col min-h-[250px]">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-sb-dark flex items-center gap-2">
                      <span className="text-xl">🎀</span> Today's Tasks
                    </h3>
                    <button className="bg-sb-primary text-white text-xs px-4 py-2 rounded-full font-bold shadow-sm hover:bg-sb-dark transition-colors">
                      + Add Task
                    </button>
                  </div>

                  {/* Scrollable Task List */}
                  <div className="flex flex-col gap-3 overflow-y-auto pr-1">

                    {/* Completed Task */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-sb-bg group hover:shadow-sm transition-all cursor-pointer">
                      <button className="w-6 h-6 rounded-lg bg-sb-primary flex items-center justify-center text-white shrink-0">✓</button>
                      <span className="text-sm font-bold text-sb-primary shrink-0">{'</>'}</span>
                      <span className="text-sm font-bold text-sb-text-sec flex-1 truncate line-through">DSA - 2 problems</span>
                      <span className="text-xs font-bold text-sb-primary shrink-0">+20 XP</span>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">✏️</button>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">🗑️</button>
                    </div>

                    {/* Incomplete Task 1 */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-sb-bg group hover:shadow-sm transition-all cursor-pointer">
                      <button className="w-6 h-6 rounded-lg border-2 border-sb-primary/30 flex items-center justify-center shrink-0 hover:bg-sb-primary/10 transition-colors"></button>
                      <span className="text-sm font-bold text-sb-text-sec shrink-0">🐍</span>
                      <span className="text-sm font-bold text-sb-text-main flex-1 truncate">Python - 30 mins</span>
                      <span className="text-xs font-bold text-sb-primary shrink-0">+20 XP</span>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">✏️</button>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">🗑️</button>
                    </div>

                    {/* Incomplete Task 2 */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-sb-bg group hover:shadow-sm transition-all cursor-pointer">
                      <button className="w-6 h-6 rounded-lg border-2 border-sb-primary/30 flex items-center justify-center shrink-0 hover:bg-sb-primary/10 transition-colors"></button>
                      <span className="text-sm font-bold text-sb-text-sec shrink-0">🗄️</span>
                      <span className="text-sm font-bold text-sb-text-main flex-1 truncate">DBMS - Chapter 3</span>
                      <span className="text-xs font-bold text-sb-primary shrink-0">+30 XP</span>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">✏️</button>
                      <button className="text-sb-text-sec/40 hover:text-sb-text-main opacity-0 group-hover:opacity-100 transition-opacity">🗑️</button>
                    </div>

                  </div>
                </div>

                {/* Sticky Note & Summary Column */}
                <div className="flex-[1] flex flex-col gap-6">

                  {/* Blue Sticky Note */}
                  <div className="bg-sb-blue/20 rounded-xl p-4 border-2 border-white border-dashed text-center transform rotate-3 relative shadow-sm flex-1 flex flex-col items-center justify-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">🎀</div>
                    <p className="font-bold text-[#6B96B3] text-lg mt-2">You can<br />do it ♡</p>
                  </div>

                  {/* Daily Summary */}
                  <div className="bg-sb-surface/80 rounded-[32px] p-5 border border-white shadow-sm flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-sb-dark flex items-center gap-2 text-sm">
                        📄 Daily Summary
                      </h3>
                      <span className="text-[10px] font-bold text-sb-text-sec hover:text-sb-dark cursor-pointer transition-colors">View All</span>
                    </div>
                    <p className="text-xs font-medium text-sb-text-sec leading-relaxed">
                      You completed <span className="font-bold text-sb-dark">2/4</span> tasks today. Great progress! ♡<br /><br />
                      Focus more on TOC and keep the momentum going.
                    </p>
                  </div>

                </div>
              </div>


          </div>

          {/* Right Column (Quote & Chat) */}
          <div className="flex flex-col gap-6">

            {/* Quote Card */}
            <div className="bg-sb-surface/80 rounded-[32px] p-8 border border-white shadow-sm text-center flex flex-col justify-center">
              <p className="font-medium italic mb-3 text-sb-text-main leading-relaxed">
                "Small steps every day<br />lead to big results."
              </p>
              <span className="text-sb-primary text-sm font-bold">— StudyBuddy ♡</span>
            </div>

            {/* Placeholder for AI Chat */}
            {/* AI Chatbot Widget */}
            <div className="flex-1 bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col min-h-[400px]">
              <h3 className="font-bold text-sb-dark flex items-center gap-2 mb-1">
                <span className="text-xl">🐰</span> Talk to StudyBuddy AI
              </h3>
              <p className="text-xs font-bold text-sb-text-sec mb-4">Need motivation? I'm here! ♡</p>

              {/* Chat History Area */}
              <div className="flex-1 bg-sb-bg/50 rounded-2xl p-4 mb-4 flex flex-col gap-3 overflow-y-auto border border-sb-primary/10">
                {/* Bot Message */}
                <div className="bg-white text-sb-text-main text-sm font-bold p-3 rounded-2xl rounded-tl-sm w-[85%] shadow-sm border border-sb-bg">
                  What do you want to talk about today?
                </div>

                {/* Suggestion Chips */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="text-[11px] font-bold border border-sb-primary/30 text-sb-primary px-3 py-1.5 rounded-full hover:bg-sb-primary hover:text-white transition-colors bg-white">
                    Give me motivation
                  </button>
                  <button className="text-[11px] font-bold border border-sb-primary/30 text-sb-primary px-3 py-1.5 rounded-full hover:bg-sb-primary hover:text-white transition-colors bg-white">
                    Summarize my day
                  </button>
                  <button className="text-[11px] font-bold border border-sb-primary/30 text-sb-primary px-3 py-1.5 rounded-full hover:bg-sb-primary hover:text-white transition-colors bg-white">
                    Suggest what to study
                  </button>
                  <button className="text-[11px] font-bold border border-sb-primary/30 text-sb-primary px-3 py-1.5 rounded-full hover:bg-sb-primary hover:text-white transition-colors bg-white">
                    I'm feeling stressed
                  </button>
                </div>
              </div>

              {/* Input Area */}
              <div className="relative mt-auto shrink-0">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-white border border-sb-primary/20 rounded-full py-3 pl-5 pr-12 text-sm font-bold text-sb-text-main focus:outline-none focus:border-sb-primary focus:ring-2 focus:ring-sb-primary/20 transition-all placeholder:text-sb-text-sec/50 shadow-sm"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-sb-primary text-white px-3.5 rounded-full hover:bg-sb-dark transition-colors flex items-center justify-center shadow-sm">
                  <span className="text-sm">➤</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>


    </div>
  );
}

export default App;