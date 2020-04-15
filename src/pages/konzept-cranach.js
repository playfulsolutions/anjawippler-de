import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Cranach">
      <h1>Pop up Cranach</h1>
      <h2>Kunstgeschichte erleben</h2>
      <p>
        Im Austausch mit einem multidisziplinären Team aus KunsthistorikerInnen, GestalterInnnen und PädagogInnen entwickelte ich ein Konzept für eine Kinderausstellung
        über Lukas Cranach. Im Mittelpunkt steht das spielerische Entdecken und selbstständige Erfassen von Zusammenhängen. Komplexe Inhalte werden auch für Erwachsene ansprechend mit
        wenig Text vermittelt.
      </p>
      <p>
        Die Abbildungen illustrieren einige Vorschläge für Stationen, die ermöglichen die mittelalterliche Malwerkstatt mit allen Sinnen zu erfahren. Zur Gestaltung der Erlebnisräume werden digitale und analoge Medien eingesetzt.
      </p>

      <p>
        Kinder können in dieser Ausstellung die Perspektive wechseln, Augen anprobieren, Farben riechen, durch die Schichten eines historischen Gemäldes klettern,
        auf Spurensuche gehen, mit Werkzeugen und Forschungsmethoden experimentieren, in verschiedene Rollen schlüpfen und natürlich selbst kreativ werden.
      </p>
      <hr/>
      <p>
        Für das <WebLink to="https://alice-museum-fuer-kinder.fez-berlin.de/rueckblick/pop-up-cranach/"> Alice Kindermuseum im FEZ Berlin</WebLink>
      </p>
    </ProjectDescription>
  )
}
