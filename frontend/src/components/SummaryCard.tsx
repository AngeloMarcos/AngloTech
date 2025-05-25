type SummaryCardProps = {
  title: string;
  value: string;
};

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
