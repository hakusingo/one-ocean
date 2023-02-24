import React, { lazy } from 'react'
import { StaticImage } from "gatsby-plugin-image"
// import Mangrove from '../svg/mangrove'
import introMangrove from "../../images/svg/front/intro-mangrove.svg"
import kayakCouple from "../../images/svg/front/intro-couple.svg"
import kayakSingle from "../../images/svg/front/intro-single.svg"
import Wave from '../svg/wave'
// import KayakSingle from '../svg/kayak-single'
// import KayakCouple from '../svg/kayak-couple'
import introBird from "../../images/svg/front/intro-bird.svg"

const Intro = () => {
  return (
    <section id="front-intro" className="relative overflow-hidden">
      <div className="">
        {/* <KayakCouple
          className="bort1 absolute bottom-4 left-[3%] z-10 sm:left-[40%]"
          alt="カヤック2人のり"
        /> */}
        <img className="bort1 absolute bottom-4 left-[3%] z-10 sm:left-[40%]" src={kayakCouple} alt="カップル二人乗りカヤック" loading='lazy' />
        {/* <KayakSingle
          className="bort2 absolute bottom-4 left-[38%] sm:left-[54%] lg:left-[50%] z-0"
          alt="カヤック1人のり"
        /> */}
        <img className="bort2 absolute bottom-4 left-[38%] sm:left-[54%] lg:left-[50%] z-0" src={kayakSingle} alt="一人乗りカヤック" loading='lazy' />
        <img
          src={introMangrove}
          alt="マングローブ"
          onLoad={lazy}
          className="absolute -bottom-2 -right-[10%] sm:right-0 md:right-[10%] -z-10 h-[188px] w-auto md:h-[260px] md:w-[250px] lg:h-[300px] lg:w-[290px]"
        />
        {/* <Mangrove
          className="absolute -bottom-2 -right-[10%] sm:right-0 md:right-[10%] -z-10 h-[188px] w-auto md:h-[260px] md:w-[250px] lg:h-[300px] lg:w-[290px]"
        /> */}
      </div>
      <div className="">
        <Wave
          color="blue"
        />
      </div>
      <div className="pt-[4rem] pl-4 pr-4 pb-[12rem] sm:pb-[8rem] relative sm:flex justify-evenly max-w-[1380px] h-auto w-full mx-auto lg:gap-8">
        <div className="">
          <img
            className="katakata absolute right-[10%] z-10 sm:-z-10"
            src={introBird} alt="二匹の青い鳥"
            loading='lazy'
          />
          <div className="flex justify-center">
            <StaticImage
              layout='constrained'
              className="iso-target max-w-[400px] w-full h-auto"
              src="../../images/intro/intro-hero.jpg"
              alt="ター滝ツアーを楽しむ親子"
              width={700}
              formats={["auto", "webp"]}
            />
          </div>
        </div>
        <div className="logo-slim-target mt-8 relative sm:pb-20 md:w-[60%]">
          <div className="">
            <svg
              className="bort1 absolute right-0 top-4 h-[68px] w-[68px]"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.051 68.478"
            >
              <title>水玉模様 小</title>
              <g transform="translate(-343.949 -1453.476)"><g transform="translate(343.949 1453.476)" opacity="0.131"><path d="M1432.9,145.106c-5.94-25.034-28.186-32.835-41.742-29.411s-26.126,18.024-25.179,36.652c3.29,20.665,16.583,34.356,35.682,30.373C1419.137,178.122,1438.836,170.141,1432.9,145.106Z" transform="translate(-1365.925 -114.932)" fill="#5ce3e8" /><path d="M1446.6,223.486c16.217-4.622,23.267-21.737,17.528-38.736-6.719-14.516-25.683-11.607-31.865-10.68s-31.229,29.737-20.839,42.642C1419.772,227.086,1431.373,226.993,1446.6,223.486Z" transform="translate(-1401.448 -163.063)" fill="#2ea7e0" /><path d="M1444.923,160.208c-17.592-3.344-32.4,2.765-34.6,18.192-1.248,14.386,8.987,29.468,21.469,33.972s35.525-17.216,35.542-23S1460.209,164.734,1444.923,160.208Z" transform="translate(-1402.515 -151.598)" fill="#fff" opacity="0.75" /></g></g>
            </svg>
            <svg
              className="bort2 absolute bottom-[180px] w-[180px] h-[180px]"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.051 68.478"
            >
              <title>水玉模様 大</title>
              <g transform="translate(-343.949 -1453.476)"><g transform="translate(343.949 1453.476)" opacity="0.131"><path d="M1432.9,145.106c-5.94-25.034-28.186-32.835-41.742-29.411s-26.126,18.024-25.179,36.652c3.29,20.665,16.583,34.356,35.682,30.373C1419.137,178.122,1438.836,170.141,1432.9,145.106Z" transform="translate(-1365.925 -114.932)" fill="#5ce3e8" /><path d="M1446.6,223.486c16.217-4.622,23.267-21.737,17.528-38.736-6.719-14.516-25.683-11.607-31.865-10.68s-31.229,29.737-20.839,42.642C1419.772,227.086,1431.373,226.993,1446.6,223.486Z" transform="translate(-1401.448 -163.063)" fill="#2ea7e0" /><path d="M1444.923,160.208c-17.592-3.344-32.4,2.765-34.6,18.192-1.248,14.386,8.987,29.468,21.469,33.972s35.525-17.216,35.542-23S1460.209,164.734,1444.923,160.208Z" transform="translate(-1402.515 -151.598)" fill="#fff" opacity="0.75" /></g></g>
            </svg>
            <h3 className="iso-target fadein-opacity text-[24px] font-bold text-center lg:hidden">
              <span>
                最高の思い出と、最高の時間を!!
              </span>
            </h3>
            <h3 className="iso-target fadein-opacity fadein-opacity text-[32px] font-bold text-center pt-8 hidden lg:block lg:text-left">
              <span>
                いっしょに最高の思い出と、<br className='xl:hidden'/>最高の時間をつくろう!!
              </span>
            </h3>
            <div className="flex justify-center lg:justify-start">
              <p className="iso-target fadein-opacity mt-8 leading-[28px] w-[90%] max-w-[400px] lg:max-w-[600px] lg:text-[18px]">
                ワンオーシャンではお子様連れやカップル、
                親子３世代でのツアーなど、幅広くお客様のご要望に
                お答えするツアーをご用意しております。<br />
                <br />
                完全貸切となっていますので、プライベートでゆったり安心してご利用頂けます。<br />
                <br />
                ２０年以上の経験のある、自然大好きな沖縄出身のベテランガイドが同行します。<br />
                <br />
                さあ、ワンオーシャンで沖縄を心の底から満喫しましょう！！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
