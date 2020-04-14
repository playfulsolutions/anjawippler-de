import React from "react"
import ProjectDescription from "../components/ProjectDescription"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/welcome-package">
      <h1 className="title is-size-5">Planentasche für das Student Welcome Package</h1>
      <h2>Lust auf Dresden</h2>
      <p>
        Entwurf eines Merchandising Produktes für Studenten mit dem Thema "Dresden. Elbland - lebendige Traditionen".
        Eine Auswahl an Veranstaltungen und die Nennung der Sponsoren sollten in die Gestaltung integriert werden.
      </p>
      <p>
       Die Idee zur Illustration ist aus dem Stadtwappen abgeleitet.
      </p>
      <p>
        2. Platz im Wettbewerb um die Gestaltung des Student Welcome Package 2018
      </p>
      <a href="https://www.cm-dresden.de/aktionen-und-projekte/student-welcome-package/">Zum Wettbewerb.</a>
    </ProjectDescription>
  )
}
