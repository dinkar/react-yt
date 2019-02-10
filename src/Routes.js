import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ListViewWrapper from './pages/ListViewWrapper';
import VideoPlayerWrapper from './pages/VideoPlayerWrapper';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ListViewWrapper} />
    <Route path="/video-category/:id" component={ListViewWrapper} />
    <Route path="/video-player/:videoId" component={VideoPlayerWrapper} />
  </Switch>
);

export default Routes;
