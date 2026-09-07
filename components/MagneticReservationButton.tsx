'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MagneticReservationButton({
  children,
  className,
  compact = false,
  trailingIcon,
}: {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  trailingIcon?: ReactNode;
}) {
  return (
    <Link
      href="/reservation"
      className={cn(
        'ui-label group inline-flex min-h-12 items-center justify-center gap-3 bg-[#dca51d] px-6 text-[#15130f] transition-colors duration-300 hover:bg-[#efbd3b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]',
        compact && 'min-h-11 min-w-[7.75rem] px-4',
        className,
      )}
    >
      <span>{children}</span>
      {trailingIcon}
    </Link>
  );
}
