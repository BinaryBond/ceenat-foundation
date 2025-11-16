import React from 'react'
import Image from 'next/image'

interface cardProps{
    img : string,
alt:string,
text: string
}

export default function coreValueCard({img, alt, text}:cardProps) {
  return (
    <div className='flex-1 flex gap-4 items-center'>
        <Image className='cvCard' src={img} alt={alt} width={100} height={100} /> 
        <p className='text-headingSmall font-bold text-gray-10'>{text}</p>
        
    </div>
  )
}
