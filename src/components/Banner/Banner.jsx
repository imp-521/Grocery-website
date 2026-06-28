import React from 'react'
import bgImage from '../../assets/fruits-banner.jpg'
const Banner = ({title}) => {
  return (
    <div className='w-full h-50 lg:h-90 bg-zinc-500 mt-15 flex items-center justify-center text-zinc-800 bg-cover bg-center relative' style={{backgroundImage:`url(${bgImage})`}}>
        <h2 className='px-3 py-2 lg:px-6 lg:py-4 bg-white rounded-lg font-bold text-2xl lg:text-5xl z-10'>{title}</h2>
        <div className='absolute w-full h-full bg-black/50'></div>
    </div>
  )
}

export default Banner