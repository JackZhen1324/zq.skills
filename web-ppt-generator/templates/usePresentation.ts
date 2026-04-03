import { useState, useEffect, useCallback } from 'react';

interface UsePresentationOptions {
  totalPages: number;
  onSlideChange?: (index: number) => void;
}

export function usePresentation({ totalPages, onSlideChange }: UsePresentationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.min(prev + 1, totalPages - 1);
      onSlideChange?.(next);
      return next;
    });
  }, [totalPages, onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      onSlideChange?.(next);
      return next;
    });
  }, [onSlideChange]);

  const goToSlide = useCallback((index: number) => {
    const target = Math.max(0, Math.min(index, totalPages - 1));
    setCurrentIndex(target);
    onSlideChange?.(target);
  }, [totalPages, onSlideChange]);

  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPresentationMode && e.key === 'Escape') {
        setIsPresentationMode(false);
        document.exitFullscreen?.().catch(() => {});
        return;
      }

      switch (e.key) {
        case ' ':
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalPages - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode, nextSlide, prevSlide, goToSlide, totalPages]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!isPresentationMode) return;
    if (e.button === 0) nextSlide();
    else if (e.button === 2) prevSlide();
  }, [isPresentationMode, nextSlide, prevSlide]);

  useEffect(() => {
    if (isPresentationMode) {
      const preventContext = (e: MouseEvent) => e.preventDefault();
      document.addEventListener('contextmenu', preventContext);
      return () => document.removeEventListener('contextmenu', preventContext);
    }
  }, [isPresentationMode]);

  return {
    currentIndex,
    isPresentationMode,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentationMode,
    handleClick,
  };
}
