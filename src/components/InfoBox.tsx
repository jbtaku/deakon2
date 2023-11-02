import { ClassName } from '@/types'
import React from 'react'

type Props = {img: string, title: string, link: string} & ClassName

function InfoBox({img, title, link, className}: Props) {
    return (
        <a className={className + " block max-w-[250px] w-max h-max px-2 sm:px-8 py-2"} href={link}>
            <div className='flex items-center justify-center'>
                <img className='w-8 mr-2' src={img} alt="ログイン" />
                <p>{title}</p>
            </div>
        </a>
      )
}

export default InfoBox