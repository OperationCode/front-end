const pressVideos = [
  { title: 'Github Universe: Operation Code', src: 'https://www.youtube.com/embed/xN7yMoe38xc' },
  {
    title: 'Operation Code - On a Mission to Expand the GI Bill',
    src: 'https://player.vimeo.com/video/124866675?byline=0&portrait=0',
  },
];

function PressVideos() {
  return (
    <div className="flex items-center justify-around flex-wrap gap-5">
      {pressVideos.map(video => (
        <iframe
          key={video.title}
          title={video.title}
          src={video.src}
          frameBorder="0"
          allowFullScreen
          className="aspect-video h-48 md:h-64 lg:h-96"
        />
      ))}
    </div>
  );
}

export default PressVideos;
