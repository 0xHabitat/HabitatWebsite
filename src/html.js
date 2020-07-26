import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@deora_earth" />
        <meta name="twitter:title" content="Habitat" />
        <meta name="twitter:description" content="Governance Plattform for DEFI & DAO's" />
        <meta name="twitter:creator" content="@deora_earth" />
        <meta
          name="twitter:image"
          content="https://habitat.deora.earth/launch.png"
        />

        {/* Open Graph data */}
        <meta property="og:title" content="Habitat" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://habitat.deora.earth" />
        <meta
          property="og:image"
          content="https://habitat.deora.earth/launch.png"
        />
        <meta property="og:description" content="Governance Plattform for DEFI & DAO's" />
        <meta property="og:site_name" content="Habitat" />
        <meta property="fb:app_id" content="1887338054890731" />

        {/* Google Analitics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-147146482-5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'UA-147146482-5
              ');`,
          }}
        ></script>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
