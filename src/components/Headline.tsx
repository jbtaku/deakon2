import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Navigation } from '@/types'

type Props = { img: string, title: string, titleEn: string, breadcrumbs: Navigation[] }

function Headline({ img, title, titleEn, breadcrumbs }: Props) {
    return (
        <div className='mb-12'>
            <div className='relative'>
                <img src={img} alt="見出し" />
                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center'>
                    <h1 className='text-white font-bold text-xl'>{title}</h1>
                    <h2 className='text-[#fb5758] font-medium'>{titleEn}</h2>
                </div>
            </div>
            <Breadcrumbs navItems={breadcrumbs} />
        </div>
    )
}

export default Headline