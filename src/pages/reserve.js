import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'

import Seo from '../components/seo'
import Wave from '../components/svg/wave'
import Layout from '../components/layout'
import ReserveForm from '../components/reserve-form'
// import ReserveHeader from '../components/svg/reserve-header'
import reserveHeader from "../images/svg/reserve/reserve-header.svg"
import ReservePhoneSns from '../components/reserve-phone-sns'

import "./reserve.scss"

const contact = () => {
  return (
    <Layout>
      <section className="w-full relative">
        <div className="h-[400px] relative md:h-[500px] lg:h-[600px]">
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0 block"
            src='../images/reserve/reserve-hero.jpg'
            alt="ター滝トレッキング"
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
              ご予約はお電話、SNS、<br className='lg:hidden' />メールフォームより承ります
            </span>
            ご予約
            <div className="absolute rounded-[12px] w-[94%] md:w-[98%] h-[88%] border-white border top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
          </h2>
        </div>
      </section>
      <section id="reserve" className="bg-light-yellow pb-[8rem]">
        <div className="section-container">
          <div className="iso-target pt-16 max-w-[500px] mx-auto">
            <h2>
              {/* <ReserveHeader/> */}
              <img src={reserveHeader} alt="ご予約" loading='lazy' />
            </h2>
          </div>
          <p className='mx-auto my-4 text-center'>
            ご予約はお電話、SNSまたはコンタクトフォームより承ります。<br />
            <br/>
          </p>
          <div className="md:w-[80%] mx-auto mb-4 px-4 py-6 lg:p-8 rounded-lg mt-4 lg:mt-8 bg-white">
            <h3 className='text-main-blue lg:text-[18px] lg:pb-4 text-center font-bold pb-4'>
              申込みに関する注意事項
            </h3>
            <div className='w-[80%] mx-auto'>
              <p className='my-2'>
                ○キャンセルチャージについて
              </p>
              <ul>
                <li>
                  ・前日12:00までのキャンセルの場合はキャンセルチャージは発生しません。
                </li>
                <li>
                  ・コースご参加前日12:00以降はコース料金の50％、ご連絡無しのキャンセルの場合はコース料金全額お支払いいただきます。<br/>
                </li>
              </ul>
              <p className='my-2'>
                ○お支払いは、現地支払いの現金精算のみとなります。
              </p>
            </div>
            <h3 className='text-main-blue lg:text-[18px] lg:pb-4 text-center font-bold py-4'>
            お電話・SNSからのご予約について
            </h3>
            <div className='w-[80%] mx-auto'>
            <p className='my-2'>
              ○以下の事項をお電話、またはSNSダイレクトメールにてお伝え下さい。
              </p>
              <ul className=''>
                <li>
                  ・ご希望のコース:
                </li>
                <li>
                  ・希望日: <span>*必須 潮や天候の都合により変更して頂く場合がございますので、なるべく第３希望日時までご記載ください。</span>
                </li>
                <li>
                  ・代表者名: <span>*必須</span>
                </li>
                <li>
                  ・ご希望のコース: <span>*必須</span>
                </li>
                <li>
                  ・代表者電話番号: <span>*必須</span>
                </li>
                <li>
                  ・代表者メールアドレス: <span>*必須</span>
                </li>
                <li>
                  ・参加人数　大人:　子供:
                </li>
                <li>
                  ・参加者情報 1)お名前 2)年齢 3)性別 4)体重 5)足のサイズ 
                </li>
                <li>
                  ・健康面での不安
                </li>
                <li>
                  ・宿泊先
                </li>
                <li>
                  ・沖縄到着日
                </li>
                <li>
                  ・沖縄出発日
                </li>
                <li>
                  ・ワンオーシャンをどのようにお知りになりましたか？
                  1) YahooやGoogleなどの検索
                  2) 広告
                  3) ご紹介
                  4) その他
                </li>
                <li>
                  ・ご予約に関するご質問・お問い合せ
                </li>
              </ul>
              <br/>
            </div>
          </div>
          <ReservePhoneSns/>
          <ReserveForm />
        </div>
        <div
          className="lg:hidden"
        >
          <Wave
            color = "main-blue"
          />
        </div>
        <div
          className='hidden lg:block'
        >
          <Wave
            color = "white"
          />
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="ご予約ページ" />

export default contact
