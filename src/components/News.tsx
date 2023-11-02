"use client"

import { ClassName } from '@/types'
import React from 'react'
import NewsCard from './NewsCard'
import SectionInnerBox from './SectionInnerBox'
import useGetInformation from '@/hooks/useGetInformation'
import Loader from './Loader'

type Props = ClassName

function News({ className }: Props) {
    const news = useGetInformation()

    return (
        <SectionInnerBox>
            {news?.length === 0 ? <p>現在お知らせはありません</p> :
                news ?
                    <ul className={className}>
                        {news?.map((item) => {
                            return (
                                <li key={item.title} className='m-4'>
                                    <NewsCard {...item} />
                                </li>
                            )
                        })}
                    </ul> : <Loader />}
        </SectionInnerBox>
    )
}

export default News