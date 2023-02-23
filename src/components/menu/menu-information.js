import React from 'react'
import Wave from '../svg/wave'
import { Link } from 'gatsby'

// import KayakInfoHeader from '../svg/kayak-info-header'
import { BsCaretRightFill } from "react-icons/bs"

const MenuInformation = (props) => {
  let color = props.color
  let MenuInfoHeader = props.menuInfoHeader

  return (
    <section id="menu-info" className=''>
      <div className="section-container">
        <div className="pt-16 max-w-[500px] mx-auto">
          <h2 className='iso-target'>
            <MenuInfoHeader
              alt="詳細情報"
            />
          </h2>
          <p className='fadein-opacity mt-8 w-[80%] mx-auto text-[14px] mx-w-[400px]'>
            ワンオーシャンでは、お客様のご要望に答えるツアーもご用意しております。<br />
            自然相手のツアーでもありますので、安心安全なツアーにするために、時間的な変更もございます。<br />
            お気軽にお問合せ、ご質問くださいませ。
          </p>
        </div>
        <div className="mt-12 max-w-[500px] lg:max-w-[800px] mx-auto">
          <div className={`menu-infomation rounded-tl-[12px] rounded-tr-[12px] bg-${color} text-white px-4`}>
            <h3 className='py-2 text-[26px] font-medium'>
              Information
            </h3>
          </div>
          <table className='w-full'>
            <tbody>
              {
                props.MenuInfo.map((content, i) => (
                  <tr className='grid grid-cols-6 w-full' key={i}>
                    <th className='p-4 border col-span-2 text-left font-normal'>
                      {content.title}
                    </th>
                    {
                      content.muiPrice ? (
                        <td id="mui-info" className='p-4 border col-span-4'>
                          <p className='pb-2 iso-target fadein-opacity'>
                            沖縄の拝所の歴史がわかる<br />
                            <span className='text-navy'>
                            ☆伊計島・御先世コース（ウサチユコース）☆<br />
                            </span>
                            １名様 8,000円　３名〜５名 6,000円
                          </p>
                          <hr/>
                          <p className='py-2 iso-target fadein-opacity'>
                            Instagramに上げた、竜宮神シリーズからここへ行きたいをピックアップ可能!!<br />
                            <span className='text-navy'>
                            ☆龍宮神巡りコース☆<br />
                            </span>
                            １名様 8,000円　３名〜５名 6,000円
                          </p>
                          <hr/>
                          <p className='pt-2 iso-target fadein-opacity'>
                            こことここ一緒に行きたい!!オーダーメイド制<br />
                            <span className='text-navy'>
                            ☆おまかせムイツアー☆<br />
                            </span>
                            料金要相談
                          </p>
                        </td>
                      ) : (
                        <td className='p-4 border col-span-4 whitespace-pre-wrap'>
                          {content.desc}
                          {
                            content.aLinkName && (
                              <div className="flex justify-center">
                                <a 
                                  className={`font-semibold rounded-[12px] whitespace-nowrap flex items-center bg-${color} text-[14px] text-white my-2 py-2 px-4`}
                                  href={content.url}
                                >
                                  <span>{content.aLinkName}</span>
                                  <BsCaretRightFill
                                    className='h-4 w-4'
                                  />
                                </a>
                              </div>
                            )
                          }
                          {
                            content.linkName && (
                              <div className="flex justify-center">
                                <Link
                                  className={`font-semibold rounded-[12px] whitespace-nowrap flex items-center bg-${color} text-[14px] text-white my-2 py-2 px-4`}
                                  to={content.url}
                                >
                                  <span>{content.linkName}</span>
                                  <BsCaretRightFill
                                    className='h-4 w-4'
                                  />
                                </Link>
                              </div>
                            )
                          }
                        </td>
                      )
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-[6rem] relative pb-[6rem]'>
        <Wave
          color = "gray"
        />
      </div>
    </section>
  )
}

export default MenuInformation
