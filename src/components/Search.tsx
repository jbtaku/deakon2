"use client"

import { PREFECTURE_LIST } from '@/const/prefecture'
import { Category, CategoryTitleSlug, ClassName, Event2, EventRequirements, FormType, Search, SearchedData, Select } from '@/types'
import SectionInnerBox from './SectionInnerBox'
import Form from './Form'
import { SEARCH_FOEM, SEND_SEARCH_ITEMS } from '@/const/form'
import useGetCategories from '@/hooks/useGetCategories'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios'
import PartyCard from './PartyCard'
import Loader from './Loader'
import useGetPartyCardRequirements from '@/hooks/useGetPartyCardRequirements'
import { tmpSearchItems } from '@/const/search'

type Props = ClassName

function Search({ className }: Props) {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Search>()
    const allEvents = useGetPartyCardRequirements()

    const [events, setEvents] = useState<EventRequirements[] | undefined>()
    const [errorMessage, setErrorMessage] = useState("")
    const [selectItems, setSelectItems] = useState<{ name: string, select: Select[] | undefined }[]>()
    const gotCategories = useGetCategories()


    const onSubmit = (data: Search) => {
        axios.post("/api/search.php", data).then((res: AxiosResponse<SearchedData[] | { message: string }>) => {

            //response が例外として帰ってこないので取り合えず代替のロジックで凌ぐここから
            if (Array.isArray(res.data)) {
                const searchedData = res.data
                const tmpEvents = allEvents?.filter((item) => {
                    return (
                        searchedData?.find((elem) => {
                            return elem.eventId === item.eventId
                        })
                    )
                })
                setEvents(tmpEvents)
                setErrorMessage("")
            }
            else {
                setErrorMessage(res.data.message)
                setEvents(undefined)
            }

        })
    }

    useEffect(() => {
        if (gotCategories) {
            const prefectures = tmpSearchItems.find((item) => {
                return (item.name === "prefecture")
            })

            let categories = tmpSearchItems.find((item) => {
                return (item.name === "categorySlug")
            })
            const tmp: Select[] = gotCategories?.map((item) => {
                return { item: item.title, value: item.slug }
            })
            categories?.select?.push(...tmp)

            setSelectItems([{ name: "prefecture", select: prefectures?.select },
            { name: "categories", select: categories?.select }])
        }

    }, [gotCategories])


    return (
        <SectionInnerBox>
            {selectItems ?
                <div>
                    <div className='flex justify-center items-center'>
                        <img className='hidden md:block w-[32%] mr-6' src="/images/common/japan.png" alt="日本地図" />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600 [&>li]:mb-2'>
                                <li>
                                    <p>フリーワード検索</p>
                                    <input className='' type='text' placeholder='フリーワードを入力' {...register('freeWord')} />
                                </li>
                                <li>
                                    <p>開始日</p>
                                    <input type="date" {...register("startDate")} />
                                </li>
                                <li>
                                    <p>終了日</p>
                                    <input type="date" {...register("endDate")} />
                                </li>
                                <li>
                                    <p>カテゴリー</p>
                                    <select {...register("categorySlug")}
                                        className='text-black border-red-300 border-2 rounded-md outline-red-600'>
                                        {selectItems?.map((items) => {
                                            if (items?.name === "categories") {
                                                return (
                                                    items?.select?.map((item) => {
                                                        return (
                                                            <option key={item.value} className='' value={item.value}>{item.item}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                </li>
                                <li>
                                    <p>都道府県</p>
                                    <select {...register("prefecture")}
                                        className='text-black border-red-300 border-2 rounded-md outline-red-600'>
                                        {selectItems?.map((items) => {
                                            if (items?.name === "prefecture") {
                                                return (
                                                    items?.select?.map((item) => {
                                                        return (
                                                            <option key={item.value} className='' value={item.value}>{item.item}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                </li>
                            </ul>
                            <button className='bg-red-400 rounded-md px-5 py-2 text-white block w-32 mt-6 mb-2 flex items-center justify-center hover:opacity-80' type='submit'>
                                <img className='w-6 mr-2' src={"/images/common/search.png"} alt="" />
                                <p>検索</p>
                            </button>
                            <p className='text-red-600 min-w-[305px]'>{errorMessage}</p>
                        </form>
                    </div>
                    <div>
                        {events ?
                            <ul className='mx-auto grid gap-y-4 sm:gap-y-8 sm:grid-cols-2 2md:grid-cols-3 mt-10 mb-6'>
                                {events?.map((item) => {
                                    return (
                                        <li key={item.title}>
                                            <PartyCard {...item} />
                                        </li>
                                    )
                                })}
                            </ul> : null
                        }
                    </div>
                </div> : <Loader />
            }

        </SectionInnerBox>
    )
}

export default Search