import React from 'react'
import Link from 'gatsby-link'
import Testimonial from '../components/testimonial'
import { Button, Container, Form, FormGroup, Input, Row, Col } from 'reactstrap'
import avatar from '../assets/photos/avatar-round-1 copy.png'
import logo from '../assets/images/know-your-users-alt.svg'

const IndexPage = ({ Testimonial }) => (
  <Container fluid>
    <Row className="navigation">
      <img src={logo} alt="logo" />
    </Row>
    <Row className="content">
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Row className="hero">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 className="hero__title">Get our best links every week</h1>
            <p className="hero__subtitle">
              The best original content on product development, user experience, analytics, and more – sent right to your inbox.
            </p>
          </Col>
        </Row>
        <Row className="subscription">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
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
          <Col sm="6" md={{ size: 2, offset: 2 }}>
            <img src={avatar} alt="avatar" className="avatar" />
          </Col>
          <Col sm="6" md={{ size: 7 }}>
            <p className="testimonial__quote">
              "I've learned so much about customer development by reading the
              articles shared in Know Your Users."
            </p>
            <Col sm="6" md={{ size: 12 }}>
              <p className="testimonial__quote__author">
                - Joelle Goodman, Partner at ChurnBuster, Co-Host of RocketShip
              </p>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default IndexPage
