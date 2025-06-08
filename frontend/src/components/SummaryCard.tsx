type SummaryCardProps = {
  title: string;
  value: string;
};

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="bg-dark-card dark:bg-light-card border border-dark-border dark:border-light-border p-4 rounded-lg shadow">
      <h3 className="text-dark-subtext dark:text-light-subtext text-sm">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-dark-text dark:text-light-text">
        {value}
      </p>
    </div>
  );
}
