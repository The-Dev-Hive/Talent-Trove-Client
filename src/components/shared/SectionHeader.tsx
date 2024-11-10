type SectionHeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="text-center my-14 space-y-3">
      <p className="inline-block hover:bg-indigo-100 px-4 py-1 border border-indigo-500 text-indigo-500 rounded-full font-semibold text-xs uppercase tracking-wide">
        {title}
      </p>
      <h2 className="text-3xl font-bold">{subtitle}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};
