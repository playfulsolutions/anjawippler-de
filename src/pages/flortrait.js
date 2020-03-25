import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectDescription from "../components/ProjectDescription"


export default () => {

  const data = useStaticQuery(graphql`
      query {
          allProjectImagesYaml {
              nodes {
                  title
                  description
                  image {
                      childImageSharp {
                          fluid(maxWidth: 1096, quality: 70) {
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
    <ProjectDescription imageData={data.allProjectImagesYaml}>
      <h1>Flortrait</h1>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque
        ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam porta sem malesuada magna mollis euismod.
      </p>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque
        ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam porta sem malesuada magna mollis euismod.
      </p>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque
        ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam porta sem malesuada magna mollis euismod.
      </p>
    </ProjectDescription>
  )
}
