import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchVideoCategories } from './actions';

import Routes from './Routes';
import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <Header />
          </Row>
          <Row>
            <Col lg={2}>
              <Navbar items={this.props.state.videoCategories} />
            </Col>
            <Col lg={10}>
              <Routes />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount: () => {
      dispatch(fetchVideoCategories());
    }
  };
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
