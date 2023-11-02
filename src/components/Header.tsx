"use client"

import { login, navigationBasic, navigationServices, myPage } from '@/const/nav'
import React, { useEffect, useLayoutEffect } from 'react'
import InfoBox from './InfoBox'
import PcHeader from './PcHeader'
import MobaileHeader from './MobaileHeader'
import useLocalStorage from '@/hooks/useLocalStorage'
import axios from 'axios'

function Header() {
    const navitems = [...navigationServices, ...navigationBasic]
    const [id, token] = useLocalStorage()
    useLayoutEffect(() => {
        if (id && token) {
            axios.post("/api/auth2.php", { id: id, token: token }).then((res) => {

                if (id != res.data.id || res.data.token != token) {
                    localStorage.removeItem("id")
                    localStorage.removeItem("token")
                }
            })
        }
    }, [id, token])

    return (
        <header className='fixed z-[999] top-0 left-0 w-screen bg-white bg-opacity-90'>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1725681017531911"
                crossOrigin="anonymous"></script>
            <div>
                <PcHeader />
                <MobaileHeader>
                    <nav className='text-xl font-medium'>
                        <ul className=''>
                            {navitems.map((item) => {
                                return (
                                    <li key={item.title} className='my-2'>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })}
                            <li className='mt-8'>
                                <InfoBox img='/images/common/login_2.png' {...token ? { ...myPage } : { ...login }}
                                    className='bg-white rounded-md text-[#fb5758] text-base font-semibold px-4 sm:px-6 min-w-[125px]' />
                            </li>
                        </ul>
                    </nav>
                </MobaileHeader>
                <div className='my-3 mx-4 xl:mx-7'>
                    <h1 className='min-w-[250px] w-[40%] max-w-[260px]'>
                        <a href="/"><img src="/images/common/deakon_logo.png" alt="ロゴ" /></a>
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header