"use client"

import Headline from '@/components/Headline'
import Loader from '@/components/Loader'
import SectionInnerBox from '@/components/SectionInnerBox'
import useGetInformation from '@/hooks/useGetInformation'
import useGetSlug from '@/hooks/useGetSlug'
import { NewsType } from '@/types'
import React, { useEffect, useState } from 'react'

function SingleInfo() {
    const informations = useGetInformation()
    const slug = useGetSlug()
    const [information, setInformation] = useState<NewsType>()

    useEffect(() => {
        if (informations && slug) {
            const tmp = informations?.find(item => item.slug === slug)
            setInformation(tmp)
        }
    }, [informations, slug])

    return (
        <div>
            <Headline img='/images/party/image.jpg' title='お知らせ' titleEn='INFORMATION' breadcrumbs={[{ title: information?.title as string, link: "/wordpress/" + information?.slug }]} />
            <SectionInnerBox className='max-w-[920px]'>
                {information?.slug ?
                    <div className='w-[92%] mx-auto'>
                        <h1 className='text-2xl sm:text-3xl font-semibold'>{information?.title}</h1>
                        <div className='my-14' dangerouslySetInnerHTML={{ __html: information?.content as string }}></div>
                    </div> :
                    < Loader className='h-80' />
                }
            </SectionInnerBox>
        </div>
    )
}

export default SingleInfo