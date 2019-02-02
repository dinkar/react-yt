import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

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
                <div>{snippet.channelTitle} - {snippet.title}</div>
                <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt="Search result"/>
              </Col>);
          })
        }
        </Row>
      </div>);
  }
}

export default ListView;
