"use client"

import Loader from '@/components/Loader'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Login } from '@/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function UpdateUserInfo() {
    type UserInfo = Pick<Login, "name" | "zip" | "address" | "prefecture" | "city" | "phone" | "mail">
    const [userInfo, setUserInfo] = useState<UserInfo>()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Login>()
    const [response, setResponse] = useState<{ message: string, state: number }>()
    const [id, token] = useLocalStorage()

    useEffect(() => {
        if (id && token) {
            axios.post("/api/user-info.php", { id, token }).then((res) => {
                setUserInfo(res.data)
            })
        }
    }, [id, token])

    useEffect(() => {
        if (userInfo) {
            setValue("name", userInfo?.name)
            setValue("zip", userInfo?.zip)
            setValue("address", userInfo?.address)
            setValue("prefecture", userInfo?.prefecture)
            setValue("city", userInfo?.city)
            setValue("phone", userInfo?.phone)
            setValue("mail", userInfo?.mail)
        }
    }, [userInfo])

    const requiredRules = {
        required: "*必須項目です",
    }

    const onSubmit = (data: Login) => {

        //ログイン or 登録時に実行
        axios.post("/api/update-user-info.php", { ...data, id, token }).then((res) => {
            setResponse(res.data)
        })
    }

    return (
        userInfo ?
            <form onSubmit={handleSubmit(onSubmit)} className='grid place-items-center'>
                <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600 [&>li]:mb-2'>
                    <li>
                        <p>お名前</p>
                        <input className='' type='text' {...register('name', requiredRules)} />
                        {errors.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
                    </li>
                    <li>
                        <p>郵便番号</p>
                        <input className='text' type='' {...register('zip', requiredRules)} />
                        {errors.zip && <p className='text-sm text-red-600'>{errors.zip.message}</p>}
                    </li>
                    <li>
                        <p>住所</p>
                        <input className='text' type='' {...register('address', requiredRules)} />
                        {errors.address && <p className='text-sm text-red-600'>{errors.address.message}</p>}
                    </li>
                    <li>
                        <p>都道府県</p>
                        <input className='' type='text' {...register('prefecture', requiredRules)} />
                        {errors.prefecture && <p className='text-sm text-red-600'>{errors.prefecture.message}</p>}
                    </li>
                    <li>
                        <p>市町村</p>
                        <input className='' type='text' {...register('city', requiredRules)} />
                        {errors.city && <p className='text-sm text-red-600'>{errors.city.message}</p>}
                    </li>
                    <li>
                        <p>電話番号</p>
                        <input className='' type='tel' {...register('phone', requiredRules)} />
                        {errors.phone && <p className='text-sm text-red-600'>{errors.phone.message}</p>}
                    </li>
                    <li>
                        <p>メールアドレス</p>
                        <input className='' type='email' {...register('mail', requiredRules)} />
                        {errors.mail && <p className='text-sm text-red-600'>{errors.mail.message}</p>}
                    </li>

                </ul>
                <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-[210px] mt-6 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                    <img className='w-6 mr-2' src={"/images/common/login.png"} alt="" />
                    <p>プロフィールを更新</p>
                </button>
                {response ? <p className={response.state === 1 ? "text-green-500 mt-3 -mb-3 text-sm text-center"
                    : "text-red-500" + ' mt-3 -mb-3 text-sm text-center'}>{response.message}</p> : null}
            </form> : <Loader />
    )
}


export default UpdateUserInfo