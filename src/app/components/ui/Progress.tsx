import React from 'react';

interface Props {
  value: number; 
  status?: React.ReactNode;
  percentage?: number; 
  height?: number; 
  ariaLabel?: string;
}

export default function Progress({ value, status, percentage, height = 8, ariaLabel }: Props) {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  const displayPercentage =
    typeof percentage === 'number' ? Math.round(Math.max(0, Math.min(100, percentage))) : Math.round(safeValue);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="text-sm text-text">{status}</span>
        <span className="text-sm text-text">{displayPercentage}%</span>
      </div>

      <div
        className="w-full bg-bg-progress rounded-full"
        style={{ height }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        aria-valuetext={`${displayPercentage}%`}
        aria-label={ariaLabel ?? (typeof status === 'string' ? status : 'Progress bar')}
      >
        <div
          className="bg-primary h-full rounded-full transition-all"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}