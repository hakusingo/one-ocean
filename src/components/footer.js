import * as React from "react"
import { Link } from "gatsby"

import FooterLogo from "./svg/footer-logo"
import "./footer.scss"
import FooterLogoPc from "./svg/footer-logo-pc"

const footerSpLink = [
  {
    name: "ホーム",
    url: "/",
  },
  {
    name: "マングローブ",
    url: "/kayak",
  },
  {
    name: "トレッキング",
    url: "/trekking",
  },
  {
    name: "結プログラム",
    url: "/yui",
  },
  {
    name: "オリジナルムイツアー",
    url: "/mui",
  },
  {
    name: "ブログ",
    url: "/blog",
  },
  {
    name: "ご予約",
    url: "/reserve",
  },
  {
    name: "お問い合せ",
    url: "/contact",
  },
  {
    name: "注意事項",
    url: "/notes"
  },
  {
    name: "お知らせ",
    url: "/news"
  },
  {
    name: "プライバシーポリシー",
    url: "policy",
  }
]

const Footer = () => (
  <footer className="bg-main-blue md:bg-white relative z-10">
    <div id="footer-sp" className="text-white md:hidden">
      <h3 className="text-[1.4rem] font-serif font-semibold text-center pt-[2rem]">
        沖縄貸切自然体験<br/>
        アドベンチャーツアー
        <span className="font-zenmaru text-[2.4rem] block font-medium">
          OneOcean
        </span>
        <Link
          to={`/`}
          className="inline-block mx-auto mt-6">
          <FooterLogo/>
        </Link>
      </h3>
      <div className="">
        <ul>
          {
            footerSpLink.map((spLink, i) => {
              return(
                <li key={i}>
                  <Link
                    to={spLink.url}
                  >
                    { spLink.name }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="text-[22px] font-bold flex justify-center">
        <a href="tel:080-3968-0313" className="inline-block border-[3px] rounded-[28px] py-1 px-8 mb-8">
          Tel.090-4471-7311
        </a>
      </div>
      <div className="text-[12px] text-center font-semibold py-2">
        © {new Date().getFullYear()} &middot; one-ocean-toku.com All Rights reserved.
      </div>
    </div>

    <div id="footer-pc" className="hidden md:block overflow-x-hidden">
      <div className="py-8 grid grid-cols-12 px-[80px] max-w-[1500px] mx-auto">
        <div className="col-span-4 max-w-[420px]">
          <Link
            to={`/`}
          >
            <FooterLogoPc/>
          </Link>
          <div className="">
            <h3 className="pt-4 text-main-blue font-bold">
              沖縄自然体験アドベンチャーツアー
              ワンオーシャン
            </h3>
            <div className="pt-2">
              〒904-2312 沖縄県うるま市勝連平安名1199<br/>
              E-mail:info@one-ocean-toku.com<br/>
              Tel:090-4471-7311
            </div>
          </div>
        </div>
        <div className="footer-pc-right col-span-8 px-4">
          <ul className="lg:text-center flex flex-wrap justify-center">
            {
              footerSpLink.map((spLink, i) => {
                return(
                  <li key={i}>
                    <Link
                      to={spLink.url}
                    >
                      { spLink.name }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <p>
            ワンオーシャンでは、お客様一組一組に心から楽しんでツアーに参加して頂きたいと思っています。<br />
            ご要望・お問合せなどございましたら、ご遠慮無く、是非お気軽にご連絡くださいませ。
          </p>
        </div>
      </div>
    <div className="footer-pc-border w-full h-[14px]"></div>
    </div>
  </footer>
)

export default Footer
