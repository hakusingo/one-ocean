import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Wave from '../svg/wave'

const Emotion = () => {
  return (
    <section id="front-emotion" className="h-[90vh] lg:h-[95vh] relative">
      <div className='absolute top-0 left-0 right-0 rotate-180 z-20'>
        <Wave
          color="white"
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
      <StaticImage
        className="absolute top-0 left-0 right-0 bottom-0 block sm:hidden"
        src="../../images/emotion/front-emotion2.jpg"
        alt="ター滝"
        width={300}
        objectPosition="50% 90%"
        formats={["auto", "webp"]}
      />
      <StaticImage
        className="hidden absolute top-0 left-0 right-0 bottom-0 sm:block"
        src="../../images/emotion/front-emotion2.jpg"
        alt="ター滝"
        objectPosition="50% 90%"
        width={1000}
        formats={["auto", "webp"]}
      />
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
        <h3 className="text-[18px] font-bold lg:text-[24px] text-shadow">
          沖縄の魅力的な大自然を感じてください
        </h3>
        <p className="mt-12 text-center lg:text-[20px] text-shadow">
          沖縄は外に出ると、<br />
          すぐに大自然に出会えます。<br />
          <br />
          海はもちろん、山も川も<br />
          とても神秘的な自然があふれいます。<br />
          <br />
          日頃、体感することのできない<br />
          自然のやさしさ、あたたかさを<br />
          ぜひ体感してほしい。<br />
          <br />
          マングローブの林、リバートレッキング<br />
          本当に気持ちのいい体験ができます。<br />
          <br />
          ぜひ、一緒に沖縄の大自然の<br />
          を楽しみましょう。<br />
        </p>
      </div>
    </section>
  )
}

export default Emotion
