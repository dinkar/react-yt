import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul>
      {
        this.props.items.map(item => {
          return (
            <Row as='li' key={item.id}>
              <Link to={`/video-category/${item.id}`}>{item.snippet.title}</Link>
            </Row>
          );
        })
      }
      </ul>
    )
  }
}

export default Navbar;
