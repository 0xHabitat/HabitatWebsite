import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"

const list = [
  {
    icon: "🗳️",
    heading: "Cheap Voting",
    subheading: "Cast a vote on layer2 save up to 97%",
  },
  {
    icon: "🚀",
    heading: "Fast Transactions",
    subheading: "Instant execution with seamless UX",
  },

  {
    icon: "📐",
    heading: "Flexible Design",
    subheading: "Governance with any ERC-20 token.",
  },

  {
    icon: "✨",
    heading: "People First",
    subheading: "Build trust and collect valuable feedback.",
  },
]

class Intoducing extends React.Component {
  render() {
    return (
      <Div tag="section" id="features" p={{ t: "8rem" }}>
        <Container>
          <Tag
            bg="black"
            textColor="white"
            h="2rem"
            p={{ x: "1rem" }}
            rounded="circle"
            m={{ b: "2rem" }}
          >
            Key features
          </Tag>
          <Text
            textSize="display1"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            Habitat - voting for people and not for whales 🐳
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="30rem"
            m={{ b: "3rem" }}
          >
            Kickstart your goverance processes and distribute power among your users.Habitat is your home on layer 2. 
          </Text>
          <Div
            p={{ b: "6rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              {list.map(item => (
                <Col size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                    <Div
                      border="1px solid"
                      borderColor="gray200"
                      h="100%"
                      d="flex"
                      flexDir="column"
                      p="2rem"
                      shadow="3"
                      rounded="xl"
                    >
                      <Div flexGrow="1">
                        <Text
                            textSize="32px"
                            textWeight="500"
                            m={{ b: "1rem" }}
                          >
                          {item.icon}
                        </Text>
                        <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "1rem" }}
                        >
                          {item.heading}
                        </Text>
                        <Text
                          textSize="subheader"
                          textColor="medium"
                          m={{ b: "2rem" }}
                        >
                          {item.subheading}
                        </Text>
                      </Div>
                    </Div>
                  </Div>
                </Col>
              ))}
            </Row>
          </Div>
        </Container>
      </Div>
    )
  }
}

export default Intoducing
