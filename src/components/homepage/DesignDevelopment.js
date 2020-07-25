import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Anchor, Icon, Image } from "atomize"

import logoSketch from "../../images/logo-sketch.svg"
import logoReact from "../../images/logo-react.svg"

const DesignDevelopment = () => {
  return (
    <Div tag="section">
      <Container>
        <Div p={{ t: "7.5rem", b: "12rem" }}>
          <Div d="flex" flexDir="column" align="center">
            <Text
              tag="h2"
              fontFamily="secondary"
              textSize="display1"
              textAlign="center"
              textWeight="500"
              maxW="42rem"
              m={{ b: "4rem" }}
            >
              We have the solution for all{" "}
              <span style={{ color: "#FFCB57" }}>Project stages</span>.
            </Text>
          </Div>
          <Div>
            <Row>
              <Col size={{ xs: 12, md: 6, lg: 4 }} offset={{ xs: 0, lg: 2 }}>
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "0" } }}
                >
                  <Text
                    textSize="36px"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    🌱
                  </Text>
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                  Use existing Gov Token
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    You already have a token?.
                  </Text>
                  <Anchor
                    d="flex"
                    align="center"
                    href="http://www.atomizedesign.com/"
                    target="_blank"
                  >
                    Start now!
                    <Icon
                      name="LongRight"
                      size="16px"
                      m={{ l: "1rem" }}
                      color="brand"
                    />
                  </Anchor>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 4 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="xl"
                  p="2rem"
                >
                  <Text
                    textSize="36px"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    🧑‍💻
                  </Text>
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                  Issue new Gov Token
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    Yes, we can help you with that!
                  </Text>
                  <Link to="/docs/react/intro">
                    <Text
                      textWeight="500"
                      color="brand"
                      hoverColor="brand"
                      d="flex"
                      align="center"
                    >
                      Start now!
                      <Icon
                        name="LongRight"
                        size="16px"
                        m={{ l: "1rem" }}
                        color="brand"
                      />
                    </Text>
                  </Link>
                </Div>
              </Col>
            </Row>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default DesignDevelopment
