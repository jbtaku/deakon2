import { ClassName, NewsType } from '@/types'
import React from 'react'

type Props = NewsType

function NewsCard({ date, title, slug }: Props) {
    const tmp = date.split(" ")
    const tmp2 = tmp[0].split("-")
    const dateJp = tmp2[0] + "年" + tmp2[1] + "月" + tmp2[2] + "日"
    return (
        <a href={"/wordpress/" + slug}>
            <div className='group flex bg-white rounded-md p-4 hover:bg-gradient-to-r from-[#fb5758] to-[#fc906e] border-[2px] border-gray-300'>
                <p className='text-red-500 group-hover:text-white'>{dateJp}</p>
                <p className='ml-4 truncate'>{title}</p>
                <img className='ml-auto w-2' src="/images/common/arrow_1.svg" alt="矢印" />
            </div>
        </a>

    )
}

export default NewsCard