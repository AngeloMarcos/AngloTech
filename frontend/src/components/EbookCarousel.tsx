type Ebook = {
  id: number;
  title: string;
  coverUrl: string;
};

type EbookCarouselProps = {
  ebooks: Ebook[];
};

export default function EbookCarousel({ ebooks }: EbookCarouselProps) {
  if (ebooks.length === 0) {
    return <p className="text-gray-400">Nenhum e-book disponível.</p>;
  }
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white text-lg mb-2">Novos E-books</h3>
      <div className="flex space-x-4 overflow-auto">
        {ebooks.map((eb) => (
          <div key={eb.id} className="min-w-[120px]">
            <img src={eb.coverUrl} alt={eb.title} className="w-full h-32 object-cover rounded" />
            <p className="text-white mt-2 text-center text-sm">{eb.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
