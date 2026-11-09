import React from 'react'

const Listitem = ({ text, className }) => {
  return (
    <div className={` text-base font-normal text-[#000000]${className}`}>
      {text}
    </div>
  )
}

export default Listitem