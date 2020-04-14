import React from "react"
import ProjectDescription from "../components/ProjectDescription"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/AchtungBaustelle">
      <h1 className="title is-size-5">Achtung Baustelle</h1>
      <h2>Auf einen Blick</h2>
      <p>Grafiken für die Beschilderung der Stationen der Kinderausstellung "Achtung Baustelle".</p>
      <p>Fotos von Stefan Ostermeyer</p>
      <p>für das
        <a href="https://alice-museum-fuer-kinder.fez-berlin.de/rueckblick/achtung-baustelle/"> Alice Kindermuseum im FEZ Berlin</a>
      </p>
    </ProjectDescription>
  )
}
