import React from 'react';
import { Link, Route } from 'react-router-dom';
import Video from './xtn-video';

const Videos = ({
    match
  }) => (
  <div>
    <h2>List of Videos</h2>

    <ul>
      <li>
        <Link to={`${match.url}/video`}>Video</Link>
      </li>
      <li>
        <Link to={`${match.url}/video-2`}>Video 2</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Video} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a video.</h3>}
    />
  </div>
);

export default Videos;
