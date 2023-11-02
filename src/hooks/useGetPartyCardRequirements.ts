import React, { useEffect, useState } from 'react'
import useGetEvents from './useGetEvents'
import useGetTickets from './useGetTickets'
import { Event, EventRequirements, Ticket3 } from '@/types'
import useGetCategoryTitleSlug from './useGetCategoryTitleSlug'


function useGetPartyCardRequirements() {
    const allEvents = useGetEvents()
    const allCategoryTitleSlug = useGetCategoryTitleSlug()
    const tickets = useGetTickets()
    const [events, setEvents] = useState<EventRequirements[]>()

    useEffect(() => {
        if (allCategoryTitleSlug.length !== 0 && tickets && allEvents) {
            let tmpArray: EventRequirements[] = []

            allEvents.map((item) => {

                const categoryTitleSlug = allCategoryTitleSlug.filter((item2)=>{
                    return (
                        item.categorySlugs.find(elem => elem === item2.categorySlug)
                    )
                })

                const tmp: EventRequirements[] = tickets.map((item2) => {
                    if (item.eventId === item2.eventId) {
                        return { ...item, ...item2, ...{ categoryTitleSlug : categoryTitleSlug} }
                    }
                }).filter((elem): elem is EventRequirements => {
                    return elem !== undefined
                })
                tmpArray.push(...tmp)
            })

            const result = tmpArray.filter((item, index, self)=>{
                return self.findIndex(elem => elem.eventId === item.eventId) === index
            })
            setEvents(result)
        }
    }, [allCategoryTitleSlug, allEvents, tickets])

    return events
}

export default useGetPartyCardRequirements