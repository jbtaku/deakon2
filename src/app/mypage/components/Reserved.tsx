"use client"


import useGetReserved from '@/hooks/useGetReserved'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Reserved } from '@/types'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


function Reserved() {
    const getAllReserve = useGetReserved
    const allReserved = getAllReserve()
    const [id, token] = useLocalStorage()
    const [reserved, setReserved] = useState<Reserved[]>()
    const [isOpne, setIsOpen] = useState(false)
    const [bookingId, setBookingId] = useState<number>()
    const cancelArea = useRef<HTMLDivElement>(null);
    const [confirm, setConfirm] = useState<number>()

    const items = ["イベント", "席数", "状態", "キャンセル"]
    const status = ["保留中", "承認済み", "取り消し済み", "キャンセル済み", "オンライン決済待ち"]

    const openConfirm = (bookingId: number) => {
        setIsOpen(true)
        setBookingId(bookingId)
    }

    useEffect(() => {
        if (isOpne) {
            scrollToCancelArea()
        }
    }, [isOpne])

    const scrollToCancelArea = () => {
        cancelArea.current?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })
    }

    const cancel = () => {
        axios.post("/api/cancel-booking.php", { bookingId }).then((res) => {
            setConfirm(res.data.confirm)
        })
    }

    const cancelCancle = () => {
        setBookingId(undefined)
        setIsOpen(false)
    }

    useEffect(() => {
        if (confirm == 1) {
            axios.post("/api/canceled-mail.php", { bookingId }).then(() => {
                window.location.href = "https://deakon.jp/mypage.html"
            })
        } else if (confirm == 0) {
            window.location.href == "/cancel-error.html"
        }
    }, [confirm])

    useEffect(() => {
        if (id && allReserved && allReserved?.length > 0) {
            const tmpReserved = allReserved.filter((item) => {
                return item.id === id
            })
            setReserved(tmpReserved)
        }
    }, [id, allReserved])

    return (
        <div className='relative max-w-[1020px]'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>イベント予約状況</h1>
            <ul className='my-10 text-[10px] 2xs:text-[12px] sm:text-base'>
                <li className='grid grid-cols-10 gap-1 mb-2 xs:text-base sm:text-xl'>
                    {items.map((item) => {
                        return <p className='bg-green-100 [&:nth-child(1)]:col-span-5
                        [&:nth-child(2)]:col-span-1 [&:nth-child(3)]:col-span-2 
                        [&:nth-child(4)]:col-span-2 p-1 font-semibold' key={item}>{item}</p>
                    })}
                </li>
                {reserved?.map((item) => {
                    return (
                        <li key={item.slug} className='[&_p]:bg-gray-100
                            [&_p]:p-1  grid grid-cols-10 gap-1 my-1'>
                            <a className='col-span-5' href={"/wordpress/events/" + item.slug}>
                                <p className='h-full'>{item.title}</p>
                            </a>
                            <p className='col-span-1 text-center'>{item.seat}</p>
                            <p className='col-span-2 font-semibold text-[9px] 2xs:text-[12px] sm:text-base'>
                                {status[item.status]}
                            </p>
                            {item.status == 2 || 3 ? <p className='col-span-2'></p> :
                                <button className='col-span-2 bg-blue-200 font-semibold text-[9px] 2xs:text-[12px] sm:text-base'
                                    onClick={() => { openConfirm(item.bookingId)}}>
                                    キャンセル
                                </button>
                            }
                        </li>
                    )
                })
                }
            </ul>
            <div ref={cancelArea} className='-mt-40 pt-40'></div>
            <div aria-hidden={isOpne} className='hidden aria-hidden:my-8 aria-hidden:flex bg-gray-50
            border-2 border-red-300 py-5 px-4 rounded-md flex-col place-items-center min-w-[340px] w-[90%] max-w-[450px] mx-auto'>
                <div>
                    <p className='text-lg'>予約のキャンセルを確定しますか？</p>
                    <div className='flex'>
                        <button className='bg-red-500 text-white font-semibold mt-4 py-2 px-4 rounded-3xl mr-3'
                            onClick={cancel}>
                            キャンセルを確定する</button>
                        <button className='bg-green-500 text-white font-semibold mt-4 py-2 px-4 rounded-3xl'
                            onClick={cancelCancle}>取り消す</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserved