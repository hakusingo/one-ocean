import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

import Wave from '../svg/wave'
import kayakContentsHeader from "../../images/svg/trekking/trekking-contents-header.svg"
import trekkingContentsHeader from "../../images/svg/kayak/kayak-contents-header.svg"
import yuiContentsHeader from "../../images/svg/yui/yui-contents-header.svg"
import muiContentsHeader from "../../images/svg/mui/mui-contents-header.svg"

const MenuContents = (props) => {

  let ContentsPic1 = props.ContentsPic1
  let ContentsPic2 = props.ContentsPic2
  let ContentsPic3 = props.ContentsPic3
  let color = props.color
  let contentPics = []
  contentPics.push(ContentsPic1)
  contentPics.push(ContentsPic2)
  contentPics.push(ContentsPic3)

  return (
    <section id="feature" className="bg-light-yellow">
      <div className="pr-8 pl-8">
        <div className="iso-target pt-16 max-w-[500px] mx-auto">
          <h2>
            {
              color === "main-blue" && <img src={kayakContentsHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "main-green" && <img src={trekkingContentsHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "pink" && <img src={yuiContentsHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "navy" && <img src={muiContentsHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {/* <img src={kayakContentsHeader} className="w-full h-[200px]" alt="ツアー内容" /> */}
          </h2>
        </div>
        <div className="max-w-[1300px] w-full mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          {
            props.menuContents.map((content, i) => (
              <div
                className="feature py-8 xl:py-4 iso-target col-span-4 h-auto w-full relative max-w-[400px]  mx-auto"
                key={i}
              >
                <div className="relative shadow-xl bg-white rounded-b-[14px]">
                  <div className="front-feature-number absolute z-10 text-[4rem] -top-[3.4rem] right-4">
                    <span className="text-yellow px-1">0</span>
                    <span className={`text-${color}`}>{i + 1}</span>
                  </div>
                  <GatsbyImage
                    image={contentPics[i]}
                    className="aspect-[3/2] w-full h-auto object-cover rounded-t-[14px]"
                    alt={content.alt}
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className={`bg-${color} shadow text-white text-[20px] lg:text-[1rem] xl:text-[20px] py-2 px-4 font-bold w-[100%] whitespace-pre`}>
                        <span>
                          {content.contentTitle}
                        </span>
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8 leading-[1.6rem] rounded-b-[14px] bg-white">
                      {content.contentText}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-[6rem] relative">
        <Wave
          color = "white"
        />
      </div>
    </section>
  )
}

export default MenuContents
