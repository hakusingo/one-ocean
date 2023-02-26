import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Wave from '../svg/wave'

const MenuEmotion = (props) => {

  let MenuEmotionP = props.menuEmotionP
  let emotion = props.emotion
  let position = props.objectPosition

  return (
    <section className="h-[90vh] lg:h-[95vh] relative">
      <div className='absolute top-0 left-0 right-0 rotate-180 z-20'>
        <Wave
          color="gray"
        />
      </div>
      <div className="hidden md:block">
        <Wave
          color="white"
        />
      </div>
      <div className="md:hidden -mb-[2px]">
        <Wave
          color="main-blue"
        />
      </div>
      <GatsbyImage
        className="absolute top-0 left-0 right-0 bottom-0"
        image={emotion}
        alt="ワンオーシャンならこんな雰囲気を味わえます"
        objectPosition={position}
      />
      <div id="menu-emotion" className="relative z-10 text-white flex flex-col justify-center items-center h-full">
        <h3 className="text-[18px] font-semibold lg:text-[24px]">
          {props.menuEmotionH3}
        </h3>
        <MenuEmotionP/>
      </div>
    </section>
  )
}

export default MenuEmotion
