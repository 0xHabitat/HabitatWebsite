import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Button, Icon, Image } from "atomize"

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
              Web3 solution for{" "}
              <span style={{ color: "#FFCB57" }}>decentralized governance</span>.
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
                    Upgrade your token with strong governance value.
                  </Text>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 4 }} pos="relative" opacity="40%">
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
                    Start your own token and bootstrap your community.
                  </Text>
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
