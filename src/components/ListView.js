import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ListView extends Component {
  render () {
    return (
      <div>
        <Row>
        {
          this.props.items.map((item) => {
            const snippet = item.snippet;
            const thumbnail = snippet.thumbnails.default;
            return (
              <Col key={ item.id }>
                <Link to={`/video-player/${item.id}`}>
                  <div>{snippet.channelTitle} - {snippet.title}</div>
                  <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt="Search result"/>
                </Link>
              </Col>);
          })
        }
        </Row>
      </div>);
  }
}

export default ListView;
