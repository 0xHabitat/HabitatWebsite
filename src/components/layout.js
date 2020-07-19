import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./font.css"
// import "./wow.css"

import { StyleReset, ThemeProvider, Div } from "atomize"

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace",
  },
  grid: {
    containerMaxWidth: {
      xl: "1184px",
    },
  },
  textSize: {
    size: {
      display3: "48px",
    },
    height: {
      display3: "56px",
    },
  },
  colors: {
    brand: "#635BFF",
    brandLight: "#9B97F3",
    brand2: "#FFCB57",
    brand2Light: "#F3D694",
    brand3: "#1CDB9E",
    brand3Light: "#83E0C3",
    brand4: "#3BDEFF",
    brand4Light: "#92E2F2",
  },
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <StyleReset />
            <Div tag="main" overflow="hidden">
              {children}
            </Div>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
