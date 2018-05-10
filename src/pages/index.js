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
        <div className="input">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Your email adress"
          />
        </div>
        <div className="subscribe-button">
          <button type="button" className="btn btn-primary">
            Subscribe
          </button>
        </div>
        <div>{Testimonial}</div>
      </div>
    </div>
  </div>
)

export default IndexPage
