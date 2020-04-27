import React from "react"
import Columns from "../components/Columns"
import Column from "../components/Column"
import Content from "../components/Content"
import Container from "../components/Container"
import SEO from "../components/SEO"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {

  const data = useStaticQuery(graphql`
      query {
          img: file(relativePath: { eq: "anja-wippler.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  const now = new Date().getHours()
  let greeting
  if ([18, 19, 20, 21, 22, 23, 0, 1, 2].includes(now)) {
    greeting = "Guten Abend"
  } else if ([5, 6, 7, 8, 9, 10].includes(now)) {
    greeting = "Guten Morgen"
  } else {
    greeting = "Hallo"
  }

  return (
    <React.Fragment>
      <SEO title={"Die Designerin"}/>
      <Container className="has-mt-5-desktop">
        <Columns>
          <Column className="has-mr-6-desktop">
            <div style={{ "marginBottom": "1.7rem" }}><Img fluid={data.img.childImageSharp.fluid}/></div>
              <Content className="is-hidden-mobile">
                <hr/>
                <h1 className={"slim-title is-size-3"} style={{ "marginBottom": "0.5rem" }}>Kontakt</h1>
                <p>
                  T: +49 (0) 176 215 349 66<br/>
                  M: anja.wippler@icloud.com
                </p>
              </Content>
          </Column>
          <Column size={"is-three-fifths-tablet"}>
            <Content>
              <h1 className={"title is-size-2"} style={{ "marginBottom": "3rem" }}>{greeting}</h1>
              <p>
                Schon als Kind zeigte ich eine Leidenschaft für Illustration und Design, indem ich rollenweise Tapeten
                bekritzelte.
                Während meines Studiums an der Kunsthochschule Burg Giebichenstein in Halle (B.A. Spiel- und Lerndesign,
                Master Industrial Design)
                und der Akademie der Bildenden Künste Warschau (Produktdesign) verfeinerte ich meine kreativen
                Fähigkeiten. Ich begann freiberuflich
                als Gestalterin zu arbeiten und gründete später playfulsolutions.
              </p>

              <p>
                Heute bin ich als Designerin, Illustratorin und Querdenkerin tätig. Ich entwerfe Produkte, entwickle
                Konzepte, halte kreative Workshops
                und biete gestalterische Beratungsleistungen an. Typisch für mich ist eine spielerisch-experimentelle
                Herangehensweise. Zu Beginn des
                Gestaltungsprozesses analysiere ich bestehende Handlungsabläufe, Prozesse, Strukturen und Produkte, um
                sie anschließend zu verbessern
                – natürlich immer mit Fokus auf den Nutzer.
              </p>

              <p>
                Meine gestalterisch-kreativen Fähigkeiten ergänzt ein praktischer und theoretischer Erfahrungsschatz in
                Ergonomie, Psychologie, Pädagogik und Medizin,
                den ich in meiner Ausbildung und Arbeit als Ergotherapeutin und Dozentin erwarb.
              </p>

              <p>
                Ich habe eine starke Affinität zu modernen und traditionellen Materialien und deren
                Bearbeitungsmöglichkeiten – von Holz über Wabenkernstrukturen und
                Tyvek bis zu smarten Formgedächtnislegierungen oder Biocomposites.
              </p>

              <p>
                Ein gelungenes Produkt ist für mich intuitiv, wird mit Freude genutzt und benötigt keine
                Bedienungsanleitung. Schönheit entsteht durch Reduktion und Einfachheit,
                ohne das Ergebnis dabei beliebig oder charakterlos werden zu lassen. Wenn ein Produkt die Zielgruppe
                emotional oder sinnlich anspricht, steigert das seinen Wert
                für den Nutzer. Das sind neben ökonomischen und ökologischen Aspekten sowie Kundenwünschen die
                Leitlinien meiner gestalterischen Entscheidungen.
              </p>
            </Content>
          </Column>
        </Columns>
        <Content className="is-hidden-desktop">
          <hr/>
          <h1 className={"slim-title is-size-3"} style={{ "marginBottom": "0.5rem" }}>Kontakt</h1>
          <p>
            +49 (0) 176 215 349 66<br/>
            anja.wippler@icloud.com
          </p>
        </Content>
      </Container>
    </React.Fragment>
  )
}
