import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-6">
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
        <div className="flex-1 rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Chat messages will go here */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-gray-400 font-light">
                Welcome to your AI Assistant
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-50"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] px-6 py-4 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] text-gray-100 placeholder-gray-500 transition-all duration-300"
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-gradient-to-r from-blue-400/80 to-blue-500/80 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl backdrop-blur-xl transition-all duration-300 text-sm font-light tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
