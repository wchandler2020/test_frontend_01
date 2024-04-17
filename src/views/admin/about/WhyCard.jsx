import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const WhyCard = ({title, description, image}) => {
  return (
    <>
    <div className=" dark:text-white group  px-10">
      <div className="overflow-hidden rounded-lg" style={{width: '100%'}}>
        <img
          src={image}
          alt="No image"
          className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 rounded-lg"
        />
      </div>
      <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16 rounded-lg" style={{margin: '0px auto'}}>
        <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
        <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
        <div className="flex justify-end pr-4 text-gray-500">
          <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
        </div>
      </div>
    </div>
  </>
  )
}

export default WhyCard