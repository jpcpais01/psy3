'use client';

import { useState } from 'react';
import { CarouselContainer } from '@/components/CarouselContainer';
import { BottomNav } from '@/components/BottomNav';
import { Journal } from '@/components/Journal';
import { Chat } from '@/components/Chat';
import { Resources } from '@/components/Resources';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSlideChange = (index: number) => {
    setCurrentPage(index);
  };

  const handleNavigate = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <main className="main-container">
      <div className="flex-1">
        <CarouselContainer 
          onSlideChange={handleSlideChange} 
          initialSlide={1}
          currentSlide={currentPage}
        >
          <Journal />
          <Chat />
          <Resources />
        </CarouselContainer>
      </div>
      <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
    </main>
  );
}
