"use client"

import Headline from '@/components/Headline'
import Loader from '@/components/Loader'
import ReserveFormJs from '@/components/ReserveFormJs'
import SectionInnerBox from '@/components/SectionInnerBox'
import Star from '@/components/Star'
import { partyList } from '@/const/nav'
import useGetSlug from '@/hooks/useGetSlug'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Navigation } from '@/types'
import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'


function EventPage() {
    const api = "/api/get-event.php"
    const wpPath: Navigation = partyList
    const [wpTitle, setWpTitle] = useState("")
    const [wpContent, setwpContent] = useState("")
    const [wpStartDate, setWpStartDate] = useState("")
    const [wpEndDate, setWpEndDate] = useState("")
    const [wpStartTime, setWpStartTime] = useState("")
    const [wpEndTime, setWpEndTime] = useState("")
    const [wpLocationName, setWpLocationName] = useState("")
    const [wpLocationAdrdess, setWpLocationAddress] = useState("")
    const [wpLocationLink, setWpLocationLink] = useState("")
    const [wpEventId, setWpEventId] = useState<number>()
    const [isFavorite, setIsFavorite] = useState<number>()

    const [id, token] = useLocalStorage()

    const getEventData = () => {
        axios.post(api, { "eventSlug": wpEventSlug }).then((res) => {
            setWpTitle(res.data.title)
            setwpContent(res.data.content)
            setWpLocationName(res.data.locatioName)
            setWpLocationAddress(res.data.locationAddress)
            setWpLocationLink(res.data.locationLink)
            setWpStartDate(res.data.startDate)
            setWpEndDate(res.data.endDate)
            setWpStartTime(res.data.startTime)
            setWpEndTime(res.data.endTime)
            setWpEventId(res.data.eventId)
        })
    }

    const handleFavoriteRegister = () => {
        axios.post("/api/favorite-handle.php", { "id": id, "token": token, "eventId": wpEventId }).then((res) => {
            setIsFavorite(res.data.isFavorite)
        })
    }

    const wpEventSlug = useGetSlug()

    useEffect(() => {
        wpEventSlug !== "" ? getEventData() : null
    }, [wpEventSlug])

    useLayoutEffect(() => {
        if (wpEventId && id && token) {
            axios.post("/api/history-register.php", { "id": id, "token": token, "eventId": wpEventId })

            axios.post("/api/get-favorite-state.php", { "id": id, "token": token, "eventId": wpEventId }).then((res) => {
                setIsFavorite(res.data.isFavorite)
            })
        }
    }, [wpEventId])

    return (
        <div>
            <Headline img='/images/party/image.jpg' title='イベント' titleEn='EVENT' breadcrumbs={[wpPath, { title: wpTitle, link: "/events/" + wpEventSlug }]} />
            <SectionInnerBox className='max-w-[920px]'>
                {wpEventId ?
                    <div className='w-[92%] mx-auto'>
                        {isFavorite !== undefined ? <Star className='ml-auto mr-2' onClick={handleFavoriteRegister} initState={isFavorite} /> : null}
                        <h1 className='text-2xl sm:text-3xl font-semibold'>{wpTitle}</h1>
                        <div className='my-5'>
                            <h2 className='text-lg sm:text-xl font-semibold'>日時</h2>
                            <div className='my-2 text-sm'>
                                <p>{wpStartDate + "〜" + wpEndDate}</p>
                                <p>{wpStartTime + "〜" + wpEndTime}</p>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <h2 className='text-lg sm:text-xl font-semibold'>開催場所</h2>
                            <div className='my-2 text-sm'>
                                <p>
                                    <a href={"/location/" + wpLocationLink}>{wpLocationName}</a>
                                </p>
                                <p>{wpLocationAdrdess}</p>
                            </div>
                        </div>

                        <div className='my-14' dangerouslySetInnerHTML={{ __html: wpContent }}></div>

                        {id && token ?
                            <a className='bg-gradient-to-r from-[#fb5758] to-[#fc906e] rounded-md 
                        text-[white] text-xl font-semibold px-8 py-3 block w-max mx-auto'
                                href={"https://deakon.jp/wordpress/reserve?id=" + wpEventId + "&t=" + token}>
                                <p>ご予約はこちら</p>
                            </a> : <a className='bg-gradient-to-r from-[#fb5758] to-[#fc906e] rounded-md 
                        text-[white] text-sm sm:text-base font-semibold px-8 py-3 block w-max mx-auto'
                                href={"https://deakon.jp/login.html"}>
                                <p>予約を行うにはログインしてください</p>
                            </a> }
                    </div> : <Loader className='h-80' />
                }
            </SectionInnerBox >
        </div >
    )
}

export default EventPage