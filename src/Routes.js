import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ListView from './components/ListView';
import VideoPlayer from './components/VideoPlayer';


const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={ListView} />
            <Route exact path="/video-player" component={VideoPlayer} />
        </div>
    </Router>
);

export default Routes;