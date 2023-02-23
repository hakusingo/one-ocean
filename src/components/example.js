import React from 'react'

const Example = (props) => {

  return (
    <div className="">
      <div className="my-12">
        <h3 className='text-main-blue text-[22px] font-bold'>
          {props.title}
        </h3>
        <div>
          <div className='h-[.1px] w-full bg-main-blue'></div>
          <div className='h-[2px] w-full bg-main-blue'></div>
        </div>
        <p className='mt-2'>
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default Example
