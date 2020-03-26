import React from "react"
import Container from "../components/Container"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {

  const data = useStaticQuery(graphql`
      query {
          allProjectImagesYaml {
              nodes {
                  title
                  linkTo
                  description
                  image {
                      relativeDirectory
                      childImageSharp {
                          fluid(maxWidth: 320, quality: 70) {
                              ...GatsbyImageSharpFluid
                              presentationWidth
                          }
                      }
                  }
              }
          }
      }
  `)

  const imageData = data.allProjectImagesYaml

  return (
    <Container>
      <div className="masonry">
        {imageData.nodes.filter((n) => n.image.relativeDirectory === "projects").map((n, index) => {
          const theImage = <Img fluid={n.image.childImageSharp.fluid} alt={n.description} title={n.title}/>
          return (
            n.linkTo && n.linkTo.length > 0 ?
              <Link to={n.linkTo} key={index}>
                <div className="brick" style={{ width: "100%" }}>{theImage}</div>
              </Link>
              : <div className="brick" style={{ width: "100%" }} key={index}>{theImage}</div>
          )
        })
        }
      </div>
    </Container>
  )

}
