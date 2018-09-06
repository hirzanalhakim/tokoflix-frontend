import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';

export default class NotFound extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md='12'>
            <div className="error-template">
              <h1>
                Oops!</h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
                </div>
              <div className="error-actions">
                <Button color="info" onClick={() => this.props.history.push('/')}> Back to Home</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}