"use client"

import { Login } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function IdNotification() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Login>()
    const [response, setResponse] = useState<{ message: string, state: number }>()

    const rules = {
        required: "*メールアドレスを入力してください",
    }

    const confirmMailRules = {
        validate: (value: string) => {
            return (
                value === getValues("mail") || "*メールアドレスが一致しません"
            )
        }
    }

    const onSubmit = (data: Pick<Login, "mail">) => {

        axios.post("/api/id-notification.php", data).then((res) => {

            setResponse(res.data)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid place-items-center'>
            <ul className='[&_input]:border-red-300 [&_input]:border-2 [&_input]:rounded-md [&_input]:outline-red-600'>
                <li className='w-[185px] mx-auto'>
                    <p>メールアドレス</p>
                    <input className='' type='email' {...register('mail', rules)} />
                </li>
                {errors.mail && <p className='text-sm text-red-600'>{errors.mail.message}</p>}
                <li>
                    <p>確認用メールアドレス</p>
                    <input className='' type='email' {...register('confirmMail', { ...rules, ...confirmMailRules })} />
                </li>
                {errors.confirmMail && <p className='text-sm text-red-600'>{errors.confirmMail.message}</p>}
            </ul>
            <button className='bg-red-400 rounded-md px-4 py-2 text-white block w-32 mt-6 mx-auto flex items-center justify-center hover:opacity-80' type='submit'>
                <img className='w-6 mr-2' src={"/images/common/login.png"} alt="" />
                <p>送信</p>
            </button>
            {response ? <p className={response.state === 1 ? "text-green-500 mt-3 -mb-3 text-sm text-center"
                : "text-red-500" + ' mt-3 -mb-3 text-sm text-center'}>{response.message}</p> : null}
        </form>
    )
}

export default IdNotification