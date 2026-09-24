'use client';

import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type ElementType
} from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  ariaLabelledBy?: string;
}

export function AnimateOnScroll({
  children,
  className = '',
  as = 'div',
  ariaLabelledBy = undefined,
}: AnimateOnScrollProps) {
  const Tag: ElementType = as;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`animate-on-scroll ${inView ? 'scroll-in-view' : ''} ${className}`}
      {...(ariaLabelledBy ? { 'aria-labelledby': ariaLabelledBy } : {})}
    >
      {children}
    </Tag>
  );
}
