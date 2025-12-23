import React, { ReactNode } from 'react';

type Header = { key: string; label: ReactNode; sortable?: boolean };

interface Props {
  headers: Array<string | Header>;
  children?: ReactNode;
  caption?: string;
  onSort?: (key: string) => void;
  sortState?: { key: string; dir: 'asc' | 'desc' } | null;
  emptyLabel?: string;
  stickyHeader?: boolean;
}

function normalizeHeader(h: string | Header, index: number): Header {
  return typeof h === 'string' ? { key: `${h}-${index}`, label: h } : h;
}

export default function Table({
  headers,
  children,
  caption,
  onSort,
  sortState = null,
  emptyLabel = 'Nenhum registro',
  stickyHeader = false,
}: Props) {
  const normalized = headers.map((h, i) => normalizeHeader(h, i));
  const hasRows = React.Children.count(children) > 0;

 return (
    <div className="overflow-hidden rounded-md bg-card shadow-sm">
      <table className="w-full text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}

        <thead className={`text-muted ${stickyHeader ? 'sticky top-0 z-10 bg-card' : ''}`}>
          <tr>
            {normalized.map((h) => {
              const isSorted = sortState?.key === h.key;
              const ariaSort = isSorted ? (sortState?.dir === 'asc' ? 'ascending' : 'descending') : 'none';

              return (
                <th key={h.key} scope="col" className="text-left px-6 py-3" {...(h.sortable ? { 'aria-sort': ariaSort } : {})}>
                  {h.sortable ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2"
                      onClick={() => onSort?.(h.key)}
                      aria-label={`${typeof h.label === 'string' ? h.label : 'Sort column'}`}
                    >
                      {h.label}
                      <span aria-hidden className="ml-1 text-xs">
                        {isSorted ? (sortState?.dir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  ) : (
                    h.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {hasRows ? (
            children
          ) : (
            <tr>
              <td colSpan={normalized.length} className="px-6 py-4 text-muted text-center">
                {emptyLabel}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
