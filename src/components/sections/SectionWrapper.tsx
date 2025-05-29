import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({ id, title, children, className, titleClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full max-w-5xl py-12 md:py-20 mx-auto", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary tracking-tight", titleClassName)}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
