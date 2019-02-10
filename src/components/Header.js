import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchItems } from '../actions';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  render() {
    return (
      <header>
        <Form>
          <InputGroup>
            <Form.Control
              value={this.props.state.searchText}
              onChange={this.props.onInputChange}
              placeholder="Search"
            />
            <InputGroup.Append>
              <Button variant="light">Submit</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e => {
      dispatch(fetchSearchItems({ searchText: e.target.value }));
    },
    onClick: e => {
      dispatch(fetchSearchItems({ searchText: 'batman' }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
