interface Props {
  label: string;
  color?: 'success' | 'canceled' | 'migrated' | 'revision';
}

export default function Badge({
  label,
  color = 'success',
}: Props) {
  const colors = {
    success: 'bg-success/10 text-success',
    canceled: 'bg-canceled/10 text-canceled',
    migrated: 'bg-migrated/10 text-migrated',
    revision: 'bg-revision/10 text-revision',
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${colors[color]}`}
    >
      {label}
    </span>
  );
}
