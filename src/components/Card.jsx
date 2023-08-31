import React from 'react'

const Card = ({title, imgurl, text, href, primaryColor, accentColor, extraStyle}) => {

  return (
    <div className={`max-w-400 max-h-600 rounded-xl border border-transparent hover:border-gray-400 transition duration-150 bg-slate-800 bg-opacity-60 backdrop-blur-lg ${extraStyle}`}>
      <div>
        <h1 className='text-2xl text-gray-300 p-2'>{title}</h1>
        <p className='px-2 pb-2 break-normal text-gray-400'>{text}</p>
      </div>
    </div>
  )
}

export default Card