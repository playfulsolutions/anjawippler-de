import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/Octopuz">
      <h1>Octo.puz</h1>
      <h2>Zu Wasser und zu Lande</h2>
      <p>
        Völlig autonom und naturnah mit Kajak und Fahrrad unterwegs sein, das Boot zu Wasser lassen wo der Fluss dazu einlädt
        und die Strecke zum nächsten See mit Muskelkraft überwinden - das ist der Traum der zur Entwicklung von Octo.puz führte.
      </p>
      <p>
        Octo.puz ist ideal für abendteuerlustige Sportler, die ihre Unabhängigkeit lieben. Es besteht aus acht stapelbaren Segmenten
        und einem textilen Spritzschutz. Das Kajak kann in Gepäcktaschen mit dem Fahrrad transportiert werden. Zu Wasser bietet es
        ausreichend Platz für Gepäck und sogar ein faltbares Rad. Die werkzeugfreie Montage dauert nur wenige Minuten.
      </p>
      <hr/>
      <p>
        In Zusammenarbeit mit Elisabeth Seyferth
      </p>
      <p>
        Unique youngstar nominee 2014 und Ausstellung im Rahmen der <WebLink
        to="https://www.spogagafa.de">spoga+gafa</WebLink> Köln.<br/>
      </p>
      <p>
        Zeitschrift „Fit for Fun“ Januar 2015, MDR „Einfach Genial“ 2015
      </p>
      <p>
        <WebLink to="http://octo-puz.blogspot.com">Einblicke in die Projektarbeit.</WebLink>
      </p>
    </ProjectDescription>
  )
}
