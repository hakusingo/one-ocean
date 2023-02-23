import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

// import KayakContentsHeader from '../svg/kayak-contents-header'
import Wave from '../svg/wave'

const MenuContents = (props) => {

  let MenuContentsHeader = props.menuContentsHeader
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
      <div className="section-container">
        <div className="iso-target pt-16 max-w-[500px] mx-auto">
          <h2>
            <MenuContentsHeader
              alt="ツアー内容"
            />
          </h2>
        </div>
        <div className="">
          <div className="lg:flex max-w-[1300px] mx-auto">
            <div className="lg:flex gap-4 lg:pt-4">
              {
                props.menuContents.map((content, i) => (
                  <div
                    className={content.className}
                    key={i}
                  >
                    <div className="relative shadow-xl bg-white">
                      <div className="absolute z-10 text-[4rem] font-medium -top-[3.4rem] right-4 font-zenmaru">
                        <span className="text-yellow px-1">0</span>
                        <span className={`text-${color}`}>{i + 1}</span>
                      </div>
                      <GatsbyImage
                        image={contentPics[i]}
                        className="aspect-[3/2]"
                        alt={content.alt}
                      />
                      <div className="relative">
                        <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                          <div className="triangle"></div>
                          <h3 className={`bg-${color} text-white text-[20px] py-2 px-4 font-bold w-[100%] whitespace-pre-wrap`}>
                            <span>
                              {content.contentTitle}
                            </span>
                          </h3>
                        </div>
                        <p className="px-4 pt-4 pb-8 bg-white whitespace-pre-wrap">
                          {content.contentText}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
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
