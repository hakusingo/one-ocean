import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

// import FeatureHeader from "../svg/feature-header"
import featureHeader from "../../images/svg/front/feature-header.svg"
import Wave from '../svg/wave'

const Feature = () => {

  const data = useStaticQuery(
    graphql`
      query {
        feature1: file(relativePath: {eq: "feature/feature-pic1.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
        feature2: file(relativePath: {eq: "feature/feature-pic2.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
        feature3: file(relativePath: {eq: "feature/feature-pic3.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
        feature4: file(relativePath: {eq: "feature/feature-pic4.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
        feature5: file(relativePath: {eq: "feature/feature-pic5.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
        feature6: file(relativePath: {eq: "feature/feature-pic6.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )

  const feature1 = getImage(data.feature1.childImageSharp.gatsbyImageData)
  const feature2 = getImage(data.feature2.childImageSharp.gatsbyImageData)
  const feature3 = getImage(data.feature3.childImageSharp.gatsbyImageData)
  const feature4 = getImage(data.feature4.childImageSharp.gatsbyImageData)
  const feature5 = getImage(data.feature5.childImageSharp.gatsbyImageData)
  const feature6 = getImage(data.feature6.childImageSharp.gatsbyImageData)
  let featureImage = [feature1, feature2, feature3, feature4, feature5, feature6]
  
  const featureText = [
  `お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。
  プライベートツアーなのでお客様のペースでツアーが実現！!「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。`,

  `ツアー道具はワンオーシャンがご用意!!お客様にご用意していただくものはタオルとお着替えのみ！
  手軽にご参加いただけるのも、ワンオーシャンの人気の理由です。 タオルの貸し出しもしております。`,

  `アドベンチャーが大好きな、地元出身のベテランガイドが同行いたします。
  お客さの安心・安全を第一にツアーを敢行しています。
  お子様から高齢方でも、安心して楽しめるツアーをご提供しています。`,

  `沖縄特有の亜熱帯ジャングルや世界有数のキレイな川をフィールドに、遊び心と冒険心をくすぐるアドベンチャーツアーを行います！
  植物や昆虫などを探すまったりした探検、滝壷を昇ったり、ターザンしたりのアドベンチャーなど。自然の中での遊び方を伝授します♪`,

  `沖縄の大自然の中で、大切なあの人に自分の気持ちを伝えたい！孫とカヤックでマングローブ林を探検したい！自分のペースで滝壺のぼりやアドベンチャーを楽しみたい！...etc
  アナタの想いや夢をお聞かせください。全力でサポートいたします！`,

  `みなさんの冒険の動画や写真を撮影し、データを無料で差し上げています。
  大切なご家族、友人、カップルで撮影した大切な一枚をぜひワンオーシャンで!!`
  ]

  const featreTitle = [
"１組だけのプライベートツアー",
"気軽にツアーにご参加頂けます!!",
"経験豊富なガイドが同行\n安心・安全に楽しめます！！",
"沖縄の豊かな大自然の中を\n探検♪冒険♫",
`アナタの想いや夢を叶えます！
まずはご相談ください`,
`冒険の動画や写真データを
無料でご提供致します`
  ]

  return (
    <section id="feature" className="relative pb-24">
      <Wave
        color="main-blue"
      />
      <div className="pr-8 pl-8">
        <div className="pt-12 max-w-[500px] mx-auto mb-8">
          <h2 className="iso-target">
            <img src={featureHeader} alt="FEATURE ワンオーシャンの特徴" loading='la' />
            {/* <FeatureHeader
              alt="ワンオーシャンの特徴"
            /> */}
          </h2>
        </div>
        <div className="max-w-[1300px] w-full mx-auto lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {
            featureImage.map((featureImg, i) => {
              return (
                <div key={i} className="feature py-8 xl:py-4 iso-target col-span-4 h-auto w-full relative max-w-[500px] mx-auto">
                  <div className="relative shadow-xl">
                    <div className="front-feature-number absolute z-10 text-[4rem] -top-[3.4rem] right-4">
                      <span className="text-yellow px-1">0</span>
                      <span className="text-main-green">{ i + 1 }</span>
                    </div>
                    <GatsbyImage
                      image={featureImg}
                      className="aspect-[3/2] w-full h-auto object-cover"
                      alt=""
                    />
                    <div className="relative">
                      <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                        <div className="triangle"></div>
                        <h3 className={`bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%] whitespace-pre`}>
                          {featreTitle[i]}
                        </h3>
                      </div>
                      <p className="px-4 pt-4 pb-8">
                        {featureText[i]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Feature
