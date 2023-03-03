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

import KayakInfoHeader from '../components/svg/trekking-info-header'

import "./menu.scss"
import "./index.scss"

const IntroH3 = () => {
  return (
    <span className='iso-target fadein-opacity'>
      チャレンジ♪滝壺ダイブ！<br className='lg:hidden' />
      リバートレッキングで自然を満喫
    </span>
  )
}

const IntroP = () => {
  return (
    <p className='lg:w-[80%] xl:text-[1.2rem] mx-auto'>
      沖縄県北部ヤンバルは、壮大な自然、原生林が多く残り「東洋のガラパゴス」と称されるほど、 そのヤンバルの豊かな自然の中にター滝はあります。<br/>
      <br/>
      ター滝トレッキングのコースは「水路」「陸路」の2つ。 参加者に合わせて、体力に自信がない方、初心者でも気軽にター滝までのリバートレッキングが楽しめます。<br/>
      <br/>
      沖縄の自然の中、ご家族で、カップルで、お友達どうしで、 リバートレッキングで思い出の1ページを！
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
    contentTitle: `ターザンアドベンチャー\n名物!!滝つぼダイブで大興奮♫`,
    contentText: "原生林に過去まれた大人気のリバートレッキング!!\nプチロッククライミングや、ターザンアドベンチャーでアスレチック感満載♫\n滝つぼダイブでは大興奮間違いなし。キジムナーにも会えちゃうかも!?",
    className: "iso-target fadein-opacity flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[300ms]",
    alt: "マングローブカヤック写真"
  },
  {
    contentTitle: "あなたは水路派？陸路派？\n選べるコースで誰でも楽しめる",
    contentText: "亜熱帯の大自然の森のなかにあるター滝\nコースは陸路、水路をチョイス。初心者でも楽しめるのがター滝が人気の理由!!\n親子三世代で楽しめる、ご家族にも人気のツアーです。",
    className: "iso-target fadein-opacity flex-1 lg:mt-0 feature relative px-4 my-12 max-w-[500px] mx-auto lg:delay-[600ms]",
    alt: "マングローブカヤックを楽しむ親子"
  }
]

const MenuInfo = [
  {
    title: `料金`,
    desc: `大人 6,800円\n子供 5,800円\n幼児 2,400円(4才児以下)`
  },
  {
    title: `所要時間`,
    desc: `約120分`
  },
  {
    title: `参加年齢`,
    desc: `幼児からOK 幼児でも楽しめる代替地あり`
  },
  {
    title: `集合場所`,
    desc: `前田食堂前\n住所 沖縄県国頭郡大宜味村字津波985\n※予約時間１０分前集合です。`,
    aLinkName: `Map`,
    url: `https://goo.gl/maps/Yrdw6Cf29TgNx1DV8`
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
    desc: `濡れても良いお洋服でお越し下さい。\n天候によりますが、ガイドの 判断でツアーを中止する場合 がございます。 ご了承くださいませ。\n\n※下記の注意事項をツアー参加 前に必ずお読みくださいませ。`,
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
    text: `前田食堂前での待ち合わせをお願い致します。\n沖縄自動車道、許田ICより２７分ほどの場所にございます。\n現地までのドライブも爽快で気持ちいいです！！`,
    aLinkName: `地図はコチラ`,
    url: `https://goo.gl/maps/Yrdw6Cf29TgNx1DV8`
  },
  {
    alt: "着替え",
    title: `3.お着替え・装備装着`,
    text: `濡れてもいいお洋服にお着替えをお願い致します。\nまた安全のためライフジャケット・ブーツの着用は必須とさせていただいています。\n(ライフジャケット・ブーツはこちらでご用意させて頂きます)`,
  },
  {
    alt: "カヤックレクチャー",
    title: `4.トレッキングレクチャー`,
    text: `ター滝トレッキング内容の確認、注意点、ハンドシグナル（ジェスチャーによる意思表示）などのレクチャーを行います。`,
  },
  {
    alt: "カヤック乗り込む",
    title: `5.ター滝へ向けいざ出発!!`,
    text: `さぁ！！！レクチャーも終わり装備の確認をして\nいざ、ター滝トレッキング開始！`,
  },
  {
    alt: "大浦湾マングローブの林",
    title: `6.陸路？水路？どっちを選ぶ!?`,
    text: `ワイルドにター滝に進んでいける陸路。\nロープを使ってお子様でも登れます。沖縄特有の亜熱帯性植物の中を進み、冒険気分を味わえること間違いなし！\n\n河の中を歩いてもいけます。少し火照った体をクールダウンしてくれます。`,
  },
  {
    alt: "カヤックでくつろぐ親子",
    title: `7.目的地のター滝へ到着`,
    text: `目的地のター滝到着。開放的な気分になれること間違いなし！\n滝ときたら？修行しても良し。眺めても良し。アナタだけのオリジナルな遊び方を見つけてみよ♪`,
  },
  {
    alt: "ワンオーシャン記念写真",
    title: `8.記念写真・解散`,
    text: `お疲れさまでした。\nみんなで、笑顔の記念写真を撮って解散。また、一緒に沖縄の自然を楽しみましょう〜♫`,
  },
]

const MenuEmotionP = () => {
  return (
    <p className="mt-12 text-center w-[70%] mx-auto lg:text-[20px]">
      沖縄県北部ヤンバルは、壮大な自然、原生林が多く残り「東洋のガラパゴス」と称されるほど。<br />
      <br />
      大自然の中で自分を取り戻す、リバートレッキング！<br/>
      <br />
      リバートレッキングでは、川の流れに身を任せて進むため、自然との一体感を味わえます。<br />
      <br />
      水に触れることでストレス解消にもなり、リフレッシュ効果が期待!!<br />
      <br />
      沖縄特有の亜熱帯の植物、ブロッコリーの森がお出迎えします。ぜひ一緒に別世界へ♫
    </p>
  )
}

const Kayak = ({ data }) => {

  // let heroImg = getImage(data.kayakHero.childImageSharp.gatsbyImageData)
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
        // heroImg = {heroImg}
        heroImgPc= {heroImgPc}
        heroTitle= "ター滝アドベンチャー"
        heroSubTitle= "世界遺産のター滝をトレッキング"
        color= "main-blue"
      />
      <MenuIntro
        IntroH3 = {IntroH3}
        IntroP = {IntroP}
        IntroPic1 = {introPic1}
        IntroPic2 = {introPic2}
        color = "main-blue"
      />
      <MenuContents
        ContentsPic1 = {contentsPic1}
        ContentsPic2 = {contentsPic2}
        ContentsPic3 = {contentsPic3}
        color = "main-blue"
        menuContents = {menuContents}

      />
      <MenuInformation
        MenuInfo = {MenuInfo}
        color = "main-blue"
        menuInfoHeader = {KayakInfoHeader}
      />
      <MenuSchedule
        schedulePics = {schedulePics}
        menuSchedule = {menuSchedule}
        color = "main-blue"
      />
      <MenuEmotion
        menuEmotionH3 = "ヤンバルの大自然を身体いっぱい味わって欲しい"
        menuEmotionP = {MenuEmotionP}
        emotion = {emotion}
        objectPosition = "50% 50%"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    # kayakHero: file(relativePath: {eq: "tour-menu/menu-trekking.jpg"}) {
    #   childImageSharp {
    #     gatsbyImageData(layout: CONSTRAINED, width: 400, formats: [AUTO, WEBP], placeholder: BLURRED)
    #   }
    # }
    kayakHeroPc: file(relativePath: {eq: "tour-menu/menu-trekking.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP], placeholder: BLURRED)
      }
    }
    kayakIntro1: file(relativePath: {eq: "menu/trekking/trekking-intro-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP])
      }
    }
    kayakIntro2: file(relativePath: {eq: "menu/trekking/trekking-intro-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic1: file(relativePath: {eq: "menu/trekking/trekking-contents-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic2: file(relativePath: {eq: "menu/trekking/trekking-contents-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakContentsPic3: file(relativePath: {eq: "menu/trekking/trekking-contents-pic3.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic1: file(relativePath: {eq: "menu/kayak/kayak-schedule-contact.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic2: file(relativePath: {eq: "menu/trekking/trekking-schedule-place.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic3: file(relativePath: {eq: "menu/trekking/trekking-schedule-clothes.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic4: file(relativePath: {eq: "menu/trekking/trekking-schedule-lecture.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic5: file(relativePath: {eq: "menu/trekking/trekking-schedule-start.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic6: file(relativePath: {eq: "menu/trekking/trekking-chose.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic7: file(relativePath: {eq: "menu/trekking/trekking-schedule-goal.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakSchedulePic8: file(relativePath: {eq: "menu/trekking/trekking-schedule-photo.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500, formats: [AUTO, WEBP])
      }
    }
    kayakEmotion: file(relativePath: {eq: "menu/trekking/emotion.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1000, formats: [AUTO, WEBP])
      }
    }
  }
`

export const Head = () => <Seo title="ター滝トレッキング | ワンオーシャン" />

export default Kayak