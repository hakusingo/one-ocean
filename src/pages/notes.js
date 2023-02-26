import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Example from '../components/example'
import NotesHeader from '../components/svg/notes-header'
import Seo from "../components/seo"

const Notes = () => {

  return (
    <Layout>
      <section className="w-full relative">
        <div className="h-[400px] relative md:h-[500px] lg:h-[600px]">
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0"
            src='../images/notes/notes-hero.jpg'
            alt="ター滝トレッキング写真"
            objectPosition="50% 80%"
            loading="eager"
            layout='fullWidth'
            placeholder='blurred'
            formats={["auto", "webp"]}
          />
        </div>
        <div className="absolute w-[92%] h-[94%] border-white border-2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-[12px] rounded-tr-none"></div>
        <div className="max-w-[900px] rounded-[12px] w-[80%] absolute bg-main-blue text-white bottom-0 left-[50%] -translate-x-[50%]">
          <h2 className='relative py-2 text-center text-[1.4rem] md:text-[2rem] font-semibold'>
            <span className='py-1 text-[12px] block font-light md:text-8 md:text-[1rem]'>
              ツアーに参加される前にお読み下さい
            </span>
            注意事項
            <div className="absolute rounded-[12px] w-[94%] md:w-[98%] h-[88%] border-white border top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
          </h2>
        </div>
      </section>
      <section className="">
        <div className="section-container">
          <div className="iso-target pt-16 max-w-[500px] mx-auto">
            <h2>
              <NotesHeader />
            </h2>
          </div>
          <div className="max-w-[1200px] md:w-[80%] mx-auto">

            <Example 
              title="
                免責事項
              "
              content={
                <>
                  ・コースご参加中、海、山、川に潜在的な危険性があることを十分承知し、自由意志を持ってコースご参加し、自己の責任を持ちマリン、野外活動を行うことご理解頂きコースご参加頂きます。<br />
                  ・コースご参加中、当店スタッフの指示に従い安全なマリン、野外活動を行って頂きます。また、指示に従っていただけない場合、コースの中断・中止があることをご理解頂きコースご参加頂きます。<br />
                  ・コースご参加中の持ち込み器材（ダイビング器材・カメラ・携帯電話等）の紛失・破損について自己の責任を持ってコースご参加いただきます。<br />
                </>
              }
            />
            <Example 
              title="
                注意事項／共通注意事項
              "
              content={
                <>
                  当社は、法令に定められた例外の場合を除き、<br/>個人情報の利用についてはあらかじめお客様に明示又は公表した利用目的の範囲内での利用もしくは、それと相当な関連性のある範囲内で、業務遂行上必要な範囲において利用致します。
                  また、個人データの取扱いを業務委託先に委託する場合は、安全管理に関する契約を締結し、その委託先からの漏洩・再提供の防止を図ります。
                </>
              }
            />
            <Example 
              title="
                個人情報の第三者提供について
              "
              content={
                <>
                  ○当日天候が急変し、ガイドが安全にプログラムを行えないと判断したらコース変更又は中止します。（台風、雷、大雨による川の増水など）<br />
                  ○妊娠中の方は全てのプログラムでご遠慮頂いています。<br />
                  ○ツアー中、または出発前に少しでも体調が悪いと感じた場合、すみやかにガイドに申し出てください。<br />
                  ○キャンセルチャージについて<br />
                  　・前日12:00までのキャンセルの場合はキャンセルチャージは発生しません。<br />
                  　・コースご参加前日12:00以降はコース料金の50％、ご連絡無しのキャンセルの場合はコース料金全額お支払いいただきます。<br />
                  ○お支払いは、現地支払いの現金精算のみとなります。<br />
                </>
              }
            />
            <Example 
              title="
                注意事項／カヤック・トレッキング
              "
              content={
                <>
                  当社は、お客様の個人情報の取扱いに際しては、管理責任者を置き、適切な管理を行うとともに、外部への流出防止に努めています。<br/>
                  また外部からの不正なアクセス、または紛失、破壊、改ざん等の危険に対しては、適切かつ合理的なレベルの安全対策を実施し、お客様の個人情報の保護に努めております。
                </>
              }
            />
            <Example 
              title="
                リンク先における個人情報の保護について
              "
              content={
                <>
                  必ずライフジャケットを着用します。<br />
                  ○体験前にパドル操作や乗り降りの講習を行います。<br />
                  ○気象庁が警報を発令したらツアーは中止です。<br />
                  ○気象庁が注意報を発令した場合、フィールドの状況を見て判断します。<br />
                  ○カヌーのレンタルは行っていません。（ガイドが着いての案内になります）
                </>
              }
            />
            <Example 
              title="
                注意事項／ダイビング・シュノーケル
              "
              content={
                <>
                  当社は個人情報の取り扱いについて全社員、及び取り扱い委託先業者に当社の規定する個人情報保護に関する取組みを定め、教育を実施し、継続的に見直し、改善を行い、適正な取り扱いを維持します。
                </>
              }
            />
            <Example 
              title="
                法令及びその他の規範の遵守
              "
              content={
                <>
                  当日飛行機に搭乗される方のダイビングは参加できません。<br />
                  <br />
                  ■以下の項目に該当する方は、ご参加頂くに当たり、『医師の診断書』が必要になる場合がございます。<br />
                  ・現在処方箋による投薬を受けている方（避妊薬、マラリア予防薬は除く。）<br />
                  ・45歳以上の方で、以下の1〜6項目に1つ以上、当てはまる方<br />
                  　1. パイプ、葉巻、タバコを喫煙している<br />
                  　2. コレステロール値レベルが高い<br />
                  　3. 家族に心臓発作や脳卒中の病歴がある方がいる<br />
                  　4. 現在診療を受けている<br />
                  　5. 高血圧である<br />
                  　6. 食事療法で調整しているが糖尿病である<br />
                  ・喘息（ぜんそく）、あるいは呼吸時の喘息（ぜいぜいする）、または運動時に喘息が起きる、または起こったことがあった方<br />
                  ・花粉症、またはアレルギー症状の激しい発作、あるいは頻繁な発作がある方<br />
                  ・カゼ、副鼻腔炎、または気管支炎によくかかる方<br />
                  ・何らかの肺の病気（肺炎など）がある、またはなったことがある。もしくは肺（胸部）の手術を受けたことがある方<br />
                  ・行動上の問題、または精神的、心理的な問題がある、またはなったことがある方（不安発作、閉所恐怖症、広場恐怖症など）<br />
                  ・てんかん、発作、けいれんをおこす、またはそれを抑えるための薬を服用している<br />
                  ・意識喪失や、気絶したことがある方（完全、または一時的に意識を失う）<br />
                  ・乗り物酔いがよくある、または乗り物酔いが激しくある方（船酔いや車酔いなど）<br />
                  ・赤痢または脱水症状で治療が必要な方<br />
                  ・何らかのダイビング事故や減圧症である、またはなったことがある方<br />
                  ・過去5年間に、意識を失う頭部の損傷があった方<br />
                  ・腰部または背骨の手術を受けている方<br />
                  ・糖尿病である、またはなったことがある方<br />
                  ・腰、腕、脚の外科手術、外傷や骨折後の後遺症がある方<br />
                  ・高血圧症、または血圧降下剤など、血圧をコントロールする薬を服用している、またはしていた方<br />
                  ・心臓疾患にかかっている、またはわずらわっていた方<br />
                  ・心臓発作がおきる、またはおきたことがある方<br />
                  ・狭心症、あるいは心臓外科手術、または動脈手術を受けている方<br />
                  ・副鼻腔の手術を受けている方<br />
                  ・耳の病気や手術を受けたり、聴覚障害、平衡感覚障害の方<br />
                  ・耳の病気を繰り返し起こす、または起していた方<br />
                  ・出血やその他の血液障害がある、またはあった方<br />
                  ・ヘルニアにかかっている、またはわずらわっていたことがある方<br />
                  ・大腸や回腸の人工肛門の手術を受けている方<br />
                  ・過去5年間に娯楽で麻薬を使用したり、治療のために麻薬を用いた、またはアルコール依存症になったことがある方<br />
                </>
              }
            />
          </div>
          <div className="iso-target bg-gray-200 max-w-2xl mx-auto">
            <p className='text-center font-semibold py-2 px-4'>
              安全管理上、ご協力お願いします。<br />
              親身になってご相談に乗りますので、心配な方、不安な方はお気軽にご相談下さい！
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="注意事項" />

export default Notes