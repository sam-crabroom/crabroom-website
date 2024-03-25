import React from 'react';

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="relative w-full h-0 pb-9/16">
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;