import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import FrontNewsHeader from '../components/svg/front-news-header'
import Wave from '../components/svg/wave'
import { BsCaretRightFill } from 'react-icons/bs'
import { BsCaretLeftFill } from 'react-icons/bs'
import FooterLogo from '../components/svg/footer-logo'
import "./wp-block.css"
import "./wp-style.css"
import "./template.scss"


const NewsArchiveTemplate = ({ data, path, pageContext }) => {
  const newsData = data.allWpNews.edges

  return (
    <Layout>
      <main className='relative md:border-b-4 border-main-blue'>
        <div className="lg:hidden">
          <Wave
            color = "main-blue"
          />
        </div>
        <div className="pl-4 pr-4 pt-16 pb-20">
          <div className="max-w-[500px] mx-auto">
            <h2 className="">
              <FrontNewsHeader   
                alt="お知らせ News"
              />
            </h2>
          </div>
          <div className="mx-auto lg:grid gap-8 grid-cols-3 my-8 max-w-[1200px]">
            {
              newsData.map((data, i) => {
                return (
                  <article key={i} className="border-b-4 border-gray-400 border-dotted w-[80%] mx-auto py-8 lg:h-[340px]">
                    <Link
                      key={i}
                      to={data.node.uri}
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
          <div className='w-4/5 mx-auto'>
            <ul className="page-navi flex justify-between">
              {!pageContext.isFirst && (
                <li className=''>
                  <Link
                    className="flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]"
                    to={
                      pageContext.currentPage === 2
                        ? `/news/`
                        : `/news/${pageContext.currentPage - 1}/`
                    }
                    rel="prev"
                  >
                    <BsCaretLeftFill
                      size="1rem"
                    />
                    <span>前のページ</span>
                  </Link>
                </li>
              )}
              {!pageContext.isLast && (
                <li className='ml-auto'>
                  <Link
                    className="flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]"
                    to={`${pageContext.currentPage + 1}/`}
                    rel="next"
                  >
                    <span>
                      次のページ
                    </span>
                    <BsCaretRightFill
                      size="1rem"
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NewsArchiveTemplate

export const Head = ({pageContext}) => <Seo title={`ニュース一覧ページ${pageContext}`} description={`ニュース一覧ページ${pageContext}`} />

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpNews(
      sort: {date: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          content
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
  }
`
