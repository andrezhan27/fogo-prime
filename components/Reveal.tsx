'use client';

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('reveal', visible && 'reveal-visible', className)}
      style={{ ...style, '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
