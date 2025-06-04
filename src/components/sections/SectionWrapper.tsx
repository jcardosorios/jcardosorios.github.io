import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({ id, title, children, className, titleClassName }: SectionWrapperProps) {
  const [underlineWidth, setUnderlineWidth] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      
      const titleRect = titleRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight

      const animationStartThreshold = viewportHeight * 0.8
      const animationEndThreshold = viewportHeight * 0.3

      let progress = 0
      if (titleRect.top < animationStartThreshold && titleRect.top > animationEndThreshold ) {
        progress = (animationStartThreshold - titleRect.top) / (animationStartThreshold - animationEndThreshold)
      } else if (titleRect.top <= animationEndThreshold) {
        progress = 1
      } else {
        progress = 0
      }

      progress = Math.max(0, Math.min(1, progress))
      setUnderlineWidth(progress * 100)
    }
    window.addEventListener('scroll', handleScroll, {passive: true})
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return (
    <section id={id} className={cn("w-full max-w-5xl py-12 md:py-20 mx-auto", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className='flex flex-col items-center mb-8 md:mb-12'>
          <div className='relative inline-block'>
            <h2 
              ref={titleRef} 
              className={cn("text-3xl md:text-4xl font-bold text-center text-primary tracking-tight pb-2", titleClassName)}>
              {title}
            </h2>
            <div
              style={{ width: `${underlineWidth}%` }}
              className="absolute bottom-0 left-1/2 h-1 -translate-x-1/2 bg-accent/70 rounded-full transition-[width] duration-300 ease-out"
              aria-hidden="true"
            />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
