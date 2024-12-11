'use client';

import { usePathname, useRouter } from 'next/navigation';

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Journal', path: '/journal' },
    { name: 'Chat', path: '/' },
    { name: 'Resources', path: '/resources' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/[0.05] rounded-2xl shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] px-8 py-4 w-auto max-w-sm mx-auto">
      <div className="flex justify-around items-center gap-12">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`relative flex items-center justify-center transition-all duration-300 ${
              pathname === item.path
                ? 'text-blue-300 scale-110'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <span className="text-sm font-light tracking-wide">{item.name}</span>
            {pathname === item.path && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
