import React from "react";

const VideoPlayer = ({ videoId, urlSrc }) => {
  return (
    <div className="videos" id={videoId}>
      <iframe
        width="350"
        height="197"
        src={urlSrc}
        title="YouTube video player"
        frameBorder="0"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
