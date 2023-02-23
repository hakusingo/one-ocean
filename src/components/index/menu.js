import React from 'react'
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import TourMenuHeader from "../../components/svg/tour-menu-header"
import { BsCaretRightFill } from "react-icons/bs"

import Wave from '../svg/wave'

const menuContents = [
  {
    subTitle: "１歳からでも参加できる!!",
    title: "マングローブカヤック",
    desc: `神秘的で多様な沖縄の大自然。
そのなかでもマングローブは、植物や動物の宝庫です。
静かなマングローブのトンネルをぬける景色はとても幻想的。
ワンオーシャンイチオシの大人気アドベンチャーツアーです。`,
    color: "main-green",
    mapPng: "menu-kayak-map",
    link: "/trekking/"
  },
  {
    subTitle: "チャレンジ 滝つぼダイブ!!",
    title: "ター滝アドベンチャー",
    desc: `世界自然遺産に登録された大宜味村のター滝。
ただ行くだけではもったいない！
アドベンチャー感満載のリバートレッキング ツアーで思い出づくりしませんか？
コースを選べるのでアクティブでも、のんびりでも楽しめます。`,
    color: "main-blue",
    mapPng: "menu-trekking-map",
    link: "/trekking/"
  },
  {
    subTitle: "保育園児・学童クラブ・しょうがい児\nしょうがい者受け入れ可能!!",
    title: "親子 結プログラム",
    desc: `お客様のご要望にお答えして、出来上がった結（ゆい）プログラム。
「親と子。人と人。が、助け合いながら進む。」 をテーマにお客様に合わせたプログラムを組み立 てています。
保育園、学童クラブ集団プログラム受け入れ可能です。（要事前相談）`,
    color: "pink",
    mapPng: "menu-yui-map",
    link: "/yui/"
  },
  {
    subTitle: "古琉球の扉をひらく!!",
    title: "オリジナルムイツアー",
    desc: `沖縄の独特で濃いミステリアスな歴史をたどるディープツアー!!
地元沖縄の聖地巡りが大好きな、ワンオーシャンだからご案内できるオリジナルムイツアー。
ムイとは社や守のことで、他では体験できない人気急上昇のツアーです。`,
    color: "navy",
    mapPng: "menu-mui-map",
    link: "/mui/"
  },
]

const Menu = () => {

  const data = useStaticQuery(
    graphql`
      query {
        kayakPng: file(relativePath: {eq: "tour-menu/menu-kayak-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        trekkingPng: file(relativePath: {eq: "tour-menu/menu-trekking-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        yuiPng: file(relativePath: {eq: "tour-menu/menu-yui-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        muiPng: file(relativePath: {eq: "tour-menu/menu-mui-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        kayakJpg: file(relativePath: {eq: "tour-menu/menu-kayak.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 400, formats: [AUTO, WEBP, AVIF])
          }
        }
        trekkingJpg: file(relativePath: {eq: "menu/trekking/trekking-intro-pic2.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 400, formats: [AUTO, WEBP, AVIF])
          }
        }
        yuiJpg: file(relativePath: {eq: "tour-menu/menu-yui.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 400, formats: [AUTO, WEBP, AVIF])
          }
        }
        muiJpg: file(relativePath: {eq: "tour-menu/menu-mui.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 400, formats: [AUTO, WEBP, AVIF])
          }
        }
        kayakPngUnder: file(relativePath: {eq: "tour-menu/menu-kayak.png"}) {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        trekkingPngUnder: file(relativePath: {eq: "tour-menu/menu-trekking.png"}) {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        yuiPngUnder: file(relativePath: {eq: "tour-menu/menu-yui.png"}) {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        muiPngUnder: file(relativePath: {eq: "tour-menu/menu-mui.png"}) {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
    `
  )

  const kayakMapPng = getImage(data.kayakPng.childImageSharp.gatsbyImageData)
  const trekkingMapPng = getImage(data.trekkingPng.childImageSharp.gatsbyImageData)
  const yuiMapPng = getImage(data.yuiPng.childImageSharp.gatsbyImageData)
  const muiMapPng = getImage(data.muiPng.childImageSharp.gatsbyImageData)
  const kayakJpg = getImage(data.kayakJpg.childImageSharp.gatsbyImageData)
  const trekkingJpg = getImage(data.trekkingJpg.childImageSharp.gatsbyImageData)
  const muiJpg = getImage(data.muiJpg.childImageSharp.gatsbyImageData)
  const yuiJpg = getImage(data.yuiJpg.childImageSharp.gatsbyImageData)
  const kayakPngUnder = getImage(data.kayakPngUnder.childImageSharp.gatsbyImageData)
  const trekkingPngUnder = getImage(data.trekkingPngUnder.childImageSharp.gatsbyImageData)
  const yuiPngUnder = getImage(data.yuiPngUnder.childImageSharp.gatsbyImageData)
  const muiPngUnder = getImage(data.muiPngUnder.childImageSharp.gatsbyImageData)
  let mapPng = [kayakMapPng, trekkingMapPng, yuiMapPng, muiMapPng]
  let heroJpg = [kayakJpg, trekkingJpg, yuiJpg, muiJpg]
  let pngUnder = [kayakPngUnder, trekkingPngUnder, yuiPngUnder, muiPngUnder]

  return (
    <section id="tour-menu" className="bg-light-yellow relative pb-24">
      <Wave
        color="white"
      />
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto">
          <h2 className="iso-target">
            <TourMenuHeader
              alt="ツアーメニュー"
            />
          </h2>
        </div>

        <div className='lg:grid grid-cols-12 gap-8 md:gap-12 xl:w-[80%] mx-auto max-w-[1300px]'>
          {
            menuContents.map((content, i) => {
              return (
                <div key={i} className="iso-target fadein-opacity col-span-6 pt-12 h-auto max-w-[400px] mx-auto lg:max-w-[500px] w-full">
                  <div className="flex justify-center -mt-6 absolute z-10 w-full">
                    <p className={`bg-${content.color} whitespace-pre-wrap text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]`}>
                      {content.subTitle}
                    </p>
                  </div>
                  <GatsbyImage
                    className="rounded-[12px] rounded-tr-none rounded-bl-none w-full shadow-xl h-[248px]"
                    alt="マングローブカヤック"
                    // src="../../images/tour-menu/menu-kayak.jpg"
                    image={heroJpg[i]}
                    width={500}
                    objectPosition="50% 66%"
                  />
                  <div className="bg-white relative shadow-xl rounded-b-[12px]">
                    <GatsbyImage
                      className="absolute -right-2 w-[80px] h-auto lg:w-[100px] -top-[4rem]"
                      image={mapPng[i]}
                      alt="名護市大浦湾"
                    />
                    <h3 className="text-[24px] lg:text-[28px] font-bold text-center pt-6">
                      <span>
                        {content.title}
                      </span>
                    </h3>
                    <p className="pt-6 w-[85%] lg:h-[220px] mx-auto pb-12 whitespace-pre-wrap">
                      {content.desc}
                    </p>
                  </div>
                  <div className="flex justify-center">  
                    <GatsbyImage
                      className="-mt-8 w-[400px] h-[200px]" 
                      imgClassName='object-contain'
                      // src="../../images/tour-menu/menu-kayak.png"
                      image={pngUnder[i]}
                      alt="親子カヤック写真"
                    />
                  </div>
                  <div className="py-12 flex justify-center lg:pt-8">
                    <Link
                      className={`flex items-center justify-center bg-${content.color} text-white w-[80%] text-center shadow-lg py-2 px-4 rounded-[12px] font-bold`}
                      to={content.link}
                    >
                      <span>
                        ツアー内容を見る
                      </span>
                      <BsCaretRightFill
                        className='block'
                        size="1.4rem"
                      />
                    </Link>
                  </div>
                </div>
              )
            })
            // menuContents.map((content, i) => {
            //   return (
            //     <div key={i} className="iso-target fadein-opacity col-span-6 pt-12 h-auto max-w-[400px] mx-auto lg:max-w-[500px] w-full">
            //       <div className="flex justify-center -mt-6 absolute z-10 w-full">
            //         <p className={`bg-${content.color} whitespace-pre-wrap text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]`}>
            //           {content.subTitle}
            //         </p>
            //       </div>
            //       <GatsbyImage
            //         className="rounded-[12px] rounded-tr-none rounded-bl-none w-full h-[248px]"
            //         alt={content.title}
            //         image={heroJpg[i]}
            //         width={500}
            //         objectPosition="50% 66%"
            //       />
            //       <div className="bg-white relative rounded-b-[12px]">
            //         <GatsbyImage
            //           className="absolute -right-2 w-[80px] h-auto lg:w-[100px] -top-[4rem]"
            //           image={mapPng[i]}
            //           alt="集合場所の地図"
            //         />
            //         <h3 className="text-[24px] lg:text-[28px] font-bold text-center pt-6">
            //           <span>
            //             {content.title}
            //           </span>
            //         </h3>
            //         <p className="pt-6 w-[85%] lg:h-[220px] mx-auto pb-12 whitespace-pre-wrap">
            //           {content.desc}
            //         </p>
            //       </div>
            //       <div className="flex justify-center">  
            //         <GatsbyImage
            //           className="-mt-8 w-[400px] h-[200px]" 
            //           imgClassName='object-contain'
            //           image={pngUnder[i]}
            //           alt={content.title}
            //         />
            //       </div>
            //       <div className="py-12 flex justify-center lg:pt-8">
            //         <Link
            //           className={`flex items-center justify-center bg-${content.color} text-white w-[80%] text-center py-2 px-4 rounded-[12px] font-bold`}
            //           to={content.link}
            //         >
            //           <span>
            //             ツアー内容を見る
            //           </span>
            //           <BsCaretRightFill
            //             className='block'
            //             size="1.4rem"
            //           />
            //         </Link>
            //       </div>
            //     </div>
            //   )
            // })
          }
        </div>

      </div>
    </section>
  )
}

export default Menu