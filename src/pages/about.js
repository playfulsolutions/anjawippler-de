import React from "react"
import Columns from "../components/Columns"
import Column from "../components/Column"
import Content from "../components/Content"
import Container from "../components/Container"

export default () => {
  return (
    <Container className="has-mt-5-desktop">
      <Columns>
        <Column size={"is-two-thirds"} className="has-mr-5-desktop">
          <Content>
            <h1>Die Designerin</h1>
            <p>
              Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Aenean
              lacinia
              bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper
              nulla non metus auctor fringilla.
            </p>

            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis
              risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
              bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

            <p>Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh,
              ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Vestibulum id ligula porta felis euismod semper.</p>

            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna
              mollis
              euismod. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </Content>
        </Column>
        <Column>
          <h1 className={"title"}>Kontakt</h1>
        </Column>
      </Columns>
    </Container>
  )
}
