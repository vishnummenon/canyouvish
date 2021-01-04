import Carousel from "react-bootstrap/Carousel"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = props => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/snowman.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/paragliding.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "images/justdoit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Img fluid={data.image1.childImageSharp.fluid} alt={props.firstAlt} />
        <Carousel.Caption>
          <h3>{props.firstHeading}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img fluid={data.image2.childImageSharp.fluid} alt={props.secondAlt} />
        <Carousel.Caption>
          <h3>{props.secondHeading}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img fluid={data.image3.childImageSharp.fluid} alt={props.thirdAlt} />
        <Carousel.Caption>
          <h3>{props.thirdHeading}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
