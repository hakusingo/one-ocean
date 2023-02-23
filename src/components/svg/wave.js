import React from 'react'

const Wave = ( props ) => {

  let color

  if(props.color === "blue") {
    color = "#D8F7FF"
  } else if(props.color === "yellow") {
    color = "#FEFCE6"
  } else if(props.color === "white") {
    color = "#FFFFFF"
  } else if(props.color === "main-blue") {
    color = "#1EA4D9"
  } else if(props.color === "gray") {
    color = "#F9FAFB"
  }

  return (
    <>
      <svg 
        className="absolute bottom-0 z-20 h-auto w-full sm:hidden"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        // width="549" 
        // height="48" 
        viewBox="0 0 549 48"
      ><defs><clipPath id="a"><rect width={549} height={48} transform="translate(-19574 -3692)" fill="#fff" /></clipPath></defs><g transform="translate(19574 3692)" clipPath="url(#a)"><path d="M22225,5434.506v-27.423c34.15,0,34.15-20.082,68.3-20.082s34.15,20.082,68.307,20.082,34.145-20.082,68.3-20.082,34.145,20.082,68.295,20.082,34.15-20.082,68.3-20.082,34.148,20.082,68.3,20.082S22668.945,5387,22703.1,5387s34.15,20.082,68.3,20.082,34.15-20.082,68.3-20.082,34.15,20.082,68.3,20.082v27.423Z" transform="translate(-41799 -9078.582)" 
        fill={color} /></g>
      </svg>
      {/* <StaticImage
        className="absolute bottom-0 z-20 h-auto w-full sm:hidden"
        src="../images/intro/intro-wave.svg"
        alt="波"
      /> */}
      <svg
        className="absolute bottom-0 z-20 left-0 right-0 hidden sm:block lg:hidden"
        xmlns="http://www.w3.org/2000/svg" 
        // width="978.225" 
        // height="47.507" 
        viewBox="0 0 978.225 47.507"
      >
        <path d="M978.225,20.3V47.507H0V20.082C48.913,20.082,48.913,0,97.826,0s48.913,20.082,97.827,20.082S244.563,0,293.474,0s48.909,20.082,97.818,20.082S440.2,0,489.112,0s48.91,20.082,97.82,20.082S635.842,0,684.751,0s48.911,20.082,97.821,20.082S831.486,0,880.4,0s48.912,20.082,97.826,20.082Z" transform="translate(0)" 
        fill={color} />
      </svg>
      {/* <StaticImage
        className="absolute bottom-0 z-20 left-0 right-0 hidden sm:block lg:hidden"
        src="../images/intro/intro-tablet-wave.svg"
        alt="波"
      /> */}
      <svg
        className="absolute bottom-0 z-20 left-0 right-0 hidden lg:block xl:hidden"
        xmlns="http://www.w3.org/2000/svg" 
        // width="1366"
        // height="47.507" 
        viewBox="0 0 1366 47.507"
      >
        <g transform="translate(0 -1483.493)"><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-22225 -3903.508)" 
        fill={color} /></g>
      </svg>
      {/* <StaticImage
        className="absolute bottom-0 z-20 left-0 right-0 hidden lg:block xl:hidden"
        src="../images/intro/intro-pc-wave.svg"
        alt="波"
      /> */}
      <svg 
        className="absolute bottom-0 z-20 left-0 right-0 hidden xl:block"
        xmlns="http://www.w3.org/2000/svg" 
        // width="2732" 
        // height="47.507" 
        viewBox="0 0 2732 47.507"
      >
        <g transform="translate(24900 6539.033)"><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-47125 -11926.034)" 
        fill={color} /><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-45759 -11926.034)" 
        fill={color} /></g>
      </svg>
      {/* <StaticImage
        className="absolute bottom-0 z-20 left-0 right-0 hidden xl:block"
        src="../images/intro/intro-wide-wave.svg"
        alt="波"
      /> */}
    </>
  )
}

export default Wave
