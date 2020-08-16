import React from "react";

const VideoDetail = ({ video }) => {
  // Otherwise we'll get an error because video.snippet.title is not yet definied.
  if (!video) {
    return <div>Loading..</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} allowFullScreen />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
