import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>loading</div>
  }

  const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className="video-detail col-xs-12 col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={embedUrl} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};


export default VideoDetail;