import React from "react"
import { Div, Text, Container, Anchor, Icon } from "atomize"

const mediaLinks = [
  {
    icon: "Github",
    link: "https://github.com/deora-earth",
  },
  {
    icon: "Twitter",
    link: "https://twitter.com/deora_earth",
  },
  {
    icon: "Linkedin",
    link: "https://www.linkedin.com/company/deora/",
  },
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "12rem", md: "8rem" }, b: { xs: "4rem", md: "5rem" } }}
      pos="relative"
    >
      <Container>
        <Div d="flex" align="center" justify="center" flexDir="column">
          <Text
            tag="h2"
            textWeight="600"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Habitat - Governance for DEFI & DAO's by Deora
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blank">
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="brand3"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Footer
