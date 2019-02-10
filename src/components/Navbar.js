import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          return (
            <Row as="li" key={item.id} className="navbar-item">
              <NavLink
                to={`/video-category/${item.id}`}
                activeClassName="selected"
              >
                {item.snippet.title}
              </NavLink>
            </Row>
          );
        })}
      </ul>
    );
  }
}

export default Navbar;
