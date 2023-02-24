import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// import KayakSingle from '../svg/kayak-single'
// import KayakCouple from '../svg/kayak-couple'
import kayakCouple from "../../images/svg/front/intro-couple.svg"
import kayakSingle from "../../images/svg/front/intro-single.svg"
// import StuffHeader from "../svg/stuff-header"
import frontStuffHeader from "../../images/svg/front/stuff-header.svg"
import { BsCaretRightFill } from "react-icons/bs"
import Wave from '../svg/wave'

const Stuff = (props) => {

  let modalState = props.modalState

  return (
    <section id="stuff" className="relative bg-main-blue pb-20 mt-[-2px]">
      <img src={kayakCouple} className="bort1 absolute bottom-4 left-[3%] z-10 sm:left-[40%]" alt="カヤック2人のり" loading='lazy' />
      {/* <KayakCouple
        className="bort1 absolute bottom-4 left-[3%] z-10 sm:left-[40%]"
        alt="カヤック2人のり"
      /> */}
      <img src={kayakSingle} alt="カヤック１人のり" className="bort2 absolute bottom-4 left-[38%] sm:left-[54%] lg:left-[50%] z-0" loading='lazy' />
      {/* <KayakSingle
        className="bort2 absolute bottom-4 left-[38%] sm:left-[54%] lg:left-[50%] z-0"
        alt="カヤック1人のり"
      /> */}
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto mb-12">
          <h2 className="iso-target">
            <img src={frontStuffHeader} className="w-full h-auto" alt="Stuff スタッフ" loading='lazy' />
            {/* <StuffHeader
              alt="ワンオーシャンの特徴"
            /> */}
          </h2>
        </div>
        {/* <div className="w-full"> */}
          <div className="lg:flex lg:flex-row-reverse justify-evenly max-w-[1000px] mx-auto">
            <div className="relative max-w-[500px] mx-auto md:hidden">
              <div className="border-2 border-white w-[92%] h-[92%] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[12px] rounded-tr-none rounded-bl-none"></div>
              <StaticImage
                className="rounded-[12px] rounded-tr-none rounded-bl-none"
                src="../../images/stuff/stuff-owner.jpg"
                alt="ワンオーシャンオーナ徳門写真"
                width={500}
                formats={["auto", "webp", "avif"]}
              />
            </div>
            <div className="iso-target fadein-left relative pl-8 max-w-[500px] mx-auto hidden md:block md:py-8">
              <StaticImage
                className="rounded-[12px] rounded-tr-none rounded-bl-none"
                src="../../images/stuff/stuff-owner-pc.jpg"
                alt="PC版ワンオーシャンオーナ徳門写真"
                width={500}
                formats={["auto", "webp", "avif"]}
              />
              <svg 
                className="katakata absolute bottom-[100px] -right-[2rem]"
                alt="tokuji masanao"
                xmlns="http://www.w3.org/2000/svg" 
                width="160.153" height="219.31" 
                viewBox="0 0 160.153 219.31"><path d="M1991.578,1111.405a18.85,18.85,0,0,1,.16,7.6c.988-1.569,2.083-3.924,1.946-5.565,1.986,4.351,2.07,10.032-.131,17.252a7.364,7.364,0,0,0,2.755-2.665c.527,6.759-2.769,15.541-6.342,21.168a11.631,11.631,0,0,0,3.8-3.074c-.5,6.057-3.632,12.874-7.777,18.209,17.5-7.213,31.142-32.325,24.723-55.192,5.076,3.784,8.855,8.8,10.208,14.354a7.821,7.821,0,0,0,.709-4.784c3.7,4.2,6.188,11.513,6.622,17.277a13.452,13.452,0,0,0,1.939-5.113c2.837,5.678,3.989,13.459,3.33,20.567a16.389,16.389,0,0,0,1.983-3.616c2,5.847.943,16.622-2.263,24.634,21.524-21.572,18.169-57.439-15.877-76.757,4.612-.532,20.4,4.024,24.29,11.287.191-2,.181-3.786-1.085-5.491,5.173,4.471,10.67,11.351,12.636,18.394a12.648,12.648,0,0,0,.608-6.845c3.867,3.5,6.468,8.789,7.381,15.562a8.04,8.04,0,0,0,2.328-4.381c5.062,4.8,6.607,10.387,7.923,16.024,6.2-28.748-12.467-56.11-45.307-60.713,1.956-2.117,7.725-4.208,12.69-2.991a7.192,7.192,0,0,0-4.713-2.841c4.4-1.112,9.638-1.269,14.122.737a12.644,12.644,0,0,0-5.1-3.458,32.28,32.28,0,0,1,15.082,2.4,7.124,7.124,0,0,0-2.838-3.157c6.7-.33,11.146.6,15.341,2.827-16.657-14.435-40.416-17.535-57.518-5.338,2.012-20.909-12.552-39.936-33.382-47.143,4.026,2.519,7.055,5.9,10.119,11.872a7.12,7.12,0,0,0-4.154-.878,32.266,32.266,0,0,1,9.619,11.862,12.637,12.637,0,0,0-5.545-2.689c3.979,2.879,6.462,7.5,7.7,11.861a7.191,7.191,0,0,0-4.818-2.661c3.537,3.691,4.611,9.733,3.755,12.485-20.407-26.138-53.436-28.624-75.234-8.88,5.541-1.679,11.15-3.133,17.841-1.151a8.048,8.048,0,0,0-2.631,4.207c6.323-2.6,12.206-2.988,17.167-1.389a12.654,12.654,0,0,0-5.623,3.95c7.082-1.82,15.79-.5,22.249,1.747-2.11-.246-3.66.639-5.3,1.805,8.236-.263,20.075,11.131,21.921,15.392-33.753-19.826-66.493-4.8-74.413,24.629,5.335-6.783,14.141-13.082,20.2-14.278a16.329,16.329,0,0,0-2.139,3.523c5.826-4.125,13.14-7.018,19.476-7.4a13.447,13.447,0,0,0-3.459,4.236c5.208-2.506,12.789-4,18.274-2.9a7.822,7.822,0,0,0-3.79,3.007c5.486-1.606,11.72-.84,17.536,1.663-23.013,5.875-37.94,30.243-35.435,49.007,2.548-6.258,6.886-12.378,11.882-15.84a11.629,11.629,0,0,0-.762,4.83c3.086-5.907,9.044-13.152,15.161-16.075a7.356,7.356,0,0,0-.93,3.719c5.151-5.516,10.114-8.286,14.875-8.74-1.489.7-2.982,2.828-3.846,4.469a18.767,18.767,0,0,1,8.1-4.038c-.2.074-.388.154-.582.236a144.221,144.221,0,0,0-61.67,118.362q0,6.763.611,13.371a88.646,88.646,0,0,0,19.518-13.948l2.232-2.181q-.242-4.207-.245-8.477a143.964,143.964,0,0,1,44.1-103.876" transform="translate(-1912.474 -1020.576)" fill="#fff" fillRule="evenodd" />
              </svg>
            </div>
            <div className="text-white">
              <h3 className="iso-target fadein-opacity font-semibold text-[24px] text-center py-8">
                沖縄に来た貴重な時間で、<br />
                貴重な体験を提供したい。
              </h3>
              <h4 className="font-serif	font-semibold text-center relative text-shadow">
                <StaticImage
                  src="../../images/stuff/stuff-name-script.svg"
                  alt="tokujo masanao"
                  className="iso-target fadein-left delay-[300ms] absolute top-[2rem] left-1/4"
                />
                ワンオーシャン代表<br />
                徳門 正尚
              </h4>
              <p className="w-[80%] text-[18px] mx-auto my-12 max-w-[500px]">
                はじめまして！<br />
                Oneocean　徳門正尚ことtokuです！<br />
                <br />
                グランブルーに憧れてマリン業界に18才の時に足を踏み入れたのが
                Oneoceanの始まりだと思います。<br />
                <br />
                大学時代から本格的にダイビングのプロの修行をしていました。
                （一応ダイビング部の裏部長でした。海での仕切り担当）<br />
                <br />
                大人が本気で遊べば仕事になる。<br />
                <br />
                座右の銘は
                人生どう上手くメイクするか。<br />
                受け入れるより受け入れられろ。<br />
                <br />
                ここまで育ててくれた方々に感謝しています。
                <br />
                どうぞ応援宜しくお願いします！
              </p>
              <div className="flex justify-center">
                <button
                  onClick={(() => {
                    modalState(false)
                  })}
                  className="flex justify-center items-center font-semibold text-[14px] bg-white py-2 px-8 rounded-[8px] text-main-blue"
                >
                  <span>
                    もっと詳しく
                  </span>
                  <BsCaretRightFill />
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      <div className="pt-12">
        <Wave
          color="white"
        />
      </div>
    </section>
  )
}

export default Stuff
