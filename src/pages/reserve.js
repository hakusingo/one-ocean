import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'

import Seo from '../components/seo'
import Wave from '../components/svg/wave'
import Layout from '../components/layout'
import ReserveForm from '../components/reserve-form'
import ReserveHeader from '../components/svg/reserve-header'
import ReservePhoneSns from '../components/reserve-phone-sns'

const contact = () => {
  return (
    <Layout>
      <section className="w-full relative">
        <div className="h-[340px] relative md:h-[400px] lg:h-[600px]">
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0 md:hidden"
            src='../images/reserve/reserve-hero.jpg'
            alt="ター滝トレッキング写真"
            objectPosition="50% 30%"
            quality={90}
          />
          <StaticImage
            className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
            src='../images/reserve/reserve-hero.jpg'
            alt="ター滝トレッキング写真"
            objectPosition="50% 80%"
            quality={90}
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
              <ReserveHeader/>
            </h2>
            <p className='w-[80%] mx-auto my-4'>
              ご予約はお電話、SNSまたはコンタクトフォームより承ります。<br />
              <br/>
              <span className='text-[14px]'>
                ※こちらはお問合わせのページになります、ご予約は下記のリンク先よりお願い致します。
              </span>
            </p>
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
