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
    <div>
        <h3 className='text-headingLarge font-bold'>{title}</h3>
        <p className='flex flex-col gap-4 text-bodyLarge '>
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
