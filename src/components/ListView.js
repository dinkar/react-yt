import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListView extends Component {
    render () {
        return (
            <div>
                <div>Search Text: {this.props.state.searchText}</div>
                <ul>
                {
                    this.props.state.items.map((item) => {
                    const snippet = item.snippet;
                    const thumbnail = snippet.thumbnails.default;
                    return (<li key={item.id.videoId || item.id.playlistId || item.id.channelId}>
                        <div>{snippet.channelTitle} - {snippet.title}</div>
                        <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt="Search result"/>
                    </li>);
                    })
                }
                </ul>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(ListView);