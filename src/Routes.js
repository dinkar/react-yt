import { Route } from 'react-router-dom';
import React from 'react';
import ListViewWrapper from './components/ListViewWrapper';
import VideoPlayer from './components/VideoPlayer';

const Routes = () => (
  <div>
    <Route exact path="/" component={ListViewWrapper} />
    <Route path="/video-category/:id" component={ListViewWrapper} />
    <Route exact path="/video-player" component={VideoPlayer} />
  </div>
);

export default Routes;