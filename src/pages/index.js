import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Slider from "../components/slider"

const Home = () => {
  return (
    <Layout>
      <Header headerText="Vishnu M Menon" />
      <p>My portfolio website!</p>
      <Slider
        firstAlt="Snowman"
        firstHeading="Our own first Snowman!!!"
        secondAlt="Para Gliding"
        secondHeading="Take the Plunge!"
        thirdAlt="Just Do It"
        thirdHeading="Just Do It!"
      />
    </Layout>
  )
}

export default Home
