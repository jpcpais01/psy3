export default function JournalPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-6">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-4xl font-extralight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Journal</h1>
        <div className="space-y-4">
          <div className="group rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] p-6 transition-all duration-300 hover:shadow-[0_0_48px_-8px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-300">✍️</span>
              </div>
              <div className="text-sm text-blue-300/80 font-light tracking-wide">Today</div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-400 font-light leading-relaxed">Start writing your thoughts here...</p>
            </div>
          </div>
          
          <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-400/80 to-blue-500/80 hover:from-blue-400 hover:to-blue-500 text-white rounded-2xl backdrop-blur-xl transition-all duration-300 font-light tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5">
            New Entry
          </button>
        </div>
      </div>
    </div>
  );
}
