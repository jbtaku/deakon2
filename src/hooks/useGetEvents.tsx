import { D_PARTY } from '@/const/dev'
import { Category, Event, Event2 } from '@/types'
import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import useGetCategories from './useGetCategories'

function useGetEvents() {
    const isProduct = process.env.NODE_ENV === "production"
    const [events, setEvents] = useState<Event2[] | undefined>([])

    useEffect(() => {
        if (isProduct) {
            axios.get("/api/get-event-list.php").then((res: AxiosRequestConfig<Event[]>) => {
                const tmp = res.data

                const tmpEvents = tmp?.map((item) => {
                    let tmpCategorySlugs: string[] = []
                    tmp.map((item2) => {
                        if (item.eventId === item2.eventId) {
                            tmpCategorySlugs.push(item2.categorySlug)
                        }
                    })
                    const { categorySlug, ...rest } = item
                    return { ...rest, ...{ categorySlugs: tmpCategorySlugs } }
                }).filter((elem, index, self) => {
                    return (
                        self.findIndex((elem2) => {
                            return elem.eventId === elem2.eventId
                        }) === index
                    )
                })

                setEvents(tmpEvents)
            })
        } //else setEvents(D_PARTY)
    }, [])

    return events
}

export default useGetEvents