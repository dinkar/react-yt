import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchVideoCategories } from './actions';
import './app.css';

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
          <Row className="justify-content-md-center app-header">
            <Header />
          </Row>
          <Row>
            <Col lg={2} md={2} className="app-navbar">
              <Navbar items={this.props.state.videoCategories} />
            </Col>
            <Col lg={10} md={10} className="app-main-view">
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
