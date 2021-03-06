import React from "react"
import ProjectDescription from "../components/ProjectDescription"
import WebLink from "../components/WebLink"


export default () => {

  return (
    <ProjectDescription relativeImageDirectory="projects/flortrait">
      <h1>Flortrait</h1>
      <h2>Bühne frei für frische Blumen</h2>
      <p>
        Das Flortrait ist ein Wohnaccessoire das alle Blicke auf sich zieht. Die Silhouette einer Vase und ein
        Wasserglas verbinden sich zu einem dreidimensionalen Objekt, welches an der Wand zu schweben scheint.
        Dieses lebendige Stillleben muss nie weichen um Platz für ein Festgelage auf dem Esstisch zu schaffen.
      </p>
      <p>
        In Kombination aus industrieller Herstellung (Lasercut), handwerklicher Veredlung und der individuellen
        Oberfläche des Naturmaterials Holz entstehen Unikate in Kleinserien.
      </p>
      <hr/>
      <p>
        2013 Designpreis "Platz für Ideen" der IKEA Stiftung für das Flortrait.
      </p>
      <p>
        <WebLink to="https://selekkt.com/vase-fur-die-wand-flortrait-natur.html">Kaufen.</WebLink>
      </p>

    </ProjectDescription>
  )
}
