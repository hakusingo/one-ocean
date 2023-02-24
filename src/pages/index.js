import * as React from "react"
import { useState } from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

import "./index.scss"
// import Hero from "../components/index/hero"
import Intro from "../components/index/intro"
// import News from "../components/index/news"
import Menu from "../components/index/menu"
import Feature from "../components/index/feature"
import Stuff from "../components/index/stuff"
// import Blog from "../components/index/blog"
import Emotion from "../components/index/emotion"
import Modal from "../components/index/modal"

const IndexPage = () => {

  const [modal, modalState] = useState(true)

  return (
    <Layout>
      {/* <Hero /> */}
      <Intro />
      {/* <News /> */}
      <Menu />
      <Feature />
      <Stuff modal={modal} modalState={modalState} />
      {/* <Blog /> */}
      <Emotion />
      {
        modal || (
          <Modal modal={modal} modalState={modalState} />
        )
      }
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="沖縄自然体験アドベンチャーツアー" />

export default IndexPage