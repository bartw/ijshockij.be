type Props = { id: string };

export const Video = ({ id }: Props) => (
  <div className="sm:inline-block sm:w-1/2 md:w-1/3">
    <div className="aspect-w-16 aspect-h-9 m-2">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);
