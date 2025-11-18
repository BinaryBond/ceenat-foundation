import React from 'react'

interface StoryProps {
    title: string;
    section1?: string;
    section2?: string;
    section3?: string;
    section4?: string;
}

export default function story({title, section1, section2, section3, section4}: StoryProps) {
  return (
    <div className='flex-col flex gap-3 lg:gap-4'>
        <h3 className='text-[16px] md:text-xl lg:text-[22px] font-bold'>{title}</h3>
        <p className='flex text-[#4f4f4f] flex-col gap-2 lg:gap-3 text-[12px] md:text-[16px] lg:text-[18px] '>
            <span>
                {section1}
            </span>
            <span>
                {section2}
            </span>
            <span>
                {section3}
            </span>
            <span>
                {section4}
            </span>
        </p>
    </div>
  )
}
