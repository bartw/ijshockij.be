type Props = { id: string };

export const Video = ({ id }: Props) => (
  <div className="m-2 sm:m-0 sm:flex-shrink-0 sm:w-3/5 md:w-2/5">
    <div className="aspect-w-16 aspect-h-9 sm:mr-2">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);
