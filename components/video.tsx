type Props = { id: string };

export const Video = ({ id }: Props) => (
  <div className="aspect-w-16 aspect-h-9 sm:mr-8">
    <iframe
      title="video"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
