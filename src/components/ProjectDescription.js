import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"
import Columns from "./Columns"
import Column from "./Column"
import Content from "./Content"
import Img from "gatsby-image"

const ProjectDescription = ({ imageData, children }) => {
  return (
    <Container>
      <Columns className="has-mt-5-desktop">
        <Column size={"is-one-third"} className="has-mr-5-desktop is-sticky-top-desktop">
          <Content>{children}</Content>
        </Column>
        <Column>
          {imageData.nodes.map((n, index) => (
            <Img fluid={n.image.childImageSharp.fluid} alt={n.description} title={n.title} key={index}
                 style={{ marginBottom: "10px" }}/>
          ))
          }
        </Column>
      </Columns>
    </Container>
  )
}

export default ProjectDescription

ProjectDescription.propTypes = {
  children: PropTypes.node.isRequired,
  imageData: PropTypes.object,
}
