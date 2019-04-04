import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Title of IndexPage" keywords={[`foo`, `bar`]} />
    I'm the index page...
    <Link to={`/posts`} />
  </Layout>
)

export default IndexPage
