import React from 'react'
import Link from 'gatsby-link'
import Testimonial from '../components/testimonial'
import { Button, Container, Form, FormGroup, Input, Row, Col } from 'reactstrap'
import avatar from '../assets/photos/avatar-round-1 copy.png'

const IndexPage = ({ Testimonial }) => (
  <Container fluid>
    <Row className="hero">
      <Col sm="12" md={{ size: 9, offset: 1 }}>
        <h1 className="hero__title">Get our best links every weekday</h1>
        <p className="hero__subtitle">
          We hand-pick new content on product development, user experience,
          analytics, and more sent right to your inbox.
        </p>
      </Col>
    </Row>
    <Row className="subscription">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <Form>
          <FormGroup className="subscription__email">
            <Input
              className="subscription__email__input"
              type="email"
              placeholder="Your email address"
            />
          </FormGroup>
          <Button className="subscription__button" color="primary" block>
            Subscribe
          </Button>
        </Form>
      </Col>
    </Row>
    <Row className="testimonial">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <h1 className="testimonial__header">WHAT OTHERS ARE SAYING</h1>
      </Col>
      <Col sm="6" md={{ size: 8, offset: 2 }}>
        <img src={avatar} alt="avatar" />
      </Col>
    </Row>
  </Container>
)

export default IndexPage
