import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/format';

class ListView extends Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.items.map(item => {
            const snippet = item.snippet;
            const statistics = item.statistics;
            const thumbnail = snippet.thumbnails.medium;
            return (
              <Col key={item.id}>
                <div className="video-list-item">
                  <div className="video-list-item-inner">
                    <Link
                      to={`/video-player/${item.id}`}
                      title={snippet.channelTitle + '-' + snippet.title}
                    >
                      <img
                        src={thumbnail.url}
                        width={thumbnail.width}
                        height={thumbnail.height}
                        alt="Search result"
                      />
                      <div>{snippet.title.substr(0, 30)}</div>
                      <div>{snippet.channelTitle}</div>
                      <div>
                        Published {new Date(snippet.publishedAt).toDateString()}
                      </div>
                      <div>{formatNumber(statistics.viewCount)} Views</div>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default ListView;
