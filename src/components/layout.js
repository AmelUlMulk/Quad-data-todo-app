/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return <main className="main">{children}</main>
}

export default Layout
