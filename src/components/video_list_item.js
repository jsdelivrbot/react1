import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list">
        <img src={imageUrl} />
        <p>{video.snippet.title}</p>
      </div>
    </li>
  );
}


export default VideoListItem;