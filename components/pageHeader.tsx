import React from 'react'

interface PageHeaderProps {
    title: string;
    quote: string;
}

export default function pageHeader({title, quote}: PageHeaderProps) {
  return (
    <div className='flex text-center flex-col gap-2 '>
        <h3 className='text-primary-default text-headingSmall md:text-headingMedium lg:text-headingExtraLarge font-bold'>{title}</h3>
        <h1 className=' text-black text-displaySmall md:text-displayMedium lg:text-displayLarge font-bold'>{quote}</h1>
    </div>
  )
}
