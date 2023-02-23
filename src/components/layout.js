  /**
   * Layout component that queries for data
   * with Gatsby's useStaticQuery component
   *
   * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
   */

  import * as React from "react"
  import { useStaticQuery, graphql } from "gatsby"

  import Header from "./header"
  import Footer from "./footer"
  import "../styles/base.scss"

  import "@fontsource/noto-sans-jp/400.css"
  import "@fontsource/noto-sans-jp/700.css"
  // import "@fontsource/noto-sans-jp/900.css"
  // import "@fontsource/zen-maru-gothic/400.css"
  // import "@fontsource/zen-maru-gothic/700.css"

  const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main className="w-full md:w-[calc(100vw-120px)] md:mx-auto relative pt-[60px] md:pt-[80px] overflow-x-hidden">
            {children}
          </main>
        <Footer />
      </>
    )
  }

  export default Layout
