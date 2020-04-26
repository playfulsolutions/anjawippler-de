import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Cyanotypie">
      <h1>Cyanotypie</h1>
      <h2>Großer Auftritt für kleine Lebewesen</h2>
      <p>
        Diese freie Arbeit spiegelt meine Leidenschaft für die Schönheit von Insekten, Fotografie und die Lust am Erkunden unterschiedlicher Materialien und Techniken wider.
      </p>
      <p>
        Makroaufnahmen von Insekten wurden digital bearbeitet, um als Negative bei der Belichtung diverser Untergründe mit der historischen Edeldrucktechnik
        Cyanotypie eingesetzt werden zu können.
      </p>
      <p>
        Unikate und ein Postkartenset entstehen. Zufall und Experiment verleihen den Ergebnissen ihren besonderen Charakter.
      </p>
      <hr/>
      <p>
        <WebLink to="https://selekkt.com/postkartenset-cyanotypie-insekten-von-playfulsolutions.html">Kaufen.</WebLink>
      </p>
    </ProjectDescription>
  )
}
