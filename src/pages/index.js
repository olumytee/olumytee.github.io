import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend Engineer" />
    <div className="app-wrapper">
      <div className="app-main">
        <div className="app-content">
          <p>My name is Olumide</p>
          <p>I'm a Frontend Engineer at <a href="https://paystack.com" rel="noopener noreferrer" target="_blank"> Paystack </a></p>
          <p>You can find my unmaintained repositories on <a href="https://github.com/olumytee" rel="noopener noreferrer" target="_blank"> Github </a></p>
          <p>I chat shit regularly on <a href="https://twitter.com/lohdlippi" rel="noopener noreferrer" target="_blank"> Twitter </a> and sometimes on <a href="https://medium.com/@lohdlippi" rel="noopener noreferrer" target="_blank"> Medium</a></p>
          <p>Send photos and links to my <a href="mailto:hi@olumide.co"> inbox </a></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
