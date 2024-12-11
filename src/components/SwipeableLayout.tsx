'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const routes = ['/journal', '/', '/resources'];

export default function SwipeableLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimation();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(routes.indexOf(pathname));

  useEffect(() => {
    setCurrentIndex(routes.indexOf(pathname));
  }, [pathname]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      const direction = velocity < 0 || offset < 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < routes.length) {
        router.push(routes[newIndex]);
      } else {
        controls.start({ x: 0 });
      }
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <motion.div
      className="h-full w-full overflow-hidden touch-none"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{ touchAction: 'none' }}
    >
      <div className="h-full w-full overflow-y-auto no-scrollbar">
        {children}
      </div>
    </motion.div>
  );
}
