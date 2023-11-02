import { Children, ClassName } from '@/types'
import React from 'react'

type Props = { title: string, titleEn: string } & ClassName & Children

function Section({ title, titleEn, className, children }: Props) {
    return (
        <section className={className + " my-14"}>
            <div className='text-center'>
                <h1 className='text-xl font-semibold mb-1'>{title}</h1>
                <h2 className='text-red-500'>{titleEn}</h2>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-7 ">
                {children}
            </div>
        </section>
    )
}

export default Section