import React from "react"
import { Div, Image, Container, Row, Col, Anchor } from "atomize"
import Logo1 from "../../images/logoleiste.png"
import Logo2 from "../../images/logohtsl.png"

const SupportBlock = () => {
  return (
    <Div>
      <Container>
        <Div
          border={{ t: "1px solid" }}
          borderColor="gray300"
          p={{ y: "4rem" }}
        >
          <Image src={Logo1} w="60rem" m={{ b: "1rem" }} />
          <Image src={Logo2} w="8rem" m={{ t: "3rem", l: "2rem" }} />
        </Div>
      </Container>
    </Div>
  )
}

export default SupportBlock
