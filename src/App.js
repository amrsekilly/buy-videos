import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './features/app-grid/xtn-header';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/videos" component={Videos} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Video = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
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

export default App;
