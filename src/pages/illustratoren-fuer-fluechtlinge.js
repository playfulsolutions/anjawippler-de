import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Fluechtlinge">
      <h1>Stadtverkehr</h1>
      <h2>Spielerisch Sprachen lernen</h2>
      <p>Spielplan zum Drucken und Ausmalen.</p>
      <hr/>
      <p>Beitrag zu
        <WebLink to="https://www.illustratorenfuerfluechtlinge.de/category/verkehr/"> Illustratoren für
          Flüchtlinge</WebLink>
      </p>
    </ProjectDescription>
  )
}
