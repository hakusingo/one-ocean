import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

import Wave from '../components/svg/wave'
import BlogHeader from '../components/svg/blog-header'
import FooterLogo from '../components/svg/footer-logo'
import "./wp-block.css"
import "./wp-style.css"
import Pagination from '../components/pagenation'

const BlogArchiveTemplate = ({ data, pageContext }) => {
  let blogData = data.allWpPost.edges

  return (
    <Layout>
      <main className='relative md:border-b-4 border-main-blue'>
        <div className="lg:hidden">
          <Wave
            color = "main-blue"
          />
        </div>
        <div className="pl-4 pr-4 pt-16 pb-20 lg:pb-8">
          <div className="max-w-[500px] mx-auto">
            <h2 className="">
              <BlogHeader   
                alt="ブログ"
              />
            </h2>
          </div>

          <div className="mx-auto xl:grid gap-8 grid-cols-12 my-8 max-w-[1300px]">
            <div className="hidden xl:block col-span-3">
              <div className="flex justify-center">
                <h3
                  className='text-white bg-main-blue font-bold inline-block px-4 py-1 rounded-xl text-center'
                >
                  ブログカテゴリー</h3>
              </div>
              <ul className='text-center mt-4'>
                {
                  data.allWpCategory.edges.map((cat, i) => {
                    return (
                      <li key={i} className="my-2">
                        <Link
                          to={`/cat/${cat.node.name}`}
                        >
                          {`${cat.node.name} (${cat.node.count})`}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="lg:grid grid-cols-3 gap-4 xl:col-span-9">
              {
                blogData.map((data, i) => {
                  return (
                    <article key={i} className="border-b-4 border-gray-400 border-dotted w-[80%] mx-auto py-8 lg:h-[340px]">
                      <Link
                        key={i}
                        to={`/blog${data.node.uri}`}
                        className="block"
                      >
                        <h3 className="line-clamp-2 text-center text-[18px] font-bold">{ data.node.title }</h3>
                        <time dateTime={data.node.date} className="text-[14px] font-bold text-main-blue pt-4 block text-right" >{data.node.jpDate}</time>
                        {
                          data.node.featuredImage ? (
                            <GatsbyImage
                              className='w-full h-auto aspect-video rounded-xl mt-4 border-4 border-main-blue'
                              image={data.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                              alt="ブログ写真"
                              quality={90}
                            />
                          ) : (
                              <div className='grid place-items-center bg-main-blue h-auto w-full aspect-video rounded-xl mt-4 border-4 border-main-blue'>
                                <FooterLogo />
                              </div>
                          )
                        }
                      </Link>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="flex justify-center">
            <Pagination totalCount={ data.allWpPost.totalCount } pageContext={ pageContext } />
          </div>
          <div className='mt-12 xl:hidden'>
            <div className="flex justify-center">
              <h3
                className='text-white bg-main-blue font-bold inline-block px-4 py-1 rounded-xl text-center'
              >
                ブログカテゴリー</h3>
            </div>
            <ul className='text-center mt-4'>
              {
                data.allWpCategory.edges.map((cat, i) => {
                  return (
                    <li key={i} className="my-2">
                      <Link
                        to={`/cat/${cat.node.name}`}
                      >
                        {`${cat.node.name} (${cat.node.count})`}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogArchiveTemplate

export const Head = ({ data, pageContext }) => <Seo title={`ブログ一覧ページ${pageContext.currentPage}`} description={`ブログ一覧ページの${pageContext.currentPage}ページ目です。`} />

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(
      sort: {date: DESC}
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          title
          id
          uri
          jpDate: date(formatString: "YYYY年MM月DD日")
          date
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 4000)
                }
              }
              description
            }
          }
        }
      }
    }
    allWpCategory(sort: {count: DESC}) {
      edges {
        node {
          id
          slug
          uri
          name
          count
        }
      }
    }
  }
`
