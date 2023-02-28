import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import kayakScheduleHeader from "../../images/svg/trekking/trekking-schedule-header.svg"
import trekkingScheduleHeader from "../../images/svg/kayak/kayak-schedule-header.svg"
import yuiScheduleHeader from "../../images/svg/yui/yui-schedule-header.svg"
import muiScheduleHeader from "../../images/svg/mui/mui-schedule-header.svg"
import kayakReserveHeader from "../../images/svg/trekking/trekking-reserve-header.svg"
import trekkingReserveHeader from "../../images/svg/kayak/kayak-reserve-header.svg"
import yuiReserveHeader from "../../images/svg/yui/yui-reserve-buttom.svg"
import muiReserveHeader from "../../images/svg/mui/mui-reserve-buttom.svg"

const MenuSchedule = (props) => {

  let propsArry = props.schedulePics.length
  let color = props.color

  return (
    <section id="schedule" className='bg-gray-50'>
      <div className="section-container mb-16">
        <div className="iso-target pt-16 max-w-[500px] mx-auto">
          <h2>
            {
              color === "main-blue" && <img src={kayakScheduleHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "main-green" && <img src={trekkingScheduleHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "pink" && <img src={yuiScheduleHeader} className="" alt="ツアー内容" loading='lazy' />
            }
            {
              color === "navy" && <img src={muiScheduleHeader} className="" alt="ツアー内容" loading='lazy' />
            }
          </h2>
        </div>
        {/* SP TIME SCHEDULE */}
        <div className="mt-12 max-w-[500px] mx-auto lg:hidden">
          {
            props.menuSchedule.map((content, i) => {
              return (
                <div className="grid grid-cols-5 gap-2 mt-12" key={i}>
                  <div className="flex flex-col col-span-1 items-center -mb-12">
                    <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                    {
                      i !== (propsArry - 1) && (
                        <div className="border-2 border-dashed h-full"></div>
                      ) 
                    }
                  </div>
                  <div className="col-span-4 iso-target fadein-opacity">
                    <div className="">
                      <h3 className={`inline-block text-[22px] font-semibold border-b-4 border-${color}`}>
                        {content.title}
                      </h3>
                      <p className='pt-4 whitespace-pre-wrap'>
                        {content.text}
                      </p>
                      {
                        content.linkName && (
                          <Link
                            className={`bg-${color} text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block`}
                            to={content.url}
                          >
                            {content.linkName}
                          </Link>
                        )
                      }
                      {
                        content.aLinkName && (
                          <a
                            className={`bg-${color} text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block`}
                            href={content.url}
                          >
                            {content.aLinkName}
                          </a>
                        )
                      }
                      <GatsbyImage
                        className='my-4 rounded-[12px] aspect-[3/2]'
                        imgClassName='rounded-[12px]'
                        image={props.schedulePics[i]}
                        alt={content.alt}
                      />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        
        {/* PC TIME SCHEDULE */}
        <div id="pc-kayak-schedule" className="hidden lg:block mt-12 max-w-[800px] xl:max-w-[1000px] mx-auto">
          {
            props.menuSchedule.map((content, i) => {
              return (
                <div
                  className=
                  {
                    i === 0 ? "schedules flex gap-2 justify-between" : "schedules flex gap-2 justify-between -mt-[5rem]"
                  }
                  key={i}
                >
                  <div className="w-[42.5%]"></div>
                  <div className="w-[15%] flex flex-col items-center -mb-12">
                    <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                    {
                      i !== (propsArry - 1) && (
                        <div className="border-2 border-dashed h-[calc(100%-8rem)]"></div>
                      )
                    }
                  </div>
                  <div className="w-[42.5%] iso-target fadein-opacity">
                    <div className="">
                      <h3 className={`inline-block text-[22px] font-semibold border-b-4 border-${color}`}>
                        {content.title}
                      </h3>
                      <p className='pt-4'>
                        {content.text}
                      </p>
                      {
                        content.linkName && (
                          <Link
                            className={`bg-${color} text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block`}
                            to={content.url}
                          >
                            {content.linkName}
                          </Link>
                        )
                      }
                      {
                        content.aLinkName && (
                          <a
                            className={`bg-${color} text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block`}
                            href={content.url}
                          >
                            {content.aLinkName}
                          </a>
                        )
                      }
                      <GatsbyImage
                        className='my-4 rounded-[12px] aspect-[3/2]'
                        image={props.schedulePics[i]}
                        alt={content.alt}
                      />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <div className="flex justify-center pb-20">
        <Link
          className="flex justify-center items-center news-btn mt-12 py-2 px-8 text-white text-[14px] font-semibold rounded-[22px]"
          to={'/news-list'}
        >
          <span>
            ご予約はコチラ
          </span>
          <BsCaretRightFill
            size="1rem"
            className='ml-2'
          />
        </Link>
      </div> */}
      <div className="iso-target fadein-left flex justify-center w-full py-[4rem] text-center">
        <Link
          className='max-w-[300px] w-[60%] h-auto'
          to={'/reserve'}
        >
          {/* <ContactButtom/> */}
          {
              color === "main-blue" && <img src={kayakReserveHeader} className="" alt="ツアー内容" />
            }
            {
              color === "main-green" && <img src={trekkingReserveHeader} className="" alt="ツアー内容" />
            }
            {
              color === "pink" && <img src={yuiReserveHeader} className="" alt="ツアー内容" />
            }
            {
              color === "navy" && <img src={muiReserveHeader} className="" alt="ツアー内容" />
          }
        </Link>
      </div>
    </section>
  )
}

export default MenuSchedule
