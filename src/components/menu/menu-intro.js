import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Wave from '../svg/wave'
import KayakIntroAccent from '../svg/kayak-intro-accent'

const MenuIntro = (props) => {
  let IntroH3 = props.IntroH3
  let color = props.color
  let IntroP = props.IntroP
  let IntroPic1 = props.IntroPic1
  let IntroPic2 = props.IntroPic2
  let objectPosition
  if(props.color === "pink") {
    objectPosition = "50% 76%"
  }
  return (
    <section id="menu-intro" className='relative'>
      <div className="section-container">
        <div className='pt-[2.4rem] lg:pt-[4rem]'>
          <h3 className={`text-${color} text-center md:text-[1.6rem] lg:text-[2rem] lg:whitespace-nowrap`}>
            <IntroH3/>
          </h3>
          <div className="lg:flex w-[90%] mx-auto items-center justify-around lg:mt-8">
            <GatsbyImage
              className='iso-target aspect-video hidden lg:block flex-1'
              image={IntroPic1}
              objectPosition={objectPosition}
              alt="写真"
            />
            <div className="flex-2 relative pt-8 w-[90%] mx-auto sm:w-[60%] md:py-8">
              <div className="opacity-50 absolute -bottom-10 md:bottom-0 right-0">
                <KayakIntroAccent/>
              </div>
              <IntroP/>
            </div>
            <GatsbyImage
              className='iso-target aspect-video hidden lg:block flex-1'
              image={IntroPic2}
              alt="写真"
            />
          </div>
        </div>
        <div className="flex pt-12 lg:hidden">
          <GatsbyImage
            className='iso-target fadein-opacity aspect-video w-1/2'
            image={IntroPic1}
            alt="写真"
          />
          <GatsbyImage
            className='iso-target fadein-opacity aspect-video w-1/2'
            image={IntroPic2}
            alt="写真"
          />
        </div>
      </div>
      <div className="my-[6rem] relative">
        <Wave
          color = "yellow"
        />
      </div>
    </section>
  )
}

export default MenuIntro
