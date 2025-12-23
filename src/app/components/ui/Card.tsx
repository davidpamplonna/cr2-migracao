import { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: Props) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm">
      {title && (
        <h3 className="font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
