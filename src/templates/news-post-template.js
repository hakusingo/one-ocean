import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Wave from '../components/svg/wave'
import FrontNewsHeader from '../components/svg/front-news-header'
import { BsCaretRightFill } from 'react-icons/bs'
import { BsCaretLeftFill } from 'react-icons/bs'
import "./wp-block.css"
import "./wp-style.css"
import "./template.scss"

const NewsPostTemplate = ({ data, pageContext }) => {
  const title = data.wpNews.title
  const date = data.wpNews.dateJP

  let eyeCatch
  if(data.wpNews.featuredImage) {
    eyeCatch = data.wpNews.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  }
  
  let imgDesc
  if(data.wpNews.featuredImage) {
    if(data.wpNews.featuredImage.node.description) {
      imgDesc = data.wpNews.featuredImage.node.description
    }
  } 
  if(imgDesc === undefined) {
    imgDesc = `${title}のアイキャッチ`
  }

  return (
    <Layout>
      <main className='relative md:border-b-4 border-main-blue'>
        <div className="lg:hidden">
          <Wave
            color = "main-blue"
          />
        </div>
        <div className='pl-4 pr-4 pt-16 pb-24 max-w-[1000px] mx-auto'>
          <div className="max-w-[500px] mx-auto">
            <h2 className="">
              <FrontNewsHeader
                alt="お知らせ News"
              />
            </h2>
          </div>
          <article className='w-4/5 mx-auto'>
            <h2 dangerouslySetInnerHTML={{ __html: title }} className='text-[24px] font-black text-main-blue text-center my-8' />
            <p dangerouslySetInnerHTML={{ __html: date }} className="text-right" />
              {
                eyeCatch && (
                  <GatsbyImage
                    className='h-auto aspect-[4/3] mx-auto my-8'
                    image={eyeCatch}
                    alt={imgDesc}
                    quality={90}
                  />
                )
              }
            <div id="wp-content" dangerouslySetInnerHTML={{ __html: data.wpNews.content }} className="my-8 lg:w-4/5 lg:mx-auto"  />
          </article>
          <div className="max-w-[1000px] mx-auto mt-16">
            <ul className='page-navi flex justify-between w-4/5 mx-auto'>
              {pageContext.next && (
                <li className=''>
                  <Link
                    className='flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]'
                    to={`${pageContext.next.uri}`} 
                    rel="prev"
                  >
                    <BsCaretLeftFill
                      size="1rem"
                    />
                    <span>
                      {/* {`< ${pageContext.next.title}`} */}
                      前の記事
                    </span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <li className="ml-auto">
                  <Link 
                    className='flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]'
                    to={`${pageContext.previous.uri}`} 
                    rel="next"
                  >
                    <span>
                      次の記事
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

export default NewsPostTemplate

export const Head = ({data}) => <Seo title={data.wpNews.title} />

export const query = graphql`
  query($id: String!) {
    wpNews(id: { eq: $id }) {
      title
      dateJP: date(formatString: "YYYY年MM月DD日")
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          description
        }
      }
      content
    }
  }
`
