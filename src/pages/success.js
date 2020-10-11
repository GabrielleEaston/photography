import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <section className="success-page">
        <div className="page-center">
          <h2>
            Your message was successfully sent. I will get back to you as soon as
            I can.
          </h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success