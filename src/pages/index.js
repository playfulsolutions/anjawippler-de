import React from "react"
import Container from "../components/Container"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"

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
                              ...GatsbyImageSharpFluid_withWebp
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
    <React.Fragment>
      <SEO title={"Projekte"}/>
      <Container>
        <div className="masonry">
          {imageData.nodes.filter((n) => n.image && n.image.relativeDirectory === "projects").map((n, index) => {
            const theImage = <Img fluid={n.image.childImageSharp.fluid} alt={n.description} title={n.title}
                                  style={{ "overflow": "visible" }}/>
            return (
              n.linkTo && n.linkTo.length > 0 ?
                <Link to={n.linkTo} key={index} aria-label={"Details zum Projekt: " + n.title}>
                  <div className="brick" style={{ width: "100%" }}>{theImage}</div>
                </Link>
                : <div className="brick" style={{ width: "100%" }} key={index}>{theImage}</div>
            )
          })
          }
        </div>
      </Container>
    </React.Fragment>
  )

}
