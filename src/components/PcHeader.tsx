"use client"

import { login, navigationBasic, navigationServices, myPage } from '@/const/nav'
import { ClassName } from '@/types'
import React from 'react'
import InfoBox from './InfoBox'
import useLocalStorage from '@/hooks/useLocalStorage'

type Props = ClassName

function PcHeader({ className }: Props) {
    const [id, token] = useLocalStorage()

    return (
        <div className={className + ' hidden lg:block'}>
            <nav className='bg-gray-900 text-gray-200 text-[12px] flex px-3 py-1 xl:px-7'>
                <h1>日本最大級の婚活パーティー・街コン・出会いイベント情報サイト「deakon（デアコン）」</h1>
                <ul className='flex ml-auto'>
                    {navigationBasic.map((item) => {
                        return (
                            <li key={item.title} className='mx-2'>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <nav className='absolute top-10 right-5 xl:right-8'>
                <ul className='flex items-center text-[11px]'>
                    {navigationServices.map((item) => {
                        return (
                            <li key={item.title} className='mx-1'>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                    <li className='ml-2'>
                        <InfoBox img='/images/common/login.png' {...token ? {...myPage }:{...login}}
                            className='bg-gradient-to-r from-[#fb5758] to-[#fc906e] rounded-md text-[white] lg:px-4 min-w-[125px]' />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PcHeader