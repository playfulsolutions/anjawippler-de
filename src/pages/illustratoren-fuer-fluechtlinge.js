import React from "react"
import ProjectDescription from "../components/ProjectDescription"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Fluechtlinge">
      <h1 className="title is-size-5">Stadtverkehr</h1>
      <h2>Spielerisch Sprachen lernen</h2>
      <p>Spielplan zum Drucken und Ausmalen.</p>

      <p>Beitrag zu
        <a href="https://www.illustratorenfuerfluechtlinge.de/category/verkehr/"> Illustratoren für Flüchtlinge</a>
      </p>
    </ProjectDescription>
  )
}
