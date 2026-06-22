import React from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Button from '../Button/Button';


const Cards = ({image, name, price}) => {
  return (
    <div className='w-full md:w-55 lg:w-65 flex min-h-70 items-center justify-center flex-col bg-zinc-100 rounded-xl gap-3'>
        <div className='flex items-center justify-between w-full flex-1 px-3 py-2'>
           <span className='text-2xl lg:text-3xl text-red-600 cursor-pointer'><IoHeartSharp/></span>
           <button className='bg-linear-to-b from-orange-400 to-orange-500 px-3 py-2 lg:px-4 lg:py-3 rounded-lg text-white cursor-pointer'><FaPlus /></button>
        </div>
        <div className='flex flex-3 items-center justify-center w-full'>
           <img src={image} className='w-35 h-30 md:w-40 md:h-35 lg:w-45 lg:h-40 object-contain' />
        </div>
        <div className='flex flex-3 items-center justify-center gap-3 flex-col w-full pb-3'>
           <h3 className='font-bold text-xl'>{name}</h3>
           <span dir='rtl' className='text-xl'>{price}</span>
           <Button content='خرید حالا'/>
        </div>
    </div>
  )
}

export default Cards