import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/exTented">
      <h1>exTENTed</h1>
      <h2>Schutzraum und Unabhängigkeit</h2>
      <p>
        Das Autozelt exTENTed verströmt den Duft der Freiheit. Der Entwurf bewegt sich auf dem schmalen Grat zwischen Wahrnehmung und Realität.
        Als Erweiterung des Fahrzeuginnenraumes wird die Sicherheit und Bequemlichkeit des Autos auf Liegefläche und Zelt übertragen.
        Der große überdachte Innenraum verspricht angenehmes Übernachten und Frühstücken unter dem Vordach.
      </p>
      <p>
        Konzipiert als Ergänzung für verschiedene PKWs und so konstruiert das es im Handumdrehen aufgebaut ist, weckt exTENTed die Lust auf einen Roadtrip.
        Die Möglichkeit jeden Tag einen anderen Ort ansteuern, sich treiben zu lassen und am Abend unkompliziert und unabhängig von Wetter und Umgebung Erholung zu finden,
        verspricht ein eigenes Bett das stets an Bord ist.
      </p>
      <hr/>
      <p>
         In Zusammenarbeit mit Elisabeth Seyferth
      </p>
      <p>Unique youngstar nominee 2014 und Ausstellung im Rahmen der
        <WebLink to="https://www.spogagafa.de"> spoga+gafa </WebLink>Köln.<br/>
        <WebLink to="http://extented.blogspot.com">Ergänzende Infos.</WebLink>
      </p>
    </ProjectDescription>
  )
}
