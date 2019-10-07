import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby'

const HeadTemplate = ({ data }: SiteQuery) => {
  const { site } = data
  const { title, description, author, favicon } = site.siteMetadata
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="shortcut icon" type="image/png" href={withPrefix(favicon)} />
    </Helmet>
  )
}

type SiteQuery = {
  data: {
    site: {
      siteMetadata: {
        author: string
        description: string
        favicon: string
        title: string
      }
    }
  }
}

const Head = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            description
            favicon
            title
          }
        }
      }
    `}
    render={data => <HeadTemplate data={data} />}
  />
)

export default Head
