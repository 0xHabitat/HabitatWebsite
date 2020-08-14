import React from "react"
import { Link } from "gatsby"
import Iframe from 'react-iframe'
import { Button, Container, Text, Div, Image, Anchor } from "atomize"
import "./gradient.css"
import wave from "../../images/wave.svg"
import logo from "../../images/logo-white.svg"


import FollowCard from "./uicomponents/FollowCard"
import UserEdit from "./uicomponents/UserEdit"
import Buttons from "./uicomponents/Buttons"
import CardComponent from "./uicomponents/CardComponent"
import LoginForm from "./uicomponents/LoginForm"

// import Notification from './uicomponents/Notification'
class HeroSection extends React.Component {
  render() {
    return (
      <>
      <Iframe url="https://habitatgradient.netlify.app/"
            position="absolute"
            width="100%"
            height="100%"
            className="gradient"
            styles={{top: 0}}
            allowFullScreen/>
        <Div tag="section" p={{ t: { xs: "6rem", md: "8rem" } }}>
          <Container d="flex" flexDir="column" align="center" background>
          <Image
                src={logo}
                alt="Habitat"
                h="80px"
                w="auto"
                zIndex="400"
              />
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              textColor="white"
              m={{ b: "1rem" }}
              zIndex="400"
            >
              Layer 2 Governance Launchpad
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="42rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="secondary"
              textColor="white"
              m={{ b: "2.5rem" }}
              zIndex="400"
            >
              We enable fast and cheap governance for your DAO or DEFI project.
            </Text>
            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
              zIndex="400"
            >
              <Link to="https://calendly.com/deora_earth/intro?month=2020-07" target="_blank">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="white"
                  hoverBg="brand"
                  textColor="brand"
                  hoverTextColor="white"
                  rounded="lg"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  Get in touch
                </Button>
              </Link>
              <Anchor
                href="https://gitcoin.co/grants/283/deora-enabling-the-next-step-in-human-coordinatio"
                target="_blank"
              >
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray400"
                  hoverBorderColor="transparent"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  textColor="white"
                  hoverTextColor="brand"
                >
                   Support
                </Button>
              </Anchor>
            </Div>
            <Image
                src={wave}
                alt="Habitat"
                w="180%"
                zIndex="200"
              />
          </Container>
        </Div>
        {/*
        <Div
          tag="section"
          w="100vw"
          p={{ t: { xs: "3rem", md: "6rem" } }}
          overflow="hidden"
        >
          <Container>
            <Div
              d="flex"
              justify="center"
              p={{ b: "10.5rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray300"
            >
              <Div
                minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                d="flex"
                align="center"
                flexDir="column"
                h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                pos="relative"
              >
                <Buttons />

                <FollowCard />

                <CardComponent />

                <Notification />

                <LoginForm />

                <UserEdit />
              </Div>
            </Div>
          </Container>
        </Div>
        */}
      </>
    )
  }
}

export default HeroSection
