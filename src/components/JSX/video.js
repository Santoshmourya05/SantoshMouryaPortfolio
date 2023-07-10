import React from 'react';
const VideoPlayer = () => {
  return (
    <div>
      <video controls width="300" height="300">
  <source src="/Videos/video1.mp4" type="video/mp4" />
</video>

    </div>
  );
};

export default VideoPlayer;
