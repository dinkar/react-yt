import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ul>
          {
            this.props.items.map((item) => {
              const snippet = item.snippet;
              const thumbnail = snippet.thumbnails.default;
              return <li key={item.id.videoId}>
                <div>{snippet.channelTitle} - {snippet.title}</div>
                <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt="Search result"/>
              </li>
            })
          }
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state
  };
}

export default connect(mapStateToProps)(App);
