'use client';

import { motion, useAnimation } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const routes = ['/journal', '/', '/resources'];

interface DragInfo {
  velocity: { x: number };
  offset: { x: number };
}

export default function SwipeableLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(routes.indexOf(pathname));
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(routes.indexOf(pathname));
  }, [pathname]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      const direction = diff > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < routes.length) {
        router.push(routes[newIndex]);
      }
    }

    setTouchStart(null);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      animate={controls}
      style={{ touchAction: 'pan-y' }}
    >
      <div className="h-full w-full overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
}
