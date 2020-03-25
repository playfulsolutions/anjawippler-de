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

  return (
    <Container>
      <div className="masonry">
        {data.allProjectImagesYaml.nodes.map((n, index) => {
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
