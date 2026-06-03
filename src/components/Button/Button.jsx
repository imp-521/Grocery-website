import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-linear-to-b from-orange-400 to-orange-500 text-lg text-white rounded-lg cursor-pointer py-2 px-6 hover:scale-105 hover:to-orange-600 transform-all duration-300 sm:px-8 sm:py-3 lg:px-10 lg:py-3 lg:text-lg'>{props.content}</button>
    </div>
  )
}

export default Button