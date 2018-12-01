import React from 'react';

const Video = ({ match }) => (
  <h3>Requested Video Param: {match.params.id}</h3>
);

export default Video;