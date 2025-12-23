interface Props {
  title: string;
  description?: string;
}

export default function TitleHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {description && (
        <p className="text-muted">{description}</p>
      )}
    </div>
  );
}
