import React from "react"
import ProjectDescription from "../components/ProjectDescription"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/cnc-moebel">
      <h1 className="title is-size-5">Packwild und Zweikeiler</h1>
      <h2>Tierisch eingerichtet</h2>
      <p>
        Form und Anatomie dieser Möbel folgen den Anforderungen stabil und standfest zu sein,
        Sachen zu transportieren und viel im Raum bewegt zu werden. So laden die Hocker Kinder
        und Erwachsene zur spielerischen Nutzung ein.
      </p>
      <p>
        Für die werkzeugfreie Montage ohne Schrauben, Klebestoff oder ähnliches wurden traditionelle Holzverbindungen
        für die Herstellung von Packwild und Zweikeiler mit der CNC Fräse übersetzt. Das ermöglicht eine leichte Skalierbarkeit
        der Möbelstücke entsprechend ihres Einsatzortes sowie eine kostengünstige, möglicherweise sogar dezentrale Produktion entsprechend der Nachfrage.
      </p>
      <p>
       in Zusammenarbeit mit Max Böhme
      </p>
    </ProjectDescription>
  )
}
