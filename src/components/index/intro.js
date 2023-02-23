import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Mangrove from '../svg/mangrove'
import Wave from '../svg/wave'
import KayakSingle from '../svg/kayak-single'
import KayakCouple from '../svg/kayak-couple'

const Intro = () => {
  return (
    <section id="front-intro" className="relative overflow-hidden">
      <div className="">
        <KayakCouple
          className="bort1 absolute bottom-4 left-[3%] z-10 sm:left-[40%]"
          alt="カヤック2人のり"
        />
        <KayakSingle
          className="bort2 absolute bottom-4 left-[38%] sm:left-[54%] lg:left-[50%] z-0"
          alt="カヤック1人のり"
        />
        <Mangrove
          className="absolute -bottom-2 -right-[10%] sm:right-0 md:right-[10%] -z-10 h-[188px] w-auto md:h-[260px] md:w-[250px] lg:h-[300px] lg:w-[290px]"
        />
      </div>
      <div className="">
        <Wave
          color="blue"
        />
      </div>
      <div className="pt-[4rem] pl-4 pr-4 pb-[12rem] sm:pb-[8rem] relative sm:flex justify-evenly max-w-[1380px] h-auto w-full mx-auto lg:gap-8">
        <div className="">
          <svg
            className="katakata absolute right-[10%] z-10 sm:-z-10"
            xmlns="http://www.w3.org/2000/svg" 
            width="153.511" height="69.163" 
            viewBox="0 0 153.511 69.163">
            <title>２匹の鳥</title>
            <g transform="translate(-241.205 -979.254)">
            <g transform="matrix(0.985, -0.174, 0.174, 0.985, 241.205, 987.858)">
            <path d="M38.43,10.944C37.558,4.068,34.074-.175,26.993.005,21.746.029,7.61,2.889,6.7,7.983c.434,1.809,16.824,2.04,18.969,5.546,3.889,5.628-10.956,5.444-14.966,5.857-5.047.717-17.292,3.32-6.182,4.042,8.062.523,20.743-2.886,21.885.1.73,3.933-5.476,6.144-8.819,7.674-4.145,1.9-9.285,2.563-9.72,4.314-1.189,4.8,17.371,3.668,20.141,2.863,9-2.617,14.983-4.757,15.036-14.908-.113-2.968-2.712-4.282-.691-6.371.493-.892,8.008-2.523,7.128-3.038-3.16-1.843-6.639-2.141-9.363-2.474Z" transform="translate(0 0)" fill="#1ea4d9" /><path d="M2.772,3.411C2.931,2.538,1.695-1.246.244.418c-.924,1.1.986,3.364,2.132,3.03Z" transform="translate(29.623 3.18)" fill="#fff" /><path d="M2.659,3.908C2.507,2.433,1.953.523.419,0-.7,1.845.53,4.663,2.86,4.123Z" transform="translate(24.457 3.529)" fill="#fff" /><path d="M1.855.464c.623,1.2,1.3,6.472-1.189,4.569C-.962,3.712.776,1.134,1.827,0Z" transform="translate(35.191 25.827)" fill="#fff" /><path d="M1.865,4.586c.289-.914,1.264-5.868-.9-4.271C-.066,1.03-.755,5.694,1.5,4.9Z" transform="translate(28.383 30.503)" fill="#fff" /><path d="M.811,4.662c.816-.516,2.1-4.1.692-4.654C.337-.207-.7,3.824.613,4.546Z" transform="translate(21.753 32.167)" fill="#fff" /><path d="M1.594,2.807C1.88,1.894,2.768-.4.695.062-.453.393-.134,3.654,1.32,2.955Z" transform="translate(15.445 33.764)" fill="#fff" /><path d="M2.731,2.579C2.728,1.613.859-1.02.173.423-.642,1.9,1.638,2.62,2.514,2.779Z" transform="translate(18.443 4.374)" fill="#fff" /><path d="M1.228.922c-.156-2.44-2.673.777-.016.419Z" transform="translate(13.698 5.913)" fill="#fff" /></g><g transform="matrix(0.985, -0.174, 0.174, 0.985, 328.373, 1002.464)"><path d="M45.865,13.062C44.824,4.854,40.667-.209,32.216.007,25.953.034,9.082,3.447,7.994,9.528c.518,2.16,20.079,2.434,22.639,6.619,4.641,6.716-13.077,6.5-17.861,6.99C6.747,23.992-7.865,27.1,5.393,27.96c9.621.624,24.758-3.444,26.119.115.871,4.694-6.535,7.333-10.526,9.158C16.04,39.5,9.9,40.293,9.388,42.383,7.969,48.108,30.118,46.759,33.426,45.8c10.74-3.122,17.883-5.676,17.945-17.791-.135-3.544-3.236-5.113-.825-7.6.587-1.066,9.557-3.012,8.507-3.628-3.771-2.2-7.924-2.554-11.174-2.951Z" transform="translate(0 0)" fill="#1ea4d9" /><path d="M3.307,4.072C3.5,3.028,2.022-1.487.292.5c-1.1,1.309,1.176,4.013,2.544,3.615Z" transform="translate(35.355 3.796)" fill="#fff" /><path d="M3.174,4.663C2.994,2.9,2.331.623.5,0-.837,2.2.633,5.565,3.414,4.922Z" transform="translate(29.188 4.213)" fill="#fff" /><path d="M2.214.554C2.959,1.986,3.761,8.277.795,6.007-1.149,4.429.928,1.354,2.18,0Z" transform="translate(41.999 30.825)" fill="#fff" /><path d="M2.225,5.472c.345-1.09,1.508-7-1.069-5.1C-.079,1.229-.9,6.8,1.791,5.851Z" transform="translate(33.875 36.405)" fill="#fff" /><path d="M.966,5.565c.976-.613,2.5-4.888.827-5.555C.4-.245-.838,4.565.731,5.428Z" transform="translate(25.961 38.39)" fill="#fff" /><path d="M1.9,3.349C2.244,2.261,3.3-.481.828.073-.54.47-.16,4.36,1.575,3.526Z" transform="translate(18.433 40.297)" fill="#fff" /><path d="M3.259,3.078C3.255,1.926,1.024-1.216.206.5-.766,2.27,1.955,3.127,3,3.317Z" transform="translate(22.012 5.22)" fill="#fff" />
            <path d="M1.466,1.1c-.186-2.912-3.191.927-.019.5Z" transform="translate(16.348 7.057)" fill="#fff" />
            </g></g>
          </svg>
          <div className="flex justify-center">
            <StaticImage
              layout='constrained'
              className="iso-target max-w-[400px] w-full h-auto"
              src="../../images/intro/intro-hero.jpg"
              alt="ター滝ツアーを楽しむ親子"
              width={400}
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="logo-slim-target mt-8 relative sm:pb-20 md:w-[60%]">
          <div className="">
            <svg
              className="absolute right-0 top-4 h-[68px] w-[68px]"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.051 68.478"
            >
              <title>水玉模様 小</title>
              <g transform="translate(-343.949 -1453.476)"><g transform="translate(343.949 1453.476)" opacity="0.131"><path d="M1432.9,145.106c-5.94-25.034-28.186-32.835-41.742-29.411s-26.126,18.024-25.179,36.652c3.29,20.665,16.583,34.356,35.682,30.373C1419.137,178.122,1438.836,170.141,1432.9,145.106Z" transform="translate(-1365.925 -114.932)" fill="#5ce3e8" /><path d="M1446.6,223.486c16.217-4.622,23.267-21.737,17.528-38.736-6.719-14.516-25.683-11.607-31.865-10.68s-31.229,29.737-20.839,42.642C1419.772,227.086,1431.373,226.993,1446.6,223.486Z" transform="translate(-1401.448 -163.063)" fill="#2ea7e0" /><path d="M1444.923,160.208c-17.592-3.344-32.4,2.765-34.6,18.192-1.248,14.386,8.987,29.468,21.469,33.972s35.525-17.216,35.542-23S1460.209,164.734,1444.923,160.208Z" transform="translate(-1402.515 -151.598)" fill="#fff" opacity="0.75" /></g></g>
            </svg>
            <svg
              className="absolute bottom-[180px] w-[180px] h-[180px]"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.051 68.478"
            >
              <title>水玉模様 大</title>
              <g transform="translate(-343.949 -1453.476)"><g transform="translate(343.949 1453.476)" opacity="0.131"><path d="M1432.9,145.106c-5.94-25.034-28.186-32.835-41.742-29.411s-26.126,18.024-25.179,36.652c3.29,20.665,16.583,34.356,35.682,30.373C1419.137,178.122,1438.836,170.141,1432.9,145.106Z" transform="translate(-1365.925 -114.932)" fill="#5ce3e8" /><path d="M1446.6,223.486c16.217-4.622,23.267-21.737,17.528-38.736-6.719-14.516-25.683-11.607-31.865-10.68s-31.229,29.737-20.839,42.642C1419.772,227.086,1431.373,226.993,1446.6,223.486Z" transform="translate(-1401.448 -163.063)" fill="#2ea7e0" /><path d="M1444.923,160.208c-17.592-3.344-32.4,2.765-34.6,18.192-1.248,14.386,8.987,29.468,21.469,33.972s35.525-17.216,35.542-23S1460.209,164.734,1444.923,160.208Z" transform="translate(-1402.515 -151.598)" fill="#fff" opacity="0.75" /></g></g>
            </svg>
            <h3 className="iso-target fadein-opacity text-[24px] font-bold text-center lg:hidden">
              <span>
                最高の思い出と、最高の時間を!!
              </span>
            </h3>
            <h3 className="iso-target fadein-opacity fadein-opacity text-[32px] font-bold text-center pt-8 hidden lg:block lg:text-left">
              <span>
                いっしょに最高の思い出と、<br className='xl:hidden'/>最高の時間をつくろう!!
              </span>
            </h3>
            <div className="flex justify-center lg:justify-start">
              <p className="iso-target fadein-opacity mt-8 leading-[28px] w-[90%] max-w-[400px] lg:max-w-[600px] lg:text-[18px]">
                ワンオーシャンではお子様連れやカップル、
                親子３世代でのツアーなど、幅広くお客様のご要望に
                お答えするツアーをご用意しております。<br />
                <br />
                完全貸切となっていますので、プライベートでゆったり安心してご利用頂けます。<br />
                <br />
                ２０年以上の経験のある、自然大好きな沖縄出身のベテランガイドが同行します。<br />
                <br />
                さあ、ワンオーシャンで沖縄を心の底から満喫しましょう！！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
