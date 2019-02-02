import { Route } from 'react-router-dom';
import React from 'react';
import ListViewWrapper from './components/ListViewWrapper';
import VideoPlayerWrapper from './components/VideoPlayerWrapper';

const Routes = () => (
  <div>
    <Route exact path="/" component={ListViewWrapper} />
    <Route path="/video-category/:id" component={ListViewWrapper} />
    <Route path="/video-player/:videoId" component={VideoPlayerWrapper} />
  </div>
);

export default Routes;
