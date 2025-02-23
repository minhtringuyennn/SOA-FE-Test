'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  dayFreeClassName?: string;
  dayOccupyClassName?: string;
  occupiedDays?: Date[];
};

type BookingCalendarClassNames = {
  day_free?: string;
  day_occupy?: string;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  dayFreeClassName,
  dayOccupyClassName,
  occupiedDays = [],
  ...props
}: CalendarProps) {
  return (
    <section className="container py-12">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          'p-3',
          className,
          'flex flex-col items-center gap-8',
          'w-full p-[24px_32px]',
          'border border-solid border-[rgba(86,44,44,0.30)]',
          'rounded-[24px] bg-[#FFF]',
          'shadow-[0_0_30px_0_rgba(242,84,45,0.10)]',
        )}
        classNames={{
          months: 'flex flex-col space-y-4 w-full',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse',
          head_row: 'flex w-full justify-between items-center',
          head_cell:
            'flex-1 text-center text-muted-foreground rounded-md font-normal text-[0.8rem]',
          row: 'flex w-full justify-between mt-2 gap-2',
          cell: 'h-full w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-full w-full p-0 font-normal aria-selected:opacity-100',
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground',
          day_outside: cn(
            'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
            'flex h-full w-full items-center justify-center p-0 text-sm',
            'border border-solid border-[#DFDFDF] bg-[#F5F5F5] rounded-md',
          ),
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle:
            'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...(classNames as BookingCalendarClassNames),
        }}
        modifiers={{
          day_free: (date) =>
            !occupiedDays.some(
              (occupiedDate) =>
                occupiedDate.toDateString() === date.toDateString(),
            ),
          day_occupy: (date) =>
            occupiedDays.some(
              (occupiedDate) =>
                occupiedDate.toDateString() === date.toDateString(),
            ),
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn('h-4 w-4', className)} {...props} />
          ),
          DayContent: ({ date, activeModifiers }) => {
            const isOccupied = activeModifiers.day_occupy;
            const isOutside = activeModifiers.outside;
            const style: React.CSSProperties = {
              display: 'flex',
              flexDirection: 'column',
              height: '48px',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              fontSize: '0.875rem',
              border: isOutside ? 'none' : '1px solid',
              borderRadius: '8px',
              backgroundColor: isOutside
                ? 'transparent'
                : isOccupied
                  ? '#FFF'
                  : '#FFF4F1',
              borderColor: isOccupied ? '#D7D7D7' : '#F2542D',
              margin: '2px',
            };

            return (
              <div style={style}>
                <span>{date.getDate()}</span>
                {!isOutside && (
                  <div className="hidden text-xs sm:block">
                    {isOccupied ? 'Occupied' : 'Free'}
                  </div>
                )}
              </div>
            );
          },
        }}
        {...props}
      />
    </section>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
