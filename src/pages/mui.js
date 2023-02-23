import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

import Layout from '../components/layout'
// import { Link } from "gatsby"
// import { BsCaretRightFill } from "react-icons/bs"
// import KayakContactButton from "../components/svg/kayak-contact-button"
// import MenuScheduleHeader from "../components/svg/menu-schedule-header"
import MenuHero from '../components/menu/menu-hero'
import MenuIntro from '../components/menu/menu-intro'
// import KayakInfoHeader from '../components/svg/kayak-info-header'
import MenuContents from '../components/menu/menu-contents'
import MenuEmotion from '../components/menu/menu-emotion'
import MenuInformation from '../components/menu/menu-information'
import MenuSchedule from '../components/menu/menu-schedule'

import KayakContentsHeader from '../components/svg/mui-contents-header'
import KayakInfoHeader from '../components/svg/mui-information-header'
import KayakScheduleHeader from "../components/svg/mui-schedule-header"
import KayakContactButton from '../components/svg/mui-contact-button'

import "./menu.scss"
import "./index.scss"

const IntroH3 = () => {
  return (
    <span className='iso-target fadein-opacity'>
      沖縄のディープな聖地を巡る<br className='lg:hidden' />
      大人気オリジナルツアー
    </span>
  )
}

const IntroP = () => {
  return (
    <p className='lg:w-[80%] xl:text-[1.2rem] mx-auto'>
      ムイとはモリのことで、森、社、守など沖縄の聖地を意味します。<br />
      <br/>
      聖地巡りや、古琉球の歴史探訪が大好きなワンオーシャンの代表がプロディースする、ワンオーシャンオリジナルムイツアー。<br />
      他では味わえない、ボウケンとディープな知識が足された新感覚体験アドベンチャーツアーとなっています。<br />
      <br/>
      人気急上昇のメニュー♫ぜひ、お問合わせください!!
    </p>
  )
}

const InfoPrice = () => {
  return (
    <>
      <p className='pb-2'>
        沖縄の拝所の歴史がわかる<br />
        <span className='text-navy'>
        ☆伊計島・御先世コース（ウサチユコース）☆<br />
        </span>
        １名様 8,000円　３名〜５名 6,000円
      </p>
      <hr/>
      <p className='py-2'>
        Instagramに上げた、竜宮神シリーズからここへ行きたいをピックアップ可能!!<br />
        <span className='text-navy'>
        ☆龍宮神巡りコース☆<br />
        </span>
        １名様 8,000円　３名〜５名 6,000円
      </p>
      <hr/>
      <p className='pt-2'>
        こことここ一緒に行きたい!!オーダーメイド制<br />
        <span className='text-navy'>
        ☆おまかせムイツアー☆<br />
        </span>
        料金要相談
      </p>
    </>
  )
}

const menuContents = [
  {
    contentTitle: "1組だけのプライベートツアー",
    contentText: "お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。\nプライベートツアーなのでマイペースでのツアーが実現！「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。",
    className: "iso-target fadein-opacity flex-1 lg:mt-0 lg:pt-[4rem] feature relative px-4 my-12 max-w-[500px] mx-auto",
    alt: "大浦湾マングローブ林"
  },
  {
    contentTitle: `観光情報には載っていない\nミステリーアドベンチャーツアー`,
    contentText: 
    `歴史・聖地巡りがライフワークのワンオーシャンだから案内できる、沖縄ミステリーアドベンチャーツアー。
    いにしえの琉球の歴史を知りたい！！だれも知らないパワースポットの行きたい!!など、ぜひご要望ください。`,
    className: "iso-target fadein-opacity flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[300ms]",
    alt: "マングローブカヤック写真"
  },
  {
    contentTitle: 
    `当日予約OK、手ぶらで気軽に楽しめる!!`,
    contentText: 
    `当日予約OKで、気軽にツアーに参加できます。
    また、手ぶらで参加できるので急な予定変更にも対応できます。お気軽にご連絡くださいませ。
    
    ※当日の天候、スケジュールにより開催できない場合がございます、ご了承くださいませ。`,
    className: "iso-target fadein-opacity flex-1 lg:mt-0 feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[600ms]",
    alt: "マングローブカヤックを楽しむ親子"
  }
]

const MenuInfo = [
  {
    title: `料金`,
    // desc: `お客様のご要望に合わせてツアープログラムを作成する為、料金は要相談になります。`
    muiPrice: {InfoPrice}
  },
  {
    title: `所要時間`,
    desc: `約３時間`
  },
  {
    title: `参加年齢`,
    desc: `幼児からOK 幼児でも楽しめる代替地あり`
  },
  {
    title: `開催時間`,
    desc: `安全を考慮した時刻の開催とさせていただきます`
  },
  {
    title: `集合場所`,
    desc: `プログラムによって集合場所は異なります。\n※予約時間１０分前集合です。`,
  },
  {
    title: `料金にふくまれるもの`,
    desc: `保険料、器材代、写真データ`
  },
  {
    title: `持ち物`,
    desc: `お着替え、タオル`
  },
  {
    title: `備考`,
    desc: `汚れても良いお洋服でお越し下さい。\n天候によりますが、ガイドの 判断でツアーを中止する場合 がございます。 ご了承くださいませ。\n\nタオルのレンタル可能です、 ご予約時にお申し込みください。\n\n※下記の注意事項をツアー参加 前に必ずお読みくださいませ。`,
    linkName: `注意事項`,
    url: `/coution`
  },
]

const menuSchedule = [
  {
    alt: "電話予約",
    title: `1.ご予約・申し込み`,
    text: `お電話、メール、SNS等でご予約・お申し込み頂けます。 潮の満ち引きによる状態も御座いますので、基本的に事前 予約をお願い致します。\n\nお客様のご要望により、タイムスケジュールをお作りします。ご要望がございましたら、お気軽にお問い合わせください。`,
    linkName: `ご予約はコチラ`,
    url: `/contact`
  },
  {
    alt: "わんさか大浦パーク道路看板",
    title: `2.現地にて集合`,
    text: `ご要望により作成したプログラムにて集合場所をお伝え致します。\nお客さまのご希望の集合場所でもOKです！！`,
  },
  {
    alt: "着替え",
    title: `3.お着替え・装備装着`,
    text: `動きやすいお洋服にお着替えをお願い致します。\nツアー場所によっては、安全のための装備装着をお願いする場合もございます。`,
  },
  {
    alt: "レクチャー",
    title: `4.レクチャー`,
    text: `ツアー内容の確認、注意点、ハンドシグナル（ジェスチャーによる意思表示）などのレクチャーを行います。 聖地巡礼のマナーもお伝えします。`,
  },
  {
    alt: "ムイツアースタート",
    title: `5.ムイツアーへいざ出発!!`,
    text: `さぁ！！！レクチャーも終わり装備の確認をしていざ、ムイツアー開始。\nミステリーアドベンチャーツアーを楽しみもう♫`,
  },
  {
    alt: "ムイツアー",
    title: `6.古琉球の歴史を巡る大冒険`,
    text: `ミステリアスに包まれた琉球の歴史を楽しもう。\n地元民もなかなか知らない龍宮神や、拝しょをご案内致します。`,
  },
  {
    alt: "7.大自然も満喫!!",
    title: `7.大自然も満喫!!`,
    text: `ムイツアーでご案内する場所は、大自然に囲まれている場所もおおく素晴らしい景観も楽しめます。\n神秘的な場所で、また自然に囲まれたなかで新しいパワーをいただこう。`,
  },
  {
    alt: "ムイツアー記念写真",
    title: `8.記念写真・解散`,
    text: `お疲れさまでした。\nみんなで、笑顔の記念写真を撮って解散。また、一緒に沖縄の自然を楽しみましょう〜♫`,
  },
]

const MenuEmotionP = () => {
  return (
    <p className="mt-12 text-center lg:text-[20px]">
      沖縄の歴史はとてのミステリアスで興味深いものです。<br />
      <br />
      沖縄の歴史を紐解く探検がライフワークのワンオーシャンだから案内できる<br />
      ワンオーシャンオリジナルムイツアー。<br />
      <br />
      自然体験アドベンチャーに歴史探訪がプラスされた、人気急上昇のメニューです。<br />
      <br />
      沖縄の魅力を本格的に紐解きたいならぜひ、ご参加ください。
    </p>
  )
}

const Kayak = ({ data }) => {

  let heroImg = getImage(data.kayakHero.childImageSharp.gatsbyImageData)
  let heroImgPc = getImage(data.kayakHeroPc.childImageSharp.gatsbyImageData)
  let introPic1 = getImage(data.kayakIntro1.childImageSharp.gatsbyImageData)
  let introPic2 = getImage(data.kayakIntro2.childImageSharp.gatsbyImageData)
  let contentsPic1 = getImage(data.kayakContentsPic1.childImageSharp.gatsbyImageData)
  let contentsPic2 = getImage(data.kayakContentsPic2.childImageSharp.gatsbyImageData)
  let contentsPic3 = getImage(data.kayakContentsPic3.childImageSharp.gatsbyImageData)
  let schedulePics = []
  schedulePics.push(getImage(data.kayakSchedulePic1.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic2.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic3.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic4.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic5.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic6.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic7.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic8.childImageSharp.gatsbyImageData))

  let emotion = getImage(data.kayakEmotion.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <MenuHero
        heroImg = {heroImg}
        heroImgPc= {heroImgPc}
        heroTitle= "古代琉球ムイツアー"
        heroSubTitle= {`古琉球の扉をひらくオリジナルツアー`}
        color= "navy"
        mui = {true}
      />
      <MenuIntro
        IntroH3 = {IntroH3}
        IntroP = {IntroP}
        IntroPic1 = {introPic1}
        IntroPic2 = {introPic2}
        color = "navy"
      />
      <MenuContents
        ContentsPic1 = {contentsPic1}
        ContentsPic2 = {contentsPic2}
        ContentsPic3 = {contentsPic3}
        color = "navy"
        menuContents = {menuContents}
        menuContentsHeader = {KayakContentsHeader}
      />
      <MenuInformation
        MenuInfo = {MenuInfo}
        color = "navy"
        menuInfoHeader = {KayakInfoHeader}
        infoPrice = {InfoPrice}
      />
      <MenuSchedule
        schedulePics = {schedulePics}
        menuSchedule = {menuSchedule}
        color = "navy"
        contactButtom = {KayakContactButton}
        menuInfoHeader = {KayakScheduleHeader}
      />
      <MenuEmotion
        menuEmotionH3 = "古琉球の扉をひらく"
        menuEmotionP = {MenuEmotionP}
        emotion = {emotion}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    kayakHero: file(relativePath: {eq: "menu/mui/mui-hero-pic1.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 400, formats: [AUTO, WEBP, AVIF])
    }
  }
    kayakHeroPc: file(relativePath: {eq: "menu/mui/mui-hero-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakIntro1: file(relativePath: {eq: "menu/mui/mui-intro-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakIntro2: file(relativePath: {eq: "menu/mui/mui-intro-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakContentsPic1: file(relativePath: {eq: "menu/mui/mui-contents-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakContentsPic2: file(relativePath: {eq: "menu/mui/mui-contents-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakContentsPic3: file(relativePath: {eq: "menu/mui/mui-contents-pic3.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakEmotion: file(relativePath: {eq: "menu/mui/mui-emotion.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1000, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic1: file(relativePath: {eq: "menu/kayak/kayak-schedule-contact.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic2: file(relativePath: {eq: "menu/mui/mui-schedule-place.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic3: file(relativePath: {eq: "menu/mui/mui-schedule-clothes.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic4: file(relativePath: {eq: "menu/trekking/trekking-schedule-lecture.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic5: file(relativePath: {eq: "menu/mui/mui-schedule-start.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic6: file(relativePath: {eq: "menu/mui/mui-schedule-openness.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic7: file(relativePath: {eq: "menu/mui/nature.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
    kayakSchedulePic8: file(relativePath: {eq: "menu/mui/mui-schedule-photo.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <Seo title="オリジナルムイツアー | ワンオーシャン" />

export default Kayak