import React from 'react'
import { Button, Container, Form, FormGroup, Input, Row, Col } from 'reactstrap'

class Testimonial extends React.Component {
  render() {
    return
    ;<Container fluid>
      <Row className="testimonial">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <h1 className="testimonial__header">WHAT OTHERS ARE SAYING</h1>
        </Col>
      </Row>
      <img src="#" />
      <q>
        I've learned so much about customer development by reading articles
        shared in Know Your Users.
      </q>
      <p>-Joelle Goodman, Partner at ChurnBuster, Co-host of RocketShip</p>
    </Container>
  }
}

export default Testimonial
