import React from 'react'

const Heading = ({first,second,third}) => {
  return (
    <div>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl md:mt-10">
            <span className="border-b-2 border-orange-500 pb-1">{first} </span>{second} <span className="text-orange-500">{third}</span>
        </h2>
    </div>
  )
}

export default Heading