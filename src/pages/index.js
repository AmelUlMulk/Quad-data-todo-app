import * as React from "react"
import MainContainer from "../components/landing/mainContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainContainer />
  </Layout>
)

export default IndexPage
