import React from 'react';
import moment from 'moment';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div></div>;
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  const date = moment(video.snippet.publishedAt).format("dddd, MMMM Do YYYY");

  return (
    <div className="video-detail col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <div className="small">by <strong>{video.snippet.channelTitle}</strong></div>
        <div className="small">published on <strong>{date}</strong></div>
        <hr />
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
