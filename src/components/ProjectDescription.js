import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"
import Columns from "./Columns"
import Column from "./Column"
import Content from "./Content"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "./SEO"

const ProjectDescription = ({ title, relativeImageDirectory, children }) => {

  const data = useStaticQuery(graphql`
      query {
          allProjectImagesYaml {
              nodes {
                  title
                  description
                  image {
                      relativeDirectory
                      childImageSharp {
                          fluid(maxWidth: 1096, quality: 70) {
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
      <SEO title={title}/>
      <Container>
        <Columns className="has-mt-5-desktop">
          <Column size={"is-one-third"} className="has-mr-6-desktop is-sticky-top-desktop">
            <Content className={"project-description"}>{children}</Content>
          </Column>
          <Column>
            {imageData.nodes.filter((n) => n.image && n.image.relativeDirectory === relativeImageDirectory).map((n, index) => (
              <Img fluid={n.image.childImageSharp.fluid} alt={n.description} title={n.title} key={index}
                   style={{ marginBottom: "1rem" }}/>
            ))
            }
          </Column>
        </Columns>
      </Container>
    </React.Fragment>
  )
}

export default ProjectDescription

ProjectDescription.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  relativeImageDirectory: PropTypes.string,
}
