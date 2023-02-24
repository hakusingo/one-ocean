import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import PrivacyPolicy from "../components/svg/privacy-policy"
import Example from '../components/example'
import Seo from '../components/seo'

const policy = () => {

  return (
    <Layout>
      <section className="w-full relative">
        <div className="h-[340px] relative md:h-[400px] lg:h-[600px]">
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0 md:hidden"
            src='../images/policy/policy-hero.jpg'
            alt="ター滝トレッキング写真"
            objectPosition="50% 30%"
            loading="eager"
            layout="constrained"
            width={700}
            placeholder='blurred'
            formats={["auto", "webp"]}
          />
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
            src='../images/policy/policy-hero.jpg'
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
            プライバシーポリシー
            <div className="absolute rounded-[12px] w-[94%] md:w-[98%] h-[88%] border-white border top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
          </h2>
        </div>
      </section>
      <section className="">
        <div className="section-container">
          <div className="iso-target pt-16 max-w-[500px] mx-auto">
            <h2>
              <PrivacyPolicy />
            </h2>
          </div>
          <div className="max-w-[1200px] md:w-[80%] mx-auto">

            <div className="">
              <div className="my-12">
                <h3 className="text-main-blue text-[22px] font-bold">
                  個人情報の取り扱いについて
                </h3>
                <div>
                  <div className='h-[2px] w-full bg-main-blue mt-1'></div>
                </div>
                <p className='mt-2'>
                  ワン・オーシャン（以下「当社」といいます。）が運営する当ウェブサイト（以下「当サイト」といいます。）は、個人情報保護の重要性を認識し、お客様の個人情報の適切な取り扱いに最大限の注意を払っております。お客様が安心してご利用頂けるようプライバシーポリシーを定め、当サイトを通じてお客様よりご提供いただいた個人情報はプライバシーポリシーに従って厳重に取扱ってまいります。
                  当社は、お客様によりよいサービスをご提供するため、個人情報の取り扱いに際しては、お客様の個人情報が漏洩しないよう、個人情報の保護に対して適切な管理、処理及び、リスクマネジメントを行います。当サイトをご利用いただく際には本方針を十分にご理解頂き、同意頂いた場合に限り個人情報をご提供下さい。
                </p>
              </div>
            </div>

            <Example 
              title="
                個人情報の定義
              "
              content="
                個人情報とは、個人に関する情報であり、¥nこのサイトを通じてお客様から収集させていただく、氏名、生年月日、性別、住所、電話番号、メールアドレス等、お客様個人を識別できる情報およびお客様個人の固有情報を意味します。
              "
            />
            <Example 
              title="
                個人情報の利用
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
                  当社はお客様より収集した個人データは適切に管理し、以下のいずれかに該当する場合以外は、お客様の同意なく、第三者に提供することはありません。<br/>
                  ・お客様の同意が得られている場合<br/>
                  ・お客様へのサービスや情報提供、またはお問い合わせに対する回答のため、当社の関係団体・権利者等に開示することが適切と判断される場合<br/>
                  ・業務を円滑かつ効率的に進めるため、当社と機密保持契約を締結している外部業者に、業務の取り扱いを委託する場合<br/>
                  ・統計的なデータ、アンケート調査など、お客様個人を識別することができない状態にして開示する場合<br/>
                  ・お客様の商品やサービスの代金決済のために、金融機関等に開示する場合<br/>
                  ・裁判所、警察等の公的機関からの要求があった場合、または法令等により開示が必要とされた場合<br/>
                </>
              }
            />
            <Example 
              title="
                個人情報の安全管理
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
                  当社は、当サイトからリンクする第三者のウェブサイトにおける個人情報の安全確保につきましては責任を負うことはできません。
                  それぞれのリンク先における個人情報の保護、管理につきましては、当該リンク先におけるプライバシーポリシー等をお客様ご自身で参照の上、ご確認下さい。
                </>
              }
            />
            <Example 
              title="
                個人情報保護の継続的な改善・維持
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
                  当社は個人情報の取り扱いに関して、個人情報保護法をはじめとする個人情報に関する法令及びその他の規範を遵守します。
                </>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="プライバシーポリシー" />

export default policy
