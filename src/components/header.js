import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

import { RxCrossCircled } from "react-icons/rx"
import "./header.scss"
import headerLogo from "../images/svg/header/header-logo.svg"

import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { GoCalendar } from "react-icons/go"

const Header = () => {
  const spMenu = [
    {
      name: "ホーム",
      url: "/",
    },
    {
      name: "マングローブカヤック",
      url: "/kayak",
    },
    {
      name: "ター滝トレッキング",
      url: "/trekking"
    },
    {
      name: "結プログラム",
      url: "/yui"
    },
    {
      name: "オリジナルムイツアー",
      url: "/mui"
    },
    {
      name: "ご予約",
      url: "/reserve"
    },
    {
      name: "お問い合せ",
      url: "/contact"
    },

  ]

  // PCのメニューオープン時のデータ
  const frontSpMenu = [
    {
      name: "ホーム",
      url: "/",
    },
    {
      name: "マングローブカヤック",
      url: "/kayak",
    },
    {
      name: "ター滝トレッキング",
      url: "/trekking"
    },
    {
      name: "結プログラム",
      url: "/yui"
    },
    {
      name: "オリジナルムイツアー",
      url: "/mui"
    },
    {
      name: "ご予約",
      url: "/reserve"
    },
    {
      name: "お問い合せ",
      url: "/contact"
    },
    {
      name: "ブログ",
      url: "/blog"
    },
    {
      name: "お知らせ",
      url: "/news"
    },
  ]

  const pcMenuRight = [
    {
      name: "ブログ",
      url: "/blog"
    },
    {
      name: "お知らせ",
      url: "/news"
    },
    {
      name: "注意事項",
      url: "/notes"
    },
    {
      name: "プライバシーポリシー",
      url: "/policy"
    },
  ]

  // SPメニューオープンロジック
  const [ spMenuOpen, setSpMenuOpen ] = useState(false)
  const spMenuClick = () => {
    setSpMenuOpen((prevState) => !prevState)
  }
  // PCメニューオープンロジック
  const [ pcMenuOpen, setPcMenuOpen ] = useState(false)
  const pcMenuClick = () => {
    setPcMenuOpen((prevState) => !prevState)
  }

  // scrollイベント軽量ロジック
  function myThrottle(fn, delay) {
    let timerId;
    let lastExecTime = 0;
    return () => {
      const context = this;
      const args = arguments;
      let elapsedTime = performance.now() - lastExecTime;
      const execute = () => {
        fn.apply(context, args);
        lastExecTime = performance.now();
      }
      if (!timerId) {
        execute();
      }
      if (timerId) {
        clearTimeout(timerId);
      }
      if (elapsedTime > delay) {
        execute(); 
      } else {
        timerId = setTimeout(execute, delay);
      }
    }
  }

  // ヘッダーロゴ伸縮ロジック
  const [isWider, setWider] = useState(false)
  const toggleWider = () => {
    window.scrollY > 3 ? setWider(true) : setWider(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', myThrottle(()=>toggleWider(), 100), { passive: true })
    // インターセクションオブザーバー
    const options = {
      rootMargin: '-25% 0px'
    }
    const callback = (entries) => {
      entries.forEach( (entry) => {
        //監視対象の要素が領域内に入った場合の処理
        if (entry.isIntersecting) {
          //監視対象の要素（entry の target プロパティ）に active クラスを追加
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        } else { //監視対象の要素が領域外になった場合の処理
          //監視対象要素から active クラスを削除
        }
      });
    }
      const observer = new IntersectionObserver(callback, options); 
      //監視対象の要素（target クラスを指定した要素）を全て取得
      const targets = document.querySelectorAll('.iso-target');
      //全ての監視対象要素を observe() メソッドに指定
      targets.forEach( (elem) => {
        //observe() に監視対象の要素を指定
        observer.observe(elem);
      });
    },[])
    
  return (
  <div id="top" className="relative">

    {/* ヘッダー SP・PC共通 */}
    <header id="header" className="h-[60px] bg-main-blue md:h-[80px] fixed z-50 w-full shadow-xl">
      <div className="pl-4 pr-4 lg:pl-[60px] lg:pr-[60px] mx-auto flex justify-between h-full">
        <Link to={`/`}>
          <img id="header-logo-wide" className={isWider ? "wider w-[180px] h-auto lg:w-[240px]" : "w-[180px] h-auto lg:w-[240px]" } src={headerLogo} alt="ヘッダーロゴ" />
          {/* <HeaderLogo/> */}
        </Link>
        <div id="sp-menu" className="h-full flex items-center md:hidden">
          <a className="inline-block mr-3" href="https://www.instagram.com/one_ocean/">
            <svg
              alt="インスタグラムアイコン"
              xmlns="http://www.w3.org/2000/svg"
              width="27.256" 
              height="27.25" viewBox="0 0 27.256 27.25"><path d="M13.626,8.876a6.987,6.987,0,1,0,6.987,6.987A6.975,6.975,0,0,0,13.626,8.876Zm0,11.529a4.542,4.542,0,1,1,4.542-4.542A4.55,4.55,0,0,1,13.626,20.4Zm8.9-11.815a1.63,1.63,0,1,1-1.63-1.63A1.626,1.626,0,0,1,22.528,8.59Zm4.627,1.654a8.064,8.064,0,0,0-2.2-5.71,8.117,8.117,0,0,0-5.71-2.2c-2.25-.128-8.993-.128-11.243,0a8.106,8.106,0,0,0-5.71,2.2,8.091,8.091,0,0,0-2.2,5.71c-.128,2.25-.128,8.993,0,11.243a8.064,8.064,0,0,0,2.2,5.71A8.128,8.128,0,0,0,8,29.392c2.25.128,8.993.128,11.243,0a8.064,8.064,0,0,0,5.71-2.2,8.117,8.117,0,0,0,2.2-5.71c.128-2.25.128-8.987,0-11.237ZM24.249,23.9a4.6,4.6,0,0,1-2.59,2.59c-1.794.711-6.05.547-8.032.547s-6.245.158-8.032-.547A4.6,4.6,0,0,1,3,23.9c-.711-1.794-.547-6.05-.547-8.032S2.3,9.618,3,7.83a4.6,4.6,0,0,1,2.59-2.59c1.794-.711,6.05-.547,8.032-.547s6.245-.158,8.032.547a4.6,4.6,0,0,1,2.59,2.59c.711,1.794.547,6.05.547,8.032S24.96,22.107,24.249,23.9Z" transform="translate(0.005 -2.238)" fill="#fff" />
            </svg>
          </a>
          <a className="inline-block mr-3" href="https://line.me/ti/p/Tz2gy2mV1s">
            <svg
              alt="ラインアイコン"
              xmlns="http://www.w3.org/2000/svg" 
              width="27.25" 
              height="27.25" viewBox="0 0 27.25 27.25"><path d="M16.551,12.724v4.325a.192.192,0,0,1-.195.195h-.693a.2.2,0,0,1-.158-.079l-1.983-2.676v2.567a.192.192,0,0,1-.195.195h-.693a.192.192,0,0,1-.195-.195V12.73a.192.192,0,0,1,.195-.195h.687a.183.183,0,0,1,.158.085L15.462,15.3V12.73a.192.192,0,0,1,.195-.195h.693a.192.192,0,0,1,.2.189Zm-4.988-.195H10.87a.192.192,0,0,0-.195.195v4.325a.192.192,0,0,0,.195.195h.693a.192.192,0,0,0,.195-.195V12.724a.2.2,0,0,0-.195-.195ZM9.89,16.155H8V12.724A.192.192,0,0,0,7.8,12.53H7.111a.192.192,0,0,0-.195.195v4.325a.179.179,0,0,0,.055.134.205.205,0,0,0,.134.055h2.78a.192.192,0,0,0,.195-.195v-.693a.2.2,0,0,0-.189-.195ZM20.2,12.53h-2.78a.2.2,0,0,0-.195.195v4.325a.2.2,0,0,0,.195.195H20.2a.192.192,0,0,0,.195-.195v-.693a.192.192,0,0,0-.195-.195H18.309v-.73H20.2a.192.192,0,0,0,.195-.195v-.7a.192.192,0,0,0-.195-.195H18.309v-.73H20.2a.192.192,0,0,0,.195-.195v-.693a.2.2,0,0,0-.195-.195Zm7.05-5.31V24.573A4.954,4.954,0,0,1,22.281,29.5H4.927A4.958,4.958,0,0,1,0,24.531V7.177A4.958,4.958,0,0,1,4.969,2.25H22.323A4.954,4.954,0,0,1,27.25,7.219ZM23.5,14.677c0-4.44-4.452-8.053-9.921-8.053s-9.921,3.613-9.921,8.053c0,3.978,3.528,7.311,8.3,7.944,1.162.249,1.028.675.766,2.238-.043.249-.2.979.858.535a32.061,32.061,0,0,0,7.8-5.76A7.186,7.186,0,0,0,23.5,14.677Z" transform="translate(0 -2.25)" fill="#fff" />
            </svg>
          </a>
          {/* SPナビゲーションボタン */}
          <div id="sp-nav-button" role="presentation" onClick={spMenuClick} className="w-[42px] h-[46px] bg-white rounded-md rounded-tr-none relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-[40%] -translate-x-1/2">
              <div id="sp-button-line" className={`flex flex-col items-center justify-center ${ spMenuOpen ? "close" : "" }`}>
                <div className="w-[26px] h-[2px] bg-main-blue rounded-full"></div>
                <div className="w-[26px] h-[2px] bg-main-blue mt-[5px] rounded-full"></div>
                <div className="w-[26px] h-[2px] bg-main-blue mt-[5px] rounded-full"></div>
              </div>
              <div className="text-[10px] text-[700] text-main-blue pt-[2px]">
                MENU
              </div>
            </div>
          </div>
        </div>
        <div className="pc-menu hidden md:block h-full">
          <ul className="flex items-center h-full text-white">
            <li className="">
              <Link className="flex flex-col items-center lg:w-[100px]" to={`/`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29.055 28.231"><g transform="translate(0 0)"><path d="M570.166,120.265l-11.9-9.284a3.369,3.369,0,0,0-3.937,0l-11.838,9.277c-1.082.848-.87,1.541.471,1.541h2.874V136.2a2.39,2.39,0,0,0,2.383,2.383H564.5a2.39,2.39,0,0,0,2.383-2.383V121.8H569.7C571.039,121.8,571.25,121.111,570.166,120.265Z" transform="translate(-541.804 -110.348)" fill="#fff"/></g><g transform="translate(11.309 11.914)"><rect width="7.174" height="6.615" fill="#1b95d4"/><g transform="translate(1.048 1.071)"><line y2="4.472" transform="translate(2.562)" fill="none"/><line x2="5.078" transform="translate(0 2.236)" fill="none"/></g></g></svg>
                <p className="mt-1">ホーム</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center lg:w-[100px]" to={`/kayak`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 28.233 28.231"><g transform="translate(0)"><path d="M34.674,24.158a29.011,29.011,0,0,0,4.911-9.821l.4-1.427a2.42,2.42,0,0,0-2.314-3.08,2.37,2.37,0,0,0-.671.1l-1.427.4a29.2,29.2,0,0,0-9.821,4.911Z" transform="translate(-14.784 -6.893)" fill="#fff"/><path d="M19,33l4.643,4.643a1.219,1.219,0,0,0,1.674,0l.474-.474a1.193,1.193,0,0,0,0-1.674l-4.643-4.643a1.181,1.181,0,0,0-1.674,0L19,31.322a1.2,1.2,0,0,0-.348.837A1.179,1.179,0,0,0,19,33Z" transform="translate(-11.264 -17.142)" fill="#fff"/><path d="M4.494,27.733,4.1,29.16a2.4,2.4,0,0,0,2.98,2.98l1.427-.4a29.32,29.32,0,0,0,14.1-8.909L25.472,25.7a.922.922,0,0,0-.025.237l.02,2.193a1.177,1.177,0,0,0,.348.8L28.28,31.4a1.13,1.13,0,0,0,.721.343.548.548,0,0,0,.091.005.98.98,0,0,0,.691-.277L31.951,29.3a.972.972,0,0,0,.277-.781,1.13,1.13,0,0,0-.343-.721L29.42,25.328a1.14,1.14,0,0,0-.8-.343l-2.193-.025a.733.733,0,0,0-.232.03h-.005L11.25,10.047a.924.924,0,0,0,.025-.237L11.25,7.617a1.149,1.149,0,0,0-.343-.8L8.442,4.35a1.069,1.069,0,0,0-1.5-.071L4.766,6.452a.986.986,0,0,0-.272.781,1.13,1.13,0,0,0,.343.721L7.3,10.42a1.176,1.176,0,0,0,.8.348l2.193.02h.01a.812.812,0,0,0,.222-.03L13.4,13.632a29.344,29.344,0,0,0-8.909,14.1ZM14.542,17.05l4.643,4.643a2.118,2.118,0,0,1,0,2.995l-.474.474a2.118,2.118,0,0,1-2.995,0l-4.643-4.643a2.118,2.118,0,0,1,0-2.995l.474-.474a2.118,2.118,0,0,1,2.995,0Z" transform="translate(-4 -4.005)" fill="#fff"/></g></svg>
                <p className="mt-1">カヤック</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center lg:w-[100px]" to={`/trekking`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 23.495 32.142">
                  <path d="M510.878,456.337l4.869-1.069h0l.011,0a.665.665,0,0,0,.5-.8,5.52,5.52,0,0,1,.422-3.289,10.929,10.929,0,0,0,.526-1.825,11.913,11.913,0,0,0,.023-4.115,10.216,10.216,0,0,0-1.419-3.671,5.122,5.122,0,0,0-2.648-2.248,4.234,4.234,0,0,0-3.291.308,4.123,4.123,0,0,0-2.027,2.71,13.385,13.385,0,0,0-.323,4.677,21.27,21.27,0,0,0,.963,4.851,33.467,33.467,0,0,0,1.632,4.057A.666.666,0,0,0,510.878,456.337Zm-1.131-4.875a19.925,19.925,0,0,1-.9-4.549,12.129,12.129,0,0,1,.271-4.2,2.873,2.873,0,0,1,1.339-1.893,2.947,2.947,0,0,1,2.281-.24,3.835,3.835,0,0,1,1.945,1.7,8.879,8.879,0,0,1,1.232,3.192,10.606,10.606,0,0,1-.023,3.662,9.961,9.961,0,0,1-.469,1.607,7.154,7.154,0,0,0-.58,3.369l-3.728.818A30.558,30.558,0,0,1,509.747,451.462Z" transform="translate(-507.456 -439.115)" fill="#fff" /><path d="M732.909,870.074l-4.594-1.476h0a.664.664,0,0,0-.778.3,13.428,13.428,0,0,0-1.221,2.7,6.821,6.821,0,0,0-.318,2.66,3.218,3.218,0,0,0,.811,1.94,2.8,2.8,0,0,0,1.591.846,3.458,3.458,0,0,0,1.768-.176,3.758,3.758,0,0,0,1.911-1.574,8,8,0,0,0,.832-1.943,13.489,13.489,0,0,0,.459-2.587h0A.665.665,0,0,0,732.909,870.074Zm-1.274,2.907a6.689,6.689,0,0,1-.691,1.625,2.422,2.422,0,0,1-1.234,1.011,2.123,2.123,0,0,1-1.086.113,1.476,1.476,0,0,1-.842-.44,1.921,1.921,0,0,1-.462-1.159,5.517,5.517,0,0,1,.266-2.144,11.186,11.186,0,0,1,.841-1.957l3.561,1.144A11.442,11.442,0,0,1,731.635,872.981Z" transform="translate(-713.954 -844.947)" fill="#fff" /><path d="M761.222,574.518a4.123,4.123,0,0,0-1.852-2.832,4.234,4.234,0,0,0-3.263-.517,5.127,5.127,0,0,0-2.786,2.078,10.211,10.211,0,0,0-1.646,3.572,11.91,11.91,0,0,0-.238,4.109,10.919,10.919,0,0,0,.409,1.853,5.527,5.527,0,0,1,.214,3.313.666.666,0,0,0,.448.828l.008,0h0l4.792,1.374a.666.666,0,0,0,.78-.346,33.6,33.6,0,0,0,1.9-3.967,21.268,21.268,0,0,0,1.266-4.78A13.384,13.384,0,0,0,761.222,574.518Zm-1.291,4.5a19.953,19.953,0,0,1-1.187,4.483,30.582,30.582,0,0,1-1.584,3.365l-3.667-1.052a7.148,7.148,0,0,0-.365-3.4,9.966,9.966,0,0,1-.367-1.635,10.607,10.607,0,0,1,.207-3.656,8.888,8.888,0,0,1,1.433-3.109,3.829,3.829,0,0,1,2.047-1.568,2.946,2.946,0,0,1,2.263.381,2.873,2.873,0,0,1,1.217,1.973A12.144,12.144,0,0,1,759.931,579.023Z" transform="translate(-737.945 -563.782)" fill="#fff" /><path d="M573.163,742.27a.665.665,0,0,0-.757-.351h0l-4.678,1.182a.666.666,0,0,0-.5.707,13.469,13.469,0,0,0,.291,2.564,8.006,8.006,0,0,0,.708,1.993,3.755,3.755,0,0,0,1.808,1.691,3.454,3.454,0,0,0,1.753.286,2.8,2.8,0,0,0,1.639-.743h0a3.218,3.218,0,0,0,.933-1.886,6.813,6.813,0,0,0-.15-2.673A13.434,13.434,0,0,0,573.163,742.27Zm-.116,5.235a1.919,1.919,0,0,1-.533,1.126h0a1.48,1.48,0,0,1-.869.386,2.128,2.128,0,0,1-1.077-.182,2.422,2.422,0,0,1-1.167-1.088,6.7,6.7,0,0,1-.588-1.665,11.431,11.431,0,0,1-.24-1.825l3.627-.917a11.174,11.174,0,0,1,.717,2A5.519,5.519,0,0,1,573.047,747.505Z" transform="translate(-563.936 -725.246)" fill="#fff" />
                </svg>
                <p className="mt-1">トレッキング</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center lg:w-[100px]" to={`/yui`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 33.917 31.858"><path d="M3554.649,4226.937a2.515,2.515,0,0,0-2.523-2.2h-1.453a2.515,2.515,0,0,0-2.523,2.2c-.129.875-.569,3.735-.573,3.764a.688.688,0,0,0,.576.785.645.645,0,0,0,.105.009.689.689,0,0,0,.68-.584c0-.029.445-2.892.575-3.772,0-.008,0-.016,0-.025l.087,4.573L3549,4238.3a.89.89,0,0,0,1.773.163l.593-6.479h.068l.593,6.479a.89.89,0,0,0,.885.809.784.784,0,0,0,.083,0,.889.889,0,0,0,.8-.967l-.605-6.613.087-4.574,0,.025c.13.88.57,3.743.575,3.772a.689.689,0,0,0,.68.584.649.649,0,0,0,.105-.009.688.688,0,0,0,.576-.785C3555.218,4230.672,3554.778,4227.813,3554.649,4226.937Z" transform="translate(-3535.199 -4207.414)" fill="#fff"/><path d="M3588.51,4106.253a2.245,2.245,0,1,0-2.245,2.244A2.244,2.244,0,0,0,3588.51,4106.253Z" transform="translate(-3570.065 -4091.941)" fill="#fff"/><path d="M3295.1,3997.976a3.746,3.746,0,0,0-4.043-3.24h-2.185a20.754,20.754,0,0,1-4.562-.321c-1.494-.325-2.656-.645-3.277-.825a1.118,1.118,0,0,0-1.165-.273,32.965,32.965,0,0,1-3.677.959,22.27,22.27,0,0,1-4.72.32h-2.267a4.52,4.52,0,0,0-4.681,3.535c-.252,1.419-1.107,6.054-1.115,6.1a1.117,1.117,0,1,0,2.2.405c.008-.047.865-4.689,1.118-6.115a1.754,1.754,0,0,1,.1-.343l.141,7.341-.982,10.723a1.443,1.443,0,1,0,2.874.263l.961-10.5h.111l.962,10.5a1.443,1.443,0,0,0,1.435,1.311c.044,0,.088,0,.133-.006a1.443,1.443,0,0,0,1.305-1.568l-.982-10.723.167-8.7a19.055,19.055,0,0,0,3.7-.354,36.441,36.441,0,0,0,3.834-1c.651.189,1.85.518,3.409.858a16.394,16.394,0,0,0,3.095.34l.374,6.5-1.851,4.161a1.055,1.055,0,0,0,.964,1.484h.7l-.687,7.633a1.3,1.3,0,1,0,2.6.234l.709-7.867h.894l.709,7.867a1.3,1.3,0,0,0,1.3,1.187c.039,0,.079,0,.118-.005a1.3,1.3,0,0,0,1.181-1.415l-.688-7.633h.7a1.055,1.055,0,0,0,.964-1.484l-1.851-4.161.234-4.071c.482,1.9,1.627,5.3,1.683,5.468a.977.977,0,0,0,1.853-.625C3296.455,4002.657,3295.293,3999.094,3295.1,3997.976Z" transform="translate(-3263.392 -3986.008)" fill="#fff"/><circle cx="3.086" cy="3.086" r="3.086" transform="translate(2.12 4.364) rotate(-45)" fill="#fff"/><path d="M3819.346,3859.9c-.946-.451-1.4-1.55-1.981-1.877a4,4,0,0,0-2.165-.149,3.08,3.08,0,1,0,.3,1.328,3.039,3.039,0,0,0-.046-.511c.4.422.7,1.183,1.046,1.5.541.487,1.4.55,2.8.168A.244.244,0,0,0,3819.346,3859.9Z" transform="translate(-3785.571 -3854.84)" fill="#fff"/></svg>
                <p className="mt-1">結プログラム</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center lg:w-[100px]" to={`/mui`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29.902 27.13"><path d="M2552.4,193.17a113.1,113.1,0,0,1-27.948-.014.865.865,0,0,0-.954,1.041l.387,1.79a2.154,2.154,0,0,0,1.8,1.676c.159.023.317.044.476.066a92.054,92.054,0,0,0,24.541.022l.491-.071a2.148,2.148,0,0,0,1.781-1.672l.389-1.8A.864.864,0,0,0,2552.4,193.17Z" transform="translate(-2523.483 -193.149)" fill="#fff"/><path d="M2602.514,303.04h-1.787a.791.791,0,0,1-.791-.755l-.122-2.61a.594.594,0,0,1,.527-.617c.852-.1,1.56-.192,2.1-.272a1.778,1.778,0,0,0,1.092-.606.442.442,0,0,0-.028-.6l-.041-.041a.442.442,0,0,0-.367-.126,92.484,92.484,0,0,1-11.242.675h0a91.721,91.721,0,0,1-11.472-.713.439.439,0,0,0-.366.125h0a.445.445,0,0,0-.038.586,1.784,1.784,0,0,0,1.163.686q1.059.153,2.093.269a.593.593,0,0,1,.525.616l-.122,2.627a.791.791,0,0,1-.791.755h-1.787a1.036,1.036,0,0,0-1.036,1.036v.586a1.036,1.036,0,0,0,1.036,1.036h1.59a.791.791,0,0,1,.791.828l-.522,11.246a1.017,1.017,0,0,0,.989,1.064l1.218.032a1.018,1.018,0,0,0,1.044-1c.053-3.564.079-7.794.092-11.38a.791.791,0,0,1,.791-.788h9.47a.791.791,0,0,1,.791.788c.013,3.586.039,7.816.092,11.38a1.018,1.018,0,0,0,1.044,1l1.218-.032a1.017,1.017,0,0,0,.989-1.064l-.522-11.246a.791.791,0,0,1,.79-.828h1.591a1.036,1.036,0,0,0,1.035-1.036v-.586A1.036,1.036,0,0,0,2602.514,303.04Zm-15.453,0a.791.791,0,0,1-.791-.793c0-.911,0-1.691,0-2.29a.593.593,0,0,1,.634-.59,78.742,78.742,0,0,0,9.768.008.591.591,0,0,1,.627.591c0,.6,0,1.375,0,2.282a.791.791,0,0,1-.791.793Z" transform="translate(-2576.835 -291.737)" fill="#fff"/></svg>
                <p className="mt-1">ムイツアー</p>
              </Link>
            </li>
            <li className="">
              <Link className="flex flex-col justify-center items-center bg-white h-[58px] w-[88px] rounded-[14px]" to={`/reserve`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.546" height="21.52" viewBox="0 0 32.546 21.52"><path d="M202.031,1641.757a1.654,1.654,0,0,0-1.652-1.652H171.137a1.654,1.654,0,0,0-1.652,1.652v18.216a1.641,1.641,0,0,0,.164.718l0,0,.011.011a1.664,1.664,0,0,0,.735.741l.02.021.007-.007a1.641,1.641,0,0,0,.718.165h29.242a1.641,1.641,0,0,0,.718-.165l.007.007.02-.021a1.664,1.664,0,0,0,.735-.741l.011-.011,0,0a1.641,1.641,0,0,0,.164-.718Zm-15.932,9.9a.566.566,0,0,1-.682,0l-13.77-10.461h28.266Zm-15.526-9.9s0-.008,0-.013l10.295,7.821-10.3,10.21Zm.777,18.78,10.393-10.307,3.015,2.291a1.657,1.657,0,0,0,2,0l3.02-2.287,10.389,10.3Zm19.3-10.967,10.29-7.792v18Z" transform="translate(-169.485 -1640.105)" fill="#1ea4d9"/></svg>
                <p className="text-main-blue text-[14px] mt-1 font-bold">ご予約</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* SP版予約・電話ボタン Sticky */}
      <div id="sp-bottom-contact" className={`absolute bg-light-blue bg-opacity-[0.8] text-white top-[calc(100vh-60px)] transition delay-100 left-0 h-[60px] w-full grid grid-cols-2 sm:hidden ${isWider ? "" : "opacity-0 invisible"}`}>
        <div className="w-full h-full flex justify-center items-center">
          <a
            href="tel:090-4471-7311"
            className="flex border border-white items-center justify-center gap-4 w-[96%] h-[80%] text-[18px] rounded-lg bg-main-blue"
          >
            <BsFillTelephoneOutboundFill
              className="align-middle"
            />
            <div>
              お電話
            </div>
          </a>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Link
            className="flex border border-white items-center justify-center gap-4 w-[96%] h-[80%] text-[18px] rounded-lg bg-main-blue"
            to="/reserve"
          >
            <GoCalendar
              className="align-middle"
            />
            <div className="align-middle">
              ご予約
            </div>
          </Link>
        </div>
      </div>
    </header>

    <div id="sp-menu-cover" role="presentation" onClick={spMenuClick} className={`md:hidden fixed top-[60px] left-0 w-[100%] h-[calc(100vh-60px)] bg-gray-700 z-40 ${spMenuOpen ? "visible opacity-80" : ""}`}>
    </div>
    <div id="sp-menu-open" className={`md:hidden fixed top-[60px] left-0 bg-white w-[76%] z-40 h-[calc(100vh-60px)] ${spMenuOpen ? "translate-x-0 visible" : ""}`}>
      <ul className="text-center text-main-blue absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[55%] whitespace-nowrap text-[22px]">
        {
          frontSpMenu.map((menu, i) => {
            return (
              <li className="py-[0.6rem]" key={i}>
                <Link
                  to={menu.url}
                >
                  {menu.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
    {/* PCサイドバー左 */}
    <div id="sidebar-left" className="w-[60px] h-[calc(100vh-80px)] top-[80px] left-0 bg-white z-40 hidden md:block fixed shadow-2xl">
      <div id="sidebar-left-phone" className="mt-[106px] absolute top-0 whitespace-nowrap left-1/2 -translate-x-1/2 rotate-[-90deg] text-[22px] text-main-blue font-medium">
        <div className="flex whitespace-nowrap gap-x-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15.398 15.397"><path d="M14.958,10.88,11.59,9.437a.722.722,0,0,0-.842.208L9.256,11.467A11.147,11.147,0,0,1,3.928,6.138L5.75,4.646A.72.72,0,0,0,5.958,3.8L4.514.436A.727.727,0,0,0,3.687.018L.559.74a.722.722,0,0,0-.559.7A13.953,13.953,0,0,0,13.954,15.4a.722.722,0,0,0,.7-.559l.722-3.128a.73.73,0,0,0-.421-.83Z" fill="#1ea4d9"/></svg>
          <p>:090-4471-7311</p>
        </div>
      </div>
      <div role="presentation" onClick={pcMenuClick} id="sidebar-left-menu"  className="will-change-transform animate-pulse cursor-pointer absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] font-semibold text-main-blue">
        MENU
        <div id="menu-button-cross" className={`absolute -top-[13px] w-[50px] h-[50px] bg-white grid place-items-center transition delay-200 ease-in-out ${pcMenuOpen ? "" : "scale-0" }`}>
          <RxCrossCircled
            className="w-[45px] h-[45px]"
          />
        </div>
      </div> 
      <div className="w-full flex justify-center mt-auto h-full items-end pb-8">
        <div className="">
          <div className="">
            <a href="https://line.me/ti/p/Tz2gy2mV1s">
              <svg xmlns="http://www.w3.org/2000/svg" width="27.25" height="27.25" viewBox="0 0 27.25 27.25"><path d="M16.551,12.724v4.325a.192.192,0,0,1-.195.195h-.693a.2.2,0,0,1-.158-.079l-1.983-2.676v2.567a.192.192,0,0,1-.195.195h-.693a.192.192,0,0,1-.195-.195V12.73a.192.192,0,0,1,.195-.195h.687a.183.183,0,0,1,.158.085L15.462,15.3V12.73a.192.192,0,0,1,.195-.195h.693a.192.192,0,0,1,.2.189Zm-4.988-.195H10.87a.192.192,0,0,0-.195.195v4.325a.192.192,0,0,0,.195.195h.693a.192.192,0,0,0,.195-.195V12.724a.2.2,0,0,0-.195-.195ZM9.89,16.155H8V12.724A.192.192,0,0,0,7.8,12.53H7.111a.192.192,0,0,0-.195.195v4.325a.179.179,0,0,0,.055.134.205.205,0,0,0,.134.055h2.78a.192.192,0,0,0,.195-.195v-.693a.2.2,0,0,0-.189-.195ZM20.2,12.53h-2.78a.2.2,0,0,0-.195.195v4.325a.2.2,0,0,0,.195.195H20.2a.192.192,0,0,0,.195-.195v-.693a.192.192,0,0,0-.195-.195H18.309v-.73H20.2a.192.192,0,0,0,.195-.195v-.7a.192.192,0,0,0-.195-.195H18.309v-.73H20.2a.192.192,0,0,0,.195-.195v-.693a.2.2,0,0,0-.195-.195Zm7.05-5.31V24.573A4.954,4.954,0,0,1,22.281,29.5H4.927A4.958,4.958,0,0,1,0,24.531V7.177A4.958,4.958,0,0,1,4.969,2.25H22.323A4.954,4.954,0,0,1,27.25,7.219ZM23.5,14.677c0-4.44-4.452-8.053-9.921-8.053s-9.921,3.613-9.921,8.053c0,3.978,3.528,7.311,8.3,7.944,1.162.249,1.028.675.766,2.238-.043.249-.2.979.858.535a32.061,32.061,0,0,0,7.8-5.76A7.186,7.186,0,0,0,23.5,14.677Z" transform="translate(0 -2.25)" fill="#333"/></svg>
            </a>
          </div>
          <div className="pt-4">
            <a
              href="https://www.instagram.com/one_ocean/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="27.256" height="27.25" viewBox="0 0 27.256 27.25"><path d="M13.626,8.876a6.987,6.987,0,1,0,6.987,6.987A6.975,6.975,0,0,0,13.626,8.876Zm0,11.529a4.542,4.542,0,1,1,4.542-4.542A4.55,4.55,0,0,1,13.626,20.4Zm8.9-11.815a1.63,1.63,0,1,1-1.63-1.63A1.626,1.626,0,0,1,22.528,8.59Zm4.627,1.654a8.064,8.064,0,0,0-2.2-5.71,8.117,8.117,0,0,0-5.71-2.2c-2.25-.128-8.993-.128-11.243,0a8.106,8.106,0,0,0-5.71,2.2,8.091,8.091,0,0,0-2.2,5.71c-.128,2.25-.128,8.993,0,11.243a8.064,8.064,0,0,0,2.2,5.71A8.128,8.128,0,0,0,8,29.392c2.25.128,8.993.128,11.243,0a8.064,8.064,0,0,0,5.71-2.2,8.117,8.117,0,0,0,2.2-5.71c.128-2.25.128-8.987,0-11.237ZM24.249,23.9a4.6,4.6,0,0,1-2.59,2.59c-1.794.711-6.05.547-8.032.547s-6.245.158-8.032-.547A4.6,4.6,0,0,1,3,23.9c-.711-1.794-.547-6.05-.547-8.032S2.3,9.618,3,7.83a4.6,4.6,0,0,1,2.59-2.59c1.794-.711,6.05-.547,8.032-.547s6.245-.158,8.032.547a4.6,4.6,0,0,1,2.59,2.59c.711,1.794.547,6.05.547,8.032S24.96,22.107,24.249,23.9Z" transform="translate(0.005 -2.238)" fill="#333"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* PCサイドバー右 */}
    <div className="shadow-2xl w-[60px] h-[calc(100vh-80px)] top-[80px] right-0 bg-white z-40 hidden md:block fixed">
      <div className="rotate-90 whitespace-nowrap h-full flex justify-center items-center text-main-blue">
        © {new Date().getFullYear()} &middot; one-ocean-toku.com All Rights reserved.
      </div>
    </div>



    {/* PCメニューオープン時 */}
    <div className={`hidden md:block transition delay-200 ease-in-out fixed top-[80px] left-[60px] right-[60px] bg-white z-[40] h-[calc(100vh-80px)] ${pcMenuOpen ? "" : "opacity-0 invisible" }`}>
      <div className="grid grid-cols-12 place-items-center h-full w-[80%] max-w-[1200px] mx-auto">
        <div className="col-span-6">
          <div className="">
            <ul className="front-pc-menu-left text-[32px] font-bold text-main-blue">
              {
                spMenu.map((menu, i) => {
                  return (
                    <li key={i} className="mb-4">
                      <Link
                        to={menu.url}
                      >
                        { menu.name }
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/* PCメニュー右側 */}
        <div className="col-span-6 front-menu-right relative mb-4 font-bold text-main-blue">
          <ul className="text-[22px] text-center">
            {
              pcMenuRight.map((menu, i) => {
                return (
                  <li key={i} className="font-bold mb-4 text-main-blue">
                    <Link
                      to={menu.url}
                    >
                      { menu.name }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="h-auto mx-auto px-8 pt-4 pb-6 bg-main-blue mt-[8rem] rounded-lg">
            <div className="text-white text-right">
              <h2 className="text-[34px]">
                OneOcean
              </h2>
              <p className="text-[12px]">
                〒904-2312 沖縄県うるま市勝連平安名1199<br/>
              </p>
              <div className="text-[22px] border-t border-b font-bold py-1 my-1">
                TEL 090-4471-7311
              </div>
              <p className="text-[12px] whitespace-nowrap">
                https//one-ocean-toku.com<br/>
                info@one-ocean-toku.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Header