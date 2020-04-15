import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/AchtungBaustelle">
      <h1>Achtung Baustelle</h1>
      <h2>Auf einen Blick</h2>
      <p>Grafiken für die Beschilderung der Stationen der Kinderausstellung "Achtung Baustelle".</p>
      <hr/>
      <p>Fotos von Stefan Ostermeyer</p>
      <p>Für das
        <WebLink to="https://alice-museum-fuer-kinder.fez-berlin.de/rueckblick/achtung-baustelle/"> Alice Kindermuseum im FEZ Berlin</WebLink>
      </p>
    </ProjectDescription>
  )
}
