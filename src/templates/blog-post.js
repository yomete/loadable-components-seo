import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as renderers from './renderers'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: renderers.embeddedEntryRenderer,

        [BLOCKS.HEADING_1]: (node, children) => (
          <h1 className="heading1">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="heading2">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
          <h3 className="heading3">{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
          <h4 className="heading4">{children}</h4>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <img src={`https:${node.data.target.fields.file['en-US'].url}`} />
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="copy">{children}</p>
        ),
      },
      renderMark: {},
    }

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>

            <div>
              {documentToReactComponents(post.bodyRichText.json, options)}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      bodyRichText {
        json
      }
    }
  }
`
