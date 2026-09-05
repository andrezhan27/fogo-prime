'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { restaurantInfo } from '@/data/restaurant';
import { useLanguage } from '@/providers/LanguageProvider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ReservationContextValue = { openReservation: () => void };
const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { copy } = useLanguage();
  const value = useMemo(
    () => ({ openReservation: () => setOpen(true) }),
    [],
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[min(820px,calc(100dvh-1rem))] max-w-[min(980px,calc(100%-1rem))] grid-rows-[auto_1fr] gap-0 overflow-hidden rounded-none border border-white/10 bg-[#10100f] p-0 text-[#f7f0e5] sm:max-w-[min(980px,calc(100%-2rem))]">
          <DialogHeader className="border-b border-white/10 px-5 py-4 pr-14 sm:px-7">
            <DialogTitle className="font-heading text-2xl font-semibold">
              {copy.reserve.dialogTitle}
            </DialogTitle>
            <DialogDescription className="text-[#b9afa1]">
              {copy.reserve.dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <iframe
            className="block h-full w-full border-0 bg-white"
            loading="eager"
            src={restaurantInfo.reservationWidgetUrl}
            title="Fogo Prime Reservation"
          />
        </DialogContent>
      </Dialog>
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within ReservationProvider');
  }
  return context;
}
