import React from 'react';

const Info = ({term}) => {
  if (!term) {
    return (
      <div className="alert alert-info">
        <p>Hi there!</p>
        <p>This is a small application using <strong>React</strong>, the <strong>Youtube API</strong>, and a little bit of <strong>Bootstrap</strong> to mimic some Youtube functionality.</p>
        <p>To load up some videos, type a search term in the search bar.</p>
        <p>Try something like <strong>corgi puppies</strong> or <strong>surfing</strong>.</p>
      </div>
    );
  }
  return (
    <div className="alert alert-info">
      <p>Searching up ...</p>
      <h2>{term}</h2>
    </div>
  )
}

export default Info;
