import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

import Wave from '../components/svg/wave'
import FooterLogo from '../components/svg/footer-logo'
import CategoryHeader from '../components/svg/category-header'
import PagenationCat from '../components/pagenation-cat'

const CatArchiveTemplate = ({ data, pageContext }) => {

  let catName = pageContext.catname

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
              <CategoryHeader
                alt="ブログ"
              />
            </h2>
          </div>
          <div className="flex justify-center">
            <h2 className='font-zenmaru pt-8 text-[24px] font-bold border-b-4 mb-8 border-main-blue text-main-blue text-center inline-block'>{catName}</h2>
          </div>

          
          <div className="mx-auto xl:grid gap-8 grid-cols-12 mb-8 max-w-[1300px]">
            <div className="hidden xl:block col-span-3">
              <div className="flex justify-center my-8 text-main-blue font-bold text-[18px]">
                <Link
                  to="/blog/"
                  className=''
                >
                  ブログ一覧ページへ
                </Link>
              </div>
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
                          activeClassName="text-main-blue font-bold"
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
              {data.allWpPost.edges.map(({ node }) => (
                <article className="border-b-4 border-gray-400 border-dotted w-[80%] mx-auto py-8 lg:h-[340px]" key={node.id}>
                  <Link
                    to={`/blog${node.uri}`}
                    alt="/"
                    className="block"
                  >
                    <h3 className="line-clamp-2 text-center text-[18px] font-bold">{ node.title }</h3>
                    <time dateTime={ node.date } className="text-[14px] font-bold text-main-blue pt-4 block text-right" >{ node.jpDate }</time>
                    {
                      node.featuredImage ? (
                        <GatsbyImage
                          className='w-full h-auto aspect-video rounded-xl mt-4 border-4 border-main-blue'
                          image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                          alt={node.featuredImage.node.description ? node.featuredImage.node.description : "イメージ写真"}
                        />
                      ) : (
                        <div className='grid place-items-center bg-main-blue h-auto w-full aspect-video rounded-xl mt-4 border-4 border-main-blue'>
                          <FooterLogo />
                        </div>
                      )
                    }
                  </Link>
                </article>
              ))}
            </div>
            
          </div>

          <div className="flex justify-center">
            <PagenationCat totalCount={ data.allWpPost.totalCount } pageContext={ pageContext } />
          </div>

          <div className='mt-12 xl:hidden'>
            <div className="flex justify-center my-8 text-main-blue font-bold text-[18px]">
              <Link
                to={"/blog"}
                className=''
              >
                ブログ一覧ページへ
              </Link>
            </div>
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
                    <li key={i} 
                      className="my-2"
                    >
                      <Link
                        to={`/cat/${cat.node.name}`}
                        activeClassName="text-main-blue font-bold"
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

export default CatArchiveTemplate

export const Head = ({pageContext}) => <Seo title={`カテゴリ一覧ページ${pageContext.currentPage}`} description={`カテゴリ一覧ページ${pageContext.currentPage}ページめです。`} />

export const query = graphql`
  query($skip: Int!, $limit: Int! $catid: String!) {
    allWpPost(
      filter: {categories: {nodes: {elemMatch: {id: {eq: $catid}}}}}
      sort: {date: DESC}
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          title
          jpDate: date(formatString: "YYYY年MM月DD日")
          date
          id
          uri
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 500)
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
          count
          id
          slug
          uri
          name
        }
      }
    }
  }
`