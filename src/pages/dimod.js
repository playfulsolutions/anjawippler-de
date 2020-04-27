import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Dimod">
      <h1>dimod</h1>
      <h2>Medizin und Mode</h2>
      <p>
        Dimod steht für funktionelle Mode, die den besonderen Anforderungen verschiedener medizinischer Hilfsmittel auf charmante Art und Weise gerecht wird.
        In die Entwürfe fließen medizisches Wissen, die Beobachtung von Handlungsabläufen, modische Aspekte und der Erfahrungsschatz im Umgang mit modernen
        und traditionellen textilen Materialien. Prototypen werden experimentell entwickelt. Aus raffinierten Lösungen werden allgemeingültige Schnittmuster erstellt,
        die später individuell angepasst werden. So wird kaschiert, was unsichtbar bleiben soll. Die Schönheit der Person wird hervorgehoben.
      </p>
      <p>Es entstehen Lieblingsstücke statt Problemlösungen. Sie werden gerne getragen, da die Kleidungsstücke nach modischen Wünschen variiert werden können und
        den gesamten Nutzungsprozess benötigter Medizintechnik unauffällig unterstützen.
      </p>
      <p>
        Das Beispiel illustriert ein Kleid für Diabetikerinnen, die auf das Tragen von Insulinpumpe und CGM Sensor angewiesen sind. Ein unkompliziertes Handling
        in der Öffentlichkeit wird ermöglicht. Zusätzlich ist das Kleid in Länge und Erscheinungsbild entsprechend dem Anlass variabel. Diese und andere individuelle
        Anforderungen können auf Kundenwunsch umgesetzt werden.
      </p>
      <hr/>
      <p>
        In Zusammenarbeit mit der <WebLink to="https://www.massschneiderei-wippler.de/">Massschneiderei Wippler</WebLink>
      </p>
    </ProjectDescription>
  )
}
