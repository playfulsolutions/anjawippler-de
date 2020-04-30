import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Vogelnotizen">
      <h1>Notizhefte für Vogelfreunde</h1>
      <h2>Schönheit des Alltäglichen</h2>
      <p>Illustration und Umschlaggestaltung.</p>
      <hr/>
      <p>
        <WebLink to="https://selekkt.com/playfulsolutions-notizheft-mit-vogel-illustration-meise.html">Kaufen.</WebLink>
      </p>
    </ProjectDescription>
  )
}
