type ProgressChartProps = {
  data: Array<{ name: string; value: number }>;
};

export default function ProgressChart({ data }: ProgressChartProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white text-lg mb-2">Progresso por Curso</h3>
      <p className="text-gray-400">[Gráfico de exemplo]</p>
    </div>
  );
}
