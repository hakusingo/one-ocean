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

import KayakContentsHeader from '../components/svg/yui-contents-header'
import KayakInfoHeader from '../components/svg/yui-information-header'
import KayakScheduleHeader from "../components/svg/yui-schedule-header"
import KayakContactButton from '../components/svg/yui-contact-button'

import "./menu.scss"
import "./index.scss"

const IntroH3 = () => {
  return (
    <span className='iso-target fadein-opacity'>
      「人と人が、助け合いながら進む!!」<br className="xl:hidden"/>
      をテーマしたオリジナルプログラム
    </span>
  )
}

const IntroP = () => {
  return (
    <p className='lg:w-[80%] xl:text-[1.2rem] mx-auto'>
      お客様から頂いた「こんなメニュー作って！！」というご要望にお答えして出来上がった「親子結プログラム」<br/>
      <br/>
      参加するグループにあわせてオリジナルにプログラムを作成します。
      小さいお子様も参加できる、優しいメニューですが内容は本格的です!!<br/>
      お気軽にお問合わせください。
    </p>
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
    contentTitle: `魅力的な沖縄の大自然の植物・生物の知識を収集できる!!`,
    contentText: 
    `亜熱帯沖縄の大自然、この島でしか見ることのできない動植物を知ることのできるフィールドワークも同時に行います。

    珍しい生物を身近にふれることができるのも人気の理由です！！`,
    className: "iso-target fadein-opacity flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[300ms]",
    alt: "マングローブカヤック写真"
  },
  {
    contentTitle: 
    `親も子も楽しめます！！\n季節問わず大自然に癒やされる`,
    contentText: 
    `お子様と自然体験をしたい。 沖縄ならではの自然体験を気軽に満喫したい。と思う人にはもってこいのツアーです。
    本格的なプログラムですが、大人から子供までいろいろな方々に合わせたオリジナルのプログラムを提供しています。`,
    className: "iso-target fadein-opacity flex-1 lg:mt-0 feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[600ms]",
    alt: "マングローブカヤックを楽しむ親子"
  }
]

const MenuInfo = [
  {
    title: `料金`,
    desc: `お客様のご要望に合わせてツアープログラムを作成する為、料金は要相談になります。`
  },
  {
    title: `所要時間`,
    desc: `約90分`
  },
  {
    title: `参加年齢`,
    desc: `どなたでもご参加頂けますプログラムを作成致します。ご相談ください。`
  },
  {
    title: `開催時間`,
    desc: `安全を第一に、お客様のご要望にそった時間帯でツアーを行います。`
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
    alt: "結プログラムレクチャー",
    title: `4.結プログラムレクチャー`,
    text: ` コース内容の確認、注意点、ハンドシグナル（ジェスチャーによる意思表示）などのみなさまの安全の確認のためレクチャーを行います。`,
  },
  {
    alt: "カヤック乗り込む",
    title: `5.ユイツアーへいざ出発!!`,
    text: `レクチャーも終わり、いよいよ出発。\n安全を確認し、みなで助け合い大自然を楽しみましょう。`,
  },
  {
    alt: "大浦湾マングローブの林",
    title: `6.大自然をみんなで楽しむ`,
    text: `ふだん訪れることのできない、自然豊かな場所へお連れします。\n存分に自然にふれあい、癒やされ楽しみましょう!!`,
  },
  {
    alt: "カヤックでくつろぐ親子",
    title: `7.開放感を共有する`,
    text: `プログラムのテーマである「親と子、人と人との助け合い。\nツアーのみんなで和気あいあい楽しみ、助け合いながら自然との一体感を共有しよう。`,
  },
  {
    alt: "ワンオーシャン記念写真",
    title: `8.記念写真・解散`,
    text: `お疲れさまでした。\nみんなで、笑顔の記念写真を撮って解散。また、一緒に沖縄の自然を楽しみましょう〜♫`,
  },
]

const MenuEmotionP = () => {
  return (
    <p className="mt-12 text-center lg:text-[20px]">
      人と人とのふれあいを大切にすることは、自分自身だけでなく<br/>周りの人々にも影響を与えることができます。<br/>
      <br />
      一緒に過ごす時間や体験を通じて、仲間意識や協調性も養われます。<br/>
      <br />
      結プログラムでは、人と人との触れ合いを大切にしながら進む、自然体験プログラムです。<br/>
      <br />
      自然ととけこむことで、人との触れ合いもいつもより楽しくなる<br />
      お客様のご要望で作り上げたオリジナルプログラムです。
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
        heroTitle= "親子結プログラム"
        heroSubTitle= {`保育園児・学童クラブ・しょうがい児\nしょうがい者受け入れ可能`}
        color= "pink"
      />
      <MenuIntro
        IntroH3 = {IntroH3}
        IntroP = {IntroP}
        IntroPic1 = {introPic1}
        IntroPic2 = {introPic2}
        color = "pink"
      />
      <MenuContents
        ContentsPic1 = {contentsPic1}
        ContentsPic2 = {contentsPic2}
        ContentsPic3 = {contentsPic3}
        color = "pink"
        menuContents = {menuContents}
        menuContentsHeader = {KayakContentsHeader}
      />
      <MenuInformation
        MenuInfo = {MenuInfo}
        color = "pink"
        menuInfoHeader = {KayakInfoHeader}
      />
      <MenuSchedule
        schedulePics = {schedulePics}
        menuSchedule = {menuSchedule}
        color = "pink"
        contactButtom = {KayakContactButton}
        menuInfoHeader = {KayakScheduleHeader}
      />
      <MenuEmotion
        menuEmotionH3 = "「人と自然と繋がる」が冒険のテーマ"
        menuEmotionP = {MenuEmotionP}
        emotion = {emotion}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    kayakHero: file(relativePath: {eq: "menu/yui/yui-hero-pc.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 400, formats: [AUTO, WEBP])
    }
  }
    kayakHeroPc: file(relativePath: {eq: "menu/yui/yui-hero-pc.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
      }
    }
    kayakIntro1: file(relativePath: {eq: "menu/yui/yui-intro1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP])
      }
    }
    kayakIntro2: file(relativePath: {eq: "menu/yui/yui-intro2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic1: file(relativePath: {eq: "menu/yui/yui-contents-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic2: file(relativePath: {eq: "menu/yui/yui-contents-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic3: file(relativePath: {eq: "menu/yui/yui-contents-pic3.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakEmotion: file(relativePath: {eq: "menu/yui/yui-emotion.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1000, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic1: file(relativePath: {eq: "menu/kayak/kayak-schedule-contact.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic2: file(relativePath: {eq: "menu/yui/yui-schedule-place.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic3: file(relativePath: {eq: "menu/yui/yui-schedule-cloths.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic4: file(relativePath: {eq: "menu/yui/yui-schedule-lecture.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic5: file(relativePath: {eq: "menu/yui/yui-schedule-start.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic6: file(relativePath: {eq: "menu/yui/yui-schedule-enjoy.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic7: file(relativePath: {eq: "menu/yui/yui-schedule-openness.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic8: file(relativePath: {eq: "menu/yui/yui-schedule-photo.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
  }
`

export const Head = () => <Seo title="親子結プログラム | ワンオーシャン" />

export default Kayak