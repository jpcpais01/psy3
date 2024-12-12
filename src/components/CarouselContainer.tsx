import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect } from 'react';

interface CarouselContainerProps {
  children: ReactNode[];
  onSlideChange?: (index: number) => void;
  initialSlide?: number;
  currentSlide?: number;
}

export function CarouselContainer({ 
  children, 
  onSlideChange, 
  initialSlide = 1,
  currentSlide 
}: CarouselContainerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'center',
    startIndex: initialSlide,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  // Handle programmatic scrolling when currentSlide changes
  useEffect(() => {
    if (emblaApi && typeof currentSlide === 'number') {
      emblaApi.scrollTo(currentSlide);
    }
  }, [emblaApi, currentSlide]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden h-full" ref={emblaRef}>
      <div className="flex h-full touch-pan-y">
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] min-w-0 relative h-full"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
