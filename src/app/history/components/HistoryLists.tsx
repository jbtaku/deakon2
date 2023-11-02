"use client"

import Headline from '@/components/Headline'
import Loader from '@/components/Loader'
import PartyCard from '@/components/PartyCard'
import SectionInnerBox from '@/components/SectionInnerBox'
import { history } from '@/const/nav'
import useGetPartyCardRequirements from '@/hooks/useGetPartyCardRequirements'
import useLocalStorage from '@/hooks/useLocalStorage'
import { EventRequirements } from '@/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HistoryLists() {
    const allEvents = useGetPartyCardRequirements()
    const [events, setEvents] = useState<EventRequirements[]>()
    const [id, token] = useLocalStorage()

    useEffect(() => {
        if (allEvents && allEvents?.length !== 0 && id && token) {
            axios.post("/api/get-histories.php", { id: id, token: token }).then((res) => {
                const histories: { eventId: number, updateTime: string }[] = res.data
                
                if (histories) {
                    histories.sort((a, b) => {
                        return a.updateTime > b.updateTime ? -1 : 1
                    })

                    const tmpEvents = histories.map((item) => {
                        return allEvents.find(elem => elem.eventId === item.eventId)
                    }).filter((item): item is EventRequirements => {
                        return item !== undefined
                    })

                    setEvents(tmpEvents)
                }

            })
        }
    }, [allEvents, id, token])

    return (
        <div>
            <Headline img='/images/party/image.jpg' title='閲覧履歴' titleEn='HISTORY' breadcrumbs={[history]} />
            <SectionInnerBox className='max-w-[900px]'>
                {events ?
                    <ul className='mx-auto grid gap-y-4 sm:gap-y-8 sm:grid-cols-2 2md:grid-cols-3'>
                        {events?.map((item) => {
                            return (
                                <li key={item.title}>
                                    <PartyCard {...item} />
                                </li>
                            )
                        })}
                    </ul> : id ? <Loader /> : null}
            </SectionInnerBox>
        </div>
    )
}

export default HistoryLists