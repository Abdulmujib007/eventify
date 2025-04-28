import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Categories({src,text} : { src: string,text:string } ) {
  return (
    <Link href={''} className='flex flex-col gap-7 w-[12rem] '>
        <Image
            src={src}
            alt='categories'
            width={170}
            height={170}
        />
        <p className='font-semibold text-xl text-center' >{text}</p>
    </Link>
  )
}

export default Categories