const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      query {
        allContentfulBlogPost(filter: { slug: { ne: "dummy" } }) {
          edges {
            node {
              title
              slug
              createdAt
              published_at
              updatedAt
              body {
                raw
                references {
                  ... on ContentfulAsset {
                    contentful_id
                    __typename
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        allContentfulWorks(filter: { slug: { ne: "dummy" } }) {
          edges {
            node {
              title
              slug
              description
              createdAt
              publishedAt
              updatedAt
              url
              isBook
              eyecatch {
                file {
                  url
                }
              }
              logo {
                file {
                  url
                }
              }
              body {
                raw
                references {
                  ... on ContentfulAsset {
                    contentful_id
                    __typename
                    file {
                      url
                    }
                    title
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }
  // トップページ
  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.tsx`),
    context: {
      blogs: result.data.allContentfulBlogPost.edges,
      works: result.data.allContentfulWorks.edges,
    },
  })

  // Blog一覧ページ
  createPage({
    path: `/blog`,
    component: path.resolve(`./src/templates/blog.tsx`),
    context: {
      posts: result.data.allContentfulBlogPost.edges,
    },
  })

  // Blog詳細ページ
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        post: node,
      },
    })
  })

  // Works一覧ページ
  createPage({
    path: `/works`,
    component: path.resolve(`./src/templates/works.tsx`),
    context: {
      posts: result.data.allContentfulWorks.edges,
    },
  })

  // Works詳細ページ
  result.data.allContentfulWorks.edges.forEach(({ node }) => {
    createPage({
      path: `/works/${node.slug}`,
      component: path.resolve(`./src/templates/work-post.tsx`),
      context: {
        post: node,
      },
    })
  })

  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
  }
}
