import React from "react"
import { Link } from "gatsby"
import Iframe from 'react-iframe'
import { Button, Container, Text, Div, Image, Anchor,  } from "atomize"
import "./gradient.css"
import wave from "../../images/wave.svg"
import logo from "../../images/logo-white.svg"

// import Notification from './uicomponents/Notification'
class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Iframe url="https://habitatgradient.netlify.app/"
              position="absolute"
              width="100%"
              height="600rem"
              className="gradient"
              styles={{top: 0}}
              zIndex="2000"
              allowFullScreen
        />
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
                  onClick={() => void(window.open('https://form.jotform.com/202392432227045',
                  'blank',
                  'scrollbars=yes',
                  'toolbar=no',)
                  )}
                >
                  Demo
                </Button>
                <AlignCenterModal
                  isOpen={showModal}
                  onClose={() => this.setState({ showModal: false })}
                />
            </Div>
            <Image
                src={wave}
                alt="Habitat"
                w={{xs: '180%', sm: '200%', md: '170%', lg: '130%'}}
                opacity={{xl: '0%'}}
                zIndex="200"
              />
          </Container>
        </Div>
      </>
    )
  }
}

export default HeroSection
