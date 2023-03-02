const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            title
            id
            slug
            uri
          }
          next {
            title
            slug
            uri
          }
          previous {
            title
            slug
            uri
          }
        }
        pageInfo {
          totalCount
        }
      }
      allWpNews(sort: {date: DESC}) {
        edges {
          node {
            title
            id
            slug
            uri
          }
          next {
            title
            slug
            uri
          }
          previous {
            title
            slug
            uri
          }
        }
        pageInfo {
          totalCount
        }
      }
      allWpCategory {
        edges {
          node {
            uri
            slug
            id
            name
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  blogresult.data.allWpPost.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `/blog${decodeURIComponent(node.uri)}`,
        component: path.resolve(`./src/templates/blog-post-template.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
  )

  const blogPostsPerPage = 9 //１ページに表示する記事の数
  const blogPosts = blogresult.data.allWpPost.pageInfo.totalCount //記事の総数
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) //記事一覧ページの総数

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-archive-template.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1, //現在のページ番号
        isFirst: i + 1 === 1, //最初のページ
        isLast: i + 1 === blogPages, //最後のページ
        pageCount: blogPages,
        totalPosts: blogPosts
      },
    })
  })

  blogresult.data.allWpCategory.edges.forEach(({ node }) => {
    const catPostsPerPage = 9
    const catPosts = node.posts.nodes.length
    const catPages = Math.ceil(catPosts / catPostsPerPage)

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `cat/${node.name}/`
            : `cat/${node.name}/${i + 1}/`,
        component: path.resolve(`./src/templates/cat-archive-template.js`),
        context: {
          catid: node.id,
          catname: node.name,
          catslug: node.slug,
          skip: catPostsPerPage * i,
          limit: catPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages,
          pageCount: catPages,
          totalPosts: catPosts
        },
      })
    })
  })

  blogresult.data.allWpNews.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `${decodeURIComponent(node.uri)}`,
        component: path.resolve(`./src/templates/news-post-template.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
  )

  const blogNewsPerPage = 9 //１ページに表示する記事の数
  const blogNews = blogresult.data.allWpNews.pageInfo.totalCount //記事の総数
  const newsPages = Math.ceil(blogNews / blogNewsPerPage) //記事一覧ページの総数

  Array.from({ length: newsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news/` : `/news/${i + 1}/`,
      component: path.resolve("./src/templates/news-archive-template.js"),
      context: {
        skip: blogNewsPerPage * i,
        limit: blogNewsPerPage,
        currentPage: i + 1, //現在のページ番号
        isFirst: i + 1 === 1, //最初のページ
        isLast: i + 1 === newsPages, //最後のページ
        // id: node.id,
      },
    })
  })
}