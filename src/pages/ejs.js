import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/EJS">
      <h1>maxi.mal</h1>
      <h2>Schnittstelle als Installation</h2>
      <p>
        Der Auftrag eine Hilfe zur selbstständigen beruflichen Orientierung zu entwickeln, führt uns ins Wendland. Dort lernen SchülerInnen mit besonderem Förderbedarf im
        sozial-emotionalen Bereich an der Elbe-Jeetzel-Schule. Einige sind von Autismus-Spektrum-Störungen betroffen.
      </p>
      <p>
        Wir konzipierten einen Workshop, den wir mit SchülerInnen und LehrerInnen vor Ort durchführten. So entstand eine vertrauensvolle Gesprächsbasis mit unserer Zielgruppe.
        Behutsam erforschten wir die Ressourcen, Wünsche und Schwierigkeiten der Jugendlichen und PädagogInnen.
      </p>
      <p>
        Die Analyse der Ergebnisse zeigte, dass die Entwicklung von Kommunikationshilfen für die SchülerInnen untereinander im Mittelpunkt steht. Genauso wichtig war die Unterstützung
        des Austauschs mit Ausbildungs- und Praktikumsbetrieben, das Einbinden und kanalisieren digitaler Medien sowie das Schaffen von Möglichkeiten, um den Erfahrungshorizont der
        Heranwachsenden zu erweitern.
      </p>
      <p>
        Wir entwickeln ein Konzept, welches Hilfsmittel zum Medieneinsatz bei der Suche und Auswertung von Berufspraktika sowie Vorschläge zur Gestaltung regelmäßiger Veranstaltungen
        an der Schule enthält. Unser Entwurf „maxi.mal“ ist eine Installation die zum Ort des Austausches wird. Spielerische Elemente fördern die Motivation der SchülerInnen zur
        eigenständigen Nutzung. Prominent platziert im Schulhaus dient sie als Schnittstelle zwischen analog und digital verfügbaren Inhalten. QR Codes, Schlagworte und ausgewählte Links
        lenken die selbstständige Recherche. Als sichtbares Pendant zum verfügbaren Erfahrungsschatz der SchülerInnen wächst auch "maxi.mal“. Ein Projektplan und Beratungsangebot für
        die Umsetzung an der Schule runden unsere Arbeit ab.
      </p>
      <hr/>
      <p>
        In Zusammenarbeit mit Charlotte Ehrt
      </p>
      <p>
        <WebLink to="http://www.elbe-jeetzel-schule.de">zur Elbe-Jeetzel-Schule.</WebLink>
      </p>
    </ProjectDescription>
  )
}
