import { Children, ClassName } from '@/types'
import React from 'react'

type Props = { title: string } & Children & ClassName

function Box({ title, children, className }: Props) {
    return (
        <div className={className + ' my-16 mx-2'}>
            <div className='relative h-20'>
                <img className='absolute left-[50%] -translate-x-[50%] w-[375px]' src="/images/common/heart_icon.png" alt="ハートアイコン" />
                <h2 className='absolute top-[8px] left-[50%] -translate-x-[50%] text-xl font-semibold whitespace-nowrap text-red-400'>
                    {title}
                </h2>
            </div>
            {children}
        </div>
    )
}

export default Box