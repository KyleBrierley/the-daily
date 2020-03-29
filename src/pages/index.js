import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FormPage from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Suh' dudes</h1>
    <p>Enter your phone # below to brighten up your quarantined day!</p>
    <p>Format: +10123456789</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <FormPage />
    </div>
    {/* <Link to="/page-2/">test</Link> */}
  </Layout>
)

export default IndexPage
