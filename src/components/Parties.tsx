"use client"

import { Category, CategoryTitleSlug, ClassName, Event2 } from '@/types'
import PartyCard from './PartyCard'
import useGetEvents from '@/hooks/useGetEvents'
import useGetCategories from '@/hooks/useGetCategories'
import { useEffect, useState } from 'react'
import useGetTickets from '@/hooks/useGetTickets'
import useGetPartyCardRequirements from '@/hooks/useGetPartyCardRequirements'
import Loader from './Loader'

type Props = ClassName & {startDate: string}

function Parties({ className, startDate }: Props) {
    const allEvents = useGetPartyCardRequirements()
    const events = allEvents?.filter((item)=>{
        return item.startDate >= startDate
    })

    return (
        allEvents ?
            <ul className={className + ' mx-auto grid gap-y-4 sm:gap-y-8 sm:grid-cols-2 2md:grid-cols-3 mt-10 mb-6'}>
                {events?.map((item) => {
                    return (
                        <li key={item.title}>
                            <PartyCard {...item} />
                        </li>
                    )
                })}
            </ul > : <Loader />
    )
}

export default Parties