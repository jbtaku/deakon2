"use client"

import React from 'react'
import { contact, login, myPage, navigationBasic, navigationPolicy, navigationServices } from '@/const/nav'
import InfoBox from './InfoBox'
import useLocalStorage from '@/hooks/useLocalStorage'

function Footer() {
    const navigation = [...navigationServices, ...navigationBasic, ...navigationPolicy]
    const [id, token] = useLocalStorage()

    return (
        <footer className='mt-14'>
            <div className='bg-gradient-to-r from-[#fb5758] to-[#fc906e] py-6 px-4'>
                <div className='max-w-[1200px] w-[96%] mx-auto'>
                    <div className='md:flex'>
                        <h1 className='flex items-center min-w-[240px] w-[35%] mr-auto hover:scale-105'>
                            <a href="/"><img src="/images/common/deakon_logo_w.png" alt="ロゴ" /></a>
                        </h1>
                        <div className='grid gap-x-2 xs:grid-cols-2 justify-center items-center md:justify-items-end'>
                            <InfoBox img='/images/common/contact.png' {...contact}
                                className='my-5 w-full md:w-44 md:px-2 bg-white rounded-md text-[#fb5758] hover:scale-105 !w-[175px] sm:!px-3 ' />
                            <InfoBox img='/images/common/login_2.png' {...token ? {...myPage}:{...login}}
                                className='bg-white rounded-md text-[#fb5758] hover:scale-105 !w-[175px] sm:!px-3' />
                        </div>
                    </div>
                    <nav className='mx-atuo'>
                        <ul className='grid xs:grid-cols-2 md:flex md:flex-wrap justify-center items-center text-white mt-6 xs:mt-0'>
                            {navigation.map((item) => {
                                return (
                                    <li key={item.title} className='mx-2 my-1 hover:text-gray-700'>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='bg-black py-1'>
                <p className='text-gray-200 text-[13px] w-max mx-auto'>2021 - 2023 株式会社ラブチャレンジャーAll rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer