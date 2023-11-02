import React from 'react'
import { Faq } from '../faq'
import Box from '@/components/Box'
import OpenText from '@/components/OpenText'

type Props = Faq

function FaqBox({ title, faq }: Props) {
    const qaStyle = "rounded-2xl text-center mb-2 w-[18%] h-8"

    return (
        <Box title={title} className='xs:mx-4 2xs:mx-8 sm:mx-12 md:mx-14'>
            <ul className=''>
                {faq.map((item) => {
                    return (
                        <li key={item.question} className='my-8 duration-1000'>
                            <div className='my-3'>
                                <p className={qaStyle + ' border-2 border-red-400 bg-white  px-[10px] py-[2px] text-red-400'}>Q.</p>
                                <p>{item.question}</p>
                            </div>
                            <OpenText buttonContent='A.' textContent={item.answer} buttonClass={qaStyle + ' bg-red-400 px-3 py-1 text-white'}
                            textClass='[&_ul]:list-disc [&_li]:ml-5 [&_li]:my-4 [&_a]:text-blue-400' dangerous={true} />
                        </li>
                    )
                })}
            </ul>
        </Box>
    )
}

export default FaqBox