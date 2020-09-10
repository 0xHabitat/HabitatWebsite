import React from "react"
import { Div, Text, Container, Anchor, Button, Icon, Row, Col, template, Image, box, stroke } from "atomize"
import demoscreenshot from "../../images/demoscreenshot.png"

const list = [
  {
    title: "97%",
    content: "Deploy on Layer2, escape the gas storms",
  },
  {
    title: "Ethereum",
    content: "Ethereum protocols as a public good.",
  },
  {
    title: "</>",
    content: "Open-source with regular updates.",
  },
]

const GettingStartedBanner = () => {
  return (
    <Div>      
    <Container>
    <Div
      border={{ t: "1px solid" }}
      borderColor="gray300"
      p={{ y: "4rem" }}
    >
      <Row>
        <Col size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
          <Div p={{ y: "2rem" }}>
            <Row>
              {list.map((item, index) => (
                <Col
                  key={index}
                  size={{ xs: 6, sm: 6, lg: 4 }}
                  d="flex"
                  align="center"
                  flexDir="column"
                >
                  <Div
                    d="flex"
                    maxW="12rem"
                    flexDir="column"
                    align="center"
                    m={{ b: "2rem" }}
                  >
                    <Text
                      textSize="display1"
                      textWeight="700"
                      textAlign="center"
                      fontFamily="secondary"
                      m={{ b: "1rem" }}
                    >
                      {item.title}
                    </Text>
                    {/* <Image src={item.image} w="4.5rem" m={{ b: "1rem" }} /> */}
                    <Text
                      textAlign="center"
                      textSize="subheader"
                      textColor="medium"
                    >
                      {item.content}
                    </Text>
                  </Div>
                </Col>
              ))}
            </Row>
          </Div>
        </Col>
      </Row>
    </Div>
    <Container>
    <Div
      p={{ y: "3rem", x: { xs: "0", md: "4rem" } }}
      bg="gray200"
      style={{ borderRadius: "40px" }}
    >
      <Row align="center">
        <Col size={{ xs: 12, md: 6, lg: 5 }}>
          <Div
            p={{
              x: { md: "1rem", lg: "1.5rem" },
              b: { xs: "3rem", md: "0" },
            }}
          >
            <Div d="flex" flexDir="column">
              <Text
                tag="h2"
                maxW="14rem"
                fontFamily="secondary"
                textSize="display1"
                textWeight="500"
                m={{ b: "1rem" }}
              >
                Disover Habitat
              </Text>
              <Text
                textSize="subheader"
                maxW="19rem"
                textColor="medium"
                m={{ b: "2rem" }}
              >
                You can easily test our L2 voting solution. And read more about our progress
              </Text>
            </Div>
            <Div d="flex" w="100%">
              <Anchor
                href="https://habitatmvp.netlify.app/"
                target="_blank">
                <Button
                  h="3rem"
                  w="10rem"
                  bg="brand"
                  hoverBg="brand4"
                  rounded="circle"
                  m={{ r: "1rem" }}
                >
                  Test the Demo
                </Button>
              </Anchor>
              <Anchor
                href="https://habitat.substack.com/"
                target="_blank"
              >
                <Button
                  h="3rem"
                  w="8rem"
                  bg="white"
                  border="1px solid"
                  borderColor="gray300"
                  hoverBorderColor="gray400"
                  rounded="circle"
                  textColor="black"
                >
                  Subscribe
                </Button>
              </Anchor>
            </Div>
          </Div>
        </Col>
        <Col size={{ xs: 12, md: 6, lg: 7 }}>
          <Div
            pos="relative"
            bgImg={demoscreenshot}
            bgSize="100%"
            bgPos="center"
            p={{ b: "70%" }}
            bg="white"
            h="100%"
            style={{ borderRadius: "10px" }}
          >
          </Div>
        </Col>
      </Row>
    </Div>
  </Container>
  </Container>
      <Div bg={{ xs: "gray200", md: "white" }}>
        <Container>
          <Div
            p={{ y: "3.5rem", x: { xs: "0", md: "4rem" } }}
            bg="gray200"
            style={{ borderRadius: "56px" }}
            d="flex"
            flexDir={{ xs: "column", lg: "row" }}
            justify="space-between"
          >
            <Div>
              <Text textSize="heading" textWeight="600" m={{ b: "0.5rem" }}>
              This is a call to action <span role="img" aria-label="rocket emoji">🚀</span>
              </Text>
              <Text
                textSize="subheader"
                textColor="medium"
                m={{ b: { xs: "3rem", lg: "0" } }}
              >
                What are you waiting for? Start to offer the best in class governance for the decentralized world.
              </Text>
            </Div>
            <Div d="flex" align="flex-end">
              <Anchor
                href="https://calendly.com/deora_earth"
                target="_blank"
              >
                <Button
                  rounded="circle"
                  shadow="1"
                  hoverShadow="4"
                  w="12rem"
                  h="3rem"
                  p={{ x: "1.5rem" }}
                  justify="space-between"
                  suffix={<Icon name="LongRight" size="20px" color="white" />}
                >
                  Get in touch!
                </Button>
              </Anchor>
            </Div>
          </Div>
        </Container>
      </Div> 
    </Div>
  )
}

export default GettingStartedBanner
