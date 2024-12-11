export default function ResourcesPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-extralight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Resources</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] p-6 transition-all duration-300 hover:shadow-[0_0_48px_-8px_rgba(0,0,0,0.7)] hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-400/5 flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300">
                <span className="text-blue-300 text-lg">🌱</span>
              </div>
              <h3 className="font-light tracking-wide text-gray-200">Self-Care Guide</h3>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Essential practices for maintaining mental well-being and personal growth
            </p>
            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"></div>
          </div>
          
          <div className="group rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] p-6 transition-all duration-300 hover:shadow-[0_0_48px_-8px_rgba(0,0,0,0.7)] hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-400/5 flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300">
                <span className="text-purple-300 text-lg">🧘</span>
              </div>
              <h3 className="font-light tracking-wide text-gray-200">Meditation Basics</h3>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Getting started with mindfulness meditation and breathing exercises
            </p>
            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-300/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
