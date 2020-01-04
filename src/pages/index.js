import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="olumide.co"
    />
    <div className="app-wrapper">
      <div className="app-main">
        <div className="app-content">
          <p>My name is <a href="https://en.wikipedia.org/wiki/Olumide" rel="noopener noreferrer" target="_blank">Olumide</a></p>
          <p>Sometimes, I push code to <a href="https://github.com/olumytee" rel="noopener noreferrer" target="_blank"> Github </a></p>
          <p>I chat shit on <a href="https://twitter.com/lohdlippi" rel="noopener noreferrer" target="_blank"> Twitter </a> and <a href="https://medium.com/@lohdlippi" rel="noopener noreferrer" target="_blank"> Medium</a></p>
          <p>Send videos, photos or links to my <a href="mailto:hi@olumide.co"> inbox </a></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
