import React from "react"
import Layout from "../components/layouts/layout.js"

export default function IndexPage( {pageContext} ) {
  return (
    <Layout context={pageContext} title="Etusivu">
      <p>Lorem ipsum dolor sit amet.</p>
    </Layout>
  )
}
