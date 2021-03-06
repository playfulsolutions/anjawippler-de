import React from "react"
import Container from "../components/Container"
import Content from "../components/Content"
import SEO from "../components/SEO"

export default () => {
  return (
    <React.Fragment>
      <SEO title={'Impressum'}/>
      <Container>
        <Content>
          <h1>Impressum</h1>

          <h3>Angaben gemäß § 5 TMG</h3>

          <p>
            Anja Wippler<br/>
            Anton-Graff-Str. 28<br/>
            D-01309 Dresden<br/>
            <abbr title="Telefon">Tel:</abbr>&nbsp;+49 176 21534966<br/>
            <abbr title="E-Mail-Adresse">E-Mail:</abbr>anja.wippler(a)icloud.com<br/>
            Website: www.anjawippler.de
          </p>

          <h3>Anwendungsbereich</h3>

          <p>
            Eine Nutzung dieser von Anja Wippler bereitgestellten Website ist ausschließlich unter Anerkennung der
            folgenden Bedingungen zulässig.
          </p>

          <h3>Haftungsausschluss</h3>

          <p>
            Trotz genauer Prüfung der zur Verfügung gestellten Informationen übernimmt Anja Wippler keine
            Haftung für Bearbeitungsfehler oder Nutzungsausfall, entgangenen Gewinn oder erwartete ersparte
            Aufwendungen, erwartete Problemlösungen, Verlust des Firmenwerts (Goodwill) oder Verlust von Daten sowie
            für jegliche Art von indirekten Vermögens- oder Folgeschäden (einschließlich Schäden aufgrund von
            Ansprüchen Dritter), welche im Zusammenhang mit der Benutzung der Website und der Verwendung dieser
            Informationen, gleich ob aus Vertrag bzw. der Täuschung beim Vertragsschluss, Fahrlässigkeit oder
            unerlaubter Handlung, entstehen.

            Sofern Dokumente oder sonstige Informationen unentgeltlich überlassen werden, ist eine Haftung für Sach-
            und Rechtsmängel der Dokumente oder sonstigen Informationen, insbesondere für deren Richtigkeit,
            Vollständigkeit, Fehlerfreiheit, Zuverlässigkeit, Genauigkeit, Verwendbarkeit, Freiheit von Schutz- und
            Urheberrechten Dritter und Qualität – außer bei Vorsatz oder Arglist – ausgeschlossen.

            Im Übrigen ist jegliche Haftung von Anja Wippler ausgeschlossen, soweit nicht nach dem
            Produkthaftungsgesetz, wegen Vorsatzes, grober Fahrlässigkeit, wegen Verletzung des Lebens, des Körpers
            oder Gesundheit, wegen der Übernahme einer Beschaffenheitsgarantie, wegen arglistigen Verschweigens
            eines Mangels oder wegen der Verletzung wesentlicher Vertragspflichten zwingend gehaftet wird. Der
            Schadensersatz wegen Verletzung wesentlicher Vertragspflichten ist jedoch auf den vertragstypischen,
            vorhersehbaren Schaden begrenzt, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.

            Anja Wippler ist stets bemüht die Website vor Viren und anderen Gefahren zu schützen. Jedoch kann
            Anja Wippler keine Virenfreiheit garantieren. Es obliegt dem Nutzer für ausreichende
            Schutzmaßnahmen (Antivirensoftware) zu sorgen.
          </p>

          <h3>Nutzungsbedingungen</h3>

          <p>
            Anja Wippler gewährt mit der Bereitstellung der Informationen keinerlei Nutzungsrechte an
            Urheberrechten, Patenten oder anderem geistigen Eigentum. Die Website kann Hinweise zu Eigentumsrechte
            Anderer beinhalten, die Sie entsprechend beachten und befolgen müssen. Anja Wippler behält sich
            vor, jederzeit die Inhalte der Website zu verändern oder zu aktualisieren.
          </p>

          <h3>Hyperlinks</h3>

          <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter (“externe Links”). Die Websites, auf die
            verwiesen wird, unterliegen nicht der Kontrolle durch Anja Wippler. Anja Wippler ist nicht
            verantwortlich für die Inhalte dieser oder weiterführender Websites und stimmt nicht automatisch dem
            Inhalt der Websites zu. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete
            Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige
            externe Links unverzüglich gelöscht.
          </p>

          <h3>Gerichtsstand</h3>

          <p>Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit der Nutzung der Website ist Dresden,
            sofern der Nutzer Kaufmann im Sinne des Handelsgesetzbuches ist. In jedem Fall gilt deutsches Recht
            unter Ausschluss des UN-Kaufrechts. Dass Informationen von der Website auch außerhalb der Bundesrepublik
            Deutschland heruntergeladen werden dürfen/können, obliegt nicht der Verantwortung von Anja Wippler.</p>
        </Content>
      </Container>
    </React.Fragment>
  )
}
