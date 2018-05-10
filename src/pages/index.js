import React from 'react'
import Link from 'gatsby-link'
import Testimonial from '../components/testimonial'
import { Button } from 'reactstrap'

const IndexPage = ({ Testimonial }) => (
  <div>
    <div>
      <h1>Get our best links every weekday</h1>
      <div>
        <p>
          We handpick new content on product development, user experience,
          analytics, and more sent right to your inbox.
        </p>
        <div>
          <input type="form" placeholder="Your email address" />
        </div>
        <div>
          <Button color="primary" size="large ">
            Subscribe
          </Button>{' '}
        </div>
        <div>{Testimonial}</div>
      </div>
    </div>
  </div>
)

export default IndexPage
