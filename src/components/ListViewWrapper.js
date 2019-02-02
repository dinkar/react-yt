
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChannelIdVideos } from '../actions';
import ListView from './ListView';

class ListViewWrapper extends Component {
  componentDidMount() {
    this.props.fetchChannelIdVideos(this.props.match.params);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchChannelIdVideos(newProps.match.params);
    }
  }
  render() {
    return (
      <div>
        {/* <div>Search Text: {this.props.state.searchText}</div> */}
        <ListView items={this.props.state.items}></ListView>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannelIdVideos: (params) => {
      dispatch(fetchChannelIdVideos(params));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListViewWrapper);
