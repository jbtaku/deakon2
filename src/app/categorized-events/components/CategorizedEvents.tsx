"use client"

import Headline from '@/components/Headline'
import Loader from '@/components/Loader'
import PartyCard from '@/components/PartyCard'
import SectionInnerBox from '@/components/SectionInnerBox'
import useGetPartyCardRequirements from '@/hooks/useGetPartyCardRequirements'
import { EventRequirements } from '@/types'
import React, { useEffect, useState } from 'react'

function CategorizedEvents() {
    const allEvents = useGetPartyCardRequirements()
    const [events, setEvents] = useState<EventRequirements[]>()
    const [cat, setCat] = useState<string | null>()
    const [title, setTitle] = useState<string | undefined>()

    useEffect(() => {
        const url = window.location.href
        const urlObj = new URL(url)
        setCat(urlObj.searchParams.get("cat"))
    }, [])

    useEffect(() => {
        if (allEvents && allEvents?.length !== 0 && cat) {
            const tmpEvents = allEvents.filter((item) => {
                return item.categorySlugs.some(elem => {
                    return elem === cat
                })
            })
            setEvents(tmpEvents)

            const tmpTitleSlug = allEvents[0].categoryTitleSlug.find((item) => {
                return item.categorySlug === cat
            })
            setTitle(tmpTitleSlug?.categoryTitle)
        }
    }, [allEvents, cat])

    return (
        <div>
            <Headline img='/images/party/image.jpg' title='パーティー一覧' titleEn='PARTY LIST' breadcrumbs={[{ title: title as string, link: "categorized-events.html?cat=" + cat }]} />
            <SectionInnerBox className='max-w-[900px]'>
                {events ? <div>
                    <h1 className='text-2xl sm:text-3xl font-semibold mb-12'>{title}</h1>
                    <ul className='mx-auto grid gap-y-4 sm:gap-y-8 sm:grid-cols-2 2md:grid-cols-3'>
                        {events?.map((item) => {
                            return (
                                <li key={item.title}>
                                    <PartyCard {...item} />
                                </li>
                            )
                        })}
                    </ul>
                </div> : <Loader />}
            </SectionInnerBox>
        </div>
    )
}

export default CategorizedEvents